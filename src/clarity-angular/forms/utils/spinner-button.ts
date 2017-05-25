import {Component, EventEmitter, HostListener, Input, Output} from "@angular/core";

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

    private _spinValue: number = 0;

    get spinValue(): number {
        return this._spinValue;
    }

    @Input("clrSpinValue")
    set spinValue(value: number) {
        if (value !== this._spinValue) {
            this._spinValue = value;
            this._spinValueChange.emit(value);
        }
    }

    @Output("clrSpinValueChange") _spinValueChange: EventEmitter<number> = new EventEmitter<number>(false);

    @Input("clrMin") private _min: number;
    @Input("clrMax") max: number;
    @Input("clrRotate") rotate: boolean = false;

    increment(): void {
        if ((!!this.max || this.max === 0) && this._spinValue === this.max) {
            if (this.rotate && (!!this._min || this._min === 0)) {
                this.spinValue = this._min;
                return;
            }
            return;
        }
        this.spinValue++;
    }

    decrement() {
        if ((!!this._min || this._min === 0) && this._spinValue === this._min) {
            if (this.rotate && (!!this.max || this.max === 0)) {
                this.spinValue = this.max;
                return;
            }
            return;
        }
        this.spinValue--;
    }

    @HostListener("mousewheel", ["$event"])
    onMouseScroll(ev: any) {
        if (ev.deltaY > 0) {
            this.decrement();
        } else if (ev.deltaY < 0) {
            this.increment();
        }
    }
}
