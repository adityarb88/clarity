/*
 * Copyright (c) 2016-2018 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */


import {Component, Input} from "@angular/core";

import {IfOpenService} from "../../utils/conditional/if-open.service";

import {DayViewModel} from "./model/day-view.model";
import {DayModel} from "./model/day.model";
import {DateIOService} from "./providers/date-io.service";
import {DateNavigationService} from "./providers/date-navigation.service";

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
    host: {"[class.day]": "true"}
})
export class ClrDay {
    constructor(private _dateNavigationService: DateNavigationService, private _dateIOService: DateIOService,
                private _ifOpenService: IfOpenService) {}

    /**
     * DayViewModel input which is used to build the Day View.
     */
    @Input("clrDayView") dayView: DayViewModel;

    /**
     * Updates the focusedDay in the DateNavigationService when the ClrDay is focused.
     */
    onDayViewFocus(dayView: DayViewModel) {
        this._dateNavigationService.focusedDay = dayView.dayModel;
    }

    /**
     * Updates the selectedDay when the ClrDay is selected and closes the datepicker popover.
     */
    setDay(dayView: DayViewModel): void {
        const day: DayModel = dayView.dayModel;
        // TODO: As of now both date navigation service and
        // date io service store the selected day.
        // Only one should be responsible for managing this.
        // Eudes and Jeremy mentioned that it should be the
        // DateNavigationService but most of the logic for building up the selected date
        // based on the user date is in the date io service.
        // I will figure out a good plan
        // to make this change.
        // I don't have the time to do that right now.
        this._dateNavigationService.selectedDay = day;
        this._dateIOService.updateDate(day.toDate());
        this._ifOpenService.open = false;
    }
}
