/*
 * Copyright (c) 2016-2018 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */
import {ModuleWithProviders} from "@angular/core";
import {RouterModule, Routes} from "@angular/router";

import {DatepickerDateInputDemo} from "./datepicker-date-input";
import {DatepickerDateInputWrapperPresentDemo} from "./datepicker-date-input-wrapper-present";
import {DatepickerInReactiveForms} from "./datepicker-in-reactive-forms";
import {DatepickerInTemplateDrivenFormsDemo} from "./datepicker-in-template-driven-form";
import {DatepickerDemo} from "./datepicker.demo";
import {NgModelAutoWrappedDatepickerDemo} from "./ngmodel-auto-wrapped";
import {NgModelWrappedPresentDatepickerDemo} from "./ngmodel-wrapper-present";
import {DatepickerCSSRegressionDemo} from "./css-regression";

const ROUTES: Routes = [{
    path: "",
    component: DatepickerDemo,
    children: [
        {path: "", redirectTo: "ng-model-auto-wrapped", pathMatch: "full"},
        {path: "ng-model-auto-wrapped", component: NgModelAutoWrappedDatepickerDemo},
        {path: "ng-model-wrapper-present", component: NgModelWrappedPresentDatepickerDemo},
        {path: "datepicker-date-input", component: DatepickerDateInputDemo},
        {path: "datepicker-date-input-wrapper-present", component: DatepickerDateInputWrapperPresentDemo},
        {path: "template-driven-forms", component: DatepickerInTemplateDrivenFormsDemo},
        {path: "reactive-forms", component: DatepickerInReactiveForms},
        {path: "css-regression", component: DatepickerCSSRegressionDemo}
    ]
}];

export const ROUTING: ModuleWithProviders = RouterModule.forChild(ROUTES);
