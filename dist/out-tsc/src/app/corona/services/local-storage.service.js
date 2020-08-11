import { __decorate } from "tslib";
import { Injectable } from '@angular/core';
var LocalStorageService = /** @class */ (function () {
    function LocalStorageService() {
    }
    LocalStorageService.prototype.setFavoriteLocations = function (locations) {
        if (locations === void 0) { locations = []; }
        var locationsStr = JSON.stringify(locations);
        localStorage.setItem('favorites-jh', locationsStr);
    };
    LocalStorageService.prototype.getFavoriteLocations = function () {
        var locationsStr = localStorage.getItem('favorites-jh') || '[]';
        var locations = JSON.parse(locationsStr);
        return locations.length ? locations : [
            'US',
            'US_California',
            'US_California_Santa-Clara',
        ];
    };
    LocalStorageService = __decorate([
        Injectable()
    ], LocalStorageService);
    return LocalStorageService;
}());
export { LocalStorageService };
//# sourceMappingURL=local-storage.service.js.map