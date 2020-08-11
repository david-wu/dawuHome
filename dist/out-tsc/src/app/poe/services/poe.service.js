import { __decorate } from "tslib";
import { Injectable } from '@angular/core';
var PoeService = /** @class */ (function () {
    // public poeEndpoint = `http://www.pathofexile.com/api/public-stash-tabs?accountName=dawu`;
    // public poeEndpoint = 'http://www.pathofexile.com/api/public-stash-tabs';
    function PoeService(http) {
        this.http = http;
    }
    PoeService.prototype.getPublicStashes = function (accountName) {
        // let HttpHeaders  = new Headers();
        // headers.append('authority', 'www.pathofexile.com');
        return this.http.get('/api/poe');
        //   params: {
        //     accountName: accountName,
        //   },
        //   // headers: new HttpHeaders({
        //   //   authority: 'www.pathofexile.com',
        //   // }),
        // });
        // return this.http.jsonp(this.poeEndpoint, 'callback');
        // return this.http.jsonp(this.poeEndpoint, 'callback');
    };
    PoeService = __decorate([
        Injectable()
    ], PoeService);
    return PoeService;
}());
export { PoeService };
//# sourceMappingURL=poe.service.js.map