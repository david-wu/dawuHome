import { NgModule } from '@angular/core';
import { CommonModule as NgCommonModule } from '@angular/common';

import { MissingDemoComponent } from './missing-demo.component';
// import { MissingDemoModule } from '@common/missing/missing.module';

@NgModule({
  imports: [
    NgCommonModule,
    // MissingDemoModule,
  ],
  declarations: [
    MissingDemoComponent,
  ],
  exports: [
    MissingDemoComponent,
  ],
})
export class MissingDemoModule { }
