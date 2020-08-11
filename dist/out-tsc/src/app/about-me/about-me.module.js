import { __decorate } from "tslib";
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { AboutMeComponent } from '@src/app/about-me/about-me.component';
import { AboutMeRoutingModule } from '@src/app/about-me/about-me.routes';
// import { UserLoginModule } from '@src/app/user-login/user-login.module';
// import { FileUploaderModule } from '@src/app/file-uploader/file-uploader.module';
var AboutMeModule = /** @class */ (function () {
    function AboutMeModule() {
    }
    AboutMeModule = __decorate([
        NgModule({
            imports: [
                AboutMeRoutingModule,
                CommonModule,
            ],
            declarations: [
                AboutMeComponent,
            ],
            exports: [
                AboutMeComponent,
            ],
            providers: [],
        })
    ], AboutMeModule);
    return AboutMeModule;
}());
export { AboutMeModule };
//# sourceMappingURL=about-me.module.js.map