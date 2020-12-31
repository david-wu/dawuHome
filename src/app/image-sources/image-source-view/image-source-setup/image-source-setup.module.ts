import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { CodeSnippetModule } from '@common/code-snippet/code-snippet.module';
import { ImageSourceSetupComponent } from './image-source-setup.component';
import { ImageSourceSetupRoutingModule } from './image-source-setup.routes';

@NgModule({
  imports: [
    CommonModule,
    CodeSnippetModule,
    ImageSourceSetupRoutingModule,
  ],
  declarations: [
    ImageSourceSetupComponent,
  ],
  exports: [
    ImageSourceSetupComponent,
  ],
})
export class ImageSourceSetupModule { }
