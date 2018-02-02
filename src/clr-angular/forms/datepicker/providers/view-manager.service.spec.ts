/*
 * Copyright (c) 2016-2018 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */

import {ViewManagerService} from "./view-manager.service";

export default function () {
    describe("View Manager Service", () => {
        let viewManagerService: ViewManagerService;

        beforeEach(() => {
            viewManagerService = new ViewManagerService();
        });

        it("Initializes the View Manager with the DayPicker", () => {
            expect(viewManagerService.dayView).toBe(true);
            expect(viewManagerService.monthView).toBe(false);
            expect(viewManagerService.yearView).toBe(false);
        });

        it("provides a method to change to month view", () => {
            viewManagerService.changeToMonthView();

            expect(viewManagerService.dayView).toBe(false);
            expect(viewManagerService.monthView).toBe(true);
            expect(viewManagerService.yearView).toBe(false);
        });

        it("provides a method to change to year view", () => {
            viewManagerService.changeToYearView();

            expect(viewManagerService.dayView).toBe(false);
            expect(viewManagerService.monthView).toBe(false);
            expect(viewManagerService.yearView).toBe(true);
        });

        it("provides a method to change to day view", () => {
            viewManagerService.changeToMonthView();

            expect(viewManagerService.dayView).toBe(false);
            expect(viewManagerService.monthView).toBe(true);
            expect(viewManagerService.yearView).toBe(false);

            viewManagerService.changeToDayPickerView();

            expect(viewManagerService.dayView).toBe(true);
            expect(viewManagerService.monthView).toBe(false);
            expect(viewManagerService.yearView).toBe(false);
        });
    });
}
