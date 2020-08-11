import { __decorate } from "tslib";
import { Injectable } from '@angular/core';
import { LocationData } from '@photo-gallery/models/index';
var UserLocationService = /** @class */ (function () {
    function UserLocationService() {
    }
    UserLocationService.prototype.getUserLocation = function () {
        return new Promise(function (resolve, reject) {
            var geolocationOptions = {
                enableHighAccuracy: false,
                maximumAge: 0,
            };
            navigator.geolocation.getCurrentPosition(function (userLocation) {
                var latitude = userLocation.coords.latitude;
                var longitude = userLocation.coords.longitude;
                var locationData = LocationData.fromLatLong(latitude, longitude, { locationSource: 'USER' });
                resolve(locationData);
            }, function (error) { return reject(error); }, geolocationOptions);
        });
    };
    UserLocationService = __decorate([
        Injectable()
    ], UserLocationService);
    return UserLocationService;
}());
export { UserLocationService };
//# sourceMappingURL=user-location.service.js.map