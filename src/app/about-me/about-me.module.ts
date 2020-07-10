import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { AppComponent } from '@src/app/app.component';
import { AboutMeComponent } from '@src/app/about-me/about-me.component';
import { AboutMeRoutingModule } from '@src/app/about-me/about-me.routes';
import { UserLoginModule } from '@src/app/user-login/user-login.module';
import { FileUploaderModule } from '@src/app/file-uploader/file-uploader.module';

@NgModule({
  imports: [
    AboutMeRoutingModule,
    CommonModule,
    FileUploaderModule,
    UserLoginModule,
  ],
  declarations: [
    AboutMeComponent,
  ],
  exports: [
    AboutMeComponent,
  ],
  providers: [],
})
export class AboutMeModule { }
