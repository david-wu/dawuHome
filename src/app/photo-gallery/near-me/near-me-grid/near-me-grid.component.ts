import { Component } from '@angular/core';
import {
  Observable,
  BehaviorSubject,
} from 'rxjs';
import { Store } from '@ngrx/store';

import { PhotoGalleryService } from '@photo-gallery/services/index';
import { UploadFile } from '@photo-gallery/models/upload-file.model';
import {
  NearMeActions,
  NearMeState,
} from '../store/index';

@Component({
  selector: 'dwu-near-me-grid',
  templateUrl: './near-me-grid.component.html',
  styleUrls: ['./near-me-grid.component.scss']
})
export class NearMeGridComponent {

  public nearByUploads$: Observable<UploadFile[]>;
  public distanceType$ = new BehaviorSubject<string>('DRIVE');
  public zoomLevel: number = 3;

  constructor(
    public pgs: PhotoGalleryService,
    public store: Store<NearMeState>
  ) {
    this.nearByUploads$ = this.pgs.getNearByUploadsForDistanceType$(this.distanceType$);
    this.store.dispatch(NearMeActions.loadNearMe({}));
  }

}
