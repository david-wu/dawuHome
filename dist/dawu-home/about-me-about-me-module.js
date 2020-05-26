(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["about-me-about-me-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/about-me/about-me.component.html":
/*!****************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/about-me/about-me.component.html ***!
  \****************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("about me");

/***/ }),

/***/ "./src/app/about-me/about-me.component.scss":
/*!**************************************************!*\
  !*** ./src/app/about-me/about-me.component.scss ***!
  \**************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2Fib3V0LW1lL2Fib3V0LW1lLmNvbXBvbmVudC5zY3NzIn0= */");

/***/ }),

/***/ "./src/app/about-me/about-me.component.ts":
/*!************************************************!*\
  !*** ./src/app/about-me/about-me.component.ts ***!
  \************************************************/
/*! exports provided: AboutMeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AboutMeComponent", function() { return AboutMeComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var AboutMeComponent = /** @class */ (function () {
    function AboutMeComponent() {
    }
    AboutMeComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'about-me',
            template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./about-me.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/about-me/about-me.component.html")).default,
            styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./about-me.component.scss */ "./src/app/about-me/about-me.component.scss")).default]
        })
    ], AboutMeComponent);
    return AboutMeComponent;
}());



/***/ }),

/***/ "./src/app/about-me/about-me.module.ts":
/*!*********************************************!*\
  !*** ./src/app/about-me/about-me.module.ts ***!
  \*********************************************/
/*! exports provided: AboutMeModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AboutMeModule", function() { return AboutMeModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _src_app_about_me_about_me_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @src/app/about-me/about-me.component */ "./src/app/about-me/about-me.component.ts");
/* harmony import */ var _src_app_about_me_about_me_routes__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @src/app/about-me/about-me.routes */ "./src/app/about-me/about-me.routes.ts");





var AboutMeModule = /** @class */ (function () {
    function AboutMeModule() {
    }
    AboutMeModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            declarations: [
                _src_app_about_me_about_me_component__WEBPACK_IMPORTED_MODULE_3__["AboutMeComponent"],
            ],
            imports: [
                _src_app_about_me_about_me_routes__WEBPACK_IMPORTED_MODULE_4__["AboutMeRoutingModule"],
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
            ],
            exports: [
                _src_app_about_me_about_me_component__WEBPACK_IMPORTED_MODULE_3__["AboutMeComponent"],
            ],
            providers: [],
        })
    ], AboutMeModule);
    return AboutMeModule;
}());



/***/ }),

/***/ "./src/app/about-me/about-me.routes.ts":
/*!*********************************************!*\
  !*** ./src/app/about-me/about-me.routes.ts ***!
  \*********************************************/
/*! exports provided: AboutMeRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AboutMeRoutingModule", function() { return AboutMeRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _src_app_about_me_about_me_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @src/app/about-me/about-me.component */ "./src/app/about-me/about-me.component.ts");




var routes = [
    {
        path: '',
        component: _src_app_about_me_about_me_component__WEBPACK_IMPORTED_MODULE_3__["AboutMeComponent"]
    }
];
var AboutMeRoutingModule = /** @class */ (function () {
    function AboutMeRoutingModule() {
    }
    AboutMeRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
        })
    ], AboutMeRoutingModule);
    return AboutMeRoutingModule;
}());



/***/ })

}]);
//# sourceMappingURL=about-me-about-me-module.js.map