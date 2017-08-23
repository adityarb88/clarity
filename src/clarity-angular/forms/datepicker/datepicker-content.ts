/*
 * Copyright (c) 2017 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */
import {Component} from "@angular/core";
import {
    getDay, getLocaleDaysShort,
    getNumberOfDaysInTheMonth
} from "../../utils/date/date";

const DAYS_SHORT = getLocaleDaysShort();

@Component({
    selector: "clr-datepicker-content",
    template: `
        <div class="datepicker-days-container">
            <span *ngFor="let day of daysShort" class="datepicker-day">
                {{day}}
            </span>
        </div>
        <div class="datepicker-dates-container">
            <span *ngFor="let pDate of prevDates" class="datepicker-date disabled">
                {{pDate}}
            </span>
            <span *ngFor="let date of dates" class="datepicker-date">
                {{date}}
            </span>
            <span *ngFor="let nDate of nextDates" class="datepicker-date disabled">
                {{nDate}}
            </span>
        </div>
    `,
    host: {
        "[class.datepicker-content]": "true",
    }
})
export class DatepickerContent {

    currentDate: Date = new Date();

    dates: number[] = [];
    prevDates: number[] = [];
    nextDates: number[] = [];

    get noOfDaysInTheMonth(): number {
        return getNumberOfDaysInTheMonth(this.currentDate.getFullYear(), this.currentDate.getMonth());
    }

    get noOfDaysInThePreviousMonth(): number {
        return getNumberOfDaysInTheMonth(this.currentDate.getFullYear(), this.currentDate.getMonth() - 1);
    }

    get firstDayOfTheMonth(): number {
        return getDay(this.currentDate.getFullYear(), this.currentDate.getMonth(), 1);
    }

    constructor() {
        this.constructDatesArray();
    }

    get daysShort(): string[] {
        return DAYS_SHORT;
    }

    constructDatesArray(): void {
        //new Array(42); //7 days * 6 rows for the dates to cover all possibilities
        this.dates
            = Array(this.noOfDaysInTheMonth)
            .fill(0)
            .map((currentValue, index) => index + 1);
        this.prevDates
            = Array(this.firstDayOfTheMonth)
            .fill(this.noOfDaysInThePreviousMonth)
            .map((currentValue, index) => this.noOfDaysInThePreviousMonth - index)
            .reverse();
        let leftDatesLength: number = 42 - (this.dates.length + this.prevDates.length);
        this.nextDates
            = Array(leftDatesLength)
            .fill(0)
            .map((currentValue, index) => index + 1);
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
