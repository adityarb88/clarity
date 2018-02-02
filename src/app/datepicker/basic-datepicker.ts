/*
 * Copyright (c) 2016-2018 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */
import {Component, LOCALE_ID} from "@angular/core";

@Component({
    selector: "clr-basic-datepicker-demo",
    // Note the .css extension here, not .scss. That's the best we can have at the moment.
    styleUrls: ["./datepicker.demo.scss"],
    templateUrl: "./basic-datepicker.html",
    providers: [{provide: LOCALE_ID, useValue: "en"}],
    // providers: [{provide: LOCALE_ID, useValue: "ar-AE"}]
    // providers: [{provide: LOCALE_ID, useValue: "hi"}]
    // providers: [{provide: LOCALE_ID, useValue: "ak"}]
    // providers: [{provide: LOCALE_ID, useValue: "fr"}]
    // providers: [{provide: LOCALE_ID, useValue: "ru-UA"}]
    // providers: [{provide: LOCALE_ID, useValue: "de"}]
    // Do not remove the above comments. They are present to make sure that we can test different locales easily.
})
export class BasicDatepickerDemo {
    dateStr: string;
    jsDate1: Date = new Date();
    jsDate2: Date = new Date();

    model: string = "";

    datepickerChange(date: Date) {
        console.log("Datepicker Output Changed", date);
        if (date) {
            this.dateStr = date.toLocaleDateString();
        } else {
            this.dateStr = "";
        }
    }

    dateContainerChange(date: Date) {
        console.log("Datepicker Container Output Changed", date);
        this.jsDate1 = date;
    }
}
