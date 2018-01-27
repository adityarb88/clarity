/*
 * Copyright (c) 2016-2018 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */

import {CommonModule} from "@angular/common";
import {NgModule} from "@angular/core";

import {ClrCommonFormsModule} from "../forms/common/common.module";

import {ClrCheckboxModule} from "./checkbox/checkbox.module";
import {ClrDatepickerModule} from "./datepicker/datepicker.module";

@NgModule({imports: [CommonModule], exports: [ClrCommonFormsModule, ClrCheckboxModule]})
export class ClrFormsModule {}
