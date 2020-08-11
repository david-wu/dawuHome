import { __decorate } from "tslib";
import { Component, Input, HostBinding, ViewChild, } from '@angular/core';
var TooltipComponent = /** @class */ (function () {
    function TooltipComponent(hostEl, tts) {
        this.hostEl = hostEl;
        this.tts = tts;
        this.tabIndex = '0';
    }
    TooltipComponent.prototype.ngAfterViewInit = function () {
        this.tts.registerTooltip(this.hostEl.nativeElement, this.customTemplate || this.defaultTemplate);
    };
    __decorate([
        Input()
    ], TooltipComponent.prototype, "text", void 0);
    __decorate([
        Input()
    ], TooltipComponent.prototype, "template", void 0);
    __decorate([
        Input()
    ], TooltipComponent.prototype, "customTemplate", void 0);
    __decorate([
        ViewChild('defaultTemplate', { static: false })
    ], TooltipComponent.prototype, "defaultTemplate", void 0);
    __decorate([
        HostBinding('attr.tabindex')
    ], TooltipComponent.prototype, "tabIndex", void 0);
    TooltipComponent = __decorate([
        Component({
            selector: 'dwu-tooltip',
            templateUrl: './tooltip.component.html',
            styleUrls: ['./tooltip.component.scss'],
        })
    ], TooltipComponent);
    return TooltipComponent;
}());
export { TooltipComponent };
//# sourceMappingURL=tooltip.component.js.map