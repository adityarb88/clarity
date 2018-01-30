/*
 * Copyright (c) 2016-2018 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */


import {Component, Input} from "@angular/core";
import {DayViewModel} from "./model/day-view.model";
import {DateNavigationService} from "./providers/date-navigation.service";

@Component({
    selector: "clr-day",
    template: `
        <button
            class="date"
            type="button"
            [class.is-today]="dayView.isTodaysDate"
            [class.is-disabled]="dayView.isDisabled"
            [class.is-active]="dayView.isSelected"
            [attr.tabindex]="dayView.tabIndex"
            (click)="setDay(dayView)"
            (focus)="onDayViewFocus(dayView)">
            {{dayView.dayModel.date}}
        </button>
    `
})
export class ClrDay {
    constructor(private _dateNavigationService: DateNavigationService) {
    }

    @Input("clrDayView") dayView: DayViewModel;

    onDayViewFocus(dayView: DayViewModel) {
        this._dateNavigationService.focusedDay = dayView.dayModel;
    }

    setDay(dayView: DayViewModel): void {

    }
}
