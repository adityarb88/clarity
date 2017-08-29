/*
 * Copyright (c) 2017 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */
import {Component, ElementRef, Injector, SkipSelf} from "@angular/core";
import {CalendarDate} from "./calendar-date";
import {DateUtilsService} from "./providers/date-utils.service";

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
                <td *ngFor="let date of row" class="datepicker-cell" [class.disabled]="!date.currentMonth">
                    {{date.date}}
                </td>
            </tr>
        </table>
    `,
    host: {
        "[class.datepicker-content]": "true",
    },
    providers: [DateUtilsService]
})
export class DatepickerContent {

    calendarDates: CalendarDate[][] = [];

    get noOfDaysInTheMonth(): number {
        return this
            .dateUtilsService
            .getNumberOfDaysInTheMonth(
                this.dateUtilsService.currentDate.getFullYear(),
                this.dateUtilsService.currentDate.getMonth()
            );
    }

    get noOfDaysInThePreviousMonth(): number {
        return this
            .dateUtilsService
            .getNumberOfDaysInTheMonth(
                this.dateUtilsService.currentDate.getFullYear(),
                this.dateUtilsService.currentDate.getMonth() - 1
            );
    }

    get firstDayOfTheMonth(): number {
        return this
            .dateUtilsService
            .getDay(
                this.dateUtilsService.currentDate.getFullYear(),
                this.dateUtilsService.currentDate.getMonth(), 1
            );
    }

    constructor(@SkipSelf() parentHost: ElementRef,
                private dateUtilsService: DateUtilsService) {
        //super(injector, parentHost);
        //this.anchorPoint = Point.BOTTOM_LEFT;
        //this.popoverPoint = Point.LEFT_TOP;
        //this.closeOnOutsideClick = true;
    }

    ngOnInit() {
        this.constructDates();
    }

    get daysShort(): string[] {
        return this.dateUtilsService.getLocaleDaysShort();
    }

    get currentYear(): number {
        return this.dateUtilsService.currentDate.getFullYear();
    }

    get currentMonth(): string {
        return this
            .dateUtilsService
            .getLocaleMonthsLong()[this.dateUtilsService.currentDate.getMonth()];
    }

    constructDates(): void {
        const calendarDates: CalendarDate[]
            = Array(this.noOfDaysInTheMonth)
            .fill(null)
            .map((date, index) => new CalendarDate(index + 1, true));

        const prevDates: CalendarDate[]
            = Array(this.firstDayOfTheMonth)
            .fill(null)
            .map((date, index) => new CalendarDate(this.noOfDaysInThePreviousMonth - index, false))
            .reverse();

        const leftDatesLength: number = TOTAL_DAYS_IN_ONE_MONTH - (calendarDates.length + prevDates.length);

        const nextDates: CalendarDate[]
            = Array(leftDatesLength)
            .fill(null)
            .map((date, index) => new CalendarDate(index + 1, false));

        const finalArray: CalendarDate[] = [...prevDates, ...calendarDates, ...nextDates];

        for (let i = 0; i < 6; i++) {
            const tempArr: CalendarDate[] = [];
            for (let j = 0; j < 7; j++) {
                tempArr.push(finalArray.shift());
            }
            this.calendarDates.push(tempArr);
        }
    }
}
