/*
 * Copyright (c) 2017 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */

export class CalendarDate {
    constructor(public date: number,
                public month: number,
                public year: number) {
    }

    /**
     * Checks if the passed CalendarDate is equal to itself.
     * @param {CalendarDate} calDate
     * @returns {boolean}
     */
    isEqual(calDate: CalendarDate) {
        if (calDate) {
            return ((this.date === calDate.date)
                && (this.month === calDate.month)
                && (this.year === calDate.year));
        } else {
            return false;
        }
    }

    isTodaysDate(): boolean {
        const todaysDate: Date = new Date();
        return ((this.date === todaysDate.getDate())
            && (this.month === todaysDate.getMonth())
            && (this.year === todaysDate.getFullYear()));
    }

    toDate(): Date {
        const date: Date = new Date();
        date.setMonth(this.month);
        date.setFullYear(this.year);
        date.setDate(this.date);
        return date;
    }
}
