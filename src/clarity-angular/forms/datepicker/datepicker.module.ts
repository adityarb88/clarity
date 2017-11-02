/*
 * Copyright (c) 2017 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */
import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {ClrHostWrappingModule} from "../../utils/host-wrapping/host-wrapping.module";
import {Datepicker} from "./datepicker";
import {DatepickerContainer} from "./datepicker-container";
import {ClrConditionalModule} from "../../utils/conditional/conditional.module";
import {DatepickerContent} from "./datepicker-content";
import {MonthPicker} from "./month-picker";
import {YearPicker} from "./year-picker";
import {ClrIconModule} from "../../icon/icon.module";
import {ClrFocusTrapModule} from "../../utils/focus-trap/focus-trap.module";
import {ClrVirtualScrollModule} from "../../utils/virtual-scroll/virtual-scroll.module";

@NgModule({
    imports: [CommonModule, ClrHostWrappingModule, ClrConditionalModule, ClrIconModule, ClrFocusTrapModule, ClrVirtualScrollModule],
    declarations: [Datepicker, DatepickerContainer, DatepickerContent, MonthPicker, YearPicker],
    exports: [Datepicker, DatepickerContainer, DatepickerContent, MonthPicker, YearPicker],
    entryComponents: [DatepickerContainer]
})
export class ClrDatepickerModule {}
