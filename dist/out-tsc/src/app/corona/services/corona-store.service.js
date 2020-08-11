import { __assign, __decorate } from "tslib";
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
var CoronaStoreService = /** @class */ (function () {
    function CoronaStoreService() {
        this.latestPointsByLocation$ = new BehaviorSubject({});
    }
    CoronaStoreService.prototype.setLastestPointsData = function (latestPointsByLocation) {
        this.latestPointsByLocation$.next(__assign(__assign({}, this.latestPointsByLocation$.value), latestPointsByLocation));
    };
    CoronaStoreService = __decorate([
        Injectable()
    ], CoronaStoreService);
    return CoronaStoreService;
}());
export { CoronaStoreService };
//# sourceMappingURL=corona-store.service.js.map