/*
 * Copyright (c) 2016-2018 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */

import {NO_OF_DAYS_IN_A_WEEK, NO_OF_ROWS_IN_CALENDAR_VIEW, TOTAL_DAYS_IN_DAYS_VIEW} from "../utils/constants";
import {DayViewModel} from "./day-view.model";
import {CalendarModel} from "./calendar.model";
import {DayModel} from "./day.model";
import {getDay, getNumberOfDaysInTheMonth} from "../utils/date-utils";

export class CalendarViewModel {

    constructor(public calendar: CalendarModel, public firstDayOfWeek: number) {
        this.generateCalendarView();
    }

    private prevMonthDayViews: DayViewModel[] = [];
    private currMonthDayViews: DayViewModel[] = [];
    private nextMonthDayViews: DayViewModel[] = [];

    /**
     * Generates a 6x7 matrix of DayViewModel based on the Calendar.
     * The 6x7 matrix is structured according to the first day of the week.
     * 6 rows to accommodate months which might have dates spanning over 6 weeks.
     * 7 columns because there are 7 days in a week :P :D
     */
    private generateCalendarView(): void {
        const calYear: number = this.calendar.year;
        const calMonth: number = this.calendar.month;
        const noOfDaysInPrevMonth: number = getNumberOfDaysInTheMonth(calYear, calMonth - 1);
        const noOfDaysInCurrMonth: number = getNumberOfDaysInTheMonth(calYear, calMonth);

        this.generateDayViewsFromPrevMonth(calYear, calMonth, noOfDaysInPrevMonth);
        this.generateDayViewsFromCurrMonth(calYear, calMonth, noOfDaysInCurrMonth);

        const noOfDaysInNextMonth: number = TOTAL_DAYS_IN_DAYS_VIEW - (noOfDaysInCurrMonth + this.prevMonthDayViews.length);

        this.generateDayViewsFromNextMonth(calYear, calMonth, noOfDaysInNextMonth);
        this.formatView();
    }

    /**
     * Generates the DayViewModels required in the current view from the previous month.
     */
    private generateDayViewsFromPrevMonth(year: number, month: number, noOfDays: number): void {
        const datesFromPrevMonthInCalendarView: number = this.noOfDaysFromPreviousMonthInCalendarView(year, month);
        const prevMonthCalendar: CalendarModel = (new CalendarModel(year, month)).previousMonth();
        const datesInPreviousMonth: DayViewModel[] =
            Array(datesFromPrevMonthInCalendarView).fill(null).map((date, index) => {
                const day: DayModel =
                    new DayModel(prevMonthCalendar.year, prevMonthCalendar.month,
                        noOfDays - (datesFromPrevMonthInCalendarView - (index + 1)));
                return new DayViewModel(day, false, true, false, false);
            });
        this.prevMonthDayViews = datesInPreviousMonth;
    }

    /**
     * Generates the DayViewModels for the current month.
     */
    private generateDayViewsFromCurrMonth(year: number, month: number, noOfDays: number): void {
        const datesinCurrentMonth: DayViewModel[] = Array(noOfDays).fill(null).map((date, index) => {
            const day: DayModel = new DayModel(year, month, index + 1);
            return new DayViewModel(day, false, false, false, false);
        });

        // Check for today's date
        const todaysDate: Date = new Date();
        if (year === todaysDate.getFullYear() && month === todaysDate.getMonth()) {
            datesinCurrentMonth[todaysDate.getDate() - 1].isTodaysDate = true;
        }
        this.currMonthDayViews = datesinCurrentMonth;
    }

    /**
     * Generates the DayViewModels required in the current view from the next month.
     */
    private generateDayViewsFromNextMonth(year: number, month: number, noOfDays: number): void {
        const nextMonthCalendar: CalendarModel = (new CalendarModel(year, month)).nextMonth();
        const datesInNextMonth: DayViewModel[] = Array(noOfDays).fill(null).map((date, index) => {
            const day: DayModel = new DayModel(nextMonthCalendar.year, nextMonthCalendar.month, index + 1);
            return new DayViewModel(day, false, true, false, false);
        });

        this.nextMonthDayViews = datesInNextMonth;
    }

    /**
     * Gets the first day of the current month to figure out how many dates of previous month
     * are needed to complete the Calendar View based on the first day of the week.
     * eg: Assuming locale en-US, the first day of the week is Sunday,
     * if first day of the current month lands on Wednesday, then
     * (this.getDay function would return 3 since
     * first day of the week is 0), we need the 3 days from the previous month.
     */
    private noOfDaysFromPreviousMonthInCalendarView(year: number, month: number): number {
        const firstDayOfCurrMonth: number = getDay(year, month, 1);

        if (firstDayOfCurrMonth >= this.firstDayOfWeek) {
            return firstDayOfCurrMonth - this.firstDayOfWeek;
        } else {
            return NO_OF_DAYS_IN_A_WEEK + firstDayOfCurrMonth - this.firstDayOfWeek;
        }
    }

    private _calendarView: DayViewModel[][];

    /**
     * DayViewModel matrix. Size 6x7
     */
    get calendarView(): DayViewModel[][] {
        return this._calendarView;
    }

    /**
     * Checks if the Day passed is in the CalendarView.
     */
    isDayInCalendarView(day: DayModel): boolean {
        if (!this.calendar.isDayInCalendar(day)) {
            return false;
        }
        return true;
    }

    /**
     * If the Day exists in the CalendarView, sets its selected flag
     */
    updateSelectedDay(day: DayModel, flag: boolean): void {
        if (!day) {
            return;
        }
        if (this.isDayInCalendarView(day)) {
            this.currMonthDayViews[day.date - 1].isSelected = flag;
        }
    }

    /**
     * If the DayModel exists in the matrix, sets its focusable flag
     */
    updateFocusableDay(day: DayModel, flag: boolean): void {
        if (!day) {
            return;
        }
        if (this.isDayInCalendarView(day)) {
            this.currMonthDayViews[day.date - 1].isFocusable = flag;
        }
    }

    /**
     * Using the DayViewModels from the previous, current and next month, this function
     * generates the CalendarView.
     */
    private formatView(): void {
        const combinationArr: DayViewModel[] = [...this.prevMonthDayViews, ...this.currMonthDayViews, ...this.nextMonthDayViews];

        const calendarView: DayViewModel[][] = [];
        for (let i = 0; i < NO_OF_ROWS_IN_CALENDAR_VIEW; i++) {
            const tempArr: DayViewModel[] = [];
            for (let j = 0; j < NO_OF_DAYS_IN_A_WEEK; j++) {
                tempArr.push(combinationArr.shift());
            }
            calendarView.push(tempArr);
        }
        this._calendarView = calendarView;
    }
}
