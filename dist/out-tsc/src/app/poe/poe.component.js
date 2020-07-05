import { __decorate } from "tslib";
import { Component } from '@angular/core';
var PoeComponent = /** @class */ (function () {
    function PoeComponent(poeService) {
        this.poeService = poeService;
    }
    PoeComponent.prototype.ngOnInit = function () {
        // https://www.pathofexile.com/character-window/get-stash-items?league=Harvest&tabs=1&tabIndex=18&accountName=Dawu
        // this.poeService.getPublicStashes('dawu').subscribe((poeResponse) => {
        //   console.log('poeResponse', poeResponse)
        // });
        // this.parseJsonStr(jsonStr);
    };
    PoeComponent.prototype.onJsonChange = function (jsonStr) {
        this.parseJsonStr(jsonStr);
    };
    PoeComponent.prototype.parseJsonStr = function (jsonStr) {
        var json;
        try {
            json = JSON.parse(jsonStr);
        }
        catch (err) {
            this.jsonParseError = err;
            return;
        }
        console.log('json', json);
        var explicitModifiersByItemId = {};
        var itemNamesById = {};
        var modNames = [];
        json.items.forEach(function (item) {
            var explicitMods = item.explicitMods || [];
            explicitModifiersByItemId[item.id] = explicitMods;
            itemNamesById[item.id] = item.name;
            explicitMods.forEach(function (mod) {
                var matchedValues = [];
                var regex = /[0-9]+/ig;
                var modName = mod.replace(regex, function (matchVal) {
                    matchedValues.push(matchVal);
                    return '_';
                });
                modNames.push(modName);
            });
        });
        console.log('modNames', modNames);
    };
    PoeComponent = __decorate([
        Component({
            selector: 'poe',
            templateUrl: './poe.component.html',
            styleUrls: ['./poe.component.scss']
        })
    ], PoeComponent);
    return PoeComponent;
}());
export { PoeComponent };
//# sourceMappingURL=poe.component.js.map