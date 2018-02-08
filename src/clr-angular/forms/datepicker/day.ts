/*
 * Copyright (c) 2016-2018 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */


import {Component, Input} from "@angular/core";
import {DayViewModel} from "./model/day-view.model";
import {DateNavigationService} from "./providers/date-navigation.service";
import {IfOpenService} from "../../utils/conditional/if-open.service";
import {DateIOService} from "./providers/date-io.service";
import {DayModel} from "./model/day.model";

@Component({
    selector: "clr-day",
    template: `
        <button
            class="day-btn"
            type="button"
            [class.is-today]="dayView.isTodaysDate"
            [class.is-disabled]="dayView.isDisabled"
            [class.is-selected]="dayView.isSelected"
            [attr.tabindex]="dayView.tabIndex"
            (click)="setDay(dayView)"
            (focus)="onDayViewFocus(dayView)">
            {{dayView.dayModel.date}}
        </button>
    `,
    host: {
        "[class.day]": "true"
    }
})
export class ClrDay {
    constructor(
        private _dateNavigationService: DateNavigationService,
        private _dateIOService: DateIOService,
        private _ifOpenService: IfOpenService) {
    }

    @Input("clrDayView") dayView: DayViewModel;

    onDayViewFocus(dayView: DayViewModel) {
        this._dateNavigationService.focusedDay = dayView.dayModel;
    }

    setDay(dayView: DayViewModel): void {
        const day: DayModel = dayView.dayModel;
        this._dateNavigationService.selectedDay = day;
        this._dateIOService.updateDate(day.toDate());
        this._ifOpenService.open = false;
    }
}
