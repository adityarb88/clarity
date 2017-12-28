/*
 * Copyright (c) 2016-2017 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */

import {ElementRef, Injectable} from "@angular/core";
import {VirtualForOf} from "../../../utils/virtual-scroll/virtual-for-of";
import {Subject} from "rxjs/Subject";
import {Observable} from "rxjs/Observable";

const WAIT_TIME: number = 100; //ms
const CHILD_HEIGHT: number = 216; //Hardcoded. Should be updated if the height changes.
const STEP: number = 5; //Amount by which scrollTop should increment/decrement
const MIN_PROGRESS = 10;

@Injectable()
export class DatepickerScrollService {

    private childToScrollTop: number;
    private timeoutId: number;
    private container: HTMLElement;

    private _scrollMonth: Subject<number> = new Subject<number>();
    private _scrollYear: Subject<number> = new Subject<number>();

    get scrollMonth(): Observable<number> {
        return this._scrollMonth.asObservable();
    }

    get scrollYear(): Observable<number> {
        return this._scrollYear.asObservable();
    }

    processScrollEvent(elRef: ElementRef, virtualFor: VirtualForOf<any>): void {
        this.container = elRef.nativeElement;
        if (this.container) {
            if (this.timeoutId) {
                clearTimeout(this.timeoutId);
            }
            this.timeoutId = setTimeout(() => {
                const scrollTop: number = this.container.scrollTop;
                const mod: number = scrollTop % CHILD_HEIGHT;
                const q: number = scrollTop / CHILD_HEIGHT;
                if (mod !== 0) {
                    this.childToScrollTop = Math.round(q) * CHILD_HEIGHT;
                    this.animateContainer();
                }
                const model = virtualFor.sortedViewModel;
                if (model.length === 3) {
                    const final: {month, year, dateRows} = model[1];
                    const finalMonth: number = final.month;
                    const finalYear: number = final.year;
                    this._scrollMonth.next(finalMonth);
                    this._scrollYear.next(finalYear);
                }
            }, WAIT_TIME);
        }
    }

    animateContainer(): void {
        if (this.container) {
            const scrollTop: number = this.container.scrollTop;
            const progress: number
                = Math.floor(
                    this.childToScrollTop > scrollTop
                        ? (this.childToScrollTop - scrollTop)
                        : (scrollTop - this.childToScrollTop)
                );
            if ((progress >= MIN_PROGRESS)) {
                if (this.container.scrollTop < this.childToScrollTop) {
                    this.container.scrollTop = this.container.scrollTop + STEP;
                } else {
                    this.container.scrollTop = this.container.scrollTop - STEP;
                }
                requestAnimationFrame(() => {
                    this.animateContainer();
                });
            } else {
                this.container.scrollTop = this.childToScrollTop;
            }
        }
    }
}
