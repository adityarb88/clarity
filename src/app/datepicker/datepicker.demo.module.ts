/*
 * Copyright (c) 2016-2018 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */
import {CommonModule} from "@angular/common";
import {NgModule} from "@angular/core";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";

import {ClarityModule} from "../../clr-angular";

import {DatepickerCSSRegressionDemo} from "./css-regression";
import {DatepickerDateInputDemo} from "./datepicker-date-input";
import {DatepickerDateInputWrapperPresentDemo} from "./datepicker-date-input-wrapper-present";
import {DatepickerInReactiveForms} from "./datepicker-in-reactive-forms";
import {DatepickerInTemplateDrivenFormsDemo} from "./datepicker-in-template-driven-form";
import {DatepickerDemo} from "./datepicker.demo";
import {ROUTING} from "./datepicker.demo.routing";
import {NgModelAutoWrappedDatepickerDemo} from "./ngmodel-auto-wrapped";
import {NgModelWrappedPresentDatepickerDemo} from "./ngmodel-wrapper-present";

@NgModule({
    imports: [CommonModule, ClarityModule, ROUTING, FormsModule, ReactiveFormsModule],
    declarations: [
        DatepickerDemo, DatepickerInTemplateDrivenFormsDemo, DatepickerInReactiveForms,
        NgModelAutoWrappedDatepickerDemo, NgModelWrappedPresentDatepickerDemo, DatepickerDateInputDemo,
        DatepickerDateInputWrapperPresentDemo, DatepickerCSSRegressionDemo
    ],
    exports: [
        DatepickerDemo, DatepickerInTemplateDrivenFormsDemo, DatepickerInReactiveForms,
        NgModelAutoWrappedDatepickerDemo, NgModelWrappedPresentDatepickerDemo, DatepickerDateInputDemo,
        DatepickerDateInputWrapperPresentDemo, DatepickerCSSRegressionDemo
    ]
})
export default class DatepickerDemoModule {}
