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
}
