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

    /**
     * Calendar View Model to generate the Calendar.
     */
    calendarViewModel: CalendarViewModel;

    /**
     * Gets the locale days according to the TranslationWidth.Narrow format.
     */
    get localeDaysNarrow(): ReadonlyArray<string> {
        return this._localeHelperService.localeDaysNarrow;
    }

    get calendar(): CalendarModel {
        return this._dateNavigationService.displayedCalendar;
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

    /**
     * Initialize subscriptions to:
     * 1. update the calendar view model.
     * 2. update the focusable day in the calendar view model.
     * 3. focus on the focusable day in the calendar.
     */
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

    /**
     * Generates the Calendar View based on the calendar retrieved from the DateNavigationService.
     */
    private generateCalendarView(): void {
        this.calendarViewModel = new CalendarViewModel(this.calendar, this.selectedDay, this.focusedDay, this.today,
                                                       this._localeHelperService.firstDayOfWeek);
    }

    /**
     * Delegates Keyboard arrow navigation to the DateNavigationService.
     * @param {KeyboardEvent} event
     */
    @HostListener("keydown", ["$event"])
    onKeyDown(event: KeyboardEvent) {
        this._dateNavigationService.adjustCalendarFocusOnKeyDownEvent(event);
    }

    /**
     * Focuses on the focusable day when the Calendar View is initialized.
     */
    ngAfterViewInit() {
        this._datepickerViewService.focusCell(this._elRef);
    }

    /**
     * Unsubscribe from subscriptions.
     */
    ngOnDestroy(): void {
        this._subs.forEach((sub: Subscription) => sub.unsubscribe());
    }
}
