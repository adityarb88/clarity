/*
 * Copyright (c) 2016 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */
import {
    ComponentFactory, ComponentFactoryResolver, ComponentRef, Directive, ElementRef, HostListener,
    Optional,
    ViewContainerRef
} from "@angular/core";
import {DatepickerContainer} from "./datepicker-container";
import {EmptyAnchor} from "../../utils/host-wrapping/empty-anchor";
import {IfOpenService} from "../../utils/conditional/if-open.service";

@Directive({
    selector: "[clrDatepicker]"
})
export class Datepicker {

    private _ifOpenService: IfOpenService; //Not injected because the container is created after this directive is detected.

    constructor(@Optional() private container: DatepickerContainer,
                private vcr: ViewContainerRef,
                private el: ElementRef,
                private cfr: ComponentFactoryResolver) {
        if (!container) {
            // We need a new anchor, since we're projecting the current one.
            this.vcr.createComponent(this.cfr.resolveComponentFactory(EmptyAnchor));
            let factory: ComponentFactory<DatepickerContainer> = this.cfr.resolveComponentFactory(DatepickerContainer);
            let componentRef: ComponentRef<DatepickerContainer> =
                this.vcr.createComponent(factory, undefined, undefined, [[this.el.nativeElement]]);
            // We can now remove the useless anchor
            this.vcr.remove(0);
            this._ifOpenService = componentRef.injector.get(IfOpenService);
        }
    }


    @HostListener("focus")
    onFocus() {
        //this._ifOpenService.open = true;
    }

    @HostListener("blur")
    onBlur() {
        //this._ifOpenService.open = false;
    }
}
