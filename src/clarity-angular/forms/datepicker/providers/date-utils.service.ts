/*
 * Copyright (c) 2016-2017 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */
import {Inject, Injectable, LOCALE_ID} from "@angular/core";
import {DateCell} from "../model/date-cell";
import {CalendarDate} from "../model/calendar-date";
import {
    FormatWidth,
    FormStyle, getLocaleDateFormat, getLocaleDayNames, getLocaleFirstDayOfWeek, getLocaleMonthNames,
    TranslationWidth, WeekDay
} from "@angular/common";
/*
import {formatUserDate} from "../utils/format_date";
import {formatDate} from "../utils/formatDate";
*/
import {Subject} from "rxjs/Subject";
import {Observable} from "rxjs/Observable";
import {getDay, getNumberOfDaysInTheMonth} from "../utils/date-utils";

const TOTAL_DAYS_IN_MONTH_VIEW: number = 42;
const NO_OF_DAYS_IN_A_WEEK: number = 7;

@Injectable()
export class DateUtilsService {

    constructor(@Inject(LOCALE_ID) public locale: string) {
        //console.log(this.locale);
        this.initializeLocaleDaysShort();
        //console.log(getLocaleDateFormat(this.locale, FormatWidth.Short));
        /*
        console.log(formatUserDate(new Date(1900, 11, 24), this.locale));
        console.log(formatDate(new Date(2000, 11, 24), "shortDate", this.locale));
        console.log(new Date(Date.parse(formatDate(new Date(2000, 11, 24), "shortDate", this.locale))));
        console.log(new Date(Date.parse(formatUserDate(new Date(1900, 11, 24), this.locale))));
        */
    }

    //Today's Date
    todaysFullDate: Date = new Date();

    private initializeLocaleDaysShort(): void {
        const tempArr: string[] = getLocaleDayNames(this.locale, FormStyle.Format, TranslationWidth.Narrow);
        const firstDayOfWeek: number = this.getFirstDayOfTheWeek();
        if (firstDayOfWeek > 0) {
            const prevDays = tempArr.splice(0, firstDayOfWeek);
            prevDays.forEach((item) => {
                tempArr.push(item);
            });
        }
        this.localeDaysShort = tempArr;
    }

    private localeDaysShort: ReadonlyArray<string>;

    getLocaleDaysShort(): ReadonlyArray<string> {
        return this.localeDaysShort;
    }

    getLocaleMonthsLong(): string[] {
        return getLocaleMonthNames(this.locale, FormStyle.Format, TranslationWidth.Wide);
    }

    /**
     * Return first day of the week based on the en-US locale.
     * 0 represents Sunday, 1 represents Monday and so on
     */
    getFirstDayOfTheWeek(): WeekDay {
        return getLocaleFirstDayOfWeek(this.locale);
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
        }
    }

    /**
     * Initializes the display calendar view month and year
     */
    initializeCalendarViewMonthAndYear(): void {
        if (this.selectedDate) {
            this.calendarViewMonth = this.selectedDate.month;
            this.calendarViewYear = this.selectedDate.year;
        } else {
            this.calendarViewMonth = this.currentMonth;
            this.calendarViewYear = this.currentYear;
        }
    }

    incrementFocusedDateBy(incrementDays: number): void {
        if (this.focusedDate) {
            const newFocusedDate: Date = new Date(this.focusedDate.year, this.focusedDate.month, this.focusedDate.date);
            newFocusedDate.setDate(newFocusedDate.getDate() + incrementDays);
            const newDate: number = newFocusedDate.getDate();
            const newMonth: number = newFocusedDate.getMonth();
            const newYear: number = newFocusedDate.getFullYear();
            this.focusedDate = new CalendarDate(newDate, newMonth, newYear);
            if(this.calendarViewMonth !== newMonth || this.calendarViewYear !== newYear) {
                this.calendarViewMonth = newMonth;
                this.calendarViewYear = newYear;
                //this.updateCalendar();
            }
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
     * of the same month or not
     * @param {CalendarDate} calDate
     * @returns {boolean}
     */
    isCurrentViewMonth(calDate: CalendarDate): boolean {
        return (calDate.month === this.calendarViewMonth && calDate.year === this.calendarViewYear);
    }

    private carryOverFromPreviousMonth(month: number, year: number): WeekDay {
        const firstDayOfCurrMonth: number = getDay(year, month, 1);
        const firstDayOfTheWeek: number = this.getFirstDayOfTheWeek();

        if (firstDayOfCurrMonth >= firstDayOfTheWeek) {
            return firstDayOfCurrMonth - firstDayOfTheWeek;
        } else {
            return NO_OF_DAYS_IN_A_WEEK + firstDayOfCurrMonth - firstDayOfTheWeek;
        }
    }

    /**
     * Generates and returns the dates in the Calendar View selected by the user.
     * Depends on the month and year view selected by the user
     * @returns {DateCell[][]}
     */
    getDatesInCalendarView(month: number, year: number): DateCell[][] {
        //const month: number = this.calendarViewMonth;
        //const year: number = this.calendarViewYear;

        const noOfDaysInCurrMonth: number = getNumberOfDaysInTheMonth(year, month);
        const noOfDaysInPrevMonth: number = getNumberOfDaysInTheMonth(year, month - 1);

        // Gets the first day of the current month to figure out how many dates of previous month
        // are needed to complete the Calendar View. For eg: Assuming the first day of the week is Sunday,
        // if first day of the current month is Wednesday (this.getDay function would return 3 since
        // first day of the week is 0), we need the 3 days from the previous month.
        const carryOverFromPreviousMonth: number = this.carryOverFromPreviousMonth(month, year);

        // Gets the dates in the previous month of the calendar view
        const datesInPreviousMonth: DateCell[]
            = Array(carryOverFromPreviousMonth)
            .fill(null)
            .map((date, index) => {
                const previousMonth: [number, number] = this.getPreviousMonth(month, year);
                const calDate: CalendarDate = new CalendarDate(
                    noOfDaysInPrevMonth - (carryOverFromPreviousMonth - (index + 1)),
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

        //console.log(finalCalendarArray);

        return finalCalendarArray;
    }

    private _changeCalendar: Subject<void> = new Subject<void>();

    updateCalendar(): void {
        this._changeCalendar.next();
    }

    get calendarChange(): Observable<void> {
        return this._changeCalendar.asObservable();
    }

    generateCalendar(month: number, year: number) {
        const get = (index: number) => {
            const m: number = month + index;
            const y: number = year + Math.floor(m / 12);
            let mod: number = m % 12;
            if (mod < 0) {
                mod += 12;
            }
            const dateRows = this.getDatesInCalendarView(mod, y);
            return {
                month: mod,
                year: y,
                dateRows: dateRows
            };
        };
        return {get};
    }
}
