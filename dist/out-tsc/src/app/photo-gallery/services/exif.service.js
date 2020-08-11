import { __decorate } from "tslib";
import { Injectable } from '@angular/core';
import * as EXIFStatic from 'exif-js';
import { LocationData } from '@photo-gallery/models/index';
var ExifService = /** @class */ (function () {
    function ExifService() {
    }
    ExifService.prototype.getExifData = function (file) {
        return new Promise(function (resolve, reject) {
            var reader = new FileReader();
            reader.onloadend = function () {
                var arrayBuffer = reader.result;
                var exif = EXIFStatic.EXIF.readFromBinaryFile(arrayBuffer);
                resolve(exif);
            };
            reader.readAsArrayBuffer(file);
        });
    };
    ExifService.prototype.getLocationData = function (exif) {
        if (!exif || !exif.GPSLatitude) {
            return;
        }
        var latitudeMag = exif.GPSLatitude[0] + (exif.GPSLatitude[1] / 60) + (exif.GPSLatitude[2] / 3600);
        var longitudeMag = exif.GPSLongitude[0] + (exif.GPSLongitude[1] / 60) + (exif.GPSLongitude[2] / 3600);
        var latitude = (exif.GPSLatitudeRef === 'N') ? latitudeMag : -latitudeMag;
        var longitude = (exif.GPSLongitudeRef === 'E') ? longitudeMag : -longitudeMag;
        var locationData = LocationData.fromLatLong(latitude, longitude, { locationSource: 'EXIF' });
        return locationData;
    };
    ExifService = __decorate([
        Injectable()
    ], ExifService);
    return ExifService;
}());
export { ExifService };
//# sourceMappingURL=exif.service.js.map