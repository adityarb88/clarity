/*
 * Copyright (c) 2017 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */
import {AfterViewInit, Component, ElementRef, HostListener} from "@angular/core";
import {DateUtilsService} from "./providers/date-utils.service";
import {DateViewService} from "./providers/date-view.service";
import {CalendarDate} from "./model/calendar-date";
import {DOWN_ARROW, LEFT_ARROW, RIGHT_ARROW, UP_ARROW} from "../../utils/key-codes/key-codes";

@Component({
    selector: "clr-monthpicker",
    template: `
        <button
            *ngFor="let month of months"
            class="month-cell"
            (click)="setMonth(month)"
            [class.active]="month === calendarViewMonth"
            [attr.tabindex]="getTabIndex(month)">
            {{month}}
        </button>
    `,
    host: {
        "[class.monthpicker-content]": "true",
    }
})
export class MonthPicker implements AfterViewInit {
    constructor(
        private _dateUtilsService: DateUtilsService,
        private _dateViewService: DateViewService,
        private _elRef: ElementRef) {
        this.initializeFocusedMonth();
    }

    ngAfterViewInit() {
        this._dateViewService.focusCell(this._elRef);
    }

    get months(): string[] {
        return this._dateUtilsService.getLocaleMonthsLong();
    }

    set monthView(value: boolean) {
        this._dateViewService.monthView = value;
    }

    get calendarViewMonth(): string {
        const calViewMonth = this._dateUtilsService.calendarViewMonth || this._dateUtilsService.currentMonth;
        return this.months[calViewMonth];
    }

    setMonth(month: string): void {
        const calViewMonthIndex: number = this.months.indexOf(month);
        this._dateUtilsService.calendarViewMonth = calViewMonthIndex;
        this._dateUtilsService.updateCalendar();
        this.monthView = false;
    }

    private _focusedMonth: number;

    @HostListener("keydown", ["$event"])
    onKeyDown(event: KeyboardEvent) {
        const keyCode: number = event.keyCode;
        if (keyCode === UP_ARROW && this._focusedMonth > 0) {
            this._focusedMonth--;
            this._dateViewService.focusCell(this._elRef);
        } else if (keyCode === DOWN_ARROW  && this._focusedMonth < 11) {
            this._focusedMonth++;
            this._dateViewService.focusCell(this._elRef);
        } else if (keyCode === RIGHT_ARROW && this._focusedMonth < 6) {
            this._focusedMonth = this._focusedMonth + 6;
            this._dateViewService.focusCell(this._elRef);
        } else if (keyCode === LEFT_ARROW && this._focusedMonth > 5) {
            this._focusedMonth = this._focusedMonth - 6;
            this._dateViewService.focusCell(this._elRef);
        }
    }

    private initializeFocusedMonth(): void {
        const dUService: DateUtilsService = this._dateUtilsService;
        const focusedDate: CalendarDate = dUService.focusedDate;
        const selDate: CalendarDate = dUService.selectedDate;
        const calViewMonth: number = dUService.calendarViewMonth;

        if (focusedDate) {
            this._focusedMonth = focusedDate.month;
        } else if (selDate) {
            this._focusedMonth = selDate.month;
        } else {
            this._focusedMonth = calViewMonth;
        }
    }

    getTabIndex(month: string): number {
        return month === this.months[this._focusedMonth] ? 0 : -1;
    }
}
