/*
 * Copyright (c) 2016-2017 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */
import {Injectable} from "@angular/core";
import {DateCell} from "../model/date-cell";
import {CalendarDate} from "../model/calendar-date";

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

    /**
     * Date on which the user has focused.
     */
    private _focusedDate: CalendarDate;

    get focusedDate(): CalendarDate {
        return this._focusedDate;
    }

    set focusedDate(value: CalendarDate) {
        this._focusedDate = value;
    }

    forgetFocus(): void {
        this.focusedDate = null;
    }

    /**
     * Date selected by the user.
     */
    private _selectedDate: CalendarDate;

    get selectedDate(): CalendarDate {
        return this._selectedDate;
    }

    set selectedDate(value: CalendarDate) {
        if (this._selectedDate !== value) {
            this._selectedDate = value;
        }
    }

    /**
     * Month Value in the current Calendar View.
     */
    private _calendarViewMonth: number;

    get calendarViewMonth(): number {
        return this._calendarViewMonth;
    }

    set calendarViewMonth(value: number) {
        if (value !== this.calendarViewMonth) {
            this._calendarViewMonth = value;
            this.currentCalendarViewDates = this.getDatesInCalendarView();
        }
    }

    /**
     * Year value in the current Calendar View.
     */
    private _calendarViewYear: number;

    get calendarViewYear(): number {
        return this._calendarViewYear;
    }

    set calendarViewYear(value: number) {
        if (value !== this.calendarViewYear) {
            this._calendarViewYear = value;
            this.currentCalendarViewDates = this.getDatesInCalendarView();
        }
    }

    initializeCalendarViewData(): void {
        if (typeof this.calendarViewMonth === "undefined") {
            this.calendarViewMonth = this.currentMonth;
        }
        if (typeof this.calendarViewYear === "undefined") {
            this.calendarViewYear = this.currentYear;
        }
    }

    /**
     * Changes the calendar view to the previous month.
     * Sets the dates for the previous month's calendar view.
     */
    changeViewToPreviousMonth(): void {
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
        if (this._calendarViewMonth === 11) {
            this._calendarViewMonth = 0;
            this._calendarViewYear++;
        } else {
            this._calendarViewMonth++;
        }
        this.currentCalendarViewDates = this.getDatesInCalendarView();
    }

    incrementFocusedDateBy(incrementDays: number): void {
        if (this.focusedDate) {
            const newFocusedDate: Date = new Date(this.focusedDate.year, this.focusedDate.month, this.focusedDate.date);
            newFocusedDate.setDate(newFocusedDate.getDate() + incrementDays);
            const newDate: number = newFocusedDate.getDate();
            const newMonth: number = newFocusedDate.getMonth();
            const newYear: number = newFocusedDate.getFullYear();
            this.calendarViewMonth = newMonth;
            this.calendarViewYear = newYear;
            this.focusedDate = new CalendarDate(newDate, newMonth, newYear);
        }
    }

    /**
     * Returns a [month, year] tuple of the previous month based on the month and year passed to
     * this method.
     * @param {number} month
     * @param {number} year
     * @returns {[number , number]}
     */
    getPreviousMonth(month: number, year: number): [number, number] {
        if (month === 0) {
            return [11, year - 1];
        } else {
            return [month - 1, year];
        }
    }

    /**
     * Returns a [month, year] tuple of the next month based on the month and year passed to
     * this method.
     * @param {number} month
     * @param {number} year
     * @returns {[number , number]}
     */
    getNextMonth(month: number, year: number): [number, number] {
        if (month === 11) {
            return [0, year + 1];
        } else {
            return [month + 1, year];
        }
    }

    /**
     * Compares with the current Calendar View and returns if the passed CalendarDate is
     * of the previous Calendar View month or not
     * @param {CalendarDate} calDate
     * @returns {boolean}
     */
    isPreviousViewMonth(calDate: CalendarDate): boolean {
        const month: number = calDate.month;
        const year: number = calDate.year;
        const viewMonth: number = this.calendarViewMonth;
        const viewYear: number = this.calendarViewYear;
        if (this.calendarViewMonth === 0) {
            return (month === 11 && year === viewYear - 1);
        } else {
            return (month === viewMonth - 1);
        }
    }

    /**
     * Compares with the current Calendar View and returns if the passed CalendarDate is
     * of the same month or not
     * @param {CalendarDate} calDate
     * @returns {boolean}
     */
    isCurrentViewMonth(calDate: CalendarDate): boolean {
        return (calDate.month === this.calendarViewMonth && calDate.year === this.calendarViewYear);
    }

    /**
     * Compares with the current Calendar View and returns if the passed CalendarDate is
     * of the next Calendar View month or not
     * @param {CalendarDate} calDate
     * @returns {boolean}
     */
    isNextViewMonth(calDate: CalendarDate): boolean {
        const month: number = calDate.month;
        const year: number = calDate.year;
        const viewMonth: number = this.calendarViewMonth;
        const viewYear: number = this.calendarViewYear;
        if (this.calendarViewMonth === 11) {
            return (month === 0 && year === viewYear + 1);
        } else {
            return ((month === viewMonth + 1) && (year === viewYear));
        }
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
                const previousMonth: [number, number] = this.getPreviousMonth(month, year);
                const calDate: CalendarDate = new CalendarDate(
                    noOfDaysInPrevMonth - (firstDayOfCurrMonth - (index + 1)),
                    previousMonth[0],
                    previousMonth[1]
                );
                return new DateCell(
                    calDate,
                    false
                );
            });


        // Gets the dates in the current month of the calendar view
        const datesInCurrentMonth: DateCell[]
            = Array(noOfDaysInCurrMonth)
            .fill(null)
            .map((date, index) => {
                const calDate: CalendarDate = new CalendarDate(
                    index + 1,
                    month,
                    year
                );
                return new DateCell(calDate, false);
            });

        //Check for today's date
        if (month === this.currentMonth && year === this.currentYear) {
            datesInCurrentMonth[this.currentDate - 1].isTodaysDate = true;
        }

        const leftDatesLength: number = TOTAL_DAYS_IN_MONTH_VIEW - (datesInCurrentMonth.length + datesInPreviousMonth.length);

        // Gets the dates in the next month of the calendar view
        const datesInNextMonth: DateCell[]
            = Array(leftDatesLength)
            .fill(null)
            .map((date, index) => {
                const nextMonth: [number, number] = this.getNextMonth(month, year);
                const calDate: CalendarDate = new CalendarDate(
                    index + 1,
                    nextMonth[0],
                    nextMonth[1]
                );
                return new DateCell(calDate, false);
            });

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