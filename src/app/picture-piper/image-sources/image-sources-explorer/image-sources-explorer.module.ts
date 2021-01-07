import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { FileExplorerModule } from '@file-explorer/file-explorer.module';
import { ImageSourcesExplorerComponent } from './image-sources-explorer.component';

@NgModule({
  imports: [
    CommonModule,
    FileExplorerModule,
  ],
  declarations: [
    ImageSourcesExplorerComponent,
  ],
  exports: [
    ImageSourcesExplorerComponent,
  ],
})
export class ImageSourcesExplorerModule { }
