/*
 * Copyright (c) 2016-2018 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */
import {Component} from "@angular/core";

@Component({
    selector: "clr-datepicker-in-forn-demo",
    // Note the .css extension here, not .scss. That's the best we can have at the moment.
    styleUrls: ["./datepicker.demo.scss"],
    templateUrl: "./datepicker-in-forms.html"
})
export class DatepickerInFormDemo {
    buttonClick(): void {
        console.log("Button Clicked");
    }

    isSubmitted: boolean = false;

    onSubmit(): void {
        console.log("Submitting");
        this.isSubmitted = true;
    }

    date: string = "";

    name: string = "";

    reset(): void {
        this.isSubmitted = false;
        this.date = "";
        this.name = "";
    }

    dateChanged(date: Date): void {
        console.log("Valid Date Entered", date);
    }
}
