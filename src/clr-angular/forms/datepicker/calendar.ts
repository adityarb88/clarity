/*
 * Copyright (c) 2016-2018 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */
import {Component} from "@angular/core";
import {LocaleHelperService} from "./providers/locale-helper.service";

@Component({
    selector: "clr-calendar",
    templateUrl: "./calendar.html"
})
export class ClrCalendar {

    constructor(
        private _localeHelperService: LocaleHelperService) {}

    get localeDaysNarrow(): ReadonlyArray<string> {
        return this._localeHelperService.localeDaysNarrow;
    }
}
