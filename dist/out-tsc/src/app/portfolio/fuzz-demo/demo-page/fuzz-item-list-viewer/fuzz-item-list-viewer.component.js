import { __decorate } from "tslib";
import { Component, EventEmitter, Input, Output, ViewChild, ViewEncapsulation } from '@angular/core';
import { scrollIntoView } from '../../utils/scroll-into-view';
var FuzzItemListViewerComponent = /** @class */ (function () {
    function FuzzItemListViewerComponent(hostEl) {
        this.hostEl = hostEl;
        this.selectedFuzzItemChange = new EventEmitter();
    }
    FuzzItemListViewerComponent.prototype.ngOnChanges = function (changes) {
        if (changes.fuzzItems || changes.selectedFuzzItem) {
            // something buggy, figure out later
            // this.scrollSelectedFuzzItemIntoView();
        }
        if (changes.fuzzItems) {
            if (!this.fuzzItems.includes(this.selectedFuzzItem)) {
                this.hostEl.nativeElement.scroll(0, 0);
            }
        }
    };
    FuzzItemListViewerComponent.prototype.scrollSelectedFuzzItemIntoView = function () {
        var _this = this;
        if (!this.table) {
            return;
        }
        var selectedRowIndex = this.fuzzItems.findIndex(function (fuzzItem) {
            return fuzzItem === _this.selectedFuzzItem;
        });
        if (selectedRowIndex !== -1) {
            var rowEls = this.table.nativeElement.getElementsByClassName('marker-class-for-scrolling-into-view');
            if (rowEls[selectedRowIndex]) {
                scrollIntoView(this.hostEl.nativeElement, rowEls[selectedRowIndex]);
            }
        }
    };
    FuzzItemListViewerComponent.prototype.selectFuzzItem = function (fuzzItem) {
        this.selectedFuzzItem = (this.selectedFuzzItem === fuzzItem) ? undefined : fuzzItem;
        this.selectedFuzzItemChange.emit(this.selectedFuzzItem);
    };
    /**
     * remove this someday
     */
    FuzzItemListViewerComponent.prototype.get = function (item, keysString) {
        var keys = keysString.split('.');
        for (var i = 0; i < keys.length; i++) {
            if (!item) {
                return '';
            }
            item = item[keys[i]];
        }
        return item;
    };
    __decorate([
        Input()
    ], FuzzItemListViewerComponent.prototype, "filterSortKeys", void 0);
    __decorate([
        Input()
    ], FuzzItemListViewerComponent.prototype, "fuzzItems", void 0);
    __decorate([
        Input()
    ], FuzzItemListViewerComponent.prototype, "selectedFuzzItem", void 0);
    __decorate([
        Output()
    ], FuzzItemListViewerComponent.prototype, "selectedFuzzItemChange", void 0);
    __decorate([
        ViewChild('table', { static: true })
    ], FuzzItemListViewerComponent.prototype, "table", void 0);
    FuzzItemListViewerComponent = __decorate([
        Component({
            selector: 'app-fuzz-item-list-viewer',
            templateUrl: './fuzz-item-list-viewer.component.html',
            styleUrls: ['./fuzz-item-list-viewer.component.scss'],
            encapsulation: ViewEncapsulation.None,
        })
    ], FuzzItemListViewerComponent);
    return FuzzItemListViewerComponent;
}());
export { FuzzItemListViewerComponent };
//# sourceMappingURL=fuzz-item-list-viewer.component.js.map