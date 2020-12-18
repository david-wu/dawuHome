import { NgModule } from '@angular/core';
import { CommonModule as NgCommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { TextDecoratorComponent } from './text-decorator/text-decorator.component';
import { SearchInputComponent } from './search-input/search-input.component';
import { ChartsModule } from './charts/charts.module';
import { TooltipModule } from './tooltip/tooltip.module';
import { ZoomLevelPickerModule } from './zoom-level-picker/zoom-level-picker.module';

@NgModule({
  imports: [
    NgCommonModule,
    FormsModule,
    ChartsModule,
    TooltipModule,
    ZoomLevelPickerModule,
  ],
  declarations: [
    TextDecoratorComponent,
    SearchInputComponent,
  ],
  exports: [
    ChartsModule,
    TooltipModule,
    ZoomLevelPickerModule,
    TextDecoratorComponent,
    SearchInputComponent,
  ],
  providers: [],
})
export class CommonModule { }

