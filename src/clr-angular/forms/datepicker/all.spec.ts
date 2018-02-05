/*
 * Copyright (c) 2016-2018 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */

import DayModelSpecs from "./model/day.model.spec";
import YearRangeModelSpecs from "./model/year-range.model.spec";
import CalendarModelSpecs from "./model/calendar.model.spec";
import CalendarViewModelSpecs from "./model/calendar-view.model.spec";
import ViewManagerServiceSpecs from "./providers/view-manager.service.spec";
import LocaleHelperServiceSpecs from "./providers/locale-helper.service.spec";
import DatepickerEnabledServiceSpecs from "./providers/datepicker-enabled.service.spec";
import DatepickerViewServiceSpecs from "./providers/datepicker-view.service.spec";
import DateIOServiceSpecs from "./providers/date-io.service.spec";
import DateNavigationServiceSpecs from "./providers/date-navigation.service.spec";

fdescribe("Datepicker", function() {
    describe("Model", function() {
        DayModelSpecs();
        CalendarModelSpecs();
        YearRangeModelSpecs();
        CalendarViewModelSpecs();
    });

    describe("Providers", function() {
        DatepickerEnabledServiceSpecs();
        ViewManagerServiceSpecs();
        LocaleHelperServiceSpecs();
        DatepickerViewServiceSpecs();
        DateIOServiceSpecs();
        DateNavigationServiceSpecs();
    });
});
