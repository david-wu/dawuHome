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

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html":
/*!**************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html ***!
  \**************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n<div class=\"top-nav\">\n  <div class=\"page-title-container\">\n    <div>David's Page</div>\n  </div>\n  <div class=\"right-section\">\n    <div class=\"nav-items-container\">\n      <div\n        class=\"nav-item\"\n        [routerLinkActive]=\"['active']\"\n        [routerLink]=\"['/corona']\"\n      >Corona</div>\n      <div\n        class=\"nav-item\"\n        [routerLinkActive]=\"['active']\"\n        [routerLink]=\"['/portfolio']\"\n      >Projects</div>\n      <div\n        class=\"nav-item\"\n        [routerLinkActive]=\"['active']\"\n        [routerLink]=\"['/about-me']\"\n      >About Me</div>\n    </div>\n  </div>\n</div>\n<div class=\"main-content\">\n  <router-outlet></router-outlet>\n</div>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/firebase-auth/firebase-auth-success/firebase-auth-success.component.html":
/*!********************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/firebase-auth/firebase-auth-success/firebase-auth-success.component.html ***!
  \********************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/firebase-auth/firebase-auth.component.html":
/*!**************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/firebase-auth/firebase-auth.component.html ***!
  \**************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n<div #loginRef></div>\n<div class=\"button\" (click)=\"signOut()\">signOut</div>\n");

/***/ }),

/***/ "./node_modules/tslib/tslib.es6.js":
/*!*****************************************!*\
  !*** ./node_modules/tslib/tslib.es6.js ***!
  \*****************************************/
