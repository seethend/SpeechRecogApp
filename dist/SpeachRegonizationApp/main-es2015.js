(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./$$_lazy_route_resource lazy recursive":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _google_api_google_api_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./google-api/google-api.component */ "./src/app/google-api/google-api.component.ts");





const routes = [
    { path: '', pathMatch: 'full', redirectTo: 'g' },
    { path: 'g', component: _google_api_google_api_component__WEBPACK_IMPORTED_MODULE_2__["GoogleApiComponent"] }
];
class AppRoutingModule {
}
AppRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: AppRoutingModule });
AppRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function AppRoutingModule_Factory(t) { return new (t || AppRoutingModule)(); }, imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)],
        _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](AppRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)],
                exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");




function AppComponent_div_0_Template(rf, ctx) { if (rf & 1) {
    const _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "button", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AppComponent_div_0_Template_button_click_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r5); const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r4.startVoiceRecognition(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Record");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function AppComponent_span_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r6 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("highlight", item_r6.recognized);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", item_r6.name, "\u00A0\u00A0");
} }
function AppComponent_ng_template_5_ng_container_0_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r8.voiceText);
} }
function AppComponent_ng_template_5_ng_container_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, AppComponent_ng_template_5_ng_container_0_ng_container_1_Template, 3, 1, "ng-container", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r7.voiceText);
} }
function AppComponent_ng_template_5_Template(rf, ctx) { if (rf & 1) {
    const _r10 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, AppComponent_ng_template_5_ng_container_0_Template, 2, 1, "ng-container", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "button", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AppComponent_ng_template_5_Template_button_click_2_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r10); const ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r9.closeVoiceRecognition(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Close");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "button", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AppComponent_ng_template_5_Template_button_click_4_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r10); const ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r11.startVoiceRecognition(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "Restart");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx_r3.voiceActiveSectionError);
} }
class AppComponent {
    constructor(ngZone) {
        this.ngZone = ngZone;
        this.title = 'SpeachRegonizationApp';
        this.voiceActiveSectionDisabled = true;
        this.voiceActiveSectionError = false;
        this.voiceActiveSectionSuccess = false;
        this.voiceActiveSectionListening = false;
        this.voiceText = [];
        this.words = [];
        this.index = 0;
        this.highlight = '';
    }
    ngOnInit() {
        let text = `
    He wondered if it could be called a beach if there was no sand.
    Car safety systems have come a long way, but he was out to prove they could be outsmarted.
    She wasn't sure whether to be impressed or concerned that he folded underwear in neat little packages.
    Even though he thought the world was flat he didn’t see the irony of wanting to travel around the world.
    8% of 25 is the same as 25% of 8 and one of them is much easier to do in your head.
    I'm a great listener, really good with empathy vs sympathy and all that, but I hate people.
    I'd rather be a bird than a fish.
    The view from the lighthouse excited even the most seasoned traveler.
    The pigs were insulted that they were named hamburgers.
    They did nothing as the raccoon attacked the lady’s bag of food.
    `;
        text.split(" ").forEach(w => this.words.push({ name: w, recognized: false }));
    }
    initializeVoiceRecognitionCallback() {
        annyang.addCallback('error', (err) => {
            if (err.error === 'network') {
                this.voiceText = ["Internet is require"];
                annyang.abort();
                this.ngZone.run(() => this.voiceActiveSectionSuccess = true);
            }
            else if (this.voiceText === undefined) {
                this.ngZone.run(() => this.voiceActiveSectionError = true);
                annyang.abort();
            }
        });
        annyang.addCallback('soundstart', (res) => {
            console.log("soundstart --> ", res);
            this.ngZone.run(() => this.voiceActiveSectionListening = true);
        });
        annyang.addCallback('end', () => {
            console.log("end --> ", this.voiceText);
            if (this.voiceText === undefined) {
                this.ngZone.run(() => this.voiceActiveSectionError = true);
                annyang.abort();
            }
        });
        annyang.addCallback('result', (userSaid) => {
            console.log("result --> ", userSaid);
            this.ngZone.run(() => this.voiceActiveSectionError = false);
            // let queryText: any = userSaid[0];
            // annyang.abort();
            this.voiceText = userSaid;
            this.checkToHighLight();
            this.ngZone.run(() => this.voiceActiveSectionListening = false);
            this.ngZone.run(() => this.voiceActiveSectionSuccess = true);
        });
    }
    startVoiceRecognition() {
        this.voiceActiveSectionDisabled = false;
        this.voiceActiveSectionError = false;
        this.voiceActiveSectionSuccess = false;
        this.voiceText = undefined;
        if (annyang) {
            let commands = {
                'hello': () => {
                    alert("Hello User!!!");
                }
            };
            annyang.addCommands(commands);
            this.initializeVoiceRecognitionCallback();
            annyang.start({ autoRestart: false });
        }
    }
    closeVoiceRecognition() {
        this.voiceActiveSectionDisabled = true;
        this.voiceActiveSectionError = false;
        this.voiceActiveSectionSuccess = false;
        this.voiceActiveSectionListening = false;
        this.voiceText = undefined;
        if (annyang) {
            annyang.abort();
        }
    }
    checkToHighLight() {
        console.log("checked");
        if (this.voiceText == null)
            this.voiceText = [];
        console.log(this.voiceText);
        for (var i = 0; i < this.voiceText.length; i++) {
            for (var j = this.index; j < this.words.length; j++) {
                let item = this.words[j];
                if (item.name.trim().toLowerCase() === this.voiceText[i].trim().toLowerCase() && !item.recognized) {
                    this.index++;
                    this.highlight = item.name;
                    item.recognized = true;
                    break;
                }
            }
        }
        console.log(this.words);
        return false;
    }
}
AppComponent.ɵfac = function AppComponent_Factory(t) { return new (t || AppComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgZone"])); };
AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AppComponent, selectors: [["app-root"]], decls: 10, vars: 3, consts: [[4, "ngIf", "ngIfElse"], [4, "ngFor", "ngForOf"], ["voicesection", ""], ["type", "button", 3, "click"], [4, "ngIf"], [3, "click"]], template: function AppComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, AppComponent_div_0_Template, 3, 0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, AppComponent_span_4_Template, 3, 3, "span", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, AppComponent_ng_template_5_Template, 6, 1, "ng-template", null, 2, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "router-outlet");
    } if (rf & 2) {
        const _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.voiceActiveSectionDisabled)("ngIfElse", _r2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.words);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["NgIf"], _angular_common__WEBPACK_IMPORTED_MODULE_1__["NgForOf"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterOutlet"]], styles: [".highlight[_ngcontent-%COMP%] {\n  transform: scale(1.3);\n  font-weight: 900;\n  transition: all 0.3s linear;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvRDpcXFNlZXRoZW5kXFxXaGF0c01pbmVJc0Fsd2F5c01pbmVcXFNwZWFjaFJlZ29uaXphdGlvbkFwcC9zcmNcXGFwcFxcYXBwLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9hcHAuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxxQkFBQTtFQUNBLGdCQUFBO0VBQ0EsMkJBQUE7QUNDSiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5oaWdobGlnaHQge1xyXG4gICAgdHJhbnNmb3JtOiBzY2FsZSgxLjMpO1xyXG4gICAgZm9udC13ZWlnaHQ6IDkwMDtcclxuICAgIHRyYW5zaXRpb246IGFsbCAuM3MgbGluZWFyO1xyXG59IiwiLmhpZ2hsaWdodCB7XG4gIHRyYW5zZm9ybTogc2NhbGUoMS4zKTtcbiAgZm9udC13ZWlnaHQ6IDkwMDtcbiAgdHJhbnNpdGlvbjogYWxsIDAuM3MgbGluZWFyO1xufSJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-root',
                templateUrl: './app.component.html',
                styleUrls: ['./app.component.scss']
            }]
    }], function () { return [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgZone"] }]; }, null); })();


/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _google_api_google_api_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./google-api/google-api.component */ "./src/app/google-api/google-api.component.ts");
/* harmony import */ var _speech_recognition_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./speech-recognition.service */ "./src/app/speech-recognition.service.ts");








