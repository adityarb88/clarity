/*
 * Copyright (c) 2016-2017 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */
import {Injectable} from "@angular/core";
import {CalendarDate} from "../calendar-date";

const TOTAL_DAYS_IN_MONTH_VIEW: number = 42;

@Injectable()
export class DateUtilsService {

    currentDate: Date = new Date();

    private _currentCalendarViewDates: CalendarDate[][] = [];

    get currentCalendarViewDates(): CalendarDate[][] {
        return this._currentCalendarViewDates;
    }

    set currentCalendarViewDates(value: CalendarDate[][]) {
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

    get currDate(): number {
        return this.currentDate.getDate();
    }

    get currMonth(): number {
        return this.currentDate.getMonth();
    }

    get currMonthLong(): string {
        return this.getLocaleMonthsLong()[this.currMonth];
    }

    get currYear(): number {
        return this.currentDate.getFullYear();
    }

    private _selectedDate: number;
    get selectedDate(): number {
        return this._selectedDate;
    }

    set selectedDate(value: number) {
        if (this._selectedDate !== value) {
            this._selectedDate = value;
        }
    }

    private _selectedMonth: number;
    get selectedMonth(): number {
        return this._selectedMonth;
    }

    set selectedMonth(value: number) {
        if (value !== this.selectedMonth) {
            this._selectedMonth = value;
            this.currentCalendarViewDates = this.getDatesInCalendarView();
        }
    }

    private _selectedYear: number;
    get selectedYear(): number {
        return this._selectedYear;
    }

    set selectedYear(value: number) {
        if (value !== this.selectedYear) {
            this._selectedYear = value;
            this.currentCalendarViewDates = this.getDatesInCalendarView();
        }
    }

    getDatesInCalendarView(): CalendarDate[][] {
        let month: number;
        let year: number;

        // Get month for which the calendar view needs to be constructed
        if (typeof this.selectedMonth !== "undefined") {
            month = this.selectedMonth;
        } else {
            month = this.currMonth;
        }

        // Get year for which the calendar view needs to be constructed
        if (typeof this.selectedYear !== "undefined") {
            year = this.selectedYear;
        } else {
            year = this.currYear;
        }

        const noOfDaysInCurrMonth: number = this.getNumberOfDaysInTheMonth(year, month);
        const noOfDaysInPrevMonth: number = this.getNumberOfDaysInTheMonth(year, month - 1);

        // Gets the first day of the current month to figure out how many dates of previous month
        // are needed to complete the Calendar View. For eg: Assuming the first day of the week is Sunday,
        // if first day of the current month is Wednesday (this.getDay function would return 3 since
        // first day of the week is 0), we need the 3 days from the previous month.
        const firstDayOfCurrMonth: number = this.getDay(year, month, 1);

        // Gets the dates in the previous month of the calendar view
        const datesInPreviousMonth: CalendarDate[]
            = Array(firstDayOfCurrMonth)
            .fill(null)
            .map((date, index) => {
                return new CalendarDate(noOfDaysInPrevMonth - (firstDayOfCurrMonth - (index + 1)), false, false);
            });


        // Gets the dates in the current month of the calendar view
        const datesInCurrentMonth: CalendarDate[]
            = Array(noOfDaysInCurrMonth)
            .fill(null)
            .map((date, index) => {
                return new CalendarDate(index + 1, true, false);
            });

        if (month === this.currMonth && year === this.currYear) {
            datesInCurrentMonth[this.currDate - 1].isTodaysDate = true;
        }

        const leftDatesLength: number = TOTAL_DAYS_IN_MONTH_VIEW - (datesInCurrentMonth.length + datesInPreviousMonth.length);

        // Gets the dates in the next month of the calendar view
        const datesInNextMonth: CalendarDate[]
            = Array(leftDatesLength)
            .fill(null)
            .map((date, index) => new CalendarDate(index + 1, false, false));

        //Combine Final Array
        const finalArray: CalendarDate[] = [...datesInPreviousMonth, ...datesInCurrentMonth, ...datesInNextMonth];

        const finalCalendarArray: CalendarDate[][] = [];

        // Convert the finalArray into 6 arrays of CalendarDate arrays each consisting of 7 days.
        for (let i = 0; i < 6; i++) {
            const tempArr: CalendarDate[] = [];
            for (let j = 0; j < 7; j++) {
                tempArr.push(finalArray.shift());
            }
            finalCalendarArray.push(tempArr);
        }

        return finalCalendarArray;
    }
}