/*! exports provided: __extends, __assign, __rest, __decorate, __param, __metadata, __awaiter, __generator, __exportStar, __values, __read, __spread, __spreadArrays, __await, __asyncGenerator, __asyncDelegator, __asyncValues, __makeTemplateObject, __importStar, __importDefault, __classPrivateFieldGet, __classPrivateFieldSet */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__extends", function() { return __extends; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__assign", function() { return __assign; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__rest", function() { return __rest; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__decorate", function() { return __decorate; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__param", function() { return __param; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__metadata", function() { return __metadata; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__awaiter", function() { return __awaiter; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__generator", function() { return __generator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__exportStar", function() { return __exportStar; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__values", function() { return __values; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__read", function() { return __read; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__spread", function() { return __spread; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__spreadArrays", function() { return __spreadArrays; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__await", function() { return __await; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncGenerator", function() { return __asyncGenerator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncDelegator", function() { return __asyncDelegator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncValues", function() { return __asyncValues; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__makeTemplateObject", function() { return __makeTemplateObject; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__importStar", function() { return __importStar; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__importDefault", function() { return __importDefault; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__classPrivateFieldGet", function() { return __classPrivateFieldGet; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__classPrivateFieldSet", function() { return __classPrivateFieldSet; });
/*! *****************************************************************************
Copyright (c) Microsoft Corporation. All rights reserved.
Licensed under the Apache License, Version 2.0 (the "License"); you may not use
this file except in compliance with the License. You may obtain a copy of the
License at http://www.apache.org/licenses/LICENSE-2.0

THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
MERCHANTABLITY OR NON-INFRINGEMENT.

See the Apache Version 2.0 License for specific language governing permissions
and limitations under the License.
***************************************************************************** */
/* global Reflect, Promise */

var extendStatics = function(d, b) {
    extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return extendStatics(d, b);
};

function __extends(d, b) {
    extendStatics(d, b);
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
}

var __assign = function() {
    __assign = Object.assign || function __assign(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
        }
        return t;
    }
    return __assign.apply(this, arguments);
}

function __rest(s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
}

function __decorate(decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
}

function __param(paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
}

function __metadata(metadataKey, metadataValue) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(metadataKey, metadataValue);
}

function __awaiter(thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
}

function __generator(thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
}

function __exportStar(m, exports) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}

function __values(o) {
    var s = typeof Symbol === "function" && Symbol.iterator, m = s && o[s], i = 0;
    if (m) return m.call(o);
    if (o && typeof o.length === "number") return {
        next: function () {
            if (o && i >= o.length) o = void 0;
            return { value: o && o[i++], done: !o };
        }
    };
    throw new TypeError(s ? "Object is not iterable." : "Symbol.iterator is not defined.");
}

function __read(o, n) {
    var m = typeof Symbol === "function" && o[Symbol.iterator];
    if (!m) return o;
    var i = m.call(o), r, ar = [], e;
    try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
    }
    catch (error) { e = { error: error }; }
    finally {
        try {
            if (r && !r.done && (m = i["return"])) m.call(i);
        }
        finally { if (e) throw e.error; }
    }
    return ar;
}

function __spread() {
    for (var ar = [], i = 0; i < arguments.length; i++)
        ar = ar.concat(__read(arguments[i]));
    return ar;
}

function __spreadArrays() {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
};

function __await(v) {
    return this instanceof __await ? (this.v = v, this) : new __await(v);
}

function __asyncGenerator(thisArg, _arguments, generator) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var g = generator.apply(thisArg, _arguments || []), i, q = [];
    return i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i;
    function verb(n) { if (g[n]) i[n] = function (v) { return new Promise(function (a, b) { q.push([n, v, a, b]) > 1 || resume(n, v); }); }; }
    function resume(n, v) { try { step(g[n](v)); } catch (e) { settle(q[0][3], e); } }
    function step(r) { r.value instanceof __await ? Promise.resolve(r.value.v).then(fulfill, reject) : settle(q[0][2], r); }
    function fulfill(value) { resume("next", value); }
    function reject(value) { resume("throw", value); }
    function settle(f, v) { if (f(v), q.shift(), q.length) resume(q[0][0], q[0][1]); }
}

function __asyncDelegator(o) {
    var i, p;
    return i = {}, verb("next"), verb("throw", function (e) { throw e; }), verb("return"), i[Symbol.iterator] = function () { return this; }, i;
    function verb(n, f) { i[n] = o[n] ? function (v) { return (p = !p) ? { value: __await(o[n](v)), done: n === "return" } : f ? f(v) : v; } : f; }
}

function __asyncValues(o) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var m = o[Symbol.asyncIterator], i;
    return m ? m.call(o) : (o = typeof __values === "function" ? __values(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i);
    function verb(n) { i[n] = o[n] && function (v) { return new Promise(function (resolve, reject) { v = o[n](v), settle(resolve, reject, v.done, v.value); }); }; }
    function settle(resolve, reject, d, v) { Promise.resolve(v).then(function(v) { resolve({ value: v, done: d }); }, reject); }
}

function __makeTemplateObject(cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};

function __importStar(mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result.default = mod;
    return result;
}

function __importDefault(mod) {
    return (mod && mod.__esModule) ? mod : { default: mod };
}

function __classPrivateFieldGet(receiver, privateMap) {
    if (!privateMap.has(receiver)) {
        throw new TypeError("attempted to get private field on non-instance");
    }
    return privateMap.get(receiver);
}

function __classPrivateFieldSet(receiver, privateMap, value) {
    if (!privateMap.has(receiver)) {
        throw new TypeError("attempted to set private field on non-instance");
    }
    privateMap.set(receiver, value);
    return value;
}


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
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");



var routes = [
    {
        path: 'about-me',
        loadChildren: function () { return __webpack_require__.e(/*! import() | about-me-about-me-module */ "about-me-about-me-module").then(__webpack_require__.bind(null, /*! ./about-me/about-me.module */ "./src/app/about-me/about-me.module.ts")).then(function (m) { return m.AboutMeModule; }); }
    },
    {
        path: 'portfolio',
        loadChildren: function () { return Promise.all(/*! import() | portfolio-portfolio-module */[__webpack_require__.e("default~corona-corona-module~poe-poe-module~portfolio-portfolio-module"), __webpack_require__.e("default~corona-corona-module~portfolio-portfolio-module"), __webpack_require__.e("portfolio-portfolio-module")]).then(__webpack_require__.bind(null, /*! ./portfolio/portfolio.module */ "./src/app/portfolio/portfolio.module.ts")).then(function (m) { return m.PortfolioModule; }); }
    },
    {
        path: 'corona',
        loadChildren: function () { return Promise.all(/*! import() | corona-corona-module */[__webpack_require__.e("default~corona-corona-module~poe-poe-module~portfolio-portfolio-module"), __webpack_require__.e("default~corona-corona-module~portfolio-portfolio-module"), __webpack_require__.e("default~corona-corona-module~poe-poe-module"), __webpack_require__.e("corona-corona-module")]).then(__webpack_require__.bind(null, /*! ./corona/corona.module */ "./src/app/corona/corona.module.ts")).then(function (m) { return m.CoronaModule; }); }
    },
    {
        path: 'poe',
        loadChildren: function () { return Promise.all(/*! import() | poe-poe-module */[__webpack_require__.e("default~corona-corona-module~poe-poe-module~portfolio-portfolio-module"), __webpack_require__.e("default~corona-corona-module~poe-poe-module"), __webpack_require__.e("poe-poe-module")]).then(__webpack_require__.bind(null, /*! ./poe/poe.module */ "./src/app/poe/poe.module.ts")).then(function (m) { return m.PoeModule; }); }
    },
    {
        path: '',
        pathMatch: 'full',
        redirectTo: 'corona'
    },
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes, {
                    useHash: true,
                    preloadingStrategy: _angular_router__WEBPACK_IMPORTED_MODULE_2__["PreloadAllModules"],
                }),
            ],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "./src/app/app.component.scss":
/*!************************************!*\
  !*** ./src/app/app.component.scss ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (":host {\n  height: 100%;\n  width: 100%;\n  display: flex;\n  flex-direction: column;\n}\n:host .main-content {\n  flex: 1 1 0;\n  overflow: auto;\n}\n:host .main-content {\n  color: #202124;\n  background-color: #fff;\n}\n:host .top-nav {\n  display: flex;\n  background-color: #3F4038;\n  color: #FCFCF9;\n  height: 2.5rem;\n}\n:host .top-nav .page-title-container {\n  flex: 0 0 auto;\n  padding: 0.5rem 1.25rem;\n  font-size: 1.25rem;\n  display: flex;\n  align-items: center;\n}\n@media only screen and (max-width: 550px) {\n  :host .top-nav .page-title-container {\n    display: none;\n  }\n}\n:host .top-nav .right-section {\n  flex: 1 1 0;\n  display: flex;\n  flex-direction: column;\n  justify-content: flex-end;\n  overflow: hidden;\n}\n:host .top-nav .right-section .nav-items-container {\n  display: flex;\n  justify-content: flex-end;\n  margin: 0 3rem;\n}\n@media only screen and (max-width: 550px) {\n  :host .top-nav .right-section .nav-items-container {\n    margin: 0 0.25rem;\n    justify-content: center;\n  }\n}\n:host .top-nav .right-section .nav-items-container .nav-item {\n  flex: 0 1 auto;\n  background-color: #3F4038;\n  color: #FCFCF9;\n  width: 8rem;\n  padding: 0.5rem;\n  cursor: pointer;\n  text-align: center;\n  outline: none;\n  white-space: nowrap;\n  -webkit-user-select: none;\n     -moz-user-select: none;\n      -ms-user-select: none;\n          user-select: none;\n  margin: 0 0.25rem;\n  border-radius: 4px 4px 0 0;\n}\n:host .top-nav .right-section .nav-items-container .nav-item:hover {\n  background-color: #4B5320;\n  color: #FCFCF9;\n}\n:host .top-nav .right-section .nav-items-container .nav-item.active {\n  background-color: #708238;\n  color: #FCFCF9;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9hZG1pbi9wcm9qZWN0cy9kYXd1LWhvbWUvc3JjL2FwcC9hcHAuY29tcG9uZW50LnNjc3MiLCIvVXNlcnMvYWRtaW4vcHJvamVjdHMvZGF3dS1ob21lL3NyYy9zdHlsZXMvbWl4aW5zLnNjc3MiLCJzcmMvYXBwL2FwcC5jb21wb25lbnQuc2NzcyIsIi9Vc2Vycy9hZG1pbi9wcm9qZWN0cy9kYXd1LWhvbWUvc3JjL3N0eWxlcy92YXJpYWJsZXMuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFHQTtFQzZOSSxZQUFBO0VBQ0EsV0FBQTtFQUNBLGFBQUE7RUFDQSxzQkFBQTtBQzlOSjtBRCtOSTtFQUNJLFdBQUE7RUFDQSxjQUFBO0FDN05SO0FGSkk7RUFDSSxjR2VVO0VIZFYsc0JHa0JBO0FEWlI7QUZKSTtFQUNJLGFBQUE7RUFDQSx5QkdXTTtFSFZOLGNBQUE7RUFDQSxjQUFBO0FFTVI7QUZMUTtFQUNJLGNBQUE7RUFDQSx1QkFBQTtFQUNBLGtCQUFBO0VBQ0EsYUFBQTtFQUNBLG1CQUFBO0FFT1o7QURrTkk7RUQ5Tkk7SUFPTSxhQUFBO0VFU1o7QUFDRjtBRk5RO0VBQ0ksV0FBQTtFQUNBLGFBQUE7RUFDQSxzQkFBQTtFQUNBLHlCQUFBO0VBQ0EsZ0JBQUE7QUVRWjtBRlBZO0VBQ0ksYUFBQTtFQUNBLHlCQUFBO0VBQ0EsY0FBQTtBRVNoQjtBRGlNSTtFRDdNUTtJQUtNLGlCQUFBO0lBQ0EsdUJBQUE7RUVXaEI7QUFDRjtBRlZnQjtFQUNJLGNBQUE7RUMyS2hCLHlCRTdMVTtFRjhMVixjRXhNYTtFRmtMYixXQUFBO0VBQ0EsZUFBQTtFQUNBLGVBQUE7RUFDQSxrQkFBQTtFQUNBLGFBQUE7RUFDQSxtQkFBQTtFQUNBLHlCQUFBO0tBQUEsc0JBQUE7TUFBQSxxQkFBQTtVQUFBLGlCQUFBO0VEMUpnQixpQkFBQTtFQUNBLDBCQUFBO0FFb0JwQjtBRHNKSTtFQUNJLHlCRXBOSztFRnFOTCxjRTNNUztBRHVEakI7QURzSkk7RUFDSSx5QkV2Tk07RUZ3Tk4sY0UvTVM7QUQyRGpCIiwiZmlsZSI6InNyYy9hcHAvYXBwLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiQGltcG9ydCAnbWl4aW5zJztcbkBpbXBvcnQgJ3ZhcmlhYmxlcyc7XG5cbjpob3N0IHtcbiAgICBAaW5jbHVkZSB0b3AtbmF2LXBhZ2U7XG4gICAgLm1haW4tY29udGVudCB7XG4gICAgICAgIGNvbG9yOiAkYmFzaWNhbGx5LWJsYWNrO1xuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkd2hpdGU7XG4gICAgfVxuICAgIC50b3AtbmF2IHtcbiAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogJGJsYWNrLW9saXZlO1xuICAgICAgICBjb2xvcjogJGxpZ2h0ZXN0LWdyZWVuO1xuICAgICAgICBoZWlnaHQ6IDIuNXJlbTtcbiAgICAgICAgLnBhZ2UtdGl0bGUtY29udGFpbmVyIHtcbiAgICAgICAgICAgIGZsZXg6IDAgMCBhdXRvO1xuICAgICAgICAgICAgcGFkZGluZzogMC41cmVtIDEuMjVyZW07XG4gICAgICAgICAgICBmb250LXNpemU6IDEuMjVyZW07XG4gICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgICAgICAgIEBpbmNsdWRlIHJlc3BvbmQtdG8oc21hbGwpIHtcbiAgICAgICAgICAgICAgZGlzcGxheTogbm9uZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIC5yaWdodC1zZWN0aW9uIHtcbiAgICAgICAgICAgIGZsZXg6IDEgMSAwO1xuICAgICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtZW5kO1xuICAgICAgICAgICAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgICAgICAgICAgIC5uYXYtaXRlbXMtY29udGFpbmVyIHtcbiAgICAgICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgICAgICAgIGp1c3RpZnktY29udGVudDogZmxleC1lbmQ7XG4gICAgICAgICAgICAgICAgbWFyZ2luOiAwIDNyZW07XG4gICAgICAgICAgICAgICAgQGluY2x1ZGUgcmVzcG9uZC10byhzbWFsbCkge1xuICAgICAgICAgICAgICAgICAgbWFyZ2luOiAwIDAuMjVyZW07XG4gICAgICAgICAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgLm5hdi1pdGVtIHtcbiAgICAgICAgICAgICAgICAgICAgZmxleDogMCAxIGF1dG87XG4gICAgICAgICAgICAgICAgICAgIEBpbmNsdWRlIGRhcmstYnV0dG9uO1xuICAgICAgICAgICAgICAgICAgICBtYXJnaW46IDAgMC4yNXJlbTtcbiAgICAgICAgICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogNHB4IDRweCAwIDA7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxufVxuIiwiQGltcG9ydCAndmFyaWFibGVzJztcblxuQG1peGluIGJhc2UtY29yb25hLWRhc2hib2FyZCB7XG4gICAgZGlzcGxheTogYmxvY2s7XG4gICAgcGFkZGluZy1ib3R0b206IDJyZW07XG4gICAgLmNoYXJ0LWNvbnRhaW5lciB7XG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICAgIC5jaGFydC1oZWFkZXIge1xuICAgICAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgICAgcGFkZGluZzogMCAxLjVyZW07XG4gICAgICAgICAgICBhbGlnbi1pdGVtczogZmxleC1lbmQ7XG4gICAgICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuXG4gICAgICAgICAgICAucmFkaW8tYnV0dG9uLWNvbnRhaW5lcntcbiAgICAgICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICAgICAgICAgICAganVzdGlmeS1jb250ZW50OiBmbGV4LWVuZDtcbiAgICAgICAgICAgICAgICBmbGV4LXdyYXA6IHdyYXA7XG5cbiAgICAgICAgICAgICAgICAucmFkaW8tYnV0dG9ucyB7XG4gICAgICAgICAgICAgICAgICAgIEBpbmNsdWRlIHJhZGlvLWJ1dHRvbi1jb250YWluZXI7XG4gICAgICAgICAgICAgICAgICAgICY6bm90KDpmaXJzdC1jaGlsZCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgbWFyZ2luLWxlZnQ6IDFyZW07XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgJi5jaGFydCB7XG4gICAgICAgICAgICAgICAgICAgICAgICAucmFkaW8tYnV0dG9uIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBtaW4td2lkdGg6IGF1dG87XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcGFkZGluZzogM3B4O1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAubWF0ZXJpYWwtaWNvbnMge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBmbGV4OiAxIDAgYXV0bztcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZm9udC1zaXplOiAxLjI1cmVtO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAucmFkaW8tYnV0dG9uIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIG1hcmdpbi10b3A6IDAuNXJlbTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGR3dS1zdGF0LXZpZXdlciB7XG4gICAgICAgICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtZW5kO1xuICAgICAgICAgICAgICAgIGZsZXg6IDEgMCBhdXRvO1xuICAgICAgICAgICAgICAgIG1hcmdpbi10b3A6IDFyZW07XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgLm92ZXJ2aWV3LmNoYXJ0IHtcbiAgICAgICAgICAgIGhlaWdodDogMTIuNXJlbTtcbiAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICB9XG4gICAgICAgIGR3dS1jaGFydC1sZWdlbmQge1xuICAgICAgICAgICAgZmxleDogMCAwIGF1dG87XG4gICAgICAgICAgICBtYXJnaW4tdG9wOiAwLjI1cmVtO1xuICAgICAgICAgICAgbWFyZ2luLWJvdHRvbTogMnJlbTtcbiAgICAgICAgfVxuICAgIH1cbn1cblxuQG1peGluIHJhZGlvLWJ1dHRvbi1jb250YWluZXIge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgLnJhZGlvLWJ1dHRvbiB7XG4gICAgICAgIEBpbmNsdWRlIGxpZ2h0LW1pbmktYnV0dG9uO1xuICAgICAgICBAaW5jbHVkZSBzaGFkb3c7XG4gICAgICAgICY6Zmlyc3QtY2hpbGQge1xuICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogNXB4IDAgMCA1cHg7XG4gICAgICAgIH1cbiAgICAgICAgJjpsYXN0LWNoaWxkIHtcbiAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDAgNXB4IDVweCAwO1xuICAgICAgICB9XG4gICAgfVxufVxuXG5AbWl4aW4gc2hhZG93IHtcbiAgICB0cmFuc2l0aW9uLWR1cmF0aW9uOiBib3gtc2hhZG93IDI1bXMsIHRyYW5zZm9ybSwgMjVtcztcbiAgICBib3gtc2hhZG93OiAxcHggMXB4IDJweCAwICRsaWdodGVyLWdyYXk7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDApO1xuICAgICY6YWN0aXZlIHtcbiAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDFweCk7XG4gICAgICAgIGJveC1zaGFkb3c6IG5vbmU7XG4gICAgfVxuICAgICYuYWN0aXZlIHtcbiAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDFweCk7XG4gICAgICAgIGJveC1zaGFkb3c6IG5vbmU7XG4gICAgfVxufVxuXG5AbWl4aW4gcmVzcG9uc2l2ZS1wYWdlIHtcbiAgICBAbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA3NTBweCkge1xuICAgICAgICBkaXYucGFnZS1jb250YWluZXIge1xuICAgICAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICAgICAgICAgIC5sZWZ0LXNpZGUge1xuICAgICAgICAgICAgICAgIGZsZXg6IDAgMCBhdXRvO1xuICAgICAgICAgICAgICAgIGhlaWdodDogMTMuMjVyZW07XG4gICAgICAgICAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgICAgICAgICAgbWF4LXdpZHRoOiBub25lO1xuICAgICAgICAgICAgICAgIC8vIG1pbi13aWR0aDogbm9uZTtcbiAgICAgICAgICAgICAgICB0cmFuc2l0aW9uOiBoZWlnaHQgNTBtcztcbiAgICAgICAgICAgICAgICAmLmV4cGFuZGVkIHtcbiAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiA4NSU7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIC5leHBhbmRlciB7XG4gICAgICAgICAgICAgICAgICAgIEBpbmNsdWRlIGRhcmstdGhlbWU7XG4gICAgICAgICAgICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgICAgICAgICAgICAgICAgYm90dG9tOiAwO1xuICAgICAgICAgICAgICAgICAgICBsZWZ0OiA1MCU7XG4gICAgICAgICAgICAgICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgtNTAlKTtcbiAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDMuNXJlbTtcbiAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiAxcmVtO1xuICAgICAgICAgICAgICAgICAgICBib3JkZXI6IDFweCBzb2xpZCAkbW9zcy1ncmVlbjtcbiAgICAgICAgICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogNXB4IDVweCAwIDAgO1xuICAgICAgICAgICAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgICAgICAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAgICAgICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgICAgICAgICAgICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgICAgICAgICAgICAgICAgIC5leHBhbmRlci1pY29uIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMTZweDtcbiAgICAgICAgICAgICAgICAgICAgICAgICYuZmxpcHBlZCB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdHJhbnNmb3JtOiByb3RhdGUoMTgwZGVnKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuICAgIC5wYWdlLWNvbnRhaW5lciB7XG4gICAgICAgIGhlaWdodDogMTAwJTtcbiAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XG5cbiAgICAgICAgLmxlZnQtc2lkZSB7XG4gICAgICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgICAgICAgICBmbGV4OiAxIDEgMDtcbiAgICAgICAgICAgIG92ZXJmbG93OiBoaWRkZW47XG4gICAgICAgICAgICBtYXgtd2lkdGg6IDI3LjUlO1xuICAgICAgICAgICAgbWluLXdpZHRoOiAyMHJlbTtcbiAgICAgICAgICAgIC5leHBhbmRlciB7XG4gICAgICAgICAgICAgICAgZGlzcGxheTogbm9uZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICAucmlnaHQtc2lkZSB7XG4gICAgICAgICAgICBmbGV4OiAxIDEgMDtcbiAgICAgICAgICAgIG92ZXJmbG93OiBhdXRvO1xuICAgICAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgICAgICB9XG4gICAgfVxuXG59XG5AbWl4aW4gbGlnaHQtbWluaS1idXR0b24ge1xuICAgIEBpbmNsdWRlIGxpZ2h0LXRoZW1lO1xuICAgIEBpbmNsdWRlIGJ1dHRvbi14cztcbn1cblxuQG1peGluIGxpZ2h0LXNtYWxsLWJ1dHRvbiB7XG4gICAgQGluY2x1ZGUgbGlnaHQtdGhlbWU7XG4gICAgQGluY2x1ZGUgYnV0dG9uLXNtO1xufVxuXG5AbWl4aW4gZGFyay1idXR0b24ge1xuICAgIEBpbmNsdWRlIGRhcmstdGhlbWU7XG4gICAgQGluY2x1ZGUgYnV0dG9uLW1kO1xufVxuXG5AbWl4aW4gYnV0dG9uLXhzIHtcbiAgICBtaW4td2lkdGg6IDJyZW07XG4gICAgcGFkZGluZzogMC4yNXJlbSAwLjVyZW07XG4gICAgZm9udC1zaXplOiAxcmVtO1xuICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgb3V0bGluZTogbm9uZTtcbiAgICB3aGl0ZS1zcGFjZTogbm93cmFwO1xuICAgIHVzZXItc2VsZWN0OiBub25lO1xufVxuXG5AbWl4aW4gYnV0dG9uLXNtIHtcbiAgICBtaW4td2lkdGg6IDNyZW07XG4gICAgcGFkZGluZzogMC4yNXJlbSAwLjVyZW07XG4gICAgY3Vyc29yOiBwb2ludGVyO1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICBvdXRsaW5lOiBub25lO1xuICAgIHdoaXRlLXNwYWNlOiBub3dyYXA7XG4gICAgdXNlci1zZWxlY3Q6IG5vbmU7XG59XG5cbkBtaXhpbiBidXR0b24tbWQge1xuICAgIHdpZHRoOiA4cmVtO1xuICAgIHBhZGRpbmc6IDAuNXJlbTtcbiAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIG91dGxpbmU6IG5vbmU7XG4gICAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcbiAgICB1c2VyLXNlbGVjdDogbm9uZTtcbn1cblxuQG1peGluIGxpZ2h0LXRoZW1lIHtcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogJGVnZ3NoZWxsLWRhcms7XG4gICAgJjpob3ZlciB7XG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6ICRsYXVyZWwtZ3JlZW47XG4gICAgfVxuICAgICYuYWN0aXZlIHtcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogJG9saXZlLWdyZWVuO1xuICAgICAgICBjb2xvcjogJGxpZ2h0ZXN0LWdyZWVuO1xuICAgIH1cbn1cblxuQG1peGluIGRhcmstdGhlbWUge1xuICAgIGJhY2tncm91bmQtY29sb3I6ICRibGFjay1vbGl2ZTtcbiAgICBjb2xvcjogJGxpZ2h0ZXN0LWdyZWVuO1xuICAgICY6aG92ZXIge1xuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkYXJteS1ncmVlbjtcbiAgICAgICAgY29sb3I6ICRsaWdodGVzdC1ncmVlbjtcbiAgICB9XG4gICAgJi5hY3RpdmUge1xuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkb2xpdmUtZ3JlZW47XG4gICAgICAgIGNvbG9yOiAkbGlnaHRlc3QtZ3JlZW47XG4gICAgfVxufVxuXG5AbWl4aW4gdG9wLW5hdi1wYWdlIHtcbiAgICBoZWlnaHQ6IDEwMCU7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgIC5tYWluLWNvbnRlbnQge1xuICAgICAgICBmbGV4OiAxIDEgMDtcbiAgICAgICAgb3ZlcmZsb3c6IGF1dG87XG4gICAgfVxufVxuXG5AbWl4aW4gcmVzcG9uZC10bygkbWVkaWEpIHtcbiAgQGlmICRtZWRpYSA9PSBzbWFsbCB7XG4gICAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiAkYnJlYWstc21hbGwpIHsgQGNvbnRlbnQ7IH1cbiAgfVxuICBAZWxzZSBpZiAkbWVkaWEgPT0gbWVkaXVtIHtcbiAgICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChtaW4td2lkdGg6ICRicmVhay1zbWFsbCArIDEpIGFuZCAobWF4LXdpZHRoOiAkYnJlYWstbGFyZ2UgLSAxKSB7IEBjb250ZW50OyB9XG4gIH1cbiAgQGVsc2UgaWYgJG1lZGlhID09IHdpZGUge1xuICAgIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1pbi13aWR0aDogJGJyZWFrLWxhcmdlKSB7IEBjb250ZW50OyB9XG4gIH1cbn1cbiIsIjpob3N0IHtcbiAgaGVpZ2h0OiAxMDAlO1xuICB3aWR0aDogMTAwJTtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbn1cbjpob3N0IC5tYWluLWNvbnRlbnQge1xuICBmbGV4OiAxIDEgMDtcbiAgb3ZlcmZsb3c6IGF1dG87XG59XG46aG9zdCAubWFpbi1jb250ZW50IHtcbiAgY29sb3I6ICMyMDIxMjQ7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XG59XG46aG9zdCAudG9wLW5hdiB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGJhY2tncm91bmQtY29sb3I6ICMzRjQwMzg7XG4gIGNvbG9yOiAjRkNGQ0Y5O1xuICBoZWlnaHQ6IDIuNXJlbTtcbn1cbjpob3N0IC50b3AtbmF2IC5wYWdlLXRpdGxlLWNvbnRhaW5lciB7XG4gIGZsZXg6IDAgMCBhdXRvO1xuICBwYWRkaW5nOiAwLjVyZW0gMS4yNXJlbTtcbiAgZm9udC1zaXplOiAxLjI1cmVtO1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xufVxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA1NTBweCkge1xuICA6aG9zdCAudG9wLW5hdiAucGFnZS10aXRsZS1jb250YWluZXIge1xuICAgIGRpc3BsYXk6IG5vbmU7XG4gIH1cbn1cbjpob3N0IC50b3AtbmF2IC5yaWdodC1zZWN0aW9uIHtcbiAgZmxleDogMSAxIDA7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIGp1c3RpZnktY29udGVudDogZmxleC1lbmQ7XG4gIG92ZXJmbG93OiBoaWRkZW47XG59XG46aG9zdCAudG9wLW5hdiAucmlnaHQtc2VjdGlvbiAubmF2LWl0ZW1zLWNvbnRhaW5lciB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogZmxleC1lbmQ7XG4gIG1hcmdpbjogMCAzcmVtO1xufVxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA1NTBweCkge1xuICA6aG9zdCAudG9wLW5hdiAucmlnaHQtc2VjdGlvbiAubmF2LWl0ZW1zLWNvbnRhaW5lciB7XG4gICAgbWFyZ2luOiAwIDAuMjVyZW07XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIH1cbn1cbjpob3N0IC50b3AtbmF2IC5yaWdodC1zZWN0aW9uIC5uYXYtaXRlbXMtY29udGFpbmVyIC5uYXYtaXRlbSB7XG4gIGZsZXg6IDAgMSBhdXRvO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjM0Y0MDM4O1xuICBjb2xvcjogI0ZDRkNGOTtcbiAgd2lkdGg6IDhyZW07XG4gIHBhZGRpbmc6IDAuNXJlbTtcbiAgY3Vyc29yOiBwb2ludGVyO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIG91dGxpbmU6IG5vbmU7XG4gIHdoaXRlLXNwYWNlOiBub3dyYXA7XG4gIHVzZXItc2VsZWN0OiBub25lO1xuICBtYXJnaW46IDAgMC4yNXJlbTtcbiAgYm9yZGVyLXJhZGl1czogNHB4IDRweCAwIDA7XG59XG46aG9zdCAudG9wLW5hdiAucmlnaHQtc2VjdGlvbiAubmF2LWl0ZW1zLWNvbnRhaW5lciAubmF2LWl0ZW06aG92ZXIge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjNEI1MzIwO1xuICBjb2xvcjogI0ZDRkNGOTtcbn1cbjpob3N0IC50b3AtbmF2IC5yaWdodC1zZWN0aW9uIC5uYXYtaXRlbXMtY29udGFpbmVyIC5uYXYtaXRlbS5hY3RpdmUge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjNzA4MjM4O1xuICBjb2xvcjogI0ZDRkNGOTtcbn0iLCJcbiRkYXJrLWdyZWVuOiAjMjkyRTEyO1xuJGFybXktZ3JlZW46ICM0QjUzMjA7XG4kb2xpdmUtZ3JlZW46ICM3MDgyMzg7XG4kbW9zcy1ncmVlbjogIzhBOUE1QjtcbiRsYXVyZWwtZ3JlZW46ICNCQUMzOUY7XG5cbiRzYXR1cmF0ZWQtb2xpdmU6ICM3Mjk5MDA7XG4kc2F0dXJhdGVkLWJsdWU6ICMxNjRFQjc7XG5cbi8vIG5pY2UgZm9yIHRleHQgYWdhaW5zdCBkYXJrIGJhY2tncm91bmRcbiRsaWdodC1ncmVlbjogI0Y0RjdFQTtcbiRsaWdodGVzdC1ncmVlbjogI0ZDRkNGOTtcblxuLy8gVXNlZCBmb3IgZmlsZSBzZWxlY3RvclxuJGVnZ3NoZWxsLWRhcmtlcjogI0RERDlDRjtcbiRlZ2dzaGVsbC1kYXJrOiAjRUFFNkRBO1xuJGVnZ3NoZWxsOiAjRUZFQkRGO1xuJGVnZ3NoZWxsLWxpZ2h0OiAjRjJFRUUxO1xuXG4vLyBncmF5c1xuJGJhc2ljYWxseS1ibGFjazogIzIwMjEyNDtcbiRibGFjay1vbGl2ZTogIzNGNDAzODtcbiRncmFuaXRlOiAjNjU2MzVGO1xuJGxpZ2h0ZXItZ3JheTogIzlEOUI5OTtcbiR3aGl0ZTogI2ZmZjtcblxuJGdvbGQ6ICNENkI5MDI7XG4kc3Rhci1ibHVlOiAjMUQ2MkM0O1xuXG4kYnJlYWstc21hbGw6IDU1MHB4O1xuJGJyZWFrLW1kOiA4MDBweDtcbiRicmVhay1sYXJnZTogMTAyNHB4O1xuIl19 */");

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
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var AppComponent = /** @class */ (function () {
    function AppComponent() {
    }
    AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-root',
            template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./app.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html")).default,
            styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./app.component.scss */ "./src/app/app.component.scss")).default]
        })
    ], AppComponent);
    return AppComponent;
}());



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
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm5/animations.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _src_app_firebase_auth_firebase_auth_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @src/app/firebase-auth/firebase-auth.module */ "./src/app/firebase-auth/firebase-auth.module.ts");
/* harmony import */ var _src_app_app_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @src/app/app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _src_app_app_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @src/app/app.component */ "./src/app/app.component.ts");







