/*
 * Copyright (c) 2016-2018 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */
import {CommonModule} from "@angular/common";
import {NgModule} from "@angular/core";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";

import {ClarityModule} from "../../clr-angular";

import {DatepickerDemo} from "./datepicker.demo";
import {ROUTING} from "./datepicker.demo.routing";
import {DatepickerInTemplateDrivenFormsDemo} from "./datepicker-in-template-driven-form";
import {DatepickerInReactiveForms} from "./datepicker-in-reactive-forms";
import {NgModelAutoWrappedDatepickerDemo} from "./ngmodel-auto-wrapped";
import {DatepickerDateInputDemo} from "./datepicker-date-input";
import {DatepickerDateInputWrapperPresentDemo} from "./datepicker-date-input-wrapper-present";
import {NgModelWrappedPresentDatepickerDemo} from "./ngmodel-wrapper-present";

@NgModule({
    imports: [CommonModule, ClarityModule, ROUTING, FormsModule, ReactiveFormsModule],
    declarations: [DatepickerDemo, DatepickerInTemplateDrivenFormsDemo, DatepickerInReactiveForms, NgModelAutoWrappedDatepickerDemo, NgModelWrappedPresentDatepickerDemo, DatepickerDateInputDemo, DatepickerDateInputWrapperPresentDemo],
    exports: [DatepickerDemo, DatepickerInTemplateDrivenFormsDemo, DatepickerInReactiveForms, NgModelAutoWrappedDatepickerDemo, NgModelWrappedPresentDatepickerDemo, DatepickerDateInputDemo, DatepickerDateInputWrapperPresentDemo]
})
export default class DatepickerDemoModule {}
