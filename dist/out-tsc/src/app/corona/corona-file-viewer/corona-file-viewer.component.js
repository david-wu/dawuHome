import { __decorate, __read } from "tslib";
import { Component, EventEmitter, Input, Output, } from '@angular/core';
import { BehaviorSubject, forkJoin, combineLatest, } from 'rxjs';
import { filter, startWith, switchMap, map, shareReplay, } from 'rxjs/operators';
import { mapValues, fromPairs, zip, } from 'lodash';
import populationDataByLocation from '@src/assets/jh-corona/population-by-file-name.json';
// import lockdownDataByLocation from '@src/assets/corona/lockdown-data-by-location.json';
import lockdownDataByLocation from '@src/assets/jh-corona/lockdown-data-by-file-name.json';
var CoronaFileViewerComponent = /** @class */ (function () {
    function CoronaFileViewerComponent(coronaService) {
        var _this = this;
        this.coronaService = coronaService;
        this.isComparing = false;
        this.disabledBarKeys = new Set();
        this.disabledBarKeysChange = new EventEmitter();
        this.disabledNormalKeys = new Set();
        this.disabledNormalKeysChange = new EventEmitter();
        this.isViewingNormalized = false;
        this.isViewingNormalizedChange = new EventEmitter();
        this.isViewingLineChart = false;
        this.isViewingLineChartChange = new EventEmitter();
        this.selectedFileIds$ = new BehaviorSubject(undefined);
        this.filesById$ = new BehaviorSubject(undefined);
        this.locationsByFileId$ = new BehaviorSubject(undefined);
        // public fileUrl: string;
        this.lockdownDataByLocation = lockdownDataByLocation;
        var coronaDataByFileId$ = combineLatest(this.selectedFileIds$, this.locationsByFileId$).pipe(switchMap(function (_a) {
            var _b = __read(_a, 2), fileIdSet = _b[0], locationsByFileId = _b[1];
            var fileIds = Array.from(fileIdSet);
            var requests$ = fileIds.map(function (fileId) {
                return _this.coronaService.getCoronaFileByLocation(locationsByFileId[fileId]);
            });
            return forkJoin(requests$).pipe(map(function (files) { return fromPairs(zip(fileIds, files)); }), startWith(undefined));
        }), shareReplay(1));
        this.isLoading$ = combineLatest(this.selectedFileIds$, coronaDataByFileId$, function (selectedFileIds, coronaDataByFileId) {
            return Boolean(selectedFileIds && !coronaDataByFileId);
        });
        this.latestCoronaFilesWithFileId$ = combineLatest(this.selectedFileIds$, coronaDataByFileId$, function (fileIdSet, coronaDataByFileId) {
            if (!fileIdSet || !coronaDataByFileId) {
                return;
            }
            return Array.from(fileIdSet).map(function (fileId) { return [coronaDataByFileId[fileId], fileId]; });
        }).pipe(filter(Boolean));
        this.firstCoronaFile$ = combineLatest(this.selectedFileIds$, coronaDataByFileId$, function (fileIdSet, coronaDataByFileId) {
            var selectedFileId = Array.from(fileIdSet)[0];
            return coronaDataByFileId && coronaDataByFileId[selectedFileId];
        }).pipe(filter(Boolean));
        this.populationsByFileId$ = this.locationsByFileId$.pipe(map(function (locationsByFileId) {
            return mapValues(locationsByFileId, function (location) {
                return populationDataByLocation[location];
            });
        }));
        this.totalPopulation$ = combineLatest(this.selectedFileIds$, this.populationsByFileId$, function (fileIdSet, populationByFileId) {
            return Array.from(fileIdSet).reduce(function (sum, fileId) {
                return sum + Number((populationByFileId[fileId] || 0));
            }, 0);
        });
        this.locationsWithLatestPointData$ = combineLatest(this.selectedFileIds$, this.filesById$, this.locationsByFileId$, function (selectedFileIds, filesById, locationsByFileId) {
            return Array.from(selectedFileIds)
                .filter(function (fileId) { return filesById[fileId].childIds; })
                .map(function (fileId) { return locationsByFileId[fileId]; });
        });
    }
    CoronaFileViewerComponent.prototype.ngOnChanges = function (changes) {
        if (changes.selectedFileIds) {
            this.selectedFileIds$.next(this.selectedFileIds);
        }
        if (changes.locationsByFileId) {
            this.locationsByFileId$.next(this.locationsByFileId);
        }
        if (changes.filesById) {
            this.filesById$.next(this.filesById);
        }
    };
    CoronaFileViewerComponent.prototype.getHeaderText = function () {
        var fileIds = Array.from(this.selectedFileIds || []);
        if (this.isComparing) {
            return "Comparing " + fileIds.length + " locations";
        }
        return this.filesById && this.filesById[fileIds[0]] && this.filesById[fileIds[0]].label;
    };
    CoronaFileViewerComponent.prototype.getFirstSelectedFileLockdownInfo = function () {
        var fileId = Array.from(this.selectedFileIds || [])[0];
        var location = this.locationsByFileId && this.locationsByFileId[fileId];
        return this.lockdownDataByLocation && this.lockdownDataByLocation[location];
    };
    __decorate([
        Input()
    ], CoronaFileViewerComponent.prototype, "selectedFileIds", void 0);
    __decorate([
        Input()
    ], CoronaFileViewerComponent.prototype, "filesById", void 0);
    __decorate([
        Input()
    ], CoronaFileViewerComponent.prototype, "locationsByFileId", void 0);
    __decorate([
        Input()
    ], CoronaFileViewerComponent.prototype, "isComparing", void 0);
    __decorate([
        Input()
    ], CoronaFileViewerComponent.prototype, "disabledBarKeys", void 0);
    __decorate([
        Output()
    ], CoronaFileViewerComponent.prototype, "disabledBarKeysChange", void 0);
    __decorate([
        Input()
    ], CoronaFileViewerComponent.prototype, "disabledNormalKeys", void 0);
    __decorate([
        Output()
    ], CoronaFileViewerComponent.prototype, "disabledNormalKeysChange", void 0);
    __decorate([
        Input()
    ], CoronaFileViewerComponent.prototype, "isViewingNormalized", void 0);
    __decorate([
        Output()
    ], CoronaFileViewerComponent.prototype, "isViewingNormalizedChange", void 0);
    __decorate([
        Input()
    ], CoronaFileViewerComponent.prototype, "isViewingLineChart", void 0);
    __decorate([
        Output()
    ], CoronaFileViewerComponent.prototype, "isViewingLineChartChange", void 0);
    CoronaFileViewerComponent = __decorate([
        Component({
            selector: 'dwu-corona-file-viewer',
            templateUrl: './corona-file-viewer.component.html',
            styleUrls: ['./corona-file-viewer.component.scss']
        })
    ], CoronaFileViewerComponent);
    return CoronaFileViewerComponent;
}());
export { CoronaFileViewerComponent };
//# sourceMappingURL=corona-file-viewer.component.js.map