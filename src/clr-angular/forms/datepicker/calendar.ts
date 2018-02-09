/*
 * Copyright (c) 2016-2018 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */
import {Component, ElementRef, HostListener, OnDestroy} from "@angular/core";
import {Subscription} from "rxjs/Subscription";

import {CalendarViewModel} from "./model/calendar-view.model";
import {CalendarModel} from "./model/calendar.model";
import {DayModel} from "./model/day.model";
import {DateNavigationService} from "./providers/date-navigation.service";
import {DatepickerViewService} from "./providers/datepicker-view.service";
import {LocaleHelperService} from "./providers/locale-helper.service";

@Component({selector: "clr-calendar", templateUrl: "./calendar.html"})
export class ClrCalendar implements OnDestroy {
    private _subs: Subscription[] = [];

    constructor(private _localeHelperService: LocaleHelperService,
                private _dateNavigationService: DateNavigationService,
                private _datepickerViewService: DatepickerViewService, private _elRef: ElementRef) {
        this.generateCalendarView();
        this.initializeSubscriptions();
    }

    private initializeSubscriptions(): void {
        this._subs.push(this._dateNavigationService.calendarChanged.subscribe(() => {
            this.calendarViewModel.updateCalendar(this.calendar, this.focusedDay);
        }));

        this._subs.push(this._dateNavigationService.focusedDayChanged.subscribe(() => {
            this.calendarViewModel.updateFocusableDay(this.focusedDay);
        }));

        this._subs.push(this._dateNavigationService.calendarFocusChanged.subscribe(() => {
            this._datepickerViewService.focusCell(this._elRef);
        }));
    }

    get localeDaysNarrow(): ReadonlyArray<string> {
        return this._localeHelperService.localeDaysNarrow;
    }

    get calendar(): CalendarModel {
        return this._dateNavigationService.calendar;
    }

    get selectedDay(): DayModel {
        return this._dateNavigationService.selectedDay;
    }

    get focusedDay(): DayModel {
        return this._dateNavigationService.focusedDay;
    }

    get today(): DayModel {
        return this._dateNavigationService.today;
    }

    calendarViewModel: CalendarViewModel;

    private generateCalendarView(): void {
        this.calendarViewModel = new CalendarViewModel(this.calendar, this.selectedDay, this.focusedDay, this.today,
                                                       this._localeHelperService.firstDayOfWeek);
    }

    @HostListener("keydown", ["$event"])
    onKeyDown(event: KeyboardEvent) {
        this._dateNavigationService.adjustCalendarFocusOnKeyDownEvent(event);
    }

    ngAfterViewInit() {
        this._datepickerViewService.focusCell(this._elRef);
    }

    ngOnDestroy(): void {
        this._subs.forEach((sub: Subscription) => sub.unsubscribe());
    }
}