var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            imports: [
                _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_1__["NoopAnimationsModule"],
                _src_app_app_routing_module__WEBPACK_IMPORTED_MODULE_5__["AppRoutingModule"],
                _src_app_firebase_auth_firebase_auth_module__WEBPACK_IMPORTED_MODULE_4__["FirebaseAuthWithRoutesModule"],
            ],
            declarations: [
                _src_app_app_component__WEBPACK_IMPORTED_MODULE_6__["AppComponent"],
            ],
            providers: [
                _angular_common__WEBPACK_IMPORTED_MODULE_3__["Location"],
                { provide: _angular_common__WEBPACK_IMPORTED_MODULE_3__["LocationStrategy"], useClass: _angular_common__WEBPACK_IMPORTED_MODULE_3__["HashLocationStrategy"] },
            ],
            bootstrap: [_src_app_app_component__WEBPACK_IMPORTED_MODULE_6__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/firebase-auth/firebase-auth-success/firebase-auth-success.component.scss":
/*!******************************************************************************************!*\
  !*** ./src/app/firebase-auth/firebase-auth-success/firebase-auth-success.component.scss ***!
  \******************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2ZpcmViYXNlLWF1dGgvZmlyZWJhc2UtYXV0aC1zdWNjZXNzL2ZpcmViYXNlLWF1dGgtc3VjY2Vzcy5jb21wb25lbnQuc2NzcyJ9 */");

/***/ }),

