import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import {
  HttpClientModule,
  HttpClientJsonpModule,
} from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { AppComponent } from '@src/app/app.component';
import { PoeComponent } from '@src/app/poe/poe.component';
import { PoeRoutingModule } from '@src/app/poe/poe.routes';
// import { FirebaseAuthModule } from '@src/app/firebase-auth/firebase-auth.module';
import { PoeService } from '@src/app/poe/services/poe.service';

@NgModule({
  declarations: [
    PoeComponent,
  ],
  imports: [
    PoeRoutingModule,
    FormsModule,
    CommonModule,
    HttpClientModule,
    HttpClientJsonpModule,
    // FirebaseAuthModule,
  ],
  exports: [
    PoeComponent,
  ],
  providers: [
    PoeService,
  ],
})
export class PoeModule { }
