webpackJsonp([1,4],{

/***/ 274:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(256);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_toPromise__ = __webpack_require__(460);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_toPromise___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_toPromise__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SessionService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var SessionService = (function () {
    function SessionService(myHttp) {
        this.myHttp = myHttp;
    }
    SessionService.prototype.signup = function (user) {
        var theOriginalPromise = this.myHttp.post('http://localhost:3000/signup', user).toPromise();
        var theParsedPromise = theOriginalPromise.then(function (result) {
            return result.json();
        });
        return theParsedPromise;
    };
    SessionService.prototype.login = function (credentials) {
        var theOriginalPromise = this.myHttp.post('http://localhost:3000/login', credentials).toPromise();
        var theParsedPromise = theOriginalPromise.then(function (result) {
            return result.json();
        });
        return theParsedPromise;
    };
    SessionService.prototype.logout = function () {
        return this.myHttp.post('http://localhost:3000/logout', {})
            .toPromise()
            .then(function (result) { return result.json(); });
    };
    SessionService.prototype.isLoggedIn = function () {
        return this.myHttp.get('http://localhost:3000/loggedin')
            .toPromise()
            .then(function (result) { return result.json(); });
    };
    SessionService.prototype.getPrivate = function () {
        return this.myHttp.get('http://localhost:3000/private')
            .toPromise()
            .then(function (result) { return result.json(); });
    };
    SessionService = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["c" /* Injectable */])(), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */]) === 'function' && _a) || Object])
    ], SessionService);
    return SessionService;
    var _a;
}());
//# sourceMappingURL=session.service.js.map

/***/ }),

/***/ 292:
/***/ (function(module, exports) {

function webpackEmptyContext(req) {
	throw new Error("Cannot find module '" + req + "'.");
}
webpackEmptyContext.keys = function() { return []; };
webpackEmptyContext.resolve = webpackEmptyContext;
module.exports = webpackEmptyContext;
webpackEmptyContext.id = 292;


/***/ }),

/***/ 293:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__(380);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__(401);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__(402);




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["a" /* enableProdMode */])();
}
__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 400:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__session_service__ = __webpack_require__(274);
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


var AppComponent = (function () {
    function AppComponent(mySession) {
        this.mySession = mySession;
        this.title = 'app works!';
        this.loginInfo = {};
        this.signupInfo = {};
    }
    AppComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.mySession.isLoggedIn()
            .then(function (userInfo) { return _this.user = userInfo; });
    };
    AppComponent.prototype.login = function () {
        var _this = this;
        var thePromise = this.mySession.login(this.loginInfo);
        thePromise.then(function (userInfo) {
            _this.user = userInfo;
            _this.error = null;
        });
        thePromise.catch(function (err) {
            _this.user = null;
            _this.error = err;
        });
    };
    AppComponent.prototype.signup = function () {
        var _this = this;
        var thePromise = this.mySession.signup(this.signupInfo);
        thePromise.then(function (userInfo) {
            _this.user = userInfo;
            _this.error = null;
        });
        thePromise.catch(function (err) {
            _this.user = null;
            _this.error = err;
        });
    };
    AppComponent.prototype.logout = function () {
        var _this = this;
        this.mySession.logout()
            .then(function () {
            _this.user = null;
            _this.error = null;
        })
            .catch(function (err) { return _this.error = err; });
    };
    AppComponent.prototype.getPrivateData = function () {
        var _this = this;
        this.mySession.getPrivate()
            .then(function (data) {
            _this.myData = data;
            _this.error = null;
        })
            .catch(function (err) { return _this.error = err; });
    };
    AppComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["U" /* Component */])({
            selector: 'app-root',
            template: __webpack_require__(458),
            styles: [__webpack_require__(456)]
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__session_service__["a" /* SessionService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__session_service__["a" /* SessionService */]) === 'function' && _a) || Object])
    ], AppComponent);
    return AppComponent;
    var _a;
}());
//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 401:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(165);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__(371);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_http__ = __webpack_require__(256);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__session_service__ = __webpack_require__(274);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__app_component__ = __webpack_require__(400);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["b" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* AppComponent */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormsModule */],
                __WEBPACK_IMPORTED_MODULE_3__angular_http__["a" /* HttpModule */]
            ],
            providers: [__WEBPACK_IMPORTED_MODULE_4__session_service__["a" /* SessionService */]],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* AppComponent */]]
        }), 
        __metadata('design:paramtypes', [])
    ], AppModule);
    return AppModule;
}());
//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 402:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
var environment = {
    production: false
};
//# sourceMappingURL=environment.js.map

/***/ }),

/***/ 456:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(189)();
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 458:
/***/ (function(module, exports) {

module.exports = "<h1> {{title}} </h1>\r\n\r\n<p class=\"error\"> {{ error }} </p>\r\n\r\n\r\n<div *ngIf=\"user\">\r\n  <h2> You are now logged in as {{ user.username }}!! </h2>\r\n  <p> Here's the user object </p>\r\n  <pre> {{ user | json }} </pre>\r\n\r\n  <p *ngIf=\"myData\"> Here's some data fetched from a protected API </p>\r\n  <pre> {{ myData | json }} </pre>\r\n\r\n  <button (click)=\"logout()\"> Log Out </button>\r\n  <button (click)=\"getPrivateData()\"> Get private data </button>\r\n</div>\r\n\r\n\r\n<div *ngIf=\"!user\">\r\n  <form class=\"login\">\r\n    <h2> Log In </h2>\r\n\r\n    <div>\r\n      <label for=\"the-username-input\"> Username </label>\r\n      <input type=\"text\" name=\"username\" [(ngModel)]=\"loginInfo.username\" id=\"the-username-input\">\r\n    </div>\r\n\r\n    <div>\r\n      <label for=\"the-password-input\"> Password </label>\r\n      <input type=\"password\" name=\"password\" [(ngModel)]=\"loginInfo.password\" id=\"the-password-input\">\r\n    </div>\r\n\r\n    <button (click)=\"login()\"> Log In </button>\r\n  </form>\r\n\r\n  <form class=\"signup\">\r\n    <h2> Sign Up </h2>\r\n\r\n    <div>\r\n      <label for=\"the-nickname-signup\"> Nickname </label>\r\n      <input type=\"text\" name=\"nickname\" [(ngModel)]=\"signupInfo.nickname\" id=\"the-nickname-signup\">\r\n    </div>\r\n\r\n    <div>\r\n      <label for=\"the-username-signup\"> Username </label>\r\n      <input type=\"text\" name=\"username\" [(ngModel)]=\"signupInfo.username\" id=\"the-username-signup\">\r\n    </div>\r\n\r\n    <div>\r\n      <label for=\"the-password-signup\"> Password </label>\r\n      <input type=\"password\" name=\"password\" [(ngModel)]=\"signupInfo.password\" id=\"the-password-signup\">\r\n    </div>\r\n\r\n    <button (click)=\"signup()\"> Sign Up </button>\r\n  </form>\r\n</div>\r\n"

/***/ }),

/***/ 471:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(293);


/***/ })

},[471]);
//# sourceMappingURL=main.bundle.js.map