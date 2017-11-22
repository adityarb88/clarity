/*
 * Copyright (c) 2017 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */
import {AfterViewInit, Component, ElementRef, Injector, SkipSelf, ViewChild} from "@angular/core";
import {DateCell} from "./model/date-cell";
import {DateUtilsService} from "./providers/date-utils.service";
import {DateViewService} from "./providers/date-view.service";
import {AbstractPopover} from "../../popover/common/abstract-popover";
import {Point} from "../../popover/common/popover";
import {CalendarDate} from "./model/calendar-date";
import {DOWN_ARROW, LEFT_ARROW, RIGHT_ARROW, UP_ARROW} from "../../utils/key-codes/key-codes";
import {DatepickerScrollService} from "./providers/datepicker-scroll.service";
import {NonNgIterable} from "../../utils/virtual-scroll/non-ng-iterable";
import {VirtualForOf} from "../../utils/virtual-scroll/virtual-for-of";
import {Subscription} from "rxjs/Subscription";

@Component({
    selector: "clr-datepicker-content",
    templateUrl: "./datepicker-content.html",
    host: {
        "[class.datepicker-content]": "true",
    },
    providers: [DateUtilsService, DateViewService, DatepickerScrollService]
})
export class DatepickerContent extends AbstractPopover implements AfterViewInit {

    @ViewChild("dateView") dateView: ElementRef;

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

    calendars;

    private _subscriptions: Subscription[] = [];

    constructor(@SkipSelf() parentHost: ElementRef,
                private _injector: Injector,
                private _dateUtilsService: DateUtilsService,
                private _dateViewService: DateViewService,
                private _elRef: ElementRef,
                private _datepickerScrollService: DatepickerScrollService) {
        super(_injector, parentHost);
        this._dateUtilsService.initializeMonthAndYear();
        this.anchorPoint = Point.BOTTOM_LEFT;
        this.popoverPoint = Point.LEFT_TOP;
        this.closeOnOutsideClick = true;
        this.calendars = this.generateCalendar(this._dateUtilsService.calendarViewMonth, this._dateUtilsService.calendarViewYear);
        this._subscriptions.push(this._datepickerScrollService.scrollMonth.subscribe((month) => {
            this._dateUtilsService.calendarViewMonth = month;
        }));
        this._subscriptions.push(this._datepickerScrollService.scrollYear.subscribe((year) => {
            this._dateUtilsService.calendarViewYear = year;
        }));
    }

    ngAfterViewInit() {
        this._dateViewService.focusCell(this._elRef);
    }

    ngOnDestroy() {
        this._subscriptions.forEach((sub: Subscription) => sub.unsubscribe());
    }

    /*
    get calendarDates(): DateCell[][] {
        return this._dateUtilsService.currentCalendarViewDates;
    }
    */

    ngOnInit() {
        console.log(this.calendars);
        //this._dateUtilsService.currentCalendarViewDates = this._dateUtilsService.initializeCalendarViewData();
        //this.calendars = this.generateCalendar(this._dateUtilsService.calendarViewMonth, this._dateUtilsService.calendarViewYear);
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

    private generateCalendar(month: number, year: number) {
        /*
        const obj: NonNgIterable<any> = {
            month: 0,
            year: 0,
            setMonth: function(m: number) {
                this.month = m;
            },
            setYear: function(y: number) {
                this.year = y;
            },
            get: function(index: number) {
                const m: number = month + index;
                const y: number = year + Math.floor(m / 12);
                let mod: number = m % 12;
                if (mod < 0) {
                    mod += 12;
                }
                this.setMonth(mod);
                this.setYear(y);
                return dateService.getDatesInCalendarView(mod, y);
            }
        };
        */
        /*
        const get = (index: number) => {
            const m: number = month + index;
            const y: number = year + Math.floor(m / 12);
            let mod: number = m % 12;
            if (mod < 0) {
                mod += 12;
            }
            return this._dateUtilsService.getDatesInCalendarView(mod, y);
        };
        */
        const get = (index: number) => {
            const m: number = month + index;
            const y: number = year + Math.floor(m / 12);
            let mod: number = m % 12;
            if (mod < 0) {
                mod += 12;
            }
            const dateRows = this._dateUtilsService.getDatesInCalendarView(mod, y);
            return {
                month: mod,
                year: y,
                dateRows: dateRows
            };
        };
        return {get};
        //return obj;
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

    isTableInView(month: number, year: number): boolean {
        return (month === this._dateUtilsService.calendarViewMonth)
            && (year === this._dateUtilsService.calendarViewYear);
    }

    @ViewChild(VirtualForOf) virtualFor: VirtualForOf<any>;

    onCalendarScroll(): void {
        this._datepickerScrollService.processScrollEvent(this.dateView, this.virtualFor);
    }
}
