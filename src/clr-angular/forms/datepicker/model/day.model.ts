/*
 * Copyright (c) 2016-2018 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */

import {CalendarModel} from "./calendar.model";

export class DayModel {
    constructor(public year: number, public month: number, public date: number) {}

    /**
     * Checks if the passed CalendarDate is equal to itself.
     */
    isEqual(day: DayModel) {
        if (day) {
            return ((this.year === day.year) && (this.month === day.month) && (this.date === day.date));
        }
        return false;
    }

    /**
     * Converts the CalendarDate into the Javascript Date object.
     */
    toDate(): Date {
        return new Date(this.year, this.month, this.date);
    }

    incrementBy(value: number): DayModel {
        // Creating new Javascript Date object to increment because
        // it will automatically take care of switching to next or previous
        // months & years without we having to worry about it.
        const date: Date = new Date(this.year, this.month, this.date + value);
        return new DayModel(date.getFullYear(), date.getMonth(), date.getDate());
    }

    getCalendar(): CalendarModel {
        return new CalendarModel(this.year, this.month);
    }

    clone(): DayModel {
        return new DayModel(this.year, this.month, this.date);
    }
}
