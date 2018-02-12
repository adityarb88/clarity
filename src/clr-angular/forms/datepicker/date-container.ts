/*
 * Copyright (c) 2016-2018 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */
import {Component, OnDestroy} from "@angular/core";
import {Subscription} from "rxjs/Subscription";

import {IfOpenService} from "../../utils/conditional/if-open.service";
import {DynamicWrapper} from "../../utils/host-wrapping";
import {FormControlService} from "../common/form-control.service";

import {DayModel} from "./model/day.model";
import {DateIOService} from "./providers/date-io.service";
import {DateNavigationService} from "./providers/date-navigation.service";
import {DatepickerEnabledService} from "./providers/datepicker-enabled.service";
import {LocaleHelperService} from "./providers/locale-helper.service";

@Component({
    selector: "clr-date-container",
    template: `
        <ng-content></ng-content>
        <button
            type="button"
            class="datepicker-trigger"
            (click)="toggleDatepicker($event)"
            *ngIf="isEnabled">
            <clr-icon shape="calendar"></clr-icon>
        </button>
        <clr-datepicker-view-manager *clrIfOpen clrFocusTrap></clr-datepicker-view-manager>
    `,
    providers: [
        FormControlService, IfOpenService, LocaleHelperService, DateIOService, DateNavigationService,
        DatepickerEnabledService
    ],
    host: {"[class.date-container]": "true"}
})
export class ClrDateContainer implements DynamicWrapper, OnDestroy {
    // Unused but have to add it :-(
    _dynamic: boolean = false;

    private _sub: Subscription;

    constructor(private _ifOpenService: IfOpenService, private _dateNavigationService: DateNavigationService,
                private _dateIOService: DateIOService, private _datepickerEnabledService: DatepickerEnabledService) {
        this._sub = this._ifOpenService.openChange.subscribe((open) => {
            if (open) {
                this.initializeCalendar();
            }
        });
    }

    /**
     * Returns if the Datepicker is enabled or not. If disabled, hides the datepicker trigger.
     * @returns {boolean}
     */
    get isEnabled(): boolean {
        return this._datepickerEnabledService.isEnabled;
    }

    /**
     * Converts the Date javascript object into a DayModel which will be used to initialize the Calendar.
     */
    private processUserInput(): void {
        const date: Date = this._dateIOService.date;
        if (date) {
            const dayModel: DayModel = new DayModel(date.getFullYear(), date.getMonth(), date.getDate());
            this._dateNavigationService.selectedDay = dayModel;
        } else {
            this._dateNavigationService.selectedDay = null;
        }
    }

    /**
     * Processes the user input and Initializes the Calendar everytime the datepicker popover is open.
     */
    private initializeCalendar(): void {
        this.processUserInput();
        this._dateNavigationService.initializeCalendar();
    }

    /**
     * Toggles the Datepicker Popover.
     */
    toggleDatepicker(event: MouseEvent) {
        this._ifOpenService.toggleWithEvent(event);
    }

    /**
     * Unsubscribe from subscriptions.
     */
    ngOnDestroy() {
        this._sub.unsubscribe();
    }
}
