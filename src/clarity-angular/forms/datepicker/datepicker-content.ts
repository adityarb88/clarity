/*
 * Copyright (c) 2017 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */
import {Component, ElementRef, Injector, SkipSelf} from "@angular/core";
import {CalendarDate} from "./calendar-date";
import {DateUtilsService} from "./providers/date-utils.service";
import {DateViewService} from "./providers/date-view.service";

@Component({
    selector: "clr-datepicker-content",
    template: `
        <ng-container *ngIf="monthView">
            <clr-monthpicker></clr-monthpicker>
        </ng-container>
        <ng-container *ngIf="!monthView && !yearView">
            <div class="datepicker-month-year-container">
                <button class="datepicker-btn datepicker-month" (click)="monthView = true">
                    {{month}}
                </button>
                <button class="datepicker-btn datepicker-year" (click)="yearView = true">
                    {{year}}
                </button>
            </div>
            <table class="datepicker-table">
                <tr class="datepicker-row">
                    <td *ngFor="let day of daysShort" class="datepicker-cell days">
                        {{day}}
                    </td>
                </tr>
                <tr *ngFor="let row of calendarDates" class="datepicker-row">
                    <td *ngFor="let date of row" class="datepicker-cell">
                        <button class="date"
                                [attr.disabled]="date.currentMonth ? null : ''"
                                [class.disabled]="!date.currentMonth"
                                [class.current]="date.currentDate"
                                [class.active]="(date.date === selectedDate) && date.currentMonth"
                                (click)="setDate(date.date)">
                            {{date.date}}
                        </button>
                    </td>
                </tr>
            </table>
        </ng-container>
        <ng-container *ngIf="yearView">
            <clr-yearpicker></clr-yearpicker>
        </ng-container>
        
        <ng-container *ngIf="selectedDate">
            <div class="temp-container">
            {{month}} | {{selectedDate}} | {{year}}
            </div>
        </ng-container>
    `,
    host: {
        "[class.datepicker-content]": "true",
    },
    providers: [DateUtilsService, DateViewService]
})
export class DatepickerContent {

    get monthView(): boolean {
        return this.dateViewService.monthView;
    }

    set monthView(value: boolean) {
        this.dateViewService.monthView = value;
    }

    get yearView(): boolean {
        return this.dateViewService.yearView;
    }

    set yearView(value: boolean) {
        this.dateViewService.yearView = value;
    }

    constructor(@SkipSelf() parentHost: ElementRef,
                private dateUtilsService: DateUtilsService,
                private dateViewService: DateViewService) {
        //super(injector, parentHost);
        //this.anchorPoint = Point.BOTTOM_LEFT;
        //this.popoverPoint = Point.LEFT_TOP;
        //this.closeOnOutsideClick = true;
    }

    get calendarDates(): CalendarDate[][] {
        return this.dateUtilsService.currentCalendarViewDates;
    }

    ngOnInit() {
        this.dateUtilsService.currentCalendarViewDates = this
            .dateUtilsService
            .getDatesInCalendarView();
    }

    get daysShort(): string[] {
        return this.dateUtilsService.getLocaleDaysShort();
    }

    get selectedDate(): number {
        return this.dateUtilsService.selectedDate;
    }

    setDate(value: number): void {
        this.dateUtilsService.selectedDate = value;
    }

    get month(): string {
        const selMonth: number = this.dateUtilsService.selectedMonth;
        if (typeof selMonth !== "undefined") {
            return this.dateUtilsService.getMonthLong(selMonth);
        } else {
            return this.dateUtilsService.getMonthLong(this.dateUtilsService.currMonth);
        }
    }

    get year(): number {
        const selYear: number = this.dateUtilsService.selectedYear;
        if (typeof selYear !== "undefined") {
            return selYear;
        } else {
            return this.dateUtilsService.currYear;
        }
    }
}
