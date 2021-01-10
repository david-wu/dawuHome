import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

// import { CodeSnippetModule } from '@common/code-snippet/code-snippet.module';
import { PicturePiperIntroComponent } from '@src/app/picture-piper/common/picture-piper-intro/picture-piper-intro.component';
import { PicturePiperIntroRoutingModule } from '@src/app/picture-piper/common/picture-piper-intro/picture-piper-intro.routes';
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
