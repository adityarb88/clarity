/*
 * Copyright (c) 2017 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */
import {Component, ElementRef, Injector, SkipSelf} from "@angular/core";
import {
    getDay, getLocaleDaysShort, getLocaleMonthsLong,
    getNumberOfDaysInTheMonth
} from "../../utils/date/date";
import {CalendarDate} from "./calendar-date";
import {Point} from "../../popover/common/popover";
import {AbstractPopover} from "../../popover/common/abstract-popover";

const DAYS_SHORT = getLocaleDaysShort();
const TOTAL_DAYS_IN_ONE_MONTH: number = 42;

@Component({
    selector: "clr-datepicker-content",
    template: `
        <div class="datepicker-month-year-container">
            <button class="datepicker-btn datepicker-month">
                {{currentMonth}}
            </button>
            <button class="datepicker-btn datepicker-year">
                {{currentYear}}
            </button>
        </div>
        <table class="datepicker-table">
            <tr class="datepicker-row">
                <td *ngFor="let day of daysShort" class="datepicker-cell">
                    {{day}}
                </td>
            </tr>
            <tr *ngFor="let row of calendarDates" class="datepicker-row">
                <td *ngFor="let date of row" class="datepicker-cell"  [class.disabled]="!date.currentMonth">
                    {{date.date}}
                </td>
            </tr>
        </table>
    `,
    host: {
        "[class.datepicker-content]": "true",
    }
})
export class DatepickerContent extends AbstractPopover {

    currentDate: Date = new Date();

    calendarDates: CalendarDate[][] = [];

    get noOfDaysInTheMonth(): number {
        return getNumberOfDaysInTheMonth(this.currentDate.getFullYear(), this.currentDate.getMonth());
    }

    get noOfDaysInThePreviousMonth(): number {
        return getNumberOfDaysInTheMonth(this.currentDate.getFullYear(), this.currentDate.getMonth() - 1);
    }

    get firstDayOfTheMonth(): number {
        return getDay(this.currentDate.getFullYear(), this.currentDate.getMonth(), 1);
    }

    constructor(injector: Injector, @SkipSelf() parentHost: ElementRef) {
        super(injector, parentHost);
        this.anchorPoint = Point.BOTTOM_LEFT;
        this.popoverPoint = Point.LEFT_TOP;
    }

    ngOnInit() {
        this.constructDates();
    }

    get daysShort(): string[] {
        return DAYS_SHORT;
    }

    get currentYear(): number {
        return this.currentDate.getFullYear();
    }

    get currentMonth(): string {
        return getLocaleMonthsLong()[this.currentDate.getMonth()];
    }

    constructDates(): void {
        let calendarDates: CalendarDate[]
            = Array(this.noOfDaysInTheMonth)
            .fill(null)
            .map((date, index) => new CalendarDate(index + 1, true));

        let prevDates: CalendarDate[]
            = Array(this.firstDayOfTheMonth)
            .fill(null)
            .map((date, index) => new CalendarDate(this.noOfDaysInThePreviousMonth - index, false))
            .reverse();

        let leftDatesLength: number = TOTAL_DAYS_IN_ONE_MONTH - (calendarDates.length + prevDates.length);

        let nextDates: CalendarDate[]
            = Array(leftDatesLength)
            .fill(null)
            .map((date, index) => new CalendarDate(index + 1, false));

        let finalArray: CalendarDate[] = [...prevDates, ...calendarDates, ...nextDates];

        for (let i = 0; i < 6; i++) {
            let tempArr: CalendarDate[] = [];
            for (let j = 0; j < 7; j++) {
                tempArr.push(finalArray.shift());
            }
            this.calendarDates.push(tempArr);
        }
    }

    /*
    export class DatepickerContent extends AbstractPopover {
        constructor(injector: Injector, @SkipSelf() parentHost: ElementRef) {
            super(injector, parentHost);
            this.anchorPoint = Point.BOTTOM_LEFT;
            this.popoverPoint = Point.LEFT_TOP;
        }
    }
    */
}
