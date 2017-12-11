/*
 * Copyright (c) 2016-2017 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */
import {Inject, Injectable, LOCALE_ID} from "@angular/core";
import {FormatWidth, getLocaleDateFormat} from "@angular/common";

//This is the en-001 short locale date format. Setting as default.
const DEFAULT_LOCALE_FORMAT: string = "dd/MM/y";
const SEPARATORS: string[] = ["/", "-"];
const LITTLE_ENDIAN_FORMAT = /d+.m+.y+/;
const MIDDLE_ENDIAN_FORMAT = /m+.d+.y+/;
//const BIG_ENDIAN_FORMAT = /y+.m+.d+/;

@Injectable()
export class DateInputService {
    public localeDateFormat: string = DEFAULT_LOCALE_FORMAT;
    private localeDisplayFormat: string = "yyyy/mm/dd";

    constructor(@Inject(LOCALE_ID) public locale: string) {
        //this.locale = "fr-BE";
        this.localeDateFormat = getLocaleDateFormat(this.locale, FormatWidth.Short);
        console.log(this.localeDateFormat);
        this.processLocaleFormat(this.localeDateFormat);
    }

    processLocaleFormat(format: string): void {
        format = format.toLocaleLowerCase();
        if (LITTLE_ENDIAN_FORMAT.test(format)) {
            this.localeDisplayFormat = "dd/mm/yyyy";
        } else if (MIDDLE_ENDIAN_FORMAT.test(format)) {
            this.localeDisplayFormat = "mm/dd/yyyy";
        } else {
            //BIG-ENDIAN FORMAT
            this.localeDisplayFormat = "yyyy/mm/dd";
        }
        console.log(this.localeDisplayFormat);
    }
}
