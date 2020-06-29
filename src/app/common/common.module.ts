import { NgModule } from '@angular/core';
import { CommonModule as NgCommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { TextDecoratorComponent } from './text-decorator/text-decorator.component';
import { SearchInputComponent } from './search-input/search-input.component';
import { ChartsModule } from './charts/charts.module';
import { TooltipModule } from './tooltip/tooltip.module';

@NgModule({
  imports: [
    NgCommonModule,
    ChartsModule,
    FormsModule,
    TooltipModule,
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

