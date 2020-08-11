import { __decorate } from "tslib";
import { Injectable } from '@angular/core';
import { forkJoin, } from 'rxjs';
var CoronaService = /** @class */ (function () {
    function CoronaService(http) {
        this.http = http;
        this.latestPointsPath = '/assets/jh-corona/latest-points';
    }
    CoronaService.prototype.getCoronaFileUrl = function (location) {
        return "/assets/jh-corona/time-series/" + location + ".json";
    };
    CoronaService.prototype.getCoronaFileByLocation = function (location) {
        return this.http.get(this.getCoronaFileUrl(location));
    };
    CoronaService.prototype.getCoronaLatestPoints = function (location) {
        return this.http.get(this.latestPointsPath + "/" + location + ".json");
    };
    CoronaService.prototype.getCoronaLatestPointsMultiple = function (locations) {
        var _this = this;
        var requests$ = locations.map(function (location) {
            return _this.getCoronaLatestPoints(location);
        });
        return forkJoin(requests$);
    };
    CoronaService = __decorate([
        Injectable()
    ], CoronaService);
    return CoronaService;
}());
export { CoronaService };
//# sourceMappingURL=corona.service.js.map