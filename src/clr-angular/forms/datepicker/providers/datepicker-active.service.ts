/*
 * Copyright (c) 2016-2017 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */

import {Injectable} from "@angular/core";

//iPad mini screen width
//http://stephen.io/mediaqueries/#iPadMini
const DATEPICKER_ACTIVE_BREAKPOINT: number = 768;

@Injectable()
export class DatepickerActiveService {
    constructor() {
    }

    get active(): boolean {
        //https://developer.mozilla.org/en-US/docs/Web/HTTP/Browser_detection_using_the_user_agent
        if (window) {
            if (window.innerWidth < DATEPICKER_ACTIVE_BREAKPOINT && /Mobi/.test(navigator.userAgent)) {
                return false;
            }
        }
        return true;
    }
}
