/*
 * Copyright (c) 2016 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */
import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {ClarityModule} from "../../clarity-angular/clarity.module";
import {ClarityLabs} from "./labs.demo";
import {ROUTING} from "./labs.demo.routing";
import {SliderDemo} from "./slider/slider.demo";

@NgModule({
    imports: [
        CommonModule,
        ClarityModule,
        ROUTING
    ],
    declarations: [
        SliderDemo,
        ClarityLabs
    ],
    exports: [
        ClarityLabs
    ]
})
export default class ClarityLabsDemoModule {
}
