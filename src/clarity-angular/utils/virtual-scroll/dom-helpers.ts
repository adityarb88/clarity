/*
 * Copyright (c) 2016-2017 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */

/*
 * TODO: make this part of a global DOM adapter service at some point, merging it with the one from the Datagrid?
 */

export function ratioBottomReady(container: HTMLElement, offset: number = 0) {
    const result = (container.scrollHeight - container.scrollTop + offset) / container.clientHeight - 1;
    return result;
}

export function ratioTopReady(container: HTMLElement, offset: number = 0) {
    const result = (container.scrollTop + offset) / container.clientHeight;
    return result;
}

export function offsetHeight(nodes: HTMLElement[]) {
    return nodes.reduce((totalHeight: number, node: HTMLElement) => {
        return totalHeight + node.offsetHeight;
    }, 0);
}

export function prependAndPreserveScroll<T>(container: HTMLElement, operation: () => T): T {
    const previousHeight = container.scrollHeight;
    const previousScroll = container.scrollTop;
    const result = operation();
    if (container.scrollTop === previousScroll) {
        container.scrollTop += container.scrollHeight - previousHeight;
    }
    return result;
}

export function appendAndPreserveScroll<T>(container: HTMLElement, operation: () => T): T {
    //const previousScroll = container.scrollTop;
    const result = operation();
    //container.scrollTop = previousScroll;
    return result;
}
