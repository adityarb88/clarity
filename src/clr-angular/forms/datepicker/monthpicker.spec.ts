/*
 * Copyright (c) 2016-2018 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */

import {Component} from "@angular/core";
import {TestContext} from "../../data/datagrid/helpers.spec";
import {ClrMonthpicker} from "./monthpicker";
import {IfOpenService} from "../../utils/conditional/if-open.service";
import {DateIOService} from "./providers/date-io.service";
import {ViewManagerService} from "./providers/view-manager.service";
import {DatepickerViewService} from "./providers/datepicker-view.service";
import {DateNavigationService} from "./providers/date-navigation.service";
import {LocaleHelperService} from "./providers/locale-helper.service";
import {DayModel} from "./model/day.model";
import {async} from "@angular/core/testing";
import {createKeyboardEvent} from "./utils/test-utils";
import {DOWN_ARROW, LEFT_ARROW, RIGHT_ARROW, UP_ARROW} from "../../utils/key-codes/key-codes";

export default function () {
    describe("Monthpicker Component", () => {
        let context: TestContext<ClrMonthpicker, TestComponent>;
        let localeHelperService: LocaleHelperService;

        beforeEach(function () {
            context
                = this.create(
                ClrMonthpicker,
                TestComponent,
                [
                    ViewManagerService,
                    DatepickerViewService,
                    IfOpenService,
                    DateNavigationService,
                    LocaleHelperService,
                    DateIOService
                ]
            );
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
                expect(buttons[context.testComponent.month].classList.contains("is-active")).toBe(true);
            });

            it("initializes the tab indices correctly", () => {
                const buttons: HTMLButtonElement[] = context.clarityElement.querySelectorAll("button");
                let count: number = 0;
                for (const button of buttons) {
                    if (count === context.testComponent.month) {
                        expect(button.tabIndex).toBe(0);
                    } else {
                        expect(button.tabIndex).toBe(-1);
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

            it("gets the current calendar month", () => {
                expect(context.clarityDirective.calendarMonth).toBe(localeHelperService.localeMonthsWide[context.testComponent.month]);
            });

            it("gets the correct tabindex", () => {
                let i = 0;
                for (const month of context.clarityDirective.months) {
                    if (i === context.testComponent.month) {
                        expect(context.clarityDirective.getTabIndex(month)).toBe(0);
                    } else {
                        expect(context.clarityDirective.getTabIndex(month)).toBe(-1);
                    }
                    i++;
                }
            });

            it("changes view to day picker when change month is called", () => {
                const viewManagerService: ViewManagerService = context.getClarityProvider(ViewManagerService);

                viewManagerService.changeToMonthView();
                expect(viewManagerService.monthView).toBe(true);

                context.clarityDirective.changeMonth(localeHelperService.localeMonthsWide[0]);

                expect(viewManagerService.monthView).toBe(false);
                expect(viewManagerService.dayView).toBe(true);
            });

            it("updates month value in the date navigation service", () => {
                const dateNavService: DateNavigationService = context.getClarityProvider(DateNavigationService);

                expect(dateNavService.calendar.month).toBe(1);

                context.clarityDirective.changeMonth(localeHelperService.localeMonthsWide[4]);

                expect(dateNavService.calendar.month).toBe(4);
            });

            it("handles keyboard navigation", () => {
                const months: ReadonlyArray<string> = context.clarityDirective.months;

                expect(context.clarityDirective.getTabIndex(months[1])).toBe(0);

                context.clarityDirective.onKeyDown(createKeyboardEvent(UP_ARROW, "keydown"));
                context.detectChanges();

                expect(context.clarityDirective.getTabIndex(months[0])).toBe(0);

                context.clarityDirective.onKeyDown(createKeyboardEvent(UP_ARROW, "keydown"));
                context.detectChanges();

                expect(context.clarityDirective.getTabIndex(months[0])).toBe(0);

                context.clarityDirective.onKeyDown(createKeyboardEvent(DOWN_ARROW, "keydown"));
                context.detectChanges();

                expect(context.clarityDirective.getTabIndex(months[1])).toBe(0);

                context.clarityDirective.onKeyDown(createKeyboardEvent(DOWN_ARROW, "keydown"));
                context.detectChanges();

                expect(context.clarityDirective.getTabIndex(months[2])).toBe(0);

                context.clarityDirective.onKeyDown(createKeyboardEvent(RIGHT_ARROW, "keydown"));
                context.detectChanges();

                expect(context.clarityDirective.getTabIndex(months[8])).toBe(0);

                context.clarityDirective.onKeyDown(createKeyboardEvent(RIGHT_ARROW, "keydown"));
                context.detectChanges();

                expect(context.clarityDirective.getTabIndex(months[8])).toBe(0);

                context.clarityDirective.onKeyDown(createKeyboardEvent(LEFT_ARROW, "keydown"));
                context.detectChanges();

                expect(context.clarityDirective.getTabIndex(months[2])).toBe(0);
            });
        });
    });
}

@Component({
    template: `
        <clr-monthpicker></clr-monthpicker>
    `
})
class TestComponent {
    public month: number = 1; //If you change this, you might have to adjust a few tests.

    constructor(private dateNavigationService: DateNavigationService) {
        //Initializing selected day just to make sure that every time the same month is selected on initialization.
        this.dateNavigationService.selectedDay = new DayModel(2015, this.month, 1);
        this.dateNavigationService.initializeCalendar();
    }
}
