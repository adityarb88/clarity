/*
 * Copyright (c) 2016 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */

export function getLocaleDaysShort(): string[] {
    return ['S', 'M', 'T', 'W', 'T', 'F', 'S'];
};

export function getLocaleMonthsLong(): string[] {
    return ["January", "February", "March", "April", "May", "June",
        "July", "August", "September", "October", "November", "December"
    ];
};

export function getNumberOfDaysInTheMonth(year: number, month: number): number {
    return (new Date(year, month + 1, 0)).getDate(); // +1 because date starts at 1 and 0 means the previous months last date.
};

export function getDay(year: number, month: number, date: number): number {
    return (new Date(year, month, date)).getDay();
};

export function getFullMonth(year: number, month: number) {
    return getLocaleMonthsLong()[(new Date(year, month)).getMonth()];
};
