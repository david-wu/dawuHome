import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { UserLoginRoutingModule } from '@app/user-login/user-login.routes';
import { UserLoginComponent } from '@app/user-login/user-login.component';
import { UserLoginSuccessComponent } from '@app/user-login/user-login-success/user-login-success.component';
import { FirebaseAuthService } from '@services/firebase-auth.service'

@NgModule({
  declarations: [
    UserLoginComponent,
    UserLoginSuccessComponent,
  ],
  imports: [
    CommonModule,
    UserLoginRoutingModule,
  ],
  exports: [
    UserLoginComponent,
    UserLoginSuccessComponent,
  ],
  providers: [
    FirebaseAuthService,
  ],
})
export class UserLoginModule { }

// @NgModule({
//   declarations: [
//     UserLoginComponent,
//     UserLoginSuccessComponent,
//   ],
//   imports: [
//     CommonModule,
//   ],
//   exports: [
//     UserLoginComponent,
//     UserLoginSuccessComponent,
//   ],
//   providers: [],
// })
// export class FirebaseAuthModule { }

// @NgModule({
//   declarations: [],
//   imports: [
//     FirebaseAuthModule,
//     UserLoginRoutingModule,
//   ],
//   exports: [],
//   providers: [
//     FirebaseAuthService,
//   ],
// })
// export class FirebaseAuthWithRoutesModule { }
