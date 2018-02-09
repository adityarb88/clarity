/*
 * Copyright (c) 2016-2018 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */

import {
    Directive,
    ElementRef,
    EventEmitter,
    HostBinding,
    HostListener,
    Input,
    OnDestroy,
    Optional,
    Output,
    Renderer2, Self,
    ViewContainerRef
} from "@angular/core";
import {NgControl} from "@angular/forms";
import {Subscription} from "rxjs/Subscription";
import {ClrDateContainer} from "./date-container";
import {DateIOService} from "./providers/date-io.service";
import {LocaleHelperService} from "./providers/locale-helper.service";
import {DateNavigationService} from "./providers/date-navigation.service";
import {DatepickerEnabledService} from "./providers/datepicker-enabled.service";
import {WrappedFormControl} from "../common/wrapped-form-control";

@Directive({
    selector: "[clrDate]",
    host: {"[class.date-input]": "true"}
})
export class ClrDateInput extends WrappedFormControl<ClrDateContainer> implements OnDestroy {
    /**
     * Subscriptions to all the services and queries changes
     */
    private _subscriptions: Subscription[] = [];

    constructor(@Optional() private container: ClrDateContainer,
                vcr: ViewContainerRef,
                private elRef: ElementRef,
                private renderer: Renderer2,
                @Self() @Optional() private _ngControl: NgControl,
                @Optional() private _localeHelperService: LocaleHelperService,
                @Optional() private _dateIOService: DateIOService,
                @Optional() private _dateNavigationService: DateNavigationService,
                @Optional() private _datepickerEnabledService: DatepickerEnabledService) {
        super(ClrDateContainer, vcr);
    }

    ngOnInit() {
        super.ngOnInit();
        if (!this.container) {
            this.populateContainerServices();
        }
        this._dateIOService.localeHelperService = this._localeHelperService;
        this.initializeSubscriptions();
    }

    private populateContainerServices(): void {
        this._localeHelperService = this.getProviderFromContainer(LocaleHelperService);
        this._dateIOService = this.getProviderFromContainer(DateIOService);
        this._dateNavigationService = this.getProviderFromContainer(DateNavigationService);
        this._datepickerEnabledService = this.getProviderFromContainer(DatepickerEnabledService);
    }

    /**
     * Initialize DateIO Subscriptions
     */
    private initializeSubscriptions(): void {
        if (this._dateIOService) {
            this._subscriptions.push(this._dateIOService.dateStrUpdated.subscribe((dateStr) => {
                this.writeDateStr(dateStr);
                // This makes sure that ngModelChange is fired
                // TODO: Check if there is a better way to do this.
                // NOTE: Its important to use NgControl and not NgModel because
                // NgModel only works with template driven forms
                if (this._ngControl) {
                    this._ngControl.control.setValue(dateStr);
                }
            }));
            this._subscriptions.push(this._dateIOService.dateUpdated.subscribe(() => {
                this._dateUpdated.emit(this._dateIOService.date);
            }));
        }
    }

    private writeDateStr(value: string): void {
        this.renderer.setProperty(this.elRef.nativeElement, "value", value);
    }

    @HostBinding("attr.placeholder")
    get placeholderText(): string {
        return this._dateIOService.placeholderText;
    }

    @HostBinding("attr.type")
    get inputType(): string {
        return this._datepickerEnabledService.isEnabled ? "text" : "date";
    }

    @HostListener("change", ["$event.target"])
    onValueChange(target: HTMLInputElement) {
        const value: string = target.value;
        if (value) {
            this.inputDate = value.trim();
        } else {
            this.inputDate = "";
        }
    }

    set inputDate(value: string) {
        this._dateIOService.inputDate = value;
    }

    private dateToProcessLater: Date;
    private initialLoad: boolean = true;

    ngAfterContentInit() {
        //I don't know why I have to do this but after using the new HostWrapping Module I have to delay the processing of the initial
        //Input set but the user to here.
        //If I do not 2 issues occur:
        //1. the Input setter is called before ngOnInit. ngOnInit initializes the services without which the setter fails
        //2. The Renderer doesn't work before ngAfterContentInit
        //(It used to before the new HostWrapping Module for some reason).
        //I need the renderer to set the value property on the input to make sure that if the user has supplied a Date input object,
        //we reflect it with the right date on the input field using the IO service.
        //I am not sure if these are major issues or not but just noting them down here.
        if (this.initialLoad) {
            this.processDate(this.dateToProcessLater);
            this.initialLoad = false;
        }
    }

    private processDate(value: Date): void {
        if (this._dateIOService && value) {
            this._dateIOService.inputDate = this._dateIOService.toLocaleDisplayFormatString(value);
            if (this._dateIOService.date) {
                this.writeDateStr(this._dateIOService.inputDate);
            }
        }
    }

    @Input("clrDate")
    set date(value: Date) {
        if (this.initialLoad) {
            this.dateToProcessLater = value;
        } else {
            this.processDate(value);
        }
    }

    @Output("clrDateChange") _dateUpdated: EventEmitter<Date> = new EventEmitter<Date>(false);

    ngOnDestroy() {
        this._subscriptions.forEach((sub: Subscription) => sub.unsubscribe());
    }
}
