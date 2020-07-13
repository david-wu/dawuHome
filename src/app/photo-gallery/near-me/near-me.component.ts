import { Component } from '@angular/core';
import {
  Observable,
  BehaviorSubject,
} from 'rxjs';

import { PhotoGalleryService } from '@photo-gallery/services/index';

@Component({
  selector: 'dwu-near-me',
  templateUrl: './near-me.component.html',
  styleUrls: ['./near-me.component.scss']
})
export class NearMeComponent {

  public nearByUploads$: Observable<any[]>;
  public distanceType$ = new BehaviorSubject<string>('WALK');

  constructor(
    public pgs: PhotoGalleryService,
  ) {
    this.nearByUploads$ = this.pgs.getNearByUploadsForDistanceType$(this.distanceType$);
    this.nearByUploads$.subscribe(console.log);
  }

  public trackById(file: any) {
    return file.id;
  }

}
