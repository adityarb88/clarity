import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {ClrHostWrappingModule} from "../../utils/host-wrapping/host-wrapping.module";
import {Datepicker} from "./datepicker";
import {DatepickerContainer} from "./datepicker-container";
import {ClrConditionalModule} from "../../utils/conditional/conditional.module";
import {DatepickerContent} from "./datepicker-content";
import {MonthPicker} from "./month-picker";

@NgModule({
    imports: [CommonModule, ClrHostWrappingModule, ClrConditionalModule],
    declarations: [Datepicker, DatepickerContainer, DatepickerContent, MonthPicker],
    exports: [Datepicker, DatepickerContainer, DatepickerContent, MonthPicker],
    entryComponents: [DatepickerContainer]
})
export class ClrDatepickerModule {}
