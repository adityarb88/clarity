/*
 * Copyright (c) 2016 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */
import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {ClarityModule} from "../../clarity-angular/clarity.module";
import {BasicTimepickerDemo} from "./basic-timepicker/basic-timepicker";
import {TimepickerDemo} from "./timepicker.demo";
import {ROUTING} from "./timepicker.demo.routing";

@NgModule({
    imports: [
        CommonModule,
        ClarityModule,
        ROUTING
    ],
    declarations: [
        BasicTimepickerDemo,
        TimepickerDemo
    ],
    exports: [
        TimepickerDemo
    ]
})
export default class TimepickerDemoModule {
}
