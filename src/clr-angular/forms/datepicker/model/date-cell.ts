/*
 * Copyright (c) 2017 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */
import {CalendarDate} from "./calendar-date";
import {CalendarView} from "./calendar-view";

export class DateCell {
    constructor(
        public calendarDate: CalendarDate,
        public isTodaysDate: boolean = false,
        public calendarView: CalendarView) {
    }

    cellDisplayedInCalendarView(month: number, year: number): boolean {
        return (this.calendarView.month === month && this.calendarView.year === year);
    }
}
