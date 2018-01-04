/*
 * Copyright (c) 2016 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */
import {
    ComponentFactory, ComponentFactoryResolver, ComponentRef, Directive, ElementRef, EventEmitter, HostBinding,
    HostListener,
    OnDestroy,
    Optional, Output,
    ViewContainerRef
} from "@angular/core";
import {DatepickerContainer} from "./datepicker-container";
import {EmptyAnchor} from "../../utils/host-wrapping/empty-anchor";
import {IfOpenService} from "../../utils/conditional/if-open.service";
import {DatepickerActiveService} from "./providers/datepicker-active.service";
import {DateIOService} from "./providers/date-io.service";
import {Subscription} from "rxjs/Subscription";

@Directive({
    selector: "[clrDatepicker]",
    host: {
        "[class.datepicker-input]": "true",
    }
})
export class Datepicker implements OnDestroy {

    //Not injected because the container is created after this directive is detected.
    private _ifOpenService: IfOpenService;
    private _isActiveService: DatepickerActiveService;
    private _dateIOService: DateIOService;

    private _sub: Subscription;

    constructor(@Optional() private container: DatepickerContainer,
                private vcr: ViewContainerRef,
                private el: ElementRef,
                private cfr: ComponentFactoryResolver) {
        if (!container) {
            // We need a new anchor, since we're projecting the current one.
            this.vcr.createComponent(this.cfr.resolveComponentFactory(EmptyAnchor));
            const factory: ComponentFactory<DatepickerContainer> = this.cfr.resolveComponentFactory(DatepickerContainer);
            const componentRef: ComponentRef<DatepickerContainer> =
                this.vcr.createComponent(factory, undefined, undefined, [[this.el.nativeElement]]);
            // We can now remove the useless anchor
            this.vcr.remove(0);
            this._ifOpenService = componentRef.injector.get(IfOpenService);
            this._isActiveService = componentRef.injector.get(DatepickerActiveService);
            this._dateIOService = componentRef.injector.get(DateIOService);

            this._dateIOService.dateChanged.subscribe((date: Date) => {
               if (date) {
                   const inputVal: string = this._dateIOService.toLocaleDisplayFormatString(date);
                   this.el.nativeElement.value = inputVal;
                   this._dateIOService.inputDate = inputVal;
               }
            });
        }
    }

    @HostBinding("attr.type")
    get isActive(): string {
        return this._isActiveService.active ? "text" : "date";
    }

    @HostBinding("attr.placeholder")
    get placeholderText(): string {
        return this._dateIOService.placeholderText;
    }

    @HostListener("input")
    onValueChange() {
        const value: string = this.el.nativeElement.value; //Is there a better way to retrieve this?
        if (value) {
            this._dateIOService.inputDate = value.trim();
        } else {
            this._dateIOService.inputDate = "";
        }
    }

    @Output("clrDatepickerChange")
    dateChange: EventEmitter<boolean> = new EventEmitter<boolean>(false);

    ngOnDestroy(): void {
        if (this._sub) {
            this._sub.unsubscribe();
        }
    }
}
