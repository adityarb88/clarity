/*
 * Copyright (c) 2017 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */
import {Component, ElementRef, Injector, SkipSelf} from "@angular/core";
import {DateCell} from "./model/date-cell";
import {DateUtilsService} from "./providers/date-utils.service";
import {DateViewService} from "./providers/date-view.service";
import {AbstractPopover} from "../../popover/common/abstract-popover";
import {Point} from "../../popover/common/popover";
import {MonthViewType} from "./utils/month-view.enum";
import {CalendarDate} from "./model/calendar-date";

@Component({
    selector: "clr-datepicker-content",
    templateUrl: "./datepicker-content.html",
    host: {
        "[class.datepicker-content]": "true",
    },
    providers: [DateUtilsService, DateViewService]
})
export class DatepickerContent extends AbstractPopover {

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
                private injector: Injector,
                private dateUtilsService: DateUtilsService,
                private dateViewService: DateViewService) {
        super(injector, parentHost);
        this.anchorPoint = Point.BOTTOM_LEFT;
        this.popoverPoint = Point.LEFT_TOP;
        this.closeOnOutsideClick = true;
    }

    get calendarDates(): DateCell[][] {
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

    get dateValue(): number {
        return this.dateUtilsService.selectedDate.date;
    }

    setDate(value: number): void {
        const dateValue: CalendarDate
            = new CalendarDate(
            value,
            this.dateUtilsService.calendarViewMonth,
            this.dateUtilsService.calendarViewYear
        );
        this.dateUtilsService.selectedDate = dateValue;
    }

    setDateAndChangeCalendarMonth(value: number, increment: boolean): void {
        if (increment) {
            this.dateUtilsService.changeViewToNextMonth();
        } else {
            this.dateUtilsService.changeViewToPreviousMonth();
        }
        this.dateUtilsService.selectedDate = new CalendarDate(
            value,
            this.dateUtilsService.calendarViewMonth,
            this.dateUtilsService.calendarViewYear
        );
    }

    get month(): string {
        const selMonth: number = this.dateUtilsService.calendarViewMonth;
        if (typeof selMonth !== "undefined") {
            return this.dateUtilsService.getMonthLong(selMonth);
        } else {
            return this.dateUtilsService.getMonthLong(this.dateUtilsService.currentMonth);
        }
    }

    get year(): number {
        const selYear: number = this.dateUtilsService.calendarViewYear;
        if (typeof selYear !== "undefined") {
            return selYear;
        } else {
            return this.dateUtilsService.currentYear;
        }
    }

    isPreviousMonth(date: DateCell): boolean {
        return date.monthView === MonthViewType.PREVIOUS;
    }

    isCurrentMonth(date: DateCell): boolean {
        return date.monthView === MonthViewType.CURRENT;
    }

    isNextMonth(date: DateCell): boolean {
        return date.monthView === MonthViewType.NEXT;
    }

    /*
    getTabIndex(date: DateCell): number {
        if ((date.date === this.dateUtilsService.selectedDate)
            || (date.isTodaysDate) || (date.date === 1)) {
            return 0;
        }
        return -1;
    }*/

    onDatepickerTableKeyDown(event: KeyboardEvent) {
        console.log("Test", event);
    }
}
