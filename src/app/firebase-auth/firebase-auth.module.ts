import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { FirebaseAuthRoutingModule } from '@src/app/firebase-auth/firebase-auth.routes';

import { FirebaseAuthComponent } from '@src/app/firebase-auth/firebase-auth.component';
import { FirebaseAuthSuccessComponent } from '@src/app/firebase-auth/firebase-auth-success/firebase-auth-success.component';

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
  providers: [],
})
export class FirebaseAuthWithRoutesModule { }
