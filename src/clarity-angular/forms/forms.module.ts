/**
 * Copyright (c) 2016-2017 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */

import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { CHECKBOX_DIRECTIVES } from "./checkbox/index";
import {TIMEPICKER_DIRECTIVES} from "./timepicker/index";
import {EmptyAnchor, TimepickerWrapper} from "./timepicker/timepicker";
import {ClrCommonPopoverModule} from "../popover/common/popover.module";
import {TimepickerService} from "./timepicker/providers/timepicker.service";
import {SpinnerButton} from "./utils/spinner-button";
import {ClrIconModule} from "../icon/icon.module";

@NgModule({
    imports: [
        CommonModule,
        ClrCommonPopoverModule,
        ClrIconModule
    ],
    declarations: [
        CHECKBOX_DIRECTIVES,
        TIMEPICKER_DIRECTIVES,
        SpinnerButton
    ],
    entryComponents: [
        EmptyAnchor,
        TimepickerWrapper
    ],
    exports: [
        CHECKBOX_DIRECTIVES,
        TIMEPICKER_DIRECTIVES
    ],
    providers: [
        TimepickerService
    ]
})
export class ClrFormsModule {}