/***/ "./src/app/firebase-auth/firebase-auth-success/firebase-auth-success.component.ts":
/*!****************************************************************************************!*\
  !*** ./src/app/firebase-auth/firebase-auth-success/firebase-auth-success.component.ts ***!
  \****************************************************************************************/
/*! exports provided: FirebaseAuthSuccessComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FirebaseAuthSuccessComponent", function() { return FirebaseAuthSuccessComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");



// declare global {
//   interface Window {
//     firebase: any;
//     firebaseui: any;
//   }
// }
var FirebaseAuthSuccessComponent = /** @class */ (function () {
    function FirebaseAuthSuccessComponent(route) {
        this.route = route;
    }
    FirebaseAuthSuccessComponent.prototype.ngOnInit = function () {
        console.log('route', this.route);
    };
    FirebaseAuthSuccessComponent.ctorParameters = function () { return [
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] }
    ]; };
    FirebaseAuthSuccessComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'dwu-firebase-auth-success',
            template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./firebase-auth-success.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/firebase-auth/firebase-auth-success/firebase-auth-success.component.html")).default,
            styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./firebase-auth-success.component.scss */ "./src/app/firebase-auth/firebase-auth-success/firebase-auth-success.component.scss")).default]
        })
    ], FirebaseAuthSuccessComponent);
    return FirebaseAuthSuccessComponent;
}());



