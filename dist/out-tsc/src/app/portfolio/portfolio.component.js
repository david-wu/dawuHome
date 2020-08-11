import { __decorate } from "tslib";
import { Component } from '@angular/core';
import { keyBy } from 'lodash';
import { NavigationEnd, } from '@angular/router';
import { FileGroup } from '@file-explorer/index';
var PortfolioComponent = /** @class */ (function () {
    function PortfolioComponent(router, route) {
        var _this = this;
        this.router = router;
        this.route = route;
        this.filesById = {};
        this.filesByLabel = {};
        this.fileGroup = new FileGroup();
        this.filterStr = '';
        this.populateFileGroup();
        this.router.events.subscribe(function (routerEvent) {
            if (routerEvent instanceof NavigationEnd) {
                var activatedChild = routerEvent.urlAfterRedirects.split('/')[2];
                _this.fileGroup.setSelectedFileIds(new Set([activatedChild]));
            }
        });
    }
    PortfolioComponent.prototype.populateFileGroup = function () {
        var fileDataById = {
            id: 'PROJECTS',
            label: 'Projects',
            childrenById: {
                BACKYARD_PATIO: {
                    label: 'backyard patio',
                },
                PHOTO_APP: {
                    label: 'photo app',
                },
                FUZZ: { label: 'fuzz-js' },
                COMPONENTS: {
                    label: 'components',
                    childrenById: {
                        TOOLTIP: { label: 'tooltip' },
                        FILE_EXPLORER: { label: 'file-explorer' },
                        TEXT_DECORATOR: { label: 'text-decorator' },
                        CHARTS_DIR: {
                            label: 'charts',
                            childrenById: {
                                FLEX_CHART: { label: 'flex chart' },
                                LINE_CHART: { label: 'line chart' },
                                BAR_CHART: { label: 'bar chart' },
                                CHART_LEGEND: { label: 'chart legend' },
                            },
                        },
                    },
                },
                TODOS: {
                    label: 'todos',
                    childrenById: {
                        MARKDOWN: { label: 'support markdown-editor' },
                        FAVICON: { label: 'make a favicon' },
                        COMMON: { label: 'components demos' },
                        PHOTOS: {
                            label: 'photo app todo',
                            childrenById: {
                                TD1: { label: 'upload photo transaction' },
                                TD2: { label: 'service worker' },
                                TD3: { label: 'walk/bike/car distance' },
                                TD4: { label: 'better models/interfaces' },
                                TD5: { label: 's2' },
                                TD6: { label: 's4' },
                                TD7: { label: 'sort by distance' },
                                TD8: { label: 'map with nearby pics' },
                                TD9: { label: 'tensorflow, auto label pics' },
                                TD10: { label: 'oaktown pics' },
                            },
                        },
                    },
                },
            },
        };
        var files = this.fileGroup.filesByIdFromJson(fileDataById);
        this.filesById = keyBy(files, 'id');
        this.fileGroup.setRootFile(this.filesById.PROJECTS);
    };
    PortfolioComponent.prototype.getSelectedFileId = function () {
        var selectedFileIds = Array.from(this.fileGroup.selectedFileIds || []);
        return (selectedFileIds.length === 1) && selectedFileIds[0];
    };
    PortfolioComponent.prototype.onSelectedFileIdsChange = function (fileIds) {
        var fileId = Array.from(fileIds)[0];
        if (fileId) {
            this.router.navigate([fileId], { relativeTo: this.route });
        }
    };
    PortfolioComponent = __decorate([
        Component({
            selector: 'portfolio',
            templateUrl: './portfolio.component.html',
            styleUrls: ['./portfolio.component.scss']
        })
    ], PortfolioComponent);
    return PortfolioComponent;
}());
export { PortfolioComponent };
//# sourceMappingURL=portfolio.component.js.map