/*
 * Copyright (c) 2016-2018 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */

import {Component} from "@angular/core";

import {TestContext} from "../../data/datagrid/helpers.spec";
import {IfOpenService} from "../../utils/conditional/if-open.service";
import {UP_ARROW} from "../../utils/key-codes/key-codes";

import {ClrCalendar} from "./calendar";
import {DayModel} from "./model/day.model";
import {DateIOService} from "./providers/date-io.service";
import {DateNavigationService} from "./providers/date-navigation.service";
import {DatepickerViewService} from "./providers/datepicker-view.service";
import {LocaleHelperService} from "./providers/locale-helper.service";
import {ViewManagerService} from "./providers/view-manager.service";
import {createKeyboardEvent} from "./utils/test-utils";

export default function() {
    describe("Calendar Component", () => {
        let context: TestContext<ClrCalendar, TestComponent>;
        let dateNavigationService: DateNavigationService;

        beforeEach(function() {
            dateNavigationService = new DateNavigationService();
            // Initializing selected day just to make sure that previous and next month tests become easier
            dateNavigationService.selectedDay = new DayModel(2015, 0, 1);
            dateNavigationService.initializeCalendar();

            context = this.create(ClrCalendar, TestComponent, [
                {provide: DateNavigationService, useValue: dateNavigationService}, DateIOService, IfOpenService,
                ViewManagerService, LocaleHelperService, DatepickerViewService
            ]);
        });

        describe("View Basics", () => {
            it("renders the days", () => {
                const days: HTMLElement[] = context.clarityElement.querySelectorAll("clr-day");
                expect(days.length).toBe(42);
            });

            it("renders the weekdays", () => {
                const days: HTMLElement[] = context.clarityElement.querySelectorAll(".weekdays .calendar-cell");
                expect(days.length).toBe(7);
            });
        });

        describe("Typescript API", () => {
            it("generates a CalendarViewModel on initialization", () => {
                // Testing for the Jan 2015 calendar since that was the selected date in
                // beforeEach before the calendar was initialized
                expect(context.clarityDirective.calendarViewModel).not.toBeNull();
                expect(context.clarityDirective.calendarViewModel.calendar.month).toBe(0);
                expect(context.clarityDirective.calendarViewModel.calendar.year).toBe(2015);
            });

            it("has access to the selectedDay", () => {
                expect(context.clarityDirective.selectedDay.month).toBe(0);
                expect(context.clarityDirective.selectedDay.year).toBe(2015);
                expect(context.clarityDirective.selectedDay.date).toBe(1);
            });

            it("has access to todays date", () => {
                const date: Date = new Date();
                expect(context.clarityDirective.today.date).toBe(date.getDate());
                expect(context.clarityDirective.today.month).toBe(date.getMonth());
                expect(context.clarityDirective.today.year).toBe(date.getFullYear());
            });

            it("has access to the CalendarModel", () => {
                expect(context.clarityDirective.calendar.month).toBe(0);
                expect(context.clarityDirective.calendar.year).toBe(2015);
            });

            it("has access to the focusable day", () => {
                expect(context.clarityDirective.focusedDay.month).toBe(0);
                expect(context.clarityDirective.focusedDay.year).toBe(2015);
                expect(context.clarityDirective.focusedDay.date).toBe(1);
            });

            it("has access to the locale days", () => {
                expect(context.clarityDirective.localeDaysNarrow).not.toBeNull();
                expect(context.clarityDirective.localeDaysNarrow.length).toBe(7);
            });

            it("delegates the keyboard event to the navigation service", () => {
                spyOn(dateNavigationService, "adjustCalendarFocusOnKeyDownEvent");
                context.clarityDirective.onKeyDown(createKeyboardEvent(UP_ARROW, "test"));
                expect(dateNavigationService.adjustCalendarFocusOnKeyDownEvent).toHaveBeenCalled();
            });
        });
    });
}


@Component({
    template: `
        <clr-calendar></clr-calendar>
    `
})
class TestComponent {}
