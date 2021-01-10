import { NgModule } from '@angular/core';
import { CommonModule as NgCommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { TextDecoratorComponent } from '@src/app/common/text-decorator/text-decorator.component';
import { ChartsModule } from '@src/app/common/charts/charts.module';
import { TooltipModule } from '@src/app/common/tooltip/tooltip.module';
import { ZoomLevelPickerModule } from '@src/app/common/zoom-level-picker/zoom-level-picker.module';

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
  ],
  exports: [
    ChartsModule,
    TooltipModule,
    ZoomLevelPickerModule,
    TextDecoratorComponent,
  ],
  providers: [],
})
export class CommonModule { }

