import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { InputStringEditorComponent } from './input-string-editor.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
  ],
  declarations: [
    InputStringEditorComponent,
  ],
  exports: [
    InputStringEditorComponent,
  ],
  providers: [],
})
export class InputStringEditorModule { }

