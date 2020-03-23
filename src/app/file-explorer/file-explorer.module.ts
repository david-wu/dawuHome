import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { DragulaModule } from 'ng2-dragula';

import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { FILE_EXPLORER_COMPONENTS } from './index';
import { CommonModule } from '@src/app/common/common.module';

export class AppModule { }
@NgModule({
  imports: [
    BrowserModule,
    CommonModule,
    NoopAnimationsModule,
    DragulaModule,
  ],
  declarations: [
    ...FILE_EXPLORER_COMPONENTS,
  ],
  exports: [
    ...FILE_EXPLORER_COMPONENTS,
  ],
  providers: [],
})
export class FileExplorerModule { }

