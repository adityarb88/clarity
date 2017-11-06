/*
 * Copyright (c) 2017 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */
import {AfterViewInit, Component, ElementRef, HostListener} from "@angular/core";
import {DateUtilsService} from "./providers/date-utils.service";
import {DateViewService} from "./providers/date-view.service";
import {DOWN_ARROW, UP_ARROW} from "../../utils/key-codes/key-codes";
import {CalendarDate} from "./model/calendar-date";


function yearViewGenerator(currentYear: number) {
    return {
        get(index: number) {
            return index + currentYear;
        }
    };
}

@Component({
    selector: "clr-yearpicker",
    template: `
        <button
            *clrVirtualFor="let year of years"
            class="year-cell"
            (click)="setYear(year)"
            [class.active]="year === calendarViewYear"
            [attr.tabindex]="getTabIndex(year)">
            {{year}}
        </button>
    `,
    host: {
        "[class.yearpicker-content]": "true",
    }
})
export class YearPicker implements AfterViewInit{
    constructor(
        private _dateUtilsService: DateUtilsService,
        private _dateViewService: DateViewService,
        private _elRef: ElementRef) {
        this.initializeFocusYear();
    }

    ngAfterViewInit() {
        this._dateViewService.focusCell(this._elRef);
    }

    years = yearViewGenerator(this.calendarViewYear);

    set yearView(value: boolean) {
        this._dateViewService.yearView = value;
    }

    get calendarViewYear(): number {
        const calViewYear: number = this._dateUtilsService.calendarViewYear || this._dateUtilsService.currentYear;
        return calViewYear;
    }

    setYear(year: number): void {
        this._dateUtilsService.calendarViewYear = year;
        this.yearView = false;
    }

    @HostListener("keydown", ["$event"])
    onKeyDown(event: KeyboardEvent) {
        const keyCode: number = event.keyCode;
        if (keyCode === UP_ARROW) {
            event.preventDefault();
            this._focusedYear--;
            this.years = yearViewGenerator(this._focusedYear - 1);
            setTimeout(() => {
                const focusEl = this._elRef.nativeElement.querySelector('[tabindex="0"]');
                console.log(focusEl);
                if (focusEl) {
                    focusEl.focus();
                }
            }, 100);
            //this._dateViewService.focusCell(this._elRef);
        } else if (keyCode === DOWN_ARROW) {
            event.preventDefault();
            this._focusedYear++;
            this.years = yearViewGenerator(this._focusedYear - 1);
            setTimeout(() => {
                const focusEl = this._elRef.nativeElement.querySelector('[tabindex="0"]');
                console.log(focusEl);
                if (focusEl) {
                    focusEl.focus();
                }
            }, 100);
            //this._dateViewService.focusCell(this._elRef);
        }
    }

    private _focusedYear: number;

    private initializeFocusYear(): void {
        const dUService: DateUtilsService = this._dateUtilsService;
        const focusedDate: CalendarDate = dUService.focusedDate;
        const selDate: CalendarDate = dUService.selectedDate;
        const calViewYear: number = dUService.calendarViewYear;

        if (focusedDate) {
            this._focusedYear = focusedDate.year;
        } else if (selDate) {
            this._focusedYear = selDate.year;
        } else {
            this._focusedYear = calViewYear;
        }
    }

    getTabIndex(year: number): number {
        return year === this._focusedYear ? 0 : -1;
    }
}
