import { __decorate, __read, __spread } from "tslib";
import { Component } from '@angular/core';
import { each, set, isString, } from 'lodash';
import { Subscription } from 'rxjs';
import jhFileNames from '@src/assets/jh-corona/file-names.json';
import lockdownDataByLocation from '@src/assets/jh-corona/lockdown-data-by-file-name.json';
import { FileGroup } from '@file-explorer/index';
import { NormalKeys } from '@src/app/corona/models/index';
var Tab;
(function (Tab) {
    Tab["ALL"] = "ALL";
    Tab["SAVED"] = "SAVED";
    Tab["COMPARE"] = "COMPARE";
})(Tab || (Tab = {}));
var CoronaComponent = /** @class */ (function () {
    /**
     * ngOnInit
     */
    function CoronaComponent(localStorageService) {
        this.localStorageService = localStorageService;
        this.fileGroup = new FileGroup();
        this.locationsByFileId = {};
        this.fileIdsByLocation = {};
        this.favoriteFileIds = new Set();
        this.filterStr = '';
        this.disabledBarKeys = new Set();
        this.disabledNormalKeys = new Set([NormalKeys.R]);
        this.isViewingNormalized = false;
        this.isViewingLineChart = false;
        this.compareSelectedFileIds = new Set();
        this.subs = new Subscription();
        this.closedFileIdsWhileQuery = new Set();
        this.leftSideExpanded = false;
        this.Tab = Tab;
        this.lockdownDataByLocation = lockdownDataByLocation;
        this.populateFileGroup();
        this.fileGroup.closeAllFolders();
        this.fileGroup.closedFileIds.delete(this.favoritesRootId);
        this.fileGroup.closedFileIds.delete(this.locationRoot.id);
        this.loadFavorites();
        this.setSelectedTab(Tab.SAVED);
    }
    CoronaComponent.prototype.onSelectedFileIdsChange = function (selectedFileIds) {
        if (this.selectedTab === Tab.COMPARE) {
            this.compareSelectedFileIds = selectedFileIds;
        }
        else {
            this.fileGroup.setSelectedFileIds(selectedFileIds);
        }
    };
    CoronaComponent.prototype.setSelectedTab = function (tab) {
        this.selectedTab = tab;
        if (tab === Tab.SAVED) {
            this.fileGroup.rootFileId = this.favoritesRootId;
        }
        else if (tab === Tab.ALL) {
            this.fileGroup.setRootFile(this.locationRoot);
        }
        else if (tab === Tab.COMPARE) {
            this.fileGroup.setRootFile(this.locationRoot);
        }
        this.filterStr = '';
    };
    CoronaComponent.prototype.ngOnDestroy = function () {
        this.subs.unsubscribe();
    };
    CoronaComponent.prototype.onFilterStringChange = function (filterStr) {
        if (filterStr && this.selectedTab === Tab.SAVED) {
            this.setSelectedTab(Tab.ALL);
        }
        this.filterStr = filterStr;
    };
    CoronaComponent.prototype.loadFavorites = function () {
        var _this = this;
        var favoriteLocations = this.localStorageService.getFavoriteLocations();
        var favoriteIds = favoriteLocations.map(function (location) { return _this.fileIdsByLocation[location]; });
        this.fileGroup.filesById[this.favoritesRootId].childIds = favoriteIds;
        this.favoriteFileIds = new Set(favoriteIds);
        this.compareSelectedFileIds = new Set(favoriteIds);
        if (favoriteIds.length) {
            this.fileGroup.setSelectedFileIds(new Set([favoriteIds[0]]));
        }
    };
    CoronaComponent.prototype.saveFavorites = function () {
        var _this = this;
        var locations = this.fileGroup.filesById[this.favoritesRootId].childIds
            .map(function (fileId) { return _this.locationsByFileId[fileId]; });
        this.localStorageService.setFavoriteLocations(locations);
    };
    CoronaComponent.prototype.toggleFavoriteFile = function (file, event) {
        event.stopPropagation();
        if (this.favoriteFileIds.has(file.id)) {
            this.favoriteFileIds.delete(file.id);
            this.fileGroup.removeAsChildId(this.favoritesRootId, file.id);
        }
        else {
            this.favoriteFileIds.add(file.id);
            this.fileGroup.addAsChildId(this.favoritesRootId, file.id);
        }
        ;
        this.saveFavorites();
        this.fileGroup.flushFileChanges();
    };
    /**
     * populateFileGroup
     * Puts data from coronaLocations into fileGroup
     */
    CoronaComponent.prototype.populateFileGroup = function () {
        var jhFileNameSet = new Set(jhFileNames);
        this.locationRoot = this.fileGroup.createFile({ label: 'World' });
        var favoritesRoot = this.fileGroup.createFile({ label: 'Favorites', childIds: [] });
        this.favoritesRootId = favoritesRoot.id;
        // const nestedCoronaLocations = this.getNestedCoronaLocations(coronaLocations);
        var nestedCoronaLocations = this.getNestedJhCoronaLocations(jhFileNames);
        // setFileGroupNested batches file creations, make sure to flush
        this.setFileGroupNested(this.locationRoot, nestedCoronaLocations, jhFileNameSet);
        this.fileGroup.flush();
    };
    CoronaComponent.prototype.getNestedJhCoronaLocations = function (jhFileNames) {
        var nestedJhCoronaFileNames = {};
        jhFileNames.sort(function (a, b) { return a.length - b.length; });
        jhFileNames.forEach(function (fileName) {
            var splitLocation = fileName.split('_');
            set(nestedJhCoronaFileNames, splitLocation, fileName);
        });
        return nestedJhCoronaFileNames;
    };
    /**
     * getNestedCoronaLocations
     * This returns a nested format that represents the final files
     * @param {string[]} coronaLocations
     */
    // public getNestedCoronaLocations(coronaLocations: string[]) {
    //     const nestedCoronaLocations = {};
    //     // set nestedCoronaLocations from the leaves
    //     // if there is a location with the same name as a folder, create summary
    //     coronaLocations.sort((a, b) => b.length - a.length);
    //     coronaLocations.forEach((coronaLocation: string) => {
    //         const splitLocation = this.decorateAndSplitLocation(coronaLocation);
    //         if (get(nestedCoronaLocations, splitLocation)) {
    //             const folderName = last(splitLocation);
    //             splitLocation.push(`${folderName} Summary`)
    //         }
    //         set(nestedCoronaLocations, splitLocation, coronaLocation);
    //     });
    //     return nestedCoronaLocations;
    // }
    /**
     * decorateAndSplitLocation
     * Replaces country and state codes
     * @param {string} coronaLocation
     */
    // public decorateAndSplitLocation(coronaLocation: string) {
    //     const splitLocation = coronaLocation.split(', ').reverse();
    //     splitLocation[0] = countryNamesByCode[splitLocation[0]] || splitLocation[0];
    //     if (splitLocation.length > 1 && splitLocation[0] === 'United States') {
    //         splitLocation[1] = stateNamesByCode[splitLocation[1]] || splitLocation[1];
    //     }
    //     return splitLocation;
    // }
    /**
     * setFileGroupNested
     * Uses the nestedLocations to create files in this.fileGroup
     * Also sets locationsByFileId for referencing files later on.
     * @param {File} file
     * @param {any}  nestedLocations
     */
    CoronaComponent.prototype.setFileGroupNested = function (file, nestedLocations, jhFileNameSet, path) {
        var _this = this;
        if (path === void 0) { path = []; }
        var fileName = path.join('_');
        if (jhFileNameSet.has(fileName)) {
            this.locationsByFileId[file.id] = fileName;
            this.fileIdsByLocation[fileName] = file.id;
        }
        if (isString(nestedLocations)) {
            return;
        }
        var locations = Object.keys(nestedLocations).sort();
        each(locations, function (location) {
            // batchCreateFile is more performant, make sure to flush
            var label = location.replace(/-/g, ' ')
                .replace(/\*/g, '');
            var childNode = _this.fileGroup.batchCreateFile({
                label: label,
            });
            _this.fileGroup.batchAddAsChild(file, childNode);
            _this.setFileGroupNested(childNode, nestedLocations[location], jhFileNameSet, __spread(path, [location]));
        });
    };
    CoronaComponent.prototype.onFilesByIdChange = function (filesById) {
        this.fileGroup.filesById = filesById;
        this.saveFavorites();
    };
    CoronaComponent.prototype.getSelectedFileIds = function () {
        return (this.selectedTab === Tab.COMPARE) ? this.compareSelectedFileIds : this.fileGroup.selectedFileIds;
    };
    CoronaComponent = __decorate([
        Component({
            selector: 'dwu-corona',
            templateUrl: './corona.component.html',
            styleUrls: ['./corona.component.scss']
        })
    ], CoronaComponent);
    return CoronaComponent;
}());
export { CoronaComponent };
//# sourceMappingURL=corona.component.js.map