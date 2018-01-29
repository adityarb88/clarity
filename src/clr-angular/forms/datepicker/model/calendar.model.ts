/*
 * Copyright (c) 2016-2018 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */

import {DayModel} from "./day.model";

export class CalendarModel {
    constructor(public year: number, public month: number) {}

    isDayInCalendar(day: DayModel): boolean {
        return (this.year === day.year && this.month === day.month);
    }

    /**
     * Returns CalendarModel of the previous month.
     */
    previousMonth(): CalendarModel {
        if (this.month === 0) {
            return new CalendarModel(this.year - 1, 11);
        } else {
            return new CalendarModel(this.year, this.month - 1);
        }
    }

    /**
     * Returns CalendarModel of the next month.
     */
    nextMonth(): CalendarModel {
        if (this.month === 11) {
            return new CalendarModel(this.year + 1, 0);
        } else {
            return new CalendarModel(this.year, this.month + 1);
        }
    }

    /**
     * Returns CalendarModel of the current month.
     */
    currentMonth(): CalendarModel {
        const date: Date = new Date();
        return new CalendarModel(date.getFullYear(), date.getMonth());
    }
}
