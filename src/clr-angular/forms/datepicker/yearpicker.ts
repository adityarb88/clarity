/*
 * Copyright (c) 2016-2018 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */
import {AfterViewInit, Component, ElementRef, HostListener} from "@angular/core";
import {DateNavigationService} from "./providers/date-navigation.service";
import {YearRangeModel} from "./model/year-range.model";
import {ViewManagerService} from "./providers/view-manager.service";
import {DatepickerViewService} from "./providers/datepicker-view.service";
import {DOWN_ARROW, LEFT_ARROW, RIGHT_ARROW, UP_ARROW} from "../../utils/key-codes/key-codes";

@Component({
    selector: "clr-yearpicker",
    template: `
        <div class="year-switchers">
            <button class="calendar-btn switcher" type="button" (click)="previousDecade()">
                <clr-icon shape="angle" dir="left"></clr-icon>
            </button>
            <button class="calendar-btn switcher" type="button" (click)="currentDecade()">
                <clr-icon shape="event"></clr-icon>
            </button>
            <button class="calendar-btn switcher" type="button" (click)="nextDecade()">
                <clr-icon shape="angle" dir="right"></clr-icon>
            </button>
        </div>
        <div class="years">
            <button
                *ngFor="let year of yearRangeModel.yearRange"
                type="button"
                class="calendar-btn year"
                [attr.tabindex]="getTabIndex(year)"
                [class.is-active]="year === calendarYear"
                (click)="changeYear(year)">
                {{year}}
            </button>
        </div>
    `,
    host: {
        "[class.yearpicker]": "true",
    }
})
export class ClrYearpicker implements AfterViewInit {
    constructor(private _dateNavigationService: DateNavigationService,
                private _viewManagerService: ViewManagerService,
                private _datepickerViewService: DatepickerViewService,
                private _elRef: ElementRef) {
        this.yearRangeModel = new YearRangeModel(this._dateNavigationService.calendar.year);
        this._focusedYear = this._dateNavigationService.calendar.year;
    }

    yearRangeModel: YearRangeModel;

    private _focusedYear: number;

    /**
     * Gets the year which the user is currently on.
     */
    get calendarYear(): number {
        return this._dateNavigationService.calendar.year;
    }

    changeYear(year: number): void {
        this._dateNavigationService.changeYear(year);
        this._viewManagerService.changeToDayPickerView();
    }

    previousDecade(): void {
        this.yearRangeModel = this.yearRangeModel.previousDecade();
    }

    currentDecade(): void {
        this.yearRangeModel = this.yearRangeModel.currentDecade();
        this._datepickerViewService.focusCell(this._elRef);
    }

    nextDecade(): void {
        this.yearRangeModel = this.yearRangeModel.nextDecade();
    }

    getTabIndex(year: number): number {
        let focusYear: number = -1;
        if (this.yearRangeModel.inRange(this._focusedYear)) {
            focusYear = this._focusedYear;
        } else if(this.yearRangeModel.inRange(this.calendarYear)) {
            focusYear = this.calendarYear;
        } else {
            focusYear = this.yearRangeModel.midNumber;
        }
        this._focusedYear = focusYear;
        return year === focusYear ? 0 : -1;
    }

    @HostListener("keydown", ["$event"])
    onKeyDown(event: KeyboardEvent) {
        if (event) {
            const keyCode: number = event.keyCode;
            if (keyCode === UP_ARROW) {
                event.preventDefault();
                this.incrementFocusYearBy(-1);
            } else if (keyCode === DOWN_ARROW) {
                event.preventDefault();
                this.incrementFocusYearBy(1);
            } else if (keyCode === RIGHT_ARROW) {
                event.preventDefault();
                this.incrementFocusYearBy(5);
            } else if (keyCode === LEFT_ARROW) {
                event.preventDefault();
                this.incrementFocusYearBy(-5);
            }
        }
    }

    private incrementFocusYearBy(value: number): void {
        this._focusedYear = this._focusedYear + value;
        if (!this.yearRangeModel.inRange(this._focusedYear)) {
            if (value > 0) {
                this.yearRangeModel = this.yearRangeModel.nextDecade();
            } else {
                this.yearRangeModel = this.yearRangeModel.previousDecade();
            }
        }
        this._datepickerViewService.focusCell(this._elRef);
    }

    ngAfterViewInit() {
        this._datepickerViewService.focusCell(this._elRef);
    }
}
