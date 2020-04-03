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
/* harmony default export */ __webpack_exports__["default"] = ("<div *ngFor=\"let key of keys\"\n    class=\"key-set\"\n    (click)=\"onKeyClick(key)\"\n    [class.active]=\"isKeyDisabled(key)\"\n>\n    <div\n        class=\"key-color\"\n        [style.background-color]=\"getKeyBackgroundColor(key)\"\n        [style.border-color]=\"colorsByKey[key]\"\n    ></div>\n    <div class=\"key-label\">{{ labelsByKey[key] }}</div>\n</div>\n");

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

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/common/charts/stat-viewer/stat-viewer.component.html":
/*!************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/common/charts/stat-viewer/stat-viewer.component.html ***!
  \************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"selected-stats\">\n    <div *ngFor=\"let statCols of statTable; let columnIndex = index\" class=\"stats-column-container\">\n        <div class=\"stats-column\">\n            <div *ngFor=\"let columnKey of statCols.columnKeys\">{{ labelsByKey[columnKey] }}:</div>\n        </div>\n        <div class=\"stats-column stats\">\n            <div\n                *ngFor=\"let columnValue of statCols.columnValues; let valueIndex = index\"\n                [class.first-val]=\"(columnIndex === 0) && (valueIndex === 0)\"\n            >{{ columnValue }}</div>\n        </div>\n    </div>\n</div>\n");

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

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/corona/corona-compare-dashboard/corona-compare-dashboard.component.html":
/*!*******************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/corona/corona-compare-dashboard/corona-compare-dashboard.component.html ***!
  \*******************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"chart-container\">\n    <div class=\"chart-header\">\n        <div class=\"radio-button-container\">\n            <div class=\"radio-buttons\">\n                <div class=\"radio-button\"\n                    [class.active]=\"!isViewingNormalized\"\n                    (click)=\"onChangeNormalized(false)\"\n                >Total</div>\n                <div class=\"radio-button\"\n                    [class.active]=\"isViewingNormalized\"\n                    (click)=\"onChangeNormalized(true)\"\n                >Per 1M</div>\n            </div>\n            <div class=\"radio-buttons\">\n                <div\n                    class=\"radio-button\"\n                    [class.active]=\"selectedMetricIndex === 0\"\n                    (click)=\"onSelectMetricIndex(0)\"\n                >{{ Labels.corona[CoronaKeys.CASES] }}</div>\n                <div\n                    class=\"radio-button\"\n                    [class.active]=\"selectedMetricIndex === 1\"\n                    (click)=\"onSelectMetricIndex(1)\"\n                >{{ Labels.corona[CoronaKeys.NEW] }}</div>\n                <div\n                    class=\"radio-button\"\n                    [class.active]=\"selectedMetricIndex === 2\"\n                    (click)=\"onSelectMetricIndex(2)\"\n                >{{ Labels.corona[CoronaKeys.ACTIVE] }}</div>\n                <div\n                    class=\"radio-button\"\n                    [class.active]=\"selectedMetricIndex === 3\"\n                    (click)=\"onSelectMetricIndex(3)\"\n                >{{ Labels.corona[CoronaKeys.RECOVERED] }}</div>\n                <div\n                    class=\"radio-button\"\n                    [class.active]=\"selectedMetricIndex === 4\"\n                    (click)=\"onSelectMetricIndex(4)\"\n                >{{ Labels.corona[CoronaKeys.DEATHS] }}</div>\n            </div>\n        </div>\n        <dwu-stat-viewer\n            [columnData]=\"compareData[hoverIndex]\"\n            [keys]=\"compareKeys\"\n            [disabledKeys]=\"disabledCompareKeys\"\n            [labelsByKey]=\"compareLabelsByKey\"\n            [rowCount]=\"3\"\n        ></dwu-stat-viewer>\n    </div>\n\n    <dwu-line-chart\n        class=\"overview chart\"\n        [tableData]=\"compareData\"\n        [keys]=\"compareKeys\"\n        [colorsByKey]=\"compareColorsByKey\"\n        [disabledKeys]=\"disabledCompareKeys\"\n        [hoverIndex]=\"hoverIndex\"\n        (hoverIndexChange)=\"hoverIndex = $event\"\n        [indicators]=\"indicators\"\n    ></dwu-line-chart>\n    <dwu-chart-legend\n        [keys]=\"compareKeys\"\n        [colorsByKey]=\"compareColorsByKey\"\n        [disabledKeys]=\"disabledCompareKeys\"\n        [labelsByKey]=\"compareLabelsByKey\"\n        (disabledKeysChange)=\"disabledCompareKeys = $event\"\n    ></dwu-chart-legend>\n\n</div>\n\n<div class=\"chart-container\">\n    <div class=\"chart-header\">\n        <div class=\"radio-button-container\">\n            <div class=\"radio-buttons\">\n                <div class=\"radio-button\"\n                    [class.active]=\"!isViewingRAvg\"\n                    (click)=\"setViewingRAvg(false)\"\n                >{{ Labels.corona[NormalKeys.R] }}</div>\n                <div class=\"radio-button\"\n                    [class.active]=\"isViewingRAvg\"\n                    (click)=\"setViewingRAvg(true)\"\n                >{{ Labels.corona[NormalKeys.R_AVG] }}</div>\n            </div>\n        </div>\n        <dwu-stat-viewer\n            [columnData]=\"compareRData[hoverIndex]\"\n            [keys]=\"compareKeys\"\n            [disabledKeys]=\"disabledCompareKeys\"\n            [labelsByKey]=\"compareLabelsByKey\"\n            [rowCount]=\"3\"\n            [formattersByKeys]=\"rFormattersByKeys\"\n        ></dwu-stat-viewer>\n    </div>\n    <dwu-line-chart\n        class=\"overview chart\"\n        [tableData]=\"compareRData\"\n        [keys]=\"compareKeys\"\n        [colorsByKey]=\"compareColorsByKey\"\n        [disabledKeys]=\"disabledCompareKeys\"\n        [hoverIndex]=\"hoverIndex\"\n        [yAxisFormatter]=\"toPercentage\"\n        [indicators]=\"indicators\"\n        (hoverIndexChange)=\"hoverIndex = $event\"\n    ></dwu-line-chart>\n    <dwu-chart-legend\n        [keys]=\"compareKeys\"\n        [colorsByKey]=\"compareColorsByKey\"\n        [disabledKeys]=\"disabledCompareKeys\"\n        [labelsByKey]=\"compareLabelsByKey\"\n        (disabledKeysChange)=\"disabledCompareKeys = $event\"\n    ></dwu-chart-legend>\n</div>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/corona/corona-dashboard/corona-dashboard.component.html":
/*!***************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/corona/corona-dashboard/corona-dashboard.component.html ***!
  \***************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"chart-container\">\n    <div class=\"chart-header\">\n        <div class=\"radio-button-container\">\n            <div class=\"radio-buttons\">\n                <div class=\"radio-button\"\n                    [class.active]=\"!isViewingNormalized\"\n                    (click)=\"onChangeNormalized(false)\"\n                >Total</div>\n                <div class=\"radio-button\"\n                    [class.active]=\"isViewingNormalized\"\n                    (click)=\"onChangeNormalized(true)\"\n                >Per 1M</div>\n            </div>\n            <div class=\"chart radio-buttons\">\n                <div class=\"radio-button\"\n                    [class.active]=\"!isViewingLineChart\"\n                    (click)=\"onChangeViewingLineChart(false)\"\n                >\n                    <span class=\"material-icons\">\n                        insert_chart\n                    </span>\n                </div>\n                <div class=\"radio-button\"\n                    [class.active]=\"isViewingLineChart\"\n                    (click)=\"onChangeViewingLineChart(true)\"\n                >\n                    <span class=\"material-icons\">\n                    show_chart\n                    </span>\n                </div>\n            </div>\n        </div>\n        <dwu-stat-viewer\n            [columnData]=\"coronaData[hoverIndex]\"\n            [keys]=\"isViewingNormalized ? perMilViewKeys : coronaViewKeys\"\n            [disabledKeys]=\"disabledBarKeys\"\n            [labelsByKey]=\"Labels.corona\"\n            [rowCount]=\"3\"\n            [formattersByKeys]=\"formattersByKeys\"\n        ></dwu-stat-viewer>\n    </div>\n    <dwu-line-chart\n        *ngIf=\"isViewingLineChart\"\n        class=\"overview chart\"\n        [tableData]=\"coronaData\"\n        [keys]=\"isViewingNormalized ? perMilKeys : coronaKeys\"\n        [colorsByKey]=\"coronaColorsByKey\"\n        [disabledKeys]=\"disabledBarKeys\"\n        [hoverIndex]=\"hoverIndex\"\n        (hoverIndexChange)=\"hoverIndex = $event\"\n        [indicators]=\"indicators\"\n    ></dwu-line-chart>\n    <dwu-bar-chart\n        *ngIf=\"!isViewingLineChart\"\n        class=\"overview chart\"\n        [tableData]=\"coronaData\"\n        [keys]=\"isViewingNormalized ? perMilKeys : coronaKeys\"\n        [colorsByKey]=\"coronaColorsByKey\"\n        [disabledKeys]=\"disabledBarKeys\"\n        [hoverIndex]=\"hoverIndex\"\n        (hoverIndexChange)=\"hoverIndex = $event\"\n        [indicators]=\"indicators\"\n    ></dwu-bar-chart>\n    <dwu-chart-legend\n        [keys]=\"isViewingNormalized ? perMilKeys : coronaKeys\"\n        [colorsByKey]=\"coronaColorsByKey\"\n        [disabledKeys]=\"disabledBarKeys\"\n        [labelsByKey]=\"Labels.corona\"\n        (disabledKeysChange)=\"disabledBarKeysChange.emit($event)\"\n    ></dwu-chart-legend>\n</div>\n\n<div class=\"chart-container\">\n    <div class=\"chart-header\">\n        <dwu-stat-viewer\n            [columnData]=\"coronaData[hoverIndex]\"\n            [keys]=\"normalizedViewKeys\"\n            [disabledKeys]=\"disabledBarKeys\"\n            [labelsByKey]=\"Labels.corona\"\n            [rowCount]=\"2\"\n            [formattersByKeys]=\"formattersByKeys\"\n        ></dwu-stat-viewer>\n    </div>\n    <dwu-line-chart\n        class=\"overview chart\"\n        [tableData]=\"coronaData\"\n        [keys]=\"normalKeys\"\n        [colorsByKey]=\"coronaColorsByKey\"\n        [disabledKeys]=\"disabledNormalKeys\"\n        [hoverIndex]=\"hoverIndex\"\n        [yAxisFormatter]=\"toPercentage\"\n        [indicators]=\"indicators\"\n        (hoverIndexChange)=\"hoverIndex = $event\"\n    ></dwu-line-chart>\n    <dwu-chart-legend\n        [keys]=\"normalKeys\"\n        [colorsByKey]=\"coronaColorsByKey\"\n        [disabledKeys]=\"disabledNormalKeys\"\n        [labelsByKey]=\"Labels.corona\"\n        (disabledKeysChange)=\"disabledNormalKeysChange.emit($event)\"\n    ></dwu-chart-legend>\n</div>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/corona/corona-file-viewer/corona-file-viewer.component.html":
/*!*******************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/corona/corona-file-viewer/corona-file-viewer.component.html ***!
  \*******************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div *ngIf=\"!selectedFileIds\" class=\"header\">\n    <div class=\"header-main\">\n        <div>{{ fileName }}</div>\n    </div>\n</div>\n<div *ngIf=\"selectedFileIds && selectedFileIds.size\" class=\"header\">\n    <div class=\"header-main\">\n        <div>{{ getHeader() }}</div>\n        <!-- <a [href]=\"fileUrl\" class=\"download-link\" download>\n            <span class=\"material-icons download-icon\">\n                get_app\n            </span>\n        </a> -->\n        <div class=\"loader\" [class.visible]=\"isLoading$ | async\">\n            <span class=\"material-icons hour-glass\">\n                hourglass_empty\n            </span>\n        </div>\n    </div>\n    <div class=\"population\">\n        <div>Total Population:</div>\n        <div\n            *ngIf=\"totalPopulation$ | async as population\"\n            class=\"population-count\"\n        >{{ population.toLocaleString() }}</div>\n    </div>\n</div>\n\n<ng-container *ngIf=\"selectedFileIds && (selectedFileIds.size > 0) && latestCoronaFilesWithFileId$ | async as coronaFilesWithFileId\">\n    <dwu-corona-compare-dashboard\n        *ngIf=\"isComparing\"\n        [coronaFilesWithFileId]=\"coronaFilesWithFileId\"\n        [filesById]=\"filesById\"\n    ></dwu-corona-compare-dashboard>\n\n    <dwu-corona-dashboard\n        *ngIf=\"!isComparing\"\n        [lockdownInfo]=\"getFirstSelectedFileLockdownInfo()\"\n        [coronaFile]=\"coronaFilesWithFileId[0][0]\"\n        [disabledBarKeys]=\"disabledBarKeys\"\n        (disabledBarKeysChange)=\"disabledBarKeysChange.emit($event)\"\n        [disabledNormalKeys]=\"disabledNormalKeys\"\n        (disabledNormalKeysChange)=\"disabledNormalKeysChange.emit($event)\"\n        [isViewingNormalized]=\"isViewingNormalized\"\n        (isViewingNormalizedChange)=\"isViewingNormalizedChange.emit($event)\"\n        [isViewingLineChart]=\"isViewingLineChart\"\n        (isViewingLineChartChange)=\"isViewingLineChartChange.emit($event)\"\n    ></dwu-corona-dashboard>\n</ng-container>\n<div class=\"loading-overlay active\" [class.active]=\"isLoading$ | async\"></div>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/corona/corona.component.html":
/*!************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/corona/corona.component.html ***!
  \************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"page-container\">\n    <div class=\"left-side\" [class.expanded]=\"leftSideExpanded\">\n        <dwu-search-input\n            [searchText]=\"filterStr\"\n            (searchTextChange)=\"onFilterStringChange($event)\"\n            [placeholder]=\"'County, State, or Country'\"\n        ></dwu-search-input>\n        <div class=\"view-tabs\">\n            <div\n                class=\"view-tab\"\n                [class.active]=\"selectedTab === Tab.ALL\"\n                (click)=\"setSelectedTab(Tab.ALL)\"\n            >\n                All\n            </div>\n            <div\n                class=\"view-tab\"\n                [class.active]=\"selectedTab === Tab.SAVED\"\n                (click)=\"setSelectedTab(Tab.SAVED)\"\n            >\n                <div class=\"material-icons star active\">\n                    grade\n                </div>\n                <div>Saved</div>\n            </div>\n            <div\n                class=\"view-tab\"\n                [class.active]=\"selectedTab === Tab.COMPARE\"\n                (click)=\"setSelectedTab(Tab.COMPARE)\"\n            >\n                <div>Compare</div>\n            </div>\n        </div>\n        <dwu-file-explorer\n            [rootFileId]=\"fileGroup.rootFileId\"\n            [filesById]=\"fileGroup.filesById\"\n            (filesByIdChange)=\"this.onFilesByIdChange($event)\"\n            [fuzzFilterString]=\"filterStr\"\n            [closedFileIds]=\"fileGroup.closedFileIds\"\n            (closedFileIdsChange)=\"fileGroup.setClosedFileIds($event)\"\n            [selectedFileIds]=\"(this.selectedTab === Tab.COMPARE) ? compareSelectedFileIds : fileGroup.selectedFileIds\"\n            (selectedFileIdsChange)=\"onSelectedFileIdsChange($event)\"\n            [rowIconTemplate]=\"rowIconTemplate\"\n            [perfMode]=\"true\"\n            [dragEnabled]=\"this.selectedTab === Tab.SAVED\"\n            [multiFileSelect]=\"selectedTab === Tab.COMPARE\"\n        ></dwu-file-explorer>\n        <div class=\"expander\" (click)=\"leftSideExpanded = !leftSideExpanded;\">\n            <span class=\"material-icons expander-icon\" [class.flipped]=\"leftSideExpanded\">\n                expand_more\n            </span>\n        </div>\n    </div>\n    <div class=\"right-side\">\n        <ng-container  *ngIf=\"getSelectedFileIds() as selectedFileId\">\n            <dwu-corona-file-viewer\n                [selectedFileIds]=\"getSelectedFileIds()\"\n                [locationsByFileId]=\"locationsByFileId\"\n                [filesById]=\"fileGroup.filesById\"\n                [isComparing]=\"selectedTab === Tab.COMPARE\"\n                [(disabledBarKeys)]=\"disabledBarKeys\"\n                [(disabledNormalKeys)]=\"disabledNormalKeys\"\n                [(isViewingNormalized)]=\"isViewingNormalized\"\n                [(isViewingLineChart)]=\"isViewingLineChart\"\n            ></dwu-corona-file-viewer>\n        </ng-container>\n    </div>\n    <ng-template #rowIconTemplate let-file=\"file\">\n        <div\n            *ngIf=\"lockdownDataByLocation[locationsByFileId[file.id]]\"\n            class=\"material-icons row-icon lock\"\n        >\n            lock\n        </div>\n\n        <div\n            *ngIf=\"locationsByFileId[file.id]\"\n            class=\"material-icons star clickable row-icon\"\n            [class.active]=\"favoriteFileIds.has(file.id)\"\n            (click)=\"toggleFavoriteFile(file, $event)\"\n        >\n            grade\n        </div>\n    </ng-template>\n</div>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/file-explorer/file-explorer.component.html":
/*!**************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/file-explorer/file-explorer.component.html ***!
  \**************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<cdk-virtual-scroll-viewport itemSize=\"24\" class=\"viewport\">\n    <div [dragula]=\"'EXP'\">\n        <div\n            *cdkVirtualFor=\"let fileIdAndDepth of fileIdsAndDepth; index as i; trackBy: trackByFn\"\n            [attr.data-file-id]=\"filesById[fileIdAndDepth[0]].id\"\n        >\n            <div\n                *ngIf=\"filesById[fileIdAndDepth[0]] as file\"\n                class=\"file-row\"\n                [ngClass]=\"fileIsOddById[file.id] ? 'odd' : 'even'\"\n                [class.dragging]=\"fileIdBeingDragged\"\n                [class.being-dragged]=\"fileIdBeingDragged === file.id\"\n                [class.selected]=\"selectedFileIds.has(file.id)\"\n                [class.hidden]=\"visibleFileIds && !visibleFileIds.has(file.id)\"\n                [style.padding-left]=\"getPaddingLeft(fileIdAndDepth[1])\"\n                (click)=\"selectFile(file)\"\n            >\n                <div class=\"dragula-container\">\n                    <span *ngIf=\"dragEnabled\" class=\"material-icons dragula-handle\">\n                        swap_vert\n                    </span>\n                    <ng-container *ngIf=\"file.childIds\">\n                        <i\n                            class=\"material-icons arrow clickable\"\n                            (click)=\"toggleClosedFile(file, $event)\"\n                            [class.closed]=\"!this.fuzzFilterString && closedFileIds.has(file.id)\"\n                        >\n                            keyboard_arrow_right\n                        </i>\n                        <i class=\"material-icons folder\">\n                            folder\n                        </i>\n                    </ng-container>\n                    <ng-container *ngIf=\"!file.childIds\">\n                        <div class=\"space-maker\">\n                        </div>\n                        <div *ngIf=\"multiFileSelect\" class=\"checkbox-container\">\n                            <input type=\"checkbox\" [attr.checked]=\"selectedFileIds.has(file.id) ? true : null\">\n                        </div>\n                        <i *ngIf=\"!multiFileSelect\" class=\"material-icons text\">subject</i>\n                    </ng-container>\n                    <div class=\"file-label\" *ngIf=\"fuzzItemsByFileId[file.id] as fuzzItem\">\n                        <dwu-text-decorator\n                            [ignoreUpdates]=\"visibleFileIds && !visibleFileIds.has(file.id)\"\n                            [text]=\"fuzzItemsByFileId[file.id].subject\"\n                            [matchRanges]=\"fuzzItemsByFileId[file.id].matchRanges\"\n                        ></dwu-text-decorator>\n                    </div>\n                    <div class=\"file-label\" *ngIf=\"!fuzzItemsByFileId[file.id]\">\n                        {{ file.label || file.id }}\n                    </div>\n                    <ng-container *ngIf=\"rowIconTemplate\">\n                        <ng-container *ngTemplateOutlet=\"rowIconTemplate; context: { file: file }\">\n                        </ng-container>\n                    </ng-container>\n                </div>\n            </div>\n        </div>\n    </div>\n</cdk-virtual-scroll-viewport>\n\n\n<!-- Not sure how, but should avoid duplicating this -->\n<!-- <div *ngIf=\"!perfMode\" class=\"viewport\">\n    <div [dragula]=\"'EXP'\">\n        <div\n            *ngFor=\"let fileIdAndDepth of fileIdsAndDepth; index as i; trackBy: trackByFn\"\n            [attr.data-file-id]=\"filesById[fileIdAndDepth[0]].id\"\n        >\n            <div\n                *ngIf=\"filesById[fileIdAndDepth[0]] as file\"\n                class=\"file-row\"\n                [ngClass]=\"fileIsOddById[file.id] ? 'odd' : 'even'\"\n                [class.dragging]=\"fileIdBeingDragged\"\n                [class.being-dragged]=\"fileIdBeingDragged === file.id\"\n                [class.selected]=\"selectedFileIds.has(file.id)\"\n                [class.hidden]=\"visibleFileIds && !visibleFileIds.has(file.id)\"\n                [style.padding-left]=\"getPaddingLeft(fileIdAndDepth[1])\"\n                (click)=\"selectFile(file)\"\n            >\n                <div class=\"dragula-container\">\n                    <ng-container *ngIf=\"file.childIds\">\n                        <i\n                            class=\"material-icons arrow clickable\"\n                            (click)=\"toggleClosedFile(file, $event)\"\n                            [class.closed]=\"closedFileIds.has(file.id)\"\n                        >\n                            keyboard_arrow_right\n                        </i>\n                        <i class=\"material-icons folder\">\n                            folder\n                        </i>\n                    </ng-container>\n                    <ng-container *ngIf=\"!file.childIds\">\n                        <div class=\"space-maker\">\n                        </div>\n                        <i class=\"material-icons text\">subject</i>\n                    </ng-container>\n                    <div class=\"file-label\" *ngIf=\"fuzzItemsByFileId[file.id] as fuzzItem\">\n                        <dwu-text-decorator\n                            [ignoreUpdates]=\"visibleFileIds && !visibleFileIds.has(file.id)\"\n                            [text]=\"fuzzItemsByFileId[file.id].subject\"\n                            [matchRanges]=\"fuzzItemsByFileId[file.id].matchRanges\"\n                        ></dwu-text-decorator>\n                    </div>\n                    <div class=\"file-label\" *ngIf=\"!fuzzItemsByFileId[file.id]\">\n                        {{ file.label || file.id }}\n                    </div>\n                    <ng-container *ngIf=\"rowIconTemplate\">\n                        <ng-container *ngTemplateOutlet=\"rowIconTemplate; context: { file: file }\">\n                        </ng-container>\n                    </ng-container>\n                </div>\n            </div>\n        </div>\n    </div>\n</div> -->");

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








// import { AppModule as FuzzAppModule } from 'fuzz-demo-app';
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
                // FuzzAppModule,
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
/* harmony default export */ __webpack_exports__["default"] = (":host {\n  height: 100%;\n  width: 100%;\n  display: flex;\n  flex-direction: column;\n}\n:host .main-content {\n  flex: 1 1 0;\n  overflow: auto;\n}\n:host .main-content {\n  color: #202124;\n  background-color: #fff;\n}\n:host .top-nav {\n  display: flex;\n  background-color: #3F4038;\n  color: #FCFCF9;\n}\n:host .top-nav .page-title-container {\n  flex: 0 0 auto;\n  padding: 0.5rem 1.25rem;\n  font-size: 1.25rem;\n  display: flex;\n  align-items: center;\n}\n:host .top-nav .right-section {\n  flex: 1 1 0;\n  display: flex;\n  flex-direction: column;\n  justify-content: flex-end;\n  overflow: hidden;\n}\n:host .top-nav .right-section .nav-items-container {\n  display: flex;\n  justify-content: flex-end;\n  margin: 0 3rem;\n}\n@media only screen and (max-width: 550px) {\n  :host .top-nav .right-section .nav-items-container {\n    margin: 0 0.25rem;\n  }\n}\n:host .top-nav .right-section .nav-items-container .nav-item {\n  flex: 0 1 auto;\n  background-color: #3F4038;\n  color: #FCFCF9;\n  width: 8rem;\n  padding: 0.5rem;\n  cursor: pointer;\n  text-align: center;\n  outline: none;\n  white-space: nowrap;\n  -webkit-user-select: none;\n     -moz-user-select: none;\n      -ms-user-select: none;\n          user-select: none;\n  margin: 0 0.25rem;\n  border-radius: 4px 4px 0 0;\n}\n:host .top-nav .right-section .nav-items-container .nav-item:hover {\n  background-color: #4B5320;\n  color: #FCFCF9;\n}\n:host .top-nav .right-section .nav-items-container .nav-item.active {\n  background-color: #708238;\n  color: #FCFCF9;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9hZG1pbi9wcm9qZWN0cy9kYXd1LWhvbWUvc3JjL2FwcC9hcHAuY29tcG9uZW50LnNjc3MiLCIvVXNlcnMvYWRtaW4vcHJvamVjdHMvZGF3dS1ob21lL3NyYy9zdHlsZXMvbWl4aW5zLnNjc3MiLCJzcmMvYXBwL2FwcC5jb21wb25lbnQuc2NzcyIsIi9Vc2Vycy9hZG1pbi9wcm9qZWN0cy9kYXd1LWhvbWUvc3JjL3N0eWxlcy92YXJpYWJsZXMuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFHQTtFQzZOSSxZQUFBO0VBQ0EsV0FBQTtFQUNBLGFBQUE7RUFDQSxzQkFBQTtBQzlOSjtBRCtOSTtFQUNJLFdBQUE7RUFDQSxjQUFBO0FDN05SO0FGSkk7RUFDSSxjR2VVO0VIZFYsc0JHa0JBO0FEWlI7QUZKSTtFQUNJLGFBQUE7RUFDQSx5QkdXTTtFSFZOLGNBQUE7QUVNUjtBRkxRO0VBQ0ksY0FBQTtFQUNBLHVCQUFBO0VBQ0Esa0JBQUE7RUFDQSxhQUFBO0VBQ0EsbUJBQUE7QUVPWjtBRkxRO0VBQ0ksV0FBQTtFQUNBLGFBQUE7RUFDQSxzQkFBQTtFQUNBLHlCQUFBO0VBQ0EsZ0JBQUE7QUVPWjtBRk5ZO0VBQ0ksYUFBQTtFQUNBLHlCQUFBO0VBQ0EsY0FBQTtBRVFoQjtBRHVNSTtFRGxOUTtJQUtRLGlCQUFBO0VFVWxCO0FBQ0Y7QUZUZ0I7RUFDSSxjQUFBO0VDaUxoQix5QkU3TFU7RUY4TFYsY0V4TWE7RUZrTGIsV0FBQTtFQUNBLGVBQUE7RUFDQSxlQUFBO0VBQ0Esa0JBQUE7RUFDQSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSx5QkFBQTtLQUFBLHNCQUFBO01BQUEscUJBQUE7VUFBQSxpQkFBQTtFRGhLZ0IsaUJBQUE7RUFDQSwwQkFBQTtBRW1CcEI7QUQ2Skk7RUFDSSx5QkVwTks7RUZxTkwsY0UzTVM7QURnRGpCO0FENkpJO0VBQ0kseUJFdk5NO0VGd05OLGNFL01TO0FEb0RqQiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIkBpbXBvcnQgJ21peGlucyc7XG5AaW1wb3J0ICd2YXJpYWJsZXMnO1xuXG46aG9zdCB7XG4gICAgQGluY2x1ZGUgdG9wLW5hdi1wYWdlO1xuICAgIC5tYWluLWNvbnRlbnQge1xuICAgICAgICBjb2xvcjogJGJhc2ljYWxseS1ibGFjaztcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogJHdoaXRlO1xuICAgIH1cbiAgICAudG9wLW5hdiB7XG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6ICRibGFjay1vbGl2ZTtcbiAgICAgICAgY29sb3I6ICRsaWdodGVzdC1ncmVlbjtcbiAgICAgICAgLnBhZ2UtdGl0bGUtY29udGFpbmVyIHtcbiAgICAgICAgICAgIGZsZXg6IDAgMCBhdXRvO1xuICAgICAgICAgICAgcGFkZGluZzogMC41cmVtIDEuMjVyZW07XG4gICAgICAgICAgICBmb250LXNpemU6IDEuMjVyZW07XG4gICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgICAgfVxuICAgICAgICAucmlnaHQtc2VjdGlvbiB7XG4gICAgICAgICAgICBmbGV4OiAxIDEgMDtcbiAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgICAgICAgICAganVzdGlmeS1jb250ZW50OiBmbGV4LWVuZDtcbiAgICAgICAgICAgIG92ZXJmbG93OiBoaWRkZW47XG4gICAgICAgICAgICAubmF2LWl0ZW1zLWNvbnRhaW5lciB7XG4gICAgICAgICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtZW5kO1xuICAgICAgICAgICAgICAgIG1hcmdpbjogMCAzcmVtO1xuICAgICAgICAgICAgICAgIEBpbmNsdWRlIHJlc3BvbmQtdG8oc21hbGwpIHtcbiAgICAgICAgICAgICAgICAgICAgbWFyZ2luOiAwIDAuMjVyZW07XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIC5uYXYtaXRlbSB7XG4gICAgICAgICAgICAgICAgICAgIGZsZXg6IDAgMSBhdXRvO1xuICAgICAgICAgICAgICAgICAgICBAaW5jbHVkZSBkYXJrLWJ1dHRvbjtcbiAgICAgICAgICAgICAgICAgICAgbWFyZ2luOiAwIDAuMjVyZW07XG4gICAgICAgICAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDRweCA0cHggMCAwO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cblxuICAgICAgICB9XG4gICAgfVxufVxuIiwiQGltcG9ydCAndmFyaWFibGVzJztcblxuQG1peGluIGJhc2UtY29yb25hLWRhc2hib2FyZCB7XG4gICAgZGlzcGxheTogYmxvY2s7XG4gICAgcGFkZGluZy1ib3R0b206IDJyZW07XG4gICAgLmNoYXJ0LWNvbnRhaW5lciB7XG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICAgIC5jaGFydC1oZWFkZXIge1xuICAgICAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgICAgcGFkZGluZzogMCAxLjVyZW07XG4gICAgICAgICAgICBhbGlnbi1pdGVtczogZmxleC1lbmQ7XG4gICAgICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuXG4gICAgICAgICAgICAucmFkaW8tYnV0dG9uLWNvbnRhaW5lcntcbiAgICAgICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICAgICAgICAgICAganVzdGlmeS1jb250ZW50OiBmbGV4LWVuZDtcbiAgICAgICAgICAgICAgICBmbGV4LXdyYXA6IHdyYXA7XG5cbiAgICAgICAgICAgICAgICAucmFkaW8tYnV0dG9ucyB7XG4gICAgICAgICAgICAgICAgICAgIEBpbmNsdWRlIHJhZGlvLWJ1dHRvbi1jb250YWluZXI7XG4gICAgICAgICAgICAgICAgICAgICY6bm90KDpmaXJzdC1jaGlsZCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgbWFyZ2luLWxlZnQ6IDFyZW07XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgJi5jaGFydCB7XG4gICAgICAgICAgICAgICAgICAgICAgICAucmFkaW8tYnV0dG9uIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBtaW4td2lkdGg6IGF1dG87XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcGFkZGluZzogM3B4O1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAubWF0ZXJpYWwtaWNvbnMge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBmbGV4OiAxIDAgYXV0bztcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZm9udC1zaXplOiAxLjI1cmVtO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAucmFkaW8tYnV0dG9uIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIG1hcmdpbi10b3A6IDAuNXJlbTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGR3dS1zdGF0LXZpZXdlciB7XG4gICAgICAgICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtZW5kO1xuICAgICAgICAgICAgICAgIGZsZXg6IDEgMCBhdXRvO1xuICAgICAgICAgICAgICAgIG1hcmdpbi10b3A6IDFyZW07XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgLm92ZXJ2aWV3LmNoYXJ0IHtcbiAgICAgICAgICAgIGhlaWdodDogMTIuNXJlbTtcbiAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICB9XG4gICAgICAgIGR3dS1jaGFydC1sZWdlbmQge1xuICAgICAgICAgICAgZmxleDogMCAwIGF1dG87XG4gICAgICAgICAgICBtYXJnaW4tdG9wOiAwLjI1cmVtO1xuICAgICAgICAgICAgbWFyZ2luLWJvdHRvbTogMnJlbTtcbiAgICAgICAgfVxuICAgIH1cbn1cblxuQG1peGluIHJhZGlvLWJ1dHRvbi1jb250YWluZXIge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgLnJhZGlvLWJ1dHRvbiB7XG4gICAgICAgIEBpbmNsdWRlIGxpZ2h0LW1pbmktYnV0dG9uO1xuICAgICAgICBAaW5jbHVkZSBzaGFkb3c7XG4gICAgICAgICY6Zmlyc3QtY2hpbGQge1xuICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogNXB4IDAgMCA1cHg7XG4gICAgICAgIH1cbiAgICAgICAgJjpsYXN0LWNoaWxkIHtcbiAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDAgNXB4IDVweCAwO1xuICAgICAgICB9XG4gICAgfVxufVxuXG5AbWl4aW4gc2hhZG93IHtcbiAgICB0cmFuc2l0aW9uLWR1cmF0aW9uOiBib3gtc2hhZG93IDI1bXMsIHRyYW5zZm9ybSwgMjVtcztcbiAgICBib3gtc2hhZG93OiAxcHggMXB4IDJweCAwICRsaWdodGVyLWdyYXk7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDApO1xuICAgICY6YWN0aXZlIHtcbiAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDFweCk7XG4gICAgICAgIGJveC1zaGFkb3c6IG5vbmU7XG4gICAgfVxuICAgICYuYWN0aXZlIHtcbiAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDFweCk7XG4gICAgICAgIGJveC1zaGFkb3c6IG5vbmU7XG4gICAgfVxufVxuXG5AbWl4aW4gcmVzcG9uc2l2ZS1wYWdlIHtcbiAgICBAbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA3NTBweCkge1xuICAgICAgICBkaXYucGFnZS1jb250YWluZXIge1xuICAgICAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICAgICAgICAgIC5sZWZ0LXNpZGUge1xuICAgICAgICAgICAgICAgIGZsZXg6IDAgMCBhdXRvO1xuICAgICAgICAgICAgICAgIGhlaWdodDogMTMuMjVyZW07XG4gICAgICAgICAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgICAgICAgICAgbWF4LXdpZHRoOiBub25lO1xuICAgICAgICAgICAgICAgIC8vIG1pbi13aWR0aDogbm9uZTtcbiAgICAgICAgICAgICAgICB0cmFuc2l0aW9uOiBoZWlnaHQgNTBtcztcbiAgICAgICAgICAgICAgICAmLmV4cGFuZGVkIHtcbiAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiA4NSU7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIC5leHBhbmRlciB7XG4gICAgICAgICAgICAgICAgICAgIEBpbmNsdWRlIGRhcmstdGhlbWU7XG4gICAgICAgICAgICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgICAgICAgICAgICAgICAgYm90dG9tOiAwO1xuICAgICAgICAgICAgICAgICAgICBsZWZ0OiA1MCU7XG4gICAgICAgICAgICAgICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgtNTAlKTtcbiAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDMuNXJlbTtcbiAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiAxcmVtO1xuICAgICAgICAgICAgICAgICAgICBib3JkZXI6IDFweCBzb2xpZCAkbW9zcy1ncmVlbjtcbiAgICAgICAgICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogNXB4IDVweCAwIDAgO1xuICAgICAgICAgICAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgICAgICAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAgICAgICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgICAgICAgICAgICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgICAgICAgICAgICAgICAgIC5leHBhbmRlci1pY29uIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMTZweDtcbiAgICAgICAgICAgICAgICAgICAgICAgICYuZmxpcHBlZCB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdHJhbnNmb3JtOiByb3RhdGUoMTgwZGVnKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuICAgIC5wYWdlLWNvbnRhaW5lciB7XG4gICAgICAgIGhlaWdodDogMTAwJTtcbiAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XG5cbiAgICAgICAgLmxlZnQtc2lkZSB7XG4gICAgICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgICAgICAgICBmbGV4OiAxIDEgMDtcbiAgICAgICAgICAgIG92ZXJmbG93OiBoaWRkZW47XG4gICAgICAgICAgICBtYXgtd2lkdGg6IDI3LjUlO1xuICAgICAgICAgICAgbWluLXdpZHRoOiAyMHJlbTtcbiAgICAgICAgICAgIC5leHBhbmRlciB7XG4gICAgICAgICAgICAgICAgZGlzcGxheTogbm9uZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICAucmlnaHQtc2lkZSB7XG4gICAgICAgICAgICBmbGV4OiAxIDEgMDtcbiAgICAgICAgICAgIG92ZXJmbG93OiBhdXRvO1xuICAgICAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgICAgICB9XG4gICAgfVxuXG59XG5AbWl4aW4gbGlnaHQtbWluaS1idXR0b24ge1xuICAgIEBpbmNsdWRlIGxpZ2h0LXRoZW1lO1xuICAgIEBpbmNsdWRlIGJ1dHRvbi14cztcbn1cblxuQG1peGluIGxpZ2h0LXNtYWxsLWJ1dHRvbiB7XG4gICAgQGluY2x1ZGUgbGlnaHQtdGhlbWU7XG4gICAgQGluY2x1ZGUgYnV0dG9uLXNtO1xufVxuXG5AbWl4aW4gZGFyay1idXR0b24ge1xuICAgIEBpbmNsdWRlIGRhcmstdGhlbWU7XG4gICAgQGluY2x1ZGUgYnV0dG9uLW1kO1xufVxuXG5AbWl4aW4gYnV0dG9uLXhzIHtcbiAgICBtaW4td2lkdGg6IDJyZW07XG4gICAgcGFkZGluZzogMC4yNXJlbSAwLjVyZW07XG4gICAgZm9udC1zaXplOiAxcmVtO1xuICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgb3V0bGluZTogbm9uZTtcbiAgICB3aGl0ZS1zcGFjZTogbm93cmFwO1xuICAgIHVzZXItc2VsZWN0OiBub25lO1xufVxuXG5AbWl4aW4gYnV0dG9uLXNtIHtcbiAgICBtaW4td2lkdGg6IDNyZW07XG4gICAgcGFkZGluZzogMC4yNXJlbSAwLjVyZW07XG4gICAgY3Vyc29yOiBwb2ludGVyO1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICBvdXRsaW5lOiBub25lO1xuICAgIHdoaXRlLXNwYWNlOiBub3dyYXA7XG4gICAgdXNlci1zZWxlY3Q6IG5vbmU7XG59XG5cbkBtaXhpbiBidXR0b24tbWQge1xuICAgIHdpZHRoOiA4cmVtO1xuICAgIHBhZGRpbmc6IDAuNXJlbTtcbiAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIG91dGxpbmU6IG5vbmU7XG4gICAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcbiAgICB1c2VyLXNlbGVjdDogbm9uZTtcbn1cblxuQG1peGluIGxpZ2h0LXRoZW1lIHtcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogJGVnZ3NoZWxsLWRhcms7XG4gICAgJjpob3ZlciB7XG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6ICRsYXVyZWwtZ3JlZW47XG4gICAgfVxuICAgICYuYWN0aXZlIHtcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogJG9saXZlLWdyZWVuO1xuICAgICAgICBjb2xvcjogJGxpZ2h0ZXN0LWdyZWVuO1xuICAgIH1cbn1cblxuQG1peGluIGRhcmstdGhlbWUge1xuICAgIGJhY2tncm91bmQtY29sb3I6ICRibGFjay1vbGl2ZTtcbiAgICBjb2xvcjogJGxpZ2h0ZXN0LWdyZWVuO1xuICAgICY6aG92ZXIge1xuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkYXJteS1ncmVlbjtcbiAgICAgICAgY29sb3I6ICRsaWdodGVzdC1ncmVlbjtcbiAgICB9XG4gICAgJi5hY3RpdmUge1xuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkb2xpdmUtZ3JlZW47XG4gICAgICAgIGNvbG9yOiAkbGlnaHRlc3QtZ3JlZW47XG4gICAgfVxufVxuXG5AbWl4aW4gdG9wLW5hdi1wYWdlIHtcbiAgICBoZWlnaHQ6IDEwMCU7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgIC5tYWluLWNvbnRlbnQge1xuICAgICAgICBmbGV4OiAxIDEgMDtcbiAgICAgICAgb3ZlcmZsb3c6IGF1dG87XG4gICAgfVxufVxuXG5AbWl4aW4gcmVzcG9uZC10bygkbWVkaWEpIHtcbiAgQGlmICRtZWRpYSA9PSBzbWFsbCB7XG4gICAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiAkYnJlYWstc21hbGwpIHsgQGNvbnRlbnQ7IH1cbiAgfVxuICBAZWxzZSBpZiAkbWVkaWEgPT0gbWVkaXVtIHtcbiAgICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChtaW4td2lkdGg6ICRicmVhay1zbWFsbCArIDEpIGFuZCAobWF4LXdpZHRoOiAkYnJlYWstbGFyZ2UgLSAxKSB7IEBjb250ZW50OyB9XG4gIH1cbiAgQGVsc2UgaWYgJG1lZGlhID09IHdpZGUge1xuICAgIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1pbi13aWR0aDogJGJyZWFrLWxhcmdlKSB7IEBjb250ZW50OyB9XG4gIH1cbn1cbiIsIjpob3N0IHtcbiAgaGVpZ2h0OiAxMDAlO1xuICB3aWR0aDogMTAwJTtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbn1cbjpob3N0IC5tYWluLWNvbnRlbnQge1xuICBmbGV4OiAxIDEgMDtcbiAgb3ZlcmZsb3c6IGF1dG87XG59XG46aG9zdCAubWFpbi1jb250ZW50IHtcbiAgY29sb3I6ICMyMDIxMjQ7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XG59XG46aG9zdCAudG9wLW5hdiB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGJhY2tncm91bmQtY29sb3I6ICMzRjQwMzg7XG4gIGNvbG9yOiAjRkNGQ0Y5O1xufVxuOmhvc3QgLnRvcC1uYXYgLnBhZ2UtdGl0bGUtY29udGFpbmVyIHtcbiAgZmxleDogMCAwIGF1dG87XG4gIHBhZGRpbmc6IDAuNXJlbSAxLjI1cmVtO1xuICBmb250LXNpemU6IDEuMjVyZW07XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG59XG46aG9zdCAudG9wLW5hdiAucmlnaHQtc2VjdGlvbiB7XG4gIGZsZXg6IDEgMSAwO1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtZW5kO1xuICBvdmVyZmxvdzogaGlkZGVuO1xufVxuOmhvc3QgLnRvcC1uYXYgLnJpZ2h0LXNlY3Rpb24gLm5hdi1pdGVtcy1jb250YWluZXIge1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtZW5kO1xuICBtYXJnaW46IDAgM3JlbTtcbn1cbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogNTUwcHgpIHtcbiAgOmhvc3QgLnRvcC1uYXYgLnJpZ2h0LXNlY3Rpb24gLm5hdi1pdGVtcy1jb250YWluZXIge1xuICAgIG1hcmdpbjogMCAwLjI1cmVtO1xuICB9XG59XG46aG9zdCAudG9wLW5hdiAucmlnaHQtc2VjdGlvbiAubmF2LWl0ZW1zLWNvbnRhaW5lciAubmF2LWl0ZW0ge1xuICBmbGV4OiAwIDEgYXV0bztcbiAgYmFja2dyb3VuZC1jb2xvcjogIzNGNDAzODtcbiAgY29sb3I6ICNGQ0ZDRjk7XG4gIHdpZHRoOiA4cmVtO1xuICBwYWRkaW5nOiAwLjVyZW07XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBvdXRsaW5lOiBub25lO1xuICB3aGl0ZS1zcGFjZTogbm93cmFwO1xuICB1c2VyLXNlbGVjdDogbm9uZTtcbiAgbWFyZ2luOiAwIDAuMjVyZW07XG4gIGJvcmRlci1yYWRpdXM6IDRweCA0cHggMCAwO1xufVxuOmhvc3QgLnRvcC1uYXYgLnJpZ2h0LXNlY3Rpb24gLm5hdi1pdGVtcy1jb250YWluZXIgLm5hdi1pdGVtOmhvdmVyIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzRCNTMyMDtcbiAgY29sb3I6ICNGQ0ZDRjk7XG59XG46aG9zdCAudG9wLW5hdiAucmlnaHQtc2VjdGlvbiAubmF2LWl0ZW1zLWNvbnRhaW5lciAubmF2LWl0ZW0uYWN0aXZlIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzcwODIzODtcbiAgY29sb3I6ICNGQ0ZDRjk7XG59IiwiXG4kZGFyay1ncmVlbjogIzI5MkUxMjtcbiRhcm15LWdyZWVuOiAjNEI1MzIwO1xuJG9saXZlLWdyZWVuOiAjNzA4MjM4O1xuJG1vc3MtZ3JlZW46ICM4QTlBNUI7XG4kbGF1cmVsLWdyZWVuOiAjQkFDMzlGO1xuXG4kc2F0dXJhdGVkLW9saXZlOiAjNzI5OTAwO1xuJHNhdHVyYXRlZC1ibHVlOiAjMTY0RUI3O1xuXG4vLyBuaWNlIGZvciB0ZXh0IGFnYWluc3QgZGFyayBiYWNrZ3JvdW5kXG4kbGlnaHQtZ3JlZW46ICNGNEY3RUE7XG4kbGlnaHRlc3QtZ3JlZW46ICNGQ0ZDRjk7XG5cbi8vIFVzZWQgZm9yIGZpbGUgc2VsZWN0b3JcbiRlZ2dzaGVsbC1kYXJrZXI6ICNEREQ5Q0Y7XG4kZWdnc2hlbGwtZGFyazogI0VBRTZEQTtcbiRlZ2dzaGVsbDogI0VGRUJERjtcbiRlZ2dzaGVsbC1saWdodDogI0YyRUVFMTtcblxuLy8gZ3JheXNcbiRiYXNpY2FsbHktYmxhY2s6ICMyMDIxMjQ7XG4kYmxhY2stb2xpdmU6ICMzRjQwMzg7XG4kZ3Jhbml0ZTogIzY1NjM1RjtcbiRsaWdodGVyLWdyYXk6ICM5RDlCOTk7XG4kd2hpdGU6ICNmZmY7XG5cbiRnb2xkOiAjRDZCOTAyO1xuJHN0YXItYmx1ZTogIzFENjJDNDtcblxuJGJyZWFrLXNtYWxsOiA1NTBweDtcbiRicmVhay1tZDogODAwcHg7XG4kYnJlYWstbGFyZ2U6IDEwMjRweDtcbiJdfQ== */");

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











// import { AppModule2 } from 'fuzz-demo-app';
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            imports: [
                _src_app_about_me_about_me_module__WEBPACK_IMPORTED_MODULE_8__["AboutMeModule"],
                _src_app_portfolio_portfolio_module__WEBPACK_IMPORTED_MODULE_9__["PortfolioModule"],
                _src_app_corona_corona_module__WEBPACK_IMPORTED_MODULE_10__["CoronaModule"],
                // AppModule2,
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
/* harmony default export */ __webpack_exports__["default"] = (":host {\n  width: 100%;\n  height: 100%;\n  display: block;\n  overflow: hidden;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9hZG1pbi9wcm9qZWN0cy9kYXd1LWhvbWUvc3JjL2FwcC9jb21tb24vY2hhcnRzL2Jhci1jaGFydC9iYXItY2hhcnQuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL2NvbW1vbi9jaGFydHMvYmFyLWNoYXJ0L2Jhci1jaGFydC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLFdBQUE7RUFDQSxZQUFBO0VBQ0EsY0FBQTtFQUNBLGdCQUFBO0FDQ0oiLCJmaWxlIjoic3JjL2FwcC9jb21tb24vY2hhcnRzL2Jhci1jaGFydC9iYXItY2hhcnQuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyI6aG9zdCB7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgaGVpZ2h0OiAxMDAlO1xuICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgIG92ZXJmbG93OiBoaWRkZW47XG59IiwiOmhvc3Qge1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiAxMDAlO1xuICBkaXNwbGF5OiBibG9jaztcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbn0iXX0= */");

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
    function BarChartComponent(hostEl, zone) {
        var _this = _super.call(this, hostEl, zone) || this;
        _this.hostEl = hostEl;
        _this.zone = zone;
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
        if (changes.indicators) {
            this.renderIndicators(this.indicators, this.tableData, this.maxY, this.xScale.step());
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
            .style('stroke-width', '1')
            .attr('clip-path', 'url(#clip)');
    };
    BarChartComponent.prototype.onXYHover = function (x, y) {
        var _this = this;
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
            this.ngZone.run(function () {
                _this.hoverIndex = hoverIndex;
                _this.hoverIndexChange.emit(hoverIndex);
            });
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
    BarChartComponent.prototype.onZoom = function (event, width, height) {
        var _this = this;
        var nextRange = [this.chartMargin, width - this.chartMargin]
            .map(function (d) { return d3__WEBPACK_IMPORTED_MODULE_2__["event"].transform.applyX(d); });
        this.xScale.range(nextRange);
        var numberOfXDataPoints = this.tableData.length ? this.tableData.length : 0;
        var xAxis = _super.prototype.getXBandAxis.call(this, this.xScale, width, numberOfXDataPoints);
        _super.prototype.applyXAxis.call(this, this.xAxisG, xAxis, height);
        this.seriesG.selectAll('g.series').selectAll('rect')
            .attr('x', function (d) { return _this.xScale(d.data.timestamp); })
            .attr('width', this.xScale.bandwidth());
        this.positionHoverBox();
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
        var numberOfXDataPoints = this.tableData.length ? this.tableData.length : 0;
        var xAxis = _super.prototype.getXBandAxis.call(this, this.xScale, width, numberOfXDataPoints);
        _super.prototype.applyXAxis.call(this, this.xAxisG, xAxis, height);
        var yAxis = _super.prototype.getLinearYAxis.call(this, this.yScale, width, this.yAxisFormatter);
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
        this.renderIndicators(this.indicators, this.tableData, this.maxY, this.xScale.step());
    };
    BarChartComponent.ctorParameters = function () { return [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"] },
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"] }
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
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
    ], BarChartComponent.prototype, "yAxisFormatter", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])()
    ], BarChartComponent.prototype, "hoverIndexChange", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
    ], BarChartComponent.prototype, "indicators", void 0);
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
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! lodash */ "./node_modules/lodash/lodash.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_3__);




var BaseChartComponent = /** @class */ (function () {
    // public clipPathRectAxis;
    function BaseChartComponent(hostEl, ngZone) {
        this.hostEl = hostEl;
        this.ngZone = ngZone;
        this.margins = {
            top: 15,
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
        this.ngZone.runOutsideAngular(function () {
            _this.svg = d3__WEBPACK_IMPORTED_MODULE_1__["select"](_this.hostEl.nativeElement).append('svg')
                .on('mousemove', function () { return _this.onMouseMove(); })
                .on('touchstart', function () { return _this.touchmove(); })
                .on('touchmove', function () { return _this.touchmove(); });
        });
        this.rootG = this.svg.append('g');
        this.yAxisG = this.rootG.append('g')
            .attr('class', 'y axis');
        this.xAxisG = this.rootG.append('g')
            .attr('class', 'x axis')
            .attr('clip-path', 'url(#clip)');
        this.seriesG = this.rootG.append('g')
            .attr('clip-path', 'url(#clip)');
        this.indicatorsG = this.rootG.append('g');
        this.applyZoom(this.svg);
        var defs = this.svg.append('defs');
        this.clipPathRect = defs.append('clipPath')
            .attr('id', 'clip')
            .append('rect')
            .attr('x', 0)
            .attr('y', 0);
        // this.clipPathRectAxis = defs.append('clipPath')
        //     .attr('id', 'clipAxis')
        //     .append('rect')
        //     .attr('x', 0)
        //     .attr('y', 0);
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
        this.clipPathRect
            .attr('width', width)
            .attr('height', height + this.margins.top);
        this.renderFor(width, height);
    };
    BaseChartComponent.prototype.getLinearYAxis = function (yScale, width, formatter) {
        var baseAxis = d3__WEBPACK_IMPORTED_MODULE_1__["axisLeft"]()
            .scale(yScale)
            .ticks(6)
            .tickSize(-width, 0, 0);
        if (formatter) {
            return baseAxis.tickFormat(formatter);
        }
        else {
            return baseAxis.tickFormat(function (d) { return d.toLocaleString(); });
        }
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
    BaseChartComponent.prototype.renderIndicators = function (indicators, tableData, maxY, barStepWidth) {
        var _this = this;
        if (barStepWidth === void 0) { barStepWidth = 0; }
        var cleanIndicatorData = Object(lodash__WEBPACK_IMPORTED_MODULE_3__["filter"])(indicators, function (indicatorInfo) {
            return (indicatorInfo.value >= tableData[0].timestamp)
                && (indicatorInfo.value <= Object(lodash__WEBPACK_IMPORTED_MODULE_3__["last"])(tableData).timestamp);
        });
        var indicatorLines = this.indicatorsG.selectAll('line.indicators')
            .data(cleanIndicatorData);
        indicatorLines.enter()
            .append('line')
            .attr('class', 'indicators')
            .style('stroke-opacity', '1')
            .style('stroke-width', '2')
            .style('stroke-dasharray', '2 3')
            .style('stroke-opacity', '0.8')
            .merge(indicatorLines)
            .style('stroke', function (d) { return d.color || '#292E12'; })
            .attr('x1', function (d) { return (_this.xScale(d.value) || 0) + (barStepWidth / 2); })
            .attr('x2', function (d) { return (_this.xScale(d.value) || 0) + (barStepWidth / 2); })
            .attr('y1', this.yScale(maxY))
            .attr('y2', this.yScale(0) + 3);
        indicatorLines.exit().remove();
        var indicatorText = this.indicatorsG.selectAll('text.indicators')
            .data(cleanIndicatorData);
        indicatorText.enter()
            .append('text')
            .attr('class', 'indicators')
            .attr('font-size', '12')
            .style('opacity', '0.8')
            .merge(indicatorText)
            .attr('text-anchor', 'middle')
            .text(function (d) { return d.label || ''; })
            .style('fill', function (d) { return d.color || '#292E12'; })
            .attr('x', function (d) { return (_this.xScale(d.value) || 0) + (barStepWidth / 2); })
            .attr('y', this.yScale(maxY) - 3);
        indicatorText.exit().remove();
    };
    BaseChartComponent.prototype.onZoom = function (event, width, height) {
    };
    BaseChartComponent.prototype.applyZoom = function (root, width, height) {
        var _this = this;
        if (!width || !height) {
            var chartDim = this.getChartDim();
            width = chartDim.width;
            height = chartDim.height;
        }
        var extent = [
            [0, 0],
            [width, height],
        ];
        root.call(d3__WEBPACK_IMPORTED_MODULE_1__["zoom"]()
            .scaleExtent([1, 8])
            .translateExtent(extent)
            .extent(extent)
            .on('zoom', function () { return _this.onZoom(d3__WEBPACK_IMPORTED_MODULE_1__["event"], width, height); }));
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
/* harmony default export */ __webpack_exports__["default"] = (":host {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  -webkit-user-select: none;\n     -moz-user-select: none;\n      -ms-user-select: none;\n          user-select: none;\n  flex-wrap: wrap;\n}\n:host .key-set {\n  transition-duration: box-shadow 25ms, transform, 25ms;\n  box-shadow: 1px 1px 2px 0 #9D9B99;\n  transform: translateY(0);\n  margin: 0 0.5rem 0.5rem 0.5rem;\n  display: flex;\n  align-items: center;\n  cursor: pointer;\n  background-color: #EFEBDF;\n  padding: 0.25rem 0.5rem;\n  border-radius: 5px;\n}\n:host .key-set:active {\n  transform: translateY(1px);\n  box-shadow: none;\n}\n:host .key-set.active {\n  transform: translateY(1px);\n  box-shadow: none;\n}\n:host .key-set:hover .key-color {\n  transform: scale(1.2);\n}\n:host .key-set .key-color {\n  border: 1px solid;\n  width: 0.75rem;\n  height: 0.75rem;\n  border-radius: 2px;\n  transition: transform 25ms, background-color 25ms;\n  transform: scale(1);\n}\n:host .key-set .key-label {\n  margin-left: 0.25rem;\n  font-size: 14px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9hZG1pbi9wcm9qZWN0cy9kYXd1LWhvbWUvc3JjL2FwcC9jb21tb24vY2hhcnRzL2NoYXJ0LWxlZ2VuZC9jaGFydC1sZWdlbmQuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL2NvbW1vbi9jaGFydHMvY2hhcnQtbGVnZW5kL2NoYXJ0LWxlZ2VuZC5jb21wb25lbnQuc2NzcyIsIi9Vc2Vycy9hZG1pbi9wcm9qZWN0cy9kYXd1LWhvbWUvc3JjL3N0eWxlcy9taXhpbnMuc2NzcyIsIi9Vc2Vycy9hZG1pbi9wcm9qZWN0cy9kYXd1LWhvbWUvc3JjL3N0eWxlcy92YXJpYWJsZXMuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFFQTtFQUNJLGFBQUE7RUFDQSxtQkFBQTtFQUNBLHVCQUFBO0VBQ0EseUJBQUE7S0FBQSxzQkFBQTtNQUFBLHFCQUFBO1VBQUEsaUJBQUE7RUFDQSxlQUFBO0FDREo7QURFSTtFRXNFQSxxREFBQTtFQUNBLGlDQUFBO0VBQ0Esd0JBQUE7RUZ0RUksOEJBQUE7RUFDQSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSxlQUFBO0VBQ0EseUJHR0c7RUhGSCx1QkFBQTtFQUNBLGtCQUFBO0FDRVI7QUMrREk7RUFDSSwwQkFBQTtFQUNBLGdCQUFBO0FEN0RSO0FDK0RJO0VBQ0ksMEJBQUE7RUFDQSxnQkFBQTtBRDdEUjtBRFJZO0VBQ0kscUJBQUE7QUNVaEI7QUROUTtFQUNJLGlCQUFBO0VBQ0EsY0FBQTtFQUNBLGVBQUE7RUFDQSxrQkFBQTtFQUNBLGlEQUFBO0VBQ0EsbUJBQUE7QUNRWjtBRE5RO0VBQ0ksb0JBQUE7RUFDQSxlQUFBO0FDUVoiLCJmaWxlIjoic3JjL2FwcC9jb21tb24vY2hhcnRzL2NoYXJ0LWxlZ2VuZC9jaGFydC1sZWdlbmQuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJAaW1wb3J0ICdtaXhpbnMnO1xuXG46aG9zdCB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgIHVzZXItc2VsZWN0OiBub25lO1xuICAgIGZsZXgtd3JhcDogd3JhcDtcbiAgICAua2V5LXNldCB7XG4gICAgICAgIEBpbmNsdWRlIHNoYWRvdztcbiAgICAgICAgbWFyZ2luOiAwIDAuNXJlbSAwLjVyZW0gMC41cmVtO1xuICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6ICRlZ2dzaGVsbDtcbiAgICAgICAgcGFkZGluZzogMC4yNXJlbSAwLjVyZW07XG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDVweDtcbiAgICAgICAgJjpob3ZlciB7XG4gICAgICAgICAgICAua2V5LWNvbG9yIHtcbiAgICAgICAgICAgICAgICB0cmFuc2Zvcm06IHNjYWxlKDEuMik7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICAua2V5LWNvbG9yIHtcbiAgICAgICAgICAgIGJvcmRlcjogMXB4IHNvbGlkO1xuICAgICAgICAgICAgd2lkdGg6IDAuNzVyZW07XG4gICAgICAgICAgICBoZWlnaHQ6IDAuNzVyZW07XG4gICAgICAgICAgICBib3JkZXItcmFkaXVzOiAycHg7XG4gICAgICAgICAgICB0cmFuc2l0aW9uOiB0cmFuc2Zvcm0gMjVtcywgYmFja2dyb3VuZC1jb2xvciAyNW1zO1xuICAgICAgICAgICAgdHJhbnNmb3JtOiBzY2FsZSgxKTtcbiAgICAgICAgfVxuICAgICAgICAua2V5LWxhYmVsIHtcbiAgICAgICAgICAgIG1hcmdpbi1sZWZ0OiAwLjI1cmVtO1xuICAgICAgICAgICAgZm9udC1zaXplOiAxNHB4O1xuICAgICAgICB9XG4gICAgfVxufSIsIjpob3N0IHtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIHVzZXItc2VsZWN0OiBub25lO1xuICBmbGV4LXdyYXA6IHdyYXA7XG59XG46aG9zdCAua2V5LXNldCB7XG4gIHRyYW5zaXRpb24tZHVyYXRpb246IGJveC1zaGFkb3cgMjVtcywgdHJhbnNmb3JtLCAyNW1zO1xuICBib3gtc2hhZG93OiAxcHggMXB4IDJweCAwICM5RDlCOTk7XG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgwKTtcbiAgbWFyZ2luOiAwIDAuNXJlbSAwLjVyZW0gMC41cmVtO1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIGJhY2tncm91bmQtY29sb3I6ICNFRkVCREY7XG4gIHBhZGRpbmc6IDAuMjVyZW0gMC41cmVtO1xuICBib3JkZXItcmFkaXVzOiA1cHg7XG59XG46aG9zdCAua2V5LXNldDphY3RpdmUge1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMXB4KTtcbiAgYm94LXNoYWRvdzogbm9uZTtcbn1cbjpob3N0IC5rZXktc2V0LmFjdGl2ZSB7XG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgxcHgpO1xuICBib3gtc2hhZG93OiBub25lO1xufVxuOmhvc3QgLmtleS1zZXQ6aG92ZXIgLmtleS1jb2xvciB7XG4gIHRyYW5zZm9ybTogc2NhbGUoMS4yKTtcbn1cbjpob3N0IC5rZXktc2V0IC5rZXktY29sb3Ige1xuICBib3JkZXI6IDFweCBzb2xpZDtcbiAgd2lkdGg6IDAuNzVyZW07XG4gIGhlaWdodDogMC43NXJlbTtcbiAgYm9yZGVyLXJhZGl1czogMnB4O1xuICB0cmFuc2l0aW9uOiB0cmFuc2Zvcm0gMjVtcywgYmFja2dyb3VuZC1jb2xvciAyNW1zO1xuICB0cmFuc2Zvcm06IHNjYWxlKDEpO1xufVxuOmhvc3QgLmtleS1zZXQgLmtleS1sYWJlbCB7XG4gIG1hcmdpbi1sZWZ0OiAwLjI1cmVtO1xuICBmb250LXNpemU6IDE0cHg7XG59IiwiQGltcG9ydCAndmFyaWFibGVzJztcblxuQG1peGluIGJhc2UtY29yb25hLWRhc2hib2FyZCB7XG4gICAgZGlzcGxheTogYmxvY2s7XG4gICAgcGFkZGluZy1ib3R0b206IDJyZW07XG4gICAgLmNoYXJ0LWNvbnRhaW5lciB7XG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICAgIC5jaGFydC1oZWFkZXIge1xuICAgICAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgICAgcGFkZGluZzogMCAxLjVyZW07XG4gICAgICAgICAgICBhbGlnbi1pdGVtczogZmxleC1lbmQ7XG4gICAgICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuXG4gICAgICAgICAgICAucmFkaW8tYnV0dG9uLWNvbnRhaW5lcntcbiAgICAgICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICAgICAgICAgICAganVzdGlmeS1jb250ZW50OiBmbGV4LWVuZDtcbiAgICAgICAgICAgICAgICBmbGV4LXdyYXA6IHdyYXA7XG5cbiAgICAgICAgICAgICAgICAucmFkaW8tYnV0dG9ucyB7XG4gICAgICAgICAgICAgICAgICAgIEBpbmNsdWRlIHJhZGlvLWJ1dHRvbi1jb250YWluZXI7XG4gICAgICAgICAgICAgICAgICAgICY6bm90KDpmaXJzdC1jaGlsZCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgbWFyZ2luLWxlZnQ6IDFyZW07XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgJi5jaGFydCB7XG4gICAgICAgICAgICAgICAgICAgICAgICAucmFkaW8tYnV0dG9uIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBtaW4td2lkdGg6IGF1dG87XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcGFkZGluZzogM3B4O1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAubWF0ZXJpYWwtaWNvbnMge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBmbGV4OiAxIDAgYXV0bztcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZm9udC1zaXplOiAxLjI1cmVtO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAucmFkaW8tYnV0dG9uIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIG1hcmdpbi10b3A6IDAuNXJlbTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGR3dS1zdGF0LXZpZXdlciB7XG4gICAgICAgICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtZW5kO1xuICAgICAgICAgICAgICAgIGZsZXg6IDEgMCBhdXRvO1xuICAgICAgICAgICAgICAgIG1hcmdpbi10b3A6IDFyZW07XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgLm92ZXJ2aWV3LmNoYXJ0IHtcbiAgICAgICAgICAgIGhlaWdodDogMTIuNXJlbTtcbiAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICB9XG4gICAgICAgIGR3dS1jaGFydC1sZWdlbmQge1xuICAgICAgICAgICAgZmxleDogMCAwIGF1dG87XG4gICAgICAgICAgICBtYXJnaW4tdG9wOiAwLjI1cmVtO1xuICAgICAgICAgICAgbWFyZ2luLWJvdHRvbTogMnJlbTtcbiAgICAgICAgfVxuICAgIH1cbn1cblxuQG1peGluIHJhZGlvLWJ1dHRvbi1jb250YWluZXIge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgLnJhZGlvLWJ1dHRvbiB7XG4gICAgICAgIEBpbmNsdWRlIGxpZ2h0LW1pbmktYnV0dG9uO1xuICAgICAgICBAaW5jbHVkZSBzaGFkb3c7XG4gICAgICAgICY6Zmlyc3QtY2hpbGQge1xuICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogNXB4IDAgMCA1cHg7XG4gICAgICAgIH1cbiAgICAgICAgJjpsYXN0LWNoaWxkIHtcbiAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDAgNXB4IDVweCAwO1xuICAgICAgICB9XG4gICAgfVxufVxuXG5AbWl4aW4gc2hhZG93IHtcbiAgICB0cmFuc2l0aW9uLWR1cmF0aW9uOiBib3gtc2hhZG93IDI1bXMsIHRyYW5zZm9ybSwgMjVtcztcbiAgICBib3gtc2hhZG93OiAxcHggMXB4IDJweCAwICRsaWdodGVyLWdyYXk7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDApO1xuICAgICY6YWN0aXZlIHtcbiAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDFweCk7XG4gICAgICAgIGJveC1zaGFkb3c6IG5vbmU7XG4gICAgfVxuICAgICYuYWN0aXZlIHtcbiAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDFweCk7XG4gICAgICAgIGJveC1zaGFkb3c6IG5vbmU7XG4gICAgfVxufVxuXG5AbWl4aW4gcmVzcG9uc2l2ZS1wYWdlIHtcbiAgICBAbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA3NTBweCkge1xuICAgICAgICBkaXYucGFnZS1jb250YWluZXIge1xuICAgICAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICAgICAgICAgIC5sZWZ0LXNpZGUge1xuICAgICAgICAgICAgICAgIGZsZXg6IDAgMCBhdXRvO1xuICAgICAgICAgICAgICAgIGhlaWdodDogMTMuMjVyZW07XG4gICAgICAgICAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgICAgICAgICAgbWF4LXdpZHRoOiBub25lO1xuICAgICAgICAgICAgICAgIC8vIG1pbi13aWR0aDogbm9uZTtcbiAgICAgICAgICAgICAgICB0cmFuc2l0aW9uOiBoZWlnaHQgNTBtcztcbiAgICAgICAgICAgICAgICAmLmV4cGFuZGVkIHtcbiAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiA4NSU7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIC5leHBhbmRlciB7XG4gICAgICAgICAgICAgICAgICAgIEBpbmNsdWRlIGRhcmstdGhlbWU7XG4gICAgICAgICAgICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgICAgICAgICAgICAgICAgYm90dG9tOiAwO1xuICAgICAgICAgICAgICAgICAgICBsZWZ0OiA1MCU7XG4gICAgICAgICAgICAgICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgtNTAlKTtcbiAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDMuNXJlbTtcbiAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiAxcmVtO1xuICAgICAgICAgICAgICAgICAgICBib3JkZXI6IDFweCBzb2xpZCAkbW9zcy1ncmVlbjtcbiAgICAgICAgICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogNXB4IDVweCAwIDAgO1xuICAgICAgICAgICAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgICAgICAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAgICAgICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgICAgICAgICAgICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgICAgICAgICAgICAgICAgIC5leHBhbmRlci1pY29uIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMTZweDtcbiAgICAgICAgICAgICAgICAgICAgICAgICYuZmxpcHBlZCB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdHJhbnNmb3JtOiByb3RhdGUoMTgwZGVnKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuICAgIC5wYWdlLWNvbnRhaW5lciB7XG4gICAgICAgIGhlaWdodDogMTAwJTtcbiAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XG5cbiAgICAgICAgLmxlZnQtc2lkZSB7XG4gICAgICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgICAgICAgICBmbGV4OiAxIDEgMDtcbiAgICAgICAgICAgIG92ZXJmbG93OiBoaWRkZW47XG4gICAgICAgICAgICBtYXgtd2lkdGg6IDI3LjUlO1xuICAgICAgICAgICAgbWluLXdpZHRoOiAyMHJlbTtcbiAgICAgICAgICAgIC5leHBhbmRlciB7XG4gICAgICAgICAgICAgICAgZGlzcGxheTogbm9uZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICAucmlnaHQtc2lkZSB7XG4gICAgICAgICAgICBmbGV4OiAxIDEgMDtcbiAgICAgICAgICAgIG92ZXJmbG93OiBhdXRvO1xuICAgICAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgICAgICB9XG4gICAgfVxuXG59XG5AbWl4aW4gbGlnaHQtbWluaS1idXR0b24ge1xuICAgIEBpbmNsdWRlIGxpZ2h0LXRoZW1lO1xuICAgIEBpbmNsdWRlIGJ1dHRvbi14cztcbn1cblxuQG1peGluIGxpZ2h0LXNtYWxsLWJ1dHRvbiB7XG4gICAgQGluY2x1ZGUgbGlnaHQtdGhlbWU7XG4gICAgQGluY2x1ZGUgYnV0dG9uLXNtO1xufVxuXG5AbWl4aW4gZGFyay1idXR0b24ge1xuICAgIEBpbmNsdWRlIGRhcmstdGhlbWU7XG4gICAgQGluY2x1ZGUgYnV0dG9uLW1kO1xufVxuXG5AbWl4aW4gYnV0dG9uLXhzIHtcbiAgICBtaW4td2lkdGg6IDJyZW07XG4gICAgcGFkZGluZzogMC4yNXJlbSAwLjVyZW07XG4gICAgZm9udC1zaXplOiAxcmVtO1xuICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgb3V0bGluZTogbm9uZTtcbiAgICB3aGl0ZS1zcGFjZTogbm93cmFwO1xuICAgIHVzZXItc2VsZWN0OiBub25lO1xufVxuXG5AbWl4aW4gYnV0dG9uLXNtIHtcbiAgICBtaW4td2lkdGg6IDNyZW07XG4gICAgcGFkZGluZzogMC4yNXJlbSAwLjVyZW07XG4gICAgY3Vyc29yOiBwb2ludGVyO1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICBvdXRsaW5lOiBub25lO1xuICAgIHdoaXRlLXNwYWNlOiBub3dyYXA7XG4gICAgdXNlci1zZWxlY3Q6IG5vbmU7XG59XG5cbkBtaXhpbiBidXR0b24tbWQge1xuICAgIHdpZHRoOiA4cmVtO1xuICAgIHBhZGRpbmc6IDAuNXJlbTtcbiAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIG91dGxpbmU6IG5vbmU7XG4gICAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcbiAgICB1c2VyLXNlbGVjdDogbm9uZTtcbn1cblxuQG1peGluIGxpZ2h0LXRoZW1lIHtcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogJGVnZ3NoZWxsLWRhcms7XG4gICAgJjpob3ZlciB7XG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6ICRsYXVyZWwtZ3JlZW47XG4gICAgfVxuICAgICYuYWN0aXZlIHtcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogJG9saXZlLWdyZWVuO1xuICAgICAgICBjb2xvcjogJGxpZ2h0ZXN0LWdyZWVuO1xuICAgIH1cbn1cblxuQG1peGluIGRhcmstdGhlbWUge1xuICAgIGJhY2tncm91bmQtY29sb3I6ICRibGFjay1vbGl2ZTtcbiAgICBjb2xvcjogJGxpZ2h0ZXN0LWdyZWVuO1xuICAgICY6aG92ZXIge1xuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkYXJteS1ncmVlbjtcbiAgICAgICAgY29sb3I6ICRsaWdodGVzdC1ncmVlbjtcbiAgICB9XG4gICAgJi5hY3RpdmUge1xuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkb2xpdmUtZ3JlZW47XG4gICAgICAgIGNvbG9yOiAkbGlnaHRlc3QtZ3JlZW47XG4gICAgfVxufVxuXG5AbWl4aW4gdG9wLW5hdi1wYWdlIHtcbiAgICBoZWlnaHQ6IDEwMCU7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgIC5tYWluLWNvbnRlbnQge1xuICAgICAgICBmbGV4OiAxIDEgMDtcbiAgICAgICAgb3ZlcmZsb3c6IGF1dG87XG4gICAgfVxufVxuXG5AbWl4aW4gcmVzcG9uZC10bygkbWVkaWEpIHtcbiAgQGlmICRtZWRpYSA9PSBzbWFsbCB7XG4gICAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiAkYnJlYWstc21hbGwpIHsgQGNvbnRlbnQ7IH1cbiAgfVxuICBAZWxzZSBpZiAkbWVkaWEgPT0gbWVkaXVtIHtcbiAgICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChtaW4td2lkdGg6ICRicmVhay1zbWFsbCArIDEpIGFuZCAobWF4LXdpZHRoOiAkYnJlYWstbGFyZ2UgLSAxKSB7IEBjb250ZW50OyB9XG4gIH1cbiAgQGVsc2UgaWYgJG1lZGlhID09IHdpZGUge1xuICAgIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1pbi13aWR0aDogJGJyZWFrLWxhcmdlKSB7IEBjb250ZW50OyB9XG4gIH1cbn1cbiIsIlxuJGRhcmstZ3JlZW46ICMyOTJFMTI7XG4kYXJteS1ncmVlbjogIzRCNTMyMDtcbiRvbGl2ZS1ncmVlbjogIzcwODIzODtcbiRtb3NzLWdyZWVuOiAjOEE5QTVCO1xuJGxhdXJlbC1ncmVlbjogI0JBQzM5RjtcblxuJHNhdHVyYXRlZC1vbGl2ZTogIzcyOTkwMDtcbiRzYXR1cmF0ZWQtYmx1ZTogIzE2NEVCNztcblxuLy8gbmljZSBmb3IgdGV4dCBhZ2FpbnN0IGRhcmsgYmFja2dyb3VuZFxuJGxpZ2h0LWdyZWVuOiAjRjRGN0VBO1xuJGxpZ2h0ZXN0LWdyZWVuOiAjRkNGQ0Y5O1xuXG4vLyBVc2VkIGZvciBmaWxlIHNlbGVjdG9yXG4kZWdnc2hlbGwtZGFya2VyOiAjREREOUNGO1xuJGVnZ3NoZWxsLWRhcms6ICNFQUU2REE7XG4kZWdnc2hlbGw6ICNFRkVCREY7XG4kZWdnc2hlbGwtbGlnaHQ6ICNGMkVFRTE7XG5cbi8vIGdyYXlzXG4kYmFzaWNhbGx5LWJsYWNrOiAjMjAyMTI0O1xuJGJsYWNrLW9saXZlOiAjM0Y0MDM4O1xuJGdyYW5pdGU6ICM2NTYzNUY7XG4kbGlnaHRlci1ncmF5OiAjOUQ5Qjk5O1xuJHdoaXRlOiAjZmZmO1xuXG4kZ29sZDogI0Q2QjkwMjtcbiRzdGFyLWJsdWU6ICMxRDYyQzQ7XG5cbiRicmVhay1zbWFsbDogNTUwcHg7XG4kYnJlYWstbWQ6IDgwMHB4O1xuJGJyZWFrLWxhcmdlOiAxMDI0cHg7XG4iXX0= */");

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
    ChartLegendComponent.prototype.isKeyDisabled = function (key) {
        return this.disabledKeys && this.disabledKeys.has(key);
    };
    ChartLegendComponent.prototype.getKeyBackgroundColor = function (key) {
        if (this.isKeyDisabled(key)) {
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
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
    ], ChartLegendComponent.prototype, "labelsByKey", void 0);
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
/* harmony import */ var _stat_viewer_stat_viewer_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./stat-viewer/stat-viewer.component */ "./src/app/common/charts/stat-viewer/stat-viewer.component.ts");








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
                _stat_viewer_stat_viewer_component__WEBPACK_IMPORTED_MODULE_7__["StatViewerComponent"],
            ],
            exports: [
                _bar_chart_bar_chart_component__WEBPACK_IMPORTED_MODULE_4__["BarChartComponent"],
                _line_chart_line_chart_component__WEBPACK_IMPORTED_MODULE_5__["LineChartComponent"],
                _chart_legend_chart_legend_component__WEBPACK_IMPORTED_MODULE_6__["ChartLegendComponent"],
                _stat_viewer_stat_viewer_component__WEBPACK_IMPORTED_MODULE_7__["StatViewerComponent"],
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
/* harmony default export */ __webpack_exports__["default"] = (":host {\n  width: 100%;\n  height: 100%;\n  display: block;\n  overflow: hidden;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9hZG1pbi9wcm9qZWN0cy9kYXd1LWhvbWUvc3JjL2FwcC9jb21tb24vY2hhcnRzL2xpbmUtY2hhcnQvbGluZS1jaGFydC5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvY29tbW9uL2NoYXJ0cy9saW5lLWNoYXJ0L2xpbmUtY2hhcnQuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxXQUFBO0VBQ0EsWUFBQTtFQUNBLGNBQUE7RUFDQSxnQkFBQTtBQ0NKIiwiZmlsZSI6InNyYy9hcHAvY29tbW9uL2NoYXJ0cy9saW5lLWNoYXJ0L2xpbmUtY2hhcnQuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyI6aG9zdCB7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgaGVpZ2h0OiAxMDAlO1xuICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgIG92ZXJmbG93OiBoaWRkZW47XG59IiwiOmhvc3Qge1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiAxMDAlO1xuICBkaXNwbGF5OiBibG9jaztcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbn0iXX0= */");

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
    function LineChartComponent(hostEl, zone) {
        var _this = _super.call(this, hostEl, zone) || this;
        _this.hostEl = hostEl;
        _this.zone = zone;
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
        if (changes.indicators) {
            this.renderIndicators(this.indicators, this.tableData, this.maxY);
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
            .style('stroke-width', '3')
            .style('shape-rendering', 'crispEdges');
        this.bubblesG = this.rootG.append('g');
    };
    LineChartComponent.prototype.onXYHover = function (x, y) {
        var _this = this;
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
            this.ngZone.run(function () {
                _this.hoverIndex = hoverIndex;
                _this.hoverIndexChange.emit(hoverIndex);
            });
        }
    };
    LineChartComponent.prototype.positionHoverLine = function () {
        var _this = this;
        if (!this.tableData || !this.tableData.length) {
            return;
        }
        var tableColumnData = this.tableData[this.hoverIndex];
        var hoverLineTimestamp = tableColumnData.timestamp;
        var tableColumnValues = this.filteredKeys.map(function (key) {
            if (Object(lodash__WEBPACK_IMPORTED_MODULE_2__["isUndefined"])(tableColumnData[key])) {
                return;
            }
            return {
                value: tableColumnData[key],
                key: key,
            };
        }).filter(Boolean);
        this.bubblesG.attr('transform', "translate(" + this.xScale(hoverLineTimestamp) + ",0)");
        var bubbles = this.bubblesG.selectAll('circle.bubble')
            .data(tableColumnValues);
        bubbles.enter()
            .append('circle')
            .attr('r', 3)
            .attr('cx', 0)
            .attr('class', 'bubble')
            .style('fill', 'white')
            .attr('stroke-width', '1px')
            .merge(bubbles)
            .attr('stroke', function (d) { return _this.colorsByKey[d.key]; })
            .attr('cy', function (d) { return _this.yScale(d.value); });
        bubbles.exit().remove();
        this.hoverLine
            .attr('x1', this.xScale(hoverLineTimestamp) || 0)
            .attr('x2', this.xScale(hoverLineTimestamp) || 0)
            .attr('y1', this.yScale(this.maxY || 1) - 3)
            .attr('y2', this.yScale(0) + 3);
    };
    LineChartComponent.prototype.onZoom = function (event, width, height) {
        var _this = this;
        var nextRange = [this.chartMargin, width - this.chartMargin]
            .map(function (d) { return d3__WEBPACK_IMPORTED_MODULE_3__["event"].transform.applyX(d); });
        this.xScale.range(nextRange);
        var numberOfXDataPoints = this.tableData.length ? this.tableData.length : 0;
        var allXValues = this.tableData.length ? this.tableData.map(function (d) { return d.timestamp; }) : [];
        var xAxis = _super.prototype.getXAxisTicks.call(this, this.xScale, width, numberOfXDataPoints, allXValues);
        _super.prototype.applyXAxis.call(this, this.xAxisG, xAxis, height);
        var pathLineDrawer = d3__WEBPACK_IMPORTED_MODULE_3__["line"]()
            .x(function (d) { return _this.xScale(d.x); })
            .y(function (d) { return _this.yScale(d.y); });
        this.seriesG.selectAll('path.series')
            .attr('d', pathLineDrawer);
        this.positionHoverLine();
    };
    LineChartComponent.prototype.renderFor = function (width, height) {
        var _this = this;
        this.filteredKeys = this.keys.filter(function (key) {
            return !(_this.disabledKeys && _this.disabledKeys.has(key));
        });
        var reversedKeys = this.filteredKeys.reverse();
        var dataset = reversedKeys.map(function (key) {
            var series = _this.tableData.map(function (columnData) {
                var cellData = columnData[key];
                return !Object(lodash__WEBPACK_IMPORTED_MODULE_2__["isUndefined"])(cellData) && {
                    key: key,
                    y: cellData,
                    x: columnData.timestamp,
                    data: columnData,
                };
            }).filter(Boolean);
            series.key = key;
            return series;
        });
        var domain = this.tableData.length ? [Object(lodash__WEBPACK_IMPORTED_MODULE_2__["first"])(this.tableData).timestamp, Object(lodash__WEBPACK_IMPORTED_MODULE_2__["last"])(this.tableData).timestamp] : [];
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
        var numberOfXDataPoints = this.tableData.length || 0;
        var allXValues = this.tableData.length ? this.tableData.map(function (d) { return d.timestamp; }) : [];
        var xAxis = _super.prototype.getXAxisTicks.call(this, this.xScale, width, numberOfXDataPoints, allXValues);
        _super.prototype.applyXAxis.call(this, this.xAxisG, xAxis, height);
        var yAxis = _super.prototype.getLinearYAxis.call(this, this.yScale, width, this.yAxisFormatter);
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
            .style('stroke-width', '2px')
            .merge(paths)
            .attr('class', function (d) { return "series " + d.key; })
            .attr('d', pathLineDrawer)
            .style('stroke', function (d) { return _this.colorsByKey[d.key]; });
        paths.exit().remove();
        this.positionHoverLine();
        this.renderIndicators(this.indicators, this.tableData, this.maxY);
    };
    LineChartComponent.ctorParameters = function () { return [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"] },
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"] }
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
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
    ], LineChartComponent.prototype, "yAxisFormatter", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])()
    ], LineChartComponent.prototype, "hoverIndexChange", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
    ], LineChartComponent.prototype, "indicators", void 0);
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

/***/ "./src/app/common/charts/stat-viewer/stat-viewer.component.scss":
/*!**********************************************************************!*\
  !*** ./src/app/common/charts/stat-viewer/stat-viewer.component.scss ***!
  \**********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".selected-stats {\n  padding: 0 1rem;\n  font-size: 0.75rem;\n  display: flex;\n}\n.selected-stats .stats-column-container {\n  display: flex;\n}\n.selected-stats .stats-column-container:not(:first-child) {\n  margin-left: 2.5rem;\n}\n.selected-stats .stats-column-container .stats-column {\n  display: flex;\n  flex-direction: column;\n  text-align: right;\n}\n.selected-stats .stats-column-container .stats-column:first-child {\n  margin-right: 0.25rem;\n}\n.selected-stats .stats-column-container .stats-column.stats {\n  min-width: 3rem;\n}\n.selected-stats .stats-column-container .stats-column .first-val {\n  font-weight: 600;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9hZG1pbi9wcm9qZWN0cy9kYXd1LWhvbWUvc3JjL2FwcC9jb21tb24vY2hhcnRzL3N0YXQtdmlld2VyL3N0YXQtdmlld2VyLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9jb21tb24vY2hhcnRzL3N0YXQtdmlld2VyL3N0YXQtdmlld2VyLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUVBO0VBQ0ksZUFBQTtFQUNBLGtCQUFBO0VBQ0EsYUFBQTtBQ0RKO0FERUk7RUFDSSxhQUFBO0FDQVI7QURDUTtFQUNJLG1CQUFBO0FDQ1o7QURDUTtFQUNJLGFBQUE7RUFDQSxzQkFBQTtFQUNBLGlCQUFBO0FDQ1o7QURBWTtFQUNJLHFCQUFBO0FDRWhCO0FEQVk7RUFDSSxlQUFBO0FDRWhCO0FEQVk7RUFDSSxnQkFBQTtBQ0VoQiIsImZpbGUiOiJzcmMvYXBwL2NvbW1vbi9jaGFydHMvc3RhdC12aWV3ZXIvc3RhdC12aWV3ZXIuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJAaW1wb3J0ICdtaXhpbnMnO1xuXG4uc2VsZWN0ZWQtc3RhdHMge1xuICAgIHBhZGRpbmc6IDAgMXJlbTtcbiAgICBmb250LXNpemU6IDAuNzVyZW07XG4gICAgZGlzcGxheTogZmxleDtcbiAgICAuc3RhdHMtY29sdW1uLWNvbnRhaW5lciB7XG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICY6bm90KDpmaXJzdC1jaGlsZCkge1xuICAgICAgICAgICAgbWFyZ2luLWxlZnQ6IDIuNXJlbTtcbiAgICAgICAgfVxuICAgICAgICAuc3RhdHMtY29sdW1uIHtcbiAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgICAgICAgICAgdGV4dC1hbGlnbjogcmlnaHQ7XG4gICAgICAgICAgICAmOmZpcnN0LWNoaWxkIHtcbiAgICAgICAgICAgICAgICBtYXJnaW4tcmlnaHQ6IDAuMjVyZW07XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAmLnN0YXRzIHtcbiAgICAgICAgICAgICAgICBtaW4td2lkdGg6IDNyZW07XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAuZmlyc3QtdmFsIHtcbiAgICAgICAgICAgICAgICBmb250LXdlaWdodDogNjAwO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxufVxuIiwiLnNlbGVjdGVkLXN0YXRzIHtcbiAgcGFkZGluZzogMCAxcmVtO1xuICBmb250LXNpemU6IDAuNzVyZW07XG4gIGRpc3BsYXk6IGZsZXg7XG59XG4uc2VsZWN0ZWQtc3RhdHMgLnN0YXRzLWNvbHVtbi1jb250YWluZXIge1xuICBkaXNwbGF5OiBmbGV4O1xufVxuLnNlbGVjdGVkLXN0YXRzIC5zdGF0cy1jb2x1bW4tY29udGFpbmVyOm5vdCg6Zmlyc3QtY2hpbGQpIHtcbiAgbWFyZ2luLWxlZnQ6IDIuNXJlbTtcbn1cbi5zZWxlY3RlZC1zdGF0cyAuc3RhdHMtY29sdW1uLWNvbnRhaW5lciAuc3RhdHMtY29sdW1uIHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgdGV4dC1hbGlnbjogcmlnaHQ7XG59XG4uc2VsZWN0ZWQtc3RhdHMgLnN0YXRzLWNvbHVtbi1jb250YWluZXIgLnN0YXRzLWNvbHVtbjpmaXJzdC1jaGlsZCB7XG4gIG1hcmdpbi1yaWdodDogMC4yNXJlbTtcbn1cbi5zZWxlY3RlZC1zdGF0cyAuc3RhdHMtY29sdW1uLWNvbnRhaW5lciAuc3RhdHMtY29sdW1uLnN0YXRzIHtcbiAgbWluLXdpZHRoOiAzcmVtO1xufVxuLnNlbGVjdGVkLXN0YXRzIC5zdGF0cy1jb2x1bW4tY29udGFpbmVyIC5zdGF0cy1jb2x1bW4gLmZpcnN0LXZhbCB7XG4gIGZvbnQtd2VpZ2h0OiA2MDA7XG59Il19 */");

/***/ }),

/***/ "./src/app/common/charts/stat-viewer/stat-viewer.component.ts":
/*!********************************************************************!*\
  !*** ./src/app/common/charts/stat-viewer/stat-viewer.component.ts ***!
  \********************************************************************/
/*! exports provided: StatViewerComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StatViewerComponent", function() { return StatViewerComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! lodash */ "./node_modules/lodash/lodash.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_2__);



var StatViewerComponent = /** @class */ (function () {
    function StatViewerComponent() {
        this.disabledKeys = new Set();
        this.rowCount = 2;
        this.formattersByKeys = {};
        this.statTable = [];
    }
    StatViewerComponent.prototype.ngOnChanges = function (changes) {
        if (changes.columnData || changes.keys) {
            if (this.columnData && this.keys) {
                this.buildStatTable();
            }
        }
    };
    StatViewerComponent.prototype.buildStatTable = function () {
        var _this = this;
        this.statTable = [];
        var keys = tslib__WEBPACK_IMPORTED_MODULE_0__["__spread"](this.keys);
        while (keys.length) {
            var columnKeys = keys.splice(0, this.rowCount);
            var columnValues = columnKeys.map(function (columnKey) {
                var cellValue = _this.columnData[columnKey];
                if (_this.formattersByKeys[columnKey]) {
                    return _this.formattersByKeys[columnKey](cellValue);
                }
                if (typeof cellValue === 'number') {
                    return Object(lodash__WEBPACK_IMPORTED_MODULE_2__["round"])(cellValue, 2).toLocaleString();
                }
                else {
                    return cellValue;
                }
            });
            this.statTable.push({
                columnKeys: columnKeys,
                columnValues: columnValues,
            });
        }
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
    ], StatViewerComponent.prototype, "columnData", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
    ], StatViewerComponent.prototype, "keys", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
    ], StatViewerComponent.prototype, "disabledKeys", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
    ], StatViewerComponent.prototype, "labelsByKey", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
    ], StatViewerComponent.prototype, "rowCount", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
    ], StatViewerComponent.prototype, "formattersByKeys", void 0);
    StatViewerComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'dwu-stat-viewer',
            template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./stat-viewer.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/common/charts/stat-viewer/stat-viewer.component.html")).default,
            styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./stat-viewer.component.scss */ "./src/app/common/charts/stat-viewer/stat-viewer.component.scss")).default]
        })
    ], StatViewerComponent);
    return StatViewerComponent;
}());



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
/* harmony default export */ __webpack_exports__["default"] = (".input-container {\n  padding: 0.5rem 1rem 0.5rem 0.75rem;\n  position: relative;\n}\n.input-container .search-icon {\n  position: absolute;\n  top: 50%;\n  transform: translate(0.5rem, -50%);\n  font-size: 1.25rem;\n  color: #65635F;\n  pointer-events: none;\n}\n.input-container .cancel-icon {\n  position: absolute;\n  padding: 0.25rem;\n  cursor: pointer;\n  top: 50%;\n  right: 0;\n  transform: translate(-1.25rem, -50%);\n  font-size: 1.25rem;\n  color: #65635F;\n}\n.input-container input {\n  padding: 0 0.5rem 0 2rem;\n  border-radius: 0.5rem;\n  border: 2px solid #8A9A5B;\n  outline: none;\n  width: 100%;\n  font-size: 1rem;\n  height: 2.25rem;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9hZG1pbi9wcm9qZWN0cy9kYXd1LWhvbWUvc3JjL2FwcC9jb21tb24vc2VhcmNoLWlucHV0L3NlYXJjaC1pbnB1dC5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvY29tbW9uL3NlYXJjaC1pbnB1dC9zZWFyY2gtaW5wdXQuY29tcG9uZW50LnNjc3MiLCIvVXNlcnMvYWRtaW4vcHJvamVjdHMvZGF3dS1ob21lL3NyYy9zdHlsZXMvdmFyaWFibGVzLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBRUE7RUFDSSxtQ0FBQTtFQUNBLGtCQUFBO0FDREo7QURFSTtFQUNJLGtCQUFBO0VBQ0EsUUFBQTtFQUNBLGtDQUFBO0VBQ0Esa0JBQUE7RUFDQSxjRWFFO0VGWkYsb0JBQUE7QUNBUjtBREVJO0VBQ0ksa0JBQUE7RUFDQSxnQkFBQTtFQUNBLGVBQUE7RUFDQSxRQUFBO0VBQ0EsUUFBQTtFQUNBLG9DQUFBO0VBQ0Esa0JBQUE7RUFDQSxjRUVFO0FERlY7QURFSTtFQUNJLHdCQUFBO0VBQ0EscUJBQUE7RUFDQSx5QkFBQTtFQUNBLGFBQUE7RUFDQSxXQUFBO0VBQ0EsZUFBQTtFQUNBLGVBQUE7QUNBUiIsImZpbGUiOiJzcmMvYXBwL2NvbW1vbi9zZWFyY2gtaW5wdXQvc2VhcmNoLWlucHV0LmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiQGltcG9ydCAnbWl4aW5zJztcblxuLmlucHV0LWNvbnRhaW5lciB7XG4gICAgcGFkZGluZzogMC41cmVtIDFyZW0gMC41cmVtIDAuNzVyZW07XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgIC5zZWFyY2gtaWNvbiB7XG4gICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgICAgdG9wOiA1MCU7XG4gICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKDAuNXJlbSwgLTUwJSk7XG4gICAgICAgIGZvbnQtc2l6ZTogMS4yNXJlbTtcbiAgICAgICAgY29sb3I6ICRncmFuaXRlO1xuICAgICAgICBwb2ludGVyLWV2ZW50czogbm9uZTtcbiAgICB9XG4gICAgLmNhbmNlbC1pY29uIHtcbiAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgICBwYWRkaW5nOiAwLjI1cmVtO1xuICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgICAgIHRvcDogNTAlO1xuICAgICAgICByaWdodDogMDtcbiAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTEuMjVyZW0sIC01MCUpO1xuICAgICAgICBmb250LXNpemU6IDEuMjVyZW07XG4gICAgICAgIGNvbG9yOiAkZ3Jhbml0ZTtcbiAgICB9XG4gICAgaW5wdXQge1xuICAgICAgICBwYWRkaW5nOiAwIDAuNXJlbSAwIDJyZW07XG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDAuNXJlbTtcbiAgICAgICAgYm9yZGVyOiAycHggc29saWQgJG1vc3MtZ3JlZW47XG4gICAgICAgIG91dGxpbmU6IG5vbmU7XG4gICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICBmb250LXNpemU6IDFyZW07XG4gICAgICAgIGhlaWdodDogMi4yNXJlbTtcbiAgICB9XG59XG4iLCIuaW5wdXQtY29udGFpbmVyIHtcbiAgcGFkZGluZzogMC41cmVtIDFyZW0gMC41cmVtIDAuNzVyZW07XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbn1cbi5pbnB1dC1jb250YWluZXIgLnNlYXJjaC1pY29uIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IDUwJTtcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoMC41cmVtLCAtNTAlKTtcbiAgZm9udC1zaXplOiAxLjI1cmVtO1xuICBjb2xvcjogIzY1NjM1RjtcbiAgcG9pbnRlci1ldmVudHM6IG5vbmU7XG59XG4uaW5wdXQtY29udGFpbmVyIC5jYW5jZWwtaWNvbiB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgcGFkZGluZzogMC4yNXJlbTtcbiAgY3Vyc29yOiBwb2ludGVyO1xuICB0b3A6IDUwJTtcbiAgcmlnaHQ6IDA7XG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlKC0xLjI1cmVtLCAtNTAlKTtcbiAgZm9udC1zaXplOiAxLjI1cmVtO1xuICBjb2xvcjogIzY1NjM1Rjtcbn1cbi5pbnB1dC1jb250YWluZXIgaW5wdXQge1xuICBwYWRkaW5nOiAwIDAuNXJlbSAwIDJyZW07XG4gIGJvcmRlci1yYWRpdXM6IDAuNXJlbTtcbiAgYm9yZGVyOiAycHggc29saWQgIzhBOUE1QjtcbiAgb3V0bGluZTogbm9uZTtcbiAgd2lkdGg6IDEwMCU7XG4gIGZvbnQtc2l6ZTogMXJlbTtcbiAgaGVpZ2h0OiAyLjI1cmVtO1xufSIsIlxuJGRhcmstZ3JlZW46ICMyOTJFMTI7XG4kYXJteS1ncmVlbjogIzRCNTMyMDtcbiRvbGl2ZS1ncmVlbjogIzcwODIzODtcbiRtb3NzLWdyZWVuOiAjOEE5QTVCO1xuJGxhdXJlbC1ncmVlbjogI0JBQzM5RjtcblxuJHNhdHVyYXRlZC1vbGl2ZTogIzcyOTkwMDtcbiRzYXR1cmF0ZWQtYmx1ZTogIzE2NEVCNztcblxuLy8gbmljZSBmb3IgdGV4dCBhZ2FpbnN0IGRhcmsgYmFja2dyb3VuZFxuJGxpZ2h0LWdyZWVuOiAjRjRGN0VBO1xuJGxpZ2h0ZXN0LWdyZWVuOiAjRkNGQ0Y5O1xuXG4vLyBVc2VkIGZvciBmaWxlIHNlbGVjdG9yXG4kZWdnc2hlbGwtZGFya2VyOiAjREREOUNGO1xuJGVnZ3NoZWxsLWRhcms6ICNFQUU2REE7XG4kZWdnc2hlbGw6ICNFRkVCREY7XG4kZWdnc2hlbGwtbGlnaHQ6ICNGMkVFRTE7XG5cbi8vIGdyYXlzXG4kYmFzaWNhbGx5LWJsYWNrOiAjMjAyMTI0O1xuJGJsYWNrLW9saXZlOiAjM0Y0MDM4O1xuJGdyYW5pdGU6ICM2NTYzNUY7XG4kbGlnaHRlci1ncmF5OiAjOUQ5Qjk5O1xuJHdoaXRlOiAjZmZmO1xuXG4kZ29sZDogI0Q2QjkwMjtcbiRzdGFyLWJsdWU6ICMxRDYyQzQ7XG5cbiRicmVhay1zbWFsbDogNTUwcHg7XG4kYnJlYWstbWQ6IDgwMHB4O1xuJGJyZWFrLWxhcmdlOiAxMDI0cHg7XG4iXX0= */");

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
/* harmony default export */ __webpack_exports__["default"] = (".decorated {\n  background-color: #BAC39F;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9hZG1pbi9wcm9qZWN0cy9kYXd1LWhvbWUvc3JjL2FwcC9jb21tb24vdGV4dC1kZWNvcmF0b3IvdGV4dC1kZWNvcmF0b3IuY29tcG9uZW50LnNjc3MiLCIvVXNlcnMvYWRtaW4vcHJvamVjdHMvZGF3dS1ob21lL3NyYy9zdHlsZXMvdmFyaWFibGVzLnNjc3MiLCJzcmMvYXBwL2NvbW1vbi90ZXh0LWRlY29yYXRvci90ZXh0LWRlY29yYXRvci5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFHQTtFQUNJLHlCQ0NXO0FDSGYiLCJmaWxlIjoic3JjL2FwcC9jb21tb24vdGV4dC1kZWNvcmF0b3IvdGV4dC1kZWNvcmF0b3IuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJcbkBpbXBvcnQgJ21peGlucyc7XG5cbi5kZWNvcmF0ZWQge1xuICAgIGJhY2tncm91bmQtY29sb3I6ICRsYXVyZWwtZ3JlZW47XG59IiwiXG4kZGFyay1ncmVlbjogIzI5MkUxMjtcbiRhcm15LWdyZWVuOiAjNEI1MzIwO1xuJG9saXZlLWdyZWVuOiAjNzA4MjM4O1xuJG1vc3MtZ3JlZW46ICM4QTlBNUI7XG4kbGF1cmVsLWdyZWVuOiAjQkFDMzlGO1xuXG4kc2F0dXJhdGVkLW9saXZlOiAjNzI5OTAwO1xuJHNhdHVyYXRlZC1ibHVlOiAjMTY0RUI3O1xuXG4vLyBuaWNlIGZvciB0ZXh0IGFnYWluc3QgZGFyayBiYWNrZ3JvdW5kXG4kbGlnaHQtZ3JlZW46ICNGNEY3RUE7XG4kbGlnaHRlc3QtZ3JlZW46ICNGQ0ZDRjk7XG5cbi8vIFVzZWQgZm9yIGZpbGUgc2VsZWN0b3JcbiRlZ2dzaGVsbC1kYXJrZXI6ICNEREQ5Q0Y7XG4kZWdnc2hlbGwtZGFyazogI0VBRTZEQTtcbiRlZ2dzaGVsbDogI0VGRUJERjtcbiRlZ2dzaGVsbC1saWdodDogI0YyRUVFMTtcblxuLy8gZ3JheXNcbiRiYXNpY2FsbHktYmxhY2s6ICMyMDIxMjQ7XG4kYmxhY2stb2xpdmU6ICMzRjQwMzg7XG4kZ3Jhbml0ZTogIzY1NjM1RjtcbiRsaWdodGVyLWdyYXk6ICM5RDlCOTk7XG4kd2hpdGU6ICNmZmY7XG5cbiRnb2xkOiAjRDZCOTAyO1xuJHN0YXItYmx1ZTogIzFENjJDNDtcblxuJGJyZWFrLXNtYWxsOiA1NTBweDtcbiRicmVhay1tZDogODAwcHg7XG4kYnJlYWstbGFyZ2U6IDEwMjRweDtcbiIsIi5kZWNvcmF0ZWQge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjQkFDMzlGO1xufSJdfQ== */");

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

/***/ "./src/app/corona/corona-compare-dashboard/corona-compare-dashboard.component.scss":
/*!*****************************************************************************************!*\
  !*** ./src/app/corona/corona-compare-dashboard/corona-compare-dashboard.component.scss ***!
  \*****************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (":host {\n  display: block;\n  padding-bottom: 2rem;\n}\n:host .chart-container {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n}\n:host .chart-container .chart-header {\n  width: 100%;\n  display: flex;\n  padding: 0 1.5rem;\n  align-items: flex-end;\n  flex-direction: column;\n}\n:host .chart-container .chart-header .radio-button-container {\n  display: flex;\n  align-items: center;\n  justify-content: flex-end;\n  flex-wrap: wrap;\n}\n:host .chart-container .chart-header .radio-button-container .radio-buttons {\n  display: flex;\n}\n:host .chart-container .chart-header .radio-button-container .radio-buttons .radio-button {\n  background-color: #EAE6DA;\n  min-width: 2rem;\n  padding: 0.25rem 0.5rem;\n  font-size: 1rem;\n  cursor: pointer;\n  text-align: center;\n  outline: none;\n  white-space: nowrap;\n  -webkit-user-select: none;\n     -moz-user-select: none;\n      -ms-user-select: none;\n          user-select: none;\n  transition-duration: box-shadow 25ms, transform, 25ms;\n  box-shadow: 1px 1px 2px 0 #9D9B99;\n  transform: translateY(0);\n}\n:host .chart-container .chart-header .radio-button-container .radio-buttons .radio-button:hover {\n  background-color: #BAC39F;\n}\n:host .chart-container .chart-header .radio-button-container .radio-buttons .radio-button.active {\n  background-color: #708238;\n  color: #FCFCF9;\n}\n:host .chart-container .chart-header .radio-button-container .radio-buttons .radio-button:active {\n  transform: translateY(1px);\n  box-shadow: none;\n}\n:host .chart-container .chart-header .radio-button-container .radio-buttons .radio-button.active {\n  transform: translateY(1px);\n  box-shadow: none;\n}\n:host .chart-container .chart-header .radio-button-container .radio-buttons .radio-button:first-child {\n  border-radius: 5px 0 0 5px;\n}\n:host .chart-container .chart-header .radio-button-container .radio-buttons .radio-button:last-child {\n  border-radius: 0 5px 5px 0;\n}\n:host .chart-container .chart-header .radio-button-container .radio-buttons:not(:first-child) {\n  margin-left: 1rem;\n}\n:host .chart-container .chart-header .radio-button-container .radio-buttons.chart .radio-button {\n  min-width: auto;\n  padding: 3px;\n  display: flex;\n  flex-direction: column;\n}\n:host .chart-container .chart-header .radio-button-container .radio-buttons.chart .radio-button .material-icons {\n  flex: 1 0 auto;\n  font-size: 1.25rem;\n}\n:host .chart-container .chart-header .radio-button-container .radio-buttons .radio-button {\n  margin-top: 0.5rem;\n}\n:host .chart-container .chart-header dwu-stat-viewer {\n  display: flex;\n  justify-content: flex-end;\n  flex: 1 0 auto;\n  margin-top: 1rem;\n}\n:host .chart-container .overview.chart {\n  height: 12.5rem;\n  width: 100%;\n}\n:host .chart-container dwu-chart-legend {\n  flex: 0 0 auto;\n  margin-top: 0.25rem;\n  margin-bottom: 2rem;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9hZG1pbi9wcm9qZWN0cy9kYXd1LWhvbWUvc3JjL2FwcC9jb3JvbmEvY29yb25hLWNvbXBhcmUtZGFzaGJvYXJkL2Nvcm9uYS1jb21wYXJlLWRhc2hib2FyZC5jb21wb25lbnQuc2NzcyIsIi9Vc2Vycy9hZG1pbi9wcm9qZWN0cy9kYXd1LWhvbWUvc3JjL3N0eWxlcy9taXhpbnMuc2NzcyIsInNyYy9hcHAvY29yb25hL2Nvcm9uYS1jb21wYXJlLWRhc2hib2FyZC9jb3JvbmEtY29tcGFyZS1kYXNoYm9hcmQuY29tcG9uZW50LnNjc3MiLCIvVXNlcnMvYWRtaW4vcHJvamVjdHMvZGF3dS1ob21lL3NyYy9zdHlsZXMvdmFyaWFibGVzLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBRUE7RUNDSSxjQUFBO0VBQ0Esb0JBQUE7QUNESjtBREVJO0VBQ0ksYUFBQTtFQUNBLHNCQUFBO0VBQ0EsbUJBQUE7QUNBUjtBRENRO0VBQ0ksV0FBQTtFQUNBLGFBQUE7RUFDQSxpQkFBQTtFQUNBLHFCQUFBO0VBQ0Esc0JBQUE7QUNDWjtBRENZO0VBQ0ksYUFBQTtFQUNBLG1CQUFBO0VBQ0EseUJBQUE7RUFDQSxlQUFBO0FDQ2hCO0FEQ2dCO0VBMENaLGFBQUE7QUN4Q0o7QUR5Q0k7RUF1SUkseUJFeExRO0VGeUpaLGVBQUE7RUFDQSx1QkFBQTtFQUNBLGVBQUE7RUFDQSxlQUFBO0VBQ0Esa0JBQUE7RUFDQSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSx5QkFBQTtLQUFBLHNCQUFBO01BQUEscUJBQUE7VUFBQSxpQkFBQTtFQWxHQSxxREFBQTtFQUNBLGlDQUFBO0VBQ0Esd0JBQUE7QUMxQ0o7QURtS0k7RUFDSSx5QkVyTU87QURvQ2Y7QURtS0k7RUFDSSx5QkUxTU07RUYyTU4sY0VsTVM7QURpQ2pCO0FEb0NJO0VBQ0ksMEJBQUE7RUFDQSxnQkFBQTtBQ2xDUjtBRG9DSTtFQUNJLDBCQUFBO0VBQ0EsZ0JBQUE7QUNsQ1I7QURlUTtFQUNJLDBCQUFBO0FDYlo7QURlUTtFQUNJLDBCQUFBO0FDYlo7QURuQ29CO0VBQ0ksaUJBQUE7QUNxQ3hCO0FEbEN3QjtFQUNJLGVBQUE7RUFDQSxZQUFBO0VBQ0EsYUFBQTtFQUNBLHNCQUFBO0FDb0M1QjtBRG5DNEI7RUFDSSxjQUFBO0VBQ0Esa0JBQUE7QUNxQ2hDO0FEakNvQjtFQUNJLGtCQUFBO0FDbUN4QjtBRC9CWTtFQUNJLGFBQUE7RUFDQSx5QkFBQTtFQUNBLGNBQUE7RUFDQSxnQkFBQTtBQ2lDaEI7QUQ5QlE7RUFDSSxlQUFBO0VBQ0EsV0FBQTtBQ2dDWjtBRDlCUTtFQUNJLGNBQUE7RUFDQSxtQkFBQTtFQUNBLG1CQUFBO0FDZ0NaIiwiZmlsZSI6InNyYy9hcHAvY29yb25hL2Nvcm9uYS1jb21wYXJlLWRhc2hib2FyZC9jb3JvbmEtY29tcGFyZS1kYXNoYm9hcmQuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJAaW1wb3J0ICdtaXhpbnMnO1xuXG46aG9zdCB7XG4gICAgQGluY2x1ZGUgYmFzZS1jb3JvbmEtZGFzaGJvYXJkO1xufVxuIiwiQGltcG9ydCAndmFyaWFibGVzJztcblxuQG1peGluIGJhc2UtY29yb25hLWRhc2hib2FyZCB7XG4gICAgZGlzcGxheTogYmxvY2s7XG4gICAgcGFkZGluZy1ib3R0b206IDJyZW07XG4gICAgLmNoYXJ0LWNvbnRhaW5lciB7XG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICAgIC5jaGFydC1oZWFkZXIge1xuICAgICAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgICAgcGFkZGluZzogMCAxLjVyZW07XG4gICAgICAgICAgICBhbGlnbi1pdGVtczogZmxleC1lbmQ7XG4gICAgICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuXG4gICAgICAgICAgICAucmFkaW8tYnV0dG9uLWNvbnRhaW5lcntcbiAgICAgICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICAgICAgICAgICAganVzdGlmeS1jb250ZW50OiBmbGV4LWVuZDtcbiAgICAgICAgICAgICAgICBmbGV4LXdyYXA6IHdyYXA7XG5cbiAgICAgICAgICAgICAgICAucmFkaW8tYnV0dG9ucyB7XG4gICAgICAgICAgICAgICAgICAgIEBpbmNsdWRlIHJhZGlvLWJ1dHRvbi1jb250YWluZXI7XG4gICAgICAgICAgICAgICAgICAgICY6bm90KDpmaXJzdC1jaGlsZCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgbWFyZ2luLWxlZnQ6IDFyZW07XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgJi5jaGFydCB7XG4gICAgICAgICAgICAgICAgICAgICAgICAucmFkaW8tYnV0dG9uIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBtaW4td2lkdGg6IGF1dG87XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcGFkZGluZzogM3B4O1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAubWF0ZXJpYWwtaWNvbnMge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBmbGV4OiAxIDAgYXV0bztcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZm9udC1zaXplOiAxLjI1cmVtO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAucmFkaW8tYnV0dG9uIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIG1hcmdpbi10b3A6IDAuNXJlbTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGR3dS1zdGF0LXZpZXdlciB7XG4gICAgICAgICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtZW5kO1xuICAgICAgICAgICAgICAgIGZsZXg6IDEgMCBhdXRvO1xuICAgICAgICAgICAgICAgIG1hcmdpbi10b3A6IDFyZW07XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgLm92ZXJ2aWV3LmNoYXJ0IHtcbiAgICAgICAgICAgIGhlaWdodDogMTIuNXJlbTtcbiAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICB9XG4gICAgICAgIGR3dS1jaGFydC1sZWdlbmQge1xuICAgICAgICAgICAgZmxleDogMCAwIGF1dG87XG4gICAgICAgICAgICBtYXJnaW4tdG9wOiAwLjI1cmVtO1xuICAgICAgICAgICAgbWFyZ2luLWJvdHRvbTogMnJlbTtcbiAgICAgICAgfVxuICAgIH1cbn1cblxuQG1peGluIHJhZGlvLWJ1dHRvbi1jb250YWluZXIge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgLnJhZGlvLWJ1dHRvbiB7XG4gICAgICAgIEBpbmNsdWRlIGxpZ2h0LW1pbmktYnV0dG9uO1xuICAgICAgICBAaW5jbHVkZSBzaGFkb3c7XG4gICAgICAgICY6Zmlyc3QtY2hpbGQge1xuICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogNXB4IDAgMCA1cHg7XG4gICAgICAgIH1cbiAgICAgICAgJjpsYXN0LWNoaWxkIHtcbiAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDAgNXB4IDVweCAwO1xuICAgICAgICB9XG4gICAgfVxufVxuXG5AbWl4aW4gc2hhZG93IHtcbiAgICB0cmFuc2l0aW9uLWR1cmF0aW9uOiBib3gtc2hhZG93IDI1bXMsIHRyYW5zZm9ybSwgMjVtcztcbiAgICBib3gtc2hhZG93OiAxcHggMXB4IDJweCAwICRsaWdodGVyLWdyYXk7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDApO1xuICAgICY6YWN0aXZlIHtcbiAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDFweCk7XG4gICAgICAgIGJveC1zaGFkb3c6IG5vbmU7XG4gICAgfVxuICAgICYuYWN0aXZlIHtcbiAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDFweCk7XG4gICAgICAgIGJveC1zaGFkb3c6IG5vbmU7XG4gICAgfVxufVxuXG5AbWl4aW4gcmVzcG9uc2l2ZS1wYWdlIHtcbiAgICBAbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA3NTBweCkge1xuICAgICAgICBkaXYucGFnZS1jb250YWluZXIge1xuICAgICAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICAgICAgICAgIC5sZWZ0LXNpZGUge1xuICAgICAgICAgICAgICAgIGZsZXg6IDAgMCBhdXRvO1xuICAgICAgICAgICAgICAgIGhlaWdodDogMTMuMjVyZW07XG4gICAgICAgICAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgICAgICAgICAgbWF4LXdpZHRoOiBub25lO1xuICAgICAgICAgICAgICAgIC8vIG1pbi13aWR0aDogbm9uZTtcbiAgICAgICAgICAgICAgICB0cmFuc2l0aW9uOiBoZWlnaHQgNTBtcztcbiAgICAgICAgICAgICAgICAmLmV4cGFuZGVkIHtcbiAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiA4NSU7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIC5leHBhbmRlciB7XG4gICAgICAgICAgICAgICAgICAgIEBpbmNsdWRlIGRhcmstdGhlbWU7XG4gICAgICAgICAgICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgICAgICAgICAgICAgICAgYm90dG9tOiAwO1xuICAgICAgICAgICAgICAgICAgICBsZWZ0OiA1MCU7XG4gICAgICAgICAgICAgICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgtNTAlKTtcbiAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDMuNXJlbTtcbiAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiAxcmVtO1xuICAgICAgICAgICAgICAgICAgICBib3JkZXI6IDFweCBzb2xpZCAkbW9zcy1ncmVlbjtcbiAgICAgICAgICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogNXB4IDVweCAwIDAgO1xuICAgICAgICAgICAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgICAgICAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAgICAgICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgICAgICAgICAgICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgICAgICAgICAgICAgICAgIC5leHBhbmRlci1pY29uIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMTZweDtcbiAgICAgICAgICAgICAgICAgICAgICAgICYuZmxpcHBlZCB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdHJhbnNmb3JtOiByb3RhdGUoMTgwZGVnKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuICAgIC5wYWdlLWNvbnRhaW5lciB7XG4gICAgICAgIGhlaWdodDogMTAwJTtcbiAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XG5cbiAgICAgICAgLmxlZnQtc2lkZSB7XG4gICAgICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgICAgICAgICBmbGV4OiAxIDEgMDtcbiAgICAgICAgICAgIG92ZXJmbG93OiBoaWRkZW47XG4gICAgICAgICAgICBtYXgtd2lkdGg6IDI3LjUlO1xuICAgICAgICAgICAgbWluLXdpZHRoOiAyMHJlbTtcbiAgICAgICAgICAgIC5leHBhbmRlciB7XG4gICAgICAgICAgICAgICAgZGlzcGxheTogbm9uZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICAucmlnaHQtc2lkZSB7XG4gICAgICAgICAgICBmbGV4OiAxIDEgMDtcbiAgICAgICAgICAgIG92ZXJmbG93OiBhdXRvO1xuICAgICAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgICAgICB9XG4gICAgfVxuXG59XG5AbWl4aW4gbGlnaHQtbWluaS1idXR0b24ge1xuICAgIEBpbmNsdWRlIGxpZ2h0LXRoZW1lO1xuICAgIEBpbmNsdWRlIGJ1dHRvbi14cztcbn1cblxuQG1peGluIGxpZ2h0LXNtYWxsLWJ1dHRvbiB7XG4gICAgQGluY2x1ZGUgbGlnaHQtdGhlbWU7XG4gICAgQGluY2x1ZGUgYnV0dG9uLXNtO1xufVxuXG5AbWl4aW4gZGFyay1idXR0b24ge1xuICAgIEBpbmNsdWRlIGRhcmstdGhlbWU7XG4gICAgQGluY2x1ZGUgYnV0dG9uLW1kO1xufVxuXG5AbWl4aW4gYnV0dG9uLXhzIHtcbiAgICBtaW4td2lkdGg6IDJyZW07XG4gICAgcGFkZGluZzogMC4yNXJlbSAwLjVyZW07XG4gICAgZm9udC1zaXplOiAxcmVtO1xuICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgb3V0bGluZTogbm9uZTtcbiAgICB3aGl0ZS1zcGFjZTogbm93cmFwO1xuICAgIHVzZXItc2VsZWN0OiBub25lO1xufVxuXG5AbWl4aW4gYnV0dG9uLXNtIHtcbiAgICBtaW4td2lkdGg6IDNyZW07XG4gICAgcGFkZGluZzogMC4yNXJlbSAwLjVyZW07XG4gICAgY3Vyc29yOiBwb2ludGVyO1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICBvdXRsaW5lOiBub25lO1xuICAgIHdoaXRlLXNwYWNlOiBub3dyYXA7XG4gICAgdXNlci1zZWxlY3Q6IG5vbmU7XG59XG5cbkBtaXhpbiBidXR0b24tbWQge1xuICAgIHdpZHRoOiA4cmVtO1xuICAgIHBhZGRpbmc6IDAuNXJlbTtcbiAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIG91dGxpbmU6IG5vbmU7XG4gICAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcbiAgICB1c2VyLXNlbGVjdDogbm9uZTtcbn1cblxuQG1peGluIGxpZ2h0LXRoZW1lIHtcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogJGVnZ3NoZWxsLWRhcms7XG4gICAgJjpob3ZlciB7XG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6ICRsYXVyZWwtZ3JlZW47XG4gICAgfVxuICAgICYuYWN0aXZlIHtcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogJG9saXZlLWdyZWVuO1xuICAgICAgICBjb2xvcjogJGxpZ2h0ZXN0LWdyZWVuO1xuICAgIH1cbn1cblxuQG1peGluIGRhcmstdGhlbWUge1xuICAgIGJhY2tncm91bmQtY29sb3I6ICRibGFjay1vbGl2ZTtcbiAgICBjb2xvcjogJGxpZ2h0ZXN0LWdyZWVuO1xuICAgICY6aG92ZXIge1xuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkYXJteS1ncmVlbjtcbiAgICAgICAgY29sb3I6ICRsaWdodGVzdC1ncmVlbjtcbiAgICB9XG4gICAgJi5hY3RpdmUge1xuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkb2xpdmUtZ3JlZW47XG4gICAgICAgIGNvbG9yOiAkbGlnaHRlc3QtZ3JlZW47XG4gICAgfVxufVxuXG5AbWl4aW4gdG9wLW5hdi1wYWdlIHtcbiAgICBoZWlnaHQ6IDEwMCU7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgIC5tYWluLWNvbnRlbnQge1xuICAgICAgICBmbGV4OiAxIDEgMDtcbiAgICAgICAgb3ZlcmZsb3c6IGF1dG87XG4gICAgfVxufVxuXG5AbWl4aW4gcmVzcG9uZC10bygkbWVkaWEpIHtcbiAgQGlmICRtZWRpYSA9PSBzbWFsbCB7XG4gICAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiAkYnJlYWstc21hbGwpIHsgQGNvbnRlbnQ7IH1cbiAgfVxuICBAZWxzZSBpZiAkbWVkaWEgPT0gbWVkaXVtIHtcbiAgICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChtaW4td2lkdGg6ICRicmVhay1zbWFsbCArIDEpIGFuZCAobWF4LXdpZHRoOiAkYnJlYWstbGFyZ2UgLSAxKSB7IEBjb250ZW50OyB9XG4gIH1cbiAgQGVsc2UgaWYgJG1lZGlhID09IHdpZGUge1xuICAgIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1pbi13aWR0aDogJGJyZWFrLWxhcmdlKSB7IEBjb250ZW50OyB9XG4gIH1cbn1cbiIsIjpob3N0IHtcbiAgZGlzcGxheTogYmxvY2s7XG4gIHBhZGRpbmctYm90dG9tOiAycmVtO1xufVxuOmhvc3QgLmNoYXJ0LWNvbnRhaW5lciB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG59XG46aG9zdCAuY2hhcnQtY29udGFpbmVyIC5jaGFydC1oZWFkZXIge1xuICB3aWR0aDogMTAwJTtcbiAgZGlzcGxheTogZmxleDtcbiAgcGFkZGluZzogMCAxLjVyZW07XG4gIGFsaWduLWl0ZW1zOiBmbGV4LWVuZDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbn1cbjpob3N0IC5jaGFydC1jb250YWluZXIgLmNoYXJ0LWhlYWRlciAucmFkaW8tYnV0dG9uLWNvbnRhaW5lciB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGp1c3RpZnktY29udGVudDogZmxleC1lbmQ7XG4gIGZsZXgtd3JhcDogd3JhcDtcbn1cbjpob3N0IC5jaGFydC1jb250YWluZXIgLmNoYXJ0LWhlYWRlciAucmFkaW8tYnV0dG9uLWNvbnRhaW5lciAucmFkaW8tYnV0dG9ucyB7XG4gIGRpc3BsYXk6IGZsZXg7XG59XG46aG9zdCAuY2hhcnQtY29udGFpbmVyIC5jaGFydC1oZWFkZXIgLnJhZGlvLWJ1dHRvbi1jb250YWluZXIgLnJhZGlvLWJ1dHRvbnMgLnJhZGlvLWJ1dHRvbiB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNFQUU2REE7XG4gIG1pbi13aWR0aDogMnJlbTtcbiAgcGFkZGluZzogMC4yNXJlbSAwLjVyZW07XG4gIGZvbnQtc2l6ZTogMXJlbTtcbiAgY3Vyc29yOiBwb2ludGVyO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIG91dGxpbmU6IG5vbmU7XG4gIHdoaXRlLXNwYWNlOiBub3dyYXA7XG4gIHVzZXItc2VsZWN0OiBub25lO1xuICB0cmFuc2l0aW9uLWR1cmF0aW9uOiBib3gtc2hhZG93IDI1bXMsIHRyYW5zZm9ybSwgMjVtcztcbiAgYm94LXNoYWRvdzogMXB4IDFweCAycHggMCAjOUQ5Qjk5O1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMCk7XG59XG46aG9zdCAuY2hhcnQtY29udGFpbmVyIC5jaGFydC1oZWFkZXIgLnJhZGlvLWJ1dHRvbi1jb250YWluZXIgLnJhZGlvLWJ1dHRvbnMgLnJhZGlvLWJ1dHRvbjpob3ZlciB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNCQUMzOUY7XG59XG46aG9zdCAuY2hhcnQtY29udGFpbmVyIC5jaGFydC1oZWFkZXIgLnJhZGlvLWJ1dHRvbi1jb250YWluZXIgLnJhZGlvLWJ1dHRvbnMgLnJhZGlvLWJ1dHRvbi5hY3RpdmUge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjNzA4MjM4O1xuICBjb2xvcjogI0ZDRkNGOTtcbn1cbjpob3N0IC5jaGFydC1jb250YWluZXIgLmNoYXJ0LWhlYWRlciAucmFkaW8tYnV0dG9uLWNvbnRhaW5lciAucmFkaW8tYnV0dG9ucyAucmFkaW8tYnV0dG9uOmFjdGl2ZSB7XG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgxcHgpO1xuICBib3gtc2hhZG93OiBub25lO1xufVxuOmhvc3QgLmNoYXJ0LWNvbnRhaW5lciAuY2hhcnQtaGVhZGVyIC5yYWRpby1idXR0b24tY29udGFpbmVyIC5yYWRpby1idXR0b25zIC5yYWRpby1idXR0b24uYWN0aXZlIHtcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDFweCk7XG4gIGJveC1zaGFkb3c6IG5vbmU7XG59XG46aG9zdCAuY2hhcnQtY29udGFpbmVyIC5jaGFydC1oZWFkZXIgLnJhZGlvLWJ1dHRvbi1jb250YWluZXIgLnJhZGlvLWJ1dHRvbnMgLnJhZGlvLWJ1dHRvbjpmaXJzdC1jaGlsZCB7XG4gIGJvcmRlci1yYWRpdXM6IDVweCAwIDAgNXB4O1xufVxuOmhvc3QgLmNoYXJ0LWNvbnRhaW5lciAuY2hhcnQtaGVhZGVyIC5yYWRpby1idXR0b24tY29udGFpbmVyIC5yYWRpby1idXR0b25zIC5yYWRpby1idXR0b246bGFzdC1jaGlsZCB7XG4gIGJvcmRlci1yYWRpdXM6IDAgNXB4IDVweCAwO1xufVxuOmhvc3QgLmNoYXJ0LWNvbnRhaW5lciAuY2hhcnQtaGVhZGVyIC5yYWRpby1idXR0b24tY29udGFpbmVyIC5yYWRpby1idXR0b25zOm5vdCg6Zmlyc3QtY2hpbGQpIHtcbiAgbWFyZ2luLWxlZnQ6IDFyZW07XG59XG46aG9zdCAuY2hhcnQtY29udGFpbmVyIC5jaGFydC1oZWFkZXIgLnJhZGlvLWJ1dHRvbi1jb250YWluZXIgLnJhZGlvLWJ1dHRvbnMuY2hhcnQgLnJhZGlvLWJ1dHRvbiB7XG4gIG1pbi13aWR0aDogYXV0bztcbiAgcGFkZGluZzogM3B4O1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xufVxuOmhvc3QgLmNoYXJ0LWNvbnRhaW5lciAuY2hhcnQtaGVhZGVyIC5yYWRpby1idXR0b24tY29udGFpbmVyIC5yYWRpby1idXR0b25zLmNoYXJ0IC5yYWRpby1idXR0b24gLm1hdGVyaWFsLWljb25zIHtcbiAgZmxleDogMSAwIGF1dG87XG4gIGZvbnQtc2l6ZTogMS4yNXJlbTtcbn1cbjpob3N0IC5jaGFydC1jb250YWluZXIgLmNoYXJ0LWhlYWRlciAucmFkaW8tYnV0dG9uLWNvbnRhaW5lciAucmFkaW8tYnV0dG9ucyAucmFkaW8tYnV0dG9uIHtcbiAgbWFyZ2luLXRvcDogMC41cmVtO1xufVxuOmhvc3QgLmNoYXJ0LWNvbnRhaW5lciAuY2hhcnQtaGVhZGVyIGR3dS1zdGF0LXZpZXdlciB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogZmxleC1lbmQ7XG4gIGZsZXg6IDEgMCBhdXRvO1xuICBtYXJnaW4tdG9wOiAxcmVtO1xufVxuOmhvc3QgLmNoYXJ0LWNvbnRhaW5lciAub3ZlcnZpZXcuY2hhcnQge1xuICBoZWlnaHQ6IDEyLjVyZW07XG4gIHdpZHRoOiAxMDAlO1xufVxuOmhvc3QgLmNoYXJ0LWNvbnRhaW5lciBkd3UtY2hhcnQtbGVnZW5kIHtcbiAgZmxleDogMCAwIGF1dG87XG4gIG1hcmdpbi10b3A6IDAuMjVyZW07XG4gIG1hcmdpbi1ib3R0b206IDJyZW07XG59IiwiXG4kZGFyay1ncmVlbjogIzI5MkUxMjtcbiRhcm15LWdyZWVuOiAjNEI1MzIwO1xuJG9saXZlLWdyZWVuOiAjNzA4MjM4O1xuJG1vc3MtZ3JlZW46ICM4QTlBNUI7XG4kbGF1cmVsLWdyZWVuOiAjQkFDMzlGO1xuXG4kc2F0dXJhdGVkLW9saXZlOiAjNzI5OTAwO1xuJHNhdHVyYXRlZC1ibHVlOiAjMTY0RUI3O1xuXG4vLyBuaWNlIGZvciB0ZXh0IGFnYWluc3QgZGFyayBiYWNrZ3JvdW5kXG4kbGlnaHQtZ3JlZW46ICNGNEY3RUE7XG4kbGlnaHRlc3QtZ3JlZW46ICNGQ0ZDRjk7XG5cbi8vIFVzZWQgZm9yIGZpbGUgc2VsZWN0b3JcbiRlZ2dzaGVsbC1kYXJrZXI6ICNEREQ5Q0Y7XG4kZWdnc2hlbGwtZGFyazogI0VBRTZEQTtcbiRlZ2dzaGVsbDogI0VGRUJERjtcbiRlZ2dzaGVsbC1saWdodDogI0YyRUVFMTtcblxuLy8gZ3JheXNcbiRiYXNpY2FsbHktYmxhY2s6ICMyMDIxMjQ7XG4kYmxhY2stb2xpdmU6ICMzRjQwMzg7XG4kZ3Jhbml0ZTogIzY1NjM1RjtcbiRsaWdodGVyLWdyYXk6ICM5RDlCOTk7XG4kd2hpdGU6ICNmZmY7XG5cbiRnb2xkOiAjRDZCOTAyO1xuJHN0YXItYmx1ZTogIzFENjJDNDtcblxuJGJyZWFrLXNtYWxsOiA1NTBweDtcbiRicmVhay1tZDogODAwcHg7XG4kYnJlYWstbGFyZ2U6IDEwMjRweDtcbiJdfQ== */");

/***/ }),

/***/ "./src/app/corona/corona-compare-dashboard/corona-compare-dashboard.component.ts":
/*!***************************************************************************************!*\
  !*** ./src/app/corona/corona-compare-dashboard/corona-compare-dashboard.component.ts ***!
  \***************************************************************************************/
/*! exports provided: CoronaCompareDashboardComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CoronaCompareDashboardComponent", function() { return CoronaCompareDashboardComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! lodash */ "./node_modules/lodash/lodash.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _models_index__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../models/index */ "./src/app/corona/models/index.ts");




var CoronaCompareDashboardComponent = /** @class */ (function () {
    function CoronaCompareDashboardComponent() {
        this.coronaExtractor = new _models_index__WEBPACK_IMPORTED_MODULE_3__["CoronaDataExtractor"]();
        this.hoverIndex = 0;
        this.isViewingNormalized = true;
        this.selectedMetricIndex = 0;
        this.metricsByNormalized = {
            CASE: [
                _models_index__WEBPACK_IMPORTED_MODULE_3__["CoronaKeys"].CASES,
                _models_index__WEBPACK_IMPORTED_MODULE_3__["CoronaKeys"].NEW,
                _models_index__WEBPACK_IMPORTED_MODULE_3__["CoronaKeys"].ACTIVE,
                _models_index__WEBPACK_IMPORTED_MODULE_3__["CoronaKeys"].RECOVERED,
                _models_index__WEBPACK_IMPORTED_MODULE_3__["CoronaKeys"].DEATHS,
            ],
            NORM: [
                _models_index__WEBPACK_IMPORTED_MODULE_3__["NormalKeys"].CASES,
                _models_index__WEBPACK_IMPORTED_MODULE_3__["NormalKeys"].NEW,
                _models_index__WEBPACK_IMPORTED_MODULE_3__["NormalKeys"].ACTIVE,
                _models_index__WEBPACK_IMPORTED_MODULE_3__["NormalKeys"].RECOVERED,
                _models_index__WEBPACK_IMPORTED_MODULE_3__["NormalKeys"].DEATHS,
            ],
        };
        this.isViewingRAvg = true;
        this.colorScheme = [
            '#B24C63',
            '#5438DC',
            '#357DED',
            '#56EEF4',
            '#92D5E6',
            '#772D8B',
            '#5A0B4D',
            '#A1EF8B',
        ];
        this.Labels = _models_index__WEBPACK_IMPORTED_MODULE_3__["Labels"];
        this.CoronaKeys = _models_index__WEBPACK_IMPORTED_MODULE_3__["CoronaKeys"];
        this.NormalKeys = _models_index__WEBPACK_IMPORTED_MODULE_3__["NormalKeys"];
    }
    CoronaCompareDashboardComponent.prototype.ngOnChanges = function (changes) {
        if (this.coronaFilesWithFileId && this.filesById) {
            this.setup(this.coronaFilesWithFileId, this.filesById);
        }
    };
    CoronaCompareDashboardComponent.prototype.onChangeNormalized = function (isViewingNormalized) {
        this.isViewingNormalized = isViewingNormalized;
        this.refreshCompareTable();
    };
    CoronaCompareDashboardComponent.prototype.onSelectMetricIndex = function (index) {
        this.selectedMetricIndex = index;
        this.refreshCompareTable();
    };
    CoronaCompareDashboardComponent.prototype.setViewingRAvg = function (isViewingRAvg) {
        this.isViewingRAvg = isViewingRAvg;
        this.refreshRTable();
    };
    CoronaCompareDashboardComponent.prototype.setup = function (coronaFilesWithFileId, filesById) {
        var _this = this;
        this.refreshCompareTable();
        this.refreshRTable();
        this.hoverIndex = this.compareData.length - 1;
        var fileIds = coronaFilesWithFileId.map(function (_a) {
            var _b = tslib__WEBPACK_IMPORTED_MODULE_0__["__read"](_a, 2), coronaFile = _b[0], fileId = _b[1];
            return fileId;
        });
        this.compareKeys = fileIds;
        this.compareColorsByKey = {};
        this.compareLabelsByKey = {};
        this.rFormattersByKeys = {};
        this.compareKeys.forEach(function (key, index) {
            var colorIndex = index % _this.colorScheme.length;
            _this.compareColorsByKey[key] = _this.colorScheme[colorIndex];
            _this.compareLabelsByKey[key] = _this.filesById[key].label || key;
            _this.rFormattersByKeys[key] = function (d) { return _this.toPercentage(d); };
        });
    };
    CoronaCompareDashboardComponent.prototype.getDataForMetric = function (coronaFilesWithFileId, metric) {
        var _this = this;
        var coronaFilesByFileId = {};
        coronaFilesWithFileId.forEach(function (_a) {
            var _b = tslib__WEBPACK_IMPORTED_MODULE_0__["__read"](_a, 2), file = _b[0], fileId = _b[1];
            return coronaFilesByFileId[fileId] = file;
        });
        var dataByTimestamp = {};
        var fileIds = [];
        coronaFilesWithFileId.forEach(function (_a) {
            var _b = tslib__WEBPACK_IMPORTED_MODULE_0__["__read"](_a, 2), coronaFile = _b[0], fileId = _b[1];
            var cleanData = _this.coronaExtractor.clean(coronaFile, coronaFile.population);
            fileIds.push(fileId);
            cleanData.forEach(function (column) {
                Object(lodash__WEBPACK_IMPORTED_MODULE_2__["set"])(dataByTimestamp, [column.timestamp, fileId], column[metric]);
                Object(lodash__WEBPACK_IMPORTED_MODULE_2__["set"])(dataByTimestamp, [column.timestamp, _models_index__WEBPACK_IMPORTED_MODULE_3__["CoronaKeys"].TIMESTAMP], column.timestamp);
            });
        });
        var sortedTimestamps = Object.keys(dataByTimestamp).sort();
        return sortedTimestamps.map(function (timestamp) { return dataByTimestamp[timestamp]; });
    };
    CoronaCompareDashboardComponent.prototype.refreshCompareTable = function () {
        if (!this.coronaFilesWithFileId) {
            return;
        }
        var selectedMetric = this.getSelectedMetric();
        this.compareData = this.getDataForMetric(this.coronaFilesWithFileId, selectedMetric);
    };
    CoronaCompareDashboardComponent.prototype.refreshRTable = function () {
        if (!this.coronaFilesWithFileId) {
            return;
        }
        this.compareRData = this.getDataForMetric(this.coronaFilesWithFileId, this.isViewingRAvg ? _models_index__WEBPACK_IMPORTED_MODULE_3__["NormalKeys"].R_AVG : _models_index__WEBPACK_IMPORTED_MODULE_3__["NormalKeys"].R);
    };
    CoronaCompareDashboardComponent.prototype.getSelectedMetric = function () {
        return this.isViewingNormalized
            ? this.metricsByNormalized.NORM[this.selectedMetricIndex]
            : this.metricsByNormalized.CASE[this.selectedMetricIndex];
    };
    CoronaCompareDashboardComponent.prototype.toPercentage = function (d) {
        var roundedPercent = Object(lodash__WEBPACK_IMPORTED_MODULE_2__["round"])(d * 100, 2);
        return isNaN(roundedPercent) ? '' : roundedPercent + "%";
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
    ], CoronaCompareDashboardComponent.prototype, "coronaFilesWithFileId", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
    ], CoronaCompareDashboardComponent.prototype, "filesById", void 0);
    CoronaCompareDashboardComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'dwu-corona-compare-dashboard',
            template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./corona-compare-dashboard.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/corona/corona-compare-dashboard/corona-compare-dashboard.component.html")).default,
            styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./corona-compare-dashboard.component.scss */ "./src/app/corona/corona-compare-dashboard/corona-compare-dashboard.component.scss")).default]
        })
    ], CoronaCompareDashboardComponent);
    return CoronaCompareDashboardComponent;
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
/* harmony default export */ __webpack_exports__["default"] = (":host {\n  display: block;\n  padding-bottom: 2rem;\n}\n:host .chart-container {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n}\n:host .chart-container .chart-header {\n  width: 100%;\n  display: flex;\n  padding: 0 1.5rem;\n  align-items: flex-end;\n  flex-direction: column;\n}\n:host .chart-container .chart-header .radio-button-container {\n  display: flex;\n  align-items: center;\n  justify-content: flex-end;\n  flex-wrap: wrap;\n}\n:host .chart-container .chart-header .radio-button-container .radio-buttons {\n  display: flex;\n}\n:host .chart-container .chart-header .radio-button-container .radio-buttons .radio-button {\n  background-color: #EAE6DA;\n  min-width: 2rem;\n  padding: 0.25rem 0.5rem;\n  font-size: 1rem;\n  cursor: pointer;\n  text-align: center;\n  outline: none;\n  white-space: nowrap;\n  -webkit-user-select: none;\n     -moz-user-select: none;\n      -ms-user-select: none;\n          user-select: none;\n  transition-duration: box-shadow 25ms, transform, 25ms;\n  box-shadow: 1px 1px 2px 0 #9D9B99;\n  transform: translateY(0);\n}\n:host .chart-container .chart-header .radio-button-container .radio-buttons .radio-button:hover {\n  background-color: #BAC39F;\n}\n:host .chart-container .chart-header .radio-button-container .radio-buttons .radio-button.active {\n  background-color: #708238;\n  color: #FCFCF9;\n}\n:host .chart-container .chart-header .radio-button-container .radio-buttons .radio-button:active {\n  transform: translateY(1px);\n  box-shadow: none;\n}\n:host .chart-container .chart-header .radio-button-container .radio-buttons .radio-button.active {\n  transform: translateY(1px);\n  box-shadow: none;\n}\n:host .chart-container .chart-header .radio-button-container .radio-buttons .radio-button:first-child {\n  border-radius: 5px 0 0 5px;\n}\n:host .chart-container .chart-header .radio-button-container .radio-buttons .radio-button:last-child {\n  border-radius: 0 5px 5px 0;\n}\n:host .chart-container .chart-header .radio-button-container .radio-buttons:not(:first-child) {\n  margin-left: 1rem;\n}\n:host .chart-container .chart-header .radio-button-container .radio-buttons.chart .radio-button {\n  min-width: auto;\n  padding: 3px;\n  display: flex;\n  flex-direction: column;\n}\n:host .chart-container .chart-header .radio-button-container .radio-buttons.chart .radio-button .material-icons {\n  flex: 1 0 auto;\n  font-size: 1.25rem;\n}\n:host .chart-container .chart-header .radio-button-container .radio-buttons .radio-button {\n  margin-top: 0.5rem;\n}\n:host .chart-container .chart-header dwu-stat-viewer {\n  display: flex;\n  justify-content: flex-end;\n  flex: 1 0 auto;\n  margin-top: 1rem;\n}\n:host .chart-container .overview.chart {\n  height: 12.5rem;\n  width: 100%;\n}\n:host .chart-container dwu-chart-legend {\n  flex: 0 0 auto;\n  margin-top: 0.25rem;\n  margin-bottom: 2rem;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9hZG1pbi9wcm9qZWN0cy9kYXd1LWhvbWUvc3JjL2FwcC9jb3JvbmEvY29yb25hLWRhc2hib2FyZC9jb3JvbmEtZGFzaGJvYXJkLmNvbXBvbmVudC5zY3NzIiwiL1VzZXJzL2FkbWluL3Byb2plY3RzL2Rhd3UtaG9tZS9zcmMvc3R5bGVzL21peGlucy5zY3NzIiwic3JjL2FwcC9jb3JvbmEvY29yb25hLWRhc2hib2FyZC9jb3JvbmEtZGFzaGJvYXJkLmNvbXBvbmVudC5zY3NzIiwiL1VzZXJzL2FkbWluL3Byb2plY3RzL2Rhd3UtaG9tZS9zcmMvc3R5bGVzL3ZhcmlhYmxlcy5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUVBO0VDQ0ksY0FBQTtFQUNBLG9CQUFBO0FDREo7QURFSTtFQUNJLGFBQUE7RUFDQSxzQkFBQTtFQUNBLG1CQUFBO0FDQVI7QURDUTtFQUNJLFdBQUE7RUFDQSxhQUFBO0VBQ0EsaUJBQUE7RUFDQSxxQkFBQTtFQUNBLHNCQUFBO0FDQ1o7QURDWTtFQUNJLGFBQUE7RUFDQSxtQkFBQTtFQUNBLHlCQUFBO0VBQ0EsZUFBQTtBQ0NoQjtBRENnQjtFQTBDWixhQUFBO0FDeENKO0FEeUNJO0VBdUlJLHlCRXhMUTtFRnlKWixlQUFBO0VBQ0EsdUJBQUE7RUFDQSxlQUFBO0VBQ0EsZUFBQTtFQUNBLGtCQUFBO0VBQ0EsYUFBQTtFQUNBLG1CQUFBO0VBQ0EseUJBQUE7S0FBQSxzQkFBQTtNQUFBLHFCQUFBO1VBQUEsaUJBQUE7RUFsR0EscURBQUE7RUFDQSxpQ0FBQTtFQUNBLHdCQUFBO0FDMUNKO0FEbUtJO0VBQ0kseUJFck1PO0FEb0NmO0FEbUtJO0VBQ0kseUJFMU1NO0VGMk1OLGNFbE1TO0FEaUNqQjtBRG9DSTtFQUNJLDBCQUFBO0VBQ0EsZ0JBQUE7QUNsQ1I7QURvQ0k7RUFDSSwwQkFBQTtFQUNBLGdCQUFBO0FDbENSO0FEZVE7RUFDSSwwQkFBQTtBQ2JaO0FEZVE7RUFDSSwwQkFBQTtBQ2JaO0FEbkNvQjtFQUNJLGlCQUFBO0FDcUN4QjtBRGxDd0I7RUFDSSxlQUFBO0VBQ0EsWUFBQTtFQUNBLGFBQUE7RUFDQSxzQkFBQTtBQ29DNUI7QURuQzRCO0VBQ0ksY0FBQTtFQUNBLGtCQUFBO0FDcUNoQztBRGpDb0I7RUFDSSxrQkFBQTtBQ21DeEI7QUQvQlk7RUFDSSxhQUFBO0VBQ0EseUJBQUE7RUFDQSxjQUFBO0VBQ0EsZ0JBQUE7QUNpQ2hCO0FEOUJRO0VBQ0ksZUFBQTtFQUNBLFdBQUE7QUNnQ1o7QUQ5QlE7RUFDSSxjQUFBO0VBQ0EsbUJBQUE7RUFDQSxtQkFBQTtBQ2dDWiIsImZpbGUiOiJzcmMvYXBwL2Nvcm9uYS9jb3JvbmEtZGFzaGJvYXJkL2Nvcm9uYS1kYXNoYm9hcmQuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJAaW1wb3J0ICdtaXhpbnMnO1xuXG46aG9zdCB7XG4gICAgQGluY2x1ZGUgYmFzZS1jb3JvbmEtZGFzaGJvYXJkO1xufVxuIiwiQGltcG9ydCAndmFyaWFibGVzJztcblxuQG1peGluIGJhc2UtY29yb25hLWRhc2hib2FyZCB7XG4gICAgZGlzcGxheTogYmxvY2s7XG4gICAgcGFkZGluZy1ib3R0b206IDJyZW07XG4gICAgLmNoYXJ0LWNvbnRhaW5lciB7XG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICAgIC5jaGFydC1oZWFkZXIge1xuICAgICAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgICAgcGFkZGluZzogMCAxLjVyZW07XG4gICAgICAgICAgICBhbGlnbi1pdGVtczogZmxleC1lbmQ7XG4gICAgICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuXG4gICAgICAgICAgICAucmFkaW8tYnV0dG9uLWNvbnRhaW5lcntcbiAgICAgICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICAgICAgICAgICAganVzdGlmeS1jb250ZW50OiBmbGV4LWVuZDtcbiAgICAgICAgICAgICAgICBmbGV4LXdyYXA6IHdyYXA7XG5cbiAgICAgICAgICAgICAgICAucmFkaW8tYnV0dG9ucyB7XG4gICAgICAgICAgICAgICAgICAgIEBpbmNsdWRlIHJhZGlvLWJ1dHRvbi1jb250YWluZXI7XG4gICAgICAgICAgICAgICAgICAgICY6bm90KDpmaXJzdC1jaGlsZCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgbWFyZ2luLWxlZnQ6IDFyZW07XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgJi5jaGFydCB7XG4gICAgICAgICAgICAgICAgICAgICAgICAucmFkaW8tYnV0dG9uIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBtaW4td2lkdGg6IGF1dG87XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcGFkZGluZzogM3B4O1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAubWF0ZXJpYWwtaWNvbnMge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBmbGV4OiAxIDAgYXV0bztcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZm9udC1zaXplOiAxLjI1cmVtO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAucmFkaW8tYnV0dG9uIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIG1hcmdpbi10b3A6IDAuNXJlbTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGR3dS1zdGF0LXZpZXdlciB7XG4gICAgICAgICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtZW5kO1xuICAgICAgICAgICAgICAgIGZsZXg6IDEgMCBhdXRvO1xuICAgICAgICAgICAgICAgIG1hcmdpbi10b3A6IDFyZW07XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgLm92ZXJ2aWV3LmNoYXJ0IHtcbiAgICAgICAgICAgIGhlaWdodDogMTIuNXJlbTtcbiAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICB9XG4gICAgICAgIGR3dS1jaGFydC1sZWdlbmQge1xuICAgICAgICAgICAgZmxleDogMCAwIGF1dG87XG4gICAgICAgICAgICBtYXJnaW4tdG9wOiAwLjI1cmVtO1xuICAgICAgICAgICAgbWFyZ2luLWJvdHRvbTogMnJlbTtcbiAgICAgICAgfVxuICAgIH1cbn1cblxuQG1peGluIHJhZGlvLWJ1dHRvbi1jb250YWluZXIge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgLnJhZGlvLWJ1dHRvbiB7XG4gICAgICAgIEBpbmNsdWRlIGxpZ2h0LW1pbmktYnV0dG9uO1xuICAgICAgICBAaW5jbHVkZSBzaGFkb3c7XG4gICAgICAgICY6Zmlyc3QtY2hpbGQge1xuICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogNXB4IDAgMCA1cHg7XG4gICAgICAgIH1cbiAgICAgICAgJjpsYXN0LWNoaWxkIHtcbiAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDAgNXB4IDVweCAwO1xuICAgICAgICB9XG4gICAgfVxufVxuXG5AbWl4aW4gc2hhZG93IHtcbiAgICB0cmFuc2l0aW9uLWR1cmF0aW9uOiBib3gtc2hhZG93IDI1bXMsIHRyYW5zZm9ybSwgMjVtcztcbiAgICBib3gtc2hhZG93OiAxcHggMXB4IDJweCAwICRsaWdodGVyLWdyYXk7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDApO1xuICAgICY6YWN0aXZlIHtcbiAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDFweCk7XG4gICAgICAgIGJveC1zaGFkb3c6IG5vbmU7XG4gICAgfVxuICAgICYuYWN0aXZlIHtcbiAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDFweCk7XG4gICAgICAgIGJveC1zaGFkb3c6IG5vbmU7XG4gICAgfVxufVxuXG5AbWl4aW4gcmVzcG9uc2l2ZS1wYWdlIHtcbiAgICBAbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA3NTBweCkge1xuICAgICAgICBkaXYucGFnZS1jb250YWluZXIge1xuICAgICAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICAgICAgICAgIC5sZWZ0LXNpZGUge1xuICAgICAgICAgICAgICAgIGZsZXg6IDAgMCBhdXRvO1xuICAgICAgICAgICAgICAgIGhlaWdodDogMTMuMjVyZW07XG4gICAgICAgICAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgICAgICAgICAgbWF4LXdpZHRoOiBub25lO1xuICAgICAgICAgICAgICAgIC8vIG1pbi13aWR0aDogbm9uZTtcbiAgICAgICAgICAgICAgICB0cmFuc2l0aW9uOiBoZWlnaHQgNTBtcztcbiAgICAgICAgICAgICAgICAmLmV4cGFuZGVkIHtcbiAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiA4NSU7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIC5leHBhbmRlciB7XG4gICAgICAgICAgICAgICAgICAgIEBpbmNsdWRlIGRhcmstdGhlbWU7XG4gICAgICAgICAgICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgICAgICAgICAgICAgICAgYm90dG9tOiAwO1xuICAgICAgICAgICAgICAgICAgICBsZWZ0OiA1MCU7XG4gICAgICAgICAgICAgICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgtNTAlKTtcbiAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDMuNXJlbTtcbiAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiAxcmVtO1xuICAgICAgICAgICAgICAgICAgICBib3JkZXI6IDFweCBzb2xpZCAkbW9zcy1ncmVlbjtcbiAgICAgICAgICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogNXB4IDVweCAwIDAgO1xuICAgICAgICAgICAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgICAgICAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAgICAgICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgICAgICAgICAgICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgICAgICAgICAgICAgICAgIC5leHBhbmRlci1pY29uIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMTZweDtcbiAgICAgICAgICAgICAgICAgICAgICAgICYuZmxpcHBlZCB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdHJhbnNmb3JtOiByb3RhdGUoMTgwZGVnKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuICAgIC5wYWdlLWNvbnRhaW5lciB7XG4gICAgICAgIGhlaWdodDogMTAwJTtcbiAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XG5cbiAgICAgICAgLmxlZnQtc2lkZSB7XG4gICAgICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgICAgICAgICBmbGV4OiAxIDEgMDtcbiAgICAgICAgICAgIG92ZXJmbG93OiBoaWRkZW47XG4gICAgICAgICAgICBtYXgtd2lkdGg6IDI3LjUlO1xuICAgICAgICAgICAgbWluLXdpZHRoOiAyMHJlbTtcbiAgICAgICAgICAgIC5leHBhbmRlciB7XG4gICAgICAgICAgICAgICAgZGlzcGxheTogbm9uZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICAucmlnaHQtc2lkZSB7XG4gICAgICAgICAgICBmbGV4OiAxIDEgMDtcbiAgICAgICAgICAgIG92ZXJmbG93OiBhdXRvO1xuICAgICAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgICAgICB9XG4gICAgfVxuXG59XG5AbWl4aW4gbGlnaHQtbWluaS1idXR0b24ge1xuICAgIEBpbmNsdWRlIGxpZ2h0LXRoZW1lO1xuICAgIEBpbmNsdWRlIGJ1dHRvbi14cztcbn1cblxuQG1peGluIGxpZ2h0LXNtYWxsLWJ1dHRvbiB7XG4gICAgQGluY2x1ZGUgbGlnaHQtdGhlbWU7XG4gICAgQGluY2x1ZGUgYnV0dG9uLXNtO1xufVxuXG5AbWl4aW4gZGFyay1idXR0b24ge1xuICAgIEBpbmNsdWRlIGRhcmstdGhlbWU7XG4gICAgQGluY2x1ZGUgYnV0dG9uLW1kO1xufVxuXG5AbWl4aW4gYnV0dG9uLXhzIHtcbiAgICBtaW4td2lkdGg6IDJyZW07XG4gICAgcGFkZGluZzogMC4yNXJlbSAwLjVyZW07XG4gICAgZm9udC1zaXplOiAxcmVtO1xuICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgb3V0bGluZTogbm9uZTtcbiAgICB3aGl0ZS1zcGFjZTogbm93cmFwO1xuICAgIHVzZXItc2VsZWN0OiBub25lO1xufVxuXG5AbWl4aW4gYnV0dG9uLXNtIHtcbiAgICBtaW4td2lkdGg6IDNyZW07XG4gICAgcGFkZGluZzogMC4yNXJlbSAwLjVyZW07XG4gICAgY3Vyc29yOiBwb2ludGVyO1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICBvdXRsaW5lOiBub25lO1xuICAgIHdoaXRlLXNwYWNlOiBub3dyYXA7XG4gICAgdXNlci1zZWxlY3Q6IG5vbmU7XG59XG5cbkBtaXhpbiBidXR0b24tbWQge1xuICAgIHdpZHRoOiA4cmVtO1xuICAgIHBhZGRpbmc6IDAuNXJlbTtcbiAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIG91dGxpbmU6IG5vbmU7XG4gICAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcbiAgICB1c2VyLXNlbGVjdDogbm9uZTtcbn1cblxuQG1peGluIGxpZ2h0LXRoZW1lIHtcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogJGVnZ3NoZWxsLWRhcms7XG4gICAgJjpob3ZlciB7XG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6ICRsYXVyZWwtZ3JlZW47XG4gICAgfVxuICAgICYuYWN0aXZlIHtcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogJG9saXZlLWdyZWVuO1xuICAgICAgICBjb2xvcjogJGxpZ2h0ZXN0LWdyZWVuO1xuICAgIH1cbn1cblxuQG1peGluIGRhcmstdGhlbWUge1xuICAgIGJhY2tncm91bmQtY29sb3I6ICRibGFjay1vbGl2ZTtcbiAgICBjb2xvcjogJGxpZ2h0ZXN0LWdyZWVuO1xuICAgICY6aG92ZXIge1xuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkYXJteS1ncmVlbjtcbiAgICAgICAgY29sb3I6ICRsaWdodGVzdC1ncmVlbjtcbiAgICB9XG4gICAgJi5hY3RpdmUge1xuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkb2xpdmUtZ3JlZW47XG4gICAgICAgIGNvbG9yOiAkbGlnaHRlc3QtZ3JlZW47XG4gICAgfVxufVxuXG5AbWl4aW4gdG9wLW5hdi1wYWdlIHtcbiAgICBoZWlnaHQ6IDEwMCU7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgIC5tYWluLWNvbnRlbnQge1xuICAgICAgICBmbGV4OiAxIDEgMDtcbiAgICAgICAgb3ZlcmZsb3c6IGF1dG87XG4gICAgfVxufVxuXG5AbWl4aW4gcmVzcG9uZC10bygkbWVkaWEpIHtcbiAgQGlmICRtZWRpYSA9PSBzbWFsbCB7XG4gICAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiAkYnJlYWstc21hbGwpIHsgQGNvbnRlbnQ7IH1cbiAgfVxuICBAZWxzZSBpZiAkbWVkaWEgPT0gbWVkaXVtIHtcbiAgICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChtaW4td2lkdGg6ICRicmVhay1zbWFsbCArIDEpIGFuZCAobWF4LXdpZHRoOiAkYnJlYWstbGFyZ2UgLSAxKSB7IEBjb250ZW50OyB9XG4gIH1cbiAgQGVsc2UgaWYgJG1lZGlhID09IHdpZGUge1xuICAgIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1pbi13aWR0aDogJGJyZWFrLWxhcmdlKSB7IEBjb250ZW50OyB9XG4gIH1cbn1cbiIsIjpob3N0IHtcbiAgZGlzcGxheTogYmxvY2s7XG4gIHBhZGRpbmctYm90dG9tOiAycmVtO1xufVxuOmhvc3QgLmNoYXJ0LWNvbnRhaW5lciB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG59XG46aG9zdCAuY2hhcnQtY29udGFpbmVyIC5jaGFydC1oZWFkZXIge1xuICB3aWR0aDogMTAwJTtcbiAgZGlzcGxheTogZmxleDtcbiAgcGFkZGluZzogMCAxLjVyZW07XG4gIGFsaWduLWl0ZW1zOiBmbGV4LWVuZDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbn1cbjpob3N0IC5jaGFydC1jb250YWluZXIgLmNoYXJ0LWhlYWRlciAucmFkaW8tYnV0dG9uLWNvbnRhaW5lciB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGp1c3RpZnktY29udGVudDogZmxleC1lbmQ7XG4gIGZsZXgtd3JhcDogd3JhcDtcbn1cbjpob3N0IC5jaGFydC1jb250YWluZXIgLmNoYXJ0LWhlYWRlciAucmFkaW8tYnV0dG9uLWNvbnRhaW5lciAucmFkaW8tYnV0dG9ucyB7XG4gIGRpc3BsYXk6IGZsZXg7XG59XG46aG9zdCAuY2hhcnQtY29udGFpbmVyIC5jaGFydC1oZWFkZXIgLnJhZGlvLWJ1dHRvbi1jb250YWluZXIgLnJhZGlvLWJ1dHRvbnMgLnJhZGlvLWJ1dHRvbiB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNFQUU2REE7XG4gIG1pbi13aWR0aDogMnJlbTtcbiAgcGFkZGluZzogMC4yNXJlbSAwLjVyZW07XG4gIGZvbnQtc2l6ZTogMXJlbTtcbiAgY3Vyc29yOiBwb2ludGVyO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIG91dGxpbmU6IG5vbmU7XG4gIHdoaXRlLXNwYWNlOiBub3dyYXA7XG4gIHVzZXItc2VsZWN0OiBub25lO1xuICB0cmFuc2l0aW9uLWR1cmF0aW9uOiBib3gtc2hhZG93IDI1bXMsIHRyYW5zZm9ybSwgMjVtcztcbiAgYm94LXNoYWRvdzogMXB4IDFweCAycHggMCAjOUQ5Qjk5O1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMCk7XG59XG46aG9zdCAuY2hhcnQtY29udGFpbmVyIC5jaGFydC1oZWFkZXIgLnJhZGlvLWJ1dHRvbi1jb250YWluZXIgLnJhZGlvLWJ1dHRvbnMgLnJhZGlvLWJ1dHRvbjpob3ZlciB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNCQUMzOUY7XG59XG46aG9zdCAuY2hhcnQtY29udGFpbmVyIC5jaGFydC1oZWFkZXIgLnJhZGlvLWJ1dHRvbi1jb250YWluZXIgLnJhZGlvLWJ1dHRvbnMgLnJhZGlvLWJ1dHRvbi5hY3RpdmUge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjNzA4MjM4O1xuICBjb2xvcjogI0ZDRkNGOTtcbn1cbjpob3N0IC5jaGFydC1jb250YWluZXIgLmNoYXJ0LWhlYWRlciAucmFkaW8tYnV0dG9uLWNvbnRhaW5lciAucmFkaW8tYnV0dG9ucyAucmFkaW8tYnV0dG9uOmFjdGl2ZSB7XG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgxcHgpO1xuICBib3gtc2hhZG93OiBub25lO1xufVxuOmhvc3QgLmNoYXJ0LWNvbnRhaW5lciAuY2hhcnQtaGVhZGVyIC5yYWRpby1idXR0b24tY29udGFpbmVyIC5yYWRpby1idXR0b25zIC5yYWRpby1idXR0b24uYWN0aXZlIHtcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDFweCk7XG4gIGJveC1zaGFkb3c6IG5vbmU7XG59XG46aG9zdCAuY2hhcnQtY29udGFpbmVyIC5jaGFydC1oZWFkZXIgLnJhZGlvLWJ1dHRvbi1jb250YWluZXIgLnJhZGlvLWJ1dHRvbnMgLnJhZGlvLWJ1dHRvbjpmaXJzdC1jaGlsZCB7XG4gIGJvcmRlci1yYWRpdXM6IDVweCAwIDAgNXB4O1xufVxuOmhvc3QgLmNoYXJ0LWNvbnRhaW5lciAuY2hhcnQtaGVhZGVyIC5yYWRpby1idXR0b24tY29udGFpbmVyIC5yYWRpby1idXR0b25zIC5yYWRpby1idXR0b246bGFzdC1jaGlsZCB7XG4gIGJvcmRlci1yYWRpdXM6IDAgNXB4IDVweCAwO1xufVxuOmhvc3QgLmNoYXJ0LWNvbnRhaW5lciAuY2hhcnQtaGVhZGVyIC5yYWRpby1idXR0b24tY29udGFpbmVyIC5yYWRpby1idXR0b25zOm5vdCg6Zmlyc3QtY2hpbGQpIHtcbiAgbWFyZ2luLWxlZnQ6IDFyZW07XG59XG46aG9zdCAuY2hhcnQtY29udGFpbmVyIC5jaGFydC1oZWFkZXIgLnJhZGlvLWJ1dHRvbi1jb250YWluZXIgLnJhZGlvLWJ1dHRvbnMuY2hhcnQgLnJhZGlvLWJ1dHRvbiB7XG4gIG1pbi13aWR0aDogYXV0bztcbiAgcGFkZGluZzogM3B4O1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xufVxuOmhvc3QgLmNoYXJ0LWNvbnRhaW5lciAuY2hhcnQtaGVhZGVyIC5yYWRpby1idXR0b24tY29udGFpbmVyIC5yYWRpby1idXR0b25zLmNoYXJ0IC5yYWRpby1idXR0b24gLm1hdGVyaWFsLWljb25zIHtcbiAgZmxleDogMSAwIGF1dG87XG4gIGZvbnQtc2l6ZTogMS4yNXJlbTtcbn1cbjpob3N0IC5jaGFydC1jb250YWluZXIgLmNoYXJ0LWhlYWRlciAucmFkaW8tYnV0dG9uLWNvbnRhaW5lciAucmFkaW8tYnV0dG9ucyAucmFkaW8tYnV0dG9uIHtcbiAgbWFyZ2luLXRvcDogMC41cmVtO1xufVxuOmhvc3QgLmNoYXJ0LWNvbnRhaW5lciAuY2hhcnQtaGVhZGVyIGR3dS1zdGF0LXZpZXdlciB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogZmxleC1lbmQ7XG4gIGZsZXg6IDEgMCBhdXRvO1xuICBtYXJnaW4tdG9wOiAxcmVtO1xufVxuOmhvc3QgLmNoYXJ0LWNvbnRhaW5lciAub3ZlcnZpZXcuY2hhcnQge1xuICBoZWlnaHQ6IDEyLjVyZW07XG4gIHdpZHRoOiAxMDAlO1xufVxuOmhvc3QgLmNoYXJ0LWNvbnRhaW5lciBkd3UtY2hhcnQtbGVnZW5kIHtcbiAgZmxleDogMCAwIGF1dG87XG4gIG1hcmdpbi10b3A6IDAuMjVyZW07XG4gIG1hcmdpbi1ib3R0b206IDJyZW07XG59IiwiXG4kZGFyay1ncmVlbjogIzI5MkUxMjtcbiRhcm15LWdyZWVuOiAjNEI1MzIwO1xuJG9saXZlLWdyZWVuOiAjNzA4MjM4O1xuJG1vc3MtZ3JlZW46ICM4QTlBNUI7XG4kbGF1cmVsLWdyZWVuOiAjQkFDMzlGO1xuXG4kc2F0dXJhdGVkLW9saXZlOiAjNzI5OTAwO1xuJHNhdHVyYXRlZC1ibHVlOiAjMTY0RUI3O1xuXG4vLyBuaWNlIGZvciB0ZXh0IGFnYWluc3QgZGFyayBiYWNrZ3JvdW5kXG4kbGlnaHQtZ3JlZW46ICNGNEY3RUE7XG4kbGlnaHRlc3QtZ3JlZW46ICNGQ0ZDRjk7XG5cbi8vIFVzZWQgZm9yIGZpbGUgc2VsZWN0b3JcbiRlZ2dzaGVsbC1kYXJrZXI6ICNEREQ5Q0Y7XG4kZWdnc2hlbGwtZGFyazogI0VBRTZEQTtcbiRlZ2dzaGVsbDogI0VGRUJERjtcbiRlZ2dzaGVsbC1saWdodDogI0YyRUVFMTtcblxuLy8gZ3JheXNcbiRiYXNpY2FsbHktYmxhY2s6ICMyMDIxMjQ7XG4kYmxhY2stb2xpdmU6ICMzRjQwMzg7XG4kZ3Jhbml0ZTogIzY1NjM1RjtcbiRsaWdodGVyLWdyYXk6ICM5RDlCOTk7XG4kd2hpdGU6ICNmZmY7XG5cbiRnb2xkOiAjRDZCOTAyO1xuJHN0YXItYmx1ZTogIzFENjJDNDtcblxuJGJyZWFrLXNtYWxsOiA1NTBweDtcbiRicmVhay1tZDogODAwcHg7XG4kYnJlYWstbGFyZ2U6IDEwMjRweDtcbiJdfQ== */");

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
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! lodash */ "./node_modules/lodash/lodash.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var d3__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! d3 */ "./node_modules/d3/index.js");
/* harmony import */ var _models_index__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../models/index */ "./src/app/corona/models/index.ts");
/* harmony import */ var _src_app_utils_index__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @src/app/utils/index */ "./src/app/utils/index.ts");






var CoronaDashboardComponent = /** @class */ (function () {
    function CoronaDashboardComponent() {
        var _a, _b;
        this.disabledBarKeys = new Set();
        this.disabledBarKeysChange = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.disabledNormalKeys = new Set();
        this.disabledNormalKeysChange = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.isViewingNormalized = false;
        this.isViewingNormalizedChange = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.isViewingLineChart = false;
        this.isViewingLineChartChange = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.coronaExtractor = new _models_index__WEBPACK_IMPORTED_MODULE_4__["CoronaDataExtractor"]();
        this.hoverIndex = 0;
        this.CoronaKeys = _models_index__WEBPACK_IMPORTED_MODULE_4__["CoronaKeys"];
        this.NormalKeys = _models_index__WEBPACK_IMPORTED_MODULE_4__["NormalKeys"];
        this.Labels = _models_index__WEBPACK_IMPORTED_MODULE_4__["Labels"];
        this.coronaKeys = [
            _models_index__WEBPACK_IMPORTED_MODULE_4__["CoronaKeys"].NEW,
            _models_index__WEBPACK_IMPORTED_MODULE_4__["CoronaKeys"].ACTIVE,
            _models_index__WEBPACK_IMPORTED_MODULE_4__["CoronaKeys"].RECOVERED,
            _models_index__WEBPACK_IMPORTED_MODULE_4__["CoronaKeys"].DEATHS,
        ];
        this.coronaViewKeys = [
            _models_index__WEBPACK_IMPORTED_MODULE_4__["CoronaKeys"].CASES,
            _models_index__WEBPACK_IMPORTED_MODULE_4__["CoronaKeys"].TIMESTAMP,
            _models_index__WEBPACK_IMPORTED_MODULE_4__["CoronaKeys"].NEW,
            _models_index__WEBPACK_IMPORTED_MODULE_4__["CoronaKeys"].ACTIVE,
            _models_index__WEBPACK_IMPORTED_MODULE_4__["CoronaKeys"].RECOVERED,
            _models_index__WEBPACK_IMPORTED_MODULE_4__["CoronaKeys"].DEATHS,
        ];
        this.perMilKeys = [
            _models_index__WEBPACK_IMPORTED_MODULE_4__["NormalKeys"].NEW,
            _models_index__WEBPACK_IMPORTED_MODULE_4__["NormalKeys"].ACTIVE,
            _models_index__WEBPACK_IMPORTED_MODULE_4__["NormalKeys"].RECOVERED,
            _models_index__WEBPACK_IMPORTED_MODULE_4__["NormalKeys"].DEATHS,
        ];
        this.perMilViewKeys = [
            _models_index__WEBPACK_IMPORTED_MODULE_4__["NormalKeys"].CASES,
            _models_index__WEBPACK_IMPORTED_MODULE_4__["CoronaKeys"].TIMESTAMP,
            _models_index__WEBPACK_IMPORTED_MODULE_4__["NormalKeys"].NEW,
            _models_index__WEBPACK_IMPORTED_MODULE_4__["NormalKeys"].ACTIVE,
            _models_index__WEBPACK_IMPORTED_MODULE_4__["NormalKeys"].RECOVERED,
            _models_index__WEBPACK_IMPORTED_MODULE_4__["NormalKeys"].DEATHS,
        ];
        this.coronaColorsByKey = (_a = {},
            _a[_models_index__WEBPACK_IMPORTED_MODULE_4__["CoronaKeys"].NEW] = '#ED9797',
            _a[_models_index__WEBPACK_IMPORTED_MODULE_4__["CoronaKeys"].ACTIVE] = '#AD3E3E',
            _a[_models_index__WEBPACK_IMPORTED_MODULE_4__["CoronaKeys"].RECOVERED] = '#34A2AA',
            _a[_models_index__WEBPACK_IMPORTED_MODULE_4__["CoronaKeys"].DEATHS] = '#2B1919',
            _a[_models_index__WEBPACK_IMPORTED_MODULE_4__["NormalKeys"].NEW] = '#ED9797',
            _a[_models_index__WEBPACK_IMPORTED_MODULE_4__["NormalKeys"].ACTIVE] = '#AD3E3E',
            _a[_models_index__WEBPACK_IMPORTED_MODULE_4__["NormalKeys"].RECOVERED] = '#34A2AA',
            _a[_models_index__WEBPACK_IMPORTED_MODULE_4__["NormalKeys"].DEATHS] = '#2B1919',
            _a[_models_index__WEBPACK_IMPORTED_MODULE_4__["NormalKeys"].CASES] = '#D6B902',
            _a[_models_index__WEBPACK_IMPORTED_MODULE_4__["NormalKeys"].R] = '#65635F',
            _a[_models_index__WEBPACK_IMPORTED_MODULE_4__["NormalKeys"].R_AVG] = '#1D62C4',
            _a);
        this.normalKeys = [
            _models_index__WEBPACK_IMPORTED_MODULE_4__["NormalKeys"].R,
            _models_index__WEBPACK_IMPORTED_MODULE_4__["NormalKeys"].R_AVG,
        ];
        this.normalizedViewKeys = [
            _models_index__WEBPACK_IMPORTED_MODULE_4__["NormalKeys"].R_AVG,
            _models_index__WEBPACK_IMPORTED_MODULE_4__["NormalKeys"].R,
            _models_index__WEBPACK_IMPORTED_MODULE_4__["CoronaKeys"].TIMESTAMP,
            _models_index__WEBPACK_IMPORTED_MODULE_4__["CoronaKeys"].CASES,
        ];
        this.formattersByKeys = (_b = {},
            _b[_models_index__WEBPACK_IMPORTED_MODULE_4__["NormalKeys"].R_AVG] = this.toPercentage,
            _b[_models_index__WEBPACK_IMPORTED_MODULE_4__["NormalKeys"].R] = this.toPercentage,
            _b[_models_index__WEBPACK_IMPORTED_MODULE_4__["CoronaKeys"].TIMESTAMP] = d3__WEBPACK_IMPORTED_MODULE_3__["timeFormat"]('%-m/%e'),
            _b);
    }
    CoronaDashboardComponent.prototype.ngOnChanges = function (changes) {
        if (changes.coronaFile && this.coronaFile) {
            this.coronaData = this.coronaExtractor.clean(this.coronaFile, this.coronaFile.population);
            this.hoverIndex = this.coronaData.length - 1;
        }
        if (changes.lockdownInfo) {
            if (this.lockdownInfo) {
                var startDate = Object(_src_app_utils_index__WEBPACK_IMPORTED_MODULE_5__["getDateFromStr"])(this.lockdownInfo.startDate);
                var tenDaysLater = new Date(startDate);
                tenDaysLater.setDate(startDate.getDate() + 10);
                this.indicators = this.lockdownInfo && [
                    {
                        value: +startDate,
                        label: 'Start Lockdown',
                        color: '#164EB7',
                    },
                    {
                        value: +tenDaysLater,
                        label: '10 days of Lockdown',
                        color: '#729900',
                    },
                ];
            }
            else {
                this.indicators = undefined;
            }
        }
    };
    CoronaDashboardComponent.prototype.onChangeNormalized = function (isViewingNormalized) {
        this.disabledBarKeysChange.emit(new Set());
        this.isViewingNormalized = isViewingNormalized;
        this.isViewingNormalizedChange.emit(isViewingNormalized);
    };
    CoronaDashboardComponent.prototype.onChangeViewingLineChart = function (isViewingLineChart) {
        this.isViewingLineChart = isViewingLineChart;
        this.isViewingLineChartChange.emit(isViewingLineChart);
    };
    CoronaDashboardComponent.prototype.toPercentage = function (d) {
        return Object(lodash__WEBPACK_IMPORTED_MODULE_2__["round"])(d * 100, 2) + "%";
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
    ], CoronaDashboardComponent.prototype, "lockdownInfo", void 0);
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
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
    ], CoronaDashboardComponent.prototype, "isViewingNormalized", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])()
    ], CoronaDashboardComponent.prototype, "isViewingNormalizedChange", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
    ], CoronaDashboardComponent.prototype, "isViewingLineChart", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])()
    ], CoronaDashboardComponent.prototype, "isViewingLineChartChange", void 0);
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
/* harmony default export */ __webpack_exports__["default"] = (":host {\n  display: block;\n  position: relative;\n}\n:host .loading-overlay {\n  position: absolute;\n  top: 0;\n  width: 100%;\n  height: 100%;\n  pointer-events: none;\n  transition: background-color cubic-bezier(0.1, 0.5, 0.1, 0.5) 100ms;\n  background-color: rgba(255, 255, 255, 0);\n}\n:host .loading-overlay.active {\n  background-color: rgba(255, 255, 255, 0.65);\n}\n.header {\n  display: flex;\n  padding: 0.75rem 1rem 0.25rem;\n  flex-direction: column;\n  font-size: 1rem;\n}\n.header .header-main {\n  display: flex;\n  align-items: center;\n}\n.header .header-main .download-link {\n  margin-left: 0.25rem;\n  text-decoration: none;\n}\n.header .header-main .download-link .download-icon {\n  font-size: 1.25rem;\n  color: #65635F;\n  display: block;\n}\n.header .population {\n  font-size: 0.75rem;\n  color: #65635F;\n  display: flex;\n}\n.header .population .population-count {\n  margin-left: 0.25rem;\n}\n.loader {\n  visibility: hidden;\n  margin-left: 0.25rem;\n}\n.loader.visible {\n  visibility: visible;\n}\n.loader .hour-glass {\n  font-size: 1rem;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9hZG1pbi9wcm9qZWN0cy9kYXd1LWhvbWUvc3JjL2FwcC9jb3JvbmEvY29yb25hLWZpbGUtdmlld2VyL2Nvcm9uYS1maWxlLXZpZXdlci5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvY29yb25hL2Nvcm9uYS1maWxlLXZpZXdlci9jb3JvbmEtZmlsZS12aWV3ZXIuY29tcG9uZW50LnNjc3MiLCIvVXNlcnMvYWRtaW4vcHJvamVjdHMvZGF3dS1ob21lL3NyYy9zdHlsZXMvdmFyaWFibGVzLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBRUE7RUFDSSxjQUFBO0VBQ0Esa0JBQUE7QUNESjtBREVJO0VBQ0ksa0JBQUE7RUFDQSxNQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSxvQkFBQTtFQUNBLG1FQUFBO0VBQ0Esd0NBQUE7QUNBUjtBRENRO0VBQ0ksMkNBQUE7QUNDWjtBRElBO0VBQ0ksYUFBQTtFQUNBLDZCQUFBO0VBQ0Esc0JBQUE7RUFDQSxlQUFBO0FDREo7QURFSTtFQUNJLGFBQUE7RUFDQSxtQkFBQTtBQ0FSO0FEQ1E7RUFDSSxvQkFBQTtFQUNBLHFCQUFBO0FDQ1o7QURBWTtFQUNJLGtCQUFBO0VBQ0EsY0VUTjtFRlVNLGNBQUE7QUNFaEI7QURFSTtFQUNJLGtCQUFBO0VBQ0EsY0VoQkU7RUZpQkYsYUFBQTtBQ0FSO0FEQ1E7RUFDSSxvQkFBQTtBQ0NaO0FESUE7RUFDSSxrQkFBQTtFQUNBLG9CQUFBO0FDREo7QURFSTtFQUNJLG1CQUFBO0FDQVI7QURFSTtFQUNJLGVBQUE7QUNBUiIsImZpbGUiOiJzcmMvYXBwL2Nvcm9uYS9jb3JvbmEtZmlsZS12aWV3ZXIvY29yb25hLWZpbGUtdmlld2VyLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiQGltcG9ydCAnbWl4aW5zJztcblxuOmhvc3Qge1xuICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICAubG9hZGluZy1vdmVybGF5IHtcbiAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgICB0b3A6IDA7XG4gICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICBoZWlnaHQ6IDEwMCU7XG4gICAgICAgIHBvaW50ZXItZXZlbnRzOiBub25lO1xuICAgICAgICB0cmFuc2l0aW9uOiBiYWNrZ3JvdW5kLWNvbG9yIGN1YmljLWJlemllcigwLjEsIDAuNSwgMC4xLCAwLjUpIDEwMG1zO1xuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDApO1xuICAgICAgICAmLmFjdGl2ZSB7XG4gICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuNjUpO1xuICAgICAgICB9XG4gICAgfVxufVxuXG4uaGVhZGVyIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIHBhZGRpbmc6IDAuNzVyZW0gMXJlbSAwLjI1cmVtO1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgZm9udC1zaXplOiAxcmVtO1xuICAgIC5oZWFkZXItbWFpbiB7XG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICAgIC5kb3dubG9hZC1saW5rIHtcbiAgICAgICAgICAgIG1hcmdpbi1sZWZ0OiAwLjI1cmVtO1xuICAgICAgICAgICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICAgICAgICAgICAgLmRvd25sb2FkLWljb24ge1xuICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMS4yNXJlbTtcbiAgICAgICAgICAgICAgICBjb2xvcjogJGdyYW5pdGU7XG4gICAgICAgICAgICAgICAgZGlzcGxheTogYmxvY2s7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG4gICAgLnBvcHVsYXRpb24ge1xuICAgICAgICBmb250LXNpemU6IDAuNzVyZW07XG4gICAgICAgIGNvbG9yOiAkZ3Jhbml0ZTtcbiAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgLnBvcHVsYXRpb24tY291bnQge1xuICAgICAgICAgICAgbWFyZ2luLWxlZnQ6IDAuMjVyZW07XG4gICAgICAgIH1cbiAgICB9XG59XG5cbi5sb2FkZXIge1xuICAgIHZpc2liaWxpdHk6IGhpZGRlbjtcbiAgICBtYXJnaW4tbGVmdDogMC4yNXJlbTtcbiAgICAmLnZpc2libGUge1xuICAgICAgICB2aXNpYmlsaXR5OiB2aXNpYmxlO1xuICAgIH1cbiAgICAuaG91ci1nbGFzcyB7XG4gICAgICAgIGZvbnQtc2l6ZTogMXJlbTtcbiAgICB9XG59XG4iLCI6aG9zdCB7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG59XG46aG9zdCAubG9hZGluZy1vdmVybGF5IHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IDA7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDEwMCU7XG4gIHBvaW50ZXItZXZlbnRzOiBub25lO1xuICB0cmFuc2l0aW9uOiBiYWNrZ3JvdW5kLWNvbG9yIGN1YmljLWJlemllcigwLjEsIDAuNSwgMC4xLCAwLjUpIDEwMG1zO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDApO1xufVxuOmhvc3QgLmxvYWRpbmctb3ZlcmxheS5hY3RpdmUge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuNjUpO1xufVxuXG4uaGVhZGVyIHtcbiAgZGlzcGxheTogZmxleDtcbiAgcGFkZGluZzogMC43NXJlbSAxcmVtIDAuMjVyZW07XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIGZvbnQtc2l6ZTogMXJlbTtcbn1cbi5oZWFkZXIgLmhlYWRlci1tYWluIHtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbn1cbi5oZWFkZXIgLmhlYWRlci1tYWluIC5kb3dubG9hZC1saW5rIHtcbiAgbWFyZ2luLWxlZnQ6IDAuMjVyZW07XG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbn1cbi5oZWFkZXIgLmhlYWRlci1tYWluIC5kb3dubG9hZC1saW5rIC5kb3dubG9hZC1pY29uIHtcbiAgZm9udC1zaXplOiAxLjI1cmVtO1xuICBjb2xvcjogIzY1NjM1RjtcbiAgZGlzcGxheTogYmxvY2s7XG59XG4uaGVhZGVyIC5wb3B1bGF0aW9uIHtcbiAgZm9udC1zaXplOiAwLjc1cmVtO1xuICBjb2xvcjogIzY1NjM1RjtcbiAgZGlzcGxheTogZmxleDtcbn1cbi5oZWFkZXIgLnBvcHVsYXRpb24gLnBvcHVsYXRpb24tY291bnQge1xuICBtYXJnaW4tbGVmdDogMC4yNXJlbTtcbn1cblxuLmxvYWRlciB7XG4gIHZpc2liaWxpdHk6IGhpZGRlbjtcbiAgbWFyZ2luLWxlZnQ6IDAuMjVyZW07XG59XG4ubG9hZGVyLnZpc2libGUge1xuICB2aXNpYmlsaXR5OiB2aXNpYmxlO1xufVxuLmxvYWRlciAuaG91ci1nbGFzcyB7XG4gIGZvbnQtc2l6ZTogMXJlbTtcbn0iLCJcbiRkYXJrLWdyZWVuOiAjMjkyRTEyO1xuJGFybXktZ3JlZW46ICM0QjUzMjA7XG4kb2xpdmUtZ3JlZW46ICM3MDgyMzg7XG4kbW9zcy1ncmVlbjogIzhBOUE1QjtcbiRsYXVyZWwtZ3JlZW46ICNCQUMzOUY7XG5cbiRzYXR1cmF0ZWQtb2xpdmU6ICM3Mjk5MDA7XG4kc2F0dXJhdGVkLWJsdWU6ICMxNjRFQjc7XG5cbi8vIG5pY2UgZm9yIHRleHQgYWdhaW5zdCBkYXJrIGJhY2tncm91bmRcbiRsaWdodC1ncmVlbjogI0Y0RjdFQTtcbiRsaWdodGVzdC1ncmVlbjogI0ZDRkNGOTtcblxuLy8gVXNlZCBmb3IgZmlsZSBzZWxlY3RvclxuJGVnZ3NoZWxsLWRhcmtlcjogI0RERDlDRjtcbiRlZ2dzaGVsbC1kYXJrOiAjRUFFNkRBO1xuJGVnZ3NoZWxsOiAjRUZFQkRGO1xuJGVnZ3NoZWxsLWxpZ2h0OiAjRjJFRUUxO1xuXG4vLyBncmF5c1xuJGJhc2ljYWxseS1ibGFjazogIzIwMjEyNDtcbiRibGFjay1vbGl2ZTogIzNGNDAzODtcbiRncmFuaXRlOiAjNjU2MzVGO1xuJGxpZ2h0ZXItZ3JheTogIzlEOUI5OTtcbiR3aGl0ZTogI2ZmZjtcblxuJGdvbGQ6ICNENkI5MDI7XG4kc3Rhci1ibHVlOiAjMUQ2MkM0O1xuXG4kYnJlYWstc21hbGw6IDU1MHB4O1xuJGJyZWFrLW1kOiA4MDBweDtcbiRicmVhay1sYXJnZTogMTAyNHB4O1xuIl19 */");

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
/* harmony import */ var _src_assets_corona_lockdown_data_by_location_json__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @src/assets/corona/lockdown-data-by-location.json */ "./src/assets/corona/lockdown-data-by-location.json");
var _src_assets_corona_lockdown_data_by_location_json__WEBPACK_IMPORTED_MODULE_4___namespace = /*#__PURE__*/__webpack_require__.t(/*! @src/assets/corona/lockdown-data-by-location.json */ "./src/assets/corona/lockdown-data-by-location.json", 1);
/* harmony import */ var _services_corona_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../services/corona.service */ "./src/app/corona/services/corona.service.ts");






var CoronaFileViewerComponent = /** @class */ (function () {
    function CoronaFileViewerComponent(coronaService) {
        var _this = this;
        this.coronaService = coronaService;
        this.isComparing = false;
        this.disabledBarKeys = new Set();
        this.disabledBarKeysChange = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.disabledNormalKeys = new Set();
        this.disabledNormalKeysChange = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.isViewingNormalized = false;
        this.isViewingNormalizedChange = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.isViewingLineChart = false;
        this.isViewingLineChartChange = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.selectedFileIds$ = new rxjs__WEBPACK_IMPORTED_MODULE_2__["BehaviorSubject"](undefined);
        this.locationsByFileId$ = new rxjs__WEBPACK_IMPORTED_MODULE_2__["BehaviorSubject"](undefined);
        this.filesById$ = new rxjs__WEBPACK_IMPORTED_MODULE_2__["BehaviorSubject"](undefined);
        // public fileUrl: string;
        this.lockdownDataByLocation = _src_assets_corona_lockdown_data_by_location_json__WEBPACK_IMPORTED_MODULE_4__;
        // type: [location, fileId][]
        var selectedlocationsWithFileId$ = Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["combineLatest"])(this.selectedFileIds$, this.locationsByFileId$, this.filesById$, function (fileIds, locationsByFileId, filesById) {
            if (!fileIds || !locationsByFileId || !filesById) {
                return;
            }
            var locationsWithFileId = [];
            Array.from(fileIds).forEach(function (fileId) {
                var file = filesById[fileId];
                var location = locationsByFileId[fileId];
                if (location) {
                    locationsWithFileId.push([location, file.id]);
                }
            });
            return locationsWithFileId;
        });
        var coronaFilesWithFileId$ = selectedlocationsWithFileId$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["switchMap"])(function (locationsWithFileId) {
            if (!locationsWithFileId) {
                return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["of"])(undefined);
            }
            var requests$ = locationsWithFileId.map(function (locationWithFileId) {
                return _this.coronaService.getCoronaFileByLocation(locationWithFileId[0]);
            });
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["forkJoin"])(requests$).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (files) {
                return files.map(function (file, index) { return [file, locationsWithFileId[index][1]]; });
            }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["startWith"])(undefined));
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["shareReplay"])(1));
        this.latestCoronaFilesWithFileId$ = coronaFilesWithFileId$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["filter"])(Boolean));
        this.totalPopulation$ = coronaFilesWithFileId$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (coronaFilesWithFileId) {
            if (!coronaFilesWithFileId) {
                return 0;
            }
            return coronaFilesWithFileId.reduce(function (sum, _a) {
                var _b = tslib__WEBPACK_IMPORTED_MODULE_0__["__read"](_a, 2), coronaFile = _b[0], fileId = _b[1];
                return sum + (coronaFile.population || 0);
            }, 0);
        }));
    }
    CoronaFileViewerComponent.prototype.ngOnChanges = function (changes) {
        if (changes.selectedFileIds) {
            this.selectedFileIds$.next(this.selectedFileIds);
        }
        if (changes.locationsByFileId) {
            this.locationsByFileId$.next(this.locationsByFileId);
        }
        if (changes.filesById) {
            this.filesById$.next(this.filesById);
        }
    };
    CoronaFileViewerComponent.prototype.getHeader = function () {
        var fileIds = Array.from(this.selectedFileIds || []);
        if (this.isComparing) {
            return "Comparing " + fileIds.length + " locations";
        }
        return this.filesById && this.filesById[fileIds[0]] && this.filesById[fileIds[0]].label;
        // const labels = fileIds.map((fileId: string) => {
        //     return this.filesById && this.filesById[fileId] && this.filesById[fileId].label;
        // }).filter(Boolean);
        // return labels.join(', ');
    };
    CoronaFileViewerComponent.prototype.getFirstSelectedFileLockdownInfo = function () {
        var fileId = Array.from(this.selectedFileIds || [])[0];
        var location = this.locationsByFileId && this.locationsByFileId[fileId];
        return this.lockdownDataByLocation && this.lockdownDataByLocation[location];
    };
    CoronaFileViewerComponent.ctorParameters = function () { return [
        { type: _services_corona_service__WEBPACK_IMPORTED_MODULE_5__["CoronaService"] }
    ]; };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
    ], CoronaFileViewerComponent.prototype, "selectedFileIds", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
    ], CoronaFileViewerComponent.prototype, "locationsByFileId", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
    ], CoronaFileViewerComponent.prototype, "filesById", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
    ], CoronaFileViewerComponent.prototype, "isComparing", void 0);
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
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
    ], CoronaFileViewerComponent.prototype, "isViewingNormalized", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])()
    ], CoronaFileViewerComponent.prototype, "isViewingNormalizedChange", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
    ], CoronaFileViewerComponent.prototype, "isViewingLineChart", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])()
    ], CoronaFileViewerComponent.prototype, "isViewingLineChartChange", void 0);
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
/* harmony default export */ __webpack_exports__["default"] = ("@media screen and (max-width: 750px) {\n  :host div.page-container {\n    flex-direction: column;\n  }\n  :host div.page-container .left-side {\n    flex: 0 0 auto;\n    height: 13.25rem;\n    width: 100%;\n    max-width: none;\n    transition: height 50ms;\n  }\n  :host div.page-container .left-side.expanded {\n    height: 85%;\n  }\n  :host div.page-container .left-side .expander {\n    background-color: #3F4038;\n    color: #FCFCF9;\n    position: absolute;\n    bottom: 0;\n    left: 50%;\n    transform: translateX(-50%);\n    width: 3.5rem;\n    height: 1rem;\n    border: 1px solid #8A9A5B;\n    border-radius: 5px 5px 0 0;\n    text-align: center;\n    display: flex;\n    justify-content: center;\n    cursor: pointer;\n  }\n  :host div.page-container .left-side .expander:hover {\n    background-color: #4B5320;\n    color: #FCFCF9;\n  }\n  :host div.page-container .left-side .expander.active {\n    background-color: #708238;\n    color: #FCFCF9;\n  }\n  :host div.page-container .left-side .expander .expander-icon {\n    font-size: 16px;\n  }\n  :host div.page-container .left-side .expander .expander-icon.flipped {\n    transform: rotate(180deg);\n  }\n}\n:host .page-container {\n  height: 100%;\n  width: 100%;\n  display: flex;\n}\n:host .page-container .left-side {\n  position: relative;\n  flex: 1 1 0;\n  overflow: hidden;\n  max-width: 27.5%;\n  min-width: 20rem;\n}\n:host .page-container .left-side .expander {\n  display: none;\n}\n:host .page-container .right-side {\n  flex: 1 1 0;\n  overflow: auto;\n  position: relative;\n}\n:host .page-container .left-side {\n  background-color: #DDD9CF;\n  display: flex;\n  flex-direction: column;\n}\n:host .page-container .left-side dwu-file-explorer {\n  flex: 1 0 0;\n}\n:host .page-container .left-side .view-tabs {\n  padding: 0 0.25rem;\n  display: flex;\n}\n:host .page-container .left-side .view-tabs .view-tab {\n  background-color: #EAE6DA;\n  min-width: 3rem;\n  padding: 0.25rem 0.5rem;\n  cursor: pointer;\n  text-align: center;\n  outline: none;\n  white-space: nowrap;\n  -webkit-user-select: none;\n     -moz-user-select: none;\n      -ms-user-select: none;\n          user-select: none;\n  margin: 0 0.25rem;\n  border-radius: 4px 4px 0 0;\n  border: 1px solid #8A9A5B;\n  border-bottom: none;\n  flex: 1 1 0;\n  text-align: center;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n:host .page-container .left-side .view-tabs .view-tab:hover {\n  background-color: #BAC39F;\n}\n:host .page-container .left-side .view-tabs .view-tab.active {\n  background-color: #708238;\n  color: #FCFCF9;\n}\n:host .page-container .left-side .view-tabs .view-tab .star {\n  margin-right: 0.25rem;\n}\n.clickable {\n  padding: 0.25rem;\n  margin: -0.25rem;\n}\n.row-icon {\n  margin-right: 0.25rem;\n}\n.material-icons.star {\n  font-size: 1.25rem;\n  opacity: 0.25;\n}\n.material-icons.star:hover {\n  opacity: 0.5;\n  color: #1D62C4;\n}\n.material-icons.star.active {\n  opacity: 1;\n  color: #1D62C4;\n}\n.material-icons.lock {\n  font-size: 1rem;\n  opacity: 0.5;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9hZG1pbi9wcm9qZWN0cy9kYXd1LWhvbWUvc3JjL3N0eWxlcy9taXhpbnMuc2NzcyIsInNyYy9hcHAvY29yb25hL2Nvcm9uYS5jb21wb25lbnQuc2NzcyIsIi9Vc2Vycy9hZG1pbi9wcm9qZWN0cy9kYXd1LWhvbWUvc3JjL3N0eWxlcy92YXJpYWJsZXMuc2NzcyIsIi9Vc2Vycy9hZG1pbi9wcm9qZWN0cy9kYXd1LWhvbWUvc3JjL2FwcC9jb3JvbmEvY29yb25hLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQTRGSTtFQUNJO0lBQ0ksc0JBQUE7RUMzRlY7RUQ0RlU7SUFDSSxjQUFBO0lBQ0EsZ0JBQUE7SUFDQSxXQUFBO0lBQ0EsZUFBQTtJQUVBLHVCQUFBO0VDM0ZkO0VENEZjO0lBQ0ksV0FBQTtFQzFGbEI7RUQ0RmM7SUEwR1oseUJFN0xVO0lGOExWLGNFeE1hO0lGK0ZHLGtCQUFBO0lBQ0EsU0FBQTtJQUNBLFNBQUE7SUFDQSwyQkFBQTtJQUNBLGFBQUE7SUFDQSxZQUFBO0lBQ0EseUJBQUE7SUFDQSwwQkFBQTtJQUNBLGtCQUFBO0lBQ0EsYUFBQTtJQUNBLHVCQUFBO0lBQ0EsZUFBQTtFQ3pGbEI7RUR3TEU7SUFDSSx5QkVwTks7SUZxTkwsY0UzTVM7RURxQmY7RUR3TEU7SUFDSSx5QkV2Tk07SUZ3Tk4sY0UvTVM7RUR5QmY7RURrRmtCO0lBQ0ksZUFBQTtFQ2hGdEI7RURpRnNCO0lBQ0kseUJBQUE7RUMvRTFCO0FBQ0Y7QURzRkk7RUFDSSxZQUFBO0VBQ0EsV0FBQTtFQUNBLGFBQUE7QUNwRlI7QURzRlE7RUFDSSxrQkFBQTtFQUNBLFdBQUE7RUFDQSxnQkFBQTtFQUNBLGdCQUFBO0VBQ0EsZ0JBQUE7QUNwRlo7QURxRlk7RUFDSSxhQUFBO0FDbkZoQjtBRHNGUTtFQUNJLFdBQUE7RUFDQSxjQUFBO0VBQ0Esa0JBQUE7QUNwRlo7QUUzRFE7RUFDSSx5QkRTTTtFQ1JOLGFBQUE7RUFDQSxzQkFBQTtBRjZEWjtBRTVEWTtFQUNJLFdBQUE7QUY4RGhCO0FFNURZO0VBQ0ksa0JBQUE7RUFDQSxhQUFBO0FGOERoQjtBRTdEZ0I7RUh5TFIseUJFeExRO0VGb0taLGVBQUE7RUFDQSx1QkFBQTtFQUNBLGVBQUE7RUFDQSxrQkFBQTtFQUNBLGFBQUE7RUFDQSxtQkFBQTtFQUNBLHlCQUFBO0tBQUEsc0JBQUE7TUFBQSxxQkFBQTtVQUFBLGlCQUFBO0VHektnQixpQkFBQTtFQUNBLDBCQUFBO0VBQ0EseUJBQUE7RUFDQSxtQkFBQTtFQUNBLFdBQUE7RUFDQSxrQkFBQTtFQUNBLGFBQUE7RUFDQSxtQkFBQTtFQUNBLHVCQUFBO0FGc0VwQjtBRDBHSTtFQUNJLHlCRXJNTztBRDZGZjtBRDBHSTtFQUNJLHlCRTFNTTtFRjJNTixjRWxNUztBRDBGakI7QUU1RW9CO0VBQ0kscUJBQUE7QUY4RXhCO0FFdEVBO0VBQ0ksZ0JBQUE7RUFDQSxnQkFBQTtBRnlFSjtBRXRFQTtFQUNJLHFCQUFBO0FGeUVKO0FFdEVJO0VBQ0ksa0JBQUE7RUFDQSxhQUFBO0FGeUVSO0FFeEVRO0VBQ0ksWUFBQTtFQUNBLGNEckJBO0FEK0ZaO0FFeEVRO0VBQ0ksVUFBQTtFQUNBLGNEekJBO0FEbUdaO0FFdkVJO0VBQ0ksZUFBQTtFQUNBLFlBQUE7QUZ5RVIiLCJmaWxlIjoic3JjL2FwcC9jb3JvbmEvY29yb25hLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiQGltcG9ydCAndmFyaWFibGVzJztcblxuQG1peGluIGJhc2UtY29yb25hLWRhc2hib2FyZCB7XG4gICAgZGlzcGxheTogYmxvY2s7XG4gICAgcGFkZGluZy1ib3R0b206IDJyZW07XG4gICAgLmNoYXJ0LWNvbnRhaW5lciB7XG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICAgIC5jaGFydC1oZWFkZXIge1xuICAgICAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgICAgcGFkZGluZzogMCAxLjVyZW07XG4gICAgICAgICAgICBhbGlnbi1pdGVtczogZmxleC1lbmQ7XG4gICAgICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuXG4gICAgICAgICAgICAucmFkaW8tYnV0dG9uLWNvbnRhaW5lcntcbiAgICAgICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICAgICAgICAgICAganVzdGlmeS1jb250ZW50OiBmbGV4LWVuZDtcbiAgICAgICAgICAgICAgICBmbGV4LXdyYXA6IHdyYXA7XG5cbiAgICAgICAgICAgICAgICAucmFkaW8tYnV0dG9ucyB7XG4gICAgICAgICAgICAgICAgICAgIEBpbmNsdWRlIHJhZGlvLWJ1dHRvbi1jb250YWluZXI7XG4gICAgICAgICAgICAgICAgICAgICY6bm90KDpmaXJzdC1jaGlsZCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgbWFyZ2luLWxlZnQ6IDFyZW07XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgJi5jaGFydCB7XG4gICAgICAgICAgICAgICAgICAgICAgICAucmFkaW8tYnV0dG9uIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBtaW4td2lkdGg6IGF1dG87XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcGFkZGluZzogM3B4O1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAubWF0ZXJpYWwtaWNvbnMge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBmbGV4OiAxIDAgYXV0bztcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZm9udC1zaXplOiAxLjI1cmVtO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAucmFkaW8tYnV0dG9uIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIG1hcmdpbi10b3A6IDAuNXJlbTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGR3dS1zdGF0LXZpZXdlciB7XG4gICAgICAgICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtZW5kO1xuICAgICAgICAgICAgICAgIGZsZXg6IDEgMCBhdXRvO1xuICAgICAgICAgICAgICAgIG1hcmdpbi10b3A6IDFyZW07XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgLm92ZXJ2aWV3LmNoYXJ0IHtcbiAgICAgICAgICAgIGhlaWdodDogMTIuNXJlbTtcbiAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICB9XG4gICAgICAgIGR3dS1jaGFydC1sZWdlbmQge1xuICAgICAgICAgICAgZmxleDogMCAwIGF1dG87XG4gICAgICAgICAgICBtYXJnaW4tdG9wOiAwLjI1cmVtO1xuICAgICAgICAgICAgbWFyZ2luLWJvdHRvbTogMnJlbTtcbiAgICAgICAgfVxuICAgIH1cbn1cblxuQG1peGluIHJhZGlvLWJ1dHRvbi1jb250YWluZXIge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgLnJhZGlvLWJ1dHRvbiB7XG4gICAgICAgIEBpbmNsdWRlIGxpZ2h0LW1pbmktYnV0dG9uO1xuICAgICAgICBAaW5jbHVkZSBzaGFkb3c7XG4gICAgICAgICY6Zmlyc3QtY2hpbGQge1xuICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogNXB4IDAgMCA1cHg7XG4gICAgICAgIH1cbiAgICAgICAgJjpsYXN0LWNoaWxkIHtcbiAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDAgNXB4IDVweCAwO1xuICAgICAgICB9XG4gICAgfVxufVxuXG5AbWl4aW4gc2hhZG93IHtcbiAgICB0cmFuc2l0aW9uLWR1cmF0aW9uOiBib3gtc2hhZG93IDI1bXMsIHRyYW5zZm9ybSwgMjVtcztcbiAgICBib3gtc2hhZG93OiAxcHggMXB4IDJweCAwICRsaWdodGVyLWdyYXk7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDApO1xuICAgICY6YWN0aXZlIHtcbiAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDFweCk7XG4gICAgICAgIGJveC1zaGFkb3c6IG5vbmU7XG4gICAgfVxuICAgICYuYWN0aXZlIHtcbiAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDFweCk7XG4gICAgICAgIGJveC1zaGFkb3c6IG5vbmU7XG4gICAgfVxufVxuXG5AbWl4aW4gcmVzcG9uc2l2ZS1wYWdlIHtcbiAgICBAbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA3NTBweCkge1xuICAgICAgICBkaXYucGFnZS1jb250YWluZXIge1xuICAgICAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICAgICAgICAgIC5sZWZ0LXNpZGUge1xuICAgICAgICAgICAgICAgIGZsZXg6IDAgMCBhdXRvO1xuICAgICAgICAgICAgICAgIGhlaWdodDogMTMuMjVyZW07XG4gICAgICAgICAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgICAgICAgICAgbWF4LXdpZHRoOiBub25lO1xuICAgICAgICAgICAgICAgIC8vIG1pbi13aWR0aDogbm9uZTtcbiAgICAgICAgICAgICAgICB0cmFuc2l0aW9uOiBoZWlnaHQgNTBtcztcbiAgICAgICAgICAgICAgICAmLmV4cGFuZGVkIHtcbiAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiA4NSU7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIC5leHBhbmRlciB7XG4gICAgICAgICAgICAgICAgICAgIEBpbmNsdWRlIGRhcmstdGhlbWU7XG4gICAgICAgICAgICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgICAgICAgICAgICAgICAgYm90dG9tOiAwO1xuICAgICAgICAgICAgICAgICAgICBsZWZ0OiA1MCU7XG4gICAgICAgICAgICAgICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgtNTAlKTtcbiAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDMuNXJlbTtcbiAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiAxcmVtO1xuICAgICAgICAgICAgICAgICAgICBib3JkZXI6IDFweCBzb2xpZCAkbW9zcy1ncmVlbjtcbiAgICAgICAgICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogNXB4IDVweCAwIDAgO1xuICAgICAgICAgICAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgICAgICAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAgICAgICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgICAgICAgICAgICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgICAgICAgICAgICAgICAgIC5leHBhbmRlci1pY29uIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMTZweDtcbiAgICAgICAgICAgICAgICAgICAgICAgICYuZmxpcHBlZCB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdHJhbnNmb3JtOiByb3RhdGUoMTgwZGVnKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuICAgIC5wYWdlLWNvbnRhaW5lciB7XG4gICAgICAgIGhlaWdodDogMTAwJTtcbiAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XG5cbiAgICAgICAgLmxlZnQtc2lkZSB7XG4gICAgICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgICAgICAgICBmbGV4OiAxIDEgMDtcbiAgICAgICAgICAgIG92ZXJmbG93OiBoaWRkZW47XG4gICAgICAgICAgICBtYXgtd2lkdGg6IDI3LjUlO1xuICAgICAgICAgICAgbWluLXdpZHRoOiAyMHJlbTtcbiAgICAgICAgICAgIC5leHBhbmRlciB7XG4gICAgICAgICAgICAgICAgZGlzcGxheTogbm9uZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICAucmlnaHQtc2lkZSB7XG4gICAgICAgICAgICBmbGV4OiAxIDEgMDtcbiAgICAgICAgICAgIG92ZXJmbG93OiBhdXRvO1xuICAgICAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgICAgICB9XG4gICAgfVxuXG59XG5AbWl4aW4gbGlnaHQtbWluaS1idXR0b24ge1xuICAgIEBpbmNsdWRlIGxpZ2h0LXRoZW1lO1xuICAgIEBpbmNsdWRlIGJ1dHRvbi14cztcbn1cblxuQG1peGluIGxpZ2h0LXNtYWxsLWJ1dHRvbiB7XG4gICAgQGluY2x1ZGUgbGlnaHQtdGhlbWU7XG4gICAgQGluY2x1ZGUgYnV0dG9uLXNtO1xufVxuXG5AbWl4aW4gZGFyay1idXR0b24ge1xuICAgIEBpbmNsdWRlIGRhcmstdGhlbWU7XG4gICAgQGluY2x1ZGUgYnV0dG9uLW1kO1xufVxuXG5AbWl4aW4gYnV0dG9uLXhzIHtcbiAgICBtaW4td2lkdGg6IDJyZW07XG4gICAgcGFkZGluZzogMC4yNXJlbSAwLjVyZW07XG4gICAgZm9udC1zaXplOiAxcmVtO1xuICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgb3V0bGluZTogbm9uZTtcbiAgICB3aGl0ZS1zcGFjZTogbm93cmFwO1xuICAgIHVzZXItc2VsZWN0OiBub25lO1xufVxuXG5AbWl4aW4gYnV0dG9uLXNtIHtcbiAgICBtaW4td2lkdGg6IDNyZW07XG4gICAgcGFkZGluZzogMC4yNXJlbSAwLjVyZW07XG4gICAgY3Vyc29yOiBwb2ludGVyO1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICBvdXRsaW5lOiBub25lO1xuICAgIHdoaXRlLXNwYWNlOiBub3dyYXA7XG4gICAgdXNlci1zZWxlY3Q6IG5vbmU7XG59XG5cbkBtaXhpbiBidXR0b24tbWQge1xuICAgIHdpZHRoOiA4cmVtO1xuICAgIHBhZGRpbmc6IDAuNXJlbTtcbiAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIG91dGxpbmU6IG5vbmU7XG4gICAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcbiAgICB1c2VyLXNlbGVjdDogbm9uZTtcbn1cblxuQG1peGluIGxpZ2h0LXRoZW1lIHtcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogJGVnZ3NoZWxsLWRhcms7XG4gICAgJjpob3ZlciB7XG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6ICRsYXVyZWwtZ3JlZW47XG4gICAgfVxuICAgICYuYWN0aXZlIHtcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogJG9saXZlLWdyZWVuO1xuICAgICAgICBjb2xvcjogJGxpZ2h0ZXN0LWdyZWVuO1xuICAgIH1cbn1cblxuQG1peGluIGRhcmstdGhlbWUge1xuICAgIGJhY2tncm91bmQtY29sb3I6ICRibGFjay1vbGl2ZTtcbiAgICBjb2xvcjogJGxpZ2h0ZXN0LWdyZWVuO1xuICAgICY6aG92ZXIge1xuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkYXJteS1ncmVlbjtcbiAgICAgICAgY29sb3I6ICRsaWdodGVzdC1ncmVlbjtcbiAgICB9XG4gICAgJi5hY3RpdmUge1xuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkb2xpdmUtZ3JlZW47XG4gICAgICAgIGNvbG9yOiAkbGlnaHRlc3QtZ3JlZW47XG4gICAgfVxufVxuXG5AbWl4aW4gdG9wLW5hdi1wYWdlIHtcbiAgICBoZWlnaHQ6IDEwMCU7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgIC5tYWluLWNvbnRlbnQge1xuICAgICAgICBmbGV4OiAxIDEgMDtcbiAgICAgICAgb3ZlcmZsb3c6IGF1dG87XG4gICAgfVxufVxuXG5AbWl4aW4gcmVzcG9uZC10bygkbWVkaWEpIHtcbiAgQGlmICRtZWRpYSA9PSBzbWFsbCB7XG4gICAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiAkYnJlYWstc21hbGwpIHsgQGNvbnRlbnQ7IH1cbiAgfVxuICBAZWxzZSBpZiAkbWVkaWEgPT0gbWVkaXVtIHtcbiAgICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChtaW4td2lkdGg6ICRicmVhay1zbWFsbCArIDEpIGFuZCAobWF4LXdpZHRoOiAkYnJlYWstbGFyZ2UgLSAxKSB7IEBjb250ZW50OyB9XG4gIH1cbiAgQGVsc2UgaWYgJG1lZGlhID09IHdpZGUge1xuICAgIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1pbi13aWR0aDogJGJyZWFrLWxhcmdlKSB7IEBjb250ZW50OyB9XG4gIH1cbn1cbiIsIkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDc1MHB4KSB7XG4gIDpob3N0IGRpdi5wYWdlLWNvbnRhaW5lciB7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgfVxuICA6aG9zdCBkaXYucGFnZS1jb250YWluZXIgLmxlZnQtc2lkZSB7XG4gICAgZmxleDogMCAwIGF1dG87XG4gICAgaGVpZ2h0OiAxMy4yNXJlbTtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBtYXgtd2lkdGg6IG5vbmU7XG4gICAgdHJhbnNpdGlvbjogaGVpZ2h0IDUwbXM7XG4gIH1cbiAgOmhvc3QgZGl2LnBhZ2UtY29udGFpbmVyIC5sZWZ0LXNpZGUuZXhwYW5kZWQge1xuICAgIGhlaWdodDogODUlO1xuICB9XG4gIDpob3N0IGRpdi5wYWdlLWNvbnRhaW5lciAubGVmdC1zaWRlIC5leHBhbmRlciB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzNGNDAzODtcbiAgICBjb2xvcjogI0ZDRkNGOTtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgYm90dG9tOiAwO1xuICAgIGxlZnQ6IDUwJTtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoLTUwJSk7XG4gICAgd2lkdGg6IDMuNXJlbTtcbiAgICBoZWlnaHQ6IDFyZW07XG4gICAgYm9yZGVyOiAxcHggc29saWQgIzhBOUE1QjtcbiAgICBib3JkZXItcmFkaXVzOiA1cHggNXB4IDAgMDtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICBjdXJzb3I6IHBvaW50ZXI7XG4gIH1cbiAgOmhvc3QgZGl2LnBhZ2UtY29udGFpbmVyIC5sZWZ0LXNpZGUgLmV4cGFuZGVyOmhvdmVyIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjNEI1MzIwO1xuICAgIGNvbG9yOiAjRkNGQ0Y5O1xuICB9XG4gIDpob3N0IGRpdi5wYWdlLWNvbnRhaW5lciAubGVmdC1zaWRlIC5leHBhbmRlci5hY3RpdmUge1xuICAgIGJhY2tncm91bmQtY29sb3I6ICM3MDgyMzg7XG4gICAgY29sb3I6ICNGQ0ZDRjk7XG4gIH1cbiAgOmhvc3QgZGl2LnBhZ2UtY29udGFpbmVyIC5sZWZ0LXNpZGUgLmV4cGFuZGVyIC5leHBhbmRlci1pY29uIHtcbiAgICBmb250LXNpemU6IDE2cHg7XG4gIH1cbiAgOmhvc3QgZGl2LnBhZ2UtY29udGFpbmVyIC5sZWZ0LXNpZGUgLmV4cGFuZGVyIC5leHBhbmRlci1pY29uLmZsaXBwZWQge1xuICAgIHRyYW5zZm9ybTogcm90YXRlKDE4MGRlZyk7XG4gIH1cbn1cbjpob3N0IC5wYWdlLWNvbnRhaW5lciB7XG4gIGhlaWdodDogMTAwJTtcbiAgd2lkdGg6IDEwMCU7XG4gIGRpc3BsYXk6IGZsZXg7XG59XG46aG9zdCAucGFnZS1jb250YWluZXIgLmxlZnQtc2lkZSB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgZmxleDogMSAxIDA7XG4gIG92ZXJmbG93OiBoaWRkZW47XG4gIG1heC13aWR0aDogMjcuNSU7XG4gIG1pbi13aWR0aDogMjByZW07XG59XG46aG9zdCAucGFnZS1jb250YWluZXIgLmxlZnQtc2lkZSAuZXhwYW5kZXIge1xuICBkaXNwbGF5OiBub25lO1xufVxuOmhvc3QgLnBhZ2UtY29udGFpbmVyIC5yaWdodC1zaWRlIHtcbiAgZmxleDogMSAxIDA7XG4gIG92ZXJmbG93OiBhdXRvO1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG59XG46aG9zdCAucGFnZS1jb250YWluZXIgLmxlZnQtc2lkZSB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNEREQ5Q0Y7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG59XG46aG9zdCAucGFnZS1jb250YWluZXIgLmxlZnQtc2lkZSBkd3UtZmlsZS1leHBsb3JlciB7XG4gIGZsZXg6IDEgMCAwO1xufVxuOmhvc3QgLnBhZ2UtY29udGFpbmVyIC5sZWZ0LXNpZGUgLnZpZXctdGFicyB7XG4gIHBhZGRpbmc6IDAgMC4yNXJlbTtcbiAgZGlzcGxheTogZmxleDtcbn1cbjpob3N0IC5wYWdlLWNvbnRhaW5lciAubGVmdC1zaWRlIC52aWV3LXRhYnMgLnZpZXctdGFiIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI0VBRTZEQTtcbiAgbWluLXdpZHRoOiAzcmVtO1xuICBwYWRkaW5nOiAwLjI1cmVtIDAuNXJlbTtcbiAgY3Vyc29yOiBwb2ludGVyO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIG91dGxpbmU6IG5vbmU7XG4gIHdoaXRlLXNwYWNlOiBub3dyYXA7XG4gIHVzZXItc2VsZWN0OiBub25lO1xuICBtYXJnaW46IDAgMC4yNXJlbTtcbiAgYm9yZGVyLXJhZGl1czogNHB4IDRweCAwIDA7XG4gIGJvcmRlcjogMXB4IHNvbGlkICM4QTlBNUI7XG4gIGJvcmRlci1ib3R0b206IG5vbmU7XG4gIGZsZXg6IDEgMSAwO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xufVxuOmhvc3QgLnBhZ2UtY29udGFpbmVyIC5sZWZ0LXNpZGUgLnZpZXctdGFicyAudmlldy10YWI6aG92ZXIge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjQkFDMzlGO1xufVxuOmhvc3QgLnBhZ2UtY29udGFpbmVyIC5sZWZ0LXNpZGUgLnZpZXctdGFicyAudmlldy10YWIuYWN0aXZlIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzcwODIzODtcbiAgY29sb3I6ICNGQ0ZDRjk7XG59XG46aG9zdCAucGFnZS1jb250YWluZXIgLmxlZnQtc2lkZSAudmlldy10YWJzIC52aWV3LXRhYiAuc3RhciB7XG4gIG1hcmdpbi1yaWdodDogMC4yNXJlbTtcbn1cblxuLmNsaWNrYWJsZSB7XG4gIHBhZGRpbmc6IDAuMjVyZW07XG4gIG1hcmdpbjogLTAuMjVyZW07XG59XG5cbi5yb3ctaWNvbiB7XG4gIG1hcmdpbi1yaWdodDogMC4yNXJlbTtcbn1cblxuLm1hdGVyaWFsLWljb25zLnN0YXIge1xuICBmb250LXNpemU6IDEuMjVyZW07XG4gIG9wYWNpdHk6IDAuMjU7XG59XG4ubWF0ZXJpYWwtaWNvbnMuc3Rhcjpob3ZlciB7XG4gIG9wYWNpdHk6IDAuNTtcbiAgY29sb3I6ICMxRDYyQzQ7XG59XG4ubWF0ZXJpYWwtaWNvbnMuc3Rhci5hY3RpdmUge1xuICBvcGFjaXR5OiAxO1xuICBjb2xvcjogIzFENjJDNDtcbn1cbi5tYXRlcmlhbC1pY29ucy5sb2NrIHtcbiAgZm9udC1zaXplOiAxcmVtO1xuICBvcGFjaXR5OiAwLjU7XG59IiwiXG4kZGFyay1ncmVlbjogIzI5MkUxMjtcbiRhcm15LWdyZWVuOiAjNEI1MzIwO1xuJG9saXZlLWdyZWVuOiAjNzA4MjM4O1xuJG1vc3MtZ3JlZW46ICM4QTlBNUI7XG4kbGF1cmVsLWdyZWVuOiAjQkFDMzlGO1xuXG4kc2F0dXJhdGVkLW9saXZlOiAjNzI5OTAwO1xuJHNhdHVyYXRlZC1ibHVlOiAjMTY0RUI3O1xuXG4vLyBuaWNlIGZvciB0ZXh0IGFnYWluc3QgZGFyayBiYWNrZ3JvdW5kXG4kbGlnaHQtZ3JlZW46ICNGNEY3RUE7XG4kbGlnaHRlc3QtZ3JlZW46ICNGQ0ZDRjk7XG5cbi8vIFVzZWQgZm9yIGZpbGUgc2VsZWN0b3JcbiRlZ2dzaGVsbC1kYXJrZXI6ICNEREQ5Q0Y7XG4kZWdnc2hlbGwtZGFyazogI0VBRTZEQTtcbiRlZ2dzaGVsbDogI0VGRUJERjtcbiRlZ2dzaGVsbC1saWdodDogI0YyRUVFMTtcblxuLy8gZ3JheXNcbiRiYXNpY2FsbHktYmxhY2s6ICMyMDIxMjQ7XG4kYmxhY2stb2xpdmU6ICMzRjQwMzg7XG4kZ3Jhbml0ZTogIzY1NjM1RjtcbiRsaWdodGVyLWdyYXk6ICM5RDlCOTk7XG4kd2hpdGU6ICNmZmY7XG5cbiRnb2xkOiAjRDZCOTAyO1xuJHN0YXItYmx1ZTogIzFENjJDNDtcblxuJGJyZWFrLXNtYWxsOiA1NTBweDtcbiRicmVhay1tZDogODAwcHg7XG4kYnJlYWstbGFyZ2U6IDEwMjRweDtcbiIsIkBpbXBvcnQgJ21peGlucyc7XG5cbjpob3N0IHtcbiAgICBAaW5jbHVkZSByZXNwb25zaXZlLXBhZ2U7XG4gICAgLnBhZ2UtY29udGFpbmVyIHtcbiAgICAgICAgLmxlZnQtc2lkZSB7XG4gICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkZWdnc2hlbGwtZGFya2VyO1xuICAgICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgICAgICAgICBkd3UtZmlsZS1leHBsb3JlciB7XG4gICAgICAgICAgICAgICAgZmxleDogMSAwIDA7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAudmlldy10YWJzIHtcbiAgICAgICAgICAgICAgICBwYWRkaW5nOiAwIDAuMjVyZW07XG4gICAgICAgICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICAgICAgICAudmlldy10YWIge1xuICAgICAgICAgICAgICAgICAgICBAaW5jbHVkZSBsaWdodC1zbWFsbC1idXR0b247XG4gICAgICAgICAgICAgICAgICAgIG1hcmdpbjogMCAwLjI1cmVtO1xuICAgICAgICAgICAgICAgICAgICBib3JkZXItcmFkaXVzOiA0cHggNHB4IDAgMDtcbiAgICAgICAgICAgICAgICAgICAgYm9yZGVyOiAxcHggc29saWQgJG1vc3MtZ3JlZW47XG4gICAgICAgICAgICAgICAgICAgIGJvcmRlci1ib3R0b206IG5vbmU7XG4gICAgICAgICAgICAgICAgICAgIGZsZXg6IDEgMSAwO1xuICAgICAgICAgICAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgICAgICAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAgICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICAgICAgICAgICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgICAgICAgICAgICAgICAgICAuc3RhciB7XG4gICAgICAgICAgICAgICAgICAgICAgICBtYXJnaW4tcmlnaHQ6IDAuMjVyZW07XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG59XG5cbi5jbGlja2FibGUge1xuICAgIHBhZGRpbmc6IDAuMjVyZW07XG4gICAgbWFyZ2luOiAtMC4yNXJlbTtcbn1cblxuLnJvdy1pY29uIHtcbiAgICBtYXJnaW4tcmlnaHQ6IDAuMjVyZW07XG59XG4ubWF0ZXJpYWwtaWNvbnMge1xuICAgICYuc3RhciB7XG4gICAgICAgIGZvbnQtc2l6ZTogMS4yNXJlbTtcbiAgICAgICAgb3BhY2l0eTogMC4yNTtcbiAgICAgICAgJjpob3ZlciB7XG4gICAgICAgICAgICBvcGFjaXR5OiAwLjU7XG4gICAgICAgICAgICBjb2xvcjogJHN0YXItYmx1ZTtcbiAgICAgICAgfVxuICAgICAgICAmLmFjdGl2ZSB7XG4gICAgICAgICAgICBvcGFjaXR5OiAxO1xuICAgICAgICAgICAgY29sb3I6ICRzdGFyLWJsdWU7XG4gICAgICAgIH1cbiAgICB9XG4gICAgJi5sb2NrIHtcbiAgICAgICAgZm9udC1zaXplOiAxcmVtO1xuICAgICAgICBvcGFjaXR5OiAwLjU7XG4gICAgfVxufVxuXG4iXX0= */");

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
/* harmony import */ var _src_assets_corona_lockdown_data_by_location_json__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @src/assets/corona/lockdown-data-by-location.json */ "./src/assets/corona/lockdown-data-by-location.json");
var _src_assets_corona_lockdown_data_by_location_json__WEBPACK_IMPORTED_MODULE_4___namespace = /*#__PURE__*/__webpack_require__.t(/*! @src/assets/corona/lockdown-data-by-location.json */ "./src/assets/corona/lockdown-data-by-location.json", 1);
/* harmony import */ var _src_assets_corona_locations_json__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @src/assets/corona/locations.json */ "./src/assets/corona/locations.json");
var _src_assets_corona_locations_json__WEBPACK_IMPORTED_MODULE_5___namespace = /*#__PURE__*/__webpack_require__.t(/*! @src/assets/corona/locations.json */ "./src/assets/corona/locations.json", 1);
/* harmony import */ var _src_assets_country_names_by_code_json__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @src/assets/country-names-by-code.json */ "./src/assets/country-names-by-code.json");
var _src_assets_country_names_by_code_json__WEBPACK_IMPORTED_MODULE_6___namespace = /*#__PURE__*/__webpack_require__.t(/*! @src/assets/country-names-by-code.json */ "./src/assets/country-names-by-code.json", 1);
/* harmony import */ var _src_assets_state_names_by_code_json__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @src/assets/state-names-by-code.json */ "./src/assets/state-names-by-code.json");
var _src_assets_state_names_by_code_json__WEBPACK_IMPORTED_MODULE_7___namespace = /*#__PURE__*/__webpack_require__.t(/*! @src/assets/state-names-by-code.json */ "./src/assets/state-names-by-code.json", 1);
/* harmony import */ var _src_app_corona_services_localStorage_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @src/app/corona/services/localStorage.service */ "./src/app/corona/services/localStorage.service.ts");
/* harmony import */ var _file_explorer_index__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @file-explorer/index */ "./src/app/file-explorer/index.ts");
/* harmony import */ var _src_app_corona_models_index__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @src/app/corona/models/index */ "./src/app/corona/models/index.ts");











var Tab;
(function (Tab) {
    Tab["ALL"] = "ALL";
    Tab["SAVED"] = "SAVED";
    Tab["COMPARE"] = "COMPARE";
})(Tab || (Tab = {}));
var CoronaComponent = /** @class */ (function () {
    /**
     * ngOnInit
     */
    function CoronaComponent(localStorageService) {
        this.localStorageService = localStorageService;
        this.fileGroup = new _file_explorer_index__WEBPACK_IMPORTED_MODULE_9__["FileGroup"]();
        this.locationsByFileId = {};
        this.fileIdsByLocation = {};
        this.favoriteFileIds = new Set();
        this.filterStr = '';
        this.disabledBarKeys = new Set();
        this.disabledNormalKeys = new Set([_src_app_corona_models_index__WEBPACK_IMPORTED_MODULE_10__["NormalKeys"].R]);
        this.isViewingNormalized = false;
        this.isViewingLineChart = false;
        this.compareSelectedFileIds = new Set();
        this.subs = new rxjs__WEBPACK_IMPORTED_MODULE_3__["Subscription"]();
        this.closedFileIdsWhileQuery = new Set();
        this.leftSideExpanded = false;
        this.Tab = Tab;
        this.lockdownDataByLocation = _src_assets_corona_lockdown_data_by_location_json__WEBPACK_IMPORTED_MODULE_4__;
        this.populateFileGroup();
        this.fileGroup.closeAllFolders();
        this.fileGroup.closedFileIds.delete(this.favoritesRootId);
        this.fileGroup.closedFileIds.delete(this.locationRoot.id);
        this.loadFavorites();
        this.setSelectedTab(Tab.SAVED);
    }
    CoronaComponent.prototype.onSelectedFileIdsChange = function (selectedFileIds) {
        if (this.selectedTab === Tab.COMPARE) {
            this.compareSelectedFileIds = selectedFileIds;
        }
        else {
            this.fileGroup.setSelectedFileIds(selectedFileIds);
        }
    };
    CoronaComponent.prototype.setSelectedTab = function (tab) {
        this.selectedTab = tab;
        if (tab === Tab.SAVED) {
            this.fileGroup.rootFileId = this.favoritesRootId;
        }
        else if (tab === Tab.ALL) {
            this.fileGroup.setRootFile(this.locationRoot);
        }
        else if (tab === Tab.COMPARE) {
            this.fileGroup.setRootFile(this.locationRoot);
        }
        this.filterStr = '';
    };
    CoronaComponent.prototype.ngOnDestroy = function () {
        this.subs.unsubscribe();
    };
    CoronaComponent.prototype.onFilterStringChange = function (filterStr) {
        if (filterStr && this.selectedTab === Tab.SAVED) {
            this.setSelectedTab(Tab.ALL);
        }
        this.filterStr = filterStr;
    };
    CoronaComponent.prototype.loadFavorites = function () {
        var _this = this;
        var favoriteLocations = this.localStorageService.getFavoriteLocations();
        var favoriteIds = favoriteLocations.map(function (location) { return _this.fileIdsByLocation[location]; });
        this.fileGroup.filesById[this.favoritesRootId].childIds = favoriteIds;
        this.favoriteFileIds = new Set(favoriteIds);
        this.compareSelectedFileIds = new Set(favoriteIds);
        if (favoriteIds.length) {
            this.fileGroup.setSelectedFileIds(new Set([favoriteIds[0]]));
        }
    };
    CoronaComponent.prototype.saveFavorites = function () {
        var _this = this;
        var locations = this.fileGroup.filesById[this.favoritesRootId].childIds
            .map(function (fileId) { return _this.locationsByFileId[fileId]; });
        this.localStorageService.setFavoriteLocations(locations);
    };
    CoronaComponent.prototype.toggleFavoriteFile = function (file, event) {
        event.stopPropagation();
        if (this.favoriteFileIds.has(file.id)) {
            this.favoriteFileIds.delete(file.id);
            this.fileGroup.removeAsChildId(this.favoritesRootId, file.id);
        }
        else {
            this.favoriteFileIds.add(file.id);
            this.fileGroup.addAsChildId(this.favoritesRootId, file.id);
        }
        ;
        this.saveFavorites();
        this.fileGroup.flushFileChanges();
    };
    /**
     * populateFileGroup
     * Puts data from coronaLocations into fileGroup
     */
    CoronaComponent.prototype.populateFileGroup = function () {
        this.locationRoot = this.fileGroup.createFile({ label: 'World' });
        var favoritesRoot = this.fileGroup.createFile({ label: 'Favorites', childIds: [] });
        this.favoritesRootId = favoritesRoot.id;
        var nestedCoronaLocations = this.getNestedCoronaLocations(_src_assets_corona_locations_json__WEBPACK_IMPORTED_MODULE_5__);
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
        splitLocation[0] = _src_assets_country_names_by_code_json__WEBPACK_IMPORTED_MODULE_6__[splitLocation[0]] || splitLocation[0];
        if (splitLocation.length > 1 && splitLocation[0] === 'United States') {
            splitLocation[1] = _src_assets_state_names_by_code_json__WEBPACK_IMPORTED_MODULE_7__[splitLocation[1]] || splitLocation[1];
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
    CoronaComponent.prototype.onFilesByIdChange = function (filesById) {
        this.fileGroup.filesById = filesById;
        this.saveFavorites();
    };
    CoronaComponent.prototype.getSelectedFileIds = function () {
        return (this.selectedTab === Tab.COMPARE) ? this.compareSelectedFileIds : this.fileGroup.selectedFileIds;
    };
    CoronaComponent.ctorParameters = function () { return [
        { type: _src_app_corona_services_localStorage_service__WEBPACK_IMPORTED_MODULE_8__["LocalStorageService"] }
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
/* harmony import */ var _src_app_common_common_module__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @src/app/common/common.module */ "./src/app/common/common.module.ts");
/* harmony import */ var _src_app_file_explorer_file_explorer_module__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @src/app/file-explorer/file-explorer.module */ "./src/app/file-explorer/file-explorer.module.ts");
/* harmony import */ var _services_corona_service__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./services/corona.service */ "./src/app/corona/services/corona.service.ts");
/* harmony import */ var _services_localStorage_service__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./services/localStorage.service */ "./src/app/corona/services/localStorage.service.ts");
/* harmony import */ var _corona_compare_dashboard_corona_compare_dashboard_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./corona-compare-dashboard/corona-compare-dashboard.component */ "./src/app/corona/corona-compare-dashboard/corona-compare-dashboard.component.ts");
/* harmony import */ var _corona_dashboard_corona_dashboard_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./corona-dashboard/corona-dashboard.component */ "./src/app/corona/corona-dashboard/corona-dashboard.component.ts");











// import { AppModule as FuzzAppModule } from 'fuzz-demo-app';






var CoronaModule = /** @class */ (function () {
    function CoronaModule() {
    }
    CoronaModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            imports: [
                _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forChild(_src_app_corona_corona_routes__WEBPACK_IMPORTED_MODULE_10__["CoronaRoutes"]),
                _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"],
                // FuzzAppModule,
                _angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HttpClientModule"],
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
                _src_app_app_routing_module__WEBPACK_IMPORTED_MODULE_6__["AppRoutingModule"],
                _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_7__["NoopAnimationsModule"],
                _src_app_common_common_module__WEBPACK_IMPORTED_MODULE_11__["CommonModule"],
                _src_app_file_explorer_file_explorer_module__WEBPACK_IMPORTED_MODULE_12__["FileExplorerModule"],
            ],
            declarations: [
                _src_app_corona_corona_component__WEBPACK_IMPORTED_MODULE_8__["CoronaComponent"],
                _src_app_corona_corona_file_viewer_corona_file_viewer_component__WEBPACK_IMPORTED_MODULE_9__["CoronaFileViewerComponent"],
                _corona_compare_dashboard_corona_compare_dashboard_component__WEBPACK_IMPORTED_MODULE_15__["CoronaCompareDashboardComponent"],
                _corona_dashboard_corona_dashboard_component__WEBPACK_IMPORTED_MODULE_16__["CoronaDashboardComponent"],
            ],
            providers: [
                _services_corona_service__WEBPACK_IMPORTED_MODULE_13__["CoronaService"],
                _services_localStorage_service__WEBPACK_IMPORTED_MODULE_14__["LocalStorageService"],
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


// import { DemoPageWrapperComponent as FuzzDemoPageComponent } from 'fuzz-demo-app';
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
/* harmony import */ var _src_app_utils_index__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @src/app/utils/index */ "./src/app/utils/index.ts");





var CoronaDataExtractor = /** @class */ (function () {
    function CoronaDataExtractor() {
    }
    /**
     * getDateFromStr
     * Safari has troubles dealing with new Date("1-1-20")
     * @param {string} dateStr
     */
    // public getDateFromStr(dateStr: string) {
    //     const splitDateStr = dateStr.split('-').map(Number);
    //     return new Date(
    //         splitDateStr[0],
    //         splitDateStr[1] - 1,
    //         splitDateStr[2],
    //     );
    // }
    CoronaDataExtractor.prototype.clean = function (file, population) {
        if (population === void 0) { population = 1; }
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
        var sortedDateStrs = Object(lodash__WEBPACK_IMPORTED_MODULE_1__["sortBy"])(dateStrs, function (dateStr) { return +Object(_src_app_utils_index__WEBPACK_IMPORTED_MODULE_4__["getDateFromStr"])(dateStr); });
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
                    date: Object(_src_app_utils_index__WEBPACK_IMPORTED_MODULE_4__["getDateFromStr"])(dateStr),
                    timestamp: +Object(_src_app_utils_index__WEBPACK_IMPORTED_MODULE_4__["getDateFromStr"])(dateStr)
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
        var coolData = oneLeadingZeroData.slice(boringDataClipIndex);
        return this.getNormalizedData(coolData, population);
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
            var normalizedPoint = tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"]({}, cleanData[i], (_a = {}, _a[_normal_keys_enum__WEBPACK_IMPORTED_MODULE_2__["NormalKeys"].R] = r, _a[_normal_keys_enum__WEBPACK_IMPORTED_MODULE_2__["NormalKeys"].CASES] = (cleanPoint.cases / population) * 1000000, _a[_normal_keys_enum__WEBPACK_IMPORTED_MODULE_2__["NormalKeys"].NEW] = (cleanPoint.new / population) * 1000000, _a[_normal_keys_enum__WEBPACK_IMPORTED_MODULE_2__["NormalKeys"].ACTIVE] = (cleanPoint.active / population) * 1000000, _a[_normal_keys_enum__WEBPACK_IMPORTED_MODULE_2__["NormalKeys"].RECOVERED] = (cleanPoint.recovered / population) * 1000000, _a[_normal_keys_enum__WEBPACK_IMPORTED_MODULE_2__["NormalKeys"].DEATHS] = (cleanPoint.deaths / population) * 1000000, _a));
            normalizedData.push(normalizedPoint);
        }
        for (var i = 0; i < cleanData.length; i++) {
            var ppPreviousPoint = cleanData[i - 3] || { cases: 0, new: 0 };
            var pPreviousPoint = cleanData[i - 2] || { cases: 0, new: 0 };
            var previousPoint = cleanData[i - 1] || { cases: 0, new: 0 };
            var point = cleanData[i];
            var nextPoint = cleanData[i + 1] || { cases: 0, new: 0 };
            var nNextPoint = cleanData[i + 2] || { cases: 0, new: 0 };
            var totalCases = [ppPreviousPoint, pPreviousPoint, previousPoint, point, nextPoint]
                .reduce(function (sum, point) { return sum + point.cases; }, 0);
            var totalNew = [pPreviousPoint, previousPoint, point, nextPoint, nNextPoint]
                .reduce(function (sum, point) { return sum + point.new; }, 0);
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
    CoronaKeys["DATE_STR"] = "dateStr";
    CoronaKeys["DATE"] = "date";
    CoronaKeys["TIMESTAMP"] = "timestamp";
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
/*! exports provided: CoronaDataExtractor, CoronaKeys, NormalKeys, Labels */
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

/* harmony import */ var _labels_model__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./labels.model */ "./src/app/corona/models/labels.model.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Labels", function() { return _labels_model__WEBPACK_IMPORTED_MODULE_4__["Labels"]; });








/***/ }),

/***/ "./src/app/corona/models/labels.model.ts":
/*!***********************************************!*\
  !*** ./src/app/corona/models/labels.model.ts ***!
  \***********************************************/
/*! exports provided: Labels */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Labels", function() { return Labels; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _normal_keys_enum__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./normal-keys.enum */ "./src/app/corona/models/normal-keys.enum.ts");
/* harmony import */ var _corona_keys_enum__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./corona-keys.enum */ "./src/app/corona/models/corona-keys.enum.ts");
var _a;



var Labels = /** @class */ (function () {
    function Labels() {
    }
    Labels.corona = (_a = {},
        _a[_corona_keys_enum__WEBPACK_IMPORTED_MODULE_2__["CoronaKeys"].DATE_STR] = 'Date',
        _a[_corona_keys_enum__WEBPACK_IMPORTED_MODULE_2__["CoronaKeys"].DATE] = 'Date',
        _a[_corona_keys_enum__WEBPACK_IMPORTED_MODULE_2__["CoronaKeys"].TIMESTAMP] = 'Date',
        _a[_corona_keys_enum__WEBPACK_IMPORTED_MODULE_2__["CoronaKeys"].CASES] = 'Total',
        _a[_corona_keys_enum__WEBPACK_IMPORTED_MODULE_2__["CoronaKeys"].NEW] = 'New',
        _a[_corona_keys_enum__WEBPACK_IMPORTED_MODULE_2__["CoronaKeys"].ACTIVE] = 'Active',
        _a[_corona_keys_enum__WEBPACK_IMPORTED_MODULE_2__["CoronaKeys"].RECOVERED] = 'Recovered',
        _a[_corona_keys_enum__WEBPACK_IMPORTED_MODULE_2__["CoronaKeys"].DEATHS] = 'Deaths',
        _a[_normal_keys_enum__WEBPACK_IMPORTED_MODULE_1__["NormalKeys"].CASES] = 'Total',
        _a[_normal_keys_enum__WEBPACK_IMPORTED_MODULE_1__["NormalKeys"].R] = 'Growth rate (R)',
        _a[_normal_keys_enum__WEBPACK_IMPORTED_MODULE_1__["NormalKeys"].R_AVG] = 'R Avg.',
        _a[_normal_keys_enum__WEBPACK_IMPORTED_MODULE_1__["NormalKeys"].NEW] = 'New',
        _a[_normal_keys_enum__WEBPACK_IMPORTED_MODULE_1__["NormalKeys"].ACTIVE] = 'Active',
        _a[_normal_keys_enum__WEBPACK_IMPORTED_MODULE_1__["NormalKeys"].RECOVERED] = 'Recovered',
        _a[_normal_keys_enum__WEBPACK_IMPORTED_MODULE_1__["NormalKeys"].DEATHS] = 'Deaths',
        _a);
    return Labels;
}());



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
    NormalKeys["DATE_STR"] = "dateStr";
    NormalKeys["CASES"] = "cases_mil";
    NormalKeys["R"] = "r";
    NormalKeys["R_AVG"] = "r (average)";
    NormalKeys["NEW"] = "new_mil";
    NormalKeys["ACTIVE"] = "active_mil";
    NormalKeys["RECOVERED"] = "recovered_mil";
    NormalKeys["DEATHS"] = "deaths_mil";
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
            'CHN',
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
/* harmony default export */ __webpack_exports__["default"] = (":host {\n  background-color: #DDD9CF;\n  overflow: auto;\n  overflow-x: hidden;\n  display: flex;\n}\n\n.viewport {\n  flex: 1 1 0;\n  width: 100%;\n  overflow-x: hidden;\n}\n\n.file-row {\n  -webkit-user-select: none;\n     -moz-user-select: none;\n      -ms-user-select: none;\n          user-select: none;\n  height: 1.5rem;\n  transition: height 75ms linear, color 75ms linear;\n}\n\n.file-row.odd {\n  background-color: #F2EEE1;\n}\n\n.file-row.even {\n  background-color: #EAE6DA;\n}\n\n.file-row.selected {\n  background-color: #708238;\n  color: #FCFCF9;\n  transition: height 75ms linear;\n}\n\n.file-row:hover:not(.selected):not(.dragging) {\n  background-color: #BAC39F;\n}\n\n.file-row.being-dragged {\n  color: rgba(0, 0, 0, 0);\n  border: 2px dashed #4B5320;\n  border-radius: 5px;\n}\n\n.file-row.hidden {\n  height: 0;\n  padding: 0;\n  color: rgba(0, 0, 0, 0);\n}\n\n.file-row .dragula-container {\n  display: flex;\n  align-items: center;\n  overflow: hidden;\n  width: 100%;\n  height: 100%;\n}\n\n.file-row .dragula-container > * {\n  flex: 0 0 auto;\n}\n\n.file-row .dragula-container .material-icons {\n  -webkit-user-select: none;\n     -moz-user-select: none;\n      -ms-user-select: none;\n          user-select: none;\n  font-size: 1rem;\n}\n\n.file-row .dragula-container .material-icons.folder {\n  margin-left: 0.25rem;\n}\n\n.file-row .dragula-container .material-icons.arrow {\n  padding: 0.25rem;\n  margin: -0.25rem;\n  transition: transform 75ms linear;\n  transform: rotate(90deg);\n}\n\n.file-row .dragula-container .material-icons.arrow.closed {\n  transform: rotate(0);\n}\n\n.file-row .dragula-container .material-icons.dragula-handle {\n  height: 1.5rem;\n  line-height: 1.5rem;\n  touch-action: none;\n  padding: 0 0.5rem;\n  margin: 0 -0.5rem 0 0;\n  font-size: 1.25rem;\n  cursor: -webkit-grab;\n  cursor: grab;\n}\n\n.file-row .dragula-container .space-maker {\n  width: 1.25rem;\n}\n\n.file-row .dragula-container .checkbox-container {\n  width: 1;\n}\n\n.file-row .dragula-container .file-label {\n  flex: 1 1 0;\n  margin-left: 0.25rem;\n  white-space: nowrap;\n  overflow: hidden;\n  text-overflow: ellipsis;\n}\n\n.clickable {\n  cursor: pointer;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9hZG1pbi9wcm9qZWN0cy9kYXd1LWhvbWUvc3JjL2FwcC9maWxlLWV4cGxvcmVyL2ZpbGUtZXhwbG9yZXIuY29tcG9uZW50LnNjc3MiLCIvVXNlcnMvYWRtaW4vcHJvamVjdHMvZGF3dS1ob21lL3NyYy9zdHlsZXMvdmFyaWFibGVzLnNjc3MiLCJzcmMvYXBwL2ZpbGUtZXhwbG9yZXIvZmlsZS1leHBsb3Jlci5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFHQTtFQUNJLHlCQ1djO0VEVmQsY0FBQTtFQUNBLGtCQUFBO0VBQ0EsYUFBQTtBRUZKOztBRktBO0VBQ0ksV0FBQTtFQUNBLFdBQUE7RUFDQSxrQkFBQTtBRUZKOztBRktBO0VBSUkseUJBQUE7S0FBQSxzQkFBQTtNQUFBLHFCQUFBO1VBQUEsaUJBQUE7RUFFQSxjQUFBO0VBQ0EsaURBQUE7QUVOSjs7QUZPSTtFQUNJLHlCQ1BTO0FDRWpCOztBRk9JO0VBQ0kseUJDWlE7QUNPaEI7O0FGT0k7RUFDSSx5QkM1Qk07RUQ2Qk4sY0NwQlM7RURxQlQsOEJBQUE7QUVMUjs7QUZPSTtFQUNJLHlCQy9CTztBQzBCZjs7QUZPSTtFQUNJLHVCQUFBO0VBQ0EsMEJBQUE7RUFDQSxrQkFBQTtBRUxSOztBRk9JO0VBQ0ksU0FBQTtFQUNBLFVBQUE7RUFDQSx1QkFBQTtBRUxSOztBRlFJO0VBQ0ksYUFBQTtFQUNBLG1CQUFBO0VBQ0EsZ0JBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtBRU5SOztBRk9RO0VBQ0ksY0FBQTtBRUxaOztBRk9RO0VBRUkseUJBQUE7S0FBQSxzQkFBQTtNQUFBLHFCQUFBO1VBQUEsaUJBQUE7RUFDQSxlQUFBO0FFTlo7O0FGT1k7RUFDSSxvQkFBQTtBRUxoQjs7QUZPWTtFQUVJLGdCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxpQ0FBQTtFQUNBLHdCQUFBO0FFTmhCOztBRk9nQjtFQUNJLG9CQUFBO0FFTHBCOztBRlFZO0VBQ0ksY0FBQTtFQUNBLG1CQUFBO0VBQ0Esa0JBQUE7RUFDQSxpQkFBQTtFQUNBLHFCQUFBO0VBQ0Esa0JBQUE7RUFDQSxvQkFBQTtFQUFBLFlBQUE7QUVOaEI7O0FGU1E7RUFDSSxjQUFBO0FFUFo7O0FGU1E7RUFDSSxRQUFBO0FFUFo7O0FGU1E7RUFDSSxXQUFBO0VBQ0Esb0JBQUE7RUFDQSxtQkFBQTtFQUNBLGdCQUFBO0VBQ0EsdUJBQUE7QUVQWjs7QUZZQTtFQUNJLGVBQUE7QUVUSiIsImZpbGUiOiJzcmMvYXBwL2ZpbGUtZXhwbG9yZXIvZmlsZS1leHBsb3Jlci5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIlxuQGltcG9ydCAnbWl4aW5zJztcblxuOmhvc3Qge1xuICAgIGJhY2tncm91bmQtY29sb3I6ICRlZ2dzaGVsbC1kYXJrZXI7XG4gICAgb3ZlcmZsb3c6IGF1dG87XG4gICAgb3ZlcmZsb3cteDogaGlkZGVuO1xuICAgIGRpc3BsYXk6IGZsZXg7XG59XG5cbi52aWV3cG9ydCB7XG4gICAgZmxleDogMSAxIDA7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgb3ZlcmZsb3cteDogaGlkZGVuO1xufVxuXG4uZmlsZS1yb3cge1xuICAgIC8vIGRpc3BsYXk6IGZsZXg7XG4gICAgLy8gYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAvLyBvdmVyZmxvdy15OiBoaWRkZW47XG4gICAgdXNlci1zZWxlY3Q6IG5vbmU7XG5cbiAgICBoZWlnaHQ6IDEuNXJlbTtcbiAgICB0cmFuc2l0aW9uOiBoZWlnaHQgNzVtcyBsaW5lYXIsIGNvbG9yIDc1bXMgbGluZWFyO1xuICAgICYub2RkIHtcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogJGVnZ3NoZWxsLWxpZ2h0O1xuICAgIH1cbiAgICAmLmV2ZW4ge1xuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkZWdnc2hlbGwtZGFyaztcbiAgICB9XG4gICAgJi5zZWxlY3RlZCB7XG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6ICRvbGl2ZS1ncmVlbjtcbiAgICAgICAgY29sb3I6ICRsaWdodGVzdC1ncmVlbjtcbiAgICAgICAgdHJhbnNpdGlvbjogaGVpZ2h0IDc1bXMgbGluZWFyO1xuICAgIH1cbiAgICAmOmhvdmVyOm5vdCguc2VsZWN0ZWQpOm5vdCguZHJhZ2dpbmcpIHtcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogJGxhdXJlbC1ncmVlbjtcbiAgICB9XG4gICAgJi5iZWluZy1kcmFnZ2VkIHtcbiAgICAgICAgY29sb3I6IHJnYmEoMCwwLDAsMCk7XG4gICAgICAgIGJvcmRlcjogMnB4IGRhc2hlZCAkYXJteS1ncmVlbjtcbiAgICAgICAgYm9yZGVyLXJhZGl1czogNXB4O1xuICAgIH1cbiAgICAmLmhpZGRlbiB7XG4gICAgICAgIGhlaWdodDogMDtcbiAgICAgICAgcGFkZGluZzogMDtcbiAgICAgICAgY29sb3I6IHJnYmEoMCwwLDAsMCk7XG4gICAgfVxuXG4gICAgLmRyYWd1bGEtY29udGFpbmVyIHtcbiAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgICAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgIGhlaWdodDogMTAwJTtcbiAgICAgICAgPiAqIHtcbiAgICAgICAgICAgIGZsZXg6IDAgMCBhdXRvO1xuICAgICAgICB9XG4gICAgICAgIC5tYXRlcmlhbC1pY29ucyB7XG4gICAgICAgICAgICAvLyBmbGV4OiAwIDAgYXV0bztcbiAgICAgICAgICAgIHVzZXItc2VsZWN0OiBub25lO1xuICAgICAgICAgICAgZm9udC1zaXplOiAxcmVtO1xuICAgICAgICAgICAgJi5mb2xkZXIge1xuICAgICAgICAgICAgICAgIG1hcmdpbi1sZWZ0OiAwLjI1cmVtO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgJi5hcnJvdyB7XG4gICAgICAgICAgICAgICAgLy8gbWFrZSBjbGljayB0YXJnZXQgYmlnZ2VyXG4gICAgICAgICAgICAgICAgcGFkZGluZzogMC4yNXJlbTtcbiAgICAgICAgICAgICAgICBtYXJnaW46IC0wLjI1cmVtO1xuICAgICAgICAgICAgICAgIHRyYW5zaXRpb246IHRyYW5zZm9ybSA3NW1zIGxpbmVhcjtcbiAgICAgICAgICAgICAgICB0cmFuc2Zvcm06IHJvdGF0ZSg5MGRlZyk7XG4gICAgICAgICAgICAgICAgJi5jbG9zZWQge1xuICAgICAgICAgICAgICAgICAgICB0cmFuc2Zvcm06IHJvdGF0ZSgwKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAmLmRyYWd1bGEtaGFuZGxlIHtcbiAgICAgICAgICAgICAgICBoZWlnaHQ6IDEuNXJlbTtcbiAgICAgICAgICAgICAgICBsaW5lLWhlaWdodDogMS41cmVtO1xuICAgICAgICAgICAgICAgIHRvdWNoLWFjdGlvbjogbm9uZTtcbiAgICAgICAgICAgICAgICBwYWRkaW5nOiAwIDAuNXJlbTtcbiAgICAgICAgICAgICAgICBtYXJnaW46IDAgLTAuNXJlbSAwIDA7XG4gICAgICAgICAgICAgICAgZm9udC1zaXplOiAxLjI1cmVtO1xuICAgICAgICAgICAgICAgIGN1cnNvcjogZ3JhYjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICAuc3BhY2UtbWFrZXIge1xuICAgICAgICAgICAgd2lkdGg6IDEuMjVyZW07XG4gICAgICAgIH1cbiAgICAgICAgLmNoZWNrYm94LWNvbnRhaW5lciB7XG4gICAgICAgICAgICB3aWR0aDogMTtcbiAgICAgICAgfVxuICAgICAgICAuZmlsZS1sYWJlbCB7XG4gICAgICAgICAgICBmbGV4OiAxIDEgMDtcbiAgICAgICAgICAgIG1hcmdpbi1sZWZ0OiAwLjI1cmVtO1xuICAgICAgICAgICAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcbiAgICAgICAgICAgIG92ZXJmbG93OiBoaWRkZW47XG4gICAgICAgICAgICB0ZXh0LW92ZXJmbG93OiBlbGxpcHNpcztcbiAgICAgICAgfVxuICAgIH1cbn1cblxuLmNsaWNrYWJsZSB7XG4gICAgY3Vyc29yOiBwb2ludGVyO1xufVxuIiwiXG4kZGFyay1ncmVlbjogIzI5MkUxMjtcbiRhcm15LWdyZWVuOiAjNEI1MzIwO1xuJG9saXZlLWdyZWVuOiAjNzA4MjM4O1xuJG1vc3MtZ3JlZW46ICM4QTlBNUI7XG4kbGF1cmVsLWdyZWVuOiAjQkFDMzlGO1xuXG4kc2F0dXJhdGVkLW9saXZlOiAjNzI5OTAwO1xuJHNhdHVyYXRlZC1ibHVlOiAjMTY0RUI3O1xuXG4vLyBuaWNlIGZvciB0ZXh0IGFnYWluc3QgZGFyayBiYWNrZ3JvdW5kXG4kbGlnaHQtZ3JlZW46ICNGNEY3RUE7XG4kbGlnaHRlc3QtZ3JlZW46ICNGQ0ZDRjk7XG5cbi8vIFVzZWQgZm9yIGZpbGUgc2VsZWN0b3JcbiRlZ2dzaGVsbC1kYXJrZXI6ICNEREQ5Q0Y7XG4kZWdnc2hlbGwtZGFyazogI0VBRTZEQTtcbiRlZ2dzaGVsbDogI0VGRUJERjtcbiRlZ2dzaGVsbC1saWdodDogI0YyRUVFMTtcblxuLy8gZ3JheXNcbiRiYXNpY2FsbHktYmxhY2s6ICMyMDIxMjQ7XG4kYmxhY2stb2xpdmU6ICMzRjQwMzg7XG4kZ3Jhbml0ZTogIzY1NjM1RjtcbiRsaWdodGVyLWdyYXk6ICM5RDlCOTk7XG4kd2hpdGU6ICNmZmY7XG5cbiRnb2xkOiAjRDZCOTAyO1xuJHN0YXItYmx1ZTogIzFENjJDNDtcblxuJGJyZWFrLXNtYWxsOiA1NTBweDtcbiRicmVhay1tZDogODAwcHg7XG4kYnJlYWstbGFyZ2U6IDEwMjRweDtcbiIsIjpob3N0IHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI0RERDlDRjtcbiAgb3ZlcmZsb3c6IGF1dG87XG4gIG92ZXJmbG93LXg6IGhpZGRlbjtcbiAgZGlzcGxheTogZmxleDtcbn1cblxuLnZpZXdwb3J0IHtcbiAgZmxleDogMSAxIDA7XG4gIHdpZHRoOiAxMDAlO1xuICBvdmVyZmxvdy14OiBoaWRkZW47XG59XG5cbi5maWxlLXJvdyB7XG4gIHVzZXItc2VsZWN0OiBub25lO1xuICBoZWlnaHQ6IDEuNXJlbTtcbiAgdHJhbnNpdGlvbjogaGVpZ2h0IDc1bXMgbGluZWFyLCBjb2xvciA3NW1zIGxpbmVhcjtcbn1cbi5maWxlLXJvdy5vZGQge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjRjJFRUUxO1xufVxuLmZpbGUtcm93LmV2ZW4ge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjRUFFNkRBO1xufVxuLmZpbGUtcm93LnNlbGVjdGVkIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzcwODIzODtcbiAgY29sb3I6ICNGQ0ZDRjk7XG4gIHRyYW5zaXRpb246IGhlaWdodCA3NW1zIGxpbmVhcjtcbn1cbi5maWxlLXJvdzpob3Zlcjpub3QoLnNlbGVjdGVkKTpub3QoLmRyYWdnaW5nKSB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNCQUMzOUY7XG59XG4uZmlsZS1yb3cuYmVpbmctZHJhZ2dlZCB7XG4gIGNvbG9yOiByZ2JhKDAsIDAsIDAsIDApO1xuICBib3JkZXI6IDJweCBkYXNoZWQgIzRCNTMyMDtcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xufVxuLmZpbGUtcm93LmhpZGRlbiB7XG4gIGhlaWdodDogMDtcbiAgcGFkZGluZzogMDtcbiAgY29sb3I6IHJnYmEoMCwgMCwgMCwgMCk7XG59XG4uZmlsZS1yb3cgLmRyYWd1bGEtY29udGFpbmVyIHtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogMTAwJTtcbn1cbi5maWxlLXJvdyAuZHJhZ3VsYS1jb250YWluZXIgPiAqIHtcbiAgZmxleDogMCAwIGF1dG87XG59XG4uZmlsZS1yb3cgLmRyYWd1bGEtY29udGFpbmVyIC5tYXRlcmlhbC1pY29ucyB7XG4gIHVzZXItc2VsZWN0OiBub25lO1xuICBmb250LXNpemU6IDFyZW07XG59XG4uZmlsZS1yb3cgLmRyYWd1bGEtY29udGFpbmVyIC5tYXRlcmlhbC1pY29ucy5mb2xkZXIge1xuICBtYXJnaW4tbGVmdDogMC4yNXJlbTtcbn1cbi5maWxlLXJvdyAuZHJhZ3VsYS1jb250YWluZXIgLm1hdGVyaWFsLWljb25zLmFycm93IHtcbiAgcGFkZGluZzogMC4yNXJlbTtcbiAgbWFyZ2luOiAtMC4yNXJlbTtcbiAgdHJhbnNpdGlvbjogdHJhbnNmb3JtIDc1bXMgbGluZWFyO1xuICB0cmFuc2Zvcm06IHJvdGF0ZSg5MGRlZyk7XG59XG4uZmlsZS1yb3cgLmRyYWd1bGEtY29udGFpbmVyIC5tYXRlcmlhbC1pY29ucy5hcnJvdy5jbG9zZWQge1xuICB0cmFuc2Zvcm06IHJvdGF0ZSgwKTtcbn1cbi5maWxlLXJvdyAuZHJhZ3VsYS1jb250YWluZXIgLm1hdGVyaWFsLWljb25zLmRyYWd1bGEtaGFuZGxlIHtcbiAgaGVpZ2h0OiAxLjVyZW07XG4gIGxpbmUtaGVpZ2h0OiAxLjVyZW07XG4gIHRvdWNoLWFjdGlvbjogbm9uZTtcbiAgcGFkZGluZzogMCAwLjVyZW07XG4gIG1hcmdpbjogMCAtMC41cmVtIDAgMDtcbiAgZm9udC1zaXplOiAxLjI1cmVtO1xuICBjdXJzb3I6IGdyYWI7XG59XG4uZmlsZS1yb3cgLmRyYWd1bGEtY29udGFpbmVyIC5zcGFjZS1tYWtlciB7XG4gIHdpZHRoOiAxLjI1cmVtO1xufVxuLmZpbGUtcm93IC5kcmFndWxhLWNvbnRhaW5lciAuY2hlY2tib3gtY29udGFpbmVyIHtcbiAgd2lkdGg6IDE7XG59XG4uZmlsZS1yb3cgLmRyYWd1bGEtY29udGFpbmVyIC5maWxlLWxhYmVsIHtcbiAgZmxleDogMSAxIDA7XG4gIG1hcmdpbi1sZWZ0OiAwLjI1cmVtO1xuICB3aGl0ZS1zcGFjZTogbm93cmFwO1xuICBvdmVyZmxvdzogaGlkZGVuO1xuICB0ZXh0LW92ZXJmbG93OiBlbGxpcHNpcztcbn1cblxuLmNsaWNrYWJsZSB7XG4gIGN1cnNvcjogcG9pbnRlcjtcbn0iXX0= */");

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
/* harmony import */ var css_element_queries_src_ResizeSensor__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! css-element-queries/src/ResizeSensor */ "./node_modules/css-element-queries/src/ResizeSensor.js");
/* harmony import */ var css_element_queries_src_ResizeSensor__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(css_element_queries_src_ResizeSensor__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var fuzz_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! fuzz-js */ "./node_modules/fuzz-js/dist/out-js/index.js");
/* harmony import */ var fuzz_js__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(fuzz_js__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! lodash */ "./node_modules/lodash/lodash.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var ng2_dragula__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ng2-dragula */ "./node_modules/ng2-dragula/dist/fesm5/ng2-dragula.js");
/* harmony import */ var _utils_index__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @utils/index */ "./src/app/utils/index.ts");
/* harmony import */ var _models_index__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./models/index */ "./src/app/file-explorer/models/index.ts");











var FileExplorerComponent = /** @class */ (function () {
    function FileExplorerComponent(dragulaService, hostEl) {
        var _this = this;
        this.dragulaService = dragulaService;
        this.hostEl = hostEl;
        this.fuzzFilterString = '';
        this.closedFileIds = new Set();
        this.selectedFileIds = new Set();
        this.perfMode = true;
        this.hideRoot = true;
        this.multiFileSelect = false;
        this.dragEnabled = false;
        this.filesByIdChange = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.closedFileIdsChange = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.selectedFileIdsChange = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.fuzzItemsByFileId = {};
        this.fileIdsAndDepth = [];
        this.visibleFileIds = new Set();
        this.fileIsOddById = {};
        this.subs = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Subscription"]();
        var drakeGroup = dragulaService.createGroup('EXP', {
            isContainer: function (el) {
                var fileId = el.getAttribute('data-file-id');
                return Boolean(fileId && _this.filesById[fileId].childIds);
            },
            moves: function (el, container, handle) {
                return _this.dragEnabled && handle.classList.contains('dragula-handle');
            },
            revertOnSpill: false,
        });
        this.subs.add(this.dragulaService.drop('EXP')
            .subscribe(function (drop) {
            // use on our own dom manipulation
            drakeGroup.drake.cancel(true);
            // If there is a target container, just add it in
            if (_this.getElFileId(drop.target)) {
                _this.addFileToFileChildren(_this.getElFileId(drop.el), _this.getElFileId(drop.target));
                return;
            }
            // If there is a sibling, insert it before the sibling
            if (drop.sibling && _this.getElFileId(drop.sibling)) {
                _this.insertFileBeforeFile(_this.getElFileId(drop.el), _this.getElFileId(drop.sibling));
                // If there is NO sibling, it was dropped at the bottom, insert at end
            }
            else {
                var lastVisibleFileId = Object(lodash__WEBPACK_IMPORTED_MODULE_7__["last"])(_this.fileIdsAndDepth)[0];
                _this.insertFileAfterFile(_this.getElFileId(drop.el), lastVisibleFileId);
            }
        }));
        this.subs.add(this.dragulaService.over('EXP')
            .subscribe(function (_a) {
            var el = _a.el;
            // if a folder is being dragged isContainer function will return true
            // this makes 'el' be the childElement so I also check the parentNode's attribute
            var nextFileIdBeingDragged = _this.getElFileId(el);
            // for the first over event after a dragend, el is the element being dragged
            if (!_this.fileIdBeingDragged && (_this.fileIdBeingDragged !== nextFileIdBeingDragged)) {
                _this.fileIdBeingDragged = nextFileIdBeingDragged;
                _this.closedFileIdsChange.emit(new Set(tslib__WEBPACK_IMPORTED_MODULE_0__["__spread"](_this.closedFileIds, [
                    _this.fileIdBeingDragged,
                ])));
            }
        }));
        this.subs.add(this.dragulaService.dragend('EXP')
            .subscribe(function () { return _this.fileIdBeingDragged = undefined; }));
    }
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
        this.sensor = new css_element_queries_src_ResizeSensor__WEBPACK_IMPORTED_MODULE_5___default.a(this.hostEl.nativeElement, function () {
            if (_this.scrollViewport && _this.scrollViewport.first) {
                _this.scrollViewport.first.checkViewportSize();
            }
        });
    };
    FileExplorerComponent.prototype.ngOnDestroy = function () {
        this.subs.unsubscribe();
        this.dragulaService.destroy('EXP');
        this.sensor.detach();
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
    FileExplorerComponent.prototype.insertFileAfterFile = function (fileId1, fileId2) {
        var changes = {};
        Object(lodash__WEBPACK_IMPORTED_MODULE_7__["each"])(this.filesById, function (file) {
            if (Object(lodash__WEBPACK_IMPORTED_MODULE_7__["includes"])(file.childIds, fileId1)) {
                changes[file.id] = Object.assign(new _models_index__WEBPACK_IMPORTED_MODULE_10__["File"](), tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"]({}, file, { childIds: Object(lodash__WEBPACK_IMPORTED_MODULE_7__["without"])(file.childIds, fileId1) }));
            }
        });
        var insertParent = this.filesById[this.parentIdsByFileId[fileId2]];
        var nextChildIds = Object(lodash__WEBPACK_IMPORTED_MODULE_7__["without"])(insertParent.childIds, fileId1);
        // const insertionIndex = nextChildIds.indexOf(fileId2);
        nextChildIds.push(fileId1);
        changes[insertParent.id] = Object.assign(new _models_index__WEBPACK_IMPORTED_MODULE_10__["File"](), tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"]({}, insertParent, { childIds: nextChildIds }));
        this.filesByIdChange.emit(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"]({}, this.filesById, changes));
    };
    FileExplorerComponent.prototype.insertFileBeforeFile = function (fileId1, fileId2) {
        if (fileId2 === this.rootFileId) {
            return;
        }
        var changes = {};
        Object(lodash__WEBPACK_IMPORTED_MODULE_7__["each"])(this.filesById, function (file) {
            if (Object(lodash__WEBPACK_IMPORTED_MODULE_7__["includes"])(file.childIds, fileId1)) {
                changes[file.id] = Object.assign(new _models_index__WEBPACK_IMPORTED_MODULE_10__["File"](), tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"]({}, file, { childIds: Object(lodash__WEBPACK_IMPORTED_MODULE_7__["without"])(file.childIds, fileId1) }));
            }
        });
        var insertParent = this.filesById[this.parentIdsByFileId[fileId2]];
        var nextChildIds = Object(lodash__WEBPACK_IMPORTED_MODULE_7__["without"])(insertParent.childIds, fileId1);
        var insertionIndex = nextChildIds.indexOf(fileId2);
        nextChildIds.splice(insertionIndex, 0, fileId1);
        changes[insertParent.id] = Object.assign(new _models_index__WEBPACK_IMPORTED_MODULE_10__["File"](), tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"]({}, insertParent, { childIds: nextChildIds }));
        this.filesByIdChange.emit(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"]({}, this.filesById, changes));
    };
    FileExplorerComponent.prototype.addFileToFileChildren = function (fileId1, fileId2) {
        var changes = {};
        Object(lodash__WEBPACK_IMPORTED_MODULE_7__["each"])(this.filesById, function (file) {
            if (Object(lodash__WEBPACK_IMPORTED_MODULE_7__["includes"])(file.childIds, fileId1)) {
                changes[file.id] = Object.assign(new _models_index__WEBPACK_IMPORTED_MODULE_10__["File"](), tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"]({}, file, { childIds: Object(lodash__WEBPACK_IMPORTED_MODULE_7__["without"])(file.childIds, fileId1) }));
            }
        });
        // empty fileId2 means insert after the last element
        if (fileId2) {
            var parentFile = this.filesById[fileId2];
            changes[parentFile.id] = Object.assign(new _models_index__WEBPACK_IMPORTED_MODULE_10__["File"](), tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"]({}, this.filesById[parentFile.id], { childIds: Object(lodash__WEBPACK_IMPORTED_MODULE_7__["uniq"])(tslib__WEBPACK_IMPORTED_MODULE_0__["__spread"]([fileId1], parentFile.childIds)) }));
        }
        else {
            var parentFile = this.filesById[this.rootFileId];
            changes[parentFile.id] = Object.assign(new _models_index__WEBPACK_IMPORTED_MODULE_10__["File"](), tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"]({}, this.filesById[parentFile.id], { childIds: Object(lodash__WEBPACK_IMPORTED_MODULE_7__["uniq"])(tslib__WEBPACK_IMPORTED_MODULE_0__["__spread"](parentFile.childIds, [fileId1])) }));
        }
        this.filesByIdChange.emit(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"]({}, this.filesById, changes));
    };
    FileExplorerComponent.prototype.getParentIdsByFileId = function (fileId, filesById) {
        var _this = this;
        var file = filesById[fileId];
        var parentIdsByFileId = {};
        Object(lodash__WEBPACK_IMPORTED_MODULE_7__["each"])(file.childIds, function (childId) {
            parentIdsByFileId[childId] = fileId;
            var innerParentIdsByFileId = _this.getParentIdsByFileId(childId, filesById);
            Object(lodash__WEBPACK_IMPORTED_MODULE_7__["each"])(innerParentIdsByFileId, function (parentId, grandChildId) {
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
        var fuzzResults = fuzz_js__WEBPACK_IMPORTED_MODULE_6__["Fuzz"].search(fileList, filterString, {
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
        Object(_utils_index__WEBPACK_IMPORTED_MODULE_9__["reverseBreadthFirstBy"])(this.rootFileId, function (fileId) {
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
        if (this.hideRoot && currentFileId === this.rootFileId) {
            fileIdsAndDepth.length = 0;
            depth--;
        }
        Object(lodash__WEBPACK_IMPORTED_MODULE_7__["each"])(sortedChildIdsByFileId ? sortedChildIdsByFileId[currentFile.id] : currentFile.childIds, function (childId) {
            var childFileIdsAndDepth = _this.getFileIdsAndDepth(childId, filesById, sortedChildIdsByFileId, depth + 1);
            fileIdsAndDepth.push.apply(fileIdsAndDepth, tslib__WEBPACK_IMPORTED_MODULE_0__["__spread"](childFileIdsAndDepth));
        });
        return fileIdsAndDepth;
    };
    FileExplorerComponent.prototype.getVisibleFileIds = function (currentFileId, filesById, closedFileIds, maxScoresByFileId) {
        var _this = this;
        if (maxScoresByFileId === void 0) { maxScoresByFileId = {}; }
        var currentFile = filesById[currentFileId];
        var currentMaxScore = Object(lodash__WEBPACK_IMPORTED_MODULE_7__["isUndefined"])(maxScoresByFileId[currentFileId]) ? 1 : maxScoresByFileId[currentFileId];
        var visibleFileIds = new Set();
        if (currentMaxScore > 0.80) {
            visibleFileIds.add(currentFile.id);
        }
        if (!closedFileIds.has(currentFileId)) {
            Object(lodash__WEBPACK_IMPORTED_MODULE_7__["each"])(currentFile.childIds, function (childId) {
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
        if (!this.multiFileSelect) {
            this.selectedFileIdsChange.emit(new Set([file.id]));
        }
        else {
            if (file.childIds) {
                return;
            }
            var nextSelectedFileIds = new Set(this.selectedFileIds);
            if (nextSelectedFileIds.has(file.id)) {
                nextSelectedFileIds.delete(file.id);
            }
            else {
                nextSelectedFileIds.add(file.id);
            }
            this.selectedFileIdsChange.emit(nextSelectedFileIds);
        }
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
    FileExplorerComponent.ctorParameters = function () { return [
        { type: ng2_dragula__WEBPACK_IMPORTED_MODULE_8__["DragulaService"] },
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"] }
    ]; };
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
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
    ], FileExplorerComponent.prototype, "hideRoot", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
    ], FileExplorerComponent.prototype, "multiFileSelect", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
    ], FileExplorerComponent.prototype, "dragEnabled", void 0);
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
                ng2_dragula__WEBPACK_IMPORTED_MODULE_8__["DragulaService"],
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
    FileGroup.prototype.removeAsChildId = function (parentId, childId) {
        var parent = this.filesById[parentId];
        var child = this.filesById[childId];
        this.removeAsChild(parent, child);
    };
    FileGroup.prototype.removeAsChild = function (parent, child) {
        parent.childIds = parent.childIds.filter(function (childId) { return childId !== child.id; });
    };
    FileGroup.prototype.addAsChildId = function (parentId, childId) {
        var parent = this.filesById[parentId];
        var child = this.filesById[childId];
        this.addAsChild(parent, child);
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
/* harmony default export */ __webpack_exports__["default"] = ("@media screen and (max-width: 750px) {\n  :host div.page-container {\n    flex-direction: column;\n  }\n  :host div.page-container .left-side {\n    flex: 0 0 auto;\n    height: 13.25rem;\n    width: 100%;\n    max-width: none;\n    transition: height 50ms;\n  }\n  :host div.page-container .left-side.expanded {\n    height: 85%;\n  }\n  :host div.page-container .left-side .expander {\n    background-color: #3F4038;\n    color: #FCFCF9;\n    position: absolute;\n    bottom: 0;\n    left: 50%;\n    transform: translateX(-50%);\n    width: 3.5rem;\n    height: 1rem;\n    border: 1px solid #8A9A5B;\n    border-radius: 5px 5px 0 0;\n    text-align: center;\n    display: flex;\n    justify-content: center;\n    cursor: pointer;\n  }\n  :host div.page-container .left-side .expander:hover {\n    background-color: #4B5320;\n    color: #FCFCF9;\n  }\n  :host div.page-container .left-side .expander.active {\n    background-color: #708238;\n    color: #FCFCF9;\n  }\n  :host div.page-container .left-side .expander .expander-icon {\n    font-size: 16px;\n  }\n  :host div.page-container .left-side .expander .expander-icon.flipped {\n    transform: rotate(180deg);\n  }\n}\n:host .page-container {\n  height: 100%;\n  width: 100%;\n  display: flex;\n}\n:host .page-container .left-side {\n  position: relative;\n  flex: 1 1 0;\n  overflow: hidden;\n  max-width: 27.5%;\n  min-width: 20rem;\n}\n:host .page-container .left-side .expander {\n  display: none;\n}\n:host .page-container .right-side {\n  flex: 1 1 0;\n  overflow: auto;\n  position: relative;\n}\n:host .page-container .left-side {\n  background-color: #DDD9CF;\n  display: flex;\n  flex-direction: column;\n}\n:host .page-container .left-side dwu-file-explorer {\n  flex: 1 1 0;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9hZG1pbi9wcm9qZWN0cy9kYXd1LWhvbWUvc3JjL3N0eWxlcy9taXhpbnMuc2NzcyIsInNyYy9hcHAvcG9ydGZvbGlvL3BvcnRmb2xpby5jb21wb25lbnQuc2NzcyIsIi9Vc2Vycy9hZG1pbi9wcm9qZWN0cy9kYXd1LWhvbWUvc3JjL3N0eWxlcy92YXJpYWJsZXMuc2NzcyIsIi9Vc2Vycy9hZG1pbi9wcm9qZWN0cy9kYXd1LWhvbWUvc3JjL2FwcC9wb3J0Zm9saW8vcG9ydGZvbGlvLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQTRGSTtFQUNJO0lBQ0ksc0JBQUE7RUMzRlY7RUQ0RlU7SUFDSSxjQUFBO0lBQ0EsZ0JBQUE7SUFDQSxXQUFBO0lBQ0EsZUFBQTtJQUVBLHVCQUFBO0VDM0ZkO0VENEZjO0lBQ0ksV0FBQTtFQzFGbEI7RUQ0RmM7SUEwR1oseUJFN0xVO0lGOExWLGNFeE1hO0lGK0ZHLGtCQUFBO0lBQ0EsU0FBQTtJQUNBLFNBQUE7SUFDQSwyQkFBQTtJQUNBLGFBQUE7SUFDQSxZQUFBO0lBQ0EseUJBQUE7SUFDQSwwQkFBQTtJQUNBLGtCQUFBO0lBQ0EsYUFBQTtJQUNBLHVCQUFBO0lBQ0EsZUFBQTtFQ3pGbEI7RUR3TEU7SUFDSSx5QkVwTks7SUZxTkwsY0UzTVM7RURxQmY7RUR3TEU7SUFDSSx5QkV2Tk07SUZ3Tk4sY0UvTVM7RUR5QmY7RURrRmtCO0lBQ0ksZUFBQTtFQ2hGdEI7RURpRnNCO0lBQ0kseUJBQUE7RUMvRTFCO0FBQ0Y7QURzRkk7RUFDSSxZQUFBO0VBQ0EsV0FBQTtFQUNBLGFBQUE7QUNwRlI7QURzRlE7RUFDSSxrQkFBQTtFQUNBLFdBQUE7RUFDQSxnQkFBQTtFQUNBLGdCQUFBO0VBQ0EsZ0JBQUE7QUNwRlo7QURxRlk7RUFDSSxhQUFBO0FDbkZoQjtBRHNGUTtFQUNJLFdBQUE7RUFDQSxjQUFBO0VBQ0Esa0JBQUE7QUNwRlo7QUUzRFE7RUFDSSx5QkRTTTtFQ1JOLGFBQUE7RUFDQSxzQkFBQTtBRjZEWjtBRTVEWTtFQUNJLFdBQUE7QUY4RGhCIiwiZmlsZSI6InNyYy9hcHAvcG9ydGZvbGlvL3BvcnRmb2xpby5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIkBpbXBvcnQgJ3ZhcmlhYmxlcyc7XG5cbkBtaXhpbiBiYXNlLWNvcm9uYS1kYXNoYm9hcmQge1xuICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgIHBhZGRpbmctYm90dG9tOiAycmVtO1xuICAgIC5jaGFydC1jb250YWluZXIge1xuICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAgICAuY2hhcnQtaGVhZGVyIHtcbiAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICAgIHBhZGRpbmc6IDAgMS41cmVtO1xuICAgICAgICAgICAgYWxpZ24taXRlbXM6IGZsZXgtZW5kO1xuICAgICAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcblxuICAgICAgICAgICAgLnJhZGlvLWJ1dHRvbi1jb250YWluZXJ7XG4gICAgICAgICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAgICAgICAgICAgIGp1c3RpZnktY29udGVudDogZmxleC1lbmQ7XG4gICAgICAgICAgICAgICAgZmxleC13cmFwOiB3cmFwO1xuXG4gICAgICAgICAgICAgICAgLnJhZGlvLWJ1dHRvbnMge1xuICAgICAgICAgICAgICAgICAgICBAaW5jbHVkZSByYWRpby1idXR0b24tY29udGFpbmVyO1xuICAgICAgICAgICAgICAgICAgICAmOm5vdCg6Zmlyc3QtY2hpbGQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIG1hcmdpbi1sZWZ0OiAxcmVtO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICYuY2hhcnQge1xuICAgICAgICAgICAgICAgICAgICAgICAgLnJhZGlvLWJ1dHRvbiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbWluLXdpZHRoOiBhdXRvO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBhZGRpbmc6IDNweDtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLm1hdGVyaWFsLWljb25zIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZmxleDogMSAwIGF1dG87XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMS4yNXJlbTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgLnJhZGlvLWJ1dHRvbiB7XG4gICAgICAgICAgICAgICAgICAgICAgICBtYXJnaW4tdG9wOiAwLjVyZW07XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBkd3Utc3RhdC12aWV3ZXIge1xuICAgICAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAgICAgICAganVzdGlmeS1jb250ZW50OiBmbGV4LWVuZDtcbiAgICAgICAgICAgICAgICBmbGV4OiAxIDAgYXV0bztcbiAgICAgICAgICAgICAgICBtYXJnaW4tdG9wOiAxcmVtO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIC5vdmVydmlldy5jaGFydCB7XG4gICAgICAgICAgICBoZWlnaHQ6IDEyLjVyZW07XG4gICAgICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgfVxuICAgICAgICBkd3UtY2hhcnQtbGVnZW5kIHtcbiAgICAgICAgICAgIGZsZXg6IDAgMCBhdXRvO1xuICAgICAgICAgICAgbWFyZ2luLXRvcDogMC4yNXJlbTtcbiAgICAgICAgICAgIG1hcmdpbi1ib3R0b206IDJyZW07XG4gICAgICAgIH1cbiAgICB9XG59XG5cbkBtaXhpbiByYWRpby1idXR0b24tY29udGFpbmVyIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIC5yYWRpby1idXR0b24ge1xuICAgICAgICBAaW5jbHVkZSBsaWdodC1taW5pLWJ1dHRvbjtcbiAgICAgICAgQGluY2x1ZGUgc2hhZG93O1xuICAgICAgICAmOmZpcnN0LWNoaWxkIHtcbiAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDVweCAwIDAgNXB4O1xuICAgICAgICB9XG4gICAgICAgICY6bGFzdC1jaGlsZCB7XG4gICAgICAgICAgICBib3JkZXItcmFkaXVzOiAwIDVweCA1cHggMDtcbiAgICAgICAgfVxuICAgIH1cbn1cblxuQG1peGluIHNoYWRvdyB7XG4gICAgdHJhbnNpdGlvbi1kdXJhdGlvbjogYm94LXNoYWRvdyAyNW1zLCB0cmFuc2Zvcm0sIDI1bXM7XG4gICAgYm94LXNoYWRvdzogMXB4IDFweCAycHggMCAkbGlnaHRlci1ncmF5O1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgwKTtcbiAgICAmOmFjdGl2ZSB7XG4gICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgxcHgpO1xuICAgICAgICBib3gtc2hhZG93OiBub25lO1xuICAgIH1cbiAgICAmLmFjdGl2ZSB7XG4gICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgxcHgpO1xuICAgICAgICBib3gtc2hhZG93OiBub25lO1xuICAgIH1cbn1cblxuQG1peGluIHJlc3BvbnNpdmUtcGFnZSB7XG4gICAgQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogNzUwcHgpIHtcbiAgICAgICAgZGl2LnBhZ2UtY29udGFpbmVyIHtcbiAgICAgICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgICAgICAgICAubGVmdC1zaWRlIHtcbiAgICAgICAgICAgICAgICBmbGV4OiAwIDAgYXV0bztcbiAgICAgICAgICAgICAgICBoZWlnaHQ6IDEzLjI1cmVtO1xuICAgICAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICAgICAgICAgIG1heC13aWR0aDogbm9uZTtcbiAgICAgICAgICAgICAgICAvLyBtaW4td2lkdGg6IG5vbmU7XG4gICAgICAgICAgICAgICAgdHJhbnNpdGlvbjogaGVpZ2h0IDUwbXM7XG4gICAgICAgICAgICAgICAgJi5leHBhbmRlZCB7XG4gICAgICAgICAgICAgICAgICAgIGhlaWdodDogODUlO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAuZXhwYW5kZXIge1xuICAgICAgICAgICAgICAgICAgICBAaW5jbHVkZSBkYXJrLXRoZW1lO1xuICAgICAgICAgICAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgICAgICAgICAgICAgIGJvdHRvbTogMDtcbiAgICAgICAgICAgICAgICAgICAgbGVmdDogNTAlO1xuICAgICAgICAgICAgICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoLTUwJSk7XG4gICAgICAgICAgICAgICAgICAgIHdpZHRoOiAzLjVyZW07XG4gICAgICAgICAgICAgICAgICAgIGhlaWdodDogMXJlbTtcbiAgICAgICAgICAgICAgICAgICAgYm9yZGVyOiAxcHggc29saWQgJG1vc3MtZ3JlZW47XG4gICAgICAgICAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDVweCA1cHggMCAwIDtcbiAgICAgICAgICAgICAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgICAgICAgICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgICAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICAgICAgICAgICAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xuICAgICAgICAgICAgICAgICAgICAuZXhwYW5kZXItaWNvbiB7XG4gICAgICAgICAgICAgICAgICAgICAgICBmb250LXNpemU6IDE2cHg7XG4gICAgICAgICAgICAgICAgICAgICAgICAmLmZsaXBwZWQge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRyYW5zZm9ybTogcm90YXRlKDE4MGRlZyk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cbiAgICAucGFnZS1jb250YWluZXIge1xuICAgICAgICBoZWlnaHQ6IDEwMCU7XG4gICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICBkaXNwbGF5OiBmbGV4O1xuXG4gICAgICAgIC5sZWZ0LXNpZGUge1xuICAgICAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgICAgICAgICAgZmxleDogMSAxIDA7XG4gICAgICAgICAgICBvdmVyZmxvdzogaGlkZGVuO1xuICAgICAgICAgICAgbWF4LXdpZHRoOiAyNy41JTtcbiAgICAgICAgICAgIG1pbi13aWR0aDogMjByZW07XG4gICAgICAgICAgICAuZXhwYW5kZXIge1xuICAgICAgICAgICAgICAgIGRpc3BsYXk6IG5vbmU7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgLnJpZ2h0LXNpZGUge1xuICAgICAgICAgICAgZmxleDogMSAxIDA7XG4gICAgICAgICAgICBvdmVyZmxvdzogYXV0bztcbiAgICAgICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICAgICAgfVxuICAgIH1cblxufVxuQG1peGluIGxpZ2h0LW1pbmktYnV0dG9uIHtcbiAgICBAaW5jbHVkZSBsaWdodC10aGVtZTtcbiAgICBAaW5jbHVkZSBidXR0b24teHM7XG59XG5cbkBtaXhpbiBsaWdodC1zbWFsbC1idXR0b24ge1xuICAgIEBpbmNsdWRlIGxpZ2h0LXRoZW1lO1xuICAgIEBpbmNsdWRlIGJ1dHRvbi1zbTtcbn1cblxuQG1peGluIGRhcmstYnV0dG9uIHtcbiAgICBAaW5jbHVkZSBkYXJrLXRoZW1lO1xuICAgIEBpbmNsdWRlIGJ1dHRvbi1tZDtcbn1cblxuQG1peGluIGJ1dHRvbi14cyB7XG4gICAgbWluLXdpZHRoOiAycmVtO1xuICAgIHBhZGRpbmc6IDAuMjVyZW0gMC41cmVtO1xuICAgIGZvbnQtc2l6ZTogMXJlbTtcbiAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIG91dGxpbmU6IG5vbmU7XG4gICAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcbiAgICB1c2VyLXNlbGVjdDogbm9uZTtcbn1cblxuQG1peGluIGJ1dHRvbi1zbSB7XG4gICAgbWluLXdpZHRoOiAzcmVtO1xuICAgIHBhZGRpbmc6IDAuMjVyZW0gMC41cmVtO1xuICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgb3V0bGluZTogbm9uZTtcbiAgICB3aGl0ZS1zcGFjZTogbm93cmFwO1xuICAgIHVzZXItc2VsZWN0OiBub25lO1xufVxuXG5AbWl4aW4gYnV0dG9uLW1kIHtcbiAgICB3aWR0aDogOHJlbTtcbiAgICBwYWRkaW5nOiAwLjVyZW07XG4gICAgY3Vyc29yOiBwb2ludGVyO1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICBvdXRsaW5lOiBub25lO1xuICAgIHdoaXRlLXNwYWNlOiBub3dyYXA7XG4gICAgdXNlci1zZWxlY3Q6IG5vbmU7XG59XG5cbkBtaXhpbiBsaWdodC10aGVtZSB7XG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6ICRlZ2dzaGVsbC1kYXJrO1xuICAgICY6aG92ZXIge1xuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkbGF1cmVsLWdyZWVuO1xuICAgIH1cbiAgICAmLmFjdGl2ZSB7XG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6ICRvbGl2ZS1ncmVlbjtcbiAgICAgICAgY29sb3I6ICRsaWdodGVzdC1ncmVlbjtcbiAgICB9XG59XG5cbkBtaXhpbiBkYXJrLXRoZW1lIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkYmxhY2stb2xpdmU7XG4gICAgY29sb3I6ICRsaWdodGVzdC1ncmVlbjtcbiAgICAmOmhvdmVyIHtcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogJGFybXktZ3JlZW47XG4gICAgICAgIGNvbG9yOiAkbGlnaHRlc3QtZ3JlZW47XG4gICAgfVxuICAgICYuYWN0aXZlIHtcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogJG9saXZlLWdyZWVuO1xuICAgICAgICBjb2xvcjogJGxpZ2h0ZXN0LWdyZWVuO1xuICAgIH1cbn1cblxuQG1peGluIHRvcC1uYXYtcGFnZSB7XG4gICAgaGVpZ2h0OiAxMDAlO1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICAubWFpbi1jb250ZW50IHtcbiAgICAgICAgZmxleDogMSAxIDA7XG4gICAgICAgIG92ZXJmbG93OiBhdXRvO1xuICAgIH1cbn1cblxuQG1peGluIHJlc3BvbmQtdG8oJG1lZGlhKSB7XG4gIEBpZiAkbWVkaWEgPT0gc21hbGwge1xuICAgIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogJGJyZWFrLXNtYWxsKSB7IEBjb250ZW50OyB9XG4gIH1cbiAgQGVsc2UgaWYgJG1lZGlhID09IG1lZGl1bSB7XG4gICAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWluLXdpZHRoOiAkYnJlYWstc21hbGwgKyAxKSBhbmQgKG1heC13aWR0aDogJGJyZWFrLWxhcmdlIC0gMSkgeyBAY29udGVudDsgfVxuICB9XG4gIEBlbHNlIGlmICRtZWRpYSA9PSB3aWRlIHtcbiAgICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChtaW4td2lkdGg6ICRicmVhay1sYXJnZSkgeyBAY29udGVudDsgfVxuICB9XG59XG4iLCJAbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA3NTBweCkge1xuICA6aG9zdCBkaXYucGFnZS1jb250YWluZXIge1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIH1cbiAgOmhvc3QgZGl2LnBhZ2UtY29udGFpbmVyIC5sZWZ0LXNpZGUge1xuICAgIGZsZXg6IDAgMCBhdXRvO1xuICAgIGhlaWdodDogMTMuMjVyZW07XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgbWF4LXdpZHRoOiBub25lO1xuICAgIHRyYW5zaXRpb246IGhlaWdodCA1MG1zO1xuICB9XG4gIDpob3N0IGRpdi5wYWdlLWNvbnRhaW5lciAubGVmdC1zaWRlLmV4cGFuZGVkIHtcbiAgICBoZWlnaHQ6IDg1JTtcbiAgfVxuICA6aG9zdCBkaXYucGFnZS1jb250YWluZXIgLmxlZnQtc2lkZSAuZXhwYW5kZXIge1xuICAgIGJhY2tncm91bmQtY29sb3I6ICMzRjQwMzg7XG4gICAgY29sb3I6ICNGQ0ZDRjk7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIGJvdHRvbTogMDtcbiAgICBsZWZ0OiA1MCU7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKC01MCUpO1xuICAgIHdpZHRoOiAzLjVyZW07XG4gICAgaGVpZ2h0OiAxcmVtO1xuICAgIGJvcmRlcjogMXB4IHNvbGlkICM4QTlBNUI7XG4gICAgYm9yZGVyLXJhZGl1czogNXB4IDVweCAwIDA7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgY3Vyc29yOiBwb2ludGVyO1xuICB9XG4gIDpob3N0IGRpdi5wYWdlLWNvbnRhaW5lciAubGVmdC1zaWRlIC5leHBhbmRlcjpob3ZlciB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzRCNTMyMDtcbiAgICBjb2xvcjogI0ZDRkNGOTtcbiAgfVxuICA6aG9zdCBkaXYucGFnZS1jb250YWluZXIgLmxlZnQtc2lkZSAuZXhwYW5kZXIuYWN0aXZlIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjNzA4MjM4O1xuICAgIGNvbG9yOiAjRkNGQ0Y5O1xuICB9XG4gIDpob3N0IGRpdi5wYWdlLWNvbnRhaW5lciAubGVmdC1zaWRlIC5leHBhbmRlciAuZXhwYW5kZXItaWNvbiB7XG4gICAgZm9udC1zaXplOiAxNnB4O1xuICB9XG4gIDpob3N0IGRpdi5wYWdlLWNvbnRhaW5lciAubGVmdC1zaWRlIC5leHBhbmRlciAuZXhwYW5kZXItaWNvbi5mbGlwcGVkIHtcbiAgICB0cmFuc2Zvcm06IHJvdGF0ZSgxODBkZWcpO1xuICB9XG59XG46aG9zdCAucGFnZS1jb250YWluZXIge1xuICBoZWlnaHQ6IDEwMCU7XG4gIHdpZHRoOiAxMDAlO1xuICBkaXNwbGF5OiBmbGV4O1xufVxuOmhvc3QgLnBhZ2UtY29udGFpbmVyIC5sZWZ0LXNpZGUge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIGZsZXg6IDEgMSAwO1xuICBvdmVyZmxvdzogaGlkZGVuO1xuICBtYXgtd2lkdGg6IDI3LjUlO1xuICBtaW4td2lkdGg6IDIwcmVtO1xufVxuOmhvc3QgLnBhZ2UtY29udGFpbmVyIC5sZWZ0LXNpZGUgLmV4cGFuZGVyIHtcbiAgZGlzcGxheTogbm9uZTtcbn1cbjpob3N0IC5wYWdlLWNvbnRhaW5lciAucmlnaHQtc2lkZSB7XG4gIGZsZXg6IDEgMSAwO1xuICBvdmVyZmxvdzogYXV0bztcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xufVxuOmhvc3QgLnBhZ2UtY29udGFpbmVyIC5sZWZ0LXNpZGUge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjREREOUNGO1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xufVxuOmhvc3QgLnBhZ2UtY29udGFpbmVyIC5sZWZ0LXNpZGUgZHd1LWZpbGUtZXhwbG9yZXIge1xuICBmbGV4OiAxIDEgMDtcbn0iLCJcbiRkYXJrLWdyZWVuOiAjMjkyRTEyO1xuJGFybXktZ3JlZW46ICM0QjUzMjA7XG4kb2xpdmUtZ3JlZW46ICM3MDgyMzg7XG4kbW9zcy1ncmVlbjogIzhBOUE1QjtcbiRsYXVyZWwtZ3JlZW46ICNCQUMzOUY7XG5cbiRzYXR1cmF0ZWQtb2xpdmU6ICM3Mjk5MDA7XG4kc2F0dXJhdGVkLWJsdWU6ICMxNjRFQjc7XG5cbi8vIG5pY2UgZm9yIHRleHQgYWdhaW5zdCBkYXJrIGJhY2tncm91bmRcbiRsaWdodC1ncmVlbjogI0Y0RjdFQTtcbiRsaWdodGVzdC1ncmVlbjogI0ZDRkNGOTtcblxuLy8gVXNlZCBmb3IgZmlsZSBzZWxlY3RvclxuJGVnZ3NoZWxsLWRhcmtlcjogI0RERDlDRjtcbiRlZ2dzaGVsbC1kYXJrOiAjRUFFNkRBO1xuJGVnZ3NoZWxsOiAjRUZFQkRGO1xuJGVnZ3NoZWxsLWxpZ2h0OiAjRjJFRUUxO1xuXG4vLyBncmF5c1xuJGJhc2ljYWxseS1ibGFjazogIzIwMjEyNDtcbiRibGFjay1vbGl2ZTogIzNGNDAzODtcbiRncmFuaXRlOiAjNjU2MzVGO1xuJGxpZ2h0ZXItZ3JheTogIzlEOUI5OTtcbiR3aGl0ZTogI2ZmZjtcblxuJGdvbGQ6ICNENkI5MDI7XG4kc3Rhci1ibHVlOiAjMUQ2MkM0O1xuXG4kYnJlYWstc21hbGw6IDU1MHB4O1xuJGJyZWFrLW1kOiA4MDBweDtcbiRicmVhay1sYXJnZTogMTAyNHB4O1xuIiwiQGltcG9ydCAnbWl4aW5zJztcblxuOmhvc3Qge1xuICAgIEBpbmNsdWRlIHJlc3BvbnNpdmUtcGFnZTtcbiAgICAucGFnZS1jb250YWluZXIge1xuICAgICAgICAubGVmdC1zaWRlIHtcbiAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICRlZ2dzaGVsbC1kYXJrZXI7XG4gICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICAgICAgICAgIGR3dS1maWxlLWV4cGxvcmVyIHtcbiAgICAgICAgICAgICAgICBmbGV4OiAxIDEgMDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cbn1cbiJdfQ== */");

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
        this.filterStr = '';
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
/* harmony import */ var fuzz_demo_app__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! fuzz-demo-app */ "./node_modules/fuzz-demo-app/dist/bundles/fuzz-demo-app.umd.js");
/* harmony import */ var fuzz_demo_app__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(fuzz_demo_app__WEBPACK_IMPORTED_MODULE_9__);
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


// import { DemoPageWrapperComponent as FuzzDemoPageComponent } from 'fuzz-demo-app';
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

/***/ "./src/app/utils/date-time.ts":
/*!************************************!*\
  !*** ./src/app/utils/date-time.ts ***!
  \************************************/
/*! exports provided: getDateFromStr */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getDateFromStr", function() { return getDateFromStr; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");

function getDateFromStr(dateStr) {
    var splitDateStr = dateStr.split('-').map(Number);
    return new Date(splitDateStr[0], splitDateStr[1] - 1, splitDateStr[2]);
}


/***/ }),

/***/ "./src/app/utils/index.ts":
/*!********************************!*\
  !*** ./src/app/utils/index.ts ***!
  \********************************/
/*! exports provided: breadthFirstBy, reverseBreadthFirstBy, getDateFromStr */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _traversals__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./traversals */ "./src/app/utils/traversals.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "breadthFirstBy", function() { return _traversals__WEBPACK_IMPORTED_MODULE_1__["breadthFirstBy"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "reverseBreadthFirstBy", function() { return _traversals__WEBPACK_IMPORTED_MODULE_1__["reverseBreadthFirstBy"]; });

/* harmony import */ var _date_time__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./date-time */ "./src/app/utils/date-time.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getDateFromStr", function() { return _date_time__WEBPACK_IMPORTED_MODULE_2__["getDateFromStr"]; });






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
/*! exports provided: 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 44, 45, 46, 47, 48, 49, 50, 51, 52, 53, 54, 55, 56, 57, 58, 59, 60, 61, 62, 63, 64, 65, 66, 67, 68, 69, 70, 71, 72, 73, 74, 75, 76, 77, 78, 79, 80, 81, 82, 83, 84, 85, 86, 87, 88, 89, 90, 91, 92, 93, 94, 95, 96, 97, 98, 99, 100, 101, 102, 103, 104, 105, 106, 107, 108, 109, 110, 111, 112, 113, 114, 115, 116, 117, 118, 119, 120, 121, 122, 123, 124, 125, 126, 127, 128, 129, 130, 131, 132, 133, 134, 135, 136, 137, 138, 139, 140, 141, 142, 143, 144, 145, 146, 147, 148, 149, 150, 151, 152, 153, 154, 155, 156, 157, 158, 159, 160, 161, 162, 163, 164, 165, 166, 167, 168, 169, 170, 171, 172, 173, 174, 175, 176, 177, 178, 179, 180, 181, 182, 183, 184, 185, 186, 187, 188, 189, 190, 191, 192, 193, 194, 195, 196, 197, 198, 199, 200, 201, 202, 203, 204, 205, 206, 207, 208, 209, 210, 211, 212, 213, 214, 215, 216, 217, 218, 219, 220, 221, 222, 223, 224, 225, 226, 227, 228, 229, 230, 231, 232, 233, 234, 235, 236, 237, 238, 239, 240, 241, 242, 243, 244, 245, 246, 247, 248, 249, 250, 251, 252, 253, 254, 255, 256, 257, 258, 259, 260, 261, 262, 263, 264, 265, 266, 267, 268, 269, 270, 271, 272, 273, 274, 275, 276, 277, 278, 279, 280, 281, 282, 283, 284, 285, 286, 287, 288, 289, 290, 291, 292, 293, 294, 295, 296, 297, 298, 299, 300, 301, 302, 303, 304, 305, 306, 307, 308, 309, 310, 311, 312, 313, 314, 315, 316, 317, 318, 319, 320, 321, 322, 323, 324, 325, 326, 327, 328, 329, 330, 331, 332, 333, 334, 335, 336, 337, 338, 339, 340, 341, 342, 343, 344, 345, 346, 347, 348, 349, 350, 351, 352, 353, 354, 355, 356, 357, 358, 359, 360, 361, 362, 363, 364, 365, 366, 367, 368, 369, 370, 371, 372, 373, 374, 375, 376, 377, 378, 379, 380, 381, 382, 383, 384, 385, 386, 387, 388, 389, 390, 391, 392, 393, 394, 395, 396, 397, 398, 399, 400, 401, 402, 403, 404, 405, 406, 407, 408, 409, 410, 411, 412, 413, 414, 415, 416, 417, 418, 419, 420, 421, 422, 423, 424, 425, 426, 427, 428, 429, 430, 431, 432, 433, 434, 435, 436, 437, 438, 439, 440, 441, 442, 443, 444, 445, 446, 447, 448, 449, 450, 451, 452, 453, 454, 455, 456, 457, 458, 459, 460, 461, 462, 463, 464, 465, 466, 467, 468, 469, 470, 471, 472, 473, 474, 475, 476, 477, 478, 479, 480, 481, 482, 483, 484, 485, 486, 487, 488, 489, 490, 491, 492, 493, 494, 495, 496, 497, 498, 499, 500, 501, 502, 503, 504, 505, 506, 507, 508, 509, 510, 511, 512, 513, 514, 515, 516, 517, 518, 519, 520, 521, 522, 523, 524, 525, 526, 527, 528, 529, 530, 531, 532, 533, 534, 535, 536, 537, 538, 539, 540, 541, 542, 543, 544, 545, 546, 547, 548, 549, 550, 551, 552, 553, 554, 555, 556, 557, 558, 559, 560, 561, 562, 563, 564, 565, 566, 567, 568, 569, 570, 571, 572, 573, 574, 575, 576, 577, 578, 579, 580, 581, 582, 583, 584, 585, 586, 587, 588, 589, 590, 591, 592, 593, 594, 595, 596, 597, 598, 599, 600, 601, 602, 603, 604, 605, 606, 607, 608, 609, 610, 611, 612, 613, 614, 615, 616, 617, 618, 619, 620, 621, 622, 623, 624, 625, 626, 627, 628, 629, 630, 631, 632, 633, 634, 635, 636, 637, 638, 639, 640, 641, 642, 643, 644, 645, 646, 647, 648, 649, 650, 651, 652, 653, 654, 655, 656, 657, 658, 659, 660, 661, 662, 663, 664, 665, 666, 667, 668, 669, 670, 671, 672, 673, 674, 675, 676, 677, 678, 679, 680, 681, 682, 683, 684, 685, 686, 687, 688, 689, 690, 691, 692, 693, 694, 695, 696, 697, 698, 699, 700, 701, 702, 703, 704, 705, 706, 707, 708, 709, 710, 711, 712, 713, 714, 715, 716, 717, 718, 719, 720, 721, 722, 723, 724, 725, 726, 727, 728, 729, 730, 731, 732, 733, 734, 735, 736, 737, 738, 739, 740, 741, 742, 743, 744, 745, 746, 747, 748, 749, 750, 751, 752, 753, 754, 755, 756, 757, 758, 759, 760, 761, 762, 763, 764, 765, 766, 767, 768, 769, 770, 771, 772, 773, 774, 775, 776, 777, 778, 779, 780, 781, 782, 783, 784, 785, 786, 787, 788, 789, 790, 791, 792, 793, 794, 795, 796, 797, 798, 799, 800, 801, 802, 803, 804, 805, 806, 807, 808, 809, 810, 811, 812, 813, 814, 815, 816, 817, 818, 819, 820, 821, 822, 823, 824, 825, 826, 827, 828, 829, 830, 831, 832, 833, 834, 835, 836, 837, 838, 839, 840, 841, 842, 843, 844, 845, 846, 847, 848, 849, 850, 851, 852, 853, 854, 855, 856, 857, 858, 859, 860, 861, 862, 863, 864, 865, 866, 867, 868, 869, 870, 871, 872, 873, 874, 875, 876, 877, 878, 879, 880, 881, 882, 883, 884, 885, 886, 887, 888, 889, 890, 891, 892, 893, 894, 895, 896, 897, 898, 899, 900, 901, 902, 903, 904, 905, 906, 907, 908, 909, 910, 911, 912, 913, 914, 915, 916, 917, 918, 919, 920, 921, 922, 923, 924, 925, 926, 927, 928, 929, 930, 931, 932, 933, 934, 935, 936, 937, 938, 939, 940, 941, 942, 943, 944, 945, 946, 947, 948, 949, 950, 951, 952, 953, 954, 955, 956, 957, 958, 959, 960, 961, 962, 963, 964, 965, 966, 967, 968, 969, 970, 971, 972, 973, 974, 975, 976, 977, 978, 979, 980, 981, 982, 983, 984, 985, 986, 987, 988, 989, 990, 991, 992, 993, 994, 995, 996, 997, 998, 999, 1000, 1001, 1002, 1003, 1004, 1005, 1006, 1007, 1008, 1009, 1010, 1011, 1012, 1013, 1014, 1015, 1016, 1017, 1018, 1019, 1020, 1021, 1022, 1023, 1024, 1025, 1026, 1027, 1028, 1029, 1030, 1031, 1032, 1033, 1034, 1035, 1036, 1037, 1038, 1039, 1040, 1041, 1042, 1043, 1044, 1045, 1046, 1047, 1048, 1049, 1050, 1051, 1052, 1053, 1054, 1055, 1056, 1057, 1058, 1059, 1060, 1061, 1062, 1063, 1064, 1065, 1066, 1067, 1068, 1069, 1070, 1071, 1072, 1073, 1074, 1075, 1076, 1077, 1078, 1079, 1080, 1081, 1082, 1083, 1084, 1085, 1086, 1087, 1088, 1089, 1090, 1091, 1092, 1093, 1094, 1095, 1096, 1097, 1098, 1099, 1100, 1101, 1102, 1103, 1104, 1105, 1106, 1107, 1108, 1109, 1110, 1111, 1112, 1113, 1114, 1115, 1116, 1117, 1118, 1119, 1120, 1121, 1122, 1123, 1124, 1125, 1126, 1127, 1128, 1129, 1130, 1131, 1132, 1133, 1134, 1135, 1136, 1137, 1138, 1139, 1140, 1141, 1142, 1143, 1144, 1145, 1146, 1147, 1148, 1149, 1150, 1151, 1152, 1153, 1154, 1155, 1156, 1157, 1158, 1159, 1160, 1161, 1162, 1163, 1164, 1165, 1166, 1167, 1168, 1169, 1170, 1171, 1172, 1173, 1174, 1175, 1176, 1177, 1178, 1179, 1180, 1181, 1182, 1183, 1184, 1185, 1186, 1187, 1188, 1189, 1190, 1191, 1192, 1193, 1194, 1195, 1196, 1197, 1198, 1199, 1200, 1201, 1202, 1203, 1204, 1205, 1206, 1207, 1208, 1209, 1210, 1211, 1212, 1213, 1214, 1215, 1216, 1217, 1218, 1219, 1220, 1221, 1222, 1223, 1224, 1225, 1226, 1227, 1228, 1229, 1230, 1231, 1232, 1233, 1234, 1235, 1236, 1237, 1238, 1239, 1240, 1241, 1242, 1243, 1244, 1245, 1246, 1247, 1248, 1249, 1250, 1251, 1252, 1253, 1254, 1255, 1256, 1257, 1258, 1259, 1260, 1261, 1262, 1263, 1264, 1265, 1266, 1267, 1268, 1269, 1270, 1271, 1272, 1273, 1274, 1275, 1276, 1277, 1278, 1279, 1280, 1281, 1282, 1283, 1284, 1285, 1286, 1287, 1288, 1289, 1290, 1291, 1292, 1293, 1294, 1295, 1296, 1297, 1298, 1299, 1300, 1301, 1302, 1303, 1304, 1305, 1306, 1307, 1308, 1309, 1310, 1311, 1312, 1313, 1314, 1315, 1316, 1317, 1318, 1319, 1320, 1321, 1322, 1323, 1324, 1325, 1326, 1327, 1328, 1329, 1330, 1331, 1332, 1333, 1334, 1335, 1336, 1337, 1338, 1339, 1340, 1341, 1342, 1343, 1344, 1345, 1346, 1347, 1348, 1349, 1350, 1351, 1352, 1353, 1354, 1355, 1356, 1357, 1358, 1359, 1360, 1361, 1362, 1363, 1364, 1365, 1366, 1367, 1368, 1369, 1370, 1371, 1372, 1373, 1374, 1375, 1376, 1377, 1378, 1379, 1380, 1381, 1382, 1383, 1384, 1385, 1386, 1387, 1388, 1389, 1390, 1391, 1392, 1393, 1394, 1395, 1396, 1397, 1398, 1399, 1400, 1401, 1402, 1403, 1404, 1405, 1406, 1407, 1408, 1409, 1410, 1411, 1412, 1413, 1414, 1415, 1416, 1417, 1418, 1419, 1420, 1421, 1422, 1423, 1424, 1425, 1426, 1427, 1428, 1429, 1430, 1431, 1432, 1433, 1434, 1435, 1436, 1437, 1438, 1439, 1440, 1441, 1442, 1443, 1444, 1445, 1446, 1447, 1448, 1449, 1450, 1451, 1452, 1453, 1454, 1455, 1456, 1457, 1458, 1459, 1460, 1461, 1462, 1463, 1464, 1465, 1466, 1467, 1468, 1469, 1470, 1471, 1472, 1473, 1474, 1475, 1476, 1477, 1478, 1479, 1480, 1481, 1482, 1483, 1484, 1485, 1486, 1487, 1488, 1489, 1490, 1491, 1492, 1493, 1494, 1495, 1496, 1497, 1498, 1499, 1500, 1501, 1502, 1503, 1504, 1505, 1506, 1507, 1508, 1509, 1510, 1511, 1512, 1513, 1514, 1515, 1516, 1517, 1518, 1519, 1520, 1521, 1522, 1523, 1524, 1525, 1526, 1527, 1528, 1529, 1530, 1531, 1532, 1533, 1534, 1535, 1536, 1537, 1538, 1539, 1540, 1541, 1542, 1543, 1544, 1545, 1546, 1547, 1548, 1549, 1550, 1551, 1552, 1553, 1554, 1555, 1556, 1557, 1558, 1559, 1560, 1561, 1562, 1563, 1564, 1565, 1566, 1567, 1568, 1569, 1570, 1571, 1572, 1573, 1574, 1575, 1576, 1577, 1578, 1579, 1580, 1581, 1582, 1583, 1584, 1585, 1586, 1587, 1588, 1589, 1590, 1591, 1592, 1593, 1594, 1595, 1596, 1597, 1598, 1599, 1600, 1601, 1602, 1603, 1604, 1605, 1606, 1607, 1608, 1609, 1610, 1611, 1612, 1613, 1614, 1615, 1616, 1617, 1618, 1619, 1620, 1621, 1622, 1623, 1624, 1625, 1626, 1627, 1628, 1629, 1630, 1631, 1632, 1633, 1634, 1635, 1636, 1637, 1638, 1639, 1640, 1641, 1642, 1643, 1644, 1645, 1646, 1647, 1648, 1649, 1650, 1651, 1652, 1653, 1654, 1655, 1656, 1657, 1658, 1659, 1660, 1661, 1662, 1663, 1664, 1665, 1666, 1667, 1668, 1669, 1670, 1671, 1672, 1673, 1674, 1675, 1676, 1677, 1678, 1679, 1680, 1681, 1682, 1683, 1684, 1685, 1686, 1687, 1688, 1689, 1690, 1691, 1692, 1693, 1694, 1695, 1696, 1697, 1698, 1699, 1700, 1701, 1702, 1703, 1704, 1705, 1706, 1707, 1708, 1709, 1710, 1711, 1712, 1713, 1714, 1715, 1716, 1717, 1718, 1719, 1720, 1721, 1722, 1723, 1724, 1725, 1726, 1727, 1728, 1729, 1730, 1731, 1732, 1733, 1734, 1735, 1736, 1737, 1738, 1739, 1740, 1741, 1742, 1743, 1744, 1745, 1746, 1747, 1748, 1749, 1750, 1751, 1752, 1753, 1754, 1755, 1756, 1757, 1758, 1759, 1760, 1761, 1762, 1763, 1764, 1765, 1766, 1767, 1768, 1769, 1770, 1771, 1772, 1773, 1774, 1775, 1776, 1777, 1778, 1779, 1780, 1781, 1782, 1783, 1784, 1785, 1786, 1787, 1788, 1789, 1790, 1791, 1792, 1793, 1794, 1795, 1796, 1797, 1798, 1799, 1800, 1801, 1802, 1803, 1804, 1805, 1806, 1807, 1808, 1809, 1810, 1811, 1812, 1813, 1814, 1815, 1816, 1817, 1818, 1819, 1820, 1821, 1822, 1823, 1824, 1825, 1826, 1827, 1828, 1829, 1830, 1831, 1832, 1833, 1834, 1835, 1836, 1837, 1838, 1839, 1840, 1841, 1842, 1843, 1844, 1845, 1846, 1847, 1848, 1849, 1850, 1851, 1852, 1853, 1854, 1855, 1856, 1857, 1858, 1859, 1860, 1861, 1862, 1863, 1864, 1865, 1866, 1867, 1868, 1869, 1870, 1871, 1872, 1873, 1874, 1875, 1876, 1877, 1878, 1879, 1880, 1881, 1882, 1883, 1884, 1885, 1886, 1887, 1888, 1889, 1890, 1891, 1892, 1893, 1894, 1895, 1896, 1897, 1898, 1899, 1900, 1901, 1902, 1903, 1904, 1905, 1906, 1907, 1908, 1909, 1910, 1911, 1912, 1913, 1914, 1915, 1916, 1917, 1918, 1919, 1920, 1921, 1922, 1923, 1924, 1925, 1926, 1927, 1928, 1929, 1930, 1931, 1932, 1933, 1934, 1935, 1936, 1937, 1938, 1939, 1940, 1941, 1942, 1943, 1944, 1945, 1946, 1947, 1948, 1949, 1950, 1951, 1952, 1953, 1954, 1955, 1956, 1957, 1958, 1959, 1960, 1961, 1962, 1963, 1964, 1965, 1966, 1967, 1968, 1969, 1970, 1971, 1972, 1973, 1974, 1975, 1976, 1977, 1978, 1979, 1980, 1981, 1982, 1983, 1984, 1985, 1986, 1987, 1988, 1989, 1990, 1991, 1992, 1993, 1994, 1995, 1996, 1997, 1998, 1999, 2000, 2001, 2002, 2003, 2004, 2005, 2006, 2007, 2008, 2009, 2010, 2011, 2012, 2013, 2014, 2015, 2016, 2017, 2018, 2019, 2020, 2021, 2022, 2023, 2024, 2025, 2026, 2027, 2028, 2029, 2030, 2031, 2032, 2033, 2034, 2035, 2036, 2037, 2038, 2039, 2040, 2041, 2042, 2043, 2044, 2045, 2046, 2047, 2048, 2049, 2050, 2051, 2052, 2053, 2054, 2055, 2056, 2057, 2058, 2059, 2060, 2061, 2062, 2063, 2064, 2065, 2066, 2067, 2068, 2069, 2070, 2071, 2072, 2073, 2074, 2075, 2076, 2077, 2078, 2079, 2080, 2081, 2082, 2083, 2084, 2085, 2086, 2087, 2088, 2089, 2090, 2091, 2092, 2093, 2094, 2095, 2096, 2097, 2098, 2099, 2100, 2101, 2102, 2103, 2104, 2105, 2106, 2107, 2108, 2109, 2110, 2111, 2112, 2113, 2114, 2115, 2116, 2117, 2118, 2119, 2120, 2121, 2122, 2123, 2124, 2125, 2126, 2127, 2128, 2129, 2130, 2131, 2132, 2133, 2134, 2135, 2136, 2137, 2138, 2139, 2140, 2141, 2142, 2143, 2144, 2145, 2146, 2147, 2148, 2149, 2150, 2151, 2152, 2153, 2154, 2155, 2156, 2157, 2158, 2159, 2160, 2161, 2162, 2163, 2164, 2165, 2166, 2167, 2168, 2169, 2170, 2171, 2172, 2173, 2174, 2175, 2176, 2177, 2178, 2179, 2180, 2181, 2182, 2183, 2184, 2185, 2186, 2187, 2188, 2189, 2190, 2191, 2192, 2193, 2194, 2195, 2196, 2197, 2198, 2199, 2200, 2201, 2202, 2203, 2204, 2205, 2206, 2207, 2208, 2209, 2210, 2211, 2212, 2213, 2214, 2215, 2216, 2217, 2218, 2219, 2220, 2221, 2222, 2223, 2224, 2225, 2226, 2227, 2228, 2229, 2230, 2231, 2232, 2233, 2234, 2235, 2236, 2237, 2238, 2239, 2240, 2241, 2242, 2243, 2244, 2245, 2246, 2247, 2248, 2249, 2250, 2251, 2252, 2253, 2254, 2255, 2256, 2257, 2258, 2259, 2260, 2261, 2262, 2263, 2264, 2265, 2266, 2267, 2268, 2269, 2270, 2271, 2272, 2273, 2274, 2275, 2276, 2277, 2278, 2279, 2280, 2281, 2282, 2283, 2284, 2285, 2286, 2287, 2288, 2289, 2290, 2291, 2292, 2293, 2294, 2295, 2296, 2297, 2298, 2299, 2300, 2301, 2302, 2303, 2304, 2305, 2306, 2307, 2308, 2309, 2310, 2311, 2312, 2313, 2314, 2315, 2316, 2317, 2318, 2319, 2320, 2321, 2322, 2323, 2324, 2325, 2326, 2327, 2328, 2329, 2330, 2331, 2332, 2333, 2334, 2335, 2336, 2337, 2338, 2339, 2340, 2341, 2342, 2343, 2344, 2345, 2346, 2347, 2348, 2349, 2350, 2351, 2352, 2353, 2354, 2355, 2356, 2357, 2358, 2359, 2360, 2361, 2362, 2363, 2364, 2365, 2366, 2367, 2368, 2369, 2370, 2371, 2372, 2373, 2374, 2375, 2376, 2377, 2378, 2379, 2380, 2381, 2382, 2383, 2384, 2385, 2386, 2387, 2388, 2389, 2390, 2391, 2392, 2393, 2394, 2395, 2396, 2397, 2398, 2399, 2400, 2401, 2402, 2403, 2404, 2405, 2406, 2407, 2408, 2409, 2410, 2411, 2412, 2413, 2414, 2415, 2416, 2417, 2418, 2419, 2420, 2421, 2422, 2423, 2424, 2425, 2426, 2427, 2428, 2429, 2430, 2431, 2432, 2433, 2434, 2435, 2436, 2437, 2438, 2439, 2440, 2441, 2442, 2443, 2444, 2445, 2446, 2447, 2448, 2449, 2450, 2451, 2452, 2453, 2454, 2455, 2456, 2457, 2458, 2459, 2460, 2461, 2462, 2463, 2464, 2465, 2466, 2467, 2468, 2469, 2470, 2471, 2472, 2473, 2474, 2475, 2476, 2477, 2478, 2479, 2480, 2481, 2482, 2483, 2484, 2485, 2486, 2487, 2488, 2489, 2490, 2491, 2492, 2493, 2494, 2495, 2496, 2497, 2498, 2499, 2500, 2501, 2502, 2503, 2504, 2505, 2506, 2507, 2508, 2509, 2510, 2511, 2512, 2513, 2514, 2515, 2516, 2517, 2518, 2519, 2520, 2521, 2522, 2523, 2524, 2525, 2526, 2527, 2528, 2529, 2530, 2531, 2532, 2533, 2534, 2535, 2536, 2537, 2538, 2539, 2540, 2541, 2542, 2543, 2544, 2545, 2546, 2547, 2548, 2549, 2550, 2551, 2552, 2553, 2554, 2555, 2556, 2557, 2558, 2559, 2560, 2561, 2562, 2563, 2564, 2565, 2566, 2567, 2568, 2569, 2570, 2571, 2572, 2573, 2574, 2575, 2576, 2577, 2578, 2579, 2580, 2581, 2582, 2583, 2584, 2585, 2586, 2587, 2588, 2589, 2590, 2591, 2592, 2593, 2594, 2595, 2596, 2597, 2598, 2599, 2600, 2601, 2602, 2603, 2604, 2605, 2606, 2607, 2608, 2609, 2610, 2611, 2612, 2613, 2614, 2615, 2616, 2617, 2618, 2619, 2620, 2621, 2622, 2623, 2624, 2625, 2626, 2627, 2628, 2629, 2630, 2631, 2632, 2633, 2634, 2635, 2636, 2637, 2638, 2639, 2640, 2641, 2642, 2643, 2644, 2645, 2646, 2647, 2648, 2649, 2650, 2651, 2652, 2653, 2654, 2655, 2656, 2657, 2658, 2659, 2660, 2661, 2662, 2663, 2664, 2665, 2666, 2667, 2668, 2669, 2670, 2671, 2672, 2673, 2674, 2675, 2676, 2677, 2678, 2679, 2680, 2681, 2682, 2683, 2684, 2685, 2686, 2687, 2688, 2689, 2690, 2691, 2692, 2693, 2694, 2695, 2696, 2697, 2698, 2699, 2700, 2701, 2702, 2703, 2704, 2705, 2706, 2707, 2708, 2709, 2710, 2711, 2712, 2713, 2714, 2715, 2716, 2717, 2718, 2719, 2720, 2721, 2722, 2723, 2724, 2725, 2726, 2727, 2728, 2729, 2730, 2731, 2732, 2733, 2734, 2735, 2736, 2737, 2738, 2739, 2740, 2741, 2742, 2743, 2744, 2745, 2746, 2747, 2748, 2749, 2750, 2751, 2752, 2753, 2754, 2755, 2756, 2757, 2758, 2759, 2760, 2761, 2762, 2763, 2764, 2765, 2766, 2767, 2768, 2769, 2770, 2771, 2772, 2773, 2774, 2775, 2776, 2777, 2778, 2779, 2780, 2781, 2782, 2783, 2784, 2785, 2786, 2787, 2788, 2789, 2790, 2791, 2792, 2793, 2794, 2795, 2796, 2797, 2798, 2799, 2800, 2801, 2802, 2803, 2804, 2805, 2806, 2807, 2808, 2809, 2810, 2811, 2812, 2813, 2814, 2815, 2816, 2817, 2818, 2819, 2820, 2821, 2822, 2823, 2824, 2825, 2826, 2827, 2828, 2829, 2830, 2831, 2832, 2833, 2834, 2835, 2836, 2837, 2838, 2839, 2840, 2841, 2842, 2843, 2844, 2845, 2846, 2847, 2848, 2849, 2850, 2851, 2852, 2853, 2854, 2855, 2856, 2857, 2858, 2859, 2860, 2861, 2862, 2863, 2864, 2865, 2866, 2867, 2868, 2869, 2870, 2871, 2872, 2873, 2874, 2875, 2876, 2877, 2878, 2879, 2880, 2881, 2882, 2883, 2884, 2885, 2886, 2887, 2888, 2889, 2890, 2891, 2892, 2893, 2894, 2895, 2896, 2897, 2898, 2899, 2900, 2901, 2902, 2903, 2904, 2905, 2906, 2907, 2908, 2909, 2910, 2911, 2912, 2913, 2914, 2915, 2916, 2917, 2918, 2919, 2920, 2921, 2922, 2923, 2924, 2925, 2926, 2927, 2928, 2929, 2930, 2931, 2932, 2933, 2934, 2935, 2936, 2937, 2938, 2939, 2940, 2941, 2942, 2943, 2944, 2945, 2946, 2947, 2948, 2949, 2950, 2951, 2952, 2953, 2954, 2955, 2956, 2957, 2958, 2959, 2960, 2961, 2962, 2963, 2964, 2965, 2966, 2967, 2968, 2969, 2970, 2971, 2972, 2973, 2974, 2975, 2976, 2977, 2978, 2979, 2980, 2981, 2982, 2983, 2984, 2985, 2986, 2987, 2988, 2989, 2990, 2991, 2992, 2993, 2994, 2995, 2996, 2997, 2998, 2999, 3000, 3001, 3002, 3003, 3004, 3005, 3006, 3007, 3008, 3009, 3010, 3011, 3012, 3013, 3014, 3015, 3016, 3017, 3018, 3019, 3020, 3021, 3022, 3023, 3024, 3025, 3026, 3027, 3028, 3029, 3030, 3031, 3032, 3033, 3034, 3035, 3036, 3037, 3038, 3039, 3040, 3041, 3042, 3043, 3044, 3045, 3046, 3047, 3048, 3049, 3050, 3051, 3052, 3053, 3054, 3055, 3056, 3057, 3058, 3059, 3060, 3061, 3062, 3063, 3064, 3065, 3066, 3067, 3068, 3069, 3070, 3071, 3072, 3073, 3074, 3075, 3076, 3077, 3078, 3079, 3080, 3081, 3082, 3083, 3084, 3085, 3086, 3087, 3088, 3089, 3090, 3091, 3092, 3093, 3094, 3095, 3096, 3097, 3098, 3099, 3100, 3101, 3102, 3103, 3104, 3105, 3106, 3107, 3108, 3109, 3110, 3111, 3112, 3113, 3114, 3115, 3116, 3117, 3118, 3119, 3120, 3121, 3122, 3123, 3124, 3125, 3126, 3127, 3128, 3129, 3130, 3131, 3132, 3133, 3134, 3135, 3136, 3137, 3138, 3139, 3140, 3141, 3142, 3143, 3144, 3145, 3146, 3147, 3148, 3149, 3150, 3151, 3152, 3153, 3154, 3155, 3156, 3157, 3158, 3159, 3160, 3161, 3162, 3163, 3164, 3165, 3166, 3167, 3168, 3169, 3170, 3171, 3172, 3173, 3174, 3175, 3176, 3177, 3178, 3179, 3180, 3181, 3182, 3183, 3184, 3185, 3186, 3187, 3188, 3189, 3190, 3191, 3192, 3193, 3194, 3195, 3196, 3197, 3198, 3199, 3200, 3201, 3202, 3203, 3204, 3205, 3206, 3207, 3208, 3209, 3210, 3211, 3212, 3213, 3214, 3215, 3216, 3217, 3218, 3219, 3220, 3221, 3222, 3223, 3224, 3225, 3226, 3227, 3228, 3229, 3230, 3231, 3232, 3233, 3234, 3235, 3236, 3237, 3238, 3239, 3240, 3241, 3242, 3243, 3244, 3245, 3246, 3247, 3248, 3249, 3250, 3251, 3252, 3253, 3254, 3255, 3256, 3257, 3258, 3259, 3260, 3261, 3262, 3263, 3264, 3265, 3266, 3267, 3268, 3269, 3270, 3271, 3272, 3273, 3274, 3275, 3276, 3277, 3278, 3279, 3280, 3281, 3282, 3283, 3284, 3285, 3286, 3287, 3288, 3289, 3290, 3291, 3292, 3293, 3294, 3295, 3296, 3297, 3298, 3299, 3300, 3301, 3302, 3303, 3304, 3305, 3306, 3307, 3308, 3309, 3310, 3311, 3312, 3313, 3314, 3315, 3316, 3317, 3318, 3319, 3320, 3321, 3322, 3323, 3324, 3325, 3326, 3327, 3328, 3329, 3330, 3331, 3332, 3333, 3334, 3335, 3336, 3337, 3338, 3339, 3340, 3341, 3342, 3343, 3344, 3345, 3346, 3347, 3348, 3349, 3350, 3351, 3352, 3353, 3354, 3355, 3356, 3357, 3358, 3359, 3360, 3361, 3362, 3363, 3364, 3365, 3366, 3367, 3368, 3369, 3370, 3371, 3372, 3373, 3374, 3375, 3376, 3377, 3378, 3379, 3380, 3381, 3382, 3383, 3384, 3385, 3386, 3387, 3388, 3389, 3390, 3391, 3392, 3393, 3394, 3395, 3396, 3397, 3398, 3399, 3400, 3401, 3402, 3403, 3404, 3405, 3406, 3407, 3408, 3409, 3410, 3411, 3412, 3413, 3414, 3415, 3416, 3417, 3418, 3419, 3420, 3421, 3422, 3423, 3424, 3425, 3426, 3427, 3428, 3429, 3430, 3431, 3432, 3433, 3434, 3435, 3436, 3437, 3438, 3439, 3440, 3441, 3442, 3443, 3444, 3445, 3446, 3447, 3448, 3449, 3450, 3451, 3452, 3453, 3454, 3455, 3456, 3457, 3458, 3459, 3460, 3461, 3462, 3463, 3464, 3465, 3466, 3467, 3468, 3469, 3470, 3471, 3472, 3473, 3474, 3475, 3476, 3477, 3478, 3479, 3480, 3481, 3482, 3483, 3484, 3485, 3486, 3487, 3488, 3489, 3490, 3491, 3492, 3493, 3494, 3495, 3496, 3497, 3498, 3499, 3500, 3501, 3502, 3503, 3504, 3505, 3506, 3507, 3508, 3509, 3510, 3511, 3512, 3513, 3514, 3515, 3516, 3517, 3518, 3519, 3520, 3521, 3522, 3523, 3524, 3525, 3526, 3527, 3528, 3529, 3530, 3531, 3532, 3533, 3534, 3535, 3536, 3537, 3538, 3539, 3540, 3541, 3542, 3543, 3544, 3545, 3546, 3547, 3548, 3549, 3550, 3551, 3552, 3553, 3554, 3555, 3556, 3557, 3558, 3559, 3560, 3561, 3562, 3563, 3564, 3565, 3566, 3567, 3568, 3569, 3570, 3571, 3572, 3573, 3574, 3575, 3576, 3577, 3578, 3579, 3580, 3581, 3582, 3583, 3584, 3585, 3586, 3587, 3588, 3589, 3590, 3591, 3592, 3593, 3594, 3595, 3596, 3597, 3598, 3599, 3600, 3601, 3602, 3603, 3604, 3605, 3606, 3607, 3608, 3609, 3610, 3611, 3612, 3613, 3614, 3615, 3616, 3617, 3618, 3619, 3620, 3621, 3622, 3623, 3624, 3625, 3626, 3627, 3628, 3629, 3630, 3631, 3632, 3633, 3634, 3635, 3636, 3637, 3638, 3639, 3640, 3641, 3642, 3643, 3644, 3645, 3646, 3647, 3648, 3649, 3650, 3651, 3652, 3653, 3654, 3655, 3656, 3657, 3658, 3659, 3660, 3661, 3662, 3663, 3664, 3665, 3666, 3667, 3668, 3669, 3670, 3671, 3672, 3673, 3674, 3675, 3676, 3677, 3678, 3679, 3680, 3681, 3682, 3683, 3684, 3685, 3686, 3687, 3688, 3689, 3690, 3691, 3692, 3693, 3694, 3695, 3696, 3697, 3698, 3699, 3700, 3701, 3702, 3703, 3704, 3705, 3706, 3707, 3708, 3709, 3710, 3711, 3712, 3713, 3714, 3715, 3716, 3717, 3718, 3719, 3720, 3721, 3722, 3723, 3724, 3725, 3726, 3727, 3728, 3729, 3730, 3731, 3732, 3733, 3734, 3735, 3736, 3737, 3738, 3739, 3740, 3741, 3742, 3743, 3744, 3745, 3746, 3747, 3748, 3749, 3750, 3751, 3752, 3753, 3754, 3755, 3756, 3757, 3758, 3759, 3760, 3761, 3762, 3763, 3764, 3765, 3766, 3767, 3768, 3769, 3770, 3771, 3772, 3773, 3774, 3775, 3776, 3777, 3778, 3779, 3780, 3781, 3782, 3783, 3784, 3785, 3786, 3787, 3788, 3789, 3790, 3791, 3792, 3793, 3794, 3795, 3796, 3797, 3798, 3799, 3800, 3801, 3802, 3803, 3804, 3805, 3806, 3807, 3808, 3809, 3810, 3811, 3812, 3813, 3814, 3815, 3816, 3817, 3818, 3819, 3820, 3821, 3822, 3823, 3824, 3825, 3826, 3827, 3828, 3829, 3830, 3831, 3832, 3833, 3834, 3835, 3836, 3837, 3838, 3839, 3840, 3841, 3842, 3843, 3844, 3845, 3846, 3847, 3848, 3849, 3850, 3851, 3852, 3853, 3854, 3855, 3856, 3857, 3858, 3859, 3860, 3861, 3862, 3863, 3864, 3865, 3866, 3867, 3868, 3869, 3870, 3871, 3872, 3873, 3874, 3875, 3876, 3877, 3878, 3879, 3880, 3881, 3882, 3883, 3884, 3885, 3886, 3887, 3888, 3889, 3890, 3891, 3892, 3893, 3894, 3895, 3896, 3897, 3898, 3899, 3900, 3901, 3902, 3903, 3904, 3905, 3906, 3907, 3908, 3909, 3910, 3911, 3912, 3913, 3914, 3915, 3916, 3917, 3918, 3919, 3920, 3921, 3922, 3923, 3924, 3925, 3926, 3927, 3928, 3929, 3930, 3931, 3932, 3933, 3934, 3935, 3936, 3937, 3938, 3939, 3940, 3941, default */
/***/ (function(module) {

module.exports = JSON.parse("[\"THA\",\"JPN\",\"SGP\",\"NPL\",\"MYS\",\"New South Wales, AUS\",\"Victoria, AUS\",\"Queensland, AUS\",\"KHM\",\"LKA\",\"DEU\",\"FIN\",\"ARE\",\"PHL\",\"IND\",\"SWE\",\"ESP\",\"South Australia, AUS\",\"BEL\",\"EGY\",\"LBN\",\"IRQ\",\"OMN\",\"AFG\",\"BHR\",\"KWT\",\"DZA\",\"HRV\",\"CHE\",\"AUT\",\"ISR\",\"PAK\",\"BRA\",\"GEO\",\"GRC\",\"MKD\",\"NOR\",\"ROU\",\"EST\",\"NLD\",\"SMR\",\"BLR\",\"ISL\",\"LTU\",\"MEX\",\"NZL\",\"NGA\",\"Western Australia, AUS\",\"IRL\",\"LUX\",\"MCO\",\"QAT\",\"ECU\",\"AZE\",\"ARM\",\"DOM\",\"IDN\",\"PRT\",\"AND\",\"Tasmania, AUS\",\"LVA\",\"MAR\",\"SAU\",\"SEN\",\"ARG\",\"CHL\",\"JOR\",\"UKR\",\"HUN\",\"Northern Territory, AUS\",\"LIE\",\"POL\",\"TUN\",\"BIH\",\"SVN\",\"ZAF\",\"BTN\",\"CMR\",\"COL\",\"CRI\",\"PER\",\"SRB\",\"SVK\",\"TGO\",\"GUF\",\"MLT\",\"MTQ\",\"BGR\",\"MDV\",\"BGD\",\"PRY\",\"ALB\",\"CYP\",\"BRN\",\"Washington, United States\",\"New York, United States\",\"California, United States\",\"Massachusetts, United States\",\"Georgia, United States\",\"Colorado, United States\",\"Florida, United States\",\"New Jersey, United States\",\"Oregon, United States\",\"Texas, United States\",\"Illinois, United States\",\"Pennsylvania, United States\",\"Iowa, United States\",\"Maryland, United States\",\"North Carolina, United States\",\"South Carolina, United States\",\"Tennessee, United States\",\"Arizona, United States\",\"Indiana, United States\",\"Kentucky, United States\",\"Washington, D.C., United States\",\"Nevada, United States\",\"New Hampshire, United States\",\"Minnesota, United States\",\"Nebraska, United States\",\"Ohio, United States\",\"Rhode Island, United States\",\"Wisconsin, United States\",\"Connecticut, United States\",\"Hawaii, United States\",\"Oklahoma, United States\",\"Utah, United States\",\"BFA\",\"VAT\",\"MNG\",\"PAN\",\"Kansas, United States\",\"Louisiana, United States\",\"Missouri, United States\",\"Vermont, United States\",\"Alaska, United States\",\"Arkansas, United States\",\"Delaware, United States\",\"Idaho, United States\",\"Maine, United States\",\"Michigan, United States\",\"Mississippi, United States\",\"Montana, United States\",\"New Mexico, United States\",\"North Dakota, United States\",\"South Dakota, United States\",\"West Virginia, United States\",\"Wyoming, United States\",\"Hubei, CHN\",\"IRN\",\"KOR\",\"FRA\",\"Guangdong, CHN\",\"Henan, CHN\",\"Zhejiang, CHN\",\"Hunan, CHN\",\"Anhui, CHN\",\"Jiangxi, CHN\",\"Shandong, CHN\",\"Jiangsu, CHN\",\"Chongqing, CHN\",\"Sichuan, CHN\",\"Heilongjiang, CHN\",\"UK, GBR\",\"DNK\",\"Beijing, CHN\",\"Shanghai, CHN\",\"Hebei, CHN\",\"Fujian, CHN\",\"Guangxi, CHN\",\"Shaanxi, CHN\",\"Yunnan, CHN\",\"Hainan, CHN\",\"Guizhou, CHN\",\"Tianjin, CHN\",\"Shanxi, CHN\",\"Gansu, CHN\",\"Hong Kong, CHN\",\"Liaoning, CHN\",\"Jilin, CHN\",\"CZE\",\"Xinjiang, CHN\",\"Inner Mongolia, CHN\",\"Ningxia, CHN\",\"TWN\",\"VNM\",\"RUS\",\"Qinghai, CHN\",\"Macau, CHN\",\"MDA\",\"BOL\",\"Faroe Islands, DNK\",\"St Martin, FRA\",\"HND\",\"Channel Islands, GBR\",\"Tibet, CHN\",\"COD\",\"CIV\",\"Saint Barthelemy, FRA\",\"JAM\",\"REU\",\"TUR\",\"Gibraltar, GBR\",\"Kitsap County, Washington, United States\",\"Solano County, California, United States\",\"Santa Cruz County, California, United States\",\"Napa County, California, United States\",\"Ventura County, California, United States\",\"Worcester County, Massachusetts, United States\",\"Gwinnett County, Georgia, United States\",\"DeKalb County, Georgia, United States\",\"Floyd County, Kentucky, United States\",\"Fayette County, Georgia, United States\",\"Gregg County, Texas, United States\",\"Monmouth County, New Jersey, United States\",\"Burlington County, New Jersey, United States\",\"Camden County, New Jersey, United States\",\"Passaic County, New Jersey, United States\",\"Union County, New Jersey, United States\",\"Eagle County, Colorado, United States\",\"Larimer County, Colorado, United States\",\"Arapahoe County, Colorado, United States\",\"Gunnison County, Colorado, United States\",\"Kane County, Illinois, United States\",\"Monroe County, Pennsylvania, United States\",\"Philadelphia County, Pennsylvania, United States\",\"Prince George's County, Maryland, United States\",\"Pottawattamie County, Iowa, United States\",\"Kershaw County, South Carolina, United States\",\"Pima County, Arizona, United States\",\"Noble County, Indiana, United States\",\"Adams County, Pennsylvania, United States\",\"Boone County, Indiana, United States\",\"Dane County, Wisconsin, United States\",\"Pierce County, Wisconsin, United States\",\"Cuyahoga County, Ohio, United States\",\"Weber County, Utah, United States\",\"Bennington County, Vermont, United States\",\"Carver County, Minnesota, United States\",\"Charlotte County, Florida, United States\",\"Cherokee County, Georgia, United States\",\"Collin County, Texas, United States\",\"Jefferson County, Kentucky, United States\",\"Jefferson Parish, Louisiana, United States\",\"Shasta County, California, United States\",\"Spartanburg County, South Carolina, United States\",\"Harrison County, Kentucky, United States\",\"Johnson County, Iowa, United States\",\"Berkshire County, Massachusetts, United States\",\"Davidson County, Tennessee, United States\",\"Douglas County, Oregon, United States\",\"Fresno County, California, United States\",\"Harford County, Maryland, United States\",\"Hendricks County, Indiana, United States\",\"Hudson County, New Jersey, United States\",\"Johnson County, Kansas, United States\",\"Kittitas County, Washington, United States\",\"Manatee County, Florida, United States\",\"Marion County, Oregon, United States\",\"Okaloosa County, Florida, United States\",\"Polk County, Georgia, United States\",\"Riverside County, California, United States\",\"Shelby County, Tennessee, United States\",\"St. Louis County, Missouri, United States\",\"Suffolk County, New York, United States\",\"Ulster County, New York, United States\",\"Volusia County, Florida, United States\",\"Rockingham County, New Hampshire, United States\",\"Montgomery County, Pennsylvania, United States\",\"Alameda County, California, United States\",\"Broward County, Florida, United States\",\"Lee County, Florida, United States\",\"Pinal County, Arizona, United States\",\"Rockland County, New York, United States\",\"Saratoga County, New York, United States\",\"Charleston County, South Carolina, United States\",\"Clark County, Washington, United States\",\"Cobb County, Georgia, United States\",\"Davis County, Utah, United States\",\"El Paso County, Colorado, United States\",\"Honolulu County, Hawaii, United States\",\"Jackson County, Oregon, United States\",\"Jefferson County, Washington, United States\",\"Klamath County, Oregon, United States\",\"Madera County, California, United States\",\"Pierce County, Washington, United States\",\"Tulsa County, Oklahoma, United States\",\"Douglas County, Colorado, United States\",\"Providence County, Rhode Island, United States\",\"Chatham County, North Carolina, United States\",\"Delaware County, Pennsylvania, United States\",\"Douglas County, Nebraska, United States\",\"Fayette County, Kentucky, United States\",\"Marion County, Indiana, United States\",\"Middlesex County, Massachusetts, United States\",\"Nassau County, New York, United States\",\"Ramsey County, Minnesota, United States\",\"Washoe County, Nevada, United States\",\"Wayne County, Pennsylvania, United States\",\"Yolo County, California, United States\",\"Santa Clara County, California, United States\",\"Clark County, Nevada, United States\",\"Fort Bend County, Texas, United States\",\"Grant County, Washington, United States\",\"Santa Rosa County, Florida, United States\",\"Williamson County, Tennessee, United States\",\"New York County, New York, United States\",\"Montgomery County, Maryland, United States\",\"Suffolk County, Massachusetts, United States\",\"Denver County, Colorado, United States\",\"Summit County, Colorado, United States\",\"Bergen County, New Jersey, United States\",\"Harris County, Texas, United States\",\"San Francisco County, California, United States\",\"Contra Costa County, California, United States\",\"Orange County, California, United States\",\"Norfolk County, Massachusetts, United States\",\"Maricopa County, Arizona, United States\",\"Wake County, North Carolina, United States\",\"Westchester County, New York, United States\",\"Grafton County, New Hampshire, United States\",\"Hillsborough County, Florida, United States\",\"Placer County, California, United States\",\"San Mateo County, California, United States\",\"Sonoma County, California, United States\",\"Umatilla County, Oregon, United States\",\"Fulton County, Georgia, United States\",\"Washington County, Oregon, United States\",\"Snohomish County, Washington, United States\",\"Humboldt County, California, United States\",\"Sacramento County, California, United States\",\"San Diego County, California, United States\",\"San Benito County, California, United States\",\"Los Angeles County, California, United States\",\"King County, Washington, United States\",\"Cook County, Illinois, United States\",\"Skagit County, Washington, United States\",\"Thurston County, Washington, United States\",\"Whatcom County, Washington, United States\",\"Marin County, California, United States\",\"Calaveras County, California, United States\",\"Stanislaus County, California, United States\",\"Essex County, Massachusetts, United States\",\"Charlton County, Georgia, United States\",\"Collier County, Florida, United States\",\"Pinellas County, Florida, United States\",\"Alachua County, Florida, United States\",\"Nassau County, Florida, United States\",\"Pasco County, Florida, United States\",\"Dallas County, Texas, United States\",\"Tarrant County, Texas, United States\",\"Montgomery County, Texas, United States\",\"Middlesex County, New Jersey, United States\",\"Jefferson County, Colorado, United States\",\"Multnomah County, Oregon, United States\",\"Polk County, Oregon, United States\",\"Deschutes County, Oregon, United States\",\"McHenry County, Illinois, United States\",\"Lake County, Illinois, United States\",\"Bucks County, Pennsylvania, United States\",\"Lancaster County, South Carolina, United States\",\"Sullivan County, Tennessee, United States\",\"Johnson County, Indiana, United States\",\"Howard County, Indiana, United States\",\"St. Joseph County, Indiana, United States\",\"Knox County, Nebraska, United States\",\"Stark County, Ohio, United States\",\"Anoka County, Minnesota, United States\",\"Olmsted County, Minnesota, United States\",\"Summit County, Utah, United States\",\"Fairfield County, Connecticut, United States\",\"Litchfield County, Connecticut, United States\",\"Orleans Parish, Louisiana, United States\",\"Pennington County, South Dakota, United States\",\"Beadle County, South Dakota, United States\",\"Charles Mix County, South Dakota, United States\",\"Davison County, South Dakota, United States\",\"Minnehaha County, South Dakota, United States\",\"Bon Homme County, South Dakota, United States\",\"Socorro County, New Mexico, United States\",\"Bernalillo County, New Mexico, United States\",\"Oakland County, Michigan, United States\",\"Wayne County, Michigan, United States\",\"New Castle County, Delaware, United States\",\"AUS\",\"United States\",\"CHN\",\"GBR\",\"ITA\",\"Accomack County, Virginia, United States\",\"Albemarle County, Virginia, United States\",\"Alexandria City, Virginia, United States\",\"Alleghany County, Virginia, United States\",\"Amelia County, Virginia, United States\",\"Amherst County, Virginia, United States\",\"Appomattox County, Virginia, United States\",\"Arlington County, Virginia, United States\",\"Augusta County, Virginia, United States\",\"Bath County, Virginia, United States\",\"Bedford County, Virginia, United States\",\"Bland County, Virginia, United States\",\"Botetourt County, Virginia, United States\",\"Bristol City, Virginia, United States\",\"Brunswick County, Virginia, United States\",\"Buchanan County, Virginia, United States\",\"Buckingham County, Virginia, United States\",\"Buena Vista City, Virginia, United States\",\"Campbell County, Virginia, United States\",\"Caroline County, Virginia, United States\",\"Carroll County, Virginia, United States\",\"Charles City County, Virginia, United States\",\"Charlotte County, Virginia, United States\",\"Charlottesville City, Virginia, United States\",\"Chesapeake City, Virginia, United States\",\"Chesterfield County, Virginia, United States\",\"Clarke County, Virginia, United States\",\"Colonial Heights City, Virginia, United States\",\"Covington City, Virginia, United States\",\"Craig County, Virginia, United States\",\"Culpeper County, Virginia, United States\",\"Cumberland County, Virginia, United States\",\"Danville City, Virginia, United States\",\"Dickenson County, Virginia, United States\",\"Dinwiddie County, Virginia, United States\",\"Emporia City, Virginia, United States\",\"Essex County, Virginia, United States\",\"Fairfax City, Virginia, United States\",\"Fairfax County, Virginia, United States\",\"Falls Church City, Virginia, United States\",\"Fauquier County, Virginia, United States\",\"Floyd County, Virginia, United States\",\"Fluvanna County, Virginia, United States\",\"Franklin City, Virginia, United States\",\"Franklin County, Virginia, United States\",\"Frederick County, Virginia, United States\",\"Fredericksburg City, Virginia, United States\",\"Galax City, Virginia, United States\",\"Giles County, Virginia, United States\",\"Gloucester County, Virginia, United States\",\"Goochland County, Virginia, United States\",\"Grayson County, Virginia, United States\",\"Greene County, Virginia, United States\",\"Greensville County, Virginia, United States\",\"Halifax County, Virginia, United States\",\"Hampton City, Virginia, United States\",\"Hanover County, Virginia, United States\",\"Harrisonburg City, Virginia, United States\",\"Henrico County, Virginia, United States\",\"Henry County, Virginia, United States\",\"Highland County, Virginia, United States\",\"Hopewell City, Virginia, United States\",\"Isle of Wight County, Virginia, United States\",\"James City County, Virginia, United States\",\"King and Queen County, Virginia, United States\",\"King George County, Virginia, United States\",\"King William County, Virginia, United States\",\"Lancaster County, Virginia, United States\",\"Lee County, Virginia, United States\",\"Lexington City, Virginia, United States\",\"Loudoun County, Virginia, United States\",\"Louisa County, Virginia, United States\",\"Lunenburg County, Virginia, United States\",\"Lynchburg City, Virginia, United States\",\"Madison County, Virginia, United States\",\"Manassas City, Virginia, United States\",\"Manassas Park City, Virginia, United States\",\"Martinsville City, Virginia, United States\",\"Mathews County, Virginia, United States\",\"Mecklenburg County, Virginia, United States\",\"Middlesex County, Virginia, United States\",\"Montgomery County, Virginia, United States\",\"Nelson County, Virginia, United States\",\"New Kent County, Virginia, United States\",\"Newport News City, Virginia, United States\",\"Norfolk City, Virginia, United States\",\"Northampton County, Virginia, United States\",\"Northumberland County, Virginia, United States\",\"Norton City, Virginia, United States\",\"Nottoway County, Virginia, United States\",\"Orange County, Virginia, United States\",\"Page County, Virginia, United States\",\"Patrick County, Virginia, United States\",\"Petersburg City, Virginia, United States\",\"Pittsylvania County, Virginia, United States\",\"Poquoson City, Virginia, United States\",\"Portsmouth City, Virginia, United States\",\"Powhatan County, Virginia, United States\",\"Prince Edward County, Virginia, United States\",\"Prince George County, Virginia, United States\",\"Prince William County, Virginia, United States\",\"Pulaski County, Virginia, United States\",\"Radford City, Virginia, United States\",\"Rappahannock County, Virginia, United States\",\"Richmond City, Virginia, United States\",\"Richmond County, Virginia, United States\",\"Roanoke City, Virginia, United States\",\"Roanoke County, Virginia, United States\",\"Rockbridge County, Virginia, United States\",\"Rockingham County, Virginia, United States\",\"Russell County, Virginia, United States\",\"Salem City, Virginia, United States\",\"Scott County, Virginia, United States\",\"Shenandoah County, Virginia, United States\",\"Smyth County, Virginia, United States\",\"Southampton County, Virginia, United States\",\"Spotsylvania County, Virginia, United States\",\"Stafford County, Virginia, United States\",\"Staunton City, Virginia, United States\",\"Suffolk City, Virginia, United States\",\"Surry County, Virginia, United States\",\"Sussex County, Virginia, United States\",\"Tazewell County, Virginia, United States\",\"Virginia Beach City, Virginia, United States\",\"Warren County, Virginia, United States\",\"Washington County, Virginia, United States\",\"Waynesboro City, Virginia, United States\",\"Westmoreland County, Virginia, United States\",\"Williamsburg City, Virginia, United States\",\"Winchester City, Virginia, United States\",\"Wise County, Virginia, United States\",\"Wythe County, Virginia, United States\",\"York County, Virginia, United States\",\"Virginia, United States\",\"Île-de-France, FRA\",\"Nouvelle-Aquitaine, FRA\",\"Ontario, CAN\",\"British Columbia, CAN\",\"CAN\",\"Auvergne-Rhône-Alpes, FRA\",\"Bexar County, Texas, United States\",\"Abruzzo, ITA\",\"Basilicata, ITA\",\"Calabria, ITA\",\"Campania, ITA\",\"Emilia-Romagna, ITA\",\"Friuli Venezia Giulia, ITA\",\"Lazio, ITA\",\"Liguria, ITA\",\"Lombardy, ITA\",\"Marche, ITA\",\"Molise, ITA\",\"Piemont, ITA\",\"Apulia, ITA\",\"Sardinia, ITA\",\"Sicily, ITA\",\"Tuscany, ITA\",\"Trentino-Alto Adige-Südtirol, ITA\",\"Umbria, ITA\",\"Aosta Valley, ITA\",\"Veneto, ITA\",\"Spokane County, Washington, United States\",\"Bourgogne-Franche-Comté, FRA\",\"Salt Lake County, Utah, United States\",\"Hauts-de-France, FRA\",\"Grand Est, FRA\",\"Zurich, CHE\",\"Andalucía, ESP\",\"Aragón, ESP\",\"Asturias, ESP\",\"Baleares, ESP\",\"Canarias, ESP\",\"Cantabria, ESP\",\"Castilla-La Mancha, ESP\",\"Castilla y León, ESP\",\"Cataluña, ESP\",\"Ceuta, ESP\",\"C. Valenciana, ESP\",\"Extremadura, ESP\",\"Galicia, ESP\",\"Madrid, ESP\",\"Melilla, ESP\",\"Murcia, ESP\",\"Navarra, ESP\",\"País Vasco, ESP\",\"La Rioja, ESP\",\"Centre-Val de Loire, FRA\",\"Normandie, FRA\",\"Pays de la Loire, FRA\",\"Bretagne, FRA\",\"Occitanie, FRA\",\"Provence-Alpes-Côte d'Azur, FRA\",\"Corse, FRA\",\"Guadeloupe, FRA\",\"Martinique, FRA\",\"Guyane, FRA\",\"La Réunion, FRA\",\"Mayotte, FRA\",\"Quebec, CAN\",\"Saint-Barthélemy, FRA\",\"Saint-Martin, FRA\",\"New York City, iso2:US-NY, iso1:US\",\"Walla Walla County, Washington, United States\",\"Chelan County, Washington, United States\",\"AG, CHE\",\"AI, CHE\",\"AR, CHE\",\"BE, CHE\",\"BL, CHE\",\"BS, CHE\",\"FR, CHE\",\"GE, CHE\",\"GL, CHE\",\"GR, CHE\",\"JU, CHE\",\"LU, CHE\",\"NE, CHE\",\"NW, CHE\",\"OW, CHE\",\"SG, CHE\",\"SH, CHE\",\"SO, CHE\",\"SZ, CHE\",\"TG, CHE\",\"TI, CHE\",\"UR, CHE\",\"VD, CHE\",\"VS, CHE\",\"ZG, CHE\",\"ZH, CHE\",\"Washington County, Utah, United States\",\"District of Columbia, Washington, D.C., United States\",\"Alberta, CAN\",\"Floyd County, Georgia, United States\",\"Virginia Beach city, iso2:US-VA, iso1:US\",\"Polynésie française, FRA\",\"San Joaquin County, California, United States\",\"Adams County, Indiana, United States\",\"Repatriated Travellers, CAN\",\"Jefferson County, Arkansas, United States\",\"Pitkin County, Colorado, United States\",\"Miami-Dade County, Florida, United States\",\"St. Johns County, Florida, United States\",\"Bartow County, Georgia, United States\",\"Lee County, Georgia, United States\",\"Lowndes County, Georgia, United States\",\"Caddo Parish, Louisiana, United States\",\"Baltimore County, Maryland, United States\",\"Forrest County, Mississippi, United States\",\"Santa Fe County, New Mexico, United States\",\"Monroe County, New York, United States\",\"Ward County, North Dakota, United States\",\"Linn County, Oregon, United States\",\"Chittenden County, Vermont, United States\",\"Island County, Washington, United States\",\"Fond du Lac County, Wisconsin, United States\",\"Waukesha County, Wisconsin, United States\",\"Sheridan County, Wyoming, United States\",\"DE-BB, DEU\",\"DE-BE, DEU\",\"DE-BW, DEU\",\"DE-BY, DEU\",\"DE-HB, DEU\",\"DE-HE, DEU\",\"DE-HH, DEU\",\"DE-MV, DEU\",\"DE-NI, DEU\",\"DE-NW, DEU\",\"DE-RP, DEU\",\"DE-SH, DEU\",\"DE-SL, DEU\",\"DE-SN, DEU\",\"DE-ST, DEU\",\"DE-TH, DEU\",\"CUB\",\"GUY\",\"Australian Capital Territory, AUS\",\"KAZ\",\"French Polynesia, FRA\",\"ETH\",\"SDN\",\"GIN\",\"KEN\",\"ATG\",\"Alabama, United States\",\"URY\",\"GHA\",\"Puerto Rico, United States\",\"NAM\",\"SYC\",\"TTO\",\"VEN\",\"SWZ\",\"GAB\",\"GTM\",\"MRT\",\"RWA\",\"LCA\",\"VCT\",\"SUR\",\"French Guiana, FRA\",\"Guam, United States\",\"XKX\",\"CAF\",\"COG\",\"GNQ\",\"UZB\",\"BEN\",\"LBR\",\"Curacao, NLD\",\"SOM\",\"TZA\",\"United States Virgin Islands, United States\",\"Cayman Islands, GBR\",\"Reunion, FRA\",\"BRB\",\"MNE\",\"KGZ\",\"MUS\",\"Aruba, NLD\",\"ZMB\",\"DJI\",\"GMB\",\"Montserrat, GBR\",\"BHS\",\"Greenland, DNK\",\"New Caledonia, FRA\",\"Bermuda, GBR\",\"TCD\",\"SLV\",\"FJI\",\"NIC\",\"MDG\",\"HTI\",\"AGO\",\"CPV\",\"Sint Maarten, NLD\",\"NER\",\"PNG\",\"Isle of Man, GBR\",\"ZWE\",\"TLS\",\"ERI\",\"UGA\",\"DMA\",\"GRD\",\"MOZ\",\"SYR\",\"GLP\",\"MYT\",\"GRL\",\"GUM\",\"GGY\",\"JEY\",\"PRI\",\"Saskatchewan, CAN\",\"Manitoba, CAN\",\"New Brunswick, CAN\",\"Anchorage Municipality, Alaska, United States\",\"Pulaski County, Arkansas, United States\",\"Tulare County, California, United States\",\"Adams County, Colorado, United States\",\"Clay County, Florida, United States\",\"Duval County, Florida, United States\",\"Palm Beach County, Florida, United States\",\"Sarasota County, Florida, United States\",\"Seminole County, Florida, United States\",\"Carroll County, Iowa, United States\",\"Wyandotte County, Kansas, United States\",\"Montgomery County, Kentucky, United States\",\"Androscoggin County, Maine, United States\",\"Ingham County, Michigan, United States\",\"Kent County, Michigan, United States\",\"Montcalm County, Michigan, United States\",\"St. Clair County, Michigan, United States\",\"Washtenaw County, Michigan, United States\",\"Dakota County, Minnesota, United States\",\"Hennepin County, Minnesota, United States\",\"Stearns County, Minnesota, United States\",\"Greene County, Missouri, United States\",\"Cass County, Nebraska, United States\",\"Carson City, iso2:US-NV, iso1:US\",\"Essex County, New Jersey, United States\",\"Morris County, New Jersey, United States\",\"Albany County, New York, United States\",\"Delaware County, New York, United States\",\"Dutchess County, New York, United States\",\"Herkimer County, New York, United States\",\"Orange County, New York, United States\",\"Cabarrus County, North Carolina, United States\",\"Forsyth County, North Carolina, United States\",\"Johnston County, North Carolina, United States\",\"Mecklenburg County, North Carolina, United States\",\"Onslow County, North Carolina, United States\",\"Trumbull County, Ohio, United States\",\"Clackamas County, Oregon, United States\",\"Northampton County, Pennsylvania, United States\",\"Pike County, Pennsylvania, United States\",\"Knox County, Tennessee, United States\",\"Alexandria city, iso2:US-VA, iso1:US\",\"James city, iso2:US-VA, iso1:US\",\"Columbia County, Washington, United States\",\"Grays Harbor County, Washington, United States\",\"Yakima County, Washington, United States\",\"Lafourche Parish, Louisiana, United States\",\"Elmore County, Alabama, United States\",\"Jefferson County, Alabama, United States\",\"Limestone County, Alabama, United States\",\"Montgomery County, Alabama, United States\",\"Tuscaloosa County, Alabama, United States\",\"Clear Creek County, Colorado, United States\",\"Pueblo County, Colorado, United States\",\"Routt County, Colorado, United States\",\"Weld County, Colorado, United States\",\"Orange County, Florida, United States\",\"Osceola County, Florida, United States\",\"Gordon County, Georgia, United States\",\"Henry County, Georgia, United States\",\"Ada County, Idaho, United States\",\"Butler County, Kansas, United States\",\"Cumberland County, Maine, United States\",\"Anne Arundel County, Maryland, United States\",\"Charles County, Maryland, United States\",\"Bay County, Michigan, United States\",\"Charlevoix County, Michigan, United States\",\"Leelanau County, Michigan, United States\",\"Macomb County, Michigan, United States\",\"Wright County, Minnesota, United States\",\"Henry County, Missouri, United States\",\"Gallatin County, Montana, United States\",\"Lewis and Clark County, Montana, United States\",\"Silver Bow County, Montana, United States\",\"Yellowstone County, Montana, United States\",\"Oklahoma County, Oklahoma, United States\",\"Chester County, Pennsylvania, United States\",\"Cumberland County, Pennsylvania, United States\",\"Washington County, Pennsylvania, United States\",\"McCook County, South Dakota, United States\",\"Hamilton County, Tennessee, United States\",\"Jefferson County, Tennessee, United States\",\"Rutherford County, Tennessee, United States\",\"Harrisonburg city, iso2:US-VA, iso1:US\",\"Milwaukee County, Wisconsin, United States\",\"Racine County, Wisconsin, United States\",\"Sheboygan County, Wisconsin, United States\",\"Fremont County, Wyoming, United States\",\"Shasta County, CA, USA\",\"Kent County, Delaware, United States\",\"Sussex County, Delaware, United States\",\"Harrison County, Iowa, United States\",\"DeKalb County, Indiana, United States\",\"Tippecanoe County, Indiana, United States\",\"Elkhart County, Indiana, United States\",\"Madison County, Indiana, United States\",\"Jackson County, Indiana, United States\",\"Vanderburgh County, Indiana, United States\",\"Grant County, Indiana, United States\",\"Porter County, Indiana, United States\",\"Hamilton County, Indiana, United States\",\"Lake County, Indiana, United States\",\"Morgan County, Indiana, United States\",\"LaPorte County, Indiana, United States\",\"Floyd County, Indiana, United States\",\"Shelby County, Indiana, United States\",\"Allen County, Indiana, United States\",\"Tipton County, Indiana, United States\",\"Rush County, Indiana, United States\",\"Orange County, Indiana, United States\",\"Crawford County, Indiana, United States\",\"Owen County, Indiana, United States\",\"Fountain County, Indiana, United States\",\"Decatur County, Indiana, United States\",\"Fulton County, Indiana, United States\",\"LaGrange County, Indiana, United States\",\"Knox County, Indiana, United States\",\"Monroe County, Indiana, United States\",\"Cass County, Indiana, United States\",\"Randolph County, Indiana, United States\",\"Martin County, Indiana, United States\",\"Washington County, Indiana, United States\",\"Parke County, Indiana, United States\",\"Kosciusko County, Indiana, United States\",\"Wayne County, Indiana, United States\",\"Montgomery County, Indiana, United States\",\"Hancock County, Indiana, United States\",\"Vigo County, Indiana, United States\",\"Jefferson County, Indiana, United States\",\"Huntington County, Indiana, United States\",\"Harrison County, Indiana, United States\",\"Wabash County, Indiana, United States\",\"Delaware County, Indiana, United States\",\"Posey County, Indiana, United States\",\"Spencer County, Indiana, United States\",\"Ohio County, Indiana, United States\",\"Carroll County, Indiana, United States\",\"Warren County, Indiana, United States\",\"Franklin County, Indiana, United States\",\"Pulaski County, Indiana, United States\",\"Jay County, Indiana, United States\",\"Wells County, Indiana, United States\",\"Marshall County, Indiana, United States\",\"Sullivan County, Indiana, United States\",\"Brown County, Indiana, United States\",\"Ripley County, Indiana, United States\",\"Henry County, Indiana, United States\",\"Whitley County, Indiana, United States\",\"Dearborn County, Indiana, United States\",\"Blackford County, Indiana, United States\",\"Scott County, Indiana, United States\",\"Bartholomew County, Indiana, United States\",\"Jasper County, Indiana, United States\",\"Union County, Indiana, United States\",\"Vermillion County, Indiana, United States\",\"Benton County, Indiana, United States\",\"Clay County, Indiana, United States\",\"Lawrence County, Indiana, United States\",\"Clark County, Indiana, United States\",\"Miami County, Indiana, United States\",\"Fayette County, Indiana, United States\",\"Newton County, Indiana, United States\",\"Perry County, Indiana, United States\",\"Putnam County, Indiana, United States\",\"Starke County, Indiana, United States\",\"Greene County, Indiana, United States\",\"Pike County, Indiana, United States\",\"Warrick County, Indiana, United States\",\"Daviess County, Indiana, United States\",\"Dubois County, Indiana, United States\",\"Clinton County, Indiana, United States\",\"White County, Indiana, United States\",\"Switzerland County, Indiana, United States\",\"Steuben County, Indiana, United States\",\"Gibson County, Indiana, United States\",\"Jennings County, Indiana, United States\",\"St. Bernard Parish, Louisiana, United States\",\"St. Charles Parish, Louisiana, United States\",\"St. Tammany Parish, Louisiana, United States\",\"Terrebonne Parish, Louisiana, United States\",\"Barnstable County, Massachusetts, United States\",\"Bristol County, Massachusetts, United States\",\"Franklin County, Massachusetts, United States\",\"Hampden County, Massachusetts, United States\",\"Hampshire County, Massachusetts, United States\",\"Plymouth County, Massachusetts, United States\",\"Copiah County, Mississippi, United States\",\"Pearl River County, Mississippi, United States\",\"Leflore County, Mississippi, United States\",\"Adams County, Mississippi, United States\",\"Alcorn County, Mississippi, United States\",\"Amite County, Mississippi, United States\",\"Attala County, Mississippi, United States\",\"Benton County, Mississippi, United States\",\"Bolivar County, Mississippi, United States\",\"Calhoun County, Mississippi, United States\",\"Carroll County, Mississippi, United States\",\"Chickasaw County, Mississippi, United States\",\"Choctaw County, Mississippi, United States\",\"Claiborne County, Mississippi, United States\",\"Clarke County, Mississippi, United States\",\"Clay County, Mississippi, United States\",\"Coahoma County, Mississippi, United States\",\"Covington County, Mississippi, United States\",\"DeSoto County, Mississippi, United States\",\"Franklin County, Mississippi, United States\",\"George County, Mississippi, United States\",\"Greene County, Mississippi, United States\",\"Grenada County, Mississippi, United States\",\"Hancock County, Mississippi, United States\",\"Harrison County, Mississippi, United States\",\"Hinds County, Mississippi, United States\",\"Holmes County, Mississippi, United States\",\"Humphreys County, Mississippi, United States\",\"Issaquena County, Mississippi, United States\",\"Itawamba County, Mississippi, United States\",\"Jackson County, Mississippi, United States\",\"Jasper County, Mississippi, United States\",\"Jefferson County, Mississippi, United States\",\"Jefferson Davis County, Mississippi, United States\",\"Jones County, Mississippi, United States\",\"Kemper County, Mississippi, United States\",\"Lafayette County, Mississippi, United States\",\"Lamar County, Mississippi, United States\",\"Lauderdale County, Mississippi, United States\",\"Lawrence County, Mississippi, United States\",\"Leake County, Mississippi, United States\",\"Lee County, Mississippi, United States\",\"Lincoln County, Mississippi, United States\",\"Lowndes County, Mississippi, United States\",\"Madison County, Mississippi, United States\",\"Marion County, Mississippi, United States\",\"Marshall County, Mississippi, United States\",\"Monroe County, Mississippi, United States\",\"Montgomery County, Mississippi, United States\",\"Neshoba County, Mississippi, United States\",\"Newton County, Mississippi, United States\",\"Noxubee County, Mississippi, United States\",\"Oktibbeha County, Mississippi, United States\",\"Panola County, Mississippi, United States\",\"Perry County, Mississippi, United States\",\"Pike County, Mississippi, United States\",\"Pontotoc County, Mississippi, United States\",\"Prentiss County, Mississippi, United States\",\"Quitman County, Mississippi, United States\",\"Rankin County, Mississippi, United States\",\"Scott County, Mississippi, United States\",\"Sharkey County, Mississippi, United States\",\"Simpson County, Mississippi, United States\",\"Smith County, Mississippi, United States\",\"Stone County, Mississippi, United States\",\"Sunflower County, Mississippi, United States\",\"Tallahatchie County, Mississippi, United States\",\"Tate County, Mississippi, United States\",\"Tippah County, Mississippi, United States\",\"Tishomingo County, Mississippi, United States\",\"Tunica County, Mississippi, United States\",\"Union County, Mississippi, United States\",\"Walthall County, Mississippi, United States\",\"Warren County, Mississippi, United States\",\"Washington County, Mississippi, United States\",\"Wayne County, Mississippi, United States\",\"Webster County, Mississippi, United States\",\"Wilkinson County, Mississippi, United States\",\"Winston County, Mississippi, United States\",\"Yalobusha County, Mississippi, United States\",\"Yazoo County, Mississippi, United States\",\"Rockingham County, North Carolina, United States\",\"Guilford County, North Carolina, United States\",\"Alamance County, North Carolina, United States\",\"Alexander County, North Carolina, United States\",\"Randolph County, North Carolina, United States\",\"Wayne County, North Carolina, United States\",\"Ashe County, North Carolina, United States\",\"Alleghany County, North Carolina, United States\",\"Currituck County, North Carolina, United States\",\"Camden County, North Carolina, United States\",\"Surry County, North Carolina, United States\",\"Gates County, North Carolina, United States\",\"Hertford County, North Carolina, United States\",\"Northampton County, North Carolina, United States\",\"Stokes County, North Carolina, United States\",\"Warren County, North Carolina, United States\",\"Vance County, North Carolina, United States\",\"Granville County, North Carolina, United States\",\"Caswell County, North Carolina, United States\",\"Person County, North Carolina, United States\",\"Pasquotank County, North Carolina, United States\",\"Halifax County, North Carolina, United States\",\"Wilkes County, North Carolina, United States\",\"Watauga County, North Carolina, United States\",\"Perquimans County, North Carolina, United States\",\"Chowan County, North Carolina, United States\",\"Avery County, North Carolina, United States\",\"Yadkin County, North Carolina, United States\",\"Dare County, North Carolina, United States\",\"Franklin County, North Carolina, United States\",\"Bertie County, North Carolina, United States\",\"Orange County, North Carolina, United States\",\"Durham County, North Carolina, United States\",\"Nash County, North Carolina, United States\",\"Mitchell County, North Carolina, United States\",\"Edgecombe County, North Carolina, United States\",\"Caldwell County, North Carolina, United States\",\"Tyrrell County, North Carolina, United States\",\"Yancey County, North Carolina, United States\",\"Madison County, North Carolina, United States\",\"Martin County, North Carolina, United States\",\"Davie County, North Carolina, United States\",\"Washington County, North Carolina, United States\",\"Burke County, North Carolina, United States\",\"Davidson County, North Carolina, United States\",\"McDowell County, North Carolina, United States\",\"Wilson County, North Carolina, United States\",\"Buncombe County, North Carolina, United States\",\"Haywood County, North Carolina, United States\",\"Catawba County, North Carolina, United States\",\"Pitt County, North Carolina, United States\",\"Swain County, North Carolina, United States\",\"Beaufort County, North Carolina, United States\",\"Hyde County, North Carolina, United States\",\"Greene County, North Carolina, United States\",\"Rutherford County, North Carolina, United States\",\"Lee County, North Carolina, United States\",\"Cleveland County, North Carolina, United States\",\"Jackson County, North Carolina, United States\",\"Harnett County, North Carolina, United States\",\"Graham County, North Carolina, United States\",\"Henderson County, North Carolina, United States\",\"Moore County, North Carolina, United States\",\"Montgomery County, North Carolina, United States\",\"Stanly County, North Carolina, United States\",\"Transylvania County, North Carolina, United States\",\"Polk County, North Carolina, United States\",\"Lenoir County, North Carolina, United States\",\"Craven County, North Carolina, United States\",\"Macon County, North Carolina, United States\",\"Cherokee County, North Carolina, United States\",\"Pamlico County, North Carolina, United States\",\"Sampson County, North Carolina, United States\",\"Cumberland County, North Carolina, United States\",\"Clay County, North Carolina, United States\",\"Jones County, North Carolina, United States\",\"Carteret County, North Carolina, United States\",\"Union County, North Carolina, United States\",\"Anson County, North Carolina, United States\",\"Hoke County, North Carolina, United States\",\"Duplin County, North Carolina, United States\",\"Richmond County, North Carolina, United States\",\"Scotland County, North Carolina, United States\",\"Robeson County, North Carolina, United States\",\"Bladen County, North Carolina, United States\",\"Pender County, North Carolina, United States\",\"Columbus County, North Carolina, United States\",\"New Hanover County, North Carolina, United States\",\"Brunswick County, North Carolina, United States\",\"Iredell County, North Carolina, United States\",\"Rowan County, North Carolina, United States\",\"Lincoln County, North Carolina, United States\",\"Gaston County, North Carolina, United States\",\"Atlantic County, New Jersey, United States\",\"Cape May County, New Jersey, United States\",\"Cumberland County, New Jersey, United States\",\"Gloucester County, New Jersey, United States\",\"Hunterdon County, New Jersey, United States\",\"Mercer County, New Jersey, United States\",\"Ocean County, New Jersey, United States\",\"Salem County, New Jersey, United States\",\"Somerset County, New Jersey, United States\",\"Sussex County, New Jersey, United States\",\"Warren County, New Jersey, United States\",\"Broome County, New York, United States\",\"Allegany County, New York, United States\",\"Bronx County, New York, United States\",\"Cattaraugus County, New York, United States\",\"Cayuga County, New York, United States\",\"Chautauqua County, New York, United States\",\"Chemung County, New York, United States\",\"Chenango County, New York, United States\",\"Clinton County, New York, United States\",\"Columbia County, New York, United States\",\"Cortland County, New York, United States\",\"Erie County, New York, United States\",\"Essex County, New York, United States\",\"Franklin County, New York, United States\",\"Fulton County, New York, United States\",\"Genesee County, New York, United States\",\"Greene County, New York, United States\",\"Hamilton County, New York, United States\",\"Jefferson County, New York, United States\",\"Kings County, New York, United States\",\"Lewis County, New York, United States\",\"Livingston County, New York, United States\",\"Madison County, New York, United States\",\"Montgomery County, New York, United States\",\"Niagara County, New York, United States\",\"Oneida County, New York, United States\",\"Onondaga County, New York, United States\",\"Ontario County, New York, United States\",\"Orleans County, New York, United States\",\"Oswego County, New York, United States\",\"Otsego County, New York, United States\",\"Putnam County, New York, United States\",\"Queens County, New York, United States\",\"Rensselaer County, New York, United States\",\"Richmond County, New York, United States\",\"St. Lawrence County, New York, United States\",\"Schenectady County, New York, United States\",\"Schoharie County, New York, United States\",\"Schuyler County, New York, United States\",\"Seneca County, New York, United States\",\"Steuben County, New York, United States\",\"Sullivan County, New York, United States\",\"Tioga County, New York, United States\",\"Tompkins County, New York, United States\",\"Warren County, New York, United States\",\"Washington County, New York, United States\",\"Wayne County, New York, United States\",\"Wyoming County, New York, United States\",\"Yates County, New York, United States\",\"Baker County, Oregon, United States\",\"Benton County, Oregon, United States\",\"Clatsop County, Oregon, United States\",\"Columbia County, Oregon, United States\",\"Coos County, Oregon, United States\",\"Crook County, Oregon, United States\",\"Curry County, Oregon, United States\",\"Gilliam County, Oregon, United States\",\"Grant County, Oregon, United States\",\"Harney County, Oregon, United States\",\"Hood River County, Oregon, United States\",\"Jefferson County, Oregon, United States\",\"Josephine County, Oregon, United States\",\"Lake County, Oregon, United States\",\"Lane County, Oregon, United States\",\"Lincoln County, Oregon, United States\",\"Malheur County, Oregon, United States\",\"Morrow County, Oregon, United States\",\"Sherman County, Oregon, United States\",\"Tillamook County, Oregon, United States\",\"Union County, Oregon, United States\",\"Wallowa County, Oregon, United States\",\"Wasco County, Oregon, United States\",\"Wheeler County, Oregon, United States\",\"Yamhill County, Oregon, United States\",\"Bell County, Texas, United States\",\"Smith County, Texas, United States\",\"Travis County, Texas, United States\",\"Anderson County, Texas, United States\",\"Andrews County, Texas, United States\",\"Angelina County, Texas, United States\",\"Aransas County, Texas, United States\",\"Archer County, Texas, United States\",\"Armstrong County, Texas, United States\",\"Atascosa County, Texas, United States\",\"Austin County, Texas, United States\",\"Bailey County, Texas, United States\",\"Bandera County, Texas, United States\",\"Bastrop County, Texas, United States\",\"Baylor County, Texas, United States\",\"Bee County, Texas, United States\",\"Blanco County, Texas, United States\",\"Borden County, Texas, United States\",\"Bosque County, Texas, United States\",\"Bowie County, Texas, United States\",\"Brazoria County, Texas, United States\",\"Brazos County, Texas, United States\",\"Brewster County, Texas, United States\",\"Briscoe County, Texas, United States\",\"Brooks County, Texas, United States\",\"Brown County, Texas, United States\",\"Burleson County, Texas, United States\",\"Burnet County, Texas, United States\",\"Caldwell County, Texas, United States\",\"Calhoun County, Texas, United States\",\"Callahan County, Texas, United States\",\"Cameron County, Texas, United States\",\"Camp County, Texas, United States\",\"Carson County, Texas, United States\",\"Cass County, Texas, United States\",\"Castro County, Texas, United States\",\"Chambers County, Texas, United States\",\"Cherokee County, Texas, United States\",\"Childress County, Texas, United States\",\"Clay County, Texas, United States\",\"Cochran County, Texas, United States\",\"Coke County, Texas, United States\",\"Coleman County, Texas, United States\",\"Collingsworth County, Texas, United States\",\"Colorado County, Texas, United States\",\"Comal County, Texas, United States\",\"Comanche County, Texas, United States\",\"Concho County, Texas, United States\",\"Cooke County, Texas, United States\",\"Coryell County, Texas, United States\",\"Cottle County, Texas, United States\",\"Crane County, Texas, United States\",\"Crockett County, Texas, United States\",\"Crosby County, Texas, United States\",\"Culberson County, Texas, United States\",\"Dallam County, Texas, United States\",\"Dawson County, Texas, United States\",\"Deaf Smith County, Texas, United States\",\"Delta County, Texas, United States\",\"Denton County, Texas, United States\",\"DeWitt County, Texas, United States\",\"Dickens County, Texas, United States\",\"Dimmit County, Texas, United States\",\"Donley County, Texas, United States\",\"Duval County, Texas, United States\",\"Eastland County, Texas, United States\",\"Ector County, Texas, United States\",\"Edwards County, Texas, United States\",\"Ellis County, Texas, United States\",\"El Paso County, Texas, United States\",\"Erath County, Texas, United States\",\"Falls County, Texas, United States\",\"Fannin County, Texas, United States\",\"Fayette County, Texas, United States\",\"Fisher County, Texas, United States\",\"Floyd County, Texas, United States\",\"Foard County, Texas, United States\",\"Franklin County, Texas, United States\",\"Freestone County, Texas, United States\",\"Frio County, Texas, United States\",\"Gaines County, Texas, United States\",\"Galveston County, Texas, United States\",\"Garza County, Texas, United States\",\"Gillespie County, Texas, United States\",\"Glasscock County, Texas, United States\",\"Goliad County, Texas, United States\",\"Gonzales County, Texas, United States\",\"Gray County, Texas, United States\",\"Grayson County, Texas, United States\",\"Grimes County, Texas, United States\",\"Guadalupe County, Texas, United States\",\"Hale County, Texas, United States\",\"Hall County, Texas, United States\",\"Hamilton County, Texas, United States\",\"Hansford County, Texas, United States\",\"Hardeman County, Texas, United States\",\"Hardin County, Texas, United States\",\"Harrison County, Texas, United States\",\"Hartley County, Texas, United States\",\"Haskell County, Texas, United States\",\"Hays County, Texas, United States\",\"Hemphill County, Texas, United States\",\"Henderson County, Texas, United States\",\"Hidalgo County, Texas, United States\",\"Hill County, Texas, United States\",\"Hockley County, Texas, United States\",\"Hood County, Texas, United States\",\"Hopkins County, Texas, United States\",\"Houston County, Texas, United States\",\"Howard County, Texas, United States\",\"Hudspeth County, Texas, United States\",\"Hunt County, Texas, United States\",\"Hutchinson County, Texas, United States\",\"Irion County, Texas, United States\",\"Jack County, Texas, United States\",\"Jackson County, Texas, United States\",\"Jasper County, Texas, United States\",\"Jeff Davis County, Texas, United States\",\"Jefferson County, Texas, United States\",\"Jim Hogg County, Texas, United States\",\"Jim Wells County, Texas, United States\",\"Johnson County, Texas, United States\",\"Jones County, Texas, United States\",\"Karnes County, Texas, United States\",\"Kaufman County, Texas, United States\",\"Kendall County, Texas, United States\",\"Kenedy County, Texas, United States\",\"Kent County, Texas, United States\",\"Kerr County, Texas, United States\",\"Kimble County, Texas, United States\",\"King County, Texas, United States\",\"Kinney County, Texas, United States\",\"Kleberg County, Texas, United States\",\"Knox County, Texas, United States\",\"Lamar County, Texas, United States\",\"Lamb County, Texas, United States\",\"Lampasas County, Texas, United States\",\"La Salle County, Texas, United States\",\"Lavaca County, Texas, United States\",\"Lee County, Texas, United States\",\"Leon County, Texas, United States\",\"Liberty County, Texas, United States\",\"Limestone County, Texas, United States\",\"Lipscomb County, Texas, United States\",\"Live Oak County, Texas, United States\",\"Llano County, Texas, United States\",\"Loving County, Texas, United States\",\"Lubbock County, Texas, United States\",\"Lynn County, Texas, United States\",\"McCulloch County, Texas, United States\",\"McLennan County, Texas, United States\",\"McMullen County, Texas, United States\",\"Madison County, Texas, United States\",\"Marion County, Texas, United States\",\"Martin County, Texas, United States\",\"Mason County, Texas, United States\",\"Matagorda County, Texas, United States\",\"Maverick County, Texas, United States\",\"Medina County, Texas, United States\",\"Menard County, Texas, United States\",\"Midland County, Texas, United States\",\"Milam County, Texas, United States\",\"Mills County, Texas, United States\",\"Mitchell County, Texas, United States\",\"Montague County, Texas, United States\",\"Moore County, Texas, United States\",\"Morris County, Texas, United States\",\"Motley County, Texas, United States\",\"Nacogdoches County, Texas, United States\",\"Navarro County, Texas, United States\",\"Newton County, Texas, United States\",\"Nolan County, Texas, United States\",\"Nueces County, Texas, United States\",\"Ochiltree County, Texas, United States\",\"Oldham County, Texas, United States\",\"Orange County, Texas, United States\",\"Palo Pinto County, Texas, United States\",\"Panola County, Texas, United States\",\"Parker County, Texas, United States\",\"Parmer County, Texas, United States\",\"Pecos County, Texas, United States\",\"Polk County, Texas, United States\",\"Potter County, Texas, United States\",\"Presidio County, Texas, United States\",\"Rains County, Texas, United States\",\"Randall County, Texas, United States\",\"Reagan County, Texas, United States\",\"Real County, Texas, United States\",\"Red River County, Texas, United States\",\"Reeves County, Texas, United States\",\"Refugio County, Texas, United States\",\"Roberts County, Texas, United States\",\"Robertson County, Texas, United States\",\"Rockwall County, Texas, United States\",\"Runnels County, Texas, United States\",\"Rusk County, Texas, United States\",\"Sabine County, Texas, United States\",\"San Augustine County, Texas, United States\",\"San Jacinto County, Texas, United States\",\"San Patricio County, Texas, United States\",\"San Saba County, Texas, United States\",\"Schleicher County, Texas, United States\",\"Scurry County, Texas, United States\",\"Shackelford County, Texas, United States\",\"Shelby County, Texas, United States\",\"Sherman County, Texas, United States\",\"Somervell County, Texas, United States\",\"Starr County, Texas, United States\",\"Stephens County, Texas, United States\",\"Sterling County, Texas, United States\",\"Stonewall County, Texas, United States\",\"Sutton County, Texas, United States\",\"Swisher County, Texas, United States\",\"Taylor County, Texas, United States\",\"Terrell County, Texas, United States\",\"Terry County, Texas, United States\",\"Throckmorton County, Texas, United States\",\"Titus County, Texas, United States\",\"Tom Green County, Texas, United States\",\"Trinity County, Texas, United States\",\"Tyler County, Texas, United States\",\"Upshur County, Texas, United States\",\"Upton County, Texas, United States\",\"Uvalde County, Texas, United States\",\"Val Verde County, Texas, United States\",\"Van Zandt County, Texas, United States\",\"Victoria County, Texas, United States\",\"Walker County, Texas, United States\",\"Waller County, Texas, United States\",\"Ward County, Texas, United States\",\"Washington County, Texas, United States\",\"Webb County, Texas, United States\",\"Wharton County, Texas, United States\",\"Wheeler County, Texas, United States\",\"Wichita County, Texas, United States\",\"Wilbarger County, Texas, United States\",\"Willacy County, Texas, United States\",\"Williamson County, Texas, United States\",\"Wilson County, Texas, United States\",\"Winkler County, Texas, United States\",\"Wise County, Texas, United States\",\"Wood County, Texas, United States\",\"Yoakum County, Texas, United States\",\"Young County, Texas, United States\",\"Zapata County, Texas, United States\",\"Zavala County, Texas, United States\",\"(unassigned), iso2:US-WA, iso1:US\",\"Mason County, Washington, United States\",\"Skamania County, Washington, United States\",\"Wahkiakum County, Washington, United States\",\"Garfield County, Washington, United States\",\"Stevens County, Washington, United States\",\"Whitman County, Washington, United States\",\"Adams County, Washington, United States\",\"Asotin County, Washington, United States\",\"Benton County, Washington, United States\",\"Clallam County, Washington, United States\",\"Cowlitz County, Washington, United States\",\"Douglas County, Washington, United States\",\"Ferry County, Washington, United States\",\"Franklin County, Washington, United States\",\"Klickitat County, Washington, United States\",\"Lewis County, Washington, United States\",\"Lincoln County, Washington, United States\",\"Okanogan County, Washington, United States\",\"Pacific County, Washington, United States\",\"Pend Oreille County, Washington, United States\",\"San Juan County, Washington, United States\",\"Graham County, Arizona, United States\",\"San Luis Obispo County, California, United States\",\"Boulder County, Colorado, United States\",\"Coweta County, Georgia, United States\",\"Kauai County, Hawaii, United States\",\"Blaine County, Idaho, United States\",\"Teton County, Idaho, United States\",\"Cumberland County, Illinois, United States\",\"DuPage County, Illinois, United States\",\"Sangamon County, Illinois, United States\",\"St. Clair County, Illinois, United States\",\"Woodford County, Illinois, United States\",\"Franklin County, Kansas, United States\",\"Bourbon County, Kentucky, United States\",\"Nelson County, Kentucky, United States\",\"Carroll County, Maryland, United States\",\"Monroe County, Michigan, United States\",\"Renville County, Minnesota, United States\",\"Missoula County, Montana, United States\",\"Sandoval County, New Mexico, United States\",\"Jackson County, Oklahoma, United States\",\"Beaufort County, South Carolina, United States\",\"Lexington County, South Carolina, United States\",\"Washington County, Vermont, United States\",\"Windsor County, Vermont, United States\",\"Baldwin County, Alabama, United States\",\"Autauga County, Alabama, United States\",\"Barbour County, Alabama, United States\",\"Bibb County, Alabama, United States\",\"Blount County, Alabama, United States\",\"Bullock County, Alabama, United States\",\"Butler County, Alabama, United States\",\"Calhoun County, Alabama, United States\",\"Chambers County, Alabama, United States\",\"Cherokee County, Alabama, United States\",\"Chilton County, Alabama, United States\",\"Choctaw County, Alabama, United States\",\"Clarke County, Alabama, United States\",\"Clay County, Alabama, United States\",\"Cleburne County, Alabama, United States\",\"Coffee County, Alabama, United States\",\"Colbert County, Alabama, United States\",\"Conecuh County, Alabama, United States\",\"Coosa County, Alabama, United States\",\"Covington County, Alabama, United States\",\"Crenshaw County, Alabama, United States\",\"Cullman County, Alabama, United States\",\"Dale County, Alabama, United States\",\"Dallas County, Alabama, United States\",\"DeKalb County, Alabama, United States\",\"Escambia County, Alabama, United States\",\"Etowah County, Alabama, United States\",\"Fayette County, Alabama, United States\",\"Franklin County, Alabama, United States\",\"Geneva County, Alabama, United States\",\"Greene County, Alabama, United States\",\"Hale County, Alabama, United States\",\"Henry County, Alabama, United States\",\"Houston County, Alabama, United States\",\"Jackson County, Alabama, United States\",\"Lamar County, Alabama, United States\",\"Lauderdale County, Alabama, United States\",\"Lawrence County, Alabama, United States\",\"Lee County, Alabama, United States\",\"Lowndes County, Alabama, United States\",\"Macon County, Alabama, United States\",\"Madison County, Alabama, United States\",\"Marengo County, Alabama, United States\",\"Marion County, Alabama, United States\",\"Marshall County, Alabama, United States\",\"Mobile County, Alabama, United States\",\"Monroe County, Alabama, United States\",\"Morgan County, Alabama, United States\",\"Perry County, Alabama, United States\",\"Pickens County, Alabama, United States\",\"Pike County, Alabama, United States\",\"Randolph County, Alabama, United States\",\"Russell County, Alabama, United States\",\"St. Clair County, Alabama, United States\",\"Shelby County, Alabama, United States\",\"Sumter County, Alabama, United States\",\"Talladega County, Alabama, United States\",\"Tallapoosa County, Alabama, United States\",\"Walker County, Alabama, United States\",\"Washington County, Alabama, United States\",\"Wilcox County, Alabama, United States\",\"Winston County, Alabama, United States\",\"Mesa County, Colorado, United States\",\"Hartford County, Connecticut, United States\",\"New Haven County, Connecticut, United States\",\"Dallas County, Iowa, United States\",\"De Soto Parish, Louisiana, United States\",\"St. John the Baptist Parish, Louisiana, United States\",\"Sabine Parish, Louisiana, United States\",\"Tangipahoa Parish, Louisiana, United States\",\"Livingston Parish, Louisiana, United States\",\"Calcasieu Parish, Louisiana, United States\",\"Union Parish, Louisiana, United States\",\"Caldwell Parish, Louisiana, United States\",\"Tensas Parish, Louisiana, United States\",\"Jackson Parish, Louisiana, United States\",\"Grant Parish, Louisiana, United States\",\"Lincoln Parish, Louisiana, United States\",\"Jefferson Davis Parish, Louisiana, United States\",\"Lafayette Parish, Louisiana, United States\",\"East Carroll Parish, Louisiana, United States\",\"East Feliciana Parish, Louisiana, United States\",\"Iberville Parish, Louisiana, United States\",\"Richland Parish, Louisiana, United States\",\"St. Martin Parish, Louisiana, United States\",\"Claiborne Parish, Louisiana, United States\",\"St. Landry Parish, Louisiana, United States\",\"Pointe Coupee Parish, Louisiana, United States\",\"LaSalle Parish, Louisiana, United States\",\"Webster Parish, Louisiana, United States\",\"St. James Parish, Louisiana, United States\",\"Morehouse Parish, Louisiana, United States\",\"Rapides Parish, Louisiana, United States\",\"Avoyelles Parish, Louisiana, United States\",\"Winn Parish, Louisiana, United States\",\"Catahoula Parish, Louisiana, United States\",\"Assumption Parish, Louisiana, United States\",\"Washington Parish, Louisiana, United States\",\"East Baton Rouge Parish, Louisiana, United States\",\"Natchitoches Parish, Louisiana, United States\",\"Bienville Parish, Louisiana, United States\",\"Bossier Parish, Louisiana, United States\",\"Allen Parish, Louisiana, United States\",\"Ouachita Parish, Louisiana, United States\",\"St. Helena Parish, Louisiana, United States\",\"West Feliciana Parish, Louisiana, United States\",\"West Carroll Parish, Louisiana, United States\",\"Concordia Parish, Louisiana, United States\",\"West Baton Rouge Parish, Louisiana, United States\",\"Madison Parish, Louisiana, United States\",\"Ascension Parish, Louisiana, United States\",\"Acadia Parish, Louisiana, United States\",\"Beauregard Parish, Louisiana, United States\",\"Franklin Parish, Louisiana, United States\",\"Evangeline Parish, Louisiana, United States\",\"Vernon Parish, Louisiana, United States\",\"Red River Parish, Louisiana, United States\",\"Vermilion Parish, Louisiana, United States\",\"Plaquemines Parish, Louisiana, United States\",\"St. Mary Parish, Louisiana, United States\",\"Cameron Parish, Louisiana, United States\",\"Iberia Parish, Louisiana, United States\",\"(unassigned), iso2:US-LA, iso1:US\",\"Belmont County, Ohio, United States\",\"Butler County, Ohio, United States\",\"Franklin County, Ohio, United States\",\"Lorain County, Ohio, United States\",\"Summit County, Ohio, United States\",\"Adams County, Ohio, United States\",\"Allen County, Ohio, United States\",\"Ashland County, Ohio, United States\",\"Ashtabula County, Ohio, United States\",\"Athens County, Ohio, United States\",\"Auglaize County, Ohio, United States\",\"Brown County, Ohio, United States\",\"Carroll County, Ohio, United States\",\"Champaign County, Ohio, United States\",\"Clark County, Ohio, United States\",\"Clermont County, Ohio, United States\",\"Clinton County, Ohio, United States\",\"Columbiana County, Ohio, United States\",\"Coshocton County, Ohio, United States\",\"Crawford County, Ohio, United States\",\"Darke County, Ohio, United States\",\"Defiance County, Ohio, United States\",\"Delaware County, Ohio, United States\",\"Erie County, Ohio, United States\",\"Fairfield County, Ohio, United States\",\"Fayette County, Ohio, United States\",\"Fulton County, Ohio, United States\",\"Gallia County, Ohio, United States\",\"Geauga County, Ohio, United States\",\"Greene County, Ohio, United States\",\"Guernsey County, Ohio, United States\",\"Hamilton County, Ohio, United States\",\"Hancock County, Ohio, United States\",\"Hardin County, Ohio, United States\",\"Harrison County, Ohio, United States\",\"Henry County, Ohio, United States\",\"Highland County, Ohio, United States\",\"Hocking County, Ohio, United States\",\"Holmes County, Ohio, United States\",\"Huron County, Ohio, United States\",\"Jackson County, Ohio, United States\",\"Jefferson County, Ohio, United States\",\"Knox County, Ohio, United States\",\"Lake County, Ohio, United States\",\"Lawrence County, Ohio, United States\",\"Licking County, Ohio, United States\",\"Logan County, Ohio, United States\",\"Lucas County, Ohio, United States\",\"Madison County, Ohio, United States\",\"Mahoning County, Ohio, United States\",\"Marion County, Ohio, United States\",\"Medina County, Ohio, United States\",\"Meigs County, Ohio, United States\",\"Mercer County, Ohio, United States\",\"Miami County, Ohio, United States\",\"Monroe County, Ohio, United States\",\"Montgomery County, Ohio, United States\",\"Morgan County, Ohio, United States\",\"Morrow County, Ohio, United States\",\"Muskingum County, Ohio, United States\",\"Noble County, Ohio, United States\",\"Ottawa County, Ohio, United States\",\"Paulding County, Ohio, United States\",\"Perry County, Ohio, United States\",\"Pickaway County, Ohio, United States\",\"Pike County, Ohio, United States\",\"Portage County, Ohio, United States\",\"Preble County, Ohio, United States\",\"Putnam County, Ohio, United States\",\"Richland County, Ohio, United States\",\"Ross County, Ohio, United States\",\"Sandusky County, Ohio, United States\",\"Scioto County, Ohio, United States\",\"Seneca County, Ohio, United States\",\"Shelby County, Ohio, United States\",\"Tuscarawas County, Ohio, United States\",\"Union County, Ohio, United States\",\"Van Wert County, Ohio, United States\",\"Vinton County, Ohio, United States\",\"Warren County, Ohio, United States\",\"Washington County, Ohio, United States\",\"Wayne County, Ohio, United States\",\"Williams County, Ohio, United States\",\"Wood County, Ohio, United States\",\"Wyandot County, Ohio, United States\",\"Allegheny County, Pennsylvania, United States\",\"Armstrong County, Pennsylvania, United States\",\"Beaver County, Pennsylvania, United States\",\"Bedford County, Pennsylvania, United States\",\"Berks County, Pennsylvania, United States\",\"Blair County, Pennsylvania, United States\",\"Bradford County, Pennsylvania, United States\",\"Butler County, Pennsylvania, United States\",\"Cambria County, Pennsylvania, United States\",\"Cameron County, Pennsylvania, United States\",\"Carbon County, Pennsylvania, United States\",\"Centre County, Pennsylvania, United States\",\"Clarion County, Pennsylvania, United States\",\"Clearfield County, Pennsylvania, United States\",\"Clinton County, Pennsylvania, United States\",\"Columbia County, Pennsylvania, United States\",\"Crawford County, Pennsylvania, United States\",\"Dauphin County, Pennsylvania, United States\",\"Elk County, Pennsylvania, United States\",\"Erie County, Pennsylvania, United States\",\"Fayette County, Pennsylvania, United States\",\"Forest County, Pennsylvania, United States\",\"Franklin County, Pennsylvania, United States\",\"Fulton County, Pennsylvania, United States\",\"Greene County, Pennsylvania, United States\",\"Huntingdon County, Pennsylvania, United States\",\"Indiana County, Pennsylvania, United States\",\"Jefferson County, Pennsylvania, United States\",\"Juniata County, Pennsylvania, United States\",\"Lackawanna County, Pennsylvania, United States\",\"Lancaster County, Pennsylvania, United States\",\"Lawrence County, Pennsylvania, United States\",\"Lebanon County, Pennsylvania, United States\",\"Lehigh County, Pennsylvania, United States\",\"Luzerne County, Pennsylvania, United States\",\"Lycoming County, Pennsylvania, United States\",\"McKean County, Pennsylvania, United States\",\"Mercer County, Pennsylvania, United States\",\"Mifflin County, Pennsylvania, United States\",\"Montour County, Pennsylvania, United States\",\"Northumberland County, Pennsylvania, United States\",\"Perry County, Pennsylvania, United States\",\"Potter County, Pennsylvania, United States\",\"Schuylkill County, Pennsylvania, United States\",\"Snyder County, Pennsylvania, United States\",\"Somerset County, Pennsylvania, United States\",\"Sullivan County, Pennsylvania, United States\",\"Susquehanna County, Pennsylvania, United States\",\"Tioga County, Pennsylvania, United States\",\"Union County, Pennsylvania, United States\",\"Venango County, Pennsylvania, United States\",\"Warren County, Pennsylvania, United States\",\"Westmoreland County, Pennsylvania, United States\",\"Wyoming County, Pennsylvania, United States\",\"York County, Pennsylvania, United States\",\"Aurora County, South Dakota, United States\",\"Bennett County, South Dakota, United States\",\"Brookings County, South Dakota, United States\",\"Brown County, South Dakota, United States\",\"Brule County, South Dakota, United States\",\"Buffalo County, South Dakota, United States\",\"Butte County, South Dakota, United States\",\"Campbell County, South Dakota, United States\",\"Clark County, South Dakota, United States\",\"Clay County, South Dakota, United States\",\"Codington County, South Dakota, United States\",\"Corson County, South Dakota, United States\",\"Custer County, South Dakota, United States\",\"Day County, South Dakota, United States\",\"Deuel County, South Dakota, United States\",\"Dewey County, South Dakota, United States\",\"Douglas County, South Dakota, United States\",\"Edmunds County, South Dakota, United States\",\"Fall River County, South Dakota, United States\",\"Faulk County, South Dakota, United States\",\"Grant County, South Dakota, United States\",\"Gregory County, South Dakota, United States\",\"Haakon County, South Dakota, United States\",\"Hamlin County, South Dakota, United States\",\"Hand County, South Dakota, United States\",\"Hanson County, South Dakota, United States\",\"Harding County, South Dakota, United States\",\"Hughes County, South Dakota, United States\",\"Hutchinson County, South Dakota, United States\",\"Hyde County, South Dakota, United States\",\"Jackson County, South Dakota, United States\",\"Jerauld County, South Dakota, United States\",\"Jones County, South Dakota, United States\",\"Kingsbury County, South Dakota, United States\",\"Lake County, South Dakota, United States\",\"Lawrence County, South Dakota, United States\",\"Lincoln County, South Dakota, United States\",\"Lyman County, South Dakota, United States\",\"Marshall County, South Dakota, United States\",\"McPherson County, South Dakota, United States\",\"Meade County, South Dakota, United States\",\"Mellette County, South Dakota, United States\",\"Miner County, South Dakota, United States\",\"Moody County, South Dakota, United States\",\"Oglala Lakota County, South Dakota, United States\",\"Perkins County, South Dakota, United States\",\"Potter County, South Dakota, United States\",\"Roberts County, South Dakota, United States\",\"Sanborn County, South Dakota, United States\",\"Spink County, South Dakota, United States\",\"Stanley County, South Dakota, United States\",\"Sully County, South Dakota, United States\",\"Todd County, South Dakota, United States\",\"Tripp County, South Dakota, United States\",\"Turner County, South Dakota, United States\",\"Union County, South Dakota, United States\",\"Walworth County, South Dakota, United States\",\"Yankton County, South Dakota, United States\",\"Ziebach County, South Dakota, United States\",\"Campbell County, Tennessee, United States\",\"(unassigned), iso2:US-TN, iso1:US\",\"Anderson County, Tennessee, United States\",\"Bedford County, Tennessee, United States\",\"Benton County, Tennessee, United States\",\"Bledsoe County, Tennessee, United States\",\"Blount County, Tennessee, United States\",\"Bradley County, Tennessee, United States\",\"Cannon County, Tennessee, United States\",\"Carroll County, Tennessee, United States\",\"Carter County, Tennessee, United States\",\"Cheatham County, Tennessee, United States\",\"Chester County, Tennessee, United States\",\"Claiborne County, Tennessee, United States\",\"Clay County, Tennessee, United States\",\"Cocke County, Tennessee, United States\",\"Coffee County, Tennessee, United States\",\"Crockett County, Tennessee, United States\",\"Cumberland County, Tennessee, United States\",\"Decatur County, Tennessee, United States\",\"DeKalb County, Tennessee, United States\",\"Dickson County, Tennessee, United States\",\"Dyer County, Tennessee, United States\",\"Fayette County, Tennessee, United States\",\"Fentress County, Tennessee, United States\",\"Franklin County, Tennessee, United States\",\"Gibson County, Tennessee, United States\",\"Giles County, Tennessee, United States\",\"Grainger County, Tennessee, United States\",\"Greene County, Tennessee, United States\",\"Grundy County, Tennessee, United States\",\"Hamblen County, Tennessee, United States\",\"Hancock County, Tennessee, United States\",\"Hardeman County, Tennessee, United States\",\"Hardin County, Tennessee, United States\",\"Hawkins County, Tennessee, United States\",\"Haywood County, Tennessee, United States\",\"Henderson County, Tennessee, United States\",\"Henry County, Tennessee, United States\",\"Hickman County, Tennessee, United States\",\"Houston County, Tennessee, United States\",\"Humphreys County, Tennessee, United States\",\"Jackson County, Tennessee, United States\",\"Johnson County, Tennessee, United States\",\"Lake County, Tennessee, United States\",\"Lauderdale County, Tennessee, United States\",\"Lawrence County, Tennessee, United States\",\"Lewis County, Tennessee, United States\",\"Lincoln County, Tennessee, United States\",\"Loudon County, Tennessee, United States\",\"Macon County, Tennessee, United States\",\"Madison County, Tennessee, United States\",\"Marion County, Tennessee, United States\",\"Marshall County, Tennessee, United States\",\"Maury County, Tennessee, United States\",\"McMinn County, Tennessee, United States\",\"McNairy County, Tennessee, United States\",\"Meigs County, Tennessee, United States\",\"Monroe County, Tennessee, United States\",\"Montgomery County, Tennessee, United States\",\"Moore County, Tennessee, United States\",\"Morgan County, Tennessee, United States\",\"Obion County, Tennessee, United States\",\"Overton County, Tennessee, United States\",\"Perry County, Tennessee, United States\",\"Pickett County, Tennessee, United States\",\"Polk County, Tennessee, United States\",\"Putnam County, Tennessee, United States\",\"Rhea County, Tennessee, United States\",\"Roane County, Tennessee, United States\",\"Robertson County, Tennessee, United States\",\"Scott County, Tennessee, United States\",\"Sequatchie County, Tennessee, United States\",\"Sevier County, Tennessee, United States\",\"Smith County, Tennessee, United States\",\"Stewart County, Tennessee, United States\",\"Sumner County, Tennessee, United States\",\"Tipton County, Tennessee, United States\",\"Trousdale County, Tennessee, United States\",\"Unicoi County, Tennessee, United States\",\"Union County, Tennessee, United States\",\"Van Buren County, Tennessee, United States\",\"Warren County, Tennessee, United States\",\"Washington County, Tennessee, United States\",\"Wayne County, Tennessee, United States\",\"Weakley County, Tennessee, United States\",\"White County, Tennessee, United States\",\"Wilson County, Tennessee, United States\",\"Box Elder County, Cache County, Rich County, Utah, United States\",\"Juab County, Millard County, Piute County, Sanpete County, Sevier County, Wayne County, Utah, United States\",\"San Juan County, Utah, United States\",\"Carbon County, Emery County, Grand County, Utah, United States\",\"Beaver County, Garfield County, Iron County, Kane County, Washington County, Utah, United States\",\"Tooele County, Utah, United States\",\"Uintah County, Duchesne County, Daggett County, Utah, United States\",\"Utah County, Utah, United States\",\"Wasatch County, Utah, United States\",\"Weber County, Morgan County, Utah, United States\",\"Winnebago County, Wisconsin, United States\",\"Adams County, Wisconsin, United States\",\"Ashland County, Wisconsin, United States\",\"Barron County, Wisconsin, United States\",\"Bayfield County, Wisconsin, United States\",\"Brown County, Wisconsin, United States\",\"Buffalo County, Wisconsin, United States\",\"Burnett County, Wisconsin, United States\",\"Calumet County, Wisconsin, United States\",\"Chippewa County, Wisconsin, United States\",\"Clark County, Wisconsin, United States\",\"Columbia County, Wisconsin, United States\",\"Crawford County, Wisconsin, United States\",\"Dodge County, Wisconsin, United States\",\"Door County, Wisconsin, United States\",\"Douglas County, Wisconsin, United States\",\"Dunn County, Wisconsin, United States\",\"Eau Claire County, Wisconsin, United States\",\"Florence County, Wisconsin, United States\",\"Forest County, Wisconsin, United States\",\"Grant County, Wisconsin, United States\",\"Green County, Wisconsin, United States\",\"Green Lake County, Wisconsin, United States\",\"Iowa County, Wisconsin, United States\",\"Iron County, Wisconsin, United States\",\"Jackson County, Wisconsin, United States\",\"Jefferson County, Wisconsin, United States\",\"Juneau County, Wisconsin, United States\",\"Kenosha County, Wisconsin, United States\",\"Kewaunee County, Wisconsin, United States\",\"La Crosse County, Wisconsin, United States\",\"Lafayette County, Wisconsin, United States\",\"Langlade County, Wisconsin, United States\",\"Lincoln County, Wisconsin, United States\",\"Manitowoc County, Wisconsin, United States\",\"Marathon County, Wisconsin, United States\",\"Marinette County, Wisconsin, United States\",\"Marquette County, Wisconsin, United States\",\"Menominee County, Wisconsin, United States\",\"Monroe County, Wisconsin, United States\",\"Oconto County, Wisconsin, United States\",\"Oneida County, Wisconsin, United States\",\"Outagamie County, Wisconsin, United States\",\"Ozaukee County, Wisconsin, United States\",\"Pepin County, Wisconsin, United States\",\"Polk County, Wisconsin, United States\",\"Portage County, Wisconsin, United States\",\"Price County, Wisconsin, United States\",\"Richland County, Wisconsin, United States\",\"Rock County, Wisconsin, United States\",\"Rusk County, Wisconsin, United States\",\"Sauk County, Wisconsin, United States\",\"Sawyer County, Wisconsin, United States\",\"Shawano County, Wisconsin, United States\",\"St. Croix County, Wisconsin, United States\",\"Taylor County, Wisconsin, United States\",\"Trempealeau County, Wisconsin, United States\",\"Vernon County, Wisconsin, United States\",\"Vilas County, Wisconsin, United States\",\"Walworth County, Wisconsin, United States\",\"Washburn County, Wisconsin, United States\",\"Washington County, Wisconsin, United States\",\"Waupaca County, Wisconsin, United States\",\"Waushara County, Wisconsin, United States\",\"Wood County, Wisconsin, United States\",\"Newfoundland and Labrador, CAN\",\"Prince Edward Island, CAN\",\"Garland County, Arkansas, United States\",\"Saline County, Arkansas, United States\",\"Santa Barbara County, California, United States\",\"Garfield County, Colorado, United States\",\"Baker County, Florida, United States\",\"Clarke County, Georgia, United States\",\"Clayton County, Georgia, United States\",\"Dougherty County, Georgia, United States\",\"Newton County, Georgia, United States\",\"Maui County, Hawaii, United States\",\"Clinton County, Illinois, United States\",\"Whiteside County, Illinois, United States\",\"Winnebago County, Illinois, United States\",\"Allamakee County, Iowa, United States\",\"Polk County, Iowa, United States\",\"Clark County, Kentucky, United States\",\"Lincoln County, Maine, United States\",\"Baltimore city, iso2:US-MD, iso1:US\",\"Howard County, Maryland, United States\",\"Ottawa County, Michigan, United States\",\"Waseca County, Minnesota, United States\",\"Washington County, Minnesota, United States\",\"Hillsborough County, New Hampshire, United States\",\"Cleveland County, Oklahoma, United States\",\"Kay County, Oklahoma, United States\",\"Payne County, Oklahoma, United States\",\"Anderson County, South Carolina, United States\",\"Greenville County, South Carolina, United States\",\"Horry County, South Carolina, United States\",\"Butte County, California, United States\",\"Kings County, California, United States\",\"Mendocino County, California, United States\",\"Merced County, California, United States\",\"San Bernardino County, California, United States\",\"Citrus County, Florida, United States\",\"(unassigned), iso2:US-MA, iso1:US\",\"Baltimore City, Maryland, United States\",\"Nova Scotia, CAN\",\"Fairbanks North Star Borough, Alaska, United States\",\"Cleburne County, Arkansas, United States\",\"Cleveland County, Arkansas, United States\",\"Desha County, Arkansas, United States\",\"Lincoln County, Arkansas, United States\",\"Nevada County, California, United States\",\"Forsyth County, Georgia, United States\",\"Hall County, Georgia, United States\",\"Paulding County, Georgia, United States\",\"Troup County, Georgia, United States\",\"Peoria County, Illinois, United States\",\"Will County, Illinois, United States\",\"Frederick County, Maryland, United States\",\"Benton County, Minnesota, United States\",\"Blue Earth County, Minnesota, United States\",\"Cass County, Missouri, United States\",\"Carroll County, New Hampshire, United States\",\"Canadian County, Oklahoma, United States\",\"Fairfield County, South Carolina, United States\",\"Orange County, Vermont, United States\",\"Barking and Dagenham, England, GBR\",\"Barnet, England, GBR\",\"Barnsley, England, GBR\",\"Bath and North East Somerset, England, GBR\",\"Bedford, England, GBR\",\"Bexley, England, GBR\",\"Birmingham, England, GBR\",\"Blackburn with Darwen, England, GBR\",\"Blackpool, England, GBR\",\"Bolton, England, GBR\",\"Bournemouth, Christchurch and Poole, England, GBR\",\"Bracknell Forest, England, GBR\",\"Bradford, England, GBR\",\"Brent, England, GBR\",\"Brighton and Hove, England, GBR\",\"Bristol, City of, England, GBR\",\"Bromley, England, GBR\",\"Buckinghamshire, England, GBR\",\"Bury, England, GBR\",\"Calderdale, England, GBR\",\"Cambridgeshire, England, GBR\",\"Camden, England, GBR\",\"Central Bedfordshire, England, GBR\",\"Cheshire East, England, GBR\",\"Cheshire West and Chester, England, GBR\",\"Cornwall and Isles of Scilly, England, GBR\",\"County Durham, England, GBR\",\"Coventry, England, GBR\",\"Croydon, England, GBR\",\"Cumbria, England, GBR\",\"Darlington, England, GBR\",\"Derby, England, GBR\",\"Derbyshire, England, GBR\",\"Devon, England, GBR\",\"Doncaster, England, GBR\",\"Dorset, England, GBR\",\"Dudley, England, GBR\",\"Ealing, England, GBR\",\"East Riding of Yorkshire, England, GBR\",\"East Sussex, England, GBR\",\"Enfield, England, GBR\",\"Essex, England, GBR\",\"Gateshead, England, GBR\",\"Gloucestershire, England, GBR\",\"Greenwich, England, GBR\",\"Hackney and City of London, England, GBR\",\"Halton, England, GBR\",\"Hammersmith and Fulham, England, GBR\",\"Hampshire, England, GBR\",\"Haringey, England, GBR\",\"Harrow, England, GBR\",\"Hartlepool, England, GBR\",\"Havering, England, GBR\",\"Herefordshire, County of, England, GBR\",\"Hertfordshire, England, GBR\",\"Hillingdon, England, GBR\",\"Hounslow, England, GBR\",\"Isle of Wight, England, GBR\",\"Islington, England, GBR\",\"Kensington and Chelsea, England, GBR\",\"Kent, England, GBR\",\"Kingston upon Hull, City of, England, GBR\",\"Kingston upon Thames, England, GBR\",\"Kirklees, England, GBR\",\"Knowsley, England, GBR\",\"Lambeth, England, GBR\",\"Lancashire, England, GBR\",\"Leeds, England, GBR\",\"Leicester, England, GBR\",\"Leicestershire, England, GBR\",\"Lewisham, England, GBR\",\"Lincolnshire, England, GBR\",\"Liverpool, England, GBR\",\"Luton, England, GBR\",\"Manchester, England, GBR\",\"Medway, England, GBR\",\"Merton, England, GBR\",\"Middlesbrough, England, GBR\",\"Milton Keynes, England, GBR\",\"Newcastle upon Tyne, England, GBR\",\"Newham, England, GBR\",\"Norfolk, England, GBR\",\"North East Lincolnshire, England, GBR\",\"North Lincolnshire, England, GBR\",\"North Somerset, England, GBR\",\"North Tyneside, England, GBR\",\"North Yorkshire, England, GBR\",\"Northamptonshire, England, GBR\",\"Northumberland, England, GBR\",\"Nottingham, England, GBR\",\"Nottinghamshire, England, GBR\",\"Oldham, England, GBR\",\"Oxfordshire, England, GBR\",\"Peterborough, England, GBR\",\"Plymouth, England, GBR\",\"Portsmouth, England, GBR\",\"Reading, England, GBR\",\"Redbridge, England, GBR\",\"Redcar and Cleveland, England, GBR\",\"Richmond upon Thames, England, GBR\",\"Rochdale, England, GBR\",\"Rotherham, England, GBR\",\"Rutland, England, GBR\",\"Salford, England, GBR\",\"Sandwell, England, GBR\",\"Sefton, England, GBR\",\"Sheffield, England, GBR\",\"Shropshire, England, GBR\",\"Slough, England, GBR\",\"Solihull, England, GBR\",\"Somerset, England, GBR\",\"South Gloucestershire, England, GBR\",\"South Tyneside, England, GBR\",\"Southampton, England, GBR\",\"Southend-on-Sea, England, GBR\",\"Southwark, England, GBR\",\"St. Helens, England, GBR\",\"Staffordshire, England, GBR\",\"Stockport, England, GBR\",\"Stockton-on-Tees, England, GBR\",\"Stoke-on-Trent, England, GBR\",\"Suffolk, England, GBR\",\"Sunderland, England, GBR\",\"Surrey, England, GBR\",\"Sutton, England, GBR\",\"Swindon, England, GBR\",\"Tameside, England, GBR\",\"Telford and Wrekin, England, GBR\",\"Thurrock, England, GBR\",\"Torbay, England, GBR\",\"Tower Hamlets, England, GBR\",\"Trafford, England, GBR\",\"Wakefield, England, GBR\",\"Walsall, England, GBR\",\"Waltham Forest, England, GBR\",\"Wandsworth, England, GBR\",\"Warrington, England, GBR\",\"Warwickshire, England, GBR\",\"West Berkshire, England, GBR\",\"West Sussex, England, GBR\",\"Westminster, England, GBR\",\"Wigan, England, GBR\",\"Wiltshire, England, GBR\",\"Windsor and Maidenhead, England, GBR\",\"Wirral, England, GBR\",\"Wokingham, England, GBR\",\"Wolverhampton, England, GBR\",\"Worcestershire, England, GBR\",\"York, England, GBR\",\"Colusa County, California, United States\",\"Del Norte County, California, United States\",\"Glenn County, California, United States\",\"Escambia County, Florida, United States\",\"Lake County, Florida, United States\",\"Bay County, Florida, United States\",\"Bradford County, Florida, United States\",\"Brevard County, Florida, United States\",\"Calhoun County, Florida, United States\",\"Columbia County, Florida, United States\",\"DeSoto County, Florida, United States\",\"Dixie County, Florida, United States\",\"Flagler County, Florida, United States\",\"Franklin County, Florida, United States\",\"Gadsden County, Florida, United States\",\"Gilchrist County, Florida, United States\",\"Glades County, Florida, United States\",\"Gulf County, Florida, United States\",\"Hamilton County, Florida, United States\",\"Hardee County, Florida, United States\",\"Hendry County, Florida, United States\",\"Hernando County, Florida, United States\",\"Highlands County, Florida, United States\",\"Holmes County, Florida, United States\",\"Indian River County, Florida, United States\",\"Jackson County, Florida, United States\",\"Jefferson County, Florida, United States\",\"Lafayette County, Florida, United States\",\"Leon County, Florida, United States\",\"Levy County, Florida, United States\",\"Liberty County, Florida, United States\",\"Madison County, Florida, United States\",\"Marion County, Florida, United States\",\"Martin County, Florida, United States\",\"Monroe County, Florida, United States\",\"Okeechobee County, Florida, United States\",\"Polk County, Florida, United States\",\"Putnam County, Florida, United States\",\"St. Lucie County, Florida, United States\",\"Sumter County, Florida, United States\",\"Suwannee County, Florida, United States\",\"Taylor County, Florida, United States\",\"Union County, Florida, United States\",\"Wakulla County, Florida, United States\",\"Walton County, Florida, United States\",\"Washington County, Florida, United States\",\"Talbot County, Maryland, United States\",\"Nouvelle-Calédonie, FRA\",\"Ketchikan Gateway Borough, Alaska, United States\",\"Navajo County, Arizona, United States\",\"Kern County, California, United States\",\"Monterey County, California, United States\",\"Richmond County, Georgia, United States\",\"Whitfield County, Georgia, United States\",\"Hawaii County, Hawaii, United States\",\"Madison County, Idaho, United States\",\"Douglas County, Kansas, United States\",\"Ford County, Kansas, United States\",\"Lyon County, Kentucky, United States\",\"Kennebec County, Maine, United States\",\"Oxford County, Maine, United States\",\"York County, Maine, United States\",\"Jackson County, Michigan, United States\",\"Otsego County, Michigan, United States\",\"Martin County, Minnesota, United States\",\"Nicollet County, Minnesota, United States\",\"Boone County, Missouri, United States\",\"Cole County, Missouri, United States\",\"Jackson County, Missouri, United States\",\"Sarpy County, Nebraska, United States\",\"Taos County, New Mexico, United States\",\"Burleigh County, North Dakota, United States\",\"Cass County, North Dakota, United States\",\"Pawnee County, Oklahoma, United States\",\"Calhoun County, South Carolina, United States\",\"Richland County, South Carolina, United States\",\"York County, South Carolina, United States\",\"Charlottesville city, iso2:US-VA, iso1:US\",\"Williamsburg city, iso2:US-VA, iso1:US\",\"Jefferson County, West Virginia, United States\",\"Laramie County, Wyoming, United States\",\"Park County, Wyoming, United States\",\"Mono County, California, United States\",\"Adair County, Iowa, United States\",\"Black Hawk County, Iowa, United States\",\"Adams County, Illinois, United States\",\"Alexander County, Illinois, United States\",\"Bond County, Illinois, United States\",\"Boone County, Illinois, United States\",\"Brown County, Illinois, United States\",\"Bureau County, Illinois, United States\",\"Calhoun County, Illinois, United States\",\"Carroll County, Illinois, United States\",\"Cass County, Illinois, United States\",\"Champaign County, Illinois, United States\",\"Christian County, Illinois, United States\",\"Clark County, Illinois, United States\",\"Clay County, Illinois, United States\",\"Coles County, Illinois, United States\",\"Crawford County, Illinois, United States\",\"DeKalb County, Illinois, United States\",\"De Witt County, Illinois, United States\",\"Douglas County, Illinois, United States\",\"Edgar County, Illinois, United States\",\"Edwards County, Illinois, United States\",\"Effingham County, Illinois, United States\",\"Fayette County, Illinois, United States\",\"Ford County, Illinois, United States\",\"Franklin County, Illinois, United States\",\"Fulton County, Illinois, United States\",\"Gallatin County, Illinois, United States\",\"Greene County, Illinois, United States\",\"Grundy County, Illinois, United States\",\"Hamilton County, Illinois, United States\",\"Hancock County, Illinois, United States\",\"Hardin County, Illinois, United States\",\"Henderson County, Illinois, United States\",\"Henry County, Illinois, United States\",\"Iroquois County, Illinois, United States\",\"Jackson County, Illinois, United States\",\"Jasper County, Illinois, United States\",\"Jefferson County, Illinois, United States\",\"Jersey County, Illinois, United States\",\"Jo Daviess County, Illinois, United States\",\"Johnson County, Illinois, United States\",\"Kankakee County, Illinois, United States\",\"Kendall County, Illinois, United States\",\"Knox County, Illinois, United States\",\"LaSalle County, Illinois, United States\",\"Lawrence County, Illinois, United States\",\"Lee County, Illinois, United States\",\"Livingston County, Illinois, United States\",\"Logan County, Illinois, United States\",\"McDonough County, Illinois, United States\",\"McLean County, Illinois, United States\",\"Macon County, Illinois, United States\",\"Macoupin County, Illinois, United States\",\"Madison County, Illinois, United States\",\"Marion County, Illinois, United States\",\"Marshall County, Illinois, United States\",\"Mason County, Illinois, United States\",\"Massac County, Illinois, United States\",\"Menard County, Illinois, United States\",\"Mercer County, Illinois, United States\",\"Monroe County, Illinois, United States\",\"Montgomery County, Illinois, United States\",\"Morgan County, Illinois, United States\",\"Moultrie County, Illinois, United States\",\"Ogle County, Illinois, United States\",\"Perry County, Illinois, United States\",\"Piatt County, Illinois, United States\",\"Pike County, Illinois, United States\",\"Pope County, Illinois, United States\",\"Pulaski County, Illinois, United States\",\"Putnam County, Illinois, United States\",\"Randolph County, Illinois, United States\",\"Richland County, Illinois, United States\",\"Rock Island County, Illinois, United States\",\"Saline County, Illinois, United States\",\"Schuyler County, Illinois, United States\",\"Scott County, Illinois, United States\",\"Shelby County, Illinois, United States\",\"Stark County, Illinois, United States\",\"Stephenson County, Illinois, United States\",\"Tazewell County, Illinois, United States\",\"Union County, Illinois, United States\",\"Vermilion County, Illinois, United States\",\"Wabash County, Illinois, United States\",\"Warren County, Illinois, United States\",\"Washington County, Illinois, United States\",\"Wayne County, Illinois, United States\",\"White County, Illinois, United States\",\"Williamson County, Illinois, United States\",\"Allegany County, Maryland, United States\",\"Calvert County, Maryland, United States\",\"Caroline County, Maryland, United States\",\"Cecil County, Maryland, United States\",\"Dorchester County, Maryland, United States\",\"Garrett County, Maryland, United States\",\"Kent County, Maryland, United States\",\"Queen Anne's County, Maryland, United States\",\"Somerset County, Maryland, United States\",\"St. Mary's County, Maryland, United States\",\"Washington County, Maryland, United States\",\"Wicomico County, Maryland, United States\",\"Worcester County, Maryland, United States\",\"Kenai Peninsula Borough, Alaska, United States\",\"Coconino County, Arizona, United States\",\"Bradley County, Arkansas, United States\",\"Faulkner County, Arkansas, United States\",\"Washington County, Arkansas, United States\",\"Columbia County, Georgia, United States\",\"Houston County, Georgia, United States\",\"Twin Falls County, Idaho, United States\",\"Leavenworth County, Kansas, United States\",\"Franklin County, Kentucky, United States\",\"Kenton County, Kentucky, United States\",\"Warren County, Kentucky, United States\",\"Penobscot County, Maine, United States\",\"Rice County, Minnesota, United States\",\"St. Charles County, Missouri, United States\",\"St. Louis city, iso2:US-MO, iso1:US\",\"Adams County, Nebraska, United States\",\"Lincoln County, Nebraska, United States\",\"Belknap County, New Hampshire, United States\",\"Merrimack County, New Hampshire, United States\",\"Morton County, North Dakota, United States\",\"Lee County, South Carolina, United States\",\"Box Elder County, Utah, United States\",\"Cache County, Utah, United States\",\"Charles City, iso2:US-VA, iso1:US\",\"Richmond city, iso2:US-VA, iso1:US\",\"Mercer County, West Virginia, United States\",\"Teton County, Wyoming, United States\",\"Saguache County, Colorado, United States\",\"Sedgwick County, Colorado, United States\",\"Cheyenne County, Colorado, United States\",\"Custer County, Colorado, United States\",\"La Plata County, Colorado, United States\",\"San Juan County, Colorado, United States\",\"Park County, Colorado, United States\",\"Alamosa County, Colorado, United States\",\"Prowers County, Colorado, United States\",\"Moffat County, Colorado, United States\",\"Montrose County, Colorado, United States\",\"San Miguel County, Colorado, United States\",\"Costilla County, Colorado, United States\",\"Broomfield County, Colorado, United States\",\"Chaffee County, Colorado, United States\",\"Crowley County, Colorado, United States\",\"Fremont County, Colorado, United States\",\"Huerfano County, Colorado, United States\",\"Delta County, Colorado, United States\",\"Rio Blanco County, Colorado, United States\",\"Morgan County, Colorado, United States\",\"Lincoln County, Colorado, United States\",\"Montezuma County, Colorado, United States\",\"Mineral County, Colorado, United States\",\"Otero County, Colorado, United States\",\"Phillips County, Colorado, United States\",\"Ouray County, Colorado, United States\",\"Bent County, Colorado, United States\",\"Archuleta County, Colorado, United States\",\"Hinsdale County, Colorado, United States\",\"Lake County, Colorado, United States\",\"Rio Grande County, Colorado, United States\",\"Gilpin County, Colorado, United States\",\"Yuma County, Colorado, United States\",\"Jackson County, Colorado, United States\",\"Kit Carson County, Colorado, United States\",\"Logan County, Colorado, United States\",\"Washington County, Colorado, United States\",\"Conejos County, Colorado, United States\",\"Kiowa County, Colorado, United States\",\"Teller County, Colorado, United States\",\"Baca County, Colorado, United States\",\"Elbert County, Colorado, United States\",\"Dolores County, Colorado, United States\",\"Las Animas County, Colorado, United States\",\"Grand County, Colorado, United States\",\"Middlesex County, Connecticut, United States\",\"Washington County, Iowa, United States\",\"Winneshiek County, Iowa, United States\",\"Northwest Territories, CAN\",\"Nunavut, CAN\",\"Yukon, CAN\",\"Santa Cruz County, Arizona, United States\",\"Yavapai County, Arizona, United States\",\"Benton County, Arkansas, United States\",\"Boone County, Arkansas, United States\",\"Clark County, Arkansas, United States\",\"Craighead County, Arkansas, United States\",\"Crittenden County, Arkansas, United States\",\"Grant County, Arkansas, United States\",\"Greene County, Arkansas, United States\",\"Independence County, Arkansas, United States\",\"Poinsett County, Arkansas, United States\",\"Polk County, Arkansas, United States\",\"Pope County, Arkansas, United States\",\"Searcy County, Arkansas, United States\",\"Sebastian County, Arkansas, United States\",\"Sevier County, Arkansas, United States\",\"Van Buren County, Arkansas, United States\",\"Bibb County, Georgia, United States\",\"Early County, Georgia, United States\",\"Effingham County, Georgia, United States\",\"Glynn County, Georgia, United States\",\"Laurens County, Georgia, United States\",\"Peach County, Georgia, United States\",\"Rockdale County, Georgia, United States\",\"Dubuque County, Iowa, United States\",\"Muscatine County, Iowa, United States\",\"Cherokee County, Kansas, United States\",\"Linn County, Kansas, United States\",\"Morris County, Kansas, United States\",\"Sedgwick County, Kansas, United States\",\"Christian County, Kentucky, United States\",\"Daviess County, Kentucky, United States\",\"Henderson County, Kentucky, United States\",\"Pulaski County, Kentucky, United States\",\"Scott County, Kentucky, United States\",\"Clinton County, Michigan, United States\",\"Eaton County, Michigan, United States\",\"Genesee County, Michigan, United States\",\"Livingston County, Michigan, United States\",\"Midland County, Michigan, United States\",\"Mower County, Minnesota, United States\",\"Scott County, Minnesota, United States\",\"Broadwater County, Montana, United States\",\"Flathead County, Montana, United States\",\"Madison County, Montana, United States\",\"Roosevelt County, Montana, United States\",\"Nemaha County, Nebraska, United States\",\"Elko County, Nevada, United States\",\"San Miguel County, New Mexico, United States\",\"Custer County, Oklahoma, United States\",\"Grady County, Oklahoma, United States\",\"Logan County, Oklahoma, United States\",\"McClain County, Oklahoma, United States\",\"Washington County, Oklahoma, United States\",\"Abbeville County, South Carolina, United States\",\"Dorchester County, South Carolina, United States\",\"Saluda County, South Carolina, United States\",\"Monongalia County, West Virginia, United States\",\"Tucker County, West Virginia, United States\",\"American Samoa, United States\",\"Northern Mariana Islands, United States\",\"Alpine County, California, United States\",\"Amador County, California, United States\",\"El Dorado County, California, United States\",\"Imperial County, California, United States\",\"Inyo County, California, United States\",\"Lake County, California, United States\",\"Lassen County, California, United States\",\"Mariposa County, California, United States\",\"Modoc County, California, United States\",\"Plumas County, California, United States\",\"Sierra County, California, United States\",\"Siskiyou County, California, United States\",\"Sutter County, California, United States\",\"Tehama County, California, United States\",\"Trinity County, California, United States\",\"Tuolumne County, California, United States\",\"Yuba County, California, United States\",\"Tolland County, Connecticut, United States\",\"Windham County, Connecticut, United States\",\"Albany County, Wyoming, United States\",\"Big Horn County, Wyoming, United States\",\"Campbell County, Wyoming, United States\",\"Carbon County, Wyoming, United States\",\"Converse County, Wyoming, United States\",\"Crook County, Wyoming, United States\",\"Goshen County, Wyoming, United States\",\"Hot Springs County, Wyoming, United States\",\"Johnson County, Wyoming, United States\",\"Lincoln County, Wyoming, United States\",\"Natrona County, Wyoming, United States\",\"Niobrara County, Wyoming, United States\",\"Platte County, Wyoming, United States\",\"Sublette County, Wyoming, United States\",\"Sweetwater County, Wyoming, United States\",\"Uinta County, Wyoming, United States\",\"Washakie County, Wyoming, United States\",\"Weston County, Wyoming, United States\",\"Bingham County, Idaho, United States\",\"Canyon County, Idaho, United States\",\"Kootenai County, Idaho, United States\",\"Reno County, Kansas, United States\",\"Riley County, Kansas, United States\",\"Calloway County, Kentucky, United States\",\"Chisago County, Minnesota, United States\",\"Clay County, Minnesota, United States\",\"Fillmore County, Minnesota, United States\",\"Christian County, Missouri, United States\",\"Dunklin County, Missouri, United States\",\"Kansas City, iso2:US-MO, iso1:US\",\"Pulaski County, Missouri, United States\",\"Scott County, Missouri, United States\",\"Buffalo County, Nebraska, United States\",\"Lancaster County, Nebraska, United States\",\"Nye County, Nevada, United States\",\"Cheshire County, New Hampshire, United States\",\"Doña Ana County, New Mexico, United States\",\"McKinley County, New Mexico, United States\",\"Pierce County, North Dakota, United States\",\"Ramsey County, North Dakota, United States\",\"Aiken County, South Carolina, United States\",\"Berkeley County, South Carolina, United States\",\"Clarendon County, South Carolina, United States\",\"Darlington County, South Carolina, United States\",\"Florence County, South Carolina, United States\",\"Orangeburg County, South Carolina, United States\",\"Pickens County, South Carolina, United States\",\"Sumter County, South Carolina, United States\",\"Addison County, Vermont, United States\",\"Rutland County, Vermont, United States\",\"Newport News city, iso2:US-VA, iso1:US\",\"Norfolk city, iso2:US-VA, iso1:US\",\"Portsmouth city, iso2:US-VA, iso1:US\",\"Jackson County, West Virginia, United States\",\"Kanawha County, West Virginia, United States\",\"Yuma County, Arizona, United States\",\"Mohave County, Arizona, United States\",\"La Paz County, Arizona, United States\",\"Greenlee County, Arizona, United States\",\"Gila County, Arizona, United States\",\"Cochise County, Arizona, United States\",\"Apache County, Arizona, United States\",\"New London County, Connecticut, United States\",\"Carroll County, Georgia, United States\",\"Chatham County, Georgia, United States\",\"Pickens County, Georgia, United States\",\"Spalding County, Georgia, United States\",\"Sumter County, Georgia, United States\",\"Terrell County, Georgia, United States\",\"Worth County, Georgia, United States\",\"Barrow County, Georgia, United States\",\"Dawson County, Georgia, United States\",\"Douglas County, Georgia, United States\",\"Heard County, Georgia, United States\",\"Lamar County, Georgia, United States\",\"Miller County, Georgia, United States\",\"Monroe County, Georgia, United States\",\"Muscogee County, Georgia, United States\",\"Oconee County, Georgia, United States\",\"Randolph County, Georgia, United States\",\"Tift County, Georgia, United States\",\"Turner County, Georgia, United States\",\"(unassigned), iso2:US-GA, iso1:US\",\"Appling County, Georgia, United States\",\"Atkinson County, Georgia, United States\",\"Bacon County, Georgia, United States\",\"Baker County, Georgia, United States\",\"Baldwin County, Georgia, United States\",\"Banks County, Georgia, United States\",\"Ben Hill County, Georgia, United States\",\"Berrien County, Georgia, United States\",\"Bleckley County, Georgia, United States\",\"Brantley County, Georgia, United States\",\"Brooks County, Georgia, United States\",\"Bryan County, Georgia, United States\",\"Bulloch County, Georgia, United States\",\"Burke County, Georgia, United States\",\"Butts County, Georgia, United States\",\"Calhoun County, Georgia, United States\",\"Camden County, Georgia, United States\",\"Candler County, Georgia, United States\",\"Catoosa County, Georgia, United States\",\"Chattahoochee County, Georgia, United States\",\"Chattooga County, Georgia, United States\",\"Clay County, Georgia, United States\",\"Clinch County, Georgia, United States\",\"Coffee County, Georgia, United States\",\"Colquitt County, Georgia, United States\",\"Cook County, Georgia, United States\",\"Crawford County, Georgia, United States\",\"Crisp County, Georgia, United States\",\"Dade County, Georgia, United States\",\"Decatur County, Georgia, United States\",\"Dodge County, Georgia, United States\",\"Dooly County, Georgia, United States\",\"Echols County, Georgia, United States\",\"Elbert County, Georgia, United States\",\"Emanuel County, Georgia, United States\",\"Evans County, Georgia, United States\",\"Fannin County, Georgia, United States\",\"Franklin County, Georgia, United States\",\"Gilmer County, Georgia, United States\",\"Glascock County, Georgia, United States\",\"Grady County, Georgia, United States\",\"Greene County, Georgia, United States\",\"Habersham County, Georgia, United States\",\"Hancock County, Georgia, United States\",\"Haralson County, Georgia, United States\",\"Harris County, Georgia, United States\",\"Hart County, Georgia, United States\",\"Irwin County, Georgia, United States\",\"Jackson County, Georgia, United States\",\"Jasper County, Georgia, United States\",\"Jeff Davis County, Georgia, United States\",\"Jefferson County, Georgia, United States\",\"Jenkins County, Georgia, United States\",\"Johnson County, Georgia, United States\",\"Jones County, Georgia, United States\",\"Lanier County, Georgia, United States\",\"Liberty County, Georgia, United States\",\"Lincoln County, Georgia, United States\",\"Long County, Georgia, United States\",\"Lumpkin County, Georgia, United States\",\"Macon County, Georgia, United States\",\"Madison County, Georgia, United States\",\"Marion County, Georgia, United States\",\"McDuffie County, Georgia, United States\",\"McIntosh County, Georgia, United States\",\"Meriwether County, Georgia, United States\",\"Mitchell County, Georgia, United States\",\"Montgomery County, Georgia, United States\",\"Morgan County, Georgia, United States\",\"Murray County, Georgia, United States\",\"Oglethorpe County, Georgia, United States\",\"Pierce County, Georgia, United States\",\"Pike County, Georgia, United States\",\"Pulaski County, Georgia, United States\",\"Putnam County, Georgia, United States\",\"Quitman County, Georgia, United States\",\"Rabun County, Georgia, United States\",\"Schley County, Georgia, United States\",\"Screven County, Georgia, United States\",\"Seminole County, Georgia, United States\",\"Stephens County, Georgia, United States\",\"Stewart County, Georgia, United States\",\"Talbot County, Georgia, United States\",\"Taliaferro County, Georgia, United States\",\"Tattnall County, Georgia, United States\",\"Taylor County, Georgia, United States\",\"Telfair County, Georgia, United States\",\"Thomas County, Georgia, United States\",\"Toombs County, Georgia, United States\",\"Towns County, Georgia, United States\",\"Treutlen County, Georgia, United States\",\"Twiggs County, Georgia, United States\",\"Union County, Georgia, United States\",\"Upson County, Georgia, United States\",\"Walker County, Georgia, United States\",\"Walton County, Georgia, United States\",\"Ware County, Georgia, United States\",\"Warren County, Georgia, United States\",\"Washington County, Georgia, United States\",\"Wayne County, Georgia, United States\",\"Webster County, Georgia, United States\",\"Wheeler County, Georgia, United States\",\"White County, Georgia, United States\",\"Wilcox County, Georgia, United States\",\"Wilkes County, Georgia, United States\",\"Wilkinson County, Georgia, United States\",\"Lyon County, Iowa, United States\",\"Osceola County, Iowa, United States\",\"Dickinson County, Iowa, United States\",\"Emmet County, Iowa, United States\",\"Kossuth County, Iowa, United States\",\"Howard County, Iowa, United States\",\"Winnebago County, Iowa, United States\",\"Mitchell County, Iowa, United States\",\"Worth County, Iowa, United States\",\"Sioux County, Iowa, United States\",\"O'Brien County, Iowa, United States\",\"Clay County, Iowa, United States\",\"Palo Alto County, Iowa, United States\",\"Hancock County, Iowa, United States\",\"Cerro Gordo County, Iowa, United States\",\"Chickasaw County, Iowa, United States\",\"Floyd County, Iowa, United States\",\"Clayton County, Iowa, United States\",\"Fayette County, Iowa, United States\",\"Plymouth County, Iowa, United States\",\"Cherokee County, Iowa, United States\",\"Buena Vista County, Iowa, United States\",\"Pocahontas County, Iowa, United States\",\"Humboldt County, Iowa, United States\",\"Wright County, Iowa, United States\",\"Bremer County, Iowa, United States\",\"Franklin County, Iowa, United States\",\"Butler County, Iowa, United States\",\"Delaware County, Iowa, United States\",\"Webster County, Iowa, United States\",\"Buchanan County, Iowa, United States\",\"Woodbury County, Iowa, United States\",\"Ida County, Iowa, United States\",\"Sac County, Iowa, United States\",\"Calhoun County, Iowa, United States\",\"Hamilton County, Iowa, United States\",\"Hardin County, Iowa, United States\",\"Grundy County, Iowa, United States\",\"Jackson County, Iowa, United States\",\"Jones County, Iowa, United States\",\"Linn County, Iowa, United States\",\"Benton County, Iowa, United States\",\"Tama County, Iowa, United States\",\"Monona County, Iowa, United States\",\"Crawford County, Iowa, United States\",\"Greene County, Iowa, United States\",\"Boone County, Iowa, United States\",\"Story County, Iowa, United States\",\"Marshall County, Iowa, United States\",\"Clinton County, Iowa, United States\",\"Cedar County, Iowa, United States\",\"Shelby County, Iowa, United States\",\"Audubon County, Iowa, United States\",\"Guthrie County, Iowa, United States\",\"Iowa County, Iowa, United States\",\"Poweshiek County, Iowa, United States\",\"Jasper County, Iowa, United States\",\"Scott County, Iowa, United States\",\"Cass County, Iowa, United States\",\"Keokuk County, Iowa, United States\",\"Warren County, Iowa, United States\",\"Madison County, Iowa, United States\",\"Mahaska County, Iowa, United States\",\"Marion County, Iowa, United States\",\"Louisa County, Iowa, United States\",\"Mills County, Iowa, United States\",\"Montgomery County, Iowa, United States\",\"Adams County, Iowa, United States\",\"Henry County, Iowa, United States\",\"Jefferson County, Iowa, United States\",\"Union County, Iowa, United States\",\"Wapello County, Iowa, United States\",\"Clarke County, Iowa, United States\",\"Lucas County, Iowa, United States\",\"Monroe County, Iowa, United States\",\"Des Moines County, Iowa, United States\",\"Fremont County, Iowa, United States\",\"Page County, Iowa, United States\",\"Taylor County, Iowa, United States\",\"Ringgold County, Iowa, United States\",\"Van Buren County, Iowa, United States\",\"Davis County, Iowa, United States\",\"Decatur County, Iowa, United States\",\"Wayne County, Iowa, United States\",\"Appanoose County, Iowa, United States\",\"Lee County, Iowa, United States\",\"Garvin County, Oklahoma, United States\",\"Adair County, Oklahoma, United States\",\"Alfalfa County, Oklahoma, United States\",\"Atoka County, Oklahoma, United States\",\"Beaver County, Oklahoma, United States\",\"Beckham County, Oklahoma, United States\",\"Blaine County, Oklahoma, United States\",\"Bryan County, Oklahoma, United States\",\"Caddo County, Oklahoma, United States\",\"Carter County, Oklahoma, United States\",\"Cherokee County, Oklahoma, United States\",\"Choctaw County, Oklahoma, United States\",\"Cimarron County, Oklahoma, United States\",\"Coal County, Oklahoma, United States\",\"Comanche County, Oklahoma, United States\",\"Cotton County, Oklahoma, United States\",\"Craig County, Oklahoma, United States\",\"Creek County, Oklahoma, United States\",\"Delaware County, Oklahoma, United States\",\"Dewey County, Oklahoma, United States\",\"Ellis County, Oklahoma, United States\",\"Garfield County, Oklahoma, United States\",\"Grant County, Oklahoma, United States\",\"Greer County, Oklahoma, United States\",\"Harmon County, Oklahoma, United States\",\"Harper County, Oklahoma, United States\",\"Haskell County, Oklahoma, United States\",\"Hughes County, Oklahoma, United States\",\"Jefferson County, Oklahoma, United States\",\"Johnston County, Oklahoma, United States\",\"Kingfisher County, Oklahoma, United States\",\"Kiowa County, Oklahoma, United States\",\"Latimer County, Oklahoma, United States\",\"Le Flore County, Oklahoma, United States\",\"Lincoln County, Oklahoma, United States\",\"Love County, Oklahoma, United States\",\"Major County, Oklahoma, United States\",\"Marshall County, Oklahoma, United States\",\"Mayes County, Oklahoma, United States\",\"McCurtain County, Oklahoma, United States\",\"McIntosh County, Oklahoma, United States\",\"Murray County, Oklahoma, United States\",\"Muskogee County, Oklahoma, United States\",\"Noble County, Oklahoma, United States\",\"Nowata County, Oklahoma, United States\",\"Okfuskee County, Oklahoma, United States\",\"Okmulgee County, Oklahoma, United States\",\"Osage County, Oklahoma, United States\",\"Ottawa County, Oklahoma, United States\",\"Pittsburg County, Oklahoma, United States\",\"Pontotoc County, Oklahoma, United States\",\"Pottawatomie County, Oklahoma, United States\",\"Pushmataha County, Oklahoma, United States\",\"Roger Mills County, Oklahoma, United States\",\"Rogers County, Oklahoma, United States\",\"Seminole County, Oklahoma, United States\",\"Sequoyah County, Oklahoma, United States\",\"Stephens County, Oklahoma, United States\",\"Texas County, Oklahoma, United States\",\"Tillman County, Oklahoma, United States\",\"Wagoner County, Oklahoma, United States\",\"Washita County, Oklahoma, United States\",\"Woods County, Oklahoma, United States\",\"Woodward County, Oklahoma, United States\",\"Nantucket County, Massachusetts, United States\",\"Bates County, Missouri, United States\",\"Jasper County, Missouri, United States\",\"Johnson County, Missouri, United States\",\"Strafford County, New Hampshire, United States\",\"Lea County, New Mexico, United States\",\"Franklin County, Vermont, United States\",\"Windham County, Vermont, United States\",\"Suffolk city, iso2:US-VA, iso1:US\",\"(unassigned), iso2:US-FL, iso1:US\",\"Adams County, Idaho, United States\",\"Bannock County, Idaho, United States\",\"Bear Lake County, Idaho, United States\",\"Benewah County, Idaho, United States\",\"Boise County, Idaho, United States\",\"Bonner County, Idaho, United States\",\"Bonneville County, Idaho, United States\",\"Boundary County, Idaho, United States\",\"Butte County, Idaho, United States\",\"Camas County, Idaho, United States\",\"Caribou County, Idaho, United States\",\"Cassia County, Idaho, United States\",\"Clark County, Idaho, United States\",\"Clearwater County, Idaho, United States\",\"Custer County, Idaho, United States\",\"Elmore County, Idaho, United States\",\"Franklin County, Idaho, United States\",\"Fremont County, Idaho, United States\",\"Gem County, Idaho, United States\",\"Gooding County, Idaho, United States\",\"Idaho County, Idaho, United States\",\"Jefferson County, Idaho, United States\",\"Jerome County, Idaho, United States\",\"Latah County, Idaho, United States\",\"Lemhi County, Idaho, United States\",\"Lewis County, Idaho, United States\",\"Lincoln County, Idaho, United States\",\"Minidoka County, Idaho, United States\",\"Nez Perce County, Idaho, United States\",\"Oneida County, Idaho, United States\",\"Owyhee County, Idaho, United States\",\"Payette County, Idaho, United States\",\"Power County, Idaho, United States\",\"Shoshone County, Idaho, United States\",\"Valley County, Idaho, United States\",\"Washington County, Idaho, United States\",\"Adair County, Kentucky, United States\",\"Allen County, Kentucky, United States\",\"Anderson County, Kentucky, United States\",\"Ballard County, Kentucky, United States\",\"Barren County, Kentucky, United States\",\"Bath County, Kentucky, United States\",\"Bell County, Kentucky, United States\",\"Boone County, Kentucky, United States\",\"Boyd County, Kentucky, United States\",\"Boyle County, Kentucky, United States\",\"Bracken County, Kentucky, United States\",\"Breathitt County, Kentucky, United States\",\"Breckinridge County, Kentucky, United States\",\"Bullitt County, Kentucky, United States\",\"Butler County, Kentucky, United States\",\"Caldwell County, Kentucky, United States\",\"Campbell County, Kentucky, United States\",\"Carlisle County, Kentucky, United States\",\"Carroll County, Kentucky, United States\",\"Carter County, Kentucky, United States\",\"Casey County, Kentucky, United States\",\"Clay County, Kentucky, United States\",\"Clinton County, Kentucky, United States\",\"Crittenden County, Kentucky, United States\",\"Cumberland County, Kentucky, United States\",\"Edmonson County, Kentucky, United States\",\"Elliott County, Kentucky, United States\",\"Estill County, Kentucky, United States\",\"Fleming County, Kentucky, United States\",\"Fulton County, Kentucky, United States\",\"Gallatin County, Kentucky, United States\",\"Garrard County, Kentucky, United States\",\"Grant County, Kentucky, United States\",\"Graves County, Kentucky, United States\",\"Grayson County, Kentucky, United States\",\"Green County, Kentucky, United States\",\"Greenup County, Kentucky, United States\",\"Hancock County, Kentucky, United States\",\"Hardin County, Kentucky, United States\",\"Harlan County, Kentucky, United States\",\"Hart County, Kentucky, United States\",\"Henry County, Kentucky, United States\",\"Hickman County, Kentucky, United States\",\"Hopkins County, Kentucky, United States\",\"Jackson County, Kentucky, United States\",\"Jessamine County, Kentucky, United States\",\"Johnson County, Kentucky, United States\",\"Knott County, Kentucky, United States\",\"Knox County, Kentucky, United States\",\"Larue County, Kentucky, United States\",\"Laurel County, Kentucky, United States\",\"Lawrence County, Kentucky, United States\",\"Lee County, Kentucky, United States\",\"Leslie County, Kentucky, United States\",\"Letcher County, Kentucky, United States\",\"Lewis County, Kentucky, United States\",\"Lincoln County, Kentucky, United States\",\"Livingston County, Kentucky, United States\",\"Logan County, Kentucky, United States\",\"Madison County, Kentucky, United States\",\"Magoffin County, Kentucky, United States\",\"Marion County, Kentucky, United States\",\"Marshall County, Kentucky, United States\",\"Martin County, Kentucky, United States\",\"Mason County, Kentucky, United States\",\"McCracken County, Kentucky, United States\",\"McCreary County, Kentucky, United States\",\"McLean County, Kentucky, United States\",\"Meade County, Kentucky, United States\",\"Menifee County, Kentucky, United States\",\"Mercer County, Kentucky, United States\",\"Metcalfe County, Kentucky, United States\",\"Monroe County, Kentucky, United States\",\"Morgan County, Kentucky, United States\",\"Muhlenberg County, Kentucky, United States\",\"Nicholas County, Kentucky, United States\",\"Ohio County, Kentucky, United States\",\"Oldham County, Kentucky, United States\",\"Owen County, Kentucky, United States\",\"Owsley County, Kentucky, United States\",\"Pendleton County, Kentucky, United States\",\"Perry County, Kentucky, United States\",\"Pike County, Kentucky, United States\",\"Powell County, Kentucky, United States\",\"Robertson County, Kentucky, United States\",\"Rockcastle County, Kentucky, United States\",\"Rowan County, Kentucky, United States\",\"Russell County, Kentucky, United States\",\"Shelby County, Kentucky, United States\",\"Simpson County, Kentucky, United States\",\"Spencer County, Kentucky, United States\",\"Taylor County, Kentucky, United States\",\"Todd County, Kentucky, United States\",\"Trigg County, Kentucky, United States\",\"Trimble County, Kentucky, United States\",\"Union County, Kentucky, United States\",\"Washington County, Kentucky, United States\",\"Wayne County, Kentucky, United States\",\"Webster County, Kentucky, United States\",\"Whitley County, Kentucky, United States\",\"Wolfe County, Kentucky, United States\",\"Woodford County, Kentucky, United States\",\"Dukes County, Nantucket County, Massachusetts, United States\",\"Aroostook County, Maine, United States\",\"Franklin County, Maine, United States\",\"Hancock County, Maine, United States\",\"Knox County, Maine, United States\",\"Piscataquis County, Maine, United States\",\"Sagadahoc County, Maine, United States\",\"Somerset County, Maine, United States\",\"Waldo County, Maine, United States\",\"Washington County, Maine, United States\",\"(unassigned), iso2:US-ME, iso1:US\",\"Barry County, Michigan, United States\",\"Berrien County, Michigan, United States\",\"Calhoun County, Michigan, United States\",\"Clare County, Michigan, United States\",\"Saginaw County, Michigan, United States\",\"Tuscola County, Michigan, United States\",\"Wexford County, Michigan, United States\",\"(unassigned), iso2:US-MI, iso1:US\",\"Alcona County, Michigan, United States\",\"Alger County, Michigan, United States\",\"Allegan County, Michigan, United States\",\"Alpena County, Michigan, United States\",\"Antrim County, Michigan, United States\",\"Arenac County, Michigan, United States\",\"Baraga County, Michigan, United States\",\"Benzie County, Michigan, United States\",\"Branch County, Michigan, United States\",\"Cass County, Michigan, United States\",\"Cheboygan County, Michigan, United States\",\"Chippewa County, Michigan, United States\",\"Crawford County, Michigan, United States\",\"Delta County, Michigan, United States\",\"Dickinson County, Michigan, United States\",\"Emmet County, Michigan, United States\",\"Gladwin County, Michigan, United States\",\"Gogebic County, Michigan, United States\",\"Grand Traverse County, Michigan, United States\",\"Gratiot County, Michigan, United States\",\"Hillsdale County, Michigan, United States\",\"Houghton County, Michigan, United States\",\"Huron County, Michigan, United States\",\"Ionia County, Michigan, United States\",\"Iosco County, Michigan, United States\",\"Iron County, Michigan, United States\",\"Isabella County, Michigan, United States\",\"Kalamazoo County, Michigan, United States\",\"Kalkaska County, Michigan, United States\",\"Keweenaw County, Michigan, United States\",\"Lake County, Michigan, United States\",\"Lapeer County, Michigan, United States\",\"Lenawee County, Michigan, United States\",\"Luce County, Michigan, United States\",\"Mackinac County, Michigan, United States\",\"Manistee County, Michigan, United States\",\"Marquette County, Michigan, United States\",\"Mason County, Michigan, United States\",\"Mecosta County, Michigan, United States\",\"Menominee County, Michigan, United States\",\"Missaukee County, Michigan, United States\",\"Montmorency County, Michigan, United States\",\"Muskegon County, Michigan, United States\",\"Newaygo County, Michigan, United States\",\"Oceana County, Michigan, United States\",\"Ogemaw County, Michigan, United States\",\"Ontonagon County, Michigan, United States\",\"Osceola County, Michigan, United States\",\"Oscoda County, Michigan, United States\",\"Presque Isle County, Michigan, United States\",\"Roscommon County, Michigan, United States\",\"St. Joseph County, Michigan, United States\",\"Sanilac County, Michigan, United States\",\"Schoolcraft County, Michigan, United States\",\"Shiawassee County, Michigan, United States\",\"Van Buren County, Michigan, United States\",\"Dodge County, Minnesota, United States\",\"Filmore County, iso2:US-MN, iso1:US\",\"Jackson County, Minnesota, United States\",\"St. Louis County, Minnesota, United States\",\"Steele County, Minnesota, United States\",\"Wabasha County, Minnesota, United States\",\"Aitkin County, Minnesota, United States\",\"Becker County, Minnesota, United States\",\"Beltrami County, Minnesota, United States\",\"Big Stone County, Minnesota, United States\",\"Brown County, Minnesota, United States\",\"Carlton County, Minnesota, United States\",\"Cass County, Minnesota, United States\",\"Chippewa County, Minnesota, United States\",\"Clearwater County, Minnesota, United States\",\"Cook County, Minnesota, United States\",\"Cottonwood County, Minnesota, United States\",\"Crow Wing County, Minnesota, United States\",\"Douglas County, Minnesota, United States\",\"Faribault County, Minnesota, United States\",\"Freeborn County, Minnesota, United States\",\"Goodhue County, Minnesota, United States\",\"Grant County, Minnesota, United States\",\"Houston County, Minnesota, United States\",\"Hubbard County, Minnesota, United States\",\"Isanti County, Minnesota, United States\",\"Itasca County, Minnesota, United States\",\"Kanabec County, Minnesota, United States\",\"Kandiyohi County, Minnesota, United States\",\"Kittson County, Minnesota, United States\",\"Koochiching County, Minnesota, United States\",\"Lac qui Parle County, Minnesota, United States\",\"Lake County, Minnesota, United States\",\"Lake of the Woods County, Minnesota, United States\",\"Le Sueur County, Minnesota, United States\",\"Lincoln County, Minnesota, United States\",\"Lyon County, Minnesota, United States\",\"McLeod County, Minnesota, United States\",\"Mahnomen County, Minnesota, United States\",\"Marshall County, Minnesota, United States\",\"Meeker County, Minnesota, United States\",\"Mille Lacs County, Minnesota, United States\",\"Morrison County, Minnesota, United States\",\"Murray County, Minnesota, United States\",\"Nobles County, Minnesota, United States\",\"Norman County, Minnesota, United States\",\"Otter Tail County, Minnesota, United States\",\"Pennington County, Minnesota, United States\",\"Pine County, Minnesota, United States\",\"Pipestone County, Minnesota, United States\",\"Polk County, Minnesota, United States\",\"Pope County, Minnesota, United States\",\"Red Lake County, Minnesota, United States\",\"Redwood County, Minnesota, United States\",\"Rock County, Minnesota, United States\",\"Roseau County, Minnesota, United States\",\"Sherburne County, Minnesota, United States\",\"Sibley County, Minnesota, United States\",\"Stevens County, Minnesota, United States\",\"Swift County, Minnesota, United States\",\"Todd County, Minnesota, United States\",\"Traverse County, Minnesota, United States\",\"Wadena County, Minnesota, United States\",\"Watonwan County, Minnesota, United States\",\"Wilkin County, Minnesota, United States\",\"Winona County, Minnesota, United States\",\"Yellow Medicine County, Minnesota, United States\",\"Ravalli County, Montana, United States\",\"Beaverhead County, Montana, United States\",\"Big Horn County, Montana, United States\",\"Blaine County, Montana, United States\",\"Carbon County, Montana, United States\",\"Carter County, Montana, United States\",\"Cascade County, Montana, United States\",\"Chouteau County, Montana, United States\",\"Custer County, Montana, United States\",\"Daniels County, Montana, United States\",\"Dawson County, Montana, United States\",\"Deer Lodge County, Montana, United States\",\"Fallon County, Montana, United States\",\"Fergus County, Montana, United States\",\"Garfield County, Montana, United States\",\"Glacier County, Montana, United States\",\"Golden Valley County, Montana, United States\",\"Granite County, Montana, United States\",\"Hill County, Montana, United States\",\"Jefferson County, Montana, United States\",\"Judith Basin County, Montana, United States\",\"Lake County, Montana, United States\",\"Liberty County, Montana, United States\",\"Lincoln County, Montana, United States\",\"McCone County, Montana, United States\",\"Meagher County, Montana, United States\",\"Mineral County, Montana, United States\",\"Musselshell County, Montana, United States\",\"Park County, Montana, United States\",\"Petroleum County, Montana, United States\",\"Phillips County, Montana, United States\",\"Pondera County, Montana, United States\",\"Powder River County, Montana, United States\",\"Powell County, Montana, United States\",\"Prairie County, Montana, United States\",\"Richland County, Montana, United States\",\"Rosebud County, Montana, United States\",\"Sanders County, Montana, United States\",\"Sheridan County, Montana, United States\",\"Stillwater County, Montana, United States\",\"Sweet Grass County, Montana, United States\",\"Teton County, Montana, United States\",\"Toole County, Montana, United States\",\"Treasure County, Montana, United States\",\"Valley County, Montana, United States\",\"Wheatland County, Montana, United States\",\"Wibaux County, Montana, United States\",\"Greenwood County, South Carolina, United States\",\"Colleton County, South Carolina, United States\",\"Dillon County, South Carolina, United States\",\"Edgefield County, South Carolina, United States\",\"Marlboro County, South Carolina, United States\",\"Newberry County, South Carolina, United States\",\"Allendale County, South Carolina, United States\",\"Bamberg County, South Carolina, United States\",\"Barnwell County, South Carolina, United States\",\"Cherokee County, South Carolina, United States\",\"Chester County, South Carolina, United States\",\"Chesterfield County, South Carolina, United States\",\"Georgetown County, South Carolina, United States\",\"Hampton County, South Carolina, United States\",\"Jasper County, South Carolina, United States\",\"Laurens County, South Carolina, United States\",\"McCormick County, South Carolina, United States\",\"Marion County, South Carolina, United States\",\"Oconee County, South Carolina, United States\",\"Union County, South Carolina, United States\",\"Williamsburg County, South Carolina, United States\",\"Marshall County, West Virginia, United States\",\"Putnam County, West Virginia, United States\",\"Barbour County, West Virginia, United States\",\"Berkeley County, West Virginia, United States\",\"Boone County, West Virginia, United States\",\"Braxton County, West Virginia, United States\",\"Brooke County, West Virginia, United States\",\"Cabell County, West Virginia, United States\",\"Calhoun County, West Virginia, United States\",\"Clay County, West Virginia, United States\",\"Doddridge County, West Virginia, United States\",\"Fayette County, West Virginia, United States\",\"Gilmer County, West Virginia, United States\",\"Grant County, West Virginia, United States\",\"Greenbrier County, West Virginia, United States\",\"Hampshire County, West Virginia, United States\",\"Hancock County, West Virginia, United States\",\"Hardy County, West Virginia, United States\",\"Harrison County, West Virginia, United States\",\"Lewis County, West Virginia, United States\",\"Lincoln County, West Virginia, United States\",\"Logan County, West Virginia, United States\",\"McDowell County, West Virginia, United States\",\"Marion County, West Virginia, United States\",\"Mason County, West Virginia, United States\",\"Mineral County, West Virginia, United States\",\"Mingo County, West Virginia, United States\",\"Monroe County, West Virginia, United States\",\"Morgan County, West Virginia, United States\",\"Nicholas County, West Virginia, United States\",\"Ohio County, West Virginia, United States\",\"Pendleton County, West Virginia, United States\",\"Pleasants County, West Virginia, United States\",\"Pocahontas County, West Virginia, United States\",\"Preston County, West Virginia, United States\",\"Raleigh County, West Virginia, United States\",\"Randolph County, West Virginia, United States\",\"Ritchie County, West Virginia, United States\",\"Roane County, West Virginia, United States\",\"Summers County, West Virginia, United States\",\"Taylor County, West Virginia, United States\",\"Tyler County, West Virginia, United States\",\"Upshur County, West Virginia, United States\",\"Wayne County, West Virginia, United States\",\"Webster County, West Virginia, United States\",\"Wetzel County, West Virginia, United States\",\"Wirt County, West Virginia, United States\",\"Wood County, West Virginia, United States\",\"Wyoming County, West Virginia, United States\",\"Jackson County, Kansas, United States\",\"Mitchell County, Kansas, United States\",\"Dawson County, Nebraska, United States\",\"Ayrshire and Arran, Scotland, GBR\",\"Borders, Scotland, GBR\",\"Dumfries and Galloway, Scotland, GBR\",\"Fife, Scotland, GBR\",\"Forth Valley, Scotland, GBR\",\"Grampian, Scotland, GBR\",\"Greater Glasgow and Clyde, Scotland, GBR\",\"Highland, Scotland, GBR\",\"Lanarkshire, Scotland, GBR\",\"Lothian, Scotland, GBR\",\"Shetland, Scotland, GBR\",\"Tayside, Scotland, GBR\",\"Scotland, GBR\",\"LeSeur County, iso2:US-MN, iso1:US\",\"Coos County, New Hampshire, United States\",\"Sullivan County, New Hampshire, United States\",\"Catron County, New Mexico, United States\",\"Chaves County, New Mexico, United States\",\"Cibola County, New Mexico, United States\",\"Colfax County, New Mexico, United States\",\"Curry County, New Mexico, United States\",\"De Baca County, New Mexico, United States\",\"Eddy County, New Mexico, United States\",\"Grant County, New Mexico, United States\",\"Guadalupe County, New Mexico, United States\",\"Harding County, New Mexico, United States\",\"Hidalgo County, New Mexico, United States\",\"Lincoln County, New Mexico, United States\",\"Los Alamos County, New Mexico, United States\",\"Luna County, New Mexico, United States\",\"Mora County, New Mexico, United States\",\"Otero County, New Mexico, United States\",\"Quay County, New Mexico, United States\",\"Rio Arriba County, New Mexico, United States\",\"Roosevelt County, New Mexico, United States\",\"San Juan County, New Mexico, United States\",\"Sierra County, New Mexico, United States\",\"Torrance County, New Mexico, United States\",\"Union County, New Mexico, United States\",\"Valencia County, New Mexico, United States\",\"Wallis et Futuna, FRA\",\"Andhra Pradesh, IND\",\"Bihar, IND\",\"Chhattisgarh, IND\",\"Delhi, IND\",\"Gujarat, IND\",\"Haryana, IND\",\"Himachal Pradesh, IND\",\"Karnataka, IND\",\"Kerala, IND\",\"Madhya Pradesh, IND\",\"Maharashtra, IND\",\"Odisha, IND\",\"Puducherry, IND\",\"Punjab, IND\",\"Rajasthan, IND\",\"Tamil Nadu, IND\",\"Telengana, IND\",\"Chandigarh, IND\",\"Jammu and Kashmir, IND\",\"Ladakh, IND\",\"Uttar Pradesh, IND\",\"Uttarakhand, IND\",\"West Bengal, IND\",\"Juneau City and Borough, Alaska, United States\",\"Matanuska-Susitna Borough, Alaska, United States\",\"Adair County, Missouri, United States\",\"Callaway County, Missouri, United States\",\"Camden County, Missouri, United States\",\"Clay County, Missouri, United States\",\"Clinton County, Missouri, United States\",\"Lafayette County, Missouri, United States\",\"Moniteau County, Missouri, United States\",\"Perry County, Missouri, United States\",\"St. Francois County, Missouri, United States\",\"Taney County, Missouri, United States\",\"Madison County, Nebraska, United States\",\"Washington County, Nebraska, United States\",\"Douglas County, Nevada, United States\",\"Walsh County, North Dakota, United States\",\"Iron County, Utah, United States\",\"Danville city, iso2:US-VA, iso1:US\",\"(unassigned), iso2:US-AR, iso1:US\",\"Howard County, Arkansas, United States\",\"Lonoke County, Arkansas, United States\",\"Prairie County, Arkansas, United States\",\"Phillips County, Arkansas, United States\",\"Jackson County, Arkansas, United States\",\"Mississippi County, Arkansas, United States\",\"Clay County, Arkansas, United States\",\"Randolph County, Arkansas, United States\",\"Lawrence County, Arkansas, United States\",\"Baxter County, Arkansas, United States\",\"Marion County, Arkansas, United States\",\"Perry County, Arkansas, United States\",\"Crawford County, Arkansas, United States\",\"Little River County, Arkansas, United States\",\"Miller County, Arkansas, United States\",\"Lafayette County, Arkansas, United States\",\"Columbia County, Arkansas, United States\",\"Union County, Arkansas, United States\",\"Ashley County, Arkansas, United States\",\"Chicot County, Arkansas, United States\",\"Carroll County, Arkansas, United States\",\"Madison County, Arkansas, United States\",\"Franklin County, Arkansas, United States\",\"Scott County, Arkansas, United States\",\"Logan County, Arkansas, United States\",\"Yell County, Arkansas, United States\",\"Montgomery County, Arkansas, United States\",\"Pike County, Arkansas, United States\",\"Hempstead County, Arkansas, United States\",\"Drew County, Arkansas, United States\",\"Calhoun County, Arkansas, United States\",\"Ouachita County, Arkansas, United States\",\"Nevada County, Arkansas, United States\",\"Dallas County, Arkansas, United States\",\"Arkansas County, Arkansas, United States\",\"Monroe County, Arkansas, United States\",\"Lee County, Arkansas, United States\",\"Hot Spring County, Arkansas, United States\",\"St. Francis County, Arkansas, United States\",\"Cross County, Arkansas, United States\",\"Woodruff County, Arkansas, United States\",\"White County, Arkansas, United States\",\"Conway County, Arkansas, United States\",\"Newton County, Arkansas, United States\",\"Johnson County, Arkansas, United States\",\"Sharp County, Arkansas, United States\",\"Izard County, Arkansas, United States\",\"Fulton County, Arkansas, United States\",\"Stone County, Arkansas, United States\",\"Kalawao County, Hawaii, United States\",\"Bourbon County, Kansas, United States\",\"Lyon County, Kansas, United States\",\"Allen County, Kansas, United States\",\"Anderson County, Kansas, United States\",\"Atchison County, Kansas, United States\",\"Barber County, Kansas, United States\",\"Barton County, Kansas, United States\",\"Brown County, Kansas, United States\",\"Chase County, Kansas, United States\",\"Chautauqua County, Kansas, United States\",\"Cheyenne County, Kansas, United States\",\"Clark County, Kansas, United States\",\"Clay County, Kansas, United States\",\"Cloud County, Kansas, United States\",\"Coffey County, Kansas, United States\",\"Comanche County, Kansas, United States\",\"Cowley County, Kansas, United States\",\"Crawford County, Kansas, United States\",\"Decatur County, Kansas, United States\",\"Dickinson County, Kansas, United States\",\"Doniphan County, Kansas, United States\",\"Edwards County, Kansas, United States\",\"Elk County, Kansas, United States\",\"Ellis County, Kansas, United States\",\"Ellsworth County, Kansas, United States\",\"Finney County, Kansas, United States\",\"Geary County, Kansas, United States\",\"Gove County, Kansas, United States\",\"Graham County, Kansas, United States\",\"Grant County, Kansas, United States\",\"Gray County, Kansas, United States\",\"Greeley County, Kansas, United States\",\"Greenwood County, Kansas, United States\",\"Hamilton County, Kansas, United States\",\"Harper County, Kansas, United States\",\"Harvey County, Kansas, United States\",\"Haskell County, Kansas, United States\",\"Hodgeman County, Kansas, United States\",\"Jefferson County, Kansas, United States\",\"Jewell County, Kansas, United States\",\"Kearny County, Kansas, United States\",\"Kingman County, Kansas, United States\",\"Kiowa County, Kansas, United States\",\"Labette County, Kansas, United States\",\"Lane County, Kansas, United States\",\"Lincoln County, Kansas, United States\",\"Logan County, Kansas, United States\",\"Marion County, Kansas, United States\",\"Marshall County, Kansas, United States\",\"McPherson County, Kansas, United States\",\"Meade County, Kansas, United States\",\"Miami County, Kansas, United States\",\"Montgomery County, Kansas, United States\",\"Morton County, Kansas, United States\",\"Nemaha County, Kansas, United States\",\"Neosho County, Kansas, United States\",\"Ness County, Kansas, United States\",\"Norton County, Kansas, United States\",\"Osage County, Kansas, United States\",\"Osborne County, Kansas, United States\",\"Ottawa County, Kansas, United States\",\"Pawnee County, Kansas, United States\",\"Phillips County, Kansas, United States\",\"Pottawatomie County, Kansas, United States\",\"Pratt County, Kansas, United States\",\"Rawlins County, Kansas, United States\",\"Republic County, Kansas, United States\",\"Rice County, Kansas, United States\",\"Rooks County, Kansas, United States\",\"Rush County, Kansas, United States\",\"Russell County, Kansas, United States\",\"Saline County, Kansas, United States\",\"Scott County, Kansas, United States\",\"Seward County, Kansas, United States\",\"Shawnee County, Kansas, United States\",\"Sheridan County, Kansas, United States\",\"Sherman County, Kansas, United States\",\"Smith County, Kansas, United States\",\"Stafford County, Kansas, United States\",\"Stanton County, Kansas, United States\",\"Stevens County, Kansas, United States\",\"Sumner County, Kansas, United States\",\"Thomas County, Kansas, United States\",\"Trego County, Kansas, United States\",\"Wabaunsee County, Kansas, United States\",\"Wallace County, Kansas, United States\",\"Washington County, Kansas, United States\",\"Wichita County, Kansas, United States\",\"Wilson County, Kansas, United States\",\"Woodson County, Kansas, United States\",\"Lac Qui Parle County, iso2:US-MN, iso1:US\",\"Bristol County, Rhode Island, United States\",\"Kent County, Rhode Island, United States\",\"Newport County, Rhode Island, United States\",\"Washington County, Rhode Island, United States\",\"Dekalb County, iso2:US-TN, iso1:US\",\"BLZ\",\"LAO\",\"LBY\",\"GNB\",\"MLI\",\"KNA\",\"MMR\",\"Anguilla, GBR\",\"British Virgin Islands, GBR\",\"Turks and Caicos Islands, GBR\",\"BWA\",\"BDI\",\"SLE\",\"Bonaire, Sint Eustatius and Saba, NLD\",\"MWI\",\"Manipur, IND\",\"Mizoram, IND\",\"Cape Girardeau County, Missouri, United States\",\"Franklin County, Missouri, United States\",\"Jefferson County, Missouri, United States\",\"Pemiscot County, Missouri, United States\",\"Saunders County, Nebraska, United States\",\"Dunn County, North Dakota, United States\",\"Caledonia County, Vermont, United States\",\"Orleans County, Vermont, United States\",\"Chesapeake city, iso2:US-VA, iso1:US\",\"Anchorage Economic Region, AK, USA\",\"Gulf Coast Economic Region, AK, USA\",\"Interior Economic Region, AK, USA\",\"Mat-Su Economic Region, AK, USA\",\"Northern Economic Region, AK, USA\",\"Southeast Economic Region, AK, USA\",\"Southwest Economic Region, AK, USA\",\"Dukes County, Massachusetts, United States\",\"Cooper County, Missouri, United States\",\"McDonald County, Missouri, United States\",\"Montgomery County, Missouri, United States\",\"Newton County, Missouri, United States\",\"Platte County, Missouri, United States\",\"Ralls County, Missouri, United States\",\"Randolph County, Missouri, United States\",\"Shelby County, Missouri, United States\",\"Lyon County, Nevada, United States\",\"Foster County, North Dakota, United States\",\"Stark County, North Dakota, United States\",\"Lamoille County, Vermont, United States\",\"Fairfax city, iso2:US-VA, iso1:US\",\"Fredericksburg city, iso2:US-VA, iso1:US\",\"Manassas city, iso2:US-VA, iso1:US\",\"Antelope County, Nebraska, United States\",\"Arthur County, Nebraska, United States\",\"Banner County, Nebraska, United States\",\"Blaine County, Nebraska, United States\",\"Boone County, Nebraska, United States\",\"Box Butte County, Nebraska, United States\",\"Boyd County, Nebraska, United States\",\"Brown County, Nebraska, United States\",\"Burt County, Nebraska, United States\",\"Butler County, Nebraska, United States\",\"Cedar County, Nebraska, United States\",\"Chase County, Nebraska, United States\",\"Cherry County, Nebraska, United States\",\"Cheyenne County, Nebraska, United States\",\"Clay County, Nebraska, United States\",\"Colfax County, Nebraska, United States\",\"Cuming County, Nebraska, United States\",\"Custer County, Nebraska, United States\",\"Dakota County, Nebraska, United States\",\"Dawes County, Nebraska, United States\",\"Deuel County, Nebraska, United States\",\"Dixon County, Nebraska, United States\",\"Dodge County, Nebraska, United States\",\"Dundy County, Nebraska, United States\",\"Fillmore County, Nebraska, United States\",\"Franklin County, Nebraska, United States\",\"Frontier County, Nebraska, United States\",\"Furnas County, Nebraska, United States\",\"Gage County, Nebraska, United States\",\"Garden County, Nebraska, United States\",\"Garfield County, Nebraska, United States\",\"Gosper County, Nebraska, United States\",\"Grant County, Nebraska, United States\",\"Greeley County, Nebraska, United States\",\"Hall County, Nebraska, United States\",\"Hamilton County, Nebraska, United States\",\"Harlan County, Nebraska, United States\",\"Hayes County, Nebraska, United States\",\"Hitchcock County, Nebraska, United States\",\"Holt County, Nebraska, United States\",\"Hooker County, Nebraska, United States\",\"Howard County, Nebraska, United States\",\"Jefferson County, Nebraska, United States\",\"Johnson County, Nebraska, United States\",\"Kearney County, Nebraska, United States\",\"Keith County, Nebraska, United States\",\"Keya Paha County, Nebraska, United States\",\"Kimball County, Nebraska, United States\",\"Logan County, Nebraska, United States\",\"Loup County, Nebraska, United States\",\"McPherson County, Nebraska, United States\",\"Merrick County, Nebraska, United States\",\"Morrill County, Nebraska, United States\",\"Nance County, Nebraska, United States\",\"Nuckolls County, Nebraska, United States\",\"Otoe County, Nebraska, United States\",\"Pawnee County, Nebraska, United States\",\"Perkins County, Nebraska, United States\",\"Phelps County, Nebraska, United States\",\"Pierce County, Nebraska, United States\",\"Platte County, Nebraska, United States\",\"Polk County, Nebraska, United States\",\"Red Willow County, Nebraska, United States\",\"Richardson County, Nebraska, United States\",\"Rock County, Nebraska, United States\",\"Saline County, Nebraska, United States\",\"Scotts Bluff County, Nebraska, United States\",\"Seward County, Nebraska, United States\",\"Sheridan County, Nebraska, United States\",\"Sherman County, Nebraska, United States\",\"Sioux County, Nebraska, United States\",\"Stanton County, Nebraska, United States\",\"Thayer County, Nebraska, United States\",\"Thomas County, Nebraska, United States\",\"Thurston County, Nebraska, United States\",\"Valley County, Nebraska, United States\",\"Wayne County, Nebraska, United States\",\"Webster County, Nebraska, United States\",\"Wheeler County, Nebraska, United States\",\"York County, Nebraska, United States\",\"Andaman and Nicobar Islands, IND\",\"Goa, IND\",\"Benton County, Missouri, United States\",\"Bollinger County, Missouri, United States\",\"Carter County, Missouri, United States\",\"Stoddard County, Missouri, United States\",\"McHenry County, North Dakota, United States\",\"McIntosh County, North Dakota, United States\",\"Morgan County, Utah, United States\",\"Hampton city, iso2:US-VA, iso1:US\",\"Lynchburg city, iso2:US-VA, iso1:US\",\"Poquoson city, iso2:US-VA, iso1:US\",\"Radford city, iso2:US-VA, iso1:US\",\"Atchison County, Missouri, United States\",\"Barry County, Missouri, United States\",\"Buchanan County, Missouri, United States\",\"Chariton County, Missouri, United States\",\"Lincoln County, Missouri, United States\",\"Pettis County, Missouri, United States\",\"Ray County, Missouri, United States\",\"Texas County, Missouri, United States\",\"Wright County, Missouri, United States\",\"Uintah County, Utah, United States\",\"Bristol city, iso2:US-VA, iso1:US\",\"Galax city, iso2:US-VA, iso1:US\",\"Roanoke city, iso2:US-VA, iso1:US\",\"Ripley County, Missouri, United States\",\"Warren County, Missouri, United States\",\"Humboldt County, Nevada, United States\",\"Barnes County, North Dakota, United States\",\"Divide County, North Dakota, United States\",\"McLean County, North Dakota, United States\",\"Mercer County, North Dakota, United States\",\"Mountrail County, North Dakota, United States\",\"Sioux County, North Dakota, United States\",\"Garfield County, Utah, United States\",\"Hopewell city, iso2:US-VA, iso1:US\",\"Carson City, Nevada, United States\",\"Storey County, Nevada, United States\",\"Manassas Park city, iso2:US-VA, iso1:US\",\"Winchester city, iso2:US-VA, iso1:US\",\"Ayrshire and Arran, Scotland, GBR\",\"Adams County, North Dakota, United States\",\"Benson County, North Dakota, United States\",\"Bottineau County, North Dakota, United States\",\"Bowman County, North Dakota, United States\",\"Burke County, North Dakota, United States\",\"Cavalier County, North Dakota, United States\",\"Dickey County, North Dakota, United States\",\"Eddy County, North Dakota, United States\",\"Emmons County, North Dakota, United States\",\"Golden Valley County, North Dakota, United States\",\"Grand Forks County, North Dakota, United States\",\"Grant County, North Dakota, United States\",\"Griggs County, North Dakota, United States\",\"Hettinger County, North Dakota, United States\",\"Kidder County, North Dakota, United States\",\"LaMoure County, North Dakota, United States\",\"Logan County, North Dakota, United States\",\"McKenzie County, North Dakota, United States\",\"Nelson County, North Dakota, United States\",\"Oliver County, North Dakota, United States\",\"Pembina County, North Dakota, United States\",\"Ransom County, North Dakota, United States\",\"Renville County, North Dakota, United States\",\"Richland County, North Dakota, United States\",\"Rolette County, North Dakota, United States\",\"Sargent County, North Dakota, United States\",\"Sheridan County, North Dakota, United States\",\"Steele County, North Dakota, United States\",\"Stutsman County, North Dakota, United States\",\"Towner County, North Dakota, United States\",\"Traill County, North Dakota, United States\",\"Wells County, North Dakota, United States\",\"Williams County, North Dakota, United States\",\"Billings County, North Dakota, United States\",\"Slope County, North Dakota, United States\",\"Barrington, fips:44001, iso2:US-RI, iso1:US\",\"Bristol, fips:44001, iso2:US-RI, iso1:US\",\"Burrillville, fips:44007, iso2:US-RI, iso1:US\",\"Central Falls, fips:44007, iso2:US-RI, iso1:US\",\"Charlestown, fips:44009, iso2:US-RI, iso1:US\",\"Coventry, fips:44003, iso2:US-RI, iso1:US\",\"Cranston, fips:44007, iso2:US-RI, iso1:US\",\"Cumberland, fips:44007, iso2:US-RI, iso1:US\",\"East Greenwich, fips:44003, iso2:US-RI, iso1:US\",\"East Providence, fips:44007, iso2:US-RI, iso1:US\",\"Exeter, fips:44009, iso2:US-RI, iso1:US\",\"Foster, fips:44007, iso2:US-RI, iso1:US\",\"Glocester, fips:44007, iso2:US-RI, iso1:US\",\"Hopkinton, fips:44009, iso2:US-RI, iso1:US\",\"Jamestown, fips:44005, iso2:US-RI, iso1:US\",\"Johnston, fips:44007, iso2:US-RI, iso1:US\",\"Lincoln, fips:44007, iso2:US-RI, iso1:US\",\"Little Compton, fips:44005, iso2:US-RI, iso1:US\",\"Middletown, fips:44005, iso2:US-RI, iso1:US\",\"Narragansett, fips:44009, iso2:US-RI, iso1:US\",\"New Shoreham, fips:44009, iso2:US-RI, iso1:US\",\"Newport, fips:44005, iso2:US-RI, iso1:US\",\"North Kingstown, fips:44009, iso2:US-RI, iso1:US\",\"North Providence, fips:44007, iso2:US-RI, iso1:US\",\"North Smithfield, fips:44007, iso2:US-RI, iso1:US\",\"Pawtucket, fips:44007, iso2:US-RI, iso1:US\",\"Portsmouth, fips:44005, iso2:US-RI, iso1:US\",\"Providence, fips:44007, iso2:US-RI, iso1:US\",\"Richmond, fips:44009, iso2:US-RI, iso1:US\",\"Scituate, fips:44007, iso2:US-RI, iso1:US\",\"Smithfield, fips:44007, iso2:US-RI, iso1:US\",\"South Kingstown, fips:44009, iso2:US-RI, iso1:US\",\"Tiverton, fips:44005, iso2:US-RI, iso1:US\",\"Warren, fips:44001, iso2:US-RI, iso1:US\",\"Warwick, fips:44003, iso2:US-RI, iso1:US\",\"West Greenwich, fips:44003, iso2:US-RI, iso1:US\",\"West Warwick, fips:44003, iso2:US-RI, iso1:US\",\"Westerly, fips:44009, iso2:US-RI, iso1:US\",\"Woonsocket, fips:44007, iso2:US-RI, iso1:US\",\"AC, BRA\",\"AL, BRA\",\"AP, BRA\",\"AM, BRA\",\"BA, BRA\",\"CE, BRA\",\"DF, BRA\",\"ES, BRA\",\"GO, BRA\",\"MA, BRA\",\"MT, BRA\",\"MS, BRA\",\"MG, BRA\",\"PR, BRA\",\"PB, BRA\",\"PA, BRA\",\"PE, BRA\",\"PI, BRA\",\"RN, BRA\",\"RS, BRA\",\"RJ, BRA\",\"RO, BRA\",\"RR, BRA\",\"SC, BRA\",\"SE, BRA\",\"SP, BRA\",\"TO, BRA\",\"Petersburg city, iso2:US-VA, iso1:US\",\"VIR\",\"Clark County, Missouri, United States\",\"Scotland County, Missouri, United States\",\"Schuyler County, Missouri, United States\",\"Nodaway County, Missouri, United States\",\"Putnam County, Missouri, United States\",\"Worth County, Missouri, United States\",\"Mercer County, Missouri, United States\",\"Harrison County, Missouri, United States\",\"Gentry County, Missouri, United States\",\"Sullivan County, Missouri, United States\",\"Knox County, Missouri, United States\",\"Holt County, Missouri, United States\",\"Grundy County, Missouri, United States\",\"Lewis County, Missouri, United States\",\"Andrew County, Missouri, United States\",\"Daviess County, Missouri, United States\",\"DeKalb County, Missouri, United States\",\"Macon County, Missouri, United States\",\"Linn County, Missouri, United States\",\"Livingston County, Missouri, United States\",\"Marion County, Missouri, United States\",\"Caldwell County, Missouri, United States\",\"Monroe County, Missouri, United States\",\"Carroll County, Missouri, United States\",\"Pike County, Missouri, United States\",\"Audrain County, Missouri, United States\",\"Saline County, Missouri, United States\",\"Howard County, Missouri, United States\",\"Osage County, Missouri, United States\",\"Gasconade County, Missouri, United States\",\"Morgan County, Missouri, United States\",\"Miller County, Missouri, United States\",\"Maries County, Missouri, United States\",\"Washington County, Missouri, United States\",\"Crawford County, Missouri, United States\",\"St. Clair County, Missouri, United States\",\"Phelps County, Missouri, United States\",\"Ste. Genevieve County, Missouri, United States\",\"Hickory County, Missouri, United States\",\"Vernon County, Missouri, United States\",\"Cedar County, Missouri, United States\",\"Dallas County, Missouri, United States\",\"Laclede County, Missouri, United States\",\"Polk County, Missouri, United States\",\"Dent County, Missouri, United States\",\"Iron County, Missouri, United States\",\"Madison County, Missouri, United States\",\"Barton County, Missouri, United States\",\"Reynolds County, Missouri, United States\",\"Dade County, Missouri, United States\",\"Webster County, Missouri, United States\",\"Shannon County, Missouri, United States\",\"Wayne County, Missouri, United States\",\"Lawrence County, Missouri, United States\",\"Mississippi County, Missouri, United States\",\"Douglas County, Missouri, United States\",\"Howell County, Missouri, United States\",\"Stone County, Missouri, United States\",\"Butler County, Missouri, United States\",\"New Madrid County, Missouri, United States\",\"Oregon County, Missouri, United States\",\"Ozark County, Missouri, United States\",\"(unassigned), iso2:US-MO, iso1:US\",\"Seoul, KOR\",\"Busan, KOR\",\"Daegu, KOR\",\"Incheon, KOR\",\"Gwangju, KOR\",\"Daejeon, KOR\",\"Ulsan, KOR\",\"Sejong, KOR\",\"Gyeonggi, KOR\",\"Gangwon, KOR\",\"North Chungcheong, KOR\",\"South Chungcheong, KOR\",\"North Jeolla, KOR\",\"South Jeolla, KOR\",\"North Gyeongsang, KOR\",\"South Gyeongsang, KOR\",\"Jeju, KOR\",\"Quarantine, KOR\",\"Franklin city, iso2:US-VA, iso1:US\",\"Waynesboro city, iso2:US-VA, iso1:US\",\"Adam County, iso2:US-ID, iso1:US\",\"Covington city, iso2:US-VA, iso1:US\",\"Orkney, Scotland, GBR\",\"Eileanan Siar (Western Isles), Scotland, GBR\",\"HKG\",\"MAC\",\"FRO\",\"Алтайский край, RUS\",\"Амурская область, RUS\",\"Архангельская область, RUS\",\"Астраханская область, RUS\",\"Белгородская область, RUS\",\"Брянская область, RUS\",\"Владимирская область, RUS\",\"Волгоградская область, RUS\",\"Вологодская область, RUS\",\"Воронежская область, RUS\",\"Забайкальский край, RUS\",\"Ивановская область, RUS\",\"Иркутская область, RUS\",\"Кабардино-Балкарская Республика, RUS\",\"Калининградская область, RUS\",\"Калужская область, RUS\",\"Кемеровская область, RUS\",\"Кировская область, RUS\",\"Костромская область, RUS\",\"Краснодарский край, RUS\",\"Красноярский край, RUS\",\"Курганская область, RUS\",\"Курская область, RUS\",\"Ленинградская область, RUS\",\"Липецкая область, RUS\",\"Магаданская область, RUS\",\"Москва, RUS\",\"Московская область, RUS\",\"Мурманская область, RUS\",\"Нижегородская область, RUS\",\"Новгородская область, RUS\",\"Новосибирская область, RUS\",\"Омская область, RUS\",\"Оренбургская область, RUS\",\"Орловская область, RUS\",\"Пензенская область, RUS\",\"Пермский край, RUS\",\"Приморский край, RUS\",\"Псковская область, RUS\",\"Республика Адыгея, RUS\",\"Республика Башкортостан, RUS\",\"Республика Бурятия, RUS\",\"Республика Дагестан, RUS\",\"Республика Калмыкия, RUS\",\"Республика Коми, RUS\",\"Республика Крым, RUS\",\"Республика Марий Эл, RUS\",\"Республика Мордовия, RUS\",\"Республика Саха (Якутия), RUS\",\"Республика Северная Осетия — Алания, RUS\",\"Республика Татарстан, RUS\",\"Республика Хакасия, RUS\",\"Республика Чувашия, RUS\",\"Ростовская область, RUS\",\"Рязанская область, RUS\",\"Самарская область, RUS\",\"Санкт-Петербург, RUS\",\"Саратовская область, RUS\",\"Сахалинская область, RUS\",\"Свердловская область, RUS\",\"Севастополь, RUS\",\"Смоленская область, RUS\",\"Ставропольский край, RUS\",\"Тамбовская область, RUS\",\"Тверская область, RUS\",\"Томская область, RUS\",\"Тульская область, RUS\",\"Тюменская область, RUS\",\"Удмуртская Республика, RUS\",\"Ульяновская область, RUS\",\"Хабаровский край, RUS\",\"Ханты-Мансийский АО, RUS\",\"Челябинская область, RUS\",\"Чеченская Республика, RUS\",\"Ямало-Ненецкий автономный округ, RUS\",\"Ярославская область, RUS\"]");

/***/ }),

/***/ "./src/assets/corona/lockdown-data-by-location.json":
/*!**********************************************************!*\
  !*** ./src/assets/corona/lockdown-data-by-location.json ***!
  \**********************************************************/
/*! exports provided: ARG, AUS, AUT, BEL, BOL, CHL, COL, CRI, CUB, DNK, FRA, GRC, HND, HUN, IRQ, IRL, ITA, JOR, LBY, MYS, MAR, NPL, NLD, NZL, NOR, PAN, PNG, PRY, POL, ROU, RWA, ZAF, ESP, TUN, GBR, ZWE, LTU, ARE, LBN, KWT, IND, PER, Quebec, CAN, SLV, CZE, VEN, LKA, RUS, PRI, GEO, PRT, Victoria, AUS, Tasmania, AUS, Queensland, AUS, New South Wales, AUS, South Australia, AUS, Western Australia, AUS, Northern Territory, AUS, Australian Capital Territory, AUS, Greenland, DNK, Faroe Islands, DNK, Corse, FRA, Guyane, FRA, Reunion, FRA, Mayotte, FRA, Bretagne, FRA, Grand Est, FRA, St Martin, FRA, Occitanie, FRA, Normandie, FRA, La Réunion, FRA, Martinique, FRA, Guadeloupe, FRA, Saint-Martin, FRA, French Guiana, FRA, Île-de-France, FRA, New Caledonia, FRA, Hauts-de-France, FRA, Pays de la Loire, FRA, Saint Barthelemy, FRA, French Polynesia, FRA, Saint-Barthélemy, FRA, Wallis et Futuna, FRA, Nouvelle-Calédonie, FRA, Nouvelle-Aquitaine, FRA, Centre-Val de Loire, FRA, Polynésie française, FRA, Auvergne-Rhône-Alpes, FRA, Bourgogne-Franche-Comté, FRA, Provence-Alpes-Côte d'Azur, FRA, Lazio, ITA, Sicily, ITA, Marche, ITA, Molise, ITA, Apulia, ITA, Umbria, ITA, Veneto, ITA, Liguria, ITA, Tuscany, ITA, Piemont, ITA, Abruzzo, ITA, Calabria, ITA, Sardinia, ITA, Lombardy, ITA, Campania, ITA, Basilicata, ITA, Aosta Valley, ITA, Emilia-Romagna, ITA, Friuli Venezia Giulia, ITA, Trentino-Alto Adige/Südtirol, ITA, Aruba, NLD, Curacao, NLD, Sint Maarten, NLD, Bonaire, Sint Eustatius and Saba, NLD, Ceuta, ESP, Aragón, ESP, Madrid, ESP, Murcia, ESP, Navarra, ESP, Galicia, ESP, Melilla, ESP, La Rioja, ESP, Cataluña, ESP, Canarias, ESP, Baleares, ESP, Asturias, ESP, Andalucía, ESP, Cantabria, ESP, País Vasco, ESP, Extremadura, ESP, C. Valenciana, ESP, Castilla y León, ESP, Castilla-La Mancha, ESP, UK, GBR, Bermuda, GBR, Anguilla, GBR, Scotland, GBR, Gibraltar, GBR, Montserrat, GBR, Isle of Man, GBR, York, England, GBR, Bury, England, GBR, Kent, England, GBR, Devon, England, GBR, Fife, Scotland, GBR, Essex, England, GBR, Wigan, England, GBR, Brent, England, GBR, Luton, England, GBR, Leeds, England, GBR, Derby, England, GBR, Cayman Islands, GBR, Sutton, England, GBR, Surrey, England, GBR, Camden, England, GBR, Slough, England, GBR, Sefton, England, GBR, Halton, England, GBR, Dudley, England, GBR, Bolton, England, GBR, Oldham, England, GBR, Newham, England, GBR, Bexley, England, GBR, Merton, England, GBR, Wirral, England, GBR, Harrow, England, GBR, Channel Islands, GBR, Medway, England, GBR, Dorset, England, GBR, Ealing, England, GBR, Torbay, England, GBR, Barnet, England, GBR, Cumbria, England, GBR, Croydon, England, GBR, Bromley, England, GBR, Norfolk, England, GBR, Reading, England, GBR, Bedford, England, GBR, Rutland, England, GBR, Salford, England, GBR, Lambeth, England, GBR, Suffolk, England, GBR, Swindon, England, GBR, Enfield, England, GBR, Orkney, Scotland, GBR, Walsall, England, GBR, Kirklees, England, GBR, Sandwell, England, GBR, Lewisham, England, GBR, Barnsley, England, GBR, Solihull, England, GBR, Somerset, England, GBR, Coventry, England, GBR, Bradford, England, GBR, Plymouth, England, GBR, Hounslow, England, GBR, Havering, England, GBR, Tameside, England, GBR, Thurrock, England, GBR, Trafford, England, GBR, Rochdale, England, GBR, Knowsley, England, GBR, Haringey, England, GBR, Borders, Scotland, GBR, Tayside, Scotland, GBR, Lothian, Scotland, GBR, Gateshead, England, GBR, Highland, Scotland, GBR, Shetland, Scotland, GBR, Wokingham, England, GBR, Wiltshire, England, GBR, Wakefield, England, GBR, Stockport, England, GBR, Southwark, England, GBR, Grampian, Scotland, GBR, Sheffield, England, GBR, Greenwich, England, GBR, Rotherham, England, GBR, Blackpool, England, GBR, Doncaster, England, GBR, Redbridge, England, GBR, Hampshire, England, GBR, Liverpool, England, GBR, Leicester, England, GBR, Islington, England, GBR, Sunderland, England, GBR, Derbyshire, England, GBR, Darlington, England, GBR, St. Helens, England, GBR, Manchester, England, GBR, Calderdale, England, GBR, Shropshire, England, GBR, Lancashire, England, GBR, Birmingham, England, GBR, Warrington, England, GBR, Hillingdon, England, GBR, Wandsworth, England, GBR, Hartlepool, England, GBR, Portsmouth, England, GBR, Nottingham, England, GBR, Oxfordshire, England, GBR, Southampton, England, GBR, East Sussex, England, GBR, West Sussex, England, GBR, Westminster, England, GBR, Warwickshire, England, GBR, Peterborough, England, GBR, Lincolnshire, England, GBR, Lanarkshire, Scotland, GBR, Wolverhampton, England, GBR, British Virgin Islands, GBR, Tower Hamlets, England, GBR, Hertfordshire, England, GBR, Isle of Wight, England, GBR, Staffordshire, England, GBR, Forth Valley, Scotland, GBR, County Durham, England, GBR, Cheshire East, England, GBR, Middlesbrough, England, GBR, Milton Keynes, England, GBR, North Somerset, England, GBR, Stoke-on-Trent, England, GBR, Cambridgeshire, England, GBR, Leicestershire, England, GBR, Northumberland, England, GBR, South Tyneside, England, GBR, North Tyneside, England, GBR, Waltham Forest, England, GBR, Worcestershire, England, GBR, West Berkshire, England, GBR, Southend-on-Sea, England, GBR, Gloucestershire, England, GBR, North Yorkshire, England, GBR, Turks and Caicos Islands, GBR, Buckinghamshire, England, GBR, Nottinghamshire, England, GBR, Northamptonshire, England, GBR, Stockton-on-Tees, England, GBR, Bristol, City of, England, GBR, Bracknell Forest, England, GBR, Brighton and Hove, England, GBR, Telford and Wrekin, England, GBR, North Lincolnshire, England, GBR, Ayrshire and Arran, Scotland, GBR, Ayrshire and Arran, Scotland, GBR, Newcastle upon Tyne, England, GBR, Barking and Dagenham, England, GBR, Kingston upon Thames, England, GBR, Richmond upon Thames, England, GBR, Central Bedfordshire, England, GBR, Redcar and Cleveland, England, GBR, Blackburn with Darwen, England, GBR, South Gloucestershire, England, GBR, Windsor and Maidenhead, England, GBR, Dumfries and Galloway, Scotland, GBR, Kensington and Chelsea, England, GBR, Hammersmith and Fulham, England, GBR, North East Lincolnshire, England, GBR, East Riding of Yorkshire, England, GBR, Herefordshire, County of, England, GBR, Cheshire West and Chester, England, GBR, Greater Glasgow and Clyde, Scotland, GBR, Hackney and City of London, England, GBR, Kingston upon Hull, City of, England, GBR, Cornwall and Isles of Scilly, England, GBR, Bath and North East Somerset, England, GBR, Eileanan Siar (Western Isles), Scotland, GBR, Bournemouth, Christchurch and Poole, England, GBR, Goa, IND, Bihar, IND, Delhi, IND, Ladakh, IND, Punjab, IND, Odisha, IND, Kerala, IND, Mizoram, IND, Gujarat, IND, Haryana, IND, Manipur, IND, Karnataka, IND, Rajasthan, IND, Telengana, IND, Chandigarh, IND, Tamil Nadu, IND, Puducherry, IND, Uttarakhand, IND, West Bengal, IND, Maharashtra, IND, Chhattisgarh, IND, Uttar Pradesh, IND, Andhra Pradesh, IND, Madhya Pradesh, IND, Himachal Pradesh, IND, Jammu and Kashmir, IND, Andaman and Nicobar Islands, IND, Москва, RUS, Севастополь, RUS, Пермский край, RUS, Омская область, RUS, Алтайский край, RUS, Приморский край, RUS, Республика Коми, RUS, Республика Крым, RUS, Санкт-Петербург, RUS, Курская область, RUS, Томская область, RUS, Хабаровский край, RUS, Тульская область, RUS, Тверская область, RUS, Липецкая область, RUS, Амурская область, RUS, Брянская область, RUS, Республика Адыгея, RUS, Псковская область, RUS, Орловская область, RUS, Самарская область, RUS, Красноярский край, RUS, Тюменская область, RUS, Кировская область, RUS, Калужская область, RUS, Иркутская область, RUS, Рязанская область, RUS, Ивановская область, RUS, Забайкальский край, RUS, Краснодарский край, RUS, Московская область, RUS, Мурманская область, RUS, Смоленская область, RUS, Пензенская область, RUS, Тамбовская область, RUS, Республика Бурятия, RUS, Республика Хакасия, RUS, Республика Чувашия, RUS, Ростовская область, RUS, Курганская область, RUS, Кемеровская область, RUS, Ярославская область, RUS, Ханты-Мансийский АО, RUS, Челябинская область, RUS, Воронежская область, RUS, Вологодская область, RUS, Ставропольский край, RUS, Ульяновская область, RUS, Республика Мордовия, RUS, Республика Марий Эл, RUS, Магаданская область, RUS, Республика Калмыкия, RUS, Республика Дагестан, RUS, Сахалинская область, RUS, Костромская область, RUS, Саратовская область, RUS, Республика Татарстан, RUS, Новгородская область, RUS, Оренбургская область, RUS, Астраханская область, RUS, Чеченская Республика, RUS, Белгородская область, RUS, Владимирская область, RUS, Свердловская область, RUS, Удмуртская Республика, RUS, Архангельская область, RUS, Новосибирская область, RUS, Нижегородская область, RUS, Волгоградская область, RUS, Ленинградская область, RUS, Калининградская область, RUS, Республика Башкортостан, RUS, Республика Саха (Якутия), RUS, Ямало-Ненецкий автономный округ, RUS, Кабардино-Балкарская Республика, RUS, Республика Северная Осетия — Алания, RUS, default */
/***/ (function(module) {

module.exports = JSON.parse("{\"ARG\":{\"country\":\"Argentina\",\"endDate\":\"2020-04-12\",\"level\":\"National\",\"place\":\"\",\"startDate\":\"2020-03-19\"},\"AUS\":{\"country\":\"Australia\",\"endDate\":\"2020-04-24\",\"level\":\"National\",\"place\":\"\",\"startDate\":\"2020-03-23\"},\"AUT\":{\"country\":\"Austria\",\"endDate\":\"2020-04-13\",\"level\":\"National\",\"place\":\"\",\"startDate\":\"2020-03-16\"},\"BEL\":{\"country\":\"Belgium\",\"endDate\":\"2020-04-18\",\"level\":\"National\",\"place\":\"\",\"startDate\":\"2020-03-18\"},\"BOL\":{\"country\":\"Bolivia\",\"endDate\":\"2020-04-14\",\"level\":\"National\",\"place\":\"\",\"startDate\":\"2020-03-22\"},\"CHL\":{\"country\":\"Chile\",\"endDate\":\"2020-04-14\",\"level\":\"National\",\"place\":\"\",\"startDate\":\"2020-03-19\"},\"COL\":{\"country\":\"Colombia\",\"endDate\":\"2020-04-13\",\"level\":\"National\",\"place\":\"\",\"startDate\":\"2020-03-25\"},\"CRI\":{\"country\":\"Costa Rica\",\"endDate\":\"2020-04-13\",\"level\":\"National\",\"place\":\"\",\"startDate\":\"2020-03-23\"},\"CUB\":{\"country\":\"Cuba\",\"endDate\":\"2020-04-19\",\"level\":\"National\",\"place\":\"\",\"startDate\":\"2020-03-23\"},\"DNK\":{\"country\":\"Denmark\",\"endDate\":\"2020-04-13\",\"level\":\"National\",\"place\":\"\",\"startDate\":\"2020-03-11\"},\"FRA\":{\"country\":\"France\",\"endDate\":\"2020-04-15\",\"level\":\"National\",\"place\":\"\",\"startDate\":\"2020-03-17\"},\"GRC\":{\"country\":\"Greece\",\"endDate\":\"2020-04-06\",\"level\":\"National\",\"place\":\"\",\"startDate\":\"2020-03-23\"},\"HND\":{\"country\":\"Honduras\",\"endDate\":\"2020-04-12\",\"level\":\"National\",\"place\":\"\",\"startDate\":\"2020-03-17\"},\"HUN\":{\"country\":\"Hungary\",\"endDate\":\"2020-04-11\",\"level\":\"National\",\"place\":\"\",\"startDate\":\"2020-03-28\"},\"IRQ\":{\"country\":\"Iraq\",\"endDate\":\"2020-04-11\",\"level\":\"National\",\"place\":\"\",\"startDate\":\"2020-03-22\"},\"IRL\":{\"country\":\"Ireland\",\"endDate\":\"2020-04-12\",\"level\":\"National\",\"place\":\"\",\"startDate\":\"2020-03-12\"},\"ITA\":{\"country\":\"Italy\",\"endDate\":\"2020-04-13\",\"level\":\"National\",\"place\":\"\",\"startDate\":\"2020-03-09\"},\"JOR\":{\"country\":\"Jordan\",\"endDate\":\"2020-04-12\",\"level\":\"National\",\"place\":\"\",\"startDate\":\"2020-03-21\"},\"LBY\":{\"country\":\"Libya\",\"endDate\":\"2020-04-20\",\"level\":\"National\",\"place\":\"\",\"startDate\":\"2020-03-22\"},\"MYS\":{\"country\":\"Malaysia\",\"endDate\":\"2020-04-14\",\"level\":\"National\",\"place\":\"\",\"startDate\":\"2020-03-18\"},\"MAR\":{\"country\":\"Morocco\",\"endDate\":\"2020-04-20\",\"level\":\"National\",\"place\":\"\",\"startDate\":\"2020-03-19\"},\"NPL\":{\"country\":\"Nepal\",\"endDate\":\"2020-04-07\",\"level\":\"National\",\"place\":\"\",\"startDate\":\"2020-03-24\"},\"NLD\":{\"country\":\"Netherlands\",\"endDate\":\"2020-04-28\",\"level\":\"National\",\"place\":\"\",\"startDate\":\"2020-03-16\"},\"NZL\":{\"country\":\"New Zealand\",\"endDate\":\"2020-04-19\",\"level\":\"National\",\"place\":\"\",\"startDate\":\"2020-03-26\"},\"NOR\":{\"country\":\"Norway\",\"endDate\":\"2020-04-13\",\"level\":\"National\",\"place\":\"\",\"startDate\":\"2020-03-12\"},\"PAN\":{\"country\":\"Panama\",\"endDate\":\"2020-04-13\",\"level\":\"National\",\"place\":\"\",\"startDate\":\"2020-03-25\"},\"PNG\":{\"country\":\"Papua New Guinea\",\"endDate\":\"2020-04-13\",\"level\":\"National\",\"place\":\"\",\"startDate\":\"2020-03-24\"},\"PRY\":{\"country\":\"Paraguay\",\"endDate\":\"2020-04-12\",\"level\":\"National\",\"place\":\"\",\"startDate\":\"2020-03-20\"},\"POL\":{\"country\":\"Poland\",\"endDate\":\"2020-04-12\",\"level\":\"National\",\"place\":\"\",\"startDate\":\"2020-03-13\"},\"ROU\":{\"country\":\"Romania\",\"endDate\":\"2020-04-14\",\"level\":\"National\",\"place\":\"\",\"startDate\":\"2020-03-25\"},\"RWA\":{\"country\":\"Rwanda\",\"endDate\":\"2020-04-12\",\"level\":\"National\",\"place\":\"\",\"startDate\":\"2020-03-21\"},\"ZAF\":{\"country\":\"South Africa\",\"endDate\":\"2020-04-16\",\"level\":\"National\",\"place\":\"\",\"startDate\":\"2020-03-26\"},\"ESP\":{\"country\":\"Spain\",\"endDate\":\"2020-04-14\",\"level\":\"National\",\"place\":\"\",\"startDate\":\"2020-03-14\"},\"TUN\":{\"country\":\"Tunisia\",\"endDate\":\"2020-04-11\",\"level\":\"National\",\"place\":\"\",\"startDate\":\"2020-03-22\"},\"GBR\":{\"country\":\"United Kingdom\",\"endDate\":\"2020-04-13\",\"level\":\"National\",\"place\":\"\",\"startDate\":\"2020-03-23\"},\"ZWE\":{\"country\":\"Zimbabwe\",\"endDate\":\"2020-04-12\",\"level\":\"National\",\"place\":\"\",\"startDate\":\"2020-03-30\"},\"LTU\":{\"country\":\"Lithuania\",\"endDate\":\"2020-04-13\",\"level\":\"National\",\"place\":\"\",\"startDate\":\"2020-03-16\"},\"ARE\":{\"country\":\"United Arab Emirates\",\"endDate\":\"2020-04-05\",\"level\":\"National\",\"place\":\"\",\"startDate\":\"2020-03-22\"},\"LBN\":{\"country\":\"Lebanon\",\"endDate\":\"2020-04-12\",\"level\":\"National\",\"place\":\"\",\"startDate\":\"2020-03-22\"},\"KWT\":{\"country\":\"Kuwait\",\"endDate\":\"\",\"level\":\"National\",\"place\":\"\",\"startDate\":\"2020-03-14\"},\"IND\":{\"country\":\"India\",\"endDate\":\"2020-04-14\",\"level\":\"National\",\"place\":\"\",\"startDate\":\"2020-03-24\"},\"PER\":{\"country\":\"Peru\",\"endDate\":\"2020-04-12\",\"level\":\"National\",\"place\":\"\",\"startDate\":\"2020-03-16\"},\"Quebec, CAN\":{\"country\":\"Canada\",\"endDate\":\"\",\"level\":\"Province\",\"place\":\"Quebec\",\"startDate\":\"2020-03-13\"},\"SLV\":{\"country\":\"El Salvador\",\"endDate\":\"2020-04-20\",\"level\":\"National\",\"place\":\"\",\"startDate\":\"2020-03-21\"},\"CZE\":{\"country\":\"Czech Republic\",\"endDate\":\"2020-04-12\",\"level\":\"National\",\"place\":\"\",\"startDate\":\"2020-03-22\"},\"VEN\":{\"country\":\"Venezuela\",\"endDate\":\"\",\"level\":\"National\",\"place\":\"\",\"startDate\":\"2020-03-16\"},\"LKA\":{\"country\":\"Sri Lanka\",\"endDate\":\"\",\"level\":\"National\",\"place\":\"\",\"startDate\":\"2020-03-20\"},\"RUS\":{\"country\":\"Russia\",\"endDate\":\"\",\"level\":\"National\",\"place\":\"\",\"startDate\":\"2020-03-30\"},\"PRI\":{\"country\":\"Puerto Rico\",\"endDate\":\"\",\"level\":\"National\",\"place\":\"\",\"startDate\":\"2020-03-15\"},\"GEO\":{\"country\":\"Georgia\",\"endDate\":\"2020-04-21\",\"level\":\"National\",\"place\":\"\",\"startDate\":\"2020-03-31\"},\"PRT\":{\"country\":\"Portugal\",\"endDate\":\"2020-04-16\",\"level\":\"National\",\"place\":\"\",\"startDate\":\"2020-03-19\"},\"Victoria, AUS\":{\"country\":\"Australia\",\"endDate\":\"2020-04-24\",\"level\":\"National\",\"place\":\"\",\"startDate\":\"2020-03-23\"},\"Tasmania, AUS\":{\"country\":\"Australia\",\"endDate\":\"2020-04-24\",\"level\":\"National\",\"place\":\"\",\"startDate\":\"2020-03-23\"},\"Queensland, AUS\":{\"country\":\"Australia\",\"endDate\":\"2020-04-24\",\"level\":\"National\",\"place\":\"\",\"startDate\":\"2020-03-23\"},\"New South Wales, AUS\":{\"country\":\"Australia\",\"endDate\":\"2020-04-24\",\"level\":\"National\",\"place\":\"\",\"startDate\":\"2020-03-23\"},\"South Australia, AUS\":{\"country\":\"Australia\",\"endDate\":\"2020-04-24\",\"level\":\"National\",\"place\":\"\",\"startDate\":\"2020-03-23\"},\"Western Australia, AUS\":{\"country\":\"Australia\",\"endDate\":\"2020-04-24\",\"level\":\"National\",\"place\":\"\",\"startDate\":\"2020-03-23\"},\"Northern Territory, AUS\":{\"country\":\"Australia\",\"endDate\":\"2020-04-24\",\"level\":\"National\",\"place\":\"\",\"startDate\":\"2020-03-23\"},\"Australian Capital Territory, AUS\":{\"country\":\"Australia\",\"endDate\":\"2020-04-24\",\"level\":\"National\",\"place\":\"\",\"startDate\":\"2020-03-23\"},\"Greenland, DNK\":{\"country\":\"Denmark\",\"endDate\":\"2020-04-13\",\"level\":\"National\",\"place\":\"\",\"startDate\":\"2020-03-11\"},\"Faroe Islands, DNK\":{\"country\":\"Denmark\",\"endDate\":\"2020-04-13\",\"level\":\"National\",\"place\":\"\",\"startDate\":\"2020-03-11\"},\"Corse, FRA\":{\"country\":\"France\",\"endDate\":\"2020-04-15\",\"level\":\"National\",\"place\":\"\",\"startDate\":\"2020-03-17\"},\"Guyane, FRA\":{\"country\":\"France\",\"endDate\":\"2020-04-15\",\"level\":\"National\",\"place\":\"\",\"startDate\":\"2020-03-17\"},\"Reunion, FRA\":{\"country\":\"France\",\"endDate\":\"2020-04-15\",\"level\":\"National\",\"place\":\"\",\"startDate\":\"2020-03-17\"},\"Mayotte, FRA\":{\"country\":\"France\",\"endDate\":\"2020-04-15\",\"level\":\"National\",\"place\":\"\",\"startDate\":\"2020-03-17\"},\"Bretagne, FRA\":{\"country\":\"France\",\"endDate\":\"2020-04-15\",\"level\":\"National\",\"place\":\"\",\"startDate\":\"2020-03-17\"},\"Grand Est, FRA\":{\"country\":\"France\",\"endDate\":\"2020-04-15\",\"level\":\"National\",\"place\":\"\",\"startDate\":\"2020-03-17\"},\"St Martin, FRA\":{\"country\":\"France\",\"endDate\":\"2020-04-15\",\"level\":\"National\",\"place\":\"\",\"startDate\":\"2020-03-17\"},\"Occitanie, FRA\":{\"country\":\"France\",\"endDate\":\"2020-04-15\",\"level\":\"National\",\"place\":\"\",\"startDate\":\"2020-03-17\"},\"Normandie, FRA\":{\"country\":\"France\",\"endDate\":\"2020-04-15\",\"level\":\"National\",\"place\":\"\",\"startDate\":\"2020-03-17\"},\"La Réunion, FRA\":{\"country\":\"France\",\"endDate\":\"2020-04-15\",\"level\":\"National\",\"place\":\"\",\"startDate\":\"2020-03-17\"},\"Martinique, FRA\":{\"country\":\"France\",\"endDate\":\"2020-04-15\",\"level\":\"National\",\"place\":\"\",\"startDate\":\"2020-03-17\"},\"Guadeloupe, FRA\":{\"country\":\"France\",\"endDate\":\"2020-04-15\",\"level\":\"National\",\"place\":\"\",\"startDate\":\"2020-03-17\"},\"Saint-Martin, FRA\":{\"country\":\"France\",\"endDate\":\"2020-04-15\",\"level\":\"National\",\"place\":\"\",\"startDate\":\"2020-03-17\"},\"French Guiana, FRA\":{\"country\":\"France\",\"endDate\":\"2020-04-15\",\"level\":\"National\",\"place\":\"\",\"startDate\":\"2020-03-17\"},\"Île-de-France, FRA\":{\"country\":\"France\",\"endDate\":\"2020-04-15\",\"level\":\"National\",\"place\":\"\",\"startDate\":\"2020-03-17\"},\"New Caledonia, FRA\":{\"country\":\"France\",\"endDate\":\"2020-04-15\",\"level\":\"National\",\"place\":\"\",\"startDate\":\"2020-03-17\"},\"Hauts-de-France, FRA\":{\"country\":\"France\",\"endDate\":\"2020-04-15\",\"level\":\"National\",\"place\":\"\",\"startDate\":\"2020-03-17\"},\"Pays de la Loire, FRA\":{\"country\":\"France\",\"endDate\":\"2020-04-15\",\"level\":\"National\",\"place\":\"\",\"startDate\":\"2020-03-17\"},\"Saint Barthelemy, FRA\":{\"country\":\"France\",\"endDate\":\"2020-04-15\",\"level\":\"National\",\"place\":\"\",\"startDate\":\"2020-03-17\"},\"French Polynesia, FRA\":{\"country\":\"France\",\"endDate\":\"2020-04-15\",\"level\":\"National\",\"place\":\"\",\"startDate\":\"2020-03-17\"},\"Saint-Barthélemy, FRA\":{\"country\":\"France\",\"endDate\":\"2020-04-15\",\"level\":\"National\",\"place\":\"\",\"startDate\":\"2020-03-17\"},\"Wallis et Futuna, FRA\":{\"country\":\"France\",\"endDate\":\"2020-04-15\",\"level\":\"National\",\"place\":\"\",\"startDate\":\"2020-03-17\"},\"Nouvelle-Calédonie, FRA\":{\"country\":\"France\",\"endDate\":\"2020-04-15\",\"level\":\"National\",\"place\":\"\",\"startDate\":\"2020-03-17\"},\"Nouvelle-Aquitaine, FRA\":{\"country\":\"France\",\"endDate\":\"2020-04-15\",\"level\":\"National\",\"place\":\"\",\"startDate\":\"2020-03-17\"},\"Centre-Val de Loire, FRA\":{\"country\":\"France\",\"endDate\":\"2020-04-15\",\"level\":\"National\",\"place\":\"\",\"startDate\":\"2020-03-17\"},\"Polynésie française, FRA\":{\"country\":\"France\",\"endDate\":\"2020-04-15\",\"level\":\"National\",\"place\":\"\",\"startDate\":\"2020-03-17\"},\"Auvergne-Rhône-Alpes, FRA\":{\"country\":\"France\",\"endDate\":\"2020-04-15\",\"level\":\"National\",\"place\":\"\",\"startDate\":\"2020-03-17\"},\"Bourgogne-Franche-Comté, FRA\":{\"country\":\"France\",\"endDate\":\"2020-04-15\",\"level\":\"National\",\"place\":\"\",\"startDate\":\"2020-03-17\"},\"Provence-Alpes-Côte d'Azur, FRA\":{\"country\":\"France\",\"endDate\":\"2020-04-15\",\"level\":\"National\",\"place\":\"\",\"startDate\":\"2020-03-17\"},\"Lazio, ITA\":{\"country\":\"Italy\",\"endDate\":\"2020-04-13\",\"level\":\"National\",\"place\":\"\",\"startDate\":\"2020-03-09\"},\"Sicily, ITA\":{\"country\":\"Italy\",\"endDate\":\"2020-04-13\",\"level\":\"National\",\"place\":\"\",\"startDate\":\"2020-03-09\"},\"Marche, ITA\":{\"country\":\"Italy\",\"endDate\":\"2020-04-13\",\"level\":\"National\",\"place\":\"\",\"startDate\":\"2020-03-09\"},\"Molise, ITA\":{\"country\":\"Italy\",\"endDate\":\"2020-04-13\",\"level\":\"National\",\"place\":\"\",\"startDate\":\"2020-03-09\"},\"Apulia, ITA\":{\"country\":\"Italy\",\"endDate\":\"2020-04-13\",\"level\":\"National\",\"place\":\"\",\"startDate\":\"2020-03-09\"},\"Umbria, ITA\":{\"country\":\"Italy\",\"endDate\":\"2020-04-13\",\"level\":\"National\",\"place\":\"\",\"startDate\":\"2020-03-09\"},\"Veneto, ITA\":{\"country\":\"Italy\",\"endDate\":\"2020-04-13\",\"level\":\"National\",\"place\":\"\",\"startDate\":\"2020-03-09\"},\"Liguria, ITA\":{\"country\":\"Italy\",\"endDate\":\"2020-04-13\",\"level\":\"National\",\"place\":\"\",\"startDate\":\"2020-03-09\"},\"Tuscany, ITA\":{\"country\":\"Italy\",\"endDate\":\"2020-04-13\",\"level\":\"National\",\"place\":\"\",\"startDate\":\"2020-03-09\"},\"Piemont, ITA\":{\"country\":\"Italy\",\"endDate\":\"2020-04-13\",\"level\":\"National\",\"place\":\"\",\"startDate\":\"2020-03-09\"},\"Abruzzo, ITA\":{\"country\":\"Italy\",\"endDate\":\"2020-04-13\",\"level\":\"National\",\"place\":\"\",\"startDate\":\"2020-03-09\"},\"Calabria, ITA\":{\"country\":\"Italy\",\"endDate\":\"2020-04-13\",\"level\":\"National\",\"place\":\"\",\"startDate\":\"2020-03-09\"},\"Sardinia, ITA\":{\"country\":\"Italy\",\"endDate\":\"2020-04-13\",\"level\":\"National\",\"place\":\"\",\"startDate\":\"2020-03-09\"},\"Lombardy, ITA\":{\"country\":\"Italy\",\"endDate\":\"2020-04-13\",\"level\":\"National\",\"place\":\"\",\"startDate\":\"2020-03-09\"},\"Campania, ITA\":{\"country\":\"Italy\",\"endDate\":\"2020-04-13\",\"level\":\"National\",\"place\":\"\",\"startDate\":\"2020-03-09\"},\"Basilicata, ITA\":{\"country\":\"Italy\",\"endDate\":\"2020-04-13\",\"level\":\"National\",\"place\":\"\",\"startDate\":\"2020-03-09\"},\"Aosta Valley, ITA\":{\"country\":\"Italy\",\"endDate\":\"2020-04-13\",\"level\":\"National\",\"place\":\"\",\"startDate\":\"2020-03-09\"},\"Emilia-Romagna, ITA\":{\"country\":\"Italy\",\"endDate\":\"2020-04-13\",\"level\":\"National\",\"place\":\"\",\"startDate\":\"2020-03-09\"},\"Friuli Venezia Giulia, ITA\":{\"country\":\"Italy\",\"endDate\":\"2020-04-13\",\"level\":\"National\",\"place\":\"\",\"startDate\":\"2020-03-09\"},\"Trentino-Alto Adige/Südtirol, ITA\":{\"country\":\"Italy\",\"endDate\":\"2020-04-13\",\"level\":\"National\",\"place\":\"\",\"startDate\":\"2020-03-09\"},\"Aruba, NLD\":{\"country\":\"Netherlands\",\"endDate\":\"2020-04-28\",\"level\":\"National\",\"place\":\"\",\"startDate\":\"2020-03-16\"},\"Curacao, NLD\":{\"country\":\"Netherlands\",\"endDate\":\"2020-04-28\",\"level\":\"National\",\"place\":\"\",\"startDate\":\"2020-03-16\"},\"Sint Maarten, NLD\":{\"country\":\"Netherlands\",\"endDate\":\"2020-04-28\",\"level\":\"National\",\"place\":\"\",\"startDate\":\"2020-03-16\"},\"Bonaire, Sint Eustatius and Saba, NLD\":{\"country\":\"Netherlands\",\"endDate\":\"2020-04-28\",\"level\":\"National\",\"place\":\"\",\"startDate\":\"2020-03-16\"},\"Ceuta, ESP\":{\"country\":\"Spain\",\"endDate\":\"2020-04-14\",\"level\":\"National\",\"place\":\"\",\"startDate\":\"2020-03-14\"},\"Aragón, ESP\":{\"country\":\"Spain\",\"endDate\":\"2020-04-14\",\"level\":\"National\",\"place\":\"\",\"startDate\":\"2020-03-14\"},\"Madrid, ESP\":{\"country\":\"Spain\",\"endDate\":\"2020-04-14\",\"level\":\"National\",\"place\":\"\",\"startDate\":\"2020-03-14\"},\"Murcia, ESP\":{\"country\":\"Spain\",\"endDate\":\"2020-04-14\",\"level\":\"National\",\"place\":\"\",\"startDate\":\"2020-03-14\"},\"Navarra, ESP\":{\"country\":\"Spain\",\"endDate\":\"2020-04-14\",\"level\":\"National\",\"place\":\"\",\"startDate\":\"2020-03-14\"},\"Galicia, ESP\":{\"country\":\"Spain\",\"endDate\":\"2020-04-14\",\"level\":\"National\",\"place\":\"\",\"startDate\":\"2020-03-14\"},\"Melilla, ESP\":{\"country\":\"Spain\",\"endDate\":\"2020-04-14\",\"level\":\"National\",\"place\":\"\",\"startDate\":\"2020-03-14\"},\"La Rioja, ESP\":{\"country\":\"Spain\",\"endDate\":\"2020-04-14\",\"level\":\"National\",\"place\":\"\",\"startDate\":\"2020-03-14\"},\"Cataluña, ESP\":{\"country\":\"Spain\",\"endDate\":\"2020-04-14\",\"level\":\"National\",\"place\":\"\",\"startDate\":\"2020-03-14\"},\"Canarias, ESP\":{\"country\":\"Spain\",\"endDate\":\"2020-04-14\",\"level\":\"National\",\"place\":\"\",\"startDate\":\"2020-03-14\"},\"Baleares, ESP\":{\"country\":\"Spain\",\"endDate\":\"2020-04-14\",\"level\":\"National\",\"place\":\"\",\"startDate\":\"2020-03-14\"},\"Asturias, ESP\":{\"country\":\"Spain\",\"endDate\":\"2020-04-14\",\"level\":\"National\",\"place\":\"\",\"startDate\":\"2020-03-14\"},\"Andalucía, ESP\":{\"country\":\"Spain\",\"endDate\":\"2020-04-14\",\"level\":\"National\",\"place\":\"\",\"startDate\":\"2020-03-14\"},\"Cantabria, ESP\":{\"country\":\"Spain\",\"endDate\":\"2020-04-14\",\"level\":\"National\",\"place\":\"\",\"startDate\":\"2020-03-14\"},\"País Vasco, ESP\":{\"country\":\"Spain\",\"endDate\":\"2020-04-14\",\"level\":\"National\",\"place\":\"\",\"startDate\":\"2020-03-14\"},\"Extremadura, ESP\":{\"country\":\"Spain\",\"endDate\":\"2020-04-14\",\"level\":\"National\",\"place\":\"\",\"startDate\":\"2020-03-14\"},\"C. Valenciana, ESP\":{\"country\":\"Spain\",\"endDate\":\"2020-04-14\",\"level\":\"National\",\"place\":\"\",\"startDate\":\"2020-03-14\"},\"Castilla y León, ESP\":{\"country\":\"Spain\",\"endDate\":\"2020-04-14\",\"level\":\"National\",\"place\":\"\",\"startDate\":\"2020-03-14\"},\"Castilla-La Mancha, ESP\":{\"country\":\"Spain\",\"endDate\":\"2020-04-14\",\"level\":\"National\",\"place\":\"\",\"startDate\":\"2020-03-14\"},\"UK, GBR\":{\"country\":\"United Kingdom\",\"endDate\":\"2020-04-13\",\"level\":\"National\",\"place\":\"\",\"startDate\":\"2020-03-23\"},\"Bermuda, GBR\":{\"country\":\"United Kingdom\",\"endDate\":\"2020-04-13\",\"level\":\"National\",\"place\":\"\",\"startDate\":\"2020-03-23\"},\"Anguilla, GBR\":{\"country\":\"United Kingdom\",\"endDate\":\"2020-04-13\",\"level\":\"National\",\"place\":\"\",\"startDate\":\"2020-03-23\"},\"Scotland, GBR\":{\"country\":\"United Kingdom\",\"endDate\":\"2020-04-13\",\"level\":\"National\",\"place\":\"\",\"startDate\":\"2020-03-23\"},\"Gibraltar, GBR\":{\"country\":\"United Kingdom\",\"endDate\":\"2020-04-13\",\"level\":\"National\",\"place\":\"\",\"startDate\":\"2020-03-23\"},\"Montserrat, GBR\":{\"country\":\"United Kingdom\",\"endDate\":\"2020-04-13\",\"level\":\"National\",\"place\":\"\",\"startDate\":\"2020-03-23\"},\"Isle of Man, GBR\":{\"country\":\"United Kingdom\",\"endDate\":\"2020-04-13\",\"level\":\"National\",\"place\":\"\",\"startDate\":\"2020-03-23\"},\"York, England, GBR\":{\"country\":\"United Kingdom\",\"endDate\":\"2020-04-13\",\"level\":\"National\",\"place\":\"\",\"startDate\":\"2020-03-23\"},\"Bury, England, GBR\":{\"country\":\"United Kingdom\",\"endDate\":\"2020-04-13\",\"level\":\"National\",\"place\":\"\",\"startDate\":\"2020-03-23\"},\"Kent, England, GBR\":{\"country\":\"United Kingdom\",\"endDate\":\"2020-04-13\",\"level\":\"National\",\"place\":\"\",\"startDate\":\"2020-03-23\"},\"Devon, England, GBR\":{\"country\":\"United Kingdom\",\"endDate\":\"2020-04-13\",\"level\":\"National\",\"place\":\"\",\"startDate\":\"2020-03-23\"},\"Fife, Scotland, GBR\":{\"country\":\"United Kingdom\",\"endDate\":\"2020-04-13\",\"level\":\"National\",\"place\":\"\",\"startDate\":\"2020-03-23\"},\"Essex, England, GBR\":{\"country\":\"United Kingdom\",\"endDate\":\"2020-04-13\",\"level\":\"National\",\"place\":\"\",\"startDate\":\"2020-03-23\"},\"Wigan, England, GBR\":{\"country\":\"United Kingdom\",\"endDate\":\"2020-04-13\",\"level\":\"National\",\"place\":\"\",\"startDate\":\"2020-03-23\"},\"Brent, England, GBR\":{\"country\":\"United Kingdom\",\"endDate\":\"2020-04-13\",\"level\":\"National\",\"place\":\"\",\"startDate\":\"2020-03-23\"},\"Luton, England, GBR\":{\"country\":\"United Kingdom\",\"endDate\":\"2020-04-13\",\"level\":\"National\",\"place\":\"\",\"startDate\":\"2020-03-23\"},\"Leeds, England, GBR\":{\"country\":\"United Kingdom\",\"endDate\":\"2020-04-13\",\"level\":\"National\",\"place\":\"\",\"startDate\":\"2020-03-23\"},\"Derby, England, GBR\":{\"country\":\"United Kingdom\",\"endDate\":\"2020-04-13\",\"level\":\"National\",\"place\":\"\",\"startDate\":\"2020-03-23\"},\"Cayman Islands, GBR\":{\"country\":\"United Kingdom\",\"endDate\":\"2020-04-13\",\"level\":\"National\",\"place\":\"\",\"startDate\":\"2020-03-23\"},\"Sutton, England, GBR\":{\"country\":\"United Kingdom\",\"endDate\":\"2020-04-13\",\"level\":\"National\",\"place\":\"\",\"startDate\":\"2020-03-23\"},\"Surrey, England, GBR\":{\"country\":\"United Kingdom\",\"endDate\":\"2020-04-13\",\"level\":\"National\",\"place\":\"\",\"startDate\":\"2020-03-23\"},\"Camden, England, GBR\":{\"country\":\"United Kingdom\",\"endDate\":\"2020-04-13\",\"level\":\"National\",\"place\":\"\",\"startDate\":\"2020-03-23\"},\"Slough, England, GBR\":{\"country\":\"United Kingdom\",\"endDate\":\"2020-04-13\",\"level\":\"National\",\"place\":\"\",\"startDate\":\"2020-03-23\"},\"Sefton, England, GBR\":{\"country\":\"United Kingdom\",\"endDate\":\"2020-04-13\",\"level\":\"National\",\"place\":\"\",\"startDate\":\"2020-03-23\"},\"Halton, England, GBR\":{\"country\":\"United Kingdom\",\"endDate\":\"2020-04-13\",\"level\":\"National\",\"place\":\"\",\"startDate\":\"2020-03-23\"},\"Dudley, England, GBR\":{\"country\":\"United Kingdom\",\"endDate\":\"2020-04-13\",\"level\":\"National\",\"place\":\"\",\"startDate\":\"2020-03-23\"},\"Bolton, England, GBR\":{\"country\":\"United Kingdom\",\"endDate\":\"2020-04-13\",\"level\":\"National\",\"place\":\"\",\"startDate\":\"2020-03-23\"},\"Oldham, England, GBR\":{\"country\":\"United Kingdom\",\"endDate\":\"2020-04-13\",\"level\":\"National\",\"place\":\"\",\"startDate\":\"2020-03-23\"},\"Newham, England, GBR\":{\"country\":\"United Kingdom\",\"endDate\":\"2020-04-13\",\"level\":\"National\",\"place\":\"\",\"startDate\":\"2020-03-23\"},\"Bexley, England, GBR\":{\"country\":\"United Kingdom\",\"endDate\":\"2020-04-13\",\"level\":\"National\",\"place\":\"\",\"startDate\":\"2020-03-23\"},\"Merton, England, GBR\":{\"country\":\"United Kingdom\",\"endDate\":\"2020-04-13\",\"level\":\"National\",\"place\":\"\",\"startDate\":\"2020-03-23\"},\"Wirral, England, GBR\":{\"country\":\"United Kingdom\",\"endDate\":\"2020-04-13\",\"level\":\"National\",\"place\":\"\",\"startDate\":\"2020-03-23\"},\"Harrow, England, GBR\":{\"country\":\"United Kingdom\",\"endDate\":\"2020-04-13\",\"level\":\"National\",\"place\":\"\",\"startDate\":\"2020-03-23\"},\"Channel Islands, GBR\":{\"country\":\"United Kingdom\",\"endDate\":\"2020-04-13\",\"level\":\"National\",\"place\":\"\",\"startDate\":\"2020-03-23\"},\"Medway, England, GBR\":{\"country\":\"United Kingdom\",\"endDate\":\"2020-04-13\",\"level\":\"National\",\"place\":\"\",\"startDate\":\"2020-03-23\"},\"Dorset, England, GBR\":{\"country\":\"United Kingdom\",\"endDate\":\"2020-04-13\",\"level\":\"National\",\"place\":\"\",\"startDate\":\"2020-03-23\"},\"Ealing, England, GBR\":{\"country\":\"United Kingdom\",\"endDate\":\"2020-04-13\",\"level\":\"National\",\"place\":\"\",\"startDate\":\"2020-03-23\"},\"Torbay, England, GBR\":{\"country\":\"United Kingdom\",\"endDate\":\"2020-04-13\",\"level\":\"National\",\"place\":\"\",\"startDate\":\"2020-03-23\"},\"Barnet, England, GBR\":{\"country\":\"United Kingdom\",\"endDate\":\"2020-04-13\",\"level\":\"National\",\"place\":\"\",\"startDate\":\"2020-03-23\"},\"Cumbria, England, GBR\":{\"country\":\"United Kingdom\",\"endDate\":\"2020-04-13\",\"level\":\"National\",\"place\":\"\",\"startDate\":\"2020-03-23\"},\"Croydon, England, GBR\":{\"country\":\"United Kingdom\",\"endDate\":\"2020-04-13\",\"level\":\"National\",\"place\":\"\",\"startDate\":\"2020-03-23\"},\"Bromley, England, GBR\":{\"country\":\"United Kingdom\",\"endDate\":\"2020-04-13\",\"level\":\"National\",\"place\":\"\",\"startDate\":\"2020-03-23\"},\"Norfolk, England, GBR\":{\"country\":\"United Kingdom\",\"endDate\":\"2020-04-13\",\"level\":\"National\",\"place\":\"\",\"startDate\":\"2020-03-23\"},\"Reading, England, GBR\":{\"country\":\"United Kingdom\",\"endDate\":\"2020-04-13\",\"level\":\"National\",\"place\":\"\",\"startDate\":\"2020-03-23\"},\"Bedford, England, GBR\":{\"country\":\"United Kingdom\",\"endDate\":\"2020-04-13\",\"level\":\"National\",\"place\":\"\",\"startDate\":\"2020-03-23\"},\"Rutland, England, GBR\":{\"country\":\"United Kingdom\",\"endDate\":\"2020-04-13\",\"level\":\"National\",\"place\":\"\",\"startDate\":\"2020-03-23\"},\"Salford, England, GBR\":{\"country\":\"United Kingdom\",\"endDate\":\"2020-04-13\",\"level\":\"National\",\"place\":\"\",\"startDate\":\"2020-03-23\"},\"Lambeth, England, GBR\":{\"country\":\"United Kingdom\",\"endDate\":\"2020-04-13\",\"level\":\"National\",\"place\":\"\",\"startDate\":\"2020-03-23\"},\"Suffolk, England, GBR\":{\"country\":\"United Kingdom\",\"endDate\":\"2020-04-13\",\"level\":\"National\",\"place\":\"\",\"startDate\":\"2020-03-23\"},\"Swindon, England, GBR\":{\"country\":\"United Kingdom\",\"endDate\":\"2020-04-13\",\"level\":\"National\",\"place\":\"\",\"startDate\":\"2020-03-23\"},\"Enfield, England, GBR\":{\"country\":\"United Kingdom\",\"endDate\":\"2020-04-13\",\"level\":\"National\",\"place\":\"\",\"startDate\":\"2020-03-23\"},\"Orkney, Scotland, GBR\":{\"country\":\"United Kingdom\",\"endDate\":\"2020-04-13\",\"level\":\"National\",\"place\":\"\",\"startDate\":\"2020-03-23\"},\"Walsall, England, GBR\":{\"country\":\"United Kingdom\",\"endDate\":\"2020-04-13\",\"level\":\"National\",\"place\":\"\",\"startDate\":\"2020-03-23\"},\"Kirklees, England, GBR\":{\"country\":\"United Kingdom\",\"endDate\":\"2020-04-13\",\"level\":\"National\",\"place\":\"\",\"startDate\":\"2020-03-23\"},\"Sandwell, England, GBR\":{\"country\":\"United Kingdom\",\"endDate\":\"2020-04-13\",\"level\":\"National\",\"place\":\"\",\"startDate\":\"2020-03-23\"},\"Lewisham, England, GBR\":{\"country\":\"United Kingdom\",\"endDate\":\"2020-04-13\",\"level\":\"National\",\"place\":\"\",\"startDate\":\"2020-03-23\"},\"Barnsley, England, GBR\":{\"country\":\"United Kingdom\",\"endDate\":\"2020-04-13\",\"level\":\"National\",\"place\":\"\",\"startDate\":\"2020-03-23\"},\"Solihull, England, GBR\":{\"country\":\"United Kingdom\",\"endDate\":\"2020-04-13\",\"level\":\"National\",\"place\":\"\",\"startDate\":\"2020-03-23\"},\"Somerset, England, GBR\":{\"country\":\"United Kingdom\",\"endDate\":\"2020-04-13\",\"level\":\"National\",\"place\":\"\",\"startDate\":\"2020-03-23\"},\"Coventry, England, GBR\":{\"country\":\"United Kingdom\",\"endDate\":\"2020-04-13\",\"level\":\"National\",\"place\":\"\",\"startDate\":\"2020-03-23\"},\"Bradford, England, GBR\":{\"country\":\"United Kingdom\",\"endDate\":\"2020-04-13\",\"level\":\"National\",\"place\":\"\",\"startDate\":\"2020-03-23\"},\"Plymouth, England, GBR\":{\"country\":\"United Kingdom\",\"endDate\":\"2020-04-13\",\"level\":\"National\",\"place\":\"\",\"startDate\":\"2020-03-23\"},\"Hounslow, England, GBR\":{\"country\":\"United Kingdom\",\"endDate\":\"2020-04-13\",\"level\":\"National\",\"place\":\"\",\"startDate\":\"2020-03-23\"},\"Havering, England, GBR\":{\"country\":\"United Kingdom\",\"endDate\":\"2020-04-13\",\"level\":\"National\",\"place\":\"\",\"startDate\":\"2020-03-23\"},\"Tameside, England, GBR\":{\"country\":\"United Kingdom\",\"endDate\":\"2020-04-13\",\"level\":\"National\",\"place\":\"\",\"startDate\":\"2020-03-23\"},\"Thurrock, England, GBR\":{\"country\":\"United Kingdom\",\"endDate\":\"2020-04-13\",\"level\":\"National\",\"place\":\"\",\"startDate\":\"2020-03-23\"},\"Trafford, England, GBR\":{\"country\":\"United Kingdom\",\"endDate\":\"2020-04-13\",\"level\":\"National\",\"place\":\"\",\"startDate\":\"2020-03-23\"},\"Rochdale, England, GBR\":{\"country\":\"United Kingdom\",\"endDate\":\"2020-04-13\",\"level\":\"National\",\"place\":\"\",\"startDate\":\"2020-03-23\"},\"Knowsley, England, GBR\":{\"country\":\"United Kingdom\",\"endDate\":\"2020-04-13\",\"level\":\"National\",\"place\":\"\",\"startDate\":\"2020-03-23\"},\"Haringey, England, GBR\":{\"country\":\"United Kingdom\",\"endDate\":\"2020-04-13\",\"level\":\"National\",\"place\":\"\",\"startDate\":\"2020-03-23\"},\"Borders, Scotland, GBR\":{\"country\":\"United Kingdom\",\"endDate\":\"2020-04-13\",\"level\":\"National\",\"place\":\"\",\"startDate\":\"2020-03-23\"},\"Tayside, Scotland, GBR\":{\"country\":\"United Kingdom\",\"endDate\":\"2020-04-13\",\"level\":\"National\",\"place\":\"\",\"startDate\":\"2020-03-23\"},\"Lothian, Scotland, GBR\":{\"country\":\"United Kingdom\",\"endDate\":\"2020-04-13\",\"level\":\"National\",\"place\":\"\",\"startDate\":\"2020-03-23\"},\"Gateshead, England, GBR\":{\"country\":\"United Kingdom\",\"endDate\":\"2020-04-13\",\"level\":\"National\",\"place\":\"\",\"startDate\":\"2020-03-23\"},\"Highland, Scotland, GBR\":{\"country\":\"United Kingdom\",\"endDate\":\"2020-04-13\",\"level\":\"National\",\"place\":\"\",\"startDate\":\"2020-03-23\"},\"Shetland, Scotland, GBR\":{\"country\":\"United Kingdom\",\"endDate\":\"2020-04-13\",\"level\":\"National\",\"place\":\"\",\"startDate\":\"2020-03-23\"},\"Wokingham, England, GBR\":{\"country\":\"United Kingdom\",\"endDate\":\"2020-04-13\",\"level\":\"National\",\"place\":\"\",\"startDate\":\"2020-03-23\"},\"Wiltshire, England, GBR\":{\"country\":\"United Kingdom\",\"endDate\":\"2020-04-13\",\"level\":\"National\",\"place\":\"\",\"startDate\":\"2020-03-23\"},\"Wakefield, England, GBR\":{\"country\":\"United Kingdom\",\"endDate\":\"2020-04-13\",\"level\":\"National\",\"place\":\"\",\"startDate\":\"2020-03-23\"},\"Stockport, England, GBR\":{\"country\":\"United Kingdom\",\"endDate\":\"2020-04-13\",\"level\":\"National\",\"place\":\"\",\"startDate\":\"2020-03-23\"},\"Southwark, England, GBR\":{\"country\":\"United Kingdom\",\"endDate\":\"2020-04-13\",\"level\":\"National\",\"place\":\"\",\"startDate\":\"2020-03-23\"},\"Grampian, Scotland, GBR\":{\"country\":\"United Kingdom\",\"endDate\":\"2020-04-13\",\"level\":\"National\",\"place\":\"\",\"startDate\":\"2020-03-23\"},\"Sheffield, England, GBR\":{\"country\":\"United Kingdom\",\"endDate\":\"2020-04-13\",\"level\":\"National\",\"place\":\"\",\"startDate\":\"2020-03-23\"},\"Greenwich, England, GBR\":{\"country\":\"United Kingdom\",\"endDate\":\"2020-04-13\",\"level\":\"National\",\"place\":\"\",\"startDate\":\"2020-03-23\"},\"Rotherham, England, GBR\":{\"country\":\"United Kingdom\",\"endDate\":\"2020-04-13\",\"level\":\"National\",\"place\":\"\",\"startDate\":\"2020-03-23\"},\"Blackpool, England, GBR\":{\"country\":\"United Kingdom\",\"endDate\":\"2020-04-13\",\"level\":\"National\",\"place\":\"\",\"startDate\":\"2020-03-23\"},\"Doncaster, England, GBR\":{\"country\":\"United Kingdom\",\"endDate\":\"2020-04-13\",\"level\":\"National\",\"place\":\"\",\"startDate\":\"2020-03-23\"},\"Redbridge, England, GBR\":{\"country\":\"United Kingdom\",\"endDate\":\"2020-04-13\",\"level\":\"National\",\"place\":\"\",\"startDate\":\"2020-03-23\"},\"Hampshire, England, GBR\":{\"country\":\"United Kingdom\",\"endDate\":\"2020-04-13\",\"level\":\"National\",\"place\":\"\",\"startDate\":\"2020-03-23\"},\"Liverpool, England, GBR\":{\"country\":\"United Kingdom\",\"endDate\":\"2020-04-13\",\"level\":\"National\",\"place\":\"\",\"startDate\":\"2020-03-23\"},\"Leicester, England, GBR\":{\"country\":\"United Kingdom\",\"endDate\":\"2020-04-13\",\"level\":\"National\",\"place\":\"\",\"startDate\":\"2020-03-23\"},\"Islington, England, GBR\":{\"country\":\"United Kingdom\",\"endDate\":\"2020-04-13\",\"level\":\"National\",\"place\":\"\",\"startDate\":\"2020-03-23\"},\"Sunderland, England, GBR\":{\"country\":\"United Kingdom\",\"endDate\":\"2020-04-13\",\"level\":\"National\",\"place\":\"\",\"startDate\":\"2020-03-23\"},\"Derbyshire, England, GBR\":{\"country\":\"United Kingdom\",\"endDate\":\"2020-04-13\",\"level\":\"National\",\"place\":\"\",\"startDate\":\"2020-03-23\"},\"Darlington, England, GBR\":{\"country\":\"United Kingdom\",\"endDate\":\"2020-04-13\",\"level\":\"National\",\"place\":\"\",\"startDate\":\"2020-03-23\"},\"St. Helens, England, GBR\":{\"country\":\"United Kingdom\",\"endDate\":\"2020-04-13\",\"level\":\"National\",\"place\":\"\",\"startDate\":\"2020-03-23\"},\"Manchester, England, GBR\":{\"country\":\"United Kingdom\",\"endDate\":\"2020-04-13\",\"level\":\"National\",\"place\":\"\",\"startDate\":\"2020-03-23\"},\"Calderdale, England, GBR\":{\"country\":\"United Kingdom\",\"endDate\":\"2020-04-13\",\"level\":\"National\",\"place\":\"\",\"startDate\":\"2020-03-23\"},\"Shropshire, England, GBR\":{\"country\":\"United Kingdom\",\"endDate\":\"2020-04-13\",\"level\":\"National\",\"place\":\"\",\"startDate\":\"2020-03-23\"},\"Lancashire, England, GBR\":{\"country\":\"United Kingdom\",\"endDate\":\"2020-04-13\",\"level\":\"National\",\"place\":\"\",\"startDate\":\"2020-03-23\"},\"Birmingham, England, GBR\":{\"country\":\"United Kingdom\",\"endDate\":\"2020-04-13\",\"level\":\"National\",\"place\":\"\",\"startDate\":\"2020-03-23\"},\"Warrington, England, GBR\":{\"country\":\"United Kingdom\",\"endDate\":\"2020-04-13\",\"level\":\"National\",\"place\":\"\",\"startDate\":\"2020-03-23\"},\"Hillingdon, England, GBR\":{\"country\":\"United Kingdom\",\"endDate\":\"2020-04-13\",\"level\":\"National\",\"place\":\"\",\"startDate\":\"2020-03-23\"},\"Wandsworth, England, GBR\":{\"country\":\"United Kingdom\",\"endDate\":\"2020-04-13\",\"level\":\"National\",\"place\":\"\",\"startDate\":\"2020-03-23\"},\"Hartlepool, England, GBR\":{\"country\":\"United Kingdom\",\"endDate\":\"2020-04-13\",\"level\":\"National\",\"place\":\"\",\"startDate\":\"2020-03-23\"},\"Portsmouth, England, GBR\":{\"country\":\"United Kingdom\",\"endDate\":\"2020-04-13\",\"level\":\"National\",\"place\":\"\",\"startDate\":\"2020-03-23\"},\"Nottingham, England, GBR\":{\"country\":\"United Kingdom\",\"endDate\":\"2020-04-13\",\"level\":\"National\",\"place\":\"\",\"startDate\":\"2020-03-23\"},\"Oxfordshire, England, GBR\":{\"country\":\"United Kingdom\",\"endDate\":\"2020-04-13\",\"level\":\"National\",\"place\":\"\",\"startDate\":\"2020-03-23\"},\"Southampton, England, GBR\":{\"country\":\"United Kingdom\",\"endDate\":\"2020-04-13\",\"level\":\"National\",\"place\":\"\",\"startDate\":\"2020-03-23\"},\"East Sussex, England, GBR\":{\"country\":\"United Kingdom\",\"endDate\":\"2020-04-13\",\"level\":\"National\",\"place\":\"\",\"startDate\":\"2020-03-23\"},\"West Sussex, England, GBR\":{\"country\":\"United Kingdom\",\"endDate\":\"2020-04-13\",\"level\":\"National\",\"place\":\"\",\"startDate\":\"2020-03-23\"},\"Westminster, England, GBR\":{\"country\":\"United Kingdom\",\"endDate\":\"2020-04-13\",\"level\":\"National\",\"place\":\"\",\"startDate\":\"2020-03-23\"},\"Warwickshire, England, GBR\":{\"country\":\"United Kingdom\",\"endDate\":\"2020-04-13\",\"level\":\"National\",\"place\":\"\",\"startDate\":\"2020-03-23\"},\"Peterborough, England, GBR\":{\"country\":\"United Kingdom\",\"endDate\":\"2020-04-13\",\"level\":\"National\",\"place\":\"\",\"startDate\":\"2020-03-23\"},\"Lincolnshire, England, GBR\":{\"country\":\"United Kingdom\",\"endDate\":\"2020-04-13\",\"level\":\"National\",\"place\":\"\",\"startDate\":\"2020-03-23\"},\"Lanarkshire, Scotland, GBR\":{\"country\":\"United Kingdom\",\"endDate\":\"2020-04-13\",\"level\":\"National\",\"place\":\"\",\"startDate\":\"2020-03-23\"},\"Wolverhampton, England, GBR\":{\"country\":\"United Kingdom\",\"endDate\":\"2020-04-13\",\"level\":\"National\",\"place\":\"\",\"startDate\":\"2020-03-23\"},\"British Virgin Islands, GBR\":{\"country\":\"United Kingdom\",\"endDate\":\"2020-04-13\",\"level\":\"National\",\"place\":\"\",\"startDate\":\"2020-03-23\"},\"Tower Hamlets, England, GBR\":{\"country\":\"United Kingdom\",\"endDate\":\"2020-04-13\",\"level\":\"National\",\"place\":\"\",\"startDate\":\"2020-03-23\"},\"Hertfordshire, England, GBR\":{\"country\":\"United Kingdom\",\"endDate\":\"2020-04-13\",\"level\":\"National\",\"place\":\"\",\"startDate\":\"2020-03-23\"},\"Isle of Wight, England, GBR\":{\"country\":\"United Kingdom\",\"endDate\":\"2020-04-13\",\"level\":\"National\",\"place\":\"\",\"startDate\":\"2020-03-23\"},\"Staffordshire, England, GBR\":{\"country\":\"United Kingdom\",\"endDate\":\"2020-04-13\",\"level\":\"National\",\"place\":\"\",\"startDate\":\"2020-03-23\"},\"Forth Valley, Scotland, GBR\":{\"country\":\"United Kingdom\",\"endDate\":\"2020-04-13\",\"level\":\"National\",\"place\":\"\",\"startDate\":\"2020-03-23\"},\"County Durham, England, GBR\":{\"country\":\"United Kingdom\",\"endDate\":\"2020-04-13\",\"level\":\"National\",\"place\":\"\",\"startDate\":\"2020-03-23\"},\"Cheshire East, England, GBR\":{\"country\":\"United Kingdom\",\"endDate\":\"2020-04-13\",\"level\":\"National\",\"place\":\"\",\"startDate\":\"2020-03-23\"},\"Middlesbrough, England, GBR\":{\"country\":\"United Kingdom\",\"endDate\":\"2020-04-13\",\"level\":\"National\",\"place\":\"\",\"startDate\":\"2020-03-23\"},\"Milton Keynes, England, GBR\":{\"country\":\"United Kingdom\",\"endDate\":\"2020-04-13\",\"level\":\"National\",\"place\":\"\",\"startDate\":\"2020-03-23\"},\"North Somerset, England, GBR\":{\"country\":\"United Kingdom\",\"endDate\":\"2020-04-13\",\"level\":\"National\",\"place\":\"\",\"startDate\":\"2020-03-23\"},\"Stoke-on-Trent, England, GBR\":{\"country\":\"United Kingdom\",\"endDate\":\"2020-04-13\",\"level\":\"National\",\"place\":\"\",\"startDate\":\"2020-03-23\"},\"Cambridgeshire, England, GBR\":{\"country\":\"United Kingdom\",\"endDate\":\"2020-04-13\",\"level\":\"National\",\"place\":\"\",\"startDate\":\"2020-03-23\"},\"Leicestershire, England, GBR\":{\"country\":\"United Kingdom\",\"endDate\":\"2020-04-13\",\"level\":\"National\",\"place\":\"\",\"startDate\":\"2020-03-23\"},\"Northumberland, England, GBR\":{\"country\":\"United Kingdom\",\"endDate\":\"2020-04-13\",\"level\":\"National\",\"place\":\"\",\"startDate\":\"2020-03-23\"},\"South Tyneside, England, GBR\":{\"country\":\"United Kingdom\",\"endDate\":\"2020-04-13\",\"level\":\"National\",\"place\":\"\",\"startDate\":\"2020-03-23\"},\"North Tyneside, England, GBR\":{\"country\":\"United Kingdom\",\"endDate\":\"2020-04-13\",\"level\":\"National\",\"place\":\"\",\"startDate\":\"2020-03-23\"},\"Waltham Forest, England, GBR\":{\"country\":\"United Kingdom\",\"endDate\":\"2020-04-13\",\"level\":\"National\",\"place\":\"\",\"startDate\":\"2020-03-23\"},\"Worcestershire, England, GBR\":{\"country\":\"United Kingdom\",\"endDate\":\"2020-04-13\",\"level\":\"National\",\"place\":\"\",\"startDate\":\"2020-03-23\"},\"West Berkshire, England, GBR\":{\"country\":\"United Kingdom\",\"endDate\":\"2020-04-13\",\"level\":\"National\",\"place\":\"\",\"startDate\":\"2020-03-23\"},\"Southend-on-Sea, England, GBR\":{\"country\":\"United Kingdom\",\"endDate\":\"2020-04-13\",\"level\":\"National\",\"place\":\"\",\"startDate\":\"2020-03-23\"},\"Gloucestershire, England, GBR\":{\"country\":\"United Kingdom\",\"endDate\":\"2020-04-13\",\"level\":\"National\",\"place\":\"\",\"startDate\":\"2020-03-23\"},\"North Yorkshire, England, GBR\":{\"country\":\"United Kingdom\",\"endDate\":\"2020-04-13\",\"level\":\"National\",\"place\":\"\",\"startDate\":\"2020-03-23\"},\"Turks and Caicos Islands, GBR\":{\"country\":\"United Kingdom\",\"endDate\":\"2020-04-13\",\"level\":\"National\",\"place\":\"\",\"startDate\":\"2020-03-23\"},\"Buckinghamshire, England, GBR\":{\"country\":\"United Kingdom\",\"endDate\":\"2020-04-13\",\"level\":\"National\",\"place\":\"\",\"startDate\":\"2020-03-23\"},\"Nottinghamshire, England, GBR\":{\"country\":\"United Kingdom\",\"endDate\":\"2020-04-13\",\"level\":\"National\",\"place\":\"\",\"startDate\":\"2020-03-23\"},\"Northamptonshire, England, GBR\":{\"country\":\"United Kingdom\",\"endDate\":\"2020-04-13\",\"level\":\"National\",\"place\":\"\",\"startDate\":\"2020-03-23\"},\"Stockton-on-Tees, England, GBR\":{\"country\":\"United Kingdom\",\"endDate\":\"2020-04-13\",\"level\":\"National\",\"place\":\"\",\"startDate\":\"2020-03-23\"},\"Bristol, City of, England, GBR\":{\"country\":\"United Kingdom\",\"endDate\":\"2020-04-13\",\"level\":\"National\",\"place\":\"\",\"startDate\":\"2020-03-23\"},\"Bracknell Forest, England, GBR\":{\"country\":\"United Kingdom\",\"endDate\":\"2020-04-13\",\"level\":\"National\",\"place\":\"\",\"startDate\":\"2020-03-23\"},\"Brighton and Hove, England, GBR\":{\"country\":\"United Kingdom\",\"endDate\":\"2020-04-13\",\"level\":\"National\",\"place\":\"\",\"startDate\":\"2020-03-23\"},\"Telford and Wrekin, England, GBR\":{\"country\":\"United Kingdom\",\"endDate\":\"2020-04-13\",\"level\":\"National\",\"place\":\"\",\"startDate\":\"2020-03-23\"},\"North Lincolnshire, England, GBR\":{\"country\":\"United Kingdom\",\"endDate\":\"2020-04-13\",\"level\":\"National\",\"place\":\"\",\"startDate\":\"2020-03-23\"},\"Ayrshire and Arran, Scotland, GBR\":{\"country\":\"United Kingdom\",\"endDate\":\"2020-04-13\",\"level\":\"National\",\"place\":\"\",\"startDate\":\"2020-03-23\"},\"Ayrshire and Arran, Scotland, GBR\":{\"country\":\"United Kingdom\",\"endDate\":\"2020-04-13\",\"level\":\"National\",\"place\":\"\",\"startDate\":\"2020-03-23\"},\"Newcastle upon Tyne, England, GBR\":{\"country\":\"United Kingdom\",\"endDate\":\"2020-04-13\",\"level\":\"National\",\"place\":\"\",\"startDate\":\"2020-03-23\"},\"Barking and Dagenham, England, GBR\":{\"country\":\"United Kingdom\",\"endDate\":\"2020-04-13\",\"level\":\"National\",\"place\":\"\",\"startDate\":\"2020-03-23\"},\"Kingston upon Thames, England, GBR\":{\"country\":\"United Kingdom\",\"endDate\":\"2020-04-13\",\"level\":\"National\",\"place\":\"\",\"startDate\":\"2020-03-23\"},\"Richmond upon Thames, England, GBR\":{\"country\":\"United Kingdom\",\"endDate\":\"2020-04-13\",\"level\":\"National\",\"place\":\"\",\"startDate\":\"2020-03-23\"},\"Central Bedfordshire, England, GBR\":{\"country\":\"United Kingdom\",\"endDate\":\"2020-04-13\",\"level\":\"National\",\"place\":\"\",\"startDate\":\"2020-03-23\"},\"Redcar and Cleveland, England, GBR\":{\"country\":\"United Kingdom\",\"endDate\":\"2020-04-13\",\"level\":\"National\",\"place\":\"\",\"startDate\":\"2020-03-23\"},\"Blackburn with Darwen, England, GBR\":{\"country\":\"United Kingdom\",\"endDate\":\"2020-04-13\",\"level\":\"National\",\"place\":\"\",\"startDate\":\"2020-03-23\"},\"South Gloucestershire, England, GBR\":{\"country\":\"United Kingdom\",\"endDate\":\"2020-04-13\",\"level\":\"National\",\"place\":\"\",\"startDate\":\"2020-03-23\"},\"Windsor and Maidenhead, England, GBR\":{\"country\":\"United Kingdom\",\"endDate\":\"2020-04-13\",\"level\":\"National\",\"place\":\"\",\"startDate\":\"2020-03-23\"},\"Dumfries and Galloway, Scotland, GBR\":{\"country\":\"United Kingdom\",\"endDate\":\"2020-04-13\",\"level\":\"National\",\"place\":\"\",\"startDate\":\"2020-03-23\"},\"Kensington and Chelsea, England, GBR\":{\"country\":\"United Kingdom\",\"endDate\":\"2020-04-13\",\"level\":\"National\",\"place\":\"\",\"startDate\":\"2020-03-23\"},\"Hammersmith and Fulham, England, GBR\":{\"country\":\"United Kingdom\",\"endDate\":\"2020-04-13\",\"level\":\"National\",\"place\":\"\",\"startDate\":\"2020-03-23\"},\"North East Lincolnshire, England, GBR\":{\"country\":\"United Kingdom\",\"endDate\":\"2020-04-13\",\"level\":\"National\",\"place\":\"\",\"startDate\":\"2020-03-23\"},\"East Riding of Yorkshire, England, GBR\":{\"country\":\"United Kingdom\",\"endDate\":\"2020-04-13\",\"level\":\"National\",\"place\":\"\",\"startDate\":\"2020-03-23\"},\"Herefordshire, County of, England, GBR\":{\"country\":\"United Kingdom\",\"endDate\":\"2020-04-13\",\"level\":\"National\",\"place\":\"\",\"startDate\":\"2020-03-23\"},\"Cheshire West and Chester, England, GBR\":{\"country\":\"United Kingdom\",\"endDate\":\"2020-04-13\",\"level\":\"National\",\"place\":\"\",\"startDate\":\"2020-03-23\"},\"Greater Glasgow and Clyde, Scotland, GBR\":{\"country\":\"United Kingdom\",\"endDate\":\"2020-04-13\",\"level\":\"National\",\"place\":\"\",\"startDate\":\"2020-03-23\"},\"Hackney and City of London, England, GBR\":{\"country\":\"United Kingdom\",\"endDate\":\"2020-04-13\",\"level\":\"National\",\"place\":\"\",\"startDate\":\"2020-03-23\"},\"Kingston upon Hull, City of, England, GBR\":{\"country\":\"United Kingdom\",\"endDate\":\"2020-04-13\",\"level\":\"National\",\"place\":\"\",\"startDate\":\"2020-03-23\"},\"Cornwall and Isles of Scilly, England, GBR\":{\"country\":\"United Kingdom\",\"endDate\":\"2020-04-13\",\"level\":\"National\",\"place\":\"\",\"startDate\":\"2020-03-23\"},\"Bath and North East Somerset, England, GBR\":{\"country\":\"United Kingdom\",\"endDate\":\"2020-04-13\",\"level\":\"National\",\"place\":\"\",\"startDate\":\"2020-03-23\"},\"Eileanan Siar (Western Isles), Scotland, GBR\":{\"country\":\"United Kingdom\",\"endDate\":\"2020-04-13\",\"level\":\"National\",\"place\":\"\",\"startDate\":\"2020-03-23\"},\"Bournemouth, Christchurch and Poole, England, GBR\":{\"country\":\"United Kingdom\",\"endDate\":\"2020-04-13\",\"level\":\"National\",\"place\":\"\",\"startDate\":\"2020-03-23\"},\"Goa, IND\":{\"country\":\"India\",\"endDate\":\"2020-04-14\",\"level\":\"National\",\"place\":\"\",\"startDate\":\"2020-03-24\"},\"Bihar, IND\":{\"country\":\"India\",\"endDate\":\"2020-04-14\",\"level\":\"National\",\"place\":\"\",\"startDate\":\"2020-03-24\"},\"Delhi, IND\":{\"country\":\"India\",\"endDate\":\"2020-04-14\",\"level\":\"National\",\"place\":\"\",\"startDate\":\"2020-03-24\"},\"Ladakh, IND\":{\"country\":\"India\",\"endDate\":\"2020-04-14\",\"level\":\"National\",\"place\":\"\",\"startDate\":\"2020-03-24\"},\"Punjab, IND\":{\"country\":\"India\",\"endDate\":\"2020-04-14\",\"level\":\"National\",\"place\":\"\",\"startDate\":\"2020-03-24\"},\"Odisha, IND\":{\"country\":\"India\",\"endDate\":\"2020-04-14\",\"level\":\"National\",\"place\":\"\",\"startDate\":\"2020-03-24\"},\"Kerala, IND\":{\"country\":\"India\",\"endDate\":\"2020-04-14\",\"level\":\"National\",\"place\":\"\",\"startDate\":\"2020-03-24\"},\"Mizoram, IND\":{\"country\":\"India\",\"endDate\":\"2020-04-14\",\"level\":\"National\",\"place\":\"\",\"startDate\":\"2020-03-24\"},\"Gujarat, IND\":{\"country\":\"India\",\"endDate\":\"2020-04-14\",\"level\":\"National\",\"place\":\"\",\"startDate\":\"2020-03-24\"},\"Haryana, IND\":{\"country\":\"India\",\"endDate\":\"2020-04-14\",\"level\":\"National\",\"place\":\"\",\"startDate\":\"2020-03-24\"},\"Manipur, IND\":{\"country\":\"India\",\"endDate\":\"2020-04-14\",\"level\":\"National\",\"place\":\"\",\"startDate\":\"2020-03-24\"},\"Karnataka, IND\":{\"country\":\"India\",\"endDate\":\"2020-04-14\",\"level\":\"National\",\"place\":\"\",\"startDate\":\"2020-03-24\"},\"Rajasthan, IND\":{\"country\":\"India\",\"endDate\":\"2020-04-14\",\"level\":\"National\",\"place\":\"\",\"startDate\":\"2020-03-24\"},\"Telengana, IND\":{\"country\":\"India\",\"endDate\":\"2020-04-14\",\"level\":\"National\",\"place\":\"\",\"startDate\":\"2020-03-24\"},\"Chandigarh, IND\":{\"country\":\"India\",\"endDate\":\"2020-04-14\",\"level\":\"National\",\"place\":\"\",\"startDate\":\"2020-03-24\"},\"Tamil Nadu, IND\":{\"country\":\"India\",\"endDate\":\"2020-04-14\",\"level\":\"National\",\"place\":\"\",\"startDate\":\"2020-03-24\"},\"Puducherry, IND\":{\"country\":\"India\",\"endDate\":\"2020-04-14\",\"level\":\"National\",\"place\":\"\",\"startDate\":\"2020-03-24\"},\"Uttarakhand, IND\":{\"country\":\"India\",\"endDate\":\"2020-04-14\",\"level\":\"National\",\"place\":\"\",\"startDate\":\"2020-03-24\"},\"West Bengal, IND\":{\"country\":\"India\",\"endDate\":\"2020-04-14\",\"level\":\"National\",\"place\":\"\",\"startDate\":\"2020-03-24\"},\"Maharashtra, IND\":{\"country\":\"India\",\"endDate\":\"2020-04-14\",\"level\":\"National\",\"place\":\"\",\"startDate\":\"2020-03-24\"},\"Chhattisgarh, IND\":{\"country\":\"India\",\"endDate\":\"2020-04-14\",\"level\":\"National\",\"place\":\"\",\"startDate\":\"2020-03-24\"},\"Uttar Pradesh, IND\":{\"country\":\"India\",\"endDate\":\"2020-04-14\",\"level\":\"National\",\"place\":\"\",\"startDate\":\"2020-03-24\"},\"Andhra Pradesh, IND\":{\"country\":\"India\",\"endDate\":\"2020-04-14\",\"level\":\"National\",\"place\":\"\",\"startDate\":\"2020-03-24\"},\"Madhya Pradesh, IND\":{\"country\":\"India\",\"endDate\":\"2020-04-14\",\"level\":\"National\",\"place\":\"\",\"startDate\":\"2020-03-24\"},\"Himachal Pradesh, IND\":{\"country\":\"India\",\"endDate\":\"2020-04-14\",\"level\":\"National\",\"place\":\"\",\"startDate\":\"2020-03-24\"},\"Jammu and Kashmir, IND\":{\"country\":\"India\",\"endDate\":\"2020-04-14\",\"level\":\"National\",\"place\":\"\",\"startDate\":\"2020-03-24\"},\"Andaman and Nicobar Islands, IND\":{\"country\":\"India\",\"endDate\":\"2020-04-14\",\"level\":\"National\",\"place\":\"\",\"startDate\":\"2020-03-24\"},\"Москва, RUS\":{\"country\":\"Russia\",\"endDate\":\"\",\"level\":\"National\",\"place\":\"\",\"startDate\":\"2020-03-30\"},\"Севастополь, RUS\":{\"country\":\"Russia\",\"endDate\":\"\",\"level\":\"National\",\"place\":\"\",\"startDate\":\"2020-03-30\"},\"Пермский край, RUS\":{\"country\":\"Russia\",\"endDate\":\"\",\"level\":\"National\",\"place\":\"\",\"startDate\":\"2020-03-30\"},\"Омская область, RUS\":{\"country\":\"Russia\",\"endDate\":\"\",\"level\":\"National\",\"place\":\"\",\"startDate\":\"2020-03-30\"},\"Алтайский край, RUS\":{\"country\":\"Russia\",\"endDate\":\"\",\"level\":\"National\",\"place\":\"\",\"startDate\":\"2020-03-30\"},\"Приморский край, RUS\":{\"country\":\"Russia\",\"endDate\":\"\",\"level\":\"National\",\"place\":\"\",\"startDate\":\"2020-03-30\"},\"Республика Коми, RUS\":{\"country\":\"Russia\",\"endDate\":\"\",\"level\":\"National\",\"place\":\"\",\"startDate\":\"2020-03-30\"},\"Республика Крым, RUS\":{\"country\":\"Russia\",\"endDate\":\"\",\"level\":\"National\",\"place\":\"\",\"startDate\":\"2020-03-30\"},\"Санкт-Петербург, RUS\":{\"country\":\"Russia\",\"endDate\":\"\",\"level\":\"National\",\"place\":\"\",\"startDate\":\"2020-03-30\"},\"Курская область, RUS\":{\"country\":\"Russia\",\"endDate\":\"\",\"level\":\"National\",\"place\":\"\",\"startDate\":\"2020-03-30\"},\"Томская область, RUS\":{\"country\":\"Russia\",\"endDate\":\"\",\"level\":\"National\",\"place\":\"\",\"startDate\":\"2020-03-30\"},\"Хабаровский край, RUS\":{\"country\":\"Russia\",\"endDate\":\"\",\"level\":\"National\",\"place\":\"\",\"startDate\":\"2020-03-30\"},\"Тульская область, RUS\":{\"country\":\"Russia\",\"endDate\":\"\",\"level\":\"National\",\"place\":\"\",\"startDate\":\"2020-03-30\"},\"Тверская область, RUS\":{\"country\":\"Russia\",\"endDate\":\"\",\"level\":\"National\",\"place\":\"\",\"startDate\":\"2020-03-30\"},\"Липецкая область, RUS\":{\"country\":\"Russia\",\"endDate\":\"\",\"level\":\"National\",\"place\":\"\",\"startDate\":\"2020-03-30\"},\"Амурская область, RUS\":{\"country\":\"Russia\",\"endDate\":\"\",\"level\":\"National\",\"place\":\"\",\"startDate\":\"2020-03-30\"},\"Брянская область, RUS\":{\"country\":\"Russia\",\"endDate\":\"\",\"level\":\"National\",\"place\":\"\",\"startDate\":\"2020-03-30\"},\"Республика Адыгея, RUS\":{\"country\":\"Russia\",\"endDate\":\"\",\"level\":\"National\",\"place\":\"\",\"startDate\":\"2020-03-30\"},\"Псковская область, RUS\":{\"country\":\"Russia\",\"endDate\":\"\",\"level\":\"National\",\"place\":\"\",\"startDate\":\"2020-03-30\"},\"Орловская область, RUS\":{\"country\":\"Russia\",\"endDate\":\"\",\"level\":\"National\",\"place\":\"\",\"startDate\":\"2020-03-30\"},\"Самарская область, RUS\":{\"country\":\"Russia\",\"endDate\":\"\",\"level\":\"National\",\"place\":\"\",\"startDate\":\"2020-03-30\"},\"Красноярский край, RUS\":{\"country\":\"Russia\",\"endDate\":\"\",\"level\":\"National\",\"place\":\"\",\"startDate\":\"2020-03-30\"},\"Тюменская область, RUS\":{\"country\":\"Russia\",\"endDate\":\"\",\"level\":\"National\",\"place\":\"\",\"startDate\":\"2020-03-30\"},\"Кировская область, RUS\":{\"country\":\"Russia\",\"endDate\":\"\",\"level\":\"National\",\"place\":\"\",\"startDate\":\"2020-03-30\"},\"Калужская область, RUS\":{\"country\":\"Russia\",\"endDate\":\"\",\"level\":\"National\",\"place\":\"\",\"startDate\":\"2020-03-30\"},\"Иркутская область, RUS\":{\"country\":\"Russia\",\"endDate\":\"\",\"level\":\"National\",\"place\":\"\",\"startDate\":\"2020-03-30\"},\"Рязанская область, RUS\":{\"country\":\"Russia\",\"endDate\":\"\",\"level\":\"National\",\"place\":\"\",\"startDate\":\"2020-03-30\"},\"Ивановская область, RUS\":{\"country\":\"Russia\",\"endDate\":\"\",\"level\":\"National\",\"place\":\"\",\"startDate\":\"2020-03-30\"},\"Забайкальский край, RUS\":{\"country\":\"Russia\",\"endDate\":\"\",\"level\":\"National\",\"place\":\"\",\"startDate\":\"2020-03-30\"},\"Краснодарский край, RUS\":{\"country\":\"Russia\",\"endDate\":\"\",\"level\":\"National\",\"place\":\"\",\"startDate\":\"2020-03-30\"},\"Московская область, RUS\":{\"country\":\"Russia\",\"endDate\":\"\",\"level\":\"National\",\"place\":\"\",\"startDate\":\"2020-03-30\"},\"Мурманская область, RUS\":{\"country\":\"Russia\",\"endDate\":\"\",\"level\":\"National\",\"place\":\"\",\"startDate\":\"2020-03-30\"},\"Смоленская область, RUS\":{\"country\":\"Russia\",\"endDate\":\"\",\"level\":\"National\",\"place\":\"\",\"startDate\":\"2020-03-30\"},\"Пензенская область, RUS\":{\"country\":\"Russia\",\"endDate\":\"\",\"level\":\"National\",\"place\":\"\",\"startDate\":\"2020-03-30\"},\"Тамбовская область, RUS\":{\"country\":\"Russia\",\"endDate\":\"\",\"level\":\"National\",\"place\":\"\",\"startDate\":\"2020-03-30\"},\"Республика Бурятия, RUS\":{\"country\":\"Russia\",\"endDate\":\"\",\"level\":\"National\",\"place\":\"\",\"startDate\":\"2020-03-30\"},\"Республика Хакасия, RUS\":{\"country\":\"Russia\",\"endDate\":\"\",\"level\":\"National\",\"place\":\"\",\"startDate\":\"2020-03-30\"},\"Республика Чувашия, RUS\":{\"country\":\"Russia\",\"endDate\":\"\",\"level\":\"National\",\"place\":\"\",\"startDate\":\"2020-03-30\"},\"Ростовская область, RUS\":{\"country\":\"Russia\",\"endDate\":\"\",\"level\":\"National\",\"place\":\"\",\"startDate\":\"2020-03-30\"},\"Курганская область, RUS\":{\"country\":\"Russia\",\"endDate\":\"\",\"level\":\"National\",\"place\":\"\",\"startDate\":\"2020-03-30\"},\"Кемеровская область, RUS\":{\"country\":\"Russia\",\"endDate\":\"\",\"level\":\"National\",\"place\":\"\",\"startDate\":\"2020-03-30\"},\"Ярославская область, RUS\":{\"country\":\"Russia\",\"endDate\":\"\",\"level\":\"National\",\"place\":\"\",\"startDate\":\"2020-03-30\"},\"Ханты-Мансийский АО, RUS\":{\"country\":\"Russia\",\"endDate\":\"\",\"level\":\"National\",\"place\":\"\",\"startDate\":\"2020-03-30\"},\"Челябинская область, RUS\":{\"country\":\"Russia\",\"endDate\":\"\",\"level\":\"National\",\"place\":\"\",\"startDate\":\"2020-03-30\"},\"Воронежская область, RUS\":{\"country\":\"Russia\",\"endDate\":\"\",\"level\":\"National\",\"place\":\"\",\"startDate\":\"2020-03-30\"},\"Вологодская область, RUS\":{\"country\":\"Russia\",\"endDate\":\"\",\"level\":\"National\",\"place\":\"\",\"startDate\":\"2020-03-30\"},\"Ставропольский край, RUS\":{\"country\":\"Russia\",\"endDate\":\"\",\"level\":\"National\",\"place\":\"\",\"startDate\":\"2020-03-30\"},\"Ульяновская область, RUS\":{\"country\":\"Russia\",\"endDate\":\"\",\"level\":\"National\",\"place\":\"\",\"startDate\":\"2020-03-30\"},\"Республика Мордовия, RUS\":{\"country\":\"Russia\",\"endDate\":\"\",\"level\":\"National\",\"place\":\"\",\"startDate\":\"2020-03-30\"},\"Республика Марий Эл, RUS\":{\"country\":\"Russia\",\"endDate\":\"\",\"level\":\"National\",\"place\":\"\",\"startDate\":\"2020-03-30\"},\"Магаданская область, RUS\":{\"country\":\"Russia\",\"endDate\":\"\",\"level\":\"National\",\"place\":\"\",\"startDate\":\"2020-03-30\"},\"Республика Калмыкия, RUS\":{\"country\":\"Russia\",\"endDate\":\"\",\"level\":\"National\",\"place\":\"\",\"startDate\":\"2020-03-30\"},\"Республика Дагестан, RUS\":{\"country\":\"Russia\",\"endDate\":\"\",\"level\":\"National\",\"place\":\"\",\"startDate\":\"2020-03-30\"},\"Сахалинская область, RUS\":{\"country\":\"Russia\",\"endDate\":\"\",\"level\":\"National\",\"place\":\"\",\"startDate\":\"2020-03-30\"},\"Костромская область, RUS\":{\"country\":\"Russia\",\"endDate\":\"\",\"level\":\"National\",\"place\":\"\",\"startDate\":\"2020-03-30\"},\"Саратовская область, RUS\":{\"country\":\"Russia\",\"endDate\":\"\",\"level\":\"National\",\"place\":\"\",\"startDate\":\"2020-03-30\"},\"Республика Татарстан, RUS\":{\"country\":\"Russia\",\"endDate\":\"\",\"level\":\"National\",\"place\":\"\",\"startDate\":\"2020-03-30\"},\"Новгородская область, RUS\":{\"country\":\"Russia\",\"endDate\":\"\",\"level\":\"National\",\"place\":\"\",\"startDate\":\"2020-03-30\"},\"Оренбургская область, RUS\":{\"country\":\"Russia\",\"endDate\":\"\",\"level\":\"National\",\"place\":\"\",\"startDate\":\"2020-03-30\"},\"Астраханская область, RUS\":{\"country\":\"Russia\",\"endDate\":\"\",\"level\":\"National\",\"place\":\"\",\"startDate\":\"2020-03-30\"},\"Чеченская Республика, RUS\":{\"country\":\"Russia\",\"endDate\":\"\",\"level\":\"National\",\"place\":\"\",\"startDate\":\"2020-03-30\"},\"Белгородская область, RUS\":{\"country\":\"Russia\",\"endDate\":\"\",\"level\":\"National\",\"place\":\"\",\"startDate\":\"2020-03-30\"},\"Владимирская область, RUS\":{\"country\":\"Russia\",\"endDate\":\"\",\"level\":\"National\",\"place\":\"\",\"startDate\":\"2020-03-30\"},\"Свердловская область, RUS\":{\"country\":\"Russia\",\"endDate\":\"\",\"level\":\"National\",\"place\":\"\",\"startDate\":\"2020-03-30\"},\"Удмуртская Республика, RUS\":{\"country\":\"Russia\",\"endDate\":\"\",\"level\":\"National\",\"place\":\"\",\"startDate\":\"2020-03-30\"},\"Архангельская область, RUS\":{\"country\":\"Russia\",\"endDate\":\"\",\"level\":\"National\",\"place\":\"\",\"startDate\":\"2020-03-30\"},\"Новосибирская область, RUS\":{\"country\":\"Russia\",\"endDate\":\"\",\"level\":\"National\",\"place\":\"\",\"startDate\":\"2020-03-30\"},\"Нижегородская область, RUS\":{\"country\":\"Russia\",\"endDate\":\"\",\"level\":\"National\",\"place\":\"\",\"startDate\":\"2020-03-30\"},\"Волгоградская область, RUS\":{\"country\":\"Russia\",\"endDate\":\"\",\"level\":\"National\",\"place\":\"\",\"startDate\":\"2020-03-30\"},\"Ленинградская область, RUS\":{\"country\":\"Russia\",\"endDate\":\"\",\"level\":\"National\",\"place\":\"\",\"startDate\":\"2020-03-30\"},\"Калининградская область, RUS\":{\"country\":\"Russia\",\"endDate\":\"\",\"level\":\"National\",\"place\":\"\",\"startDate\":\"2020-03-30\"},\"Республика Башкортостан, RUS\":{\"country\":\"Russia\",\"endDate\":\"\",\"level\":\"National\",\"place\":\"\",\"startDate\":\"2020-03-30\"},\"Республика Саха (Якутия), RUS\":{\"country\":\"Russia\",\"endDate\":\"\",\"level\":\"National\",\"place\":\"\",\"startDate\":\"2020-03-30\"},\"Ямало-Ненецкий автономный округ, RUS\":{\"country\":\"Russia\",\"endDate\":\"\",\"level\":\"National\",\"place\":\"\",\"startDate\":\"2020-03-30\"},\"Кабардино-Балкарская Республика, RUS\":{\"country\":\"Russia\",\"endDate\":\"\",\"level\":\"National\",\"place\":\"\",\"startDate\":\"2020-03-30\"},\"Республика Северная Осетия — Алания, RUS\":{\"country\":\"Russia\",\"endDate\":\"\",\"level\":\"National\",\"place\":\"\",\"startDate\":\"2020-03-30\"}}");

/***/ }),

/***/ "./src/assets/country-names-by-code.json":
/*!***********************************************!*\
  !*** ./src/assets/country-names-by-code.json ***!
  \***********************************************/
/*! exports provided: ABW, AFG, AGO, AIA, ALA, ALB, AND, ANT, ARE, ARG, ARM, ASM, ATA, ATF, ATG, AUS, AUT, AZE, BDI, BEL, BEN, BFA, BGD, BGR, BHR, BHS, BIH, BLM, BLR, BLZ, BMU, BOL, BRA, BRB, BRN, BTN, BVT, BWA, CAF, CAN, CCK, CHE, CHL, CHN, CIV, CMR, COD, COG, COK, COL, COM, CPV, CRI, CUB, CXR, CYM, CYP, CZE, DEU, DJI, DMA, DNK, DOM, DZA, ECU, EGY, ERI, ESH, ESP, EST, ETH, FIN, FJI, FLK, FRA, FRO, FSM, GAB, GBR, GEO, GGY, GHA, GIB, GIN, GLP, GMB, GNB, GNQ, GRC, GRD, GRL, GTM, GUF, GUM, GUY, HKG, HMD, HND, HRV, HTI, HUN, IDN, IMN, IND, IOT, IRL, IRN, IRQ, ISL, ISR, ITA, JAM, JEY, JOR, JPN, KAZ, KEN, KGZ, KHM, KIR, KNA, KOR, KWT, LAO, LBN, LBR, LBY, LCA, LIE, LKA, LSO, LTU, LUX, LVA, MAC, MAF, MAR, MCO, MDA, MDG, MDV, MEX, MHL, MKD, MLI, MLT, MMR, MNE, MNG, MNP, MOZ, MRT, MSR, MTQ, MUS, MWI, MYS, MYT, NAM, NCL, NER, NFK, NGA, NIC, NIU, NLD, NOR, NPL, NRU, NZL, OMN, PAK, PAN, PCN, PER, PHL, PLW, PNG, POL, PRI, PRK, PRT, PRY, PSE, PYF, QAT, REU, ROU, RUS, RWA, SAU, SDN, SEN, SGP, SGS, SHN, SJM, SLB, SLE, SLV, SMR, SOM, SPM, SRB, STP, SUR, SVK, SVN, SWE, SWZ, SYC, SYR, TCA, TCD, TGO, THA, TJK, TKL, TKM, TLS, TON, TTO, TUN, TUR, TUV, TWN, TZA, UGA, UKR, UMI, URY, USA, UZB, VAT, VCT, VEN, VGB, VIR, VNM, VUT, WLF, WSM, YEM, ZAF, ZMB, ZWE, default */
/***/ (function(module) {

module.exports = JSON.parse("{\"ABW\":\"Aruba\",\"AFG\":\"Afghanistan\",\"AGO\":\"Angola\",\"AIA\":\"Anguilla\",\"ALA\":\"Åland Islands\",\"ALB\":\"Albania\",\"AND\":\"Andorra\",\"ANT\":\"Netherlands Antilles\",\"ARE\":\"United Arab Emirates\",\"ARG\":\"Argentina\",\"ARM\":\"Armenia\",\"ASM\":\"American Samoa\",\"ATA\":\"Antarctica\",\"ATF\":\"French Southern Territories\",\"ATG\":\"Antigua and Barbuda\",\"AUS\":\"Australia\",\"AUT\":\"Austria\",\"AZE\":\"Azerbaijan\",\"BDI\":\"Burundi\",\"BEL\":\"Belgium\",\"BEN\":\"Benin\",\"BFA\":\"Burkina Faso\",\"BGD\":\"Bangladesh\",\"BGR\":\"Bulgaria\",\"BHR\":\"Bahrain\",\"BHS\":\"Bahamas\",\"BIH\":\"Bosnia and Herzegovina\",\"BLM\":\"Saint Barthélemy\",\"BLR\":\"Belarus\",\"BLZ\":\"Belize\",\"BMU\":\"Bermuda\",\"BOL\":\"Bolivia\",\"BRA\":\"Brazil\",\"BRB\":\"Barbados\",\"BRN\":\"Brunei Darussalam\",\"BTN\":\"Bhutan\",\"BVT\":\"Bouvet Island\",\"BWA\":\"Botswana\",\"CAF\":\"Central African Republic\",\"CAN\":\"Canada\",\"CCK\":\"Cocos (Keeling) Islands\",\"CHE\":\"Switzerland\",\"CHL\":\"Chile\",\"CHN\":\"China\",\"CIV\":\"Côte d'Ivoire\",\"CMR\":\"Cameroon\",\"COD\":\"Congo\",\"COG\":\"Congo\",\"COK\":\"Cook Islands\",\"COL\":\"Colombia\",\"COM\":\"Comoros\",\"CPV\":\"Cape Verde\",\"CRI\":\"Costa Rica\",\"CUB\":\"Cuba\",\"CXR\":\"Christmas Island\",\"CYM\":\"Cayman Islands\",\"CYP\":\"Cyprus\",\"CZE\":\"Czech Republic\",\"DEU\":\"Germany\",\"DJI\":\"Djibouti\",\"DMA\":\"Dominica\",\"DNK\":\"Denmark\",\"DOM\":\"Dominican Republic\",\"DZA\":\"Algeria\",\"ECU\":\"Ecuador\",\"EGY\":\"Egypt\",\"ERI\":\"Eritrea\",\"ESH\":\"Western Sahara\",\"ESP\":\"Spain\",\"EST\":\"Estonia\",\"ETH\":\"Ethiopia\",\"FIN\":\"Finland\",\"FJI\":\"Fiji\",\"FLK\":\"Falkland Islands (Malvinas)\",\"FRA\":\"France\",\"FRO\":\"Faroe Islands\",\"FSM\":\"Micronesia, Federated States of\",\"GAB\":\"Gabon\",\"GBR\":\"United Kingdom\",\"GEO\":\"Georgia\",\"GGY\":\"Guernsey\",\"GHA\":\"Ghana\",\"GIB\":\"Gibraltar\",\"GIN\":\"Guinea\",\"GLP\":\"Guadeloupe\",\"GMB\":\"Gambia\",\"GNB\":\"Guinea-Bissau\",\"GNQ\":\"Equatorial Guinea\",\"GRC\":\"Greece\",\"GRD\":\"Grenada\",\"GRL\":\"Greenland\",\"GTM\":\"Guatemala\",\"GUF\":\"French Guiana\",\"GUM\":\"Guam\",\"GUY\":\"Guyana\",\"HKG\":\"Hong Kong\",\"HMD\":\"Heard Island and McDonald Islands\",\"HND\":\"Honduras\",\"HRV\":\"Croatia\",\"HTI\":\"Haiti\",\"HUN\":\"Hungary\",\"IDN\":\"Indonesia\",\"IMN\":\"Isle of Man\",\"IND\":\"India\",\"IOT\":\"British Indian Ocean Territory\",\"IRL\":\"Ireland\",\"IRN\":\"Iran\",\"IRQ\":\"Iraq\",\"ISL\":\"Iceland\",\"ISR\":\"Israel\",\"ITA\":\"Italy\",\"JAM\":\"Jamaica\",\"JEY\":\"Jersey\",\"JOR\":\"Jordan\",\"JPN\":\"Japan\",\"KAZ\":\"Kazakhstan\",\"KEN\":\"Kenya\",\"KGZ\":\"Kyrgyzstan\",\"KHM\":\"Cambodia\",\"KIR\":\"Kiribati\",\"KNA\":\"Saint Kitts and Nevis\",\"KOR\":\"South Korea\",\"KWT\":\"Kuwait\",\"LAO\":\"Lao People's Democratic Republic\",\"LBN\":\"Lebanon\",\"LBR\":\"Liberia\",\"LBY\":\"Libya\",\"LCA\":\"Saint Lucia\",\"LIE\":\"Liechtenstein\",\"LKA\":\"Sri Lanka\",\"LSO\":\"Lesotho\",\"LTU\":\"Lithuania\",\"LUX\":\"Luxembourg\",\"LVA\":\"Latvia\",\"MAC\":\"Macao\",\"MAF\":\"Saint Martin (French part)\",\"MAR\":\"Morocco\",\"MCO\":\"Monaco\",\"MDA\":\"Moldova\",\"MDG\":\"Madagascar\",\"MDV\":\"Maldives\",\"MEX\":\"Mexico\",\"MHL\":\"Marshall Islands\",\"MKD\":\"Macedonia\",\"MLI\":\"Mali\",\"MLT\":\"Malta\",\"MMR\":\"Myanmar\",\"MNE\":\"Montenegro\",\"MNG\":\"Mongolia\",\"MNP\":\"Northern Mariana Islands\",\"MOZ\":\"Mozambique\",\"MRT\":\"Mauritania\",\"MSR\":\"Montserrat\",\"MTQ\":\"Martinique\",\"MUS\":\"Mauritius\",\"MWI\":\"Malawi\",\"MYS\":\"Malaysia\",\"MYT\":\"Mayotte\",\"NAM\":\"Namibia\",\"NCL\":\"New Caledonia\",\"NER\":\"Niger\",\"NFK\":\"Norfolk Island\",\"NGA\":\"Nigeria\",\"NIC\":\"Nicaragua\",\"NIU\":\"Niue\",\"NLD\":\"Netherlands\",\"NOR\":\"Norway\",\"NPL\":\"Nepal\",\"NRU\":\"Nauru\",\"NZL\":\"New Zealand\",\"OMN\":\"Oman\",\"PAK\":\"Pakistan\",\"PAN\":\"Panama\",\"PCN\":\"Pitcairn\",\"PER\":\"Peru\",\"PHL\":\"Philippines\",\"PLW\":\"Palau\",\"PNG\":\"Papua New Guinea\",\"POL\":\"Poland\",\"PRI\":\"Puerto Rico\",\"PRK\":\"North Korea\",\"PRT\":\"Portugal\",\"PRY\":\"Paraguay\",\"PSE\":\"Palestinian Territory, Occupied\",\"PYF\":\"French Polynesia\",\"QAT\":\"Qatar\",\"REU\":\"Réunion\",\"ROU\":\"Romania\",\"RUS\":\"Russia\",\"RWA\":\"Rwanda\",\"SAU\":\"Saudi Arabia\",\"SDN\":\"Sudan\",\"SEN\":\"Senegal\",\"SGP\":\"Singapore\",\"SGS\":\"South Georgia and the South Sandwich Islands\",\"SHN\":\"Saint Helena, Ascension and Tristan da Cunha\",\"SJM\":\"Svalbard and Jan Mayen\",\"SLB\":\"Solomon Islands\",\"SLE\":\"Sierra Leone\",\"SLV\":\"El Salvador\",\"SMR\":\"San Marino\",\"SOM\":\"Somalia\",\"SPM\":\"Saint Pierre and Miquelon\",\"SRB\":\"Serbia\",\"STP\":\"Sao Tome and Principe\",\"SUR\":\"Suriname\",\"SVK\":\"Slovakia\",\"SVN\":\"Slovenia\",\"SWE\":\"Sweden\",\"SWZ\":\"Swaziland\",\"SYC\":\"Seychelles\",\"SYR\":\"Syrian Arab Republic\",\"TCA\":\"Turks and Caicos Islands\",\"TCD\":\"Chad\",\"TGO\":\"Togo\",\"THA\":\"Thailand\",\"TJK\":\"Tajikistan\",\"TKL\":\"Tokelau\",\"TKM\":\"Turkmenistan\",\"TLS\":\"Timor-Leste\",\"TON\":\"Tonga\",\"TTO\":\"Trinidad and Tobago\",\"TUN\":\"Tunisia\",\"TUR\":\"Turkey\",\"TUV\":\"Tuvalu\",\"TWN\":\"Taiwan\",\"TZA\":\"Tanzania\",\"UGA\":\"Uganda\",\"UKR\":\"Ukraine\",\"UMI\":\"United States Minor Outlying Islands\",\"URY\":\"Uruguay\",\"USA\":\"United States\",\"UZB\":\"Uzbekistan\",\"VAT\":\"Holy See (Vatican City State)\",\"VCT\":\"Saint Vincent and the Grenadines\",\"VEN\":\"Venezuela\",\"VGB\":\"Virgin Islands, British\",\"VIR\":\"Virgin Islands, U.S.\",\"VNM\":\"Viet Nam\",\"VUT\":\"Vanuatu\",\"WLF\":\"Wallis and Futuna\",\"WSM\":\"Samoa\",\"YEM\":\"Yemen\",\"ZAF\":\"South Africa\",\"ZMB\":\"Zambia\",\"ZWE\":\"Zimbabwe\"}");

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