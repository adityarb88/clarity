/*
 * Copyright (c) 2016-2017 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */
import {Injectable} from "@angular/core";
import {DateCell} from "../model/date-cell";
import {MonthViewType} from "../utils/month-view.enum";

const TOTAL_DAYS_IN_MONTH_VIEW: number = 42;

@Injectable()
export class DateUtilsService {

    //Today's Date
    todaysFullDate: Date = new Date();

    private _currentCalendarViewDates: DateCell[][] = [];

    get currentCalendarViewDates(): DateCell[][] {
        return this._currentCalendarViewDates;
    }

    set currentCalendarViewDates(value: DateCell[][]) {
        this._currentCalendarViewDates = value;
    }

    //TODO: Get this from Angular Locale Lib
    getLocaleDaysShort(): string[] {
        return ['S', 'M', 'T', 'W', 'T', 'F', 'S'];
    }

    //TODO: Get this from Angular Locale Lib
    getLocaleMonthsLong(): string[] {
        return ["January", "February", "March", "April", "May", "June",
            "July", "August", "September", "October", "November", "December"
        ];
    }

    getYearStartingRange(): number[] {
        return [2010, 2011, 2012, 2013, 2014, 2015, 2016, 2017, 2018, 2019, 2020, 2021, 2022, 2023, 2024];
    }

    /**
     * Returns the number of days in a month. 28, 29, 30 or 31
     * @param {number} year
     * @param {number} month
     * @returns {number}
     */
    getNumberOfDaysInTheMonth(year: number, month: number): number {
        // +1 because date starts at 1 and 0 means the previous months last date.
        return (new Date(year, month + 1, 0)).getDate();
    }

    /**
     * Returns the day for the date.
     * For eg: 0 for Sunday, 1 for Monday and so on when locale is en_US
     * @param {number} year
     * @param {number} month
     * @param {number} date
     * @returns {number}
     */
    getDay(year: number, month: number, date: number): number {
        return (new Date(year, month, date)).getDay();
    }

    /**
     * Returns the string value of the month
     * @param {number} year
     * @param {number} month
     * @returns {string}
     */
    getMonthLong(month: number) {
        return this.getLocaleMonthsLong()[month];
    }

    /**
     * Returns the current date
     * @returns {number}
     */
    get currentDate(): number {
        return this.todaysFullDate.getDate();
    }

    /**
     * Returns the current month
     * @returns {number}
     */
    get currentMonth(): number {
        return this.todaysFullDate.getMonth();
    }

    /**
     * Returns the current year
     * @returns {number}
     */
    get currentYear(): number {
        return this.todaysFullDate.getFullYear();
    }

    private _selectedDate: number;

    /**
     * Returns the date selected by the user
     * @returns {number}
     */
    get selectedDate(): number {
        return this._selectedDate;
    }

    set selectedDate(value: number) {
        if (this._selectedDate !== value) {
            this._selectedDate = value;
        }
    }

    private _calendarViewMonth: number;

    /**
     * Returns the month in the present Calendar View.
     * @returns {number}
     */
    get calendarViewMonth(): number {
        return this._calendarViewMonth;
    }

    set calendarViewMonth(value: number) {
        if (value !== this.calendarViewMonth) {
            this._calendarViewMonth = value;
            this.currentCalendarViewDates = this.getDatesInCalendarView();
        }
    }

    private _calendarViewYear: number;

    /**
     * Returns the year in the present Calendar View.
     * @returns {number}
     */
    get calendarViewYear(): number {
        return this._calendarViewYear;
    }

    set calendarViewYear(value: number) {
        if (value !== this.calendarViewYear) {
            this._calendarViewYear = value;
            this.currentCalendarViewDates = this.getDatesInCalendarView();
        }
    }

