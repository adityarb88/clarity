/*
 * Copyright (c) 2017 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */
import {Component} from "@angular/core";
import {DateUtilsService} from "./providers/date-utils.service";
import {DateViewService} from "./providers/date-view.service";

@Component({
    selector: "clr-monthpicker",
    template: `
        <button 
            *ngFor="let month of months" 
            class="month-cell" 
            (click)="setMonth(month)"
            [class.active]="month === selectedMonth">
            {{month}}
        </button>
    `,
    host: {
        "[class.monthpicker-content]": "true",
    }
})
export class MonthPicker {
    constructor(private dateUtilsService: DateUtilsService, private dateViewService: DateViewService) {}

    get months(): string[] {
        return this.dateUtilsService.getLocaleMonthsLong();
    }

    set monthView(value: boolean) {
        this.dateViewService.monthView = value;
    }

    get selectedMonth(): string {
        const selectedMonth = this.dateUtilsService.selectedMonth || this.dateUtilsService.currMonth;
        return this.months[selectedMonth];
    }

    setMonth(month: string): void {
        const selectedMonthIndex: number = this.months.indexOf(month);
        this.dateUtilsService.selectedMonth = selectedMonthIndex;
        this.monthView = false;
    }
}