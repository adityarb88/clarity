/*
 * Copyright (c) 2016-2018 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */


import {TestContext} from "../../data/datagrid/helpers.spec";
import {ClrDatepickerViewManager} from "./datepicker-view-manager";
import {Component} from "@angular/core";
import {ViewManagerService} from "./providers/view-manager.service";
import {DatepickerViewService} from "./providers/datepicker-view.service";
import {IfOpenService} from "../../utils/conditional/if-open.service";
import {DateNavigationService} from "./providers/date-navigation.service";
import {LocaleHelperService} from "./providers/locale-helper.service";
import {DateIOService} from "./providers/date-io.service";

export default function () {
    describe("Datepicker View Manager Component", () => {
        let context: TestContext<ClrDatepickerViewManager, TestComponent>;
        let viewManagerService: ViewManagerService;

        beforeEach(function () {
            context
                = this.create(
                    ClrDatepickerViewManager,
                    TestComponent,
                    [
                        ViewManagerService,
                        DatepickerViewService,
                        IfOpenService,
                        DateNavigationService,
                        LocaleHelperService,
                        DateIOService
                    ]);
            viewManagerService = context.getClarityProvider(ViewManagerService);
        });

        it("shows the daypicker when dayView is set to true", () => {
            expect(context.clarityDirective.dayView).toBe(true);
            expect(context.clarityElement.children.length).toBe(1);
            expect(context.clarityElement.children[0].tagName).toBe("CLR-DAYPICKER");
        });

        it("shows the monthpicker when monthView is set to true", () => {
            viewManagerService.changeToMonthView();
            context.detectChanges();

            expect(context.clarityDirective.monthView).toBe(true);
            expect(context.clarityElement.children.length).toBe(1);
            expect(context.clarityElement.children[0].tagName).toBe("CLR-MONTHPICKER");
        });

        it("shows the yearpicker when monthView is set to true", () => {
            viewManagerService.changeToYearView();
            context.detectChanges();

            expect(context.clarityDirective.yearView).toBe(true);
            expect(context.clarityElement.children.length).toBe(1);
            expect(context.clarityElement.children[0].tagName).toBe("CLR-YEARPICKER");
        });

        it("has the .datepicker class added to the host", () => {
            expect(context.clarityElement.classList.contains("datepicker")).toBe(true);
        });
    });
}

@Component({
    template: `
        <clr-datepicker-view-manager></clr-datepicker-view-manager>
    `
})
class TestComponent {
    constructor(
        private dateNavigationService: DateNavigationService) {
        this.dateNavigationService.initializeCalendar();
    }
}
