import { __decorate, __read, __spread } from "tslib";
import { Component, Input, } from '@angular/core';
import { round } from 'lodash';
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
        var keys = __spread(this.keys);
        while (keys.length) {
            var columnKeys = keys.splice(0, this.rowCount);
            var columnValues = columnKeys.map(function (columnKey) {
                var cellValue = _this.columnData[columnKey];
                if (_this.formattersByKeys[columnKey]) {
                    return _this.formattersByKeys[columnKey](cellValue);
                }
                if (typeof cellValue === 'number') {
                    return round(cellValue, 2).toLocaleString();
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
    __decorate([
        Input()
    ], StatViewerComponent.prototype, "columnData", void 0);
    __decorate([
        Input()
    ], StatViewerComponent.prototype, "keys", void 0);
    __decorate([
        Input()
    ], StatViewerComponent.prototype, "disabledKeys", void 0);
    __decorate([
        Input()
    ], StatViewerComponent.prototype, "labelsByKey", void 0);
    __decorate([
        Input()
    ], StatViewerComponent.prototype, "rowCount", void 0);
    __decorate([
        Input()
    ], StatViewerComponent.prototype, "formattersByKeys", void 0);
    StatViewerComponent = __decorate([
        Component({
            selector: 'dwu-stat-viewer',
            templateUrl: './stat-viewer.component.html',
            styleUrls: ['./stat-viewer.component.scss'],
        })
    ], StatViewerComponent);
    return StatViewerComponent;
}());
export { StatViewerComponent };
//# sourceMappingURL=stat-viewer.component.js.map