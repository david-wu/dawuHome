import {
  Component,
  ElementRef,
  // EventEmitter,
  Input,
  Output,
  ViewChild,
  SimpleChanges,
  TemplateRef,
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

@Component({
  selector: 'dwu-virtual-scroll-grid',
  templateUrl: './virtual-scroll-grid.component.html',
  styleUrls: ['./virtual-scroll-grid.component.scss']
})
export class VirtualScrollGridComponent {

  @Input() tileIds: string[] = [];
  @Input() selectedTileId: string;
  @Input() tileTemplate: TemplateRef<any>;
  @Input() tileOptions: any[]

  // @Output() selectTileId: EventEmitter<string> = new EventEmitter<string>();
  @ViewChild('scrollViewport', { static: true }) scrollViewport: CdkVirtualScrollViewport;

  public tileIdRows: string[][];
  public columnCount = undefined;
  public sensor: any;
  public targetTileOption;

  public imageWidth: number = undefined;
  public scaledImageWidth: number = undefined;
  public scaledImageWidthStr: string = undefined;
  public scaledImageHeight: number = undefined;
  public scaledImageHeightStr: string = undefined;
  public minBufferPx: number = undefined;
  public maxBufferPx: number = undefined;
  public strat: FixedSizeVirtualScrollStrategy = new FixedSizeVirtualScrollStrategy(1,1,1);

  constructor(public hostEl: ElementRef) {}

  public ngOnChanges(changes: SimpleChanges) {
    if (changes.tileIds || changes.selectedTileId || changes.tileOptions) {
      this.setViewportSize();
      this.scrollToSelectedTileId();
    }
  }

  public ngOnInit() {
    this.setViewportSize();
    this.scrollToSelectedTileId();
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
    this.targetTileOption = this.pickTileOption(clientWidth);
    this.columnCount = Math.ceil(clientWidth / this.targetTileOption.maxWidth);

    this.scaledImageWidth = clientWidth / this.columnCount;
    this.scaledImageWidthStr = `${this.scaledImageWidth}px`;
    this.scaledImageHeight = this.scaledImageWidth / this.targetTileOption.aspectRatio;
    this.scaledImageHeightStr = `${this.scaledImageHeight}px`;

    this.setTileIdRows(this.columnCount, this.tileIds);

    this.strat.updateItemAndBufferSize(
      this.scaledImageHeight,
      this.scaledImageHeight * 2,
      this.scaledImageHeight * 3,
    );
    this.strat.attach(this.scrollViewport);
  }

  public pickTileOption(clientWidth) {
    return this.tileOptions.find((tileOption) => {
      if (tileOption.maxColumns === undefined) {
        return true;
      }
      return (tileOption.maxWidth * tileOption.maxColumns) >= clientWidth;
    })
  }

  public setTileIdRows(
    columnCount: number = this.columnCount,
    nextTileIds: string[] = this.tileIds,
  ) {
    this.tileIdRows = this.getTileIdRows(nextTileIds, columnCount);
    this.tileIds = nextTileIds;
  }

  public getTileIdRows(tileIds: string[], columnCount: number) {
    if (!tileIds || !tileIds.length || !columnCount) {
      return [];
    }
    const tileIdRows = [];
    let row = [tileIds[0]];
    for(let i = 1; i < tileIds.length; i++) {
      if (!(i % columnCount)) {
        tileIdRows.push(row);
        row = [];
      }
      row.push(tileIds[i]);
    }

    if(row.length) {
      tileIdRows.push(row);
    }
    return tileIdRows;
  }

  public scrollToSelectedTileId() {
    if (!this.tileIds || !this.scrollViewport) {
      return;
    }
    setTimeout(() => {
      const index = this.tileIds.indexOf(this.selectedTileId);
      const rowIndex = Math.floor(index / this.columnCount);
      this.strat.scrollToIndex(rowIndex, 'auto');
    })
  }

  public getScrolledToId() {
    if (!this.scrollViewport) {
      return;
    }
    const viewportSize = this.scrollViewport.getViewportSize();
    const viewportPadding = (viewportSize - this.scaledImageHeight) / 2;
    const imagePaddingOffset = 1;
    const offset = this.scrollViewport.measureScrollOffset() + viewportPadding + imagePaddingOffset + 121;
    const rowIndex = Math.floor(offset / this.scaledImageHeight);
    const row = this.tileIdRows[rowIndex];
    return row && row[0];
  }

}
