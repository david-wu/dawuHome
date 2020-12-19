import { Component } from '@angular/core';
import {
  Observable,
  BehaviorSubject,
  Subscription,
} from 'rxjs';
import {
  map,
} from 'rxjs/operators';
import {
  keyBy,
  get,
} from 'lodash';
import {
  ActivatedRoute,
  Router,
  Params,
} from '@angular/router';
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

  public nearByUploads$: Observable<any[]>;
  public uploadFileIds$: Observable<string[]>;
  public distanceType$ = new BehaviorSubject<string>('DRIVE');
  public selectedFileId$: Observable<string>;

  public zoomLevel: number = 3;
  public alwaysUseMaxColumns: boolean = true;
  public centeredTileId: string;
  public readonly tileOptions = [
    { maxWidth: 150, aspectRatio: 4 / 3 },
    { maxWidth: 320, aspectRatio: 4 / 3 },
    { maxWidth: 640, aspectRatio: 4 / 3 },
    { maxWidth: 1080, aspectRatio: 4 / 3 },
  ];

  public uploadFilesById;
  public sub: Subscription;

  constructor(
    public pgs: PhotoGalleryService,
    public activatedRoute: ActivatedRoute,
    public router: Router,
    public store: Store<NearMeState>
  ) {
    this.nearByUploads$ = this.pgs.getNearByUploadsForDistanceType$(this.distanceType$);
    this.uploadFileIds$ = this.nearByUploads$.pipe(
      map((uploadFiles: UploadFile[]) => {
        return uploadFiles.map((uploadFile: UploadFile) => uploadFile.id);
      }),
    );
    this.selectedFileId$ = this.activatedRoute.queryParams.pipe(
      map((params: Params) => params.selectedFileId),
    );
    this.store.dispatch(NearMeActions.loadNearMe({}));
  }

  public ngOnInit() {
    this.sub = this.nearByUploads$.subscribe(
      (uploadFiles: UploadFile[]) => {
        this.uploadFilesById = keyBy(uploadFiles, (uploadFile: UploadFile) => uploadFile.id);
        return keyBy(uploadFiles, (uploadFile: UploadFile) => uploadFile.id);
      },
    );
  }

  public ngOnDestroy() {
    if (this.sub) {
      this.sub.unsubscribe()
    }
  }

  public getImgSrc(uploadFileId: string, imageWidth: number): string {
    imageWidth = Math.min(640, imageWidth);
    return get(this.uploadFilesById, [
      uploadFileId,
      'uploadMeta',
      `downloadUrl_${imageWidth}`,
    ]);
  }

}
