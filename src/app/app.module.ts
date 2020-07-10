import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { Location, LocationStrategy, HashLocationStrategy } from '@angular/common';

import { UserLoginModule } from '@src/app/user-login/user-login.module';
import { AppRoutingModule } from '@src/app/app-routing.module';
import { AppComponent } from '@src/app/app.component';
import {
  FirebaseAuthService,
  FirebaseFirestoreService,
  FirebaseStorageService,
} from '@services/index';

@NgModule({
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
export class AppModule { }
