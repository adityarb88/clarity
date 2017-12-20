/*
 * Copyright (c) 2016-2017 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */
import {Inject, Injectable, LOCALE_ID} from "@angular/core";
import {FormatWidth, getLocaleDateFormat} from "@angular/common";
import {
    BIG_ENDIAN,
    DEFAULT_LOCALE_FORMAT, InputDateDisplayFormat, LITTLE_ENDIAN, LITTLE_ENDIAN_REGEX, MIDDLE_ENDIAN,
    MIDDLE_ENDIAN_REGEX,
    SEPARATORS
} from "../utils/constants";
import {getNumberOfDaysInTheMonth} from "../utils/date-utils";

@Injectable()
export class DateInputService {
    public cldrLocaleDateFormat: string = DEFAULT_LOCALE_FORMAT;

    private localeDisplayFormat: InputDateDisplayFormat = BIG_ENDIAN;

    get placeholderText(): string {
        return this.localeDisplayFormat.format;
    }

    public inputDate: string;

    constructor(@Inject(LOCALE_ID) public locale: string) {
        //this.locale = "fr-BE";
        this.cldrLocaleDateFormat = getLocaleDateFormat(this.locale, FormatWidth.Short);
        console.log(this.cldrLocaleDateFormat);
        this.processLocaleFormat(this.cldrLocaleDateFormat);
    }

    /**
     * Process the locale format provided by CLDR to order the basic date components.
     * The order of the date parts results in either of these 3 formats:
     * MIDDLE_ENDIAN, LITTLE_ENDIAN, or BIG_ENDIAN
     * More info here: https://en.wikipedia.org/wiki/Date_format_by_country
     * @param {string} format
     */
    processLocaleFormat(format: string): void {
        format = format.toLocaleLowerCase();
        if (LITTLE_ENDIAN_REGEX.test(format)) {
            this.localeDisplayFormat = LITTLE_ENDIAN;
        } else if (MIDDLE_ENDIAN_REGEX.test(format)) {
            this.localeDisplayFormat = MIDDLE_ENDIAN;
        } else {
            //everything else is set to BIG-ENDIAN FORMAT
            this.localeDisplayFormat = BIG_ENDIAN;
        }
        console.log(this.localeDisplayFormat);
        /*
        console.log(this.isValidInput("02/29/2017"));
        console.log(this.isValidInput("02/28/2017"));
        console.log(this.isValidInput("03/30/2017"));
        console.log(this.isValidInput("03/31/2017"));
        console.log(this.isValidInput("03/32/2017"));
        console.log(this.isValidInput("04/1/2017"));
        console.log(this.isValidInput("04/30/2017"));
        console.log(this.isValidInput("04/31/2017"));
        */
    }

    private detectSeparator(date: string): string {
        let isSeparatorPresent: boolean = false;
        let separatorUsed: string;
        for (const separator of SEPARATORS) {
            if (date.indexOf(separator) > -1) {
                isSeparatorPresent = true;
                separatorUsed = separator;
                break;
            }
        }
        if (isSeparatorPresent) {
            return separatorUsed;
        }
        return null;
    }

    /**
     * Checks if the input provided by the user is valid.
     * @param {string} date
     * @returns {boolean}
     */
    isValidInput(date: string): Date {
        const separator: string = this.detectSeparator(date);
        if (separator) {
            const dateParts: string[] = date.split(separator);
            if (dateParts.length === 3 && this.areDatePartsNumbers(dateParts)) {
                let firstPart: number = +dateParts[0];
                let secondPart: number = +dateParts[1];
                const thirdPart: number = +dateParts[2];
                if (this.localeDisplayFormat === LITTLE_ENDIAN) {
                    secondPart--; //Convert month to 0 based.
                    if (this.isValidMonth(secondPart) && this.isValidDate(thirdPart, secondPart, firstPart)) {
                        return new Date(thirdPart, secondPart, firstPart);
                    }
                } else if (this.localeDisplayFormat === MIDDLE_ENDIAN) {
                    firstPart--; //Convert month to 0 based.
                    if (this.isValidMonth(firstPart) && this.isValidDate(thirdPart, firstPart, secondPart)) {
                        return new Date(thirdPart, firstPart, secondPart);
                    }
                } else {
                    secondPart--; //Convert month to 0 based.
                    if (this.isValidMonth(secondPart) && this.isValidDate(firstPart, secondPart, thirdPart)) {
                        return new Date(firstPart, secondPart, thirdPart);
                    }
                }
            }
        }
        return null;
    }

    /**
     * Breaks the date input provided by the user using the allowed separators and checks if the parts
     * are numbers.
     * @param {string[]} dateParts
     * @returns {boolean}
     */
    private areDatePartsNumbers(dateParts: string[]): boolean {
        for (const part of dateParts) {
            if (this.isNonNegativeNumber(part)) {
                return true;
            }
        }
        return false;
    }

    /**
     * Checks if the month entered by the user is valid or not.
     * Note: Month is 0 based.
     * @param {number} month
     * @returns {boolean}
     */
    isValidMonth(month: number): boolean {
        if (month > -1 && month < 12) {
            return true;
        }
        return false;
    }

    /**
     * Checks if the date is valid depending on the year and month provided.
     * @param {number} year
     * @param {number} month
     * @param {number} date
     * @returns {boolean}
     */
    isValidDate(year: number, month: number, date: number): boolean {
        if (date > 0 && date <= getNumberOfDaysInTheMonth(year, month)) {
            return true;
        }
        return false;
    }

    /**
     * Checks if the string is a non negative number.
     * @param {string} num
     * @returns {boolean}
     */
    isNonNegativeNumber(num: string): boolean {
        return /^\+?(0|[1-9]\d*)$/.test(num);
    }
}