/***/ }),

/***/ "./src/app/firebase-auth/firebase-auth.component.scss":
/*!************************************************************!*\
  !*** ./src/app/firebase-auth/firebase-auth.component.scss ***!
  \************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2ZpcmViYXNlLWF1dGgvZmlyZWJhc2UtYXV0aC5jb21wb25lbnQuc2NzcyJ9 */");

/***/ }),

/***/ "./src/app/firebase-auth/firebase-auth.component.ts":
/*!**********************************************************!*\
  !*** ./src/app/firebase-auth/firebase-auth.component.ts ***!
  \**********************************************************/
/*! exports provided: FirebaseAuthComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FirebaseAuthComponent", function() { return FirebaseAuthComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _firebase_auth_firebase_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @firebase-auth/firebase-auth.service */ "./src/app/firebase-auth/firebase-auth.service.ts");



var FirebaseAuthComponent = /** @class */ (function () {
    function FirebaseAuthComponent(hostEl, firebaseAuthService) {
        this.hostEl = hostEl;
        this.firebaseAuthService = firebaseAuthService;
    }
    FirebaseAuthComponent.prototype.ngOnInit = function () {
        this.firebaseAuthService.renderLogin(this.loginRef.nativeElement);
        this.firebaseAuthService.user$.subscribe(function (user) {
            console.log('user', user);
            if (user) {
                var fireStore = window.firebase.firestore();
                var userDoc_1 = fireStore.doc("users/" + user.uid);
                // console.log('userDoc', `users/${user.uid}`, userDoc);
                userDoc_1.get().then(function (doc) {
                    if (doc && doc.exists) {
                        var data = doc.data();
                        console.log('data', data);
                    }
                    else {
                        console.log('doc not found');
                        userDoc_1.set({})
                            .then(function (res) {
                            console.log('set response', res);
                        });
                    }
                });
            }
        });
    };
    FirebaseAuthComponent.prototype.ngOnDestroy = function () {
        // if (window.firebaseui.auth.AuthUI.getInstance()) {
        //   this.ui.delete();
        // }
    };
    FirebaseAuthComponent.prototype.signOut = function () {
        this.firebaseAuthService.signOut();
    };
    FirebaseAuthComponent.ctorParameters = function () { return [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"] },
        { type: _firebase_auth_firebase_auth_service__WEBPACK_IMPORTED_MODULE_2__["FirebaseAuthService"] }
    ]; };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('loginRef', { static: true })
    ], FirebaseAuthComponent.prototype, "loginRef", void 0);
    FirebaseAuthComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'dwu-firebase-auth',
            template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./firebase-auth.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/firebase-auth/firebase-auth.component.html")).default,
            styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./firebase-auth.component.scss */ "./src/app/firebase-auth/firebase-auth.component.scss")).default]
        })
    ], FirebaseAuthComponent);
    return FirebaseAuthComponent;
}());



