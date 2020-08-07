import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { LayoutModule } from '@angular/cdk/layout';
import { FuzzDemoComponent } from './fuzz-demo.component';
import { DemoPageModule } from './demo-page/demo-page.module';

@NgModule({
  declarations: [
    FuzzDemoComponent,
  ],
  imports: [
    DemoPageModule,
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    LayoutModule,
  ],
  exports: [
    FuzzDemoComponent,
  ]
})
export class FuzzDemoModule { }
