webpackJsonp([5,8],{

/***/ 135:
/***/ (function(module, exports) {

module.exports = {
	"title": "Clarity Design System",
	"alt_title": "Project Clarity",
	"url": "//vmware.github.com/clarity",
	"email_link": "mailto:clarity@vmware.com",
	"socialcast_link": "https://vmware-com.socialcast.com/groups/133290-clarity",
	"socialcast_request": "mailto:affonehj@vmware.com",
	"latest_sketch_template": "0.9.0"
};

/***/ }),

/***/ 148:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"app/community/community.module": [
		379,
		2
	],
	"app/documentation/documentation.module": [
		380,
		0
	],
	"app/get-started/get-started.module": [
		381,
		3
	],
	"app/news/news.module": [
		382,
		1
	]
};
function webpackAsyncContext(req) {
	var ids = map[req];	if(!ids)
		return Promise.reject(new Error("Cannot find module '" + req + "'."));
	return __webpack_require__.e(ids[1]).then(function() {
		return __webpack_require__(ids[0]);
	});
};
webpackAsyncContext.keys = function webpackAsyncContextKeys() {
	return Object.keys(map);
};
module.exports = webpackAsyncContext;
webpackAsyncContext.id = 148;


/***/ }),

/***/ 149:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__polyfills_ts__ = __webpack_require__(174);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__(165);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_core__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__(173);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__app___ = __webpack_require__(169);





if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__angular_core__["enableProdMode"])();
}
__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_4__app___["a" /* AppModule */]);
//# sourceMappingURL=/Users/adityab/fork-website-clarity/src/main.js.map

/***/ }),

/***/ 162:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__sketch_template_link_directive__ = __webpack_require__(172);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__hash_listener_directive__ = __webpack_require__(170);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__scrollspy_directive__ = __webpack_require__(171);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UtilsModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var UtilsModule = (function () {
    function UtilsModule() {
    }
    return UtilsModule;
}());
UtilsModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_1__sketch_template_link_directive__["a" /* SketchTemplateLinkDirective */],
            __WEBPACK_IMPORTED_MODULE_2__hash_listener_directive__["a" /* HashListener */],
            __WEBPACK_IMPORTED_MODULE_3__scrollspy_directive__["a" /* ScrollSpy */]
        ],
        exports: [
            __WEBPACK_IMPORTED_MODULE_1__sketch_template_link_directive__["a" /* SketchTemplateLinkDirective */],
            __WEBPACK_IMPORTED_MODULE_2__hash_listener_directive__["a" /* HashListener */],
            __WEBPACK_IMPORTED_MODULE_3__scrollspy_directive__["a" /* ScrollSpy */]
        ]
    })
], UtilsModule);

//# sourceMappingURL=/Users/adityab/fork-website-clarity/src/utils.module.js.map

/***/ }),

/***/ 167:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__(48);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__home_home_component__ = __webpack_require__(95);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__page_not_found_page_not_found_component__ = __webpack_require__(96);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppRoutingModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var appRoutes = [
    {
        path: "get-started",
        loadChildren: 'app/get-started/get-started.module#GetStartedModule',
    },
    {
        path: 'documentation',
        loadChildren: 'app/documentation/documentation.module#DocumentationModule',
    },
    {
        path: "community",
        loadChildren: 'app/community/community.module#CommunityModule',
    },
    {
        path: "news",
        loadChildren: 'app/news/news.module#NewsModule',
    },
    {
        path: "",
        component: __WEBPACK_IMPORTED_MODULE_2__home_home_component__["a" /* HomeComponent */],
        data: {
            bodyClass: "layout-home"
        }
    },
    {
        path: '**',
        component: __WEBPACK_IMPORTED_MODULE_3__page_not_found_page_not_found_component__["a" /* PageNotFoundComponent */],
        data: {
            bodyClass: "layout-error",
            browserTitle: "Page Not Found"
        }
    }
];
var AppRoutingModule = (function () {
    function AppRoutingModule() {
    }
    return AppRoutingModule;
}());
AppRoutingModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
        imports: [
            __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* RouterModule */].forRoot(appRoutes, { preloadingStrategy: __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* PreloadAllModules */] })
        ],
        exports: [
            __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* RouterModule */]
        ]
    })
], AppRoutingModule);

