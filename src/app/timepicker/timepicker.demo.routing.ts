/*
 * Copyright (c) 2016 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */
import {ModuleWithProviders} from "@angular/core/src/metadata/ng_module";
import {Routes, RouterModule} from "@angular/router";

import {BasicTimepickerDemo} from "./basic-timepicker/basic-timepicker";
import {TimepickerDemo} from "./timepicker.demo";

const ROUTES: Routes = [
    {
        path: "",
        component: TimepickerDemo,
        children: [
            { path: "", redirectTo: "basic-tree-node", pathMatch: "full" },
            { path: "basic-tree-node", component: BasicTimepickerDemo }
        ]
    }
];

export const ROUTING: ModuleWithProviders = RouterModule.forChild(ROUTES);
