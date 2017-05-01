webpackJsonp([1,8],{

/***/ 382:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_common__ = __webpack_require__(48);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_clarity_angular__ = __webpack_require__(161);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_clarity_angular___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_clarity_angular__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__utils_utils_module__ = __webpack_require__(162);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__news_routing_module__ = __webpack_require__(654);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__news_component__ = __webpack_require__(438);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__counters_breaking_change_directive__ = __webpack_require__(435);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__counters_bug_fix_directive__ = __webpack_require__(436);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__counters_new_component_directive__ = __webpack_require__(437);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__release_release_directive__ = __webpack_require__(439);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NewsModule", function() { return NewsModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};










var NewsModule = (function () {
    function NewsModule() {
    }
    return NewsModule;
}());
NewsModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["NgModule"])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_5__news_component__["a" /* NewsComponent */],
            __WEBPACK_IMPORTED_MODULE_6__counters_breaking_change_directive__["a" /* BreakingChange */],
            __WEBPACK_IMPORTED_MODULE_7__counters_bug_fix_directive__["a" /* BugFix */],
            __WEBPACK_IMPORTED_MODULE_8__counters_new_component_directive__["a" /* NewComponent */],
            __WEBPACK_IMPORTED_MODULE_9__release_release_directive__["a" /* Release */]
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_0__angular_common__["CommonModule"],
            __WEBPACK_IMPORTED_MODULE_2_clarity_angular__["ClarityModule"].forChild(),
            __WEBPACK_IMPORTED_MODULE_3__utils_utils_module__["a" /* UtilsModule */],
            __WEBPACK_IMPORTED_MODULE_4__news_routing_module__["a" /* NewsRoutingModule */]
        ],
        providers: []
    })
], NewsModule);

//# sourceMappingURL=/Users/adityab/fork-website-clarity/src/news.module.js.map

/***/ }),

/***/ 435:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(7);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BreakingChange; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var BreakingChange = (function () {
    function BreakingChange() {
    }
    return BreakingChange;
}());
BreakingChange = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Directive"])({
        selector: '[breaking-change]'
    })
], BreakingChange);

//# sourceMappingURL=/Users/adityab/fork-website-clarity/src/breaking-change.directive.js.map

/***/ }),

/***/ 436:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(7);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BugFix; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var BugFix = (function () {
    function BugFix() {
    }
    return BugFix;
}());
BugFix = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Directive"])({
        selector: '[bug-fix]'
    })
], BugFix);

//# sourceMappingURL=/Users/adityab/fork-website-clarity/src/bug-fix.directive.js.map

/***/ }),

/***/ 437:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(7);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NewComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var NewComponent = (function () {
    function NewComponent() {
    }
    return NewComponent;
}());
NewComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Directive"])({
        selector: '[new-component]'
    })
], NewComponent);

//# sourceMappingURL=/Users/adityab/fork-website-clarity/src/new-component.directive.js.map

/***/ }),

/***/ 438:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__release_page_release_organizer__ = __webpack_require__(655);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__release_release_directive__ = __webpack_require__(439);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_router__ = __webpack_require__(47);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__counters_breaking_change_directive__ = __webpack_require__(435);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__counters_bug_fix_directive__ = __webpack_require__(436);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__counters_new_component_directive__ = __webpack_require__(437);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NewsComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var RELEASES = __webpack_require__(441);
var NewsComponent = (function () {
    function NewsComponent(router) {
        this.router = router;
        this._hasIcons = false;
        this._hasGitHub = false;
        this.current = RELEASES.current;
        this.minors = __WEBPACK_IMPORTED_MODULE_1__release_page_release_organizer__["a" /* MINORS */]["0"];
        this.patches = __WEBPACK_IMPORTED_MODULE_1__release_page_release_organizer__["b" /* PATCHES */];
    }
    Object.defineProperty(NewsComponent.prototype, "hasIcons", {
        get: function () {
            return this._hasIcons;
        },
        set: function (value) {
            this._hasIcons = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(NewsComponent.prototype, "hasGitHub", {
        get: function () {
            return this._hasGitHub;
        },
        set: function (value) {
            this._hasGitHub = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(NewsComponent.prototype, "releaseArr", {
        get: function () {
            if (this.releaseTemplates) {
                return this.releaseTemplates.toArray();
            }
            else {
                return [];
            }
        },
        enumerable: true,
        configurable: true
    });
    NewsComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.router.events.subscribe(function (change) {
            if (change instanceof __WEBPACK_IMPORTED_MODULE_3__angular_router__["b" /* NavigationEnd */]) {
                var url = change.url.split("/");
                var urlLength = url.length;
                if (urlLength > 0 && url[urlLength - 1] !== "news") {
                    _this.setTemplate(url[urlLength - 1]);
                }
                else if (url[urlLength - 1] === "news") {
                    _this.setTemplate(_this.current);
                }
            }
        });
    };
    NewsComponent.prototype.setTemplate = function (releaseNo) {
        var tempArr = this.releaseArr.filter(function (release) { return release.clrRelease === releaseNo; });
        if (tempArr.length > 0) {
            this.currentTemplate = tempArr[0].templateRef;
            this.setInfo(releaseNo, RELEASES.all[releaseNo]);
        }
    };
    NewsComponent.prototype.setInfo = function (releaseNo, releaseInfo) {
        this.releaseNumber = releaseNo;
        this.releaseDate = releaseInfo.date;
        this.sketchVersion = releaseInfo.sketch;
        this.commit = releaseInfo.commit;
        this.hasIcons = (__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__release_page_release_organizer__["c" /* compareReleases */])("0.5.4", releaseNo) >= 0);
        this.hasGitHub = (__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__release_page_release_organizer__["c" /* compareReleases */])("0.6.0", releaseNo) >= 0);
        this.nbBreakingChanges = this.breakingChanges ? this.breakingChanges.length : 0;
        this.nbBugFixes = this.bugFixes ? this.bugFixes.length : 0;
        this.nbNewComponents = this.newComponents ? this.newComponents.length : 0;
    };
    return NewsComponent;
}());
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChildren"])(__WEBPACK_IMPORTED_MODULE_2__release_release_directive__["a" /* Release */]),
    __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["QueryList"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["QueryList"]) === "function" && _a || Object)
], NewsComponent.prototype, "releaseTemplates", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChildren"])(__WEBPACK_IMPORTED_MODULE_4__counters_breaking_change_directive__["a" /* BreakingChange */]),
    __metadata("design:type", typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["QueryList"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["QueryList"]) === "function" && _b || Object)
], NewsComponent.prototype, "breakingChanges", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChildren"])(__WEBPACK_IMPORTED_MODULE_5__counters_bug_fix_directive__["a" /* BugFix */]),
    __metadata("design:type", typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["QueryList"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["QueryList"]) === "function" && _c || Object)
], NewsComponent.prototype, "bugFixes", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChildren"])(__WEBPACK_IMPORTED_MODULE_6__counters_new_component_directive__["a" /* NewComponent */]),
    __metadata("design:type", typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["QueryList"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["QueryList"]) === "function" && _d || Object)
], NewsComponent.prototype, "newComponents", void 0);
NewsComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: "news",
        template: __webpack_require__(869),
        host: {
            "[class.content-container]": "true"
        }
    }),
    __metadata("design:paramtypes", [typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_3__angular_router__["c" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__angular_router__["c" /* Router */]) === "function" && _e || Object])
], NewsComponent);

var _a, _b, _c, _d, _e;
//# sourceMappingURL=/Users/adityab/fork-website-clarity/src/news.component.js.map

/***/ }),

/***/ 439:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(7);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Release; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var Release = (function () {
    function Release(templateRef) {
        this.templateRef = templateRef;
        this.clrRelease = "0.9.2";
    }
    return Release;
}());
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", String)
], Release.prototype, "clrRelease", void 0);
Release = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Directive"])({
        selector: "[clrRelease]"
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["TemplateRef"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["TemplateRef"]) === "function" && _a || Object])
], Release);

var _a;
//# sourceMappingURL=/Users/adityab/fork-website-clarity/src/release.directive.js.map

/***/ }),

/***/ 441:
/***/ (function(module, exports) {

module.exports = {
	"current": "0.9.2",
	"all": {
		"0.9.2": {
			"date": "April 27, 2017",
			"sketch": "0.9.0",
			"commit": "264ffdbb9cb38ff76aa5fdc32150c1c2c29c0431"
		},
		"0.9.1": {
			"date": "April 20, 2017",
			"sketch": "0.9.0",
			"commit": "0d7da1a91566e7952686fab4975f3b28dd16f626"
		},
		"0.9.0": {
			"date": "April 13, 2017",
			"sketch": "0.9.0",
			"commit": "3ba64d11eb715d223cdd5b4a10ffa068f9458000"
		},
		"0.8.16": {
			"date": "April 20, 2017",
			"sketch": "0.8.9",
			"commit": "816f71c1d22b06428404bbdd613acd25fa71a5ff"
		},
		"0.8.15": {
			"date": "April 13, 2017",
			"sketch": "0.8.9",
			"commit": "a11553346842f2d9d45278186adc9c54d4a7fa95"
		},
		"0.8.14": {
			"date": "April 6, 2017",
			"sketch": "0.8.9",
			"commit": "9b393b0710966ce7613e524c61315a99f6602f8f"
		},
		"0.8.13": {
			"date": "March 30, 2017",
			"sketch": "0.8.9",
			"commit": "334f2d46929bf6ca84214dfbd9dfd81383183797"
		},
		"0.8.12": {
			"date": "March 23, 2017",
			"sketch": "0.8.9",
			"commit": "fa4584450432a1f17c80826d7ec2373d91706089"
		},
		"0.8.11": {
			"date": "March 15, 2017",
			"sketch": "0.8.9",
			"commit": "50637a2604afd224c990b2b462848c4129bea642"
		},
		"0.8.10": {
			"date": "March 9, 2017",
			"sketch": "0.8.9",
			"commit": "b1da3613e75fad37a01382469a3473f1fd421c8d"
		},
		"0.8.9": {
			"date": "March 2, 2017",
			"sketch": "0.8.9",
			"commit": "20d2bd1ed7654fecd6d1064a52092a732479b5a4"
		},
		"0.8.8": {
			"date": "Feb 23, 2017",
			"sketch": "0.8.5",
			"commit": "48d5fbb45c54e7773b2819f9e3c8d2c861d347ac"
		},
		"0.8.7": {
			"date": "Feb 16, 2017",
			"sketch": "0.8.5",
			"commit": "18f4e28c8bd8a38a87cdbdc9ccc0556c9eebc4b4"
		},
		"0.8.6": {
			"date": "Feb 9, 2017",
			"sketch": "0.8.5",
			"commit": "097346293cec28c4c6af904b60495e7af992a02e"
		},
		"0.8.5": {
			"date": "Feb 2, 2017",
			"sketch": "0.8.5",
			"commit": "aa4bfd5294bdfb1f794c9662053db103db215af2"
		},
		"0.8.4": {
			"date": "Jan 26, 2017",
			"sketch": "0.8.2",
			"commit": "2e538588c33b918663c9f84c222d14ba518237e2"
		},
		"0.8.3": {
			"date": "Jan 19, 2017",
			"sketch": "0.8.2",
			"commit": "84d905b3c176ce0fd2261ed1b51d5b57c2e0d0ff"
		},
		"0.8.2": {
			"date": "Jan 12, 2017",
			"sketch": "0.8.2",
			"commit": "b4b7093d09e55d706ea1ae4298b5a1dc2ed868c6"
		},
		"0.8.1": {
			"date": "Jan 5, 2017",
			"sketch": "0.7.3",
			"commit": "a5139dac9abd276ba62e21a0725e0de720ade3a7"
		},
		"0.8.0": {
			"date": "Dec 22, 2016 - 2017",
			"sketch": "0.7.3",
			"commit": "3c724fca53be645955d6ac621ec45bc4041e533b"
		},
		"0.7.6": {
			"date": "Jan 5, 2017",
			"sketch": "0.7.3",
			"commit": "2979224414ca222aa2dc8f064c98ed176a0adeaf"
		},
		"0.7.5": {
			"date": "Dec 16, 2016 - 2017",
			"sketch": "0.7.3",
			"commit": "3ab95f9b3c04a9699c7a25b210c0a2777ef8de36"
		},
		"0.7.4": {
			"date": "Dec 8, 2016 - 2017",
			"sketch": "0.7.3",
			"commit": "a136aba0b3ddab135743c7d74a5289bf7e007199"
		},
		"0.7.3": {
			"date": "Dec 1, 2016 - 2017",
			"sketch": "0.7.3",
			"commit": "7792acd165674b970cdaa33e89eb8371d8b487a6"
		},
		"0.7.2": {
			"date": "Nov 23, 2016 - 2017",
			"sketch": "0.7.0",
			"commit": "5172211a6e126b2213f95a6ee90611c497ec908a"
		},
		"0.7.1": {
			"date": "Nov 18, 2016 - 2017",
			"sketch": "0.7.0",
			"commit": "475a6c1cf5fdab4043e03261e671dcec51a512b2"
		},
		"0.7.0": {
			"date": "Nov 11, 2016 - 2017",
			"sketch": "0.7.0",
			"commit": "29c547cde08e6c3add9fa5b40b34c516ae90574f"
		},
		"0.6.4": {
			"date": "Dec 8, 2016 - 2017",
			"sketch": "0.6.0",
			"commit": "6b14e3abfcf49a2c3d857e0ffd79dbaaa9f3a695"
		},
		"0.6.3": {
			"date": "Nov 18, 2016 - 2017",
			"sketch": "0.6.0",
			"commit": "f2d82388e7b6a9d40e3e82442755ee32ee7b89c1"
		},
		"0.6.2": {
			"date": "Nov 11, 2016 - 2017",
			"sketch": "0.6.0",
			"commit": "d44dfc753e8ffce2d845aff7892e718704601e8e"
		},
		"0.6.1": {
			"date": "Nov 4, 2016 - 2017",
			"sketch": "0.6.0",
			"commit": "ce43e65ab3dd9706e24ca0697df84043a163f83e"
		},
		"0.6.0": {
			"date": "Oct 28, 2016 - 2017",
			"sketch": "0.6.0",
			"commit": "d332f6a632fd3570f6924324089466f555baf853"
		},
		"0.5.6": {
			"date": "Oct 27, 2016 - 2017",
			"sketch": "0.5.0",
			"commit": null
		},
		"0.5.5": {
			"date": "Oct 21, 2016 - 2017",
			"sketch": "0.5.0",
			"commit": null
		},
		"0.5.4": {
			"date": "Oct 14, 2016 - 2017",
			"sketch": "0.5.0",
			"commit": null
		},
		"0.5.3": {
			"date": "Oct 6, 2016 - 2017",
			"sketch": "0.5.0",
			"commit": null
		},
		"0.5.2": {
			"date": "Sep 30, 2016 - 2017",
			"sketch": "0.5.0",
			"commit": null
		},
		"0.5.1": {
			"date": "Sep 22, 2016 - 2017",
			"sketch": "0.5.0",
			"commit": null
		},
		"0.5.0": {
			"date": "Sep 15, 2016 - 2017",
			"sketch": "0.5.0",
			"commit": null
		},
		"0.4.3": {
			"date": "Sep 22, 2016 - 2017",
			"sketch": "0.3.0",
			"commit": null
		},
		"0.4.2": {
			"date": "Sep 15, 2016 - 2017",
			"sketch": "0.3.0",
			"commit": null
		},
		"0.4.1": {
			"date": "Sep 7, 2016 - 2017",
			"sketch": "0.3.0",
			"commit": null
		},
		"0.4.0": {
			"date": "Aug 30, 2016 - 2017",
			"sketch": "0.3.0",
			"commit": null
		},
		"0.3.6": {
			"date": "Aug 26, 2016 - 2017",
			"sketch": "0.3.0",
			"commit": null
		},
		"0.3.5": {
			"date": "Aug 26, 2016 - 2017",
			"sketch": "0.3.0",
			"commit": null
		},
		"0.3.4": {
			"date": "Aug 18, 2016 - 2017",
			"sketch": "0.3.0",
			"commit": null
		},
		"0.3.3": {
			"date": "Aug 10, 2016 - 2017",
			"sketch": "0.3.0",
			"commit": null
		},
		"0.3.2": {
			"date": "Aug 4, 2016 - 2017",
			"sketch": "0.3.0",
			"commit": null
		},
		"0.3.1": {
			"date": "Jul 27, 2016 - 2017",
			"sketch": "0.3.0",
			"commit": null
		},
		"0.3.0": {
			"date": "Jul 20, 2016 - 2017",
			"sketch": "0.3.0",
			"commit": null
		},
		"0.2.10": {
			"date": "Jul 21, 2016 - 2017",
			"sketch": "0.2.5",
			"commit": null
		},
		"0.2.9": {
			"date": "Jul 17, 2016 - 2017",
			"sketch": "0.2.5",
			"commit": null
		},
		"0.2.8": {
			"date": "Jul 7, 2016 - 2017",
			"sketch": "0.2.5",
			"commit": null
		},
		"0.2.7": {
			"date": "Jun 30, 2016 - 2017",
			"sketch": "0.2.5",
			"commit": null
		},
		"0.2.6": {
			"date": "Jun 23, 2016 - 2017",
			"sketch": "0.2.5",
			"commit": null
		},
		"0.2.5": {
			"date": "Jun 16, 2016 - 2017",
			"sketch": "0.2.5",
			"commit": null
		},
		"0.2.4": {
			"date": "Jun 9, 2016 - 2017",
			"sketch": "0.2.5",
			"commit": null
		},
		"0.2.3": {
			"date": "Jun 2, 2016 - 2017",
			"sketch": "0.2.5",
			"commit": null
		}
	}
};

/***/ }),

/***/ 654:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__(47);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__news_component__ = __webpack_require__(438);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__releases_final_template_auto_generated_routes__ = __webpack_require__(657);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NewsRoutingModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var newsRoutes = [
    {
        path: "",
        component: __WEBPACK_IMPORTED_MODULE_2__news_component__["a" /* NewsComponent */],
        data: {
            bodyClass: "layout-news",
            browserTitle: "Releases"
        },
        children: __WEBPACK_IMPORTED_MODULE_3__releases_final_template_auto_generated_routes__["a" /* AUTO_GENERATED_ROUTES */]
    }
];
var NewsRoutingModule = (function () {
    function NewsRoutingModule() {
    }
    return NewsRoutingModule;
}());
NewsRoutingModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
        imports: [
            __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* RouterModule */].forChild(newsRoutes)
        ],
        exports: [
            __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* RouterModule */]
        ]
    })
], NewsRoutingModule);

//# sourceMappingURL=/Users/adityab/fork-website-clarity/src/news-routing.module.js.map

/***/ }),

/***/ 655:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export MAJORS */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MINORS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return PATCHES; });
/* harmony export (immutable) */ __webpack_exports__["c"] = compareReleases;
var RELEASES = __webpack_require__(441);
var MAJORS = [];
var MINORS = {};
var PATCHES = {};
organize();
sortAll();
function organize() {
    for (var releaseNumber in RELEASES.all) {
        var parts = releaseNumber.split(".");
        var major = parts[0];
        var minor = parts[0] + "." + parts[1];
        if (!MINORS[major]) {
            MAJORS.push(major);
            MINORS[major] = [];
        }
        if (!PATCHES[minor]) {
            MINORS[major].push(minor);
            PATCHES[minor] = [];
        }
        PATCHES[minor].push(releaseNumber);
    }
}
function sortAll() {
    MAJORS.sort(compareReleases);
    for (var major in MINORS) {
        MINORS[major].sort(compareReleases);
    }
    for (var minor in PATCHES) {
        PATCHES[minor].sort(compareReleases);
    }
}
function compareReleases(rA, rB) {
    var splitA = rA.split(".").map(function (part) { return parseInt(part, 10); });
    var splitB = rB.split(".").map(function (part) { return parseInt(part, 10); });
    for (var i in splitA) {
        if (splitA[i] < splitB[i]) {
            return 1;
        }
        else if (splitA[i] > splitB[i]) {
            return -1;
        }
    }
    return 0;
}
//# sourceMappingURL=/Users/adityab/fork-website-clarity/src/release-organizer.js.map

/***/ }),

