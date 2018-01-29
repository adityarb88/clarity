/*
 * Copyright (c) 2016-2018 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */

import {Injectable} from "@angular/core";
import {LocaleHelperService} from "./locale-helper.service";
import {
    BIG_ENDIAN, DEFAULT_LOCALE_FORMAT, InputDateDisplayFormat, LITTLE_ENDIAN,
    LITTLE_ENDIAN_REGEX, MIDDLE_ENDIAN, MIDDLE_ENDIAN_REGEX, SEPARATORS
} from "../utils/constants";
import {getNumberOfDaysInTheMonth, parseToFourDigitYear} from "../utils/date-utils";
import {Subject} from "rxjs/Subject";
import {Observable} from "rxjs/Observable";

@Injectable()
export class DateIOService {
    private _localeHelperService: LocaleHelperService;
    public cldrLocaleDateFormat: string = DEFAULT_LOCALE_FORMAT;
    private localeDisplayFormat: InputDateDisplayFormat = BIG_ENDIAN;

    private _inputDate: string;

    get inputDate(): string {
        return this._inputDate;
    }

    set inputDate(value: string) {
        this._inputDate = value;
        const date: Date = this.processInput();
        if (date) {
            this._dateUpdated.next(date);
        } else {
            this._inputDate = "";
        }
    }

    processInput(): Date {
        return this.isValidInput(this._inputDate);
    }

    set localeHelperService(service: LocaleHelperService) {
        this._localeHelperService = service;
        this.cldrLocaleDateFormat = this._localeHelperService.localeDateFormat;
        this.initializeLocaleDisplayFormat();
    }

    private initializeLocaleDisplayFormat(): void {
        const format: string = this.cldrLocaleDateFormat.toLocaleLowerCase();
        if (LITTLE_ENDIAN_REGEX.test(format)) {
            this.localeDisplayFormat = LITTLE_ENDIAN;
        } else if (MIDDLE_ENDIAN_REGEX.test(format)) {
            this.localeDisplayFormat = MIDDLE_ENDIAN;
        } else {
            // everything else is set to BIG-ENDIAN FORMAT
            this.localeDisplayFormat = BIG_ENDIAN;
        }
    }

    /**
     * Processes the Javascript Date object input provided by the user.
     */
    processDate(date: Date): string {
        if (date) {
            //Note: The reason we convert the date object back to string
            //and not store it directly is because in Javascript
            //you can create a Date object like this:
            //let date = new Date("Test"). This is an invalid date object
            //but still a date object (instance of comparison returns true)
            //On our end we convert this object to string, and check if its valid or not.
            //The inputDate property in this service is the single source of truth and if the user
            //passes a Date object, it is converted to a string and stored in inputDate.
            //Feel free to let me know if there is a better way to do this.
            const dateStr: string = this.toLocaleDisplayFormatString(date);
            if (this.isValidInput(dateStr)) {
                this._inputDate = dateStr;
                return dateStr;
            } else {
                this._inputDate = "";
                return "";
            }
        }
    }

    toLocaleDisplayFormatString(date: Date): string {
        if (date) {
            const dateNo: number = date.getDate();
            const monthNo: number = date.getMonth() + 1;
            const dateStr: string = dateNo > 9 ? dateNo.toString() : "0" + dateNo;
            const monthStr: string = monthNo > 9 ? monthNo.toString() : "0" + monthNo;
            if (this.localeDisplayFormat === LITTLE_ENDIAN) {
                return dateStr + "/" + monthStr + "/" + date.getFullYear();
            } else if (this.localeDisplayFormat === MIDDLE_ENDIAN) {
                return monthStr + "/" + dateStr + "/" + date.getFullYear();
            } else {
                return date.getFullYear() + "/" + monthStr + "/" + dateStr;
            }
        }
        return "";
    }

    get placeholderText(): string {
        return this.localeDisplayFormat.format;
    }

