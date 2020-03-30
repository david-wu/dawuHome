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

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html":
/*!**************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html ***!
  \**************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n<div class=\"top-nav\">\n  <div class=\"page-title-container\">\n    <div>David's Page</div>\n  </div>\n  <div class=\"right-section\">\n    <div class=\"nav-items-container\">\n      <div\n        class=\"nav-item\"\n        [routerLinkActive]=\"['active']\"\n        [routerLink]=\"['/portfolio']\"\n      >Projects</div>\n      <div\n        class=\"nav-item\"\n        [routerLinkActive]=\"['active']\"\n        [routerLink]=\"['/corona']\"\n      >Corona</div>\n      <!-- <div\n        class=\"nav-item\"\n        [routerLinkActive]=\"['active']\"\n        [routerLink]=\"['/about-me']\"\n      >About Me</div> -->\n    </div>\n  </div>\n</div>\n<div class=\"main-content\">\n  <router-outlet></router-outlet>\n</div>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/barcelona/player-detail/player-detail.component.html":
/*!************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/barcelona/player-detail/player-detail.component.html ***!
  \************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<h1>Details</h1>\n<h3>{{ player.id }}</h3>\n<h3>{{ player.name }}</h3>\n<h3>{{ player.role }}</h3>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/barcelona/players/players.component.html":
/*!************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/barcelona/players/players.component.html ***!
  \************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<h1>Barcelona Players</h1>\n\n<div *ngFor=\"let player of players\" [routerLink]=\"['/player', player.id]\">\n  <h3>{{ player.name }}</h3>\n</div>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/common/charts/bar-chart/bar-chart.component.html":
/*!********************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/common/charts/bar-chart/bar-chart.component.html ***!
  \********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/common/charts/chart-legend/chart-legend.component.html":
/*!**************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/common/charts/chart-legend/chart-legend.component.html ***!
  \**************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div *ngFor=\"let key of keys\" class=\"key-set\" (click)=\"onKeyClick(key)\">\n    <div\n        class=\"key-color\"\n        [style.background-color]=\"getKeyBackgroundColor(key)\"\n        [style.border-color]=\"getKeyBorderColor(key)\"\n    ></div>\n    <div class=\"key-label\">{{ key }}</div>\n</div>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/common/charts/line-chart/line-chart.component.html":
/*!**********************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/common/charts/line-chart/line-chart.component.html ***!
  \**********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/common/search-input/search-input.component.html":
/*!*******************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/common/search-input/search-input.component.html ***!
  \*******************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"input-container\">\n    <span class=\"material-icons search-icon\">\n        search\n    </span>\n    <span\n        *ngIf=\"searchText\"\n        class=\"material-icons cancel-icon\"\n        (click)=\"searchTextChange.emit('')\"\n    >\n        highlight_off\n    </span>\n    <input\n        type=\"text\"\n        [ngModel]=\"searchText\"\n        (ngModelChange)=\"searchTextChange.emit($event)\"\n        [placeholder]=\"placeholder\"\n        autofocus\n    >\n</div>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/common/text-decorator/text-decorator.component.html":
/*!***********************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/common/text-decorator/text-decorator.component.html ***!
  \***********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<span\n    *ngFor=\"let spanElement of spanElements; trackBy: trackByFn\"\n    [class.decorated]=\"spanElement.isDecorated\"\n>{{spanElement.text}}</span>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/corona/corona-dashboard/corona-dashboard.component.html":
/*!***************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/corona/corona-dashboard/corona-dashboard.component.html ***!
  \***************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"chart-container\">\n    <div class=\"selected-stats\" *ngIf=\"coronaData[hoverIndex] as stats\">\n        <div class=\"stats-column-container\">\n            <div class=\"stats-column\">\n                <div>total:</div>\n                <div>date:</div>\n            </div>\n            <div class=\"stats-column stats\">\n                <div class=\"count-stat\">{{ stats.cases.toLocaleString() }}</div>\n                <div class=\"date-stat\">{{ stats.dateStr }}</div>\n            </div>\n        </div>\n        <div class=\"stats-column-container\">\n            <div class=\"stats-column\">\n                <div>new:</div>\n                <div>active:</div>\n            </div>\n            <div class=\"stats-column stats\">\n                <div>{{ stats.new.toLocaleString() }}</div>\n                <div>{{ stats.active.toLocaleString() }}</div>\n            </div>\n        </div>\n        <div class=\"stats-column-container\">\n            <div class=\"stats-column\">\n                <div>recovered:</div>\n                <div>deaths:</div>\n            </div>\n            <div class=\"stats-column stats\">\n                <div>{{ stats.recovered.toLocaleString() }}</div>\n                <div>{{ stats.deaths.toLocaleString() }}</div>\n            </div>\n        </div>\n    </div>\n    <dwu-bar-chart\n        class=\"overview chart\"\n        [tableData]=\"coronaData\"\n        [keys]=\"coronaKeys\"\n        [colorsByKey]=\"coronaColorsByKey\"\n        [disabledKeys]=\"disabledBarKeys\"\n        [hoverIndex]=\"hoverIndex\"\n        (hoverIndexChange)=\"hoverIndex = $event\"\n    ></dwu-bar-chart>\n    <dwu-chart-legend\n        [keys]=\"coronaKeys\"\n        [colorsByKey]=\"coronaColorsByKey\"\n        [disabledKeys]=\"disabledBarKeys\"\n        (disabledKeysChange)=\"disabledBarKeysChange.emit($event)\"\n    ></dwu-chart-legend>\n\n    <dwu-line-chart\n        class=\"overview chart\"\n        [tableData]=\"normalizedData\"\n        [keys]=\"normalKeys\"\n        [colorsByKey]=\"normalColorsByKeys\"\n        [disabledKeys]=\"disabledNormalKeys\"\n        [hoverIndex]=\"hoverIndex\"\n        (hoverIndexChange)=\"hoverIndex = $event\"\n    ></dwu-line-chart>\n    <dwu-chart-legend\n        [keys]=\"normalKeys\"\n        [colorsByKey]=\"normalColorsByKeys\"\n        [disabledKeys]=\"disabledNormalKeys\"\n        (disabledKeysChange)=\"disabledNormalKeysChange.emit($event)\"\n    ></dwu-chart-legend>\n</div>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/corona/corona-file-viewer/corona-file-viewer.component.html":
/*!*******************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/corona/corona-file-viewer/corona-file-viewer.component.html ***!
  \*******************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div *ngIf=\"!location\" class=\"header\">\n    <div class=\"header-main\">\n        <div>{{ fileName }}</div>\n    </div>\n</div>\n<div *ngIf=\"location\" class=\"header\">\n    <div class=\"header-main\">\n        <div>{{ fileName }}</div>\n        <a [href]=\"fileUrl\" class=\"download-link\" download>\n            <span class=\"material-icons download-icon\">\n                get_app\n            </span>\n        </a>\n        <div class=\"loader\" [class.visible]=\"isLoading$ | async\">\n            <span class=\"material-icons hour-glass\">\n                hourglass_empty\n            </span>\n        </div>\n    </div>\n    <div class=\"population\">\n        <div>Population:</div>\n        <div\n            *ngIf=\"(coronaFile$ | async)?.population as population\"\n            class=\"population-count\"\n        >{{ population.toLocaleString() }}</div>\n    </div>\n</div>\n<dwu-corona-dashboard\n    *ngIf=\"coronaFile$ | async as coronaFile\"\n    [coronaFile]=\"coronaFile\"\n    [disabledBarKeys]=\"disabledBarKeys\"\n    (disabledBarKeysChange)=\"disabledBarKeysChange.emit($event)\"\n    [disabledNormalKeys]=\"disabledNormalKeys\"\n    (disabledNormalKeysChange)=\"disabledNormalKeysChange.emit($event)\"\n></dwu-corona-dashboard>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/corona/corona.component.html":
/*!************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/corona/corona.component.html ***!
  \************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"page-container\">\n    <div class=\"left-side\">\n        <dwu-search-input\n            [searchText]=\"filterStr\"\n            (searchTextChange)=\"onFilterStringChange($event)\"\n            [placeholder]=\"'County, State, or Country'\"\n        ></dwu-search-input>\n        <div class=\"view-tabs\">\n            <div class=\"view-tab\" [class.active]=\"!viewingFavorites\" (click)=\"setViewingFavorites(false)\">\n                All\n            </div>\n            <div class=\"view-tab\" [class.active]=\"viewingFavorites\" (click)=\"setViewingFavorites(true)\">\n                <div class=\"material-icons star active\">\n                    grade\n                </div>\n                <div>Favorites</div>\n            </div>\n        </div>\n        <dwu-file-explorer\n            [rootFileId]=\"fileGroup.rootFileId\"\n            [filesById]=\"fileGroup.filesById\"\n            (filesByIdChange)=\"fileGroup.filesById = $event\"\n            [fuzzFilterString]=\"filterStr\"\n            [closedFileIds]=\"fileGroup.closedFileIds\"\n            (closedFileIdsChange)=\"fileGroup.setClosedFileIds($event)\"\n            [selectedFileIds]=\"fileGroup.selectedFileIds\"\n            (selectedFileIdsChange)=\"fileGroup.setSelectedFileIds($event)\"\n            [rowIconTemplate]=\"rowIconTemplate\"\n            [perfMode]=\"true\"\n        ></dwu-file-explorer>\n    </div>\n    <div class=\"right-side\">\n        <ng-container  *ngIf=\"getSelectedFileId() as selectedFileId\" [ngSwitch]=\"selectedFileId\">\n            <dwu-corona-file-viewer\n                *ngSwitchDefault\n                [location]=\"locationsByFileId[selectedFileId]\"\n                [fileName]=\"fileGroup.filesById[selectedFileId].label\"\n                [(disabledBarKeys)]=\"disabledBarKeys\"\n                [(disabledNormalKeys)]=\"disabledNormalKeys\"\n            ></dwu-corona-file-viewer>\n        </ng-container>\n    </div>\n    <ng-template #rowIconTemplate let-file=\"file\">\n        <div\n            *ngIf=\"locationsByFileId[file.id]\"\n            class=\"material-icons star clickable row-icon\"\n            [class.active]=\"favoriteFileIds.has(file.id)\"\n            (click)=\"toggleFavoriteFile(file, $event)\"\n        >\n            grade\n        </div>\n    </ng-template>\n</div>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/file-explorer/file-explorer.component.html":
/*!**************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/file-explorer/file-explorer.component.html ***!
  \**************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<cdk-virtual-scroll-viewport itemSize=\"24\" class=\"viewport\">\n    <div\n        *cdkVirtualFor=\"let fileIdAndDepth of fileIdsAndDepth; index as i; trackBy: trackByFn\"\n        [attr.data-file-id]=\"filesById[fileIdAndDepth[0]].id\"\n    >\n        <div\n            *ngIf=\"filesById[fileIdAndDepth[0]] as file\"\n            class=\"file-row\"\n            [ngClass]=\"fileIsOddById[file.id] ? 'odd' : 'even'\"\n            [class.dragging]=\"fileIdBeingDragged\"\n            [class.being-dragged]=\"fileIdBeingDragged === file.id\"\n            [class.selected]=\"selectedFileIds.has(file.id)\"\n            [class.hidden]=\"visibleFileIds && !visibleFileIds.has(file.id)\"\n            [style.padding-left]=\"getPaddingLeft(fileIdAndDepth[1])\"\n            (click)=\"selectFile(file)\"\n        >\n            <div class=\"dragula-container\">\n                <ng-container *ngIf=\"file.childIds\">\n                    <i\n                        class=\"material-icons arrow clickable\"\n                        (click)=\"toggleClosedFile(file, $event)\"\n                        [class.closed]=\"!this.fuzzFilterString && closedFileIds.has(file.id)\"\n                    >\n                        keyboard_arrow_right\n                    </i>\n                    <i class=\"material-icons folder\">\n                        folder\n                    </i>\n                </ng-container>\n                <ng-container *ngIf=\"!file.childIds\">\n                    <div class=\"space-maker\">\n                    </div>\n                    <i class=\"material-icons text\">subject</i>\n                </ng-container>\n                <div class=\"file-label\" *ngIf=\"fuzzItemsByFileId[file.id] as fuzzItem\">\n                    <dwu-text-decorator\n                        [ignoreUpdates]=\"visibleFileIds && !visibleFileIds.has(file.id)\"\n                        [text]=\"fuzzItemsByFileId[file.id].subject\"\n                        [matchRanges]=\"fuzzItemsByFileId[file.id].matchRanges\"\n                    ></dwu-text-decorator>\n                </div>\n                <div class=\"file-label\" *ngIf=\"!fuzzItemsByFileId[file.id]\">\n                    {{ file.label || file.id }}\n                </div>\n                <ng-container *ngIf=\"rowIconTemplate\">\n                    <ng-container *ngTemplateOutlet=\"rowIconTemplate; context: { file: file }\">\n                    </ng-container>\n                </ng-container>\n            </div>\n        </div>\n    </div>\n</cdk-virtual-scroll-viewport>\n\n\n<!-- Not sure how, but should avoid duplicating this -->\n<!-- <div *ngIf=\"!perfMode\" class=\"viewport\">\n    <div [dragula]=\"'EXP'\">\n        <div\n            *ngFor=\"let fileIdAndDepth of fileIdsAndDepth; index as i; trackBy: trackByFn\"\n            [attr.data-file-id]=\"filesById[fileIdAndDepth[0]].id\"\n        >\n            <div\n                *ngIf=\"filesById[fileIdAndDepth[0]] as file\"\n                class=\"file-row\"\n                [ngClass]=\"fileIsOddById[file.id] ? 'odd' : 'even'\"\n                [class.dragging]=\"fileIdBeingDragged\"\n                [class.being-dragged]=\"fileIdBeingDragged === file.id\"\n                [class.selected]=\"selectedFileIds.has(file.id)\"\n                [class.hidden]=\"visibleFileIds && !visibleFileIds.has(file.id)\"\n                [style.padding-left]=\"getPaddingLeft(fileIdAndDepth[1])\"\n                (click)=\"selectFile(file)\"\n            >\n                <div class=\"dragula-container\">\n                    <ng-container *ngIf=\"file.childIds\">\n                        <i\n                            class=\"material-icons arrow clickable\"\n                            (click)=\"toggleClosedFile(file, $event)\"\n                            [class.closed]=\"closedFileIds.has(file.id)\"\n                        >\n                            keyboard_arrow_right\n                        </i>\n                        <i class=\"material-icons folder\">\n                            folder\n                        </i>\n                    </ng-container>\n                    <ng-container *ngIf=\"!file.childIds\">\n                        <div class=\"space-maker\">\n                        </div>\n                        <i class=\"material-icons text\">subject</i>\n                    </ng-container>\n                    <div class=\"file-label\" *ngIf=\"fuzzItemsByFileId[file.id] as fuzzItem\">\n                        <dwu-text-decorator\n                            [ignoreUpdates]=\"visibleFileIds && !visibleFileIds.has(file.id)\"\n                            [text]=\"fuzzItemsByFileId[file.id].subject\"\n                            [matchRanges]=\"fuzzItemsByFileId[file.id].matchRanges\"\n                        ></dwu-text-decorator>\n                    </div>\n                    <div class=\"file-label\" *ngIf=\"!fuzzItemsByFileId[file.id]\">\n                        {{ file.label || file.id }}\n                    </div>\n                    <ng-container *ngIf=\"rowIconTemplate\">\n                        <ng-container *ngTemplateOutlet=\"rowIconTemplate; context: { file: file }\">\n                        </ng-container>\n                    </ng-container>\n                </div>\n            </div>\n        </div>\n    </div>\n</div> -->");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/portfolio/portfolio.component.html":
/*!******************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/portfolio/portfolio.component.html ***!
  \******************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"page-container\">\n    <div class=\"left-side\">\n        <dwu-search-input [(searchText)]=\"filterStr\" [placeholder]=\"'search..'\"></dwu-search-input>\n        <dwu-file-explorer\n            [rootFileId]=\"fileGroup.rootFileId\"\n            [filesById]=\"fileGroup.filesById\"\n            (filesByIdChange)=\"fileGroup.filesById = $event\"\n            [fuzzFilterString]=\"filterStr\"\n            [closedFileIds]=\"fileGroup.closedFileIds\"\n            (closedFileIdsChange)=\"fileGroup.setClosedFileIds($event)\"\n            [selectedFileIds]=\"fileGroup.selectedFileIds\"\n            (selectedFileIdsChange)=\"fileGroup.setSelectedFileIds($event)\"\n            [perfMode]=\"true\"\n        ></dwu-file-explorer>\n    </div>\n    <div class=\"right-side\">\n        <ng-container  *ngIf=\"getSelectedFileId() as selectedFileId\" [ngSwitch]=\"selectedFileId\">\n            <app-demo-page-wrapper *ngSwitchCase=\"'FUZZ'\"></app-demo-page-wrapper>\n            <div *ngSwitchCase=\"'FILE_EXPLORER'\">\n                <div>\n                    future file explorer demo\n                </div>\n            </div>\n            <div *ngSwitchCase=\"'TEXT_DECORATOR'\">\n                <div>\n                    future text-decorator demo\n                </div>\n            </div>\n            <div *ngSwitchDefault>\n                <div>\n                    Nothing here yet\n                </div>\n            </div>\n        </ng-container>\n    </div>\n</div>");

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
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _src_app_app_routing_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @src/app/app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm5/animations.js");
/* harmony import */ var _src_app_about_me_about_me_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @src/app/about-me/about-me.component */ "./src/app/about-me/about-me.component.ts");
/* harmony import */ var _src_app_about_me_about_me_routes__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @src/app/about-me/about-me.routes */ "./src/app/about-me/about-me.routes.ts");
/* harmony import */ var fuzz_demo_app__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! fuzz-demo-app */ "./node_modules/fuzz-demo-app/dist/esm2015/fuzz-demo-app.js");









var AboutMeModule = /** @class */ (function () {
    function AboutMeModule() {
    }
    AboutMeModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            declarations: [
                _src_app_about_me_about_me_component__WEBPACK_IMPORTED_MODULE_6__["AboutMeComponent"],
            ],
            imports: [
                _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forChild(_src_app_about_me_about_me_routes__WEBPACK_IMPORTED_MODULE_7__["AboutMeRoutes"]),
                fuzz_demo_app__WEBPACK_IMPORTED_MODULE_8__["AppModule"],
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
                _src_app_app_routing_module__WEBPACK_IMPORTED_MODULE_4__["AppRoutingModule"],
                _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_5__["NoopAnimationsModule"],
            ],
            exports: [
                _src_app_about_me_about_me_component__WEBPACK_IMPORTED_MODULE_6__["AboutMeComponent"],
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
/*! exports provided: AboutMeRoutes */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AboutMeRoutes", function() { return AboutMeRoutes; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _src_app_about_me_about_me_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @src/app/about-me/about-me.component */ "./src/app/about-me/about-me.component.ts");


var AboutMeRoutes = [
    { path: '', component: _src_app_about_me_about_me_component__WEBPACK_IMPORTED_MODULE_1__["AboutMeComponent"] },
];


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
/* harmony import */ var _about_me_about_me_routes__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./about-me/about-me.routes */ "./src/app/about-me/about-me.routes.ts");
/* harmony import */ var _portfolio_portfolio_routes__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./portfolio/portfolio.routes */ "./src/app/portfolio/portfolio.routes.ts");
/* harmony import */ var _corona_corona_routes__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./corona/corona.routes */ "./src/app/corona/corona.routes.ts");






var routes = [
    {
        path: '',
        pathMatch: 'full',
        redirectTo: 'corona'
    },
    {
        path: 'about-me',
        children: _about_me_about_me_routes__WEBPACK_IMPORTED_MODULE_3__["AboutMeRoutes"],
    },
    {
        path: 'portfolio',
        children: _portfolio_portfolio_routes__WEBPACK_IMPORTED_MODULE_4__["PortfolioRoutes"],
    },
    {
        path: 'corona',
        children: _corona_corona_routes__WEBPACK_IMPORTED_MODULE_5__["CoronaRoutes"],
    }
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes, { useHash: true })
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
/* harmony default export */ __webpack_exports__["default"] = (":host {\n  height: 100%;\n  width: 100%;\n  display: flex;\n  flex-direction: column;\n}\n:host .main-content {\n  flex: 1 1 0;\n  overflow: auto;\n}\n:host .main-content {\n  color: #202124;\n  background-color: #fff;\n}\n:host .top-nav {\n  display: flex;\n  background-color: #3F4038;\n  color: #FCFCF9;\n}\n:host .top-nav .page-title-container {\n  flex: 0 0 auto;\n  padding: 0.5rem 1.25rem;\n  font-size: 1.25rem;\n  display: flex;\n  align-items: center;\n}\n:host .top-nav .right-section {\n  flex: 1 1 0;\n  display: flex;\n  flex-direction: column;\n  justify-content: flex-end;\n  overflow: hidden;\n}\n:host .top-nav .right-section .nav-items-container {\n  display: flex;\n  justify-content: flex-end;\n  margin: 0 3rem;\n}\n@media only screen and (max-width: 550px) {\n  :host .top-nav .right-section .nav-items-container {\n    margin: 0 0.25rem;\n  }\n}\n:host .top-nav .right-section .nav-items-container .nav-item {\n  flex: 0 1 auto;\n  background-color: #3F4038;\n  color: #FCFCF9;\n  width: 8rem;\n  padding: 0.5rem;\n  cursor: pointer;\n  text-align: center;\n  outline: none;\n  white-space: nowrap;\n  -webkit-user-select: none;\n     -moz-user-select: none;\n      -ms-user-select: none;\n          user-select: none;\n  margin: 0 0.25rem;\n  border-radius: 4px 4px 0 0;\n}\n:host .top-nav .right-section .nav-items-container .nav-item:hover {\n  background-color: #4B5320;\n  color: #FCFCF9;\n}\n:host .top-nav .right-section .nav-items-container .nav-item.active {\n  background-color: #708238;\n  color: #FCFCF9;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9hZG1pbi9wcm9qZWN0cy9kYXd1LWhvbWUvc3JjL2FwcC9hcHAuY29tcG9uZW50LnNjc3MiLCIvVXNlcnMvYWRtaW4vcHJvamVjdHMvZGF3dS1ob21lL3NyYy9zdHlsZXMvbWl4aW5zLnNjc3MiLCJzcmMvYXBwL2FwcC5jb21wb25lbnQuc2NzcyIsIi9Vc2Vycy9hZG1pbi9wcm9qZWN0cy9kYXd1LWhvbWUvc3JjL3N0eWxlcy92YXJpYWJsZXMuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFHQTtFQ3VGSSxZQUFBO0VBQ0EsV0FBQTtFQUNBLGFBQUE7RUFDQSxzQkFBQTtBQ3hGSjtBRHlGSTtFQUNJLFdBQUE7RUFDQSxjQUFBO0FDdkZSO0FGSkk7RUFDSSxjR1lVO0VIWFYsc0JHZUE7QURUUjtBRkpJO0VBQ0ksYUFBQTtFQUNBLHlCR1FNO0VIUE4sY0dIUztBRFNqQjtBRkxRO0VBQ0ksY0FBQTtFQUNBLHVCQUFBO0VBQ0Esa0JBQUE7RUFDQSxhQUFBO0VBQ0EsbUJBQUE7QUVPWjtBRkxRO0VBQ0ksV0FBQTtFQUNBLGFBQUE7RUFDQSxzQkFBQTtFQUNBLHlCQUFBO0VBQ0EsZ0JBQUE7QUVPWjtBRk5ZO0VBQ0ksYUFBQTtFQUNBLHlCQUFBO0VBQ0EsY0FBQTtBRVFoQjtBRGlFSTtFRDVFUTtJQUtRLGlCQUFBO0VFVWxCO0FBQ0Y7QUZUZ0I7RUFDSSxjQUFBO0VDMkNoQix5QkUxRFU7RUYyRFYsY0VyRWE7RUYrQ2IsV0FBQTtFQUNBLGVBQUE7RUFDQSxlQUFBO0VBQ0Esa0JBQUE7RUFDQSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSx5QkFBQTtLQUFBLHNCQUFBO01BQUEscUJBQUE7VUFBQSxpQkFBQTtFRDFCZ0IsaUJBQUE7RUFDQSwwQkFBQTtBRW1CcEI7QUR1Qkk7RUFDSSx5QkU5RUs7RUYrRUwsY0V4RVM7QURtRGpCO0FEdUJJO0VBQ0kseUJFakZNO0VGa0ZOLGNFNUVTO0FEdURqQiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIkBpbXBvcnQgJ21peGlucyc7XG5AaW1wb3J0ICd2YXJpYWJsZXMnO1xuXG46aG9zdCB7XG4gICAgQGluY2x1ZGUgdG9wLW5hdi1wYWdlO1xuICAgIC5tYWluLWNvbnRlbnQge1xuICAgICAgICBjb2xvcjogJGJhc2ljYWxseS1ibGFjaztcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogJHdoaXRlO1xuICAgIH1cbiAgICAudG9wLW5hdiB7XG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6ICRibGFjay1vbGl2ZTtcbiAgICAgICAgY29sb3I6ICRsaWdodGVzdC1ncmVlbjtcbiAgICAgICAgLnBhZ2UtdGl0bGUtY29udGFpbmVyIHtcbiAgICAgICAgICAgIGZsZXg6IDAgMCBhdXRvO1xuICAgICAgICAgICAgcGFkZGluZzogMC41cmVtIDEuMjVyZW07XG4gICAgICAgICAgICBmb250LXNpemU6IDEuMjVyZW07XG4gICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgICAgfVxuICAgICAgICAucmlnaHQtc2VjdGlvbiB7XG4gICAgICAgICAgICBmbGV4OiAxIDEgMDtcbiAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgICAgICAgICAganVzdGlmeS1jb250ZW50OiBmbGV4LWVuZDtcbiAgICAgICAgICAgIG92ZXJmbG93OiBoaWRkZW47XG4gICAgICAgICAgICAubmF2LWl0ZW1zLWNvbnRhaW5lciB7XG4gICAgICAgICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtZW5kO1xuICAgICAgICAgICAgICAgIG1hcmdpbjogMCAzcmVtO1xuICAgICAgICAgICAgICAgIEBpbmNsdWRlIHJlc3BvbmQtdG8oc21hbGwpIHtcbiAgICAgICAgICAgICAgICAgICAgbWFyZ2luOiAwIDAuMjVyZW07XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIC5uYXYtaXRlbSB7XG4gICAgICAgICAgICAgICAgICAgIGZsZXg6IDAgMSBhdXRvO1xuICAgICAgICAgICAgICAgICAgICBAaW5jbHVkZSBkYXJrLWJ1dHRvbjtcbiAgICAgICAgICAgICAgICAgICAgbWFyZ2luOiAwIDAuMjVyZW07XG4gICAgICAgICAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDRweCA0cHggMCAwO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cblxuICAgICAgICB9XG4gICAgfVxufVxuIiwiQGltcG9ydCAndmFyaWFibGVzJztcblxuQG1peGluIHJlc3BvbnNpdmUtcGFnZSB7XG4gICAgQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogNzUwcHgpIHtcbiAgICAgICAgZGl2LnBhZ2UtY29udGFpbmVyIHtcbiAgICAgICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgICAgICAgICAubGVmdC1zaWRlIHtcbiAgICAgICAgICAgICAgICBmbGV4OiAwIDAgYXV0bztcbiAgICAgICAgICAgICAgICBoZWlnaHQ6IDEzLjI1cmVtO1xuICAgICAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICAgICAgICAgIG1heC13aWR0aDogbm9uZTtcbiAgICAgICAgICAgICAgICBtaW4td2lkdGg6IG5vbmU7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG4gICAgLnBhZ2UtY29udGFpbmVyIHtcbiAgICAgICAgaGVpZ2h0OiAxMDAlO1xuICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgZGlzcGxheTogZmxleDtcblxuICAgICAgICAubGVmdC1zaWRlIHtcbiAgICAgICAgICAgIGZsZXg6IDEgMSAwO1xuICAgICAgICAgICAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgICAgICAgICAgIG1heC13aWR0aDogMjcuNSU7XG4gICAgICAgICAgICBtaW4td2lkdGg6IDE3LjVyZW07XG4gICAgICAgIH1cbiAgICAgICAgLnJpZ2h0LXNpZGUge1xuICAgICAgICAgICAgZmxleDogMSAxIDA7XG4gICAgICAgICAgICBvdmVyZmxvdzogYXV0bztcbiAgICAgICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICAgICAgfVxuICAgIH1cblxufVxuXG5AbWl4aW4gbGlnaHQtc21hbGwtYnV0dG9uIHtcbiAgICBAaW5jbHVkZSBsaWdodC10aGVtZTtcbiAgICBAaW5jbHVkZSBidXR0b24tc207XG59XG5cbkBtaXhpbiBkYXJrLWJ1dHRvbiB7XG4gICAgQGluY2x1ZGUgZGFyay10aGVtZTtcbiAgICBAaW5jbHVkZSBidXR0b24tbWQ7XG59XG5cbkBtaXhpbiBidXR0b24tc20ge1xuICAgIHdpZHRoOiA2cmVtO1xuICAgIHBhZGRpbmc6IDAuMjVyZW0gMC41cmVtO1xuICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgb3V0bGluZTogbm9uZTtcbiAgICB3aGl0ZS1zcGFjZTogbm93cmFwO1xuICAgIHVzZXItc2VsZWN0OiBub25lO1xufVxuXG5AbWl4aW4gYnV0dG9uLW1kIHtcbiAgICB3aWR0aDogOHJlbTtcbiAgICBwYWRkaW5nOiAwLjVyZW07XG4gICAgY3Vyc29yOiBwb2ludGVyO1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICBvdXRsaW5lOiBub25lO1xuICAgIHdoaXRlLXNwYWNlOiBub3dyYXA7XG4gICAgdXNlci1zZWxlY3Q6IG5vbmU7XG59XG5cbkBtaXhpbiBsaWdodC10aGVtZSB7XG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6ICRlZ2dzaGVsbC1kYXJrO1xuICAgICY6aG92ZXIge1xuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkbGF1cmVsLWdyZWVuO1xuICAgIH1cbiAgICAmLmFjdGl2ZSB7XG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6ICRvbGl2ZS1ncmVlbjtcbiAgICAgICAgY29sb3I6ICRsaWdodGVzdC1ncmVlbjtcbiAgICB9XG59XG5cbkBtaXhpbiBkYXJrLXRoZW1lIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkYmxhY2stb2xpdmU7XG4gICAgY29sb3I6ICRsaWdodGVzdC1ncmVlbjtcbiAgICAmOmhvdmVyIHtcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogJGFybXktZ3JlZW47XG4gICAgICAgIGNvbG9yOiAkbGlnaHRlc3QtZ3JlZW47XG4gICAgfVxuICAgICYuYWN0aXZlIHtcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogJG9saXZlLWdyZWVuO1xuICAgICAgICBjb2xvcjogJGxpZ2h0ZXN0LWdyZWVuO1xuICAgIH1cbn1cblxuQG1peGluIHRvcC1uYXYtcGFnZSB7XG4gICAgaGVpZ2h0OiAxMDAlO1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICAubWFpbi1jb250ZW50IHtcbiAgICAgICAgZmxleDogMSAxIDA7XG4gICAgICAgIG92ZXJmbG93OiBhdXRvO1xuICAgIH1cbn1cblxuQG1peGluIHJlc3BvbmQtdG8oJG1lZGlhKSB7XG4gIEBpZiAkbWVkaWEgPT0gc21hbGwge1xuICAgIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogJGJyZWFrLXNtYWxsKSB7IEBjb250ZW50OyB9XG4gIH1cbiAgQGVsc2UgaWYgJG1lZGlhID09IG1lZGl1bSB7XG4gICAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWluLXdpZHRoOiAkYnJlYWstc21hbGwgKyAxKSBhbmQgKG1heC13aWR0aDogJGJyZWFrLWxhcmdlIC0gMSkgeyBAY29udGVudDsgfVxuICB9XG4gIEBlbHNlIGlmICRtZWRpYSA9PSB3aWRlIHtcbiAgICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChtaW4td2lkdGg6ICRicmVhay1sYXJnZSkgeyBAY29udGVudDsgfVxuICB9XG59XG4iLCI6aG9zdCB7XG4gIGhlaWdodDogMTAwJTtcbiAgd2lkdGg6IDEwMCU7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG59XG46aG9zdCAubWFpbi1jb250ZW50IHtcbiAgZmxleDogMSAxIDA7XG4gIG92ZXJmbG93OiBhdXRvO1xufVxuOmhvc3QgLm1haW4tY29udGVudCB7XG4gIGNvbG9yOiAjMjAyMTI0O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xufVxuOmhvc3QgLnRvcC1uYXYge1xuICBkaXNwbGF5OiBmbGV4O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjM0Y0MDM4O1xuICBjb2xvcjogI0ZDRkNGOTtcbn1cbjpob3N0IC50b3AtbmF2IC5wYWdlLXRpdGxlLWNvbnRhaW5lciB7XG4gIGZsZXg6IDAgMCBhdXRvO1xuICBwYWRkaW5nOiAwLjVyZW0gMS4yNXJlbTtcbiAgZm9udC1zaXplOiAxLjI1cmVtO1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xufVxuOmhvc3QgLnRvcC1uYXYgLnJpZ2h0LXNlY3Rpb24ge1xuICBmbGV4OiAxIDEgMDtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAganVzdGlmeS1jb250ZW50OiBmbGV4LWVuZDtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbn1cbjpob3N0IC50b3AtbmF2IC5yaWdodC1zZWN0aW9uIC5uYXYtaXRlbXMtY29udGFpbmVyIHtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBmbGV4LWVuZDtcbiAgbWFyZ2luOiAwIDNyZW07XG59XG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDU1MHB4KSB7XG4gIDpob3N0IC50b3AtbmF2IC5yaWdodC1zZWN0aW9uIC5uYXYtaXRlbXMtY29udGFpbmVyIHtcbiAgICBtYXJnaW46IDAgMC4yNXJlbTtcbiAgfVxufVxuOmhvc3QgLnRvcC1uYXYgLnJpZ2h0LXNlY3Rpb24gLm5hdi1pdGVtcy1jb250YWluZXIgLm5hdi1pdGVtIHtcbiAgZmxleDogMCAxIGF1dG87XG4gIGJhY2tncm91bmQtY29sb3I6ICMzRjQwMzg7XG4gIGNvbG9yOiAjRkNGQ0Y5O1xuICB3aWR0aDogOHJlbTtcbiAgcGFkZGluZzogMC41cmVtO1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgb3V0bGluZTogbm9uZTtcbiAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcbiAgdXNlci1zZWxlY3Q6IG5vbmU7XG4gIG1hcmdpbjogMCAwLjI1cmVtO1xuICBib3JkZXItcmFkaXVzOiA0cHggNHB4IDAgMDtcbn1cbjpob3N0IC50b3AtbmF2IC5yaWdodC1zZWN0aW9uIC5uYXYtaXRlbXMtY29udGFpbmVyIC5uYXYtaXRlbTpob3ZlciB7XG4gIGJhY2tncm91bmQtY29sb3I6ICM0QjUzMjA7XG4gIGNvbG9yOiAjRkNGQ0Y5O1xufVxuOmhvc3QgLnRvcC1uYXYgLnJpZ2h0LXNlY3Rpb24gLm5hdi1pdGVtcy1jb250YWluZXIgLm5hdi1pdGVtLmFjdGl2ZSB7XG4gIGJhY2tncm91bmQtY29sb3I6ICM3MDgyMzg7XG4gIGNvbG9yOiAjRkNGQ0Y5O1xufSIsIlxuJGRhcmstZ3JlZW46ICMyOTJFMTI7XG4kYXJteS1ncmVlbjogIzRCNTMyMDtcbiRvbGl2ZS1ncmVlbjogIzcwODIzODtcbiRtb3NzLWdyZWVuOiAjOEE5QTVCO1xuJGxhdXJlbC1ncmVlbjogI0JBQzM5RjtcblxuLy8gbmljZSBmb3IgdGV4dCBhZ2FpbnN0IGRhcmsgYmFja2dyb3VuZFxuJGxpZ2h0LWdyZWVuOiAjRjRGN0VBO1xuJGxpZ2h0ZXN0LWdyZWVuOiAjRkNGQ0Y5O1xuXG4vLyBVc2VkIGZvciBmaWxlIHNlbGVjdG9yXG4kZWdnc2hlbGwtZGFya2VyOiAjREREOUNGO1xuJGVnZ3NoZWxsLWRhcms6ICNFQUU2REE7XG4kZWdnc2hlbGw6ICNFRkVCREY7XG4kZWdnc2hlbGwtbGlnaHQ6ICNGMkVFRTE7XG5cbi8vIGdyYXlzXG4kYmFzaWNhbGx5LWJsYWNrOiAjMjAyMTI0O1xuJGJsYWNrLW9saXZlOiAjM0Y0MDM4O1xuJGdyYW5pdGU6ICM2NTYzNUY7XG4kbGlnaHRlci1ncmF5OiAjOUQ5Qjk5O1xuJHdoaXRlOiAjZmZmO1xuXG4kZ29sZDogI0Q2QjkwMjtcbiRzdGFyLWJsdWU6ICMxRDYyQzQ7XG5cbiRicmVhay1zbWFsbDogNTUwcHg7XG4kYnJlYWstbWQ6IDgwMHB4O1xuJGJyZWFrLWxhcmdlOiAxMDI0cHg7XG4iXX0= */");

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
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _src_app_app_routing_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @src/app/app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _src_app_app_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @src/app/app.component */ "./src/app/app.component.ts");
/* harmony import */ var _src_app_barcelona_barcelona_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @src/app/barcelona/barcelona.module */ "./src/app/barcelona/barcelona.module.ts");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm5/animations.js");
/* harmony import */ var _src_app_about_me_about_me_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @src/app/about-me/about-me.module */ "./src/app/about-me/about-me.module.ts");
/* harmony import */ var _src_app_portfolio_portfolio_module__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @src/app/portfolio/portfolio.module */ "./src/app/portfolio/portfolio.module.ts");
/* harmony import */ var _src_app_corona_corona_module__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @src/app/corona/corona.module */ "./src/app/corona/corona.module.ts");
/* harmony import */ var fuzz_demo_app__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! fuzz-demo-app */ "./node_modules/fuzz-demo-app/dist/esm2015/fuzz-demo-app.js");












var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            imports: [
                _src_app_about_me_about_me_module__WEBPACK_IMPORTED_MODULE_8__["AboutMeModule"],
                _src_app_portfolio_portfolio_module__WEBPACK_IMPORTED_MODULE_9__["PortfolioModule"],
                _src_app_corona_corona_module__WEBPACK_IMPORTED_MODULE_10__["CoronaModule"],
                fuzz_demo_app__WEBPACK_IMPORTED_MODULE_11__["AppModule"],
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
                _src_app_app_routing_module__WEBPACK_IMPORTED_MODULE_4__["AppRoutingModule"],
                _src_app_barcelona_barcelona_module__WEBPACK_IMPORTED_MODULE_6__["BarcelonaModule"],
                _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_7__["NoopAnimationsModule"],
            ],
            declarations: [
                _src_app_app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"],
            ],
            providers: [
                _angular_common__WEBPACK_IMPORTED_MODULE_3__["Location"],
                { provide: _angular_common__WEBPACK_IMPORTED_MODULE_3__["LocationStrategy"], useClass: _angular_common__WEBPACK_IMPORTED_MODULE_3__["HashLocationStrategy"] },
            ],
            bootstrap: [_src_app_app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/barcelona/barcelona.common.ts":
/*!***********************************************!*\
  !*** ./src/app/barcelona/barcelona.common.ts ***!
  \***********************************************/
/*! exports provided: componentDeclarations, providerDeclarations, routes */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "componentDeclarations", function() { return componentDeclarations; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "providerDeclarations", function() { return providerDeclarations; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "routes", function() { return routes; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _src_app_barcelona_players_players_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @src/app/barcelona/players/players.component */ "./src/app/barcelona/players/players.component.ts");
/* harmony import */ var _src_app_barcelona_player_detail_player_detail_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @src/app/barcelona/player-detail/player-detail.component */ "./src/app/barcelona/player-detail/player-detail.component.ts");
/* harmony import */ var _src_app_barcelona_player_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @src/app/barcelona/player.service */ "./src/app/barcelona/player.service.ts");




var componentDeclarations = [
    _src_app_barcelona_players_players_component__WEBPACK_IMPORTED_MODULE_1__["PlayersComponent"],
    _src_app_barcelona_player_detail_player_detail_component__WEBPACK_IMPORTED_MODULE_2__["PlayerDetailComponent"]
];
var providerDeclarations = [
    _src_app_barcelona_player_service__WEBPACK_IMPORTED_MODULE_3__["PlayerService"]
];
var routes = [
    { path: 'players', component: _src_app_barcelona_players_players_component__WEBPACK_IMPORTED_MODULE_1__["PlayersComponent"] },
    { path: 'player/:id', component: _src_app_barcelona_player_detail_player_detail_component__WEBPACK_IMPORTED_MODULE_2__["PlayerDetailComponent"] },
];


/***/ }),

/***/ "./src/app/barcelona/barcelona.module.ts":
/*!***********************************************!*\
  !*** ./src/app/barcelona/barcelona.module.ts ***!
  \***********************************************/
/*! exports provided: BarcelonaModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BarcelonaModule", function() { return BarcelonaModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _src_app_barcelona_barcelona_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @src/app/barcelona/barcelona.common */ "./src/app/barcelona/barcelona.common.ts");





var BarcelonaModule = /** @class */ (function () {
    function BarcelonaModule() {
    }
    BarcelonaModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forRoot(_src_app_barcelona_barcelona_common__WEBPACK_IMPORTED_MODULE_4__["routes"])
            ],
            exports: [
                _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"]
            ],
            declarations: tslib__WEBPACK_IMPORTED_MODULE_0__["__spread"](_src_app_barcelona_barcelona_common__WEBPACK_IMPORTED_MODULE_4__["componentDeclarations"]),
            providers: tslib__WEBPACK_IMPORTED_MODULE_0__["__spread"](_src_app_barcelona_barcelona_common__WEBPACK_IMPORTED_MODULE_4__["providerDeclarations"])
        })
    ], BarcelonaModule);
    return BarcelonaModule;
}());



/***/ }),

/***/ "./src/app/barcelona/player-detail/player-detail.component.ts":
/*!********************************************************************!*\
  !*** ./src/app/barcelona/player-detail/player-detail.component.ts ***!
  \********************************************************************/
/*! exports provided: PlayerDetailComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PlayerDetailComponent", function() { return PlayerDetailComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _src_app_barcelona_player_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @src/app/barcelona/player.service */ "./src/app/barcelona/player.service.ts");




var PlayerDetailComponent = /** @class */ (function () {
    function PlayerDetailComponent(playerService, route) {
        this.playerService = playerService;
        this.route = route;
    }
    PlayerDetailComponent.prototype.ngOnInit = function () {
        var id = +this.route.snapshot.params['id'];
        this.player = this.playerService.getPlayer(id);
    };
    PlayerDetailComponent.ctorParameters = function () { return [
        { type: _src_app_barcelona_player_service__WEBPACK_IMPORTED_MODULE_3__["PlayerService"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] }
    ]; };
    PlayerDetailComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-details',
            template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./player-detail.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/barcelona/player-detail/player-detail.component.html")).default,
        })
    ], PlayerDetailComponent);
    return PlayerDetailComponent;
}());



/***/ }),

/***/ "./src/app/barcelona/player.service.ts":
/*!*********************************************!*\
  !*** ./src/app/barcelona/player.service.ts ***!
  \*********************************************/
/*! exports provided: PlayerService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PlayerService", function() { return PlayerService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var PlayerService = /** @class */ (function () {
    function PlayerService() {
        this.players = new Array({ id: 1, name: 'Ter Stegen', role: 'Goalkeeper' }, { id: 3, name: 'Piqué', role: 'Defender' }, { id: 4, name: 'I. Rakitic', role: 'Midfielder' }, { id: 5, name: 'Sergio', role: 'Midfielder' }, { id: 6, name: 'Denis Suárez', role: 'Midfielder' }, { id: 7, name: 'Arda', role: 'Midfielder' }, { id: 8, name: 'A. Iniesta', role: 'Midfielder' }, { id: 9, name: 'Suárez', role: 'Forward' }, { id: 10, name: 'Messi', role: 'Forward' }, { id: 11, name: 'Coutinho', role: 'Midfielder' }, { id: 12, name: 'Rafinha', role: 'Midfielder' }, { id: 13, name: 'Cillessen', role: 'Goalkeeper' }, { id: 14, name: 'Mascherano', role: 'Defender' }, { id: 17, name: 'Paco Alcácer', role: 'Forward' }, { id: 18, name: 'Jordi Alba', role: 'Defender' }, { id: 19, name: 'Digne', role: 'Defender' }, { id: 20, name: 'Sergi Roberto', role: 'Midfielder' }, { id: 21, name: 'André Gomes', role: 'Midfielder' }, { id: 22, name: 'Aleix Vidal', role: 'Midfielder' }, { id: 23, name: 'Umtiti', role: 'Defender' }, { id: 24, name: 'Mathieu', role: 'Defender' }, { id: 25, name: 'Masip', role: 'Goalkeeper' });
    }
    PlayerService.prototype.getPlayers = function () {
        return this.players;
    };
    PlayerService.prototype.getPlayer = function (id) {
        return this.players.filter(function (player) { return player.id === id; })[0];
    };
    PlayerService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])()
    ], PlayerService);
    return PlayerService;
}());



/***/ }),

/***/ "./src/app/barcelona/players/players.component.ts":
/*!********************************************************!*\
  !*** ./src/app/barcelona/players/players.component.ts ***!
  \********************************************************/
/*! exports provided: PlayersComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PlayersComponent", function() { return PlayersComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _src_app_barcelona_player_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @src/app/barcelona/player.service */ "./src/app/barcelona/player.service.ts");



var PlayersComponent = /** @class */ (function () {
    function PlayersComponent(playerService) {
        this.playerService = playerService;
    }
    PlayersComponent.prototype.ngOnInit = function () {
        this.players = this.playerService.getPlayers();
    };
    PlayersComponent.ctorParameters = function () { return [
        { type: _src_app_barcelona_player_service__WEBPACK_IMPORTED_MODULE_2__["PlayerService"] }
    ]; };
    PlayersComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-players',
            template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./players.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/barcelona/players/players.component.html")).default,
        })
    ], PlayersComponent);
    return PlayersComponent;
}());



/***/ }),

/***/ "./src/app/common/charts/bar-chart/bar-chart.component.scss":
/*!******************************************************************!*\
  !*** ./src/app/common/charts/bar-chart/bar-chart.component.scss ***!
  \******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (":host {\n  width: 100%;\n  height: 100%;\n  display: block;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9hZG1pbi9wcm9qZWN0cy9kYXd1LWhvbWUvc3JjL2FwcC9jb21tb24vY2hhcnRzL2Jhci1jaGFydC9iYXItY2hhcnQuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL2NvbW1vbi9jaGFydHMvYmFyLWNoYXJ0L2Jhci1jaGFydC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLFdBQUE7RUFDQSxZQUFBO0VBQ0EsY0FBQTtBQ0NKIiwiZmlsZSI6InNyYy9hcHAvY29tbW9uL2NoYXJ0cy9iYXItY2hhcnQvYmFyLWNoYXJ0LmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiOmhvc3Qge1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGhlaWdodDogMTAwJTtcbiAgICBkaXNwbGF5OiBibG9jaztcbn0iLCI6aG9zdCB7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDEwMCU7XG4gIGRpc3BsYXk6IGJsb2NrO1xufSJdfQ== */");

/***/ }),

/***/ "./src/app/common/charts/bar-chart/bar-chart.component.ts":
/*!****************************************************************!*\
  !*** ./src/app/common/charts/bar-chart/bar-chart.component.ts ***!
  \****************************************************************/
/*! exports provided: BarChartComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BarChartComponent", function() { return BarChartComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var d3__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! d3 */ "./node_modules/d3/index.js");
/* harmony import */ var _base_chart_base_chart_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../base-chart/base-chart.component */ "./src/app/common/charts/base-chart/base-chart.component.ts");




var BarChartComponent = /** @class */ (function (_super) {
    tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"](BarChartComponent, _super);
    function BarChartComponent(hostEl) {
        var _this = _super.call(this, hostEl) || this;
        _this.hostEl = hostEl;
        _this.disabledKeys = new Set();
        _this.hoverIndexChange = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        _this.barPadding = 0.05;
        // some extra margin on the chart itself
        _this.chartMargin = 5;
        return _this;
    }
    BarChartComponent.prototype.ngOnChanges = function (changes) {
        if (changes.tableData && changes.tableData.firstChange && this.tableData) {
            this.initializeSvg();
        }
        if (changes.tableData || changes.disabledKeys) {
            if (this.tableData) {
                this.render();
            }
        }
        if (changes.hoverIndex) {
            this.positionHoverBox();
        }
    };
    BarChartComponent.prototype.ngAfterViewInit = function () {
        _super.prototype.ngAfterViewInit.call(this);
    };
    BarChartComponent.prototype.ngOnDestroy = function () {
        _super.prototype.ngOnDestroy.call(this);
    };
    BarChartComponent.prototype.initializeSvg = function () {
        _super.prototype.initializeSvg.call(this);
        this.hoverBox = this.rootG.append('rect')
            .attr('class', 'hover-box')
            .style('fill', '#8A9A5B')
            .style('fill-opacity', '0.25')
            .style('stroke', '#8A9A5B')
            .style('stroke-opacity', '1')
            .style('stroke-width', '1');
    };
    BarChartComponent.prototype.onXYHover = function (x, y) {
        var numberOfXDataPoints = this.tableData && this.tableData.length;
        if (!numberOfXDataPoints) {
            return;
        }
        var distanceBetweenBars = this.xScale.step();
        var paddingWidth = this.barPadding * distanceBetweenBars;
        var startingPx = this.xScale(this.tableData[0].timestamp);
        var xOnChart = x - this.margins.left - startingPx - (paddingWidth / 2);
        var rawIndex = Math.floor(xOnChart / distanceBetweenBars);
        var hoverIndex = Math.min(Math.max(rawIndex, 0), numberOfXDataPoints - 1);
        if (hoverIndex !== this.hoverIndex) {
            this.hoverIndex = hoverIndex;
            this.hoverIndexChange.emit(hoverIndex);
        }
    };
    BarChartComponent.prototype.positionHoverBox = function () {
        var hoverBoxTimestamp = this.tableData[this.hoverIndex].timestamp;
        this.hoverBox
            .attr('x', this.xScale(hoverBoxTimestamp))
            .attr('y', this.yScale(this.maxY))
            .attr('width', this.xScale.bandwidth)
            .attr('height', this.yScale(0) - this.yScale(this.maxY));
    };
    BarChartComponent.prototype.renderFor = function (width, height) {
        var _this = this;
        var filteredKeys = this.keys.filter(function (key) {
            return !(_this.disabledKeys && _this.disabledKeys.has(key));
        });
        var reversedKeys = filteredKeys.reverse();
        var stack = d3__WEBPACK_IMPORTED_MODULE_2__["stack"]().keys(reversedKeys);
        var dataset = stack(this.tableData);
        var domain = dataset.length ? dataset[0].map(function (d) { return d.data.timestamp; }) : [];
        this.xScale = d3__WEBPACK_IMPORTED_MODULE_2__["scaleBand"]()
            .domain(domain)
            .range([this.chartMargin, width - this.chartMargin])
            .paddingOuter(0)
            .paddingInner(this.barPadding);
        this.maxY = dataset.reduce(function (currentMax, series) {
            var seriesMax = series.reduce(function (currentSeriesMax, stack) {
                return Math.max.apply(Math, tslib__WEBPACK_IMPORTED_MODULE_0__["__spread"]([currentSeriesMax], stack));
            }, 0);
            return Math.max(currentMax, seriesMax);
        }, 0);
        this.yScale = d3__WEBPACK_IMPORTED_MODULE_2__["scaleLinear"]()
            .domain([0, this.maxY])
            .range([height, 0]);
        var numberOfXDataPoints = dataset.length ? dataset[0].length : 0;
        var xAxis = _super.prototype.getXBandAxis.call(this, this.xScale, width, numberOfXDataPoints);
        _super.prototype.applyXAxis.call(this, this.xAxisG, xAxis, height);
        var yAxis = _super.prototype.getLinearYAxis.call(this, this.yScale, width);
        _super.prototype.applyYAxis.call(this, this.yAxisG, yAxis);
        // Create groups for each series, rects for each segment
        var groups = this.seriesG.selectAll('g.series')
            .data(dataset);
        groups.enter()
            .append('g')
            .attr('class', function (d) { return "series " + d.key; })
            .merge(groups)
            .style('fill', function (d) { return _this.colorsByKey[d.key]; });
        groups.exit().remove();
        // reusing "groups" selection doesn't work, not sure why
        // explicitly selectAll again before rebinding works
        var rects = this.seriesG.selectAll('g.series').selectAll('rect')
            .data(function (series) {
            series.forEach(function (points) {
                points.seriesKey = series.key;
            });
            return series;
        });
        rects.enter()
            .append('rect')
            .merge(rects)
            .attr('x', function (d) { return _this.xScale(d.data.timestamp); })
            .attr('y', function (d) { return _this.yScale(d[1]); })
            .attr('height', function (d) { return _this.yScale(d[0]) - _this.yScale(d[1]); })
            .attr('width', this.xScale.bandwidth());
        rects.exit().remove();
        this.positionHoverBox();
    };
    BarChartComponent.ctorParameters = function () { return [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"] }
    ]; };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
    ], BarChartComponent.prototype, "tableData", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
    ], BarChartComponent.prototype, "keys", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
    ], BarChartComponent.prototype, "colorsByKey", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
    ], BarChartComponent.prototype, "disabledKeys", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
    ], BarChartComponent.prototype, "hoverIndex", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])()
    ], BarChartComponent.prototype, "hoverIndexChange", void 0);
    BarChartComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'dwu-bar-chart',
            template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./bar-chart.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/common/charts/bar-chart/bar-chart.component.html")).default,
            styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./bar-chart.component.scss */ "./src/app/common/charts/bar-chart/bar-chart.component.scss")).default]
        })
    ], BarChartComponent);
    return BarChartComponent;
}(_base_chart_base_chart_component__WEBPACK_IMPORTED_MODULE_3__["BaseChartComponent"]));



/***/ }),

/***/ "./src/app/common/charts/base-chart/base-chart.component.ts":
/*!******************************************************************!*\
  !*** ./src/app/common/charts/base-chart/base-chart.component.ts ***!
  \******************************************************************/
/*! exports provided: BaseChartComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BaseChartComponent", function() { return BaseChartComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var d3__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! d3 */ "./node_modules/d3/index.js");
/* harmony import */ var css_element_queries_src_ResizeSensor__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! css-element-queries/src/ResizeSensor */ "./node_modules/css-element-queries/src/ResizeSensor.js");
/* harmony import */ var css_element_queries_src_ResizeSensor__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(css_element_queries_src_ResizeSensor__WEBPACK_IMPORTED_MODULE_2__);



var BaseChartComponent = /** @class */ (function () {
    function BaseChartComponent(hostEl) {
        this.hostEl = hostEl;
        this.margins = {
            top: 5,
            right: 30,
            bottom: 20,
            left: 55,
        };
    }
    BaseChartComponent.prototype.ngAfterViewInit = function () {
        var _this = this;
        this.sensor = new css_element_queries_src_ResizeSensor__WEBPACK_IMPORTED_MODULE_2___default.a(this.hostEl.nativeElement, function () {
            _this.render();
        });
    };
    BaseChartComponent.prototype.ngOnDestroy = function () {
        this.sensor.detach();
    };
    BaseChartComponent.prototype.initializeSvg = function () {
        var _this = this;
        this.svg = d3__WEBPACK_IMPORTED_MODULE_1__["select"](this.hostEl.nativeElement).append('svg')
            .on('mousemove', function () { return _this.onMouseMove(); })
            .on('touchstart', function () { return _this.touchmove(); })
            .on('touchmove', function () { return _this.touchmove(); });
        this.rootG = this.svg.append('g');
        this.yAxisG = this.rootG.append('g')
            .attr('class', 'y axis');
        this.xAxisG = this.rootG.append('g')
            .attr('class', 'x axis');
        this.seriesG = this.rootG.append('g');
    };
    BaseChartComponent.prototype.touchmove = function () {
        // prevents following mouse event
        d3__WEBPACK_IMPORTED_MODULE_1__["event"].stopPropagation();
        var touch = d3__WEBPACK_IMPORTED_MODULE_1__["touches"](this.svg.node());
        var _a = tslib__WEBPACK_IMPORTED_MODULE_0__["__read"](touch[0], 2), x = _a[0], y = _a[1];
        this.onXYHover(x, y);
    };
    BaseChartComponent.prototype.onMouseMove = function () {
        var _a = tslib__WEBPACK_IMPORTED_MODULE_0__["__read"](d3__WEBPACK_IMPORTED_MODULE_1__["mouse"](this.svg.node()), 2), x = _a[0], y = _a[1];
        this.onXYHover(x, y);
    };
    BaseChartComponent.prototype.onXYHover = function (x, y) {
    };
    BaseChartComponent.prototype.renderFor = function (width, height) {
        throw ('must implement renderFor');
    };
    BaseChartComponent.prototype.getChartDim = function () {
        var elDim = this.getElDim();
        return {
            width: elDim.width - this.margins.left - this.margins.right,
            height: elDim.height - this.margins.top - this.margins.bottom,
        };
    };
    BaseChartComponent.prototype.render = function () {
        var _a = this.getChartDim(), width = _a.width, height = _a.height;
        // const elDim = this.getElDim();
        // const width = elDim.width - this.margins.left - this.margins.right;
        // const height = elDim.height - this.margins.top - this.margins.bottom;
        this.svg
            .attr('width', width + this.margins.left + this.margins.right)
            .attr('height', height + this.margins.top + this.margins.bottom);
        this.rootG
            .attr('transform', 'translate(' + this.margins.left + ',' + this.margins.top + ')');
        this.renderFor(width, height);
    };
    BaseChartComponent.prototype.getLinearYAxis = function (yScale, width) {
        return d3__WEBPACK_IMPORTED_MODULE_1__["axisLeft"]()
            .scale(yScale)
            .ticks(6)
            .tickSize(-width, 0, 0)
            .tickFormat(function (d) { return d.toLocaleString(); });
    };
    BaseChartComponent.prototype.applyYAxis = function (yAxisG, yAxis) {
        return yAxisG.call(yAxis)
            .call(function (g) { return g.select('.domain')
            .remove(); })
            .call(function (g) { return g.selectAll('.tick:not(:first-of-type) line')
            .attr('stroke-opacity', 0.5)
            .attr('stroke-dasharray', '2,2'); });
    };
    BaseChartComponent.prototype.getXAxisTicks = function (xScale, width, numberOfXDataPoints, allXValues) {
        var filteredXDomainValues = this.getFilteredTickValues(allXValues, width, numberOfXDataPoints);
        return d3__WEBPACK_IMPORTED_MODULE_1__["axisBottom"]()
            .scale(xScale)
            .tickSizeOuter(0)
            .tickValues(filteredXDomainValues)
            .tickFormat(d3__WEBPACK_IMPORTED_MODULE_1__["timeFormat"]('%-m/%e'));
    };
    BaseChartComponent.prototype.getXBandAxis = function (xScale, width, numberOfXDataPoints) {
        var ticks = xScale.domain();
        var filteredXDomainValues = this.getFilteredTickValues(ticks, width, numberOfXDataPoints);
        return d3__WEBPACK_IMPORTED_MODULE_1__["axisBottom"]()
            .scale(xScale)
            .tickSizeOuter(0)
            .tickValues(filteredXDomainValues)
            .tickFormat(d3__WEBPACK_IMPORTED_MODULE_1__["timeFormat"]('%-m/%-d'));
    };
    BaseChartComponent.prototype.applyXAxis = function (xAxisG, xAxis, height) {
        return xAxisG
            .attr('transform', 'translate(0,' + height + ')')
            .call(xAxis);
    };
    BaseChartComponent.prototype.getFilteredTickValues = function (ticks, width, numberOfXDataPoints) {
        var xDomainInterval = this.getXDomainInterval(width, numberOfXDataPoints);
        var remainder = numberOfXDataPoints % xDomainInterval;
        return ticks.filter(function (d, i) {
            // (i + 1 - remainder) makes sure the most recent datapoint's tick is always visible
            return !((i + 1 - remainder) % xDomainInterval);
        });
    };
    BaseChartComponent.prototype.getXDomainInterval = function (width, numberOfXDataPoints) {
        var maxXpoints = this.getMaxXPoints(width);
        var xPoints = numberOfXDataPoints;
        var interval = 1;
        while (xPoints > maxXpoints) {
            interval++;
            xPoints = numberOfXDataPoints / interval;
        }
        return interval;
    };
    BaseChartComponent.prototype.getMaxXPoints = function (width) {
        return Math.floor(width / 30);
    };
    BaseChartComponent.prototype.getElDim = function () {
        return {
            width: this.hostEl.nativeElement.clientWidth,
            height: this.hostEl.nativeElement.clientHeight,
        };
    };
    return BaseChartComponent;
}());



/***/ }),

/***/ "./src/app/common/charts/chart-legend/chart-legend.component.scss":
/*!************************************************************************!*\
  !*** ./src/app/common/charts/chart-legend/chart-legend.component.scss ***!
  \************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (":host {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  -webkit-user-select: none;\n     -moz-user-select: none;\n      -ms-user-select: none;\n          user-select: none;\n  flex-wrap: wrap;\n}\n:host .key-set {\n  margin: 0 0.5rem 0.5rem 0.5rem;\n  display: flex;\n  align-items: center;\n  cursor: pointer;\n  background-color: #EFEBDF;\n  padding: 0.25rem 0.5rem;\n  border-radius: 5px;\n  transition-duration: 25ms;\n  box-shadow: 1px 1px 2px 0 #9D9B99;\n  transform: translateY(0);\n}\n:host .key-set:active {\n  transform: translateY(1px);\n  box-shadow: none;\n}\n:host .key-set:hover .key-color {\n  transform: scale(1.2);\n}\n:host .key-set .key-color {\n  border: 1px solid;\n  width: 0.75rem;\n  height: 0.75rem;\n  border-radius: 2px;\n  transition: transform 25ms, background-color 25ms;\n  transform: scale(1);\n}\n:host .key-set .key-label {\n  margin-left: 0.25rem;\n  font-size: 14px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9hZG1pbi9wcm9qZWN0cy9kYXd1LWhvbWUvc3JjL2FwcC9jb21tb24vY2hhcnRzL2NoYXJ0LWxlZ2VuZC9jaGFydC1sZWdlbmQuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL2NvbW1vbi9jaGFydHMvY2hhcnQtbGVnZW5kL2NoYXJ0LWxlZ2VuZC5jb21wb25lbnQuc2NzcyIsIi9Vc2Vycy9hZG1pbi9wcm9qZWN0cy9kYXd1LWhvbWUvc3JjL3N0eWxlcy92YXJpYWJsZXMuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFFQTtFQUNJLGFBQUE7RUFDQSxtQkFBQTtFQUNBLHVCQUFBO0VBQ0EseUJBQUE7S0FBQSxzQkFBQTtNQUFBLHFCQUFBO1VBQUEsaUJBQUE7RUFDQSxlQUFBO0FDREo7QURFSTtFQUNJLDhCQUFBO0VBQ0EsYUFBQTtFQUNBLG1CQUFBO0VBQ0EsZUFBQTtFQUNBLHlCRUNHO0VGQUgsdUJBQUE7RUFDQSxrQkFBQTtFQUNBLHlCQUFBO0VBQ0EsaUNBQUE7RUFDQSx3QkFBQTtBQ0FSO0FEQ1E7RUFDSSwwQkFBQTtFQUNBLGdCQUFBO0FDQ1o7QURFWTtFQUNJLHFCQUFBO0FDQWhCO0FESVE7RUFDSSxpQkFBQTtFQUNBLGNBQUE7RUFDQSxlQUFBO0VBQ0Esa0JBQUE7RUFDQSxpREFBQTtFQUNBLG1CQUFBO0FDRlo7QURJUTtFQUNJLG9CQUFBO0VBQ0EsZUFBQTtBQ0ZaIiwiZmlsZSI6InNyYy9hcHAvY29tbW9uL2NoYXJ0cy9jaGFydC1sZWdlbmQvY2hhcnQtbGVnZW5kLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiQGltcG9ydCAnbWl4aW5zJztcblxuOmhvc3Qge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICB1c2VyLXNlbGVjdDogbm9uZTtcbiAgICBmbGV4LXdyYXA6IHdyYXA7XG4gICAgLmtleS1zZXQge1xuICAgICAgICBtYXJnaW46IDAgMC41cmVtIDAuNXJlbSAwLjVyZW07XG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogJGVnZ3NoZWxsO1xuICAgICAgICBwYWRkaW5nOiAwLjI1cmVtIDAuNXJlbTtcbiAgICAgICAgYm9yZGVyLXJhZGl1czogNXB4O1xuICAgICAgICB0cmFuc2l0aW9uLWR1cmF0aW9uOiAyNW1zO1xuICAgICAgICBib3gtc2hhZG93OiAxcHggMXB4IDJweCAwICRsaWdodGVyLWdyYXk7XG4gICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgwKTtcbiAgICAgICAgJjphY3RpdmUge1xuICAgICAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDFweCk7XG4gICAgICAgICAgICBib3gtc2hhZG93OiBub25lO1xuICAgICAgICB9XG4gICAgICAgICY6aG92ZXIge1xuICAgICAgICAgICAgLmtleS1jb2xvciB7XG4gICAgICAgICAgICAgICAgdHJhbnNmb3JtOiBzY2FsZSgxLjIpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgLmtleS1jb2xvciB7XG4gICAgICAgICAgICBib3JkZXI6IDFweCBzb2xpZDtcbiAgICAgICAgICAgIHdpZHRoOiAwLjc1cmVtO1xuICAgICAgICAgICAgaGVpZ2h0OiAwLjc1cmVtO1xuICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogMnB4O1xuICAgICAgICAgICAgdHJhbnNpdGlvbjogdHJhbnNmb3JtIDI1bXMsIGJhY2tncm91bmQtY29sb3IgMjVtcztcbiAgICAgICAgICAgIHRyYW5zZm9ybTogc2NhbGUoMSk7XG4gICAgICAgIH1cbiAgICAgICAgLmtleS1sYWJlbCB7XG4gICAgICAgICAgICBtYXJnaW4tbGVmdDogMC4yNXJlbTtcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMTRweDtcbiAgICAgICAgfVxuICAgIH1cbn0iLCI6aG9zdCB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICB1c2VyLXNlbGVjdDogbm9uZTtcbiAgZmxleC13cmFwOiB3cmFwO1xufVxuOmhvc3QgLmtleS1zZXQge1xuICBtYXJnaW46IDAgMC41cmVtIDAuNXJlbSAwLjVyZW07XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgYmFja2dyb3VuZC1jb2xvcjogI0VGRUJERjtcbiAgcGFkZGluZzogMC4yNXJlbSAwLjVyZW07XG4gIGJvcmRlci1yYWRpdXM6IDVweDtcbiAgdHJhbnNpdGlvbi1kdXJhdGlvbjogMjVtcztcbiAgYm94LXNoYWRvdzogMXB4IDFweCAycHggMCAjOUQ5Qjk5O1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMCk7XG59XG46aG9zdCAua2V5LXNldDphY3RpdmUge1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMXB4KTtcbiAgYm94LXNoYWRvdzogbm9uZTtcbn1cbjpob3N0IC5rZXktc2V0OmhvdmVyIC5rZXktY29sb3Ige1xuICB0cmFuc2Zvcm06IHNjYWxlKDEuMik7XG59XG46aG9zdCAua2V5LXNldCAua2V5LWNvbG9yIHtcbiAgYm9yZGVyOiAxcHggc29saWQ7XG4gIHdpZHRoOiAwLjc1cmVtO1xuICBoZWlnaHQ6IDAuNzVyZW07XG4gIGJvcmRlci1yYWRpdXM6IDJweDtcbiAgdHJhbnNpdGlvbjogdHJhbnNmb3JtIDI1bXMsIGJhY2tncm91bmQtY29sb3IgMjVtcztcbiAgdHJhbnNmb3JtOiBzY2FsZSgxKTtcbn1cbjpob3N0IC5rZXktc2V0IC5rZXktbGFiZWwge1xuICBtYXJnaW4tbGVmdDogMC4yNXJlbTtcbiAgZm9udC1zaXplOiAxNHB4O1xufSIsIlxuJGRhcmstZ3JlZW46ICMyOTJFMTI7XG4kYXJteS1ncmVlbjogIzRCNTMyMDtcbiRvbGl2ZS1ncmVlbjogIzcwODIzODtcbiRtb3NzLWdyZWVuOiAjOEE5QTVCO1xuJGxhdXJlbC1ncmVlbjogI0JBQzM5RjtcblxuLy8gbmljZSBmb3IgdGV4dCBhZ2FpbnN0IGRhcmsgYmFja2dyb3VuZFxuJGxpZ2h0LWdyZWVuOiAjRjRGN0VBO1xuJGxpZ2h0ZXN0LWdyZWVuOiAjRkNGQ0Y5O1xuXG4vLyBVc2VkIGZvciBmaWxlIHNlbGVjdG9yXG4kZWdnc2hlbGwtZGFya2VyOiAjREREOUNGO1xuJGVnZ3NoZWxsLWRhcms6ICNFQUU2REE7XG4kZWdnc2hlbGw6ICNFRkVCREY7XG4kZWdnc2hlbGwtbGlnaHQ6ICNGMkVFRTE7XG5cbi8vIGdyYXlzXG4kYmFzaWNhbGx5LWJsYWNrOiAjMjAyMTI0O1xuJGJsYWNrLW9saXZlOiAjM0Y0MDM4O1xuJGdyYW5pdGU6ICM2NTYzNUY7XG4kbGlnaHRlci1ncmF5OiAjOUQ5Qjk5O1xuJHdoaXRlOiAjZmZmO1xuXG4kZ29sZDogI0Q2QjkwMjtcbiRzdGFyLWJsdWU6ICMxRDYyQzQ7XG5cbiRicmVhay1zbWFsbDogNTUwcHg7XG4kYnJlYWstbWQ6IDgwMHB4O1xuJGJyZWFrLWxhcmdlOiAxMDI0cHg7XG4iXX0= */");

/***/ }),

/***/ "./src/app/common/charts/chart-legend/chart-legend.component.ts":
/*!**********************************************************************!*\
  !*** ./src/app/common/charts/chart-legend/chart-legend.component.ts ***!
  \**********************************************************************/
/*! exports provided: ChartLegendComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ChartLegendComponent", function() { return ChartLegendComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var ChartLegendComponent = /** @class */ (function () {
    function ChartLegendComponent() {
        this.keys = [];
        this.colorsByKey = {};
        this.disabledKeys = new Set();
        this.disabledKeysChange = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        // $eggshell-darker
        this.disabledColor = '#DDD9CF';
    }
    ChartLegendComponent.prototype.getKeyBorderColor = function (key) {
        return this.colorsByKey[key];
    };
    ChartLegendComponent.prototype.getKeyBackgroundColor = function (key) {
        if (this.disabledKeys && this.disabledKeys.has(key)) {
            return this.disabledColor;
        }
        return this.colorsByKey[key];
    };
    ChartLegendComponent.prototype.onKeyClick = function (key) {
        var nextDisabledKeys = new Set(this.disabledKeys);
        if (nextDisabledKeys.has(key)) {
            nextDisabledKeys.delete(key);
        }
        else {
            nextDisabledKeys.add(key);
        }
        this.disabledKeysChange.emit(nextDisabledKeys);
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
    ], ChartLegendComponent.prototype, "keys", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
    ], ChartLegendComponent.prototype, "colorsByKey", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
    ], ChartLegendComponent.prototype, "disabledKeys", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])()
    ], ChartLegendComponent.prototype, "disabledKeysChange", void 0);
    ChartLegendComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'dwu-chart-legend',
            template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./chart-legend.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/common/charts/chart-legend/chart-legend.component.html")).default,
            styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./chart-legend.component.scss */ "./src/app/common/charts/chart-legend/chart-legend.component.scss")).default]
        })
    ], ChartLegendComponent);
    return ChartLegendComponent;
}());



/***/ }),

/***/ "./src/app/common/charts/charts.module.ts":
/*!************************************************!*\
  !*** ./src/app/common/charts/charts.module.ts ***!
  \************************************************/
/*! exports provided: ChartsModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ChartsModule", function() { return ChartsModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm5/animations.js");
/* harmony import */ var _bar_chart_bar_chart_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./bar-chart/bar-chart.component */ "./src/app/common/charts/bar-chart/bar-chart.component.ts");
/* harmony import */ var _line_chart_line_chart_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./line-chart/line-chart.component */ "./src/app/common/charts/line-chart/line-chart.component.ts");
/* harmony import */ var _chart_legend_chart_legend_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./chart-legend/chart-legend.component */ "./src/app/common/charts/chart-legend/chart-legend.component.ts");







var ChartsModule = /** @class */ (function () {
    function ChartsModule() {
    }
    ChartsModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
                _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_3__["NoopAnimationsModule"],
            ],
            declarations: [
                _bar_chart_bar_chart_component__WEBPACK_IMPORTED_MODULE_4__["BarChartComponent"],
                _line_chart_line_chart_component__WEBPACK_IMPORTED_MODULE_5__["LineChartComponent"],
                _chart_legend_chart_legend_component__WEBPACK_IMPORTED_MODULE_6__["ChartLegendComponent"],
            ],
            exports: [
                _bar_chart_bar_chart_component__WEBPACK_IMPORTED_MODULE_4__["BarChartComponent"],
                _line_chart_line_chart_component__WEBPACK_IMPORTED_MODULE_5__["LineChartComponent"],
                _chart_legend_chart_legend_component__WEBPACK_IMPORTED_MODULE_6__["ChartLegendComponent"],
            ],
            providers: [],
        })
    ], ChartsModule);
    return ChartsModule;
}());



/***/ }),

/***/ "./src/app/common/charts/line-chart/line-chart.component.scss":
/*!********************************************************************!*\
  !*** ./src/app/common/charts/line-chart/line-chart.component.scss ***!
  \********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (":host {\n  width: 100%;\n  height: 100%;\n  display: block;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9hZG1pbi9wcm9qZWN0cy9kYXd1LWhvbWUvc3JjL2FwcC9jb21tb24vY2hhcnRzL2xpbmUtY2hhcnQvbGluZS1jaGFydC5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvY29tbW9uL2NoYXJ0cy9saW5lLWNoYXJ0L2xpbmUtY2hhcnQuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxXQUFBO0VBQ0EsWUFBQTtFQUNBLGNBQUE7QUNDSiIsImZpbGUiOiJzcmMvYXBwL2NvbW1vbi9jaGFydHMvbGluZS1jaGFydC9saW5lLWNoYXJ0LmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiOmhvc3Qge1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGhlaWdodDogMTAwJTtcbiAgICBkaXNwbGF5OiBibG9jaztcbn0iLCI6aG9zdCB7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDEwMCU7XG4gIGRpc3BsYXk6IGJsb2NrO1xufSJdfQ== */");

/***/ }),

/***/ "./src/app/common/charts/line-chart/line-chart.component.ts":
/*!******************************************************************!*\
  !*** ./src/app/common/charts/line-chart/line-chart.component.ts ***!
  \******************************************************************/
/*! exports provided: LineChartComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LineChartComponent", function() { return LineChartComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! lodash */ "./node_modules/lodash/lodash.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var d3__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! d3 */ "./node_modules/d3/index.js");
/* harmony import */ var _base_chart_base_chart_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../base-chart/base-chart.component */ "./src/app/common/charts/base-chart/base-chart.component.ts");





var LineChartComponent = /** @class */ (function (_super) {
    tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"](LineChartComponent, _super);
    function LineChartComponent(hostEl) {
        var _this = _super.call(this, hostEl) || this;
        _this.hostEl = hostEl;
        _this.disabledKeys = new Set();
        _this.hoverIndexChange = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        // some extra margin on the chart itself
        _this.chartMargin = 10;
        return _this;
    }
    LineChartComponent.prototype.ngOnChanges = function (changes) {
        if (changes.tableData && changes.tableData.firstChange && this.tableData) {
            this.initializeSvg();
        }
        if (changes.tableData || changes.disabledKeys) {
            if (this.tableData) {
                this.render();
            }
        }
        if (changes.hoverIndex) {
            this.positionHoverLine();
        }
    };
    LineChartComponent.prototype.ngAfterViewInit = function () {
        _super.prototype.ngAfterViewInit.call(this);
    };
    LineChartComponent.prototype.ngOnDestroy = function () {
        _super.prototype.ngOnDestroy.call(this);
    };
    LineChartComponent.prototype.initializeSvg = function () {
        _super.prototype.initializeSvg.call(this);
        this.hoverLine = this.rootG.append('line')
            .attr('class', 'hover-line')
            .style('stroke', '#8A9A5B')
            .style('stroke-opacity', '0.8')
            .style('stroke-width', '3');
    };
    LineChartComponent.prototype.onXYHover = function (x, y) {
        var numberOfXDataPoints = this.tableData && this.tableData.length;
        if (!numberOfXDataPoints) {
            return;
        }
        var xDomain = this.xScale.domain();
        var width = this.xScale(xDomain[1]) - this.xScale(xDomain[0]);
        var distanceBetweenPoints = width / (numberOfXDataPoints - 1);
        var xOnChart = x - this.margins.left - this.chartMargin;
        var rawIndex = Math.max(Math.round(xOnChart / distanceBetweenPoints), 0) || 0;
        var hoverIndex = Math.min(Math.max(rawIndex, 0), numberOfXDataPoints - 1);
        if (hoverIndex !== this.hoverIndex) {
            this.hoverIndex = hoverIndex;
            this.hoverIndexChange.emit(hoverIndex);
        }
    };
    LineChartComponent.prototype.positionHoverLine = function () {
        if (!this.tableData || !this.tableData.length) {
            return;
        }
        var hoverLineTimestamp = this.tableData[this.hoverIndex].timestamp;
        this.hoverLine
            .attr('x1', this.xScale(hoverLineTimestamp) || 0)
            .attr('x2', this.xScale(hoverLineTimestamp) || 0)
            .attr('y1', this.yScale(this.maxY) - 3)
            .attr('y2', this.yScale(0) + 3);
    };
    LineChartComponent.prototype.renderFor = function (width, height) {
        var _this = this;
        var filteredKeys = this.keys.filter(function (key) {
            return !(_this.disabledKeys && _this.disabledKeys.has(key));
        });
        var reversedKeys = filteredKeys.reverse();
        var dataset = reversedKeys.map(function (key) {
            var series = _this.tableData.map(function (columnData) {
                var cellData = columnData[key];
                return {
                    key: key,
                    y: cellData,
                    x: columnData.timestamp,
                    data: columnData,
                };
            });
            series.key = key;
            return series;
        });
        var allXValues = dataset.length ? dataset[0].map(function (d) { return d.data.timestamp; }) : [];
        var domain = dataset.length ? [Object(lodash__WEBPACK_IMPORTED_MODULE_2__["first"])(dataset[0]).x, Object(lodash__WEBPACK_IMPORTED_MODULE_2__["last"])(dataset[0]).x] : [];
        this.xScale = d3__WEBPACK_IMPORTED_MODULE_3__["scaleTime"]()
            .domain(domain)
            .range([this.chartMargin, width - this.chartMargin]);
        this.maxY = dataset.reduce(function (currentMax, series) {
            var seriesMax = series.reduce(function (currentSeriesMax, cell) {
                return Math.max(currentSeriesMax, cell.y);
            }, 0);
            return Math.max(currentMax, seriesMax);
        }, 0);
        this.yScale = d3__WEBPACK_IMPORTED_MODULE_3__["scaleLinear"]()
            .domain([0, this.maxY || 1])
            .range([height, 0]);
        var numberOfXDataPoints = dataset.length ? dataset[0].length : 0;
        var xAxis = _super.prototype.getXAxisTicks.call(this, this.xScale, width, numberOfXDataPoints, allXValues);
        _super.prototype.applyXAxis.call(this, this.xAxisG, xAxis, height);
        var yAxis = _super.prototype.getLinearYAxis.call(this, this.yScale, width);
        _super.prototype.applyYAxis.call(this, this.yAxisG, yAxis);
        var pathLineDrawer = d3__WEBPACK_IMPORTED_MODULE_3__["line"]()
            .x(function (d) { return _this.xScale(d.x); })
            .y(function (d) { return _this.yScale(d.y); });
        // Create groups for each series, rects for each segment
        var paths = this.seriesG.selectAll('path.series')
            .data(dataset);
        paths.enter()
            .append('path')
            .style('fill', 'none')
            .merge(paths)
            .attr('class', function (d) { return "series " + d.key; })
            .attr('d', pathLineDrawer)
            .style('stroke-width', '2px')
            .style('stroke', function (d) { return _this.colorsByKey[d.key]; });
        paths.exit().remove();
        this.positionHoverLine();
    };
    LineChartComponent.ctorParameters = function () { return [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"] }
    ]; };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
    ], LineChartComponent.prototype, "tableData", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
    ], LineChartComponent.prototype, "keys", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
    ], LineChartComponent.prototype, "colorsByKey", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
    ], LineChartComponent.prototype, "disabledKeys", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
    ], LineChartComponent.prototype, "hoverIndex", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])()
    ], LineChartComponent.prototype, "hoverIndexChange", void 0);
    LineChartComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'dwu-line-chart',
            template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./line-chart.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/common/charts/line-chart/line-chart.component.html")).default,
            styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./line-chart.component.scss */ "./src/app/common/charts/line-chart/line-chart.component.scss")).default]
        })
    ], LineChartComponent);
    return LineChartComponent;
}(_base_chart_base_chart_component__WEBPACK_IMPORTED_MODULE_4__["BaseChartComponent"]));



/***/ }),

/***/ "./src/app/common/common.module.ts":
/*!*****************************************!*\
  !*** ./src/app/common/common.module.ts ***!
  \*****************************************/
/*! exports provided: CommonModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CommonModule", function() { return CommonModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm5/animations.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _text_decorator_text_decorator_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./text-decorator/text-decorator.component */ "./src/app/common/text-decorator/text-decorator.component.ts");
/* harmony import */ var _search_input_search_input_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./search-input/search-input.component */ "./src/app/common/search-input/search-input.component.ts");
/* harmony import */ var _charts_charts_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./charts/charts.module */ "./src/app/common/charts/charts.module.ts");








var CommonModule = /** @class */ (function () {
    function CommonModule() {
    }
    CommonModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
                _charts_charts_module__WEBPACK_IMPORTED_MODULE_7__["ChartsModule"],
                _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_3__["NoopAnimationsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"],
            ],
            declarations: [
                _text_decorator_text_decorator_component__WEBPACK_IMPORTED_MODULE_5__["TextDecoratorComponent"],
                _search_input_search_input_component__WEBPACK_IMPORTED_MODULE_6__["SearchInputComponent"],
            ],
            exports: [
                _charts_charts_module__WEBPACK_IMPORTED_MODULE_7__["ChartsModule"],
                _text_decorator_text_decorator_component__WEBPACK_IMPORTED_MODULE_5__["TextDecoratorComponent"],
                _search_input_search_input_component__WEBPACK_IMPORTED_MODULE_6__["SearchInputComponent"],
            ],
            providers: [],
        })
    ], CommonModule);
    return CommonModule;
}());



/***/ }),

/***/ "./src/app/common/search-input/search-input.component.scss":
/*!*****************************************************************!*\
  !*** ./src/app/common/search-input/search-input.component.scss ***!
  \*****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".input-container {\n  padding: 0.5rem 1rem 0.5rem 0.75rem;\n  position: relative;\n}\n.input-container .search-icon {\n  position: absolute;\n  top: 50%;\n  transform: translate(0.5rem, -50%);\n  font-size: 1.25rem;\n  color: #65635F;\n  pointer-events: none;\n}\n.input-container .cancel-icon {\n  position: absolute;\n  padding: 0.25rem;\n  cursor: pointer;\n  top: 50%;\n  right: 0;\n  transform: translate(-1.25rem, -50%);\n  font-size: 1.25rem;\n  color: #65635F;\n}\n.input-container input {\n  padding: 0 0.5rem 0 2rem;\n  border-radius: 0.5rem;\n  border: 2px solid #8A9A5B;\n  outline: none;\n  width: 100%;\n  font-size: 1rem;\n  height: 2.25rem;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9hZG1pbi9wcm9qZWN0cy9kYXd1LWhvbWUvc3JjL2FwcC9jb21tb24vc2VhcmNoLWlucHV0L3NlYXJjaC1pbnB1dC5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvY29tbW9uL3NlYXJjaC1pbnB1dC9zZWFyY2gtaW5wdXQuY29tcG9uZW50LnNjc3MiLCIvVXNlcnMvYWRtaW4vcHJvamVjdHMvZGF3dS1ob21lL3NyYy9zdHlsZXMvdmFyaWFibGVzLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBRUE7RUFDSSxtQ0FBQTtFQUNBLGtCQUFBO0FDREo7QURFSTtFQUNJLGtCQUFBO0VBQ0EsUUFBQTtFQUNBLGtDQUFBO0VBQ0Esa0JBQUE7RUFDQSxjRVVFO0VGVEYsb0JBQUE7QUNBUjtBREVJO0VBQ0ksa0JBQUE7RUFDQSxnQkFBQTtFQUNBLGVBQUE7RUFDQSxRQUFBO0VBQ0EsUUFBQTtFQUNBLG9DQUFBO0VBQ0Esa0JBQUE7RUFDQSxjRURFO0FEQ1Y7QURFSTtFQUNJLHdCQUFBO0VBQ0EscUJBQUE7RUFDQSx5QkFBQTtFQUNBLGFBQUE7RUFDQSxXQUFBO0VBQ0EsZUFBQTtFQUNBLGVBQUE7QUNBUiIsImZpbGUiOiJzcmMvYXBwL2NvbW1vbi9zZWFyY2gtaW5wdXQvc2VhcmNoLWlucHV0LmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiQGltcG9ydCAnbWl4aW5zJztcblxuLmlucHV0LWNvbnRhaW5lciB7XG4gICAgcGFkZGluZzogMC41cmVtIDFyZW0gMC41cmVtIDAuNzVyZW07XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgIC5zZWFyY2gtaWNvbiB7XG4gICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgICAgdG9wOiA1MCU7XG4gICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKDAuNXJlbSwgLTUwJSk7XG4gICAgICAgIGZvbnQtc2l6ZTogMS4yNXJlbTtcbiAgICAgICAgY29sb3I6ICRncmFuaXRlO1xuICAgICAgICBwb2ludGVyLWV2ZW50czogbm9uZTtcbiAgICB9XG4gICAgLmNhbmNlbC1pY29uIHtcbiAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgICBwYWRkaW5nOiAwLjI1cmVtO1xuICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgICAgIHRvcDogNTAlO1xuICAgICAgICByaWdodDogMDtcbiAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTEuMjVyZW0sIC01MCUpO1xuICAgICAgICBmb250LXNpemU6IDEuMjVyZW07XG4gICAgICAgIGNvbG9yOiAkZ3Jhbml0ZTtcbiAgICB9XG4gICAgaW5wdXQge1xuICAgICAgICBwYWRkaW5nOiAwIDAuNXJlbSAwIDJyZW07XG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDAuNXJlbTtcbiAgICAgICAgYm9yZGVyOiAycHggc29saWQgJG1vc3MtZ3JlZW47XG4gICAgICAgIG91dGxpbmU6IG5vbmU7XG4gICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICBmb250LXNpemU6IDFyZW07XG4gICAgICAgIGhlaWdodDogMi4yNXJlbTtcbiAgICB9XG59XG4iLCIuaW5wdXQtY29udGFpbmVyIHtcbiAgcGFkZGluZzogMC41cmVtIDFyZW0gMC41cmVtIDAuNzVyZW07XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbn1cbi5pbnB1dC1jb250YWluZXIgLnNlYXJjaC1pY29uIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IDUwJTtcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoMC41cmVtLCAtNTAlKTtcbiAgZm9udC1zaXplOiAxLjI1cmVtO1xuICBjb2xvcjogIzY1NjM1RjtcbiAgcG9pbnRlci1ldmVudHM6IG5vbmU7XG59XG4uaW5wdXQtY29udGFpbmVyIC5jYW5jZWwtaWNvbiB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgcGFkZGluZzogMC4yNXJlbTtcbiAgY3Vyc29yOiBwb2ludGVyO1xuICB0b3A6IDUwJTtcbiAgcmlnaHQ6IDA7XG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlKC0xLjI1cmVtLCAtNTAlKTtcbiAgZm9udC1zaXplOiAxLjI1cmVtO1xuICBjb2xvcjogIzY1NjM1Rjtcbn1cbi5pbnB1dC1jb250YWluZXIgaW5wdXQge1xuICBwYWRkaW5nOiAwIDAuNXJlbSAwIDJyZW07XG4gIGJvcmRlci1yYWRpdXM6IDAuNXJlbTtcbiAgYm9yZGVyOiAycHggc29saWQgIzhBOUE1QjtcbiAgb3V0bGluZTogbm9uZTtcbiAgd2lkdGg6IDEwMCU7XG4gIGZvbnQtc2l6ZTogMXJlbTtcbiAgaGVpZ2h0OiAyLjI1cmVtO1xufSIsIlxuJGRhcmstZ3JlZW46ICMyOTJFMTI7XG4kYXJteS1ncmVlbjogIzRCNTMyMDtcbiRvbGl2ZS1ncmVlbjogIzcwODIzODtcbiRtb3NzLWdyZWVuOiAjOEE5QTVCO1xuJGxhdXJlbC1ncmVlbjogI0JBQzM5RjtcblxuLy8gbmljZSBmb3IgdGV4dCBhZ2FpbnN0IGRhcmsgYmFja2dyb3VuZFxuJGxpZ2h0LWdyZWVuOiAjRjRGN0VBO1xuJGxpZ2h0ZXN0LWdyZWVuOiAjRkNGQ0Y5O1xuXG4vLyBVc2VkIGZvciBmaWxlIHNlbGVjdG9yXG4kZWdnc2hlbGwtZGFya2VyOiAjREREOUNGO1xuJGVnZ3NoZWxsLWRhcms6ICNFQUU2REE7XG4kZWdnc2hlbGw6ICNFRkVCREY7XG4kZWdnc2hlbGwtbGlnaHQ6ICNGMkVFRTE7XG5cbi8vIGdyYXlzXG4kYmFzaWNhbGx5LWJsYWNrOiAjMjAyMTI0O1xuJGJsYWNrLW9saXZlOiAjM0Y0MDM4O1xuJGdyYW5pdGU6ICM2NTYzNUY7XG4kbGlnaHRlci1ncmF5OiAjOUQ5Qjk5O1xuJHdoaXRlOiAjZmZmO1xuXG4kZ29sZDogI0Q2QjkwMjtcbiRzdGFyLWJsdWU6ICMxRDYyQzQ7XG5cbiRicmVhay1zbWFsbDogNTUwcHg7XG4kYnJlYWstbWQ6IDgwMHB4O1xuJGJyZWFrLWxhcmdlOiAxMDI0cHg7XG4iXX0= */");

/***/ }),

/***/ "./src/app/common/search-input/search-input.component.ts":
/*!***************************************************************!*\
  !*** ./src/app/common/search-input/search-input.component.ts ***!
  \***************************************************************/
/*! exports provided: SearchInputComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SearchInputComponent", function() { return SearchInputComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var SearchInputComponent = /** @class */ (function () {
    function SearchInputComponent() {
        this.searchText = '';
        this.placeholder = 'search..';
        this.searchTextChange = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
    }
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
    ], SearchInputComponent.prototype, "searchText", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
    ], SearchInputComponent.prototype, "placeholder", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])()
    ], SearchInputComponent.prototype, "searchTextChange", void 0);
    SearchInputComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'dwu-search-input',
            template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./search-input.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/common/search-input/search-input.component.html")).default,
            styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./search-input.component.scss */ "./src/app/common/search-input/search-input.component.scss")).default]
        })
    ], SearchInputComponent);
    return SearchInputComponent;
}());



/***/ }),

/***/ "./src/app/common/text-decorator/text-decorator.component.scss":
/*!*********************************************************************!*\
  !*** ./src/app/common/text-decorator/text-decorator.component.scss ***!
  \*********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".decorated {\n  background-color: #BAC39F;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9hZG1pbi9wcm9qZWN0cy9kYXd1LWhvbWUvc3JjL2FwcC9jb21tb24vdGV4dC1kZWNvcmF0b3IvdGV4dC1kZWNvcmF0b3IuY29tcG9uZW50LnNjc3MiLCIvVXNlcnMvYWRtaW4vcHJvamVjdHMvZGF3dS1ob21lL3NyYy9zdHlsZXMvdmFyaWFibGVzLnNjc3MiLCJzcmMvYXBwL2NvbW1vbi90ZXh0LWRlY29yYXRvci90ZXh0LWRlY29yYXRvci5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFHQTtFQUNJLHlCQ0NXO0FDSGYiLCJmaWxlIjoic3JjL2FwcC9jb21tb24vdGV4dC1kZWNvcmF0b3IvdGV4dC1kZWNvcmF0b3IuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJcbkBpbXBvcnQgJ21peGlucyc7XG5cbi5kZWNvcmF0ZWQge1xuICAgIGJhY2tncm91bmQtY29sb3I6ICRsYXVyZWwtZ3JlZW47XG59IiwiXG4kZGFyay1ncmVlbjogIzI5MkUxMjtcbiRhcm15LWdyZWVuOiAjNEI1MzIwO1xuJG9saXZlLWdyZWVuOiAjNzA4MjM4O1xuJG1vc3MtZ3JlZW46ICM4QTlBNUI7XG4kbGF1cmVsLWdyZWVuOiAjQkFDMzlGO1xuXG4vLyBuaWNlIGZvciB0ZXh0IGFnYWluc3QgZGFyayBiYWNrZ3JvdW5kXG4kbGlnaHQtZ3JlZW46ICNGNEY3RUE7XG4kbGlnaHRlc3QtZ3JlZW46ICNGQ0ZDRjk7XG5cbi8vIFVzZWQgZm9yIGZpbGUgc2VsZWN0b3JcbiRlZ2dzaGVsbC1kYXJrZXI6ICNEREQ5Q0Y7XG4kZWdnc2hlbGwtZGFyazogI0VBRTZEQTtcbiRlZ2dzaGVsbDogI0VGRUJERjtcbiRlZ2dzaGVsbC1saWdodDogI0YyRUVFMTtcblxuLy8gZ3JheXNcbiRiYXNpY2FsbHktYmxhY2s6ICMyMDIxMjQ7XG4kYmxhY2stb2xpdmU6ICMzRjQwMzg7XG4kZ3Jhbml0ZTogIzY1NjM1RjtcbiRsaWdodGVyLWdyYXk6ICM5RDlCOTk7XG4kd2hpdGU6ICNmZmY7XG5cbiRnb2xkOiAjRDZCOTAyO1xuJHN0YXItYmx1ZTogIzFENjJDNDtcblxuJGJyZWFrLXNtYWxsOiA1NTBweDtcbiRicmVhay1tZDogODAwcHg7XG4kYnJlYWstbGFyZ2U6IDEwMjRweDtcbiIsIi5kZWNvcmF0ZWQge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjQkFDMzlGO1xufSJdfQ== */");

/***/ }),

/***/ "./src/app/common/text-decorator/text-decorator.component.ts":
/*!*******************************************************************!*\
  !*** ./src/app/common/text-decorator/text-decorator.component.ts ***!
  \*******************************************************************/
/*! exports provided: TextDecoratorComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TextDecoratorComponent", function() { return TextDecoratorComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! lodash */ "./node_modules/lodash/lodash.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_2__);



var TextDecoratorComponent = /** @class */ (function () {
    function TextDecoratorComponent() {
        this.text = '';
        this.matchRanges = [];
        this.ignoreUpdates = false;
        this.spanElements = [];
    }
    TextDecoratorComponent.prototype.ngOnChanges = function (changes) {
        if (this.ignoreUpdates) {
            return;
        }
        if (changes.text || changes.matchRanges) {
            var willResultingElementsChange = changes.text || !Object(lodash__WEBPACK_IMPORTED_MODULE_2__["isEqual"])(changes.matchRanges.currentValue, changes.matchRanges.previousValue);
            if (willResultingElementsChange) {
                this.spanElements = this.getSpanElements();
            }
        }
    };
    TextDecoratorComponent.prototype.getSpanElements = function () {
        var indicesDecorated = new Set();
        this.matchRanges.forEach(function (matchRange) {
            for (var i = matchRange[0]; i <= matchRange[1]; i++) {
                indicesDecorated.add(i);
            }
        });
        var spanElements = [];
        var previousIndex = 0;
        var isPreviousDecorated = indicesDecorated.has(0);
        var isCurrentDecorated;
        for (var i = 1; i < this.text.length; i++) {
            isCurrentDecorated = indicesDecorated.has(i);
            if (isPreviousDecorated !== isCurrentDecorated) {
                spanElements.push({
                    text: this.text.slice(previousIndex, i),
                    isDecorated: isPreviousDecorated,
                });
                previousIndex = i;
                isPreviousDecorated = isCurrentDecorated;
            }
        }
        spanElements.push({
            text: this.text.slice(previousIndex),
            isDecorated: isCurrentDecorated,
        });
        return spanElements;
    };
    TextDecoratorComponent.prototype.trackByFn = function (spanElement) {
        return "" + spanElement.text + spanElement.isDecorated;
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
    ], TextDecoratorComponent.prototype, "text", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
    ], TextDecoratorComponent.prototype, "matchRanges", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
    ], TextDecoratorComponent.prototype, "ignoreUpdates", void 0);
    TextDecoratorComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'dwu-text-decorator',
            template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./text-decorator.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/common/text-decorator/text-decorator.component.html")).default,
            changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectionStrategy"].OnPush,
            styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./text-decorator.component.scss */ "./src/app/common/text-decorator/text-decorator.component.scss")).default]
        })
    ], TextDecoratorComponent);
    return TextDecoratorComponent;
}());



/***/ }),

/***/ "./src/app/corona/corona-dashboard/corona-dashboard.component.scss":
/*!*************************************************************************!*\
  !*** ./src/app/corona/corona-dashboard/corona-dashboard.component.scss ***!
  \*************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (":host {\n  display: block;\n  padding-bottom: 2rem;\n}\n:host .chart-container {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n}\n:host .chart-container .selected-stats {\n  padding: 0 1rem;\n  font-size: 0.75rem;\n  display: flex;\n}\n:host .chart-container .selected-stats .stats-column-container {\n  display: flex;\n}\n:host .chart-container .selected-stats .stats-column-container:not(:first-child) {\n  margin-left: 2.5rem;\n}\n:host .chart-container .selected-stats .stats-column-container .stats-column {\n  display: flex;\n  flex-direction: column;\n  text-align: right;\n}\n:host .chart-container .selected-stats .stats-column-container .stats-column:first-child {\n  margin-right: 0.25rem;\n}\n:host .chart-container .selected-stats .stats-column-container .stats-column.stats {\n  min-width: 2.5rem;\n}\n:host .chart-container .selected-stats .stats-column-container .stats-column .count-stat {\n  font-weight: 600;\n}\n:host .chart-container .selected-stats .stats-column-container .stats-column .date-stat {\n  min-width: 3.75rem;\n}\n:host .chart-container .overview.chart {\n  height: 12.5rem;\n  width: 100%;\n}\n:host .chart-container dwu-chart-legend {\n  flex: 0 0 auto;\n  margin-top: 0.25rem;\n  margin-bottom: 1.5rem;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9hZG1pbi9wcm9qZWN0cy9kYXd1LWhvbWUvc3JjL2FwcC9jb3JvbmEvY29yb25hLWRhc2hib2FyZC9jb3JvbmEtZGFzaGJvYXJkLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9jb3JvbmEvY29yb25hLWRhc2hib2FyZC9jb3JvbmEtZGFzaGJvYXJkLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUVBO0VBQ0ksY0FBQTtFQUNBLG9CQUFBO0FDREo7QURFSTtFQUNJLGFBQUE7RUFDQSxzQkFBQTtFQUNBLG1CQUFBO0FDQVI7QURDUTtFQUNJLGVBQUE7RUFDQSxrQkFBQTtFQUNBLGFBQUE7QUNDWjtBREFZO0VBQ0ksYUFBQTtBQ0VoQjtBRERnQjtFQUNJLG1CQUFBO0FDR3BCO0FERGdCO0VBQ0ksYUFBQTtFQUNBLHNCQUFBO0VBQ0EsaUJBQUE7QUNHcEI7QURGb0I7RUFDSSxxQkFBQTtBQ0l4QjtBREZvQjtFQUNJLGlCQUFBO0FDSXhCO0FERm9CO0VBQ0ksZ0JBQUE7QUNJeEI7QURGb0I7RUFDSSxrQkFBQTtBQ0l4QjtBRENRO0VBQ0ksZUFBQTtFQUNBLFdBQUE7QUNDWjtBRENRO0VBQ0ksY0FBQTtFQUNBLG1CQUFBO0VBQ0EscUJBQUE7QUNDWiIsImZpbGUiOiJzcmMvYXBwL2Nvcm9uYS9jb3JvbmEtZGFzaGJvYXJkL2Nvcm9uYS1kYXNoYm9hcmQuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJAaW1wb3J0ICdtaXhpbnMnO1xuXG46aG9zdCB7XG4gICAgZGlzcGxheTogYmxvY2s7XG4gICAgcGFkZGluZy1ib3R0b206IDJyZW07XG4gICAgLmNoYXJ0LWNvbnRhaW5lciB7XG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICAgIC5zZWxlY3RlZC1zdGF0cyB7XG4gICAgICAgICAgICBwYWRkaW5nOiAwIDFyZW07XG4gICAgICAgICAgICBmb250LXNpemU6IDAuNzVyZW07XG4gICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgICAgLnN0YXRzLWNvbHVtbi1jb250YWluZXIge1xuICAgICAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAgICAgICAgJjpub3QoOmZpcnN0LWNoaWxkKSB7XG4gICAgICAgICAgICAgICAgICAgIG1hcmdpbi1sZWZ0OiAyLjVyZW07XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIC5zdGF0cy1jb2x1bW4ge1xuICAgICAgICAgICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgICAgICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgICAgICAgICAgICAgICAgICB0ZXh0LWFsaWduOiByaWdodDtcbiAgICAgICAgICAgICAgICAgICAgJjpmaXJzdC1jaGlsZCB7XG4gICAgICAgICAgICAgICAgICAgICAgICBtYXJnaW4tcmlnaHQ6IDAuMjVyZW07XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgJi5zdGF0cyB7XG4gICAgICAgICAgICAgICAgICAgICAgICBtaW4td2lkdGg6IDIuNXJlbTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAuY291bnQtc3RhdCB7XG4gICAgICAgICAgICAgICAgICAgICAgICBmb250LXdlaWdodDogNjAwO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIC5kYXRlLXN0YXQge1xuICAgICAgICAgICAgICAgICAgICAgICAgbWluLXdpZHRoOiAzLjc1cmVtO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIC5vdmVydmlldy5jaGFydCB7XG4gICAgICAgICAgICBoZWlnaHQ6IDEyLjVyZW07XG4gICAgICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgfVxuICAgICAgICBkd3UtY2hhcnQtbGVnZW5kIHtcbiAgICAgICAgICAgIGZsZXg6IDAgMCBhdXRvO1xuICAgICAgICAgICAgbWFyZ2luLXRvcDogMC4yNXJlbTtcbiAgICAgICAgICAgIG1hcmdpbi1ib3R0b206IDEuNXJlbTtcbiAgICAgICAgfVxuICAgIH1cbn1cbiIsIjpob3N0IHtcbiAgZGlzcGxheTogYmxvY2s7XG4gIHBhZGRpbmctYm90dG9tOiAycmVtO1xufVxuOmhvc3QgLmNoYXJ0LWNvbnRhaW5lciB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG59XG46aG9zdCAuY2hhcnQtY29udGFpbmVyIC5zZWxlY3RlZC1zdGF0cyB7XG4gIHBhZGRpbmc6IDAgMXJlbTtcbiAgZm9udC1zaXplOiAwLjc1cmVtO1xuICBkaXNwbGF5OiBmbGV4O1xufVxuOmhvc3QgLmNoYXJ0LWNvbnRhaW5lciAuc2VsZWN0ZWQtc3RhdHMgLnN0YXRzLWNvbHVtbi1jb250YWluZXIge1xuICBkaXNwbGF5OiBmbGV4O1xufVxuOmhvc3QgLmNoYXJ0LWNvbnRhaW5lciAuc2VsZWN0ZWQtc3RhdHMgLnN0YXRzLWNvbHVtbi1jb250YWluZXI6bm90KDpmaXJzdC1jaGlsZCkge1xuICBtYXJnaW4tbGVmdDogMi41cmVtO1xufVxuOmhvc3QgLmNoYXJ0LWNvbnRhaW5lciAuc2VsZWN0ZWQtc3RhdHMgLnN0YXRzLWNvbHVtbi1jb250YWluZXIgLnN0YXRzLWNvbHVtbiB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIHRleHQtYWxpZ246IHJpZ2h0O1xufVxuOmhvc3QgLmNoYXJ0LWNvbnRhaW5lciAuc2VsZWN0ZWQtc3RhdHMgLnN0YXRzLWNvbHVtbi1jb250YWluZXIgLnN0YXRzLWNvbHVtbjpmaXJzdC1jaGlsZCB7XG4gIG1hcmdpbi1yaWdodDogMC4yNXJlbTtcbn1cbjpob3N0IC5jaGFydC1jb250YWluZXIgLnNlbGVjdGVkLXN0YXRzIC5zdGF0cy1jb2x1bW4tY29udGFpbmVyIC5zdGF0cy1jb2x1bW4uc3RhdHMge1xuICBtaW4td2lkdGg6IDIuNXJlbTtcbn1cbjpob3N0IC5jaGFydC1jb250YWluZXIgLnNlbGVjdGVkLXN0YXRzIC5zdGF0cy1jb2x1bW4tY29udGFpbmVyIC5zdGF0cy1jb2x1bW4gLmNvdW50LXN0YXQge1xuICBmb250LXdlaWdodDogNjAwO1xufVxuOmhvc3QgLmNoYXJ0LWNvbnRhaW5lciAuc2VsZWN0ZWQtc3RhdHMgLnN0YXRzLWNvbHVtbi1jb250YWluZXIgLnN0YXRzLWNvbHVtbiAuZGF0ZS1zdGF0IHtcbiAgbWluLXdpZHRoOiAzLjc1cmVtO1xufVxuOmhvc3QgLmNoYXJ0LWNvbnRhaW5lciAub3ZlcnZpZXcuY2hhcnQge1xuICBoZWlnaHQ6IDEyLjVyZW07XG4gIHdpZHRoOiAxMDAlO1xufVxuOmhvc3QgLmNoYXJ0LWNvbnRhaW5lciBkd3UtY2hhcnQtbGVnZW5kIHtcbiAgZmxleDogMCAwIGF1dG87XG4gIG1hcmdpbi10b3A6IDAuMjVyZW07XG4gIG1hcmdpbi1ib3R0b206IDEuNXJlbTtcbn0iXX0= */");

/***/ }),

/***/ "./src/app/corona/corona-dashboard/corona-dashboard.component.ts":
/*!***********************************************************************!*\
  !*** ./src/app/corona/corona-dashboard/corona-dashboard.component.ts ***!
  \***********************************************************************/
/*! exports provided: CoronaDashboardComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CoronaDashboardComponent", function() { return CoronaDashboardComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _models_index__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../models/index */ "./src/app/corona/models/index.ts");



var CoronaDashboardComponent = /** @class */ (function () {
    function CoronaDashboardComponent() {
        var _a, _b;
        this.disabledBarKeys = new Set();
        this.disabledBarKeysChange = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.disabledNormalKeys = new Set();
        this.disabledNormalKeysChange = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.coronaExtractor = new _models_index__WEBPACK_IMPORTED_MODULE_2__["CoronaDataExtractor"]();
        this.hoverIndex = 0;
        this.CoronaKeys = _models_index__WEBPACK_IMPORTED_MODULE_2__["CoronaKeys"];
        this.NormalKeys = _models_index__WEBPACK_IMPORTED_MODULE_2__["NormalKeys"];
        this.coronaKeys = [
            _models_index__WEBPACK_IMPORTED_MODULE_2__["CoronaKeys"].NEW,
            _models_index__WEBPACK_IMPORTED_MODULE_2__["CoronaKeys"].ACTIVE,
            _models_index__WEBPACK_IMPORTED_MODULE_2__["CoronaKeys"].RECOVERED,
            _models_index__WEBPACK_IMPORTED_MODULE_2__["CoronaKeys"].DEATHS,
        ];
        this.coronaColorsByKey = (_a = {},
            _a[_models_index__WEBPACK_IMPORTED_MODULE_2__["CoronaKeys"].NEW] = '#ED9797',
            _a[_models_index__WEBPACK_IMPORTED_MODULE_2__["CoronaKeys"].ACTIVE] = '#AD3E3E',
            _a[_models_index__WEBPACK_IMPORTED_MODULE_2__["CoronaKeys"].RECOVERED] = '#34A2AA',
            _a[_models_index__WEBPACK_IMPORTED_MODULE_2__["CoronaKeys"].DEATHS] = '#2B1919',
            _a);
        this.normalKeys = [
            _models_index__WEBPACK_IMPORTED_MODULE_2__["NormalKeys"].CASES,
            _models_index__WEBPACK_IMPORTED_MODULE_2__["NormalKeys"].R,
            _models_index__WEBPACK_IMPORTED_MODULE_2__["NormalKeys"].NEW,
            _models_index__WEBPACK_IMPORTED_MODULE_2__["NormalKeys"].ACTIVE,
            _models_index__WEBPACK_IMPORTED_MODULE_2__["NormalKeys"].RECOVERED,
            _models_index__WEBPACK_IMPORTED_MODULE_2__["NormalKeys"].DEATHS,
            _models_index__WEBPACK_IMPORTED_MODULE_2__["NormalKeys"].R_AVG,
        ];
        this.normalColorsByKeys = (_b = {},
            _b[_models_index__WEBPACK_IMPORTED_MODULE_2__["NormalKeys"].CASES] = '#2B1919',
            _b[_models_index__WEBPACK_IMPORTED_MODULE_2__["NormalKeys"].R] = '#34A2AA',
            _b[_models_index__WEBPACK_IMPORTED_MODULE_2__["NormalKeys"].NEW] = '#AD3E3E',
            _b[_models_index__WEBPACK_IMPORTED_MODULE_2__["NormalKeys"].ACTIVE] = '#ED9797',
            _b[_models_index__WEBPACK_IMPORTED_MODULE_2__["NormalKeys"].RECOVERED] = '#2B1919',
            _b[_models_index__WEBPACK_IMPORTED_MODULE_2__["NormalKeys"].DEATHS] = '#34A2AA',
            _b[_models_index__WEBPACK_IMPORTED_MODULE_2__["NormalKeys"].R_AVG] = '#AD3E3E',
            _b);
    }
    CoronaDashboardComponent.prototype.ngOnChanges = function (changes) {
        if (changes.coronaFile && this.coronaFile) {
            this.coronaData = this.coronaExtractor.clean(this.coronaFile);
            this.normalizedData = this.coronaExtractor.getNormalizedData(this.coronaData, this.coronaFile.population);
            this.hoverIndex = this.coronaData.length - 1;
        }
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
    ], CoronaDashboardComponent.prototype, "coronaFile", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
    ], CoronaDashboardComponent.prototype, "disabledBarKeys", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])()
    ], CoronaDashboardComponent.prototype, "disabledBarKeysChange", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
    ], CoronaDashboardComponent.prototype, "disabledNormalKeys", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])()
    ], CoronaDashboardComponent.prototype, "disabledNormalKeysChange", void 0);
    CoronaDashboardComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'dwu-corona-dashboard',
            template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./corona-dashboard.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/corona/corona-dashboard/corona-dashboard.component.html")).default,
            styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./corona-dashboard.component.scss */ "./src/app/corona/corona-dashboard/corona-dashboard.component.scss")).default]
        })
    ], CoronaDashboardComponent);
    return CoronaDashboardComponent;
}());



/***/ }),

/***/ "./src/app/corona/corona-file-viewer/corona-file-viewer.component.scss":
/*!*****************************************************************************!*\
  !*** ./src/app/corona/corona-file-viewer/corona-file-viewer.component.scss ***!
  \*****************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".header {\n  display: flex;\n  padding: 1rem;\n  flex-direction: column;\n  font-size: 1rem;\n}\n.header .header-main {\n  display: flex;\n  align-items: center;\n}\n.header .header-main .download-link {\n  margin-left: 0.25rem;\n  text-decoration: none;\n}\n.header .header-main .download-link .download-icon {\n  font-size: 1.25rem;\n  color: #65635F;\n  display: block;\n}\n.header .population {\n  font-size: 0.75rem;\n  color: #65635F;\n  display: flex;\n}\n.header .population .population-count {\n  margin-left: 0.25rem;\n}\n.loader {\n  visibility: hidden;\n  margin-left: 0.25rem;\n}\n.loader.visible {\n  visibility: visible;\n}\n.loader .hour-glass {\n  font-size: 1rem;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9hZG1pbi9wcm9qZWN0cy9kYXd1LWhvbWUvc3JjL2FwcC9jb3JvbmEvY29yb25hLWZpbGUtdmlld2VyL2Nvcm9uYS1maWxlLXZpZXdlci5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvY29yb25hL2Nvcm9uYS1maWxlLXZpZXdlci9jb3JvbmEtZmlsZS12aWV3ZXIuY29tcG9uZW50LnNjc3MiLCIvVXNlcnMvYWRtaW4vcHJvamVjdHMvZGF3dS1ob21lL3NyYy9zdHlsZXMvdmFyaWFibGVzLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBRUE7RUFDSSxhQUFBO0VBQ0EsYUFBQTtFQUNBLHNCQUFBO0VBQ0EsZUFBQTtBQ0RKO0FERUk7RUFDSSxhQUFBO0VBQ0EsbUJBQUE7QUNBUjtBRENRO0VBQ0ksb0JBQUE7RUFDQSxxQkFBQTtBQ0NaO0FEQVk7RUFDSSxrQkFBQTtFQUNBLGNFS047RUZKTSxjQUFBO0FDRWhCO0FERUk7RUFDSSxrQkFBQTtFQUNBLGNFRkU7RUZHRixhQUFBO0FDQVI7QURDUTtFQUNJLG9CQUFBO0FDQ1o7QURJQTtFQUNJLGtCQUFBO0VBQ0Esb0JBQUE7QUNESjtBREVJO0VBQ0ksbUJBQUE7QUNBUjtBREVJO0VBQ0ksZUFBQTtBQ0FSIiwiZmlsZSI6InNyYy9hcHAvY29yb25hL2Nvcm9uYS1maWxlLXZpZXdlci9jb3JvbmEtZmlsZS12aWV3ZXIuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJAaW1wb3J0ICdtaXhpbnMnO1xuXG4uaGVhZGVyIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIHBhZGRpbmc6IDFyZW07XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICBmb250LXNpemU6IDFyZW07XG4gICAgLmhlYWRlci1tYWluIHtcbiAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgICAgLmRvd25sb2FkLWxpbmsge1xuICAgICAgICAgICAgbWFyZ2luLWxlZnQ6IDAuMjVyZW07XG4gICAgICAgICAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gICAgICAgICAgICAuZG93bmxvYWQtaWNvbiB7XG4gICAgICAgICAgICAgICAgZm9udC1zaXplOiAxLjI1cmVtO1xuICAgICAgICAgICAgICAgIGNvbG9yOiAkZ3Jhbml0ZTtcbiAgICAgICAgICAgICAgICBkaXNwbGF5OiBibG9jaztcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cbiAgICAucG9wdWxhdGlvbiB7XG4gICAgICAgIGZvbnQtc2l6ZTogMC43NXJlbTtcbiAgICAgICAgY29sb3I6ICRncmFuaXRlO1xuICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAucG9wdWxhdGlvbi1jb3VudCB7XG4gICAgICAgICAgICBtYXJnaW4tbGVmdDogMC4yNXJlbTtcbiAgICAgICAgfVxuICAgIH1cbn1cblxuLmxvYWRlciB7XG4gICAgdmlzaWJpbGl0eTogaGlkZGVuO1xuICAgIG1hcmdpbi1sZWZ0OiAwLjI1cmVtO1xuICAgICYudmlzaWJsZSB7XG4gICAgICAgIHZpc2liaWxpdHk6IHZpc2libGU7XG4gICAgfVxuICAgIC5ob3VyLWdsYXNzIHtcbiAgICAgICAgZm9udC1zaXplOiAxcmVtO1xuICAgIH1cbn0iLCIuaGVhZGVyIHtcbiAgZGlzcGxheTogZmxleDtcbiAgcGFkZGluZzogMXJlbTtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgZm9udC1zaXplOiAxcmVtO1xufVxuLmhlYWRlciAuaGVhZGVyLW1haW4ge1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xufVxuLmhlYWRlciAuaGVhZGVyLW1haW4gLmRvd25sb2FkLWxpbmsge1xuICBtYXJnaW4tbGVmdDogMC4yNXJlbTtcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xufVxuLmhlYWRlciAuaGVhZGVyLW1haW4gLmRvd25sb2FkLWxpbmsgLmRvd25sb2FkLWljb24ge1xuICBmb250LXNpemU6IDEuMjVyZW07XG4gIGNvbG9yOiAjNjU2MzVGO1xuICBkaXNwbGF5OiBibG9jaztcbn1cbi5oZWFkZXIgLnBvcHVsYXRpb24ge1xuICBmb250LXNpemU6IDAuNzVyZW07XG4gIGNvbG9yOiAjNjU2MzVGO1xuICBkaXNwbGF5OiBmbGV4O1xufVxuLmhlYWRlciAucG9wdWxhdGlvbiAucG9wdWxhdGlvbi1jb3VudCB7XG4gIG1hcmdpbi1sZWZ0OiAwLjI1cmVtO1xufVxuXG4ubG9hZGVyIHtcbiAgdmlzaWJpbGl0eTogaGlkZGVuO1xuICBtYXJnaW4tbGVmdDogMC4yNXJlbTtcbn1cbi5sb2FkZXIudmlzaWJsZSB7XG4gIHZpc2liaWxpdHk6IHZpc2libGU7XG59XG4ubG9hZGVyIC5ob3VyLWdsYXNzIHtcbiAgZm9udC1zaXplOiAxcmVtO1xufSIsIlxuJGRhcmstZ3JlZW46ICMyOTJFMTI7XG4kYXJteS1ncmVlbjogIzRCNTMyMDtcbiRvbGl2ZS1ncmVlbjogIzcwODIzODtcbiRtb3NzLWdyZWVuOiAjOEE5QTVCO1xuJGxhdXJlbC1ncmVlbjogI0JBQzM5RjtcblxuLy8gbmljZSBmb3IgdGV4dCBhZ2FpbnN0IGRhcmsgYmFja2dyb3VuZFxuJGxpZ2h0LWdyZWVuOiAjRjRGN0VBO1xuJGxpZ2h0ZXN0LWdyZWVuOiAjRkNGQ0Y5O1xuXG4vLyBVc2VkIGZvciBmaWxlIHNlbGVjdG9yXG4kZWdnc2hlbGwtZGFya2VyOiAjREREOUNGO1xuJGVnZ3NoZWxsLWRhcms6ICNFQUU2REE7XG4kZWdnc2hlbGw6ICNFRkVCREY7XG4kZWdnc2hlbGwtbGlnaHQ6ICNGMkVFRTE7XG5cbi8vIGdyYXlzXG4kYmFzaWNhbGx5LWJsYWNrOiAjMjAyMTI0O1xuJGJsYWNrLW9saXZlOiAjM0Y0MDM4O1xuJGdyYW5pdGU6ICM2NTYzNUY7XG4kbGlnaHRlci1ncmF5OiAjOUQ5Qjk5O1xuJHdoaXRlOiAjZmZmO1xuXG4kZ29sZDogI0Q2QjkwMjtcbiRzdGFyLWJsdWU6ICMxRDYyQzQ7XG5cbiRicmVhay1zbWFsbDogNTUwcHg7XG4kYnJlYWstbWQ6IDgwMHB4O1xuJGJyZWFrLWxhcmdlOiAxMDI0cHg7XG4iXX0= */");

/***/ }),

/***/ "./src/app/corona/corona-file-viewer/corona-file-viewer.component.ts":
/*!***************************************************************************!*\
  !*** ./src/app/corona/corona-file-viewer/corona-file-viewer.component.ts ***!
  \***************************************************************************/
/*! exports provided: CoronaFileViewerComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CoronaFileViewerComponent", function() { return CoronaFileViewerComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _src_assets_country_names_by_code_json__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @src/assets/country-names-by-code.json */ "./src/assets/country-names-by-code.json");
var _src_assets_country_names_by_code_json__WEBPACK_IMPORTED_MODULE_4___namespace = /*#__PURE__*/__webpack_require__.t(/*! @src/assets/country-names-by-code.json */ "./src/assets/country-names-by-code.json", 1);
/* harmony import */ var _services_corona_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../services/corona.service */ "./src/app/corona/services/corona.service.ts");






var CoronaFileViewerComponent = /** @class */ (function () {
    function CoronaFileViewerComponent(coronaService) {
        var _this = this;
        this.coronaService = coronaService;
        this.disabledBarKeys = new Set();
        this.disabledBarKeysChange = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.disabledNormalKeys = new Set();
        this.disabledNormalKeysChange = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.location$ = new rxjs__WEBPACK_IMPORTED_MODULE_2__["BehaviorSubject"](undefined);
        this.countryNamesByCode = _src_assets_country_names_by_code_json__WEBPACK_IMPORTED_MODULE_4__;
        this.coronaFile$ = this.location$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["switchMap"])(function (location) {
            if (!location) {
                return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["of"])(undefined);
            }
            _this.fileUrl = _this.coronaService.getCoronaFileUrl(location);
            return _this.coronaService.getCoronaFileByLocation(location).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["startWith"])(undefined));
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["shareReplay"])(1));
        this.isLoading$ = this.location$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["switchMap"])(function (location) {
            return _this.coronaFile$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (file) { return Boolean(location && !file); }));
        }));
    }
    CoronaFileViewerComponent.prototype.ngOnChanges = function (changes) {
        if (changes.location) {
            this.location$.next(this.location);
        }
    };
    CoronaFileViewerComponent.ctorParameters = function () { return [
        { type: _services_corona_service__WEBPACK_IMPORTED_MODULE_5__["CoronaService"] }
    ]; };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
    ], CoronaFileViewerComponent.prototype, "location", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
    ], CoronaFileViewerComponent.prototype, "fileName", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
    ], CoronaFileViewerComponent.prototype, "disabledBarKeys", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])()
    ], CoronaFileViewerComponent.prototype, "disabledBarKeysChange", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
    ], CoronaFileViewerComponent.prototype, "disabledNormalKeys", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])()
    ], CoronaFileViewerComponent.prototype, "disabledNormalKeysChange", void 0);
    CoronaFileViewerComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'dwu-corona-file-viewer',
            template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./corona-file-viewer.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/corona/corona-file-viewer/corona-file-viewer.component.html")).default,
            styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./corona-file-viewer.component.scss */ "./src/app/corona/corona-file-viewer/corona-file-viewer.component.scss")).default]
        })
    ], CoronaFileViewerComponent);
    return CoronaFileViewerComponent;
}());



/***/ }),

/***/ "./src/app/corona/corona.component.scss":
/*!**********************************************!*\
  !*** ./src/app/corona/corona.component.scss ***!
  \**********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("@media screen and (max-width: 750px) {\n  :host div.page-container {\n    flex-direction: column;\n  }\n  :host div.page-container .left-side {\n    flex: 0 0 auto;\n    height: 13.25rem;\n    width: 100%;\n    max-width: none;\n    min-width: none;\n  }\n}\n:host .page-container {\n  height: 100%;\n  width: 100%;\n  display: flex;\n}\n:host .page-container .left-side {\n  flex: 1 1 0;\n  overflow: hidden;\n  max-width: 27.5%;\n  min-width: 17.5rem;\n}\n:host .page-container .right-side {\n  flex: 1 1 0;\n  overflow: auto;\n  position: relative;\n}\n:host .page-container .left-side {\n  background-color: #DDD9CF;\n  display: flex;\n  flex-direction: column;\n}\n:host .page-container .left-side dwu-file-explorer {\n  flex: 1 0 0;\n}\n:host .page-container .left-side .view-tabs {\n  padding: 0 0.5rem;\n  display: flex;\n}\n:host .page-container .left-side .view-tabs .view-tab {\n  background-color: #EAE6DA;\n  width: 6rem;\n  padding: 0.25rem 0.5rem;\n  cursor: pointer;\n  text-align: center;\n  outline: none;\n  white-space: nowrap;\n  -webkit-user-select: none;\n     -moz-user-select: none;\n      -ms-user-select: none;\n          user-select: none;\n  margin: 0 0.5rem;\n  border-radius: 4px 4px 0 0;\n  border: 1px solid #8A9A5B;\n  border-bottom: none;\n  flex: 1 1 0;\n  text-align: center;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n:host .page-container .left-side .view-tabs .view-tab:hover {\n  background-color: #BAC39F;\n}\n:host .page-container .left-side .view-tabs .view-tab.active {\n  background-color: #708238;\n  color: #FCFCF9;\n}\n:host .page-container .left-side .view-tabs .view-tab .star {\n  margin-right: 0.25rem;\n}\n.clickable {\n  padding: 0.25rem;\n  margin: -0.25rem;\n}\n.star {\n  font-size: 1.25rem;\n  opacity: 0.25;\n}\n.star:hover {\n  opacity: 0.5;\n  color: #1D62C4;\n}\n.star.active {\n  opacity: 1;\n  color: #1D62C4;\n}\n.star.row-icon {\n  margin-right: 0.25rem;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9hZG1pbi9wcm9qZWN0cy9kYXd1LWhvbWUvc3JjL3N0eWxlcy9taXhpbnMuc2NzcyIsInNyYy9hcHAvY29yb25hL2Nvcm9uYS5jb21wb25lbnQuc2NzcyIsIi9Vc2Vycy9hZG1pbi9wcm9qZWN0cy9kYXd1LWhvbWUvc3JjL2FwcC9jb3JvbmEvY29yb25hLmNvbXBvbmVudC5zY3NzIiwiL1VzZXJzL2FkbWluL3Byb2plY3RzL2Rhd3UtaG9tZS9zcmMvc3R5bGVzL3ZhcmlhYmxlcy5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUdJO0VBQ0k7SUFDSSxzQkFBQTtFQ0ZWO0VER1U7SUFDSSxjQUFBO0lBQ0EsZ0JBQUE7SUFDQSxXQUFBO0lBQ0EsZUFBQTtJQUNBLGVBQUE7RUNEZDtBQUNGO0FESUk7RUFDSSxZQUFBO0VBQ0EsV0FBQTtFQUNBLGFBQUE7QUNGUjtBRElRO0VBQ0ksV0FBQTtFQUNBLGdCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxrQkFBQTtBQ0ZaO0FESVE7RUFDSSxXQUFBO0VBQ0EsY0FBQTtFQUNBLGtCQUFBO0FDRlo7QUN0QlE7RUFDSSx5QkNNTTtFRExOLGFBQUE7RUFDQSxzQkFBQTtBRHdCWjtBQ3ZCWTtFQUNJLFdBQUE7QUR5QmhCO0FDdkJZO0VBQ0ksaUJBQUE7RUFDQSxhQUFBO0FEeUJoQjtBQ3hCZ0I7RUZtRFIseUJHckRRO0VIaUNaLFdBQUE7RUFDQSx1QkFBQTtFQUNBLGVBQUE7RUFDQSxrQkFBQTtFQUNBLGFBQUE7RUFDQSxtQkFBQTtFQUNBLHlCQUFBO0tBQUEsc0JBQUE7TUFBQSxxQkFBQTtVQUFBLGlCQUFBO0VFbkNnQixnQkFBQTtFQUNBLDBCQUFBO0VBQ0EseUJBQUE7RUFDQSxtQkFBQTtFQUNBLFdBQUE7RUFDQSxrQkFBQTtFQUNBLGFBQUE7RUFDQSxtQkFBQTtFQUNBLHVCQUFBO0FEaUNwQjtBRFNJO0VBQ0kseUJHL0RPO0FGd0RmO0FEU0k7RUFDSSx5QkdwRU07RUhxRU4sY0cvRFM7QUZ3RGpCO0FDdkNvQjtFQUNJLHFCQUFBO0FEeUN4QjtBQ2pDQTtFQUNJLGdCQUFBO0VBQ0EsZ0JBQUE7QURvQ0o7QUNqQ0E7RUFDSSxrQkFBQTtFQUNBLGFBQUE7QURvQ0o7QUNuQ0k7RUFDSSxZQUFBO0VBQ0EsY0NwQkk7QUZ5RFo7QUNuQ0k7RUFDSSxVQUFBO0VBQ0EsY0N4Qkk7QUY2RFo7QUNuQ0k7RUFDSSxxQkFBQTtBRHFDUiIsImZpbGUiOiJzcmMvYXBwL2Nvcm9uYS9jb3JvbmEuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJAaW1wb3J0ICd2YXJpYWJsZXMnO1xuXG5AbWl4aW4gcmVzcG9uc2l2ZS1wYWdlIHtcbiAgICBAbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA3NTBweCkge1xuICAgICAgICBkaXYucGFnZS1jb250YWluZXIge1xuICAgICAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICAgICAgICAgIC5sZWZ0LXNpZGUge1xuICAgICAgICAgICAgICAgIGZsZXg6IDAgMCBhdXRvO1xuICAgICAgICAgICAgICAgIGhlaWdodDogMTMuMjVyZW07XG4gICAgICAgICAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgICAgICAgICAgbWF4LXdpZHRoOiBub25lO1xuICAgICAgICAgICAgICAgIG1pbi13aWR0aDogbm9uZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cbiAgICAucGFnZS1jb250YWluZXIge1xuICAgICAgICBoZWlnaHQ6IDEwMCU7XG4gICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICBkaXNwbGF5OiBmbGV4O1xuXG4gICAgICAgIC5sZWZ0LXNpZGUge1xuICAgICAgICAgICAgZmxleDogMSAxIDA7XG4gICAgICAgICAgICBvdmVyZmxvdzogaGlkZGVuO1xuICAgICAgICAgICAgbWF4LXdpZHRoOiAyNy41JTtcbiAgICAgICAgICAgIG1pbi13aWR0aDogMTcuNXJlbTtcbiAgICAgICAgfVxuICAgICAgICAucmlnaHQtc2lkZSB7XG4gICAgICAgICAgICBmbGV4OiAxIDEgMDtcbiAgICAgICAgICAgIG92ZXJmbG93OiBhdXRvO1xuICAgICAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgICAgICB9XG4gICAgfVxuXG59XG5cbkBtaXhpbiBsaWdodC1zbWFsbC1idXR0b24ge1xuICAgIEBpbmNsdWRlIGxpZ2h0LXRoZW1lO1xuICAgIEBpbmNsdWRlIGJ1dHRvbi1zbTtcbn1cblxuQG1peGluIGRhcmstYnV0dG9uIHtcbiAgICBAaW5jbHVkZSBkYXJrLXRoZW1lO1xuICAgIEBpbmNsdWRlIGJ1dHRvbi1tZDtcbn1cblxuQG1peGluIGJ1dHRvbi1zbSB7XG4gICAgd2lkdGg6IDZyZW07XG4gICAgcGFkZGluZzogMC4yNXJlbSAwLjVyZW07XG4gICAgY3Vyc29yOiBwb2ludGVyO1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICBvdXRsaW5lOiBub25lO1xuICAgIHdoaXRlLXNwYWNlOiBub3dyYXA7XG4gICAgdXNlci1zZWxlY3Q6IG5vbmU7XG59XG5cbkBtaXhpbiBidXR0b24tbWQge1xuICAgIHdpZHRoOiA4cmVtO1xuICAgIHBhZGRpbmc6IDAuNXJlbTtcbiAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIG91dGxpbmU6IG5vbmU7XG4gICAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcbiAgICB1c2VyLXNlbGVjdDogbm9uZTtcbn1cblxuQG1peGluIGxpZ2h0LXRoZW1lIHtcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogJGVnZ3NoZWxsLWRhcms7XG4gICAgJjpob3ZlciB7XG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6ICRsYXVyZWwtZ3JlZW47XG4gICAgfVxuICAgICYuYWN0aXZlIHtcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogJG9saXZlLWdyZWVuO1xuICAgICAgICBjb2xvcjogJGxpZ2h0ZXN0LWdyZWVuO1xuICAgIH1cbn1cblxuQG1peGluIGRhcmstdGhlbWUge1xuICAgIGJhY2tncm91bmQtY29sb3I6ICRibGFjay1vbGl2ZTtcbiAgICBjb2xvcjogJGxpZ2h0ZXN0LWdyZWVuO1xuICAgICY6aG92ZXIge1xuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkYXJteS1ncmVlbjtcbiAgICAgICAgY29sb3I6ICRsaWdodGVzdC1ncmVlbjtcbiAgICB9XG4gICAgJi5hY3RpdmUge1xuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkb2xpdmUtZ3JlZW47XG4gICAgICAgIGNvbG9yOiAkbGlnaHRlc3QtZ3JlZW47XG4gICAgfVxufVxuXG5AbWl4aW4gdG9wLW5hdi1wYWdlIHtcbiAgICBoZWlnaHQ6IDEwMCU7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgIC5tYWluLWNvbnRlbnQge1xuICAgICAgICBmbGV4OiAxIDEgMDtcbiAgICAgICAgb3ZlcmZsb3c6IGF1dG87XG4gICAgfVxufVxuXG5AbWl4aW4gcmVzcG9uZC10bygkbWVkaWEpIHtcbiAgQGlmICRtZWRpYSA9PSBzbWFsbCB7XG4gICAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiAkYnJlYWstc21hbGwpIHsgQGNvbnRlbnQ7IH1cbiAgfVxuICBAZWxzZSBpZiAkbWVkaWEgPT0gbWVkaXVtIHtcbiAgICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChtaW4td2lkdGg6ICRicmVhay1zbWFsbCArIDEpIGFuZCAobWF4LXdpZHRoOiAkYnJlYWstbGFyZ2UgLSAxKSB7IEBjb250ZW50OyB9XG4gIH1cbiAgQGVsc2UgaWYgJG1lZGlhID09IHdpZGUge1xuICAgIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1pbi13aWR0aDogJGJyZWFrLWxhcmdlKSB7IEBjb250ZW50OyB9XG4gIH1cbn1cbiIsIkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDc1MHB4KSB7XG4gIDpob3N0IGRpdi5wYWdlLWNvbnRhaW5lciB7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgfVxuICA6aG9zdCBkaXYucGFnZS1jb250YWluZXIgLmxlZnQtc2lkZSB7XG4gICAgZmxleDogMCAwIGF1dG87XG4gICAgaGVpZ2h0OiAxMy4yNXJlbTtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBtYXgtd2lkdGg6IG5vbmU7XG4gICAgbWluLXdpZHRoOiBub25lO1xuICB9XG59XG46aG9zdCAucGFnZS1jb250YWluZXIge1xuICBoZWlnaHQ6IDEwMCU7XG4gIHdpZHRoOiAxMDAlO1xuICBkaXNwbGF5OiBmbGV4O1xufVxuOmhvc3QgLnBhZ2UtY29udGFpbmVyIC5sZWZ0LXNpZGUge1xuICBmbGV4OiAxIDEgMDtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgbWF4LXdpZHRoOiAyNy41JTtcbiAgbWluLXdpZHRoOiAxNy41cmVtO1xufVxuOmhvc3QgLnBhZ2UtY29udGFpbmVyIC5yaWdodC1zaWRlIHtcbiAgZmxleDogMSAxIDA7XG4gIG92ZXJmbG93OiBhdXRvO1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG59XG46aG9zdCAucGFnZS1jb250YWluZXIgLmxlZnQtc2lkZSB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNEREQ5Q0Y7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG59XG46aG9zdCAucGFnZS1jb250YWluZXIgLmxlZnQtc2lkZSBkd3UtZmlsZS1leHBsb3JlciB7XG4gIGZsZXg6IDEgMCAwO1xufVxuOmhvc3QgLnBhZ2UtY29udGFpbmVyIC5sZWZ0LXNpZGUgLnZpZXctdGFicyB7XG4gIHBhZGRpbmc6IDAgMC41cmVtO1xuICBkaXNwbGF5OiBmbGV4O1xufVxuOmhvc3QgLnBhZ2UtY29udGFpbmVyIC5sZWZ0LXNpZGUgLnZpZXctdGFicyAudmlldy10YWIge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjRUFFNkRBO1xuICB3aWR0aDogNnJlbTtcbiAgcGFkZGluZzogMC4yNXJlbSAwLjVyZW07XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBvdXRsaW5lOiBub25lO1xuICB3aGl0ZS1zcGFjZTogbm93cmFwO1xuICB1c2VyLXNlbGVjdDogbm9uZTtcbiAgbWFyZ2luOiAwIDAuNXJlbTtcbiAgYm9yZGVyLXJhZGl1czogNHB4IDRweCAwIDA7XG4gIGJvcmRlcjogMXB4IHNvbGlkICM4QTlBNUI7XG4gIGJvcmRlci1ib3R0b206IG5vbmU7XG4gIGZsZXg6IDEgMSAwO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xufVxuOmhvc3QgLnBhZ2UtY29udGFpbmVyIC5sZWZ0LXNpZGUgLnZpZXctdGFicyAudmlldy10YWI6aG92ZXIge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjQkFDMzlGO1xufVxuOmhvc3QgLnBhZ2UtY29udGFpbmVyIC5sZWZ0LXNpZGUgLnZpZXctdGFicyAudmlldy10YWIuYWN0aXZlIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzcwODIzODtcbiAgY29sb3I6ICNGQ0ZDRjk7XG59XG46aG9zdCAucGFnZS1jb250YWluZXIgLmxlZnQtc2lkZSAudmlldy10YWJzIC52aWV3LXRhYiAuc3RhciB7XG4gIG1hcmdpbi1yaWdodDogMC4yNXJlbTtcbn1cblxuLmNsaWNrYWJsZSB7XG4gIHBhZGRpbmc6IDAuMjVyZW07XG4gIG1hcmdpbjogLTAuMjVyZW07XG59XG5cbi5zdGFyIHtcbiAgZm9udC1zaXplOiAxLjI1cmVtO1xuICBvcGFjaXR5OiAwLjI1O1xufVxuLnN0YXI6aG92ZXIge1xuICBvcGFjaXR5OiAwLjU7XG4gIGNvbG9yOiAjMUQ2MkM0O1xufVxuLnN0YXIuYWN0aXZlIHtcbiAgb3BhY2l0eTogMTtcbiAgY29sb3I6ICMxRDYyQzQ7XG59XG4uc3Rhci5yb3ctaWNvbiB7XG4gIG1hcmdpbi1yaWdodDogMC4yNXJlbTtcbn0iLCJAaW1wb3J0ICdtaXhpbnMnO1xuXG46aG9zdCB7XG4gICAgQGluY2x1ZGUgcmVzcG9uc2l2ZS1wYWdlO1xuICAgIC5wYWdlLWNvbnRhaW5lciB7XG4gICAgICAgIC5sZWZ0LXNpZGUge1xuICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogJGVnZ3NoZWxsLWRhcmtlcjtcbiAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgICAgICAgICAgZHd1LWZpbGUtZXhwbG9yZXIge1xuICAgICAgICAgICAgICAgIGZsZXg6IDEgMCAwO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLnZpZXctdGFicyB7XG4gICAgICAgICAgICAgICAgcGFkZGluZzogMCAwLjVyZW07XG4gICAgICAgICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICAgICAgICAudmlldy10YWIge1xuICAgICAgICAgICAgICAgICAgICBAaW5jbHVkZSBsaWdodC1zbWFsbC1idXR0b247XG4gICAgICAgICAgICAgICAgICAgIG1hcmdpbjogMCAwLjVyZW07XG4gICAgICAgICAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDRweCA0cHggMCAwO1xuICAgICAgICAgICAgICAgICAgICBib3JkZXI6IDFweCBzb2xpZCAkbW9zcy1ncmVlbjtcbiAgICAgICAgICAgICAgICAgICAgYm9yZGVyLWJvdHRvbTogbm9uZTtcbiAgICAgICAgICAgICAgICAgICAgZmxleDogMSAxIDA7XG4gICAgICAgICAgICAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICAgICAgICAgICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICAgICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgICAgICAgICAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgICAgICAgICAgICAgICAgIC5zdGFyIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIG1hcmdpbi1yaWdodDogMC4yNXJlbTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cbn1cblxuLmNsaWNrYWJsZSB7XG4gICAgcGFkZGluZzogMC4yNXJlbTtcbiAgICBtYXJnaW46IC0wLjI1cmVtO1xufVxuXG4uc3RhciB7XG4gICAgZm9udC1zaXplOiAxLjI1cmVtO1xuICAgIG9wYWNpdHk6IDAuMjU7XG4gICAgJjpob3ZlciB7XG4gICAgICAgIG9wYWNpdHk6IDAuNTtcbiAgICAgICAgY29sb3I6ICRzdGFyLWJsdWU7XG4gICAgfVxuICAgICYuYWN0aXZlIHtcbiAgICAgICAgb3BhY2l0eTogMTtcbiAgICAgICAgY29sb3I6ICRzdGFyLWJsdWU7XG4gICAgfVxuICAgICYucm93LWljb24ge1xuICAgICAgICBtYXJnaW4tcmlnaHQ6IDAuMjVyZW07XG4gICAgfVxufVxuIiwiXG4kZGFyay1ncmVlbjogIzI5MkUxMjtcbiRhcm15LWdyZWVuOiAjNEI1MzIwO1xuJG9saXZlLWdyZWVuOiAjNzA4MjM4O1xuJG1vc3MtZ3JlZW46ICM4QTlBNUI7XG4kbGF1cmVsLWdyZWVuOiAjQkFDMzlGO1xuXG4vLyBuaWNlIGZvciB0ZXh0IGFnYWluc3QgZGFyayBiYWNrZ3JvdW5kXG4kbGlnaHQtZ3JlZW46ICNGNEY3RUE7XG4kbGlnaHRlc3QtZ3JlZW46ICNGQ0ZDRjk7XG5cbi8vIFVzZWQgZm9yIGZpbGUgc2VsZWN0b3JcbiRlZ2dzaGVsbC1kYXJrZXI6ICNEREQ5Q0Y7XG4kZWdnc2hlbGwtZGFyazogI0VBRTZEQTtcbiRlZ2dzaGVsbDogI0VGRUJERjtcbiRlZ2dzaGVsbC1saWdodDogI0YyRUVFMTtcblxuLy8gZ3JheXNcbiRiYXNpY2FsbHktYmxhY2s6ICMyMDIxMjQ7XG4kYmxhY2stb2xpdmU6ICMzRjQwMzg7XG4kZ3Jhbml0ZTogIzY1NjM1RjtcbiRsaWdodGVyLWdyYXk6ICM5RDlCOTk7XG4kd2hpdGU6ICNmZmY7XG5cbiRnb2xkOiAjRDZCOTAyO1xuJHN0YXItYmx1ZTogIzFENjJDNDtcblxuJGJyZWFrLXNtYWxsOiA1NTBweDtcbiRicmVhay1tZDogODAwcHg7XG4kYnJlYWstbGFyZ2U6IDEwMjRweDtcbiJdfQ== */");

/***/ }),

/***/ "./src/app/corona/corona.component.ts":
/*!********************************************!*\
  !*** ./src/app/corona/corona.component.ts ***!
  \********************************************/
/*! exports provided: CoronaComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CoronaComponent", function() { return CoronaComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! lodash */ "./node_modules/lodash/lodash.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var _src_assets_corona_locations_json__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @src/assets/corona/locations.json */ "./src/assets/corona/locations.json");
var _src_assets_corona_locations_json__WEBPACK_IMPORTED_MODULE_4___namespace = /*#__PURE__*/__webpack_require__.t(/*! @src/assets/corona/locations.json */ "./src/assets/corona/locations.json", 1);
/* harmony import */ var _src_assets_country_names_by_code_json__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @src/assets/country-names-by-code.json */ "./src/assets/country-names-by-code.json");
var _src_assets_country_names_by_code_json__WEBPACK_IMPORTED_MODULE_5___namespace = /*#__PURE__*/__webpack_require__.t(/*! @src/assets/country-names-by-code.json */ "./src/assets/country-names-by-code.json", 1);
/* harmony import */ var _src_assets_state_names_by_code_json__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @src/assets/state-names-by-code.json */ "./src/assets/state-names-by-code.json");
var _src_assets_state_names_by_code_json__WEBPACK_IMPORTED_MODULE_6___namespace = /*#__PURE__*/__webpack_require__.t(/*! @src/assets/state-names-by-code.json */ "./src/assets/state-names-by-code.json", 1);
/* harmony import */ var _src_app_corona_services_localStorage_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @src/app/corona/services/localStorage.service */ "./src/app/corona/services/localStorage.service.ts");
/* harmony import */ var _file_explorer_index__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @file-explorer/index */ "./src/app/file-explorer/index.ts");









var CoronaComponent = /** @class */ (function () {
    /**
     * ngOnInit
     */
    function CoronaComponent(localStorageService) {
        this.localStorageService = localStorageService;
        this.fileGroup = new _file_explorer_index__WEBPACK_IMPORTED_MODULE_8__["FileGroup"]();
        this.locationsByFileId = {};
        this.fileIdsByLocation = {};
        this.favoriteFileIds = new Set();
        this.filterStr = '';
        this.disabledBarKeys = new Set();
        this.disabledNormalKeys = new Set();
        this.viewingFavorites = false;
        this.subs = new rxjs__WEBPACK_IMPORTED_MODULE_3__["Subscription"]();
        this.populateFileGroup();
        this.fileGroup.closeAllFolders();
        this.fileGroup.closedFileIds.delete(this.favoritesRoot.id);
        this.fileGroup.closedFileIds.delete(this.locationRoot.id);
        this.loadFavorites();
        this.setViewingFavorites(true);
    }
    CoronaComponent.prototype.ngOnDestroy = function () {
        this.subs.unsubscribe();
    };
    CoronaComponent.prototype.onFilterStringChange = function (filterStr) {
        if (filterStr) {
            this.setViewingFavorites(false);
        }
        this.filterStr = filterStr;
    };
    CoronaComponent.prototype.loadFavorites = function () {
        var _this = this;
        var favoriteLocations = this.localStorageService.getFavoriteLocations();
        var favoriteIds = favoriteLocations.map(function (location) { return _this.fileIdsByLocation[location]; });
        this.favoritesRoot.childIds = favoriteIds;
        this.favoriteFileIds = new Set(favoriteIds);
        if (favoriteIds.length) {
            this.fileGroup.setSelectedFileIds(new Set([favoriteIds[0]]));
        }
    };
    CoronaComponent.prototype.saveFavorites = function () {
        var _this = this;
        var locations = Array.from(this.favoriteFileIds)
            .map(function (fileId) { return _this.locationsByFileId[fileId]; });
        this.localStorageService.setFavoriteLocations(locations);
    };
    CoronaComponent.prototype.toggleFavoriteFile = function (file, event) {
        event.stopPropagation();
        if (this.favoriteFileIds.has(file.id)) {
            this.favoriteFileIds.delete(file.id);
            this.fileGroup.removeAsChild(this.favoritesRoot, file);
        }
        else {
            this.favoriteFileIds.add(file.id);
            this.fileGroup.addAsChild(this.favoritesRoot, file);
        }
        ;
        this.saveFavorites();
        this.fileGroup.flushFileChanges();
    };
    CoronaComponent.prototype.setViewingFavorites = function (viewingFavorites) {
        this.viewingFavorites = viewingFavorites;
        if (viewingFavorites) {
            this.fileGroup.setRootFile(this.favoritesRoot);
        }
        else {
            this.fileGroup.setRootFile(this.locationRoot);
        }
        this.filterStr = '';
    };
    /**
     * populateFileGroup
     * Puts data from coronaLocations into fileGroup
     */
    CoronaComponent.prototype.populateFileGroup = function () {
        this.locationRoot = this.fileGroup.createFile({ label: 'World' });
        this.favoritesRoot = this.fileGroup.createFile({ label: 'Favorites', childIds: [] });
        var nestedCoronaLocations = this.getNestedCoronaLocations(_src_assets_corona_locations_json__WEBPACK_IMPORTED_MODULE_4__);
        // setFileGroup batches file creations, make sure to flush
        this.setFileGroup(this.locationRoot, nestedCoronaLocations);
        this.fileGroup.flush();
    };
    /**
     * getNestedCoronaLocations
     * This returns a nested format that represents the final files
     * @param {string[]} coronaLocations
     */
    CoronaComponent.prototype.getNestedCoronaLocations = function (coronaLocations) {
        var _this = this;
        var nestedCoronaLocations = {};
        // set nestedCoronaLocations from the leaves
        // if there is a location with the same name as a folder, create summary
        coronaLocations.sort(function (a, b) { return b.length - a.length; });
        coronaLocations.forEach(function (coronaLocation) {
            var splitLocation = _this.decorateAndSplitLocation(coronaLocation);
            if (Object(lodash__WEBPACK_IMPORTED_MODULE_2__["get"])(nestedCoronaLocations, splitLocation)) {
                var folderName = Object(lodash__WEBPACK_IMPORTED_MODULE_2__["last"])(splitLocation);
                splitLocation.push(folderName + " Summary");
            }
            Object(lodash__WEBPACK_IMPORTED_MODULE_2__["set"])(nestedCoronaLocations, splitLocation, coronaLocation);
        });
        return nestedCoronaLocations;
    };
    /**
     * decorateAndSplitLocation
     * Replaces country and state codes
     * @param {string} coronaLocation
     */
    CoronaComponent.prototype.decorateAndSplitLocation = function (coronaLocation) {
        var splitLocation = coronaLocation.split(', ').reverse();
        splitLocation[0] = _src_assets_country_names_by_code_json__WEBPACK_IMPORTED_MODULE_5__[splitLocation[0]] || splitLocation[0];
        if (splitLocation.length > 1 && splitLocation[0] === 'United States') {
            splitLocation[1] = _src_assets_state_names_by_code_json__WEBPACK_IMPORTED_MODULE_6__[splitLocation[1]] || splitLocation[1];
        }
        return splitLocation;
    };
    /**
     * setFileGroup
     * Uses the nestedLocations to create files in this.fileGroup
     * Also sets locationsByFileId for referencing files later on.
     * @param {File} file
     * @param {any}  nestedLocations
     */
    CoronaComponent.prototype.setFileGroup = function (file, nestedLocations) {
        var _this = this;
        if (Object(lodash__WEBPACK_IMPORTED_MODULE_2__["isString"])(nestedLocations)) {
            this.locationsByFileId[file.id] = nestedLocations;
            this.fileIdsByLocation[nestedLocations] = file.id;
            return;
        }
        var locations = Object.keys(nestedLocations).sort();
        Object(lodash__WEBPACK_IMPORTED_MODULE_2__["each"])(locations, function (location) {
            // batchCreateFile is more performant, make sure to flush
            var childNode = _this.fileGroup.batchCreateFile({
                label: location,
            });
            _this.fileGroup.batchAddAsChild(file, childNode);
            _this.setFileGroup(childNode, nestedLocations[location]);
        });
    };
    /**
     * getSelectedFileId
     * @return {string}
     */
    CoronaComponent.prototype.getSelectedFileId = function () {
        var selectedFileIds = Array.from(this.fileGroup.selectedFileIds || []);
        return (selectedFileIds.length === 1) && selectedFileIds[0];
    };
    CoronaComponent.ctorParameters = function () { return [
        { type: _src_app_corona_services_localStorage_service__WEBPACK_IMPORTED_MODULE_7__["LocalStorageService"] }
    ]; };
    CoronaComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'dwu-corona',
            template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./corona.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/corona/corona.component.html")).default,
            styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./corona.component.scss */ "./src/app/corona/corona.component.scss")).default]
        })
    ], CoronaComponent);
    return CoronaComponent;
}());



/***/ }),

/***/ "./src/app/corona/corona.module.ts":
/*!*****************************************!*\
  !*** ./src/app/corona/corona.module.ts ***!
  \*****************************************/
/*! exports provided: CoronaModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CoronaModule", function() { return CoronaModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _src_app_app_routing_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @src/app/app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm5/animations.js");
/* harmony import */ var _src_app_corona_corona_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @src/app/corona/corona.component */ "./src/app/corona/corona.component.ts");
/* harmony import */ var _src_app_corona_corona_file_viewer_corona_file_viewer_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @src/app/corona/corona-file-viewer/corona-file-viewer.component */ "./src/app/corona/corona-file-viewer/corona-file-viewer.component.ts");
/* harmony import */ var _src_app_corona_corona_routes__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @src/app/corona/corona.routes */ "./src/app/corona/corona.routes.ts");
/* harmony import */ var fuzz_demo_app__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! fuzz-demo-app */ "./node_modules/fuzz-demo-app/dist/esm2015/fuzz-demo-app.js");
/* harmony import */ var _src_app_common_common_module__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @src/app/common/common.module */ "./src/app/common/common.module.ts");
/* harmony import */ var _src_app_file_explorer_file_explorer_module__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @src/app/file-explorer/file-explorer.module */ "./src/app/file-explorer/file-explorer.module.ts");
/* harmony import */ var _services_corona_service__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./services/corona.service */ "./src/app/corona/services/corona.service.ts");
/* harmony import */ var _services_localStorage_service__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./services/localStorage.service */ "./src/app/corona/services/localStorage.service.ts");
/* harmony import */ var _corona_dashboard_corona_dashboard_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./corona-dashboard/corona-dashboard.component */ "./src/app/corona/corona-dashboard/corona-dashboard.component.ts");

















var CoronaModule = /** @class */ (function () {
    function CoronaModule() {
    }
    CoronaModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            imports: [
                _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forChild(_src_app_corona_corona_routes__WEBPACK_IMPORTED_MODULE_10__["CoronaRoutes"]),
                _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"],
                fuzz_demo_app__WEBPACK_IMPORTED_MODULE_11__["AppModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HttpClientModule"],
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
                _src_app_app_routing_module__WEBPACK_IMPORTED_MODULE_6__["AppRoutingModule"],
                _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_7__["NoopAnimationsModule"],
                _src_app_common_common_module__WEBPACK_IMPORTED_MODULE_12__["CommonModule"],
                _src_app_file_explorer_file_explorer_module__WEBPACK_IMPORTED_MODULE_13__["FileExplorerModule"],
            ],
            declarations: [
                _src_app_corona_corona_component__WEBPACK_IMPORTED_MODULE_8__["CoronaComponent"],
                _src_app_corona_corona_file_viewer_corona_file_viewer_component__WEBPACK_IMPORTED_MODULE_9__["CoronaFileViewerComponent"],
                _corona_dashboard_corona_dashboard_component__WEBPACK_IMPORTED_MODULE_16__["CoronaDashboardComponent"],
            ],
            providers: [
                _services_corona_service__WEBPACK_IMPORTED_MODULE_14__["CoronaService"],
                _services_localStorage_service__WEBPACK_IMPORTED_MODULE_15__["LocalStorageService"],
            ],
        })
    ], CoronaModule);
    return CoronaModule;
}());



/***/ }),

/***/ "./src/app/corona/corona.routes.ts":
/*!*****************************************!*\
  !*** ./src/app/corona/corona.routes.ts ***!
  \*****************************************/
/*! exports provided: CoronaRoutes */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CoronaRoutes", function() { return CoronaRoutes; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _src_app_corona_corona_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @src/app/corona/corona.component */ "./src/app/corona/corona.component.ts");


var CoronaRoutes = [
    {
        path: '',
        component: _src_app_corona_corona_component__WEBPACK_IMPORTED_MODULE_1__["CoronaComponent"],
    },
    {
        path: '**',
        redirectTo: '',
    },
];


/***/ }),

/***/ "./src/app/corona/models/corona-data-extractor.model.ts":
/*!**************************************************************!*\
  !*** ./src/app/corona/models/corona-data-extractor.model.ts ***!
  \**************************************************************/
/*! exports provided: CoronaDataExtractor */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CoronaDataExtractor", function() { return CoronaDataExtractor; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! lodash */ "./node_modules/lodash/lodash.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _normal_keys_enum__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./normal-keys.enum */ "./src/app/corona/models/normal-keys.enum.ts");
/* harmony import */ var _corona_keys_enum__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./corona-keys.enum */ "./src/app/corona/models/corona-keys.enum.ts");




var CoronaDataExtractor = /** @class */ (function () {
    function CoronaDataExtractor() {
    }
    /**
     * getDateFromStr
     * Safari has troubles dealing with new Date("1-1-20")
     * @param {string} dateStr
     */
    CoronaDataExtractor.prototype.getDateFromStr = function (dateStr) {
        var splitDateStr = dateStr.split('-').map(Number);
        return new Date(splitDateStr[0], splitDateStr[1] - 1, splitDateStr[2]);
    };
    CoronaDataExtractor.prototype.clean = function (file) {
        var _this = this;
        var cleanData = [];
        // const dates = Object.keys(file.dates);
        var columns = new Set();
        var dateStrs = [];
        Object(lodash__WEBPACK_IMPORTED_MODULE_1__["each"])(file.dates, function (row, date) {
            dateStrs.push(date);
            Object.keys(row).forEach(function (columnName) {
                columns.add(columnName);
            });
        });
        var sortedDateStrs = Object(lodash__WEBPACK_IMPORTED_MODULE_1__["sortBy"])(dateStrs, function (dateStr) { return +_this.getDateFromStr(dateStr); });
        var previousPoint = {
            cases: sortedDateStrs[0].cases || 0,
            new: sortedDateStrs[0].cases || 0,
            deaths: sortedDateStrs[0].deaths || 0,
            recovered: sortedDateStrs[0].recovered || 0,
        };
        sortedDateStrs.forEach(function (dateStr) {
            var _a;
            var point = file.dates[dateStr];
            point[_corona_keys_enum__WEBPACK_IMPORTED_MODULE_3__["CoronaKeys"].CASES] = point[_corona_keys_enum__WEBPACK_IMPORTED_MODULE_3__["CoronaKeys"].CASES] || 0;
            point[_corona_keys_enum__WEBPACK_IMPORTED_MODULE_3__["CoronaKeys"].DEATHS] = point[_corona_keys_enum__WEBPACK_IMPORTED_MODULE_3__["CoronaKeys"].DEATHS] || 0;
            point[_corona_keys_enum__WEBPACK_IMPORTED_MODULE_3__["CoronaKeys"].RECOVERED] = point[_corona_keys_enum__WEBPACK_IMPORTED_MODULE_3__["CoronaKeys"].RECOVERED] || 0;
            var cleanPoint = (_a = {
                    dateStr: dateStr,
                    date: _this.getDateFromStr(dateStr),
                    timestamp: +_this.getDateFromStr(dateStr)
                },
                _a[_corona_keys_enum__WEBPACK_IMPORTED_MODULE_3__["CoronaKeys"].CASES] = Math.max(point[_corona_keys_enum__WEBPACK_IMPORTED_MODULE_3__["CoronaKeys"].CASES], previousPoint[_corona_keys_enum__WEBPACK_IMPORTED_MODULE_3__["CoronaKeys"].CASES]),
                _a[_corona_keys_enum__WEBPACK_IMPORTED_MODULE_3__["CoronaKeys"].DEATHS] = Math.max(point[_corona_keys_enum__WEBPACK_IMPORTED_MODULE_3__["CoronaKeys"].DEATHS], previousPoint[_corona_keys_enum__WEBPACK_IMPORTED_MODULE_3__["CoronaKeys"].DEATHS]),
                _a[_corona_keys_enum__WEBPACK_IMPORTED_MODULE_3__["CoronaKeys"].RECOVERED] = Math.max(point[_corona_keys_enum__WEBPACK_IMPORTED_MODULE_3__["CoronaKeys"].RECOVERED], previousPoint[_corona_keys_enum__WEBPACK_IMPORTED_MODULE_3__["CoronaKeys"].RECOVERED]),
                _a);
            cleanPoint[_corona_keys_enum__WEBPACK_IMPORTED_MODULE_3__["CoronaKeys"].NEW] = cleanPoint[_corona_keys_enum__WEBPACK_IMPORTED_MODULE_3__["CoronaKeys"].CASES] - previousPoint[_corona_keys_enum__WEBPACK_IMPORTED_MODULE_3__["CoronaKeys"].CASES];
            cleanPoint[_corona_keys_enum__WEBPACK_IMPORTED_MODULE_3__["CoronaKeys"].ACTIVE] = cleanPoint[_corona_keys_enum__WEBPACK_IMPORTED_MODULE_3__["CoronaKeys"].CASES] - cleanPoint[_corona_keys_enum__WEBPACK_IMPORTED_MODULE_3__["CoronaKeys"].NEW] - cleanPoint[_corona_keys_enum__WEBPACK_IMPORTED_MODULE_3__["CoronaKeys"].DEATHS] - cleanPoint[_corona_keys_enum__WEBPACK_IMPORTED_MODULE_3__["CoronaKeys"].RECOVERED];
            cleanPoint[_corona_keys_enum__WEBPACK_IMPORTED_MODULE_3__["CoronaKeys"].ACTIVE] = Math.max(0, cleanPoint[_corona_keys_enum__WEBPACK_IMPORTED_MODULE_3__["CoronaKeys"].ACTIVE]);
            cleanData.push(cleanPoint);
            previousPoint = cleanPoint;
        });
        // if there is a hole in the data, this removes everything before that hole
        var spottyDataClipIndex = 0;
        var overOneDay = (1000 * 60 * 60 * 24) * 1.2;
        for (var i = 1; i < cleanData.length; i++) {
            var point = cleanData[i];
            var previousPoint_1 = cleanData[i - 1];
            if (!previousPoint_1) {
                break;
            }
            if ((previousPoint_1.timestamp + overOneDay) < point.timestamp) {
                spottyDataClipIndex = i;
            }
        }
        var unspottyData = cleanData.slice(spottyDataClipIndex);
        // if there's a bunch leading 0's in the data, this removes them except the first 0
        var firstNonZeroIndex = unspottyData.findIndex(function (point) { return point[_corona_keys_enum__WEBPACK_IMPORTED_MODULE_3__["CoronaKeys"].CASES] !== 0; });
        var clipIndex = Math.max(0, firstNonZeroIndex - 1);
        var oneLeadingZeroData = unspottyData.slice(clipIndex);
        var boringDataClipIndex = 0;
        var lastCases = Object(lodash__WEBPACK_IMPORTED_MODULE_1__["last"])(oneLeadingZeroData).cases;
        for (var i = 1; i < oneLeadingZeroData.length; i++) {
            var point = oneLeadingZeroData[i];
            if ((point.cases < 100) && ((point.cases / lastCases) < 0.01)) {
                boringDataClipIndex = i;
            }
            else {
                break;
            }
        }
        return oneLeadingZeroData.slice(boringDataClipIndex);
        // return oneLeadingZeroData;
    };
    CoronaDataExtractor.prototype.getNormalizedData = function (cleanData, population) {
        var _a;
        if (population === void 0) { population = 1; }
        var normalizedData = [];
        for (var i = 0; i < cleanData.length; i++) {
            var cleanPoint = cleanData[i];
            var previousCases = cleanPoint.cases - cleanPoint.new;
            var r = previousCases
                ? (cleanPoint.new / previousCases)
                : 1;
            var normalizedPoint = (_a = {
                    dateStr: cleanPoint.dateStr,
                    date: cleanPoint.date,
                    timestamp: cleanPoint.timestamp
                },
                _a[_normal_keys_enum__WEBPACK_IMPORTED_MODULE_2__["NormalKeys"].R] = r,
                _a[_normal_keys_enum__WEBPACK_IMPORTED_MODULE_2__["NormalKeys"].CASES] = (cleanPoint.cases / population) * 1000000,
                _a[_normal_keys_enum__WEBPACK_IMPORTED_MODULE_2__["NormalKeys"].NEW] = (cleanPoint.new / population) * 1000000,
                _a[_normal_keys_enum__WEBPACK_IMPORTED_MODULE_2__["NormalKeys"].ACTIVE] = (cleanPoint.active / population) * 1000000,
                _a[_normal_keys_enum__WEBPACK_IMPORTED_MODULE_2__["NormalKeys"].RECOVERED] = (cleanPoint.recovered / population) * 1000000,
                _a[_normal_keys_enum__WEBPACK_IMPORTED_MODULE_2__["NormalKeys"].DEATHS] = (cleanPoint.deaths / population) * 1000000,
                _a);
            normalizedData.push(normalizedPoint);
        }
        for (var i = 0; i < cleanData.length; i++) {
            var point = cleanData[i];
            var pPreviousPoint = cleanData[i - 2] || { cases: 0, new: 0 };
            var previousPoint = cleanData[i - 1] || { cases: 0, new: 0 };
            var nextPoint = cleanData[i + 1] || { cases: 0, new: 0 };
            var totalCases = pPreviousPoint.cases + previousPoint.cases + point.cases;
            var totalNew = previousPoint.new + point.new + nextPoint.new;
            var newR = totalCases ? (totalNew / totalCases) : 1;
            var clippedR = Math.min(newR, 1);
            normalizedData[i][_normal_keys_enum__WEBPACK_IMPORTED_MODULE_2__["NormalKeys"].R_AVG] = clippedR;
        }
        return normalizedData;
    };
    return CoronaDataExtractor;
}());



/***/ }),

/***/ "./src/app/corona/models/corona-keys.enum.ts":
/*!***************************************************!*\
  !*** ./src/app/corona/models/corona-keys.enum.ts ***!
  \***************************************************/
/*! exports provided: CoronaKeys */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CoronaKeys", function() { return CoronaKeys; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");

var CoronaKeys;
(function (CoronaKeys) {
    CoronaKeys["CASES"] = "cases";
    CoronaKeys["NEW"] = "new";
    CoronaKeys["ACTIVE"] = "active";
    CoronaKeys["RECOVERED"] = "recovered";
    CoronaKeys["DEATHS"] = "deaths";
})(CoronaKeys || (CoronaKeys = {}));
;


/***/ }),

/***/ "./src/app/corona/models/index.ts":
/*!****************************************!*\
  !*** ./src/app/corona/models/index.ts ***!
  \****************************************/
/*! exports provided: CoronaDataExtractor, CoronaKeys, NormalKeys */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _corona_data_extractor_model__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./corona-data-extractor.model */ "./src/app/corona/models/corona-data-extractor.model.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "CoronaDataExtractor", function() { return _corona_data_extractor_model__WEBPACK_IMPORTED_MODULE_1__["CoronaDataExtractor"]; });

/* harmony import */ var _corona_keys_enum__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./corona-keys.enum */ "./src/app/corona/models/corona-keys.enum.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "CoronaKeys", function() { return _corona_keys_enum__WEBPACK_IMPORTED_MODULE_2__["CoronaKeys"]; });

/* harmony import */ var _normal_keys_enum__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./normal-keys.enum */ "./src/app/corona/models/normal-keys.enum.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "NormalKeys", function() { return _normal_keys_enum__WEBPACK_IMPORTED_MODULE_3__["NormalKeys"]; });







/***/ }),

/***/ "./src/app/corona/models/normal-keys.enum.ts":
/*!***************************************************!*\
  !*** ./src/app/corona/models/normal-keys.enum.ts ***!
  \***************************************************/
/*! exports provided: NormalKeys */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NormalKeys", function() { return NormalKeys; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");

var NormalKeys;
(function (NormalKeys) {
    NormalKeys["CASES"] = "cases/mil";
    NormalKeys["R"] = "r";
    NormalKeys["R_AVG"] = "r (3 day avg)";
    NormalKeys["NEW"] = "new/mil";
    NormalKeys["ACTIVE"] = "active/mil";
    NormalKeys["RECOVERED"] = "recovered/mil";
    NormalKeys["DEATHS"] = "deaths/mil";
})(NormalKeys || (NormalKeys = {}));
;


/***/ }),

/***/ "./src/app/corona/services/corona.service.ts":
/*!***************************************************!*\
  !*** ./src/app/corona/services/corona.service.ts ***!
  \***************************************************/
/*! exports provided: CoronaService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CoronaService", function() { return CoronaService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");



var CoronaService = /** @class */ (function () {
    function CoronaService(http) {
        this.http = http;
    }
    CoronaService.prototype.getCoronaFileUrl = function (location) {
        return "/assets/corona/by-location/" + location + ".json";
    };
    CoronaService.prototype.getCoronaFileByLocation = function (location) {
        return this.http.get(this.getCoronaFileUrl(location));
    };
    CoronaService.ctorParameters = function () { return [
        { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }
    ]; };
    CoronaService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])()
    ], CoronaService);
    return CoronaService;
}());



/***/ }),

/***/ "./src/app/corona/services/localStorage.service.ts":
/*!*********************************************************!*\
  !*** ./src/app/corona/services/localStorage.service.ts ***!
  \*********************************************************/
/*! exports provided: LocalStorageService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LocalStorageService", function() { return LocalStorageService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var LocalStorageService = /** @class */ (function () {
    function LocalStorageService() {
    }
    LocalStorageService.prototype.setFavoriteLocations = function (locations) {
        if (locations === void 0) { locations = []; }
        var locationsStr = JSON.stringify(locations);
        localStorage.setItem('favorites', locationsStr);
    };
    LocalStorageService.prototype.getFavoriteLocations = function () {
        var locationsStr = localStorage.getItem('favorites') || '[]';
        var locations = JSON.parse(locationsStr);
        return locations.length ? locations : [
            'USA',
            'CA, USA',
            'Santa Clara County, CA, USA',
            'ITA',
        ];
    };
    LocalStorageService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])()
    ], LocalStorageService);
    return LocalStorageService;
}());



/***/ }),

/***/ "./src/app/file-explorer/file-explorer.component.scss":
/*!************************************************************!*\
  !*** ./src/app/file-explorer/file-explorer.component.scss ***!
  \************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (":host {\n  background-color: #DDD9CF;\n  overflow: auto;\n  overflow-x: hidden;\n  display: flex;\n}\n\n.viewport {\n  flex: 1 1 0;\n  width: 100%;\n  overflow-x: hidden;\n}\n\n.file-row {\n  -webkit-user-select: none;\n     -moz-user-select: none;\n      -ms-user-select: none;\n          user-select: none;\n  height: 1.5rem;\n  transition: height 75ms linear, color 75ms linear;\n}\n\n.file-row.odd {\n  background-color: #F2EEE1;\n}\n\n.file-row.even {\n  background-color: #EAE6DA;\n}\n\n.file-row.selected {\n  background-color: #708238;\n  color: #FCFCF9;\n  transition: height 75ms linear;\n}\n\n.file-row:hover:not(.selected):not(.dragging) {\n  background-color: #BAC39F;\n}\n\n.file-row.being-dragged {\n  color: rgba(0, 0, 0, 0);\n  border: 2px dashed #4B5320;\n  border-radius: 5px;\n}\n\n.file-row.hidden {\n  height: 0;\n  padding: 0;\n  color: rgba(0, 0, 0, 0);\n}\n\n.file-row .dragula-container {\n  display: flex;\n  align-items: center;\n  overflow: hidden;\n  width: 100%;\n  height: 100%;\n}\n\n.file-row .dragula-container > * {\n  flex: 0 0 auto;\n}\n\n.file-row .dragula-container .material-icons {\n  -webkit-user-select: none;\n     -moz-user-select: none;\n      -ms-user-select: none;\n          user-select: none;\n  font-size: 1rem;\n}\n\n.file-row .dragula-container .material-icons.folder {\n  margin-left: 0.25rem;\n}\n\n.file-row .dragula-container .material-icons.arrow {\n  padding: 0.25rem;\n  margin: -0.25rem;\n  transition: transform 75ms linear;\n  transform: rotate(90deg);\n}\n\n.file-row .dragula-container .material-icons.arrow.closed {\n  transform: rotate(0);\n}\n\n.file-row .dragula-container .space-maker {\n  width: 1.25rem;\n}\n\n.file-row .dragula-container .file-label {\n  flex: 1 1 0;\n  margin-left: 0.25rem;\n  white-space: nowrap;\n  overflow: hidden;\n  text-overflow: ellipsis;\n}\n\n.clickable {\n  cursor: pointer;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9hZG1pbi9wcm9qZWN0cy9kYXd1LWhvbWUvc3JjL2FwcC9maWxlLWV4cGxvcmVyL2ZpbGUtZXhwbG9yZXIuY29tcG9uZW50LnNjc3MiLCIvVXNlcnMvYWRtaW4vcHJvamVjdHMvZGF3dS1ob21lL3NyYy9zdHlsZXMvdmFyaWFibGVzLnNjc3MiLCJzcmMvYXBwL2ZpbGUtZXhwbG9yZXIvZmlsZS1leHBsb3Jlci5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFHQTtFQUNJLHlCQ1FjO0VEUGQsY0FBQTtFQUNBLGtCQUFBO0VBQ0EsYUFBQTtBRUZKOztBRktBO0VBQ0ksV0FBQTtFQUNBLFdBQUE7RUFDQSxrQkFBQTtBRUZKOztBRktBO0VBSUkseUJBQUE7S0FBQSxzQkFBQTtNQUFBLHFCQUFBO1VBQUEsaUJBQUE7RUFFQSxjQUFBO0VBQ0EsaURBQUE7QUVOSjs7QUZPSTtFQUNJLHlCQ1ZTO0FDS2pCOztBRk9JO0VBQ0kseUJDZlE7QUNVaEI7O0FGT0k7RUFDSSx5QkM1Qk07RUQ2Qk4sY0N2QlM7RUR3QlQsOEJBQUE7QUVMUjs7QUZPSTtFQUNJLHlCQy9CTztBQzBCZjs7QUZPSTtFQUNJLHVCQUFBO0VBQ0EsMEJBQUE7RUFDQSxrQkFBQTtBRUxSOztBRk9JO0VBQ0ksU0FBQTtFQUNBLFVBQUE7RUFDQSx1QkFBQTtBRUxSOztBRlFJO0VBQ0ksYUFBQTtFQUNBLG1CQUFBO0VBQ0EsZ0JBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtBRU5SOztBRk9RO0VBQ0ksY0FBQTtBRUxaOztBRk9RO0VBRUkseUJBQUE7S0FBQSxzQkFBQTtNQUFBLHFCQUFBO1VBQUEsaUJBQUE7RUFDQSxlQUFBO0FFTlo7O0FGT1k7RUFDSSxvQkFBQTtBRUxoQjs7QUZPWTtFQUVJLGdCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxpQ0FBQTtFQUNBLHdCQUFBO0FFTmhCOztBRk9nQjtFQUNJLG9CQUFBO0FFTHBCOztBRlNRO0VBQ0ksY0FBQTtBRVBaOztBRlNRO0VBQ0ksV0FBQTtFQUNBLG9CQUFBO0VBQ0EsbUJBQUE7RUFDQSxnQkFBQTtFQUNBLHVCQUFBO0FFUFo7O0FGWUE7RUFDSSxlQUFBO0FFVEoiLCJmaWxlIjoic3JjL2FwcC9maWxlLWV4cGxvcmVyL2ZpbGUtZXhwbG9yZXIuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJcbkBpbXBvcnQgJ21peGlucyc7XG5cbjpob3N0IHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkZWdnc2hlbGwtZGFya2VyO1xuICAgIG92ZXJmbG93OiBhdXRvO1xuICAgIG92ZXJmbG93LXg6IGhpZGRlbjtcbiAgICBkaXNwbGF5OiBmbGV4O1xufVxuXG4udmlld3BvcnQge1xuICAgIGZsZXg6IDEgMSAwO1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIG92ZXJmbG93LXg6IGhpZGRlbjtcbn1cblxuLmZpbGUtcm93IHtcbiAgICAvLyBkaXNwbGF5OiBmbGV4O1xuICAgIC8vIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgLy8gb3ZlcmZsb3cteTogaGlkZGVuO1xuICAgIHVzZXItc2VsZWN0OiBub25lO1xuXG4gICAgaGVpZ2h0OiAxLjVyZW07XG4gICAgdHJhbnNpdGlvbjogaGVpZ2h0IDc1bXMgbGluZWFyLCBjb2xvciA3NW1zIGxpbmVhcjtcbiAgICAmLm9kZCB7XG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6ICRlZ2dzaGVsbC1saWdodDtcbiAgICB9XG4gICAgJi5ldmVuIHtcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogJGVnZ3NoZWxsLWRhcms7XG4gICAgfVxuICAgICYuc2VsZWN0ZWQge1xuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkb2xpdmUtZ3JlZW47XG4gICAgICAgIGNvbG9yOiAkbGlnaHRlc3QtZ3JlZW47XG4gICAgICAgIHRyYW5zaXRpb246IGhlaWdodCA3NW1zIGxpbmVhcjtcbiAgICB9XG4gICAgJjpob3Zlcjpub3QoLnNlbGVjdGVkKTpub3QoLmRyYWdnaW5nKSB7XG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6ICRsYXVyZWwtZ3JlZW47XG4gICAgfVxuICAgICYuYmVpbmctZHJhZ2dlZCB7XG4gICAgICAgIGNvbG9yOiByZ2JhKDAsMCwwLDApO1xuICAgICAgICBib3JkZXI6IDJweCBkYXNoZWQgJGFybXktZ3JlZW47XG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDVweDtcbiAgICB9XG4gICAgJi5oaWRkZW4ge1xuICAgICAgICBoZWlnaHQ6IDA7XG4gICAgICAgIHBhZGRpbmc6IDA7XG4gICAgICAgIGNvbG9yOiByZ2JhKDAsMCwwLDApO1xuICAgIH1cblxuICAgIC5kcmFndWxhLWNvbnRhaW5lciB7XG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICAgIG92ZXJmbG93OiBoaWRkZW47XG4gICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICBoZWlnaHQ6IDEwMCU7XG4gICAgICAgID4gKiB7XG4gICAgICAgICAgICBmbGV4OiAwIDAgYXV0bztcbiAgICAgICAgfVxuICAgICAgICAubWF0ZXJpYWwtaWNvbnMge1xuICAgICAgICAgICAgLy8gZmxleDogMCAwIGF1dG87XG4gICAgICAgICAgICB1c2VyLXNlbGVjdDogbm9uZTtcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMXJlbTtcbiAgICAgICAgICAgICYuZm9sZGVyIHtcbiAgICAgICAgICAgICAgICBtYXJnaW4tbGVmdDogMC4yNXJlbTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgICYuYXJyb3cge1xuICAgICAgICAgICAgICAgIC8vIG1ha2UgY2xpY2sgdGFyZ2V0IGJpZ2dlclxuICAgICAgICAgICAgICAgIHBhZGRpbmc6IDAuMjVyZW07XG4gICAgICAgICAgICAgICAgbWFyZ2luOiAtMC4yNXJlbTtcbiAgICAgICAgICAgICAgICB0cmFuc2l0aW9uOiB0cmFuc2Zvcm0gNzVtcyBsaW5lYXI7XG4gICAgICAgICAgICAgICAgdHJhbnNmb3JtOiByb3RhdGUoOTBkZWcpO1xuICAgICAgICAgICAgICAgICYuY2xvc2VkIHtcbiAgICAgICAgICAgICAgICAgICAgdHJhbnNmb3JtOiByb3RhdGUoMCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIC5zcGFjZS1tYWtlciB7XG4gICAgICAgICAgICB3aWR0aDogMS4yNXJlbTtcbiAgICAgICAgfVxuICAgICAgICAuZmlsZS1sYWJlbCB7XG4gICAgICAgICAgICBmbGV4OiAxIDEgMDtcbiAgICAgICAgICAgIG1hcmdpbi1sZWZ0OiAwLjI1cmVtO1xuICAgICAgICAgICAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcbiAgICAgICAgICAgIG92ZXJmbG93OiBoaWRkZW47XG4gICAgICAgICAgICB0ZXh0LW92ZXJmbG93OiBlbGxpcHNpcztcbiAgICAgICAgfVxuICAgIH1cbn1cblxuLmNsaWNrYWJsZSB7XG4gICAgY3Vyc29yOiBwb2ludGVyO1xufSIsIlxuJGRhcmstZ3JlZW46ICMyOTJFMTI7XG4kYXJteS1ncmVlbjogIzRCNTMyMDtcbiRvbGl2ZS1ncmVlbjogIzcwODIzODtcbiRtb3NzLWdyZWVuOiAjOEE5QTVCO1xuJGxhdXJlbC1ncmVlbjogI0JBQzM5RjtcblxuLy8gbmljZSBmb3IgdGV4dCBhZ2FpbnN0IGRhcmsgYmFja2dyb3VuZFxuJGxpZ2h0LWdyZWVuOiAjRjRGN0VBO1xuJGxpZ2h0ZXN0LWdyZWVuOiAjRkNGQ0Y5O1xuXG4vLyBVc2VkIGZvciBmaWxlIHNlbGVjdG9yXG4kZWdnc2hlbGwtZGFya2VyOiAjREREOUNGO1xuJGVnZ3NoZWxsLWRhcms6ICNFQUU2REE7XG4kZWdnc2hlbGw6ICNFRkVCREY7XG4kZWdnc2hlbGwtbGlnaHQ6ICNGMkVFRTE7XG5cbi8vIGdyYXlzXG4kYmFzaWNhbGx5LWJsYWNrOiAjMjAyMTI0O1xuJGJsYWNrLW9saXZlOiAjM0Y0MDM4O1xuJGdyYW5pdGU6ICM2NTYzNUY7XG4kbGlnaHRlci1ncmF5OiAjOUQ5Qjk5O1xuJHdoaXRlOiAjZmZmO1xuXG4kZ29sZDogI0Q2QjkwMjtcbiRzdGFyLWJsdWU6ICMxRDYyQzQ7XG5cbiRicmVhay1zbWFsbDogNTUwcHg7XG4kYnJlYWstbWQ6IDgwMHB4O1xuJGJyZWFrLWxhcmdlOiAxMDI0cHg7XG4iLCI6aG9zdCB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNEREQ5Q0Y7XG4gIG92ZXJmbG93OiBhdXRvO1xuICBvdmVyZmxvdy14OiBoaWRkZW47XG4gIGRpc3BsYXk6IGZsZXg7XG59XG5cbi52aWV3cG9ydCB7XG4gIGZsZXg6IDEgMSAwO1xuICB3aWR0aDogMTAwJTtcbiAgb3ZlcmZsb3cteDogaGlkZGVuO1xufVxuXG4uZmlsZS1yb3cge1xuICB1c2VyLXNlbGVjdDogbm9uZTtcbiAgaGVpZ2h0OiAxLjVyZW07XG4gIHRyYW5zaXRpb246IGhlaWdodCA3NW1zIGxpbmVhciwgY29sb3IgNzVtcyBsaW5lYXI7XG59XG4uZmlsZS1yb3cub2RkIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI0YyRUVFMTtcbn1cbi5maWxlLXJvdy5ldmVuIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI0VBRTZEQTtcbn1cbi5maWxlLXJvdy5zZWxlY3RlZCB7XG4gIGJhY2tncm91bmQtY29sb3I6ICM3MDgyMzg7XG4gIGNvbG9yOiAjRkNGQ0Y5O1xuICB0cmFuc2l0aW9uOiBoZWlnaHQgNzVtcyBsaW5lYXI7XG59XG4uZmlsZS1yb3c6aG92ZXI6bm90KC5zZWxlY3RlZCk6bm90KC5kcmFnZ2luZykge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjQkFDMzlGO1xufVxuLmZpbGUtcm93LmJlaW5nLWRyYWdnZWQge1xuICBjb2xvcjogcmdiYSgwLCAwLCAwLCAwKTtcbiAgYm9yZGVyOiAycHggZGFzaGVkICM0QjUzMjA7XG4gIGJvcmRlci1yYWRpdXM6IDVweDtcbn1cbi5maWxlLXJvdy5oaWRkZW4ge1xuICBoZWlnaHQ6IDA7XG4gIHBhZGRpbmc6IDA7XG4gIGNvbG9yOiByZ2JhKDAsIDAsIDAsIDApO1xufVxuLmZpbGUtcm93IC5kcmFndWxhLWNvbnRhaW5lciB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIG92ZXJmbG93OiBoaWRkZW47XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDEwMCU7XG59XG4uZmlsZS1yb3cgLmRyYWd1bGEtY29udGFpbmVyID4gKiB7XG4gIGZsZXg6IDAgMCBhdXRvO1xufVxuLmZpbGUtcm93IC5kcmFndWxhLWNvbnRhaW5lciAubWF0ZXJpYWwtaWNvbnMge1xuICB1c2VyLXNlbGVjdDogbm9uZTtcbiAgZm9udC1zaXplOiAxcmVtO1xufVxuLmZpbGUtcm93IC5kcmFndWxhLWNvbnRhaW5lciAubWF0ZXJpYWwtaWNvbnMuZm9sZGVyIHtcbiAgbWFyZ2luLWxlZnQ6IDAuMjVyZW07XG59XG4uZmlsZS1yb3cgLmRyYWd1bGEtY29udGFpbmVyIC5tYXRlcmlhbC1pY29ucy5hcnJvdyB7XG4gIHBhZGRpbmc6IDAuMjVyZW07XG4gIG1hcmdpbjogLTAuMjVyZW07XG4gIHRyYW5zaXRpb246IHRyYW5zZm9ybSA3NW1zIGxpbmVhcjtcbiAgdHJhbnNmb3JtOiByb3RhdGUoOTBkZWcpO1xufVxuLmZpbGUtcm93IC5kcmFndWxhLWNvbnRhaW5lciAubWF0ZXJpYWwtaWNvbnMuYXJyb3cuY2xvc2VkIHtcbiAgdHJhbnNmb3JtOiByb3RhdGUoMCk7XG59XG4uZmlsZS1yb3cgLmRyYWd1bGEtY29udGFpbmVyIC5zcGFjZS1tYWtlciB7XG4gIHdpZHRoOiAxLjI1cmVtO1xufVxuLmZpbGUtcm93IC5kcmFndWxhLWNvbnRhaW5lciAuZmlsZS1sYWJlbCB7XG4gIGZsZXg6IDEgMSAwO1xuICBtYXJnaW4tbGVmdDogMC4yNXJlbTtcbiAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgdGV4dC1vdmVyZmxvdzogZWxsaXBzaXM7XG59XG5cbi5jbGlja2FibGUge1xuICBjdXJzb3I6IHBvaW50ZXI7XG59Il19 */");

/***/ }),

/***/ "./src/app/file-explorer/file-explorer.component.ts":
/*!**********************************************************!*\
  !*** ./src/app/file-explorer/file-explorer.component.ts ***!
  \**********************************************************/
/*! exports provided: FileExplorerComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FileExplorerComponent", function() { return FileExplorerComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/cdk/scrolling */ "./node_modules/@angular/cdk/esm5/scrolling.es5.js");
/* harmony import */ var fuzz_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! fuzz-js */ "./node_modules/fuzz-js/dist/out-js/index.js");
/* harmony import */ var fuzz_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(fuzz_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! lodash */ "./node_modules/lodash/lodash.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _utils_index__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @utils/index */ "./src/app/utils/index.ts");
/* harmony import */ var _models_index__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./models/index */ "./src/app/file-explorer/models/index.ts");







// import { DragulaService } from 'ng2-dragula';


var FileExplorerComponent = /** @class */ (function () {
    function FileExplorerComponent() {
        this.fuzzFilterString = '';
        this.closedFileIds = new Set();
        this.selectedFileIds = new Set();
        this.perfMode = true;
        this.filesByIdChange = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.closedFileIdsChange = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.selectedFileIdsChange = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.fuzzItemsByFileId = {};
        this.fileIdsAndDepth = [];
        this.visibleFileIds = new Set();
        this.fileIsOddById = {};
        this.subs = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Subscription"]();
    }
    // constructor(public dragulaService: DragulaService) {
    //     const drakeGroup = dragulaService.createGroup('EXP', {
    //       isContainer: (el) => {
    //           const fileId = el.getAttribute('data-file-id');
    //           if (!fileId) {
    //               return false;
    //           }
    //           return !!this.filesById[fileId].childIds;
    //       },
    //       revertOnSpill: false,
    //     });
    //     this.subs.add(this.dragulaService.drop('EXP')
    //         .subscribe((drop) => {
    //             // use on our own dom manipulation
    //             drakeGroup.drake.cancel(true);
    //             if (drop.sibling && this.getElFileId(drop.sibling)) {
    //                 this.insertFileBeforeFile(
    //                     this.getElFileId(drop.el),
    //                     this.getElFileId(drop.sibling),
    //                 );
    //             } else {
    //                 this.addFileToFileChildren(
    //                     this.getElFileId(drop.el),
    //                     this.getElFileId(drop.target),
    //                 );
    //             }
    //         })
    //     );
    //     this.subs.add(this.dragulaService.over('EXP')
    //         .subscribe(({ el }) => {
    //             // if a folder is being dragged isContainer function will return true
    //             // this makes 'el' be the childElement so I also check the parentNode's attribute
    //             const nextFileIdBeingDragged = this.getElFileId(el);
    //             // for the first over event after a dragend, el is the element being dragged
    //             if (!this.fileIdBeingDragged && (this.fileIdBeingDragged !== nextFileIdBeingDragged)) {
    //                 this.fileIdBeingDragged = nextFileIdBeingDragged;
    //                 this.closedFileIdsChange.emit(new Set([
    //                     ...this.closedFileIds,
    //                     this.fileIdBeingDragged,
    //                 ]));
    //             }
    //         })
    //     );
    //     this.subs.add(this.dragulaService.dragend('EXP')
    //         .subscribe(() => this.fileIdBeingDragged = undefined),
    //     );
    // }
    FileExplorerComponent.prototype.ngOnChanges = function (changes) {
        if (changes.rootFileId || changes.filesById || changes.closedFileIds || changes.fuzzFilterString || changes.perfMode) {
            if (this.rootFileId && this.filesById) {
                this.setTableIndices();
            }
        }
        if (changes.fuzzFilterString
            && this.fuzzFilterString
            && this.scrollViewport
            && this.scrollViewport.first) {
            this.scrollViewport.first.scrollToIndex(0);
        }
        // Scroll back to selected if queryString is removed
        if (changes.fuzzFilterString
            && changes.fuzzFilterString.previousValue
            && !this.fuzzFilterString
            && this.scrollViewport
            && this.scrollViewport.first) {
            this.scrollToSelectedFileId();
        }
    };
    FileExplorerComponent.prototype.ngAfterViewInit = function () {
        var _this = this;
        this.subs.add(this.scrollViewport.changes.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["take"])(1))
            .subscribe(function () { return _this.scrollToSelectedFileId(); }));
    };
    FileExplorerComponent.prototype.ngOnDestroy = function () {
        this.subs.unsubscribe();
        // this.dragulaService.destroy('EXP');
    };
    FileExplorerComponent.prototype.scrollToSelectedFileId = function () {
        var viewPort = this.scrollViewport && this.scrollViewport.first;
        if (!viewPort) {
            return;
        }
        var firstSelectedFileId = Array.from(this.selectedFileIds)[0];
        var filePosition = this.getFileIdPosition(firstSelectedFileId);
        // leave some space above file to show you can scroll up
        var scrollPosition = Math.max(0, filePosition - 2);
        // weird issue with cdk needs timeout
        setTimeout(function () {
            viewPort.scrollToIndex(scrollPosition);
        });
    };
    FileExplorerComponent.prototype.insertFileBeforeFile = function (fileId1, fileId2) {
        if (fileId2 === this.rootFileId) {
            return;
        }
        var changes = {};
        Object(lodash__WEBPACK_IMPORTED_MODULE_6__["each"])(this.filesById, function (file) {
            if (Object(lodash__WEBPACK_IMPORTED_MODULE_6__["includes"])(file.childIds, fileId1)) {
                changes[file.id] = Object.assign(new _models_index__WEBPACK_IMPORTED_MODULE_8__["File"](), tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"]({}, file, { childIds: Object(lodash__WEBPACK_IMPORTED_MODULE_6__["without"])(file.childIds, fileId1) }));
            }
        });
        var insertParent = this.filesById[this.parentIdsByFileId[fileId2]];
        var nextChildIds = Object(lodash__WEBPACK_IMPORTED_MODULE_6__["without"])(insertParent.childIds, fileId1);
        var insertionIndex = nextChildIds.indexOf(fileId2);
        nextChildIds.splice(insertionIndex, 0, fileId1);
        changes[insertParent.id] = Object.assign(new _models_index__WEBPACK_IMPORTED_MODULE_8__["File"](), tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"]({}, insertParent, { childIds: nextChildIds }));
        this.filesByIdChange.emit(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"]({}, this.filesById, changes));
    };
    FileExplorerComponent.prototype.addFileToFileChildren = function (fileId1, fileId2) {
        var changes = {};
        Object(lodash__WEBPACK_IMPORTED_MODULE_6__["each"])(this.filesById, function (file) {
            if (Object(lodash__WEBPACK_IMPORTED_MODULE_6__["includes"])(file.childIds, fileId1)) {
                changes[file.id] = Object.assign(new _models_index__WEBPACK_IMPORTED_MODULE_8__["File"](), tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"]({}, file, { childIds: Object(lodash__WEBPACK_IMPORTED_MODULE_6__["without"])(file.childIds, fileId1) }));
            }
        });
        // empty fileId2 means insert after the last element
        if (fileId2) {
            var parentFile = this.filesById[fileId2];
            changes[parentFile.id] = Object.assign(new _models_index__WEBPACK_IMPORTED_MODULE_8__["File"](), tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"]({}, this.filesById[parentFile.id], { childIds: Object(lodash__WEBPACK_IMPORTED_MODULE_6__["uniq"])(tslib__WEBPACK_IMPORTED_MODULE_0__["__spread"]([fileId1], parentFile.childIds)) }));
        }
        else {
            var parentFile = this.filesById[this.rootFileId];
            changes[parentFile.id] = Object.assign(new _models_index__WEBPACK_IMPORTED_MODULE_8__["File"](), tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"]({}, this.filesById[parentFile.id], { childIds: Object(lodash__WEBPACK_IMPORTED_MODULE_6__["uniq"])(tslib__WEBPACK_IMPORTED_MODULE_0__["__spread"](parentFile.childIds, [fileId1])) }));
        }
        this.filesByIdChange.emit(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"]({}, this.filesById, changes));
    };
    FileExplorerComponent.prototype.getParentIdsByFileId = function (fileId, filesById) {
        var _this = this;
        var file = filesById[fileId];
        var parentIdsByFileId = {};
        Object(lodash__WEBPACK_IMPORTED_MODULE_6__["each"])(file.childIds, function (childId) {
            parentIdsByFileId[childId] = fileId;
            var innerParentIdsByFileId = _this.getParentIdsByFileId(childId, filesById);
            Object(lodash__WEBPACK_IMPORTED_MODULE_6__["each"])(innerParentIdsByFileId, function (parentId, grandChildId) {
                parentIdsByFileId[grandChildId] = parentId;
            });
        });
        return parentIdsByFileId;
    };
    FileExplorerComponent.prototype.setTableIndices = function () {
        this.parentIdsByFileId = this.getParentIdsByFileId(this.rootFileId, this.filesById);
        if (!this.fuzzFilterString) {
            this.fuzzItemsByFileId = {};
            this.visibleFileIds = this.getVisibleFileIds(this.rootFileId, this.filesById, this.closedFileIds);
            this.fileIdsAndDepth = this.getFileIdsAndDepth(this.rootFileId, this.filesById, undefined, 0);
            this.fileIsOddById = this.getFileIsOddById(this.fileIdsAndDepth, this.visibleFileIds);
        }
        else {
            this.fuzzItemsByFileId = this.getFuzzResultsByFileId(this.fuzzFilterString, this.filesById);
            // maxScore is the highest score between the item and all its descendants
            // low max scores will get filtered out
            var _a = this.sortFileIndexChildren(this.filesById, this.fuzzItemsByFileId), maxScoresByFileId = _a.maxScoresByFileId, sortedChildIdsByFileId = _a.sortedChildIdsByFileId;
            this.visibleFileIds = this.getVisibleFileIds(this.rootFileId, this.filesById, new Set(), // no closed folders while searching
            maxScoresByFileId);
            this.fileIdsAndDepth = this.getFileIdsAndDepth(this.rootFileId, this.filesById, sortedChildIdsByFileId, 0);
            this.fileIsOddById = this.getFileIsOddById(this.fileIdsAndDepth, this.visibleFileIds);
        }
    };
    FileExplorerComponent.prototype.getFuzzResultsByFileId = function (filterString, filesById) {
        var fileList = Object.keys(filesById).map(function (fileId) { return filesById[fileId]; });
        var fuzzResults = fuzz_js__WEBPACK_IMPORTED_MODULE_5__["Fuzz"].search(fileList, filterString, {
            disableDiagnostics: true,
            disableStyledString: true,
            subjectKeys: ['label'],
        });
        var fuzzItemsByFileId = {};
        fuzzResults.forEach(function (fuzzItem) {
            fuzzItemsByFileId[fuzzItem.original.id] = fuzzItem;
        });
        return fuzzItemsByFileId;
    };
    /**
     * sortFileIndexChildren
     * Sorts the childIds for a file tree
     * avoids modifying filesById
     * @param {Record<string, File>} filesById
     * @param {Set<string>} fileIdsToKeep
     */
    FileExplorerComponent.prototype.sortFileIndexChildren = function (filesById, fuzzItemsById) {
        var maxScoresByFileId = {};
        var sortedChildIdsByFileId = {};
        Object(_utils_index__WEBPACK_IMPORTED_MODULE_7__["reverseBreadthFirstBy"])(this.rootFileId, function (fileId) {
            var file = filesById[fileId];
            return (file && file.childIds) ? file.childIds : [];
        }, function (fileId) {
            var file = filesById[fileId];
            var fuzzItem = fuzzItemsById[fileId];
            maxScoresByFileId[fileId] = fuzzItem ? fuzzItem.score : 0;
            if (!file.childIds) {
                return;
            }
            // maxScoresByFileId maintains the highest score for the file and all its children
            var childMaxScores = file.childIds.map(function (childId) { return maxScoresByFileId[childId]; });
            maxScoresByFileId[file.id] = Math.max.apply(Math, tslib__WEBPACK_IMPORTED_MODULE_0__["__spread"]([maxScoresByFileId[file.id]], childMaxScores));
            sortedChildIdsByFileId[file.id] = tslib__WEBPACK_IMPORTED_MODULE_0__["__spread"](file.childIds).sort(function (id1, id2) { return maxScoresByFileId[id2] - maxScoresByFileId[id1]; });
        });
        return {
            maxScoresByFileId: maxScoresByFileId,
            sortedChildIdsByFileId: sortedChildIdsByFileId,
        };
    };
    /**
     * getFileIdsAndDepth
     * if sortedChildIdsByFileId is passed, it overrides the childIds in filesById
     * this is used when fuzzy filtering and the children are in a different order
     * @param  {string} currentFileId
     * @param  {Record<string, File>} filesById
     * @param  {Record<string, string[]>} sortedChildIdsByFileId
     * @param  {number} depth
     * @return {Array}
     */
    FileExplorerComponent.prototype.getFileIdsAndDepth = function (currentFileId, filesById, sortedChildIdsByFileId, depth) {
        var _this = this;
        if (depth === void 0) { depth = 0; }
        // don't animate stuff, use virtual scroll viewport
        if (this.perfMode && !this.visibleFileIds.has(currentFileId)) {
            return [];
        }
        var currentFile = filesById[currentFileId];
        var fileIdsAndDepth = [
            [currentFileId, depth],
        ];
        Object(lodash__WEBPACK_IMPORTED_MODULE_6__["each"])(sortedChildIdsByFileId ? sortedChildIdsByFileId[currentFile.id] : currentFile.childIds, function (childId) {
            var childFileIdsAndDepth = _this.getFileIdsAndDepth(childId, filesById, sortedChildIdsByFileId, depth + 1);
            fileIdsAndDepth.push.apply(fileIdsAndDepth, tslib__WEBPACK_IMPORTED_MODULE_0__["__spread"](childFileIdsAndDepth));
        });
        return fileIdsAndDepth;
    };
    FileExplorerComponent.prototype.getVisibleFileIds = function (currentFileId, filesById, closedFileIds, maxScoresByFileId) {
        var _this = this;
        if (maxScoresByFileId === void 0) { maxScoresByFileId = {}; }
        var currentFile = filesById[currentFileId];
        var currentMaxScore = Object(lodash__WEBPACK_IMPORTED_MODULE_6__["isUndefined"])(maxScoresByFileId[currentFileId]) ? 1 : maxScoresByFileId[currentFileId];
        var visibleFileIds = new Set();
        if (currentMaxScore > 0.55) {
            visibleFileIds.add(currentFile.id);
        }
        if (!closedFileIds.has(currentFileId)) {
            Object(lodash__WEBPACK_IMPORTED_MODULE_6__["each"])(currentFile.childIds, function (childId) {
                var childVisibleFileIds = _this.getVisibleFileIds(childId, filesById, closedFileIds, maxScoresByFileId);
                childVisibleFileIds.forEach(function (visibleFileId) { return visibleFileIds.add(visibleFileId); });
            });
        }
        return visibleFileIds;
    };
    FileExplorerComponent.prototype.getFileIsOddById = function (fileIdsAndDepth, visibleFileIds) {
        var fileIsOddById = {};
        var isOdd = false;
        for (var i = 0; i < fileIdsAndDepth.length; i++) {
            var fileId = fileIdsAndDepth[i][0];
            if (visibleFileIds.has(fileId)) {
                isOdd = !isOdd;
            }
            fileIsOddById[fileId] = isOdd;
        }
        return fileIsOddById;
    };
    FileExplorerComponent.prototype.toggleClosedFile = function (file, event) {
        event.stopPropagation();
        this.closedFileIds = new Set(this.closedFileIds);
        if (this.closedFileIds.has(file.id)) {
            this.closedFileIds.delete(file.id);
        }
        else {
            this.closedFileIds.add(file.id);
        }
        this.closedFileIdsChange.emit(this.closedFileIds);
    };
    FileExplorerComponent.prototype.selectFile = function (file) {
        this.selectedFileIdsChange.emit(new Set([file.id]));
    };
    FileExplorerComponent.prototype.getPaddingLeft = function (depth) {
        return depth + "rem";
    };
    FileExplorerComponent.prototype.trackByFn = function (fileIdAndDepth) {
        return fileIdAndDepth[0];
    };
    FileExplorerComponent.prototype.getFileIdPosition = function (fileId) {
        return Math.max(this.fileIdsAndDepth.findIndex(function (idAndDepth) { return idAndDepth[0] === fileId; }), 0);
    };
    FileExplorerComponent.prototype.getElFileId = function (el) {
        if (!el) {
            return;
        }
        return el.getAttribute('data-file-id') || el.parentNode.getAttribute('data-file-id');
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
    ], FileExplorerComponent.prototype, "rootFileId", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
    ], FileExplorerComponent.prototype, "fuzzFilterString", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
    ], FileExplorerComponent.prototype, "filesById", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
    ], FileExplorerComponent.prototype, "closedFileIds", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
    ], FileExplorerComponent.prototype, "selectedFileIds", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
    ], FileExplorerComponent.prototype, "perfMode", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
    ], FileExplorerComponent.prototype, "rowIconTemplate", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])()
    ], FileExplorerComponent.prototype, "filesByIdChange", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])()
    ], FileExplorerComponent.prototype, "closedFileIdsChange", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])()
    ], FileExplorerComponent.prototype, "selectedFileIdsChange", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
    ], FileExplorerComponent.prototype, "initialScrollToId", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChildren"])(_angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_4__["CdkVirtualScrollViewport"])
    ], FileExplorerComponent.prototype, "scrollViewport", void 0);
    FileExplorerComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'dwu-file-explorer',
            template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./file-explorer.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/file-explorer/file-explorer.component.html")).default,
            providers: [
            // DragulaService,
            ],
            styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./file-explorer.component.scss */ "./src/app/file-explorer/file-explorer.component.scss")).default]
        })
    ], FileExplorerComponent);
    return FileExplorerComponent;
}());



/***/ }),

/***/ "./src/app/file-explorer/file-explorer.module.ts":
/*!*******************************************************!*\
  !*** ./src/app/file-explorer/file-explorer.module.ts ***!
  \*******************************************************/
/*! exports provided: FileExplorerModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FileExplorerModule", function() { return FileExplorerModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var ng2_dragula__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ng2-dragula */ "./node_modules/ng2-dragula/dist/fesm5/ng2-dragula.js");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm5/animations.js");
/* harmony import */ var _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/cdk/scrolling */ "./node_modules/@angular/cdk/esm5/scrolling.es5.js");
/* harmony import */ var _src_app_common_common_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @src/app/common/common.module */ "./src/app/common/common.module.ts");
/* harmony import */ var _file_explorer_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./file-explorer.component */ "./src/app/file-explorer/file-explorer.component.ts");








var FileExplorerModule = /** @class */ (function () {
    function FileExplorerModule() {
    }
    FileExplorerModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
                _src_app_common_common_module__WEBPACK_IMPORTED_MODULE_6__["CommonModule"],
                _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_4__["NoopAnimationsModule"],
                ng2_dragula__WEBPACK_IMPORTED_MODULE_3__["DragulaModule"],
                _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_5__["ScrollingModule"],
            ],
            declarations: [
                _file_explorer_component__WEBPACK_IMPORTED_MODULE_7__["FileExplorerComponent"],
            ],
            exports: [
                _file_explorer_component__WEBPACK_IMPORTED_MODULE_7__["FileExplorerComponent"],
            ],
            providers: [],
        })
    ], FileExplorerModule);
    return FileExplorerModule;
}());



/***/ }),

/***/ "./src/app/file-explorer/index.ts":
/*!****************************************!*\
  !*** ./src/app/file-explorer/index.ts ***!
  \****************************************/
/*! exports provided: FileExplorerComponent, FileExplorerModule, FileGroup, FileType, File */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _models_index__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./models/index */ "./src/app/file-explorer/models/index.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "FileGroup", function() { return _models_index__WEBPACK_IMPORTED_MODULE_1__["FileGroup"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "FileType", function() { return _models_index__WEBPACK_IMPORTED_MODULE_1__["FileType"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "File", function() { return _models_index__WEBPACK_IMPORTED_MODULE_1__["File"]; });

/* harmony import */ var _file_explorer_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./file-explorer.component */ "./src/app/file-explorer/file-explorer.component.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "FileExplorerComponent", function() { return _file_explorer_component__WEBPACK_IMPORTED_MODULE_2__["FileExplorerComponent"]; });

/* harmony import */ var _file_explorer_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./file-explorer.module */ "./src/app/file-explorer/file-explorer.module.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "FileExplorerModule", function() { return _file_explorer_module__WEBPACK_IMPORTED_MODULE_3__["FileExplorerModule"]; });







/***/ }),

/***/ "./src/app/file-explorer/models/file-group.model.ts":
/*!**********************************************************!*\
  !*** ./src/app/file-explorer/models/file-group.model.ts ***!
  \**********************************************************/
/*! exports provided: FileGroup */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FileGroup", function() { return FileGroup; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! lodash */ "./node_modules/lodash/lodash.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _file_model__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./file.model */ "./src/app/file-explorer/models/file.model.ts");
/* harmony import */ var _utils_index__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @utils/index */ "./src/app/utils/index.ts");




var FileGroup = /** @class */ (function () {
    function FileGroup(seed) {
        if (seed === void 0) { seed = Object(lodash__WEBPACK_IMPORTED_MODULE_1__["uniqueId"])("dfg_"); }
        this.seed = seed;
        this.filesById = {};
        this.closedFileIds = new Set();
        this.selectedFileIds = new Set();
    }
    /**
     * filesByIdFromJson
     * handy when declaring files using a nested structure
     * @param {any} fileData
     */
    FileGroup.prototype.filesByIdFromJson = function (fileData) {
        var _this = this;
        var files = [];
        Object(_utils_index__WEBPACK_IMPORTED_MODULE_3__["breadthFirstBy"])(fileData, function (parent) {
            var childFiles = Object(lodash__WEBPACK_IMPORTED_MODULE_1__["mapValues"])(parent.childrenById, function (childFile, fileId) {
                return tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"]({ label: fileId, id: fileId }, childFile);
            });
            return Object(lodash__WEBPACK_IMPORTED_MODULE_1__["values"])(childFiles);
        }, function (file) {
            var partialFile = tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"]({}, file);
            delete partialFile.childrenById;
            if (file.childrenById) {
                var childIds = Object.keys(file.childrenById || {});
                files.push(_this.createFile(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"]({}, partialFile, { childIds: childIds })));
            }
            else {
                files.push(_this.createFile(partialFile));
            }
        });
        return files;
    };
    /**
     * focusOnSelected
     * close all folders then open all the parents of selected so that it's visible
     */
    FileGroup.prototype.focusOnSelected = function () {
        var _this = this;
        this.closeAllFolders();
        var openFileIds = new Set();
        var selectedFileIds = Array.from(this.selectedFileIds);
        selectedFileIds.forEach(function (fileId) { return openFileIds.add(fileId); });
        Object(_utils_index__WEBPACK_IMPORTED_MODULE_3__["reverseBreadthFirstBy"])(this.rootFileId, function (fileId) { return _this.filesById[fileId].childIds || []; }, function (fileId) {
            var file = _this.filesById[fileId];
            if (Object(lodash__WEBPACK_IMPORTED_MODULE_1__["some"])(file.childIds, function (childId) { return openFileIds.has(childId); })) {
                openFileIds.add(file.id);
            }
        });
        Array.from(openFileIds).forEach(function (openFileId) {
            var openFile = _this.filesById[openFileId];
            if (openFile.childIds) {
                _this.closedFileIds.delete(openFile.id);
            }
        });
    };
    /**
     * closeAllFolders
     */
    FileGroup.prototype.closeAllFolders = function () {
        var _this = this;
        this.closedFileIds = new Set();
        Object(lodash__WEBPACK_IMPORTED_MODULE_1__["each"])(this.filesById, function (file) {
            if (file.childIds) {
                _this.closedFileIds.add(file.id);
            }
        });
    };
    /**
     * setSelectedFileIds
     * @param {Set<string>} fileIds
     */
    FileGroup.prototype.setSelectedFileIds = function (fileIds) {
        this.selectedFileIds = fileIds;
    };
    /**
     * setRootFile
     * @param {File} file
     */
    FileGroup.prototype.setRootFile = function (file) {
        this.rootFileId = file.id;
    };
    /**
     * setClosedFileIds
     * @param {Set<string>} closedFileIds
     */
    FileGroup.prototype.setClosedFileIds = function (closedFileIds) {
        this.closedFileIds = closedFileIds;
    };
    FileGroup.prototype.removeAsChild = function (parent, child) {
        parent.childIds = parent.childIds.filter(function (childId) { return childId !== child.id; });
    };
    /**
     * addAsChild
     * @param {File} parent
     * @param {File} child
     */
    FileGroup.prototype.addAsChild = function (parent, child) {
        parent.childIds = Object(lodash__WEBPACK_IMPORTED_MODULE_1__["uniq"])(tslib__WEBPACK_IMPORTED_MODULE_0__["__spread"]((parent.childIds || []), [child.id]));
    };
    /**
     * batchAddAsChild
     * more performant version of addAsChild, make sure to flush!
     * @param {File} parent
     * @param {File} child
     */
    FileGroup.prototype.batchAddAsChild = function (parent, child) {
        if (parent.childIds) {
            parent.childIds.push(child.id);
        }
        else {
            parent.childIds = [child.id];
        }
    };
    /**
     * flushFileChanges
     * new reference for childIds so change detection will pick up on batchAddAsChild
     */
    FileGroup.prototype.flushBatchAddAsChild = function () {
        Object(lodash__WEBPACK_IMPORTED_MODULE_1__["each"])(this.filesById, function (file) {
            file.childIds = file.childIds && Object(lodash__WEBPACK_IMPORTED_MODULE_1__["uniq"])(file.childIds);
        });
    };
    /**
     * createFile
     * @param  {Partial<File>} overrides
     * @return {File}
     */
    FileGroup.prototype.createFile = function (overrides) {
        var _a;
        if (overrides === void 0) { overrides = {}; }
        var uniqueId = this.getUniqueId();
        var newFile = Object.assign(new _file_model__WEBPACK_IMPORTED_MODULE_2__["File"](), tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"]({ id: uniqueId, label: uniqueId }, overrides));
        this.filesById = tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"]({}, this.filesById, (_a = {}, _a[newFile.id] = newFile, _a));
        return newFile;
    };
    /**
     * batchCreateFile
     * this.createFile replaces this.filesById for change detection
     * this is very slow when creating a lot of files
     * batchCreateFile modifies filesById, then flushFileChanges replaces this.filesById
     * @param  {Partial<File> = {}} overrides
     * @return {File}
     */
    FileGroup.prototype.batchCreateFile = function (overrides) {
        if (overrides === void 0) { overrides = {}; }
        var uniqueId = this.getUniqueId();
        var newFile = Object.assign(new _file_model__WEBPACK_IMPORTED_MODULE_2__["File"](), {
            id: uniqueId,
            label: uniqueId,
        }, overrides);
        this.filesById[newFile.id] = newFile;
        return newFile;
    };
    /**
     * flushFileChanges
     * new reference for filesById so change detection will pick up on batchCreateFile
     */
    FileGroup.prototype.flushFileChanges = function () {
        this.filesById = tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"]({}, this.filesById);
    };
    /**
     * flush
     */
    FileGroup.prototype.flush = function () {
        this.flushFileChanges();
        this.flushBatchAddAsChild();
    };
    /**
     * getUniqueId
     * @return {string}
     */
    FileGroup.prototype.getUniqueId = function () {
        while (true) {
            var id = Object(lodash__WEBPACK_IMPORTED_MODULE_1__["uniqueId"])(this.seed);
            if (!this.filesById[id]) {
                return id;
            }
        }
    };
    return FileGroup;
}());



/***/ }),

/***/ "./src/app/file-explorer/models/file-type.enum.ts":
/*!********************************************************!*\
  !*** ./src/app/file-explorer/models/file-type.enum.ts ***!
  \********************************************************/
/*! exports provided: FileType */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FileType", function() { return FileType; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");

var FileType;
(function (FileType) {
    FileType["CUSTOM"] = "CUSTOM";
})(FileType || (FileType = {}));


/***/ }),

/***/ "./src/app/file-explorer/models/file.model.ts":
/*!****************************************************!*\
  !*** ./src/app/file-explorer/models/file.model.ts ***!
  \****************************************************/
/*! exports provided: File */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "File", function() { return File; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");

var File = /** @class */ (function () {
    function File() {
        this.label = '';
    }
    return File;
}());



/***/ }),

/***/ "./src/app/file-explorer/models/index.ts":
/*!***********************************************!*\
  !*** ./src/app/file-explorer/models/index.ts ***!
  \***********************************************/
/*! exports provided: FileGroup, FileType, File */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _file_group_model__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./file-group.model */ "./src/app/file-explorer/models/file-group.model.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "FileGroup", function() { return _file_group_model__WEBPACK_IMPORTED_MODULE_1__["FileGroup"]; });

/* harmony import */ var _file_type_enum__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./file-type.enum */ "./src/app/file-explorer/models/file-type.enum.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "FileType", function() { return _file_type_enum__WEBPACK_IMPORTED_MODULE_2__["FileType"]; });

/* harmony import */ var _file_model__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./file.model */ "./src/app/file-explorer/models/file.model.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "File", function() { return _file_model__WEBPACK_IMPORTED_MODULE_3__["File"]; });







/***/ }),

/***/ "./src/app/portfolio/portfolio.component.scss":
/*!****************************************************!*\
  !*** ./src/app/portfolio/portfolio.component.scss ***!
  \****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("@media screen and (max-width: 750px) {\n  :host div.page-container {\n    flex-direction: column;\n  }\n  :host div.page-container .left-side {\n    flex: 0 0 auto;\n    height: 13.25rem;\n    width: 100%;\n    max-width: none;\n    min-width: none;\n  }\n}\n:host .page-container {\n  height: 100%;\n  width: 100%;\n  display: flex;\n}\n:host .page-container .left-side {\n  flex: 1 1 0;\n  overflow: hidden;\n  max-width: 27.5%;\n  min-width: 17.5rem;\n}\n:host .page-container .right-side {\n  flex: 1 1 0;\n  overflow: auto;\n  position: relative;\n}\n:host .page-container .left-side {\n  background-color: #DDD9CF;\n  display: flex;\n  flex-direction: column;\n}\n:host .page-container .left-side dwu-file-explorer {\n  flex: 1 1 0;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9hZG1pbi9wcm9qZWN0cy9kYXd1LWhvbWUvc3JjL3N0eWxlcy9taXhpbnMuc2NzcyIsInNyYy9hcHAvcG9ydGZvbGlvL3BvcnRmb2xpby5jb21wb25lbnQuc2NzcyIsIi9Vc2Vycy9hZG1pbi9wcm9qZWN0cy9kYXd1LWhvbWUvc3JjL2FwcC9wb3J0Zm9saW8vcG9ydGZvbGlvLmNvbXBvbmVudC5zY3NzIiwiL1VzZXJzL2FkbWluL3Byb2plY3RzL2Rhd3UtaG9tZS9zcmMvc3R5bGVzL3ZhcmlhYmxlcy5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUdJO0VBQ0k7SUFDSSxzQkFBQTtFQ0ZWO0VER1U7SUFDSSxjQUFBO0lBQ0EsZ0JBQUE7SUFDQSxXQUFBO0lBQ0EsZUFBQTtJQUNBLGVBQUE7RUNEZDtBQUNGO0FESUk7RUFDSSxZQUFBO0VBQ0EsV0FBQTtFQUNBLGFBQUE7QUNGUjtBRElRO0VBQ0ksV0FBQTtFQUNBLGdCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxrQkFBQTtBQ0ZaO0FESVE7RUFDSSxXQUFBO0VBQ0EsY0FBQTtFQUNBLGtCQUFBO0FDRlo7QUN0QlE7RUFDSSx5QkNNTTtFRExOLGFBQUE7RUFDQSxzQkFBQTtBRHdCWjtBQ3ZCWTtFQUNJLFdBQUE7QUR5QmhCIiwiZmlsZSI6InNyYy9hcHAvcG9ydGZvbGlvL3BvcnRmb2xpby5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIkBpbXBvcnQgJ3ZhcmlhYmxlcyc7XG5cbkBtaXhpbiByZXNwb25zaXZlLXBhZ2Uge1xuICAgIEBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDc1MHB4KSB7XG4gICAgICAgIGRpdi5wYWdlLWNvbnRhaW5lciB7XG4gICAgICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgICAgICAgICAgLmxlZnQtc2lkZSB7XG4gICAgICAgICAgICAgICAgZmxleDogMCAwIGF1dG87XG4gICAgICAgICAgICAgICAgaGVpZ2h0OiAxMy4yNXJlbTtcbiAgICAgICAgICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgICAgICAgICBtYXgtd2lkdGg6IG5vbmU7XG4gICAgICAgICAgICAgICAgbWluLXdpZHRoOiBub25lO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuICAgIC5wYWdlLWNvbnRhaW5lciB7XG4gICAgICAgIGhlaWdodDogMTAwJTtcbiAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XG5cbiAgICAgICAgLmxlZnQtc2lkZSB7XG4gICAgICAgICAgICBmbGV4OiAxIDEgMDtcbiAgICAgICAgICAgIG92ZXJmbG93OiBoaWRkZW47XG4gICAgICAgICAgICBtYXgtd2lkdGg6IDI3LjUlO1xuICAgICAgICAgICAgbWluLXdpZHRoOiAxNy41cmVtO1xuICAgICAgICB9XG4gICAgICAgIC5yaWdodC1zaWRlIHtcbiAgICAgICAgICAgIGZsZXg6IDEgMSAwO1xuICAgICAgICAgICAgb3ZlcmZsb3c6IGF1dG87XG4gICAgICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgICAgIH1cbiAgICB9XG5cbn1cblxuQG1peGluIGxpZ2h0LXNtYWxsLWJ1dHRvbiB7XG4gICAgQGluY2x1ZGUgbGlnaHQtdGhlbWU7XG4gICAgQGluY2x1ZGUgYnV0dG9uLXNtO1xufVxuXG5AbWl4aW4gZGFyay1idXR0b24ge1xuICAgIEBpbmNsdWRlIGRhcmstdGhlbWU7XG4gICAgQGluY2x1ZGUgYnV0dG9uLW1kO1xufVxuXG5AbWl4aW4gYnV0dG9uLXNtIHtcbiAgICB3aWR0aDogNnJlbTtcbiAgICBwYWRkaW5nOiAwLjI1cmVtIDAuNXJlbTtcbiAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIG91dGxpbmU6IG5vbmU7XG4gICAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcbiAgICB1c2VyLXNlbGVjdDogbm9uZTtcbn1cblxuQG1peGluIGJ1dHRvbi1tZCB7XG4gICAgd2lkdGg6IDhyZW07XG4gICAgcGFkZGluZzogMC41cmVtO1xuICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgb3V0bGluZTogbm9uZTtcbiAgICB3aGl0ZS1zcGFjZTogbm93cmFwO1xuICAgIHVzZXItc2VsZWN0OiBub25lO1xufVxuXG5AbWl4aW4gbGlnaHQtdGhlbWUge1xuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkZWdnc2hlbGwtZGFyaztcbiAgICAmOmhvdmVyIHtcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogJGxhdXJlbC1ncmVlbjtcbiAgICB9XG4gICAgJi5hY3RpdmUge1xuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkb2xpdmUtZ3JlZW47XG4gICAgICAgIGNvbG9yOiAkbGlnaHRlc3QtZ3JlZW47XG4gICAgfVxufVxuXG5AbWl4aW4gZGFyay10aGVtZSB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogJGJsYWNrLW9saXZlO1xuICAgIGNvbG9yOiAkbGlnaHRlc3QtZ3JlZW47XG4gICAgJjpob3ZlciB7XG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6ICRhcm15LWdyZWVuO1xuICAgICAgICBjb2xvcjogJGxpZ2h0ZXN0LWdyZWVuO1xuICAgIH1cbiAgICAmLmFjdGl2ZSB7XG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6ICRvbGl2ZS1ncmVlbjtcbiAgICAgICAgY29sb3I6ICRsaWdodGVzdC1ncmVlbjtcbiAgICB9XG59XG5cbkBtaXhpbiB0b3AtbmF2LXBhZ2Uge1xuICAgIGhlaWdodDogMTAwJTtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgLm1haW4tY29udGVudCB7XG4gICAgICAgIGZsZXg6IDEgMSAwO1xuICAgICAgICBvdmVyZmxvdzogYXV0bztcbiAgICB9XG59XG5cbkBtaXhpbiByZXNwb25kLXRvKCRtZWRpYSkge1xuICBAaWYgJG1lZGlhID09IHNtYWxsIHtcbiAgICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6ICRicmVhay1zbWFsbCkgeyBAY29udGVudDsgfVxuICB9XG4gIEBlbHNlIGlmICRtZWRpYSA9PSBtZWRpdW0ge1xuICAgIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1pbi13aWR0aDogJGJyZWFrLXNtYWxsICsgMSkgYW5kIChtYXgtd2lkdGg6ICRicmVhay1sYXJnZSAtIDEpIHsgQGNvbnRlbnQ7IH1cbiAgfVxuICBAZWxzZSBpZiAkbWVkaWEgPT0gd2lkZSB7XG4gICAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWluLXdpZHRoOiAkYnJlYWstbGFyZ2UpIHsgQGNvbnRlbnQ7IH1cbiAgfVxufVxuIiwiQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogNzUwcHgpIHtcbiAgOmhvc3QgZGl2LnBhZ2UtY29udGFpbmVyIHtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICB9XG4gIDpob3N0IGRpdi5wYWdlLWNvbnRhaW5lciAubGVmdC1zaWRlIHtcbiAgICBmbGV4OiAwIDAgYXV0bztcbiAgICBoZWlnaHQ6IDEzLjI1cmVtO1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIG1heC13aWR0aDogbm9uZTtcbiAgICBtaW4td2lkdGg6IG5vbmU7XG4gIH1cbn1cbjpob3N0IC5wYWdlLWNvbnRhaW5lciB7XG4gIGhlaWdodDogMTAwJTtcbiAgd2lkdGg6IDEwMCU7XG4gIGRpc3BsYXk6IGZsZXg7XG59XG46aG9zdCAucGFnZS1jb250YWluZXIgLmxlZnQtc2lkZSB7XG4gIGZsZXg6IDEgMSAwO1xuICBvdmVyZmxvdzogaGlkZGVuO1xuICBtYXgtd2lkdGg6IDI3LjUlO1xuICBtaW4td2lkdGg6IDE3LjVyZW07XG59XG46aG9zdCAucGFnZS1jb250YWluZXIgLnJpZ2h0LXNpZGUge1xuICBmbGV4OiAxIDEgMDtcbiAgb3ZlcmZsb3c6IGF1dG87XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbn1cbjpob3N0IC5wYWdlLWNvbnRhaW5lciAubGVmdC1zaWRlIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI0RERDlDRjtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbn1cbjpob3N0IC5wYWdlLWNvbnRhaW5lciAubGVmdC1zaWRlIGR3dS1maWxlLWV4cGxvcmVyIHtcbiAgZmxleDogMSAxIDA7XG59IiwiQGltcG9ydCAnbWl4aW5zJztcblxuOmhvc3Qge1xuICAgIEBpbmNsdWRlIHJlc3BvbnNpdmUtcGFnZTtcbiAgICAucGFnZS1jb250YWluZXIge1xuICAgICAgICAubGVmdC1zaWRlIHtcbiAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICRlZ2dzaGVsbC1kYXJrZXI7XG4gICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICAgICAgICAgIGR3dS1maWxlLWV4cGxvcmVyIHtcbiAgICAgICAgICAgICAgICBmbGV4OiAxIDEgMDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cbn1cbiIsIlxuJGRhcmstZ3JlZW46ICMyOTJFMTI7XG4kYXJteS1ncmVlbjogIzRCNTMyMDtcbiRvbGl2ZS1ncmVlbjogIzcwODIzODtcbiRtb3NzLWdyZWVuOiAjOEE5QTVCO1xuJGxhdXJlbC1ncmVlbjogI0JBQzM5RjtcblxuLy8gbmljZSBmb3IgdGV4dCBhZ2FpbnN0IGRhcmsgYmFja2dyb3VuZFxuJGxpZ2h0LWdyZWVuOiAjRjRGN0VBO1xuJGxpZ2h0ZXN0LWdyZWVuOiAjRkNGQ0Y5O1xuXG4vLyBVc2VkIGZvciBmaWxlIHNlbGVjdG9yXG4kZWdnc2hlbGwtZGFya2VyOiAjREREOUNGO1xuJGVnZ3NoZWxsLWRhcms6ICNFQUU2REE7XG4kZWdnc2hlbGw6ICNFRkVCREY7XG4kZWdnc2hlbGwtbGlnaHQ6ICNGMkVFRTE7XG5cbi8vIGdyYXlzXG4kYmFzaWNhbGx5LWJsYWNrOiAjMjAyMTI0O1xuJGJsYWNrLW9saXZlOiAjM0Y0MDM4O1xuJGdyYW5pdGU6ICM2NTYzNUY7XG4kbGlnaHRlci1ncmF5OiAjOUQ5Qjk5O1xuJHdoaXRlOiAjZmZmO1xuXG4kZ29sZDogI0Q2QjkwMjtcbiRzdGFyLWJsdWU6ICMxRDYyQzQ7XG5cbiRicmVhay1zbWFsbDogNTUwcHg7XG4kYnJlYWstbWQ6IDgwMHB4O1xuJGJyZWFrLWxhcmdlOiAxMDI0cHg7XG4iXX0= */");

/***/ }),

/***/ "./src/app/portfolio/portfolio.component.ts":
/*!**************************************************!*\
  !*** ./src/app/portfolio/portfolio.component.ts ***!
  \**************************************************/
/*! exports provided: PortfolioComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PortfolioComponent", function() { return PortfolioComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! lodash */ "./node_modules/lodash/lodash.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _file_explorer_index__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @file-explorer/index */ "./src/app/file-explorer/index.ts");




var PortfolioComponent = /** @class */ (function () {
    function PortfolioComponent() {
        this.filesById = {};
        this.filesByLabel = {};
        this.fileGroup = new _file_explorer_index__WEBPACK_IMPORTED_MODULE_3__["FileGroup"]();
    }
    PortfolioComponent.prototype.ngOnInit = function () {
        this.populateFileGroup();
    };
    PortfolioComponent.prototype.populateFileGroup = function () {
        var fileDataById = {
            id: 'PROJECTS',
            label: 'Projects',
            childrenById: {
                FUZZ: { label: 'fuzz-demo' },
                TODOS: {
                    label: 'todos',
                    childrenById: {
                        TODO_LIST: { label: 'implement todo list' },
                        MARKDOWN: { label: 'support markdown-editor' },
                        FAVICON: { label: 'favicon' },
                        COMMON: { label: 'common components' },
                        ABOUT_ME: { label: 'about me page' },
                    },
                },
                COMPONENTS: {
                    label: 'components',
                    childrenById: {
                        FILE_EXPLORER: { label: 'file-explorer' },
                        TEXT_DECORATOR: { label: 'text-decorator' },
                    },
                },
            },
        };
        var files = this.fileGroup.filesByIdFromJson(fileDataById);
        this.filesById = Object(lodash__WEBPACK_IMPORTED_MODULE_2__["keyBy"])(files, 'id');
        this.fileGroup.setRootFile(this.filesById.PROJECTS);
        this.fileGroup.selectedFileIds = new Set([this.filesById['FUZZ'].id]);
    };
    PortfolioComponent.prototype.getSelectedFileId = function () {
        var selectedFileIds = Array.from(this.fileGroup.selectedFileIds || []);
        return (selectedFileIds.length === 1) && selectedFileIds[0];
    };
    PortfolioComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'portfolio',
            template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./portfolio.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/portfolio/portfolio.component.html")).default,
            styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./portfolio.component.scss */ "./src/app/portfolio/portfolio.component.scss")).default]
        })
    ], PortfolioComponent);
    return PortfolioComponent;
}());



/***/ }),

/***/ "./src/app/portfolio/portfolio.module.ts":
/*!***********************************************!*\
  !*** ./src/app/portfolio/portfolio.module.ts ***!
  \***********************************************/
/*! exports provided: PortfolioModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PortfolioModule", function() { return PortfolioModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _src_app_app_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @src/app/app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm5/animations.js");
/* harmony import */ var _src_app_portfolio_portfolio_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @src/app/portfolio/portfolio.component */ "./src/app/portfolio/portfolio.component.ts");
/* harmony import */ var _src_app_portfolio_portfolio_routes__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @src/app/portfolio/portfolio.routes */ "./src/app/portfolio/portfolio.routes.ts");
/* harmony import */ var fuzz_demo_app__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! fuzz-demo-app */ "./node_modules/fuzz-demo-app/dist/esm2015/fuzz-demo-app.js");
/* harmony import */ var _src_app_common_common_module__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @src/app/common/common.module */ "./src/app/common/common.module.ts");
/* harmony import */ var _src_app_file_explorer_file_explorer_module__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @src/app/file-explorer/file-explorer.module */ "./src/app/file-explorer/file-explorer.module.ts");












var PortfolioModule = /** @class */ (function () {
    function PortfolioModule() {
    }
    PortfolioModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            imports: [
                _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forChild(_src_app_portfolio_portfolio_routes__WEBPACK_IMPORTED_MODULE_8__["PortfolioRoutes"]),
                _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"],
                fuzz_demo_app__WEBPACK_IMPORTED_MODULE_9__["AppModule"],
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
                _src_app_app_routing_module__WEBPACK_IMPORTED_MODULE_5__["AppRoutingModule"],
                _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_6__["NoopAnimationsModule"],
                _src_app_common_common_module__WEBPACK_IMPORTED_MODULE_10__["CommonModule"],
                _src_app_file_explorer_file_explorer_module__WEBPACK_IMPORTED_MODULE_11__["FileExplorerModule"],
            ],
            declarations: [
                _src_app_portfolio_portfolio_component__WEBPACK_IMPORTED_MODULE_7__["PortfolioComponent"],
            ],
            providers: [],
        })
    ], PortfolioModule);
    return PortfolioModule;
}());



/***/ }),

/***/ "./src/app/portfolio/portfolio.routes.ts":
/*!***********************************************!*\
  !*** ./src/app/portfolio/portfolio.routes.ts ***!
  \***********************************************/
/*! exports provided: PortfolioRoutes */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PortfolioRoutes", function() { return PortfolioRoutes; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _src_app_portfolio_portfolio_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @src/app/portfolio/portfolio.component */ "./src/app/portfolio/portfolio.component.ts");


var PortfolioRoutes = [
    {
        path: '',
        component: _src_app_portfolio_portfolio_component__WEBPACK_IMPORTED_MODULE_1__["PortfolioComponent"],
    },
    {
        path: '**',
        redirectTo: '',
    },
];


/***/ }),

/***/ "./src/app/utils/index.ts":
/*!********************************!*\
  !*** ./src/app/utils/index.ts ***!
  \********************************/
/*! exports provided: breadthFirstBy, reverseBreadthFirstBy */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _traversals__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./traversals */ "./src/app/utils/traversals.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "breadthFirstBy", function() { return _traversals__WEBPACK_IMPORTED_MODULE_1__["breadthFirstBy"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "reverseBreadthFirstBy", function() { return _traversals__WEBPACK_IMPORTED_MODULE_1__["reverseBreadthFirstBy"]; });





/***/ }),

/***/ "./src/app/utils/traversals.ts":
/*!*************************************!*\
  !*** ./src/app/utils/traversals.ts ***!
  \*************************************/
/*! exports provided: breadthFirstBy, reverseBreadthFirstBy */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "breadthFirstBy", function() { return breadthFirstBy; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "reverseBreadthFirstBy", function() { return reverseBreadthFirstBy; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");

function breadthFirstBy(rootNode, getChildren, iteratee) {
    var queue = [rootNode];
    while (queue.length) {
        var currentNode = queue.shift();
        iteratee(currentNode);
        var children = getChildren(currentNode);
        queue.push.apply(queue, tslib__WEBPACK_IMPORTED_MODULE_0__["__spread"](children));
    }
}
function reverseBreadthFirstBy(rootNode, getChildren, iteratee) {
    var stack = [];
    breadthFirstBy(rootNode, getChildren, function (node) {
        stack.push(node);
    });
    for (var i = stack.length - 1; i >= 0; i--) {
        iteratee(stack[i]);
    }
}


/***/ }),

/***/ "./src/assets/corona/locations.json":
/*!******************************************!*\
  !*** ./src/assets/corona/locations.json ***!
  \******************************************/
/*! exports provided: 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 44, 45, 46, 47, 48, 49, 50, 51, 52, 53, 54, 55, 56, 57, 58, 59, 60, 61, 62, 63, 64, 65, 66, 67, 68, 69, 70, 71, 72, 73, 74, 75, 76, 77, 78, 79, 80, 81, 82, 83, 84, 85, 86, 87, 88, 89, 90, 91, 92, 93, 94, 95, 96, 97, 98, 99, 100, 101, 102, 103, 104, 105, 106, 107, 108, 109, 110, 111, 112, 113, 114, 115, 116, 117, 118, 119, 120, 121, 122, 123, 124, 125, 126, 127, 128, 129, 130, 131, 132, 133, 134, 135, 136, 137, 138, 139, 140, 141, 142, 143, 144, 145, 146, 147, 148, 149, 150, 151, 152, 153, 154, 155, 156, 157, 158, 159, 160, 161, 162, 163, 164, 165, 166, 167, 168, 169, 170, 171, 172, 173, 174, 175, 176, 177, 178, 179, 180, 181, 182, 183, 184, 185, 186, 187, 188, 189, 190, 191, 192, 193, 194, 195, 196, 197, 198, 199, 200, 201, 202, 203, 204, 205, 206, 207, 208, 209, 210, 211, 212, 213, 214, 215, 216, 217, 218, 219, 220, 221, 222, 223, 224, 225, 226, 227, 228, 229, 230, 231, 232, 233, 234, 235, 236, 237, 238, 239, 240, 241, 242, 243, 244, 245, 246, 247, 248, 249, 250, 251, 252, 253, 254, 255, 256, 257, 258, 259, 260, 261, 262, 263, 264, 265, 266, 267, 268, 269, 270, 271, 272, 273, 274, 275, 276, 277, 278, 279, 280, 281, 282, 283, 284, 285, 286, 287, 288, 289, 290, 291, 292, 293, 294, 295, 296, 297, 298, 299, 300, 301, 302, 303, 304, 305, 306, 307, 308, 309, 310, 311, 312, 313, 314, 315, 316, 317, 318, 319, 320, 321, 322, 323, 324, 325, 326, 327, 328, 329, 330, 331, 332, 333, 334, 335, 336, 337, 338, 339, 340, 341, 342, 343, 344, 345, 346, 347, 348, 349, 350, 351, 352, 353, 354, 355, 356, 357, 358, 359, 360, 361, 362, 363, 364, 365, 366, 367, 368, 369, 370, 371, 372, 373, 374, 375, 376, 377, 378, 379, 380, 381, 382, 383, 384, 385, 386, 387, 388, 389, 390, 391, 392, 393, 394, 395, 396, 397, 398, 399, 400, 401, 402, 403, 404, 405, 406, 407, 408, 409, 410, 411, 412, 413, 414, 415, 416, 417, 418, 419, 420, 421, 422, 423, 424, 425, 426, 427, 428, 429, 430, 431, 432, 433, 434, 435, 436, 437, 438, 439, 440, 441, 442, 443, 444, 445, 446, 447, 448, 449, 450, 451, 452, 453, 454, 455, 456, 457, 458, 459, 460, 461, 462, 463, 464, 465, 466, 467, 468, 469, 470, 471, 472, 473, 474, 475, 476, 477, 478, 479, 480, 481, 482, 483, 484, 485, 486, 487, 488, 489, 490, 491, 492, 493, 494, 495, 496, 497, 498, 499, 500, 501, 502, 503, 504, 505, 506, 507, 508, 509, 510, 511, 512, 513, 514, 515, 516, 517, 518, 519, 520, 521, 522, 523, 524, 525, 526, 527, 528, 529, 530, 531, 532, 533, 534, 535, 536, 537, 538, 539, 540, 541, 542, 543, 544, 545, 546, 547, 548, 549, 550, 551, 552, 553, 554, 555, 556, 557, 558, 559, 560, 561, 562, 563, 564, 565, 566, 567, 568, 569, 570, 571, 572, 573, 574, 575, 576, 577, 578, 579, 580, 581, 582, 583, 584, 585, 586, 587, 588, 589, 590, 591, 592, 593, 594, 595, 596, 597, 598, 599, 600, 601, 602, 603, 604, 605, 606, 607, 608, 609, 610, 611, 612, 613, 614, 615, 616, 617, 618, 619, 620, 621, 622, 623, 624, 625, 626, 627, 628, 629, 630, 631, 632, 633, 634, 635, 636, 637, 638, 639, 640, 641, 642, 643, 644, 645, 646, 647, 648, 649, 650, 651, 652, 653, 654, 655, 656, 657, 658, 659, 660, 661, 662, 663, 664, 665, 666, 667, 668, 669, 670, 671, 672, 673, 674, 675, 676, 677, 678, 679, 680, 681, 682, 683, 684, 685, 686, 687, 688, 689, 690, 691, 692, 693, 694, 695, 696, 697, 698, 699, 700, 701, 702, 703, 704, 705, 706, 707, 708, 709, 710, 711, 712, 713, 714, 715, 716, 717, 718, 719, 720, 721, 722, 723, 724, 725, 726, 727, 728, 729, 730, 731, 732, 733, 734, 735, 736, 737, 738, 739, 740, 741, 742, 743, 744, 745, 746, 747, 748, 749, 750, 751, 752, 753, 754, 755, 756, 757, 758, 759, 760, 761, 762, 763, 764, 765, 766, 767, 768, 769, 770, 771, 772, 773, 774, 775, 776, 777, 778, 779, 780, 781, 782, 783, 784, 785, 786, 787, 788, 789, 790, 791, 792, 793, 794, 795, 796, 797, 798, 799, 800, 801, 802, 803, 804, 805, 806, 807, 808, 809, 810, 811, 812, 813, 814, 815, 816, 817, 818, 819, 820, 821, 822, 823, 824, 825, 826, 827, 828, 829, 830, 831, 832, 833, 834, 835, 836, 837, 838, 839, 840, 841, 842, 843, 844, 845, 846, 847, 848, 849, 850, 851, 852, 853, 854, 855, 856, 857, 858, 859, 860, 861, 862, 863, 864, 865, 866, 867, 868, 869, 870, 871, 872, 873, 874, 875, 876, 877, 878, 879, 880, 881, 882, 883, 884, 885, 886, 887, 888, 889, 890, 891, 892, 893, 894, 895, 896, 897, 898, 899, 900, 901, 902, 903, 904, 905, 906, 907, 908, 909, 910, 911, 912, 913, 914, 915, 916, 917, 918, 919, 920, 921, 922, 923, 924, 925, 926, 927, 928, 929, 930, 931, 932, 933, 934, 935, 936, 937, 938, 939, 940, 941, 942, 943, 944, 945, 946, 947, 948, 949, 950, 951, 952, 953, 954, 955, 956, 957, 958, 959, 960, 961, 962, 963, 964, 965, 966, 967, 968, 969, 970, 971, 972, 973, 974, 975, 976, 977, 978, 979, 980, 981, 982, 983, 984, 985, 986, 987, 988, 989, 990, 991, 992, 993, 994, 995, 996, 997, 998, 999, 1000, 1001, 1002, 1003, 1004, 1005, 1006, 1007, 1008, 1009, 1010, 1011, 1012, 1013, 1014, 1015, 1016, 1017, 1018, 1019, 1020, 1021, 1022, 1023, 1024, 1025, 1026, 1027, 1028, 1029, 1030, 1031, 1032, 1033, 1034, 1035, 1036, 1037, 1038, 1039, 1040, 1041, 1042, 1043, 1044, 1045, 1046, 1047, 1048, 1049, 1050, 1051, 1052, 1053, 1054, 1055, 1056, 1057, 1058, 1059, 1060, 1061, 1062, 1063, 1064, 1065, 1066, 1067, 1068, 1069, 1070, 1071, 1072, 1073, 1074, 1075, 1076, 1077, 1078, 1079, 1080, 1081, 1082, 1083, 1084, 1085, 1086, 1087, 1088, 1089, 1090, 1091, 1092, 1093, 1094, 1095, 1096, 1097, 1098, 1099, 1100, 1101, 1102, 1103, 1104, 1105, 1106, 1107, 1108, 1109, 1110, 1111, 1112, 1113, 1114, 1115, 1116, 1117, 1118, 1119, 1120, 1121, 1122, 1123, 1124, 1125, 1126, 1127, 1128, 1129, 1130, 1131, 1132, 1133, 1134, 1135, 1136, 1137, 1138, 1139, 1140, 1141, 1142, 1143, 1144, 1145, 1146, 1147, 1148, 1149, 1150, 1151, 1152, 1153, 1154, 1155, 1156, 1157, 1158, 1159, 1160, 1161, 1162, 1163, 1164, 1165, 1166, 1167, 1168, 1169, 1170, 1171, 1172, 1173, 1174, 1175, 1176, 1177, 1178, 1179, 1180, 1181, 1182, 1183, 1184, 1185, 1186, 1187, 1188, 1189, 1190, 1191, 1192, 1193, 1194, 1195, 1196, 1197, 1198, 1199, 1200, 1201, 1202, 1203, 1204, 1205, 1206, 1207, 1208, 1209, 1210, 1211, 1212, 1213, 1214, 1215, 1216, 1217, 1218, 1219, 1220, 1221, 1222, 1223, 1224, 1225, 1226, 1227, 1228, 1229, 1230, 1231, 1232, 1233, 1234, 1235, 1236, 1237, 1238, 1239, 1240, 1241, 1242, 1243, 1244, 1245, 1246, 1247, 1248, 1249, 1250, 1251, 1252, 1253, 1254, 1255, 1256, 1257, 1258, 1259, 1260, 1261, 1262, 1263, 1264, 1265, 1266, 1267, 1268, 1269, 1270, 1271, 1272, 1273, 1274, 1275, 1276, 1277, 1278, 1279, 1280, 1281, 1282, 1283, 1284, 1285, 1286, 1287, 1288, 1289, 1290, 1291, 1292, 1293, 1294, 1295, 1296, 1297, 1298, 1299, 1300, 1301, 1302, 1303, 1304, 1305, 1306, 1307, 1308, 1309, 1310, 1311, 1312, 1313, 1314, 1315, 1316, 1317, 1318, 1319, 1320, 1321, 1322, 1323, 1324, 1325, 1326, 1327, 1328, 1329, 1330, 1331, 1332, 1333, 1334, 1335, 1336, 1337, 1338, 1339, 1340, 1341, 1342, 1343, 1344, 1345, 1346, 1347, 1348, 1349, 1350, 1351, 1352, 1353, 1354, 1355, 1356, 1357, 1358, 1359, 1360, 1361, 1362, 1363, 1364, 1365, 1366, 1367, 1368, 1369, 1370, 1371, 1372, 1373, 1374, 1375, 1376, 1377, 1378, 1379, 1380, 1381, 1382, 1383, 1384, 1385, 1386, 1387, 1388, 1389, 1390, 1391, 1392, 1393, 1394, 1395, 1396, 1397, 1398, 1399, 1400, 1401, 1402, 1403, 1404, 1405, 1406, 1407, 1408, 1409, 1410, 1411, 1412, 1413, 1414, 1415, 1416, 1417, 1418, 1419, 1420, 1421, 1422, 1423, 1424, 1425, 1426, 1427, 1428, 1429, 1430, 1431, 1432, 1433, 1434, 1435, 1436, 1437, 1438, 1439, 1440, 1441, 1442, 1443, 1444, 1445, 1446, 1447, 1448, 1449, 1450, 1451, 1452, 1453, 1454, 1455, 1456, 1457, 1458, 1459, 1460, 1461, 1462, 1463, 1464, 1465, 1466, 1467, 1468, 1469, 1470, 1471, 1472, 1473, 1474, 1475, 1476, 1477, 1478, 1479, 1480, 1481, 1482, 1483, 1484, 1485, 1486, 1487, 1488, 1489, 1490, 1491, 1492, 1493, 1494, 1495, 1496, 1497, 1498, 1499, 1500, 1501, 1502, 1503, 1504, 1505, 1506, 1507, 1508, 1509, 1510, 1511, 1512, 1513, 1514, 1515, 1516, 1517, 1518, 1519, 1520, 1521, 1522, 1523, 1524, 1525, 1526, 1527, 1528, 1529, 1530, 1531, 1532, 1533, 1534, 1535, 1536, 1537, 1538, 1539, 1540, 1541, 1542, 1543, 1544, 1545, 1546, 1547, 1548, 1549, 1550, 1551, 1552, 1553, 1554, 1555, 1556, 1557, 1558, 1559, 1560, 1561, 1562, 1563, 1564, 1565, 1566, 1567, 1568, 1569, 1570, 1571, 1572, 1573, 1574, 1575, 1576, 1577, 1578, 1579, 1580, 1581, 1582, 1583, 1584, 1585, 1586, 1587, 1588, 1589, 1590, 1591, 1592, 1593, 1594, 1595, 1596, 1597, 1598, 1599, 1600, 1601, 1602, 1603, 1604, 1605, 1606, 1607, 1608, 1609, 1610, 1611, 1612, 1613, 1614, 1615, 1616, 1617, 1618, 1619, 1620, 1621, 1622, 1623, 1624, 1625, 1626, 1627, 1628, 1629, 1630, 1631, 1632, 1633, 1634, 1635, 1636, 1637, 1638, 1639, 1640, 1641, 1642, 1643, 1644, 1645, 1646, 1647, 1648, 1649, 1650, 1651, 1652, 1653, 1654, 1655, 1656, 1657, 1658, 1659, 1660, 1661, 1662, 1663, 1664, 1665, 1666, 1667, 1668, 1669, 1670, 1671, 1672, 1673, 1674, 1675, 1676, 1677, 1678, 1679, 1680, 1681, 1682, 1683, 1684, 1685, 1686, 1687, 1688, 1689, 1690, 1691, 1692, 1693, 1694, 1695, 1696, 1697, 1698, 1699, 1700, 1701, 1702, 1703, 1704, 1705, 1706, 1707, 1708, 1709, 1710, 1711, 1712, 1713, 1714, 1715, 1716, 1717, 1718, 1719, 1720, 1721, 1722, 1723, 1724, 1725, 1726, 1727, 1728, 1729, 1730, 1731, 1732, 1733, 1734, 1735, 1736, 1737, 1738, 1739, 1740, 1741, 1742, 1743, 1744, 1745, 1746, 1747, 1748, 1749, 1750, 1751, 1752, 1753, 1754, 1755, 1756, 1757, 1758, 1759, 1760, 1761, 1762, 1763, 1764, 1765, 1766, 1767, 1768, 1769, 1770, 1771, 1772, 1773, 1774, 1775, 1776, 1777, 1778, 1779, 1780, 1781, 1782, 1783, 1784, 1785, 1786, 1787, 1788, 1789, 1790, 1791, 1792, 1793, 1794, 1795, 1796, 1797, 1798, 1799, 1800, 1801, 1802, 1803, 1804, 1805, 1806, 1807, 1808, 1809, 1810, 1811, 1812, 1813, 1814, 1815, 1816, 1817, 1818, 1819, 1820, 1821, 1822, 1823, 1824, 1825, 1826, 1827, 1828, 1829, 1830, 1831, 1832, 1833, 1834, 1835, 1836, 1837, 1838, 1839, 1840, 1841, 1842, 1843, 1844, 1845, 1846, 1847, 1848, 1849, 1850, 1851, 1852, 1853, 1854, 1855, 1856, 1857, 1858, 1859, 1860, 1861, 1862, 1863, 1864, 1865, 1866, 1867, 1868, 1869, 1870, 1871, 1872, 1873, 1874, 1875, 1876, 1877, 1878, 1879, 1880, 1881, 1882, 1883, 1884, 1885, 1886, 1887, 1888, 1889, 1890, 1891, 1892, 1893, 1894, 1895, 1896, 1897, 1898, 1899, 1900, 1901, 1902, 1903, 1904, 1905, 1906, 1907, 1908, 1909, 1910, 1911, 1912, 1913, 1914, 1915, 1916, 1917, 1918, 1919, 1920, 1921, 1922, 1923, 1924, 1925, 1926, 1927, 1928, 1929, 1930, 1931, 1932, 1933, 1934, 1935, 1936, 1937, 1938, 1939, 1940, 1941, 1942, 1943, 1944, 1945, 1946, 1947, 1948, 1949, 1950, 1951, 1952, 1953, 1954, 1955, 1956, 1957, 1958, 1959, 1960, 1961, 1962, 1963, 1964, 1965, 1966, 1967, 1968, 1969, 1970, 1971, 1972, 1973, 1974, 1975, 1976, 1977, 1978, 1979, 1980, 1981, 1982, 1983, 1984, 1985, 1986, 1987, 1988, 1989, 1990, 1991, 1992, 1993, 1994, 1995, 1996, 1997, 1998, 1999, 2000, 2001, 2002, 2003, 2004, 2005, 2006, 2007, 2008, 2009, 2010, 2011, 2012, 2013, 2014, 2015, 2016, 2017, 2018, 2019, 2020, 2021, 2022, 2023, 2024, 2025, 2026, 2027, 2028, 2029, 2030, 2031, 2032, 2033, 2034, 2035, 2036, 2037, 2038, 2039, 2040, 2041, 2042, 2043, 2044, 2045, 2046, 2047, 2048, 2049, 2050, 2051, 2052, 2053, 2054, 2055, 2056, 2057, 2058, 2059, 2060, 2061, 2062, 2063, 2064, 2065, 2066, 2067, 2068, 2069, 2070, 2071, 2072, 2073, 2074, 2075, 2076, 2077, 2078, 2079, 2080, 2081, 2082, 2083, 2084, 2085, 2086, 2087, 2088, 2089, 2090, 2091, 2092, 2093, 2094, 2095, 2096, 2097, 2098, 2099, 2100, 2101, 2102, 2103, 2104, 2105, 2106, 2107, 2108, 2109, 2110, 2111, 2112, 2113, 2114, 2115, 2116, 2117, 2118, 2119, 2120, 2121, 2122, 2123, 2124, 2125, 2126, 2127, 2128, 2129, 2130, 2131, 2132, 2133, 2134, 2135, 2136, 2137, 2138, 2139, 2140, 2141, 2142, 2143, 2144, 2145, 2146, 2147, 2148, 2149, 2150, 2151, 2152, 2153, 2154, 2155, 2156, 2157, 2158, 2159, 2160, 2161, 2162, 2163, 2164, 2165, 2166, 2167, 2168, 2169, 2170, 2171, 2172, 2173, 2174, 2175, 2176, 2177, 2178, 2179, 2180, 2181, 2182, 2183, 2184, 2185, 2186, 2187, 2188, 2189, 2190, 2191, 2192, 2193, 2194, 2195, 2196, 2197, 2198, 2199, 2200, 2201, 2202, 2203, 2204, 2205, 2206, 2207, 2208, 2209, 2210, 2211, 2212, 2213, 2214, 2215, 2216, 2217, 2218, 2219, 2220, 2221, 2222, 2223, 2224, 2225, 2226, 2227, 2228, 2229, 2230, 2231, 2232, 2233, 2234, 2235, 2236, 2237, 2238, 2239, 2240, 2241, 2242, 2243, 2244, 2245, 2246, 2247, 2248, 2249, 2250, 2251, 2252, 2253, 2254, 2255, 2256, 2257, 2258, 2259, 2260, 2261, 2262, 2263, 2264, 2265, 2266, 2267, 2268, 2269, 2270, 2271, 2272, 2273, 2274, 2275, 2276, 2277, 2278, 2279, 2280, 2281, 2282, 2283, 2284, 2285, 2286, 2287, 2288, 2289, 2290, 2291, 2292, 2293, 2294, 2295, 2296, 2297, 2298, 2299, 2300, 2301, 2302, 2303, 2304, 2305, 2306, 2307, 2308, 2309, 2310, 2311, 2312, 2313, 2314, 2315, 2316, 2317, 2318, 2319, 2320, 2321, 2322, 2323, 2324, 2325, 2326, 2327, 2328, 2329, 2330, 2331, 2332, 2333, 2334, 2335, 2336, 2337, 2338, 2339, 2340, 2341, 2342, 2343, 2344, 2345, 2346, 2347, 2348, 2349, 2350, 2351, 2352, 2353, 2354, 2355, 2356, 2357, 2358, 2359, 2360, 2361, 2362, 2363, 2364, 2365, 2366, 2367, 2368, 2369, 2370, 2371, 2372, 2373, 2374, 2375, 2376, 2377, 2378, 2379, 2380, 2381, 2382, 2383, 2384, 2385, 2386, 2387, 2388, 2389, 2390, 2391, 2392, 2393, 2394, 2395, 2396, 2397, 2398, 2399, 2400, 2401, 2402, 2403, 2404, 2405, 2406, 2407, 2408, 2409, 2410, 2411, 2412, 2413, 2414, 2415, 2416, 2417, 2418, 2419, 2420, 2421, 2422, 2423, 2424, 2425, 2426, 2427, 2428, 2429, 2430, 2431, 2432, 2433, 2434, 2435, 2436, 2437, 2438, 2439, 2440, 2441, 2442, 2443, 2444, 2445, 2446, 2447, 2448, 2449, 2450, 2451, 2452, 2453, 2454, 2455, 2456, 2457, 2458, 2459, 2460, 2461, 2462, 2463, 2464, 2465, 2466, 2467, 2468, 2469, 2470, 2471, 2472, 2473, 2474, 2475, 2476, 2477, 2478, 2479, 2480, 2481, 2482, 2483, 2484, 2485, 2486, 2487, 2488, 2489, 2490, 2491, 2492, 2493, 2494, 2495, 2496, 2497, 2498, 2499, 2500, 2501, 2502, 2503, 2504, 2505, 2506, 2507, 2508, 2509, 2510, 2511, 2512, 2513, 2514, 2515, 2516, 2517, 2518, 2519, 2520, 2521, 2522, 2523, 2524, 2525, 2526, 2527, 2528, 2529, 2530, 2531, 2532, 2533, 2534, 2535, 2536, 2537, 2538, 2539, 2540, 2541, 2542, 2543, 2544, 2545, 2546, 2547, 2548, 2549, 2550, 2551, 2552, 2553, 2554, 2555, 2556, 2557, 2558, 2559, 2560, 2561, 2562, 2563, 2564, 2565, 2566, 2567, 2568, 2569, 2570, 2571, 2572, 2573, 2574, 2575, 2576, 2577, 2578, 2579, 2580, 2581, 2582, 2583, 2584, 2585, 2586, 2587, 2588, 2589, 2590, 2591, 2592, 2593, 2594, 2595, 2596, 2597, 2598, 2599, 2600, 2601, 2602, 2603, 2604, 2605, 2606, 2607, 2608, 2609, 2610, 2611, 2612, 2613, 2614, 2615, 2616, 2617, 2618, 2619, 2620, 2621, 2622, 2623, 2624, 2625, 2626, 2627, 2628, 2629, 2630, 2631, 2632, 2633, 2634, 2635, 2636, 2637, 2638, 2639, 2640, 2641, 2642, 2643, 2644, 2645, 2646, 2647, 2648, 2649, 2650, 2651, 2652, 2653, 2654, 2655, 2656, 2657, 2658, 2659, 2660, 2661, 2662, 2663, 2664, 2665, 2666, 2667, 2668, 2669, 2670, 2671, 2672, 2673, 2674, 2675, 2676, 2677, 2678, 2679, 2680, 2681, 2682, 2683, 2684, 2685, 2686, 2687, 2688, 2689, 2690, 2691, 2692, 2693, 2694, 2695, 2696, 2697, 2698, 2699, 2700, 2701, 2702, 2703, 2704, 2705, 2706, 2707, 2708, 2709, 2710, 2711, 2712, 2713, 2714, 2715, 2716, 2717, 2718, 2719, 2720, 2721, 2722, 2723, 2724, 2725, 2726, 2727, 2728, 2729, 2730, 2731, 2732, 2733, 2734, 2735, 2736, 2737, 2738, 2739, 2740, 2741, 2742, 2743, 2744, 2745, 2746, 2747, 2748, 2749, 2750, 2751, 2752, 2753, 2754, 2755, 2756, 2757, 2758, 2759, 2760, 2761, 2762, 2763, 2764, 2765, 2766, 2767, 2768, 2769, 2770, 2771, 2772, 2773, 2774, 2775, 2776, 2777, 2778, 2779, 2780, 2781, 2782, 2783, 2784, 2785, 2786, 2787, 2788, 2789, 2790, 2791, 2792, 2793, 2794, 2795, 2796, 2797, 2798, 2799, 2800, 2801, 2802, 2803, 2804, 2805, 2806, 2807, 2808, 2809, 2810, 2811, 2812, 2813, 2814, 2815, 2816, 2817, 2818, 2819, 2820, 2821, 2822, 2823, 2824, 2825, 2826, 2827, 2828, 2829, 2830, 2831, 2832, 2833, 2834, 2835, 2836, 2837, 2838, 2839, 2840, 2841, 2842, 2843, 2844, 2845, 2846, 2847, 2848, 2849, 2850, 2851, 2852, 2853, 2854, 2855, 2856, 2857, 2858, 2859, 2860, 2861, 2862, 2863, 2864, 2865, 2866, 2867, 2868, 2869, 2870, 2871, 2872, 2873, 2874, 2875, 2876, 2877, 2878, 2879, 2880, 2881, 2882, 2883, 2884, 2885, 2886, 2887, 2888, 2889, 2890, 2891, 2892, 2893, 2894, 2895, 2896, 2897, 2898, 2899, 2900, 2901, 2902, 2903, 2904, 2905, 2906, 2907, 2908, 2909, 2910, 2911, 2912, 2913, 2914, 2915, 2916, 2917, 2918, 2919, 2920, 2921, 2922, 2923, 2924, 2925, 2926, 2927, 2928, 2929, 2930, 2931, 2932, 2933, 2934, 2935, 2936, 2937, 2938, 2939, 2940, 2941, 2942, 2943, 2944, 2945, 2946, 2947, 2948, 2949, 2950, 2951, 2952, 2953, 2954, 2955, 2956, 2957, 2958, 2959, 2960, 2961, 2962, 2963, 2964, 2965, 2966, 2967, 2968, 2969, 2970, 2971, 2972, 2973, 2974, 2975, 2976, 2977, 2978, 2979, 2980, 2981, 2982, 2983, 2984, 2985, 2986, 2987, 2988, 2989, 2990, 2991, 2992, 2993, 2994, 2995, 2996, 2997, 2998, 2999, 3000, 3001, 3002, 3003, 3004, 3005, 3006, 3007, 3008, 3009, 3010, 3011, 3012, 3013, 3014, 3015, 3016, 3017, 3018, 3019, 3020, 3021, 3022, 3023, 3024, 3025, 3026, 3027, 3028, 3029, 3030, 3031, 3032, 3033, 3034, 3035, 3036, 3037, 3038, 3039, 3040, 3041, 3042, 3043, 3044, 3045, 3046, 3047, 3048, 3049, 3050, 3051, 3052, 3053, 3054, 3055, 3056, 3057, 3058, 3059, 3060, 3061, 3062, 3063, 3064, 3065, 3066, 3067, 3068, 3069, 3070, 3071, 3072, 3073, 3074, 3075, 3076, 3077, 3078, 3079, 3080, 3081, 3082, 3083, 3084, 3085, 3086, 3087, 3088, 3089, 3090, 3091, 3092, 3093, 3094, 3095, 3096, 3097, 3098, 3099, 3100, 3101, 3102, 3103, 3104, 3105, 3106, 3107, 3108, 3109, 3110, 3111, 3112, 3113, 3114, 3115, 3116, 3117, 3118, 3119, 3120, 3121, 3122, 3123, 3124, 3125, 3126, 3127, 3128, 3129, 3130, 3131, 3132, 3133, 3134, 3135, 3136, 3137, 3138, 3139, 3140, 3141, 3142, 3143, 3144, 3145, 3146, 3147, 3148, 3149, 3150, 3151, 3152, 3153, 3154, 3155, 3156, 3157, 3158, 3159, 3160, 3161, 3162, 3163, 3164, 3165, 3166, 3167, 3168, 3169, 3170, 3171, 3172, 3173, 3174, 3175, 3176, 3177, 3178, 3179, 3180, 3181, 3182, 3183, 3184, 3185, 3186, 3187, 3188, 3189, 3190, 3191, 3192, 3193, 3194, 3195, 3196, 3197, 3198, 3199, 3200, 3201, 3202, 3203, 3204, 3205, 3206, 3207, 3208, 3209, 3210, 3211, 3212, 3213, 3214, 3215, 3216, 3217, 3218, 3219, 3220, 3221, 3222, 3223, 3224, 3225, 3226, 3227, 3228, 3229, 3230, 3231, 3232, 3233, 3234, 3235, 3236, 3237, 3238, 3239, 3240, 3241, 3242, 3243, 3244, 3245, 3246, 3247, 3248, 3249, 3250, 3251, 3252, 3253, 3254, 3255, 3256, 3257, 3258, 3259, 3260, 3261, 3262, 3263, 3264, 3265, 3266, 3267, 3268, 3269, 3270, 3271, 3272, 3273, 3274, 3275, 3276, 3277, 3278, 3279, 3280, 3281, 3282, 3283, 3284, 3285, 3286, 3287, 3288, 3289, 3290, 3291, 3292, 3293, 3294, 3295, 3296, 3297, 3298, 3299, 3300, 3301, 3302, 3303, 3304, 3305, 3306, 3307, 3308, 3309, 3310, 3311, 3312, 3313, 3314, 3315, 3316, 3317, 3318, 3319, 3320, 3321, 3322, 3323, 3324, 3325, 3326, 3327, 3328, 3329, 3330, 3331, 3332, 3333, 3334, 3335, 3336, 3337, 3338, 3339, 3340, 3341, 3342, 3343, 3344, 3345, 3346, 3347, 3348, 3349, 3350, 3351, 3352, 3353, 3354, 3355, 3356, 3357, 3358, 3359, 3360, 3361, 3362, 3363, 3364, 3365, 3366, 3367, 3368, 3369, 3370, 3371, 3372, 3373, 3374, 3375, 3376, 3377, 3378, 3379, 3380, 3381, 3382, 3383, 3384, 3385, 3386, 3387, 3388, 3389, 3390, 3391, 3392, 3393, 3394, 3395, 3396, 3397, 3398, 3399, 3400, 3401, 3402, 3403, 3404, 3405, 3406, 3407, 3408, 3409, 3410, 3411, 3412, 3413, 3414, 3415, 3416, 3417, 3418, 3419, 3420, 3421, 3422, 3423, 3424, 3425, 3426, 3427, 3428, 3429, 3430, 3431, 3432, 3433, 3434, 3435, 3436, 3437, 3438, 3439, 3440, 3441, 3442, 3443, 3444, 3445, 3446, 3447, 3448, 3449, 3450, 3451, 3452, 3453, 3454, 3455, 3456, 3457, 3458, 3459, 3460, 3461, 3462, 3463, 3464, 3465, 3466, 3467, 3468, 3469, 3470, 3471, 3472, 3473, 3474, 3475, 3476, 3477, 3478, 3479, 3480, 3481, 3482, 3483, 3484, 3485, 3486, 3487, 3488, 3489, 3490, 3491, 3492, 3493, 3494, 3495, 3496, 3497, 3498, 3499, 3500, 3501, 3502, 3503, 3504, 3505, 3506, 3507, 3508, 3509, 3510, 3511, 3512, 3513, 3514, 3515, 3516, 3517, 3518, 3519, 3520, 3521, 3522, 3523, 3524, 3525, 3526, 3527, 3528, 3529, 3530, 3531, 3532, 3533, 3534, 3535, 3536, 3537, 3538, 3539, 3540, 3541, 3542, 3543, 3544, 3545, 3546, 3547, 3548, 3549, 3550, 3551, 3552, 3553, 3554, 3555, 3556, 3557, 3558, 3559, 3560, 3561, 3562, 3563, 3564, 3565, 3566, 3567, 3568, 3569, 3570, 3571, 3572, 3573, 3574, 3575, 3576, 3577, 3578, 3579, 3580, 3581, 3582, 3583, 3584, 3585, 3586, 3587, 3588, 3589, 3590, 3591, 3592, 3593, 3594, 3595, 3596, 3597, 3598, 3599, 3600, 3601, 3602, 3603, 3604, 3605, 3606, 3607, 3608, 3609, 3610, 3611, 3612, 3613, 3614, 3615, 3616, 3617, 3618, 3619, 3620, 3621, 3622, 3623, 3624, 3625, 3626, 3627, 3628, 3629, 3630, 3631, 3632, 3633, 3634, 3635, 3636, 3637, 3638, 3639, 3640, 3641, 3642, 3643, 3644, 3645, 3646, 3647, 3648, 3649, 3650, 3651, 3652, 3653, 3654, 3655, 3656, 3657, 3658, 3659, 3660, 3661, 3662, 3663, 3664, 3665, 3666, 3667, 3668, 3669, 3670, 3671, 3672, 3673, 3674, 3675, 3676, 3677, 3678, 3679, 3680, 3681, 3682, 3683, 3684, 3685, 3686, 3687, 3688, 3689, 3690, 3691, 3692, 3693, 3694, 3695, 3696, 3697, 3698, 3699, 3700, 3701, 3702, 3703, 3704, 3705, 3706, 3707, 3708, 3709, 3710, 3711, 3712, 3713, 3714, 3715, 3716, 3717, 3718, 3719, 3720, 3721, 3722, 3723, 3724, 3725, 3726, 3727, 3728, 3729, 3730, 3731, 3732, 3733, 3734, 3735, 3736, 3737, 3738, 3739, 3740, 3741, 3742, 3743, 3744, 3745, 3746, 3747, 3748, 3749, 3750, 3751, 3752, 3753, 3754, 3755, 3756, 3757, 3758, 3759, 3760, 3761, 3762, 3763, 3764, 3765, 3766, 3767, 3768, 3769, 3770, 3771, 3772, 3773, 3774, 3775, 3776, 3777, 3778, 3779, 3780, 3781, 3782, 3783, 3784, 3785, 3786, 3787, 3788, 3789, 3790, 3791, 3792, 3793, 3794, 3795, 3796, 3797, 3798, 3799, 3800, 3801, 3802, 3803, 3804, 3805, 3806, 3807, 3808, 3809, 3810, 3811, 3812, 3813, 3814, default */
/***/ (function(module) {

module.exports = JSON.parse("[\"THA\",\"JPN\",\"SGP\",\"NPL\",\"MYS\",\"New South Wales, AUS\",\"Victoria, AUS\",\"Queensland, AUS\",\"KHM\",\"LKA\",\"DEU\",\"FIN\",\"ARE\",\"PHL\",\"IND\",\"SWE\",\"ESP\",\"South Australia, AUS\",\"BEL\",\"EGY\",\"LBN\",\"IRQ\",\"OMN\",\"AFG\",\"BHR\",\"KWT\",\"DZA\",\"HRV\",\"CHE\",\"AUT\",\"ISR\",\"PAK\",\"BRA\",\"GEO\",\"GRC\",\"MKD\",\"NOR\",\"ROU\",\"EST\",\"NLD\",\"SMR\",\"BLR\",\"ISL\",\"LTU\",\"MEX\",\"NZL\",\"NGA\",\"Western Australia, AUS\",\"IRL\",\"LUX\",\"MCO\",\"QAT\",\"ECU\",\"AZE\",\"ARM\",\"DOM\",\"IDN\",\"PRT\",\"AND\",\"Tasmania, AUS\",\"LVA\",\"MAR\",\"SAU\",\"SEN\",\"ARG\",\"CHL\",\"JOR\",\"UKR\",\"HUN\",\"Northern Territory, AUS\",\"LIE\",\"POL\",\"TUN\",\"BIH\",\"SVN\",\"ZAF\",\"BTN\",\"CMR\",\"COL\",\"CRI\",\"PER\",\"SRB\",\"SVK\",\"TGO\",\"GUF\",\"MLT\",\"MTQ\",\"BGR\",\"MDV\",\"BGD\",\"PRY\",\"ALB\",\"CYP\",\"BRN\",\"WA, USA\",\"NY, USA\",\"CA, USA\",\"MA, USA\",\"GA, USA\",\"CO, USA\",\"FL, USA\",\"NJ, USA\",\"OR, USA\",\"TX, USA\",\"IL, USA\",\"PA, USA\",\"IA, USA\",\"MD, USA\",\"NC, USA\",\"SC, USA\",\"TN, USA\",\"AZ, USA\",\"IN, USA\",\"KY, USA\",\"DC, USA\",\"NV, USA\",\"NH, USA\",\"MN, USA\",\"NE, USA\",\"OH, USA\",\"RI, USA\",\"WI, USA\",\"CT, USA\",\"HI, USA\",\"OK, USA\",\"UT, USA\",\"BFA\",\"VAT\",\"MNG\",\"PAN\",\"KS, USA\",\"LA, USA\",\"MO, USA\",\"VT, USA\",\"AK, USA\",\"AR, USA\",\"DE, USA\",\"ID, USA\",\"ME, USA\",\"MI, USA\",\"MS, USA\",\"MT, USA\",\"NM, USA\",\"ND, USA\",\"SD, USA\",\"WV, USA\",\"WY, USA\",\"Hubei, CHN\",\"IRN\",\"KOR\",\"FRA\",\"Guangdong, CHN\",\"Henan, CHN\",\"Zhejiang, CHN\",\"Hunan, CHN\",\"Anhui, CHN\",\"Jiangxi, CHN\",\"Shandong, CHN\",\"Jiangsu, CHN\",\"Chongqing, CHN\",\"Sichuan, CHN\",\"Heilongjiang, CHN\",\"UK, GBR\",\"DNK\",\"Beijing, CHN\",\"Shanghai, CHN\",\"Hebei, CHN\",\"Fujian, CHN\",\"Guangxi, CHN\",\"Shaanxi, CHN\",\"Yunnan, CHN\",\"Hainan, CHN\",\"Guizhou, CHN\",\"Tianjin, CHN\",\"Shanxi, CHN\",\"Gansu, CHN\",\"Hong Kong, CHN\",\"Liaoning, CHN\",\"Jilin, CHN\",\"CZE\",\"Xinjiang, CHN\",\"Inner Mongolia, CHN\",\"Ningxia, CHN\",\"TWN\",\"VNM\",\"RUS\",\"Qinghai, CHN\",\"Macau, CHN\",\"MDA\",\"BOL\",\"Faroe Islands, DNK\",\"St Martin, FRA\",\"HND\",\"Channel Islands, GBR\",\"Tibet, CHN\",\"COD\",\"CIV\",\"Saint Barthelemy, FRA\",\"JAM\",\"REU\",\"TUR\",\"Gibraltar, GBR\",\"Kitsap County, WA, USA\",\"Solano County, CA, USA\",\"Santa Cruz County, CA, USA\",\"Napa County, CA, USA\",\"Ventura County, CA, USA\",\"Worcester County, MA, USA\",\"Gwinnett County, GA, USA\",\"DeKalb County, GA, USA\",\"Floyd County, KY, USA\",\"Fayette County, GA, USA\",\"Gregg County, TX, USA\",\"Monmouth County, NJ, USA\",\"Burlington County, NJ, USA\",\"Camden County, NJ, USA\",\"Passaic County, NJ, USA\",\"Union County, NJ, USA\",\"Eagle County, CO, USA\",\"Larimer County, CO, USA\",\"Arapahoe County, CO, USA\",\"Gunnison County, CO, USA\",\"Kane County, IL, USA\",\"Monroe County, PA, USA\",\"Philadelphia County, PA, USA\",\"Prince George's County, MD, USA\",\"Pottawattamie County, IA, USA\",\"Kershaw County, SC, USA\",\"Pima County, AZ, USA\",\"Noble County, IN, USA\",\"Adams County, PA, USA\",\"Boone County, IN, USA\",\"Dane County, WI, USA\",\"Pierce County, WI, USA\",\"Cuyahoga County, OH, USA\",\"Weber County, UT, USA\",\"Bennington County, VT, USA\",\"Carver County, MN, USA\",\"Charlotte County, FL, USA\",\"Cherokee County, GA, USA\",\"Collin County, TX, USA\",\"Jefferson County, KY, USA\",\"Jefferson County, LA, USA\",\"Shasta County, CA, USA\",\"Spartanburg County, SC, USA\",\"Harrison County, KY, USA\",\"Johnson County, IA, USA\",\"Berkshire County, MA, USA\",\"Davidson County, TN, USA\",\"Douglas County, OR, USA\",\"Fresno County, CA, USA\",\"Harford County, MD, USA\",\"Hendricks County, IN, USA\",\"Hudson County, NJ, USA\",\"Johnson County, KS, USA\",\"Kittitas County, WA, USA\",\"Manatee County, FL, USA\",\"Marion County, OR, USA\",\"Okaloosa County, FL, USA\",\"Polk County, GA, USA\",\"Riverside County, CA, USA\",\"Shelby County, TN, USA\",\"St. Louis County, MO, USA\",\"Suffolk County, NY, USA\",\"Ulster County, NY, USA\",\"Volusia County, FL, USA\",\"Rockingham County, NH, USA\",\"Montgomery County, PA, USA\",\"Alameda County, CA, USA\",\"Broward County, FL, USA\",\"Lee County, FL, USA\",\"Pinal County, AZ, USA\",\"Rockland County, NY, USA\",\"Saratoga County, NY, USA\",\"Charleston County, SC, USA\",\"Clark County, WA, USA\",\"Cobb County, GA, USA\",\"Davis County, UT, USA\",\"El Paso County, CO, USA\",\"Honolulu County, HI, USA\",\"Jackson County, OR, USA\",\"Jefferson County, WA, USA\",\"Klamath County, OR, USA\",\"Madera County, CA, USA\",\"Pierce County, WA, USA\",\"Tulsa County, OK, USA\",\"Douglas County, CO, USA\",\"Providence County, RI, USA\",\"Chatham County, NC, USA\",\"Delaware County, PA, USA\",\"Douglas County, NE, USA\",\"Fayette County, KY, USA\",\"Marion County, IN, USA\",\"Middlesex County, MA, USA\",\"Nassau County, NY, USA\",\"Ramsey County, MN, USA\",\"Washoe County, NV, USA\",\"Wayne County, PA, USA\",\"Yolo County, CA, USA\",\"Santa Clara County, CA, USA\",\"Clark County, NV, USA\",\"Fort Bend County, TX, USA\",\"Grant County, WA, USA\",\"Santa Rosa County, FL, USA\",\"Williamson County, TN, USA\",\"New York County, NY, USA\",\"Montgomery County, MD, USA\",\"Suffolk County, MA, USA\",\"Denver County, CO, USA\",\"Summit County, CO, USA\",\"Bergen County, NJ, USA\",\"Harris County, TX, USA\",\"San Francisco County, CA, USA\",\"Contra Costa County, CA, USA\",\"Orange County, CA, USA\",\"Norfolk County, MA, USA\",\"Maricopa County, AZ, USA\",\"Wake County, NC, USA\",\"Westchester County, NY, USA\",\"Grafton County, NH, USA\",\"Hillsborough County, FL, USA\",\"Placer County, CA, USA\",\"San Mateo County, CA, USA\",\"Sonoma County, CA, USA\",\"Umatilla County, OR, USA\",\"Fulton County, GA, USA\",\"Washington County, OR, USA\",\"Snohomish County, WA, USA\",\"Humboldt County, CA, USA\",\"Sacramento County, CA, USA\",\"San Diego County, CA, USA\",\"San Benito County, CA, USA\",\"Los Angeles County, CA, USA\",\"King County, WA, USA\",\"Cook County, IL, USA\",\"Skagit County, WA, USA\",\"Thurston County, WA, USA\",\"Whatcom County, WA, USA\",\"Marin County, CA, USA\",\"Calaveras County, CA, USA\",\"Stanislaus County, CA, USA\",\"Essex County, MA, USA\",\"Charlton County, GA, USA\",\"Collier County, FL, USA\",\"Pinellas County, FL, USA\",\"Alachua County, FL, USA\",\"Nassau County, FL, USA\",\"Pasco County, FL, USA\",\"Dallas County, TX, USA\",\"Tarrant County, TX, USA\",\"Montgomery County, TX, USA\",\"Middlesex County, NJ, USA\",\"Jefferson County, CO, USA\",\"Multnomah County, OR, USA\",\"Polk County, OR, USA\",\"Deschutes County, OR, USA\",\"McHenry County, IL, USA\",\"Lake County, IL, USA\",\"Bucks County, PA, USA\",\"Lancaster County, SC, USA\",\"Sullivan County, TN, USA\",\"Johnson County, IN, USA\",\"Howard County, IN, USA\",\"St. Joseph County, IN, USA\",\"Knox County, NE, USA\",\"Stark County, OH, USA\",\"Anoka County, MN, USA\",\"Olmsted County, MN, USA\",\"Summit County, UT, USA\",\"Fairfield County, CT, USA\",\"Litchfield County, CT, USA\",\"Orleans County, LA, USA\",\"Pennington County, SD, USA\",\"Beadle County, SD, USA\",\"Charles Mix County, SD, USA\",\"Davison County, SD, USA\",\"Minnehaha County, SD, USA\",\"Bon Homme County, SD, USA\",\"Socorro County, NM, USA\",\"Bernalillo County, NM, USA\",\"Oakland County, MI, USA\",\"Wayne County, MI, USA\",\"New Castle County, DE, USA\",\"AUS\",\"USA\",\"CHN\",\"GBR\",\"ITA\",\"Accomack County, VA, USA\",\"Albemarle County, VA, USA\",\"Alexandria County, VA, USA\",\"Alleghany County, VA, USA\",\"Amelia County, VA, USA\",\"Amherst County, VA, USA\",\"Appomattox County, VA, USA\",\"Arlington County, VA, USA\",\"Augusta County, VA, USA\",\"Bath County, VA, USA\",\"Bedford County, VA, USA\",\"Bland County, VA, USA\",\"Botetourt County, VA, USA\",\"Bristol County, VA, USA\",\"Brunswick County, VA, USA\",\"Buchanan County, VA, USA\",\"Buckingham County, VA, USA\",\"Buena Vista County, VA, USA\",\"Campbell County, VA, USA\",\"Caroline County, VA, USA\",\"Carroll County, VA, USA\",\"Charles City County, VA, USA\",\"Charlotte County, VA, USA\",\"Charlottesville County, VA, USA\",\"Chesapeake County, VA, USA\",\"Chesterfield County, VA, USA\",\"Clarke County, VA, USA\",\"Colonial Heights County, VA, USA\",\"Covington County, VA, USA\",\"Craig County, VA, USA\",\"Culpeper County, VA, USA\",\"Cumberland County, VA, USA\",\"Danville County, VA, USA\",\"Dickenson County, VA, USA\",\"Dinwiddie County, VA, USA\",\"Emporia County, VA, USA\",\"Essex County, VA, USA\",\"Fairfax city, VA, USA\",\"Fairfax County, VA, USA\",\"Falls Church County, VA, USA\",\"Fauquier County, VA, USA\",\"Floyd County, VA, USA\",\"Fluvanna County, VA, USA\",\"Franklin city, VA, USA\",\"Franklin County, VA, USA\",\"Frederick County, VA, USA\",\"Fredericksburg County, VA, USA\",\"Galax County, VA, USA\",\"Giles County, VA, USA\",\"Gloucester County, VA, USA\",\"Goochland County, VA, USA\",\"Grayson County, VA, USA\",\"Greene County, VA, USA\",\"Greensville County, VA, USA\",\"Halifax County, VA, USA\",\"Hampton County, VA, USA\",\"Hanover County, VA, USA\",\"Harrisonburg County, VA, USA\",\"Henrico County, VA, USA\",\"Henry County, VA, USA\",\"Highland County, VA, USA\",\"Hopewell County, VA, USA\",\"Isle of Wight County, VA, USA\",\"James City County, VA, USA\",\"King and Queen County, VA, USA\",\"King George County, VA, USA\",\"King William County, VA, USA\",\"Lancaster County, VA, USA\",\"Lee County, VA, USA\",\"Lexington County, VA, USA\",\"Loudoun County, VA, USA\",\"Louisa County, VA, USA\",\"Lunenburg County, VA, USA\",\"Lynchburg County, VA, USA\",\"Madison County, VA, USA\",\"Manassas County, VA, USA\",\"Manassas Park County, VA, USA\",\"Martinsville County, VA, USA\",\"Mathews County, VA, USA\",\"Mecklenburg County, VA, USA\",\"Middlesex County, VA, USA\",\"Montgomery County, VA, USA\",\"Nelson County, VA, USA\",\"New Kent County, VA, USA\",\"Newport News County, VA, USA\",\"Norfolk County, VA, USA\",\"Northampton County, VA, USA\",\"Northumberland County, VA, USA\",\"Norton County, VA, USA\",\"Nottoway County, VA, USA\",\"Orange County, VA, USA\",\"Page County, VA, USA\",\"Patrick County, VA, USA\",\"Petersburg County, VA, USA\",\"Pittsylvania County, VA, USA\",\"Poquoson County, VA, USA\",\"Portsmouth County, VA, USA\",\"Powhatan County, VA, USA\",\"Prince Edward County, VA, USA\",\"Prince George County, VA, USA\",\"Prince William County, VA, USA\",\"Pulaski County, VA, USA\",\"Radford County, VA, USA\",\"Rappahannock County, VA, USA\",\"Richmond city, VA, USA\",\"Richmond County, VA, USA\",\"Roanoke city, VA, USA\",\"Roanoke County, VA, USA\",\"Rockbridge County, VA, USA\",\"Rockingham County, VA, USA\",\"Russell County, VA, USA\",\"Salem County, VA, USA\",\"Scott County, VA, USA\",\"Shenandoah County, VA, USA\",\"Smyth County, VA, USA\",\"Southampton County, VA, USA\",\"Spotsylvania County, VA, USA\",\"Stafford County, VA, USA\",\"Staunton County, VA, USA\",\"Suffolk County, VA, USA\",\"Surry County, VA, USA\",\"Sussex County, VA, USA\",\"Tazewell County, VA, USA\",\"Virginia Beach County, VA, USA\",\"Warren County, VA, USA\",\"Washington County, VA, USA\",\"Waynesboro County, VA, USA\",\"Westmoreland County, VA, USA\",\"Williamsburg County, VA, USA\",\"Winchester County, VA, USA\",\"Wise County, VA, USA\",\"Wythe County, VA, USA\",\"York County, VA, USA\",\"VA, USA\",\"Ontario, CAN\",\"British Columbia, CAN\",\"CAN\",\"Bexar County, TX, USA\",\"Abruzzo, ITA\",\"Basilicata, ITA\",\"P.A. Bolzano, ITA\",\"Calabria, ITA\",\"Campania, ITA\",\"Emilia Romagna, ITA\",\"Friuli Venezia Giulia, ITA\",\"Lazio, ITA\",\"Liguria, ITA\",\"Lombardia, ITA\",\"Marche, ITA\",\"Molise, ITA\",\"Piemonte, ITA\",\"Puglia, ITA\",\"Sardegna, ITA\",\"Sicilia, ITA\",\"Toscana, ITA\",\"P.A. Trento, ITA\",\"Umbria, ITA\",\"Valle d'Aosta, ITA\",\"Veneto, ITA\",\"Spokane County, WA, USA\",\"Salt Lake County, UT, USA\",\"Zurich, CHE\",\"Andalucía, ESP\",\"Aragón, ESP\",\"Asturias, ESP\",\"Baleares, ESP\",\"Canarias, ESP\",\"Cantabria, ESP\",\"Castilla-La Mancha, ESP\",\"Castilla y León, ESP\",\"Cataluña, ESP\",\"Ceuta, ESP\",\"C. Valenciana, ESP\",\"Extremadura, ESP\",\"Galicia, ESP\",\"Madrid, ESP\",\"Melilla, ESP\",\"Murcia, ESP\",\"Navarra, ESP\",\"País Vasco, ESP\",\"La Rioja, ESP\",\"Quebec, CAN\",\"New York City, NY, USA\",\"(unassigned), RI, USA\",\"Walla Walla County, WA, USA\",\"Chelan County, WA, USA\",\"AG, CHE\",\"AI, CHE\",\"AR, CHE\",\"BE, CHE\",\"BL, CHE\",\"BS, CHE\",\"FR, CHE\",\"GE, CHE\",\"GL, CHE\",\"GR, CHE\",\"JU, CHE\",\"LU, CHE\",\"NE, CHE\",\"NW, CHE\",\"OW, CHE\",\"SG, CHE\",\"SH, CHE\",\"SO, CHE\",\"SZ, CHE\",\"TG, CHE\",\"TI, CHE\",\"UR, CHE\",\"VD, CHE\",\"VS, CHE\",\"ZG, CHE\",\"ZH, CHE\",\"Washington County, UT, USA\",\"District of Columbia, DC, USA\",\"Alberta, CAN\",\"Floyd County, GA, USA\",\"Jefferson Parish, LA, USA\",\"Virginia Beach city, VA, USA\",\"San Joaquin County, CA, USA\",\"Adams County, IN, USA\",\"Repatriated Travellers, CAN\",\"Jefferson County, AR, USA\",\"Pitkin County, CO, USA\",\"Miami-Dade County, FL, USA\",\"St. Johns County, FL, USA\",\"Bartow County, GA, USA\",\"Lee County, GA, USA\",\"Lowndes County, GA, USA\",\"Caddo Parish, LA, USA\",\"Baltimore County, MD, USA\",\"Forrest County, MS, USA\",\"Santa Fe County, NM, USA\",\"Monroe County, NY, USA\",\"Ward County, ND, USA\",\"Linn County, OR, USA\",\"Chittenden County, VT, USA\",\"Island County, WA, USA\",\"Fond du Lac County, WI, USA\",\"Waukesha County, WI, USA\",\"Sheridan County, WY, USA\",\"DE-BB, DEU\",\"DE-BE, DEU\",\"DE-BW, DEU\",\"DE-BY, DEU\",\"DE-HE, DEU\",\"DE-HB, DEU\",\"DE-HH, DEU\",\"DE-MV, DEU\",\"DE-NI, DEU\",\"DE-NW, DEU\",\"DE-RP, DEU\",\"DE-SL, DEU\",\"DE-SN, DEU\",\"DE-SH, DEU\",\"DE-ST, DEU\",\"DE-TH, DEU\",\"CUB\",\"GUY\",\"Australian Capital Territory, AUS\",\"KAZ\",\"French Polynesia, FRA\",\"ETH\",\"SDN\",\"GIN\",\"KEN\",\"ATG\",\"AL, USA\",\"URY\",\"GHA\",\"PR, USA\",\"NAM\",\"SYC\",\"TTO\",\"VEN\",\"SWZ\",\"GAB\",\"GTM\",\"MRT\",\"RWA\",\"LCA\",\"VCT\",\"SUR\",\"French Guiana, FRA\",\"GU, USA\",\"XKX\",\"CAF\",\"COG\",\"GNQ\",\"Mayotte, FRA\",\"UZB\",\"Guadeloupe, FRA\",\"BEN\",\"LBR\",\"Curacao, NLD\",\"SOM\",\"TZA\",\"VI, USA\",\"Cayman Islands, GBR\",\"Reunion, FRA\",\"BRB\",\"MNE\",\"KGZ\",\"MUS\",\"Aruba, NLD\",\"ZMB\",\"DJI\",\"GMB\",\"Montserrat, GBR\",\"BHS\",\"Greenland, DNK\",\"New Caledonia, FRA\",\"Bermuda, GBR\",\"TCD\",\"SLV\",\"FJI\",\"NIC\",\"MDG\",\"HTI\",\"AGO\",\"CPV\",\"Sint Maarten, NLD\",\"NER\",\"PNG\",\"Isle of Man, GBR\",\"ZWE\",\"TLS\",\"ERI\",\"UGA\",\"DMA\",\"GRD\",\"MOZ\",\"SYR\",\"GLP\",\"MYT\",\"GRL\",\"GUM\",\"GGY\",\"JEY\",\"PRI\",\"Saskatchewan, CAN\",\"Manitoba, CAN\",\"New Brunswick, CAN\",\"Anchorage, AK, USA\",\"Pulaski County, AR, USA\",\"Tulare County, CA, USA\",\"Adams County, CO, USA\",\"Carroll County, IA, USA\",\"Wyandotte County, KS, USA\",\"Montgomery County, KY, USA\",\"Androscoggin County, ME, USA\",\"Ingham County, MI, USA\",\"Kent County, MI, USA\",\"Montcalm County, MI, USA\",\"St. Clair County, MI, USA\",\"Washtenaw County, MI, USA\",\"Dakota County, MN, USA\",\"Hennepin County, MN, USA\",\"Stearns County, MN, USA\",\"Greene County, MO, USA\",\"Cass County, NE, USA\",\"Carson City, NV, USA\",\"Essex County, NJ, USA\",\"Morris County, NJ, USA\",\"(unassigned), NJ, USA\",\"Cabarrus County, NC, USA\",\"Forsyth County, NC, USA\",\"Johnston County, NC, USA\",\"Mecklenburg County, NC, USA\",\"Onslow County, NC, USA\",\"Trumbull County, OH, USA\",\"Clackamas County, OR, USA\",\"Alexandria city, VA, USA\",\"James City, VA, USA\",\"Columbia County, WA, USA\",\"Grays Harbor County, WA, USA\",\"Yakima County, WA, USA\",\"Baker County, FL, USA\",\"Bay County, FL, USA\",\"Bradford County, FL, USA\",\"Brevard County, FL, USA\",\"Calhoun County, FL, USA\",\"Citrus County, FL, USA\",\"Clay County, FL, USA\",\"Columbia County, FL, USA\",\"DeSoto County, FL, USA\",\"Dixie County, FL, USA\",\"Duval County, FL, USA\",\"Escambia County, FL, USA\",\"Flagler County, FL, USA\",\"Franklin County, FL, USA\",\"Gadsden County, FL, USA\",\"Gilchrist County, FL, USA\",\"Glades County, FL, USA\",\"Gulf County, FL, USA\",\"Hamilton County, FL, USA\",\"Hardee County, FL, USA\",\"Hendry County, FL, USA\",\"Hernando County, FL, USA\",\"Highlands County, FL, USA\",\"Holmes County, FL, USA\",\"Indian River County, FL, USA\",\"Jackson County, FL, USA\",\"Jefferson County, FL, USA\",\"Lafayette County, FL, USA\",\"Lake County, FL, USA\",\"Leon County, FL, USA\",\"Levy County, FL, USA\",\"Liberty County, FL, USA\",\"Madison County, FL, USA\",\"Marion County, FL, USA\",\"Martin County, FL, USA\",\"Monroe County, FL, USA\",\"Okeechobee County, FL, USA\",\"Orange County, FL, USA\",\"Osceola County, FL, USA\",\"Palm Beach County, FL, USA\",\"Polk County, FL, USA\",\"Putnam County, FL, USA\",\"St. Lucie County, FL, USA\",\"Sarasota County, FL, USA\",\"Seminole County, FL, USA\",\"Sumter County, FL, USA\",\"Suwannee County, FL, USA\",\"Taylor County, FL, USA\",\"Union County, FL, USA\",\"Wakulla County, FL, USA\",\"Walton County, FL, USA\",\"Washington County, FL, USA\",\"Lafourche Parish, LA, USA\",\"Orleans Parish, LA, USA\",\"Albany County, NY, USA\",\"Allegany County, NY, USA\",\"Bronx County, NY, USA\",\"Broome County, NY, USA\",\"Cattaraugus County, NY, USA\",\"Cayuga County, NY, USA\",\"Chautauqua County, NY, USA\",\"Chemung County, NY, USA\",\"Chenango County, NY, USA\",\"Clinton County, NY, USA\",\"Columbia County, NY, USA\",\"Cortland County, NY, USA\",\"Delaware County, NY, USA\",\"Dutchess County, NY, USA\",\"Erie County, NY, USA\",\"Essex County, NY, USA\",\"Franklin County, NY, USA\",\"Fulton County, NY, USA\",\"Genesee County, NY, USA\",\"Greene County, NY, USA\",\"Hamilton County, NY, USA\",\"Herkimer County, NY, USA\",\"Jefferson County, NY, USA\",\"Kings County, NY, USA\",\"Lewis County, NY, USA\",\"Livingston County, NY, USA\",\"Madison County, NY, USA\",\"Montgomery County, NY, USA\",\"Niagara County, NY, USA\",\"Oneida County, NY, USA\",\"Onondaga County, NY, USA\",\"Ontario County, NY, USA\",\"Orange County, NY, USA\",\"Orleans County, NY, USA\",\"Oswego County, NY, USA\",\"Otsego County, NY, USA\",\"Putnam County, NY, USA\",\"Queens County, NY, USA\",\"Rensselaer County, NY, USA\",\"Richmond County, NY, USA\",\"St. Lawrence County, NY, USA\",\"Schenectady County, NY, USA\",\"Schoharie County, NY, USA\",\"Schuyler County, NY, USA\",\"Seneca County, NY, USA\",\"Steuben County, NY, USA\",\"Sullivan County, NY, USA\",\"Tioga County, NY, USA\",\"Tompkins County, NY, USA\",\"Warren County, NY, USA\",\"Washington County, NY, USA\",\"Wayne County, NY, USA\",\"Wyoming County, NY, USA\",\"Yates County, NY, USA\",\"Allegheny County, PA, USA\",\"Armstrong County, PA, USA\",\"Beaver County, PA, USA\",\"Bedford County, PA, USA\",\"Berks County, PA, USA\",\"Blair County, PA, USA\",\"Bradford County, PA, USA\",\"Butler County, PA, USA\",\"Cambria County, PA, USA\",\"Cameron County, PA, USA\",\"Carbon County, PA, USA\",\"Centre County, PA, USA\",\"Chester County, PA, USA\",\"Clarion County, PA, USA\",\"Clearfield County, PA, USA\",\"Clinton County, PA, USA\",\"Columbia County, PA, USA\",\"Crawford County, PA, USA\",\"Cumberland County, PA, USA\",\"Dauphin County, PA, USA\",\"Elk County, PA, USA\",\"Erie County, PA, USA\",\"Fayette County, PA, USA\",\"Forest County, PA, USA\",\"Franklin County, PA, USA\",\"Fulton County, PA, USA\",\"Greene County, PA, USA\",\"Huntingdon County, PA, USA\",\"Indiana County, PA, USA\",\"Jefferson County, PA, USA\",\"Juniata County, PA, USA\",\"Lackawanna County, PA, USA\",\"Lancaster County, PA, USA\",\"Lawrence County, PA, USA\",\"Lebanon County, PA, USA\",\"Lehigh County, PA, USA\",\"Luzerne County, PA, USA\",\"Lycoming County, PA, USA\",\"McKean County, PA, USA\",\"Mercer County, PA, USA\",\"Mifflin County, PA, USA\",\"Montour County, PA, USA\",\"Northampton County, PA, USA\",\"Northumberland County, PA, USA\",\"Perry County, PA, USA\",\"Pike County, PA, USA\",\"Potter County, PA, USA\",\"Schuylkill County, PA, USA\",\"Snyder County, PA, USA\",\"Somerset County, PA, USA\",\"Sullivan County, PA, USA\",\"Susquehanna County, PA, USA\",\"Tioga County, PA, USA\",\"Union County, PA, USA\",\"Venango County, PA, USA\",\"Warren County, PA, USA\",\"Washington County, PA, USA\",\"Westmoreland County, PA, USA\",\"Wyoming County, PA, USA\",\"York County, PA, USA\",\"(unassigned), TN, USA\",\"Anderson County, TN, USA\",\"Bedford County, TN, USA\",\"Benton County, TN, USA\",\"Bledsoe County, TN, USA\",\"Blount County, TN, USA\",\"Bradley County, TN, USA\",\"Campbell County, TN, USA\",\"Cannon County, TN, USA\",\"Carroll County, TN, USA\",\"Carter County, TN, USA\",\"Cheatham County, TN, USA\",\"Chester County, TN, USA\",\"Claiborne County, TN, USA\",\"Clay County, TN, USA\",\"Cocke County, TN, USA\",\"Coffee County, TN, USA\",\"Crockett County, TN, USA\",\"Cumberland County, TN, USA\",\"Decatur County, TN, USA\",\"DeKalb County, TN, USA\",\"Dickson County, TN, USA\",\"Dyer County, TN, USA\",\"Fayette County, TN, USA\",\"Fentress County, TN, USA\",\"Franklin County, TN, USA\",\"Gibson County, TN, USA\",\"Giles County, TN, USA\",\"Grainger County, TN, USA\",\"Greene County, TN, USA\",\"Grundy County, TN, USA\",\"Hamblen County, TN, USA\",\"Hamilton County, TN, USA\",\"Hancock County, TN, USA\",\"Hardeman County, TN, USA\",\"Hardin County, TN, USA\",\"Hawkins County, TN, USA\",\"Haywood County, TN, USA\",\"Henderson County, TN, USA\",\"Henry County, TN, USA\",\"Hickman County, TN, USA\",\"Houston County, TN, USA\",\"Humphreys County, TN, USA\",\"Jackson County, TN, USA\",\"Jefferson County, TN, USA\",\"Johnson County, TN, USA\",\"Knox County, TN, USA\",\"Lake County, TN, USA\",\"Lauderdale County, TN, USA\",\"Lawrence County, TN, USA\",\"Lewis County, TN, USA\",\"Lincoln County, TN, USA\",\"Loudon County, TN, USA\",\"Macon County, TN, USA\",\"Madison County, TN, USA\",\"Marion County, TN, USA\",\"Marshall County, TN, USA\",\"Maury County, TN, USA\",\"McMinn County, TN, USA\",\"McNairy County, TN, USA\",\"Meigs County, TN, USA\",\"Monroe County, TN, USA\",\"Montgomery County, TN, USA\",\"Moore County, TN, USA\",\"Morgan County, TN, USA\",\"Obion County, TN, USA\",\"Overton County, TN, USA\",\"Perry County, TN, USA\",\"Pickett County, TN, USA\",\"Polk County, TN, USA\",\"Putnam County, TN, USA\",\"Rhea County, TN, USA\",\"Roane County, TN, USA\",\"Robertson County, TN, USA\",\"Rutherford County, TN, USA\",\"Scott County, TN, USA\",\"Sequatchie County, TN, USA\",\"Sevier County, TN, USA\",\"Smith County, TN, USA\",\"Stewart County, TN, USA\",\"Sumner County, TN, USA\",\"Tipton County, TN, USA\",\"Trousdale County, TN, USA\",\"Unicoi County, TN, USA\",\"Union County, TN, USA\",\"Van Buren County, TN, USA\",\"Warren County, TN, USA\",\"Washington County, TN, USA\",\"Wayne County, TN, USA\",\"Weakley County, TN, USA\",\"White County, TN, USA\",\"Wilson County, TN, USA\",\"Clear Creek County, CO, USA\",\"Pueblo County, CO, USA\",\"Routt County, CO, USA\",\"Weld County, CO, USA\",\"Gordon County, GA, USA\",\"Henry County, GA, USA\",\"Ada County, ID, USA\",\"Butler County, KS, USA\",\"Cumberland County, ME, USA\",\"Anne Arundel County, MD, USA\",\"Charles County, MD, USA\",\"Bay County, MI, USA\",\"Charlevoix County, MI, USA\",\"Leelanau County, MI, USA\",\"Macomb County, MI, USA\",\"Wright County, MN, USA\",\"Henry County, MO, USA\",\"Gallatin County, MT, USA\",\"Lewis and Clark County, MT, USA\",\"Silver Bow County, MT, USA\",\"Yellowstone County, MT, USA\",\"Oklahoma County, OK, USA\",\"(unassigned), PR, USA\",\"McCook County, SD, USA\",\"Harrisonburg city, VA, USA\",\"Milwaukee County, WI, USA\",\"Racine County, WI, USA\",\"Sheboygan County, WI, USA\",\"Fremont County, WY, USA\",\"Elmore County, AL, USA\",\"Jefferson County, AL, USA\",\"Limestone County, AL, USA\",\"Montgomery County, AL, USA\",\"Tuscaloosa County, AL, USA\",\"Autauga County, AL, USA\",\"Baldwin County, AL, USA\",\"Barbour County, AL, USA\",\"Bibb County, AL, USA\",\"Blount County, AL, USA\",\"Bullock County, AL, USA\",\"Butler County, AL, USA\",\"Calhoun County, AL, USA\",\"Chambers County, AL, USA\",\"Cherokee County, AL, USA\",\"Chilton County, AL, USA\",\"Choctaw County, AL, USA\",\"Clarke County, AL, USA\",\"Clay County, AL, USA\",\"Cleburne County, AL, USA\",\"Coffee County, AL, USA\",\"Colbert County, AL, USA\",\"Conecuh County, AL, USA\",\"Coosa County, AL, USA\",\"Covington County, AL, USA\",\"Crenshaw County, AL, USA\",\"Cullman County, AL, USA\",\"Dale County, AL, USA\",\"Dallas County, AL, USA\",\"DeKalb County, AL, USA\",\"Escambia County, AL, USA\",\"Etowah County, AL, USA\",\"Fayette County, AL, USA\",\"Franklin County, AL, USA\",\"Geneva County, AL, USA\",\"Greene County, AL, USA\",\"Hale County, AL, USA\",\"Henry County, AL, USA\",\"Houston County, AL, USA\",\"Jackson County, AL, USA\",\"Lamar County, AL, USA\",\"Lauderdale County, AL, USA\",\"Lawrence County, AL, USA\",\"Lee County, AL, USA\",\"Lowndes County, AL, USA\",\"Macon County, AL, USA\",\"Madison County, AL, USA\",\"Marengo County, AL, USA\",\"Marion County, AL, USA\",\"Marshall County, AL, USA\",\"Mobile County, AL, USA\",\"Monroe County, AL, USA\",\"Morgan County, AL, USA\",\"Perry County, AL, USA\",\"Pickens County, AL, USA\",\"Pike County, AL, USA\",\"Randolph County, AL, USA\",\"Russell County, AL, USA\",\"St. Clair County, AL, USA\",\"Shelby County, AL, USA\",\"Sumter County, AL, USA\",\"Talladega County, AL, USA\",\"Tallapoosa County, AL, USA\",\"Walker County, AL, USA\",\"Washington County, AL, USA\",\"Wilcox County, AL, USA\",\"Winston County, AL, USA\",\"Kent County, DE, USA\",\"Sussex County, DE, USA\",\"Harrison County, IA, USA\",\"DeKalb County, IN, USA\",\"Tippecanoe County, IN, USA\",\"Elkhart County, IN, USA\",\"Madison County, IN, USA\",\"Jackson County, IN, USA\",\"Vanderburgh County, IN, USA\",\"Grant County, IN, USA\",\"Porter County, IN, USA\",\"Hamilton County, IN, USA\",\"Lake County, IN, USA\",\"Morgan County, IN, USA\",\"LaPorte County, IN, USA\",\"Floyd County, IN, USA\",\"Shelby County, IN, USA\",\"Allen County, IN, USA\",\"Tipton County, IN, USA\",\"Rush County, IN, USA\",\"Orange County, IN, USA\",\"Crawford County, IN, USA\",\"Owen County, IN, USA\",\"Fountain County, IN, USA\",\"Decatur County, IN, USA\",\"Fulton County, IN, USA\",\"LaGrange County, IN, USA\",\"Knox County, IN, USA\",\"Monroe County, IN, USA\",\"Cass County, IN, USA\",\"Randolph County, IN, USA\",\"Martin County, IN, USA\",\"Washington County, IN, USA\",\"Parke County, IN, USA\",\"Kosciusko County, IN, USA\",\"Wayne County, IN, USA\",\"Montgomery County, IN, USA\",\"Hancock County, IN, USA\",\"Vigo County, IN, USA\",\"Jefferson County, IN, USA\",\"Huntington County, IN, USA\",\"Harrison County, IN, USA\",\"Wabash County, IN, USA\",\"Delaware County, IN, USA\",\"Posey County, IN, USA\",\"Spencer County, IN, USA\",\"Ohio County, IN, USA\",\"Carroll County, IN, USA\",\"Warren County, IN, USA\",\"Franklin County, IN, USA\",\"Pulaski County, IN, USA\",\"Jay County, IN, USA\",\"Wells County, IN, USA\",\"Marshall County, IN, USA\",\"Sullivan County, IN, USA\",\"Brown County, IN, USA\",\"Ripley County, IN, USA\",\"Henry County, IN, USA\",\"Whitley County, IN, USA\",\"Dearborn County, IN, USA\",\"Blackford County, IN, USA\",\"Scott County, IN, USA\",\"Bartholomew County, IN, USA\",\"Jasper County, IN, USA\",\"Union County, IN, USA\",\"Vermillion County, IN, USA\",\"Benton County, IN, USA\",\"Clay County, IN, USA\",\"Lawrence County, IN, USA\",\"Clark County, IN, USA\",\"Miami County, IN, USA\",\"Fayette County, IN, USA\",\"Newton County, IN, USA\",\"Perry County, IN, USA\",\"Putnam County, IN, USA\",\"Starke County, IN, USA\",\"Greene County, IN, USA\",\"Pike County, IN, USA\",\"Warrick County, IN, USA\",\"Daviess County, IN, USA\",\"Dubois County, IN, USA\",\"Clinton County, IN, USA\",\"White County, IN, USA\",\"Switzerland County, IN, USA\",\"Steuben County, IN, USA\",\"Gibson County, IN, USA\",\"Jennings County, IN, USA\",\"St. Bernard Parish, LA, USA\",\"St. Charles Parish, LA, USA\",\"St. Tammany Parish, LA, USA\",\"Terrebonne Parish, LA, USA\",\"Barnstable County, MA, USA\",\"Bristol County, MA, USA\",\"Franklin County, MA, USA\",\"Hampden County, MA, USA\",\"Hampshire County, MA, USA\",\"Plymouth County, MA, USA\",\"Copiah County, MS, USA\",\"Pearl River County, MS, USA\",\"Leflore County, MS, USA\",\"Adams County, MS, USA\",\"Alcorn County, MS, USA\",\"Amite County, MS, USA\",\"Attala County, MS, USA\",\"Benton County, MS, USA\",\"Bolivar County, MS, USA\",\"Calhoun County, MS, USA\",\"Carroll County, MS, USA\",\"Chickasaw County, MS, USA\",\"Choctaw County, MS, USA\",\"Claiborne County, MS, USA\",\"Clarke County, MS, USA\",\"Clay County, MS, USA\",\"Coahoma County, MS, USA\",\"Covington County, MS, USA\",\"DeSoto County, MS, USA\",\"Franklin County, MS, USA\",\"George County, MS, USA\",\"Greene County, MS, USA\",\"Grenada County, MS, USA\",\"Hancock County, MS, USA\",\"Harrison County, MS, USA\",\"Hinds County, MS, USA\",\"Holmes County, MS, USA\",\"Humphreys County, MS, USA\",\"Issaquena County, MS, USA\",\"Itawamba County, MS, USA\",\"Jackson County, MS, USA\",\"Jasper County, MS, USA\",\"Jefferson County, MS, USA\",\"Jefferson Davis County, MS, USA\",\"Jones County, MS, USA\",\"Kemper County, MS, USA\",\"Lafayette County, MS, USA\",\"Lamar County, MS, USA\",\"Lauderdale County, MS, USA\",\"Lawrence County, MS, USA\",\"Leake County, MS, USA\",\"Lee County, MS, USA\",\"Lincoln County, MS, USA\",\"Lowndes County, MS, USA\",\"Madison County, MS, USA\",\"Marion County, MS, USA\",\"Marshall County, MS, USA\",\"Monroe County, MS, USA\",\"Montgomery County, MS, USA\",\"Neshoba County, MS, USA\",\"Newton County, MS, USA\",\"Noxubee County, MS, USA\",\"Oktibbeha County, MS, USA\",\"Panola County, MS, USA\",\"Perry County, MS, USA\",\"Pike County, MS, USA\",\"Pontotoc County, MS, USA\",\"Prentiss County, MS, USA\",\"Quitman County, MS, USA\",\"Rankin County, MS, USA\",\"Scott County, MS, USA\",\"Sharkey County, MS, USA\",\"Simpson County, MS, USA\",\"Smith County, MS, USA\",\"Stone County, MS, USA\",\"Sunflower County, MS, USA\",\"Tallahatchie County, MS, USA\",\"Tate County, MS, USA\",\"Tippah County, MS, USA\",\"Tishomingo County, MS, USA\",\"Tunica County, MS, USA\",\"Union County, MS, USA\",\"Walthall County, MS, USA\",\"Warren County, MS, USA\",\"Washington County, MS, USA\",\"Wayne County, MS, USA\",\"Webster County, MS, USA\",\"Wilkinson County, MS, USA\",\"Winston County, MS, USA\",\"Yalobusha County, MS, USA\",\"Yazoo County, MS, USA\",\"Rockingham County, NC, USA\",\"Guilford County, NC, USA\",\"Alamance County, NC, USA\",\"Alexander County, NC, USA\",\"Randolph County, NC, USA\",\"Wayne County, NC, USA\",\"Ashe County, NC, USA\",\"Alleghany County, NC, USA\",\"Currituck County, NC, USA\",\"Camden County, NC, USA\",\"Surry County, NC, USA\",\"Gates County, NC, USA\",\"Hertford County, NC, USA\",\"Northampton County, NC, USA\",\"Stokes County, NC, USA\",\"Warren County, NC, USA\",\"Vance County, NC, USA\",\"Granville County, NC, USA\",\"Caswell County, NC, USA\",\"Person County, NC, USA\",\"Pasquotank County, NC, USA\",\"Halifax County, NC, USA\",\"Wilkes County, NC, USA\",\"Watauga County, NC, USA\",\"Perquimans County, NC, USA\",\"Chowan County, NC, USA\",\"Avery County, NC, USA\",\"Yadkin County, NC, USA\",\"Dare County, NC, USA\",\"Franklin County, NC, USA\",\"Bertie County, NC, USA\",\"Orange County, NC, USA\",\"Durham County, NC, USA\",\"Nash County, NC, USA\",\"Mitchell County, NC, USA\",\"Edgecombe County, NC, USA\",\"Caldwell County, NC, USA\",\"Tyrrell County, NC, USA\",\"Yancey County, NC, USA\",\"Madison County, NC, USA\",\"Martin County, NC, USA\",\"Davie County, NC, USA\",\"Washington County, NC, USA\",\"Burke County, NC, USA\",\"Davidson County, NC, USA\",\"McDowell County, NC, USA\",\"Wilson County, NC, USA\",\"Buncombe County, NC, USA\",\"Haywood County, NC, USA\",\"Catawba County, NC, USA\",\"Pitt County, NC, USA\",\"Swain County, NC, USA\",\"Beaufort County, NC, USA\",\"Hyde County, NC, USA\",\"Greene County, NC, USA\",\"Rutherford County, NC, USA\",\"Lee County, NC, USA\",\"Cleveland County, NC, USA\",\"Jackson County, NC, USA\",\"Harnett County, NC, USA\",\"Graham County, NC, USA\",\"Henderson County, NC, USA\",\"Moore County, NC, USA\",\"Montgomery County, NC, USA\",\"Stanly County, NC, USA\",\"Transylvania County, NC, USA\",\"Polk County, NC, USA\",\"Lenoir County, NC, USA\",\"Craven County, NC, USA\",\"Macon County, NC, USA\",\"Cherokee County, NC, USA\",\"Pamlico County, NC, USA\",\"Sampson County, NC, USA\",\"Cumberland County, NC, USA\",\"Clay County, NC, USA\",\"Jones County, NC, USA\",\"Carteret County, NC, USA\",\"Union County, NC, USA\",\"Anson County, NC, USA\",\"Hoke County, NC, USA\",\"Duplin County, NC, USA\",\"Richmond County, NC, USA\",\"Scotland County, NC, USA\",\"Robeson County, NC, USA\",\"Bladen County, NC, USA\",\"Pender County, NC, USA\",\"Columbus County, NC, USA\",\"New Hanover County, NC, USA\",\"Brunswick County, NC, USA\",\"Iredell County, NC, USA\",\"Rowan County, NC, USA\",\"Lincoln County, NC, USA\",\"Gaston County, NC, USA\",\"Atlantic County, NJ, USA\",\"Cape May County, NJ, USA\",\"Cumberland County, NJ, USA\",\"Gloucester County, NJ, USA\",\"Hunterdon County, NJ, USA\",\"Mercer County, NJ, USA\",\"Ocean County, NJ, USA\",\"Salem County, NJ, USA\",\"Somerset County, NJ, USA\",\"Sussex County, NJ, USA\",\"Warren County, NJ, USA\",\"Baker County, OR, USA\",\"Benton County, OR, USA\",\"Clatsop County, OR, USA\",\"Columbia County, OR, USA\",\"Coos County, OR, USA\",\"Crook County, OR, USA\",\"Curry County, OR, USA\",\"Gilliam County, OR, USA\",\"Grant County, OR, USA\",\"Harney County, OR, USA\",\"Hood River County, OR, USA\",\"Jefferson County, OR, USA\",\"Josephine County, OR, USA\",\"Lake County, OR, USA\",\"Lane County, OR, USA\",\"Lincoln County, OR, USA\",\"Malheur County, OR, USA\",\"Morrow County, OR, USA\",\"Sherman County, OR, USA\",\"Tillamook County, OR, USA\",\"Union County, OR, USA\",\"Wallowa County, OR, USA\",\"Wasco County, OR, USA\",\"Wheeler County, OR, USA\",\"Yamhill County, OR, USA\",\"Bell County, TX, USA\",\"Smith County, TX, USA\",\"Travis County, TX, USA\",\"Anderson County, TX, USA\",\"Andrews County, TX, USA\",\"Angelina County, TX, USA\",\"Aransas County, TX, USA\",\"Archer County, TX, USA\",\"Armstrong County, TX, USA\",\"Atascosa County, TX, USA\",\"Austin County, TX, USA\",\"Bailey County, TX, USA\",\"Bandera County, TX, USA\",\"Bastrop County, TX, USA\",\"Baylor County, TX, USA\",\"Bee County, TX, USA\",\"Blanco County, TX, USA\",\"Borden County, TX, USA\",\"Bosque County, TX, USA\",\"Bowie County, TX, USA\",\"Brazoria County, TX, USA\",\"Brazos County, TX, USA\",\"Brewster County, TX, USA\",\"Briscoe County, TX, USA\",\"Brooks County, TX, USA\",\"Brown County, TX, USA\",\"Burleson County, TX, USA\",\"Burnet County, TX, USA\",\"Caldwell County, TX, USA\",\"Calhoun County, TX, USA\",\"Callahan County, TX, USA\",\"Cameron County, TX, USA\",\"Camp County, TX, USA\",\"Carson County, TX, USA\",\"Cass County, TX, USA\",\"Castro County, TX, USA\",\"Chambers County, TX, USA\",\"Cherokee County, TX, USA\",\"Childress County, TX, USA\",\"Clay County, TX, USA\",\"Cochran County, TX, USA\",\"Coke County, TX, USA\",\"Coleman County, TX, USA\",\"Collingsworth County, TX, USA\",\"Colorado County, TX, USA\",\"Comal County, TX, USA\",\"Comanche County, TX, USA\",\"Concho County, TX, USA\",\"Cooke County, TX, USA\",\"Coryell County, TX, USA\",\"Cottle County, TX, USA\",\"Crane County, TX, USA\",\"Crockett County, TX, USA\",\"Crosby County, TX, USA\",\"Culberson County, TX, USA\",\"Dallam County, TX, USA\",\"Dawson County, TX, USA\",\"Deaf Smith County, TX, USA\",\"Delta County, TX, USA\",\"Denton County, TX, USA\",\"DeWitt County, TX, USA\",\"Dickens County, TX, USA\",\"Dimmit County, TX, USA\",\"Donley County, TX, USA\",\"Duval County, TX, USA\",\"Eastland County, TX, USA\",\"Ector County, TX, USA\",\"Edwards County, TX, USA\",\"Ellis County, TX, USA\",\"El Paso County, TX, USA\",\"Erath County, TX, USA\",\"Falls County, TX, USA\",\"Fannin County, TX, USA\",\"Fayette County, TX, USA\",\"Fisher County, TX, USA\",\"Floyd County, TX, USA\",\"Foard County, TX, USA\",\"Franklin County, TX, USA\",\"Freestone County, TX, USA\",\"Frio County, TX, USA\",\"Gaines County, TX, USA\",\"Galveston County, TX, USA\",\"Garza County, TX, USA\",\"Gillespie County, TX, USA\",\"Glasscock County, TX, USA\",\"Goliad County, TX, USA\",\"Gonzales County, TX, USA\",\"Gray County, TX, USA\",\"Grayson County, TX, USA\",\"Grimes County, TX, USA\",\"Guadalupe County, TX, USA\",\"Hale County, TX, USA\",\"Hall County, TX, USA\",\"Hamilton County, TX, USA\",\"Hansford County, TX, USA\",\"Hardeman County, TX, USA\",\"Hardin County, TX, USA\",\"Harrison County, TX, USA\",\"Hartley County, TX, USA\",\"Haskell County, TX, USA\",\"Hays County, TX, USA\",\"Hemphill County, TX, USA\",\"Henderson County, TX, USA\",\"Hidalgo County, TX, USA\",\"Hill County, TX, USA\",\"Hockley County, TX, USA\",\"Hood County, TX, USA\",\"Hopkins County, TX, USA\",\"Houston County, TX, USA\",\"Howard County, TX, USA\",\"Hudspeth County, TX, USA\",\"Hunt County, TX, USA\",\"Hutchinson County, TX, USA\",\"Irion County, TX, USA\",\"Jack County, TX, USA\",\"Jackson County, TX, USA\",\"Jasper County, TX, USA\",\"Jeff Davis County, TX, USA\",\"Jefferson County, TX, USA\",\"Jim Hogg County, TX, USA\",\"Jim Wells County, TX, USA\",\"Johnson County, TX, USA\",\"Jones County, TX, USA\",\"Karnes County, TX, USA\",\"Kaufman County, TX, USA\",\"Kendall County, TX, USA\",\"Kenedy County, TX, USA\",\"Kent County, TX, USA\",\"Kerr County, TX, USA\",\"Kimble County, TX, USA\",\"King County, TX, USA\",\"Kinney County, TX, USA\",\"Kleberg County, TX, USA\",\"Knox County, TX, USA\",\"Lamar County, TX, USA\",\"Lamb County, TX, USA\",\"Lampasas County, TX, USA\",\"La Salle County, TX, USA\",\"Lavaca County, TX, USA\",\"Lee County, TX, USA\",\"Leon County, TX, USA\",\"Liberty County, TX, USA\",\"Limestone County, TX, USA\",\"Lipscomb County, TX, USA\",\"Live Oak County, TX, USA\",\"Llano County, TX, USA\",\"Loving County, TX, USA\",\"Lubbock County, TX, USA\",\"Lynn County, TX, USA\",\"McCulloch County, TX, USA\",\"McLennan County, TX, USA\",\"McMullen County, TX, USA\",\"Madison County, TX, USA\",\"Marion County, TX, USA\",\"Martin County, TX, USA\",\"Mason County, TX, USA\",\"Matagorda County, TX, USA\",\"Maverick County, TX, USA\",\"Medina County, TX, USA\",\"Menard County, TX, USA\",\"Midland County, TX, USA\",\"Milam County, TX, USA\",\"Mills County, TX, USA\",\"Mitchell County, TX, USA\",\"Montague County, TX, USA\",\"Moore County, TX, USA\",\"Morris County, TX, USA\",\"Motley County, TX, USA\",\"Nacogdoches County, TX, USA\",\"Navarro County, TX, USA\",\"Newton County, TX, USA\",\"Nolan County, TX, USA\",\"Nueces County, TX, USA\",\"Ochiltree County, TX, USA\",\"Oldham County, TX, USA\",\"Orange County, TX, USA\",\"Palo Pinto County, TX, USA\",\"Panola County, TX, USA\",\"Parker County, TX, USA\",\"Parmer County, TX, USA\",\"Pecos County, TX, USA\",\"Polk County, TX, USA\",\"Potter County, TX, USA\",\"Presidio County, TX, USA\",\"Rains County, TX, USA\",\"Randall County, TX, USA\",\"Reagan County, TX, USA\",\"Real County, TX, USA\",\"Red River County, TX, USA\",\"Reeves County, TX, USA\",\"Refugio County, TX, USA\",\"Roberts County, TX, USA\",\"Robertson County, TX, USA\",\"Rockwall County, TX, USA\",\"Runnels County, TX, USA\",\"Rusk County, TX, USA\",\"Sabine County, TX, USA\",\"San Augustine County, TX, USA\",\"San Jacinto County, TX, USA\",\"San Patricio County, TX, USA\",\"San Saba County, TX, USA\",\"Schleicher County, TX, USA\",\"Scurry County, TX, USA\",\"Shackelford County, TX, USA\",\"Shelby County, TX, USA\",\"Sherman County, TX, USA\",\"Somervell County, TX, USA\",\"Starr County, TX, USA\",\"Stephens County, TX, USA\",\"Sterling County, TX, USA\",\"Stonewall County, TX, USA\",\"Sutton County, TX, USA\",\"Swisher County, TX, USA\",\"Taylor County, TX, USA\",\"Terrell County, TX, USA\",\"Terry County, TX, USA\",\"Throckmorton County, TX, USA\",\"Titus County, TX, USA\",\"Tom Green County, TX, USA\",\"Trinity County, TX, USA\",\"Tyler County, TX, USA\",\"Upshur County, TX, USA\",\"Upton County, TX, USA\",\"Uvalde County, TX, USA\",\"Val Verde County, TX, USA\",\"Van Zandt County, TX, USA\",\"Victoria County, TX, USA\",\"Walker County, TX, USA\",\"Waller County, TX, USA\",\"Ward County, TX, USA\",\"Washington County, TX, USA\",\"Webb County, TX, USA\",\"Wharton County, TX, USA\",\"Wheeler County, TX, USA\",\"Wichita County, TX, USA\",\"Wilbarger County, TX, USA\",\"Willacy County, TX, USA\",\"Williamson County, TX, USA\",\"Wilson County, TX, USA\",\"Winkler County, TX, USA\",\"Wise County, TX, USA\",\"Wood County, TX, USA\",\"Yoakum County, TX, USA\",\"Young County, TX, USA\",\"Zapata County, TX, USA\",\"Zavala County, TX, USA\",\"(unassigned), WA, USA\",\"Mason County, WA, USA\",\"Skamania County, WA, USA\",\"Wahkiakum County, WA, USA\",\"Garfield County, WA, USA\",\"Stevens County, WA, USA\",\"Whitman County, WA, USA\",\"Adams County, WA, USA\",\"Asotin County, WA, USA\",\"Benton County, WA, USA\",\"Clallam County, WA, USA\",\"Cowlitz County, WA, USA\",\"Douglas County, WA, USA\",\"Ferry County, WA, USA\",\"Franklin County, WA, USA\",\"Klickitat County, WA, USA\",\"Lewis County, WA, USA\",\"Lincoln County, WA, USA\",\"Okanogan County, WA, USA\",\"Pacific County, WA, USA\",\"Pend Oreille County, WA, USA\",\"San Juan County, WA, USA\",\"Graham County, AZ, USA\",\"San Luis Obispo County, CA, USA\",\"Boulder County, CO, USA\",\"Coweta County, GA, USA\",\"Kauai County, HI, USA\",\"Blaine County, ID, USA\",\"Teton County, ID, USA\",\"Cumberland County, IL, USA\",\"DuPage County, IL, USA\",\"Sangamon County, IL, USA\",\"St. Clair County, IL, USA\",\"Woodford County, IL, USA\",\"Franklin County, KS, USA\",\"Bourbon County, KY, USA\",\"Nelson County, KY, USA\",\"Carroll County, MD, USA\",\"Monroe County, MI, USA\",\"Renville County, MN, USA\",\"Missoula County, MT, USA\",\"Sandoval County, NM, USA\",\"Jackson County, OK, USA\",\"Beaufort County, SC, USA\",\"Lexington County, SC, USA\",\"Washington County, VT, USA\",\"Windsor County, VT, USA\",\"(unassigned), VI, USA\",\"Mesa County, CO, USA\",\"Hartford County, CT, USA\",\"New Haven County, CT, USA\",\"Dallas County, IA, USA\",\"De Soto Parish, LA, USA\",\"St. John the Baptist Parish, LA, USA\",\"Sabine Parish, LA, USA\",\"Tangipahoa Parish, LA, USA\",\"Livingston Parish, LA, USA\",\"Calcasieu Parish, LA, USA\",\"Union Parish, LA, USA\",\"Caldwell Parish, LA, USA\",\"Tensas Parish, LA, USA\",\"Jackson Parish, LA, USA\",\"Grant Parish, LA, USA\",\"Lincoln Parish, LA, USA\",\"Jefferson Davis Parish, LA, USA\",\"Lafayette Parish, LA, USA\",\"East Carroll Parish, LA, USA\",\"East Feliciana Parish, LA, USA\",\"Iberville Parish, LA, USA\",\"Richland Parish, LA, USA\",\"St. Martin Parish, LA, USA\",\"Claiborne Parish, LA, USA\",\"St. Landry Parish, LA, USA\",\"Pointe Coupee Parish, LA, USA\",\"LaSalle Parish, LA, USA\",\"Webster Parish, LA, USA\",\"St. James Parish, LA, USA\",\"Morehouse Parish, LA, USA\",\"Rapides Parish, LA, USA\",\"Avoyelles Parish, LA, USA\",\"Winn Parish, LA, USA\",\"Catahoula Parish, LA, USA\",\"Assumption Parish, LA, USA\",\"Washington Parish, LA, USA\",\"East Baton Rouge Parish, LA, USA\",\"Natchitoches Parish, LA, USA\",\"Bienville Parish, LA, USA\",\"Bossier Parish, LA, USA\",\"Allen Parish, LA, USA\",\"Ouachita Parish, LA, USA\",\"St. Helena Parish, LA, USA\",\"West Feliciana Parish, LA, USA\",\"West Carroll Parish, LA, USA\",\"Concordia Parish, LA, USA\",\"West Baton Rouge Parish, LA, USA\",\"Madison Parish, LA, USA\",\"Ascension Parish, LA, USA\",\"Acadia Parish, LA, USA\",\"Beauregard Parish, LA, USA\",\"Franklin Parish, LA, USA\",\"Evangeline Parish, LA, USA\",\"Vernon Parish, LA, USA\",\"Red River Parish, LA, USA\",\"Vermilion Parish, LA, USA\",\"Plaquemines Parish, LA, USA\",\"St. Mary Parish, LA, USA\",\"Cameron Parish, LA, USA\",\"Iberia Parish, LA, USA\",\"(unassigned), LA, USA\",\"Belmont County, OH, USA\",\"Butler County, OH, USA\",\"Franklin County, OH, USA\",\"Lorain County, OH, USA\",\"Summit County, OH, USA\",\"Adams County, OH, USA\",\"Allen County, OH, USA\",\"Ashland County, OH, USA\",\"Ashtabula County, OH, USA\",\"Athens County, OH, USA\",\"Auglaize County, OH, USA\",\"Brown County, OH, USA\",\"Carroll County, OH, USA\",\"Champaign County, OH, USA\",\"Clark County, OH, USA\",\"Clermont County, OH, USA\",\"Clinton County, OH, USA\",\"Columbiana County, OH, USA\",\"Coshocton County, OH, USA\",\"Crawford County, OH, USA\",\"Darke County, OH, USA\",\"Defiance County, OH, USA\",\"Delaware County, OH, USA\",\"Erie County, OH, USA\",\"Fairfield County, OH, USA\",\"Fayette County, OH, USA\",\"Fulton County, OH, USA\",\"Gallia County, OH, USA\",\"Geauga County, OH, USA\",\"Greene County, OH, USA\",\"Guernsey County, OH, USA\",\"Hamilton County, OH, USA\",\"Hancock County, OH, USA\",\"Hardin County, OH, USA\",\"Harrison County, OH, USA\",\"Henry County, OH, USA\",\"Highland County, OH, USA\",\"Hocking County, OH, USA\",\"Holmes County, OH, USA\",\"Huron County, OH, USA\",\"Jackson County, OH, USA\",\"Jefferson County, OH, USA\",\"Knox County, OH, USA\",\"Lake County, OH, USA\",\"Lawrence County, OH, USA\",\"Licking County, OH, USA\",\"Logan County, OH, USA\",\"Lucas County, OH, USA\",\"Madison County, OH, USA\",\"Mahoning County, OH, USA\",\"Marion County, OH, USA\",\"Medina County, OH, USA\",\"Meigs County, OH, USA\",\"Mercer County, OH, USA\",\"Miami County, OH, USA\",\"Monroe County, OH, USA\",\"Montgomery County, OH, USA\",\"Morgan County, OH, USA\",\"Morrow County, OH, USA\",\"Muskingum County, OH, USA\",\"Noble County, OH, USA\",\"Ottawa County, OH, USA\",\"Paulding County, OH, USA\",\"Perry County, OH, USA\",\"Pickaway County, OH, USA\",\"Pike County, OH, USA\",\"Portage County, OH, USA\",\"Preble County, OH, USA\",\"Putnam County, OH, USA\",\"Richland County, OH, USA\",\"Ross County, OH, USA\",\"Sandusky County, OH, USA\",\"Scioto County, OH, USA\",\"Seneca County, OH, USA\",\"Shelby County, OH, USA\",\"Tuscarawas County, OH, USA\",\"Union County, OH, USA\",\"Van Wert County, OH, USA\",\"Vinton County, OH, USA\",\"Warren County, OH, USA\",\"Washington County, OH, USA\",\"Wayne County, OH, USA\",\"Williams County, OH, USA\",\"Wood County, OH, USA\",\"Wyandot County, OH, USA\",\"Aurora County, SD, USA\",\"Bennett County, SD, USA\",\"Brookings County, SD, USA\",\"Brown County, SD, USA\",\"Brule County, SD, USA\",\"Buffalo County, SD, USA\",\"Butte County, SD, USA\",\"Campbell County, SD, USA\",\"Clark County, SD, USA\",\"Clay County, SD, USA\",\"Codington County, SD, USA\",\"Corson County, SD, USA\",\"Custer County, SD, USA\",\"Day County, SD, USA\",\"Deuel County, SD, USA\",\"Dewey County, SD, USA\",\"Douglas County, SD, USA\",\"Edmunds County, SD, USA\",\"Fall River County, SD, USA\",\"Faulk County, SD, USA\",\"Grant County, SD, USA\",\"Gregory County, SD, USA\",\"Haakon County, SD, USA\",\"Hamlin County, SD, USA\",\"Hand County, SD, USA\",\"Hanson County, SD, USA\",\"Harding County, SD, USA\",\"Hughes County, SD, USA\",\"Hutchinson County, SD, USA\",\"Hyde County, SD, USA\",\"Jackson County, SD, USA\",\"Jerauld County, SD, USA\",\"Jones County, SD, USA\",\"Kingsbury County, SD, USA\",\"Lake County, SD, USA\",\"Lawrence County, SD, USA\",\"Lincoln County, SD, USA\",\"Lyman County, SD, USA\",\"Marshall County, SD, USA\",\"McPherson County, SD, USA\",\"Meade County, SD, USA\",\"Mellette County, SD, USA\",\"Miner County, SD, USA\",\"Moody County, SD, USA\",\"Oglala Lakota County, SD, USA\",\"Perkins County, SD, USA\",\"Potter County, SD, USA\",\"Roberts County, SD, USA\",\"Sanborn County, SD, USA\",\"Spink County, SD, USA\",\"Stanley County, SD, USA\",\"Sully County, SD, USA\",\"Todd County, SD, USA\",\"Tripp County, SD, USA\",\"Turner County, SD, USA\",\"Union County, SD, USA\",\"Walworth County, SD, USA\",\"Yankton County, SD, USA\",\"Ziebach County, SD, USA\",\"Bear River County, UT, USA\",\"San Juan County, UT, USA\",\"Tooele County, UT, USA\",\"Tri County, UT, USA\",\"Utah County, UT, USA\",\"Wasatch County, UT, USA\",\"Weber & Morgan Counties, UT, USA\",\"Beaver County, UT, USA\",\"Box Elder County, UT, USA\",\"Cache County, UT, USA\",\"Carbon County, UT, USA\",\"Emery County, UT, USA\",\"Garfield County, UT, USA\",\"Grand County, UT, USA\",\"Iron County, UT, USA\",\"Juab County, UT, USA\",\"Kane County, UT, USA\",\"Millard County, UT, USA\",\"Piute County, UT, USA\",\"Rich County, UT, USA\",\"Sanpete County, UT, USA\",\"Sevier County, UT, USA\",\"Wayne County, UT, USA\",\"Winnebago County, WI, USA\",\"Adams County, WI, USA\",\"Ashland County, WI, USA\",\"Barron County, WI, USA\",\"Bayfield County, WI, USA\",\"Brown County, WI, USA\",\"Buffalo County, WI, USA\",\"Burnett County, WI, USA\",\"Calumet County, WI, USA\",\"Chippewa County, WI, USA\",\"Clark County, WI, USA\",\"Columbia County, WI, USA\",\"Crawford County, WI, USA\",\"Dodge County, WI, USA\",\"Door County, WI, USA\",\"Douglas County, WI, USA\",\"Dunn County, WI, USA\",\"Eau Claire County, WI, USA\",\"Florence County, WI, USA\",\"Forest County, WI, USA\",\"Grant County, WI, USA\",\"Green County, WI, USA\",\"Green Lake County, WI, USA\",\"Iowa County, WI, USA\",\"Iron County, WI, USA\",\"Jackson County, WI, USA\",\"Jefferson County, WI, USA\",\"Juneau County, WI, USA\",\"Kenosha County, WI, USA\",\"Kewaunee County, WI, USA\",\"La Crosse County, WI, USA\",\"Lafayette County, WI, USA\",\"Langlade County, WI, USA\",\"Lincoln County, WI, USA\",\"Manitowoc County, WI, USA\",\"Marathon County, WI, USA\",\"Marinette County, WI, USA\",\"Marquette County, WI, USA\",\"Menominee County, WI, USA\",\"Monroe County, WI, USA\",\"Oconto County, WI, USA\",\"Oneida County, WI, USA\",\"Outagamie County, WI, USA\",\"Ozaukee County, WI, USA\",\"Pepin County, WI, USA\",\"Polk County, WI, USA\",\"Portage County, WI, USA\",\"Price County, WI, USA\",\"Richland County, WI, USA\",\"Rock County, WI, USA\",\"Rusk County, WI, USA\",\"Sauk County, WI, USA\",\"Sawyer County, WI, USA\",\"Shawano County, WI, USA\",\"St. Croix County, WI, USA\",\"Taylor County, WI, USA\",\"Trempealeau County, WI, USA\",\"Vernon County, WI, USA\",\"Vilas County, WI, USA\",\"Walworth County, WI, USA\",\"Washburn County, WI, USA\",\"Washington County, WI, USA\",\"Waupaca County, WI, USA\",\"Waushara County, WI, USA\",\"Wood County, WI, USA\",\"Newfoundland and Labrador, CAN\",\"Prince Edward Island, CAN\",\"Garland County, AR, USA\",\"Saline County, AR, USA\",\"Santa Barbara County, CA, USA\",\"Garfield County, CO, USA\",\"Clarke County, GA, USA\",\"Clayton County, GA, USA\",\"Dougherty County, GA, USA\",\"Newton County, GA, USA\",\"(unassigned), GU, USA\",\"Maui County, HI, USA\",\"Clinton County, IL, USA\",\"Whiteside County, IL, USA\",\"Winnebago County, IL, USA\",\"Allamakee County, IA, USA\",\"Polk County, IA, USA\",\"Clark County, KY, USA\",\"Lincoln County, ME, USA\",\"Howard County, MD, USA\",\"Ottawa County, MI, USA\",\"Waseca County, MN, USA\",\"Washington County, MN, USA\",\"Hillsborough County, NH, USA\",\"Cleveland County, OK, USA\",\"Kay County, OK, USA\",\"Payne County, OK, USA\",\"Anderson County, SC, USA\",\"Greenville County, SC, USA\",\"Horry County, SC, USA\",\"Butte County, CA, USA\",\"Kings County, CA, USA\",\"Mendocino County, CA, USA\",\"Merced County, CA, USA\",\"San Bernardino County, CA, USA\",\"(unassigned), MA, USA\",\"Baltimore City, MD, USA\",\"Nova Scotia, CAN\",\"Fairbanks North Star Borough, AK, USA\",\"Cleburne County, AR, USA\",\"Cleveland County, AR, USA\",\"Desha County, AR, USA\",\"Lincoln County, AR, USA\",\"Nevada County, CA, USA\",\"Forsyth County, GA, USA\",\"Hall County, GA, USA\",\"Paulding County, GA, USA\",\"Troup County, GA, USA\",\"Peoria County, IL, USA\",\"Will County, IL, USA\",\"(unassigned), ME, USA\",\"Frederick County, MD, USA\",\"Benton County, MN, USA\",\"Blue Earth County, MN, USA\",\"Cass County, MO, USA\",\"Carroll County, NH, USA\",\"Canadian County, OK, USA\",\"Fairfield County, SC, USA\",\"Orange County, VT, USA\",\"Barking and Dagenham, England, GBR\",\"Barnet, England, GBR\",\"Barnsley, England, GBR\",\"Bath and North East Somerset, England, GBR\",\"Bedford, England, GBR\",\"Bexley, England, GBR\",\"Birmingham, England, GBR\",\"Blackburn with Darwen, England, GBR\",\"Blackpool, England, GBR\",\"Bolton, England, GBR\",\"Bournemouth, Christchurch and Poole, England, GBR\",\"Bracknell Forest, England, GBR\",\"Bradford, England, GBR\",\"Brent, England, GBR\",\"Brighton and Hove, England, GBR\",\"Bristol, City of, England, GBR\",\"Bromley, England, GBR\",\"Buckinghamshire, England, GBR\",\"Bury, England, GBR\",\"Calderdale, England, GBR\",\"Cambridgeshire, England, GBR\",\"Camden, England, GBR\",\"Central Bedfordshire, England, GBR\",\"Cheshire East, England, GBR\",\"Cheshire West and Chester, England, GBR\",\"Cornwall and Isles of Scilly, England, GBR\",\"County Durham, England, GBR\",\"Coventry, England, GBR\",\"Croydon, England, GBR\",\"Cumbria, England, GBR\",\"Darlington, England, GBR\",\"Derby, England, GBR\",\"Derbyshire, England, GBR\",\"Devon, England, GBR\",\"Doncaster, England, GBR\",\"Dorset, England, GBR\",\"Dudley, England, GBR\",\"Ealing, England, GBR\",\"East Riding of Yorkshire, England, GBR\",\"East Sussex, England, GBR\",\"Enfield, England, GBR\",\"Essex, England, GBR\",\"Gateshead, England, GBR\",\"Gloucestershire, England, GBR\",\"Greenwich, England, GBR\",\"Hackney and City of London, England, GBR\",\"Halton, England, GBR\",\"Hammersmith and Fulham, England, GBR\",\"Hampshire, England, GBR\",\"Haringey, England, GBR\",\"Harrow, England, GBR\",\"Hartlepool, England, GBR\",\"Havering, England, GBR\",\"Herefordshire, County of, England, GBR\",\"Hertfordshire, England, GBR\",\"Hillingdon, England, GBR\",\"Hounslow, England, GBR\",\"Isle of Wight, England, GBR\",\"Islington, England, GBR\",\"Kensington and Chelsea, England, GBR\",\"Kent, England, GBR\",\"Kingston upon Hull, City of, England, GBR\",\"Kingston upon Thames, England, GBR\",\"Kirklees, England, GBR\",\"Knowsley, England, GBR\",\"Lambeth, England, GBR\",\"Lancashire, England, GBR\",\"Leeds, England, GBR\",\"Leicester, England, GBR\",\"Leicestershire, England, GBR\",\"Lewisham, England, GBR\",\"Lincolnshire, England, GBR\",\"Liverpool, England, GBR\",\"Luton, England, GBR\",\"Manchester, England, GBR\",\"Medway, England, GBR\",\"Merton, England, GBR\",\"Middlesbrough, England, GBR\",\"Milton Keynes, England, GBR\",\"Newcastle upon Tyne, England, GBR\",\"Newham, England, GBR\",\"Norfolk, England, GBR\",\"North East Lincolnshire, England, GBR\",\"North Lincolnshire, England, GBR\",\"North Somerset, England, GBR\",\"North Tyneside, England, GBR\",\"North Yorkshire, England, GBR\",\"Northamptonshire, England, GBR\",\"Northumberland, England, GBR\",\"Nottingham, England, GBR\",\"Nottinghamshire, England, GBR\",\"Oldham, England, GBR\",\"Oxfordshire, England, GBR\",\"Peterborough, England, GBR\",\"Plymouth, England, GBR\",\"Portsmouth, England, GBR\",\"Reading, England, GBR\",\"Redbridge, England, GBR\",\"Redcar and Cleveland, England, GBR\",\"Richmond upon Thames, England, GBR\",\"Rochdale, England, GBR\",\"Rotherham, England, GBR\",\"Rutland, England, GBR\",\"Salford, England, GBR\",\"Sandwell, England, GBR\",\"Sefton, England, GBR\",\"Sheffield, England, GBR\",\"Shropshire, England, GBR\",\"Slough, England, GBR\",\"Solihull, England, GBR\",\"Somerset, England, GBR\",\"South Gloucestershire, England, GBR\",\"South Tyneside, England, GBR\",\"Southampton, England, GBR\",\"Southend-on-Sea, England, GBR\",\"Southwark, England, GBR\",\"St. Helens, England, GBR\",\"Staffordshire, England, GBR\",\"Stockport, England, GBR\",\"Stockton-on-Tees, England, GBR\",\"Stoke-on-Trent, England, GBR\",\"Suffolk, England, GBR\",\"Sunderland, England, GBR\",\"Surrey, England, GBR\",\"Sutton, England, GBR\",\"Swindon, England, GBR\",\"Tameside, England, GBR\",\"Telford and Wrekin, England, GBR\",\"Thurrock, England, GBR\",\"Torbay, England, GBR\",\"Tower Hamlets, England, GBR\",\"Trafford, England, GBR\",\"Wakefield, England, GBR\",\"Walsall, England, GBR\",\"Waltham Forest, England, GBR\",\"Wandsworth, England, GBR\",\"Warrington, England, GBR\",\"Warwickshire, England, GBR\",\"West Berkshire, England, GBR\",\"West Sussex, England, GBR\",\"Westminster, England, GBR\",\"Wigan, England, GBR\",\"Wiltshire, England, GBR\",\"Windsor and Maidenhead, England, GBR\",\"Wirral, England, GBR\",\"Wokingham, England, GBR\",\"Wolverhampton, England, GBR\",\"Worcestershire, England, GBR\",\"York, England, GBR\",\"Colusa County, CA, USA\",\"Del Norte County, CA, USA\",\"Glenn County, CA, USA\",\"Talbot County, MD, USA\",\" County, PA, USA\",\"Ketchikan Gateway Borough, AK, USA\",\"Navajo County, AZ, USA\",\"Kern County, CA, USA\",\"Monterey County, CA, USA\",\"Richmond County, GA, USA\",\"Whitfield County, GA, USA\",\"Hawaii County, HI, USA\",\"Madison County, ID, USA\",\"Douglas County, KS, USA\",\"Ford County, KS, USA\",\"Lyon County, KY, USA\",\"Kennebec County, ME, USA\",\"Oxford County, ME, USA\",\"York County, ME, USA\",\"Jackson County, MI, USA\",\"Otsego County, MI, USA\",\"Martin County, MN, USA\",\"Nicollet County, MN, USA\",\"Boone County, MO, USA\",\"Cole County, MO, USA\",\"Jackson County, MO, USA\",\"Sarpy County, NE, USA\",\"Taos County, NM, USA\",\"Burleigh County, ND, USA\",\"Cass County, ND, USA\",\"Pawnee County, OK, USA\",\"Calhoun County, SC, USA\",\"Richland County, SC, USA\",\"York County, SC, USA\",\"Charlottesville city, VA, USA\",\"Williamsburg city, VA, USA\",\"Jefferson County, WV, USA\",\"Laramie County, WY, USA\",\"Park County, WY, USA\",\"Mono County, CA, USA\",\"Adair County, IA, USA\",\"Black Hawk County, IA, USA\",\"Adams County, IL, USA\",\"Alexander County, IL, USA\",\"Bond County, IL, USA\",\"Boone County, IL, USA\",\"Brown County, IL, USA\",\"Bureau County, IL, USA\",\"Calhoun County, IL, USA\",\"Carroll County, IL, USA\",\"Cass County, IL, USA\",\"Champaign County, IL, USA\",\"Christian County, IL, USA\",\"Clark County, IL, USA\",\"Clay County, IL, USA\",\"Coles County, IL, USA\",\"Crawford County, IL, USA\",\"DeKalb County, IL, USA\",\"De Witt County, IL, USA\",\"Douglas County, IL, USA\",\"Edgar County, IL, USA\",\"Edwards County, IL, USA\",\"Effingham County, IL, USA\",\"Fayette County, IL, USA\",\"Ford County, IL, USA\",\"Franklin County, IL, USA\",\"Fulton County, IL, USA\",\"Gallatin County, IL, USA\",\"Greene County, IL, USA\",\"Grundy County, IL, USA\",\"Hamilton County, IL, USA\",\"Hancock County, IL, USA\",\"Hardin County, IL, USA\",\"Henderson County, IL, USA\",\"Henry County, IL, USA\",\"Iroquois County, IL, USA\",\"Jackson County, IL, USA\",\"Jasper County, IL, USA\",\"Jefferson County, IL, USA\",\"Jersey County, IL, USA\",\"Jo Daviess County, IL, USA\",\"Johnson County, IL, USA\",\"Kankakee County, IL, USA\",\"Kendall County, IL, USA\",\"Knox County, IL, USA\",\"LaSalle County, IL, USA\",\"Lawrence County, IL, USA\",\"Lee County, IL, USA\",\"Livingston County, IL, USA\",\"Logan County, IL, USA\",\"McDonough County, IL, USA\",\"McLean County, IL, USA\",\"Macon County, IL, USA\",\"Macoupin County, IL, USA\",\"Madison County, IL, USA\",\"Marion County, IL, USA\",\"Marshall County, IL, USA\",\"Mason County, IL, USA\",\"Massac County, IL, USA\",\"Menard County, IL, USA\",\"Mercer County, IL, USA\",\"Monroe County, IL, USA\",\"Montgomery County, IL, USA\",\"Morgan County, IL, USA\",\"Moultrie County, IL, USA\",\"Ogle County, IL, USA\",\"Perry County, IL, USA\",\"Piatt County, IL, USA\",\"Pike County, IL, USA\",\"Pope County, IL, USA\",\"Pulaski County, IL, USA\",\"Putnam County, IL, USA\",\"Randolph County, IL, USA\",\"Richland County, IL, USA\",\"Rock Island County, IL, USA\",\"Saline County, IL, USA\",\"Schuyler County, IL, USA\",\"Scott County, IL, USA\",\"Shelby County, IL, USA\",\"Stark County, IL, USA\",\"Stephenson County, IL, USA\",\"Tazewell County, IL, USA\",\"Union County, IL, USA\",\"Vermilion County, IL, USA\",\"Wabash County, IL, USA\",\"Warren County, IL, USA\",\"Washington County, IL, USA\",\"Wayne County, IL, USA\",\"White County, IL, USA\",\"Williamson County, IL, USA\",\"Allegany County, MD, USA\",\"Calvert County, MD, USA\",\"Caroline County, MD, USA\",\"Cecil County, MD, USA\",\"Dorchester County, MD, USA\",\"Garrett County, MD, USA\",\"Kent County, MD, USA\",\"Queen Anne's County, MD, USA\",\"Somerset County, MD, USA\",\"St. Mary's County, MD, USA\",\"Washington County, MD, USA\",\"Wicomico County, MD, USA\",\"Worcester County, MD, USA\",\"Kenai Peninsula Borough, AK, USA\",\"Coconino County, AZ, USA\",\"Bradley County, AR, USA\",\"Faulkner County, AR, USA\",\"Washington County, AR, USA\",\"Columbia County, GA, USA\",\"Houston County, GA, USA\",\"Twin Falls County, ID, USA\",\"Leavenworth County, KS, USA\",\"Franklin County, KY, USA\",\"Kenton County, KY, USA\",\"Warren County, KY, USA\",\"Penobscot County, ME, USA\",\"Rice County, MN, USA\",\"St. Charles County, MO, USA\",\"St. Louis city, MO, USA\",\"Adams County, NE, USA\",\"Lincoln County, NE, USA\",\"Belknap County, NH, USA\",\"Merrimack County, NH, USA\",\"Morton County, ND, USA\",\"Lee County, SC, USA\",\"Charles City, VA, USA\",\"Mercer County, WV, USA\",\"Teton County, WY, USA\",\"Saguache County, CO, USA\",\"Sedgwick County, CO, USA\",\"Cheyenne County, CO, USA\",\"Custer County, CO, USA\",\"La Plata County, CO, USA\",\"San Juan County, CO, USA\",\"Park County, CO, USA\",\"Alamosa County, CO, USA\",\"Prowers County, CO, USA\",\"Moffat County, CO, USA\",\"Montrose County, CO, USA\",\"San Miguel County, CO, USA\",\"Costilla County, CO, USA\",\"Broomfield County, CO, USA\",\"Chaffee County, CO, USA\",\"Crowley County, CO, USA\",\"Fremont County, CO, USA\",\"Huerfano County, CO, USA\",\"Delta County, CO, USA\",\"Rio Blanco County, CO, USA\",\"Morgan County, CO, USA\",\"Lincoln County, CO, USA\",\"Montezuma County, CO, USA\",\"Mineral County, CO, USA\",\"Otero County, CO, USA\",\"Phillips County, CO, USA\",\"Ouray County, CO, USA\",\"Bent County, CO, USA\",\"Archuleta County, CO, USA\",\"Hinsdale County, CO, USA\",\"Lake County, CO, USA\",\"Rio Grande County, CO, USA\",\"Gilpin County, CO, USA\",\"Yuma County, CO, USA\",\"Jackson County, CO, USA\",\"Kit Carson County, CO, USA\",\"Logan County, CO, USA\",\"Washington County, CO, USA\",\"Conejos County, CO, USA\",\"Kiowa County, CO, USA\",\"Teller County, CO, USA\",\"Baca County, CO, USA\",\"Elbert County, CO, USA\",\"Dolores County, CO, USA\",\"Las Animas County, CO, USA\",\"Grand County, CO, USA\",\"Middlesex County, CT, USA\",\"Washington County, IA, USA\",\"Winneshiek County, IA, USA\",\"Northwest Territories, CAN\",\"Nunavut, CAN\",\"Yukon, CAN\",\"Santa Cruz County, AZ, USA\",\"Yavapai County, AZ, USA\",\"Benton County, AR, USA\",\"Boone County, AR, USA\",\"Clark County, AR, USA\",\"Craighead County, AR, USA\",\"Crittenden County, AR, USA\",\"Grant County, AR, USA\",\"Greene County, AR, USA\",\"Independence County, AR, USA\",\"Poinsett County, AR, USA\",\"Polk County, AR, USA\",\"Pope County, AR, USA\",\"Searcy County, AR, USA\",\"Sebastian County, AR, USA\",\"Sevier County, AR, USA\",\"Van Buren County, AR, USA\",\"Bibb County, GA, USA\",\"Early County, GA, USA\",\"Effingham County, GA, USA\",\"Glynn County, GA, USA\",\"Laurens County, GA, USA\",\"Peach County, GA, USA\",\"Rockdale County, GA, USA\",\"Dubuque County, IA, USA\",\"Muscatine County, IA, USA\",\"Cherokee County, KS, USA\",\"Linn County, KS, USA\",\"Morris County, KS, USA\",\"Sedgwick County, KS, USA\",\"Christian County, KY, USA\",\"Daviess County, KY, USA\",\"Henderson County, KY, USA\",\"Pulaski County, KY, USA\",\"Scott County, KY, USA\",\"(unassigned), KY, USA\",\"Clinton County, MI, USA\",\"Eaton County, MI, USA\",\"Genesee County, MI, USA\",\"Livingston County, MI, USA\",\"Midland County, MI, USA\",\"Mower County, MN, USA\",\"Scott County, MN, USA\",\"Broadwater County, MT, USA\",\"Flathead County, MT, USA\",\"Madison County, MT, USA\",\"Roosevelt County, MT, USA\",\"Nemaha County, NE, USA\",\"Elko County, NV, USA\",\"(unassigned), NV, USA\",\"San Miguel County, NM, USA\",\"Custer County, OK, USA\",\"Grady County, OK, USA\",\"Logan County, OK, USA\",\"McClain County, OK, USA\",\"Washington County, OK, USA\",\"Abbeville County, SC, USA\",\"Dorchester County, SC, USA\",\"Saluda County, SC, USA\",\"Monongalia County, WV, USA\",\"Tucker County, WV, USA\",\"AS, USA\",\"MP, USA\",\"Alpine County, CA, USA\",\"Amador County, CA, USA\",\"El Dorado County, CA, USA\",\"Imperial County, CA, USA\",\"Inyo County, CA, USA\",\"Lake County, CA, USA\",\"Lassen County, CA, USA\",\"Mariposa County, CA, USA\",\"Modoc County, CA, USA\",\"Plumas County, CA, USA\",\"Sierra County, CA, USA\",\"Siskiyou County, CA, USA\",\"Sutter County, CA, USA\",\"Tehama County, CA, USA\",\"Trinity County, CA, USA\",\"Tuolumne County, CA, USA\",\"Yuba County, CA, USA\",\"Tolland County, CT, USA\",\"Windham County, CT, USA\",\"TriCounty (Uintah, Duchesne, Daggett), UT, USA\",\"Albany County, WY, USA\",\"Big Horn County, WY, USA\",\"Campbell County, WY, USA\",\"Carbon County, WY, USA\",\"Converse County, WY, USA\",\"Crook County, WY, USA\",\"Goshen County, WY, USA\",\"Hot Springs County, WY, USA\",\"Johnson County, WY, USA\",\"Lincoln County, WY, USA\",\"Natrona County, WY, USA\",\"Niobrara County, WY, USA\",\"Platte County, WY, USA\",\"Sublette County, WY, USA\",\"Sweetwater County, WY, USA\",\"Uinta County, WY, USA\",\"Washakie County, WY, USA\",\"Weston County, WY, USA\",\"(unassigned), AR, USA\",\"New London County, CT, USA\",\"Bingham County, ID, USA\",\"Canyon County, ID, USA\",\"Kootenai County, ID, USA\",\"Reno County, KS, USA\",\"Riley County, KS, USA\",\"Calloway County, KY, USA\",\"Chisago County, MN, USA\",\"Clay County, MN, USA\",\"Fillmore County, MN, USA\",\"Kansas City, MO, USA\",\"Buffalo County, NE, USA\",\"Lancaster County, NE, USA\",\"Nye County, NV, USA\",\"Cheshire County, NH, USA\",\"Doña Ana County, NM, USA\",\"McKinley County, NM, USA\",\"Pierce County, ND, USA\",\"Ramsey County, ND, USA\",\"Aiken County, SC, USA\",\"Berkeley County, SC, USA\",\"Clarendon County, SC, USA\",\"Darlington County, SC, USA\",\"Florence County, SC, USA\",\"Orangeburg County, SC, USA\",\"Pickens County, SC, USA\",\"Sumter County, SC, USA\",\"Addison County, VT, USA\",\"Rutland County, VT, USA\",\"Newport News city, VA, USA\",\"Norfolk city, VA, USA\",\"Portsmouth city, VA, USA\",\"Jackson County, WV, USA\",\"Kanawha County, WV, USA\",\"Yuma County, AZ, USA\",\"Mohave County, AZ, USA\",\"La Paz County, AZ, USA\",\"Greenlee County, AZ, USA\",\"Gila County, AZ, USA\",\"Cochise County, AZ, USA\",\"Apache County, AZ, USA\",\"Carroll County, GA, USA\",\"Chatham County, GA, USA\",\"Pickens County, GA, USA\",\"Spalding County, GA, USA\",\"Sumter County, GA, USA\",\"Terrell County, GA, USA\",\"Worth County, GA, USA\",\"Barrow County, GA, USA\",\"Dawson County, GA, USA\",\"Douglas County, GA, USA\",\"Heard County, GA, USA\",\"Lamar County, GA, USA\",\"Miller County, GA, USA\",\"Monroe County, GA, USA\",\"Muscogee County, GA, USA\",\"Oconee County, GA, USA\",\"Randolph County, GA, USA\",\"Tift County, GA, USA\",\"Turner County, GA, USA\",\"(unassigned), GA, USA\",\"Appling County, GA, USA\",\"Atkinson County, GA, USA\",\"Bacon County, GA, USA\",\"Baker County, GA, USA\",\"Baldwin County, GA, USA\",\"Banks County, GA, USA\",\"Ben Hill County, GA, USA\",\"Berrien County, GA, USA\",\"Bleckley County, GA, USA\",\"Brantley County, GA, USA\",\"Brooks County, GA, USA\",\"Bryan County, GA, USA\",\"Bulloch County, GA, USA\",\"Burke County, GA, USA\",\"Butts County, GA, USA\",\"Calhoun County, GA, USA\",\"Camden County, GA, USA\",\"Candler County, GA, USA\",\"Catoosa County, GA, USA\",\"Chattahoochee County, GA, USA\",\"Chattooga County, GA, USA\",\"Clay County, GA, USA\",\"Clinch County, GA, USA\",\"Coffee County, GA, USA\",\"Colquitt County, GA, USA\",\"Cook County, GA, USA\",\"Crawford County, GA, USA\",\"Crisp County, GA, USA\",\"Dade County, GA, USA\",\"Decatur County, GA, USA\",\"Dodge County, GA, USA\",\"Dooly County, GA, USA\",\"Echols County, GA, USA\",\"Elbert County, GA, USA\",\"Emanuel County, GA, USA\",\"Evans County, GA, USA\",\"Fannin County, GA, USA\",\"Franklin County, GA, USA\",\"Gilmer County, GA, USA\",\"Glascock County, GA, USA\",\"Grady County, GA, USA\",\"Greene County, GA, USA\",\"Habersham County, GA, USA\",\"Hancock County, GA, USA\",\"Haralson County, GA, USA\",\"Harris County, GA, USA\",\"Hart County, GA, USA\",\"Irwin County, GA, USA\",\"Jackson County, GA, USA\",\"Jasper County, GA, USA\",\"Jeff Davis County, GA, USA\",\"Jefferson County, GA, USA\",\"Jenkins County, GA, USA\",\"Johnson County, GA, USA\",\"Jones County, GA, USA\",\"Lanier County, GA, USA\",\"Liberty County, GA, USA\",\"Lincoln County, GA, USA\",\"Long County, GA, USA\",\"Lumpkin County, GA, USA\",\"Macon County, GA, USA\",\"Madison County, GA, USA\",\"Marion County, GA, USA\",\"McDuffie County, GA, USA\",\"McIntosh County, GA, USA\",\"Meriwether County, GA, USA\",\"Mitchell County, GA, USA\",\"Montgomery County, GA, USA\",\"Morgan County, GA, USA\",\"Murray County, GA, USA\",\"Oglethorpe County, GA, USA\",\"Pierce County, GA, USA\",\"Pike County, GA, USA\",\"Pulaski County, GA, USA\",\"Putnam County, GA, USA\",\"Quitman County, GA, USA\",\"Rabun County, GA, USA\",\"Schley County, GA, USA\",\"Screven County, GA, USA\",\"Seminole County, GA, USA\",\"Stephens County, GA, USA\",\"Stewart County, GA, USA\",\"Talbot County, GA, USA\",\"Taliaferro County, GA, USA\",\"Tattnall County, GA, USA\",\"Taylor County, GA, USA\",\"Telfair County, GA, USA\",\"Thomas County, GA, USA\",\"Toombs County, GA, USA\",\"Towns County, GA, USA\",\"Treutlen County, GA, USA\",\"Twiggs County, GA, USA\",\"Union County, GA, USA\",\"Upson County, GA, USA\",\"Walker County, GA, USA\",\"Walton County, GA, USA\",\"Ware County, GA, USA\",\"Warren County, GA, USA\",\"Washington County, GA, USA\",\"Wayne County, GA, USA\",\"Webster County, GA, USA\",\"Wheeler County, GA, USA\",\"White County, GA, USA\",\"Wilcox County, GA, USA\",\"Wilkes County, GA, USA\",\"Wilkinson County, GA, USA\",\"Lyon County, IA, USA\",\"Osceola County, IA, USA\",\"Dickinson County, IA, USA\",\"Emmet County, IA, USA\",\"Kossuth County, IA, USA\",\"Howard County, IA, USA\",\"Winnebago County, IA, USA\",\"Mitchell County, IA, USA\",\"Worth County, IA, USA\",\"Sioux County, IA, USA\",\"O'Brien County, IA, USA\",\"Clay County, IA, USA\",\"Palo Alto County, IA, USA\",\"Hancock County, IA, USA\",\"Cerro Gordo County, IA, USA\",\"Chickasaw County, IA, USA\",\"Floyd County, IA, USA\",\"Clayton County, IA, USA\",\"Fayette County, IA, USA\",\"Plymouth County, IA, USA\",\"Cherokee County, IA, USA\",\"Buena Vista County, IA, USA\",\"Pocahontas County, IA, USA\",\"Humboldt County, IA, USA\",\"Wright County, IA, USA\",\"Bremer County, IA, USA\",\"Franklin County, IA, USA\",\"Butler County, IA, USA\",\"Delaware County, IA, USA\",\"Webster County, IA, USA\",\"Buchanan County, IA, USA\",\"Woodbury County, IA, USA\",\"Ida County, IA, USA\",\"Sac County, IA, USA\",\"Calhoun County, IA, USA\",\"Hamilton County, IA, USA\",\"Hardin County, IA, USA\",\"Grundy County, IA, USA\",\"Jackson County, IA, USA\",\"Jones County, IA, USA\",\"Linn County, IA, USA\",\"Benton County, IA, USA\",\"Tama County, IA, USA\",\"Monona County, IA, USA\",\"Crawford County, IA, USA\",\"Greene County, IA, USA\",\"Boone County, IA, USA\",\"Story County, IA, USA\",\"Marshall County, IA, USA\",\"Clinton County, IA, USA\",\"Cedar County, IA, USA\",\"Shelby County, IA, USA\",\"Audubon County, IA, USA\",\"Guthrie County, IA, USA\",\"Iowa County, IA, USA\",\"Poweshiek County, IA, USA\",\"Jasper County, IA, USA\",\"Scott County, IA, USA\",\"Cass County, IA, USA\",\"Keokuk County, IA, USA\",\"Warren County, IA, USA\",\"Madison County, IA, USA\",\"Mahaska County, IA, USA\",\"Marion County, IA, USA\",\"Louisa County, IA, USA\",\"Mills County, IA, USA\",\"Montgomery County, IA, USA\",\"Adams County, IA, USA\",\"Henry County, IA, USA\",\"Jefferson County, IA, USA\",\"Union County, IA, USA\",\"Wapello County, IA, USA\",\"Clarke County, IA, USA\",\"Lucas County, IA, USA\",\"Monroe County, IA, USA\",\"Des Moines County, IA, USA\",\"Fremont County, IA, USA\",\"Page County, IA, USA\",\"Taylor County, IA, USA\",\"Ringgold County, IA, USA\",\"Van Buren County, IA, USA\",\"Davis County, IA, USA\",\"Decatur County, IA, USA\",\"Wayne County, IA, USA\",\"Appanoose County, IA, USA\",\"Lee County, IA, USA\",\"Christian County, MO, USA\",\"Dunklin County, MO, USA\",\"Pulaski County, MO, USA\",\"Scott County, MO, USA\",\"(unassigned), MO, USA\",\"Adair County, MO, USA\",\"Andrew County, MO, USA\",\"Atchison County, MO, USA\",\"Audrain County, MO, USA\",\"Barry County, MO, USA\",\"Barton County, MO, USA\",\"Bates County, MO, USA\",\"Benton County, MO, USA\",\"Bollinger County, MO, USA\",\"Buchanan County, MO, USA\",\"Butler County, MO, USA\",\"Caldwell County, MO, USA\",\"Callaway County, MO, USA\",\"Camden County, MO, USA\",\"Cape Girardeau County, MO, USA\",\"Carroll County, MO, USA\",\"Carter County, MO, USA\",\"Cedar County, MO, USA\",\"Chariton County, MO, USA\",\"Clark County, MO, USA\",\"Clay County, MO, USA\",\"Clinton County, MO, USA\",\"Cooper County, MO, USA\",\"Crawford County, MO, USA\",\"Dade County, MO, USA\",\"Dallas County, MO, USA\",\"Daviess County, MO, USA\",\"DeKalb County, MO, USA\",\"Dent County, MO, USA\",\"Douglas County, MO, USA\",\"Franklin County, MO, USA\",\"Gasconade County, MO, USA\",\"Gentry County, MO, USA\",\"Grundy County, MO, USA\",\"Harrison County, MO, USA\",\"Hickory County, MO, USA\",\"Holt County, MO, USA\",\"Howard County, MO, USA\",\"Howell County, MO, USA\",\"Iron County, MO, USA\",\"Jasper County, MO, USA\",\"Jefferson County, MO, USA\",\"Johnson County, MO, USA\",\"Knox County, MO, USA\",\"Laclede County, MO, USA\",\"Lafayette County, MO, USA\",\"Lawrence County, MO, USA\",\"Lewis County, MO, USA\",\"Lincoln County, MO, USA\",\"Linn County, MO, USA\",\"Livingston County, MO, USA\",\"Macon County, MO, USA\",\"Madison County, MO, USA\",\"Maries County, MO, USA\",\"Marion County, MO, USA\",\"McDonald County, MO, USA\",\"Mercer County, MO, USA\",\"Miller County, MO, USA\",\"Mississippi County, MO, USA\",\"Moniteau County, MO, USA\",\"Monroe County, MO, USA\",\"Montgomery County, MO, USA\",\"Morgan County, MO, USA\",\"New Madrid County, MO, USA\",\"Newton County, MO, USA\",\"Nodaway County, MO, USA\",\"Oregon County, MO, USA\",\"Osage County, MO, USA\",\"Ozark County, MO, USA\",\"Pemiscot County, MO, USA\",\"Perry County, MO, USA\",\"Pettis County, MO, USA\",\"Phelps County, MO, USA\",\"Pike County, MO, USA\",\"Platte County, MO, USA\",\"Polk County, MO, USA\",\"Putnam County, MO, USA\",\"Ralls County, MO, USA\",\"Randolph County, MO, USA\",\"Ray County, MO, USA\",\"Reynolds County, MO, USA\",\"Ripley County, MO, USA\",\"St. Clair County, MO, USA\",\"St. Francois County, MO, USA\",\"Ste. Genevieve County, MO, USA\",\"Saline County, MO, USA\",\"Schuyler County, MO, USA\",\"Scotland County, MO, USA\",\"Shannon County, MO, USA\",\"Shelby County, MO, USA\",\"Stoddard County, MO, USA\",\"Stone County, MO, USA\",\"Sullivan County, MO, USA\",\"Taney County, MO, USA\",\"Texas County, MO, USA\",\"Vernon County, MO, USA\",\"Warren County, MO, USA\",\"Washington County, MO, USA\",\"Wayne County, MO, USA\",\"Webster County, MO, USA\",\"Worth County, MO, USA\",\"Wright County, MO, USA\",\"Garvin County, OK, USA\",\"Adair County, OK, USA\",\"Alfalfa County, OK, USA\",\"Atoka County, OK, USA\",\"Beaver County, OK, USA\",\"Beckham County, OK, USA\",\"Blaine County, OK, USA\",\"Bryan County, OK, USA\",\"Caddo County, OK, USA\",\"Carter County, OK, USA\",\"Cherokee County, OK, USA\",\"Choctaw County, OK, USA\",\"Cimarron County, OK, USA\",\"Coal County, OK, USA\",\"Comanche County, OK, USA\",\"Cotton County, OK, USA\",\"Craig County, OK, USA\",\"Creek County, OK, USA\",\"Delaware County, OK, USA\",\"Dewey County, OK, USA\",\"Ellis County, OK, USA\",\"Garfield County, OK, USA\",\"Grant County, OK, USA\",\"Greer County, OK, USA\",\"Harmon County, OK, USA\",\"Harper County, OK, USA\",\"Haskell County, OK, USA\",\"Hughes County, OK, USA\",\"Jefferson County, OK, USA\",\"Johnston County, OK, USA\",\"Kingfisher County, OK, USA\",\"Kiowa County, OK, USA\",\"Latimer County, OK, USA\",\"Le Flore County, OK, USA\",\"Lincoln County, OK, USA\",\"Love County, OK, USA\",\"Major County, OK, USA\",\"Marshall County, OK, USA\",\"Mayes County, OK, USA\",\"McCurtain County, OK, USA\",\"McIntosh County, OK, USA\",\"Murray County, OK, USA\",\"Muskogee County, OK, USA\",\"Noble County, OK, USA\",\"Nowata County, OK, USA\",\"Okfuskee County, OK, USA\",\"Okmulgee County, OK, USA\",\"Osage County, OK, USA\",\"Ottawa County, OK, USA\",\"Pittsburg County, OK, USA\",\"Pontotoc County, OK, USA\",\"Pottawatomie County, OK, USA\",\"Pushmataha County, OK, USA\",\"Roger Mills County, OK, USA\",\"Rogers County, OK, USA\",\"Seminole County, OK, USA\",\"Sequoyah County, OK, USA\",\"Stephens County, OK, USA\",\"Texas County, OK, USA\",\"Tillman County, OK, USA\",\"Wagoner County, OK, USA\",\"Washita County, OK, USA\",\"Woods County, OK, USA\",\"Woodward County, OK, USA\",\"Nantucket County, MA, USA\",\"(unassigned), MN, USA\",\"Strafford County, NH, USA\",\"Lea County, NM, USA\",\"Franklin County, VT, USA\",\"Windham County, VT, USA\",\"Suffolk city, VA, USA\",\"(unassigned), FL, USA\",\"Adams County, ID, USA\",\"Bannock County, ID, USA\",\"Bear Lake County, ID, USA\",\"Benewah County, ID, USA\",\"Boise County, ID, USA\",\"Bonner County, ID, USA\",\"Bonneville County, ID, USA\",\"Boundary County, ID, USA\",\"Butte County, ID, USA\",\"Camas County, ID, USA\",\"Caribou County, ID, USA\",\"Cassia County, ID, USA\",\"Clark County, ID, USA\",\"Clearwater County, ID, USA\",\"Custer County, ID, USA\",\"Elmore County, ID, USA\",\"Franklin County, ID, USA\",\"Fremont County, ID, USA\",\"Gem County, ID, USA\",\"Gooding County, ID, USA\",\"Idaho County, ID, USA\",\"Jefferson County, ID, USA\",\"Jerome County, ID, USA\",\"Latah County, ID, USA\",\"Lemhi County, ID, USA\",\"Lewis County, ID, USA\",\"Lincoln County, ID, USA\",\"Minidoka County, ID, USA\",\"Nez Perce County, ID, USA\",\"Oneida County, ID, USA\",\"Owyhee County, ID, USA\",\"Payette County, ID, USA\",\"Power County, ID, USA\",\"Shoshone County, ID, USA\",\"Valley County, ID, USA\",\"Washington County, ID, USA\",\"Adair County, KY, USA\",\"Allen County, KY, USA\",\"Anderson County, KY, USA\",\"Ballard County, KY, USA\",\"Barren County, KY, USA\",\"Bath County, KY, USA\",\"Bell County, KY, USA\",\"Boone County, KY, USA\",\"Boyd County, KY, USA\",\"Boyle County, KY, USA\",\"Bracken County, KY, USA\",\"Breathitt County, KY, USA\",\"Breckinridge County, KY, USA\",\"Bullitt County, KY, USA\",\"Butler County, KY, USA\",\"Caldwell County, KY, USA\",\"Campbell County, KY, USA\",\"Carlisle County, KY, USA\",\"Carroll County, KY, USA\",\"Carter County, KY, USA\",\"Casey County, KY, USA\",\"Clay County, KY, USA\",\"Clinton County, KY, USA\",\"Crittenden County, KY, USA\",\"Cumberland County, KY, USA\",\"Edmonson County, KY, USA\",\"Elliott County, KY, USA\",\"Estill County, KY, USA\",\"Fleming County, KY, USA\",\"Fulton County, KY, USA\",\"Gallatin County, KY, USA\",\"Garrard County, KY, USA\",\"Grant County, KY, USA\",\"Graves County, KY, USA\",\"Grayson County, KY, USA\",\"Green County, KY, USA\",\"Greenup County, KY, USA\",\"Hancock County, KY, USA\",\"Hardin County, KY, USA\",\"Harlan County, KY, USA\",\"Hart County, KY, USA\",\"Henry County, KY, USA\",\"Hickman County, KY, USA\",\"Hopkins County, KY, USA\",\"Jackson County, KY, USA\",\"Jessamine County, KY, USA\",\"Johnson County, KY, USA\",\"Knott County, KY, USA\",\"Knox County, KY, USA\",\"Larue County, KY, USA\",\"Laurel County, KY, USA\",\"Lawrence County, KY, USA\",\"Lee County, KY, USA\",\"Leslie County, KY, USA\",\"Letcher County, KY, USA\",\"Lewis County, KY, USA\",\"Lincoln County, KY, USA\",\"Livingston County, KY, USA\",\"Logan County, KY, USA\",\"Madison County, KY, USA\",\"Magoffin County, KY, USA\",\"Marion County, KY, USA\",\"Marshall County, KY, USA\",\"Martin County, KY, USA\",\"Mason County, KY, USA\",\"McCracken County, KY, USA\",\"McCreary County, KY, USA\",\"McLean County, KY, USA\",\"Meade County, KY, USA\",\"Menifee County, KY, USA\",\"Mercer County, KY, USA\",\"Metcalfe County, KY, USA\",\"Monroe County, KY, USA\",\"Morgan County, KY, USA\",\"Muhlenberg County, KY, USA\",\"Nicholas County, KY, USA\",\"Ohio County, KY, USA\",\"Oldham County, KY, USA\",\"Owen County, KY, USA\",\"Owsley County, KY, USA\",\"Pendleton County, KY, USA\",\"Perry County, KY, USA\",\"Pike County, KY, USA\",\"Powell County, KY, USA\",\"Robertson County, KY, USA\",\"Rockcastle County, KY, USA\",\"Rowan County, KY, USA\",\"Russell County, KY, USA\",\"Shelby County, KY, USA\",\"Simpson County, KY, USA\",\"Spencer County, KY, USA\",\"Taylor County, KY, USA\",\"Todd County, KY, USA\",\"Trigg County, KY, USA\",\"Trimble County, KY, USA\",\"Union County, KY, USA\",\"Washington County, KY, USA\",\"Wayne County, KY, USA\",\"Webster County, KY, USA\",\"Whitley County, KY, USA\",\"Wolfe County, KY, USA\",\"Woodford County, KY, USA\",\"Dukes and Nantucket County, MA, USA\",\"Aroostook County, ME, USA\",\"Franklin County, ME, USA\",\"Hancock County, ME, USA\",\"Knox County, ME, USA\",\"Piscataquis County, ME, USA\",\"Sagadahoc County, ME, USA\",\"Somerset County, ME, USA\",\"Waldo County, ME, USA\",\"Washington County, ME, USA\",\"Barry County, MI, USA\",\"Berrien County, MI, USA\",\"Calhoun County, MI, USA\",\"Clare County, MI, USA\",\"Saginaw County, MI, USA\",\"Tuscola County, MI, USA\",\"Wexford County, MI, USA\",\"(unassigned), MI, USA\",\"Alcona County, MI, USA\",\"Alger County, MI, USA\",\"Allegan County, MI, USA\",\"Alpena County, MI, USA\",\"Antrim County, MI, USA\",\"Arenac County, MI, USA\",\"Baraga County, MI, USA\",\"Benzie County, MI, USA\",\"Branch County, MI, USA\",\"Cass County, MI, USA\",\"Cheboygan County, MI, USA\",\"Chippewa County, MI, USA\",\"Crawford County, MI, USA\",\"Delta County, MI, USA\",\"Dickinson County, MI, USA\",\"Emmet County, MI, USA\",\"Gladwin County, MI, USA\",\"Gogebic County, MI, USA\",\"Grand Traverse County, MI, USA\",\"Gratiot County, MI, USA\",\"Hillsdale County, MI, USA\",\"Houghton County, MI, USA\",\"Huron County, MI, USA\",\"Ionia County, MI, USA\",\"Iosco County, MI, USA\",\"Iron County, MI, USA\",\"Isabella County, MI, USA\",\"Kalamazoo County, MI, USA\",\"Kalkaska County, MI, USA\",\"Keweenaw County, MI, USA\",\"Lake County, MI, USA\",\"Lapeer County, MI, USA\",\"Lenawee County, MI, USA\",\"Luce County, MI, USA\",\"Mackinac County, MI, USA\",\"Manistee County, MI, USA\",\"Marquette County, MI, USA\",\"Mason County, MI, USA\",\"Mecosta County, MI, USA\",\"Menominee County, MI, USA\",\"Missaukee County, MI, USA\",\"Montmorency County, MI, USA\",\"Muskegon County, MI, USA\",\"Newaygo County, MI, USA\",\"Oceana County, MI, USA\",\"Ogemaw County, MI, USA\",\"Ontonagon County, MI, USA\",\"Osceola County, MI, USA\",\"Oscoda County, MI, USA\",\"Presque Isle County, MI, USA\",\"Roscommon County, MI, USA\",\"St. Joseph County, MI, USA\",\"Sanilac County, MI, USA\",\"Schoolcraft County, MI, USA\",\"Shiawassee County, MI, USA\",\"Van Buren County, MI, USA\",\"Dodge County, MN, USA\",\"Filmore County, MN, USA\",\"Jackson County, MN, USA\",\"St. Louis County, MN, USA\",\"Steele County, MN, USA\",\"Wabasha County, MN, USA\",\"Aitkin County, MN, USA\",\"Becker County, MN, USA\",\"Beltrami County, MN, USA\",\"Big Stone County, MN, USA\",\"Brown County, MN, USA\",\"Carlton County, MN, USA\",\"Cass County, MN, USA\",\"Chippewa County, MN, USA\",\"Clearwater County, MN, USA\",\"Cook County, MN, USA\",\"Cottonwood County, MN, USA\",\"Crow Wing County, MN, USA\",\"Douglas County, MN, USA\",\"Faribault County, MN, USA\",\"Freeborn County, MN, USA\",\"Goodhue County, MN, USA\",\"Grant County, MN, USA\",\"Houston County, MN, USA\",\"Hubbard County, MN, USA\",\"Isanti County, MN, USA\",\"Itasca County, MN, USA\",\"Kanabec County, MN, USA\",\"Kandiyohi County, MN, USA\",\"Kittson County, MN, USA\",\"Koochiching County, MN, USA\",\"Lac qui Parle County, MN, USA\",\"Lake County, MN, USA\",\"Lake of the Woods County, MN, USA\",\"Le Sueur County, MN, USA\",\"Lincoln County, MN, USA\",\"Lyon County, MN, USA\",\"McLeod County, MN, USA\",\"Mahnomen County, MN, USA\",\"Marshall County, MN, USA\",\"Meeker County, MN, USA\",\"Mille Lacs County, MN, USA\",\"Morrison County, MN, USA\",\"Murray County, MN, USA\",\"Nobles County, MN, USA\",\"Norman County, MN, USA\",\"Otter Tail County, MN, USA\",\"Pennington County, MN, USA\",\"Pine County, MN, USA\",\"Pipestone County, MN, USA\",\"Polk County, MN, USA\",\"Pope County, MN, USA\",\"Red Lake County, MN, USA\",\"Redwood County, MN, USA\",\"Rock County, MN, USA\",\"Roseau County, MN, USA\",\"Sherburne County, MN, USA\",\"Sibley County, MN, USA\",\"Stevens County, MN, USA\",\"Swift County, MN, USA\",\"Todd County, MN, USA\",\"Traverse County, MN, USA\",\"Wadena County, MN, USA\",\"Watonwan County, MN, USA\",\"Wilkin County, MN, USA\",\"Winona County, MN, USA\",\"Yellow Medicine County, MN, USA\",\"Ravalli County, MT, USA\",\"Beaverhead County, MT, USA\",\"Big Horn County, MT, USA\",\"Blaine County, MT, USA\",\"Carbon County, MT, USA\",\"Carter County, MT, USA\",\"Cascade County, MT, USA\",\"Chouteau County, MT, USA\",\"Custer County, MT, USA\",\"Daniels County, MT, USA\",\"Dawson County, MT, USA\",\"Deer Lodge County, MT, USA\",\"Fallon County, MT, USA\",\"Fergus County, MT, USA\",\"Garfield County, MT, USA\",\"Glacier County, MT, USA\",\"Golden Valley County, MT, USA\",\"Granite County, MT, USA\",\"Hill County, MT, USA\",\"Jefferson County, MT, USA\",\"Judith Basin County, MT, USA\",\"Lake County, MT, USA\",\"Liberty County, MT, USA\",\"Lincoln County, MT, USA\",\"McCone County, MT, USA\",\"Meagher County, MT, USA\",\"Mineral County, MT, USA\",\"Musselshell County, MT, USA\",\"Park County, MT, USA\",\"Petroleum County, MT, USA\",\"Phillips County, MT, USA\",\"Pondera County, MT, USA\",\"Powder River County, MT, USA\",\"Powell County, MT, USA\",\"Prairie County, MT, USA\",\"Richland County, MT, USA\",\"Rosebud County, MT, USA\",\"Sanders County, MT, USA\",\"Sheridan County, MT, USA\",\"Stillwater County, MT, USA\",\"Sweet Grass County, MT, USA\",\"Teton County, MT, USA\",\"Toole County, MT, USA\",\"Treasure County, MT, USA\",\"Valley County, MT, USA\",\"Wheatland County, MT, USA\",\"Wibaux County, MT, USA\",\"Greenwood County, SC, USA\",\"Colleton County, SC, USA\",\"Dillon County, SC, USA\",\"Edgefield County, SC, USA\",\"Marlboro County, SC, USA\",\"Newberry County, SC, USA\",\"Allendale County, SC, USA\",\"Bamberg County, SC, USA\",\"Barnwell County, SC, USA\",\"Cherokee County, SC, USA\",\"Chester County, SC, USA\",\"Chesterfield County, SC, USA\",\"Georgetown County, SC, USA\",\"Hampton County, SC, USA\",\"Jasper County, SC, USA\",\"Laurens County, SC, USA\",\"McCormick County, SC, USA\",\"Marion County, SC, USA\",\"Oconee County, SC, USA\",\"Union County, SC, USA\",\"Williamsburg County, SC, USA\",\"Marshall County, WV, USA\",\"Putnam County, WV, USA\",\"Barbour County, WV, USA\",\"Berkeley County, WV, USA\",\"Boone County, WV, USA\",\"Braxton County, WV, USA\",\"Brooke County, WV, USA\",\"Cabell County, WV, USA\",\"Calhoun County, WV, USA\",\"Clay County, WV, USA\",\"Doddridge County, WV, USA\",\"Fayette County, WV, USA\",\"Gilmer County, WV, USA\",\"Grant County, WV, USA\",\"Greenbrier County, WV, USA\",\"Hampshire County, WV, USA\",\"Hancock County, WV, USA\",\"Hardy County, WV, USA\",\"Harrison County, WV, USA\",\"Lewis County, WV, USA\",\"Lincoln County, WV, USA\",\"Logan County, WV, USA\",\"McDowell County, WV, USA\",\"Marion County, WV, USA\",\"Mason County, WV, USA\",\"Mineral County, WV, USA\",\"Mingo County, WV, USA\",\"Monroe County, WV, USA\",\"Morgan County, WV, USA\",\"Nicholas County, WV, USA\",\"Ohio County, WV, USA\",\"Pendleton County, WV, USA\",\"Pleasants County, WV, USA\",\"Pocahontas County, WV, USA\",\"Preston County, WV, USA\",\"Raleigh County, WV, USA\",\"Randolph County, WV, USA\",\"Ritchie County, WV, USA\",\"Roane County, WV, USA\",\"Summers County, WV, USA\",\"Taylor County, WV, USA\",\"Tyler County, WV, USA\",\"Upshur County, WV, USA\",\"Wayne County, WV, USA\",\"Webster County, WV, USA\",\"Wetzel County, WV, USA\",\"Wirt County, WV, USA\",\"Wood County, WV, USA\",\"Wyoming County, WV, USA\",\"(unassigned), CA, USA\",\"(unassigned), CO, USA\",\"Jackson County, KS, USA\",\"Mitchell County, KS, USA\",\"Dawson County, NE, USA\",\"Ayrshire and Arran, Scotland, GBR\",\"Borders, Scotland, GBR\",\"Dumfries and Galloway, Scotland, GBR\",\"Fife, Scotland, GBR\",\"Forth Valley, Scotland, GBR\",\"Grampian, Scotland, GBR\",\"Greater Glasgow and Clyde, Scotland, GBR\",\"Highland, Scotland, GBR\",\"Lanarkshire, Scotland, GBR\",\"Lothian, Scotland, GBR\",\"Shetland, Scotland, GBR\",\"Tayside, Scotland, GBR\",\"Scotland, GBR\",\"LeSeur County, MN, USA\",\"Coos County, NH, USA\",\"Sullivan County, NH, USA\",\"Catron County, NM, USA\",\"Chaves County, NM, USA\",\"Cibola County, NM, USA\",\"Colfax County, NM, USA\",\"Curry County, NM, USA\",\"De Baca County, NM, USA\",\"Eddy County, NM, USA\",\"Grant County, NM, USA\",\"Guadalupe County, NM, USA\",\"Harding County, NM, USA\",\"Hidalgo County, NM, USA\",\"Lincoln County, NM, USA\",\"Los Alamos County, NM, USA\",\"Luna County, NM, USA\",\"Mora County, NM, USA\",\"Otero County, NM, USA\",\"Quay County, NM, USA\",\"Rio Arriba County, NM, USA\",\"Roosevelt County, NM, USA\",\"San Juan County, NM, USA\",\"Sierra County, NM, USA\",\"Torrance County, NM, USA\",\"Union County, NM, USA\",\"Valencia County, NM, USA\",\"Andhra Pradesh, IND\",\"Bihar, IND\",\"Chhattisgarh, IND\",\"Delhi, IND\",\"Gujarat, IND\",\"Haryana, IND\",\"Himachal Pradesh, IND\",\"Karnataka, IND\",\"Kerala, IND\",\"Madhya Pradesh, IND\",\"Maharashtra, IND\",\"Odisha, IND\",\"Puducherry, IND\",\"Punjab, IND\",\"Rajasthan, IND\",\"Tamil Nadu, IND\",\"Telengana, IND\",\"Chandigarh, IND\",\"Jammu and Kashmir, IND\",\"Ladakh, IND\",\"Uttar Pradesh, IND\",\"Uttarakhand, IND\",\"West Bengal, IND\",\"Juneau City and Borough, AK, USA\",\"Matanuska-Susitna Borough, AK, USA\",\"(unassigned), HI, USA\",\"(unassigned), IL, USA\",\"Madison County, NE, USA\",\"Washington County, NE, USA\",\"Douglas County, NV, USA\",\"Walsh County, ND, USA\",\"(unassigned), VT, USA\",\"Danville city, VA, USA\",\"Howard County, AR, USA\",\"Lonoke County, AR, USA\",\"Prairie County, AR, USA\",\"Phillips County, AR, USA\",\"Jackson County, AR, USA\",\"Mississippi County, AR, USA\",\"Clay County, AR, USA\",\"Randolph County, AR, USA\",\"Lawrence County, AR, USA\",\"Baxter County, AR, USA\",\"Marion County, AR, USA\",\"Perry County, AR, USA\",\"Crawford County, AR, USA\",\"Little River County, AR, USA\",\"Miller County, AR, USA\",\"Lafayette County, AR, USA\",\"Columbia County, AR, USA\",\"Union County, AR, USA\",\"Ashley County, AR, USA\",\"Chicot County, AR, USA\",\"Carroll County, AR, USA\",\"Madison County, AR, USA\",\"Franklin County, AR, USA\",\"Scott County, AR, USA\",\"Logan County, AR, USA\",\"Yell County, AR, USA\",\"Montgomery County, AR, USA\",\"Pike County, AR, USA\",\"Hempstead County, AR, USA\",\"Drew County, AR, USA\",\"Calhoun County, AR, USA\",\"Ouachita County, AR, USA\",\"Nevada County, AR, USA\",\"Dallas County, AR, USA\",\"Arkansas County, AR, USA\",\"Monroe County, AR, USA\",\"Lee County, AR, USA\",\"Hot Spring County, AR, USA\",\"St. Francis County, AR, USA\",\"Cross County, AR, USA\",\"Woodruff County, AR, USA\",\"White County, AR, USA\",\"Conway County, AR, USA\",\"Newton County, AR, USA\",\"Johnson County, AR, USA\",\"Sharp County, AR, USA\",\"Izard County, AR, USA\",\"Fulton County, AR, USA\",\"Stone County, AR, USA\",\"Kalawao County, HI, USA\",\"Bourbon County, KS, USA\",\"Lyon County, KS, USA\",\"Allen County, KS, USA\",\"Anderson County, KS, USA\",\"Atchison County, KS, USA\",\"Barber County, KS, USA\",\"Barton County, KS, USA\",\"Brown County, KS, USA\",\"Chase County, KS, USA\",\"Chautauqua County, KS, USA\",\"Cheyenne County, KS, USA\",\"Clark County, KS, USA\",\"Clay County, KS, USA\",\"Cloud County, KS, USA\",\"Coffey County, KS, USA\",\"Comanche County, KS, USA\",\"Cowley County, KS, USA\",\"Crawford County, KS, USA\",\"Decatur County, KS, USA\",\"Dickinson County, KS, USA\",\"Doniphan County, KS, USA\",\"Edwards County, KS, USA\",\"Elk County, KS, USA\",\"Ellis County, KS, USA\",\"Ellsworth County, KS, USA\",\"Finney County, KS, USA\",\"Geary County, KS, USA\",\"Gove County, KS, USA\",\"Graham County, KS, USA\",\"Grant County, KS, USA\",\"Gray County, KS, USA\",\"Greeley County, KS, USA\",\"Greenwood County, KS, USA\",\"Hamilton County, KS, USA\",\"Harper County, KS, USA\",\"Harvey County, KS, USA\",\"Haskell County, KS, USA\",\"Hodgeman County, KS, USA\",\"Jefferson County, KS, USA\",\"Jewell County, KS, USA\",\"Kearny County, KS, USA\",\"Kingman County, KS, USA\",\"Kiowa County, KS, USA\",\"Labette County, KS, USA\",\"Lane County, KS, USA\",\"Lincoln County, KS, USA\",\"Logan County, KS, USA\",\"Marion County, KS, USA\",\"Marshall County, KS, USA\",\"McPherson County, KS, USA\",\"Meade County, KS, USA\",\"Miami County, KS, USA\",\"Montgomery County, KS, USA\",\"Morton County, KS, USA\",\"Nemaha County, KS, USA\",\"Neosho County, KS, USA\",\"Ness County, KS, USA\",\"Norton County, KS, USA\",\"Osage County, KS, USA\",\"Osborne County, KS, USA\",\"Ottawa County, KS, USA\",\"Pawnee County, KS, USA\",\"Phillips County, KS, USA\",\"Pottawatomie County, KS, USA\",\"Pratt County, KS, USA\",\"Rawlins County, KS, USA\",\"Republic County, KS, USA\",\"Rice County, KS, USA\",\"Rooks County, KS, USA\",\"Rush County, KS, USA\",\"Russell County, KS, USA\",\"Saline County, KS, USA\",\"Scott County, KS, USA\",\"Seward County, KS, USA\",\"Shawnee County, KS, USA\",\"Sheridan County, KS, USA\",\"Sherman County, KS, USA\",\"Smith County, KS, USA\",\"Stafford County, KS, USA\",\"Stanton County, KS, USA\",\"Stevens County, KS, USA\",\"Sumner County, KS, USA\",\"Thomas County, KS, USA\",\"Trego County, KS, USA\",\"Wabaunsee County, KS, USA\",\"Wallace County, KS, USA\",\"Washington County, KS, USA\",\"Wichita County, KS, USA\",\"Wilson County, KS, USA\",\"Woodson County, KS, USA\",\"Lac Qui Parle County, MN, USA\",\"Bristol County, RI, USA\",\"Kent County, RI, USA\",\"Newport County, RI, USA\",\"Washington County, RI, USA\",\"Dekalb County, TN, USA\",\"Martinique, FRA\",\"BLZ\",\"LAO\",\"LBY\",\"GNB\",\"MLI\",\"KNA\",\"MMR\",\"Anguilla, GBR\",\"British Virgin Islands, GBR\",\"Turks and Caicos Islands, GBR\",\"Manipur, IND\",\"Mizoram, IND\",\"Dunn County, ND, USA\",\"Caledonia County, VT, USA\",\"Orleans County, VT, USA\",\"Chesapeake city, VA, USA\",\"Anchorage Economic Region, AK, USA\",\"Gulf Coast Economic Region, AK, USA\",\"Interior Economic Region, AK, USA\",\"Mat-Su Economic Region, AK, USA\",\"Northern Economic Region, AK, USA\",\"Southeast Economic Region, AK, USA\",\"Southwest Economic Region, AK, USA\",\"Not Reported County, MI, USA\",\"Antelope County, NE, USA\",\"Arthur County, NE, USA\",\"Banner County, NE, USA\",\"Blaine County, NE, USA\",\"Boone County, NE, USA\",\"Box Butte County, NE, USA\",\"Boyd County, NE, USA\",\"Brown County, NE, USA\",\"Burt County, NE, USA\",\"Butler County, NE, USA\",\"Cedar County, NE, USA\",\"Chase County, NE, USA\",\"Cherry County, NE, USA\",\"Cheyenne County, NE, USA\",\"Clay County, NE, USA\",\"Colfax County, NE, USA\",\"Cuming County, NE, USA\",\"Custer County, NE, USA\",\"Dakota County, NE, USA\",\"Dawes County, NE, USA\",\"Deuel County, NE, USA\",\"Dixon County, NE, USA\",\"Dodge County, NE, USA\",\"Dundy County, NE, USA\",\"Fillmore County, NE, USA\",\"Franklin County, NE, USA\",\"Frontier County, NE, USA\",\"Furnas County, NE, USA\",\"Gage County, NE, USA\",\"Garden County, NE, USA\",\"Garfield County, NE, USA\",\"Gosper County, NE, USA\",\"Grant County, NE, USA\",\"Greeley County, NE, USA\",\"Hall County, NE, USA\",\"Hamilton County, NE, USA\",\"Harlan County, NE, USA\",\"Hayes County, NE, USA\",\"Hitchcock County, NE, USA\",\"Holt County, NE, USA\",\"Hooker County, NE, USA\",\"Howard County, NE, USA\",\"Jefferson County, NE, USA\",\"Johnson County, NE, USA\",\"Kearney County, NE, USA\",\"Keith County, NE, USA\",\"Keya Paha County, NE, USA\",\"Kimball County, NE, USA\",\"Logan County, NE, USA\",\"Loup County, NE, USA\",\"McPherson County, NE, USA\",\"Merrick County, NE, USA\",\"Morrill County, NE, USA\",\"Nance County, NE, USA\",\"Nuckolls County, NE, USA\",\"Otoe County, NE, USA\",\"Pawnee County, NE, USA\",\"Perkins County, NE, USA\",\"Phelps County, NE, USA\",\"Pierce County, NE, USA\",\"Platte County, NE, USA\",\"Polk County, NE, USA\",\"Red Willow County, NE, USA\",\"Richardson County, NE, USA\",\"Rock County, NE, USA\",\"Saline County, NE, USA\",\"Saunders County, NE, USA\",\"Scotts Bluff County, NE, USA\",\"Seward County, NE, USA\",\"Sheridan County, NE, USA\",\"Sherman County, NE, USA\",\"Sioux County, NE, USA\",\"Stanton County, NE, USA\",\"Thayer County, NE, USA\",\"Thomas County, NE, USA\",\"Thurston County, NE, USA\",\"Valley County, NE, USA\",\"Wayne County, NE, USA\",\"Webster County, NE, USA\",\"Wheeler County, NE, USA\",\"York County, NE, USA\",\"Baltimore city, MD, USA\",\"Dukes County, MA, USA\",\"Lyon County, NV, USA\",\"Foster County, ND, USA\",\"Stark County, ND, USA\",\"Lamoille County, VT, USA\",\"Fredericksburg city, VA, USA\",\"Manassas city, VA, USA\",\"Andaman and Nicobar Islands, IND\",\"Goa, IND\",\"(unassigned), ID, USA\",\"McHenry County, ND, USA\",\"McIntosh County, ND, USA\",\"(unassigned), OH, USA\",\"Morgan County, UT, USA\",\"(unassigned), UT, USA\",\"Hampton city, VA, USA\",\"Lynchburg city, VA, USA\",\"Poquoson city, VA, USA\",\"Radford city, VA, USA\",\"(unassigned), MS, USA\",\"Uintah County, UT, USA\",\"Bristol city, VA, USA\",\"Galax city, VA, USA\",\"Joplin County, MO, USA\",\"Humboldt County, NV, USA\",\"Barnes County, ND, USA\",\"Divide County, ND, USA\",\"McLean County, ND, USA\",\"Mercer County, ND, USA\",\"Mountrail County, ND, USA\",\"Sioux County, ND, USA\",\"(unassigned), MP, USA\",\"Hopewell city, VA, USA\",\"Storey County, NV, USA\",\"HKG\",\"MAC\",\"FRO\",\"Ayrshire and Arran, Scotland, GBR\",\"Adams County, ND, USA\",\"Benson County, ND, USA\",\"Bottineau County, ND, USA\",\"Bowman County, ND, USA\",\"Burke County, ND, USA\",\"Cavalier County, ND, USA\",\"Dickey County, ND, USA\",\"Eddy County, ND, USA\",\"Emmons County, ND, USA\",\"Golden Valley County, ND, USA\",\"Grand Forks County, ND, USA\",\"Grant County, ND, USA\",\"Griggs County, ND, USA\",\"Hettinger County, ND, USA\",\"Kidder County, ND, USA\",\"LaMoure County, ND, USA\",\"Logan County, ND, USA\",\"McKenzie County, ND, USA\",\"Nelson County, ND, USA\",\"Oliver County, ND, USA\",\"Pembina County, ND, USA\",\"Ransom County, ND, USA\",\"Renville County, ND, USA\",\"Richland County, ND, USA\",\"Rolette County, ND, USA\",\"Sargent County, ND, USA\",\"Sheridan County, ND, USA\",\"Steele County, ND, USA\",\"Stutsman County, ND, USA\",\"Towner County, ND, USA\",\"Traill County, ND, USA\",\"Wells County, ND, USA\",\"Williams County, ND, USA\",\"Billings County, ND, USA\",\"Slope County, ND, USA\",\"Barrington, Bristol County, RI, USA\",\"Bristol, Bristol County, RI, USA\",\"Burrillville, Providence County, RI, USA\",\"Central Falls, Providence County, RI, USA\",\"Charlestown, Washington County, RI, USA\",\"Coventry, Kent County, RI, USA\",\"Cranston, Providence County, RI, USA\",\"Cumberland, Providence County, RI, USA\",\"East Greenwich, Kent County, RI, USA\",\"East Providence, Providence County, RI, USA\",\"Exeter, Washington County, RI, USA\",\"Foster, Providence County, RI, USA\",\"Glocester, Providence County, RI, USA\",\"Hopkinton, Washington County, RI, USA\",\"Jamestown, Newport County, RI, USA\",\"Johnston, Providence County, RI, USA\",\"Lincoln, Providence County, RI, USA\",\"Little Compton, Newport County, RI, USA\",\"Middletown, Newport County, RI, USA\",\"Narragansett, Washington County, RI, USA\",\"New Shoreham, Washington County, RI, USA\",\"Newport, Newport County, RI, USA\",\"North Kingstown, Washington County, RI, USA\",\"North Providence, Providence County, RI, USA\",\"North Smithfield, Providence County, RI, USA\",\"Pawtucket, Providence County, RI, USA\",\"Portsmouth, Newport County, RI, USA\",\"Providence, Providence County, RI, USA\",\"Richmond, Washington County, RI, USA\",\"Scituate, Providence County, RI, USA\",\"Smithfield, Providence County, RI, USA\",\"South Kingstown, Washington County, RI, USA\",\"Tiverton, Newport County, RI, USA\",\"Warren, Bristol County, RI, USA\",\"Warwick, Kent County, RI, USA\",\"West Greenwich, Kent County, RI, USA\",\"West Warwick, Kent County, RI, USA\",\"Westerly, Washington County, RI, USA\",\"Woonsocket, Providence County, RI, USA\"]");

/***/ }),

/***/ "./src/assets/country-names-by-code.json":
/*!***********************************************!*\
  !*** ./src/assets/country-names-by-code.json ***!
  \***********************************************/
/*! exports provided: ABW, AFG, AGO, AIA, ALA, ALB, AND, ANT, ARE, ARG, ARM, ASM, ATA, ATF, ATG, AUS, AUT, AZE, BDI, BEL, BEN, BFA, BGD, BGR, BHR, BHS, BIH, BLM, BLR, BLZ, BMU, BOL, BRA, BRB, BRN, BTN, BVT, BWA, CAF, CAN, CCK, CHE, CHL, CHN, CIV, CMR, COD, COG, COK, COL, COM, CPV, CRI, CUB, CXR, CYM, CYP, CZE, DEU, DJI, DMA, DNK, DOM, DZA, ECU, EGY, ERI, ESH, ESP, EST, ETH, FIN, FJI, FLK, FRA, FRO, FSM, GAB, GBR, GEO, GGY, GHA, GIB, GIN, GLP, GMB, GNB, GNQ, GRC, GRD, GRL, GTM, GUF, GUM, GUY, HKG, HMD, HND, HRV, HTI, HUN, IDN, IMN, IND, IOT, IRL, IRN, IRQ, ISL, ISR, ITA, JAM, JEY, JOR, JPN, KAZ, KEN, KGZ, KHM, KIR, KNA, KOR, KWT, LAO, LBN, LBR, LBY, LCA, LIE, LKA, LSO, LTU, LUX, LVA, MAC, MAF, MAR, MCO, MDA, MDG, MDV, MEX, MHL, MKD, MLI, MLT, MMR, MNE, MNG, MNP, MOZ, MRT, MSR, MTQ, MUS, MWI, MYS, MYT, NAM, NCL, NER, NFK, NGA, NIC, NIU, NLD, NOR, NPL, NRU, NZL, OMN, PAK, PAN, PCN, PER, PHL, PLW, PNG, POL, PRI, PRK, PRT, PRY, PSE, PYF, QAT, REU, ROU, RUS, RWA, SAU, SDN, SEN, SGP, SGS, SHN, SJM, SLB, SLE, SLV, SMR, SOM, SPM, SRB, STP, SUR, SVK, SVN, SWE, SWZ, SYC, SYR, TCA, TCD, TGO, THA, TJK, TKL, TKM, TLS, TON, TTO, TUN, TUR, TUV, TWN, TZA, UGA, UKR, UMI, URY, USA, UZB, VAT, VCT, VEN, VGB, VIR, VNM, VUT, WLF, WSM, YEM, ZAF, ZMB, ZWE, default */
/***/ (function(module) {

module.exports = JSON.parse("{\"ABW\":\"Aruba\",\"AFG\":\"Afghanistan\",\"AGO\":\"Angola\",\"AIA\":\"Anguilla\",\"ALA\":\"Åland Islands\",\"ALB\":\"Albania\",\"AND\":\"Andorra\",\"ANT\":\"Netherlands Antilles\",\"ARE\":\"United Arab Emirates\",\"ARG\":\"Argentina\",\"ARM\":\"Armenia\",\"ASM\":\"American Samoa\",\"ATA\":\"Antarctica\",\"ATF\":\"French Southern Territories\",\"ATG\":\"Antigua and Barbuda\",\"AUS\":\"Australia\",\"AUT\":\"Austria\",\"AZE\":\"Azerbaijan\",\"BDI\":\"Burundi\",\"BEL\":\"Belgium\",\"BEN\":\"Benin\",\"BFA\":\"Burkina Faso\",\"BGD\":\"Bangladesh\",\"BGR\":\"Bulgaria\",\"BHR\":\"Bahrain\",\"BHS\":\"Bahamas\",\"BIH\":\"Bosnia and Herzegovina\",\"BLM\":\"Saint Barthélemy\",\"BLR\":\"Belarus\",\"BLZ\":\"Belize\",\"BMU\":\"Bermuda\",\"BOL\":\"Bolivia\",\"BRA\":\"Brazil\",\"BRB\":\"Barbados\",\"BRN\":\"Brunei Darussalam\",\"BTN\":\"Bhutan\",\"BVT\":\"Bouvet Island\",\"BWA\":\"Botswana\",\"CAF\":\"Central African Republic\",\"CAN\":\"Canada\",\"CCK\":\"Cocos (Keeling) Islands\",\"CHE\":\"Switzerland\",\"CHL\":\"Chile\",\"CHN\":\"China\",\"CIV\":\"Côte d'Ivoire\",\"CMR\":\"Cameroon\",\"COD\":\"Congo\",\"COG\":\"Congo\",\"COK\":\"Cook Islands\",\"COL\":\"Colombia\",\"COM\":\"Comoros\",\"CPV\":\"Cape Verde\",\"CRI\":\"Costa Rica\",\"CUB\":\"Cuba\",\"CXR\":\"Christmas Island\",\"CYM\":\"Cayman Islands\",\"CYP\":\"Cyprus\",\"CZE\":\"Czech Republic\",\"DEU\":\"Germany\",\"DJI\":\"Djibouti\",\"DMA\":\"Dominica\",\"DNK\":\"Denmark\",\"DOM\":\"Dominican Republic\",\"DZA\":\"Algeria\",\"ECU\":\"Ecuador\",\"EGY\":\"Egypt\",\"ERI\":\"Eritrea\",\"ESH\":\"Western Sahara\",\"ESP\":\"Spain\",\"EST\":\"Estonia\",\"ETH\":\"Ethiopia\",\"FIN\":\"Finland\",\"FJI\":\"Fiji\",\"FLK\":\"Falkland Islands (Malvinas)\",\"FRA\":\"France\",\"FRO\":\"Faroe Islands\",\"FSM\":\"Micronesia, Federated States of\",\"GAB\":\"Gabon\",\"GBR\":\"United Kingdom\",\"GEO\":\"Georgia\",\"GGY\":\"Guernsey\",\"GHA\":\"Ghana\",\"GIB\":\"Gibraltar\",\"GIN\":\"Guinea\",\"GLP\":\"Guadeloupe\",\"GMB\":\"Gambia\",\"GNB\":\"Guinea-Bissau\",\"GNQ\":\"Equatorial Guinea\",\"GRC\":\"Greece\",\"GRD\":\"Grenada\",\"GRL\":\"Greenland\",\"GTM\":\"Guatemala\",\"GUF\":\"French Guiana\",\"GUM\":\"Guam\",\"GUY\":\"Guyana\",\"HKG\":\"Hong Kong\",\"HMD\":\"Heard Island and McDonald Islands\",\"HND\":\"Honduras\",\"HRV\":\"Croatia\",\"HTI\":\"Haiti\",\"HUN\":\"Hungary\",\"IDN\":\"Indonesia\",\"IMN\":\"Isle of Man\",\"IND\":\"India\",\"IOT\":\"British Indian Ocean Territory\",\"IRL\":\"Ireland\",\"IRN\":\"Iran\",\"IRQ\":\"Iraq\",\"ISL\":\"Iceland\",\"ISR\":\"Israel\",\"ITA\":\"Italy\",\"JAM\":\"Jamaica\",\"JEY\":\"Jersey\",\"JOR\":\"Jordan\",\"JPN\":\"Japan\",\"KAZ\":\"Kazakhstan\",\"KEN\":\"Kenya\",\"KGZ\":\"Kyrgyzstan\",\"KHM\":\"Cambodia\",\"KIR\":\"Kiribati\",\"KNA\":\"Saint Kitts and Nevis\",\"KOR\":\"South Korea\",\"KWT\":\"Kuwait\",\"LAO\":\"Lao People's Democratic Republic\",\"LBN\":\"Lebanon\",\"LBR\":\"Liberia\",\"LBY\":\"Libyan Arab Jamahiriya\",\"LCA\":\"Saint Lucia\",\"LIE\":\"Liechtenstein\",\"LKA\":\"Sri Lanka\",\"LSO\":\"Lesotho\",\"LTU\":\"Lithuania\",\"LUX\":\"Luxembourg\",\"LVA\":\"Latvia\",\"MAC\":\"Macao\",\"MAF\":\"Saint Martin (French part)\",\"MAR\":\"Morocco\",\"MCO\":\"Monaco\",\"MDA\":\"Moldova\",\"MDG\":\"Madagascar\",\"MDV\":\"Maldives\",\"MEX\":\"Mexico\",\"MHL\":\"Marshall Islands\",\"MKD\":\"Macedonia\",\"MLI\":\"Mali\",\"MLT\":\"Malta\",\"MMR\":\"Myanmar\",\"MNE\":\"Montenegro\",\"MNG\":\"Mongolia\",\"MNP\":\"Northern Mariana Islands\",\"MOZ\":\"Mozambique\",\"MRT\":\"Mauritania\",\"MSR\":\"Montserrat\",\"MTQ\":\"Martinique\",\"MUS\":\"Mauritius\",\"MWI\":\"Malawi\",\"MYS\":\"Malaysia\",\"MYT\":\"Mayotte\",\"NAM\":\"Namibia\",\"NCL\":\"New Caledonia\",\"NER\":\"Niger\",\"NFK\":\"Norfolk Island\",\"NGA\":\"Nigeria\",\"NIC\":\"Nicaragua\",\"NIU\":\"Niue\",\"NLD\":\"Netherlands\",\"NOR\":\"Norway\",\"NPL\":\"Nepal\",\"NRU\":\"Nauru\",\"NZL\":\"New Zealand\",\"OMN\":\"Oman\",\"PAK\":\"Pakistan\",\"PAN\":\"Panama\",\"PCN\":\"Pitcairn\",\"PER\":\"Peru\",\"PHL\":\"Philippines\",\"PLW\":\"Palau\",\"PNG\":\"Papua New Guinea\",\"POL\":\"Poland\",\"PRI\":\"Puerto Rico\",\"PRK\":\"North Korea\",\"PRT\":\"Portugal\",\"PRY\":\"Paraguay\",\"PSE\":\"Palestinian Territory, Occupied\",\"PYF\":\"French Polynesia\",\"QAT\":\"Qatar\",\"REU\":\"Réunion\",\"ROU\":\"Romania\",\"RUS\":\"Russian Federation\",\"RWA\":\"Rwanda\",\"SAU\":\"Saudi Arabia\",\"SDN\":\"Sudan\",\"SEN\":\"Senegal\",\"SGP\":\"Singapore\",\"SGS\":\"South Georgia and the South Sandwich Islands\",\"SHN\":\"Saint Helena, Ascension and Tristan da Cunha\",\"SJM\":\"Svalbard and Jan Mayen\",\"SLB\":\"Solomon Islands\",\"SLE\":\"Sierra Leone\",\"SLV\":\"El Salvador\",\"SMR\":\"San Marino\",\"SOM\":\"Somalia\",\"SPM\":\"Saint Pierre and Miquelon\",\"SRB\":\"Serbia\",\"STP\":\"Sao Tome and Principe\",\"SUR\":\"Suriname\",\"SVK\":\"Slovakia\",\"SVN\":\"Slovenia\",\"SWE\":\"Sweden\",\"SWZ\":\"Swaziland\",\"SYC\":\"Seychelles\",\"SYR\":\"Syrian Arab Republic\",\"TCA\":\"Turks and Caicos Islands\",\"TCD\":\"Chad\",\"TGO\":\"Togo\",\"THA\":\"Thailand\",\"TJK\":\"Tajikistan\",\"TKL\":\"Tokelau\",\"TKM\":\"Turkmenistan\",\"TLS\":\"Timor-Leste\",\"TON\":\"Tonga\",\"TTO\":\"Trinidad and Tobago\",\"TUN\":\"Tunisia\",\"TUR\":\"Turkey\",\"TUV\":\"Tuvalu\",\"TWN\":\"Taiwan\",\"TZA\":\"Tanzania\",\"UGA\":\"Uganda\",\"UKR\":\"Ukraine\",\"UMI\":\"United States Minor Outlying Islands\",\"URY\":\"Uruguay\",\"USA\":\"United States\",\"UZB\":\"Uzbekistan\",\"VAT\":\"Holy See (Vatican City State)\",\"VCT\":\"Saint Vincent and the Grenadines\",\"VEN\":\"Venezuela, Bolivarian Republic of\",\"VGB\":\"Virgin Islands, British\",\"VIR\":\"Virgin Islands, U.S.\",\"VNM\":\"Viet Nam\",\"VUT\":\"Vanuatu\",\"WLF\":\"Wallis and Futuna\",\"WSM\":\"Samoa\",\"YEM\":\"Yemen\",\"ZAF\":\"South Africa\",\"ZMB\":\"Zambia\",\"ZWE\":\"Zimbabwe\"}");

/***/ }),

/***/ "./src/assets/state-names-by-code.json":
/*!*********************************************!*\
  !*** ./src/assets/state-names-by-code.json ***!
  \*********************************************/
/*! exports provided: AL, AK, AZ, AR, CA, CO, CT, DE, FL, GA, HI, ID, IL, IN, IA, KS, KY, LA, ME, MD, MA, MI, MN, MS, MO, MT, NE, NV, NH, NJ, NM, NY, NC, ND, OH, OK, OR, PA, RI, SC, SD, TN, TX, UT, VT, VA, WA, WV, WI, WY, AS, DC, FM, GU, MH, MP, PW, PR, VI, default */
/***/ (function(module) {

module.exports = JSON.parse("{\"AL\":\"Alabama\",\"AK\":\"Alaska\",\"AZ\":\"Arizona\",\"AR\":\"Arkansas\",\"CA\":\"California\",\"CO\":\"Colorado\",\"CT\":\"Connecticut\",\"DE\":\"Delaware\",\"FL\":\"Florida\",\"GA\":\"Georgia\",\"HI\":\"Hawaii\",\"ID\":\"Idaho\",\"IL\":\"Illinois\",\"IN\":\"Indiana\",\"IA\":\"Iowa\",\"KS\":\"Kansas\",\"KY\":\"Kentucky\",\"LA\":\"Louisiana\",\"ME\":\"Maine\",\"MD\":\"Maryland\",\"MA\":\"Massachusetts\",\"MI\":\"Michigan\",\"MN\":\"Minnesota\",\"MS\":\"Mississippi\",\"MO\":\"Missouri\",\"MT\":\"Montana\",\"NE\":\"Nebraska\",\"NV\":\"Nevada\",\"NH\":\"New Hampshire\",\"NJ\":\"New Jersey\",\"NM\":\"New Mexico\",\"NY\":\"New York\",\"NC\":\"North Carolina\",\"ND\":\"North Dakota\",\"OH\":\"Ohio\",\"OK\":\"Oklahoma\",\"OR\":\"Oregon\",\"PA\":\"Pennsylvania\",\"RI\":\"Rhode Island\",\"SC\":\"South Carolina\",\"SD\":\"South Dakota\",\"TN\":\"Tennessee\",\"TX\":\"Texas\",\"UT\":\"Utah\",\"VT\":\"Vermont\",\"VA\":\"Virginia\",\"WA\":\"Washington\",\"WV\":\"West Virginia\",\"WI\":\"Wisconsin\",\"WY\":\"Wyoming\",\"AS\":\"American Samoa\",\"DC\":\"District of Columbia\",\"FM\":\"Federated States of Micronesia\",\"GU\":\"Guam\",\"MH\":\"Marshall Islands\",\"MP\":\"Northern Mariana Islands\",\"PW\":\"Palau\",\"PR\":\"Puerto Rico\",\"VI\":\"Virgin Islands\"}");

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