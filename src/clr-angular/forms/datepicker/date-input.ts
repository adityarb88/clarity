/*
 * Copyright (c) 2016-2018 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */

import {
    AfterViewInit,
    Directive,
    ElementRef,
    EventEmitter,
    HostBinding,
    HostListener, Inject,
    Input,
    OnDestroy,
    OnInit,
    Optional,
    Output, PLATFORM_ID,
    Renderer2,
    Self,
    ViewContainerRef
} from "@angular/core";
import {NgControl} from "@angular/forms";
import {Subscription} from "rxjs/Subscription";

import {WrappedFormControl} from "../common/wrapped-form-control";

import {ClrDateContainer} from "./date-container";
import {DateIOService} from "./providers/date-io.service";
import {DateNavigationService} from "./providers/date-navigation.service";
import {DatepickerEnabledService} from "./providers/datepicker-enabled.service";
import {isPlatformBrowser} from "@angular/common";

@Directive({selector: "[clrDate]", host: {"[class.date-input]": "true"}})
export class ClrDateInput extends WrappedFormControl<ClrDateContainer> implements OnInit, AfterViewInit, OnDestroy {
    /**
     * Subscriptions to all the services and queries changes
     */
    private _subscriptions: Subscription[] = [];

    constructor(@Optional() private container: ClrDateContainer, vcr: ViewContainerRef, private elRef: ElementRef,
                private renderer: Renderer2, @Self() @Optional() private _ngControl: NgControl,
                @Optional() private _dateIOService: DateIOService,
                @Optional() private _dateNavigationService: DateNavigationService,
                @Optional() private _datepickerEnabledService: DatepickerEnabledService,
                @Inject(PLATFORM_ID) private platformId: Object) {
        super(ClrDateContainer, vcr);
    }

    /**
     * 1. Populate services if the date container is not present.
     * 2. Initialize Subscriptions.
     * 3. Process User Input.
     */
    ngOnInit() {
        super.ngOnInit();
        if (!this.container) {
            this.populateContainerServices();
        }
        this.initializeSubscriptions();
        this.processDate(this.dateValueOnInitialLoad);
    }

    /**
     * Write the initial input set by the user on to the input field.
     */
    ngAfterViewInit() {
        // I don't know why I have to do this but after using the new HostWrapping Module I have to delay the processing
        // of the initial Input set by the user to here.  If I do not 2 issues occur:
        // 1. the Input setter is called before ngOnInit. ngOnInit initializes the services without which the setter
        // fails
        // 2. The Renderer doesn't work before ngAfterViewInit
        //(It used to before the new HostWrapping Module for some reason).
        // I need the renderer to set the value property on the input to make sure that if the user has supplied a Date
        // input object,  we reflect it with the right date on the input field using the IO service.  I am not sure if
        // these are major issues or not but just noting them down here.
        if (this._dateIOService.inputDate) {
            this.writeDateStrToInputField(this._dateIOService.inputDate);
        }
        this.initialLoad = false;
    }

    /**
     * Unsubscribes from the subscriptions.
     */
    ngOnDestroy() {
        this._subscriptions.forEach((sub: Subscription) => sub.unsubscribe());
    }

    /**
     * Populates the services from the container component.
     */
    private populateContainerServices(): void {
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
                this.writeDateStrToInputField(dateStr);
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

    /**
     * Writes the date string value to the input field
     */
    private writeDateStrToInputField(value: string): void {
        this.renderer.setProperty(this.elRef.nativeElement, "value", value);
    }

    /**
     * Sets the Input Date on the DateIOService
     */
    set inputDate(value: string) {
        this._dateIOService.inputDate = value;
    }

    /**
     * Processes a date object to check if its valid or not.
     */
    private processDate(value: Date): void {
        if (this._dateIOService && value) {
            // The date object is converted back to string because in Javascript you can create a date object
            // like this: new Date("Test"). This is a date object but it is invalid. Converting the date object
            // that the user passed helps us to verify the validity of the date object.
            this._dateIOService.inputDate = this._dateIOService.toLocaleDisplayFormatString(value);
            if (this._dateIOService.inputDate && !this.initialLoad) {
                this.writeDateStrToInputField(this._dateIOService.inputDate);
            }
        }
    }

    private initialLoad: boolean = true;
    private dateValueOnInitialLoad: Date;

    /**
     * Javascript Date object input set by the user.
     */
    @Input("clrDate")
    set date(value: Date) {
        if (this.initialLoad) {
            // Store date value passed by the user to process after the services have been initialized by
            // the ngOnInit hook.
            this.dateValueOnInitialLoad = value;
        } else {
            this.processDate(value);
        }
    }

    @Output("clrDateChange") _dateUpdated: EventEmitter<Date> = new EventEmitter<Date>(false);

    /**
     * Returns the date format for the placeholder according to which the input should be entered by the user.
     */
    @HostBinding("attr.placeholder")
    get placeholderText(): string {
        return this._dateIOService.placeholderText;
    }

    /**
     * Sets the input type to text when the datepicker is enabled. Reverts back to the native date input
     * when the datepicker is disabled. Datepicker is disabled on mobiles.
     */
    @HostBinding("attr.type")
    get inputType(): string {
        return (isPlatformBrowser(this.platformId) && this._datepickerEnabledService.isEnabled) ? "text" : "date";
    }

    /**
     * Fires this method when the user changes the input focuses out of the input field.
     */
    @HostListener("change", ["$event.target"])
    onValueChange(target: HTMLInputElement) {
        const value: string = target.value;
        if (value) {
            this.inputDate = value.trim();
        } else {
            this.inputDate = "";
        }
    }
}
