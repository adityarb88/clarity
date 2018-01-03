/*
 * Copyright (c) 2016-2017 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */

import {WeekDay} from "@angular/common";

/**
 * Returns the number of days in a month. 28, 29, 30 or 31
 * @param {number} year
 * @param {number} month
 * @returns {number}
 */
export function getNumberOfDaysInTheMonth(year: number, month: number): number {
    //month + 1 because we want to go to the next month
    //date 0 because date is 1 based and 0 means we are getting the last date of the previous month.
    //confusing but works
    return (new Date(year,  month + 1, 0)).getDate();
}

/**
 * Returns the day for the corresponding date where 0 represents Sunday.
 * @param {number} year
 * @param {number} month
 * @param {number} date
 * @returns {number}
 */
export function getDay(year: number, month: number, date: number): WeekDay {
    return (new Date(year, month, date)).getDay();
}
