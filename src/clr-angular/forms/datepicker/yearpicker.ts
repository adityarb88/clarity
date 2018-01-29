/*
 * Copyright (c) 2016-2018 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */
import {Component} from "@angular/core";
import {DateNavigationService} from "./providers/date-navigation.service";
import {YearRangeModel} from "./model/year-range.model";
import {ViewManagerService} from "./providers/view-manager.service";

@Component({
    selector: "clr-yearpicker",
    template: `
        <div class="year-switchers">
            <button class="calendar-btn" type="button" (click)="previousDecade()">
                <clr-icon shape="angle" dir="left"></clr-icon>
            </button>
            <button class="calendar-btn" type="button" (click)="currentDecade()">
                <clr-icon shape="event"></clr-icon>
            </button>
            <button class="calendar-btn" type="button" (click)="nextDecade()">
                <clr-icon shape="angle" dir="right"></clr-icon>
            </button>
        </div>
        <div class="years">
            <button
                *ngFor="let year of yearRangeModel.yearRange"
                type="button"
                class="calendar-btn year"
                [class.is-active]="year === calendarYear"
                (click)="changeYear(year)">
                {{year}}
            </button>
        </div>
    `,
    host: {
        "[class.yearpicker]": "true",
    }
})
export class ClrYearpicker {
    constructor(
        private _dateNavigationService: DateNavigationService,
        private _viewManagerService: ViewManagerService) {
        this.yearRangeModel = new YearRangeModel(this._dateNavigationService.calendar.year);
    }

    yearRangeModel: YearRangeModel;

    /**
     * Gets the year which the user is currently on.
     */
    get calendarYear(): number {
        return this._dateNavigationService.calendar.year;
    }

    changeYear(year: number): void {
        this._dateNavigationService.changeYear(year);
        this._viewManagerService.changeToDayPickerView();
    }

    previousDecade(): void {
        this.yearRangeModel = this.yearRangeModel.previousDecade();
    }

    currentDecade(): void {
        this.yearRangeModel = this.yearRangeModel.currentDecade();
    }

    nextDecade(): void {
        this.yearRangeModel = this.yearRangeModel.nextDecade();
    }
}
