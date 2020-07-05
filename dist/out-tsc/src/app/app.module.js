import { __decorate } from "tslib";
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { Location, LocationStrategy, HashLocationStrategy } from '@angular/common';
import { FirebaseAuthWithRoutesModule } from '@src/app/firebase-auth/firebase-auth.module';
import { AppRoutingModule } from '@src/app/app-routing.module';
import { AppComponent } from '@src/app/app.component';
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        NgModule({
            imports: [
                NoopAnimationsModule,
                AppRoutingModule,
                FirebaseAuthWithRoutesModule,
            ],
            declarations: [
                AppComponent,
            ],
            providers: [
                Location,
                { provide: LocationStrategy, useClass: HashLocationStrategy },
            ],
            bootstrap: [AppComponent]
        })
    ], AppModule);
    return AppModule;
}());
export { AppModule };
//# sourceMappingURL=app.module.js.map