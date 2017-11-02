/*
 * Copyright (c) 2016-2017 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */

import {offsetHeight, ratioBottomReady, ratioTopReady} from "./dom-helpers";

/**
 * I can't believe we still haven't standardized this across the project
 */
interface TestContext {
    viewport?: HTMLElement;
    child?: HTMLElement;
}

export default function(): void {
    describe("DOM helpers", function() {
        describe("ratioBottomReady()", function() {
            beforeEach(function(this: TestContext) {
                this.viewport = createDiv(document.body, {height: "100px", overflow: "scroll"});
                this.child = createDiv(this.viewport, {height: "300px"}, "Hello");
            });
            afterEach(function(this: TestContext) {
                document.body.removeChild(this.viewport);
            });

            it("computes the ratio of loaded elements under the viewport compared to viewport height",
               function(this: TestContext) {
                   expect(ratioBottomReady(this.viewport)).toBe(2);
               });

            it("accepts an offset argument", function(this: TestContext) {
                expect(ratioBottomReady(this.viewport, 100)).toBe(3);
                expect(ratioBottomReady(this.viewport, -100)).toBe(1);
            });

            it("takes scroll position into account", function(this: TestContext) {
                this.viewport.scrollTop = 100;
                expect(ratioBottomReady(this.viewport)).toBe(1);
            });

            it("ignores borders for the viewport", function(this: TestContext) {
                this.viewport.style.boxSizing = "content-box";
                this.viewport.style.border = "50px solid black";
                expect(ratioBottomReady(this.viewport)).toBe(2);
            });

            it("takes padding of the viewport into account", function(this: TestContext) {
                this.viewport.style.padding = "50px";
                expect(ratioBottomReady(this.viewport)).toBe(3);
            });

            it("doesn't care about the children's specific dimensions", function(this: TestContext) {
                this.child.style.border = "5px solid black";
                this.child.style.padding = "20px";
                expect(ratioBottomReady(this.viewport)).toBe(2);
            });
        });

        describe("ratioTopReady()", function() {
            beforeEach(function(this: TestContext) {
                this.viewport = createDiv(document.body, {height: "100px", overflow: "scroll"});
                this.child = createDiv(this.viewport, {height: "300px"}, "Hello");
                this.viewport.scrollTop = 200;
            });
            afterEach(function(this: TestContext) {
                document.body.removeChild(this.viewport);
            });

            it("computes the ratio of loaded elements over the viewport compared to viewport height",
               function(this: TestContext) {
                   expect(ratioTopReady(this.viewport)).toBe(2);
               });

            it("accepts an offset argument", function(this: TestContext) {
                expect(ratioTopReady(this.viewport, 100)).toBe(3);
                expect(ratioTopReady(this.viewport, -100)).toBe(1);
            });

            it("takes scroll position into account", function(this: TestContext) {
                this.viewport.scrollTop = 100;
                expect(ratioTopReady(this.viewport)).toBe(1);
            });

            it("ignores borders for the viewport", function(this: TestContext) {
                this.viewport.style.boxSizing = "content-box";
                this.viewport.style.border = "50px solid black";
                expect(ratioTopReady(this.viewport)).toBe(2);
            });

            it("takes padding of the viewport into account", function(this: TestContext) {
                this.viewport.style.padding = "50px";
                this.viewport.scrollTop = 300;
                expect(ratioTopReady(this.viewport)).toBe(3);
            });

            it("doesn't care about the children's specific dimensions", function(this: TestContext) {
                this.child.style.border = "5px solid black";
                this.child.style.padding = "20px";
                expect(ratioTopReady(this.viewport)).toBe(2);
            });
        });

        describe("offsetHeight()", function() {
            it("computes the total height of a set of elements", function(this: TestContext) {
                const elements = [
                    createDiv(document.body, {height: "100px"}, "Hello"),
                    createDiv(document.body, {height: "300px", padding: "10px"}, "World"),
                    createDiv(document.body, {height: "200px", border: "5px solid black"}, "!")
                ];
                expect(offsetHeight(elements)).toBe(600);
                elements.forEach(el => document.body.removeChild(el));
            });
        });
    });
}

function createDiv(parent: HTMLElement, css: {[key in keyof CSSStyleDeclaration]?: CSSStyleDeclaration[key]},
                   text?: string) {
    const div = document.createElement("div");
    Object.assign(div.style, css);
    if (text) {
        div.appendChild(document.createTextNode(text));
    }
    parent.appendChild(div);
    return div;
}
