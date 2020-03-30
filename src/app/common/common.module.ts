
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';

import { TextDecoratorComponent } from './text-decorator/text-decorator.component';
import { SearchInputComponent } from './search-input/search-input.component';
import { ChartsModule } from './charts/charts.module';

@NgModule({
  imports: [
    BrowserModule,
    ChartsModule,
    NoopAnimationsModule,
    FormsModule,
  ],
  declarations: [
    TextDecoratorComponent,
    SearchInputComponent,
  ],
  exports: [
    ChartsModule,
    TextDecoratorComponent,
    SearchInputComponent,
  ],
  providers: [],
})
export class CommonModule { }