/***/ }),

/***/ "./src/app/firebase-auth/firebase-auth.module.ts":
/*!*******************************************************!*\
  !*** ./src/app/firebase-auth/firebase-auth.module.ts ***!
  \*******************************************************/
/*! exports provided: FirebaseAuthModule, FirebaseAuthWithRoutesModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FirebaseAuthModule", function() { return FirebaseAuthModule; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FirebaseAuthWithRoutesModule", function() { return FirebaseAuthWithRoutesModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _firebase_auth_firebase_auth_routes__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @firebase-auth/firebase-auth.routes */ "./src/app/firebase-auth/firebase-auth.routes.ts");
/* harmony import */ var _firebase_auth_firebase_auth_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @firebase-auth/firebase-auth.component */ "./src/app/firebase-auth/firebase-auth.component.ts");
/* harmony import */ var _firebase_auth_firebase_auth_success_firebase_auth_success_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @firebase-auth/firebase-auth-success/firebase-auth-success.component */ "./src/app/firebase-auth/firebase-auth-success/firebase-auth-success.component.ts");
/* harmony import */ var _firebase_auth_firebase_auth_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @firebase-auth/firebase-auth.service */ "./src/app/firebase-auth/firebase-auth.service.ts");







var FirebaseAuthModule = /** @class */ (function () {
    function FirebaseAuthModule() {
    }
    FirebaseAuthModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            declarations: [
                _firebase_auth_firebase_auth_component__WEBPACK_IMPORTED_MODULE_4__["FirebaseAuthComponent"],
                _firebase_auth_firebase_auth_success_firebase_auth_success_component__WEBPACK_IMPORTED_MODULE_5__["FirebaseAuthSuccessComponent"],
            ],
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
            ],
            exports: [
                _firebase_auth_firebase_auth_component__WEBPACK_IMPORTED_MODULE_4__["FirebaseAuthComponent"],
                _firebase_auth_firebase_auth_success_firebase_auth_success_component__WEBPACK_IMPORTED_MODULE_5__["FirebaseAuthSuccessComponent"],
            ],
            providers: [],
        })
    ], FirebaseAuthModule);
    return FirebaseAuthModule;
}());

