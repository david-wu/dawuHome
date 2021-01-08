import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ImageStreamSettingsComponent } from './image-stream-settings.component';

const routes: Routes = [
  {
    path: '',
    component: ImageStreamSettingsComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ImageStreamSettingsRoutingModule { }
