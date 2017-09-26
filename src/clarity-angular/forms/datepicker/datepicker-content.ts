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

    get selectedDateValue(): number {
        const dateVal: CalendarDate = this.dateUtilsService.selectedDate;
        return dateVal ? dateVal.date : undefined;
    }

    setDate(calDate: DateCell): void {
        const date: CalendarDate = calDate.date;
        if (this.dateUtilsService.isPreviousViewMonth(date)) {
            this.dateUtilsService.changeViewToPreviousMonth();
        } else if (this.dateUtilsService.isNextViewMonth(date)) {
            this.dateUtilsService.changeViewToNextMonth();
        }
        this.dateUtilsService.selectedDate = date;
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

    isCalendarViewMonth(calDate: DateCell): boolean {
        return this.dateUtilsService.isCurrentViewMonth(calDate.date);
    }

    /*
    isPreviousMonth(calDate: DateCell): boolean {
        return this.dateUtilsService.isPreviousViewMonth(calDate.date);
    }

    isNextMonth(calDate: DateCell): boolean {
        return this.dateUtilsService.isNextViewMonth(calDate.date);
    }*/

    onDatepickerTableKeyDown(event: KeyboardEvent) {
        console.log("Test", event);
    }
}
