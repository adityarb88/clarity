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

@Injectable()
export class DateInputService {
    public cldrLocaleDateFormat: string = DEFAULT_LOCALE_FORMAT;

    private localeDisplayFormat: InputDateDisplayFormat = BIG_ENDIAN;

    public inputDate: string;

    constructor(@Inject(LOCALE_ID) public locale: string) {
        //this.locale = "fr-BE";
        this.cldrLocaleDateFormat = getLocaleDateFormat(this.locale, FormatWidth.Short);
        //console.log(this.cldrLocaleDateFormat);
        this.processLocaleFormat(this.cldrLocaleDateFormat);
    }

    /**
     * Process the locale format provided by CLDR to order the basic date components.
     * The order results in either of these 3 formats: MIDDLE_ENDIAN, LITTLE_ENDIAN, or BIG_ENDIAN
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

    isValidInput(date: string): boolean {
        const separator: string = this.detectSeparator(date);
        if (separator) {
            const dateParts: string[] = date.split(separator);
            if (this.localeDisplayFormat === LITTLE_ENDIAN) {

            } else if (this.localeDisplayFormat === MIDDLE_ENDIAN) {

            } else {

            }
        }
        return false;
    }

    isValidMonth(month: number): boolean {
        if (month > 0 && month < 13) {
            return true;
        }
        return false;
    }

    isValidDate(year: number, month: number, date: number): boolean {

        return false;
    }
}
