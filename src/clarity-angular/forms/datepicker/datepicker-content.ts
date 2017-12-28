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
import {VirtualForOf} from "../../utils/virtual-scroll/virtual-for-of";
import {Subscription} from "rxjs/Subscription";
import {DateIOService} from "./providers/date-io.service";
import {IfOpenService} from "../../utils/conditional/if-open.service";

@Component({
    selector: "clr-datepicker-content",
    templateUrl: "./datepicker-content.html",
    host: {
        "[class.datepicker-content]": "true",
    },
    providers: [DateViewService, DatepickerScrollService, DateUtilsService]
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
                private _elRef: ElementRef,
                private _dateUtilsService: DateUtilsService,
                private _dateViewService: DateViewService,
                private _datepickerScrollService: DatepickerScrollService,
                private _dateIOService: DateIOService,
                private _ifOpenService: IfOpenService) {
        super(_injector, parentHost);
        this._dateUtilsService.initializeMonthAndYear();
        this.configurePopover();
        this.processInput();
        this.initializeCalendar();
        this.initializeSubscriptions();
    }

    /**
     * Configure popover settings. Datepicker always opens on the bottom left and closes when the user
     * clicks outside of the datepicker popover.
     */
    private configurePopover(): void {
        this.anchorPoint = Point.BOTTOM_LEFT;
        this.popoverPoint = Point.LEFT_TOP;
        this.closeOnOutsideClick = true;
    }

    /**
     * Initializes the calendar by first checking the user input. If the user input is not provided,
     * it opens the calendar pointing at today's date.
     */
    private initializeCalendar(): void {
        const year: number
            = this._dateUtilsService.selectedDate
            ? this._dateUtilsService.selectedDate.year : this._dateUtilsService.calendarViewYear;
        const month: number
            = this._dateUtilsService.selectedDate
            ? this._dateUtilsService.selectedDate.month : this._dateUtilsService.calendarViewMonth;
        this.calendars
            = this._dateUtilsService.generateCalendar(
                month, year);
    }

    /**
     * Updates the datepicker to open the user selected calendar view.
     */
    private updateCalendarView(): void {
        this.calendars = this._dateUtilsService.generateCalendar(
            this._dateUtilsService.calendarViewMonth, this._dateUtilsService.calendarViewYear
        );
    }

    /**
     * Initializes the scroll service and date utils subscriptions.
     */
    private initializeSubscriptions(): void {
        this._subscriptions.push(this._datepickerScrollService.scrollMonth.subscribe((month) => {
            this._dateUtilsService.calendarViewMonth = month;
        }));
        this._subscriptions.push(this._datepickerScrollService.scrollYear.subscribe((year) => {
            this._dateUtilsService.calendarViewYear = year;
        }));
        this._subscriptions.push(this._dateUtilsService.calendarChange.subscribe( () => {
            this.updateCalendarView();
        }));
    }

    /**
     * Processes the input provided by the user and updates the calendar view according to the input.
     * If the input is null, then the calendar is opened w.r.t today's date.
     */
    private processInput(): void {
        const inputDateObj: Date = this._dateIOService.processInput();
        if (inputDateObj) {
            const calDate: CalendarDate
                = new CalendarDate(inputDateObj.getDate(), inputDateObj.getMonth(), inputDateObj.getFullYear());
            this._dateUtilsService.selectedDate = calDate;
        }
    }

    ngAfterViewInit() {
        this._dateViewService.focusCell(this._elRef);
    }

    ngOnDestroy() {
        this._subscriptions.forEach((sub: Subscription) => sub.unsubscribe());
    }

    get daysShort(): ReadonlyArray<string> {
        return this._dateUtilsService.getLocaleDaysShort();
    }

    setDate(dateCell: DateCell): void {
        const date: CalendarDate = dateCell.calendarDate;
        this._dateUtilsService.selectedDate = date;
        this._dateIOService.emitDate(date.toDate());
        this._ifOpenService.open = false;
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

    onDateCellFocus(dateCell: DateCell): void {
        this._dateUtilsService.focusedDate = dateCell.calendarDate;
    }

    onDatepickerTableKeyDown(event: KeyboardEvent): void {
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
        return -1;
        /*
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
        return -1;
        */
    }

    isTableInView(month: number, year: number): boolean {
        return (month === this._dateUtilsService.calendarViewMonth)
            && (year === this._dateUtilsService.calendarViewYear);
    }

    @ViewChild(VirtualForOf) virtualFor: VirtualForOf<any>;

    /**
     * Method to process the scroll events by the user on the datepicker.
     */
    onCalendarScroll(): void {
        this._datepickerScrollService.processScrollEvent(this.dateView, this.virtualFor);
    }
}
