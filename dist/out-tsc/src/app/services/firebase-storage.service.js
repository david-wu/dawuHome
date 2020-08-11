import { __awaiter, __decorate, __generator } from "tslib";
import { Injectable } from '@angular/core';
var FirebaseStorageService = /** @class */ (function () {
    function FirebaseStorageService() {
        this.firebaseStorage = window.firebase.storage();
    }
    FirebaseStorageService.prototype.uploadFile = function (file, fileName) {
        if (fileName === void 0) { fileName = 'image.jpg'; }
        var storageRef = this.firebaseStorage.ref();
        var imageRef = storageRef.child('uploads').child(fileName);
        return imageRef.put(file);
    };
    FirebaseStorageService.prototype.deleteFile = function (fileName) {
        if (fileName === void 0) { fileName = 'image.jpg'; }
        return __awaiter(this, void 0, void 0, function () {
            var storageRef, imageRef;
            return __generator(this, function (_a) {
                storageRef = this.firebaseStorage.ref();
                imageRef = storageRef.child("uploads/" + fileName);
                return [2 /*return*/, imageRef.delete()
                        .catch(function (error) {
                        if (error.code === 'storage/object-not-found') {
                            return;
                        }
                        throw (error);
                    })];
            });
        });
    };
    FirebaseStorageService = __decorate([
        Injectable({
            providedIn: 'root',
        })
    ], FirebaseStorageService);
    return FirebaseStorageService;
}());
export { FirebaseStorageService };
//# sourceMappingURL=firebase-storage.service.js.map