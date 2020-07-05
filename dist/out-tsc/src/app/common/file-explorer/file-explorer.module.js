import { __decorate } from "tslib";
import { NgModule } from '@angular/core';
import { DragulaModule } from 'ng2-dragula';
import { CommonModule as NgCommonModule } from '@angular/common';
import { ScrollingModule } from '@angular/cdk/scrolling';
import { CommonModule } from '@src/app/common/common.module';
import { FileExplorerComponent } from './file-explorer.component';
var FileExplorerModule = /** @class */ (function () {
    function FileExplorerModule() {
    }
    FileExplorerModule = __decorate([
        NgModule({
            imports: [
                NgCommonModule,
                CommonModule,
                DragulaModule,
                ScrollingModule,
            ],
            declarations: [
                FileExplorerComponent,
            ],
            exports: [
                FileExplorerComponent,
            ],
            providers: [],
        })
    ], FileExplorerModule);
    return FileExplorerModule;
}());
export { FileExplorerModule };
//# sourceMappingURL=file-explorer.module.js.map