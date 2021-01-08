import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { FileExplorerModule } from '@file-explorer/file-explorer.module';
import { ResourceSelectorComponent } from './resource-selector.component';

@NgModule({
  imports: [
    CommonModule,
    FileExplorerModule,
  ],
  declarations: [
    ResourceSelectorComponent,
  ],
  exports: [
    ResourceSelectorComponent,
  ],
})
export class ResourceSelectorModule { }
