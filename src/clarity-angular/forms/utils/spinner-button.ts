import {Component, Input} from "@angular/core";

@Component({
    selector: "clr-spinner-button",
    template: `
        <button (click)="increment()">
            <clr-icon shape="caret" class="is-highlight"></clr-icon>
        </button>
        <span class="clr-spinner-value">
            {{spinValue}}
        </span>
        <button (click)="decrement()">
            <clr-icon shape="caret" dir="down" class="is-highlight"></clr-icon>
        </button>
    `
})
export class SpinnerButton {

    @Input("clrSpinValue") spinValue: number = 0;

    @Input("clrMin") min: number;
    @Input("clrMax") max: number;
    @Input("clrRotate") rotate: boolean = false;

    increment(): void {
        if ((!!this.max || this.max === 0) && this.spinValue === this.max) {
            if (this.rotate && (!!this.min || this.min === 0)) {
                this.spinValue = this.min;
                return;
            }
            return;
        }
        this.spinValue++;
    }

    decrement() {
        if ((!!this.min || this.min === 0) && this.spinValue === this.min) {
            if (this.rotate && (!!this.max || this.max === 0)) {
                this.spinValue = this.max;
                return;
            }
            return;
        }
        this.spinValue--;
    }
}
