webpackJsonp([2,8],{

/***/ 379:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_common__ = __webpack_require__(48);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__utils_utils_module__ = __webpack_require__(162);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__community_component__ = __webpack_require__(442);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_router__ = __webpack_require__(47);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CommunityModule", function() { return CommunityModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





var route = [
    {
        path: "",
        component: __WEBPACK_IMPORTED_MODULE_3__community_component__["a" /* CommunityComponent */],
        data: {
            bodyClass: "layout-community",
            browserTitle: "Community"
        }
    }
];
var CommunityModule = (function () {
    function CommunityModule() {
    }
    return CommunityModule;
}());
CommunityModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["NgModule"])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_3__community_component__["a" /* CommunityComponent */],
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_0__angular_common__["CommonModule"],
            __WEBPACK_IMPORTED_MODULE_2__utils_utils_module__["a" /* UtilsModule */],
            __WEBPACK_IMPORTED_MODULE_4__angular_router__["a" /* RouterModule */].forChild(route)
        ],
        providers: []
    })
], CommunityModule);

//# sourceMappingURL=/Users/adityab/fork-website-clarity/src/community.module.js.map

/***/ }),

/***/ 442:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(7);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CommunityComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var CLARITYTEAM = __webpack_require__(674);
var CONTRIBUTORS = __webpack_require__(673);
var CommunityComponent = (function () {
    function CommunityComponent() {
        this.team = CLARITYTEAM.members;
        this.contributors = CONTRIBUTORS.contributors;
        this.teamImgUrl = "assets/images/team/";
    }
    return CommunityComponent;
}());
CommunityComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'community',
        template: __webpack_require__(675),
        host: {
            "[class.content-container]": "true"
        }
    })
], CommunityComponent);

//# sourceMappingURL=/Users/adityab/fork-website-clarity/src/community.component.js.map

/***/ }),

/***/ 673:
/***/ (function(module, exports) {

module.exports = {
	"contributors": [
		"Rob Patten",
		"Gail Chappell",
		"Etienne Le Sueur",
		"Victor Mejia",
		"Benjamin RICHARD",
		"Robert Pamfile",
		"Ioan Ungurean",
		"Yu Xin",
		"Roy Ling",
		"Ivan Donchev",
		"Yan Yixing",
		"Clement Cureau"
	]
};

/***/ }),

/***/ 674:
/***/ (function(module, exports) {

module.exports = {
	"members": [
		{
			"name": "Jehad Affoneh",
			"role": "Clarity Lead",
			"blurb": "Jehad started and continues to lead the Clarity project. He is involved in all stages of Clarity development. He loves engaging with designers and developers to understand their use cases and help them build solutions.",
			"twitter": "jaffoneh",
			"img": "affonehj.png",
			"workstreams": [
				"UX",
				"UI"
			]
		},
		{
			"name": "Scott Mathis",
			"role": "Developer/Researcher",
			"blurb": "Scott contributes to the look and feel of Clarity and works on the code. Scott's our ace researcher and storyteller. He has captured the stories of why we did what we did and the assumptions we've made.",
			"img": "scott.png",
			"workstreams": [
				"UX",
				"UI"
			]
		},
		{
			"name": "Eudes Petonnet-Vincent",
			"role": "clarityNG Lead",
			"blurb": "Eudes is the technical lead for Clarity. He spends most of his day working on the overall architecture of clarity-angular as well as building Angular components for Clarity.",
			"twitter": "EudesPV",
			"img": "eudes.png",
			"workstreams": [
				"UI",
				"CR",
				"NG"
			]
		},
		{
			"name": "Yen Ma",
			"role": "Designer",
			"blurb": "Yen is focused on all things design for Clarity. She is passionate about exploring new ways to improve and create enjoyable experiences and is a strong advocate for clean, modern, and easy to use products.",
			"img": "yen.png",
			"workstreams": [
				"UX",
				"CR"
			]
		},
		{
			"name": "Aditya Bhandari",
			"role": "Developer",
			"blurb": "Aditya implements clarityUI and Angular components. He often provides feedback and explorations on interactions.",
			"twitter": "adityarb",
			"img": "adityab.png",
			"workstreams": [
				"UI",
				"CR",
				"NG"
			]
		},
		{
			"name": "Jeeyun Lim",
			"role": "Developer",
			"blurb": "Jeeyun is working on clarityCORE, which encompasses various tools for building, developing, and shipping Clarity. She's also creating Clarity's Angular components and making sure that the components are beautiful as well as sensible and functional.",
			"img": "jeeyun.png",
			"workstreams": [
				"CR",
				"NG"
			]
		},
		{
			"name": "Red Dolan",
			"role": "Designer",
			"blurb": "Red works on strategy and design interactions for Clarity. He also researches user-driven needs and tests those solutions. Contact him for any Sketch template or UX-related questions or feedback.",
			"twitter": "reddolan",
			"img": "red.png",
			"workstreams": [
				"UX",
				"CR"
			]
		},
		{
			"name": "Lilia Kim",
			"role": "Visual Designer",
			"blurb": "Lilia researches what's needed for Clarity and delivers the visual designs.  She works on layout design, component design, and icons.",
			"img": "lilia.png",
			"workstreams": [
				"UX"
			]
		},
		{
			"name": "Shijir Tsogoo",
			"role": "Developer",
			"blurb": "Shijir recently graduated from the University of Washington. He creates Angular components for Clarity.",
			"img": "shijir.png",
			"workstreams": [
				"UI",
				"NG"
			]
		},
		{
			"name": "Matt Hippely",
			"role": "Developer",
			"blurb": "As a UI Engineer, Matt's primary focus is collecting feedback and improving components. He is passionate about simple, intuitive user interfaces and incremental improvement.",
			"img": "matt.png",
			"workstreams": [
				"UI",
				"NG"
			]
		}
	]
};

/***/ }),