/***/ 657:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AUTO_GENERATED_ROUTES; });
var AUTO_GENERATED_ROUTES = [
    {
        path: "0.9.2",
        data: {
            browserTitle: "0.9.2"
        }
    },
    {
        path: "0.9.1",
        data: {
            browserTitle: "0.9.1"
        }
    },
    {
        path: "0.9.0",
        data: {
            browserTitle: "0.9.0"
        }
    },
    {
        path: "0.8.16",
        data: {
            browserTitle: "0.8.16"
        }
    },
    {
        path: "0.8.15",
        data: {
            browserTitle: "0.8.15"
        }
    },
    {
        path: "0.8.14",
        data: {
            browserTitle: "0.8.14"
        }
    },
    {
        path: "0.8.13",
        data: {
            browserTitle: "0.8.13"
        }
    },
    {
        path: "0.8.12",
        data: {
            browserTitle: "0.8.12"
        }
    },
    {
        path: "0.8.11",
        data: {
            browserTitle: "0.8.11"
        }
    },
    {
        path: "0.8.10",
        data: {
            browserTitle: "0.8.10"
        }
    },
    {
        path: "0.8.9",
        data: {
            browserTitle: "0.8.9"
        }
    },
    {
        path: "0.8.8",
        data: {
            browserTitle: "0.8.8"
        }
    },
    {
        path: "0.8.7",
        data: {
            browserTitle: "0.8.7"
        }
    },
    {
        path: "0.8.6",
        data: {
            browserTitle: "0.8.6"
        }
    },
    {
        path: "0.8.5",
        data: {
            browserTitle: "0.8.5"
        }
    },
    {
        path: "0.8.4",
        data: {
            browserTitle: "0.8.4"
        }
    },
    {
        path: "0.8.3",
        data: {
            browserTitle: "0.8.3"
        }
    },
    {
        path: "0.8.2",
        data: {
            browserTitle: "0.8.2"
        }
    },
    {
        path: "0.8.1",
        data: {
            browserTitle: "0.8.1"
        }
    },
    {
        path: "0.8.0",
        data: {
            browserTitle: "0.8.0"
        }
    },
    {
        path: "0.7.6",
        data: {
            browserTitle: "0.7.6"
        }
    },
    {
        path: "0.7.5",
        data: {
            browserTitle: "0.7.5"
        }
    },
    {
        path: "0.7.4",
        data: {
            browserTitle: "0.7.4"
        }
    },
    {
        path: "0.7.3",
        data: {
            browserTitle: "0.7.3"
        }
    },
    {
        path: "0.7.2",
        data: {
            browserTitle: "0.7.2"
        }
    },
    {
        path: "0.7.1",
        data: {
            browserTitle: "0.7.1"
        }
    },
    {
        path: "0.7.0",
        data: {
            browserTitle: "0.7.0"
        }
    },
    {
        path: "0.6.4",
        data: {
            browserTitle: "0.6.4"
        }
    },
    {
        path: "0.6.3",
        data: {
            browserTitle: "0.6.3"
        }
    },
    {
        path: "0.6.2",
        data: {
            browserTitle: "0.6.2"
        }
    },
    {
        path: "0.6.1",
        data: {
            browserTitle: "0.6.1"
        }
    },
    {
        path: "0.6.0",
        data: {
            browserTitle: "0.6.0"
        }
    },
    {
        path: "0.5.6",
        data: {
            browserTitle: "0.5.6"
        }
    },
    {
        path: "0.5.5",
        data: {
            browserTitle: "0.5.5"
        }
    },
    {
        path: "0.5.4",
        data: {
            browserTitle: "0.5.4"
        }
    },
    {
        path: "0.5.3",
        data: {
            browserTitle: "0.5.3"
        }
    },
    {
        path: "0.5.2",
        data: {
            browserTitle: "0.5.2"
        }
    },
    {
        path: "0.5.1",
        data: {
            browserTitle: "0.5.1"
        }
    },
    {
        path: "0.5.0",
        data: {
            browserTitle: "0.5.0"
        }
    },
    {
        path: "0.4.3",
        data: {
            browserTitle: "0.4.3"
        }
    },
    {
        path: "0.4.2",
        data: {
            browserTitle: "0.4.2"
        }
    },
    {
        path: "0.4.1",
        data: {
            browserTitle: "0.4.1"
        }
    },
    {
        path: "0.4.0",
        data: {
            browserTitle: "0.4.0"
        }
    },
    {
        path: "0.3.6",
        data: {
            browserTitle: "0.3.6"
        }
    },
    {
        path: "0.3.5",
        data: {
            browserTitle: "0.3.5"
        }
    },
    {
        path: "0.3.4",
        data: {
            browserTitle: "0.3.4"
        }
    },
    {
        path: "0.3.3",
        data: {
            browserTitle: "0.3.3"
        }
    },
    {
        path: "0.3.2",
        data: {
            browserTitle: "0.3.2"
        }
    },
    {
        path: "0.3.1",
        data: {
            browserTitle: "0.3.1"
        }
    },
    {
        path: "0.3.0",
        data: {
            browserTitle: "0.3.0"
        }
    },
    {
        path: "0.2.10",
        data: {
            browserTitle: "0.2.10"
        }
    },
    {
        path: "0.2.9",
        data: {
            browserTitle: "0.2.9"
        }
    },
    {
        path: "0.2.8",
        data: {
            browserTitle: "0.2.8"
        }
    },
    {
        path: "0.2.7",
        data: {
            browserTitle: "0.2.7"
        }
    },
    {
        path: "0.2.6",
        data: {
            browserTitle: "0.2.6"
        }
    },
    {
        path: "0.2.5",
        data: {
            browserTitle: "0.2.5"
        }
    },
    {
        path: "0.2.4",
        data: {
            browserTitle: "0.2.4"
        }
    },
    {
        path: "0.2.3",
        data: {
            browserTitle: "0.2.3"
        }
    }
];
//# sourceMappingURL=/Users/adityab/fork-website-clarity/src/auto-generated-routes.js.map

/***/ }),

