import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

// import { CodeSnippetModule } from '@common/code-snippet/code-snippet.module';
import { ImageSourceIntroComponent } from './image-source-intro.component';
import { ImageSourceIntroRoutingModule } from './image-source-intro.routes';
// import { FileUploaderModule } from '@common/file-uploader/file-uploader.module';

@NgModule({
  imports: [
    CommonModule,
    ImageSourceIntroRoutingModule,
    // CodeSnippetModule,
    // FileUploaderModule,
  ],
  declarations: [
    ImageSourceIntroComponent,
  ],
  exports: [
    ImageSourceIntroComponent,
  ],
})
export class ImageSourceIntroModule { }
