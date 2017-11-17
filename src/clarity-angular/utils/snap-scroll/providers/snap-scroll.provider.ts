/*
 * Copyright (c) 2017 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */
import {ElementRef, Injectable} from "@angular/core";
import {Subject} from "rxjs/Subject";
import {Observable} from "rxjs/Observable";

@Injectable()
export class SnapScrollService {

    private _wheelDownChange: Subject<void> = new Subject();
    private _wheelUpChange: Subject<void> = new Subject();

    get wheelDownChange(): Observable<void> {
        return this._wheelDownChange.asObservable();
    }

    get wheelUpChange(): Observable<void> {
        return this._wheelUpChange.asObservable();
    }

    processEvent(event: WheelEvent): void {
        const wheelDelta: number = event.wheelDelta;
        const deltaY: number = event.deltaY;
        if (wheelDelta) {
            this.processWheelDelta(wheelDelta);
        } else if (deltaY) {
            this.processDeltaY(deltaY);
        }
    }

    private processWheelDelta(wheelDelta: number): void {
        //All browsers except FF
        (wheelDelta > 0) ? (this._wheelUpChange.next()) : (this._wheelDownChange.next());
    }

    private processDeltaY(deltaY: number): void {
        //Firefox. FF says deltaY < 0 is wheel up
        (deltaY < 0) ? (this._wheelUpChange.next()) : (this._wheelDownChange.next());
    }

    scrollUp(elRef: ElementRef): void {
    }

    scrollDown(elRef: ElementRef): void {
        /*
        const scrollTop: number = elRef.nativeElement.scrollTop;
        const children: HTMLElement[] = Array.from(elRef.nativeElement.children);
        let sum = 0;
        let index = 0;
        for (const child of children) {
            sum = sum + child.clientHeight;
            index++;
            if (sum > scrollTop) {
                break;
            }
        }
        children[index - 1].scrollIntoView();*/
    }
}
