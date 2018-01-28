/*
 * Copyright (c) 2016-2018 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */

import {Injectable} from "@angular/core";

@Injectable()
export class ViewManagerService {

    private _monthView: boolean = false;
    private _yearView: boolean = false;
    private _dayView: boolean = true;

    get dayView(): boolean {
        return this._dayView;
    }
    get yearView(): boolean {
        return this._yearView;
    }
    get monthView(): boolean {
        return this._monthView;
    }

    changeToMonthView(): void {
        this._yearView = false;
        this._dayView = false;
        this._monthView = true;
    }

    changeToYearView(): void {
        this._monthView = false;
        this._dayView = false;
        this._yearView = true;
    }

    changeToDayPickerView(): void {
        this._dayView = true;
        this._yearView = false;
        this._monthView = false;
    }
}
