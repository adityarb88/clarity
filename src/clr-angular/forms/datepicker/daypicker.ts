/*
 * Copyright (c) 2016-2018 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */
import {Component} from "@angular/core";
import {ViewManagerService} from "./providers/view-manager.service";
import {DateNavigationService} from "./providers/date-navigation.service";

@Component({
    selector: "clr-daypicker",
    templateUrl: "./daypicker.html",
    providers: [DateNavigationService],
    host: {
        "[class.daypicker]": "true",
    }
})
export class ClrDaypicker {

    constructor(private _viewManagerService: ViewManagerService) {}

    changeToMonthView(): void {
        this._viewManagerService.changeToMonthView();
    }

    changeToYearView(): void {
        this._viewManagerService.changeToYearView();
    }
}
