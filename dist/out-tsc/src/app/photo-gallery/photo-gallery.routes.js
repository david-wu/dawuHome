import { __decorate } from "tslib";
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { PhotoGalleryComponent } from '@src/app/photo-gallery/photo-gallery.component';
import { NearMeComponent } from '@photo-gallery/near-me/near-me.component';
import { MyUploadsComponent } from '@photo-gallery/my-uploads/my-uploads.component';
var routes = [
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
var PhotoGalleryRoutingModule = /** @class */ (function () {
    function PhotoGalleryRoutingModule() {
    }
    PhotoGalleryRoutingModule = __decorate([
        NgModule({
            imports: [RouterModule.forChild(routes)],
            exports: [RouterModule]
        })
    ], PhotoGalleryRoutingModule);
    return PhotoGalleryRoutingModule;
}());
export { PhotoGalleryRoutingModule };
//# sourceMappingURL=photo-gallery.routes.js.map