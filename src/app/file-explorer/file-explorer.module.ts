import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { DragulaModule } from 'ng2-dragula';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';

import { CommonModule } from '@src/app/common/common.module';
import { FileExplorerComponent } from './file-explorer.component';

@NgModule({
  imports: [
    BrowserModule,
    CommonModule,
    NoopAnimationsModule,
    DragulaModule,
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

