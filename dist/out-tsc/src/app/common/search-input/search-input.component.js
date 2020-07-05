import { __decorate } from "tslib";
import { Component, EventEmitter, Input, Output, } from '@angular/core';
var SearchInputComponent = /** @class */ (function () {
    function SearchInputComponent() {
        this.searchText = '';
        this.placeholder = 'search..';
        this.searchTextChange = new EventEmitter();
    }
    __decorate([
        Input()
    ], SearchInputComponent.prototype, "searchText", void 0);
    __decorate([
        Input()
    ], SearchInputComponent.prototype, "placeholder", void 0);
    __decorate([
        Output()
    ], SearchInputComponent.prototype, "searchTextChange", void 0);
    SearchInputComponent = __decorate([
        Component({
            selector: 'dwu-search-input',
            templateUrl: './search-input.component.html',
            styleUrls: ['./search-input.component.scss'],
        })
    ], SearchInputComponent);
    return SearchInputComponent;
}());
export { SearchInputComponent };
//# sourceMappingURL=search-input.component.js.map