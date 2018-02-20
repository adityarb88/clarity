/*
 * Copyright (c) 2016-2018 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */

import {Injectable} from "@angular/core";
import {Observable} from "rxjs/Observable";
import {Subject} from "rxjs/Subject";

import {DOWN_ARROW, LEFT_ARROW, RIGHT_ARROW, UP_ARROW} from "../../../utils/key-codes/key-codes";
import {CalendarModel} from "../model/calendar.model";
import {DayModel} from "../model/day.model";

@Injectable()
export class DateNavigationService {
    private _displayedCalendar: CalendarModel;

    get displayedCalendar(): CalendarModel {
        return this._displayedCalendar;
    }

    // not a setter because i want this to remain private
    private setDisplayedCalendar(value: CalendarModel) {
        if (!this._displayedCalendar.isEqual(value)) {
            this._displayedCalendar = value;
            this._displayedCalendarChange.next();
        }
    }

    initializeCalendar(): void {
        this.focusedDay = null;  // Can be removed later on the store focus
        if (this.selectedDay) {
            this._displayedCalendar = new CalendarModel(this.selectedDay.year, this.selectedDay.month);
        } else {
            this._displayedCalendar = new CalendarModel(this.currentYear, this.currentMonth);
        }
        this.initializeTodaysDate();
    }

    /**
     * Variable to store today's date.
     */
    private _todaysFullDate: Date = new Date();
    private _today: DayModel;

    private initializeTodaysDate(): void {
        this._todaysFullDate = new Date();
        this._today = new DayModel(this._todaysFullDate.getFullYear(), this._todaysFullDate.getMonth(),
                                   this._todaysFullDate.getDate());
    }

    get today(): DayModel {
        return this._today;
    }

    /**
     * Returns the current date.
     * eg: 1, 2, 3, ... 31.
     */
    get currentDate(): number {
        return this._todaysFullDate.getDate();
    }

    /**
     * Returns the current month as a 0-based value.
     * eg: 0, 1, 2, ... 12.
     */
    get currentMonth(): number {
        return this._todaysFullDate.getMonth();
    }

    /**
     * Returns the current year.
     * eg: 2018
     */
    get currentYear(): number {
        return this._todaysFullDate.getFullYear();
    }

    public selectedDay: DayModel;

    public focusedDay: DayModel;

    changeMonth(month: number): void {
        this.setDisplayedCalendar(new CalendarModel(this._displayedCalendar.year, month));
    }

    changeYear(year: number): void {
        this.setDisplayedCalendar(new CalendarModel(year, this._displayedCalendar.month));
    }

    moveToNextMonth(): void {
        this.setDisplayedCalendar(this._displayedCalendar.nextMonth());
    }

    moveToPreviousMonth(): void {
        this.setDisplayedCalendar(this._displayedCalendar.previousMonth());
    }

    moveToCurrentMonth(): void {
        this.setDisplayedCalendar(new CalendarModel(this.currentYear, this.currentMonth));
        this._focusOnCalendarChange.next();
    }

    private incrementFocusDay(value: number): void {
        this.focusedDay = this.focusedDay.incrementBy(value);
        if (this._displayedCalendar.isDayInCalendar(this.focusedDay)) {
            this._focusedDayChange.next();
        } else {
            this.setDisplayedCalendar(this.focusedDay.calendar);
        }
        this._focusOnCalendarChange.next();
    }

    private _displayedCalendarChange: Subject<void> = new Subject<void>();

    /**
     * This observable lets the subscriber know that the displayed calendar has changed.
     */
    get displayedCalendarChange(): Observable<void> {
        return this._displayedCalendarChange.asObservable();
    }

    private _focusOnCalendarChange: Subject<void> = new Subject<void>();

    /**
     * This observable lets the subscriber know that the focus should be applied on the calendar.
     */
    get focusOnCalendarChange(): Observable<void> {
        return this._focusOnCalendarChange.asObservable();
    }

    private _focusedDayChange: Subject<void> = new Subject<void>();

    /**
     * This observable lets the subscriber know that the focused day in the displayed calendar has changed.
     */
    get focusedDayChange(): Observable<void> {
        return this._focusedDayChange.asObservable();
    }

    adjustCalendarFocusOnKeyDownEvent(event: KeyboardEvent) {
        if (event && this.focusedDay) {
            switch (event.keyCode) {
                case UP_ARROW:
                    event.preventDefault();
                    this.incrementFocusDay(-7);
                    break;
                case DOWN_ARROW:
                    event.preventDefault();
                    this.incrementFocusDay(7);
                    break;
                case LEFT_ARROW:
                    event.preventDefault();
                    this.incrementFocusDay(-1);
                    break;
                case RIGHT_ARROW:
                    event.preventDefault();
                    this.incrementFocusDay(1);
                    break;
                default:
                    break;  // No default case. TSLint x-(
            }
        }
    }
}
