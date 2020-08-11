import { __decorate, __read, __spread } from "tslib";
import { Component, EventEmitter, Input, Output } from '@angular/core';
var TabbedWindowComponent = /** @class */ (function () {
    function TabbedWindowComponent() {
        this.headerTabs = [];
        this.footerTabs = [];
        this.canUnselect = false;
        this.activeTabChange = new EventEmitter();
    }
    TabbedWindowComponent.prototype.ngOnChanges = function (changes) {
        if (changes.activeTab || changes.headerTabs || changes.footerTabs) {
            var allTabs = __spread(this.headerTabs, this.footerTabs);
            this.activeTab = allTabs.includes(this.activeTab)
                ? this.activeTab
                : allTabs[0];
        }
    };
    TabbedWindowComponent.prototype.selectActiveTab = function (activeTab) {
        this.activeTab = (this.canUnselect && (this.activeTab === activeTab)) ? undefined : activeTab;
        this.activeTabChange.emit(activeTab);
    };
    __decorate([
        Input()
    ], TabbedWindowComponent.prototype, "headerTabs", void 0);
    __decorate([
        Input()
    ], TabbedWindowComponent.prototype, "footerTabs", void 0);
    __decorate([
        Input()
    ], TabbedWindowComponent.prototype, "activeTab", void 0);
    __decorate([
        Input()
    ], TabbedWindowComponent.prototype, "canUnselect", void 0);
    __decorate([
        Output()
    ], TabbedWindowComponent.prototype, "activeTabChange", void 0);
    TabbedWindowComponent = __decorate([
        Component({
            selector: 'app-tabbed-window',
            templateUrl: './tabbed-window.component.html',
            styleUrls: ['./tabbed-window.component.scss']
        })
    ], TabbedWindowComponent);
    return TabbedWindowComponent;
}());
export { TabbedWindowComponent };
//# sourceMappingURL=tabbed-window.component.js.map