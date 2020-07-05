import { __decorate } from "tslib";
import { Component, EventEmitter, Input, Output, } from '@angular/core';
var ChartLegendComponent = /** @class */ (function () {
    function ChartLegendComponent() {
        this.keys = [];
        this.colorsByKey = {};
        this.disabledKeys = new Set();
        this.disabledKeysChange = new EventEmitter();
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
    __decorate([
        Input()
    ], ChartLegendComponent.prototype, "keys", void 0);
    __decorate([
        Input()
    ], ChartLegendComponent.prototype, "colorsByKey", void 0);
    __decorate([
        Input()
    ], ChartLegendComponent.prototype, "disabledKeys", void 0);
    __decorate([
        Input()
    ], ChartLegendComponent.prototype, "labelsByKey", void 0);
    __decorate([
        Output()
    ], ChartLegendComponent.prototype, "disabledKeysChange", void 0);
    ChartLegendComponent = __decorate([
        Component({
            selector: 'dwu-chart-legend',
            templateUrl: './chart-legend.component.html',
            styleUrls: ['./chart-legend.component.scss'],
        })
    ], ChartLegendComponent);
    return ChartLegendComponent;
}());
export { ChartLegendComponent };
//# sourceMappingURL=chart-legend.component.js.map