/*
 * Copyright (c) 2016 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */
import {
    Component, ComponentFactoryResolver, Directive, ElementRef, HostListener,
    ViewContainerRef
} from "@angular/core";
import {Point} from "../../popover/common/popover";
import {TimepickerService} from "./providers/timepicker.service";

@Component({
    selector: "clr-empty-anchor",
    template: "",
})
export class EmptyAnchor {
}

@Directive({
    selector: "[clrTimepicker]"
})
export class Timepicker {
    constructor(private container: ViewContainerRef,
                private el: ElementRef,
                private cfr: ComponentFactoryResolver,
                private timepickerService: TimepickerService) {
    }

    ngOnInit() {
        // We need a new anchor, since we're projecting the current one.
        this.container.createComponent(this.cfr.resolveComponentFactory(EmptyAnchor));
        let factory = this.cfr.resolveComponentFactory(TimepickerWrapper);
        this.container.createComponent(factory, 1, undefined, [[this.el.nativeElement]]);
        // We can now remove the useless anchor
        this.container.remove(0);
    }

    @HostListener("focus")
    public openTimepicker() {
        this.timepickerService.open();
    }
}

@Component({
    selector: "clr-timepicker-wrapper",
    template: `
        <ng-content></ng-content>
        <ng-template 
            [(clrPopover)]="open" 
            [clrPopoverAnchor]="anchor" 
            [clrPopoverAnchorPoint]="anchorPoint"
            [clrPopoverPopoverPoint]="popoverPoint"
        >
            <div class="clr-timepicker">
                <clr-spinner-button 
                    [clrSpinValue]="getInitialHour()"
                    [clrMin]="0" 
                    [clrMax]="12" 
                    [clrRotate]="true">
                </clr-spinner-button>
                <clr-spinner-button 
                    [clrSpinValue]="getInitialMinute()"
                    [clrMin]="0" 
                    [clrMax]="59" 
                    [clrRotate]="true">
                </clr-spinner-button>
                <div class="clr-meridiem-switch">
                    <input id="am" type="radio" name="meriem-switch" [checked]="getInitialMeridiem() === 'AM'">
                    <label for="am">AM</label>
                    <input id="pm" type="radio" name="meriem-switch" [checked]="getInitialMeridiem() === 'PM'">
                    <label for="pm">PM</label>
                </div>
            </div>
        </ng-template>
    `
})
export class TimepickerWrapper {
    public anchorPoint: Point = Point.BOTTOM_LEFT;
    public popoverPoint: Point = Point.LEFT_TOP;

    public anchor: any;

    constructor(public elementRef: ElementRef, private timepickerService: TimepickerService) {
        this.anchor = elementRef.nativeElement;
        this.timepickerService.change.subscribe((value: boolean) => {
            this._open = value;
        });
    }

    private _open: boolean = false;

    get open(): boolean {
        return this._open;
    }

    getInitialHour(): number {
        return this.timepickerService.getHours();
    }

    getInitialMinute(): number {
        return this.timepickerService.getMinutes();
    }

    getInitialMeridiem(): string {
        return (this.timepickerService.getHours() < 12) ? "AM" : "PM";
    }

    //called on mouse clicks anywhere in the DOM.
    //Checks to see if the mouseclick happened on the host or outside
    @HostListener("document:click", ["$event.target"])
    onMouseClick(target: any): void {
        if (this._open) {
            let current: any = target; //Get the element in the DOM on which the mouse was clicked
            let host: any = this.elementRef.nativeElement; //Get the current dropdown native HTML element

            //Start checking if current and dropdownHost are equal. If not traverse to the parentNode and check again.
            while (current) {
                if (current === host) {
                    return;
                }
                current = current.parentNode;
            }

            //is this stupid? going through a service to change a variable within the class?
            //i just wanted the service to manage everything because others subscribe to these
            //events too
            this.timepickerService.close();
        }
    }
}
