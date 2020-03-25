
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';

import { TextDecoratorComponent } from './text-decorator/text-decorator.component';

@NgModule({
  imports: [
    BrowserModule,
    NoopAnimationsModule,
  ],
  declarations: [
    TextDecoratorComponent,
  ],
  exports: [
    TextDecoratorComponent,
  ],
  providers: [],
})
export class CommonModule { }

