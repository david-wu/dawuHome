import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PhotoGalleryComponent } from '@src/app/photo-gallery/photo-gallery.component';
import { NearMeComponent } from '@photo-gallery/near-me/near-me.component';
import { MyUploadsComponent } from '@photo-gallery/my-uploads/my-uploads.component';

const routes: Routes = [
  {
    path: '',
    component: PhotoGalleryComponent,
    children: [
      {
        path: 'near-me',
        component: NearMeComponent,
      },
      {
        path: 'my-uploads',
        component: MyUploadsComponent,
      },
      {
        path: '',
        redirectTo: 'near-me',
        pathMatch: 'full',
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PhotoGalleryRoutingModule { }
