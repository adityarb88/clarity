/*
 * Copyright (c) 2016-2018 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */

import {TestContext} from "../../data/datagrid/helpers.spec";
import {ClrYearpicker} from "./yearpicker";
import {Component} from "@angular/core";
import {IfOpenService} from "../../utils/conditional/if-open.service";
import {DateIOService} from "./providers/date-io.service";
import {ViewManagerService} from "./providers/view-manager.service";
import {DatepickerViewService} from "./providers/datepicker-view.service";
import {DateNavigationService} from "./providers/date-navigation.service";
import {LocaleHelperService} from "./providers/locale-helper.service";
import {createKeyboardEvent} from "./utils/test-utils";
import {DOWN_ARROW, LEFT_ARROW, RIGHT_ARROW, UP_ARROW} from "../../utils/key-codes/key-codes";
import {async} from "@angular/core/testing";

export default function () {
    describe("Yearpicker Component", () => {
        let context: TestContext<ClrYearpicker, TestComponent>;
        let dateNavigationService: DateNavigationService;
        const selectedYear: number = 2005;

        beforeEach(function () {
            dateNavigationService = new DateNavigationService();
            dateNavigationService.initializeCalendar();
            dateNavigationService.changeYear(selectedYear);

            context
                = this.create(
                ClrYearpicker,
                TestComponent,
                [
                    ViewManagerService,
                    DatepickerViewService,
                    IfOpenService,
                    {provide: DateNavigationService, useValue: dateNavigationService},
                    LocaleHelperService,
                    DateIOService
                ]
            );
        });

        describe("View Basics", () => {
            it("renders the year range", () => {
                const years: HTMLButtonElement[] = context.clarityElement.querySelectorAll(".year");
                expect(years).not.toBeNull();
                expect(years.length).toBe(10);

                for (let i = 0; i < 10; i++) {
                    expect(years[i].textContent).toMatch(`${2000 + i}`);
                }
            });

            it("calls to navigate to the previous decade", () => {
                spyOn(context.clarityDirective, "previousDecade");
                const switchers: HTMLElement = context.clarityElement.querySelector(".year-switchers");
                const button: HTMLButtonElement = <HTMLButtonElement>switchers.children[0];

                button.click();
                context.detectChanges();

                expect(context.clarityDirective.previousDecade).toHaveBeenCalled();
            });

            it("calls to navigate to the current decade", () => {
                spyOn(context.clarityDirective, "currentDecade");
                const switchers: HTMLElement = context.clarityElement.querySelector(".year-switchers");
                const button: HTMLButtonElement = <HTMLButtonElement>switchers.children[1];

                button.click();
                context.detectChanges();

                expect(context.clarityDirective.currentDecade).toHaveBeenCalled();
            });

            it("calls to navigate to the next decade", () => {
                spyOn(context.clarityDirective, "nextDecade");
                const switchers: HTMLElement = context.clarityElement.querySelector(".year-switchers");
                const button: HTMLButtonElement = <HTMLButtonElement>switchers.children[2];

                button.click();
                context.detectChanges();

                expect(context.clarityDirective.nextDecade).toHaveBeenCalled();
            });

            it("updates the year when a year button is clicked", () => {
                spyOn(context.clarityDirective, "changeYear");
                const years: HTMLButtonElement[] = context.clarityElement.querySelectorAll(".year");

                for (const year of years) {
                    year.click();
                    context.detectChanges();
                    expect(context.clarityDirective.changeYear).toHaveBeenCalled();
                }
            });

            it("adds a .yearpicker class on the host", () => {
                 expect(context.clarityElement.classList.contains("yearpicker")).toBe(true);
            });

            it("adds a .is-selected class on the selected year", () => {
                const yearIndex: number = context.clarityDirective.yearRangeModel.yearRange.indexOf(selectedYear);
                const years: HTMLButtonElement[] = context.clarityElement.querySelectorAll(".year");

                let count: number = 0;
                for (const year of years) {
                    if (count === yearIndex) {
                        expect(year.classList.contains("is-selected")).toBe(true);
                    } else {
                        expect(year.classList.contains("is-selected")).toBe(false);
                    }
                    count++;
                }
            });

            it("updates the tab indices correctly", async(() => {
                const buttons: HTMLButtonElement[] = context.clarityElement.querySelectorAll(".year");

                expect(buttons[5].tabIndex).toBe(0);

                context.clarityElement.dispatchEvent(createKeyboardEvent(DOWN_ARROW, "keydown"));
                context.detectChanges();

                expect(buttons[5].tabIndex).toBe(-1);
                expect(buttons[6].tabIndex).toBe(0);

                context.clarityElement.dispatchEvent(createKeyboardEvent(UP_ARROW, "keydown"));
                context.detectChanges();

                expect(buttons[6].tabIndex).toBe(-1);
                expect(buttons[5].tabIndex).toBe(0);

                context.clarityElement.dispatchEvent(createKeyboardEvent(LEFT_ARROW, "keydown"));
                context.detectChanges();

                expect(buttons[5].tabIndex).toBe(-1);
                expect(buttons[0].tabIndex).toBe(0);

                context.clarityElement.dispatchEvent(createKeyboardEvent(RIGHT_ARROW, "keydown"));
                context.detectChanges();

                expect(buttons[0].tabIndex).toBe(-1);
                expect(buttons[5].tabIndex).toBe(0);

            }));
        });

        describe("Typescript API", () => {
            it("has access to the calendar year", () => {
                expect(context.clarityDirective.calendarYear).toBe(selectedYear);
            });

            it("generates a YearRangeModel based on the selected year on initialization", () => {
                expect(context.clarityDirective.yearRangeModel).not.toBeNull();
                expect(context.clarityDirective.yearRangeModel.yearRange.length).toBe(10);

                for(let i = 0; i < 10; i++) {
                    expect(context.clarityDirective.yearRangeModel.yearRange[i]).toBe(2000 + i);
                }
            });

            it("updates the year range model when moving to the previous decade", () => {
                expect(context.clarityDirective.yearRangeModel.inRange(selectedYear)).toBe(true);

                context.clarityDirective.previousDecade();

                expect(context.clarityDirective.yearRangeModel.inRange(selectedYear)).toBe(false);
                expect(context.clarityDirective.yearRangeModel.inRange(selectedYear - 10)).toBe(true);
            });

            it("updates the year range model when moving to the next decade", () => {
                expect(context.clarityDirective.yearRangeModel.inRange(selectedYear)).toBe(true);

                context.clarityDirective.nextDecade();

                expect(context.clarityDirective.yearRangeModel.inRange(selectedYear)).toBe(false);
                expect(context.clarityDirective.yearRangeModel.inRange(selectedYear + 10)).toBe(true);
            });

            it("updates the year range model when moving to the current decade", () => {
                expect(context.clarityDirective.yearRangeModel.inRange(selectedYear)).toBe(true);

                context.clarityDirective.currentDecade();

                expect(context.clarityDirective.yearRangeModel.inRange(selectedYear)).toBe(false);
                expect(context.clarityDirective.yearRangeModel.inRange(new Date().getFullYear())).toBe(true);
            });

            it("gets the correct tab indices on initialization", () => {
                const years: number[] = context.clarityDirective.yearRangeModel.yearRange;

                for (const year of years) {
                    if (year === selectedYear) {
                        expect(context.clarityDirective.getTabIndex(year)).toBe(0);
                    } else {
                        expect(context.clarityDirective.getTabIndex(year)).toBe(-1);
                    }
                }
            });

            it("changes view to day picker when changeYear is called", () => {
                const viewManagerService: ViewManagerService = context.getClarityProvider(ViewManagerService);

                viewManagerService.changeToYearView();
                expect(viewManagerService.yearView).toBe(true);

                context.clarityDirective.changeYear(2015);

                expect(viewManagerService.yearView).toBe(false);
                expect(viewManagerService.dayView).toBe(true);
            });

            it("updates year value in the date navigation service", () => {
                const dateNavService: DateNavigationService = context.getClarityProvider(DateNavigationService);

                expect(dateNavService.calendar.year).toBe(selectedYear);

                context.clarityDirective.changeYear(2015);

                expect(dateNavService.calendar.year).toBe(2015);
            });

            it("handles keyboard navigation", () => {
                let year: number = selectedYear;
                expect(context.clarityDirective.getTabIndex(year)).toBe(0);

                context.clarityDirective.onKeyDown(createKeyboardEvent(UP_ARROW, "keydown"));
                year--;
                expect(context.clarityDirective.getTabIndex(year)).toBe(0);

                context.clarityDirective.onKeyDown(createKeyboardEvent(UP_ARROW, "keydown"));
                year--;
                expect(context.clarityDirective.getTabIndex(year)).toBe(0);

                context.clarityDirective.onKeyDown(createKeyboardEvent(DOWN_ARROW, "keydown"));
                year++;
                expect(context.clarityDirective.getTabIndex(year)).toBe(0);

                context.clarityDirective.onKeyDown(createKeyboardEvent(RIGHT_ARROW, "keydown"));
                year += 5;
                expect(context.clarityDirective.getTabIndex(year)).toBe(0);

                context.clarityDirective.onKeyDown(createKeyboardEvent(LEFT_ARROW, "keydown"));
                year -= 5;
                expect(context.clarityDirective.getTabIndex(year)).toBe(0);
            });
        });
    });
}

@Component({
    template: `
        <clr-yearpicker></clr-yearpicker>
    `
})
class TestComponent {
}
