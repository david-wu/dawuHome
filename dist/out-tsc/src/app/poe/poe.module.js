import { __decorate } from "tslib";
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { HttpClientModule, HttpClientJsonpModule, } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { PoeComponent } from '@src/app/poe/poe.component';
import { PoeRoutingModule } from '@src/app/poe/poe.routes';
// import { FirebaseAuthModule } from '@src/app/firebase-auth/firebase-auth.module';
import { PoeService } from '@src/app/poe/services/poe.service';
var PoeModule = /** @class */ (function () {
    function PoeModule() {
    }
    PoeModule = __decorate([
        NgModule({
            declarations: [
                PoeComponent,
            ],
            imports: [
                PoeRoutingModule,
                FormsModule,
                CommonModule,
                HttpClientModule,
                HttpClientJsonpModule,
            ],
            exports: [
                PoeComponent,
            ],
            providers: [
                PoeService,
            ],
        })
    ], PoeModule);
    return PoeModule;
}());
export { PoeModule };
//# sourceMappingURL=poe.module.js.map