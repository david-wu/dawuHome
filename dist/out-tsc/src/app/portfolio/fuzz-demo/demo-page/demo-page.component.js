import { __assign, __decorate } from "tslib";
import { Component, ViewChild } from '@angular/core';
import * as faker from 'faker';
import { Fuzz } from 'fuzz-js';
var DemoPageComponent = /** @class */ (function () {
    /**
     * constructor
     */
    function DemoPageComponent(changeDetectorRef, breakpointObserver, mediaMatcher) {
        var _this = this;
        this.changeDetectorRef = changeDetectorRef;
        this.breakpointObserver = breakpointObserver;
        this.mediaMatcher = mediaMatcher;
        this.headerTabsRight = [];
        this.headerTabsLeft = [];
        this.lowerTabs = [];
        this.fuzz = new Fuzz();
        this.filterSortQuery = '';
        this.filterSortTime = 0;
        this.fakeDataSize = 30;
        this.searchOptions = {};
        this.fuseJsFilterQuery = '';
        this.generateFakeData();
        this.onFilterSortQueryChange(this.filterSortQuery);
        // This should actually use ResizeSensor
        // breakpointObserver uses the browser-window max-width, not hostElement's width
        this.breakpointObserver.observe([
            '(max-width: 949px)'
        ])
            .subscribe(function (res) {
            _this.isSmallScreen = _this.mediaMatcher.matchMedia('(max-width: 949px)').matches;
        });
    }
    DemoPageComponent.prototype.ngAfterViewInit = function () {
        this.headerTabsLeft = [
            {
                tabTemplate: this.fuzzSearchOptionsTab,
                pageTemplate: this.fuzzSearchOptionsPage,
            },
            {
                tabTemplate: this.fuzzSearchTab,
                pageTemplate: this.fuzzSearchPage,
            },
        ];
        this.selectedLeftHeaderTab = this.headerTabsLeft[1];
        this.headerTabsRight = [
            {
                tabTemplate: this.fuzzDataTab,
                pageTemplate: this.fuzzDataPage,
            },
            {
                tabTemplate: this.fuzzSearchResultsTab,
                pageTemplate: this.fuzzSearchResultsPage,
            },
        ];
        this.selectedRightHeaderTab = this.headerTabsRight[0];
        this.lowerTabs = [
            {
                tabTemplate: this.fuzzItemDebuggerTab,
                pageTemplate: this.fuzzItemDebuggerPage,
            },
            {
                tabTemplate: this.fuzzalyticsTab,
                pageTemplate: this.fuzzalyticsPage,
            },
        ];
        this.changeDetectorRef.detectChanges();
    };
    DemoPageComponent.prototype.onSearchOptionsChange = function (searchOptions) {
        this.searchOptions = __assign(__assign({}, this.searchOptions), searchOptions);
        this.runQuery();
    };
    /**
     * onFilterSortQueryChange
     */
    DemoPageComponent.prototype.onFilterSortQueryChange = function (filterSortQuery) {
        this.filterSortQuery = filterSortQuery;
        this.runQuery();
        // this.runFuseQuery();
    };
    DemoPageComponent.prototype.allItemsStringChange = function (allItemsString) {
        this.allItemsString = allItemsString;
        try {
            this.setAllItems(JSON.parse(allItemsString));
        }
        catch (error) {
            this.parseError = error;
        }
    };
    DemoPageComponent.prototype.generateFakeData = function () {
        var allItems = [];
        for (var i = 0; i < this.fakeDataSize; i++) {
            var siblingCount = Math.floor(Math.random() * 3);
            var siblings = [];
            for (var j = 0; j <= siblingCount; j++) {
                siblings.push(faker.name.findName());
            }
            allItems.push({
                name: faker.name.findName(),
                siblings: siblings,
            });
        }
        this.setAllItems(allItems);
        this.allItemsString = JSON.stringify(allItems, null, 2);
    };
    DemoPageComponent.prototype.generateFlatFakeData = function () {
        var allItems = [];
        for (var i = 0; i < this.fakeDataSize; i++) {
            allItems.push({
                name: faker.name.findName(),
                email: faker.internet.email(),
                city: faker.address.city(),
            });
        }
        this.setAllItems(allItems);
        this.allItemsString = JSON.stringify(allItems, null, 2);
    };
    DemoPageComponent.prototype.setAllItems = function (allItems) {
        this.allItems = allItems;
        this.parseError = undefined;
        this.searchOptions = __assign(__assign({}, this.searchOptions), { subjectKeys: Fuzz.getAllKeys(allItems) });
        this.runQuery();
        // this.runFuseQuery();
    };
    DemoPageComponent.prototype.runQuery = function () {
        this.filterSortTime = Date.now();
        this.filterSortedItems = this.fuzz.search(this.allItems, this.filterSortQuery, this.searchOptions);
        this.filterSortTime = Date.now() - this.filterSortTime;
    };
    Object.defineProperty(DemoPageComponent.prototype, "freshestFuzzItem", {
        // if the selected fuzz item is no longer returned in the filter results
        // this will still grab it from the index in Fuzz.diagnostics (using object ref of original)
        get: function () {
            if (!this.selectedFuzzItem) {
                return;
            }
            return this.fuzz.diagnostics.allFuzzItemsByKeyByOriginal
                .get(this.selectedFuzzItem.original)[this.selectedFuzzItem.key];
        },
        enumerable: false,
        configurable: true
    });
    __decorate([
        ViewChild('fuzzSearchTab', { static: true })
    ], DemoPageComponent.prototype, "fuzzSearchTab", void 0);
    __decorate([
        ViewChild('fuzzSearchPage', { static: true })
    ], DemoPageComponent.prototype, "fuzzSearchPage", void 0);
    __decorate([
        ViewChild('fuzzDataTab', { static: true })
    ], DemoPageComponent.prototype, "fuzzDataTab", void 0);
    __decorate([
        ViewChild('fuzzDataPage', { static: true })
    ], DemoPageComponent.prototype, "fuzzDataPage", void 0);
    __decorate([
        ViewChild('fuzzItemDebuggerTab', { static: true })
    ], DemoPageComponent.prototype, "fuzzItemDebuggerTab", void 0);
    __decorate([
        ViewChild('fuzzItemDebuggerPage', { static: true })
    ], DemoPageComponent.prototype, "fuzzItemDebuggerPage", void 0);
    __decorate([
        ViewChild('fuzzSearchOptionsTab', { static: true })
    ], DemoPageComponent.prototype, "fuzzSearchOptionsTab", void 0);
    __decorate([
        ViewChild('fuzzSearchOptionsPage', { static: true })
    ], DemoPageComponent.prototype, "fuzzSearchOptionsPage", void 0);
    __decorate([
        ViewChild('fuzzSearchResultsTab', { static: true })
    ], DemoPageComponent.prototype, "fuzzSearchResultsTab", void 0);
    __decorate([
        ViewChild('fuzzSearchResultsPage', { static: true })
    ], DemoPageComponent.prototype, "fuzzSearchResultsPage", void 0);
    __decorate([
        ViewChild('fuzzalyticsTab', { static: true })
    ], DemoPageComponent.prototype, "fuzzalyticsTab", void 0);
    __decorate([
        ViewChild('fuzzalyticsPage', { static: true })
    ], DemoPageComponent.prototype, "fuzzalyticsPage", void 0);
    __decorate([
        ViewChild('fuseJsSearchTab', { static: true })
    ], DemoPageComponent.prototype, "fuseJsSearchTab", void 0);
    __decorate([
        ViewChild('fuseJsSearchPage', { static: true })
    ], DemoPageComponent.prototype, "fuseJsSearchPage", void 0);
    DemoPageComponent = __decorate([
        Component({
            selector: 'app-demo-page',
            templateUrl: './demo-page.component.html',
            styleUrls: [
                './demo-page.component.scss',
                '../styles/text-area-container.scss',
            ]
        })
    ], DemoPageComponent);
    return DemoPageComponent;
}());
export { DemoPageComponent };
//# sourceMappingURL=demo-page.component.js.map