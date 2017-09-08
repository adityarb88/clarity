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
        return (new Date(year, month + 1, 0)).getDate(); // +1 because date starts at 1 and 0 means the previous months last date.
    }

    /**
     * Returns the first day of the week.
     * For eg: 0 for Sunday, 1 for Monday and so on when locale is en_US
     * @param {number} year
     * @param {number} month
     * @param {number} date
     * @returns {number}
     */
    getDay(year: number, month: number, date: number): number {
        return (new Date(year, month, date)).getDay();
    }

    getFullMonth(year: number, month: number) {
        return this.getLocaleMonthsLong()[(new Date(year, month)).getMonth()];
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

    getDatesInCalendarView(monthNumber: number, dayNumber: number, yearNumber: number): CalendarDate[][] {
        const noOfDaysInCurrMonth: number = this.getNumberOfDaysInTheMonth(yearNumber, monthNumber);
        const noOfDaysInPrevMonth: number = this.getNumberOfDaysInTheMonth(yearNumber, monthNumber - 1);

        const calendarDates: CalendarDate[]
            = Array(noOfDaysInCurrMonth)
            .fill(null)
            .map((date, index) => {
                if (dayNumber === index + 1) {
                    return new CalendarDate(index + 1, true, true);
                } else {
                    return new CalendarDate(index + 1, true, false);
                }
            });

        const firstDayOfCurrMonth: number = this.getDay(yearNumber, monthNumber, 1);

        const prevDates: CalendarDate[]
            = Array(firstDayOfCurrMonth)
            .fill(null)
            .map((date, index) => new CalendarDate(noOfDaysInPrevMonth - index, false, false))
            .reverse();

        const leftDatesLength: number = TOTAL_DAYS_IN_MONTH_VIEW - (calendarDates.length + prevDates.length);

        const nextDates: CalendarDate[]
            = Array(leftDatesLength)
            .fill(null)
            .map((date, index) => new CalendarDate(index + 1, false, false));

        const finalArray: CalendarDate[] = [...prevDates, ...calendarDates, ...nextDates];

        const finalCalendarArray: CalendarDate[][] = [];

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