//# sourceMappingURL=/Users/adityab/fork-website-clarity/src/app-routing.module.js.map

/***/ }),

/***/ 168:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_animations__ = __webpack_require__(166);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__ = __webpack_require__(27);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_core__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_forms__ = __webpack_require__(92);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_clarity_angular__ = __webpack_require__(161);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_clarity_angular___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_clarity_angular__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__utils_utils_module__ = __webpack_require__(162);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__app_routing_module__ = __webpack_require__(167);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__app_component__ = __webpack_require__(94);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__home_home_component__ = __webpack_require__(95);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__page_not_found_page_not_found_component__ = __webpack_require__(96);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};










var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__angular_core__["NgModule"])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_7__app_component__["a" /* AppComponent */],
            __WEBPACK_IMPORTED_MODULE_8__home_home_component__["a" /* HomeComponent */],
            __WEBPACK_IMPORTED_MODULE_9__page_not_found_page_not_found_component__["a" /* PageNotFoundComponent */]
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_animations__["a" /* BrowserAnimationsModule */],
            __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__["BrowserModule"],
            __WEBPACK_IMPORTED_MODULE_3__angular_forms__["FormsModule"],
            __WEBPACK_IMPORTED_MODULE_4_clarity_angular__["ClarityModule"].forRoot(),
            __WEBPACK_IMPORTED_MODULE_5__utils_utils_module__["a" /* UtilsModule */],
            __WEBPACK_IMPORTED_MODULE_6__app_routing_module__["a" /* AppRoutingModule */]
        ],
        providers: [
            __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__["Title"]
        ],
        bootstrap: [__WEBPACK_IMPORTED_MODULE_7__app_component__["a" /* AppComponent */]]
    })
], AppModule);

//# sourceMappingURL=/Users/adityab/fork-website-clarity/src/app.module.js.map

/***/ }),

/***/ 169:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__app_component__ = __webpack_require__(94);
/* unused harmony namespace reexport */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(168);
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_1__app_module__["a"]; });


//# sourceMappingURL=/Users/adityab/fork-website-clarity/src/index.js.map

/***/ }),

/***/ 170:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__(48);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HashListener; });
/*
 * Hack while waiting for https://github.com/angular/angular/issues/6595 to be fixed.
 */
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var HashListener = (function () {
    function HashListener(route) {
        var _this = this;
        this.route = route;
        this.sub = this.route.fragment.subscribe(function (f) {
            _this.scrollToAnchor(f, false);
        });
    }
    HashListener.prototype.ngOnInit = function () {
        this.scrollToAnchor(this.route.snapshot.fragment, false);
    };
    HashListener.prototype.scrollToAnchor = function (hash, smooth) {
        if (smooth === void 0) { smooth = true; }
        if (hash) {
            var element = document.querySelector("#" + hash);
            if (element) {
                element.scrollIntoView({
                    behavior: smooth ? "smooth" : "instant",
                    block: "start"
                });
            }
        }
    };
    HashListener.prototype.ngOnDestroy = function () {
        this.sub.unsubscribe();
    };
    return HashListener;
}());
HashListener = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Directive"])({
        selector: "[hash-listener]",
        host: {
            "[style.position]": "'relative'"
        }
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["d" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["d" /* ActivatedRoute */]) === "function" && _a || Object])
], HashListener);

var _a;
//# sourceMappingURL=/Users/adityab/fork-website-clarity/src/hash-listener.directive.js.map

/***/ }),