    /**
     * Changes the calendar view to the previous month.
     * Sets the dates for the previous month's calendar view.
     */
    changeViewToPreviousMonth(): void {
        if (typeof this.calendarViewMonth === "undefined") {
            this.calendarViewMonth = this.currentMonth;
        }
        if (typeof this.calendarViewYear === "undefined") {
            this.calendarViewYear = this.currentYear;
        }

        if (this._calendarViewMonth === 0) {
            this._calendarViewMonth = 11;
            this._calendarViewYear--;
        } else {
            this._calendarViewMonth--;
        }
        this.currentCalendarViewDates = this.getDatesInCalendarView();
    }

    /**
     * Changes the calendar view to the next month.
     * Sets the dates for the next month's calendar view.
     */
    changeViewToNextMonth(): void {
        if (typeof this.calendarViewMonth === "undefined") {
            this.calendarViewMonth = this.currentMonth;
        }
        if (typeof this.calendarViewYear === "undefined") {
            this.calendarViewYear = this.currentYear;
        }

        if (this._calendarViewMonth === 11) {
            this._calendarViewMonth = 0;
            this._calendarViewYear++;
        } else {
            this._calendarViewMonth++;
        }
        this.currentCalendarViewDates = this.getDatesInCalendarView();
    }

    /**
     * Generates and returns the dates in the Calendar View selected by the user.
     * Depends on the month and year view selected by the user
     * @returns {DateCell[][]}
     */
    getDatesInCalendarView(): DateCell[][] {
        let month: number;
        let year: number;

        // Get month for which the calendar view needs to be constructed
        if (typeof this.calendarViewMonth !== "undefined") {
            month = this.calendarViewMonth;
        } else {
            month = this.currentMonth;
        }

        // Get year for which the calendar view needs to be constructed
        if (typeof this.calendarViewYear !== "undefined") {
            year = this.calendarViewYear;
        } else {
            year = this.currentYear;
        }

        const noOfDaysInCurrMonth: number = this.getNumberOfDaysInTheMonth(year, month);
        const noOfDaysInPrevMonth: number = this.getNumberOfDaysInTheMonth(year, month - 1);

        // Gets the first day of the current month to figure out how many dates of previous month
        // are needed to complete the Calendar View. For eg: Assuming the first day of the week is Sunday,
        // if first day of the current month is Wednesday (this.getDay function would return 3 since
        // first day of the week is 0), we need the 3 days from the previous month.
        const firstDayOfCurrMonth: number = this.getDay(year, month, 1);

        // Gets the dates in the previous month of the calendar view
        const datesInPreviousMonth: DateCell[]
            = Array(firstDayOfCurrMonth)
            .fill(null)
            .map((date, index) => {
                return new DateCell(
                    noOfDaysInPrevMonth - (firstDayOfCurrMonth - (index + 1)),
                    MonthViewType.PREVIOUS,
                    false
                );
            });


        // Gets the dates in the current month of the calendar view
        const datesInCurrentMonth: DateCell[]
            = Array(noOfDaysInCurrMonth)
            .fill(null)
            .map((date, index) => {
                return new DateCell(index + 1, MonthViewType.CURRENT, false);
            });

        if (month === this.currentMonth && year === this.currentYear) {
            datesInCurrentMonth[this.currentDate - 1].isTodaysDate = true;
        }

        const leftDatesLength: number = TOTAL_DAYS_IN_MONTH_VIEW - (datesInCurrentMonth.length + datesInPreviousMonth.length);

        // Gets the dates in the next month of the calendar view
        const datesInNextMonth: DateCell[]
            = Array(leftDatesLength)
            .fill(null)
            .map((date, index) => new DateCell(index + 1, MonthViewType.NEXT, false));

        //Combine Final Array
        const finalArray: DateCell[] = [...datesInPreviousMonth, ...datesInCurrentMonth, ...datesInNextMonth];

        const finalCalendarArray: DateCell[][] = [];

        // Convert the finalArray into 6 arrays of DateCell arrays each consisting of 7 days.
        for (let i = 0; i < 6; i++) {
            const tempArr: DateCell[] = [];
            for (let j = 0; j < 7; j++) {
                tempArr.push(finalArray.shift());
            }
            finalCalendarArray.push(tempArr);
        }

        return finalCalendarArray;
    }
}
