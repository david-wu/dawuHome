import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MyUploadsComponent } from '@photo-gallery/my-uploads/my-uploads.component';
// import { NearMeGridComponent } from '@photo-gallery/near-me/near-me-grid/near-me-grid.component';
// import { NearMeListComponent } from '@photo-gallery/near-me/near-me-list/near-me-list.component';


const routes: Routes = [
  {
    path: '',
    component: MyUploadsComponent,
    // children: [
    //   {
    //     path: 'grid',
    //     component: NearMeGridComponent,
    //   },
    //   {
    //     path: 'list',
    //     component: NearMeListComponent,
    //   },
    //   {
    //     path: '',
    //     redirectTo: 'grid',
    //     pathMatch: 'full',
    //   },
    // ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MyUploadsRoutingModule { }
