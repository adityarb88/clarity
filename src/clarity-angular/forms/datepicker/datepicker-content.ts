/*
 * Copyright (c) 2017 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */
import {AfterViewInit, Component, ElementRef, Injector, SkipSelf} from "@angular/core";
import {DateCell} from "./model/date-cell";
import {DateUtilsService} from "./providers/date-utils.service";
import {DateViewService} from "./providers/date-view.service";
import {AbstractPopover} from "../../popover/common/abstract-popover";
import {Point} from "../../popover/common/popover";
import {CalendarDate} from "./model/calendar-date";
import {DOWN_ARROW, LEFT_ARROW, RIGHT_ARROW, UP_ARROW} from "../../utils/key-codes/key-codes";

@Component({
    selector: "clr-datepicker-content",
    templateUrl: "./datepicker-content.html",
    host: {
        "[class.datepicker-content]": "true",
    },
    providers: [DateUtilsService, DateViewService]
})
export class DatepickerContent extends AbstractPopover implements AfterViewInit {

    get monthView(): boolean {
        return this._dateViewService.monthView;
    }

    set monthView(value: boolean) {
        this._dateViewService.monthView = value;
    }

    get yearView(): boolean {
        return this._dateViewService.yearView;
    }

    set yearView(value: boolean) {
        this._dateViewService.yearView = value;
    }

    constructor(@SkipSelf() parentHost: ElementRef,
                private _injector: Injector,
                private _dateUtilsService: DateUtilsService,
                private _dateViewService: DateViewService,
                private _elRef: ElementRef) {
        super(_injector, parentHost);
        this.anchorPoint = Point.BOTTOM_LEFT;
        this.popoverPoint = Point.LEFT_TOP;
        this.closeOnOutsideClick = true;
    }

    ngAfterViewInit() {
        this._dateViewService.focusCell(this._elRef);
    }

    get calendarDates(): DateCell[][] {
        return this._dateUtilsService.currentCalendarViewDates;
    }

    ngOnInit() {
        this._dateUtilsService.currentCalendarViewDates = this._dateUtilsService.initializeCalendarViewData();
    }

    get daysShort(): ReadonlyArray<string> {
        return this._dateUtilsService.getLocaleDaysShort();
    }

    setDate(dateCell: DateCell): void {
        const date: CalendarDate = dateCell.calendarDate;
        if (this._dateUtilsService.isPreviousViewMonth(date)) {
            this._dateUtilsService.changeViewToPreviousMonth();
        } else if (this._dateUtilsService.isNextViewMonth(date)) {
            this._dateUtilsService.changeViewToNextMonth();
        }
        this._dateUtilsService.selectedDate = date;
    }

    get month(): string {
        return this._dateUtilsService.getMonthLong(this._dateUtilsService.calendarViewMonth);
    }

    get year(): number {
        return this._dateUtilsService.calendarViewYear;
    }

    isCalendarViewMonth(dateCell: DateCell): boolean {
        return this._dateUtilsService.isCurrentViewMonth(dateCell.calendarDate);
    }

    /**
     * Returns if the date in the DateCell matches that of the
     * date selected by the user
     * @param {DateCell} dateCell
     * @returns {boolean}
     */
    isSelectedDate(dateCell: DateCell): boolean {
        return dateCell.calendarDate.isEqual(this._dateUtilsService.selectedDate);
    }

    onDateCellFocus(dateCell: DateCell) {
        this._dateUtilsService.focusedDate = dateCell.calendarDate;
    }

    onDatepickerTableKeyDown(event: KeyboardEvent) {
        switch(event.keyCode) {
            case UP_ARROW:
                this._dateUtilsService.incrementFocusedDateBy(-7);
                this._dateViewService.focusCell(this._elRef);
                break;
            case DOWN_ARROW:
                this._dateUtilsService.incrementFocusedDateBy(7);
                this._dateViewService.focusCell(this._elRef);
                break;
            case LEFT_ARROW:
                this._dateUtilsService.incrementFocusedDateBy(-1);
                this._dateViewService.focusCell(this._elRef);
                break;
            case RIGHT_ARROW:
                this._dateUtilsService.incrementFocusedDateBy(1);
                this._dateViewService.focusCell(this._elRef);
                break;
            default:
                break; //No default case. TSLint x-(
        }
    }

    /**
     * Gets the tab index of the date cell. Only returns 0 or -1.
     * Used to determine which button to focus on when the user is navigating
     * using a keyboard.
     *
     * @param {DateCell} dateCell
     * @returns {number}
     */
    getTabIndex(dateCell: DateCell): number {
        const calDate: CalendarDate = dateCell.calendarDate;
        const dUService: DateUtilsService = this._dateUtilsService;0
        const selDate: CalendarDate = dUService.selectedDate;
        const focusedDate: CalendarDate = dUService.focusedDate;
        const calViewMonth: number = dUService.calendarViewMonth;
        const calViewYear: number = dUService.calendarViewYear;

        // Nasty (but not THAT nasty) if else blocks.
        // Order important
        if (focusedDate) {
            if (calDate.isEqual(focusedDate)) {
                return 0;
            } else {
                return -1;
            }
        } else if (selDate
            && selDate.month === calViewMonth
            && selDate.year === calViewYear) {
            if (calDate.isEqual(selDate)) {
                return 0;
            } else {
                return -1;
            }
        } else if (calViewYear === dUService.currentYear
            && calViewMonth === dUService.currentMonth) {
            if (dateCell.isTodaysDate) {
                return 0;
            } else {
                return -1;
            }
        } else {
            if (calDate.date === 15) {
                return 0;
            } else {
                return -1;
            }
        }
    }
}
