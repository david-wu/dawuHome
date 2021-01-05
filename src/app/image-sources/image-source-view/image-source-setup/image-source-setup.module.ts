import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { CodeSnippetModule } from '@common/code-snippet/code-snippet.module';
import { ImageSourceSetupComponent } from './image-source-setup.component';
import { ImageSourceTokensListComponent } from './image-source-tokens-list/image-source-tokens-list.component';
import { ImageSourceSetupRoutingModule } from './image-source-setup.routes';
import { FileExplorerModule } from '@file-explorer/file-explorer.module';
import { SearchInputModule } from '@src/app/common/search-input/search-input.module';

@NgModule({
  imports: [
    CommonModule,
    CodeSnippetModule,
    FileExplorerModule,
    SearchInputModule,
    ImageSourceSetupRoutingModule,
  ],
  declarations: [
    ImageSourceSetupComponent,
    ImageSourceTokensListComponent,
  ],
  exports: [
    ImageSourceSetupComponent,
    ImageSourceTokensListComponent,
  ],
})
export class ImageSourceSetupModule { }