/***/ 171:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__(48);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ScrollSpy; });
/*
 * Hack while waiting for https://github.com/angular/angular/issues/6595 to be fixed.
 */
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ScrollSpy = (function () {
    function ScrollSpy(renderer) {
        this.renderer = renderer;
        this.anchors = [];
        this.throttle = false;
    }
    Object.defineProperty(ScrollSpy.prototype, "links", {
        set: function (routerLinks) {
            var _this = this;
            this.anchors = routerLinks.map(function (routerLink) { return '#' + routerLink.fragment; });
            this.sub = routerLinks.changes.subscribe(function () {
                _this.anchors = routerLinks.map(function (routerLink) { return '#' + routerLink.fragment; });
            });
        },
        enumerable: true,
        configurable: true
    });
    ScrollSpy.prototype.handleEvent = function () {
        var _this = this;
        this.scrollPosition = this.scrollable.scrollTop;
        if (!this.throttle) {
            window.requestAnimationFrame(function () {
                var currentLinkIndex = _this.findCurrentAnchor() || 0;
                _this.linkElements.forEach(function (link, index) {
                    _this.renderer.setElementClass(link.nativeElement, "active", index === currentLinkIndex);
                });
                _this.throttle = false;
            });
        }
        this.throttle = true;
    };
    ScrollSpy.prototype.findCurrentAnchor = function () {
        for (var i = this.anchors.length - 1; i >= 0; i--) {
            var anchor = this.anchors[i];
            if (this.scrollable.querySelector(anchor).offsetTop <= this.scrollPosition) {
                return i;
            }
        }
    };
    ScrollSpy.prototype.ngOnInit = function () {
        this.scrollable.addEventListener('scroll', this);
    };
    ScrollSpy.prototype.ngOnDestroy = function () {
        this.scrollable.removeEventListener('scroll', this);
        if (this.sub) {
            this.sub.unsubscribe();
        }
    };
    return ScrollSpy;
}());
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])("scrollspy"),
    __metadata("design:type", Object)
], ScrollSpy.prototype, "scrollable", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ContentChildren"])(__WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* RouterLinkWithHref */], { descendants: true }),
    __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["QueryList"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["QueryList"]) === "function" && _a || Object),
    __metadata("design:paramtypes", [typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["QueryList"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["QueryList"]) === "function" && _b || Object])
], ScrollSpy.prototype, "links", null);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ContentChildren"])(__WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* RouterLinkWithHref */], { descendants: true, read: __WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"] }),
    __metadata("design:type", typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["QueryList"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["QueryList"]) === "function" && _c || Object)
], ScrollSpy.prototype, "linkElements", void 0);
ScrollSpy = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Directive"])({
        selector: "[scrollspy]",
    }),
    __metadata("design:paramtypes", [typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["Renderer"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["Renderer"]) === "function" && _d || Object])
], ScrollSpy);

var _a, _b, _c, _d;
//# sourceMappingURL=/Users/adityab/fork-website-clarity/src/scrollspy.directive.js.map

/***/ }),

/***/ 172:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(7);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SketchTemplateLinkDirective; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var LATEST = __webpack_require__(135)["latest_sketch_template"];
var SketchTemplateLinkDirective = (function () {
    function SketchTemplateLinkDirective() {
        this.version = LATEST;
    }
    Object.defineProperty(SketchTemplateLinkDirective.prototype, "href", {
        get: function () {
            return "assets/images/sketchTemplates/Clarity-Template-" + this.version + ".sketch";
        },
        enumerable: true,
        configurable: true
    });
    return SketchTemplateLinkDirective;
}());
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", Object)
], SketchTemplateLinkDirective.prototype, "version", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["HostBinding"])("attr.href"),
    __metadata("design:type", Object),
    __metadata("design:paramtypes", [])
], SketchTemplateLinkDirective.prototype, "href", null);
SketchTemplateLinkDirective = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Directive"])({
        selector: '[sketchTemplateLink]',
        host: {
            "[attr.target]": "'_blank'"
        }
    })
], SketchTemplateLinkDirective);

