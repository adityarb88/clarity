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

@Injectable()
export class DateNavigationService {
    constructor() {
        this.initializeCalendar();
    }

    calendar: CalendarModel;

    private initializeCalendar(): void {
        if (this.selectedDay) {
            this.calendar = new CalendarModel(this.selectedDay.year, this.selectedDay.month);
        } else {
            this.calendar = new CalendarModel(this.currentYear, this.currentMonth);
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

    private _selectedDay: DayModel;

    get selectedDay(): DayModel {
        return this._selectedDay;
    }

    set selectedDay(day: DayModel) {
        if (day && day.isEqual(this._selectedDay)) {
            if (this._selectedDay) {

            }
            this._selectedDay = day;
        }
    }

    changeMonth(month: number): void {
        this.calendar.month = month;
        this._calendarChanged.next();
    }

    changeYear(year: number): void {
        this.calendar.year = year;
        this._calendarChanged.next();
    }

    private _calendarChanged: Subject<void> = new Subject();

    get calendarChanged(): Observable<void> {
        return this._calendarChanged.asObservable();
    }
}
