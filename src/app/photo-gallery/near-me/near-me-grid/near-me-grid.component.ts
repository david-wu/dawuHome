import { Component } from '@angular/core';
import {
  Observable,
  BehaviorSubject,
} from 'rxjs';
import {
  map,
} from 'rxjs/operators';
import { keyBy } from 'lodash';
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
  public uploadFilesById$: Observable<Record<string, UploadFile>>;
  public distanceType$ = new BehaviorSubject<string>('DRIVE');
  public selectedFileId$: Observable<string>;

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
    this.uploadFilesById$ = this.nearByUploads$.pipe(
      map((uploadFiles: UploadFile[]) => {
        return keyBy(uploadFiles, (uploadFile: UploadFile) => uploadFile.id);
      }),
    );
    this.selectedFileId$ = this.activatedRoute.queryParams.pipe(
      map((params: Params) => params.selectedFileId),
    );
    this.store.dispatch(NearMeActions.loadNearMe({}));
  }

  public onGridSelectUploadFileId(fileId: string) {
    const navgateOptions = {
      relativeTo: this.activatedRoute,
      queryParams: {
        selectedFileId: fileId,
      },
    };
    this.router.navigate(['../list'], navgateOptions)
  }

}
