import { __decorate } from "tslib";
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { Location, LocationStrategy, HashLocationStrategy } from '@angular/common';
import { UserLoginModule } from '@src/app/user-login/user-login.module';
import { AppRoutingModule } from '@src/app/app-routing.module';
import { AppComponent } from '@src/app/app.component';
import { FirebaseAuthService, FirebaseFirestoreService, FirebaseStorageService, } from '@services/index';
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        NgModule({
            imports: [
                NoopAnimationsModule,
                AppRoutingModule,
                UserLoginModule,
            ],
            declarations: [
                AppComponent,
            ],
            providers: [
                Location,
                { provide: LocationStrategy, useClass: HashLocationStrategy },
                FirebaseAuthService,
                FirebaseFirestoreService,
                FirebaseStorageService,
            ],
            bootstrap: [AppComponent]
        })
    ], AppModule);
    return AppModule;
}());
export { AppModule };
//# sourceMappingURL=app.module.js.map