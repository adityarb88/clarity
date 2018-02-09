/*
 * Copyright (c) 2016-2018 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */

import {TestContext} from "../../data/datagrid/helpers.spec";
import {ClrDateInput} from "./date-input";
import {Component, DebugElement, ViewChild} from "@angular/core";
import {IfOpenService} from "../../utils/conditional/if-open.service";
import {DateIOService} from "./providers/date-io.service";
import {MockDatepickerEnabledService} from "./providers/datepicker-enabled.service.mock";
import {DatepickerEnabledService} from "./providers/datepicker-enabled.service";
import {DateNavigationService} from "./providers/date-navigation.service";
import {LocaleHelperService} from "./providers/locale-helper.service";
import {async, ComponentFixture, fakeAsync, TestBed, tick} from "@angular/core/testing";
import {ClrDateContainer} from "./date-container";
import {By} from "@angular/platform-browser";
import {FormsModule} from "@angular/forms";
import {ClrFormsModule} from "../forms.module";
import {FormControlService} from "../common/form-control.service";

export default function () {
    describe("Date Input Component", () => {
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
                            DateIOService,
                            FormControlService
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

        describe("Datepicker with ngModel", () => {
            let fixture: ComponentFixture<TestComponentWithNgModel>;
            let compiled: any;
            let dateContainerDebugElement: DebugElement;
            let dateInputDebugElement: DebugElement;

            beforeEach(function () {
                TestBed.configureTestingModule({
                    imports: [FormsModule, ClrFormsModule],
                    declarations: [
                        TestComponentWithNgModel
                    ]
                });

                fixture = TestBed.createComponent(TestComponentWithNgModel);
                fixture.detectChanges();
                compiled = fixture.nativeElement;
                dateContainerDebugElement = fixture.debugElement.query(By.directive(ClrDateContainer));
                dateInputDebugElement = fixture.debugElement.query(By.directive(ClrDateInput));
            });

            it("accepts user input", fakeAsync(() => {
                const ioService: DateIOService = dateContainerDebugElement.injector.get(DateIOService);
                expect(ioService.date).toBeUndefined();

                fixture.componentInstance.dateValue = "01/02/2015";

                fixture.detectChanges();
                tick();

                dateInputDebugElement.nativeElement.dispatchEvent(new Event("change"));
                fixture.detectChanges();

                expect(ioService.date).not.toBeUndefined();
                expect(ioService.date.getFullYear()).toBe(2015);
                expect(ioService.date.getMonth()).toBe(0);
                expect(ioService.date.getDate()).toBe(2);

                fixture.componentInstance.dateValue = "01/02/201";

                fixture.detectChanges();
                tick();

                dateInputDebugElement.nativeElement.dispatchEvent(new Event("change"));
                fixture.detectChanges();

                expect(ioService.date).toBeNull();
            }));

            it("updates the input element value when the date is updated", () => {
                const ioService: DateIOService = dateContainerDebugElement.injector.get(DateIOService);

                expect(fixture.componentInstance.dateValue).toBeUndefined();

                const date = new Date(2015,1,1);
                ioService.updateDate(date);

                fixture.detectChanges();

                expect(fixture.componentInstance.dateValue).toBe("02/01/2015");
            });
        });

        describe("Datepicker with clrDate", () => {
            let fixture: ComponentFixture<TestComponentWithClrDate>;
            let compiled: any;
            let dateContainerDebugElement: DebugElement;
            let dateInputDebugElement: DebugElement;

            beforeEach(function () {
                TestBed.configureTestingModule({
                    imports: [FormsModule, ClrFormsModule],
                    declarations: [
                        TestComponentWithClrDate
                    ]
                });

                fixture = TestBed.createComponent(TestComponentWithClrDate);
                fixture.detectChanges();
                compiled = fixture.nativeElement;
                dateContainerDebugElement = fixture.debugElement.query(By.directive(ClrDateContainer));
                dateInputDebugElement = fixture.debugElement.query(By.directive(ClrDateInput));
            });

            it("supports a clrDate Input", () => {
                const ioService: DateIOService = dateContainerDebugElement.injector.get(DateIOService);
                expect(ioService.date).toBeUndefined();

                const date: Date = new Date();

                fixture.componentInstance.date = date;

                fixture.detectChanges();

                expect(ioService.date.getFullYear()).toBe(date.getFullYear());
                expect(ioService.date.getMonth()).toBe(date.getMonth());
                expect(ioService.date.getDate()).toBe(date.getDate());
            });

            it("emits the output date correctly", () => {
                const ioService: DateIOService = dateContainerDebugElement.injector.get(DateIOService);
                expect(ioService.date).toBeUndefined();
                expect(fixture.componentInstance.date).toBeUndefined();

                const date: Date = new Date();
                ioService.updateDate(date);
                fixture.detectChanges();

                expect(fixture.componentInstance.date.getFullYear()).toBe(date.getFullYear());
                expect(fixture.componentInstance.date.getMonth()).toBe(date.getMonth());
                expect(fixture.componentInstance.date.getDate()).toBe(date.getDate());
            });

            it("emits the date when the user changes the input", () => {
                dateInputDebugElement.nativeElement.value = "01/02/2015";
                dateInputDebugElement.nativeElement.dispatchEvent(new Event("change"));

                fixture.detectChanges();

                expect(fixture.componentInstance.date.getFullYear()).toBe(2015);
                expect(fixture.componentInstance.date.getMonth()).toBe(0);
                expect(fixture.componentInstance.date.getDate()).toBe(2);

                dateInputDebugElement.nativeElement.value = "01/02/201";
                dateInputDebugElement.nativeElement.dispatchEvent(new Event("change"));

                fixture.detectChanges();

                expect(fixture.componentInstance.date).toBeNull();
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
    dateValue: string;

    @ViewChild(ClrDateInput) dateInputInstance: ClrDateInput;
}

@Component ({
    template: `
        <input type="date" [(clrDate)]="date">
    `
})
class TestComponentWithClrDate {
    date: Date;
}
