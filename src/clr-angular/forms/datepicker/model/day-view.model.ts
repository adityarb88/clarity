/*
 * Copyright (c) 2016-2018 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */

import {Day} from "./day.model";

export class DayView {
    constructor(public day: Day,
                public isTodaysDate: boolean = false,
                public isDisabled: boolean = false,
                public isSelected: boolean = false,
                public isFocusable: boolean = false) {}

    get tabIndex(): number {
        return this.isFocusable ? 0 : -1;
    }
}
