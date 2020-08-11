import { __assign, __decorate } from "tslib";
import { Component, Input, ViewChild, } from '@angular/core';
import { MatTableDataSource, MatSort, } from '@angular/material';
import { startWith, map, } from 'rxjs/operators';
import { fromPairs, zip, } from 'lodash';
var LatestPointsViewerComponent = /** @class */ (function () {
    function LatestPointsViewerComponent(coronaService, coronaStoreService) {
        this.coronaService = coronaService;
        this.coronaStoreService = coronaStoreService;
        this.displayedColumns = ['location', 'cases', 'new', 'deaths', 'newDeaths'];
    }
    LatestPointsViewerComponent.prototype.ngOnChanges = function (changes) {
        var _this = this;
        if (changes.locations && this.locations) {
            var locations$ = this.coronaService.getCoronaLatestPointsMultiple(this.locations);
            var sub = locations$.pipe(map(function (files) { return fromPairs(zip(_this.locations, files)); }), startWith(undefined)).subscribe(function (fileData) {
                _this.coronaStoreService.setLastestPointsData(fileData);
            });
        }
    };
    LatestPointsViewerComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.tableData$ = this.coronaStoreService.latestPointsByLocation$.pipe(map(function (latestPointsByLocation) {
            var latestPointData = latestPointsByLocation[_this.locations[0]] || {};
            var locations = Object.keys(latestPointData);
            var locationData = locations.map(function (location) {
                return __assign(__assign({}, latestPointData[location]), { location: location });
            });
            var dataSource = new MatTableDataSource(locationData);
            dataSource.sort = _this.sort;
            return dataSource;
        }));
    };
    __decorate([
        Input()
    ], LatestPointsViewerComponent.prototype, "locations", void 0);
    __decorate([
        ViewChild(MatSort, { static: true })
    ], LatestPointsViewerComponent.prototype, "sort", void 0);
    LatestPointsViewerComponent = __decorate([
        Component({
            selector: 'dwu-latest-points-viewer',
            templateUrl: './latest-points-viewer.component.html',
            styleUrls: ['./latest-points-viewer.component.scss']
        })
    ], LatestPointsViewerComponent);
    return LatestPointsViewerComponent;
}());
export { LatestPointsViewerComponent };
//# sourceMappingURL=latest-points-viewer.component.js.map