/*
 * Copyright (c) 2016-2018 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */

import {NO_OF_DAYS_IN_A_WEEK, NO_OF_ROWS_IN_CALENDAR_VIEW} from "../utils/constants";
import {DayView} from "./day-view.model";
import {Calendar} from "./calendar.model";
import {Day} from "./day.model";

export class CalendarView {
    constructor(public prev: DayView[], public current: DayView[], public next: DayView[],
                public calendar: Calendar) {
        this.convertDaysIntoCalendarView(prev, current, next);
    }

    private _calendarView: DayView[][];

    /**
     * DayView matrix. Size 6x7
     */
    get calendarView(): DayView[][] {
        return this._calendarView;
    }

    /**
     * Checks if the Day passed is in the CalendarView.
     */
    isDayInCalendarView(day: Day): boolean {
        if (!this.calendar.isDayInCalendar(day)) {
            return false;
        }
        return true;
    }

    /**
     * If the Day exists in the CalendarView, sets its selected flag
     */
    setDateSelectedFlag(day: Day, flag: boolean): void {
        if (this.isDayInCalendarView(day)) {
            this.current[day.date - 1].isSelected = flag;
        }
    }

    /**
     * If the Day exists in the matrix, sets its focusable flag
     */
    setDateFocusableFlag(day: Day, flag: boolean): void {
        if (this.isDayInCalendarView(day)) {
            this.current[day.date - 1].isFocusable = flag;
        }
    }

    /**
     * Using the DayViews from the previous, current and next month, this function
     * generates the CalendarView.
     */
    private convertDaysIntoCalendarView(prev: DayView[], curr: DayView[], next: DayView[]): void {
        const combinationArr: DayView[] = [...prev, ...curr, ...next];

        const matrix: DayView[][] = [];
        for (let i = 0; i < NO_OF_ROWS_IN_CALENDAR_VIEW; i++) {
            const tempArr: DayView[] = [];
            for (let j = 0; j < NO_OF_DAYS_IN_A_WEEK; j++) {
                tempArr.push(combinationArr.shift());
            }
            matrix.push(tempArr);
        }

        this._calendarView = matrix;
    }
}