class AppModule {
}
AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineNgModule"]({ type: AppModule, bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]] });
AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjector"]({ factory: function AppModule_Factory(t) { return new (t || AppModule)(); }, providers: [_speech_recognition_service__WEBPACK_IMPORTED_MODULE_6__["SpeechRecognitionService"]], imports: [[
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormsModule"],
            _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"],
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsetNgModuleScope"](AppModule, { declarations: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"],
        _google_api_google_api_component__WEBPACK_IMPORTED_MODULE_5__["GoogleApiComponent"]], imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormsModule"],
        _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵsetClassMetadata"](AppModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"],
        args: [{
                declarations: [
                    _app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"],
                    _google_api_google_api_component__WEBPACK_IMPORTED_MODULE_5__["GoogleApiComponent"]
                ],
                imports: [
                    _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                    _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormsModule"],
                    _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"],
                ],
                providers: [_speech_recognition_service__WEBPACK_IMPORTED_MODULE_6__["SpeechRecognitionService"]],
                bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/google-api/google-api.component.ts":
/*!****************************************************!*\
  !*** ./src/app/google-api/google-api.component.ts ***!
  \****************************************************/
/*! exports provided: GoogleApiComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GoogleApiComponent", function() { return GoogleApiComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _speech_recognition_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../speech-recognition.service */ "./src/app/speech-recognition.service.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");




function GoogleApiComponent_span_10_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r1 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("highlight", item_r1.recognised);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", item_r1.name, "\u00A0");
} }
class GoogleApiComponent {
    constructor(speechRecognitionService, changeDetector) {
        this.speechRecognitionService = speechRecognitionService;
        this.changeDetector = changeDetector;
        this.text = `
  Car safety systems have come a long way, but he was out to prove they could be outsmarted.
  She wasn't sure whether to be impressed or concerned that he folded shirt in neat little packages.
  Even though he thought the world was flat he didn’t see the irony of wanting to travel around the world.
  8% of 25 is the same as 25% of 8 and one of them is much easier to do in your head.
  I'm a great listener, really good with empathy vs sympathy and all that, but I hate people.
  I'd rather be a bird than a fish.
  The view from the lighthouse excited even the most seasoned traveler.
  The pigs were insulted that they were named hamburgers.
  They did nothing as the raccoon attacked the lady’s bag of food.
  `;
        this.words = [];
        this.wordIndex = 0;
        this.complete = true;
        this.completeWordIndex = 0;
        this.showSearchButton = true;
        this.speechData = "";
    }
    ngOnInit() {
        this.text.trim().split(' ').forEach(w => {
            w = w.replace(',', ' ').replace('.', ' ');
            this.words.push({ name: w, recognised: false });
        });
        console.log("words ---> ", this.words.length);
    }
    ngOnDestroy() {
        this.speechRecognitionService.DestroySpeechObject();
    }
    activateSpeechSearchMovie() {
        this.showSearchButton = false;
        this.speechRecognitionService.record()
            .subscribe(
        //listener
        (value) => {
            this.speechData = value;
            // console.log(value);
            this.compareAndHighlight(value);
        }, 
        //errror
        (err) => {
            console.log(err);
            if (err.error == "no-speech") {
                console.log("--restatring service--");
                this.activateSpeechSearchMovie();
            }
        }, 
        //completion
        () => {
            this.showSearchButton = true;
            console.log("--complete--");
            this.activateSpeechSearchMovie();
            this.complete = true;
            let localWords = this.speechData.split(' ');
            this.compareTheSentenceAtTheEnd(localWords);
        });
    }
    compareAndHighlight(value) {
        value = value.trim();
        console.log('trimmed value --> ', value);
        if (value.includes(' ')) {
            let localWords = value.split(' ');
            console.log('localwords ---> ', localWords);
            if (this.complete) {
                this.compareTheSentence(localWords);
                this.complete = false;
            }
            else {
                value = localWords[localWords.length - 1].trim();
                this.compareLastWord(value);
            }
        }
        else {
            this.compareLastWord(value);
        }
    }
    compareTheSentence(localWords) {
        for (let i = 0; i < localWords.length; i++) {
            let word = this.words[this.wordIndex];
            if (word.name.trim().length == 0) {
                word.recognised = true;
                this.wordIndex++;
            }
            console.log('lastValue compare==> ', localWords[i], this.words[this.wordIndex].name, localWords[i].trim().toLowerCase() === this.words[this.wordIndex].name);
            if (word.name.trim().toLowerCase() === localWords[i].trim().toLowerCase()) {
                word.recognised = true;
                this.wordIndex++;
            }
            else {
                break;
            }
            console.log('indexx ==> ', this.wordIndex);
            this.changeDetector.detectChanges();
        }
    }
    compareLastWord(value) {
        console.log('lastValue compare==> ', value, this.words[this.wordIndex].name, value.toLowerCase() === this.words[this.wordIndex].name);
        if (value.toLowerCase() === this.words[this.wordIndex].name.trim().toLowerCase()) {
            this.words[this.wordIndex].recognised = true;
            this.wordIndex++;
        }
        console.log('indexx ==> ', this.wordIndex);
    }
    skipWord() {
        console.log(this.words[this.wordIndex]);
        this.words[this.wordIndex].recognised = true;
        this.wordIndex++;
    }
    compareTheSentenceAtTheEnd(localWords) {
        for (let i = 0; i < localWords.length; i++) {
            let word = this.words[this.completeWordIndex];
            if (word.name.trim().length == 0) {
                word.recognised = true;
                this.completeWordIndex++;
            }
            console.log('lastValue complete compare==> ', localWords[i], this.words[this.completeWordIndex].name, localWords[i].trim().toLowerCase() === this.words[this.wordIndex].name);
            if (word.name.trim().toLowerCase() === localWords[i].trim().toLowerCase()) {
                word.recognised = true;
                this.completeWordIndex++;
            }
            else {
                break;
            }
            console.log('completeWordIndex ==> ', this.completeWordIndex);
            this.changeDetector.detectChanges();
        }
    }
}
GoogleApiComponent.ɵfac = function GoogleApiComponent_Factory(t) { return new (t || GoogleApiComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_speech_recognition_service__WEBPACK_IMPORTED_MODULE_1__["SpeechRecognitionService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"])); };
GoogleApiComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: GoogleApiComponent, selectors: [["app-google-api"]], decls: 28, vars: 3, consts: [[1, "container-fluid"], [1, "row"], [1, "col-lg-12", "col-md-12"], [1, "card"], [1, "header"], [1, "title"], [1, "content"], [1, "col-md-12"], ["class", "normal", 3, "highlight", 4, "ngFor", "ngForOf"], [3, "click"], [1, "col-md-8"], [1, "form-group"], [1, "col-md-2"], [1, "text-center"], ["name", "btnActivateSpeechSearchMovie", "id", "btnActivateSpeechSearchMovie", 1, "btn", "btn-info", "btn-fill", "btn-wd", 3, "disabled", "click"], [1, "normal"]], template: function GoogleApiComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "h4", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "\u00A0\u00A0 Web Speech API in Angular2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](10, GoogleApiComponent_span_10_Template, 2, 3, "span", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](11, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](12, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "button", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function GoogleApiComponent_Template_button_click_13_listener() { return ctx.skipWord(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "skip word");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](15, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](16, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](19, "label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](22, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](23, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "button", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function GoogleApiComponent_Template_button_click_25_listener() { return ctx.activateSpeechSearchMovie(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](26, " Enable Speech Search ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](27, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.words);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.speechData);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", !ctx.showSearchButton);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["NgForOf"]], styles: [".normal[_ngcontent-%COMP%] {\n  font-size: 14px;\n  transition: all 0.3s linear;\n}\n\n.highlight[_ngcontent-%COMP%] {\n  font-size: 20px;\n  font-weight: 900;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZ29vZ2xlLWFwaS9EOlxcU2VldGhlbmRcXFdoYXRzTWluZUlzQWx3YXlzTWluZVxcU3BlYWNoUmVnb25pemF0aW9uQXBwL3NyY1xcYXBwXFxnb29nbGUtYXBpXFxnb29nbGUtYXBpLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9nb29nbGUtYXBpL2dvb2dsZS1hcGkuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxlQUFBO0VBQ0EsMkJBQUE7QUNDSjs7QURFQTtFQUNJLGVBQUE7RUFDQSxnQkFBQTtBQ0NKIiwiZmlsZSI6InNyYy9hcHAvZ29vZ2xlLWFwaS9nb29nbGUtYXBpLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLm5vcm1hbCB7XHJcbiAgICBmb250LXNpemU6IDE0cHg7XHJcbiAgICB0cmFuc2l0aW9uOiBhbGwgLjNzIGxpbmVhcjtcclxufVxyXG5cclxuLmhpZ2hsaWdodCB7XHJcbiAgICBmb250LXNpemU6IDIwcHg7XHJcbiAgICBmb250LXdlaWdodDogOTAwO1xyXG59IiwiLm5vcm1hbCB7XG4gIGZvbnQtc2l6ZTogMTRweDtcbiAgdHJhbnNpdGlvbjogYWxsIDAuM3MgbGluZWFyO1xufVxuXG4uaGlnaGxpZ2h0IHtcbiAgZm9udC1zaXplOiAyMHB4O1xuICBmb250LXdlaWdodDogOTAwO1xufSJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](GoogleApiComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-google-api',
                templateUrl: './google-api.component.html',
                styleUrls: ['./google-api.component.scss']
            }]
    }], function () { return [{ type: _speech_recognition_service__WEBPACK_IMPORTED_MODULE_1__["SpeechRecognitionService"] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"] }]; }, null); })();


/***/ }),

/***/ "./src/app/speech-recognition.service.ts":
/*!***********************************************!*\
  !*** ./src/app/speech-recognition.service.ts ***!
  \***********************************************/
/*! exports provided: SpeechRecognitionService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SpeechRecognitionService", function() { return SpeechRecognitionService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! lodash */ "./node_modules/lodash/lodash.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");




