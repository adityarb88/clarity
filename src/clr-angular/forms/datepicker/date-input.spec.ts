/*
 * Copyright (c) 2016-2018 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */

import {TestContext} from "../../data/datagrid/helpers.spec";
import {ClrDateInput} from "./date-input";
import {Component} from "@angular/core";
import {IfOpenService} from "../../utils/conditional/if-open.service";
import {DateIOService} from "./providers/date-io.service";
import {MockDatepickerEnabledService} from "./providers/datepicker-enabled.service.mock";
import {DatepickerEnabledService} from "./providers/datepicker-enabled.service";
import {DateNavigationService} from "./providers/date-navigation.service";
import {LocaleHelperService} from "./providers/locale-helper.service";
import {TestBed} from "@angular/core/testing";
import {ClrDateContainer} from "./date-container";
import {By} from "@angular/platform-browser";

export default function () {
    fdescribe("Date Input Component", () => {
        let context: TestContext<ClrDateInput, TestComponent>;
        let enabledService: MockDatepickerEnabledService;
        let dateIOService: DateIOService;

        describe("Basics", () => {
            beforeEach(function () {
                TestBed.overrideComponent(ClrDateContainer, {
                    set: {
                        providers: [
                            {provide: DatepickerEnabledService, useClass: MockDatepickerEnabledService},
                            IfOpenService,
                            DateNavigationService,
                            LocaleHelperService,
                            DateIOService
                        ]
                    }
                });

                context = this.create(ClrDateInput, TestComponent, []);

                enabledService = <MockDatepickerEnabledService>context
                    .fixture.debugElement.query(
                        By.directive(ClrDateContainer)
                    ).injector.get(DatepickerEnabledService);
                dateIOService = context
                    .fixture.debugElement.query(
                        By.directive(ClrDateContainer)
                    ).injector.get(DateIOService);
            });

            describe("Typescript API", () => {
                it("gets the placeholder from the IO service", () => {
                    //since we are testing with en-US
                    expect(context.clarityDirective.placeholderText).toBe("MM/DD/YYYY");
                });

                it("gets whether the datepicker is enabled or not", () => {
                    expect(enabledService.isEnabled).toBe(true);
                    expect(context.clarityDirective.inputType).toBe("text");

                    enabledService.fakeIsEnabled = false;
                    expect(enabledService.isEnabled).toBe(false);

                    context.detectChanges();

                    expect(context.clarityDirective.inputType).toBe("date");
                });

                it("sets the inputDate if the value of the input is valid", () => {
                    const testEl: HTMLInputElement = <HTMLInputElement>document.createElement("INPUT");
                    testEl.value = "01/02/2015";

                    expect(dateIOService.inputDate).toBeUndefined();

                    context.clarityDirective.onValueChange(testEl);

                    expect(dateIOService.inputDate).not.toBeUndefined();
                    expect(dateIOService.inputDate).toBe("01/02/2015");
                });

                it("sets the inputDate to an empty string if the value of the input is invalid", () => {
                    const testEl: HTMLInputElement = <HTMLInputElement>document.createElement("INPUT");
                    testEl.value = "01/02/201";

                    expect(dateIOService.inputDate).toBeUndefined();

                    context.clarityDirective.onValueChange(testEl);

                    expect(dateIOService.inputDate).not.toBeUndefined();
                    expect(dateIOService.inputDate).toBe("");
                });

                it("sets the date on the IOService", () => {
                    const date: Date = new Date();

                    expect(dateIOService.date).toBeUndefined();

                    context.clarityDirective.date = date;

                    expect(dateIOService.date).not.toBeUndefined();
                    expect(dateIOService.date.getDate()).toBe(date.getDate());
                    expect(dateIOService.date.getMonth()).toBe(date.getMonth());
                    expect(dateIOService.date.getFullYear()).toBe(date.getFullYear());

                    const inValidDate: Date = new Date("Test");

                    context.clarityDirective.date = inValidDate;
                    expect(dateIOService.date).toBeNull();
                });
            });

            describe("Host Bindings & Listeners", () => {
                it("binds the placeholderText to the placeholder of the input", () => {
                    expect(context.clarityElement.placeholder).toBe("MM/DD/YYYY");
                });

                it("binds the input type correctly", () => {
                    expect(context.clarityElement.type).toBe("text");

                    enabledService.fakeIsEnabled = false;
                    context.detectChanges();

                    expect(context.clarityElement.type).toBe("date");
                });

                it("listens to the input change events", () => {
                    spyOn(context.clarityDirective, "onValueChange");

                    const inputEl = context.fixture.debugElement.query(By.directive(ClrDateInput));
                    inputEl.triggerEventHandler("change", inputEl);

                    expect(context.clarityDirective.onValueChange).toHaveBeenCalled();
                });
            });
        });
    });
}

@Component({
    template: `
        <input type="date" clrDate>
    `
})
class TestComponent {
}

@Component({
    template: `
        <input type="date" clrDate [(ngModel)]="dateValue">
    `
})
class TestComponentWithNgModel {
    dateValue: string = "";
}
