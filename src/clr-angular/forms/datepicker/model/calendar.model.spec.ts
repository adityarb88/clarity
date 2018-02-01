/*
 * Copyright (c) 2016-2018 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */

import {CalendarModel} from "./calendar.model";
import {DayModel} from "./day.model";

export default function (): void {
    describe("Calendar Model", function () {
        const calendarModel1: CalendarModel = new CalendarModel(2018, 5);
        const calendarModel2: CalendarModel = new CalendarModel(2017, 1);
        const calendarModel3: CalendarModel = new CalendarModel(2018, 5);
        const dayModel1: DayModel = new DayModel(2018, 5, 25);
        const dayModel2: DayModel = new DayModel(2018, 1, 25);

        it("checks if the passed CalendarDate is in the CalendarView or not", () => {
            expect(calendarModel1.year).toBe(2018);
            expect(calendarModel1.month).toBe(5);

            expect(calendarModel1.isDayInCalendar(dayModel1)).toBe(true);
            expect(calendarModel1.isDayInCalendar(dayModel2)).toBe(false);
            expect(calendarModel1.isDayInCalendar(null)).toBe(false);
        });

        it("checks if two CalendarModels are equal", () => {
            expect(calendarModel1.isEqual(calendarModel3)).toBe(true);
            expect(calendarModel1.isEqual(calendarModel2)).toBe(false);
            expect(calendarModel1.isEqual(null)).toBe(false);
        });

        it("returns a CalendarModel from the next month", () => {
            let calModel: CalendarModel = calendarModel1;

            for (let i = 5; i < 11; i++) {
                calModel = calModel.nextMonth();
                expect(calModel.year).toBe(2018);
                expect(calModel.month).toBe(i + 1);
            }

            calModel = calModel.nextMonth();
            expect(calModel.year).toBe(2019);
            expect(calModel.month).toBe(0);
        });

        it("returns a CalendarModel from the previous month", () => {
            let calModel: CalendarModel = calendarModel1;

            for (let i = 4; i >= 0; i--) {
                calModel = calModel.previousMonth();
                expect(calModel.year).toBe(2018);
                expect(calModel.month).toBe(i);
            }

            calModel = calModel.previousMonth();
            expect(calModel.year).toBe(2017);
            expect(calModel.month).toBe(11);
        });

        it("returns a CalendarModel from the current month", () => {
            const date: Date = new Date();
            const calModel: CalendarModel = calendarModel1.currentMonth();

            expect(calModel.year).toBe(date.getFullYear());
            expect(calModel.month).toBe(date.getMonth());
        });
    });
}
