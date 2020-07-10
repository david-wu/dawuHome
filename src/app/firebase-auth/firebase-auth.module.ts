import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { FirebaseAuthRoutingModule } from '@firebase-auth/firebase-auth.routes';
import { FirebaseAuthComponent } from '@firebase-auth/firebase-auth.component';
import { FirebaseAuthSuccessComponent } from '@firebase-auth/firebase-auth-success/firebase-auth-success.component';
import { FirebaseAuthService } from '@firebase-auth/firebase-auth.service'

@NgModule({
  declarations: [
    FirebaseAuthComponent,
    FirebaseAuthSuccessComponent,
  ],
  imports: [
    CommonModule,
  ],
  exports: [
    FirebaseAuthComponent,
    FirebaseAuthSuccessComponent,
  ],
  providers: [],
})
export class FirebaseAuthModule { }

@NgModule({
  declarations: [],
  imports: [
    FirebaseAuthModule,
    FirebaseAuthRoutingModule,
  ],
  exports: [],
  providers: [
    FirebaseAuthService,
  ],
})
export class FirebaseAuthWithRoutesModule { }
