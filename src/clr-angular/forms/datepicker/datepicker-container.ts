/*
 * Copyright (c) 2016 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */
import {Component} from "@angular/core";
import {IfOpenService} from "../../utils/conditional/if-open.service";
import {DatepickerActiveService} from "./providers/datepicker-active.service";
import {DateIOService} from "./providers/date-io.service";

@Component({
    selector: "clr-datepicker-container",
    template: `
        <div class="datepicker-input-container">
            <ng-content></ng-content>
            <button class="datepicker-trigger" (click)="toggleDatepicker($event)" *ngIf="isActive">
                <clr-icon shape="calendar"></clr-icon>
            </button>
        </div>
        <clr-datepicker-content *clrIfOpen clrFocusTrap></clr-datepicker-content>
        <!--clr-datepicker-content *clrIfOpen></clr-datepicker-content-->
    `,
    providers: [IfOpenService, DatepickerActiveService, DateIOService]
})
export class DatepickerContainer {
    constructor(
        public ifOpenService: IfOpenService,
        private datepickerActiveService: DatepickerActiveService) {
    }

    toggleDatepicker(event: MouseEvent) {
        this.ifOpenService.toggleWithEvent(event);
    }

    get isActive(): boolean {
        return this.datepickerActiveService.active;
    }
}