class SpeechRecognitionService {
    constructor(zone) {
        this.zone = zone;
    }
    record() {
        return rxjs__WEBPACK_IMPORTED_MODULE_2__["Observable"].create(observer => {
            const { webkitSpeechRecognition } = window;
            this.speechRecognition = new webkitSpeechRecognition();
            // const { webkitSpeechGrammarList }: IWindow = <IWindow> <unknown> window;
            // var speechRecognitionList = new webkitSpeechGrammarList();
            // var colors = [ 'aqua' , 'azure' , 'beige', 'bisque', 'black', 'blue', 'brown', 'chocolate', 'coral'];
            // var grammar = '#JSGF V1.0; grammar colors; public <color> = ' + colors.join(' | ') + ' ;'
            // speechRecognitionList.addFromString(grammar, 1);
            // this.speechRecognition.grammars = speechRecognitionList;
            this.speechRecognition.continuous = false;
            this.speechRecognition.interimResults = true;
            this.speechRecognition.lang = 'en-us';
            this.speechRecognition.maxAlternatives = 5;
            this.speechRecognition.onresult = speech => {
                let term = "";
                if (speech.results) {
                    console.log(speech);
                    var result = speech.results[speech.resultIndex];
                    var transcript = result[0].transcript;
                    // if (result.isFinal) {
                    if (result[0].confidence < 0.3) {
                        // console.log("Unrecognized result - Please try again");
                    }
                    else {
                        term = lodash__WEBPACK_IMPORTED_MODULE_1__["trim"](transcript);
                        console.log("Did you said? -> " + term + " , If not then say something else...");
                    }
                    // }
                }
                this.zone.run(() => {
                    observer.next(term);
                });
            };
            this.speechRecognition.onerror = error => {
                observer.error(error);
            };
            this.speechRecognition.onend = () => {
                observer.complete();
            };
            this.speechRecognition.start();
            console.log("Say something - We are listening !!!");
        });
    }
    DestroySpeechObject() {
        if (this.speechRecognition)
            this.speechRecognition.stop();
    }
}
SpeechRecognitionService.ɵfac = function SpeechRecognitionService_Factory(t) { return new (t || SpeechRecognitionService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgZone"])); };
SpeechRecognitionService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: SpeechRecognitionService, factory: SpeechRecognitionService.ɵfac });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](SpeechRecognitionService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"]
    }], function () { return [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgZone"] }]; }, null); })();


/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
const environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
_angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["platformBrowser"]().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(err => console.error(err));


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! D:\Seethend\WhatsMineIsAlwaysMine\SpeachRegonizationApp\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main-es2015.js.map