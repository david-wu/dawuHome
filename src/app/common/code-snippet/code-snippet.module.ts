import { NgModule } from '@angular/core';
import { CommonModule as NgCommonModule } from '@angular/common';

import { CodeSnippetComponent } from './code-snippet.component';

@NgModule({
  imports: [
    NgCommonModule,
  ],
  declarations: [
    CodeSnippetComponent,
  ],
  exports: [
    CodeSnippetComponent,
  ],
})
export class CodeSnippetModule { }
