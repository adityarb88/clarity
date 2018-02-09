/*
 * Copyright (c) 2016-2018 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */
import {Component} from "@angular/core";

@Component({
    selector: "clr-datepicker-in-template-driven-forms-demo",
    // Note the .css extension here, not .scss. That's the best we can have at the moment.
    styleUrls: ["./datepicker.demo.scss"],
    templateUrl: "./datepicker-in-template-driven-forms.html"
})
export class DatepickerInTemplateDrivenFormsDemo {
    buttonClick(): void {
        console.log("Initiate Form Submission");
    }

    isSubmitted: boolean = false;

    onSubmit(): void {
        this.isSubmitted = true;
        console.log("Form Submitted");
    }

    date1: string = "";
    date2: string = "";

    name: string = "";

    reset(): void {
        this.isSubmitted = false;
        this.date1 = "";
        this.date2 = "";
        this.name = "";
    }

    date1Changed(date: Date): void {
        console.log("Valid Date1 Entered", date);
    }

    date2Changed(date: Date): void {
        console.log("Valid Date2 Entered", date);
    }
}