/***/ 675:
/***/ (function(module, exports) {

module.exports = "<main class=\"content-area\">\n    <section class=\"community-top-section\">\n        <h1 id=\"community\">Community</h1>\n\n        <p>We’re passionate about making Clarity the best it can be.&nbsp;Although each team member has a specific role and area of responsibility, we’re all actively engaged in every aspect of the framework.</p>\n\n    </section>\n\n    <section class=\"community-social-cards\">\n        <h3>Engaging with the Clarity Team</h3>\n\n        <div class=\"hidden-sm-up\">\n            <ul class=\"list-unstyled indent bump-down\">\n\n                <li><a target=\"_blank\" href=\"https://twitter.com/VMwareClarity\">Talk with us on Twitter</a></li>\n\n                <li><a target=\"_blank\" href=\"https://github.com/vmware/clarity/issues\">Report an issue</a></li>\n\n                <li><a target=\"_blank\" href=\"https://medium.com/claritydesignsystem\">Read our blog</a></li>\n\n            </ul>\n        </div>\n        <div class=\"hidden-xs-down row\">\n\n            <div class=\"col-sm-4\">\n                <a target=\"_blank\" href=\"https://twitter.com/VMwareClarity\" class=\"social-card social-card-twitter\">\n                    <div class=\"card clickable\">\n                        <div class=\"card-block\">\n                            <div class=\"community-social-icon\">\n                                <img src=\"assets/images/team/social/twitter.png\" alt=\"twitter\">\n                            </div>\n                            <p class=\"card-text\">Talk with us on Twitter</p>\n                        </div>\n                    </div>\n                </a>\n\n            </div>\n\n            <div class=\"col-sm-4\">\n                <a target=\"_blank\" href=\"https://github.com/vmware/clarity/issues\" class=\"social-card social-card-github\">\n                    <div class=\"card clickable\">\n                        <div class=\"card-block\">\n                            <div class=\"community-social-icon\">\n                                <img src=\"assets/images/team/social/github.png\" alt=\"github\">\n                            </div>\n                            <p class=\"card-text\">Report an issue</p>\n                        </div>\n                    </div>\n                </a>\n\n            </div>\n\n            <div class=\"col-sm-4\">\n                <a target=\"_blank\" href=\"https://medium.com/claritydesignsystem\" class=\"social-card social-card-medium\">\n                    <div class=\"card clickable\">\n                        <div class=\"card-block\">\n                            <div class=\"community-social-icon\">\n                                <img src=\"assets/images/team/social/medium.png\" alt=\"medium\">\n                            </div>\n                            <p class=\"card-text\">Read our blog</p>\n                        </div>\n                    </div>\n                </a>\n\n            </div>\n\n        </div>\n    </section>\n\n\n    <section class=\"community-team-cards\">\n        <h3>Clarity Team</h3>\n\n        <div class=\"row\">\n            <div *ngFor=\"let member of team\" class=\"card col-xs-12 col-sm-12 col-md-4\">\n                <div class=\"card-block\">\n\n                    <img src=\"{{teamImgUrl}}{{member.img}}\" alt=\"Picture of {{member.name}}\">\n\n                    <div class=\"card-text\">\n                        <p class=\"community-team-name\" [ngSwitch]=\"member.twitter\">\n                            <span *ngSwitchCase=\"undefined\">{{member.name}}</span>\n                            <a href=\"https://twitter.com/{{member.twitter}}\" target=\"_blank\" *ngSwitchDefault>{{member.name}}</a>\n                        </p>\n                        <p class=\"community-team-role\">{{member.role}}</p>\n                        <p class=\"community-team-blurb\">{{member.blurb}}</p>\n                    </div>\n                </div>\n            </div>\n        </div>\n    </section>\n\n    <section class=\"community-contributors\">\n        <h3>Contributors</h3>\n        <ul class=\"list-unstyled\">\n            <li *ngFor=\"let name of contributors\">{{name}}</li>\n        </ul>\n    </section>\n\n</main>\n"

/***/ })

});
//# sourceMappingURL=2.chunk.js.map