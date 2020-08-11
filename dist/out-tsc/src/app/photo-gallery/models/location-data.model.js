import { __assign } from "tslib";
import Geohash from 'latlon-geohash';
import { S2 } from 's2-geometry';
import { padStart } from 'lodash';
var LocationData = /** @class */ (function () {
    function LocationData() {
    }
    LocationData.fromLatLong = function (latitude, longitude, overrides) {
        if (overrides === void 0) { overrides = {}; }
        var geohash = Geohash.encode(latitude, longitude, 12);
        var s2Key = S2.latLngToKey(latitude, longitude, 30);
        var s2Id = padStart(S2.keyToId(s2Key), 22, '0');
        return Object.assign(new LocationData(), __assign({ latitude: latitude,
            longitude: longitude,
            geohash: geohash,
            s2Id: s2Id }, overrides));
    };
    return LocationData;
}());
export { LocationData };
//# sourceMappingURL=location-data.model.js.map