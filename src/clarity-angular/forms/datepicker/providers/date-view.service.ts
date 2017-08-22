/*
 * Copyright (c) 2016-2017 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */
import {Injectable} from "@angular/core";

@Injectable()
export class DateViewService {

    private _monthView: boolean = false;

    get monthView(): boolean {
        return this._monthView;
    }

    set monthView(value: boolean) {
        this._monthView = value;
    }

    private _yearView: boolean = false;

    get yearView(): boolean {
        return this._yearView;
    }

    set yearView(value: boolean) {
        this._yearView = value;
    }
}
