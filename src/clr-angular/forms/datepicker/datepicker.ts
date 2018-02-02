/*
 * Copyright (c) 2016-2018 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */

import {
    ComponentFactory,
    ComponentFactoryResolver,
    ComponentRef,
    Directive,
    ElementRef,
    EventEmitter,
    HostBinding,
    HostListener,
    Input,
    OnDestroy,
    Optional,
    Output,
    Renderer2,
    ViewContainerRef
} from "@angular/core";
import {NgModel} from "@angular/forms";
import {Subscription} from "rxjs/Subscription";

import {EmptyAnchor} from "../../utils/host-wrapping/empty-anchor";
import {ClrDateContainer} from "./date-container";
import {DateIOService} from "./providers/date-io.service";
import {LocaleHelperService} from "./providers/locale-helper.service";
import {DateNavigationService} from "./providers/date-navigation.service";
import {DatepickerEnabledService} from "./providers/datepicker-enabled.service";

@Directive({
    selector: "[clrDate]",
    host: {"[class.datepicker]": "true"}
})
export class ClrDatepicker implements OnDestroy {
    /**
     * Subscriptions to all the services and queries changes
     */
    private _subscriptions: Subscription[] = [];
    private compRef: ComponentRef<ClrDateContainer>;

    constructor(@Optional() private container: ClrDateContainer,
                private vcr: ViewContainerRef,
                private elRef: ElementRef,
                private renderer: Renderer2,
                private cfr: ComponentFactoryResolver,
                @Optional() private _ngModel: NgModel,
                @Optional() private _localeHelperService: LocaleHelperService,
                @Optional() private _dateIOService: DateIOService,
                @Optional() private _dateNavigationService: DateNavigationService,
                @Optional() private _datepickerEnabledService: DatepickerEnabledService) {
        if (!container) {
            this.compRef = this.wrapContainer();
            this.populateContainerServices();
        }
        this._dateIOService.localeHelperService = this._localeHelperService;
        this.initializeSubscriptions();
    }

    private populateContainerServices(): void {
        this._localeHelperService = this.compRef.injector.get(LocaleHelperService);
        this._dateIOService = this.compRef.injector.get(DateIOService);
        this._dateNavigationService = this.compRef.injector.get(DateNavigationService);
        this._datepickerEnabledService = this.compRef.injector.get(DatepickerEnabledService);
    }

    /**
     * Wraps the Datepicker directive by the Datepicker container.
     */
    private wrapContainer(): ComponentRef<ClrDateContainer> {
        // We need a new anchor, since we're projecting the current one.
        this.vcr.createComponent(this.cfr.resolveComponentFactory(EmptyAnchor));
        const factory: ComponentFactory<ClrDateContainer> =
            this.cfr.resolveComponentFactory(ClrDateContainer);
        const componentRef: ComponentRef<ClrDateContainer> =
            this.vcr.createComponent(factory, undefined, undefined, [[this.elRef.nativeElement]]);
        // We can now remove the useless anchor
        this.vcr.remove(0);
        return componentRef;
    }

    /**
     * Initialize DateIO Subscriptions
     */
    private initializeSubscriptions(): void {
        if (this._dateIOService) {
            this._subscriptions.push(this._dateIOService.dateStrUpdated.subscribe((dateStr) => {
                this.writeDateStr(dateStr);
            }));
            this._subscriptions.push(this._dateIOService.dateUpdated.subscribe(() => {
                this._dateUpdated.emit(this._dateIOService.date);
            }));
        }
    }

    private writeDateStr(value: string): void {
        this.renderer.setProperty(this.elRef.nativeElement, "value", value);
        // This makes sure that ngModelChange is fired
        // TODO: Check if there is a better way to do this.
        if (this._ngModel) {
            this._ngModel.control.setValue(value);
        }
    }

    @HostBinding("attr.placeholder")
    get placeholderText(): string {
        return this._dateIOService.placeholderText;
    }

    @HostBinding("attr.type")
    get isEnabled(): string {
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

    @Input("clrDate")
    set date(value: Date) {
        if (value) {
            this._dateIOService.inputDate = this._dateIOService.toLocaleDisplayFormatString(value);
            if (this._dateIOService.date) {
                this.writeDateStr(this._dateIOService.inputDate);
            }
        }
    }

    @Output("clrDateChange") _dateUpdated: EventEmitter<Date> = new EventEmitter<Date>(false);

    ngOnDestroy() {
        this._subscriptions.forEach((sub: Subscription) => sub.unsubscribe());
    }
}
