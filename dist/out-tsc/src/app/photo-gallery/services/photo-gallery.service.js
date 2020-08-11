import { __assign, __awaiter, __decorate, __generator } from "tslib";
import { Injectable } from '@angular/core';
import { Subject, of, } from 'rxjs';
import { map, switchMap, } from 'rxjs/operators';
import { sortBy } from 'lodash';
var PhotoGalleryService = /** @class */ (function () {
    function PhotoGalleryService(auth, firestore, storage, userLocationService, imageProcessing, exifService) {
        this.auth = auth;
        this.firestore = firestore;
        this.storage = storage;
        this.userLocationService = userLocationService;
        this.imageProcessing = imageProcessing;
        this.exifService = exifService;
    }
    PhotoGalleryService.prototype.deleteFile = function (fileId, user) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.storage.deleteFile(fileId)];
                    case 1:
                        _a.sent();
                        return [4 /*yield*/, this.firestore.unregisterFile(fileId, user)];
                    case 2:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    PhotoGalleryService.prototype.uploadFile = function (file, user) {
        return __awaiter(this, void 0, void 0, function () {
            var exifData, exifLocationData, locationData, _a, uploadDoc, insertedUploadDocRef, insertedUploadDoc, sizedFile, fileUploadResponse, downloadUrl, uploadMeta;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0: return [4 /*yield*/, this.exifService.getExifData(file)];
                    case 1:
                        exifData = _b.sent();
                        exifLocationData = this.exifService.getLocationData(exifData);
                        _a = exifLocationData;
                        if (_a) return [3 /*break*/, 3];
                        return [4 /*yield*/, this.userLocationService.getUserLocation()];
                    case 2:
                        _a = (_b.sent());
                        _b.label = 3;
                    case 3:
                        locationData = _a;
                        uploadDoc = {
                            userId: user.uid,
                            fileName: file.name,
                            locationData: __assign({}, locationData),
                        };
                        return [4 /*yield*/, this.firestore.insertUploadDoc(uploadDoc)];
                    case 4:
                        insertedUploadDocRef = _b.sent();
                        insertedUploadDoc = __assign(__assign({}, uploadDoc), { id: insertedUploadDocRef.id });
                        return [4 /*yield*/, this.firestore.addUploadToUser(insertedUploadDoc, user.uid)];
                    case 5:
                        _b.sent();
                        return [4 /*yield*/, this.imageProcessing.processImageFile(file, exifData)];
                    case 6:
                        sizedFile = _b.sent();
                        return [4 /*yield*/, this.storage.uploadFile(sizedFile, insertedUploadDoc.id)];
                    case 7:
                        fileUploadResponse = _b.sent();
                        return [4 /*yield*/, fileUploadResponse.ref.getDownloadURL()];
                    case 8:
                        downloadUrl = _b.sent();
                        uploadMeta = {
                            downloadUrl: downloadUrl,
                        };
                        return [4 /*yield*/, this.firestore.registerFileUploaded(insertedUploadDoc.id, uploadMeta, user)];
                    case 9:
                        _b.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    PhotoGalleryService.prototype.getUploadedFiles$ = function () {
        var _this = this;
        return this.auth.user$.pipe(switchMap(function (user) {
            if (!user) {
                return of([]);
            }
            else {
                return _this.firestore.getUploadedFiles$(user);
            }
        }));
    };
    PhotoGalleryService.prototype.getNearByUploadsForDistanceType$ = function (distanceType$) {
        var _this = this;
        return distanceType$.pipe(switchMap(function (distanceType) { return _this.getNearByUploads$(distanceType); }));
    };
    PhotoGalleryService.prototype.getNearByUploads$ = function (distanceType) {
        var _this = this;
        if (distanceType === void 0) { distanceType = 'WALK'; }
        var nearByUploadStreams$ = new Subject();
        var userLocation = this.userLocationService.getUserLocation()
            .then(function (userLocation) {
            var nearbyUploads$ = _this.firestore.getNearbyUploads$(userLocation, distanceType).pipe(map(function (uploads) {
                return sortBy(uploads, function (upload) {
                    return Math.pow(userLocation.latitude - upload.locationData.latitude, 2) + Math.pow(userLocation.longitude - upload.locationData.longitude, 2);
                });
            }));
            nearByUploadStreams$.next(nearbyUploads$);
        });
        return nearByUploadStreams$.pipe(switchMap(function (nearbyUploads$) { return nearbyUploads$; }));
    };
    PhotoGalleryService = __decorate([
        Injectable()
    ], PhotoGalleryService);
    return PhotoGalleryService;
}());
export { PhotoGalleryService };
//# sourceMappingURL=photo-gallery.service.js.map