//# sourceMappingURL=/Users/adityab/fork-website-clarity/src/sketch-template-link.directive.js.map

/***/ }),

/***/ 173:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `angular-cli.json`.
// The file contents for the current environment will overwrite these during build.
var environment = {
    production: false
};
//# sourceMappingURL=/Users/adityab/fork-website-clarity/src/environment.js.map

/***/ }),

/***/ 174:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_core_js_es6_symbol__ = __webpack_require__(188);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_core_js_es6_symbol___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_core_js_es6_symbol__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_core_js_es6_object__ = __webpack_require__(181);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_core_js_es6_object___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_core_js_es6_object__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_core_js_es6_function__ = __webpack_require__(177);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_core_js_es6_function___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_core_js_es6_function__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_core_js_es6_parse_int__ = __webpack_require__(183);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_core_js_es6_parse_int___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_core_js_es6_parse_int__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_core_js_es6_parse_float__ = __webpack_require__(182);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_core_js_es6_parse_float___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_core_js_es6_parse_float__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_core_js_es6_number__ = __webpack_require__(180);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_core_js_es6_number___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_core_js_es6_number__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_core_js_es6_math__ = __webpack_require__(179);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_core_js_es6_math___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_core_js_es6_math__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_core_js_es6_string__ = __webpack_require__(187);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_core_js_es6_string___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7_core_js_es6_string__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_core_js_es6_date__ = __webpack_require__(176);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_core_js_es6_date___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_8_core_js_es6_date__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_core_js_es6_array__ = __webpack_require__(175);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_core_js_es6_array___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_9_core_js_es6_array__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10_core_js_es6_regexp__ = __webpack_require__(185);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10_core_js_es6_regexp___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_10_core_js_es6_regexp__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11_core_js_es6_map__ = __webpack_require__(178);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11_core_js_es6_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_11_core_js_es6_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12_core_js_es6_set__ = __webpack_require__(186);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12_core_js_es6_set___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_12_core_js_es6_set__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13_core_js_es6_reflect__ = __webpack_require__(184);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13_core_js_es6_reflect___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_13_core_js_es6_reflect__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14_core_js_es7_reflect__ = __webpack_require__(189);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14_core_js_es7_reflect___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_14_core_js_es7_reflect__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15_zone_js_dist_zone__ = __webpack_require__(375);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15_zone_js_dist_zone___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_15_zone_js_dist_zone__);
// This file includes polyfills needed by Angular and is loaded before
// the app. You can add your own extra polyfills to this file.















// import 'intl';
// import 'intl/locale-data/jsonp/en';

//# sourceMappingURL=/Users/adityab/fork-website-clarity/src/polyfills.js.map

/***/ }),

/***/ 329:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(34)(false);
// imports


