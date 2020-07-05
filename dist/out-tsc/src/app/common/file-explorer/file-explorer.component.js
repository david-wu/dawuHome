import { __assign, __decorate, __read, __spread } from "tslib";
import { Component, EventEmitter, Input, Output, ViewChildren, } from '@angular/core';
import { Subscription } from 'rxjs';
import { take } from 'rxjs/operators';
import { CdkVirtualScrollViewport } from '@angular/cdk/scrolling';
import ResizeSensor from 'css-element-queries/src/ResizeSensor';
import { Fuzz, } from 'fuzz-js';
import { isUndefined, includes, each, without, last, uniq, } from 'lodash';
import { DragulaService } from 'ng2-dragula';
import { reverseBreadthFirstBy } from '@utils/index';
import { File, } from './models/index';
var FileExplorerComponent = /** @class */ (function () {
    function FileExplorerComponent(dragulaService, hostEl) {
        var _this = this;
        this.dragulaService = dragulaService;
        this.hostEl = hostEl;
        this.fuzzFilterString = '';
        this.closedFileIds = new Set();
        this.selectedFileIds = new Set();
        this.perfMode = true;
        this.hideRoot = true;
        this.multiFileSelect = false;
        this.dragEnabled = false;
        this.disableOpening = false;
        this.filesByIdChange = new EventEmitter();
        this.closedFileIdsChange = new EventEmitter();
        this.selectedFileIdsChange = new EventEmitter();
        this.fuzzItemsByFileId = {};
        this.fileIdsAndDepth = [];
        this.visibleFileIds = new Set();
        this.fileIsOddById = {};
        this.subs = new Subscription();
        var drakeGroup = dragulaService.createGroup('EXP', {
            isContainer: function (el) {
                if (_this.disableOpening) {
                    return false;
                }
                var fileId = el.getAttribute('data-file-id');
                return Boolean(fileId && _this.filesById[fileId].childIds);
            },
            moves: function (el, container, handle) {
                return _this.dragEnabled && handle.classList.contains('dragula-handle');
            },
            revertOnSpill: false,
        });
        this.subs.add(this.dragulaService.drop('EXP')
            .subscribe(function (drop) {
            // use on our own dom manipulation
            drakeGroup.drake.cancel(true);
            // If there is a target container, just add it in
            if (_this.getElFileId(drop.target)) {
                _this.addFileToFileChildren(_this.getElFileId(drop.el), _this.getElFileId(drop.target));
                return;
            }
            // If there is a sibling, insert it before the sibling
            if (drop.sibling && _this.getElFileId(drop.sibling)) {
                _this.insertFileBeforeFile(_this.getElFileId(drop.el), _this.getElFileId(drop.sibling));
                // If there is NO sibling, it was dropped at the bottom, insert at end
            }
            else {
                var lastVisibleFileId = last(_this.fileIdsAndDepth)[0];
                _this.insertFileAfterFile(_this.getElFileId(drop.el), lastVisibleFileId);
            }
        }));
        this.subs.add(this.dragulaService.over('EXP')
            .subscribe(function (_a) {
            var el = _a.el;
            // if a folder is being dragged isContainer function will return true
            // this makes 'el' be the childElement so I also check the parentNode's attribute
            var nextFileIdBeingDragged = _this.getElFileId(el);
            // for the first over event after a dragend, el is the element being dragged
            if (!_this.fileIdBeingDragged && (_this.fileIdBeingDragged !== nextFileIdBeingDragged)) {
                _this.fileIdBeingDragged = nextFileIdBeingDragged;
                _this.closedFileIdsChange.emit(new Set(__spread(_this.closedFileIds, [
                    _this.fileIdBeingDragged,
                ])));
            }
        }));
        this.subs.add(this.dragulaService.dragend('EXP')
            .subscribe(function () { return _this.fileIdBeingDragged = undefined; }));
    }
    FileExplorerComponent.prototype.ngOnChanges = function (changes) {
        if (changes.rootFileId || changes.filesById || changes.closedFileIds || changes.fuzzFilterString || changes.perfMode) {
            if (this.rootFileId && this.filesById) {
                this.setTableIndices();
            }
        }
        if (changes.fuzzFilterString
            && this.fuzzFilterString
            && this.scrollViewport
            && this.scrollViewport.first) {
            this.scrollViewport.first.scrollToIndex(0);
        }
        // Scroll back to selected if queryString is removed
        if (changes.fuzzFilterString
            && changes.fuzzFilterString.previousValue
            && !this.fuzzFilterString
            && this.scrollViewport
            && this.scrollViewport.first) {
            this.scrollToSelectedFileId();
        }
    };
    FileExplorerComponent.prototype.ngAfterViewInit = function () {
        var _this = this;
        this.subs.add(this.scrollViewport.changes.pipe(take(1))
            .subscribe(function () { return _this.scrollToSelectedFileId(); }));
        this.sensor = new ResizeSensor(this.hostEl.nativeElement, function () {
            if (_this.scrollViewport && _this.scrollViewport.first) {
                _this.scrollViewport.first.checkViewportSize();
            }
        });
    };
    FileExplorerComponent.prototype.ngOnDestroy = function () {
        this.subs.unsubscribe();
        this.dragulaService.destroy('EXP');
        this.sensor.detach();
    };
    FileExplorerComponent.prototype.scrollToSelectedFileId = function () {
        var viewPort = this.scrollViewport && this.scrollViewport.first;
        if (!viewPort) {
            return;
        }
        var firstSelectedFileId = Array.from(this.selectedFileIds)[0];
        var filePosition = this.getFileIdPosition(firstSelectedFileId);
        // leave some space above file to show you can scroll up
        var scrollPosition = Math.max(0, filePosition - 2);
        // weird issue with cdk needs timeout
        setTimeout(function () {
            viewPort.scrollToIndex(scrollPosition);
        });
    };
    FileExplorerComponent.prototype.insertFileAfterFile = function (fileId1, fileId2) {
        var changes = {};
        each(this.filesById, function (file) {
            if (includes(file.childIds, fileId1)) {
                changes[file.id] = Object.assign(new File(), __assign(__assign({}, file), { childIds: without(file.childIds, fileId1) }));
            }
        });
        var insertParent = this.filesById[this.parentIdsByFileId[fileId2]];
        var nextChildIds = without(insertParent.childIds, fileId1);
        // const insertionIndex = nextChildIds.indexOf(fileId2);
        nextChildIds.push(fileId1);
        changes[insertParent.id] = Object.assign(new File(), __assign(__assign({}, insertParent), { childIds: nextChildIds }));
        this.filesByIdChange.emit(__assign(__assign({}, this.filesById), changes));
    };
    FileExplorerComponent.prototype.insertFileBeforeFile = function (fileId1, fileId2) {
        if (fileId2 === this.rootFileId) {
            return;
        }
        var changes = {};
        each(this.filesById, function (file) {
            if (includes(file.childIds, fileId1)) {
                changes[file.id] = Object.assign(new File(), __assign(__assign({}, file), { childIds: without(file.childIds, fileId1) }));
            }
        });
        var insertParent = this.filesById[this.parentIdsByFileId[fileId2]];
        var nextChildIds = without(insertParent.childIds, fileId1);
        var insertionIndex = nextChildIds.indexOf(fileId2);
        nextChildIds.splice(insertionIndex, 0, fileId1);
        changes[insertParent.id] = Object.assign(new File(), __assign(__assign({}, insertParent), { childIds: nextChildIds }));
        this.filesByIdChange.emit(__assign(__assign({}, this.filesById), changes));
    };
    FileExplorerComponent.prototype.addFileToFileChildren = function (fileId1, fileId2) {
        var changes = {};
        each(this.filesById, function (file) {
            if (includes(file.childIds, fileId1)) {
                changes[file.id] = Object.assign(new File(), __assign(__assign({}, file), { childIds: without(file.childIds, fileId1) }));
            }
        });
        // empty fileId2 means insert after the last element
        if (fileId2) {
            var parentFile = this.filesById[fileId2];
            changes[parentFile.id] = Object.assign(new File(), __assign(__assign({}, this.filesById[parentFile.id]), { childIds: uniq(__spread([fileId1], parentFile.childIds)) }));
        }
        else {
            var parentFile = this.filesById[this.rootFileId];
            changes[parentFile.id] = Object.assign(new File(), __assign(__assign({}, this.filesById[parentFile.id]), { childIds: uniq(__spread(parentFile.childIds, [fileId1])) }));
        }
        this.filesByIdChange.emit(__assign(__assign({}, this.filesById), changes));
    };
    FileExplorerComponent.prototype.getParentIdsByFileId = function (fileId, filesById) {
        var _this = this;
        var file = filesById[fileId];
        var parentIdsByFileId = {};
        each(file.childIds, function (childId) {
            parentIdsByFileId[childId] = fileId;
            var innerParentIdsByFileId = _this.getParentIdsByFileId(childId, filesById);
            each(innerParentIdsByFileId, function (parentId, grandChildId) {
                parentIdsByFileId[grandChildId] = parentId;
            });
        });
        return parentIdsByFileId;
    };
    FileExplorerComponent.prototype.setTableIndices = function () {
        this.parentIdsByFileId = this.getParentIdsByFileId(this.rootFileId, this.filesById);
        if (!this.fuzzFilterString) {
            this.fuzzItemsByFileId = {};
            this.visibleFileIds = this.getVisibleFileIds(this.rootFileId, this.filesById, this.closedFileIds);
            this.fileIdsAndDepth = this.getFileIdsAndDepth(this.rootFileId, this.filesById, undefined, this.disableOpening ? -1 : Infinity);
            this.fileIsOddById = this.getFileIsOddById(this.fileIdsAndDepth, this.visibleFileIds);
        }
        else {
            this.fuzzItemsByFileId = this.getFuzzResultsByFileId(this.fuzzFilterString, this.filesById);
            // maxScore is the highest score between the item and all its descendants
            // low max scores will get filtered out
            var _a = this.sortFileIndexChildren(this.filesById, this.fuzzItemsByFileId), maxScoresByFileId = _a.maxScoresByFileId, sortedChildIdsByFileId = _a.sortedChildIdsByFileId;
            this.visibleFileIds = this.getVisibleFileIds(this.rootFileId, this.filesById, new Set(), // no closed folders while searching
            maxScoresByFileId);
            this.fileIdsAndDepth = this.getFileIdsAndDepth(this.rootFileId, this.filesById, sortedChildIdsByFileId, this.disableOpening ? -1 : Infinity);
            this.fileIsOddById = this.getFileIsOddById(this.fileIdsAndDepth, this.visibleFileIds);
        }
    };
    FileExplorerComponent.prototype.getFuzzResultsByFileId = function (filterString, filesById) {
        var fileList = Object.keys(filesById).map(function (fileId) { return filesById[fileId]; });
        var fuzzResults = Fuzz.search(fileList, filterString, {
            disableDiagnostics: true,
            disableStyledString: true,
            subjectKeys: ['label'],
        });
        var fuzzItemsByFileId = {};
        fuzzResults.forEach(function (fuzzItem) {
            fuzzItemsByFileId[fuzzItem.original.id] = fuzzItem;
        });
        return fuzzItemsByFileId;
    };
    /**
    * sortFileIndexChildren
    * Sorts the childIds for a file tree
    * avoids modifying filesById
    * @param {Record<string, File>} filesById
    * @param {Set<string>} fileIdsToKeep
    */
    FileExplorerComponent.prototype.sortFileIndexChildren = function (filesById, fuzzItemsById) {
        var maxScoresByFileId = {};
        var sortedChildIdsByFileId = {};
        reverseBreadthFirstBy(this.rootFileId, function (fileId) {
            var file = filesById[fileId];
            return (file && file.childIds) ? file.childIds : [];
        }, function (fileId) {
            var file = filesById[fileId];
            var fuzzItem = fuzzItemsById[fileId];
            maxScoresByFileId[fileId] = fuzzItem ? fuzzItem.score : 0;
            if (!file.childIds) {
                return;
            }
            // maxScoresByFileId maintains the highest score for the file and all its children
            var childMaxScores = file.childIds.map(function (childId) { return maxScoresByFileId[childId]; });
            maxScoresByFileId[file.id] = Math.max.apply(Math, __spread([maxScoresByFileId[file.id]], childMaxScores));
            sortedChildIdsByFileId[file.id] = __spread(file.childIds).sort(function (id1, id2) { return maxScoresByFileId[id2] - maxScoresByFileId[id1]; });
        });
        return {
            maxScoresByFileId: maxScoresByFileId,
            sortedChildIdsByFileId: sortedChildIdsByFileId,
        };
    };
    /**
    * getFileIdsAndDepth
    * if sortedChildIdsByFileId is passed, it overrides the childIds in filesById
    * this is used when fuzzy filtering and the children are in a different order
    * @param  {string} currentFileId
    * @param  {Record<string, File>} filesById
    * @param  {Record<string, string[]>} sortedChildIdsByFileId
    * @param  {number} depth
    * @return {Array}
    */
    FileExplorerComponent.prototype.getFileIdsAndDepth = function (currentFileId, filesById, sortedChildIdsByFileId, maxDepth, depth) {
        var _this = this;
        if (depth === void 0) { depth = 0; }
        // don't animate stuff, use virtual scroll viewport
        if (this.perfMode && !this.visibleFileIds.has(currentFileId)) {
            return [];
        }
        var currentFile = filesById[currentFileId];
        var fileIdsAndDepth = [
            [currentFileId, depth],
        ];
        if (this.hideRoot && currentFileId === this.rootFileId) {
            fileIdsAndDepth.length = 0;
            depth--;
        }
        if (depth > maxDepth) {
            return fileIdsAndDepth;
        }
        each(sortedChildIdsByFileId ? sortedChildIdsByFileId[currentFile.id] : currentFile.childIds, function (childId) {
            var childFileIdsAndDepth = _this.getFileIdsAndDepth(childId, filesById, sortedChildIdsByFileId, maxDepth, depth + 1);
            fileIdsAndDepth.push.apply(fileIdsAndDepth, __spread(childFileIdsAndDepth));
        });
        return fileIdsAndDepth;
    };
    FileExplorerComponent.prototype.getVisibleFileIds = function (currentFileId, filesById, closedFileIds, maxScoresByFileId) {
        var _this = this;
        if (maxScoresByFileId === void 0) { maxScoresByFileId = {}; }
        var currentFile = filesById[currentFileId];
        var currentMaxScore = isUndefined(maxScoresByFileId[currentFileId]) ? 1 : maxScoresByFileId[currentFileId];
        var visibleFileIds = new Set();
        if (currentMaxScore > 0.80) {
            visibleFileIds.add(currentFile.id);
        }
        if (!closedFileIds.has(currentFileId)) {
            each(currentFile.childIds, function (childId) {
                var childVisibleFileIds = _this.getVisibleFileIds(childId, filesById, closedFileIds, maxScoresByFileId);
                childVisibleFileIds.forEach(function (visibleFileId) { return visibleFileIds.add(visibleFileId); });
            });
        }
        return visibleFileIds;
    };
    FileExplorerComponent.prototype.getFileIsOddById = function (fileIdsAndDepth, visibleFileIds) {
        var fileIsOddById = {};
        var isOdd = false;
        for (var i = 0; i < fileIdsAndDepth.length; i++) {
            var fileId = fileIdsAndDepth[i][0];
            if (visibleFileIds.has(fileId)) {
                isOdd = !isOdd;
            }
            fileIsOddById[fileId] = isOdd;
        }
        return fileIsOddById;
    };
    FileExplorerComponent.prototype.toggleClosedFile = function (file, event) {
        event.stopPropagation();
        this.closedFileIds = new Set(this.closedFileIds);
        if (this.closedFileIds.has(file.id)) {
            this.closedFileIds.delete(file.id);
        }
        else {
            this.closedFileIds.add(file.id);
        }
        this.closedFileIdsChange.emit(this.closedFileIds);
    };
    FileExplorerComponent.prototype.selectFile = function (file) {
        if (!this.multiFileSelect) {
            this.selectedFileIdsChange.emit(new Set([file.id]));
        }
        else {
            var nextSelectedFileIds = new Set(this.selectedFileIds);
            if (nextSelectedFileIds.has(file.id)) {
                nextSelectedFileIds.delete(file.id);
            }
            else {
                nextSelectedFileIds.add(file.id);
            }
            this.selectedFileIdsChange.emit(nextSelectedFileIds);
        }
    };
    FileExplorerComponent.prototype.getPaddingLeft = function (depth) {
        if (this.disableOpening) {
            return '0.25rem';
        }
        return depth + "rem";
    };
    FileExplorerComponent.prototype.trackByFn = function (fileIdAndDepth) {
        return fileIdAndDepth[0];
    };
    FileExplorerComponent.prototype.getFileIdPosition = function (fileId) {
        return Math.max(this.fileIdsAndDepth.findIndex(function (idAndDepth) { return idAndDepth[0] === fileId; }), 0);
    };
    FileExplorerComponent.prototype.getElFileId = function (el) {
        if (!el) {
            return;
        }
        return el.getAttribute('data-file-id') || el.parentNode.getAttribute('data-file-id');
    };
    __decorate([
        Input()
    ], FileExplorerComponent.prototype, "rootFileId", void 0);
    __decorate([
        Input()
    ], FileExplorerComponent.prototype, "fuzzFilterString", void 0);
    __decorate([
        Input()
    ], FileExplorerComponent.prototype, "filesById", void 0);
    __decorate([
        Input()
    ], FileExplorerComponent.prototype, "closedFileIds", void 0);
    __decorate([
        Input()
    ], FileExplorerComponent.prototype, "selectedFileIds", void 0);
    __decorate([
        Input()
    ], FileExplorerComponent.prototype, "perfMode", void 0);
    __decorate([
        Input()
    ], FileExplorerComponent.prototype, "rowIconTemplate", void 0);
    __decorate([
        Input()
    ], FileExplorerComponent.prototype, "hideRoot", void 0);
    __decorate([
        Input()
    ], FileExplorerComponent.prototype, "multiFileSelect", void 0);
    __decorate([
        Input()
    ], FileExplorerComponent.prototype, "dragEnabled", void 0);
    __decorate([
        Input()
    ], FileExplorerComponent.prototype, "disableOpening", void 0);
    __decorate([
        Output()
    ], FileExplorerComponent.prototype, "filesByIdChange", void 0);
    __decorate([
        Output()
    ], FileExplorerComponent.prototype, "closedFileIdsChange", void 0);
    __decorate([
        Output()
    ], FileExplorerComponent.prototype, "selectedFileIdsChange", void 0);
    __decorate([
        Input()
    ], FileExplorerComponent.prototype, "initialScrollToId", void 0);
    __decorate([
        ViewChildren(CdkVirtualScrollViewport)
    ], FileExplorerComponent.prototype, "scrollViewport", void 0);
    FileExplorerComponent = __decorate([
        Component({
            selector: 'dwu-file-explorer',
            templateUrl: './file-explorer.component.html',
            styleUrls: ['./file-explorer.component.scss'],
            providers: [
                DragulaService,
            ],
        })
    ], FileExplorerComponent);
    return FileExplorerComponent;
}());
export { FileExplorerComponent };
//# sourceMappingURL=file-explorer.component.js.map