var FirebaseAuthWithRoutesModule = /** @class */ (function () {
    function FirebaseAuthWithRoutesModule() {
    }
    FirebaseAuthWithRoutesModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            declarations: [],
            imports: [
                FirebaseAuthModule,
                _firebase_auth_firebase_auth_routes__WEBPACK_IMPORTED_MODULE_3__["FirebaseAuthRoutingModule"],
            ],
            exports: [],
            providers: [
                _firebase_auth_firebase_auth_service__WEBPACK_IMPORTED_MODULE_6__["FirebaseAuthService"],
            ],
        })
    ], FirebaseAuthWithRoutesModule);
    return FirebaseAuthWithRoutesModule;
}());



/***/ }),

/***/ "./src/app/firebase-auth/firebase-auth.routes.ts":
/*!*******************************************************!*\
  !*** ./src/app/firebase-auth/firebase-auth.routes.ts ***!
  \*******************************************************/
/*! exports provided: FirebaseAuthRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FirebaseAuthRoutingModule", function() { return FirebaseAuthRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _src_app_firebase_auth_firebase_auth_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @src/app/firebase-auth/firebase-auth.component */ "./src/app/firebase-auth/firebase-auth.component.ts");




var routes = [
    {
        path: 'auth',
        component: _src_app_firebase_auth_firebase_auth_component__WEBPACK_IMPORTED_MODULE_3__["FirebaseAuthComponent"]
    },
    {
        path: 'auth-success',
        component: _src_app_firebase_auth_firebase_auth_component__WEBPACK_IMPORTED_MODULE_3__["FirebaseAuthComponent"]
    },
];
var FirebaseAuthRoutingModule = /** @class */ (function () {
    function FirebaseAuthRoutingModule() {
    }
    FirebaseAuthRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
        })
    ], FirebaseAuthRoutingModule);
    return FirebaseAuthRoutingModule;
}());



