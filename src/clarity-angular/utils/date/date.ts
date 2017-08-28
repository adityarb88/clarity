/*
 * Copyright (c) 2016 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */

//TODO: Get this from Angular Locale Lib
export function getLocaleDaysShort(): string[] {
    return ['S', 'M', 'T', 'W', 'T', 'F', 'S'];
};

//TODO: Get this from Angular Locale Lib
export function getLocaleMonthsLong(): string[] {
    return ["January", "February", "March", "April", "May", "June",
        "July", "August", "September", "October", "November", "December"
    ];
};

/**
 * Returns the number of days in a month. 28, 29, 30 or 31
 * @param {number} year
 * @param {number} month
 * @returns {number}
 */
export function getNumberOfDaysInTheMonth(year: number, month: number): number {
    return (new Date(year, month + 1, 0)).getDate(); // +1 because date starts at 1 and 0 means the previous months last date.
};

/**
 * Returns the first day of the week.
 * For eg: 0 for Sunday, 1 for Monday and so on when locale is en_US
 * @param {number} year
 * @param {number} month
 * @param {number} date
 * @returns {number}
 */
export function getDay(year: number, month: number, date: number): number {
    return (new Date(year, month, date)).getDay();
};

export function getFullMonth(year: number, month: number) {
    return getLocaleMonthsLong()[(new Date(year, month)).getMonth()];
};
