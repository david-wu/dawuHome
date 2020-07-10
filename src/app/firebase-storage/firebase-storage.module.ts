import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { FirebaseAuthModule } from '@src/app/firebase-auth/firebase-auth.module';
import { FileUploaderComponent } from '@src/app/firebase-storage/file-uploader/file-uploader.component';
import { FirebaseStorageService } from '@src/app/firebase-storage/firebase-storage.service';

@NgModule({
  declarations: [
    FileUploaderComponent,
  ],
  imports: [
    CommonModule,
    FirebaseAuthModule,
  ],
  exports: [
    FileUploaderComponent,
  ],
  providers: [
    FirebaseStorageService,
  ],
})
export class FirebaseStorageModule { }
