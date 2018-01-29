/*
 * Copyright (c) 2016-2018 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */
import {Component} from "@angular/core";
import {LocaleHelperService} from "./providers/locale-helper.service";
import {DateNavigationService} from "./providers/date-navigation.service";
import {ViewManagerService} from "./providers/view-manager.service";

@Component({
    selector: "clr-monthpicker",
    template: `
        <button
            type="button"
            class="calendar-btn month"
            *ngFor="let month of months"
            (click)="changeMonth(month)"
            [class.is-active]="month === calendarMonth">
            {{month}}
        </button>
    `,
    host: {
        "[class.monthpicker]": "true",
    }
})
export class ClrMonthpicker {
    constructor(
        private _viewManagerService: ViewManagerService,
        private _localeHelperService: LocaleHelperService,
        private _dateNavigationService: DateNavigationService) {
    }

    get months(): ReadonlyArray<string> {
        return this._localeHelperService.localeMonthsWide;
    }

    get calendarMonth(): string {
        const calMonth: number = this._dateNavigationService.calendar.month;
        return this.months[calMonth];
    }

    changeMonth(month: string) {
        const calMonth: number = this.months.indexOf(month);
        this._dateNavigationService.changeMonth(calMonth);
        this._viewManagerService.changeToDayPickerView();
    }
}
