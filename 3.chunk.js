webpackJsonp([3,8],{

/***/ 381:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_common__ = __webpack_require__(48);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_clarity_angular__ = __webpack_require__(161);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_clarity_angular___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_clarity_angular__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__utils_utils_module__ = __webpack_require__(162);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__get_started_component__ = __webpack_require__(653);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_router__ = __webpack_require__(47);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GetStartedModule", function() { return GetStartedModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






var route = [
    {
        path: "",
        component: __WEBPACK_IMPORTED_MODULE_4__get_started_component__["a" /* GetStartedComponent */],
        data: {
            bodyClass: "layout-get-started",
            browserTitle: "Get Started"
        }
    }
];
var GetStartedModule = (function () {
    function GetStartedModule() {
    }
    return GetStartedModule;
}());
GetStartedModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["NgModule"])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_4__get_started_component__["a" /* GetStartedComponent */],
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_0__angular_common__["CommonModule"],
            __WEBPACK_IMPORTED_MODULE_2_clarity_angular__["ClarityModule"].forChild(),
            __WEBPACK_IMPORTED_MODULE_3__utils_utils_module__["a" /* UtilsModule */],
            __WEBPACK_IMPORTED_MODULE_5__angular_router__["a" /* RouterModule */].forChild(route)
        ],
        providers: []
    })
], GetStartedModule);

//# sourceMappingURL=/Users/adityab/fork-website-clarity/src/get-started.module.js.map

/***/ }),

/***/ 653:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(7);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return GetStartedComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var NG_MODULE_EXAMPLE = "\n    import { NgModule } from '@angular/core';\n    import { BrowserModule } from '@angular/platform-browser';\n    import { ClarityModule } from 'clarity-angular';\n    import { AppComponent } from './app.component';\n    \n    @NgModule({\n        imports: [\n            BrowserModule,\n            ClarityModule.forRoot(),\n            ...\n         ],\n         declarations: [ AppComponent ],\n         bootstrap: [ AppComponent ]\n    })\n    export class AppModule {    }\n";
var GetStartedComponent = (function () {
    function GetStartedComponent() {
        this.ngModuleExample = NG_MODULE_EXAMPLE;
    }
    return GetStartedComponent;
}());
GetStartedComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'get-started',
        template: __webpack_require__(868),
        host: {
            "id": "main-container",
            "[class.content-container]": "true"
        }
    }),
    __metadata("design:paramtypes", [])
], GetStartedComponent);

//# sourceMappingURL=/Users/adityab/fork-website-clarity/src/get-started.component.js.map

/***/ }),

