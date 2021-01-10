import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ImageStreamViewComponent } from '@src/app/picture-piper/image-streams/image-stream-view/image-stream-view.component';

const routes: Routes = [
  {
    path: '',
    component: ImageStreamViewComponent,
    children: [
      {
        path: 'overview',
        loadChildren: () => import('./image-stream-overview/image-stream-overview.module').then(m => m.ImageStreamOverviewModule)
      },
      {
        path: 'settings',
        loadChildren: () => import('./image-stream-settings/image-stream-settings.module').then(m => m.ImageStreamSettingsModule)
      },
      // {
      //   path: 'images',
      //   loadChildren: () => import('./image-stream-images-view/image-stream-images-view.module').then(m => m.ImageStreamImagesViewModule)
      // },
      // {
      //   path: 'setup',
      //   loadChildren: () => import('./image-stream-setup/image-stream-setup.module').then(m => m.ImageStreamSetupModule)
      // },
      {
        path: '',
        pathMatch: 'full',
        redirectTo: 'overview',
      },
    ]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ImageStreamViewRoutingModule { }
