/*
 * Copyright (c) 2016-2018 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */

import {Subscription} from "rxjs/Subscription";

import {DOWN_ARROW, LEFT_ARROW, RIGHT_ARROW, UP_ARROW} from "../../../utils/key-codes/key-codes";
import {DayModel} from "../model/day.model";
import {createKeyboardEvent} from "../utils/test-utils";

import {DateNavigationService} from "./date-navigation.service";

export default function() {
    fdescribe("Date Navigation Service", () => {
        describe("Calendar Initialization", () => {
            let dateNavigationService: DateNavigationService;

            beforeEach(() => {
                dateNavigationService = new DateNavigationService();
            });

            it("initializes the calendar to the current month and year if the selected date is not set", () => {
                const date: Date = new Date();

                expect(dateNavigationService.displayedCalendar).toBeUndefined();

                dateNavigationService.initializeCalendar();

                expect(dateNavigationService.displayedCalendar).not.toBeUndefined();
                expect(dateNavigationService.displayedCalendar.month).toBe(date.getMonth());
                expect(dateNavigationService.displayedCalendar.year).toBe(date.getFullYear());
            });

            it("initializes the calendar to the selected date month and year, if the selected date is set", () => {
                dateNavigationService.selectedDay = new DayModel(2016, 1, 1);

                expect(dateNavigationService.displayedCalendar).toBeUndefined();

                dateNavigationService.initializeCalendar();

                expect(dateNavigationService.displayedCalendar).not.toBeUndefined();
                expect(dateNavigationService.displayedCalendar.month).toBe(1);
                expect(dateNavigationService.displayedCalendar.year).toBe(2016);
            });

            it("provides access to todays date on calendar initialization", () => {
                dateNavigationService.initializeCalendar();
                const date: Date = new Date();

                expect(dateNavigationService.today.date).toBe(date.getDate());
                expect(dateNavigationService.today.month).toBe(date.getMonth());
                expect(dateNavigationService.today.year).toBe(date.getFullYear());
            });

            it("provides access to todays day model on calendar initialization", () => {
                dateNavigationService.initializeCalendar();
                const date: Date = new Date();

                expect(dateNavigationService.today.date).toBe(date.getDate());
                expect(dateNavigationService.today.month).toBe(date.getMonth());
                expect(dateNavigationService.today.year).toBe(date.getFullYear());
            });
        });

        describe("Calendar Navigation API", () => {
            let dateNavigationService: DateNavigationService;

            beforeEach(() => {
                dateNavigationService = new DateNavigationService();
            });

            it("provides a function to update the Calendar Month", () => {
                dateNavigationService.selectedDay = new DayModel(2015, 1, 1);
                dateNavigationService.initializeCalendar();
                expect(dateNavigationService.displayedCalendar.month).toBe(1);

                dateNavigationService.changeMonth(2);
                expect(dateNavigationService.displayedCalendar.month).toBe(2);
            });

            it("provides a function to update the Calendar Year", () => {
                dateNavigationService.selectedDay = new DayModel(2016, 1, 1);
                dateNavigationService.initializeCalendar();
                expect(dateNavigationService.displayedCalendar.year).toBe(2016);

                dateNavigationService.changeYear(2018);
                expect(dateNavigationService.displayedCalendar.year).toBe(2018);
            });

            it("provides a function to move to the next month", () => {
                dateNavigationService.selectedDay = new DayModel(2016, 11, 1);
                dateNavigationService.initializeCalendar();

                expect(dateNavigationService.displayedCalendar.year).toBe(2016);
                expect(dateNavigationService.displayedCalendar.month).toBe(11);

                dateNavigationService.moveToNextMonth();
                expect(dateNavigationService.displayedCalendar.year).toBe(2017);
                expect(dateNavigationService.displayedCalendar.month).toBe(0);

                dateNavigationService.moveToNextMonth();
                expect(dateNavigationService.displayedCalendar.year).toBe(2017);
                expect(dateNavigationService.displayedCalendar.month).toBe(1);
            });

            it("provides a function to move to the previous month", () => {
                dateNavigationService.selectedDay = new DayModel(2017, 0, 1);
                dateNavigationService.initializeCalendar();

                expect(dateNavigationService.displayedCalendar.year).toBe(2017);
                expect(dateNavigationService.displayedCalendar.month).toBe(0);

                dateNavigationService.moveToPreviousMonth();
                expect(dateNavigationService.displayedCalendar.year).toBe(2016);
                expect(dateNavigationService.displayedCalendar.month).toBe(11);

                dateNavigationService.moveToPreviousMonth();
                expect(dateNavigationService.displayedCalendar.year).toBe(2016);
                expect(dateNavigationService.displayedCalendar.month).toBe(10);
            });

            it("provides a function to move to the current year and month", () => {
                dateNavigationService.selectedDay = new DayModel(2017, 0, 1);
                dateNavigationService.initializeCalendar();
                const date: Date = new Date();

                expect(dateNavigationService.displayedCalendar.year).toBe(2017);
                expect(dateNavigationService.displayedCalendar.month).toBe(0);

                dateNavigationService.moveToCurrentMonth();
                expect(dateNavigationService.displayedCalendar.year).toBe(date.getFullYear());
                expect(dateNavigationService.displayedCalendar.month).toBe(date.getMonth());
            });
        });

        describe("Handling Keyboard Events", () => {
            let dateNavigationService: DateNavigationService;

            beforeEach(() => {
                dateNavigationService = new DateNavigationService();
            });

            it("supports the focused day property", () => {
                expect(dateNavigationService.focusedDay).toBeUndefined();
                dateNavigationService.focusedDay = new DayModel(2015, 2, 2);
                expect(dateNavigationService.focusedDay).not.toBeUndefined();
            });
        });

        describe("Subscriptions", () => {
            let dateNavigationService: DateNavigationService;

            beforeEach(() => {
                dateNavigationService = new DateNavigationService();
                dateNavigationService.selectedDay = new DayModel(2015, 0, 25);
                dateNavigationService.initializeCalendar();
                dateNavigationService.focusedDay = new DayModel(2015, 0, 25);
            });

            it("notifies when the calendar has changed", () => {
                let count: number = 0;
                const sub: Subscription = dateNavigationService.displayedCalendarChange.subscribe(() => {
                    count++;
                });

                expect(count).toBe(0);

                dateNavigationService.moveToPreviousMonth();

                expect(count).toBe(1);

                dateNavigationService.moveToNextMonth();

                expect(count).toBe(2);

                sub.unsubscribe();
            });

            it("notifies when the focus day has changed but remains in the same calendar", () => {
                let count: number = 0;
                const sub: Subscription = dateNavigationService.focusedDayChange.subscribe(() => {
                    count++;
                });

                //Navigate in the Calendar
                expect(count).toBe(0);
                dateNavigationService.incrementFocusDay(-7);

                expect(count).toBe(1);

                dateNavigationService.incrementFocusDay(-1);

                expect(count).toBe(2);

                dateNavigationService.incrementFocusDay(2);

                expect(count).toBe(3);

                //Navigate outside of the current calendar.
                dateNavigationService.incrementFocusDay(31);

                //Should expect no change
                expect(count).toBe(3);

                sub.unsubscribe();
            });

            it("notifies to update focus on the calendar when the user navigates using the keyboard",
               () => {
                   let count: number = 0;
                   const sub: Subscription = dateNavigationService.focusOnCalendarChange.subscribe(() => {
                       count++;
                   });

                   expect(count).toBe(0);
                   dateNavigationService.incrementFocusDay(1);

                   expect(count).toBe(1);

                   dateNavigationService.incrementFocusDay(7);

                   expect(count).toBe(2);

                   sub.unsubscribe();
               });

            it("notifies to update focus on the calendar when the user moves to the current month", () => {
                let count: number = 0;
                const sub: Subscription = dateNavigationService.focusOnCalendarChange.subscribe(() => {
                    count++;
                });

                expect(count).toBe(0);
                dateNavigationService.moveToCurrentMonth();

                expect(count).toBe(1);

                sub.unsubscribe();
            });
        });
    });
}
