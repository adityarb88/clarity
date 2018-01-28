/*
 * Copyright (c) 2016-2018 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */

import {Component, ElementRef, Injector, SkipSelf} from "@angular/core";
import {AbstractPopover} from "../../popover/common/abstract-popover";
import {Point} from "../../popover/common/popover";
import {ViewManagerService} from "./providers/view-manager.service";

@Component({
    selector: "clr-datepicker-view-manager",
    templateUrl: "./datepicker-view-manager.html",
    providers: [
        ViewManagerService
    ],
    host: {
        "[class.calendar]": "true"
    }
})
export class ClrDatepickerViewManager extends AbstractPopover {
    constructor(
        @SkipSelf() parent: ElementRef,
        private _injector: Injector,
        private _elRef: ElementRef,
        private _viewManagerService: ViewManagerService) {
        super(_injector, parent);
        this.configurePopover();
    }

    /**
     * Configure Popover Direction and Close indicators
     */
    private configurePopover(): void {
        this.anchorPoint = Point.BOTTOM_LEFT;
        this.popoverPoint = Point.LEFT_TOP;
        this.closeOnOutsideClick = true;
    }

    get monthView(): boolean {
        return this._viewManagerService.monthView;
    }

    get yearView(): boolean {
        return this._viewManagerService.yearView;
    }

    get dayView(): boolean {
        return this._viewManagerService.dayView;
    }
}
