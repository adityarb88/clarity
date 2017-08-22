import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {ClrHostWrappingModule} from "../../utils/host-wrapping/host-wrapping.module";
import {Datepicker} from "./datepicker";
import {DatepickerContainer} from "./datepicker-container";

@NgModule({
    imports: [CommonModule, ClrHostWrappingModule],
    declarations: [Datepicker, DatepickerContainer],
    exports: [Datepicker, DatepickerContainer],
    entryComponents: [DatepickerContainer]
})
export class ClrDatepickerModule {}
