/*
 * Copyright (c) 2016 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */
import {
    ComponentFactory, ComponentFactoryResolver, ComponentRef, Directive, ElementRef, HostBinding, HostListener,
    Optional,
    ViewContainerRef
} from "@angular/core";
import {DatepickerContainer} from "./datepicker-container";
import {EmptyAnchor} from "../../utils/host-wrapping/empty-anchor";
import {IfOpenService} from "../../utils/conditional/if-open.service";
import {DatepickerActiveService} from "./providers/datepicker-active.service";
import {DateInputService} from "./providers/date-input.service";

@Directive({
    selector: "[clrDatepicker]",
    host: {
        "[class.datepicker-input]": "true",
    }
})
export class Datepicker {

    //Not injected because the container is created after this directive is detected.
    private _ifOpenService: IfOpenService;
    private _isActiveService: DatepickerActiveService;
    private _dateInputService: DateInputService;

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
            this._dateInputService = componentRef.injector.get(DateInputService);
        }
    }

    @HostBinding("attr.type")
    get isActive(): string {
        return this._isActiveService.active ? "text" : "date";
    }

    @HostListener("input")
    onValueChange() {
        this._dateInputService = this.el.nativeElement.value;
    }
}
