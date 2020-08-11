import { __decorate } from "tslib";
import { Component, Input } from '@angular/core';
var FuzzalyticsComponent = /** @class */ (function () {
    function FuzzalyticsComponent() {
        var _this = this;
        this.traversedCellsIndex = [];
        this.viewOps = true;
        this.legendScores = [1, 0.75, 0.5, 0.25, 0];
        this.legendScoreColors = this.legendScores.map(function (legendScore) { return _this.getColorByScore(legendScore); });
    }
    FuzzalyticsComponent.prototype.ngOnChanges = function (changes) {
        var _this = this;
        if (changes.fuzzItem || changes.fuzzalyticsByFuzzItem) {
            this.fuzzalytics = this.fuzzalyticsByFuzzItem ? this.fuzzalyticsByFuzzItem.get(this.fuzzItem) : undefined;
            this.subjectArr = this.fuzzItem.subject.split('');
            this.subjectArr.unshift(' ');
            this.subjectArr.unshift(' ');
            this.queryArr = this.fuzzItem.query.split('');
            this.queryArr.unshift(' ');
            this.queryArr.unshift(' ');
            this.traversedCellsIndex = [];
            this.fuzzalytics.traversedCells.forEach(function (cell) {
                _this.traversedCellsIndex[cell[0]] = _this.traversedCellsIndex[cell[0]] || [];
                _this.traversedCellsIndex[cell[0]][cell[1]] = true;
            });
            this.worstPossibleEditDistance = this.fuzzalytics.worstPossibleEditDistance;
        }
    };
    FuzzalyticsComponent.prototype.getColorByEditDistance = function (editDistance, worstPossible) {
        if (worstPossible === void 0) { worstPossible = this.worstPossibleEditDistance; }
        var score = 1 - (editDistance / worstPossible);
        return this.getColorByScore(score);
    };
    FuzzalyticsComponent.prototype.getColorByScore = function (score) {
        var normalizedScore = Math.round(score * 255);
        var oppositeScore = 255 - normalizedScore;
        var normalizedHex = normalizedScore.toString(16).padStart(2, '0');
        var oppositeHex = oppositeScore.toString(16).padStart(2, '0');
        return "#" + oppositeHex + normalizedHex + "88";
    };
    __decorate([
        Input()
    ], FuzzalyticsComponent.prototype, "fuzzItem", void 0);
    __decorate([
        Input()
    ], FuzzalyticsComponent.prototype, "fuzzalyticsByFuzzItem", void 0);
    FuzzalyticsComponent = __decorate([
        Component({
            selector: 'app-fuzzalytics',
            templateUrl: './fuzzalytics.component.html',
            styleUrls: ['./fuzzalytics.component.scss']
        })
    ], FuzzalyticsComponent);
    return FuzzalyticsComponent;
}());
export { FuzzalyticsComponent };
//# sourceMappingURL=fuzzalytics.component.js.map