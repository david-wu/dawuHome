import { Component } from '@angular/core';
import { Observable } from 'rxjs';

import { PhotoGalleryService } from '@photo-gallery/services/index';

@Component({
  selector: 'dwu-near-me',
  templateUrl: './near-me.component.html',
  styleUrls: ['./near-me.component.scss']
})
export class NearMeComponent {

  public nearByUploads$: Observable<any[]>;

  constructor(
    public pgs: PhotoGalleryService,
  ) {
    this.nearByUploads$ = this.pgs.getNearByUploads$();
  }

  public trackById(file: any) {
    return file.id;
  }

}
