/*
 * Copyright (c) 2016-2018 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */

import {Component} from "@angular/core";
import {DayViewModel} from "./model/day-view.model";
import {TestContext} from "../../data/datagrid/helpers.spec";
import {ClrDay} from "./day";
import {DateNavigationService} from "./providers/date-navigation.service";
import {DateIOService} from "./providers/date-io.service";
import {IfOpenService} from "../../utils/conditional/if-open.service";
import {DayModel} from "./model/day.model";

export default function() {
    describe("Day Component", () => {
        let context: TestContext<ClrDay, TestComponent>;

        beforeEach(function() {
            context = this.create(ClrDay, TestComponent, [DateNavigationService, DateIOService, IfOpenService]);
        });

        describe("View Basics", function() {
            it("renders the content based on the input provided", function() {
                expect(context.clarityElement.textContent.trim()).toMatch("1");

                context.testComponent.dayView
                    = new DayViewModel(new DayModel(2018, 0, 25),
                    false,
                    false,
                    false,
                    false);
                context.detectChanges();

                expect(context.clarityElement.textContent.trim()).toMatch("25");
            });

            it("renders one button based on the input provided", function() {
                expect(context.clarityElement.children.length).toBe(1);
                expect(context.clarityElement.children[0].tagName).toBe("BUTTON");
            });

            it("adds the .is-today class to the button when the input provided is today's day view", function() {
                const button: HTMLButtonElement = context.clarityElement.children[0];
                expect(button.classList.contains("is-today")).toBe(false);
                context.testComponent.dayView.isTodaysDate = true;

                context.detectChanges();
                expect(button.classList.contains("is-today")).toBe(true);

                context.testComponent.dayView.isTodaysDate = false;

                context.detectChanges();
                expect(button.classList.contains("is-today")).toBe(false);
            });

            it("adds the .is-selected class to the button when the input day view is selected", function() {
                const button: HTMLButtonElement = context.clarityElement.children[0];
                expect(button.classList.contains("is-selected")).toBe(false);
                context.testComponent.dayView.isSelected = true;

                context.detectChanges();
                expect(button.classList.contains("is-selected")).toBe(true);

                context.testComponent.dayView.isSelected = false;

                context.detectChanges();
                expect(button.classList.contains("is-selected")).toBe(false);
            });

            it("adds the .is-disabled class to the button when the input day view is selected", function() {
                const button: HTMLButtonElement = context.clarityElement.children[0];
                expect(button.classList.contains("is-disabled")).toBe(false);
                context.testComponent.dayView.isDisabled = true;

                context.detectChanges();
                expect(button.classList.contains("is-disabled")).toBe(true);

                context.testComponent.dayView.isDisabled = false;

                context.detectChanges();
                expect(button.classList.contains("is-disabled")).toBe(false);
            });

            it("sets the right tabindex if the day is focusable", function() {
                const button: HTMLButtonElement = context.clarityElement.children[0];
                expect(button.tabIndex).toBe(-1);

                context.testComponent.dayView.isFocusable = true;
                context.detectChanges();
                expect(button.tabIndex).toBe(0);

                context.testComponent.dayView.isFocusable = false;
                context.detectChanges();
                expect(button.tabIndex).toBe(-1);
            });

            it("updates the date when a button in the day component is clicked", () => {
                spyOn(context.clarityDirective, "setDay");
                const button: HTMLButtonElement = context.clarityElement.children[0];

                button.click();
                context.detectChanges();

                expect(context.clarityDirective.setDay).toHaveBeenCalled();
            });

            it("updates the focusable date when a button is focused", () => {
                spyOn(context.clarityDirective, "onDayViewFocus");
                const button: HTMLButtonElement = context.clarityElement.children[0];

                button.focus();
                context.detectChanges();

                expect(context.clarityDirective.onDayViewFocus).toHaveBeenCalled();
            });
        });

        describe("Template API", function() {
            it("supports an Input for DayViewModel", () => {
                expect(context.clarityDirective.dayView).not.toBeUndefined();

                expect(context.clarityDirective.dayView.dayModel.date).toBe(1);
                expect(context.clarityDirective.dayView.dayModel.month).toBe(0);
                expect(context.clarityDirective.dayView.dayModel.year).toBe(2018);
                expect(context.clarityDirective.dayView.isTodaysDate).toBe(false);
                expect(context.clarityDirective.dayView.isSelected).toBe(false);
                expect(context.clarityDirective.dayView.isDisabled).toBe(false);
                expect(context.clarityDirective.dayView.isFocusable).toBe(false);
            });
        });

        describe("Typescript API", function() {
            it("updates the selected day when a Date is selected", () => {
                //let ifOpenService: IfOpenService;
                const dateNavigationService: DateNavigationService = context.getClarityProvider(DateNavigationService);
                const testDayView: DayViewModel
                    = new DayViewModel(new DayModel(2018, 0, 1), false, false, false, false);

                expect(dateNavigationService.selectedDay).toBeUndefined();

                context.clarityDirective.setDay(testDayView);
                context.detectChanges();

                expect(dateNavigationService.selectedDay).not.toBeUndefined();
                expect(dateNavigationService.selectedDay.date).toBe(testDayView.dayModel.date);
                expect(dateNavigationService.selectedDay.month).toBe(testDayView.dayModel.month);
                expect(dateNavigationService.selectedDay.year).toBe(testDayView.dayModel.year);
            });

            it("updates the date in the DateIOService when a Date is selected", () => {
                const dateIOService: DateIOService = context.getClarityProvider(DateIOService);
                expect(dateIOService.date).toBeUndefined();

                const testDayView: DayViewModel
                    = new DayViewModel(new DayModel(2018, 0, 1), false, false, false, false);

                context.clarityDirective.setDay(testDayView);
                context.detectChanges();

                expect(dateIOService.date.getDate()).toBe(testDayView.dayModel.date);
                expect(dateIOService.date.getMonth()).toBe(testDayView.dayModel.month);
                expect(dateIOService.date.getFullYear()).toBe(testDayView.dayModel.year);
            });

            it("closes the popover when a Date is selected", () => {
                const ifOpenService: IfOpenService = context.getClarityProvider(IfOpenService);
                expect(ifOpenService.open).toBeUndefined();

                const testDayView: DayViewModel
                    = new DayViewModel(new DayModel(2018, 0, 1), false, false, false, false);

                context.clarityDirective.setDay(testDayView);
                context.detectChanges();

                expect(ifOpenService.open).toBe(false);
            });

            it("updates the focusedDay when a day is focused", () => {
                const dateNavigationService: DateNavigationService = context.getClarityProvider(DateNavigationService);
                const testDayView: DayViewModel
                    = new DayViewModel(new DayModel(2018, 0, 1), false, false, false, false);

                expect(dateNavigationService.focusedDay).toBeUndefined();

                context.clarityDirective.onDayViewFocus(testDayView);
                context.detectChanges();

                expect(dateNavigationService.focusedDay).not.toBeUndefined();
                expect(dateNavigationService.focusedDay.date).toBe(testDayView.dayModel.date);
                expect(dateNavigationService.focusedDay.month).toBe(testDayView.dayModel.month);
                expect(dateNavigationService.focusedDay.year).toBe(testDayView.dayModel.year);
            });
        });
    });
}

@Component({
    template: `
        <clr-day [clrDayView]="dayView"></clr-day>
    `
})
class TestComponent {
    isToday: boolean = false;
    isDisabled: boolean = false;
    isSelected: boolean = false;
    isFocusable: boolean = false;
    dayModel: DayModel = new DayModel(2018, 0, 1);

    dayView: DayViewModel = new DayViewModel(this.dayModel, this.isToday, this.isDisabled, this.isSelected, this.isFocusable);
}