    /**
     * Detects if the input date string contains any one
     * of the separators from the SEPARTORS array.
     */
    private detectSeparator(date: string): string {
        let separatorUsed: string;
        for (const separator of SEPARATORS) {
            if (date.indexOf(separator) > -1) {
                separatorUsed = separator;
                break;
            }
        }
        return separatorUsed;
    }

    /**
     * Checks if the string is a non negative number.
     * Credit: https://stackoverflow.com/a/24457420/8960224
     */
    private isNonNegativeNumber(num: string): boolean {
        return /^\d+$/.test(num);
    }

    /**
     * Checks if the date parts are numbers
     */
    private areDatePartsNumbers(dateParts: string[]): boolean {
        for (const part of dateParts) {
            if (!this.isNonNegativeNumber(part)) {
                return false;
            }
        }
        return true;
    }

    /**
     * Checks if the month entered by the user is valid or not.
     * Note: Month is 0 based.
     */
    private isValidMonth(month: number): boolean {
        if (month > -1 && month < 12) {
            return true;
        }
        return false;
    }

    /**
     * Checks if the date is valid depending on the year and month provided.
     */
    private isValidDate(year: number, month: number, date: number): boolean {
        if (date > 0 && date <= getNumberOfDaysInTheMonth(year, month)) {
            return true;
        }
        return false;
    }

    /**
     * Validates the parameters provided and returns the date.
     * If the parameters are not
     * valid then return null.
     * NOTE: (Month here is 1 based since the user has provided that as an input)
     */
    private validateAndGetDate(year: string, month: string, date: string): Date {
        // HELP ME!!!!
        // I don't know whats wrong with the TS compiler. It throws an error if I write
        // the below if statement. The error is:
        // Operator '!==' cannot be applied to types '2' and '4'
        // More info here: https://github.com/Microsoft/TypeScript/issues/12794#issuecomment-270342936
        /*
        if (year.length !== 2 || year.length !== 4) {
            return null;
        }
        */

        // Instead I have to write the logic like this x-(
        let y: number = +year;
        const m: number = +month - 1;  // month is 0 based
        const d: number = +date;
        if (!this.isValidMonth(m) || !this.isValidDate(y, m, d)) {
            return null;
        }
        if (year.length === 2) {
            y = parseToFourDigitYear(y);
            if (y === -1) {
                return null;
            }
            return new Date(y, m, d);
        } else if (year.length === 4) {
            return new Date(y, m, d);
        }
        return null;
    }

    /**
     * Checks if the input provided by the user is valid.
     */
    private isValidInput(date: string): Date {
        if (!date) {
            return null;
        }
        const separator: string = this.detectSeparator(date);
        if (!separator) {
            return null;
        }
        const dateParts: string[] = date.split(separator);
        if (dateParts.length !== 3) {
            return null;
        }
        if (!this.areDatePartsNumbers(dateParts)) {
            return null;
        }
        const firstPart: string = dateParts[0];
        const secondPart: string = dateParts[1];
        const thirdPart: string = dateParts[2];
        if (this.localeDisplayFormat === LITTLE_ENDIAN) {
            // secondPart is month && firstPart is date
            return this.validateAndGetDate(thirdPart, secondPart, firstPart);
        } else if (this.localeDisplayFormat === MIDDLE_ENDIAN) {
            // firstPart is month && secondPart is date
            return this.validateAndGetDate(thirdPart, firstPart, secondPart);
        } else {
            // secondPart is month && thirdPart is date
            return this.validateAndGetDate(firstPart, secondPart, thirdPart);
        }
    }

    private _dateStrUpdated: Subject<string> = new Subject<string>();

    /**
     * Observable to let the subscribers know that the date has been updated.
     */
    get dateStrUpdated(): Observable<string> {
        return this._dateStrUpdated.asObservable();
    }

    private _dateUpdated: Subject<Date> = new Subject<Date>();

    get dateUpdated(): Observable<Date> {
        return this._dateUpdated.asObservable();
    }

    /**
     * Function to update the date and emit it to the dateChanged subscribers.
     */
    updateDate(date: Date) {
        this.inputDate = this.toLocaleDisplayFormatString(date);
        this._dateStrUpdated.next(this.inputDate);
    }
}