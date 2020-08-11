import { __assign, __read, __spread } from "tslib";
import { each, uniqueId, uniq, values, mapValues, some, } from 'lodash';
import { File } from './file.model';
import { breadthFirstBy, reverseBreadthFirstBy } from '@utils/index';
var FileGroup = /** @class */ (function () {
    function FileGroup(seed) {
        if (seed === void 0) { seed = uniqueId("dfg_"); }
        this.seed = seed;
        this.filesById = {};
        this.closedFileIds = new Set();
        this.selectedFileIds = new Set();
    }
    /**
     * filesByIdFromJson
     * handy when declaring files using a nested structure
     * @param {any} fileData
     */
    FileGroup.prototype.filesByIdFromJson = function (fileData) {
        var _this = this;
        var files = [];
        breadthFirstBy(fileData, function (parent) {
            var childFiles = mapValues(parent.childrenById, function (childFile, fileId) {
                return __assign({ label: fileId, id: fileId }, childFile);
            });
            return values(childFiles);
        }, function (file) {
            var partialFile = __assign({}, file);
            delete partialFile.childrenById;
            if (file.childrenById) {
                var childIds = Object.keys(file.childrenById || {});
                files.push(_this.createFile(__assign(__assign({}, partialFile), { childIds: childIds })));
            }
            else {
                files.push(_this.createFile(partialFile));
            }
        });
        return files;
    };
    /**
     * focusOnSelected
     * close all folders then open all the parents of selected so that it's visible
     */
    FileGroup.prototype.focusOnSelected = function () {
        var _this = this;
        this.closeAllFolders();
        var openFileIds = new Set();
        var selectedFileIds = Array.from(this.selectedFileIds);
        selectedFileIds.forEach(function (fileId) { return openFileIds.add(fileId); });
        reverseBreadthFirstBy(this.rootFileId, function (fileId) { return _this.filesById[fileId].childIds || []; }, function (fileId) {
            var file = _this.filesById[fileId];
            if (some(file.childIds, function (childId) { return openFileIds.has(childId); })) {
                openFileIds.add(file.id);
            }
        });
        Array.from(openFileIds).forEach(function (openFileId) {
            var openFile = _this.filesById[openFileId];
            if (openFile.childIds) {
                _this.closedFileIds.delete(openFile.id);
            }
        });
    };
    /**
     * closeAllFolders
     */
    FileGroup.prototype.closeAllFolders = function () {
        var _this = this;
        this.closedFileIds = new Set();
        each(this.filesById, function (file) {
            if (file.childIds) {
                _this.closedFileIds.add(file.id);
            }
        });
    };
    /**
     * setSelectedFileIds
     * @param {Set<string>} fileIds
     */
    FileGroup.prototype.setSelectedFileIds = function (fileIds) {
        this.selectedFileIds = fileIds;
    };
    /**
     * setRootFile
     * @param {File} file
     */
    FileGroup.prototype.setRootFile = function (file) {
        this.rootFileId = file.id;
    };
    /**
     * setClosedFileIds
     * @param {Set<string>} closedFileIds
     */
    FileGroup.prototype.setClosedFileIds = function (closedFileIds) {
        this.closedFileIds = closedFileIds;
    };
    FileGroup.prototype.removeAsChildId = function (parentId, childId) {
        var parent = this.filesById[parentId];
        var child = this.filesById[childId];
        this.removeAsChild(parent, child);
    };
    FileGroup.prototype.removeAsChild = function (parent, child) {
        parent.childIds = parent.childIds.filter(function (childId) { return childId !== child.id; });
    };
    FileGroup.prototype.addAsChildId = function (parentId, childId) {
        var parent = this.filesById[parentId];
        var child = this.filesById[childId];
        this.addAsChild(parent, child);
    };
    /**
     * addAsChild
     * @param {File} parent
     * @param {File} child
     */
    FileGroup.prototype.addAsChild = function (parent, child) {
        parent.childIds = uniq(__spread((parent.childIds || []), [child.id]));
    };
    /**
     * batchAddAsChild
     * more performant version of addAsChild, make sure to flush!
     * @param {File} parent
     * @param {File} child
     */
    FileGroup.prototype.batchAddAsChild = function (parent, child) {
        if (parent.childIds) {
            parent.childIds.push(child.id);
        }
        else {
            parent.childIds = [child.id];
        }
    };
    /**
     * flushFileChanges
     * new reference for childIds so change detection will pick up on batchAddAsChild
     */
    FileGroup.prototype.flushBatchAddAsChild = function () {
        each(this.filesById, function (file) {
            file.childIds = file.childIds && uniq(file.childIds);
        });
    };
    /**
     * createFile
     * @param  {Partial<File>} overrides
     * @return {File}
     */
    FileGroup.prototype.createFile = function (overrides) {
        var _a;
        if (overrides === void 0) { overrides = {}; }
        var uniqueId = this.getUniqueId();
        var newFile = Object.assign(new File(), __assign({ id: uniqueId, label: uniqueId }, overrides));
        this.filesById = __assign(__assign({}, this.filesById), (_a = {}, _a[newFile.id] = newFile, _a));
        return newFile;
    };
    /**
     * batchCreateFile
     * this.createFile replaces this.filesById for change detection
     * this is very slow when creating a lot of files
     * batchCreateFile modifies filesById, then flushFileChanges replaces this.filesById
     * @param  {Partial<File> = {}} overrides
     * @return {File}
     */
    FileGroup.prototype.batchCreateFile = function (overrides) {
        if (overrides === void 0) { overrides = {}; }
        var uniqueId = this.getUniqueId();
        var newFile = Object.assign(new File(), {
            id: uniqueId,
            label: uniqueId,
        }, overrides);
        this.filesById[newFile.id] = newFile;
        return newFile;
    };
    /**
     * flushFileChanges
     * new reference for filesById so change detection will pick up on batchCreateFile
     */
    FileGroup.prototype.flushFileChanges = function () {
        this.filesById = __assign({}, this.filesById);
    };
    /**
     * flush
     */
    FileGroup.prototype.flush = function () {
        this.flushFileChanges();
        this.flushBatchAddAsChild();
    };
    /**
     * getUniqueId
     * @return {string}
     */
    FileGroup.prototype.getUniqueId = function () {
        while (true) {
            var id = uniqueId(this.seed);
            if (!this.filesById[id]) {
                return id;
            }
        }
    };
    return FileGroup;
}());
export { FileGroup };
//# sourceMappingURL=file-group.model.js.map