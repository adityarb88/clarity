/*
 * Copyright (c) 2016-2018 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */
import {Component} from "@angular/core";
import {IfOpenService} from "../../utils/conditional/if-open.service";
import {LocaleHelperService} from "./providers/locale-helper.service";

@Component({
    selector: "clr-date-container",
    template: `
        <ng-content></ng-content>
        <button 
            type="button" 
            class="datepicker-trigger" 
            (click)="toggleCalendar($event)">
            <clr-icon shape="calendar"></clr-icon>
        </button>
        <clr-datepicker-view-manager *clrIfOpen clrFocusTrap></clr-datepicker-view-manager>
    `,
    providers: [IfOpenService, LocaleHelperService],
    host: {"[class.date-container]": "true"}
})
export class ClrDateContainer {
    constructor(public _ifOpenService: IfOpenService) {}

    /**
     * Toggles the calendar.
     */
    toggleCalendar(event: MouseEvent) {
        this._ifOpenService.toggleWithEvent(event);
    }
}
