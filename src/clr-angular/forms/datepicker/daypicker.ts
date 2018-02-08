/*
 * Copyright (c) 2016-2018 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */
import {Component} from "@angular/core";
import {ViewManagerService} from "./providers/view-manager.service";
import {DateNavigationService} from "./providers/date-navigation.service";
import {LocaleHelperService} from "./providers/locale-helper.service";

@Component({
    selector: "clr-daypicker",
    templateUrl: "./daypicker.html",
    host: {
        "[class.daypicker]": "true"
    }
})
export class ClrDaypicker {
    constructor(
        private _viewManagerService: ViewManagerService,
        private _dateNavigationService: DateNavigationService,
        private _localeHelperService: LocaleHelperService) {
    }

    changeToMonthView(): void {
        this._viewManagerService.changeToMonthView();
    }

    changeToYearView(): void {
        this._viewManagerService.changeToYearView();
    }

    /**
     * Returns the month value of the calendar in the TranslationWidth.Abbreviated format.
     */
    get calendarMonth(): string {
        return this._localeHelperService.localeMonthsAbbreviated[this._dateNavigationService.calendar.month];
    }

    get calendarYear(): number {
        return this._dateNavigationService.calendar.year;
    }

    nextMonth(): void {
        this._dateNavigationService.moveToNextMonth();
    }

    previousMonth(): void {
        this._dateNavigationService.moveToPreviousMonth();
    }

    currentMonth(): void {
        this._dateNavigationService.moveToCurrentMonth();
    }
}
