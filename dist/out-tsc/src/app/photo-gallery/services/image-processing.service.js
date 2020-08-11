import { __awaiter, __decorate, __generator } from "tslib";
import { Injectable } from '@angular/core';
import * as Jimp from 'jimp';
var ImageProcessingService = /** @class */ (function () {
    function ImageProcessingService() {
        this.quarterTurnOrientations = new Set([5, 6, 7, 8]);
    }
    ImageProcessingService_1 = ImageProcessingService;
    ImageProcessingService.prototype.processImageFile = function (file, exifData) {
        return __awaiter(this, void 0, void 0, function () {
            var jimp, orientation;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.getJimpFromFile(file)];
                    case 1:
                        jimp = _a.sent();
                        orientation = exifData && exifData.Orientation;
                        jimp = jimp.quality(80);
                        jimp = this.resizeImage(jimp, orientation);
                        jimp = this.uprightImage(jimp, orientation);
                        return [4 /*yield*/, this.getFileFromJimp(jimp, file.name)];
                    case 2: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    ImageProcessingService.prototype.uprightImage = function (jimp, orientation) {
        if (orientation === 5 || orientation === 6) {
            jimp = jimp.rotate(90);
        }
        if (orientation === 7 || orientation === 8) {
            jimp = jimp.rotate(270);
        }
        if (orientation === 3 || orientation === 4) {
            jimp = jimp.rotate(180);
        }
        return jimp;
    };
    ImageProcessingService.prototype.resizeImage = function (jimp, orientation) {
        if (this.quarterTurnOrientations.has(orientation)) {
            jimp = jimp.resize(Jimp.AUTO, ImageProcessingService_1.imageSizes.lg);
        }
        else {
            jimp = jimp.resize(ImageProcessingService_1.imageSizes.lg, Jimp.AUTO);
        }
        return jimp;
    };
    ImageProcessingService.prototype.getJimpFromFile = function (file) {
        return __awaiter(this, void 0, void 0, function () {
            var fileBlob, fileBuffer;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        fileBlob = new Blob([file]);
                        return [4 /*yield*/, fileBlob.arrayBuffer()];
                    case 1:
                        fileBuffer = _a.sent();
                        return [4 /*yield*/, Jimp.read(fileBuffer)];
                    case 2: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    ImageProcessingService.prototype.getFileFromJimp = function (jimpImage, fileName) {
        return new Promise(function (resolve, reject) {
            jimpImage.getBuffer(Jimp.MIME_JPEG, function (err, buffer) {
                if (err) {
                    reject(err);
                }
                var newBlob = new Blob([buffer]);
                var file = new File([newBlob], fileName);
                resolve(file);
            });
        });
    };
    var ImageProcessingService_1;
    ImageProcessingService.imageSizes = {
        lg: 1080,
        md: 640,
        sm: 320,
        xs: 150,
    };
    ImageProcessingService = ImageProcessingService_1 = __decorate([
        Injectable()
    ], ImageProcessingService);
    return ImageProcessingService;
}());
export { ImageProcessingService };
//# sourceMappingURL=image-processing.service.js.map