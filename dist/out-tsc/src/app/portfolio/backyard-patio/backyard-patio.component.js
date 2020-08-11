import { __decorate } from "tslib";
import { Component, } from '@angular/core';
var BackyardPatioComponent = /** @class */ (function () {
    function BackyardPatioComponent() {
        this.images = [
            {
                description: '1',
                path: 'assets/images/backyard-patio/20200425_103623',
            },
            {
                description: '1',
                path: 'assets/images/backyard-patio/20200425_103629',
            },
            {
                description: '1',
                path: 'assets/images/backyard-patio/20200726_161356',
            },
            {
                description: '1',
                path: 'assets/images/backyard-patio/20200727_182054',
            },
            {
                description: '1',
                path: 'assets/images/backyard-patio/20200728_093921',
            },
            {
                description: '1',
                path: 'assets/images/backyard-patio/20200729_100937',
            },
            {
                description: '1',
                path: 'assets/images/backyard-patio/20200801_103249',
            },
            {
                description: '1',
                path: 'assets/images/backyard-patio/20200803_093712',
            },
            {
                description: '1',
                path: 'assets/images/backyard-patio/20200803_100656',
            },
            {
                description: '1',
                path: 'assets/images/backyard-patio/20200803_133722',
            },
            {
                description: '1',
                path: 'assets/images/backyard-patio/20200803_142142',
            },
            {
                description: '1',
                path: 'assets/images/backyard-patio/20200803_195323',
            },
            {
                description: '1',
                path: 'assets/images/backyard-patio/20200804_214359',
            },
            {
                description: '1',
                path: 'assets/images/backyard-patio/20200804_214805',
            },
            {
                description: '1',
                path: 'assets/images/backyard-patio/20200805_201423',
            },
        ];
    }
    BackyardPatioComponent.prototype.getSmSrc = function (image) {
        return image.path + "_sm.jpg";
    };
    BackyardPatioComponent.prototype.getLgSrc = function (image) {
        return image.path + "_lg.jpg";
    };
    BackyardPatioComponent = __decorate([
        Component({
            selector: 'dwu-backyard-patio',
            templateUrl: './backyard-patio.component.html',
            styleUrls: ['./backyard-patio.component.scss'],
        })
    ], BackyardPatioComponent);
    return BackyardPatioComponent;
}());
export { BackyardPatioComponent };
//# sourceMappingURL=backyard-patio.component.js.map