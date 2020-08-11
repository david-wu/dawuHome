import { __decorate } from "tslib";
import { Component, EventEmitter, Input, Output, } from '@angular/core';
var FileUploaderComponent = /** @class */ (function () {
    function FileUploaderComponent(fss) {
        this.fss = fss;
        this.showUploadButton = false;
        this.fileChange = new EventEmitter();
    }
    FileUploaderComponent.prototype.onFileChange = function (fileEvent) {
        if (fileEvent.target.files) {
            this.file = fileEvent.target.files[0];
            this.fileChange.emit(this.file);
        }
    };
    FileUploaderComponent.prototype.upload = function () {
        this.fss.uploadFile(this.file);
    };
    __decorate([
        Input()
    ], FileUploaderComponent.prototype, "showUploadButton", void 0);
    __decorate([
        Output()
    ], FileUploaderComponent.prototype, "fileChange", void 0);
    FileUploaderComponent = __decorate([
        Component({
            selector: 'dwu-file-uploader',
            templateUrl: './file-uploader.component.html',
            styleUrls: ['./file-uploader.component.scss']
        })
    ], FileUploaderComponent);
    return FileUploaderComponent;
}());
export { FileUploaderComponent };
//# sourceMappingURL=file-uploader.component.js.map