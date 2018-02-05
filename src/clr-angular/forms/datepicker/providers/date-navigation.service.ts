/*
 * Copyright (c) 2016-2018 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */

import {Injectable} from "@angular/core";
import {CalendarModel} from "../model/calendar.model";
import {DayModel} from "../model/day.model";
import {Subject} from "rxjs/Subject";
import {Observable} from "rxjs/Observable";
import {DOWN_ARROW, LEFT_ARROW, RIGHT_ARROW, UP_ARROW} from "../../../utils/key-codes/key-codes";

@Injectable()
export class DateNavigationService {

    private _calendar: CalendarModel;

    get calendar(): CalendarModel {
        return this._calendar;
    }

    //not a setter because i want this to remain private
    private setCalendar(value: CalendarModel) {
        if (!this._calendar.isEqual(value)) {
            this._calendar = value;
            this._calendarChanged.next();
        }
    }

    initializeCalendar(): void {
        this.focusedDay = null; //Can be removed later on the store focus
        if (this.selectedDay) {
            this._calendar = new CalendarModel(this.selectedDay.year, this.selectedDay.month);
        } else {
            this._calendar = new CalendarModel(this.currentYear, this.currentMonth);
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
        this._calendar.updateMonth(month);
    }

    changeYear(year: number): void {
        this._calendar.updateYear(year);
    }

    moveToNextMonth(): void {
        this.setCalendar(this._calendar.nextMonth());
    }

    moveToPreviousMonth(): void {
        this.setCalendar(this._calendar.previousMonth());
    }

    moveToCurrentMonth(): void {
        this.setCalendar(this._calendar.currentMonth());
        this._calendarFocusChanged.next();
    }

    private incrementFocusDay(value: number): void {
        this.focusedDay = this.focusedDay.incrementBy(value);
        if (this._calendar.isDayInCalendar(this.focusedDay)) {
            this._focusedDayChanged.next();
        } else {
            this.setCalendar(this.focusedDay.getCalendar());
        }
        this._calendarFocusChanged.next();
    }

    private _calendarChanged: Subject<void> = new Subject<void>();

    get calendarChanged(): Observable<void> {
        return this._calendarChanged.asObservable();
    }

    private _calendarFocusChanged: Subject<boolean> = new Subject<boolean>();

    get calendarFocusChanged(): Observable<boolean> {
        return this._calendarFocusChanged.asObservable();
    }

    private _focusedDayChanged: Subject<void> = new Subject<void>();

    get focusedDayChanged(): Observable<void> {
        return this._focusedDayChanged.asObservable();
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
