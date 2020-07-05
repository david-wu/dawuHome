import { __decorate } from "tslib";
import { ChangeDetectionStrategy, Component, Input, } from '@angular/core';
import { isEqual, } from 'lodash';
var TextDecoratorComponent = /** @class */ (function () {
    function TextDecoratorComponent() {
        this.text = '';
        this.matchRanges = [];
        this.ignoreUpdates = false;
        this.spanElements = [];
    }
    TextDecoratorComponent.prototype.ngOnChanges = function (changes) {
        if (this.ignoreUpdates) {
            return;
        }
        if (changes.text || changes.matchRanges) {
            var willResultingElementsChange = changes.text || !isEqual(changes.matchRanges.currentValue, changes.matchRanges.previousValue);
            if (willResultingElementsChange) {
                this.spanElements = this.getSpanElements();
            }
        }
    };
    TextDecoratorComponent.prototype.getSpanElements = function () {
        var indicesDecorated = new Set();
        this.matchRanges.forEach(function (matchRange) {
            for (var i = matchRange[0]; i <= matchRange[1]; i++) {
                indicesDecorated.add(i);
            }
        });
        var spanElements = [];
        var previousIndex = 0;
        var isPreviousDecorated = indicesDecorated.has(0);
        var isCurrentDecorated;
        for (var i = 1; i < this.text.length; i++) {
            isCurrentDecorated = indicesDecorated.has(i);
            if (isPreviousDecorated !== isCurrentDecorated) {
                spanElements.push({
                    text: this.text.slice(previousIndex, i),
                    isDecorated: isPreviousDecorated,
                });
                previousIndex = i;
                isPreviousDecorated = isCurrentDecorated;
            }
        }
        spanElements.push({
            text: this.text.slice(previousIndex),
            isDecorated: isCurrentDecorated,
        });
        return spanElements;
    };
    TextDecoratorComponent.prototype.trackByFn = function (spanElement) {
        return "" + spanElement.text + spanElement.isDecorated;
    };
    __decorate([
        Input()
    ], TextDecoratorComponent.prototype, "text", void 0);
    __decorate([
        Input()
    ], TextDecoratorComponent.prototype, "matchRanges", void 0);
    __decorate([
        Input()
    ], TextDecoratorComponent.prototype, "ignoreUpdates", void 0);
    TextDecoratorComponent = __decorate([
        Component({
            selector: 'dwu-text-decorator',
            templateUrl: './text-decorator.component.html',
            styleUrls: ['./text-decorator.component.scss'],
            changeDetection: ChangeDetectionStrategy.OnPush
        })
    ], TextDecoratorComponent);
    return TextDecoratorComponent;
}());
export { TextDecoratorComponent };
//# sourceMappingURL=text-decorator.component.js.map