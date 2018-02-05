/*
 * Copyright (c) 2016-2018 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */

import {DatepickerEnabledService} from "./datepicker-enabled.service";
import {DATEPICKER_ENABLE_BREAKPOINT} from "../../../utils/breakpoints/breakpoints";

export default function () {
    xdescribe("Datepicker Enabled Service", () => {
        let datepickerEnabledService: DatepickerEnabledService;
        const realUserAgent: string = window.navigator.userAgent;
        const readInnerWidth: number = window.innerWidth;

        function overrideUserAgent(userAgent: string): void {
            const getter: string = "__defineGetter__";
            window.navigator[getter]('userAgent', function(){
                return userAgent;
            });
        }

        function resetUserAgent(): void {
            const getter: string = "__defineGetter__";
            window.navigator[getter]('userAgent', function(){
                return realUserAgent;
            });
        }

        beforeEach(() => {
            datepickerEnabledService = new DatepickerEnabledService();
        });

        it("isEnabled returns false if breakpoint and userAgent conditions do not match", () => {
            //expect(datepickerEnabledService.isEnabled).toBe(true);
            //overrideUserAgent("Mobile");
        });

        it("", () => {
        });
    });
}
