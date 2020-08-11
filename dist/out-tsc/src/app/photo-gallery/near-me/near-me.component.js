import { __decorate } from "tslib";
import { Component } from '@angular/core';
import { BehaviorSubject, } from 'rxjs';
var NearMeComponent = /** @class */ (function () {
    function NearMeComponent(pgs) {
        this.pgs = pgs;
        this.distanceType$ = new BehaviorSubject('WALK');
        this.nearByUploads$ = this.pgs.getNearByUploadsForDistanceType$(this.distanceType$);
    }
    NearMeComponent.prototype.trackById = function (file) {
        return file.id;
    };
    NearMeComponent = __decorate([
        Component({
            selector: 'dwu-near-me',
            templateUrl: './near-me.component.html',
            styleUrls: ['./near-me.component.scss']
        })
    ], NearMeComponent);
    return NearMeComponent;
}());
export { NearMeComponent };
//# sourceMappingURL=near-me.component.js.map