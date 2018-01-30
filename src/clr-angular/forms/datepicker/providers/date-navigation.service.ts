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

    set calendar(value: CalendarModel) {
        if (!this._calendar.isEqual(value)) {
            this._calendar = value;
            this._calendarChanged.next();
        }
    }

    initializeCalendar(): void {
        if (this.selectedDay) {
            this._calendar = new CalendarModel(this.selectedDay.year, this.selectedDay.month);
        } else {
            this._calendar = new CalendarModel(this.currentYear, this.currentMonth);
        }
    }

    /**
     * Variable to store today's date.
     */
    private todaysFullDate: Date = new Date();

    get today(): DayModel {
        return new DayModel(this.todaysFullDate.getFullYear(), this.todaysFullDate.getMonth(),
            this.todaysFullDate.getDate());
    }

    /**
     * Returns the current date.
     * eg: 1, 2, 3, ... 31.
     */
    get currentDate(): number {
        return this.todaysFullDate.getDate();
    }

    /**
     * Returns the current month as a 0-based value.
     * eg: 0, 1, 2, ... 12.
     */
    get currentMonth(): number {
        return this.todaysFullDate.getMonth();
    }

    /**
     * Returns the current year.
     * eg: 2018
     */
    get currentYear(): number {
        return this.todaysFullDate.getFullYear();
    }

    public selectedDay: DayModel;

    public focusedDay: DayModel;

    changeMonth(month: number): void {
        this._calendar.month = month;
    }

    changeYear(year: number): void {
        this._calendar.year = year;
    }

    moveToNextMonth(): void {
        this.calendar = this._calendar.nextMonth();
    }

    moveToPreviousMonth(): void {
        this.calendar = this._calendar.previousMonth();
    }

    moveToCurrentMonth(): void {
        this.calendar = this._calendar.currentMonth();
    }

    private adjustFocusDate(value: number): void {
        this.focusedDay = this.focusedDay.incrementBy(value);
        if (this._calendar.isDayInCalendar(this.focusedDay)) {
            this._focusedDayChanged.next();
        } else {
            this.calendar = this.focusedDay.getCalendar();
        }
    }

    private _calendarChanged: Subject<void> = new Subject<void>();

    get calendarChanged(): Observable<void> {
        return this._calendarChanged.asObservable();
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
                    this.adjustFocusDate(-7);
                    break;
                case DOWN_ARROW:
                    event.preventDefault();
                    this.adjustFocusDate(7);
                    break;
                case LEFT_ARROW:
                    event.preventDefault();
                    this.adjustFocusDate(-1);
                    break;
                case RIGHT_ARROW:
                    event.preventDefault();
                    this.adjustFocusDate(1);
                    break;
                default:
                    break;  // No default case. TSLint x-(
            }
        }
    }
}
