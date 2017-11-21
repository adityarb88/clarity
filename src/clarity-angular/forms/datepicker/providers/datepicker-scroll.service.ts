/*
 * Copyright (c) 2016-2017 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */

import {ElementRef, Injectable} from "@angular/core";

const WAIT_TIME: number = 300; //ms
const CHILD_HEIGHT: number = 216; //Hardcoded. Should be updated if the height changes.
const STEP: number = 1; //Amount by which scrollTop should increment/decrement
const MIN_PROGRESS = 5;

@Injectable()
export class DatepickerScrollService {

    private childToScrollTop: number;
    private timeoutId: number;
    private scrollInterval: number;
    private container: HTMLElement;

    processScrollEvent(elRef: ElementRef): void {
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
            }, WAIT_TIME);
        }
    }

    /*
    animateContainer(): void {
        if (this.scrollInterval) {
            clearInterval(this.scrollInterval);
        }
        //TODO: Find something instead of setInterval
        this.scrollInterval = setInterval(() => {
            //console.log("Animating: ", this.container);
            if (!this.container) {
                //console.log("Clearing: ", this.scrollInterval);
                clearInterval(this.scrollInterval);
            } else {
                const diff = this.container.scrollTop - this.childToScrollTop;
                if (diff >= -1 * STEP && diff <= STEP) {
                    this.container.scrollTop = this.childToScrollTop;
                    clearInterval(this.scrollInterval);
                }
                if (this.container.scrollTop > this.childToScrollTop) {
                    this.container.scrollTop = this.container.scrollTop - STEP;
                } else if (this.container.scrollTop < this.childToScrollTop) {
                    this.container.scrollTop = this.container.scrollTop + STEP;
                }
            }
        }, 10);
    }
    */

    animateContainer(): void {
        if (this.container) {
            const scrollTop: number = this.container.scrollTop;
            const progress: number
                = Math.floor(
                    this.childToScrollTop > scrollTop
                        ? (this.childToScrollTop - scrollTop)
                        : (scrollTop - this.childToScrollTop)
                );
            console.log("Progress", progress);
            if (!(progress >= MIN_PROGRESS)) {
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
