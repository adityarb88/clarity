/*
 * Copyright (c) 2017 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */
import {Component} from "@angular/core";
import {DateUtilsService} from "./providers/date-utils.service";
import {DateViewService} from "./providers/date-view.service";

@Component({
    selector: "clr-yearpicker",
    template: `
        <button
            *ngFor="let year of years"
            class="year-cell"
            (click)="setYear(year)"
            [class.active]="year === calendarViewYear">
            {{year}}
        </button>
    `,
    host: {
        "[class.yearpicker-content]": "true",
    }
})
export class YearPicker {
    constructor(private dateUtilsService: DateUtilsService, private dateViewService: DateViewService) {}

    get years(): number[] {
        return this.dateUtilsService.getYearStartingRange();
    }

    set yearView(value: boolean) {
        this.dateViewService.yearView = value;
    }

    get calendarViewYear(): number {
        const calViewYear: number = this.dateUtilsService.calendarViewYear || this.dateUtilsService.currentYear;
        return calViewYear;
    }

    setYear(year: number): void {
        this.dateUtilsService.calendarViewYear = year;
        this.yearView = false;
    }
}