/***/ 868:
/***/ (function(module, exports) {

module.exports = "<main id=\"content-area\" class=\"content-area\" hash-listener #scrollable>\n\n    <h1 id=\"introduction\">Clarity Design System</h1>\n\n    <p>Project Clarity is an open source design system that brings together UX guidelines, an HTML/CSS framework, and\n        Angular components. Clarity is for both designers and developers.</p>\n\n    <p>Clarity’s designs stem from continuous exploration and research. These designs are built into our HTML/CSS\n        components, which can be used any web UI, regardless of the underlying JavaScript framework. Clarity also offers\n        a set of well-designed and implemented\n        data-bound components built on top of Angular, one of the most popular JavaScript frameworks in the\n        industry.</p>\n\n    <h2 id=\"howToUse\">How to Use Clarity</h2>\n\n    <p>We offer three approaches for utilizing Clarity: UX, UX and UI, and Angular.</p>\n\n    <h3 id=\"sketchTemplate\">Using the Clarity Sketch UI Template</h3>\n\n    <p>Jumpstart your project with the <a href=\"assets/images/sketchTemplates/Clarity-Template-0.9.0.sketch\"\n                                          target=\"_blank\">Clarity Sketch UI template</a>, a library of components\n        versioned alongside other products in Clarity’s ecosystem. To use with the template,\n        install the <a href=\"https://github.com/chrismsimpson/Metropolis\" target=\"_blank\">open-source Metropolis\n            font</a> by Chris M. Simpson. Clarity uses these font weights: light, regular, semibold, and medium.</p>\n\n    <h3 id=\"seedProjectClarity\">Starting With a Clarity Seed Project (Recommended)</h3>\n\n    <p>For a new project, the best approach is to clone the Clarity seed project and modify it to fit your needs. The\n        seed project is integrated with clarity-ui and clarity-angular, so you don’t need to install Clarity\n        separately.</p>\n\n    <p></p>\n    <ol class=\"list\">\n        <li>Clone the seed app:\n            <pre><code class=\"clr-code\">\n  git clone https://github.com/vmware/clarity-seed.git\n  </code></pre>\n        </li>\n        <li>Install the dependencies:\n            <pre><code class=\"clr-code\">\n  npm install\n  </code></pre>\n        </li>\n        <li>Run the seed app:\n            <pre><code class=\"clr-code\">\n  npm start\n  </code></pre>\n        </li>\n    </ol>\n\n    <h3 id=\"seedProjectAngular\">Using an Angular Seed Project</h3>\n\n    <p>You can build an Angular app, then install Clarity onto your project.</p>\n\n    <h4 id=\"step-1-build-an-angular-2-app\">Step 1: Build an Angular App</h4>\n    <p></p>\n    <ol class=\"list\">\n        <li>Look at the Angular documentation, starting with <a\n                href=\"https://angular.io/docs/ts/latest/quickstart.html\">the 5 Min Quickstart</a>.\n        </li>\n        <li>Save and modify the example structure and build, or use one of the Angular seeds:\n            <ul class=\"list\">\n                <li><a href=\"https://github.com/angular/angular-cli\">https://github.com/angular/angular-cli</a> (in\n                    Beta)\n                </li>\n                <li><a href=\"https://github.com/mgechev/angular2-seed\">https://github.com/mgechev/angular2-seed</a></li>\n                <li><a href=\"https://github.com/angular/angular2-seed\">https://github.com/angular/angular2-seed</a></li>\n                <li><a href=\"https://github.com/AngularClass/angular2-webpack-starter\">https://github.com/AngularClass/angular2-webpack-starter</a>\n                </li>\n            </ul>\n        </li>\n    </ol>\n\n    <h4 id=\"installing\">Step 2: Install Clarity</h4>\n\n    <p>Clarity is published as three separate packages on NPM:</p>\n\n    <p>\n        <a id=\"clarity_icons\"></a>\n    </p>\n    <ul class=\"list\">\n        <li><b>clarity-icons.</b> Contains the custom element icons.</li>\n        <li><b>clarity-ui.</b> Contains the static styles for building HTML components.</li>\n        <li><b>clarity-angular.</b> Contains the Angular components. This package depends on clarity-ui for styles.\n        </li>\n    </ul>\n\n    <h5 id=\"step-2a-install-clarity-icons\">Step 2a: Install Clarity Icons</h5>\n    <p></p>\n\n    <ol class=\"list\">\n        <li>Install the Clarity Icons package through npm:\n            <pre><code class=\"clr-code\">\n  npm install clarity-icons --save\n  </code></pre>\n        </li>\n        <li>Install the polyfill for Custom Elements:\n            <pre><code class=\"clr-code\">\n  npm install @webcomponents/custom-elements@1.0.0-alpha.3 --save\n  </code></pre>\n        </li>\n        <li>(Optional) If your application supports IE10, the polyfill requires the MutationObserver shim to work. If\n            your application does not support IE10, you can skip the following installation:\n            <pre><code class=\"clr-code\">\n  npm install mutationobserver-shim@0.3.2 --save\n  </code></pre>\n        </li>\n        <li>\n            Include clarity-icons.min.css and clarity-icons.min.js in your HTML. Because custom-elements.min.js is\n            dependent on the Custom Elements polyfill, you must include it before clarity-icons.min.js. If your app\n            supports IE10, include mutationobserver.min.js\n            before the polyfill:\n\n            <pre><code clr-code-highlight=\"language-html\">\n  &lt;link rel=\"stylesheet\" href=\"path/to/node_modules/clarity-icons/clarity-icons.min.css\"&gt;\n  &lt;script src=\"path/to/node_modules/mutationobserver-shim/dist/mutationobserver.min.js\"&gt;&lt;/script&gt;\n  &lt;script src=\"path/to/node_modules/@webcomponents/custom-elements/custom-elements.min.js\"&gt;&lt;/script&gt;\n  &lt;script src=\"path/to/node_modules/clarity-icons/clarity-icons.min.js\"&gt;&lt;/script&gt;\n  </code></pre>\n            If your site is built with <a href=\"https://github.com/angular/angular-cli\">angular-cli</a> you can achieve\n            the above by adding the files to the styles array and scripts array in <code class=\"clr-code\">angular-cli.json</code>:\n            <pre><code clr-code-highlight=\"language-javascript\">\n  \"styles\": [\n          ...\n          \"../node_modules/clarity-icons/clarity-icons.min.css\",\n          ...\n  ],\n  \"scripts\": [\n      ...\n      \"../node_modules/mutationobserver-shim/dist/mutationobserver.min.js\",\n      \"../node_modules/@webcomponents/custom-elements/custom-elements.min.js\",\n      \"../node_modules/clarity-icons/clarity-icons.min.js\"\n      ...\n  ]\n  </code></pre>\n        </li>\n        <li>\n            (Optional) If you load Clarity Icons by importing it in Typescript, you can load the shape sets modularly:\n            <pre><code clr-code-highlight=\"language-typescript\">\n  import 'clarity-icons';\n  </code></pre>\n            Unlike loading <code class=\"clr-code\">clarity-icons.min.js</code> in a <code class=\"clr-code\">script</code>\n            tag, the pattern above won't load all shape sets, but only Core Shapes. Thus, you can load additional sets\n            on demand when you need shapes from those sets. For example, if I need to use\n            <code class=\"clr-code\">play</code> icon, which happens to be in the set of Essential Shapes, I would want to\n            import <code class=\"clr-code\">essential-shapes</code> as well:\n            <pre><code clr-code-highlight=\"language-typescript\">\n  import 'clarity-icons';\n  import 'clarity-icons/shapes/essential-shapes';\n  </code></pre>\n\n        </li>\n    </ol>\n\n    <h5 id=\"step-2b-install-clarity-ui\">Step 2b: Install Clarity UI</h5>\n\n    <p></p>\n    <ol class=\"list\">\n        <li>Install Clarity UI package through npm:\n            <pre><code class=\"clr-code\">\n  npm install clarity-ui --save\n  </code></pre>\n        </li>\n        <li>Include clarity-ui.min.css in your HTML file:\n            <pre><code clr-code-highlight=\"language-html\">\n  &lt;link rel=\"stylesheet\" href=\"path/to/node_modules/clarity-ui/clarity-ui.min.css\"&gt;\n  </code></pre>\n            If your site is built with <a href=\"https://github.com/angular/angular-cli\">angular-cli</a> you can achieve\n            the above by adding the file to the styles array in <code class=\"clr-code\">angular-cli.json</code>:\n            <pre><code clr-code-highlight=\"language-javascript\">\n  \"styles\": [\n      ...\n      \"../node_modules/clarity-ui/clarity-ui.min.css\",\n      ...\n  ]\n  </code></pre>\n        </li>\n        <li>Write your HTML with the Clarity CSS class names and markup.</li>\n    </ol>\n\n    <h5 id=\"step-2c-install-clarity-angular\">Step 2c: Install Clarity Angular</h5>\n\n    <p></p>\n    <ol class=\"list\">\n        <li>If you haven't already, complete steps 1 and 2 for installing Clarity UI in the preceding section.\n        </li>\n        <li>Install the clarity-angular package through npm:\n            <pre><code class=\"clr-code\">\n  npm install clarity-angular --save\n  </code></pre>\n        </li>\n        <li>Install the clarity-angular package through npm:\n            <pre><code clr-code-highlight=\"language-javascript\">\n  import {{  '{'  }} NgModule {{ '}' }} from '@angular/core';\n  import {{  '{'  }} BrowserModule {{ '}' }} from '@angular/platform-browser';\n  import {{  '{'  }} ClarityModule {{ '}' }} from 'clarity-angular';\n  import {{  '{'  }} AppComponent {{ '}' }} from './app.component';\n\n  @NgModule({{  '{'  }}\n      imports: [\n          BrowserModule,\n          ClarityModule.forRoot(),\n          ....\n          ],\n          declarations: [ AppComponent ],\n          bootstrap: [ AppComponent ]\n  {{ '}' }})\n  export class AppModule {{  '{'  }}    {{ '}' }}\n  </code></pre>\n        </li>\n    </ol>\n\n    <h4 id=\"step-3-run-your-app\">Step 3: Run Your App</h4>\n\n    <pre><code class=\"clr-code\">\n  npm start\n  </code></pre>\n\n    <h2 id=\"browserSupport\">Device and Browser Support</h2>\n\n    <p class=\"bump-down\"><img src=\"assets/images/get-started/device_support.png\" alt=\"Device and Browser Support\"\n                              class=\"hidden-sm-down\"></p>\n\n    <ul class=\"hidden-md-up\">\n        <li>Internet Explorer 10 &amp; 11</li>\n        <li>MS Edge</li>\n        <li>Latest versions of Chrome, Safari, and Firefox</li>\n    </ul>\n    <p>\n        <em>* - Note that Clarity only supports the latest two versions of the listed browsers, with the exception of\n            Internet Explorer.</em>\n    </p>\n\n    <h2 id=\"contribute_guidelines\">Contributing to Clarity</h2>\n\n    <p>The Clarity team welcomes contributions from the community. See our <a\n            href=\"https://github.com/vmware/clarity//blob/master/CONTRIBUTING.md\" target=\"_blank\">contribution\n        guidelines</a> on GitHub.</p>\n\n    <h2 id=\"reportingBugs\">Reporting an Issue</h2>\n\n    <p>Ongoing work and feature requests are tracked using <a href=\"https://github.com/vmware/clarity/issues\"\n                                                              target=\"_blank\">GitHub Issues</a>. Please feel free to\n        file an issue.</p>\n\n    <p>When submitting issues please provide a minimal app that demonstrates the issue by forking one of Clarity\n        Plunkr's:\n    <ul class=\"list-unstyled\">\n        <li><a href=\"https://plnkr.co/edit/uNwwZe\" target=\"_blank\">Latest Clarity [v0.9.x] Template</a></li>\n        <li><a href=\"https://plnkr.co/edit/8TwwdL\" target=\"_blank\">Legacy Clarity [v0.8.15] Template</a></li>\n    </ul>\n\n    <h2 id=\"attributions\">Attributions</h2>\n\n    <p>See the <a href=\"https://github.com/vmware/clarity/blob/master/ATTRIBUTION.md\" target=\"_blank\">legal\n        attributions</a> for third party software included in Clarity.</p>\n\n    <div style=\"visibility: hidden; height: 80vh;\">This is a spacer to force sidenav highlighting on scroll</div>\n</main>\n\n<nav class=\"sidenav\" [clr-nav-level]=\"2\">\n    <section class=\"sidenav-content\">\n        <section class=\"nav-group\" [scrollspy]=\"scrollable\">\n            <label><a class=\"nav-link active\" routerLink=\".\" fragment=\"introduction\">Clarity Design System</a></label>\n            <label class=\"bump-down\"><a class=\"nav-link\" routerLink=\".\" fragment=\"howToUse\">How to Use\n                Clarity</a></label>\n            <ul class=\"nav-list\">\n                <li><a class=\"nav-link\" routerLink=\".\" fragment=\"sketchTemplate\">Using the Sketch Template</a></li>\n                <li><a class=\"nav-link\" routerLink=\".\" fragment=\"seedProjectClarity\">Using a Clarity Seed</a></li>\n                <li><a class=\"nav-link\" routerLink=\".\" fragment=\"seedProjectAngular\">Using an Angular Seed</a></li>\n            </ul>\n            <label class=\"bump-down\"><a class=\"nav-link\" routerLink=\".\" fragment=\"browserSupport\">Device &amp; Browser\n                Support</a></label>\n            <label class=\"bump-down\"><a class=\"nav-link\" routerLink=\".\" fragment=\"contribute_guidelines\">Contributing to\n                Clarity</a></label>\n            <label class=\"bump-down\"><a class=\"nav-link\" routerLink=\".\" fragment=\"reportingBugs\">Reporting an Issue</a></label>\n            <label class=\"bump-down\"><a class=\"nav-link\" routerLink=\".\" fragment=\"attributions\">Attributions</a></label>\n        </section>\n    </section>\n</nav>\n"

/***/ })

});
//# sourceMappingURL=3.chunk.js.map