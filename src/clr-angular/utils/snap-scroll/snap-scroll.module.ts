/**
 * Copyright (c) 2017 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */
import {CommonModule} from "@angular/common";
import {NgModule} from "@angular/core";
import {SNAP_SCROLL_DIRECTIVE} from "./index";

@NgModule({
    imports: [CommonModule],
    declarations: [SNAP_SCROLL_DIRECTIVE],
    exports: [SNAP_SCROLL_DIRECTIVE]
})
export class ClrSnapScrollModule {}
