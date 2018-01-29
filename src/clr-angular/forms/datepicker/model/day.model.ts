/*
 * Copyright (c) 2016-2018 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */

export class Day {
    constructor(public year: number, public month: number, public date: number) {}

    /**
     * Checks if the passed CalendarDate is equal to itself.
     */
    isEqual(day: Day) {
        if (day) {
            return ((this.year === day.year) && (this.month === day.month) && (this.date === day.date));
        }
        return false;
    }

    /**
     * Converts the CalendarDate into the Javascript Date object.
     */
    toDate(): Date {
        const date: Date = new Date();
        date.setMonth(this.month);
        date.setFullYear(this.year);
        date.setDate(this.date);
        return date;
    }
}