// module
exports.push([module.i, ".clrweb-error-block {\n    margin: 0 auto;\n    text-align: center;\n    padding-top: 24px;\n}\n\n.clrweb-error-block .logo-block {\n    width: 100%;\n    max-width: 380px;\n    background-image: url(/clarity/assets/images/clarity_logo.svg);\n    background-repeat: no-repeat;\n    background-size: contain;\n    background-position: center center;\n    height: 286px;\n    opacity: 0.28;\n}\n\n.clrweb-error-block p.error-code {\n    font-size: 60px;\n    font-weight: 200;\n    line-height: 1em;\n    opacity: 0.5;\n    margin-top: 0;\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 343:
/***/ (function(module, exports) {

module.exports = "<clr-main-container>\n    <clr-header class=\"header-6\">\n        <div class=\"branding\">\n            <a routerLink=\"/\" class=\"logo-and-title\">\n                <span class=\"clr-icon clarity-logo\"></span>\n                <span class=\"title\">{{ productTitle }}</span>\n            </a>\n        </div>\n        <div class=\"divider\"></div>\n        <div class=\"header-nav\" [clr-nav-level]=\"1\">\n            <a id=\"home-link\" class=\"nav-link\" routerLink=\"/\" routerLinkActive=\"active\" [routerLinkActiveOptions]=\"{exact:true}\"><span class=\"nav-text\">Home</span></a>\n            <a class=\"nav-link\" routerLink=\"/get-started\" routerLinkActive=\"active\"><span class=\"nav-text\">Get Started</span></a>\n            <a class=\"nav-link\" routerLink=\"/documentation\" routerLinkActive=\"active\"><span class=\"nav-text\">Documentation</span></a>\n            <a class=\"nav-link\" routerLink=\"/community\" routerLinkActive=\"active\"><span class=\"nav-text\">Community</span></a>\n            <a class=\"nav-link\" routerLink=\"/news\" routerLinkActive=\"active\"><span class=\"nav-text\">What's New</span></a>\n        </div>\n        <div class=\"settings\">\n            <!-- watch/star widget from https://ghbtns.com/#original-watch-aka-star... apache 2 license. thanks, mdo! -->\n            <iframe class=\"github-btn\" src=\"https://ghbtns.com/github-btn.html?user=vmware&repo=clarity&type=star&count=true\" frameborder=\"0\" scrolling=\"0\" width=\"170px\" height=\"20px\"></iframe>\n        </div>\n    </clr-header>\n\n    <router-outlet></router-outlet>\n\n    <footer>\n        <div class=\"footer-wrapper\">\n            <img class=\"vmware-weblogo\" src=\"assets/images/home/logo_vmware.svg\">\n            <p class=\"copyright\">&copy; 2016 - 2017 VMware, Inc. All Rights Reserved.</p>\n        </div>\n    </footer>\n</clr-main-container>\n"

/***/ }),

/***/ 344:
/***/ (function(module, exports) {

module.exports = "<main class=\"content-area\" style=\"overflow-y: hidden\">\n  <section class=\"home-hero\">\n    <div class=\"home-hero-content\">\n      <h1>Clarity Design System</h1>\n      <p class=\"head\">\n        UX guidelines, HTML/CSS framework, and Angular components\n        working together to craft exceptional experiences\n      </p>\n      <div class=\"home-hero-btn\">\n        <a routerLink=\"get-started\" class=\"btn btn-primary\">Get Started</a>\n        <a routerLink=\"documentation\" class=\"btn btn-secondary btn-outline\">Documentation</a>\n      </div>\n      <p class=\"subtext\">\n        View the <a href=\"https://github.com/vmware/clarity\">source</a> on GitHub\n      </p>\n    </div>\n    <div class=\"bg-img\"></div>\n  </section>\n\n  <section class=\"home-cards\">\n    <div class=\"home-cards-container clearfix\">\n      <h1>Designed for designers and built for developers</h1>\n      <div class=\"home-card-wrapper row\">\n        <div class=\"home-card home-card-sketch col-xs-3\">\n          <div class=\"home-card-bug\">\n            <img src=\"assets/images/home/sketch.svg\" alt=\"Sketch logo\">\n          </div>\n          <h3 class=\"home-card-title\">Sketch Template</h3>\n          <p>\n            Jumpstart your project using our\n            <a sketchTemplateLink>Sketch template</a>\n            with ready-to-use components.\n          </p>\n        </div>\n\n        <div class=\"home-card home-card-ux col-xs-3\">\n          <div class=\"home-card-bug\">\n            <img src=\"assets/images/home/ux.svg\" alt=\"UX guidelines\">\n          </div>\n          <h3 class=\"home-card-title\">UX guidelines</h3>\n          <p>\n            Reference UX guidelines that stem from ongoing research\n            and exploration, making it easy to design cohesive experiences.\n          </p>\n        </div>\n\n        <div class=\"home-card home-card-html col-xs-3\">\n          <div class=\"home-card-bug\">\n            <img src=\"assets/images/home/html.svg\" alt=\"HTML/CSS\">\n          </div>\n          <h3 class=\"home-card-title\">HTML/CSS</h3>\n          <p>\n            Start building with our HTML/CSS framework and rapidly\n            go from prototype to production.\n          </p>\n        </div>\n\n        <div class=\"home-card home-card-angular col-xs-3\">\n          <div class=\"home-card-bug\">\n            <img src=\"assets/images/home/angular.svg\" alt=\"Angular logo\">\n          </div>\n          <h3 class=\"home-card-title\">Angular</h3>\n          <p>\n            Use our set of data-bound and performant components\n            on top of Angular to add interactivity\n          </p>\n        </div>\n      </div>\n    </div>\n  </section>\n\n  <section class=\"home-process\">\n    <h1>From prototype to product, faster and better</h1>\n\n    <div class=\"row\">\n      <div class=\"home-process-block col-xs-6\">\n        <div class=\"home-process-block__title\">\n          <div class=\"img bulb\"></div>\n          <!-- <img src=\"assets/images/home/ic-bulb.svg\" alt=\"Product-Based Approach\"> -->\n          <h3>Product-based</h3>\n        </div>\n        <p>\n          We work closely with product teams to understand and\n          solve the vast array of challenges they face. These\n          solutions are built into Clarity and contributed\n          back to the community.\n        </p>\n      </div>\n      <div class=\"home-process-block col-xs-6\">\n        <div class=\"home-process-block__title\">\n          <div class=\"img rapid\"></div>\n          <!-- <img src=\"assets/images/home/ic_rapid.svg\" alt=\"Rapid development\"> -->\n          <h3>Rapid development</h3>\n        </div>\n        <p>\n          Clarity’s shared foundation of design and development\n          makes communication and collaboration between different\n          areas of expertise easier than ever.\n        </p>\n      </div>\n      <div class=\"home-process-block col-xs-6\">\n        <div class=\"home-process-block__title\">\n          <div class=\"img evolving\"></div>\n          <!-- <img src=\"assets/images/home/ic_evolving.svg\" alt=\"Evolving\"> -->\n          <h3>Evolving</h3>\n        </div>\n        <p>\n          Design patterns and technology change quickly. Clarity\n          is built to anticipate and adopt to changes quickly\n          and easily.\n        </p>\n      </div>\n      <div class=\"home-process-block col-xs-6\">\n        <div class=\"home-process-block__title\">\n          <div class=\"img reliable\"></div>\n          <!-- <img src=\"assets/images/home/ic_reliable.svg\" alt=\"Reliable\"> -->\n          <h3>Reliable</h3>\n        </div>\n        <p>\n          We have a dedicated team focused on shipping frequently,\n          with a high bar of quality standard.\n        </p>\n      </div>\n    </div>\n  </section>\n\n  <section class=\"home-contact\">\n    <div class=\"row home-contact-container\">\n      <div class=\"home-contact-block col-xs-6\">\n        <a href=\"//opensource.org/licenses/MIT\" class=\"mit-link home-contact_link\" target=\"_blank\">\n          <span class=\"img\"></span>\n          Clarity is licensed under the MIT License. <span class=\"xtra\">Read more here.</span>\n        </a>\n      </div>\n      <div class=\"home-contact-block col-xs-6\">\n        <a href=\"//twitter.com/VMwareClarity\" class=\"twr-link home-contact_link\" target=\"_blank\">\n          <span class=\"img\"></span>\n          @VMwareClarity\n        </a>\n      </div>\n    </div>\n  </section>\n</main>\n"

/***/ }),

/***/ 345:
/***/ (function(module, exports) {

module.exports = "<div class=\"clrweb-error-block\">\n    <div class=\"logo-block\"></div>\n    <p class=\"error-code\">404</p>\n    <p class=\"error-blurb\">We couldn't find the page you requested.</p>\n</div>"

/***/ }),

/***/ 377:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(149);


/***/ }),

