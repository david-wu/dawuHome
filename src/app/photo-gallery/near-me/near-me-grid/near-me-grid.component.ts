import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import {
  Store,
  select,
} from '@ngrx/store';

import { UploadFile } from '@photo-gallery/models/upload-file.model';
import {
  getNearbyImages$,
  PhotoGalleryActions,
} from '@photo-gallery/store/index';

@Component({
  selector: 'dwu-near-me-grid',
  templateUrl: './near-me-grid.component.html',
  styleUrls: ['./near-me-grid.component.scss']
})
export class NearMeGridComponent {

  public nearByUploads$: Observable<UploadFile[]>;
  public zoomLevel: number = 3;

  constructor(public store: Store) {
    this.nearByUploads$ = this.store.pipe(select(getNearbyImages$));
  }

  public ngOnInit() {
    this.store.dispatch(PhotoGalleryActions.setNearbyImagesVisible({ payload: true }));
  }

  public ngOnDestroy() {
    this.store.dispatch(PhotoGalleryActions.setNearbyImagesVisible({ payload: false }));
  }
}
