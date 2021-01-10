import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { SearchInputComponent } from '@src/app/common/search-input/search-input.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
  ],
  declarations: [
    SearchInputComponent,
  ],
  exports: [
    SearchInputComponent,
  ],
  providers: [],
})
export class SearchInputModule { }

