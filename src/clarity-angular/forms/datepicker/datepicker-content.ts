/*
 * Copyright (c) 2017 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */
import {Component, ElementRef, Injector, SkipSelf} from "@angular/core";
import {CalendarDate} from "./calendar-date";
import {DateUtilsService} from "./providers/date-utils.service";
import {DateViewService} from "./providers/date-view.service";

const TOTAL_DAYS_IN_ONE_MONTH: number = 42;

@Component({
    selector: "clr-datepicker-content",
    template: `
        <ng-container *ngIf="monthView">
            <clr-monthpicker></clr-monthpicker>
        </ng-container>
        <ng-container *ngIf="!monthView && !yearView">
            <div class="datepicker-month-year-container">
                <button class="datepicker-btn datepicker-month" (click)="monthView = true">
                    {{currentMonth}}
                </button>
                <button class="datepicker-btn datepicker-year" (click)="yearView = true">
                    {{currentYear}}
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
                                [class.active]="date.currentDate">
                            {{date.date}}
                        </button>
                    </td>
                </tr>
            </table>
        </ng-container>
        <ng-container *ngIf="yearView">
            <clr-yearpicker></clr-yearpicker>
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

    calendarDates: CalendarDate[][] = [];

    constructor(@SkipSelf() parentHost: ElementRef,
                private dateUtilsService: DateUtilsService,
                private dateViewService: DateViewService) {
        //super(injector, parentHost);
        //this.anchorPoint = Point.BOTTOM_LEFT;
        //this.popoverPoint = Point.LEFT_TOP;
        //this.closeOnOutsideClick = true;
    }

    ngOnInit() {
        this.calendarDates = this
            .dateUtilsService
            .getDatesInCalendarView(
                this.dateUtilsService.currMonth,
                this.dateUtilsService.currDate,
                this.dateUtilsService.currYear
            );
    }

    get daysShort(): string[] {
        return this.dateUtilsService.getLocaleDaysShort();
    }

    get currentYear(): number {
        return this.dateUtilsService.currYear;
    }

    get currentMonth(): string {
        return this.dateUtilsService.getFullMonth(this.currentYear, this.dateUtilsService.currMonth);
    }
}
