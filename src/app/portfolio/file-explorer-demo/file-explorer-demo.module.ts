import { NgModule } from '@angular/core';
import { CommonModule as NgCommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { FileExplorerDemoComponent } from './file-explorer-demo.component';
import { TooltipModule } from '@common/tooltip/tooltip.module';
import { CodeSnippetModule } from '@src/app/portfolio/code-snippet/code-snippet.module';
import { FileExplorerModule } from '@common/file-explorer/file-explorer.module';

@NgModule({
  imports: [
    NgCommonModule,
    TooltipModule,
    FormsModule,
    CodeSnippetModule,
    FileExplorerModule,
  ],
  declarations: [
    FileExplorerDemoComponent,
  ],
  exports: [
    FileExplorerDemoComponent,
  ],
})
export class FileExplorerDemoModule { }
