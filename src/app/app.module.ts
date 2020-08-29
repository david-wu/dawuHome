import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { Location, LocationStrategy, HashLocationStrategy } from '@angular/common';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';

import { UserLoginModule } from '@src/app/user-login/user-login.module';
import { AppRoutingModule } from '@src/app/app-routing.module';
import { AppComponent } from '@src/app/app.component';
import {
  FirebaseAuthService,
  FirebaseFirestoreService,
  FirebaseStorageService,
} from '@services/index';
import {
  AuthEffects,
  authReducer,
} from '@app/store/index';

@NgModule({
  imports: [
    NoopAnimationsModule,
    AppRoutingModule,
    UserLoginModule,
    StoreModule.forRoot({ auth: authReducer }),
    EffectsModule.forRoot([AuthEffects]),
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
export class AppModule { }
