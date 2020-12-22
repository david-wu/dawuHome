import { Component } from '@angular/core';
import {
  Observable,
  BehaviorSubject,
} from 'rxjs';
import { Store } from '@ngrx/store';
import {
  map,
} from 'rxjs/operators';
import { keyBy } from 'lodash';

import { PhotoGalleryService } from '@photo-gallery/services/index';
import { UploadFile } from '@photo-gallery/models/upload-file.model';
import { PhotoGalleryActions } from '@photo-gallery/store';

@Component({
  selector: 'dwu-near-me',
  templateUrl: './near-me.component.html',
  styleUrls: ['./near-me.component.scss']
})
export class NearMeComponent {

  public nearByUploads$: Observable<any[]>;
  public uploadFileIds$: Observable<string[]>;
  public uploadFilesById$: Observable<Record<string, UploadFile>>;
  public distanceType$ = new BehaviorSubject<string>('DRIVE');
  public selectedFileId: string;
  public fileViewStyle: string = 'GRID';

  constructor(
    public pgs: PhotoGalleryService,
    public store: Store,
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
  }

  public ngOnInit() {
    this.store.dispatch(PhotoGalleryActions.setNearbyLocationsRequired({ payload: true }));
  }

  public ngOnDestroy() {
    this.store.dispatch(PhotoGalleryActions.setNearbyLocationsRequired({ payload: false }));
  }

  public trackById(file: any) {
    return file.id;
  }

  public onGridSelectUploadFileId(fileId: string) {
    this.selectedFileId = fileId;
    this.fileViewStyle = 'LIST';
  }

}
