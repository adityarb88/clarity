/*
 * Copyright (c) 2016-2017 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */
import {ElementRef, Injectable, NgZone} from "@angular/core";
import {first} from 'rxjs/operator/first';

@Injectable()
export class DateViewService {

    constructor(private _ngZone: NgZone) {
    }

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

    //Credit: Material: https://github.com/angular/material2/blob/master/src/lib/datepicker/calendar.ts
    focusCell(elRef: ElementRef): void {
        this._ngZone.runOutsideAngular(() => {
            first.call(this._ngZone.onStable.asObservable()).subscribe(() => {
                const focusEl = elRef.nativeElement.querySelector('[tabindex="0"]');
                if (focusEl) {
                    focusEl.focus();
                }
            });
        });
    }
}
