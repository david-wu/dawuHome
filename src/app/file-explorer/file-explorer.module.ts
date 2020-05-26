import { NgModule } from '@angular/core';
import { DragulaModule } from 'ng2-dragula';
import { CommonModule as NgCommonModule } from '@angular/common';
import { ScrollingModule } from '@angular/cdk/scrolling';

import { CommonModule } from '@src/app/common/common.module';
import { FileExplorerComponent } from './file-explorer.component';

@NgModule({
  imports: [
    NgCommonModule,
    CommonModule,
    DragulaModule,
    ScrollingModule,
  ],
  declarations: [
    FileExplorerComponent,
  ],
  exports: [
    FileExplorerComponent,
  ],
  providers: [],
})
export class FileExplorerModule { }

