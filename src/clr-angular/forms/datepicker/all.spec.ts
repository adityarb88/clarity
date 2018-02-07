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
import DayComponentSpecs from "./day.spec";
import DatepickerViewManagerSpecs from "./datepicker-view-manager.spec";
import DateContainerSpecs from "./date-container.spec";
import DaypickerSpecs from "./daypicker.spec";
import MonthpickerSpecs from "./monthpicker.spec";

import {addHelpers} from "../../data/datagrid/helpers.spec";

fdescribe("Datepicker", function() {
    addHelpers();

    describe("Model", function() {
        DayModelSpecs();
        CalendarModelSpecs();
        YearRangeModelSpecs();
        CalendarViewModelSpecs();
    });

    describe("Providers", function() {
        ViewManagerServiceSpecs();
        LocaleHelperServiceSpecs();
        DatepickerViewServiceSpecs();
        DateIOServiceSpecs();
        DateNavigationServiceSpecs();
        DatepickerEnabledServiceSpecs();
    });

    describe("Components", function() {
        DayComponentSpecs();
        DatepickerViewManagerSpecs();
        DateContainerSpecs();
        DaypickerSpecs();
        MonthpickerSpecs();
    });
});
