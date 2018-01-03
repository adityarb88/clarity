/*
 * Copyright (c) 2017 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */
import {Directive, ElementRef, EventEmitter, HostListener, Input, Output} from "@angular/core";
import {SnapScrollService} from "./providers/snap-scroll.provider";

const WAIT_TIME: number = 1500;

@Directive({
    selector: "[clrSnapScroll]",
    host: {
        "[class.clr-snap-scroll]": "true",
        "[class.on-scroll]": "scrollEnabled"
    },
    providers: [SnapScrollService]
})
export class SnapScrollDirective{

    @Input("clrSnapScroll") scrollEnabled: boolean = false;
    @Output("clrMouseWheelUpChange") wheelUp: EventEmitter<boolean> = new EventEmitter<boolean>(false);
    @Output("clrMouseWheelDownChange") wheelDown: EventEmitter<boolean> = new EventEmitter<boolean>(false);

    constructor(private snapScrollService: SnapScrollService, private elRef: ElementRef) {
        this.snapScrollService.wheelDownChange.subscribe(() => {
            console.log("Scrolling Down");
            this.elRef.nativeElement.scrollTop = this.elRef.nativeElement.scrollTop + 216;
            //this.snapScrollService.scrollDown(this.elRef);
            this.wheelDown.emit();
        });
        this.snapScrollService.wheelUpChange.subscribe(() => {
            console.log("Scrolling Up");
            this.elRef.nativeElement.scrollTop = this.elRef.nativeElement.scrollTop - 216;
            //this.snapScrollService.scrollUp(this.elRef);
            this.wheelUp.emit();
        });
    }

    private beginTime: number = Date.now();

    @HostListener("wheel", ["$event"])
    onWheel(event: WheelEvent) {
        if ((this.beginTime + WAIT_TIME - Date.now()) < 0) {
            const el = this.elRef.nativeElement;
            console.log(el.clientHeight, el.scrollHeight, el.scrollTop);
            this.snapScrollService.processEvent(event);
            this.beginTime = Date.now();
        }
        event.preventDefault(); //needed for IE
    }

}
