import { __awaiter, __decorate, __generator } from "tslib";
import { Component } from '@angular/core';
var MyUploadsComponent = /** @class */ (function () {
    function MyUploadsComponent(pgs, firebaseAuthService) {
        this.pgs = pgs;
        this.firebaseAuthService = firebaseAuthService;
        this.uploadedFiles$ = this.pgs.getUploadedFiles$();
    }
    MyUploadsComponent.prototype.onFileChange = function (file, user) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                this.pgs.uploadFile(file, user);
                return [2 /*return*/];
            });
        });
    };
    MyUploadsComponent.prototype.onDeleteFile = function (file, user) {
        this.pgs.deleteFile(file.id, user);
    };
    MyUploadsComponent.prototype.trackById = function (file) {
        return file.id;
    };
    MyUploadsComponent = __decorate([
        Component({
            selector: 'dwu-my-uploads',
            templateUrl: './my-uploads.component.html',
            styleUrls: ['./my-uploads.component.scss']
        })
    ], MyUploadsComponent);
    return MyUploadsComponent;
}());
export { MyUploadsComponent };
//# sourceMappingURL=my-uploads.component.js.map