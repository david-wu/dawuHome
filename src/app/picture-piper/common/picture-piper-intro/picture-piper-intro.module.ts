import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

// import { CodeSnippetModule } from '@common/code-snippet/code-snippet.module';
import { PicturePiperIntroComponent } from './picture-piper-intro.component';
import { PicturePiperIntroRoutingModule } from './picture-piper-intro.routes';
// import { FileUploaderModule } from '@common/file-uploader/file-uploader.module';

@NgModule({
  imports: [
    CommonModule,
    PicturePiperIntroRoutingModule,
    // CodeSnippetModule,
    // FileUploaderModule,
  ],
  declarations: [
    PicturePiperIntroComponent,
  ],
  exports: [
    PicturePiperIntroComponent,
  ],
})
export class PicturePiperIntroModule { }
