/*
 * Copyright (c) 2017 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */
import {MonthViewType} from "./utils/month-view.enum";

export class CalendarDate {
    constructor(
        public date: number,
        public monthView: MonthViewType = MonthViewType.CURRENT,
        public isTodaysDate: boolean = false) {
    }
}
