/*
 * Copyright (c) 2016-2018 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */
import {Component} from "@angular/core";
import {IfOpenService} from "../../utils/conditional/if-open.service";
import {LocaleHelperService} from "./providers/locale-helper.service";
import {DateIOService} from "./providers/date-io.service";
import {DateNavigationService} from "./providers/date-navigation.service";
import {DayModel} from "./model/day.model";
import {Subscription} from "rxjs/Subscription";
import {DatepickerEnabledService} from "./providers/datepicker-enabled.service";

@Component({
    selector: "clr-date-container",
    template: `
        <ng-content></ng-content>
            <button 
                type="button" 
                class="datepicker-trigger" 
                (click)="toggleCalendar($event)"
                *ngIf="isEnabled">
                <clr-icon shape="calendar"></clr-icon>
            </button>
            <clr-datepicker-view-manager *clrIfOpen clrFocusTrap></clr-datepicker-view-manager>
    `,
    providers: [IfOpenService, LocaleHelperService, DateIOService, DateNavigationService, DatepickerEnabledService],
    host: {"[class.date-container]": "true"}
})
export class ClrDateContainer {
    private _sub: Subscription;

    constructor(
        private _ifOpenService: IfOpenService,
        private _dateNavigationService: DateNavigationService,
        private _dateIOService: DateIOService,
        private _datepickerEnabledService: DatepickerEnabledService) {
        this._sub = this._ifOpenService.openChange.subscribe((open) => {
            if (open) {
                this.initializeCalendar();
            }
        });
    }

    get isEnabled(): boolean {
        return this._datepickerEnabledService.isEnabled;
    }

    /**
     * Toggles the calendar.
     */
    toggleCalendar(event: MouseEvent) {
        this._ifOpenService.toggleWithEvent(event);
    }

    private initializeCalendar(): void {
        this.processUserInput();
        this._dateNavigationService.initializeCalendar();
    }

    private processUserInput(): void {
        const date: Date = this._dateIOService.date;
        if (date) {
            const dayModel: DayModel = new DayModel(date.getFullYear(), date.getMonth(), date.getDate());
            this._dateNavigationService.selectedDay = dayModel;
        } else {
            this._dateNavigationService.selectedDay = null;
        }
    }
}
