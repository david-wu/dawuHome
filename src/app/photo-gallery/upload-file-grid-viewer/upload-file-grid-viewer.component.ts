import {
  Component,
  EventEmitter,
  Input,
  Output,
} from '@angular/core';
import {
  Observable,
  // BehaviorSubject,
} from 'rxjs';
import { get } from 'lodash';


import { UploadFile } from '@photo-gallery/models/index';
// import { PhotoGalleryService } from '@photo-gallery/services/index';

@Component({
  selector: 'dwu-upload-file-grid-viewer',
  templateUrl: './upload-file-grid-viewer.component.html',
  styleUrls: ['./upload-file-grid-viewer.component.scss']
})
export class UploadFileGridViewerComponent {

  @Input() uploadFileIds: string[];
  @Input() uploadFilesById: Record<string, UploadFile>;
  @Output() selectUploadFileId: EventEmitter<string> = new EventEmitter<string>();
  // public distanceType$ = new BehaviorSubject<string>('WALK');
  public uploadFileIdRows: string[][];
  public columnCount = 3;

  constructor(
    // public pgs: PhotoGalleryService,
  ) {
    // console.log('this.pgs', this.pgs);
    // this.uploadFiles$ = this.pgs.getNearByUploadsForDistanceType$(this.distanceType$);
  }

  public ngOnChanges(changes) {
    if (changes.uploadFileIds) {
      this.uploadFileIdRows = this.getUploadFileIdRows(this.uploadFileIds, this.columnCount);
    }
  }

  public getUploadFileIdRows(fileIds: string[], columnCount: number) {
    if (!fileIds || !fileIds.length || !columnCount) {
      return [];
    }
    const uploadFileIdRows = [];
    let row = [fileIds[0]];
    for(let i = 1; i < fileIds.length; i++) {
      if (!(i % columnCount)) {
        uploadFileIdRows.push(row);
        row = [];
      }
      row.push(fileIds[i]);
    }

    if(row.length) {
      uploadFileIdRows.push(row);
    }
    return uploadFileIdRows;
  }

  public getUploadFileDownloadUrl(uploadFileId: string): string {
    return get(this.uploadFilesById, [
      uploadFileId,
      'uploadMeta',
      'downloadUrl_320',
    ]);
  }

  public onUploadFileClick(uploadFileId: string) {
    this.selectUploadFileId.emit(uploadFileId);
  }

  // public trackById(file: any) {
  //   return file.id;
  // }

}
