import { __decorate } from "tslib";
import { Component, } from '@angular/core';
var BarChartDemoComponent = /** @class */ (function () {
    function BarChartDemoComponent() {
        this.demoKeys = [
            'dogs',
        ];
        this.demoData = this.generateDemoData();
    }
    BarChartDemoComponent.prototype.generateDemoData = function () {
        var now = Date.now();
        var demoData = [];
        var period = 1000 * 60 * 60 * 24;
        for (var i = 0; i < 20; i++) {
            demoData.push({
                timestamp: now - (i * period),
                dogs: Math.floor(Math.random() * 10) + 3,
            });
        }
        return demoData;
    };
    BarChartDemoComponent = __decorate([
        Component({
            selector: 'dwu-bar-chart-demo',
            templateUrl: './bar-chart-demo.component.html',
            styleUrls: ['./bar-chart-demo.component.scss'],
        })
    ], BarChartDemoComponent);
    return BarChartDemoComponent;
}());
export { BarChartDemoComponent };
//# sourceMappingURL=bar-chart-demo.component.js.map