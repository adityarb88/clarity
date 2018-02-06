/*
 * Copyright (c) 2016-2018 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */

import {Component, Injectable} from "@angular/core";
import {TestContext} from "../../data/datagrid/helpers.spec";
import {ClrDateContainer} from "./date-container";
import {LocaleHelperService} from "./providers/locale-helper.service";
import {IfOpenService} from "../../utils/conditional/if-open.service";
import {DateNavigationService} from "./providers/date-navigation.service";
import {ViewManagerService} from "./providers/view-manager.service";
import {DatepickerViewService} from "./providers/datepicker-view.service";
import {DateIOService} from "./providers/date-io.service";
import {DatepickerEnabledService} from "./providers/datepicker-enabled.service";
import {Subscription} from "rxjs/Subscription";

export default function () {
    describe("Date Container Component", () => {
        let context: TestContext<ClrDateContainer, TestComponent>;
        let enabledService: MockDatepickerEnabledService;

        beforeEach(function () {
            context
                = this.create(
                ClrDateContainer,
                TestComponent,
                [
                    ViewManagerService,
                    DatepickerViewService,
                    IfOpenService,
                    DateNavigationService,
                    LocaleHelperService,
                    DateIOService,
                    MOCK_DATEPICKER_ENABLED_PROVIDER
                ]);

            enabledService = <MockDatepickerEnabledService>context.getClarityProvider(DatepickerEnabledService);
        });

        describe("View Basics", () => {
            it("renders the datepicker toggle button based on the enabled service", () => {
                expect(enabledService.isEnabled).toBe(true);
                expect(context.clarityElement.querySelector(".datepicker-trigger")).not.toBeNull();

                enabledService.fakeEnabled = false;
                context.detectChanges();

                expect(context.clarityElement.querySelector(".datepicker-trigger")).not.toBeNull();
            });

            it("clicking on the button toggles the datepicker popover", () => {
                spyOn(context.clarityDirective, "toggleCalendar");
                const button: HTMLButtonElement = context.clarityElement.querySelector(".datepicker-trigger");

                button.click();
                context.detectChanges();

                expect(context.clarityDirective.toggleCalendar).toHaveBeenCalled();
            });

            it("projects the date input", () => {
                expect(context.clarityElement.querySelector("input")).not.toBeNull();
            });

            it("shows the datepicker view manager when .datepicker-trigger is clicked", () => {
                expect(context.clarityElement.querySelector("clr-datepicker-view-manager")).toBeNull();

                const button: HTMLButtonElement = context.clarityElement.querySelector(".datepicker-trigger");
                button.click();
                context.detectChanges();

                expect(context.clarityElement.querySelector("clr-datepicker-view-manager")).not.toBeNull();
            });
        });

        describe("Typescript API", () => {
            it("toggles the datepicker popover", () => {
                const ifOpenService: IfOpenService = context.getClarityProvider(IfOpenService);
                const fakeEvent: MouseEvent = new MouseEvent("fakeEvent");
                let flag: boolean;
                const sub: Subscription = ifOpenService.openChange.subscribe((open) => {
                    flag = open;
                });

                expect(flag).toBeUndefined();
                context.clarityDirective.toggleCalendar(fakeEvent);
                context.detectChanges();

                expect(flag).not.toBeUndefined();
                expect(flag).toBe(true);

                sub.unsubscribe();
            });
        });
    });
}

@Component({
    template: `
        <clr-date-container>
            <input type="date" clrDate>
        </clr-date-container>
    `
})
class TestComponent {
}

@Injectable()
class MockDatepickerEnabledService extends DatepickerEnabledService {
    fakeEnabled: boolean = true;

    get isEnabled(): boolean {
        return this.fakeEnabled;
    }
}

const MOCK_DATEPICKER_ENABLED_PROVIDER = {
    provide: DatepickerEnabledService,
    useClass: MockDatepickerEnabledService
}
