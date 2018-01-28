/*
 * Copyright (c) 2016-2018 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */

export class DayModel {
    constructor(public year: number, public month: number, public date: number) {}

    /**
     * Checks if the passed CalendarDate is equal to itself.
     */
    isEqual(dayModel: DayModel) {
        if (dayModel) {
            return ((this.year === dayModel.year) && (this.month === dayModel.month) && (this.date === dayModel.date));
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
