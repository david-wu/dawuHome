import { __decorate } from "tslib";
import { Component, HostBinding, } from '@angular/core';
var TooltipViewComponent = /** @class */ (function () {
    function TooltipViewComponent(hostEl) {
        this.hostEl = hostEl;
        // public top: number;
        // public left: number;
        this.top = '0';
        this.left = '0';
    }
    __decorate([
        HostBinding('style.top')
    ], TooltipViewComponent.prototype, "top", void 0);
    __decorate([
        HostBinding('style.left')
    ], TooltipViewComponent.prototype, "left", void 0);
    TooltipViewComponent = __decorate([
        Component({
            selector: 'dwu-tooltip-view',
            templateUrl: './tooltip-view.component.html',
            styleUrls: ['./tooltip-view.component.scss'],
        })
    ], TooltipViewComponent);
    return TooltipViewComponent;
}());
export { TooltipViewComponent };
//# sourceMappingURL=tooltip-view.component.js.map