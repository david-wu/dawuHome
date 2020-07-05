import { __decorate } from "tslib";
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { AboutMeComponent } from '@src/app/about-me/about-me.component';
import { AboutMeRoutingModule } from '@src/app/about-me/about-me.routes';
import { FirebaseAuthModule } from '@src/app/firebase-auth/firebase-auth.module';
var AboutMeModule = /** @class */ (function () {
    function AboutMeModule() {
    }
    AboutMeModule = __decorate([
        NgModule({
            declarations: [
                AboutMeComponent,
            ],
            imports: [
                AboutMeRoutingModule,
                CommonModule,
                FirebaseAuthModule,
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