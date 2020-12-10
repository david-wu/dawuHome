import { NgModule } from '@angular/core';
import { CommonModule as NgCommonModule } from '@angular/common';

import { CodeSnippetDemoComponent } from './code-snippet-demo.component';
import { CodeSnippetModule } from '@src/app/portfolio/code-snippet/code-snippet.module';

@NgModule({
  imports: [
    NgCommonModule,
    CodeSnippetModule,
  ],
  declarations: [
    CodeSnippetDemoComponent,
  ],
  exports: [
    CodeSnippetDemoComponent,
  ],
})
export class CodeSnippetDemoModule { }
