/*
 * Copyright (c) 2016-2018 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */

import {inject, TestBed} from "@angular/core/testing";
import {DOCUMENT} from "@angular/common";
import {DatepickerEnabledService} from "./datepicker-enabled.service";
import {DATEPICKER_ENABLE_BREAKPOINT} from "../../../utils/breakpoints/breakpoints";

export default function () {
    describe("Datepicker Enabled Service", () => {
        function configureTestingModule(userAgent: string, innerWidth: number) {
            TestBed.configureTestingModule({
                providers: [
                    {
                        provide: DOCUMENT,
                        useValue: {
                            defaultView: {
                                navigator: {
                                    userAgent: userAgent
                                },
                                innerWidth: innerWidth
                            }
                        }
                    },
                    DatepickerEnabledService
                ]
            });
        }

        describe("Disabled", () => {
            beforeEach(() => {
                configureTestingModule("Mobi", DATEPICKER_ENABLE_BREAKPOINT - 10);
            });


            it("sets isEnabled to false if the user agent has 'Mobi' and inner width is less than DATEPICKER_ENABLE_BREAKPOINT",
                inject([DatepickerEnabledService], (service: DatepickerEnabledService) => {
                    expect(service.isEnabled).toBe(false);
                }));
        });

        describe("Enabled - Part 1", () => {
            beforeEach(() => {
                configureTestingModule("Test", DATEPICKER_ENABLE_BREAKPOINT - 10);
            });


            it("sets isEnabled to true if the user agent does not have 'Mobi' and inner width is less than DATEPICKER_ENABLE_BREAKPOINT",
                inject([DatepickerEnabledService], (service: DatepickerEnabledService) => {
                    expect(service.isEnabled).toBe(true);
                }));
        });

        describe("Enabled - Part 2", () => {
            beforeEach(() => {
                configureTestingModule("Mobi", DATEPICKER_ENABLE_BREAKPOINT + 10);
            });


            it("sets isEnabled to true if the user agent has 'Mobi' and inner width is more than DATEPICKER_ENABLE_BREAKPOINT",
                inject([DatepickerEnabledService], (service: DatepickerEnabledService) => {
                    expect(service.isEnabled).toBe(true);
                }));
        });

        describe("Enabled - Part 3", () => {
            beforeEach(() => {
                configureTestingModule("Test", DATEPICKER_ENABLE_BREAKPOINT + 10);
            });


            it("sets isEnabled to true if the user agent does not have 'Mobi' and inner width is more than DATEPICKER_ENABLE_BREAKPOINT",
                inject([DatepickerEnabledService], (service: DatepickerEnabledService) => {
                    expect(service.isEnabled).toBe(true);
                }));
        });
    });
}

