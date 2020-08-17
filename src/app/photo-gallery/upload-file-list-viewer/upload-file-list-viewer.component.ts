import {
  Component,
  EventEmitter,
  Input,
  Output,
  ViewChild,
} from '@angular/core';
import {
  Observable,
  // BehaviorSubject,
} from 'rxjs';
import {
  get,
} from 'lodash';
import { CdkVirtualScrollViewport } from '@angular/cdk/scrolling';

import { UploadFile } from '@photo-gallery/models/index';
// import { PhotoGalleryService } from '@photo-gallery/services/index';

@Component({
  selector: 'dwu-upload-file-list-viewer',
  templateUrl: './upload-file-list-viewer.component.html',
  styleUrls: ['./upload-file-list-viewer.component.scss']
})
export class UploadFileListViewerComponent {

  @Input() uploadFileIds: string[] = [];
  @Input() uploadFilesById: Record<string, UploadFile>;
  @Input() selectedFileId: string;
  @Output() selectUploadFileId: EventEmitter<string> = new EventEmitter<string>();
  @ViewChild('scrollViewport', { static: true }) scrollViewport: CdkVirtualScrollViewport;
  // public distanceType$ = new BehaviorSubject<string>('WALK');

  constructor(
    // public pgs: PhotoGalleryService,
  ) {
    // console.log('this.pgs', this.pgs);
    // this.uploadFiles$ = this.pgs.getNearByUploadsForDistanceType$(this.distanceType$);
  }

  public ngOnInit() {
    this.scrollToSelectedFileId();
  }

  public ngOnChanges() {
    this.scrollToSelectedFileId();
  }

  public scrollToSelectedFileId() {
    if (!this.uploadFileIds || !this.scrollViewport) {
      return;
    }
    // this.scrollViewport.scrollToOffset()
    const viewportSize = this.scrollViewport.getViewportSize()
    const viewportPadding = (viewportSize - 488) / 2;
    const index = this.uploadFileIds.indexOf(this.selectedFileId);
    const imagePaddingOffset = 4;
    const offset = (index * 488) - viewportPadding - imagePaddingOffset;

    setTimeout(() => {
      console.log('this.scrollViewport', this.scrollViewport, this.selectedFileId, viewportPadding, index, offset);
      this.scrollViewport.scrollToOffset(offset);
    })
  }

  public onUploadFileClick(uploadFileId: string) {
    this.selectUploadFileId.emit(uploadFileId);
  }

  public getUploadFileDownloadUrl(uploadFileId: string): string {
    return get(this.uploadFilesById, [
      uploadFileId,
      'uploadMeta',
      'downloadUrl_640',
    ]);
  }

  // public trackById(file: any) {
  //   return file.id;
  // }

}