/***/ }),

/***/ "./src/app/firebase-auth/firebase-auth.service.ts":
/*!********************************************************!*\
  !*** ./src/app/firebase-auth/firebase-auth.service.ts ***!
  \********************************************************/
/*! exports provided: FirebaseAuthService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FirebaseAuthService", function() { return FirebaseAuthService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var _firebase_auth_user_model__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @firebase-auth/user.model */ "./src/app/firebase-auth/user.model.ts");




var FirebaseAuthService = /** @class */ (function () {
    function FirebaseAuthService() {
        this.firebaseAuth = window.firebase.auth();
        this.FirebaseAuthUI = window.firebaseui.auth.AuthUI;
        this.defaultUiConfig = {
            // signInSuccessUrl: '#/auth-success',
            signInSuccessUrl: '#/auth-success',
            callbacks: {
                signInSuccess: function () { return false; },
            },
            signInOptions: [
                // Leave the lines as is for the providers you want to offer your users.
                window.firebase.auth.GoogleAuthProvider.PROVIDER_ID,
            ],
        };
        this.user$ = new rxjs__WEBPACK_IMPORTED_MODULE_2__["BehaviorSubject"](undefined);
        this.initializing$ = new rxjs__WEBPACK_IMPORTED_MODULE_2__["BehaviorSubject"](true);
        this.initialize();
    }
    FirebaseAuthService.prototype.initialize = function () {
        var _this = this;
        if (!this.firebaseAuthUI) {
            this.firebaseAuthUI = new this.FirebaseAuthUI(this.firebaseAuth);
        }
        this.firebaseAuth.onAuthStateChanged(function (userData) {
            // this.initializing$.next(false);
            if (!userData) {
                return;
            }
            userData.getIdToken().then(function (accessToken) {
                var user = Object.assign(new _firebase_auth_user_model__WEBPACK_IMPORTED_MODULE_3__["User"](), userData, { accessToken: accessToken });
                _this.user$.next(user);
            });
        });
    };
    FirebaseAuthService.prototype.renderLogin = function (hostEl) {
        this.firebaseAuthUI.start(hostEl, tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"]({}, this.defaultUiConfig));
    };
    FirebaseAuthService.prototype.signOut = function () {
        var _this = this;
        return this.firebaseAuth.signOut()
            .then(function () {
            _this.user$.next(undefined);
        });
    };
    FirebaseAuthService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])()
    ], FirebaseAuthService);
    return FirebaseAuthService;
}());



/***/ }),

/***/ "./src/app/firebase-auth/user.model.ts":
/*!*********************************************!*\
  !*** ./src/app/firebase-auth/user.model.ts ***!
  \*********************************************/
/*! exports provided: User */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "User", function() { return User; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");

var User = /** @class */ (function () {
    function User() {
    }
    return User;
}());



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
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

var environment = {
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
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var hammerjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! hammerjs */ "./node_modules/hammerjs/hammer.js");
/* harmony import */ var hammerjs__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(hammerjs__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");






if (_environments_environment__WEBPACK_IMPORTED_MODULE_5__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_3__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_4__["AppModule"])
    .catch(function (err) { return console.error(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /Users/admin/projects/dawu-home/src/main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map