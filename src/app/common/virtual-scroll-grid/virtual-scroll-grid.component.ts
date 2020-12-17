import {
  Component,
  ElementRef,
  EventEmitter,
  Input,
  Output,
  ViewChild,
  SimpleChanges,
  TemplateRef,
} from '@angular/core';
import {
  Observable,
  BehaviorSubject,
  merge,
} from 'rxjs';
import {
  debounceTime,
} from 'rxjs/operators';
import {
  get,
  last,
} from 'lodash';
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
  @Input() maxColumns: number = 5;
  // If true, columnCount will always equal maxColumns
  // Otherwise, try to find the best columnCount based on tileOptions and maxColumns
  @Input() alwaysUseMaxColumns: boolean = false;
  @Input() centeredTileId: string;
  @Output() centeredTileIdChange = new EventEmitter<string>();
  @Input() tileTemplate: TemplateRef<any>;
  @Input() tileOptions: any[]

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
  public strat: FixedSizeVirtualScrollStrategy = new FixedSizeVirtualScrollStrategy(1,1,1);
  public scrollToTimeout: number;
  public sub;
  public layoutChange$ = new BehaviorSubject(undefined);

  constructor(public hostEl: ElementRef) {}

  public ngOnChanges(changes: SimpleChanges) {
    if (
      changes.tileIds ||
      changes.tileOptions ||
      changes.maxColumns ||
      changes.alwaysUseMaxColumns
    ) {
      this.sizeTiles();
      this.layoutChange$.next(null);
      this.scrollToCenteredTileId();
    }
    if (
      changes.centeredTileId &&
      changes.centeredTileId.previousValue !== changes.centeredTileId.currentValue
    ) {
      this.scrollToCenteredTileId();
    }
  }

  public ngOnInit() {
    this.sizeTiles();
    this.layoutChange$.next(null);
    this.scrollToCenteredTileId();
    this.sensor = new ResizeSensor(this.hostEl.nativeElement, () => {
      this.sizeTiles();
      this.layoutChange$.next(null);
      this.scrollToCenteredTileId();
    });
    this.strat.attach(this.scrollViewport);
    this.sub = merge(
      this.scrollViewport.elementScrolled(),
      this.layoutChange$,
    )
      .pipe(debounceTime(200))
      .subscribe(() => this.updateCenteredTileId())
  }

  public ngOnDestroy() {
    if (this.sensor) {
      this.sensor.detach();
    }
    if (this.sub) {
      this.sub.unsubscribe();
    }
  }

  public sizeTiles() {
    // assumes scrollbar is 16px
    const clientWidth = this.hostEl.nativeElement.clientWidth - 16;
    const clientHeight = this.hostEl.nativeElement.clientHeight;
    this.targetTileOption = this.pickTileOption(clientWidth);

    if (this.alwaysUseMaxColumns) {
      this.columnCount = this.maxColumns;
    } else {
      this.columnCount = Math.min(
        Math.ceil(clientWidth / this.targetTileOption.maxWidth),
        this.maxColumns,
      );
    }

    this.scaledImageWidth = clientWidth / this.columnCount;
    this.scaledImageHeight = this.scaledImageWidth / this.targetTileOption.aspectRatio;

    // scales down tile sizes if host element is too small
    const scaleDownAdjustment = Math.max(this.scaledImageHeight / clientHeight, 1);
    this.scaledImageWidth /= scaleDownAdjustment;
    this.scaledImageHeight /= scaleDownAdjustment;

    this.scaledImageWidthStr = `${this.scaledImageWidth}px`;
    this.scaledImageHeightStr = `${this.scaledImageHeight}px`;

    this.setTileIdRows(this.columnCount, this.tileIds);

    this.strat.updateItemAndBufferSize(
      this.scaledImageHeight,
      this.scaledImageHeight * 2,
      this.scaledImageHeight * 3,
    );
  }

  public pickTileOption(clientWidth) {
    const width = this.hostEl.nativeElement.clientWidth;
    const height = this.hostEl.nativeElement.clientHeight;
    const validTileOptions = this.tileOptions.filter((tileOption) => {
      const xScale = (tileOption.maxWidth / width);
      const maxHeight = tileOption.maxWidth / (tileOption.aspectRatio || (4/3));
      const scaledHeight = maxHeight * xScale;
      return (tileOption.maxWidth <= width) && (scaledHeight <= height)
    })

    return validTileOptions
      .find((tileOption) => {
        const maxColumns = tileOption.maxColumns || this.maxColumns;
        return (tileOption.maxWidth * maxColumns) >= clientWidth;
      }) || last(validTileOptions);
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
      if ((i % columnCount) === 0) {
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

  public updateCenteredTileId() {
    const offsetTop = this.scrollViewport.measureScrollOffset('top');
    const mostCenteredRowIndex = this.getMostCenteredRowIndex(offsetTop);
    const mostCenteredRowIds = this.tileIdRows[mostCenteredRowIndex];

    // No need to update centeredTileId
    // The centerRow already contains the current centeredTileId
    if (!mostCenteredRowIds || mostCenteredRowIds.includes(this.centeredTileId)) {
      return;
    }

    const mostCenteredIdIndex = Math.floor(mostCenteredRowIds.length / 2);
    const mostCenteredId = mostCenteredRowIds[mostCenteredIdIndex];

    this.centeredTileId = mostCenteredId;
    this.centeredTileIdChange.emit(mostCenteredId);
  }

  public scrollToCenteredTileId(tileId: string = this.centeredTileId) {
    if (!this.tileIds || !this.scrollViewport || !tileId) {
      return;
    }
    clearTimeout(this.scrollToTimeout);
    this.scrollToTimeout = setTimeout(() => {
      const mostCenteredRowIndex = this.getMostCenteredRowIndex();
      const mostCenteredRowIds = this.tileIdRows[mostCenteredRowIndex];
      // No need to scroll
      // The tileId is already in the mostCenteredRow
      if (!mostCenteredRowIds || mostCenteredRowIds.includes(tileId)) {
        return;
      }

      const clientHeight = this.hostEl.nativeElement.clientHeight;
      const index = this.tileIds.indexOf(tileId);
      const rowIndex = Math.ceil((index + 1) / this.columnCount) - 1;

      const offset = (rowIndex * this.scaledImageHeight) - (clientHeight / 2) + (this.scaledImageHeight / 2);
      this.scrollViewport.scrollTo({ top: offset })
    })
  }

  public getMostCenteredRowIndex(offsetTop?: number) {
    offsetTop = offsetTop || this.scrollViewport.measureScrollOffset('top');
    const clientHeight = this.hostEl.nativeElement.clientHeight;
    const offsetTopAtClientCenter = offsetTop + (clientHeight / 2);

    const centerIndex = offsetTopAtClientCenter / this.scaledImageHeight;
    return Math.round(centerIndex - 0.5);
  }

}
