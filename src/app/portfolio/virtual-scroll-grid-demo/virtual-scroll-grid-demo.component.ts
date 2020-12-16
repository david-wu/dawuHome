import {
  Component,
  ElementRef,
  EventEmitter,
  Input,
  Output,
  SimpleChanges,
  TemplateRef,
  ViewChildren,
  QueryList,
} from '@angular/core';
import { Subscription } from 'rxjs';
import { take } from 'rxjs/operators';
import { times } from 'lodash';
import ResizeSensor from 'css-element-queries/src/ResizeSensor';

@Component({
  selector: 'dwu-virtual-scroll-grid-demo',
  templateUrl: './virtual-scroll-grid-demo.component.html',
  styleUrls: ['./virtual-scroll-grid-demo.component.scss'],
})
export class VirtualScrollGridDemoComponent {

  public maxColumns = 5;
  public tileIds: string[] = times(2000, (idx) => {
    const imageIndex = Math.floor(Math.random() * 5);
    return `${idx}_${imageIndex}`;
  });
  public setColumnCountToMaxColumns = true;
  public centeredTileId: string;
  // maxColumns is used as a bound to bump up to the next tileOption
  // larger tile width is preferred
  public readonly tileOptions = [
    {
      maxWidth: 150,
      aspectRatio: 4 / 3,
      // maxColumns: 5,
    },
    {
      maxWidth: 320,
      aspectRatio: 4 / 3,
      // maxColumns: 5,
    },
    {
      maxWidth: 640,
      aspectRatio: 4 / 3,
    },
  ];
  public readonly tileOptionsMini = [
    {
      maxWidth: 75,
      aspectRatio: 4 / 3,
      // maxColumns: 10,
    },
    {
      maxWidth: 150,
      aspectRatio: 4 / 3,
      // maxColumns: 10,
    },
    {
      maxWidth: 320,
      aspectRatio: 4 / 3,
    },
  ];
  public readonly images = [
    'assets/images/grid-demo-pics/1',
    'assets/images/grid-demo-pics/2',
    'assets/images/grid-demo-pics/3',
    'assets/images/grid-demo-pics/4',
    'assets/images/grid-demo-pics/5',
  ];
  public readonly suffixByMaxWidth = {
    75: '_sm.jpg',
    150: '_sm.jpg',
    320: '_md.jpg',
    640: '_lg.jpg',
  };

  public getImgSrc(tileId, maxWidth) {
    const imageIdx = Number(tileId.split('_')[1]);
    const imgBase = this.images[imageIdx];
    const suffix = this.suffixByMaxWidth[maxWidth];
    return imgBase + suffix;
  }
}
