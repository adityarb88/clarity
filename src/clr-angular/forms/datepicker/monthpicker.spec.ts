/*
 * Copyright (c) 2016-2018 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */

import {Component} from "@angular/core";
import {async} from "@angular/core/testing";

import {TestContext} from "../../data/datagrid/helpers.spec";
import {IfOpenService} from "../../utils/conditional/if-open.service";
import {DOWN_ARROW, LEFT_ARROW, RIGHT_ARROW, UP_ARROW} from "../../utils/key-codes/key-codes";

import {DayModel} from "./model/day.model";
import {ClrMonthpicker} from "./monthpicker";
import {DateIOService} from "./providers/date-io.service";
import {DateNavigationService} from "./providers/date-navigation.service";
import {DatepickerViewService} from "./providers/datepicker-view.service";
import {LocaleHelperService} from "./providers/locale-helper.service";
import {ViewManagerService} from "./providers/view-manager.service";
import {createKeyboardEvent} from "./utils/test-utils";

export default function() {
    describe("Monthpicker Component", () => {
        let context: TestContext<ClrMonthpicker, TestComponent>;
        let localeHelperService: LocaleHelperService;
        let dateNavigationService: DateNavigationService;
        const selectedMonth: number = 1;

        beforeEach(function() {
            dateNavigationService = new DateNavigationService();
            // Setting a selected date so that the calendar is initialized to that month and year.
            dateNavigationService.selectedDay = new DayModel(2015, selectedMonth, 1);
            dateNavigationService.initializeCalendar();

            context = this.create(ClrMonthpicker, TestComponent, [
                ViewManagerService, DatepickerViewService, IfOpenService,
                {provide: DateNavigationService, useValue: dateNavigationService}, LocaleHelperService, DateIOService
            ]);
            localeHelperService = context.getClarityProvider(LocaleHelperService);
        });

        describe("View Basics", () => {
            it("projects the months correctly", () => {
                const months: ReadonlyArray<string> = localeHelperService.localeMonthsWide;
                const buttons: HTMLButtonElement[] = context.clarityElement.querySelectorAll("button");

                expect(buttons.length).toBe(months.length);

                let count: number = 0;
                for (const button of buttons) {
                    expect(button.textContent.trim()).toMatch(months[count]);
                    count++;
                }
            });

            it("changes month when a month is clicked", () => {
                spyOn(context.clarityDirective, "changeMonth");

                const buttons: HTMLButtonElement[] = context.clarityElement.querySelectorAll("button");

                buttons[0].click();
                context.detectChanges();

                expect(context.clarityDirective.changeMonth).toHaveBeenCalled();
            });

            it("has the correct month selected", () => {
                const buttons: HTMLButtonElement[] = context.clarityElement.querySelectorAll("button");
                expect(buttons[selectedMonth].classList.contains("is-selected")).toBe(true);
            });

            it("initializes the tab indices correctly", () => {
                const buttons: HTMLButtonElement[] = context.clarityElement.querySelectorAll("button");
                let count: number = 0;
                for (const button of buttons) {
                    if (count === selectedMonth) {
                        expect(button.tabIndex).toBe(context.clarityDirective.getTabIndex(count));
                    } else {
                        expect(button.tabIndex).toBe(context.clarityDirective.getTabIndex(count));
                    }
                    count++;
                }
            });

            it("updates the tab indices correctly", async(() => {
                   const buttons: HTMLButtonElement[] = context.clarityElement.querySelectorAll("button");
                   expect(buttons[1].tabIndex).toBe(0);

                   context.clarityElement.dispatchEvent(createKeyboardEvent(DOWN_ARROW, "keydown"));
                   context.detectChanges();

                   expect(buttons[1].tabIndex).toBe(-1);
                   expect(buttons[2].tabIndex).toBe(0);

                   context.clarityElement.dispatchEvent(createKeyboardEvent(UP_ARROW, "keydown"));
                   context.detectChanges();

                   expect(buttons[2].tabIndex).toBe(-1);
                   expect(buttons[1].tabIndex).toBe(0);

                   context.clarityElement.dispatchEvent(createKeyboardEvent(RIGHT_ARROW, "keydown"));
                   context.detectChanges();

                   expect(buttons[1].tabIndex).toBe(-1);
                   expect(buttons[7].tabIndex).toBe(0);

                   context.clarityElement.dispatchEvent(createKeyboardEvent(LEFT_ARROW, "keydown"));
                   context.detectChanges();

                   expect(buttons[7].tabIndex).toBe(-1);
                   expect(buttons[1].tabIndex).toBe(0);
               }));
        });

        describe("Typescript API", () => {
            it("has access to the month array", () => {
                const months: ReadonlyArray<string> = localeHelperService.localeMonthsWide;

                let count: number = 0;
                for (const month of localeHelperService.localeMonthsWide) {
                    expect(month).toMatch(months[count]);
                    count++;
                }
            });

            it("gets the current month name in wide format", () => {
                expect(context.clarityDirective.calendarMonthIndex)
                    .toBe(selectedMonth);
            });

            it("gets the correct tabindex", () => {
                for (let i = 0; i < context.clarityDirective.monthNames.length; i++) {
                    if (i === selectedMonth) {
                        expect(context.clarityDirective.getTabIndex(i)).toBe(0);
                    } else {
                        expect(context.clarityDirective.getTabIndex(i)).toBe(-1);
                    }
                }
            });

            it("changes view to day picker when change month is called", () => {
                const viewManagerService: ViewManagerService = context.getClarityProvider(ViewManagerService);

                viewManagerService.changeToMonthView();
                expect(viewManagerService.monthView).toBe(true);

                context.clarityDirective.changeMonth(0);

                expect(viewManagerService.monthView).toBe(false);
                expect(viewManagerService.dayView).toBe(true);
            });

            it("updates the month value in the date navigation service", () => {
                const dateNavService: DateNavigationService = context.getClarityProvider(DateNavigationService);

                expect(dateNavService.calendar.month).toBe(1);

                context.clarityDirective.changeMonth(4);

                expect(dateNavService.calendar.month).toBe(4);
            });

            it("handles keyboard navigation", () => {
                expect(context.clarityDirective.getTabIndex(1)).toBe(0);

                context.clarityDirective.onKeyDown(createKeyboardEvent(UP_ARROW, "keydown"));
                context.detectChanges();

                expect(context.clarityDirective.getTabIndex(0)).toBe(0);

                context.clarityDirective.onKeyDown(createKeyboardEvent(UP_ARROW, "keydown"));
                context.detectChanges();

                expect(context.clarityDirective.getTabIndex(0)).toBe(0);

                context.clarityDirective.onKeyDown(createKeyboardEvent(DOWN_ARROW, "keydown"));
                context.detectChanges();

                expect(context.clarityDirective.getTabIndex(1)).toBe(0);

                context.clarityDirective.onKeyDown(createKeyboardEvent(DOWN_ARROW, "keydown"));
                context.detectChanges();

                expect(context.clarityDirective.getTabIndex(2)).toBe(0);

                context.clarityDirective.onKeyDown(createKeyboardEvent(RIGHT_ARROW, "keydown"));
                context.detectChanges();

                expect(context.clarityDirective.getTabIndex(8)).toBe(0);

                context.clarityDirective.onKeyDown(createKeyboardEvent(RIGHT_ARROW, "keydown"));
                context.detectChanges();

                expect(context.clarityDirective.getTabIndex(8)).toBe(0);

                context.clarityDirective.onKeyDown(createKeyboardEvent(LEFT_ARROW, "keydown"));
                context.detectChanges();

                expect(context.clarityDirective.getTabIndex(2)).toBe(0);
            });
        });
    });
}

@Component({
    template: `
        <clr-monthpicker></clr-monthpicker>
    `
})
class TestComponent {}