/***/ 869:
/***/ (function(module, exports) {

module.exports = "<div class=\"content-area\">\n    <section>\n        <!-- TODO: \"Current release\" on index -->\n        <h1>{{releaseNumber}} Changelog</h1>\n        <hr>\n\n        <div *ngIf=\"nbBreakingChanges > 0\" class=\"alert alert-danger breaking-change-alert\">\n            <div class=\"alert-item\">\n                <span class=\"alert-text\">This build introduces breaking change. Please read below.</span>\n            </div>\n        </div>\n\n        <div class=\"card card-block whats-new-summary\">\n            <div class=\"card-text summary-blocks\">\n                <div class=\"summary-block\">\n                    <p class=\"summary-block-title\">Breaking Changes</p>\n                    <p class=\"summary-block-details\">\n                        <span class=\"count\">{{nbBreakingChanges}}</span> Change{{ nbBreakingChanges == 1 ? \"\" : \"s\" }}\n                    </p>\n                </div>\n                <div class=\"summary-block\">\n                    <p class=\"summary-block-title\">Bugs</p>\n                    <p class=\"summary-block-details\">\n                        <span class=\"count\">{{nbBugFixes}}</span> Bug Fix{{ nbBugFixes == 1 ? \"\" : \"es\" }}\n                    </p>\n                </div>\n                <div *ngIf=\"nbNewComponents > 0\" class=\"summary-block\">\n                    <p class=\"summary-block-title\">New Components</p>\n                    <p class=\"summary-block-details\">\n                        <span class=\"count\">{{nbNewComponents}}</span> Component{{ nbNewComponents == 1 ? \"\" : \"s\" }}\n                    </p>\n                </div>\n                <div *ngIf=\"releaseDate\" class=\"summary-block\">\n                    <p class=\"summary-block-title\">Released</p>\n                    <p class=\"summary-block-details\">\n                        {{releaseDate}}\n                    </p>\n                </div>\n            </div>\n            <div class=\"card-divider\"></div>\n\n            <div class=\"group whats-new-mediablock\">\n                <img class=\"icon\" src=\"assets/images/logos/npm.svg\" />\n                <div class=\"description\">\n                    <p class=\"title\">NPM Packages</p>\n                    <p>\n                        <a href=\"https://www.npmjs.com/package/clarity-ui\" target=\"_blank\">clarity-ui</a><br>\n                        <a href=\"https://www.npmjs.com/package/clarity-angular\" target=\"_blank\">clarity-angular</a>\n                        <br *ngIf=\"hasIcons\">\n                        <a *ngIf=\"hasIcons\" href=\"https://www.npmjs.com/package/clarity-icons\" target=\"_blank\">clarity-icons</a>\n                    </p>\n                </div>\n            </div>\n            <div class=\"group whats-new-mediablock\">\n                <img class=\"icon\" src=\"assets/images/logos/sketch.svg\" />\n                <div class=\"description\">\n                    <p class=\"title\">Sketch template</p>\n                    <p>\n                        <!-- TODO: proper fallbacks? -->\n                        <a sketchTemplateLink [version]=\"sketchVersion\">Download the {{sketchVersion}} Sketch Template</a>\n                    </p>\n                </div>\n            </div>\n            <div *ngIf=\"hasGitHub\" class=\"group whats-new-mediablock\">\n                <img class=\"icon\" src=\"assets/images/logos/git.svg\" />\n                <div class=\"description\">\n                    <p class=\"title\">Git Change</p>\n                    <p>\n                        <a href=\"https://github.com/vmware/clarity/commit/{{commit}}\" target=\"_blank\">\n                            Direct link to the git change\n                        </a>\n                    </p>\n                </div>\n            </div>\n        </div>\n\n        <ng-container *ngIf=\"currentTemplate\">\n            <ng-template [ngTemplateOutlet]=\"currentTemplate\"></ng-template>\n        </ng-container>\n    </section>\n</div>\n<nav class=\"sidenav\" [clr-nav-level]=\"2\">\n    <section class=\"sidenav-content\">\n        <a class=\"nav-link\" routerLink=\"/news\" routerLinkActive=\"active\"\n           [routerLinkActiveOptions]=\"{exact:true}\">Current Release ({{current}})</a>\n\n        <section *ngFor=\"let minor of minors; let i = index\" class=\"nav-group collapsible\">\n            <input id=\"tab{{i}}\" type=\"checkbox\" checked>\n            <label for=\"tab{{i}}\">{{minor}} Changelogs</label>\n            <ul class=\"nav-list\">\n                <li *ngFor=\"let patch of patches[minor]\">\n                    <a class=\"nav-link\" [routerLink]=\"patch\" routerLinkActive=\"active\">{{patch}}</a>\n                </li>\n            </ul>\n        </section>\n    </section>\n</nav>\n\n<!---AUTO GENERATED TEMPLATES--->\n\n\n<!-- Release Template 0.9.2-->\n\n<ng-template [clrRelease]=\"'0.9.2'\">\n\n<h2>Highlights</h2>\n<ul class=\"list-unstyled whats-new-highlights\">\n    <li>\n        <h6>Expanded color palette</h6>\n        <p>\n            The Clarity color palette has been updated and expanded! The new color palette contains a broader range of\n            colors for use in applications, charts, and more. Recommendations and design guidelines about the new color\n            palette will be coming soon from the Clarity UX team.\n        </p>\n    </li>\n\n    <li>\n        <h6>Alt Next in Wizard</h6>\n        <p>\n            The <code class=\"clr-code\">clrWizardPreventDefaultNext</code> and\n            <code class=\"clr-code\">clrWizardPagePreventDefaultNext</code> boolean inputs have been added to Clarity’s\n            <code class=\"clr-code\">Wizard</code> and <code class=\"clr-code\">WizardPage</code> components.\n        </p>\n\n        <p>\n            The new inputs function similarly to how Clarity’s alt-cancel functionality works, only the alt-next\n            functionality overrides primary button actions (finish, next, and danger button clicks) at the page and\n            wizard levels.\n        </p>\n\n        <p>\n            For more information, check out our documentation for the Clarity wizard.\n        </p>\n    </li>\n\n    <li>\n        <h6>New icons for Clarity Icons</h6>\n        <p>\n            With 0.9.2, Clarity has introduced new icons such as\n            <code class=\"clr-code\">asterisk</code>,\n            <code class=\"clr-code\">bug</code>,\n            <code class=\"clr-code\">devices</code>,\n            <code class=\"clr-code\">layers</code>,\n            <code class=\"clr-code\">bundle</code> etc.\n        </p>\n    </li>\n\n    <li>\n        <h6>Spinners inside of Buttons</h6>\n        <p>\n            With 0.9.2, you can add Spinners inside of a Button to indicate loading by using the\n            <code class=\"clr-code\">clrLoading</code> directive on a Button.\n        </p>\n<pre>\n<code clr-code-highlight=\"language-html\">\n&lt;button [clrLoading]=&quot;loading&quot; class=&quot;btn&quot; (click)=&quot;activateLoading()&quot;&gt;Activate Loading&lt;/button&gt;</code></pre>\n    </li>\n</ul>\n\n<h2>Bug Fixes</h2>\n<ul class=\"list\">\n    <li bug-fix>Fixed <code class=\"clr-code\">clrWizardPageOnLoad</code> so that it emits whenever a page is made current.</li>\n    <li bug-fix>Updated unit tests for new wizard providers and increased test coverage.</li>\n    <li bug-fix>Updated padding in the wizard's header.</li>\n    <li bug-fix>Fixed the styling of <code class=\"clr-code\">select</code> elements with <code class=\"clr-code\">size</code> attribute.</li>\n    <li bug-fix>Updated the alert components' style to match with the latest visual spec.</li>\n    <li bug-fix>Fixed an issue with the datagrid placeholders and filters</li>\n</ul>\n\n</ng-template>\n\n\n\n<!-- Release Template 0.9.1-->\n\n<ng-template [clrRelease]=\"'0.9.1'\">\n\n<h2>Highlights</h2>\n<ul class=\"list-unstyled whats-new-highlights\">\n    <li>\n        <h6>\n            Datagrid column resizing\n        </h6>\n        Column resizing is enabled in Datagrid by default now. Users can hover over a separator line that divides adjacent\n        column headers and drag it to resize the column before the dragged separator. It's also possible to bind through the\n        <code class=\"clr-code\">(clrDgColumnResize)</code> directive on <code class=\"clr-code\">clr-dg-column</code> to listen to\n        the resizing event and receive its emitted value which will be the new width size of the column.\n    </li>\n    <li>\n        <h6>Flip Clarity Icons</h6>\n        With 0.9.1, Clarity Icons has introduced an ability to flip icons horizontally and vertically. Usage examples:\n<pre><code clr-code-highlight=\"language-html\" ngNonBindable>\n&#x3C;clr-icon shape=&#x22;floppy&#x22; flip=&#x22;horizontal&#x22;&#x3E;&#x3C;/clr-icon&#x3E;\n&#x3C;clr-icon shape=&#x22;floppy&#x22; flip=&#x22;vertical&#x22;&#x3E;&#x3C;/clr-icon&#x3E;\n</code></pre>\n    </li>\n    <li>\n        <h6>Sketch Template Updated</h6>\n        <a href=\"assets/images/sketchTemplates/Clarity-Template-0.9.0.sketch\" target=\"_blank\">The Clarity sketch template</a> has been updated with the latest changes in 0.9.0.\n    </li>\n    <li>\n        <h6>New Clarity wizard documentation</h6>\n        As the 0.9.0 Clarity wizard moves closer and closer to final, we have added extensive documentation\n        on its functionality and the different ways we have seen it used.\n        <a routerLink=\"/documentation/wizards\">Check out the new wizards documentation</a>!\n    </li>\n</ul>\n\n<h2>Other Changes</h2>\n<ul class=\"list\">\n    <li>Datagrid columns are resizable by dragging.</li>\n    <li>Action bar has been enabled in non-selectable Datagrids.</li>\n    <li>Clarity Icons has added new standard size icons for error, warning, success, and info icons.</li>\n</ul>\n\n<h2>Bug Fixes</h2>\n<ul class=\"list\">\n    <li bug-fix>Fixed a misalignment issue in Datagrid columns with dynamically loaded <code class=\"clr-code\">*clrDgItems</code>.</li>\n    <li bug-fix>Fixed an issue with Checkbox and Radio label alignment.</li>\n    <li bug-fix>Fixed an issue with the content wrapping in the Datagrid footer.</li>\n    <li bug-fix>Fixed an issue with Button Groups in cards.</li>\n</ul>\n\n</ng-template>\n\n\n\n<!-- Release Template 0.8.16-->\n\n<ng-template [clrRelease]=\"'0.8.16'\">\n\n<h2>Other Changes</h2>\n<ul class=\"list\">\n    <li>Datagrid action bar has been enabled in non-selectable Datagrids.</li>\n</ul>\n<h2>Bug Fixes</h2>\n<ul class=\"list\">\n    <li bug-fix>Fixed an issue with checkbox and radio label alignment.</li>\n    <li bug-fix>Fixed an issue with the content wrapping in the datagrid footer.</li>\n    <li bug-fix>Fixed an issue with button groups in cards.</li>\n</ul>\n\n</ng-template>\n\n\n\n<!-- Release Template 0.8.15-->\n\n<ng-template [clrRelease]=\"'0.8.15'\">\n\n<h2>Highlights</h2>\n<ul class=\"list-unstyled whats-new-highlights\">\n    <li>\n        <h6>Updates to the Datagrid Selection Behavior</h6>\n        <p>Datagrid selection is now preserved when:</p>\n        <ul class=\"list\">\n            <li>The user navigates to a different page in the datagrid</li>\n            <li>The data is updated, provided the smart iterator is used in the datagrid</li>\n        </ul>\n    </li>\n    <li>\n        <h6>Expandable rows for Datagrid</h6>\n        <p>\n            This feature can be used when a Datagrid row has additional data or details\n            that can be shown when interacting with the row. It supports many options, including:\n        </p>\n        <ul class=\"list\">\n            <li>Overall details for the row</li>\n            <li>Per-cell details</li>\n            <li>Replacing the original row rather than expand under it</li>\n            <li>Lazy-loading of details</li>\n        </ul>\n        <p>Here is an example of how to make a row expandable:</p>\n        <pre><code clr-code-highlight=\"language-html\" ngNonBindable>\n&lt;clr-dg-row *clrDgItems=&quot;let user of users&quot;&gt;\n    &lt;clr-dg-cell&gt;{{user.id}}&lt;/clr-dg-cell&gt;\n    &lt;clr-dg-cell&gt;{{user.name}}&lt;/clr-dg-cell&gt;\n\n    &lt;clr-dg-row-detail *clrIfExpanded&gt;\n        This user likes ducks.\n    &lt;/clr-dg-row-detail&gt;\n&lt;/clr-dg-row&gt;</code></pre>\n\n        <p>\n        If you include the same amount of <code class=\"clr-code\">&lt;clr-dg-cell&gt;</code>\n        elements in the row details as anywhere else in the datagrid, they will properly align\n        as a way to display details for each cell individually.\n        Details are only instantiated when the row becomes expanded, so they are naturally lazy loaded: just make any AJAX\n        call you need in the constructor or <code class=\"clr-code\">ngOnInit()</code> of the component you put inside the\n        <code class=\"clr-code\">*clrIfExpanded</code> structural directive.\n        To notify us that you want a spinner to be displayed while lazy loading, just include a\n        <code class=\"clr-code\">[clrLoading]=\"myLoadingBoolean\"</code> anywhere inside the details or even the row itself.\n        As long as <code class=\"clr-code\">myLoadingBoolean</code> is true, a spinner will be displayed.\n        </p>\n    </li>\n</ul>\n\n<h2>Bug Fixes</h2>\n<ul class=\"list\">\n    <li bug-fix>Fixed the click event listener for buttons inside of a button group.</li>\n    <li bug-fix>Fixed animation to value 0 in progress bars in webkit.</li>\n    <li bug-fix>Separators for clr-dg-column components have been correctly positioned.</li>\n</ul>\n\n</ng-template>\n\n\n\n<!-- Release Template 0.9.0-->\n\n<ng-template [clrRelease]=\"'0.9.0'\">\n\n<h2>Highlights</h2>\n<ul class=\"list-unstyled whats-new-highlights\">\n    <li breaking-change>\n        <h6>Upgrade to Angular 4</h6>\n        <p>\n            Clarity-angular is now compatible with Angular 4. Please note that Angular 4 requires TypeScript version 2.1 or newer. \n        </p>\n        <p>\n            For a full list of breaking changes for Angular 4, please refer to their <a href=\"https://github.com/angular/angular/blob/master/CHANGELOG.md\" target=\"_blank\">release notes</a>.\n        </p>\n        <p>\n            After upgrading to Clarity 0.9.0, please add the <code class=\"clr-code\">BrowserAnimationsModule</code> in your module in order for our components with animations to work properly. Similarly, if you have unit tests with those components, plaase add the <code class=\"clr-code\">NoopAnimationsModule</code> in your test module.\n        </p>\n        <p>\n            This is the minimal set of changes you have to make to use clarity-angular 0.9.0. Depending on your own project's dependencies, you might have to upgrade other packages.\n        </p>\n    </li>\n    <li>\n        <h6>Updates to the Datagrid Selection Behavior</h6>\n        <p>\n        Datagrid selection is now preserved when:\n        </p>\n        <ul class=\"list\">\n        <li>The user navigates to a different page in the datagrid</li>\n        <li>The data is updated, provided the smart iterator is used in the datagrid</li>\n        </ul>\n    </li>\n    <li>\n        <h6>Expandable rows for Datagrid</h6>\n        <p>\n            This feature can be used when a Datagrid row has additional data or details\n            that can be shown when interacting with the row. It supports many options, including:\n        </p>\n        <ul class=\"list\">\n            <li>Overall details for the row</li>\n            <li>Per-cell details</li>\n            <li>Replacing the original row rather than expand under it</li>\n            <li>Lazy-loading of details</li>\n        </ul>\n        <p>Here is an example of how to make a row expandable:</p>\n        <pre><code clr-code-highlight=\"language-html\" ngNonBindable>\n&lt;clr-dg-row *clrDgItems=&quot;let user of users&quot;&gt;\n    &lt;clr-dg-cell&gt;{{user.id}}&lt;/clr-dg-cell&gt;\n    &lt;clr-dg-cell&gt;{{user.name}}&lt;/clr-dg-cell&gt;\n\n    &lt;clr-dg-row-detail *clrIfExpanded&gt;\n        This user likes ducks.\n    &lt;/clr-dg-row-detail&gt;\n&lt;/clr-dg-row&gt;</code></pre>\n\n        <p>\n        If you include the same amount of <code class=\"clr-code\">&lt;clr-dg-cell&gt;</code>\n        elements in the row details as anywhere else in the datagrid, they will properly align\n        as a way to display details for each cell individually.\n        Details are only instantiated when the row becomes expanded, so they are naturally lazy loaded: just make any AJAX\n        call you need in the constructor or <code class=\"clr-code\">ngOnInit()</code> of the component you put inside the\n        <code class=\"clr-code\">*clrIfExpanded</code> structural directive.\n        To notify us that you want a spinner to be displayed while lazy loading, just include a\n        <code class=\"clr-code\">[clrLoading]=\"myLoadingBoolean\"</code> anywhere inside the details or even the row itself.\n        As long as <code class=\"clr-code\">myLoadingBoolean</code> is true, a spinner will be displayed.\n        </p>\n    </li>\n</ul>\n\n<h2>Introducing the new Clarity wizard!</h2>\n<ul class=\"list-unstyled whats-new-highlights\">\n    <li>\n        <h6>Clarity wizard (beta)</h6>\n        <p>\n            0.9.0 introduces the beta version of the new and improved wizard component for\n            Clarity Angular. This wizard component has been rebuilt from\n            the ground up with an eye towards preserving as much of the old\n            API as possible to limit breaking changes, learning curves,\n            and migration complexity.\n        </p>\n        <p>\n            The beta wizard gives our users early access to the new\n            wizard so they can gauge the impact of the changes on their\n            applications.\n        </p>\n\n        <p>&nbsp;</p>\n\n        <h6>Migrating from the old to the new wizard</h6>\n        <p>\n            Moving from a 0.8 wizard to a 0.9 wizard involves a few minor\n            steps in the host component’s HTML. For the most basic\n            implementations, this should be all that is required.\n        </p>\n        <p>\n            Advanced implementations of the 0.8 wizard may be impacted by\n            the deprecations and breaking changes listed below. Please\n            examine your own code for impact.\n        </p>\n\n        <p><b>Migration steps</b></p>\n\n        <ul class=\"list\">\n            <li>\n                The wizard title previously placed inside a <code\n                class=\"clr-code\">div.wizard-title</code> element must now\n                be placed within a <code class=\"clr-code\">clr-wizard-title</code>\n                element. This is a straight replace that requires no\n                additional code.\n            </li>\n            <li>\n                Each wizard must now contain a set of <code\n                class=\"clr-code\">clr-wizard-button</code> elements as a direct child\n                of the <code class=\"clr-code\">clr-wizard</code> element that offers \n                four buttons of the following types: cancel, previous, next, and\n                finish. This set constitutes the default button set that will be\n                used by each page in the wizard if they're not overridden at the\n                page level.\n            </li>\n            <li>\n                Each wizard page must contain a <code\n                class=\"clr-code\">&lt;ng-template pageTitle&gt;</code> element. This\n                element serves as both the page title as well as the text of the\n                nav element associated with the page. Optionally, a\n                <code class=\"clr-code\">&lt;ng-template pageNavTitle&gt;</code> element\n                can be included to give alternate nav text if the page title\n                is too long. If your 0.8 wizard has a <code\n                class=\"clr-code\">clr-wizard-step</code> title that is different\n                from your page title, then you should probably move the text in\n                your <code class=\"clr-code\">clr-wizard-step</code> to a\n                <code class=\"clr-code\">&lt;ng-template pageNavTitle&gt;</code> element\n                inside your <code class=\"clr-code\">clr-wizard-page</code>.\n            </li>\n            <li>\n                <code class=\"clr-code\">clr-wizard-step</code> elements are no longer\n                needed and should be removed.\n            </li>\n        </ul>\n\n        <p><b>0.8 wizard (before)</b></p>\n\n        <pre><code clr-code-highlight=\"language-html\">\n&lt;clr-wizard #wizard [(clrWizardOpen)]=\"open\"&gt;\n    &lt;div class=\"wizard-title\"&gt;Wizard Title&lt;/div&gt;\n\n    &lt;clr-wizard-step&gt;Step 1&lt;/clr-wizard-step&gt;\n    &lt;clr-wizard-step&gt;Step 2&lt;/clr-wizard-step&gt;\n    &lt;clr-wizard-step&gt;Step 3&lt;/clr-wizard-step&gt;\n\n    &lt;clr-wizard-page&gt;Content for step 1&lt;/clr-wizard-page&gt;\n    &lt;clr-wizard-page&gt;Content for step 2&lt;/clr-wizard-page&gt;\n    &lt;clr-wizard-page&gt;Content for step 3&lt;/clr-wizard-page&gt;\n&lt;/clr-wizard&gt;\n</code></pre>\n\n        <p><b>0.9 wizard (after)</b></p>\n\n        <pre><code clr-code-highlight=\"language-html\">\n&lt;clr-wizard #wizard [(clrWizardOpen)]=\"open\"&gt;\n    &lt;clr-wizard-title&gt;Wizard Title&lt;/clr-wizard-title&gt;\n\n    &lt;clr-wizard-button type=\"cancel\"&gt;Cancel&lt;/clr-wizard-button&gt;\n    &lt;clr-wizard-button type=\"previous\"&gt;Back&lt;/clr-wizard-button&gt;\n    &lt;clr-wizard-button type=\"next\"&gt;Next&lt;/clr-wizard-button&gt;\n    &lt;clr-wizard-button type=\"finish\"&gt;Finish&lt;/clr-wizard-button&gt;\n\n    &lt;clr-wizard-page&gt;\n        &lt;ng-template clrPageTitle&gt;Title for page 1&lt;/ng-template&gt;\n        &lt;ng-template clrPageNavTitle&gt;Step 1&lt;/ng-template&gt;\n        Content for step 1\n    &lt;/clr-wizard-page&gt;\n\n    &lt;clr-wizard-page&gt;\n        &lt;ng-template clrPageTitle&gt;Title for page 2&lt;/ng-template&gt;\n        &lt;ng-template clrPageNavTitle&gt;Step 2&lt;/ng-template&gt;\n        Content for step 2\n    &lt;/clr-wizard-page&gt;\n\n    &lt;clr-wizard-page&gt;\n        &lt;ng-template clrPageTitle&gt;Title for page 3&lt;/ng-template&gt;\n        &lt;ng-template clrPageNavTitle&gt;Step 3&lt;/ng-template&gt;\n        Content for step 3\n    &lt;/clr-wizard-page&gt;\n&lt;/clr-wizard&gt;\n</code></pre>\n\n        <p>&nbsp;</p>\n\n        <h6>Benefits of the new wizard</h6>\n        <p>\n            The new wizard offers several immediate benefits compared\n            to the 0.8 wizard.\n        </p>\n\n        <ul class=\"list\">\n            <li>\n                Now that users can define their own button sets, the\n                text inside of the buttons can say anything users\n                need them to say.\n            </li>\n            <li>\n                Because the text of our buttons is no longer hardcoded\n                inside the component code, button text can be localized\n                in your applications.\n            </li>\n            <li>\n                Previously the title of a <code \n                class=\"clr-code\">clr-wizard-page</code> relied on a very\n                specific and non-intuitive DOM and classname combination.\n                Wrapping this into a <code class=\"clr-code\">&lt;ng-template\n                clrPageTitle&gt;</code> makes it easier\n                to manage your DOM structure and allows one element\n                to reflect both the page title and the title in the nav.\n            </li>\n            <li>\n                The 0.8 wizard required that the <code\n                class=\"clr-code\">clr-wizard-step</code> elements be outside\n                of the <code class=\"clr-code\">clr-wizard-page</code> elements.\n                This meant that the order of your pages and nav elements was\n                dependent upon their order inside the wizard. It also introduced\n                a disconnect between the two which could easily lead to one or\n                the other being presented out of order. The new wizard wraps titles\n                inside of <code class=\"clr-code\">clr-wizard-page</code>\n                components, meaning all information about the pages is\n                encapsulated inside the host component.\n            </li>\n        </ul>\n\n        <p>&nbsp;</p>\n\n        <h6>Using the old wizard in 0.9.0</h6>\n        <p>\n             If you need time to update your old wizards to the new 0.9.0 wizards, \n             Clarity has you covered. All you need to do is \n             take your old declarations for wizards and wizard pages and change them\n             to <code class=\"clr-code\">clr-wizard-deprecated</code> and\n             <code class=\"clr-code\">clr-wizard-page-deprecated</code>.\n        </p>\n        <p>\n             The objects/classes have likewise been renamed to <code\n             class=\"clr-code\">WizardDeprecated</code> and <code\n             class=\"clr-code\">WizardPageDeprecated</code>, in the event your TypeScript\n             build or UMD complains.\n        </p>\n        <p>\n             No other changes are necessary to keep your old 0.8 wizards in 0.9.0.\n        </p>\n        <p>\n             But note that we are planning to completely remove the old wizards in\n             0.10.0.\n        </p>\n\n        <p>&nbsp;</p>\n\n        <h6>A note about IE10</h6>\n        <p>\n             At present, the new wizard will not work in IE10. There are known\n             issues with the new wizard in IE10 that we are waiting to resolved\n             until after the Clarity team has determined if it will continue\n             support for IE10 beyond 0.9.\n        </p>\n        <p>\n            For the time being, use the deprecated 0.8 wizard to continue IE10\n            support and please make sure to let the Clarity team know if\n            continued IE10 support is important for your product.\n        </p>\n    </li>\n</ul>\n\n<h2>Breaking changes</h2>\n<ul class=\"list-unstyled whats-new-highlights\">\n    <li breaking-change>\n        <h6>wizard.selectTab() has been removed</h6>\n        <p>\n             Depending on your use case, <code\n             class=\"clr-code\">wizard.goTo(pageId)</code> or <code\n             class=\"clr-code\">wizard.navService.setCurrentPage(pageObj)</code>\n             is preferred.\n        </p>\n        <p>\n            <code class=\"clr-code\">goTo(pageId)</code> checks if navigation is\n            allowed, based on the state of prior pages. <code\n            class=\"clr-code\">wizard.navService.setCurrentPage(pageObj)</code>\n            just performs navigation.\n        </p>\n    </li>\n    <li breaking-change>\n        <h6>wizard.skipTab() and wizard.unskipTab() have been removed</h6>\n        <p>\n             You can now hide and show pages in the wizard  by using <code\n             class=\"clr-code\">*ngIf</code> on your <code\n             class=\"clr-code\">clr-wizard-page</code> elements.\n        </p>\n    </li>\n    <li breaking-change>\n        <h6>wizard.wizardStepChildren has been removed</h6>\n        <p>\n             The <code class=\"clr-code\">wizardStepChildren</code> QueryList\n             is no longer necessary. You can update, hide, and manage the state\n             of your nav elements by navigating through and manipulating your pages.\n        </p>\n    </li>\n    <li breaking-change>\n        <h6>wizard.wizardPageChildren has been renamed</h6>\n        <p>\n             The <code class=\"clr-code\">wizardPageChildren</code> QueryList\n             is now just <code class=\"clr-code\">wizard.pages</code>.\n        </p>\n    </li>\n    <li breaking-change>\n        <h6>The clrWizardPageErrorFlag input has been removed</h6>\n        <p>\n             The <code class=\"clr-code\">clrWizardPageErrorFlag</code> input has been removed.\n             The previous implementation offered no functional advantages over\n             handling valid page state within a host component.\n        </p>\n    </li>\n    <li breaking-change>\n        <h6>clrWizardPageIsSkipped has been removed</h6>\n        <p>\n             The <code class=\"clr-code\">clrWizardPageIsSkipped</code> input has\n             been removed in favor of the use of <code class=\"clr-code\">ngIf</code>\n             to hide and show pages.\n        </p>\n    </li>\n    <li breaking-change>\n        <h6>clrWizardPageHiddenChange and clrWizardPageSkippedChange have been removed</h6>\n        <p>\n             The <code class=\"clr-code\">clrWizardPageSkippedChange</code>  and <code\n             class=\"clr-code\">clrWizardPageHiddenChange</code>  outputs have been removed\n             now that the improved DOM structure allows for encapsulation and the use of\n             <code class=\"clr-code\">ngIf</code> to hide and show both pages and  nav elements\n             together.\n        </p>\n    </li>\n    <li breaking-change>\n        <h6>The clr-wizard-step component has been removed</h6>\n        <p>\n            The wizard now handles its own stepnav items. There should be no need for users\n            to add or programmatically manipulate them outside of what they can do by\n            navigation or programmatically manipulating a wizard page.\n        </p>\n    </li>\n    <li breaking-change>\n        <code class=\"clr-code\">clrWizardOpenChanged</code> output has\n        been changed to <code class=\"clr-code\">clrWizardOpenChange</code> to\n        better support Angular's expectations with two-way binding.\n    </li>\n    <li breaking-change>\n        <code class=\"clr-code\">clrWizardPageNextDisabledChanged</code> output has\n        been changed to <code class=\"clr-code\">clrWizardPageNextDisabledChange</code> to\n        better support Angular's expectations with two-way binding.\n    </li>\n</ul>\n\n<h2>Other Breaking Changes</h2>\n<ul>\n    <li breaking-change>wizard.id has been removed</li>\n    <li breaking-change>WizardPage.title is now a TemplateRef and not a string</li>\n    <li breaking-change>WizardPage.hasProjectedTitleContent was removed because it was no\n        longer needed</li>\n</ul>\n\n<h2>Deprecations</h2>\n<ul>\n    <li>\n        The <code class=\"clr-code\">wizard.prev()</code> convenience function\n        has been deprecated. We recommend that <code\n        class=\"clr-code\">wizard.previous()</code> be used instead. <code\n        class=\"clr-code\">wizard.prev()</code> still works with the 0.9.0 wizard,\n        however. But support for it will be dropped in the future.\n    </li>\n</ul>\n\n<h2>Known Issues</h2>\n<p>The beta version of the wizard has the following known issues:</p>\n<ul>\n    <li>IE10 browser support</li>\n    <li>\n        An unpredictable conflict when there is an alt-cancel routine at\n        the wizard and page level.\n    </li>\n</ul>\n\n<h2>New Features</h2>\n<p>\n    The new wizard arrives with improved capabilities and new functionality.\n    While we are committed to providing as much documentation as we can, there is\n    no way that we could document all the features of the new wizard before the 0.9.0\n    release.\n</p>\n<p>\n     For undocumented features,\n     the best source of truth is the demo app within\n     the Clarity sourcecode. All new features are presented there for the time being\n     with demonstrations highlighting their use.\n</p>\n<p>\n      A quick rundown of features in the new wizard follows:\n</p>\n<ul>\n    <li>\n        A cornucopia of inputs, outputs, services, and convenience functions all accessible\n        to anyone adding a templateRef onto their <code class=\"clr-code\">clr-wizard</code>\n        declaration.\n    </li>\n    <li>\n         Button group overrides at the page level.\n    </li>\n    <li>\n         Custom buttons that can be assigned any action or routine.\n    </li>\n    <li>\n         Header actions in the title bar of the wizard.\n    </li>\n    <li>\n         A high-level way to subvert all wizard actions, allowing users to create their own\n         previous, next, finish, and cancel routines.\n    </li>\n    <li>\n        Reset functionality that can reset the navigation of the wizard to a pristine state.\n    </li>\n    <li>\n        A number of different navigational functions.\n    </li>\n    <li>\n        \"Ghost pages\" as in the initial design spec.\n    </li>\n    <li>\n        A static/inline version of the wizard.\n    </li>\n</ul>\n\n<h2>Bug Fixes</h2>\n<ul class=\"list\">\n    <li bug-fix>\n        Fixed the click event listener for buttons inside of a button group.\n    </li>\n    <li bug-fix>\n        Fixed animation to value 0 in progress bars in webkit.\n    </li>\n    <li bug-fix>\n        Separators for clr-dg-column components have been correctly positioned.\n    </li>\n</ul>\n\n<h2>Other changes</h2>\n<ul class=\"list\">\n    <li bug-fix>\n        Dropdown Items line-height has been updated to 30px on larger screens and 36px on smaller screens.\n    </li>\n</ul>\n\n</ng-template>\n\n\n\n<!-- Release Template 0.8.14-->\n\n<ng-template [clrRelease]=\"'0.8.14'\">\n\n<h2>Highlights</h2>\n<ul class=\"list-unstyled whats-new-highlights\">\n    <li new-component>\n        <h6>Button Groups</h6>\n        <p>Adds the Button Group component. A Button Group is a collection of Buttons aligned side by side with no\n            space between them. This can be used to create a collection of similar actions, to save space, or to respond\n            to different size containers.</p>\n        <p>Button Groups supports the following use cases:</p>\n        <ul class=\"list\">\n            <li>Mixing colored buttons for action differentiation</li>\n            <li>Adding dropdown menus for additional options</li>\n            <li>A responsive experience to handle smaller containers</li>\n            <li>Icon buttons</li>\n            <li>Checkbox and radio group selections</li>\n        </ul>\n        <p>Here is a basic example of Button Groups</p>\n\n<pre><code clr-code-highlight=\"language-html\">\n&lt;clr-button-group class=&quot;btn-primary&quot;&gt;\n    &lt;clr-button&gt;Add&lt;/clr-button&gt;\n    &lt;clr-button&gt;Edit&lt;/clr-button&gt;\n    &lt;clr-button [clrInMenu]=&quot;true&quot;&gt;Download&lt;/clr-button&gt;\n    &lt;clr-button [clrInMenu]=&quot;true&quot;&gt;Move&lt;/clr-button&gt;\n    &lt;clr-button [clrInMenu]=&quot;true&quot;&gt;Delete&lt;/clr-button&gt;\n&lt;/clr-button-group&gt;\n</code></pre>\n\n    </li>\n</ul>\n\n</ng-template>\n\n\n\n<!-- Release Template 0.8.13-->\n\n<ng-template [clrRelease]=\"'0.8.13'\">\n\n<h2>Highlights</h2>\n<ul class=\"list-unstyled whats-new-highlights\">\n    <li>\n        <h6>Tooltip component</h6>\n        <p>Use the new Angular component to prevent the tooltip content from clipping.</p>\n    </li>\n    <li>\n        <h6>Datagrid sorting order</h6>\n        <p>Now datagrid column can be sorted in ascending or descending order.</p>\n    </li>\n</ul>\n\n<h2>Other Changes</h2>\n<ul class=\"list\">\n    <li>\n        Added styles for &lt;select multiple&gt;..&lt;/select&gt;\n    </li>\n    <li>\n        Added CSS Regression Tests for Progress Bars\n    </li>\n</ul>\n\n<h2>Bug Fixes</h2>\n<ul class=\"list\">\n    <li bug-fix>\n        Dropdown component is updated to not clip when used inside other components (such as modal).\n    </li>\n</ul>\n\n</ng-template>\n\n\n\n<!-- Release Template 0.8.11-->\n\n<ng-template [clrRelease]=\"'0.8.11'\">\n\n<h2>Highlights</h2>\n<ul class=\"list-unstyled whats-new-highlights\">\n    <li>\n        <h6>\n            New icons for Clarity Icons\n        </h6>\n        <p>\n            With 0.8.11, Clarity has introduced new icons such as id-badge, tablet, credit-card, certificate etc.\n        </p>\n    </li>\n</ul>\n\n<h2>Bug Fixes</h2>\n<ul class=\"list\">\n    <li bug-fix>\n        Fixed an import issue with SASS imports.\n        This fix reduces the size from 770KB to around 357KB.\n        We are looking to optimize the CSS further.\n    </li>\n    <li bug-fix>\n        Fixed an overflow bug with responsive layout on Firefox\n    </li>\n    <li bug-fix>\n        Fixed an issue with the grid gutter width.\n    </li>\n    <li bug-fix>\n        Fixed the regression issue introduced when adding two-way binding to datagrid filters. This fix unwraps data\n        returned from DatagridPropertyStringFilter and testing around it.\n    </li>\n</ul>\n</ng-template>\n\n\n\n<!-- Release Template 0.8.12-->\n\n<ng-template [clrRelease]=\"'0.8.12'\">\n\n<h2>Bug Fixes</h2>\n<ul class=\"list\">\n    <li bug-fix>\n        Fixed an issue with progress bars in cards\n    </li>\n    <li bug-fix>\n        Fixed an issue with the datagrid filter positioning\n    </li>\n</ul>\n</ng-template>\n\n\n\n<!-- Release Template 0.8.10-->\n\n<ng-template [clrRelease]=\"'0.8.10'\">\n\n<h2>Highlights</h2>\n<ul class=\"list-unstyled whats-new-highlights\">\n    <li>\n        <h6>\n            New icons for Clarity Icons\n        </h6>\n        <p>\n            With 0.8.10, Clarity has introduced new icons such as network-globe, network-switch, flow-chart, chat-bubble, etc.\n        </p>\n\n    </li>\n    <li>\n        <h6>New Datagrid styles</h6>\n\n        <p>\n            Our Datagrid styles changed from a table layout to a flexbox one, without any changes required for existing\n            integrations. If you were reaching deep into the internal datagrid template to customize its styles (which\n            we do\n            not recommend), you are at risk of these customizations not working anymore.\n        </p>\n        <p>\n            These new styles will allow us to implement new advanced features for Datagrid, especially animated ones.\n            Watch out for expandable rows, they are coming in very soon!\n            In the meantime, these new styles already allow two very useful additional features out-of-the-box:\n        </p>\n    </li>\n    <li>\n        <h6>Datagrid scrolling</h6>\n        <p>\n            Datagrids can now scroll easily if you set their height. The header and footer stay fixed, only the body\n            containing the rows scrolls. It's as simple as setting the height of the <code>&lt;clr-datagrid&gt;</code>\n            element to a specific value, or making it 100% to fill its container:\n        </p>\n<pre><code clr-code-highlight=\"language-html\">\n&lt;div id=&quot;my-container&quot;&gt;\n    &lt;clr-datagrid&gt;...&lt;/clr-datagrid&gt;\n&lt;/div&gt;\n</code></pre>\n\n<pre><code clr-code-highlight=\"language-css\">\n#my-container clr-datagrid {{'{'}}\n    height: 100%;\n{{'}'}}\n</code></pre>\n    </li>\n    <li>\n        Specifying a header's width in any way, including through CSS with a simple class,\n        locks the corresponding column size and makes it non-flexible.\n        No need to duplicate that information on the cells, just the header is enough.\n    </li>\n</ul>\n\n<h2>Bug Fixes</h2>\n<ul class=\"list\">\n    <li bug-fix>\n        Fixed the padding of form input fields on <code>xs</code> and <code>sm</code> breakpoints.\n    </li>\n    <li bug-fix>\n        Fixed the error related to Change Detection in <code>DatagridActionOverflow</code>.\n    </li>\n    <li bug-fix>\n        Renamed the files on which the form styles depends to fix the SASS build issue.\n    </li>\n</ul>\n\n<h2>Other Changes</h2>\n<ul class=\"list\">\n    <li>Added information on two-way binding workaround for <code>clrWizardOpen</code> to the wizard documentation.</li>\n    <li>Cleaned up sidenav's collapsible item to not rely on position property.</li>\n    <li>Added Clarity style to radio buttons in datagrid.</li>\n</ul>\n</ng-template>\n\n\n\n<!-- Release Template 0.8.9-->\n\n<ng-template [clrRelease]=\"'0.8.9'\">\n\n<h2>Highlights</h2>\n<ul class=\"list-unstyled whats-new-highlights\">\n    <li>\n        <h6>Datagrid: Two-way binding and default values on filtered state</h6>\n        <p>Added two way binding to filter values for both <code>&lt;clr-dg-column&gt;</code>\n            and <code>&lt;dclr-dg-string-filter&gt;</code>. They now offer the\n            <code>[(clrFilterValue)]</code> property to bind to.</p>\n    </li>\n    <li>\n        <h6>Datagrid: Two-way binding on the sorted state of a column</h6>\n        <p>\n            <code>&lt;clr-dg-column&gt;</code> now offers a <code>[(clrDgSorted)]</code>\n            two-way binding to dynamically force a column to be sorted or not,\n            typically on initialization. It also lets consumers know at all\n            time if a column is sorted or not.\n        </p>\n    </li>\n    <li>\n        <h6>Datagrid: Single selection</h6>\n        <p>Added an option for single selection mode in datagrid.\n            Use <code>[(clrDgSingleSelected)]</code> to\n            use this feature.\n        </p>\n    </li>\n</ul>\n\n<h2>Other Changes</h2>\n<ul class=\"list\">\n    <li>\n        Moved component styles for form fields from <code>forms.clarity.scss</code>\n        into their own separate files.\n    </li>\n</ul>\n\n<h2>Bug Fixes</h2>\n<ul class=\"list\">\n    <li bug-fix>Updated datagrid component to support AOT.</li>\n</ul>\n\n</ng-template>\n\n\n\n<!-- Release Template 0.8.8-->\n\n<ng-template [clrRelease]=\"'0.8.8'\">\n\n<h2>Highlights</h2>\n<ul class=\"list-unstyled whats-new-highlights\">\n    <li>\n        <h6>New icons for Clarity Icons</h6>\n        <p>With 0.8.8, Clarity has introduced new icons such as compass, key, target, wrench, battery, terminal, code,\n            etc.</p>\n    </li>\n</ul>\n\n<h2>Bug Fixes</h2>\n<ul class=\"list\">\n    <li bug-fix>Icon bug fixes</li>\n    <li bug-fix>Fixed Modal to wait for animation to emit the close event</li>\n    <li bug-fix>Fixed datagrid property comparator to handle null values</li>\n</ul>\n\n<h2>Other Changes</h2>\n<ul class=\"list\">\n    <li>Removed overwrite.scss from main.scss</li>\n    <li>Switched the <code>.content-area</code> scroll to only appear when the content overflows</li>\n</ul>\n\n</ng-template>\n\n\n\n<!-- Release Template 0.8.6-->\n\n<ng-template [clrRelease]=\"'0.8.6'\">\n\n<h2>Highlights</h2>\n<ul class=\"list-unstyled whats-new-highlights\">\n    <li>\n        <h6>Designing with Clarity Icons</h6>\n        <p>\n            Now you can download all icons as SVG files in one directory to use in designs.\n            Make sure to check our <a routerLink=\"/documentation/iconography\">Iconography</a> page often as we're constantly adding new icons to our library.\n        </p>\n    </li>\n</ul>\n\n<h2>Bug Fixes</h2>\n<ul class=\"list\">\n    <li bug-fix>Fixed an issue with the base64 encoding of Metropolis semi-bold.</li>\n    <li bug-fix>Made Datagrid scrollable if the content is too wide.</li>\n</ul>\n\n</ng-template>\n\n\n\n<!-- Release Template 0.8.7-->\n\n<ng-template [clrRelease]=\"'0.8.7'\">\n\n<h2>Highlights</h2>\n<ul class=\"list-unstyled whats-new-highlights\">\n    <li>\n        <h6>Single row action in datagrid</h6>\n        <p>Ability to add clickable action overflow menu to each row, in both selectable or non-selectable datagrids.</p>\n    </li>\n\n    <li>\n        <h6>Batch action menu</h6>\n        <p>Option to display batch action options on top of the datagrid for selected rows.</p>\n    </li>\n\n    <li>\n        <h6>New icons for Clarity Icons</h6>\n        <p>With 0.8.7, Clarity has introduced new icons such as clipboard, firewall, list, network, redo, undo, etc.</p>\n    </li>\n</ul>\n\n<h2>Other Changes</h2>\n<ul class=\"list\">\n    <li>\n        Added keyboard support for accessing Tooltips\n    </li>\n    <li>\n        Added a utility class called <code>.u-main-container</code> which can be used when the <code>.subnav</code> is optional\n        on some pages.\n    </li>\n</ul>\n\n</ng-template>\n\n\n\n<!-- Release Template 0.8.5-->\n\n<ng-template [clrRelease]=\"'0.8.5'\">\n\n<h2>Highlights</h2>\n<ul class=\"list-unstyled whats-new-highlights\">\n    <li>\n        <h6>New icons for Clarity Icons</h6>\n        <p>\n            With 0.8.5, Clarity has introduced new icons such as\n            <code>tags</code>, <code>clock</code>, <code>floppy</code>,\n            <code>ellipses-vertical</code>, <code>ellipses-horizontal</code>,\n            and <code>bank</code>.\n        </p>\n    </li>\n</ul>\n\n<h2>Bug Fixes</h2>\n<ul class=\"list\">\n    <li bug-fix>Fixed an issue with icon colors</li>\n    <li bug-fix>Removed active style for focused anchor tag.</li>\n    <li bug-fix>Renamed a Tree CSS regression test to fix the Windows directory name issue.</li>\n</ul>\n\n<h2>Other Changes</h2>\n<ul class=\"list\">\n    <li>\n        Added Unit Tests for Clarity Icons.\n    </li>\n    <li>\n        Exposed a method to allow manual refresh of datagrids.\n    </li>\n    <li>\n        Updated .btn font-weight to 500\n    </li>\n    <li>\n        Increased contrast of cards\n    </li>\n</ul>\n</ng-template>\n\n\n\n<!-- Release Template 0.8.4-->\n\n<ng-template [clrRelease]=\"'0.8.4'\">\n\n<h2>Highlights</h2>\n<ul class=\"list-unstyled whats-new-highlights\">\n    <li new-component>\n        <h6>New Component: Tree View</h6>\n        <p>\n            Clarity now provides an Angular Tree View component.\n            There are three main types of trees: Basic Tree, Basic Tree\n            with Icons, and Checkbox Tree. Tree supports features like\n            dynamic tree generation, lazy loading of tree nodes, selectable\n            tree nodes, pre-populating a tree etc. For more details, refer to the\n            <a routerLink=\"/documentation/tree-view\">\n                Tree Documentation\n            </a>.\n        </p>\n        <p>\n            <b>Basic Tree Example</b>\n        </p>\n        <pre><code clr-code-highlight=\"language-html\">\n        &lt;clr-tree-node&gt;\n            &lt;b&gt;Office Locations&lt;/b&gt;\n                &lt;clr-tree-node&gt;\n                    USA\n                    &lt;clr-tree-node&gt;Palo Alto, CA (Headquarters)&lt;/clr-tree-node&gt;\n                    &lt;clr-tree-node&gt;Seattle, WA&lt;/clr-tree-node&gt;\n                    &lt;clr-tree-node&gt;Austin, TX&lt;/clr-tree-node&gt;\n                &lt;/clr-tree-node&gt;\n            &lt;clr-tree-node&gt;\n                UK\n                &lt;clr-tree-node&gt;\n                    London\n                &lt;/clr-tree-node&gt;\n            &lt;/clr-tree-node&gt;\n            &lt;clr-tree-node&gt;\n                India\n                &lt;clr-tree-node&gt;Bangalore, KA&lt;/clr-tree-node&gt;\n                &lt;clr-tree-node&gt;Pune, MH&lt;/clr-tree-node&gt;\n            &lt;/clr-tree-node&gt;\n        &lt;/clr-tree-node&gt;\n        </code></pre>\n    </li>\n    <li>\n        <h6>New icons for Clarity Icons</h6>\n        <p>\n            With 0.8.4, Clarity has introduced many new icons including icons\n            that are requested by our users such as\n            <code>tag</code>, <code>help</code>, <code>plus-circle</code>, etc\n        </p>\n    </li>\n</ul>\n\n<h2>Bug Fixes</h2>\n<ul class=\"list\">\n    <li bug-fix>Fixed an issue with the Header Overflow Trigger alignment.</li>\n    <li bug-fix>Removed active style for focused anchor tag.</li>\n</ul>\n\n<h2>Other Changes</h2>\n<ul class=\"list\">\n    <li>\n        Support manual selection of Datagrid row.\n    </li>\n    <li>\n        Updated the documentation for Clarity checkboxes.\n    </li>\n    <li>\n        Added Unit Tests for Clarity Icons.\n    </li>\n    <li>\n        Optimized RxJS imports.\n    </li>\n</ul>\n</ng-template>\n\n\n\n<!-- Release Template 0.8.3-->\n\n<ng-template [clrRelease]=\"'0.8.3'\">\n\n<h2>Highlights</h2>\n<ul class=\"list-unstyled whats-new-highlights\">\n    <li>\n        <h6>Separated Clarity Icons into multiple files</h6>\n        <p>As the Clarity Icons package gains more and more icons, it's not ideal for users to load them all\n            because all of them are bundled into a single JS file, clarity-icons.min.js. Thus, we've divided our\n            Clarity Icons shapes into four different categories: Core, Basic, Social, and Technology. Each of\n            these categories has its individual file (core-shapes.js, basic-shapes.js, social-shapes.js, and\n            technology-shapes.js) so that now users could load only the group of shapes they need to use after\n            loading clarity-icons-lite.umd.js, which is the light version of clarity-icons.min.js. For\n            example:</p>\n        <pre>\n        <code clr-code-highlight=\"language-html\">\n        &lt;script src=&quot;path/to/node_modules/clarity-icons/clarity-icons-lite.umd.js&quot;&gt;&lt;/script&gt;\n        &lt;script src=&quot;path/to/node_modules/clarity-icons/shapes/social-shapes.umd.js&quot;&gt;&lt;/script&gt;</code></pre>\n        <p>\n            The typescript equivalent of the code above is here:\n        </p>\n        <pre>\n        <code clr-code-highlight=\"language-typescript\">\n        import \"clarity-icons\"\n        import \"clarity-icons/shapes/social-shapes\"</code></pre>\n        <p>\n            Just one more thing to note here is that by default clarity-icons-lite.umd.js includes Core\n            shapes.\n        </p>\n    </li>\n    <li>\n        <h6>Sketch Template</h6>\n        <p>\n            The Sketch Template for Clarity v0.8.2 has been released. You can download the\n            Sketch Template\n            <a sketchTemplateLink version=\"0.8.2\">here</a>\n        </p>\n    </li>\n</ul>\n\n<h2>Other Changes</h2>\n<ul class=\"list\">\n    <li>\n        Adjusted wizard styles to accommodate long titles.\n    </li>\n</ul>\n</ng-template>\n\n\n\n<!-- Release Template 0.8.1-->\n\n<ng-template [clrRelease]=\"'0.8.1'\">\n\n<h2>Highlights</h2>\n<ul class=\"list-unstyled whats-new-highlights\">\n    <li>\n        <h6>Created a new Plunkr template for Clarity 0.8.x</h6>\n        <p>\n            Now that Clarity supports aot, the plunkr has been updated so that SystemJS can load clarity from the clarity-angular.umd.js file. The template is <a target=\"_blank\" href=\"https://plnkr.co/edit/8TwwdL?p=preview\">here</a>.\n        </p>\n    </li>\n    <li>\n        <h6>Added style for input types: tel and date</h6>\n        <p>\n            This fixes an issue filed for inputs that are of type tel or date where they did not conform to the Clarity visual style that other text inputs do.\n        </p>\n    </li>\n    <li>\n        <h6>Retrieve Clarity Icon templates through the <code>get()</code> method of ClarityIcons API</h6>\n        <p>You can now retrieve all Clarity Icon shape templates through <code>ClarityIcons.get()</code> method. Or if you want to retrieve the template of a particular shape, you can pass the shape name as an argument like <code>ClarityIcons.get(\"home\")</code>.</p>\n    </li>\n</ul>\n\n<h2>Bug Fixes</h2>\n<ul class=\"list\">\n    <li bug-fix>Fixed Datagrid's <code>*clrDgItems</code> to account for <a target=\"_blank\" href=\"https://github.com/angular/angular/issues/13641\">a breaking change introduced in Angular 2.4.1</a>.</li>\n    <li bug-fix>Fixed path issue on user/groups icon that caused outlined path to appear solid.</li>\n    <li bug-fix>Fixed website analytics to work with SPA.</li>\n</ul>\n\n<h2>Other Changes</h2>\n<ul class=\"list\">\n    <li>Updated coding guidelines with <code>clr-</code> prefix guidelines.</li>\n    <li>Added proper exporting for Stack View components.</li>\n</ul>\n</ng-template>\n\n\n\n<!-- Release Template 0.8.2-->\n\n<ng-template [clrRelease]=\"'0.8.2'\">\n\n<h2>Highlights</h2>\n<ul class=\"list-unstyled whats-new-highlights\">\n    <li>\n        <h6>Use ClarityIcons API in Angular components</h6>\n        <p>\n            You can now import and use ClarityIcons API in your Angular components:\n        </p>\n        <pre><code clr-code-highlight=\"language-typescript\">\nimport {{'{'}} ClarityIcons {{'}'}} from \"clarity-icons\"\n</code></pre>\n    </li>\n</ul>\n\n<h2>Bug Fixes</h2>\n<ul class=\"list\">\n    <li>Fixed the issue with input width inside of <code>.tooltip-validation</code> in login forms.</li>\n    <li>Fixed an issue with grids showing horizontal scrolling inside of modals.</li>\n    <li>Fixed the EventEmitter for the checked and indeterminate state in the internal angular checkbox component used in Datagrids and Trees.</li>\n    <li>Update the plunker link to work with 0.8.x clarity and created a plunker tempalte for the previous version of Clarity (0.7.6).</li>\n    <li>Added public inputs/outputs for dropdowns and checkboxes (Fixes error when compiling for AOT).</li>\n</ul>\n\n<h2>Other Changes</h2>\n<ul class=\"list\">\n    <li>Styles for wizards were updated to more closely match visual design specs.</li>\n    <li>Changed modal documentation to use new layout on website.</li>\n    <li>Added a simple app within the Clarity project to test AoT compilation with npm package candidates.</li>\n    <li>The close buttons on modals, alerts, wizards, and the datagrid have been changed to use ClarityIcons. The old method of using the <code>&lt;span&gt;&amp;times;&lt;/span&gt;</code> element has been deprecated and will be removed in 0.9. It is still supported in 0.8, however.</li>\n    <li>The warning color for icons changed to <code>#FAC400</code>.</li>\n</ul>\n</ng-template>\n\n\n\n<!-- Release Template 0.7.6-->\n\n<ng-template [clrRelease]=\"'0.7.6'\">\n\n<h2>Bug Fixes</h2>\n<ul class=\"list\">\n    <li bug-fix>[ui] Backport issue #304 - adds style for input types: tel, date</li>\n</ul>\n</ng-template>\n\n\n\n<!-- Release Template 0.8.0-->\n\n<ng-template [clrRelease]=\"'0.8.0'\">\n\n<h2>Highlights</h2>\n<ul class=\"list-unstyled whats-new-highlights\">\n    <li>\n        <h6>clarity-angular is AoT ready</h6>\n        <p>\n            Clarity-Angular now supports\n            <a href=\"https://angular.io/docs/ts/latest/cookbook/aot-compiler.html\">Ahead-of-Time (AoT)\n            compilation</a>. Starting with 0.8.0, the clarity-angular npm package contains the files in es5 es2015 format that can be compiled with ngc compiler. In addition, the package contains clarity-angular.umd.js file. If your application\n            is setup using systemJS, please update your systemJS configuration to point to the clarity-angular.umd.js file as shown in the\n            <a href=\"https://github.com/vmware/clarity/blob/master/README.md\">README</a>.\n        </p>\n    </li>\n\n    <li>\n        <h6>ClarityIcons API released</h6>\n        <p>\n            As part of 0.8.0, we have created a publically accessible API for customizing the Clarity Icons library in your application. At a high level, `ClarityIcons` is now a namespace off of the browser `window` object. More documentation is coming soon! So make\n            sure to keep an eye on our <a routerLink=\"/documentation/iconography\">documentation</a>.\n        </p>\n    </li>\n    <li>\n        <h6>Adding your own icons to ClarityIcons</h6>\n        <p>\n            Using the newly released ClarityIcons API, you can now add your own icons to the publically available ClarityIcons architecture. Use the following call to add your icon to our library in your application:\n        </p>\n        <pre><code clr-code-highlight=\"language-typescript\">\nClarityIcons.add({{'{'}}\"shapeNameGoesHere\": &quot;&lt;svg ... &gt;[your SVG code goes here]&lt;/svg&gt;&quot;{{'}'}});\n</code></pre>\n        <p>\n            This API method will assign your SVG markup to the named shape you sent it. It can then be retrieved like in your application like any other icon in the ClarityIcons library.\n        </p>\n        <pre><code clr-code-highlight=\"language-typescript\">\n&lt;clr-icon shape=&quot;shapeNameGoesHere&quot;&gt;&lt;/clr-icon&gt;\n</code></pre>\n    </li>\n    <li>\n        <h6>Creating custom aliases for ClarityIcons</h6>\n        <p>\n            You can now create aliases for the icons in your application with a single API call:\n        </p>\n        <pre><code clr-code-highlight=\"language-typescript\">\nClarityIcons.alias({{'{'}}\"bell\": [\"alarm\", \"oh-noehz\"]{{'}'}});\n</code></pre>\n        <p>\n            The above alias method call will assign \"alarm\" and \"oh-noehz\" names to the existing \"bell\" icon shape. Now you can use the \"bell\" icon with any of the new names you have assigned it.\n        </p>\n        <pre><code clr-code-highlight=\"language-html\">\n&lt;clr-icon shape=&quot;bell&quot;&gt;&lt;/clr-icon&gt;\n&lt;clr-icon shape=&quot;alarm&quot;&gt;&lt;/clr-icon&gt;\n&lt;clr-icon shape=&quot;oh-noehz&quot;&gt;&lt;/clr-icon&gt;\n</code></pre>\n    </li>\n    <li>\n        <h6>Added new icons in Clarity Icons</h6>\n        <p>\n            Clarity Icons now includes new icon shapes such as\n            <code class=\"clr-code\">half-star</code>, <code class=\"clr-code\">circle-check</code>, and <code class=\"clr-code\">storage</code>.\n        </p>\n    </li>\n\n    <li>\n        <h6>Implemented variant icons for existing icon set</h6>\n        <p>The architecture introduced in 0.7.5 to allow for solid, badged, and alerted icon variants has been extended to all applicable icons in Clarity.</p>\n        <p>Use the following classnames with your <code class=\"clr-code\">clr-icon</code> elements.</p>\n        <pre><code clr-code-highlight=\"language-html\">\n&lt;clr-icon shape=&quot;...&quot;&gt;&lt;/clr-icon&gt;\n&lt;clr-icon shape=&quot;...&quot; class=&quot;has-badge&quot;&gt;&lt;/clr-icon&gt;\n&lt;clr-icon shape=&quot;...&quot; class=&quot;has-badge--success&quot;&gt;&lt;/clr-icon&gt;\n&lt;clr-icon shape=&quot;...&quot; class=&quot;has-badge--error&quot;&gt;&lt;/clr-icon&gt;\n&lt;clr-icon shape=&quot;...&quot; class=&quot;has-badge--info&quot;&gt;&lt;/clr-icon&gt;\n&lt;clr-icon shape=&quot;...&quot; class=&quot;has-alert&quot;&gt;&lt;/clr-icon&gt;\n&lt;clr-icon shape=&quot;...&quot; class=&quot;is-solid&quot;&gt;&lt;/clr-icon&gt;\n&lt;clr-icon shape=&quot;...&quot; class=&quot;is-solid has-badge--success&quot;&gt;&lt;/clr-icon&gt;\n&lt;clr-icon shape=&quot;...&quot; class=&quot;is-solid has-badge--error&quot;&gt;&lt;/clr-icon&gt;\n&lt;clr-icon shape=&quot;...&quot; class=&quot;is-solid has-badge--info&quot;&gt;&lt;/clr-icon&gt;\n&lt;clr-icon shape=&quot;...&quot; class=&quot;is-solid has-alert&quot;&gt;&lt;/clr-icon&gt;\n</code></pre>\n        <p>Check out our <a routerLink=\"/documentation/iconography\">icon documentation</a> for more.</p>\n    </li>\n\n\n    <li breaking-change>\n        <h6>Added forRoot() and forChild() to ClarityModule</h6>\n        <p>\n            Added <code class=\"clr-code\">forRoot()</code> and\n            <code class=\"clr-code\">forChild()</code> methods on <code class=\"clr-code\">ClarityModule</code> to prevent reimport of services in lazy loaded feature modules. Click\n            <a href=\"https://angular.io/docs/ts/latest/cookbook/ngmodule-faq.html#!#!23q-for-root\">here</a> for more information. Clarity Module should now be imported as follows:\n        </p>\n        <pre><code clr-code-highlight=\"language-typescript\">\nimport {{ '{' }} NgModule {{ '}' }} from '@angular/core';\nimport {{ '{' }} BrowserModule {{ '}' }} from '@angular/platform-browser';\nimport {{ '{' }} ClarityModule {{ '}' }} from 'clarity-angular';\nimport {{ '{' }} AppComponent {{ '}' }} from './app.component';\n\n@NgModule({{ '{' }}\n    imports: [\n        BrowserModule,\n        ClarityModule.forRoot(),\n        ....\n        ],\n        declarations: [ AppComponent ],\n        bootstrap: [ AppComponent ]\n{{ '}' }})\nexport class AppModule {{ '{' }}    {{ '}' }}\n</code></pre>\n    </li>\n</ul>\n\n<h2>Bug Fixes</h2>\n<ul class=\"list\">\n    <li bug-fix>\n        Upgraded Clarity font to Metropolis Release 8 and removed subsetting to support latin extended characters.\n    </li>\n</ul>\n\n<h2>Other Changes</h2>\n<ul>\n    <li>Added Icon Buttons Demo to the documentation</li>\n</ul>\n\n<h2>Deprecations</h2>\n<ul>\n    <li breaking-change>\n        Following card classes are no longer supported:\n        <ul>\n            <li><code class=\"clr-code\">.card-subtitle</code></li>\n            <li><code class=\"clr-code\">.group</code></li>\n            <li><code class=\"clr-code\">.icon</code></li>\n            <li><code class=\"clr-code\">.description</code></li>\n            <li><code class=\"clr-code\">.title</code></li>\n            <li><code class=\"clr-code\">.card-link</code></li>\n            <li><code class=\"clr-code\">.card-overflow-menu</code></li>\n        </ul>\n    </li>\n\n\n    <li breaking-change>\n        We have removed deprecated classes from Clarity Icons. This includes:\n        <ul class=\"list\">\n            <li><code class=\"clr-code\">icon-color-*</code> style color classes</li>\n            <li><code class=\"clr-code\">icon-orientation-*</code> style direction classes</li>\n            <li><code class=\"clr-code\">icon-size-*</code> style size classes</li>\n        </ul>\n        If you are still using these deprecated classes, please switch to the current styling rules our <a routerLink=\"/documentation/iconography\">Clarity Icons documentation</a>.\n    </li>\n</ul>\n</ng-template>\n\n\n\n<!-- Release Template 0.7.5-->\n\n<ng-template [clrRelease]=\"'0.7.5'\">\n\n<h2>Highlights</h2>\n<ul class=\"list-unstyled whats-new-highlights\">\n    <li>\n        <h6>Added Clarity Icon variants architecture</h6>\n        <p>\n            Clarity Icons have been refactored to handle outlined, solid, badged, and alerted icon variants. The CSS for the icon styles and paths has also been re-architected to support a SuitCSS/BEM naming convention. Stay tuned as we begin updating our library\n            of icons and documentation to support these new features!\n        </p>\n    </li>\n    <li>\n        <h6>Added Icons support in Clarity buttons</h6>\n        <p>Clarity buttons now support Clarity Icons. The following is an example of using Icons in buttons:</p>\n        <pre><code clr-code-highlight=\"language-html\">\n&lt;button class=&quot;btn btn-primary&quot;&gt;\n    &lt;clr-icon shape=&quot;cog&quot;&gt;&lt;/clr-icon&gt;\n    Settings\n&lt;/button&gt;\n</code></pre>\n    </li>\n    <li>\n        <h6>Added new icons in Clarity Icons</h6>\n        <p>\n            Clarity Icons now includes new icon shapes such as\n            <code class=\"clr-code\">view-list</code>, <code class=\"clr-code\">view-cards</code>,\n            <code class=\"clr-code\">view-columns</code>, and <code class=\"clr-code\">host</code>.\n        </p>\n    </li>\n    <li>\n        <h6>Added indeterminate state to checkboxes</h6>\n        <p>\n            Checkboxes for both Clarity-UI and Clarity-Angular now support an indeterminate state.\n        </p>\n    </li>\n    <li>\n        <h6>Added CSS regression testing to Clarity's repo</h6>\n        <p>\n            Added CSS regression testing using <a href=\"https://gemini-testing.github.io/\">Gemini</a> to test Clarity components.\n        </p>\n    </li>\n</ul>\n\n<h2>Bug Fixes</h2>\n<ul class=\"list\">\n    <li bug-fix>Fixed text dropdowns in the header actions section of the header</li>\n    <li bug-fix>Fixed bug where validated inputs didn’t occupy 100% of the width on smaller screens</li>\n    <li bug-fix>Updated <code class=\"clr-code\">pre</code> style to have newlines by default</li>\n</ul>\n\n<h2>Other Changes</h2>\n<ul>\n    <li>Added Template-Driven and Model-Drive/Reactive approaches to handling Clarity forms</li>\n</ul>\n</ng-template>\n\n\n\n<!-- Release Template 0.7.4-->\n\n<ng-template [clrRelease]=\"'0.7.4'\">\n\n<h2>Highlights</h2>\n<ul class=\"list-unstyled whats-new-highlights\">\n  <li>\n    <h6>Added Angular CLI and Webpack 2 versions of Clarity Seed</h6>\n    <ul>\n      We now offer Clarity Seed project in three different build systems:\n      <li>1. Angular-CLI version (branch: master)</li>\n      <li>2. Webpack 2 version (branch: webpack)</li>\n      <li>3. SystemJS version (branch: systemjs)</li>\n    </ul>\n  </li>\n  <li>\n    <h6>Added new options to the Wizard component</h6>\n    <p>\n      Added the <code class=\"clr-code\">clrWizardClosable</code> input\n      and <code class=\"clr-code\">clrWizardOnCancel</code> event to the wizard component.\n    </p>\n  </li>\n  <li>\n    <h6>Upgraded ClarityNG to Angular 2.2.4</h6>\n    <p>Clarity has been updated to the latest version of Angular</p>\n  </li>\n  <li>\n    <h6>Added Clarity Icons to the Sketch Template</h6>\n    <p>\n      Clarity Icons have been added to the Sketch Template. You can download the\n      Sketch Template\n      <a sketchTemplateLink version=\"0.7.3\">here</a>\n    </p>\n  </li>\n</ul>\n\n<h2>Bug Fixes</h2>\n<ul class=\"list\">\n  <li bug-fix>Fixed Datagrid Demo on IE10</li>\n</ul>\n\n<h2>Other Changes</h2>\n<ul>\n  <li>\n    Added the <code>.icon-color-error</code> class and unified the color of\n    <code>.icon-color-danger</code> and <code>.icon-color-warning</code> classes\n  </li>\n  <li>\n    Added a demo for <code>.modal-xl</code> in the Modal documentation.\n  </li>\n  <li>\n    Updated the Typography documentation to add Card Header/Title to the H4 styles\n  </li>\n</ul>\n\n</ng-template>\n\n\n\n<!-- Release Template 0.7.1-->\n\n<ng-template [clrRelease]=\"'0.7.1'\">\n\n<h2>Highlights</h2>\n<ul class=\"list-unstyled whats-new-highlights\">\n    <li>\n        <h6>Updated to TypeScript 2.0 and Angular 2.2.0</h6>\n        <p>\n            With the 0.7.1 release, Clarity has been updated to the latest versions of Angular and Typescript.\n        </p>\n    </li>\n    <li>\n        <h6>Documentation improvements on website</h6>\n        <p>\n            In response to requests from the community, the Clarity team updated the layout and design of the documentation section of the website. We're hoping these improvements make our research and code examples easier to read and navigate.\n        </p>\n    </li>\n</ul>\n\n<h2>Bug Fixes</h2>\n<ul class=\"list\">\n    <li bug-fix>Fixed a font weight issue with text links in Clarity headers</li>\n    <li bug-fix>Fixed an issue with the alignment of arrows in stackview labels that was introduced after the move away from icon fonts</li>\n    <li bug-fix>Fixed tests that were failing because of replace anchor tags in tabs/nav with buttons</li>\n    <li bug-fix>Fixed an issue with the nav/tab highlight not overlapping the border below the tabs</li>\n    <li bug-fix>Removed extra padding around progress blocks in cards after cards refactor in 0.6.2</li>\n    <li bug-fix>Fixed test in dropdowns that was returning a false positive</li>\n    <li bug-fix>Hid the branding icon on tablet-sized and smaller screens</li>\n    <li bug-fix>Fixed an issue with alignment and cursors on responsive nav triggers</li>\n    <li bug-fix>Fixed a vertical alignment issue in small alerts</li>\n    <li bug-fix>Fixed a peer dependency issue in Clarity Icons that was linking directly to Custom Elements' GitHub repo instead of npm</li>\n</ul>\n\n<h2>Other Changes</h2>\n<ul>\n    <li>Added copyright information to all files in the repository</li>\n    <li>Updated the website and README with instructions on using Clarity with angular-cli\n    </li>\n    <li>Various website and documentation updates</li>\n</ul>\n</ng-template>\n\n\n\n<!-- Release Template 0.7.3-->\n\n<ng-template [clrRelease]=\"'0.7.3'\">\n\n<h2>Highlights</h2>\n<ul class=\"list-unstyled whats-new-highlights\">\n  <li>\n    <h6>New Plunkr Template for Clarity</h6>\n    <p>\n      With 0.7.3, Clarity has added a <a href=\"https://plnkr.co/edit/VPxyl7?p=preview\">Plunkr template</a>\n      to make it easier to test Clarity and submit bug reports.\n    </p>\n  </li>\n</ul>\n\n<h2>Bug Fixes</h2>\n<ul class=\"list\">\n  <li bug-fix>Replaced the SVG for the login background to use inline styles instead of the style tag to fix the IE 11 - Windows 10 issue with login backgrounds</li>\n\n  <li bug-fix>Fixed horizontal scroll issues when website is viewed on small devices</li>\n\n  <li bug-fix>Fixed a bug where the placeholder image and projected text were not displayed if the data was loading in the datagrid.</li>\n\n  <li bug-fix>Fixed the compilation error in the datagrid test file</li>\n\n  <li bug-fix>Fixed momentum scrolling issue when website was viewed on iPad</li>\n\n  <li bug-fix>Removed Dropdown Menu close transition to eliminate the delay when the dropdown menu was closed</li>\n</ul>\n\n<h2>Other Changes</h2>\n<ul>\n  <li>Added a dropdown with text toggle example in the header documentation</li>\n\n  <li>Updated the documentation to use the new icon markup for caret orientation</li>\n\n  <li>Reduced the distance of the dropdown caret from the text/image</li>\n</ul>\n\n</ng-template>\n\n\n\n<!-- Release Template 0.7.2-->\n\n<ng-template [clrRelease]=\"'0.7.2'\">\n\n<h2>Highlights</h2>\n<ul class=\"list-unstyled whats-new-highlights\">\n    <li>\n        <h6>Core icon set for Clarity Icons</h6>\n        <p>\n            With 0.7.2, Clarity has released <a routerLink=\"/documentation/iconography\">a core\n            set of 50 icons</a>. In addition, the orientation of icons can now be adjusted by using the <code>dir</code> attribute or appending the direction to the existing <code>shape</code> attribute.\n        </p>\n    </li>\n    <li>\n        <h6>Sketch template updated to 0.7</h6>\n        <p>\n            The Clarity Sketch template has been updated to 0.7. With the latest release, Sketch template has been rebuilt from the ground up to improve organization and presentation of the components.\n        </p>\n    </li>\n</ul>\n\n<h2>Bug Fixes</h2>\n<ul class=\"list\">\n    <li bug-fix>Fixed change detection for smart iterators on datagrid</li>\n    <li bug-fix>Unnecessary log messages removed from the datagrid</li>\n</ul>\n\n<h2>Other Changes</h2>\n<ul>\n    <li>Added placeholder for empty state on data grids</li>\n    <li>Sketch template link added to website homepage</li>\n    <li>Coding guidelines added to github repo</li>\n    <li>Various website enhancements and bug fixes</li>\n</ul>\n</ng-template>\n\n\n\n<!-- Release Template 0.7.0-->\n\n<ng-template [clrRelease]=\"'0.7.0'\">\n\n<h2>Highlights</h2>\n\n\n<ul class=\"list-unstyled whats-new-highlights\">\n    <li new-component>\n        <h6>New component: Datagrid</h6>\n        <p>\n            Clarity NG now provides a Datagrid Angular component. It comes with a first set of features, including sorting, filtering, pagination and multi-selection. It supports pre-loaded data as well as server-driven data, where only the currently displayed items\n            are loaded in the browser. We have a list of features we plan to add in future versions, but we welcome any feedback or request to add to that list or change its priorities.\n        </p>\n        <p>\n            Clarity's Datagrid uses a declarative interface, so you can use it as you would use an HTML table, directly in your templates. Here is a basic example with simple objects:\n        </p>\n        <pre><code clr-code-highlight=\"language-html\">\n&lt;clr-datagrid&gt;\n    &lt;{{ 'clr-dg-column [clrDgField]' }}=&quot;'id'&quot;&gt;User ID&lt;/clr-dg-column&gt;\n    &lt;{{ 'clr-dg-column [clrDgField]' }}=&quot;'name'&quot;&gt;Name&lt;/clr-dg-column&gt;\n    &lt;{{ 'clr-dg-column [clrDgField]' }}=&quot;'creation'&quot;&gt;Creation date&lt;/clr-dg-column&gt;\n    &lt;{{ 'clr-dg-row *clrDgItems='}}&quot;{{'let user of users'}}&quot;&gt;\n        &lt;{{'clr-dg-cell'}}&gt;{{ '{ ' }}{{ '{ ' }}{{ 'user.id' }}{{ ' }' }}{{ '}' }}&lt;/clr-dg-cell&gt;\n        &lt;{{'clr-dg-cell'}}&gt;{{ '{ ' }}{{ '{ ' }}{{ 'user.name' }}{{ ' }' }}{{ '}' }}&lt;/clr-dg-cell&gt;\n        &lt;{{'clr-dg-cell'}}&gt;{{ '{ ' }}{{ '{ ' }}{{ 'user.creation | date' }}{{ ' }' }}{{ '}' }}&lt;/clr-dg-cell&gt;\n    &lt;/clr-dg-row&gt;\n\n    &lt;{{'clr-dg-footer'}}&gt;\n        {{ '{ ' }}{{ '{ ' }}{{ 'pagination.firstItem + 1' }}{{ ' }' }}{{ '}' }} - {{ '{ ' }}{{ '{ ' }}{{ 'pagination.lastItem + 1' }}{{ ' }' }}{{ '}' }}\n        of {{ '{ ' }}{{ '{ ' }}{{ 'pagination.totalItems' }}{{ ' }' }}{{ '}' }}\n        &lt;{{'clr-dg-pagination #pagination [clrDgPageSize]'}}=&quot;10&quot;&gt;&lt;/clr-dg-pagination&gt;\n    &lt;/clr-dg-footer&gt;\n&lt;/clr-datagrid&gt;\n</code></pre>\n\n        <p>\n            We will have full documentation coming soon for more advanced examples.\n        </p>\n\n    </li>\n\n\n\n\n\n\n    <li breaking-change>\n        <h6>Replace Font Awesome with Clarity Icons</h6>\n\n        <p>\n            Clarity UI now depends on <a routerLink=\"/documentation/iconography\">Clarity Icons</a> instead of Font Awesome for iconography.\n        </p>\n\n        <p><b>Breaking Change</b></p>\n\n        <p><a routerLink=\"/documentation/dropdowns\">Dropdowns</a> Toggles now have an updated markup:</p>\n\n        <pre><code clr-code-highlight=\"language-html\">\n&lt;button class=&quot;dropdown-toggle btn btn-outline-primary&quot;&gt;\n    Dropdown\n    &lt;clr-icon shape=&quot;caret&quot; class=&quot;icon-orient-down&quot;&gt;&lt;/clr-icon&gt;\n&lt;/button&gt;\n</code></pre>\n\n        <p><b>Note:</b> Clarity recommends that you use a button for the toggle. The button can contain either text or an icon.</p>\n\n        <p><b>Deprecation</b></p>\n\n        <div class=\"alert alert-info\">\n            <div class=\"alert-item\">\n                <span class=\"alert-text\">\n                    Existing support for font icons in Clarity components is now being deprecated and will be removed in 0.8.0.\n                    Clarity recommends using Clarity Icons.\n                </span>\n            </div>\n        </div>\n\n        <p>\n            Use the following markup for using Clarity Icons in Branding, Header Nav and Header Actions:\n        </p>\n\n        <pre><code clr-code-highlight=\"language-html\">\n&lt;header class=&quot;header-6&quot;&gt;\n    &lt;div class=&quot;branding&quot;&gt;\n        &lt;a href=&quot;javascript://&quot; class=&quot;nav-link&quot;&gt;\n            &lt;clr-icon shape=&quot;vm-bug&quot;&gt;&lt;/clr-icon&gt;\n            &lt;span class=&quot;title&quot;&gt;Project Clarity&lt;/span&gt;\n        &lt;/a&gt;\n    &lt;/div&gt;\n    &lt;div class=&quot;header-nav&quot;&gt;\n        &lt;a href=&quot;javascript://&quot; class=&quot;nav-link nav-icon&quot;&gt;\n            &lt;clr-icon shape=&quot;cloud&quot;&gt;&lt;/clr-icon&gt;\n        &lt;/a&gt;\n        &lt;a href=&quot;javascript://&quot; class=&quot;active nav-link nav-icon&quot;&gt;\n            &lt;clr-icon shape=&quot;folder&quot;&gt;&lt;/clr-icon&gt;\n        &lt;/a&gt;\n    &lt;/div&gt;\n    &lt;form class=&quot;search&quot;&gt;\n        &lt;label for=&quot;search_input&quot;&gt;\n            &lt;input id=&quot;search_input&quot; type=&quot;text&quot; placeholder=&quot;Search for keywords...&quot;&gt;\n        &lt;/label&gt;\n    &lt;/form&gt;\n    &lt;div class=&quot;header-actions&quot;&gt;\n        &lt;div class=&quot;dropdown bottom-right&quot;&gt;\n            &lt;button class=&quot;dropdown-toggle nav-icon&quot;&gt;\n                &lt;clr-icon shape=&quot;user&quot;&gt;&lt;/clr-icon&gt;\n                &lt;clr-icon shape=&quot;caret&quot; class=&quot;icon-orient-down&quot;&gt;&lt;/clr-icon&gt;\n            &lt;/button&gt;\n            &lt;div class=&quot;dropdown-menu&quot;&gt;\n                &lt;a href=&quot;javascript://&quot; class=&quot;dropdown-item&quot;&gt;About&lt;/a&gt;\n                &lt;a href=&quot;javascript://&quot; class=&quot;dropdown-item&quot;&gt;Preferences&lt;/a&gt;\n                &lt;a href=&quot;javascript://&quot; class=&quot;dropdown-item&quot;&gt;Logout&lt;/a&gt;\n            &lt;/div&gt;\n        &lt;/div&gt;\n    &lt;/div&gt;\n&lt;/header&gt;\n</code></pre>\n    </li>\n\n\n\n    <li breaking-change>\n\n        <h6>Refactor Angular Dropdown Component</h6>\n\n        <p>The Angular <a routerLink=\"/documentation/dropdowns\">Dropdowns</a> component now uses attribute directives for dropdown toggles and menu items</p>\n\n        <p><b>Breaking Change</b></p>\n\n        <ol class=\"list\">\n            <li><code class=\"clr-code\">clrDropdownToggle</code> should be used to indicate a dropdown toggle used in the angular dropdown component</li>\n            <li><code class=\"clr-code\">clrDropdownItem</code> should be used to indicate a dropdown item in the angular dropdown component</li>\n        </ol>\n\n        <pre><code clr-code-highlight=\"language-html\">\n&lt;clr-dropdown [clrMenuPosition]=&quot;'bottom-right'&quot;&gt;\n    &lt;button class=&quot;btn btn-outline-primary&quot; clrDropdownToggle&gt;\n        Dropdown\n        &lt;clr-icon shape=&quot;caret&quot; class=&quot;icon-orient-down&quot;&gt;&lt;/clr-icon&gt;\n    &lt;/button&gt;\n    &lt;div class=&quot;dropdown-menu&quot;&gt;\n        &lt;label class=&quot;dropdown-header&quot;&gt;Dropdown header&lt;/label&gt;\n        &lt;a href=&quot;javascript://&quot; clrDropdownItem&gt;Action 1&lt;/a&gt;\n        &lt;a href=&quot;javascript://&quot; clrDropdownItem&gt;Action 2&lt;/a&gt;\n        &lt;a href=&quot;javascript://&quot; class=&quot;disabled&quot; clrDropdownItem&gt;Disabled Action&lt;/a&gt;\n        &lt;div class=&quot;dropdown-divider&quot;&gt;&lt;/div&gt;\n        &lt;a href=&quot;javascript://&quot; clrDropdownItem&gt;Link 1&lt;/a&gt;\n        &lt;a href=&quot;javascript://&quot; clrDropdownItem&gt;Link 2&lt;/a&gt;\n    &lt;/div&gt;\n&lt;/clr-dropdown&gt;\n</code></pre>\n\n    </li>\n</ul>\n</ng-template>\n\n\n\n<!-- Release Template 0.6.4-->\n\n<ng-template [clrRelease]=\"'0.6.4'\">\n\n<h2>Bug Fixes</h2>\n<ul class=\"list\">\n    <li bug-fix>Removed Dropdown Menu close transition to eliminate the delay when the dropdown menu was closed</li>\n    <li bug-fix>Replaced the SVG for the login background to use inline styles instead of the style tag to fix the IE 11 - Windows 10 issue with login backgrounds</li>\n</ul>\n</ng-template>\n\n\n\n<!-- Release Template 0.6.2-->\n\n<ng-template [clrRelease]=\"'0.6.2'\">\n\n<h2>Highlights</h2>\n<ul class=\"list-unstyled whats-new-highlights\">\n    <li>\n        <h6>Added size attribute to Clarity Icons</h6>\n        <p>\n            You can now set an icon size through <code class=\"clr-code\">size</code> attribute. The sizes set through <code class=\"clr-code\">size</code> attribute overrides the CSS size style. If you don't set either the size attribute or the CSS size\n            style, the size defaults to 16 by 16 pixels.\n        </p>\n        <pre><code clr-code-highlight=\"language-html\">\n&lt;clr-icon shape=&quot;info&quot; size=&quot;12&quot;&gt;&lt;/clr-icon&gt;\n&lt;clr-icon shape=&quot;info&quot; size=&quot;16&quot;&gt;&lt;/clr-icon&gt;\n&lt;clr-icon shape=&quot;info&quot; size=&quot;36&quot;&gt;&lt;/clr-icon&gt;\n&lt;clr-icon shape=&quot;info&quot; size=&quot;48&quot;&gt;&lt;/clr-icon&gt;\n&lt;clr-icon shape=&quot;info&quot; size=&quot;64&quot;&gt;&lt;/clr-icon&gt;\n&lt;clr-icon shape=&quot;info&quot; size=&quot;72&quot;&gt;&lt;/clr-icon&gt;\n</code></pre>\n        <div class=\"alert alert-warning\">\n            <div class=\"alert-item\">\n                <span class=\"alert-text\">\n                    Please note that <code class=\"clr-code\">.icon-size-[sm/md/lg]</code> classes\n                    are being deprecated and will be removed in 0.8.0.\n                </span>\n            </div>\n        </div>\n    </li>\n</ul>\n\n<h2>Bug Fixes</h2>\n<ul class=\"list\">\n    <li bug-fix>Fixed issue with Clarity Icons throwing an error in IE10 </li>\n    <li bug-fix>Cleaned up checkbox positioning so it is more resilient to positioning and size modifications</li>\n    <li bug-fix>Fixed scrolling issue with website on iOS</li>\n    <li bug-fix>Fixed broken links and image paths from website navigation rearchitecture for github-pages</li>\n    <li bug-fix>Fixed vertical alignment issue with alerts</li>\n    <li bug-fix>Corrected a margin issue with link/flat buttons in forms</li>\n</ul>\n\n<h2>Other Changes</h2>\n<ul class=\"list\">\n    <li>Updated TravisCI and added steps to github workflow</li>\n    <li>Created Angular component for checkboxes — documentation coming soon</li>\n    <li>Implemented website homepage redesign</li>\n    <li>Continued cleanup of website content</li>\n    <li>Improved installation instructions for Clarity Icons, Clarity UI, and Clarity Angular</li>\n</ul>\n</ng-template>\n\n\n\n<!-- Release Template 0.6.1-->\n\n<ng-template [clrRelease]=\"'0.6.1'\">\n\n<h2>Highlights</h2>\n<ul class=\"list-unstyled whats-new-highlights\">\n    <li>\n        <h6>Cards Refactor</h6>\n        <p>Cards have been refactored to support a simple semantic layout:</p>\n        <pre><code clr-code-highlight=\"language-html\">\n&lt;div class=\"card\"&gt;\n    &lt;div class=\"card-header\"&gt;\n        ...\n    &lt;/div&gt;\n    &lt;div class=\"card-block\"&gt;\n        ...\n    &lt;/div&gt;\n    &lt;div class=\"card-footer\"&gt;\n        ...\n    &lt;/div&gt;\n&lt;/div&gt;\n</code></pre>\n\n        <ul class=\"list\">\n            Additional features added are:\n            <li>Cards in CSS Columns</li>\n            <li>Card Media Blocks</li>\n            <li>Images can now be added anywhere inside of the card using the <code class=\"clr-code\">.card-img</code> class</li>\n        </ul>\n\n        <p>We recommend moving all card actions into the card footer.</p>\n\n        <div class=\"alert alert-warning\">\n            <div class=\"alert-item\">\n                <span class=\"alert-text\">\n                    Following classes are being deprecated and will be removed in 0.8.0.\n                </span>\n            </div>\n        </div>\n\n        <div class=\"row\">\n            <div class=\"col-xs-12 col-sm-12 col-md-6\">\n                <table class=\"table\">\n                    <thead>\n                        <tr>\n                            <th class=\"left\">Deprecated Classes</th>\n                            <th class=\"left\">Replacement</th>\n                        </tr>\n                    </thead>\n                    <tbody>\n                        <tr>\n                            <td class=\"left\"><code class=\"clr-code\">.card-link</code></td>\n                            <td class=\"left\">Flat/Link Buttons - <code class=\"clr-code\">.btn .btn-sm .btn-link</code></td>\n                        </tr>\n                        <tr>\n                            <td class=\"left\"><code class=\"clr-code\">.group</code></td>\n                            <td class=\"left\"><code class=\"clr-code\">.card-media-block</code></td>\n                        </tr>\n                        <tr>\n                            <td class=\"left\"><code class=\"clr-code\">.card-overflow-menu</code></td>\n                            <td class=\"left\"><code class=\"clr-code\">.dropdown</code></td>\n                        </tr>\n                        <tr>\n                            <td class=\"left\"><code class=\"clr-code\">.card-img-top</code></td>\n                            <td class=\"left\">Use the <code class=\"clr-code\">.card-img</code> class irrespective of where the image is placed in the card.</td>\n                        </tr>\n                        <tr>\n                            <td class=\"left\"><code class=\"clr-code\">.card-divider</code></td>\n                            <td class=\"left\">Card header and blocks now have a bottom border which act as card dividers. Multiple card blocks can be used to divide the content. This helps organizing the content in cards.</td>\n                        </tr>\n                    </tbody>\n                </table>\n            </div>\n        </div>\n    </li>\n    <li>\n        <h6>SASS Overrides</h6>\n        <p>\n            To give our users the ability to easily customize the look of the Clarity Design System, we have added over-rideable variables to the Clarity SASS source code.\n        </p>\n        <p>\n            We recommend that users make customizations in the\n            <code>utils/_overwrite.clarity.scss</code>. This file was created so that users of the Clarity Design System could overwrite our default variable assignments in one location.\n        </p>\n        <p>\n            Overriding the default Clarity Design System variables requires you to rebuild Clarity with your own SASS build.\n        </p>\n    </li>\n</ul>\n\n<h2>Bug Fixes</h2>\n<ul class=\"list\">\n    <li bug-fix>Fixed alignment of card footer links in MSEdge</li>\n    <li bug-fix>Applied not-allowed cursor to disabled text areas</li>\n    <li bug-fix>Fixed an issue where dropdowns were getting cut off in the headers</li>\n</ul>\n\n<h2>Other Changes</h2>\n<ul class=\"list\">\n    <li>Added favicon to website</li>\n    <li>Updated sketch template to version 0.6.0</li>\n    <li>Moved to TravisCI</li>\n    <li>Overhauled website navigation to allow it to run at root level locally and as a project github pages</li>\n    <li>Designed a new logo for the Clarity Design System</li>\n    <li>Moved website to github</li>\n</ul>\n</ng-template>\n\n\n\n<!-- Release Template 0.6.0-->\n\n<ng-template [clrRelease]=\"'0.6.0'\">\n\n<h2>Highlights</h2>\n<ul class=\"list-unstyled whats-new-highlights\">\n  <li>\n    <h6>Move Clarity to the Metropolis font</h6>\n    <p>\n      To prepare for the future of Clarity's beta and beyond, Clarity has\n      adopted the new OFL-licensed typeface, Metropolis. <a\n      href=\"https://github.com/chrismsimpson/Metropolis\"\n      target=\"_blank\">Find out more information about Metropolis.</a>\n    </p>\n  </li>\n</ul>\n\n<h2>Breaking Changes</h2>\n<ul class=\"list-unstyled whats-new-highlights\">\n  <li breaking-change>\n    <h6>Upgrade BS4 to Alpha 5</h6>\n    <p>\n      Clarity has been upgraded to the latest alpha version of Bootstrap\n      4: Bootstrap 4, alpha 5. In its latest alpha release, the Bootstrap\n      team has changed a number of utility classes — like\n      <code class=\"clr-code\">float-*-left</code> instead of\n      <code class=\"clr-code\">pull-*-left</code>. In some cases, this may\n      constitute a breaking change for applications that were dependent\n      on the old utility classnames. <a\n      href=\"https://blog.getbootstrap.com/2016 - 2017/10/19/bootstrap-4-alpha-5/\"\n      target=\"_blank\">Find out more information about Bootstrap Alpha 5's changes.</a>\n    </p>\n  </li>\n  <li breaking-change>\n    <h6>Move Clarity to the Metropolis font</h6>\n    <p>\n      As a precaution, make sure to check out your application after\n      upgrading to ClarityUI 0.6.0 to make sure the change to the\n      Metropolis font hasn’t had a negative impact on your application.\n      Metropolis is very close to the previous font that Clarity was\n      using but it is a different font. The Clarity team have not\n      encountered any negative side effects with the font change but want\n      to promote awareness around it.\n    </p>\n  </li>\n</ul>\n\n<h2>Bug Fixes</h2>\n<ul class=\"list\">\n  <li bug-fix>Fixed issue with Clarity Icon dependencies</li>\n  <li bug-fix>Content area on website has too much padding at top</li>\n</ul>\n\n<h2>Other Changes</h2>\n<ul class=\"list\">\n  <li>Implement font replacement</li>\n  <li>Font changes to website</li>\n  <li>Changes to Clarity font based on spec updates</li>\n  <li>Move Clarity-UI to a more scalable folder structure</li>\n  <li>Move code to github</li>\n  <li>Prepare to publish on NPM</li>\n  <li>Header &amp; Navigation specs - Update based on implementation &amp; add responsive specs</li>\n  <li>Move Text from Component Demo Files to .md Files</li>\n</ul>\n\n</ng-template>\n\n\n\n<!-- Release Template 0.6.3-->\n\n<ng-template [clrRelease]=\"'0.6.3'\">\n\n<h2>Bug Fixes</h2>\n<ul class=\"list\">\n    <li bug-fix>Fixed tests that were failing because of replace anchor tags in tabs/nav with buttons</li>\n    <li bug-fix>Fixed an issue with the nav/tab highlight not overlapping the border below the tabs</li>\n    <li bug-fix>Removed extra padding around progress blocks in cards after cards refactor in 0.6.2</li>\n    <li bug-fix>Fixed test in dropdowns that was returning a false positive</li>\n    <li bug-fix>Hid the branding icon on tablet-sized and smaller screens</li>\n    <li bug-fix>Fixed an issue with alignment and cursors on responsive nav triggers</li>\n    <li bug-fix>Fixed a vertical alignment issue in small alerts</li>\n</ul>\n</ng-template>\n\n\n\n<!-- Release Template 0.5.6-->\n\n<ng-template [clrRelease]=\"'0.5.6'\">\n\n<h2>Bug Fixes</h2>\n<ul class=\"list\">\n    <li bug-fix>Fixed issue with Clarity Icon dependencies</li>\n</ul>\n</ng-template>\n\n\n\n<!-- Release Template 0.5.4-->\n\n<ng-template [clrRelease]=\"'0.5.4'\">\n\n<h2>Highlights</h2>\n<ul class=\"list-unstyled whats-new-highlights\">\n    <li new-component>\n        <h6>Clarity Icons</h6>\n        <p>\n            Clarity presents pixel perfect and scalable SVG-based icons. This new icon system gives you complete control over the color, orientation, and visibility all the way down to individual paths in the icon through standard CSS. Multi-colored icons are as\n            easy as setting fill and stroke colors in your styles! Clarity Icons comes with a set of predefined color treatments as CSS classnames that you can use in your HTML right away with more icons and styles on the way.\n        </p>\n        <pre><code clr-code-highlight=\"language-html\">\n&lt;clr-icon shape=&quot;info&quot; class=&quot;icon-size-[sm/md/lg]&quot;&gt;&lt;/clr-icon&gt;\n&lt;clr-icon shape=&quot;info&quot; class=&quot;icon-orient-[up/right/down/left]&quot;&gt;&lt;/clr-icon&gt;\n&lt;clr-icon shape=&quot;info&quot; class=&quot;icon-color&mdash;[highlight/inverse/success/danger/warning/info]&quot;&gt;&lt;/clr-icon&gt;\n</code></pre>\n    </li>\n    <li new-component>\n        <h6>Responsive Navigation</h6>\n        <p>\n            Clarity Navigation is now responsive! You can make up to two levels of navigation responsive. Add the <code class=\"clr-code\">clr-nav-level</code> input to your navigation level and assign it a value of <code class=\"clr-code\">1</code> for primary\n            navigation and <code class=\"clr-code\">2</code> for secondary navigation.\n        </p>\n        <pre><code clr-code-highlight=\"language-html\">\n&lt;clr-main-container&gt;\n    &lt;clr-header&gt;\n        ...\n        &lt;div class=&quot;header-nav&quot; [clr-nav-level]=&quot;1&quot;&gt;\n            ...\n        &lt;/div&gt;\n        ...\n    &lt;/clr-header&gt;\n    &lt;div class=&quot;content-container&quot;&gt;\n        &lt;main class=&quot;content-area&quot;&gt;\n            ...\n        &lt;/main&gt;\n        &lt;nav class=&quot;sidenav&quot; [clr-nav-level]=&quot;2&quot;&gt;\n            ...\n        &lt;/nav&gt;\n    &lt;/div&gt;\n&lt;/clr-main-container&gt;\n</code></pre>\n    </li>\n    <li>\n        <h6>Login Form Updates</h6>\n        <p>\n            Login Form now supports a select box for Authentication Source and a link for Sign Up.\n        </p>\n    </li>\n</ul>\n\n<h2>Bug Fixes</h2>\n<ul class=\"list\">\n    <li bug-fix>Clicking on the magnifying glass should focus on the search bar in the header</li>\n    <li bug-fix>Header overflow bug</li>\n    <li bug-fix>Make wizard not depend on container&#39;s css class</li>\n    <li bug-fix>Increase specificity of close class in wizard</li>\n    <li bug-fix>Documentation section change killed responsive sidenav on the website</li>\n</ul>\n\n<h2>Other Changes</h2>\n<ul class=\"list\">\n    <li>Document improvements to login screen</li>\n    <li>Add Documentation on Responsive Header</li>\n    <li>Add Copyright, Trademark, etc information to the website</li>\n    <li>Determine naming conventions for Clarity Icon system</li>\n    <li>Implement Clarity Icons</li>\n    <li>Highlight the current step in a wizard better</li>\n    <li>Create Do and Don&#39;t images for Clarity web site</li>\n    <li>Cleanup typings</li>\n</ul>\n</ng-template>\n\n\n\n<!-- Release Template 0.5.5-->\n\n<ng-template [clrRelease]=\"'0.5.5'\">\n\n<h2>Highlights</h2>\n<ul class=\"list-unstyled whats-new-highlights\">\n    <li>\n        <h6><a routerLink=\"/documentation/iconography\">Clarity Icons Documentation</a></h6>\n    </li>\n</ul>\n\n<h2>Bug Fixes</h2>\n<ul class=\"list\">\n    <li bug-fix>Fix caching issue on Website</li>\n    <li bug-fix>Override wizard&#39;s style to fix nav style dependency</li>\n    <li bug-fix>Hide Header Nav End Divider</li>\n    <li bug-fix>IE Header Search placeholder issue</li>\n</ul>\n\n<h2>Other Changes</h2>\n<ul class=\"list\">\n    <li>Update ReadMe on the github repo</li>\n    <li>Prepare the Clarity code of conduct</li>\n    <li>Upgrade to Angular 2.1.0</li>\n    <li>Seed Responsive Nav Updates</li>\n</ul>\n</ng-template>\n\n\n\n<!-- Release Template 0.5.3-->\n\n<ng-template [clrRelease]=\"'0.5.3'\">\n\n<h2>Highlights</h2>\n<ul class=\"list-unstyled whats-new-highlights\">\n    <li new-component>\n        <h6>Wizard Component</h6>\n        <p>\n            0.5.3 includes a new Angular component - Wizards. A wizard can be created using the following markup:\n        </p>\n        <pre><code clr-code-highlight=\"language-html\">\n&lt;clr-wizard #wizard [(clrWizardOpen)]=&quot;open&quot; [clrWizardSize]=&quot;'lg'&quot;&gt;\n    &lt;div class=&quot;wizard-title&quot;&gt;Wizard Title&lt;/div&gt;\n\n    &lt;clr-wizard-step&gt;Step 1&lt;/clr-wizard-step&gt;\n    &lt;clr-wizard-step&gt;Step 2&lt;/clr-wizard-step&gt;\n    &lt;clr-wizard-step&gt;Step 3&lt;/clr-wizard-step&gt;\n\n    &lt;clr-wizard-page&gt;Content for step 1&lt;/clr-wizard-page&gt;\n    &lt;clr-wizard-page&gt;Content for step 2&lt;/clr-wizard-page&gt;\n    &lt;clr-wizard-page&gt;Content for step 3&lt;/clr-wizard-page&gt;\n&lt;/clr-wizard&gt;\n</code></pre>\n    </li>\n</ul>\n\n<h2>Bug Fixes</h2>\n<ul class=\"list\">\n    <li bug-fix>Inverse button: disabled inverse button is too dark</li>\n</ul>\n\n<h2>Other Changes</h2>\n<ul class=\"list\">\n    <li>Documentation for Wizard Component</li>\n    <li>Add spinner component size variations</li>\n    <li>Restructure the left side navigation on the components page of the website</li>\n    <li>Improvements to the login page component</li>\n</ul>\n</ng-template>\n\n\n\n<!-- Release Template 0.5.1-->\n\n<ng-template [clrRelease]=\"'0.5.1'\">\n\n<h2>Highlights</h2>\n<ul class=\"list-unstyled whats-new-highlights\">\n    <li>\n        <h6>Stack View Editor: Implement HTML/CSS to indicate that a value has been changed</h6>\n        <p>\n            Stack View now has a new option <code class=\"clr-code\">clrSbNotifyChange</code> which can be added on a stack block. When the option is set to <code class=\"clr-code\">true</code>, an inidicator showing an update is shown on the stack block.\n        </p>\n    </li>\n    <li>\n        <h6>Implement HTML/CSS for an XL Clarity modal</h6>\n        <p>Clarity Modals now supports an additional size - xl using the <code class=\"clr-code\">.modal-xl</code>. The size can also be set on the modal angular component using the <code class=\"clr-code\">clrModalSize</code> option.</p>\n        <pre><code clr-code-highlight=\"language-html\">\n&lt;clr-modal [(clrModalOpen)]=&quot;::boolean::&quot; [clrModalSize]=&quot;'xl'&quot;&gt;\n</code></pre>\n    </li>\n</ul>\n\n<h2>Bug Fixes</h2>\n<ul class=\"list\">\n    <li bug-fix>Modal animation backdrop is sliding</li>\n    <li bug-fix>Add font-family declaration to body tag</li>\n</ul>\n\n<h2>Other Changes</h2>\n<ul class=\"list\">\n    <li>Implement and document new row selection color</li>\n    <li>Update website to use Angular 2.0.0</li>\n    <li>Documentation - Buttons</li>\n    <li>Export demo components in Clarity</li>\n    <li>Document Vertical Spacing Between Components</li>\n    <li>Add a date to Release Notes on web</li>\n</ul>\n</ng-template>\n\n\n\n<!-- Release Template 0.5.2-->\n\n<ng-template [clrRelease]=\"'0.5.2'\">\n\n<h2>Highlights</h2>\n<ul class=\"list-unstyled whats-new-highlights\">\n    <li>\n        <h6>Remove WOFF2 and TrueType fonts</h6>\n        <p>\n            Removed WOFF2 and TrueType font types. This change reduces the size of the minified Clarity css from 661KB to 488KB.\n        </p>\n    </li>\n    <li>\n        <h6>Update Sketch Template for Clarity Components</h6>\n        <p>\n            Various updates of the Clarity Sketch template to keep it in sync with Clarity 0.5.0.\n        </p>\n    </li>\n</ul>\n</ng-template>\n\n\n\n<!-- Release Template 0.5.0-->\n\n<ng-template [clrRelease]=\"'0.5.0'\">\n\n<h2>Highlights</h2>\n<ul class=\"list-unstyled whats-new-highlights\">\n    <li>\n        <h6>Upgrade Clarity Seed to Angular 2.0.0</h6>\n        <h6>Upgrade Clarity to Angular 2.0.0</h6>\n        <p style=\"margin-top: 24px\">\n            Clarity 0.5.0 is in Angular 2.0.0 Final!\n        </p>\n        <p>\n            Here are the recommended version numbers you could use in your package.json:\n        </p>\n        <pre><code clr-code-highlight=\"language-js\">\n\"dependencies\": {{ '{' }}\n    \"@angular/common\": \"2.0.0\",\n    \"@angular/compiler\": \"2.0.0\",\n    \"@angular/core\": \"2.0.0\",\n    \"@angular/forms\": \"2.0.0\",\n    \"@angular/http\": \"2.0.0\",\n    \"@angular/platform-browser\": \"2.0.0\",\n    \"@angular/platform-browser-dynamic\": \"2.0.0\",\n    \"@angular/router\": \"3.0.0\",\n    \"@angular/upgrade\": \"2.0.0\",\n    ...\n{{ '}' }}\n</code></pre>\n        <p>\n            Declaring directives and pipes in components has been deprecated. That means you will no longer import Clarity directives in the components as you have done with previous versions like this:\n        </p>\n        <pre><code clr-code-highlight=\"language-js\">\nimport {{ '{' }}SOME_CLARITY_DIRECTIVE{{ '}' }} from \"clarity-angular\";\n@Component({{ '{' }}\n    ...\n    directives: [SOME_CLARITY_DIRECTIVE],\n    ...\n{{ '}' }});\n\nexport class YourComponent {{ '{' }}        {{ '}' }}\n</code></pre>\n\n        <p>\n            Instead, now an application that consumes Clarity should at least have one app-level module like below:\n        </p>\n\n        <pre><code clr-code-highlight=\"language-js\">\nimport {{ '{' }} NgModule {{ '}' }} from '@angular/core';\nimport {{ '{' }} BrowserModule {{ '}' }} from '@angular/platform-browser';\nimport {{ '{' }} ClarityModule {{ '}' }} from 'clarity-angular';\nimport {{ '{' }} AppComponent {{ '}' }} from './app.component';\n\n@NgModule({{ '{' }}\n    imports: [\n        BrowserModule,\n        ClarityModule,\n        ....(other modules from Angular or 3rd parties for your app)\n    ],\n    declarations: [ AppComponent ],\n    bootstrap: [ AppComponent ]\n{{ '}' }})\n\nexport class AppModule {{ '{' }}\n{{ '}' }}\n</code></pre>\n\n        <p>\n            Your dependencies (components, directives, pipes, services, etc) should be declared and exported through modules.\n            <a href=\"https://angular.io/docs/ts/latest/guide/ngmodule.html\" target=\"_blank\">Read more about NgModule.</a>\n        </p>\n        <p>\n            You can check out the latest version of Clarity seed to get a sample setup with the new module, routers, and testing setup. You can also check out <a href=\"https://github.com/juliemr/ng2-test-seed\" target=\"_blank\">this\n            excellent seed that covers basic unit tests using TestBed.</a>\n        </p>\n        <p>\n            Please refer to <a href=\"https://github.com/angular/angular/blob/master/CHANGELOG.md\" target=\"_blank\">Angular's CHANGELOG for a complete list of breaking changes</a> that might impact your application.\n        </p>\n    </li>\n</ul>\n</ng-template>\n\n\n\n<!-- Release Template 0.4.3-->\n\n<ng-template [clrRelease]=\"'0.4.3'\">\n\n<h2>Bug Fixes</h2>\n<ul class=\"list\">\n    <li bug-fix>\n        Add font-family declaration to body tag\n    </li>\n</ul>\n</ng-template>\n\n\n\n<!-- Release Template 0.4.2-->\n\n<ng-template [clrRelease]=\"'0.4.2'\">\n\n<h2>Highlights</h2>\n<ul class=\"list-unstyled whats-new-highlights\">\n    <li>\n        <h6>Implement alternative for outline:none</h6>\n        <div class=\"alert alert-warning\">\n            <div class=\"alert-item\">\n                <span class=\"alert-text\">\n                  While this is not a breaking change, product teams that do not\n                  want accessible outlines in their applications should review\n                  any impact this change had to determine if they want to override\n                  the outline style on their own.\n              </span>\n            </div>\n        </div>\n        <p style=\"margin-top: 12px\">\n            The Clarity team implemented accessible outline highlighting for keyboard navigation. Previously, Clarity UI had overridden the default. There may be an impact for applications that had relied on the default override. In those cases, developers should\n            implement their own override. The Clarity team removed the override because it hindered accessibility.\n        </p>\n    </li>\n    <li>\n        <h6>Update visited links color</h6>\n        <p>\n            The visited link text color has been changed. Just a heads up that there's a slightly different shade of purple in use. Those who were already overriding the visited link text color should not be impacted.\n        </p>\n    </li>\n</ul>\n\n<h2>Bug Fixes</h2>\n<ul class=\"list\">\n    <li bug-fix>\n        Text color on clickable cards changes when wrapped in anchor tag\n    </li>\n    <li bug-fix>\n        Fix Inline Spinners Alignment\n    </li>\n</ul>\n\n<h2>Other Changes</h2>\n<ul class=\"list\">\n    <li>Revisit Clarity Color Usage</li>\n    <li>Refactor buttons code</li>\n</ul>\n</ng-template>\n\n\n\n<!-- Release Template 0.4.0-->\n\n<ng-template [clrRelease]=\"'0.4.0'\">\n\n<h2>Highlights</h2>\n<ul class=\"list-unstyled whats-new-highlights\">\n    <li>\n        <h6>Add SASS mixin to target problematic browsers</h6>\n        <p>\n            The <code class=\"clr-code\">fixForFirefox</code>, <code class=\"clr-code\">fixForMsEdge</code>,\n            <code class=\"clr-code\">fixForIE10AndUp</code>, and <code class=\"clr-code\">fixForIE11AndUp</code> SASS mixins were added to <code class=\"clr-code\">clarity/utils/helpers.clarity.scss</code>. These mixins allow us to target CSS fixes to specific\n            browsers.\n        </p>\n    </li>\n</ul>\n\n<h2>Breaking Changes</h2>\n<ul class=\"list-unstyled whats-new-highlights\">\n    <li breaking-change>\n        <h6>Update Clarity to use BS4 alpha 3</h6>\n        <p>\n            Clarity has been upgraded to use BS4 Alpha 3. This allows users of Clarity to take advantage of the new BS for functionality with the flex box grid. With Alpha 3, BS4 rewrote some of the classnames related to their grid. Users of Clarity who were using\n            Push, pull, offset classes May need to replace the old class names with the new format. More information is available in the\n            <a href=\"http://v4-alpha.getbootstrap.com/layout/grid/#example-offsetting-columns\" target=\"_blank\">BS4 documentation</a>.\n        </p>\n    </li>\n    <li breaking-change>\n        <h6>Cleanup baselineRem() and rpx() SASS function calls</h6>\n        <p>\n            The <code class=\"clr-code\">rpx()</code> SASS function has been removed from Clarity. Make sure to replace it with a measurement in pixels. For example, <code class=\"clr-code\">padding-top: rpx(2)</code> would become <code class=\"clr-code\">padding-top: 2px</code>.\n        </p>\n    </li>\n    <li breaking-change>\n        <h6>Typography updates - Implementation: HTML/CSS</h6>\n        <p>\n            Clarity's typography has been completely redone. It is imperative that all applications upgrading to 0.4.0 verify any customizations they had previously made to Clarity's font specs. Our own internal upgrades involved minimal changes to existing CSS overrides.\n            Nevertheless, Clarity strongly advises all users to visually check their applications after upgrading.\n        </p>\n        <p>\n            More information on SASS/SCSS convenience functions that have been added to Clarity to assist with the use of typography can be found in the typography documentation.\n        </p>\n    </li>\n</ul>\n\n<h2>Bug Fixes</h2>\n<ul class=\"list\">\n    <li bug-fix>\n        Vertical alignment issue with the labels in Firefox\n    </li>\n    <li bug-fix>\n        Row arrow alignment issue with stack views in Firefox and IE\n    </li>\n    <li bug-fix>\n        Toggle switch alignment issue in Firefox and MSEdge\n    </li>\n    <li bug-fix>\n        Vertical alignment issue with buttons in IE (not Edge)\n    </li>\n    <li bug-fix>\n        Fixed a padding issue with text fields in IE10\n    </li>\n    <li bug-fix>\n        Hex code display in color contrast demo is not visible in IE10\n    </li>\n</ul>\n\n<h2>Other Changes</h2>\n<ul class=\"list\">\n    <li>\n        Add TSLint to Clarity\n    </li>\n    <li>\n        Optimize base64 Clarity fonts\n    </li>\n    <li>\n        Address additional cases for tabs including multi-level, scrolling, and usage in different areas like wizards and modals\n    </li>\n    <li>\n        Dropdowns Refactor - Add classes on the host element instead of nesting them\n    </li>\n    <li>\n        Upgrade website to 0.4.0\n    </li>\n</ul>\n</ng-template>\n\n\n\n<!-- Release Template 0.4.1-->\n\n<ng-template [clrRelease]=\"'0.4.1'\">\n\n<h2>Highlights</h2>\n<ul class=\"list-unstyled whats-new-highlights\">\n    <li>\n        <h6>Add a medium spinner size</h6>\n        <p>Clarity Spinners now support 3 sizes:</p>\n        <ul>\n            <li><code class=\"clr-code\">.spinner-sm</code></li>\n            <li><code class=\"clr-code\">.spinner-md</code></li>\n            <li><code class=\"clr-code\">.spinner-lg</code></li>\n        </ul>\n        <p><code class=\"clr-code\">.spinner-inline</code> is always a small sized spinner and can be used with text.</p>\n    </li>\n    <li>\n        <h6>Allow forms to use a grid layout</h6>\n        <p>\n            Clarity Forms can now be used within Grids by extending the <code class=\"clr-code\">.row</code> class on a <code class=\"clr-code\">.form-group</code> and wrapping the form fields in column classes.\n        </p>\n    </li>\n    <li>\n        <h6>Add inputs/outputs to tabs and remove unnecessary wrapper elements</h6>\n        <p>\n            While the markup hasn't changed for the tabs, the final rendered HTML looks a bit different with this release. Most notable changes are:\n        </p>\n\n        <ul class=\"list\" style=\"list-style: disc; margin-top: 24px\">\n            <li>\n                Moved most of the attributes to <code class=\"clr-code\">&lt;clr-tab-link&gt;&lt;/clr-tab-link&gt;</code> and <code class=\"clr-code\">&lt;clr-tab-content&gt;&lt;/clr-tab-content&gt;</code> tags from their children.\n            </li>\n            <li>\n                <code class=\"clr-code\">.active</code> class applied to the active <code class=\"clr-code\">&lt;clr-tab-link&gt;&lt;/clr-tab-link&gt;</code> and <code class=\"clr-code\">&lt;clr-tab-content&gt;&lt;/clr-tab-content&gt;</code> tags.\n            </li>\n            <li>\n                Ability to assign custom id's to <code class=\"clr-code\">&lt;clr-tab-link&gt;&lt;/clr-tab-link&gt;</code> and <code class=\"clr-code\">&lt;clr-tab-content&gt;&lt;/clr-tab-content&gt;</code> tags\n            </li>\n            <li>\n                Removed <code class=\"clr-code\">&lt;li&gt;&lt;/li&gt;</code> tags in the tab links\n            </li>\n        </ul>\n        <div style=\"margin-top: 24px\">\n            This is a simplified version of what the markup renders to in the browser:\n            <h6>Until 0.4.0:</h6>\n            <pre><code clr-code-highlight=\"language-html\">\n&lt;clr-tabs&gt;\n    &lt;ul class=&quot;nav&quot; role=&quot;tablist&quot;&gt;\n        &lt;clr-tab-link&gt;\n            &lt;li class=&quot;nav-item&quot; role=&quot;presentation&quot;&gt;\n            &lt;a class=&quot;nav-link active&quot; href=&quot;#&quot;\n                role=&quot;tab&quot; id=&quot;clr-tabs-0-tab-0&quot;\n                aria-selected=&quot;true&quot; aria-controls=&quot;clr-tabs-0-content-0&quot;&gt;\n                ...\n            &lt;/a&gt;\n            &lt;/li&gt;\n        &lt;/clr-tab-link&gt;\n        ...\n    &lt;/ul&gt;\n    &lt;clr-tab-content&gt;\n        &lt;section role=&quot;tabpanel&quot; id=&quot;clr-tabs-0-content-0&quot; aria-hidden=&quot;false&quot; aria-labelledby=&quot;clr-tabs-0-tab-0&quot;&gt;\n        ...\n        &lt;/section&gt;\n    &lt;/clr-tab-content&gt;\n    ...\n&lt;/clr-tabs&gt;\n</code></pre>\n            <h6>In 0.4.1:</h6>\n            <pre><code clr-code-highlight=\"language-html\">\n&lt;clr-tabs&gt;\n    &lt;ul class=&quot;nav&quot; role=&quot;tablist&quot;&gt;\n        &lt;clr-tab-link class=&quot;nav-item\n        active&quot; role=&quot;presentation&quot;\n        id=&quot;link1&quot; aria-selected=&quot;true&quot;\n        aria-controls=&quot;content1&quot;&gt;\n            &lt;a class=&quot;nav-link&quot; href=&quot;#&quot; role=&quot;tab&quot;&gt;\n            ...\n            &lt;/a&gt;\n        &lt;/clr-tab-link&gt;\n    &lt;/ul&gt;\n    &lt;clr-tab-content role=&quot;tabpanel&quot;\n        id=&quot;content1&quot; aria-hidden=&quot;false&quot;\n        aria-labelledby=&quot;link1&quot;\n        data-hidden=&quot;false&quot;\n        class=&quot;active&quot;&gt;\n        &lt;section&gt;\n        ...\n        &lt;/section&gt;\n    &lt;/clr-tab-content&gt;\n&lt;/clr-tabs&gt;\n</code></pre>\n        </div>\n    </li>\n</ul>\n\n<h2>Bug Fixes</h2>\n<ul class=\"list\">\n    <li bug-fix>\n        Refactor toggles to use baselineRem and fix vertical alignment issues\n    </li>\n</ul>\n\n<h2>Other Changes</h2>\n<ul class=\"list\">\n    <li>\n        Upgrade to BS4 Alpha 4\n    </li>\n    <li>\n        Add grid flex items vertical and horizontal alignment demos to the website\n    </li>\n    <li>\n        Revisit color for selected state\n    </li>\n</ul>\n</ng-template>\n\n\n\n<!-- Release Template 0.3.6-->\n\n<ng-template [clrRelease]=\"'0.3.6'\">\n\n<h2>Changes</h2>\n<ul class=\"list-unstyled\">\n    <li>\n        Dropdowns Refactor - Add classes on the host element instead of nesting them\n    </li>\n</ul>\n</ng-template>\n\n\n\n<!-- Release Template 0.3.5-->\n\n<ng-template [clrRelease]=\"'0.3.5'\">\n\n<h2>Highlights</h2>\n<ul class=\"list-unstyled whats-new-highlights\">\n    <li>\n        <h6>Build optimization</h6>\n        <p>Improves Clarity build, reducing build time by 80-90%. Also fixes a SASS/SCSS issue that was preventing Clarity build script from running on Windows. </p>\n    </li>\n</ul>\n\n<h2>Bug Fixes</h2>\n<ul class=\"list\">\n    <li bug-fix>\n        App Level Alert is not vertically aligned when alert action is not present\n    </li>\n    <li bug-fix>\n        Fix build issues on windows machine\n    </li>\n    <li bug-fix>\n        Header sub areas should have a constant height\n    </li>\n</ul>\n\n<h2>Other Changes</h2>\n<ul class=\"list\">\n    <li>\n        Document the &quot;Application Structure and Layout&quot;\n    </li>\n    <li>\n        Create Documentation for Grids\n    </li>\n    <li>\n        Add event-stream to package.json\n    </li>\n    <li>\n        Update Alert Icons\n    </li>\n    <li>\n        Move application structure and layout to the website\n    </li>\n    <li>\n        Stack View Editor: Design indicator that a value has been changed\n    </li>\n    <li>\n        Document Navigation Structure\n    </li>\n    <li>\n        Stack View Editor: Style the remove &quot;X&quot;\n    </li>\n</ul>\n</ng-template>\n\n\n\n<!-- Release Template 0.3.3-->\n\n<ng-template [clrRelease]=\"'0.3.3'\">\n\n<h2>Bug Fixes</h2>\n<ul class=\"list\">\n    <li bug-fix>\n        Header bug - Divider disappears when screen is resized\n    </li>\n    <li bug-fix>\n        Fix grid row negative right margin\n    </li>\n    <li bug-fix>\n        Clicking on the error icon in an input field should display the error\n    </li>\n    <li bug-fix>\n        [Seed] Fix karma to exit properly\n    </li>\n</ul>\n\n<h2>Other Changes</h2>\n<ul class=\"list\">\n    <li>\n        Fix alert demos to show alert icons\n    </li>\n    <li>\n        Create a landing page for Clarity\n    </li>\n    <li>\n        Move UI grid to the website\n    </li>\n</ul>\n</ng-template>\n\n\n\n<!-- Release Template 0.3.4-->\n\n<ng-template [clrRelease]=\"'0.3.4'\">\n\n<h2>Bug Fixes</h2>\n<ul class=\"list\">\n    <li bug-fix>\n        Form field bottom border inching up\n    </li>\n    <li bug-fix>\n        Card group doesn&#39;t wrap in IE 10\n    </li>\n    <li bug-fix>\n        In seed, e2e test is throwing error when using gulp\n    </li>\n    <li bug-fix>\n        Checkboxes and radios with empty labels lose alignment in forms\n    </li>\n    <li bug-fix>\n        Clarity icon fix\n    </li>\n</ul>\n\n<h2>Other Changes</h2>\n<ul class=\"list\">\n    <li>\n        Design for blocking user input while spinner is visible\n    </li>\n    <li>\n        Remove research tab from component pages\n    </li>\n    <li>\n        Use Clarity dropdowns for the cards overflow menu\n    </li>\n    <li>\n        Restyle example text string used beneath input lines in forms\n    </li>\n    <li>\n        Remove hover effect on flat buttons\n    </li>\n</ul>\n</ng-template>\n\n\n\n<!-- Release Template 0.3.2-->\n\n<ng-template [clrRelease]=\"'0.3.2'\">\n\n<h2>Highlights</h2>\n<ul class=\"list-unstyled whats-new-highlights\">\n    <li>\n        <h6>App Level Alerts</h6>\n        <p>An app-level alert appears at the top of the screen, above the application header. This alert is reserved for a system-level message.</p>\n        <pre><code clr-code-highlight=\"language-html\">\n&lt;div class=&quot;alert alert-app-level alert-danger&quot;&gt;\n    &lt;button type=&quot;button&quot; class=&quot;close&quot; aria-label=&quot;Close&quot;&gt;\n        &lt;span aria-hidden=&quot;true&quot;&gt;&amp;times;&lt;/span&gt;\n    &lt;/button&gt;\n    &lt;div class=&quot;alert-item&quot;&gt;\n        &lt;div class=&quot;alert-text&quot;&gt;\n            Alert Type: Danger\n        &lt;/div&gt;\n        &lt;div class=&quot;alert-actions&quot;&gt;\n            &lt;button class=&quot;btn alert-action&quot;&gt;Action&lt;/button&gt;\n        &lt;/div&gt;\n    &lt;/div&gt;\n&lt;/div&gt;\n</code></pre>\n    </li>\n    <li>\n        <h6>Inverse Buttons, update outline buttons and add min and max widths to buttons</h6>\n        <p>Inverse buttons can be used on dark backgrounds</p>\n        <pre><code clr-code-highlight=\"language-html\">\n&lt;button type=&quot;submit&quot; class=&quot;btn btn-inverse&quot;&gt;Inverse&lt;/button&gt;\n</code></pre>\n    </li>\n</ul>\n\n<h2>Bug Fixes</h2>\n<ul class=\"list\">\n    <li bug-fix>\n        The closing &quot;x&quot; in an alert seems vertically mis-aligned\n    </li>\n    <li bug-fix> Stackviews do not render correctly on IE\n    </li>\n    <li bug-fix> Buttons alignment bug fix\n    </li>\n</ul>\n\n<h2>Other Changes</h2>\n<ul class=\"list\">\n    <li>\n        Improve sass compilation watch\n    </li>\n    <li>\n        Clean up gulpfile.js\n    </li>\n    <li>\n        Create variables for common Clarity height/width values\n    </li>\n    <li>\n        Create a landing page for Clarity Demos\n    </li>\n</ul>\n</ng-template>\n\n\n\n<!-- Release Template 0.3.1-->\n\n<ng-template [clrRelease]=\"'0.3.1'\">\n\n<h2>\n    Highlights</h2>\n<ul class=\"list-unstyled whats-new-highlights\">\n    <li>\n        <h6>Static progress bar</h6>\n        <p>Static progress bars are progress bars that do not animate when they are drawn in the DOM. This allows them to be used inside of Kendo UI data grids and other components that redraw themselves at set intervals.</p>\n        <p>Because IE/Edge offered no way to override the default animation of HTML5 progress elements, a new component had to be created. This component consists of a <code class=\"clr-code\">.progress-static</code> container with a <code class=\"clr-code\">.progress-meter</code>            element inside of it.</p>\n        <p>The <code class=\"clr-code\">.progress-meter</code> component has to use a <code class=\"clr-code\">data-value</code> attribute instead of a <code class=\"clr-code\">value</code> attribute. Other than that it works exactly the same as the existing progress\n            bar component.</p>\n\n        <p>Existing progress bar HTML...</p>\n        <pre><code clr-code-highlight=\"language-html\">\n&lt;div class=&quot;progress-static&quot;&gt;\n    &lt;div class=&quot;progress-meter&quot; data-value=&quot;16&quot;&gt;&lt;/div&gt;\n&lt;/div&gt;\n</code></pre>\n        <p>Static progress bar HTML...</p>\n        <pre><code clr-code-highlight=\"language-html\">\n&lt;div class=&quot;progress demo&quot;&gt;\n    &lt;progress max=&quot;100&quot; value=&quot;16&quot; data-displayval=&quot;16%&quot;&gt;&lt;/progress&gt;\n&lt;/div&gt;\n</code></pre>\n    </li>\n    <li>\n        <h6>Inline progress bars (Progress Blocks and Groups)</h6>\n        <ul class=\"list\">\n            <li>A <code class=\"clr-code\">.progress-block</code> component was added to the progress-bar which allows the use of <code class=\"clr-code\">label</code>s and <code class=\"clr-code\">span</code>s to share horizontal space with the progress bar.</li>\n            <li>A <code class=\"clr-code\">.progress-group</code> component was added to the progress-bar to enable content above and below a progress bar as well as allowing for stacked progress bars.</li>\n            <li><code class=\"clr-code\">.progress-block</code> and <code class=\"clr-code\">.progress-group</code> can be combined and both work inside of cards.</li>\n        </ul>\n    </li>\n</ul>\n\n<h2>Bug Fixes</h2>\n<ul class=\"list\">\n    <li bug-fix>\n        Links in header nav are getting underlines on them\n    </li>\n    <li bug-fix>\n        Clarity header logo jumps up when there is no title next to it\n    </li>\n    <li bug-fix>\n        Clarity website 404s no longer directing to the error page\n    </li>\n    <li bug-fix>\n        Re-add support for css animation\n    </li>\n    <li bug-fix>\n        Implement the new changes to tabs based on the new design spec\n    </li>\n    <li bug-fix>\n        Fix Checkbox jitter issue in Safari\n    </li>\n    <li bug-fix>\n        Fix margins of components used in a grid\n    </li>\n</ul>\n\n<h2>Other Changes</h2>\n<ul class=\"list\">\n    <li>\n        Clean up tests to not use the deprecated jasmine functions inside @angular/core/testing\n    </li>\n    <li>\n        Precompile components for router\n    </li>\n    <li>\n        Add note to login doc about background color/image\n    </li>\n    <li>\n        Add content to the web site to support the new table style\n    </li>\n    <li>\n        Create documentation for lists\n    </li>\n    <li>\n        Improve the documentation of input fields to include documenting input validation\n    </li>\n    <li>\n        Add code coverage (Istanbul) to seed\n    </li>\n</ul>\n</ng-template>\n\n\n\n<!-- Release Template 0.2.10-->\n\n<ng-template [clrRelease]=\"'0.2.10'\">\n\n<h2>Highlights</h2>\n<ul class=\"list-unstyled whats-new-highlights\">\n    <li>\n        <h6>Add new list styles</h6>\n        <p>Styles for <code class=\"clr-code\">ol.list</code> ordered lists were added. A <code class=\"clr-code\">.compact</code> classname was also added. This classname shrinks font-size and line-height of all types of lists.</p>\n\n        <pre class=\" language-html\"><code class=\" language-html\">\n&lt;ul class=&quot;list compact&quot;&gt;\n    ...\n&lt;/ul&gt;\n</code></pre>\n    </li>\n</ul>\n\n<h2>Bug Fixes</h2>\n<ul class=\"list\">\n    <li bug-fix>Fixed incorrect margin on lists inside of cards\n    </li>\n    <li bug-fix>Fixed double-margin on cards inside flexbox grid\n    </li>\n</ul>\n</ng-template>\n\n\n\n<!-- Release Template 0.3.0-->\n\n<ng-template [clrRelease]=\"'0.3.0'\">\n\n<h2>Highlights</h2>\n<ul class=\"list-unstyled whats-new-highlights\">\n    <li>\n        <h6>Simpler imports</h6>\n        <p>Now you can import all of our components from clarity-angular:</p>\n\n        <pre><code clr-code-highlight=\"language-js\">\nimport {{ '{' }} DROPDOWN_DIRECTIVES {{ '}' }} from 'clarity-angular';\nimport {{ '{' }} Modal {{ '}' }} from 'clarity-angular';\n...\n</code></pre>\n        <p>If you are using system.js, you also need to add the package config for the above import statements to work:\n        </p>\n        <pre><code clr-code-highlight=\"language-js\">\nSystem.config({{ '{' }}\n    packages: {{ '{' }}\n        'clarity-angular' : {{ '{' }} main: 'index.js', defaultExtension: 'js' {{ '}' }},\n        ...\n    {{ '}' }},\n    ...\n{{ '}' }});\n</code></pre>\n\n    </li>\n    <li>\n        <h6>Upgrade to Angular 2 RC4</h6>\n        <p>Using <a href=\"https://angular.io/docs/ts/latest/guide/animations.html\" target=\"_blank\">Angular's new animation system</a> in Modal and Stackview.</p>\n    </li>\n\n    <li>\n        <h6>Taking actions on alerts</h6>\n        <p>Alerts can now support alert actions. Actions can be dropdowns or links.</p>\n        <p>Dropdowns as alert actions:</p>\n\n        <pre><code clr-code-highlight=\"language-html\">\n&lt;div class=&quot;alert alert-danger&quot;&gt;\n    &lt;div class=&quot;alert-item&quot;&gt;\n        &lt;span&gt;Lorem ipsum dolor sit amet, consectetur adipisicing elit.&lt;/span&gt;\n        &lt;div class=&quot;alert-actions&quot;&gt;\n            &lt;div class=&quot;alert-action dropdown bottom-right&quot;&gt;\n                &lt;a class=&quot;dropdown-toggle&quot;&gt;Actions&lt;/a&gt;\n                &lt;div class=&quot;dropdown-menu&quot;&gt;\n                    &lt;a class=&quot;dropdown-item&quot; href=&quot;javascript://&quot;&gt;Shutdown&lt;/a&gt;\n                    &lt;a class=&quot;dropdown-item&quot; href=&quot;javascript://&quot;&gt;Suspend&lt;/a&gt;\n                    &lt;a class=&quot;dropdown-item&quot; href=&quot;javascript://&quot;&gt;Reboot&lt;/a&gt;\n                    &lt;a class=&quot;dropdown-item&quot; href=&quot;javascript://&quot;&gt;Delete&lt;/a&gt;\n                &lt;/div&gt;\n            &lt;/div&gt;\n        &lt;/div&gt;\n    &lt;/div&gt;\n&lt;/div&gt;\n</code></pre>\n\n        <p>Links as alert actions:</p>\n\n        <pre><code clr-code-highlight=\"language-html\">\n&lt;div class=&quot;alert alert-info&quot;&gt;\n    &lt;button type=&quot;button&quot; class=&quot;close&quot; aria-label=&quot;Close&quot;&gt;\n        &lt;span aria-hidden=&quot;true&quot;&gt;&times;&lt;/span&gt;\n    &lt;/button&gt;\n    &lt;div class=&quot;alert-item&quot;&gt;\n        &lt;span class=&quot;alert-text&quot;&gt;\n            ...\n        &lt;/span&gt;\n        &lt;div class=&quot;alert-actions&quot;&gt;\n            &lt;a href=&quot;javascript://&quot; class=&quot;alert-action&quot;&gt;Acknowledge&lt;/a&gt;\n            &lt;a href=&quot;javascript://&quot; class=&quot;alert-action&quot;&gt;Reset to green&lt;/a&gt;\n        &lt;/div&gt;\n    &lt;/div&gt;\n&lt;/div&gt;\n</code></pre>\n    </li>\n\n    <li>\n        <h6>Inverse Spinners</h6>\n        <p>Use the <code class=\"clr-code\">.spinner-inverse</code> class to generate spinners for dark backgrounds:</p>\n\n        <pre><code clr-code-highlight=\"language-html\">\n&lt;span class=&quot;spinner spinner-inverse&quot;&gt;\n    Loading...\n&lt;/span&gt;\n</code></pre>\n    </li>\n</ul>\n\n<h2>Breaking Changes</h2>\n<ul class=\"list-unstyled whats-new-highlights\">\n    <li breaking-change>\n        <h6>Angular RC4</h6>\n        <p>In order to use Clarity 0.3.0 components, your web application must also be on Angular version RC4. Here are sample version numbers you could use in your <code class=\"clr-code\">package.json</code>:</p>\n\n        <pre><code clr-code-highlight=\"language-js\">\n\"dependencies\": {{ '{' }}\n    \"@angular/common\": \"2.0.0-rc.4\",\n    \"@angular/compiler\": \"2.0.0-rc.4\",\n    \"@angular/core\": \"2.0.0-rc.4\",\n    \"@angular/http\": \"2.0.0-rc.4\",\n    \"@angular/platform-browser\": \"2.0.0-rc.4\",\n    \"@angular/platform-browser-dynamic\": \"2.0.0-rc.4\",\n    \"@angular/router\": \"3.0.0-beta.1\",\n    \"@angular/upgrade\": \"2.0.0-rc.4\",\n    ...\n{{ '}' }}\n</code></pre>\n\n        <p>Refer to <a href=\"https://github.com/angular/angular/blob/master/CHANGELOG.md\" target=\"_blank\">Angular's changelog</a> for a complete list of breaking changes that may impact your application.</p>\n    </li>\n\n    <li breaking-change>\n        <h6>Modal and Stack View</h6>\n        <p>Because Angular animations are built on top of the <a href=\"https://w3c.github.io/web-animations/\" target=\"_blank\">Web Animations API</a>, your application must include <code class=\"clr-code\">web-animations.min.js</code> polyfill for the animation\n            to work on browsers that do not support it. You can add the polyfill by installing it on your app...</p>\n\n        <pre><code clr-code-highlight=\"language-js\">\n\"dependencies\": {{ '{' }}\n    ...\n    \"web-animations-js\": \"^2.2.1\",\n    ...\n{{ '}' }}\n</code></pre>\n\n        <p>...and including it in your application. A sample dev version of your <code class=\"clr-code\">index.html</code> might include something like:</p>\n\n        <pre><code clr-code-highlight=\"language-html\">\n&lt;script src=&quot;node_modules/web-animations-js/web-animations.min.js&quot;&gt;&lt;/script&gt;\n</code></pre>\n    </li>\n\n    <li breaking-change>\n        <h6>Form Validation</h6>\n        <p>The markup for validating forms has changed from...</p>\n\n        <pre><code clr-code-highlight=\"language-html\">\n&lt;div class=&quot;validated-input invalid&quot;&gt;\n    &lt;input type=&quot;text&quot; style=&quot;width:300px&quot;/&gt;\n    &lt;div aria-hidden=&quot;true&quot; class=&quot;tooltip tooltip-md&quot;&gt;This field is required.&lt;/div&gt;\n&lt;/div&gt;\n</code></pre>\n\n        <p>...to...</p>\n\n        <pre><code clr-code-highlight=\"language-html\">\n    &lt;div class=&quot;tooltip tooltip-validation invalid&quot;&gt;\n        &lt;input type=&quot;text&quot; style=&quot;width:300px&quot;/&gt;\n        &lt;span class=&quot;tooltip-content&quot;&gt;This field is required.&lt;/span&gt;\n    &lt;/div&gt;\n        </code></pre>\n    </li>\n\n    <li breaking-change>\n        <h6>Login Form Refactor</h6>\n        <p>Login forms now have to be wrapped with a <code class=\"clr-code\">.login-wrapper</code>. This was done to support login backgrounds and fix an IE 10/11 vertical alignment issue.</p>\n\n        <pre><code clr-code-highlight=\"language-html\">\n&lt;div class=&quot;login-wrapper&quot;&gt;\n    &lt;div class=&quot;login&quot;&gt;\n        ...\n    &lt;/div&gt;\n&lt;/div&gt;\n</code></pre>\n    </li>\n\n    <li breaking-change>\n        <h6>Login Validation Refactor</h6>\n        <p>The login form validation markup has changed from...</p>\n\n        <pre><code clr-code-highlight=\"language-html\">\n&lt;div class=&quot;error active&quot;&gt;\n    &lt;span class=&quot;alert-icon icon-danger-white&quot;&gt;&lt;/span&gt;\n    Invalid user name or password\n&lt;/div&gt;\n</code></pre>\n\n        <p>...to...</p>\n\n        <pre><code clr-code-highlight=\"language-html\">\n&lt;div class=&quot;error active&quot;&gt;\n    Invalid user name or password\n&lt;/div&gt;\n</code></pre>\n\n        <p>The need to explicitly use the icon markup was removed.</p>\n    </li>\n\n    <li breaking-change>\n        <h6>Layout Refactor</h6>\n        <p>Clarity layout has changed from...</p>\n\n        <pre><code clr-code-highlight=\"language-html\">\n&lt;div class=&quot;main-nav&quot;&gt;\n    &lt;header class=&quot;header&quot;&gt;&lt;/header&gt;\n    &lt;nav class=&quot;sub-nav&quot;&gt;&lt;/nav&gt;\n&lt;/div&gt;\n&lt;div class=&quot;main-container&quot;&gt;\n    &lt;div class=&quot;content-area&quot;&gt;&lt;/div&gt;\n    &lt;div class=&quot;side-nav&quot;&gt;&lt;/div&gt;\n&lt;/div&gt;\n</code></pre>\n\n        <p>...to...</p>\n\n        <pre><code clr-code-highlight=\"language-html\">\n&lt;div class=&quot;main-container&quot;&gt;\n    &lt;header class=&quot;header&quot;&gt;&lt;/header&gt;\n    &lt;nav class=&quot;sub-nav&quot;&gt;&lt;/nav&gt;\n    &lt;div class=&quot;content-container&quot;&gt;\n        &lt;div class=&quot;content-area&quot;&gt;&lt;/div&gt;\n        &lt;div class=&quot;side-nav&quot;&gt;&lt;/div&gt;\n    &lt;/div&gt;\n&lt;/div&gt;\n</code></pre>\n\n        <p>This refactor gives us the ability to add other elements like app level alerts or footers to the <code class=\"clr-code\">.main-container</code> which is now a vertical flexbox. Additional sections can also be added to the <code class=\"clr-code\">.content-container</code>            (a horizontal flexbox) which contains the <code class=\"clr-code\">.sidenav</code> and the <code class=\"clr-code\">.content-area</code> after this change.</p>\n    </li>\n\n    <li breaking-change>\n        <h6>Alerts</h6>\n        <p>Alert markup has changed from...</p>\n\n        <pre><code clr-code-highlight=\"language-html\">\n&lt;div class=&quot;alert alert-danger alert-sm&quot;&gt;\n    &lt;div class=&quot;alert-item&quot;&gt;\n        &lt;span class=&quot;alert-icon icon-danger&quot;&gt;&lt;/span&gt;\n        &lt;span class=&quot;alert-text&quot;&gt;Alert in a card.&lt;/span&gt;\n    &lt;/div&gt;\n    &lt;button type=&quot;button&quot; class=&quot;close&quot; aria-label=&quot;Close&quot;&gt;\n        &lt;span aria-hidden=&quot;true&quot;&gt;&amp;times;&lt;/span&gt;\n    &lt;/button&gt;\n&lt;/div&gt;\n</code></pre>\n\n        <p>...to...</p>\n\n        <pre><code clr-code-highlight=\"language-html\">\n&lt;div class=&quot;alert alert-danger alert-sm&quot;&gt;\n    &lt;button type=&quot;button&quot; class=&quot;close&quot; aria-label=&quot;Close&quot;&gt;\n        &lt;span aria-hidden=&quot;true&quot;&gt;&amp;times;&lt;/span&gt;\n    &lt;/button&gt;\n    &lt;div class=&quot;alert-item&quot;&gt;\n        &lt;span&gt;Alert in a card.&lt;/span&gt;\n    &lt;/div&gt;\n&lt;/div&gt;\n</code></pre>\n\n        <p>Changes:</p>\n        <ol class=\"list\">\n            <li>Move the <code class=\"clr-code\">.close</code> button on the top before the <code class=\"clr-code\">.alert-item</code></li>\n            <li>Remove the <code class=\"clr-code\">.alert-icon</code> markup from <code class=\"clr-code\">.alert-item</code></li>\n        </ol>\n    </li>\n\n    <li breaking-change>\n        <h6>Header</h6>\n        <p>Header branding area markup has change from...</p>\n\n        <pre><code clr-code-highlight=\"language-html\">\n&lt;div class=&quot;branding&quot;&gt;\n    &lt;a&gt;&lt;img src=&quot;img/vmw-logo.svg&quot; class=&quot;logo&quot;&gt;&lt;/a&gt;\n    &lt;span class=&quot;title&quot;&gt;Clarity Demo&lt;/span&gt;\n&lt;/div&gt;\n</code></pre>\n\n        <p>...to...</p>\n\n        <pre><code clr-code-highlight=\"language-html\">\n&lt;div class=&quot;branding&quot;&gt;\n    &lt;a href=&quot;#&quot;&gt;\n        &lt;span class=&quot;clr-icon clr-vmw-logo&quot;&gt;&lt;/span&gt;\n        &lt;span class=&quot;title&quot;&gt;Clarity Demo&lt;/span&gt;\n    &lt;/a&gt;\n&lt;/div&gt;\n</code></pre>\n\n        <p>Header Search markup has changed from...</p>\n\n        <pre><code clr-code-highlight=\"language-html\">\n&lt;div class=&quot;search-box&quot;&gt;\n    &lt;span class=&quot;nav-icon fa fa-search&quot;&gt;&lt;/span&gt;\n    &lt;input type=&quot;text&quot; placeholder=&quot;Search for VMs...&quot;&gt;\n&lt;/div&gt;\n</code></pre>\n\n        <p>...to...</p>\n\n        <pre><code clr-code-highlight=\"language-html\">\n&lt;form class=&quot;search-box&quot;&gt;\n    &lt;span class=&quot;nav-icon fa fa-search&quot;&gt;&lt;/span&gt;\n    &lt;input type=&quot;text&quot; placeholder=&quot;Search for VMs...&quot;&gt;\n&lt;/form&gt;\n</code></pre>\n    </li>\n</ul>\n\n\n<h2>Bug Fixes</h2>\n<ul class=\"list\">\n    <li bug-fix>Fix master build&#39;s warning message\n    </li>\n    <li bug-fix>Update the Clarity grid rows with the correct margins\n    </li>\n    <li bug-fix>Multiple scroll bars appear when screen is resized in the new layout\n    </li>\n</ul>\n\n<h2>Other Changes</h2>\n<ul class=\"list\">\n    <li>Update typography documentation\n    </li>\n    <li>Icons - Implementation: HTML/CSS\n    </li>\n    <li>Define default illustration for the background of the login form\n    </li>\n    <li>Finalize the list component\n    </li>\n    <li>Support product logo as a div/span svg background\n    </li>\n    <li>Implement the popover/tooltip component\n    </li>\n    <li>Update clarity seed to use 0.3.0\n    </li>\n    <li>Update build info (CONTRIBUTING.md, peer dependency versions, etc) to current\n    </li>\n</ul>\n</ng-template>\n\n\n\n<!-- Release Template 0.2.9-->\n\n<ng-template [clrRelease]=\"'0.2.9'\">\n\n<h2>Highlights</h2>\n<ul class=\"list-unstyled whats-new-highlights\">\n    <li>\n        <h6>Expose a close event in the alert angular component</h6>\n        <p>Allows developers to bind callbacks to the alert close event in their templates as in the following example:</p>\n\n        <pre class=\" language-html\"><code class=\" language-html\">\n&lt;clr-alert [clrAlertType]=&quot;&apos;alert-success&apos;&quot; (clrAlertClosedChange)=&quot;yourMethod()&quot;&gt;\n    &hellip;...&hellip;\n&lt;/clr-alert&gt;\n</code></pre>\n    </li>\n</ul>\n\n<h2>Other Changes</h2>\n<ul class=\"list\">\n    <li>Implement new &quot;available components&quot; page design for website\n    </li>\n    <li>Add code highlight to table demos\n    </li>\n    <li>Fix the width of the &quot;what&#39;s new&quot; page on the website\n    </li>\n    <li>Improve the &quot;available components&quot; table in the &quot;components&quot; page on the website\n    </li>\n    <li>Add analytics to website\n    </li>\n</ul>\n</ng-template>\n\n\n\n<!-- Release Template 0.2.8-->\n\n<ng-template [clrRelease]=\"'0.2.8'\">\n\n<h2>Highlights</h2>\n<ul class=\"list-unstyled whats-new-highlights\">\n    <li>\n        <h6>Compact styling for forms</h6>\n        <p>Extends forms with a class (<code class=\"clr-code\">form.compact</code>) that decreases space between rows on the form.</p>\n    </li>\n    <li>\n        <h6 new-component>Add code block highlighting to UI/NG components</h6>\n        <p>Adds a code block highlighting UI and Angular component (<code class=\"clr-code\">clr-code-highlight</code>) to Clarity.</p>\n    </li>\n    <li>\n        <h6>Compact, non-bordered, and vertical HTML table styles</h6>\n        <p>0.2.8 introduced several variants of the HTML table styles in Clarity. These include a compact style (<code class=\"clr-code\">.table-compact</code>) decreases the height of table rows from 36px to 24px, a non-bordered style (<code class=\"clr-code\">.table-noborder</code>)\n            removes the border around HTML tables and in between rows (except for below the header), and a vertical style (<code class=\"clr-code\">.table-vertical</code>) that displays an HTML table with the same orientation as the key-value layout of\n            a Stack View. While not documented on the website yet, examples are available on the Clarity demos in the git repo.</p>\n    </li>\n</ul>\n\n<h2>Bug Fixes</h2>\n<ul class=\"list\">\n    <li bug-fix>Tabs angular component does not render correctly in IE10\n    </li>\n</ul>\n\n<h2>Other Changes</h2>\n<ul class=\"list\">\n    <li>Make table font-size match stack-view font size\n    </li>\n</ul>\n</ng-template>\n\n\n\n<!-- Release Template 0.2.7-->\n\n<ng-template [clrRelease]=\"'0.2.7'\">\n\n<h2>Improvements</h2>\n<ul class=\"list-unstyled whats-new-highlights\">\n    <li>\n        <h6>Make first column of stack view sizable</h6>\n        <p>Overriding the width of the stack view's first column (labels) in CSS is now supported. Use this when the stack view is too wide or when you have an exact width of the first column.</p>\n    </li>\n</ul>\n\n<h2>Bug Fixes</h2>\n<ul class=\"list\">\n    <li bug-fix>Fixed typings error when compiling Clarity Seed for production\n    </li>\n    <li bug-fix>Rows from flexbox changes blowout some demos on clarity-demo\n    </li>\n    <li bug-fix>Put sidenav progress-bar demo back on the website\n    </li>\n</ul>\n\n<h2>Other Changes</h2>\n<ul class=\"list\">\n    <li>Add new Getting Started topics to TOC on website\n    </li>\n    <li>We need a &quot;How to file bugs&quot; section in get started on website\n    </li>\n</ul>\n</ng-template>\n\n\n\n<!-- Release Template 0.2.6-->\n\n<ng-template [clrRelease]=\"'0.2.6'\">\n\n<h2>Highlights</h2>\n<ul class=\"list-unstyled whats-new-highlights\">\n    <li new-component>\n        <h6>Stack View</h6>\n        <p>A stack view displays key/value pairs, which users can expand to show more detail. Stack views are designed for use in the main content area and modals.</p>\n    </li>\n    <li>\n        <h6>Highlight colors added to color palette</h6>\n        <p>Added a set of highlight colors to the Clarity color palette are intended for use in charts, highlighting search results, badging, and also text fields and selection.</p>\n    </li>\n</ul>\n\n<h2>Improvements</h2>\n<ul class=\"list-unstyled whats-new-highlights\">\n    <li>\n        <h6>Close dropdowns on item click</h6>\n        <p>New Angular option (clrCloseMenuOnItemClick) to close the dropdown menu when a dropdown item is clicked.</p>\n    </li>\n</ul>\n\n<h2>Bug Fixes</h2>\n<ul class=\"list\">\n    <li bug-fix>ScrollingService unit test fails\n    </li>\n    <li bug-fix>Tabs look jittery on some screens especially with longer text on the item\n    </li>\n    <li bug-fix>Typescript error in Prod Build\n    </li>\n    <li bug-fix>Make it so an item within a select box doesn't have more than one line\n    </li>\n    <li bug-fix>Fix indent on bulleted lists on website\n    </li>\n</ul>\n\n<h2>Other Changes</h2>\n<ul class=\"list\">\n    <li>Select highlight colors\n    </li>\n    <li>Standardize the way we package Clarity components\n    </li>\n    <li>Add a &quot;What&#39;s new&quot; section to the website\n    </li>\n    <li>Change the order of alerts in the demo\n    </li>\n    <li>Add the sketch template creators to the list of contributors on the website\n    </li>\n    <li>Add a &quot;loop&quot; example to the progress bar demo\n    </li>\n    <li>Add an &quot;updated&quot; signal to the left-side navigation on the website\n    </li>\n    <li>Add a quick link to &quot;components&quot; on the home page\n    </li>\n</ul>\n</ng-template>\n\n\n\n<!-- Release Template 0.2.4-->\n\n<ng-template [clrRelease]=\"'0.2.4'\">\n\n<h2>Breaking Changes</h2>\n<ul class=\"list-unstyled whats-new-highlights\">\n    <li breaking-change>\n        <h6>Switch over to flexbox grid in Clarity</h6>\n        <p>\n            This release moves the Clarity layout grid away from float-based columns to a flexbox style grid. There is a chance that teams using the Bootstrap grid in Clarity in nonstandard ways may see breaking changes.\n        </p>\n    </li>\n</ul>\n\n<h2>Highlights</h2>\n<ul class=\"list-unstyled whats-new-highlights\">\n    <li>\n        <h6>Build Clarity Seed</h6>\n        <p>\n            This is a seed project for angular 2 apps using Clarity. The goal of this project is to offer a self-contained \"getting started\" project for any team that wishes to build an angular 2 application using Clarity. We included the features that we think are\n            'common' for all projects, while giving room for individuals to easily extend it to fit their project's specific needs. The build system written with gulp and the npm scripts simply run the corresponding gulp commands.\n        </p>\n    </li>\n</ul>\n\n<h2>Bug Fixes</h2>\n<ul class=\"list\">\n    <li bug-fix>Login page needs spinner\n    </li>\n</ul>\n\n<h2>Other Changes</h2>\n<ul class=\"list\">\n    <li>Add table styles to Clarity UI\n    </li>\n    <li>Create basic list component for Clarity UI\n    </li>\n    <li>Implement sidenav changes\n    </li>\n    <li>Build script for bundling for production\n    </li>\n    <li>Make Clarity build on Node 6.x\n    </li>\n    <li>Bundle angular app for Clarity website\n    </li>\n    <li>Documentation for tabs\n    </li>\n    <li>Documentation for progress bars\n    </li>\n    <li>Documentation for tooltips\n    </li>\n    <li>Update the &quot;Get started&quot; documentation to include seed project\n    </li>\n    <li>Static tab demo is using &quot;#&quot; in hrefs\n    </li>\n    <li>Side navigation on components page has funky indentation\n    </li>\n    <li>The link in &quot;tabs&quot; on the website takes you to the home page\n    </li>\n    <li>Set up a loading indicator for the website component pages\n    </li>\n    <li>Move progress bars to the Clarity website\n    </li>\n    <li>Move tabs to the Clarity website\n    </li>\n</ul>\n</ng-template>\n\n\n\n<!-- Release Template 0.2.5-->\n\n<ng-template [clrRelease]=\"'0.2.5'\">\n\n<h2>Highlights</h2>\n<ul class=\"list-unstyled whats-new-highlights\">\n    <li>\n        <h6>Build Clarity Seed</h6>\n        <p>\n            This is a seed project for angular 2 apps using Clarity. The goal of this project is to offer a self-contained \"getting started\" project for any team\nthat wishes to build an angular 2 application using Clarity. We included the features that we think are 'common' for all projects, while giving room for\nindividuals to easily extend it to fit their project's specific needs. The build system written with gulp and the npm scripts simply run the corresponding gulp commands.\n        </p>\n    </li>\n</ul>\n\n<h2>Other Changes</h2>\n<ul class=\"list\">\n<li>Plan and implement packaging for Sketch components\n</li>\n<li>Create content to support templates\n</li>\n<li>Add the Sketch template to the website\n</li>\n<li>Side navigation on Components page has funky indentation\n</li>\n<li>Cards in progress bar demo are clickable to href=&quot;#&quot;\n</li>\n<li>Bundle angular app for Clarity website\n</li>\n<li>Quick changes to stackview design\n</li>\n<li>Fix error messages in seed\n</li>\n</ul>\n\n</ng-template>\n\n\n\n<!-- Release Template 0.2.3-->\n\n<ng-template [clrRelease]=\"'0.2.3'\">\n\n<h2>Bug Fixes</h2>\n<ul class=\"list\">\n    <li bug-fix>Website is broken in Safari\n    </li>\n    <li bug-fix>Component pages don&#39;t work in IE10 and IE11\n    </li>\n</ul>\n</ng-template>\n\n"

/***/ })

});
//# sourceMappingURL=1.chunk.js.map