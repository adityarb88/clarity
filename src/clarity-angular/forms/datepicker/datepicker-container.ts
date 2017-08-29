import {Component} from "@angular/core";
import {IfOpenService} from "../../utils/conditional/if-open.service";

@Component({
    selector: "clr-datepicker-container",
    template: `
        <ng-content></ng-content>
        <clr-datepicker-content></clr-datepicker-content>
        <!--clr-datepicker-content *clrIfOpen></clr-datepicker-content-->
    `,
    providers: [IfOpenService]
})
export class DatepickerContainer {
    constructor(public ifOpenService: IfOpenService) {
    }
}
