import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { PpTestAppComponent } from '@pp/pp-test-app/pp-test-app.component';
import { PpTestAppRoutingModule } from '@pp/pp-test-app/pp-test-app.routes';

@NgModule({
  imports: [
    CommonModule,
    PpTestAppRoutingModule,
  ],
  declarations: [
    PpTestAppComponent,
  ],
  exports: [
    PpTestAppComponent,
  ],
})
export class PpTestAppModule { }
