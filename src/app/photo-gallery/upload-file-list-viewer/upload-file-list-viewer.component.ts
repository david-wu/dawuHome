import {
  Component,
  Input,
  Output,
} from '@angular/core';
import {
  Observable,
  // BehaviorSubject,
} from 'rxjs';

import { UploadFile } from '@photo-gallery/models/index';
// import { PhotoGalleryService } from '@photo-gallery/services/index';

@Component({
  selector: 'dwu-upload-file-list-viewer',
  templateUrl: './upload-file-list-viewer.component.html',
  styleUrls: ['./upload-file-list-viewer.component.scss']
})
export class UploadFileListViewerComponent {

  @Input() uploadFileIds: string[];
  @Input() uploadFilesById: Record<string, UploadFile>;
  // public distanceType$ = new BehaviorSubject<string>('WALK');

  constructor(
    // public pgs: PhotoGalleryService,
  ) {
    // console.log('this.pgs', this.pgs);
    // this.uploadFiles$ = this.pgs.getNearByUploadsForDistanceType$(this.distanceType$);
  }

  // public trackById(file: any) {
  //   return file.id;
  // }

}
