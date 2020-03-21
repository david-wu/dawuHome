import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { FILE_EXPLORER_COMPONENTS } from './index';

@NgModule({
  imports: [
    BrowserModule,
    NoopAnimationsModule,
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

