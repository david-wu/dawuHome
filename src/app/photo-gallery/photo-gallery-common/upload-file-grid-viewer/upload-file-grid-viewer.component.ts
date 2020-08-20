import {
  Component,
  ElementRef,
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
import {
  CdkVirtualScrollViewport,
  FixedSizeVirtualScrollStrategy,
} from '@angular/cdk/scrolling';
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

  public imageWidth: number = undefined;
  public scaledImageWidth: number = undefined;
  public scaledImageWidthStr: string = undefined;
  public scaledImageHeight: number = undefined;
  public scaledImageHeightStr: string = undefined;
  public itemHeight: number = undefined;
  public minBufferPx: number = undefined;
  public maxBufferPx: number = undefined;
  public strat: FixedSizeVirtualScrollStrategy = new FixedSizeVirtualScrollStrategy(1,1,1);

  constructor(public hostEl: ElementRef) {}

  public ngOnChanges(changes: SimpleChanges) {
    if (changes.uploadFileIds || changes.selectedFileId) {
      this.setViewportSize();
      this.scrollToSelectedFileId();
    }
  }

  public ngOnInit() {
    this.setViewportSize();
    this.scrollToSelectedFileId();
    this.sensor = new ResizeSensor(this.hostEl.nativeElement, () => {
      this.setViewportSize();
    });
    this.strat.attach(this.scrollViewport);
  }

  public ngOnDestroy() {
    if (this.sensor) {
      this.sensor.detach();
    }
  }

  public setViewportSize() {
    // assumes scrollbar is 16px
    const clientWidth = this.hostEl.nativeElement.clientWidth - 16;

    // Assumes we can compact the pictures a little to fit in a smaller space
    const stretchedClientWidth = clientWidth * 1.2;

    this.imageWidth = (stretchedClientWidth <= (322 * 2)) ? 150 : 320;
    const nextColumnCount = Math.floor(stretchedClientWidth / (this.imageWidth))
    this.setUploadFileIdRows(nextColumnCount, this.uploadFileIds);
    this.scaledImageWidth = (clientWidth / this.columnCount) - 2;
    this.scaledImageWidthStr = `${this.scaledImageWidth}px`;

    const aspectRatio = 4 / 3;
    this.scaledImageHeight = this.scaledImageWidth / aspectRatio;
    this.scaledImageHeightStr = `${this.scaledImageHeight}px`;

    this.itemHeight = this.scaledImageHeight + 2;
    this.strat.updateItemAndBufferSize(
      this.itemHeight,
      this.itemHeight * 2,
      this.itemHeight * 3,
    );
    this.strat.attach(this.scrollViewport);
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
    setTimeout(() => {
      const index = this.uploadFileIds.indexOf(this.selectedFileId);
      const rowIndex = Math.floor(index / this.columnCount);
      this.strat.scrollToIndex(rowIndex, 'auto');
    })
  }

  public getScrolledToId() {
    if (!this.scrollViewport) {
      return;
    }
    const viewportSize = this.scrollViewport.getViewportSize();
    const viewportPadding = (viewportSize - this.itemHeight) / 2;
    const imagePaddingOffset = 1;
    const offset = this.scrollViewport.measureScrollOffset() + viewportPadding + imagePaddingOffset + 121;
    const rowIndex = Math.floor(offset / this.itemHeight);
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
