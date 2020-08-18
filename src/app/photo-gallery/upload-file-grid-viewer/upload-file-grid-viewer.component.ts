import {
  Component,
  EventEmitter,
  Input,
  Output,
  ViewChild,
  SimpleChanges,
} from '@angular/core';
import {
  Observable,
} from 'rxjs';
import { get } from 'lodash';
import { CdkVirtualScrollViewport } from '@angular/cdk/scrolling';
import ResizeSensor from 'css-element-queries/src/ResizeSensor';

import { UploadFile } from '@photo-gallery/models/index';

@Component({
  selector: 'dwu-upload-file-grid-viewer',
  templateUrl: './upload-file-grid-viewer.component.html',
  styleUrls: ['./upload-file-grid-viewer.component.scss']
})
export class UploadFileGridViewerComponent {

  @Input() uploadFileIds: string[] = [];
  @Input() uploadFilesById: Record<string, UploadFile>;
  @Input() selectedFileId: string;
  @Output() selectUploadFileId: EventEmitter<string> = new EventEmitter<string>();
  @ViewChild('scrollViewport', { static: true }) scrollViewport: CdkVirtualScrollViewport;

  public uploadFileIdRows: string[][];
  public columnCount = undefined;
  public sensor: any;

  public imageWidth: number = 320;
  public scaledImageWidth: number = 320;
  public scaledImageWidthStr: string = '320px';
  public scaledImageHeight: number = 480;
  public scaledImageHeightStr: string = '240px';
  public itemHeight: number = 242;
  public minBufferPx: number = 484;
  public maxBufferPx: number = 968;

  public ngOnChanges(changes: SimpleChanges) {
    if (changes.uploadFileIds) {
      this.setUploadFileIdRows(this.columnCount);
    }
    if (changes.uploadFileIds || changes.selectedFileId) {
      this.scrollToSelectedFileId();
    }
  }

  public ngOnInit() {
    this.setViewportSize();
    this.scrollToSelectedFileId();
    this.sensor = new ResizeSensor(this.scrollViewport.elementRef.nativeElement, () => {
      this.setViewportSize();
    });
  }

  public ngOnDestroy() {
    if (this.sensor) {
      this.sensor.detach();
    }
  }

  public setViewportSize() {
    const viewportEl = this.scrollViewport.elementRef.nativeElement;
    const clientWidth = viewportEl.clientWidth;

    this.imageWidth = ((clientWidth * 1.2) <= (322 * 2)) ? 150 : 320;
    const nextColumnCount = Math.floor((clientWidth * 1.2) / (this.imageWidth))
    if (nextColumnCount !== this.columnCount) {
      this.setUploadFileIdRows(nextColumnCount);
    }
    this.scaledImageWidth = (clientWidth / this.columnCount) - 2;
    this.scaledImageWidthStr = `${this.scaledImageWidth}px`;

    const aspectRatio = 4/3;
    this.scaledImageHeight = this.scaledImageWidth / aspectRatio;
    this.scaledImageHeightStr = `${this.scaledImageHeight}px`;

    const itemHeight = this.scaledImageHeight + 2;
    this.itemHeight = itemHeight;
    this.minBufferPx = itemHeight * 2;
    this.maxBufferPx = itemHeight * 3;
  }

  public setUploadFileIdRows(
    nextColumnCount: number = this.columnCount,
    nextUploadFileIds: string[] = this.uploadFileIds,
  ) {
    this.uploadFileIdRows = this.getUploadFileIdRows(nextUploadFileIds, nextColumnCount);
    this.columnCount = nextColumnCount;
    this.uploadFileIds = nextUploadFileIds;
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

  public scrollToSelectedFileId() {
    if (!this.uploadFileIds || !this.scrollViewport) {
      return;
    }
    const viewportSize = this.scrollViewport.getViewportSize()
    const viewportPadding = (viewportSize - 242) / 2;
    const index = this.uploadFileIds.indexOf(this.selectedFileId);
    const imagePaddingOffset = 1;
    const rowIndex = Math.floor(index / this.columnCount);
    const offset = (rowIndex * 242) - viewportPadding - imagePaddingOffset;
    setTimeout(() => {
      this.scrollViewport.scrollToOffset(offset);
    })
  }

  public getScrolledToId() {
    if (!this.scrollViewport) {
      return;
    }
    const viewportSize = this.scrollViewport.getViewportSize();
    const viewportPadding = (viewportSize - 242) / 2;
    const imagePaddingOffset = 1;
    const offset = this.scrollViewport.measureScrollOffset() + viewportPadding + imagePaddingOffset + 121;
    const rowIndex = Math.floor(offset / 242);
    const row = this.uploadFileIdRows[rowIndex];
    return row && row[0];
  }

  public getUploadFileDownloadUrl(uploadFileId: string): string {
    return get(this.uploadFilesById, [
      uploadFileId,
      'uploadMeta',
      `downloadUrl_${this.imageWidth}`,
    ]);
  }

  public onUploadFileClick(uploadFileId: string) {
    this.selectUploadFileId.emit(uploadFileId);
  }

}
