/*
 * Copyright (c) 2016-2018 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */

import {DayModel} from "./day.model";
import {assertEqualDates} from "../utils/test-utils";

export default function (): void {
    describe("DayModel", function () {
        const dayModel1: DayModel = new DayModel(2018, 0, 1);
        const dayModel2: DayModel = new DayModel(2018, 5, 21);
        const dayModel3: DayModel = new DayModel(2018, 0, 1);

        function incrementDayModelAndCompare(dayModel: DayModel, incrementBy: number) {
            const date: Date = dayModel.toDate();
            const testDate: Date = dayModel.incrementBy(incrementBy).toDate();

            date.setDate(date.getDate() + incrementBy);
            expect(assertEqualDates(date, testDate)).toBe(true);
        }

        it("2 DayModels are equal when the month, year and date matches", () => {
            expect(dayModel1.isEqual(dayModel3)).toBe(true);
            expect(dayModel3.isEqual(dayModel1)).toBe(true);

            expect(dayModel1.isEqual(dayModel2)).toBe(false);
            expect(dayModel2.isEqual(dayModel1)).toBe(false);

            expect(dayModel3.isEqual(dayModel2)).toBe(false);
            expect(dayModel2.isEqual(dayModel3)).toBe(false);

            expect(dayModel1.isEqual(null)).toBe(false);
        });

        it("converts a DayModel into the javascript date object", () => {
            const date1: Date = dayModel1.toDate();
            const date2: Date = dayModel2.toDate();

            expect(date1).not.toBeNull();
            expect(date1.getDate()).toBe(1);
            expect(date1.getMonth()).toBe(0);
            expect(date1.getFullYear()).toBe(2018);

            expect(date2).not.toBeNull();
            expect(date2.getDate()).toBe(21);
            expect(date2.getMonth()).toBe(5);
            expect(date2.getFullYear()).toBe(2018);
        });

        it("provides a method to clone a DayModel and increment or decrement it by a number of days", () => {
            incrementDayModelAndCompare(dayModel2, 20);
            incrementDayModelAndCompare(dayModel2, -20);

            incrementDayModelAndCompare(dayModel2, 40);
            incrementDayModelAndCompare(dayModel2, -40);

            incrementDayModelAndCompare(dayModel1, 1);
            incrementDayModelAndCompare(dayModel1, -1);
        });

        it("returns the Calendar in which the DayModel belongs in", () => {
            expect(dayModel1.getCalendar()).not.toBeNull();
            expect(dayModel2.getCalendar()).not.toBeNull();

            expect(dayModel1.getCalendar().month).toBe(0);
            expect(dayModel1.getCalendar().year).toBe(2018);

            expect(dayModel2.getCalendar().month).toBe(5);
            expect(dayModel2.getCalendar().year).toBe(2018);
        });

        it("returns a clone of the DayModel", () => {
            let testDayModel: DayModel = dayModel1.clone();
            expect(assertEqualDates(testDayModel.toDate(), dayModel1.toDate())).toBe(true);

            testDayModel = dayModel2.clone();
            expect(assertEqualDates(testDayModel.toDate(), dayModel2.toDate())).toBe(true);
        });
    });
}