/*
 * Copyright (c) 2016-2018 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */

import {registerLocaleData} from "@angular/common";
import localeAk from "@angular/common/locales/ak";
import {Subscription} from "rxjs/Subscription";

import {assertEqualDates} from "../utils/test-utils";

import {DateIOService} from "./date-io.service";
import {LocaleHelperService} from "./locale-helper.service";

registerLocaleData(localeAk);

export default function() {
    describe("Date IO Service", () => {
        let dateIOService: DateIOService;
        let localeHelperService: LocaleHelperService;

        describe("Locale Formatting", function() {
            it("updates the cldrLocaleDateFormat based on the locale helper service", () => {
                const localeHelperServ: LocaleHelperService = new LocaleHelperService("en-US");
                const dateIOServ: DateIOService = new DateIOService(localeHelperServ);
                expect(dateIOServ.cldrLocaleDateFormat).toBe("M/d/yy");

                const localeHelperServ1: LocaleHelperService = new LocaleHelperService("ak");
                const dateIOServ1: DateIOService = new DateIOService(localeHelperServ1);

                expect(dateIOServ1.cldrLocaleDateFormat).toBe("yy/MM/dd");
            });

            it("supports a method to convert a Date object to date string based on the locale", () => {
                const localeHelperServ: LocaleHelperService = new LocaleHelperService("en-US");
                const dateIOServ: DateIOService = new DateIOService(localeHelperServ);

                expect(dateIOServ.toLocaleDisplayFormatString(new Date(2015, 1, 1))).toBe("02/01/2015");

                const localeHelperServ1: LocaleHelperService = new LocaleHelperService("ak");
                const dateIOServ1: DateIOService = new DateIOService(localeHelperServ1);

                expect(dateIOServ1.toLocaleDisplayFormatString(new Date(2015, 1, 1))).toBe("2015/02/01");

                // null dates return an empty string
                expect(dateIOServ.toLocaleDisplayFormatString(null)).toBe("");
            });
        });

        describe("Date Processing", () => {
            beforeEach(() => {
                localeHelperService = new LocaleHelperService("en-US");
                dateIOService = new DateIOService(localeHelperService);
            });

            it("sets the right input date str when a valid date is entered", () => {
                dateIOService.inputDate = "01/02/2015";
                expect(dateIOService.inputDate).toBe("01/02/2015");
            });

            it("supports a date property which is populated according to the dateInput", () => {
                expect(dateIOService.date).toBeUndefined();

                dateIOService.inputDate = "01/02/201";
                expect(dateIOService.date).toBeUndefined();

                dateIOService.inputDate = "01/02/2015";
                expect(dateIOService.date).not.toBeUndefined();
                expect(dateIOService.date).not.toBeNull();
                expect(assertEqualDates(dateIOService.date, new Date(2015, 0, 2))).toBe(true);

                dateIOService.inputDate = "01/02/201";
                expect(dateIOService.date).toBeNull();
            });
        });

        describe("Subscriptions", () => {
            let sub: Subscription;

            beforeEach(() => {
                localeHelperService = new LocaleHelperService("en-US");
                dateIOService = new DateIOService(localeHelperService);
            });

            afterEach(() => {
               if (sub) {
                   sub.unsubscribe();
               }
            });

            it("emits a date object when the dateInput has changed", () => {
                let count: number = 0;
                sub = dateIOService.dateUpdated.subscribe(() => {
                    count++;
                });
                expect(count).toBe(0);

                // Invalid Date to Invalid Date doesn't emit anything
                dateIOService.inputDate = "01/02/201";
                expect(count).toBe(0);

                // Valid Date
                dateIOService.inputDate = "01/02/2015";
                expect(count).toBe(1);

                // Valid Date to Invalid Date
                dateIOService.inputDate = "01/02/201";
                expect(count).toBe(2);

                // Invalid Date to Valid Date
                dateIOService.inputDate = "01/02/20";
                expect(count).toBe(3);
            });

            it("emits a date string when the Date is updated", () => {
                let outputStr: string;
                sub = dateIOService.dateStrUpdated.subscribe((dateStr) => {
                    outputStr = dateStr;
                });

                expect(outputStr).toBeUndefined();
                dateIOService.updateDate(new Date(2015, 1, 1));
                expect(outputStr).not.toBeUndefined();
                expect(outputStr.length).not.toBe(0);
                expect(outputStr).toBe("02/01/2015");
            });
        });
    });
}
