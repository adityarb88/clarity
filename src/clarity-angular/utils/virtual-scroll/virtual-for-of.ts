/*
 * Copyright (c) 2016-2017 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */
import {
    AfterViewInit,
    Directive,
    EmbeddedViewRef,
    Input,
    Renderer2,
    TemplateRef,
    ViewContainerRef
} from "@angular/core";

import {
    appendAndPreserveScroll,
    offsetHeight,
    prependAndPreserveScroll,
    ratioBottomReady,
    ratioTopReady
} from "./dom-helpers";
import {isNonNgIterable, NonNgIterable} from "./non-ng-iterable";

enum Side {
    START = -1,
    END = 1
}

@Directive({selector: "[clrVirtualForOf]"})
export class VirtualForOf<T> implements AfterViewInit {
    constructor(private viewContainer: ViewContainerRef, private template: TemplateRef<{$implicit: T}>,
                private renderer: Renderer2) {
        this.containerEl = <HTMLElement>renderer.parentNode(viewContainer.element.nativeElement);
    }

    private containerEl: HTMLElement;

    // Until we have a way to tell Angular not to iterate over the whole iterable as soon as it's passed as an input,
    // we can't accept an NgIterable here so we have this weird Array | NonNgIterable type.
    private _items: Array<T>|NonNgIterable<T>;
    @Input("clrVirtualForOf")
    set items(value: Array<T>|NonNgIterable<T>) {
        this._items = value;
        this.viewContainer.clear();
        this.start = -1;
        this.end = 0;
        this.fill();
    }

    private start = -1;
    private end = 0;

    /**
     * Removes the first/last item from the view
     * @param {boolean} side: indicates which item to remove, first or last
     */
    private remove(side: Side) {
        const index = side === Side.START ? 0 : this.viewContainer.length - 1;
        const removed = offsetHeight((<EmbeddedViewRef<{$implicit: T}>>this.viewContainer.get(index)).rootNodes);
        this.viewContainer.remove(index);
        if (side === Side.START) {
            this.start++;
        } else {
            this.end--;
        }
        return removed;
    }

    /**
     * Adds another item from the list to the view
     * @param {boolean} side: indicates whether to prepend or append
     * @returns {boolean}: returns true while there are more items, false when the iterator is done
     */
    private add(side: Side): boolean {
        const index = side === Side.START ? this.start : this.end;
        let added;
        if (isNonNgIterable(this._items)) {
            added = this._items.get(index);
        } else {
            added = this._items[index];
        }
        if (typeof added === "undefined") {
            return false;
        }
        if (side === Side.START) {
            this.start--;
        } else {
            this.end++;
        }
        this.viewContainer.createEmbeddedView(this.template, {$implicit: added}, side === Side.START ? 0 : undefined)
            .detectChanges();
        return true;
    }

    /**
     * Removes items that are too far from the viewport
     */
    private trim() {
        let alreadyRemoved = 0;
        while (ratioTopReady(this.containerEl, -alreadyRemoved) >= 2) {
            alreadyRemoved += this.remove(Side.START);
        }
        alreadyRemoved = 0;
        while (ratioBottomReady(this.containerEl, -alreadyRemoved) >= 2) {
            alreadyRemoved += this.remove(Side.END);
        }
    }

    /**
     * Adds item in and around the viewport
     */
    private fill() {
        // We load "one viewport" ahead at the bottom
        while (ratioBottomReady(this.containerEl) < 1) {
            if (!appendAndPreserveScroll(this.containerEl, () => this.add(Side.END))) {
                break;
            }
        }
        // We load "one viewport" ahead at the top
        while (ratioTopReady(this.containerEl) < 1) {
            if (!prependAndPreserveScroll(this.containerEl, () => this.add(Side.START))) {
                break;
            }
        }
    }

    scrollListener: any;

    ngAfterViewInit() {
        this.scrollListener = this.renderer.listen(this.containerEl, "scroll", (e: any) => {
            this.trim();
            this.fill();
        });
    }

    ngOnDestroy() {
        this.scrollListener();
    }
}