/***/ 94:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__(48);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_platform_browser__ = __webpack_require__(27);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var PRODUCT_TITLE = __webpack_require__(135).alt_title;
var AppComponent = (function () {
    function AppComponent(renderer, el, router, titleService) {
        this.renderer = renderer;
        this.el = el;
        this.router = router;
        this.titleService = titleService;
        this.bodyClasses = [];
        this.productTitle = PRODUCT_TITLE;
        this.defaultBrowserTitle = "Clarity Design System";
        this.browserTitleSeparator = " - ";
    }
    AppComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.router.events.subscribe(function (change) {
            if (change instanceof __WEBPACK_IMPORTED_MODULE_1__angular_router__["e" /* NavigationEnd */]) {
                _this.bodyClasses.forEach(function (className) { return _this.renderer.setElementClass(_this.el.nativeElement, className, false); });
                _this.updateBodyClasses();
                _this.bodyClasses.forEach(function (className) { return _this.renderer.setElementClass(_this.el.nativeElement, className, true); });
                _this.updateBrowserTitle();
                // ga may not exist if we aren't on the actual site
                if (typeof ga !== "undefined") {
                    ga('send', 'pageview', change.urlAfterRedirects);
                }
            }
        });
    };
    AppComponent.prototype.updateBodyClasses = function () {
        this.bodyClasses.length = 0;
        this.bodyClasses = this.collectRouteData("bodyClass");
    };
    AppComponent.prototype.setTitle = function (newTitle) {
        this.titleService.setTitle(newTitle);
    };
    AppComponent.prototype.updateBrowserTitle = function () {
        var browserTitles = this.collectRouteData("browserTitle");
        browserTitles.unshift(this.defaultBrowserTitle);
        // some weirdness with routing was giving us duplicate titles
        // like "Clarity Design System - Releases - Releases"
        var dupes = new Set;
        var filteredTitles = browserTitles.filter(function (ttl) {
            if (!dupes.has(ttl)) {
                dupes.add(ttl);
                return true;
            }
        });
        this.setTitle(filteredTitles.join(this.browserTitleSeparator));
    };
    AppComponent.prototype.collectRouteData = function (key) {
        var route = this.router.routerState.snapshot.root;
        var returnArray = [];
        while (route) {
            if (route.data && route.data[key]) {
                returnArray.push(route.data[key]);
            }
            route = route.firstChild;
        }
        return returnArray;
    };
    return AppComponent;
}());
AppComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'body',
        template: __webpack_require__(343)
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["Renderer"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["Renderer"]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["f" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["f" /* Router */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_2__angular_platform_browser__["Title"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_platform_browser__["Title"]) === "function" && _d || Object])
], AppComponent);

var _a, _b, _c, _d;
//# sourceMappingURL=/Users/adityab/fork-website-clarity/src/app.component.js.map

/***/ }),

/***/ 95:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(7);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomeComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var HomeComponent = (function () {
    function HomeComponent() {
    }
    return HomeComponent;
}());
HomeComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'home',
        template: __webpack_require__(344),
        host: {
            "[class.content-container]": "true"
        }
    }),
    __metadata("design:paramtypes", [])
], HomeComponent);

//# sourceMappingURL=/Users/adityab/fork-website-clarity/src/home.component.js.map

/***/ }),

/***/ 96:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(7);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PageNotFoundComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var PageNotFoundComponent = (function () {
    function PageNotFoundComponent() {
    }
    return PageNotFoundComponent;
}());
PageNotFoundComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'page-not-found',
        template: __webpack_require__(345),
        styles: [__webpack_require__(329)],
        host: {
            "[class.content-container]": "true"
        }
    }),
    __metadata("design:paramtypes", [])
], PageNotFoundComponent);

//# sourceMappingURL=/Users/adityab/fork-website-clarity/src/page-not-found.component.js.map

/***/ })

},[377]);
//# sourceMappingURL=main.bundle.js.map