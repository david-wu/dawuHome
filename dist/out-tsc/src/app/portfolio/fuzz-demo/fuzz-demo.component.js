import { __decorate } from "tslib";
import { Component, ViewEncapsulation, } from '@angular/core';
import hljs from 'highlight.js/lib/highlight';
import typescript from 'highlight.js/lib/languages/typescript';
var FuzzDemoComponent = /** @class */ (function () {
    function FuzzDemoComponent(hostEl) {
        this.hostEl = hostEl;
        this.codeBlocks = {
            howToUse: "import { Fuzz } from 'fuzz-js';\n\nconst users = [\n  { name: 'Allen' },\n  { name: 'Maggie' },\n  { name: 'Margret' },\n];\nconst results = Fuzz.filter(users, 'mggi');\n  // -> [ { name: \"Maggie\" } ]",
            howToUseHard: "import { Fuzz } from 'fuzz-js';\n\nconst users = [\n  { name: 'Allen', occupation: 'therapist' },\n  { name: 'Maggie', occupation: 'musician' },\n  { name: 'Margret', occupation: 'magician' },\n];\nconst options = {\n  subjectKeys: ['occupation'],\n  startDecorator: '<i>',\n  endDecorator: '</i>',\n};\nconst results = Fuzz.search(users, 'maggi', options);\n  /**\n   *\n   *  [\n   *    {\n   *      \"original\": { \"name\": \"Margret\", \"occupation\": \"magician\" },\n   *      \"key\": \"occupation\",\n   *      \"subject\": \"magician\",\n   *      \"query\": \"maggi\",\n   *      \"editDistance\": 108,\n   *      \"score\": 0.7874015748031495,\n   *      \"matchRanges\": [[0, 3]],\n   *      \"styledString\": \"<i>magi</i>cian\"\n   *    }\n   *  ]\n   */",
        };
    }
    FuzzDemoComponent.prototype.ngAfterViewInit = function () {
        hljs.registerLanguage('typescript', typescript);
        var allCodeBlocks = this.hostEl.nativeElement.querySelectorAll('pre code')
            .forEach(function (codeBlock) { return hljs.highlightBlock(codeBlock); });
    };
    FuzzDemoComponent = __decorate([
        Component({
            selector: 'dwu-fuzz-demo',
            templateUrl: './fuzz-demo.component.html',
            styleUrls: [
                './styles/pre-code.scss',
                './styles/monokai.css',
                './fuzz-demo.component.scss',
            ],
            encapsulation: ViewEncapsulation.None,
        })
    ], FuzzDemoComponent);
    return FuzzDemoComponent;
}());
export { FuzzDemoComponent };
//# sourceMappingURL=fuzz-demo.component.js.map