import { __decorate } from "tslib";
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
// import { FirebaseAuthModule } from '@src/app/firebase-auth/firebase-auth.module';
import { FileUploaderComponent } from '@app/file-uploader/file-uploader.component';
import { FirebaseStorageService } from '@services/firebase-storage.service';
var FileUploaderModule = /** @class */ (function () {
    function FileUploaderModule() {
    }
    FileUploaderModule = __decorate([
        NgModule({
            declarations: [
                FileUploaderComponent,
            ],
            imports: [
                CommonModule,
            ],
            exports: [
                FileUploaderComponent,
            ],
            providers: [
                FirebaseStorageService,
            ],
        })
    ], FileUploaderModule);
    return FileUploaderModule;
}());
export { FileUploaderModule };
//# sourceMappingURL=file-uploader.module.js.map