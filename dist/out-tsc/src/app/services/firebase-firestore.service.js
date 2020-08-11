import { __assign, __awaiter, __decorate, __generator } from "tslib";
import { Injectable } from '@angular/core';
import { Subject, } from 'rxjs';
import { padStart } from 'lodash';
// import { bigInt, BigInteger } from 'big-integer';
var bigInt = require('big-integer');
var FirebaseFirestoreService = /** @class */ (function () {
    function FirebaseFirestoreService() {
        this.firestore = window.firebase.firestore();
    }
    FirebaseFirestoreService.prototype.updateUser = function (user) {
        var userDoc = this.firestore.doc("users/" + user.uid);
        userDoc.set(__assign({}, user));
    };
    FirebaseFirestoreService.prototype.unregisterFile = function (fileId, user) {
        return __awaiter(this, void 0, void 0, function () {
            var userDoc, uploadDoc;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        userDoc = this.firestore.doc("users/" + user.uid + "/uploads/" + fileId);
                        return [4 /*yield*/, userDoc.delete()];
                    case 1:
                        _a.sent();
                        uploadDoc = this.firestore.doc("uploads/" + fileId);
                        return [4 /*yield*/, uploadDoc.delete()];
                    case 2: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    /**
     * insertUploadDoc
     * Initial creation of upload document
     * @param {File} file
     * @param {User} user
     * @return {Promise<DocumentReference>} docRef
     */
    FirebaseFirestoreService.prototype.insertUploadDoc = function (uploadDoc) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.firestore.collection('uploads').add(uploadDoc)];
                    case 1: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    FirebaseFirestoreService.prototype.addUploadToUser = function (uploadDoc, userUid) {
        return __awaiter(this, void 0, void 0, function () {
            var userUploadDoc;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        userUploadDoc = this.firestore.doc("users/" + userUid + "/uploads/" + uploadDoc.id);
                        return [4 /*yield*/, userUploadDoc.set(uploadDoc)];
                    case 1: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    FirebaseFirestoreService.prototype.registerFileUploaded = function (fileId, uploadMeta, user) {
        return __awaiter(this, void 0, void 0, function () {
            var uploadIndexDoc, uploadDoc;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        uploadIndexDoc = this.firestore.doc("uploads/" + fileId);
                        return [4 /*yield*/, uploadIndexDoc.update({
                                isUploaded: true,
                                uploadMeta: uploadMeta,
                            })];
                    case 1:
                        _a.sent();
                        uploadDoc = this.firestore.doc("users/" + user.uid + "/uploads/" + fileId);
                        return [2 /*return*/, uploadDoc.update({
                                isUploaded: true,
                                uploadMeta: uploadMeta,
                            })];
                }
            });
        });
    };
    FirebaseFirestoreService.prototype.getUploadedFiles$ = function (user) {
        var collection = this.firestore.doc("users/" + user.uid).collection('uploads');
        var uploadedFiles$ = new Subject();
        // collection.where('isUploaded', "==", true)
        collection.onSnapshot(function (querySnapshot) {
            var docs = querySnapshot.docs.map(function (doc) {
                return __assign(__assign({}, doc.data()), { id: doc.id });
            });
            uploadedFiles$.next(docs);
        });
        return uploadedFiles$;
    };
    FirebaseFirestoreService.prototype.getNearbyUploads$ = function (userLocation, distanceType) {
        // const walkingRange = userLocation.geohash.slice(0, 5);
        // const lastGeohashChar = walkingRange[walkingRange.length - 1];
        // const nextGeohashChar = String.fromCharCode(lastGeohashChar.charCodeAt(0) + 1);
        // const walkingRangeEnd = userLocation.geohash.slice(0, 4) + nextGeohashChar;
        // const collection = this.firestore.collection(`uploads`)
        //   .where('locationData.geohash', ">=", walkingRange)
        //   .where('locationData.geohash', "<=", walkingRangeEnd);
        // lake merritt
        // const walkingDistanceInS2 = Math.pow(10, 12);
        // oakland
        // const walkingDistanceInS2 = Math.pow(10, 13);
        var distanceTargetsByType = {
            WALK: Math.pow(10, 12) * 7,
            BIKE: Math.pow(10, 12) * 7 * 5,
            DRIVE: Math.pow(10, 12) * 7 * 5 * 40,
        };
        var distanceTargetInS2 = bigInt(distanceTargetsByType[distanceType]);
        var userS2 = bigInt(userLocation.s2Id);
        // ignore first 4 chars to avoid big math
        // const preKeyStr = userLocation.s2Id.slice(0, 4);
        // const keyNum = Number(userLocation.s2Id.slice(4));
        var walkingRange = [
            padStart(userS2.minus(distanceTargetInS2).toString(), 22, '0'),
            padStart(userS2.add(distanceTargetInS2).toString(), 22, '0'),
        ];
        // const walkingRange = [
        //   String(Number(userLocation.s2Id) - walkingDistanceInS2),
        //   String(Number(userLocation.s2Id) + walkingDistanceInS2),
        // ];
        // const lastGeohashChar = walkingRange[walkingRange.length - 1];
        // const nextGeohashChar = String.fromCharCode(lastGeohashChar.charCodeAt(0) + 1);
        // const walkingRangeEnd = userLocation.geohash.slice(0, 4) + nextGeohashChar;
        var collection = this.firestore.collection("uploads")
            .where('locationData.s2Id', ">=", walkingRange[0])
            .where('locationData.s2Id', "<=", walkingRange[1]);
        // client filtering
        // const userLoc = [
        //   userLocation.latitude,
        //   userLocation.longitude,
        // ];
        // const milesAway = 0.5;
        // const degreesAway = milesAway / 69;
        // const uploadLatitudeBounds = [
        //   userLoc[0] - milesAway,
        //   userLoc[0] + milesAway,
        // ];
        // const uploadLongitudeBounds = [
        //   userLoc[1] - milesAway,
        //   userLoc[1] + milesAway,
        // ];
        var nearbyUploads$ = new Subject();
        collection.onSnapshot(function (querySnapshot) {
            var docs = querySnapshot.docs.map(function (doc) {
                return __assign(__assign({}, doc.data()), { id: doc.id });
            });
            nearbyUploads$.next(docs);
        });
        return nearbyUploads$;
    };
    FirebaseFirestoreService = __decorate([
        Injectable({
            providedIn: 'root',
        })
    ], FirebaseFirestoreService);
    return FirebaseFirestoreService;
}());
export { FirebaseFirestoreService };
//# sourceMappingURL=firebase-firestore.service.js.map