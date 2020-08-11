import { __assign, __decorate } from "tslib";
import { Component, EventEmitter, Input, Output, ViewChild, ViewEncapsulation } from '@angular/core';
import { Fuzz } from 'fuzz-js';
import { each, isEqual, mapValues } from 'lodash';
import hljs from 'highlight.js/lib/highlight';
import typescript from 'highlight.js/lib/languages/typescript';
var DecoratorPair;
(function (DecoratorPair) {
    DecoratorPair[DecoratorPair["BOLD"] = 0] = "BOLD";
    DecoratorPair[DecoratorPair["ITALIC"] = 1] = "ITALIC";
})(DecoratorPair || (DecoratorPair = {}));
var OptionsAndCodeComponent = /** @class */ (function () {
    /**
     * constructor
     * @param {FormBuilder} fb
     * @param {[type]}
     */
    function OptionsAndCodeComponent(fb) {
        var _a;
        var _this = this;
        this.fb = fb;
        this.optionsChange = new EventEmitter();
        this.decoratorsByDecoratorPair = (_a = {},
            _a[DecoratorPair.BOLD] = {
                startDecorator: '<b>',
                endDecorator: '</b>',
            },
            _a[DecoratorPair.ITALIC] = {
                startDecorator: '<i>',
                endDecorator: '</i>',
            },
            _a);
        this.optionsFormGroup = this.fb.group({
            caseSensitive: [false],
            skipFilter: [false],
            skipSort: [false],
            filterThreshold: [0.4],
            decoratorPair: [DecoratorPair.BOLD],
        });
        this.DecoratorPair = DecoratorPair;
        this.optionsFormGroup.valueChanges.subscribe(function (values) {
            var options = _this.formGroupValuesToOptions(values);
            _this.optionsChange.emit(options);
        });
    }
    /**
     * ngOnChanges
     * @param {SimpleChanges} changes
     */
    OptionsAndCodeComponent.prototype.ngOnChanges = function (changes) {
        if (changes.options) {
            this.optionsFormGroup.patchValue(this.optionsToFormGroupValues(this.options), { emitEvent: false });
            this.styleCodeEl();
        }
    };
    /**
     * ngAfterViewInit
     */
    OptionsAndCodeComponent.prototype.ngAfterViewInit = function () {
        hljs.registerLanguage('typescript', typescript);
        this.styleCodeEl();
    };
    /**
     * optionsToFormGroupValues
     * @param  {Partial<Fuzz>} options
     * @return {any}
     */
    OptionsAndCodeComponent.prototype.optionsToFormGroupValues = function (options) {
        var optionsDecorators = {
            startDecorator: options.startDecorator,
            endDecorator: options.endDecorator,
        };
        var decoratorPair;
        each(this.decoratorsByDecoratorPair, function (decorators, pairKey) {
            if (isEqual(optionsDecorators, decorators)) {
                decoratorPair = Number(pairKey);
            }
        });
        return mapValues(this.optionsFormGroup.value, function (formValue, formKey) {
            if ((formKey === 'decoratorPair') && (decoratorPair !== undefined)) {
                return decoratorPair;
            }
            return (options[formKey] === undefined)
                ? formValue
                : options[formKey];
        });
    };
    /**
     * formGroupValuesToOptions
     * @param {any} values
     */
    OptionsAndCodeComponent.prototype.formGroupValuesToOptions = function (values) {
        var options = __assign(__assign({}, values), this.decoratorsByDecoratorPair[values.decoratorPair]);
        delete options.decoratorPair;
        return options;
    };
    /**
     * styleCodeEl
     * @return {string}
     */
    OptionsAndCodeComponent.prototype.styleCodeEl = function () {
        if (!this.codeEl) {
            return;
        }
        this.codeEl.nativeElement.textContent = this.getCodeString();
        hljs.highlightBlock(this.codeEl.nativeElement);
    };
    /**
     * getCodeString
     * @return {string}
     */
    OptionsAndCodeComponent.prototype.getCodeString = function () {
        var optionValues = this.formGroupValuesToOptions(this.optionsFormGroup.value);
        var optionsString = this.getOptionsString(optionValues);
        if (optionsString) {
            return ("import { Fuzz } from 'fuzz-js';\n\nconst inputData = [\n  // ...\n];\n" + optionsString + "\nconst results = Fuzz.search(inputData, 'searchQuery', options);\n");
        }
        else {
            return ("import { Fuzz } from 'fuzz-js';\n\nconst inputData = [\n  // ...\n];\nconst results = Fuzz.search(inputData, 'searchQuery');\n");
        }
    };
    /**
     * getOptionsString
     * @param  {any}    options
     * @return {string}
     */
    OptionsAndCodeComponent.prototype.getOptionsString = function (options) {
        var baseFuzz = new Fuzz();
        var optionDiffs = [];
        each(options, function (value, key) {
            if (baseFuzz[key] !== value) {
                optionDiffs.push([key, value]);
            }
        });
        if (!optionDiffs.length) {
            return '';
        }
        var optionsBody = optionDiffs
            .map(function (optionDiff) {
            return typeof optionDiff[1] === 'string'
                ? "  " + optionDiff[0] + ": '" + optionDiff[1] + "'"
                : "  " + optionDiff[0] + ": " + optionDiff[1];
        })
            .join(',\n');
        return ("const options = {\n" + optionsBody + "\n};");
    };
    __decorate([
        Input()
    ], OptionsAndCodeComponent.prototype, "options", void 0);
    __decorate([
        Output()
    ], OptionsAndCodeComponent.prototype, "optionsChange", void 0);
    __decorate([
        ViewChild('codeEl', { static: false })
    ], OptionsAndCodeComponent.prototype, "codeEl", void 0);
    OptionsAndCodeComponent = __decorate([
        Component({
            selector: 'app-options-and-code',
            templateUrl: './options-and-code.component.html',
            styleUrls: [
                '../../styles/pre-code.scss',
                '../../styles/monokai.css',
                './options-and-code.component.scss',
            ],
            encapsulation: ViewEncapsulation.None,
        })
    ], OptionsAndCodeComponent);
    return OptionsAndCodeComponent;
}());
export { OptionsAndCodeComponent };
//# sourceMappingURL=options-and-code.component.js.map