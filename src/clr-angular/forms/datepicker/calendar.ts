/*
 * Copyright (c) 2016-2018 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */
import {Component} from "@angular/core";
import {LocaleHelperService} from "./providers/locale-helper.service";
import {CalendarViewModel} from "./model/calendar-view.model";
import {DateNavigationService} from "./providers/date-navigation.service";
import {DayModel} from "./model/day.model";
import {Subscription} from "rxjs/Subscription";
import {DayViewModel} from "./model/day-view.model";
import {IfOpenService} from "../../utils/conditional/if-open.service";

@Component({
    selector: "clr-calendar",
    templateUrl: "./calendar.html"
})
export class ClrCalendar {

    private sub: Subscription;

    constructor(
        private _localeHelperService: LocaleHelperService,
        private _dateNavigationService: DateNavigationService,
        private _ifOpenService: IfOpenService) {
        this.generateCalendarView();
        this._dateNavigationService.calendarChanged.subscribe(() => {
             this.generateCalendarView();
        });
    }

    get localeDaysNarrow(): ReadonlyArray<string> {
        return this._localeHelperService.localeDaysNarrow;
    }

    calendarViewModel: CalendarViewModel;

    private generateCalendarView(): void {
        this.calendarViewModel = new CalendarViewModel(this._dateNavigationService.calendar, this._localeHelperService.firstDayOfWeek);
        this.updateCalendarFlags();
    }

    /**
     * Set the selected and focusable DayModels in the calendar
     */
    private updateCalendarFlags(): void {
        if (this.selectedDay) {
            this.calendarViewModel.updateSelectedDay(this.selectedDay, true);
        }
        const focusableDay: DayModel = this.getFocusableDay();
        this.calendarViewModel.updateFocusableDay(focusableDay, true);
    }

    /**
     * Get the DayModel that should be focusable initially in the calendar.
     */
    private getFocusableDay(): DayModel {
        if (this.focusedDay) {
            if (this.calendarViewModel.isDayInCalendarView(this.focusedDay)) {
                return this.focusedDay;
            } else {
                this.focusedDay = null;
            }
        }
        if (this.selectedDay && this.calendarViewModel.isDayInCalendarView(this.selectedDay)) {
            return this.selectedDay;
        } else if (this.calendarViewModel.isDayInCalendarView(this._dateNavigationService.today)) {
            return this._dateNavigationService.today;
        } else {
            return new DayModel(this._dateNavigationService.calendar.year, this._dateNavigationService.calendar.month, 15);
        }
    }

    get focusedDay(): DayModel {
        return this._dateNavigationService.focusedDay;
    }

    set focusedDay(day: DayModel) {
        if (day && !day.isEqual(this.focusedDay)) {
            if (this.calendarViewModel) {
                this.calendarViewModel.updateFocusableDay(this.focusedDay, false);
                this.calendarViewModel.updateFocusableDay(day, true);
            }
            this._dateNavigationService.focusedDay = day;
        }
    }

    get selectedDay(): DayModel {
        return this._dateNavigationService.selectedDay;
    }

    set selectedDay(day: DayModel) {
        if (day && !day.isEqual(this.selectedDay)) {
            if (this.calendarViewModel) {
                this.calendarViewModel.updateSelectedDay(this.selectedDay, false);
                this.calendarViewModel.updateSelectedDay(day, true);
            }
            this._dateNavigationService.selectedDay = day;
        }
    }

    setDay(dayView: DayViewModel): void {
        const day: DayModel = dayView.dayModel;
        this.selectedDay = day;
    }
}
