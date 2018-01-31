/*
 * Copyright (c) 2016-2018 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */
import {RouterModule, Routes} from "@angular/router";

import {BasicDatepickerDemo} from "./basic-datepicker";
import {DatepickerDemo} from "./datepicker.demo";
import {DatepickerInFormDemo} from "./datepicker-in-form";
import {ModuleWithProviders} from "@angular/core";

const ROUTES: Routes = [{
    path: "",
    component: DatepickerDemo,
    children: [
        {path: "", redirectTo: "basic", pathMatch: "full"},
        {path: "basic", component: BasicDatepickerDemo},
        {path: "forms", component: DatepickerInFormDemo}
    ]
}];

export const ROUTING: ModuleWithProviders = RouterModule.forChild(ROUTES);
