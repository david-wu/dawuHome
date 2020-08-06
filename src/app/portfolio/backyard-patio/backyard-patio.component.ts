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
import { CdkVirtualScrollViewport } from '@angular/cdk/scrolling';
import ResizeSensor from 'css-element-queries/src/ResizeSensor';

@Component({
  selector: 'dwu-backyard-patio',
  templateUrl: './backyard-patio.component.html',
  styleUrls: ['./backyard-patio.component.scss'],
})
export class BackyardPatioComponent {
  public images = [
    {
      description: '1',
      src: 'assets/images/backyard-patio/20200425_103623.jpg',
    },
    {
      description: '1',
      src: 'assets/images/backyard-patio/20200425_103629.jpg',
    },
    {
      description: '1',
      src: 'assets/images/backyard-patio/20200726_161356.jpg',
    },
    {
      description: '1',
      src: 'assets/images/backyard-patio/20200727_182054.jpg',
    },
    {
      description: '1',
      src: 'assets/images/backyard-patio/20200728_093921.jpg',
    },
    {
      description: '1',
      src: 'assets/images/backyard-patio/20200729_100937.jpg',
    },
    {
      description: '1',
      src: 'assets/images/backyard-patio/20200801_103249.jpg',
    },
    {
      description: '1',
      src: 'assets/images/backyard-patio/20200803_093712.jpg',
    },
    {
      description: '1',
      src: 'assets/images/backyard-patio/20200803_100656.jpg',
    },
    {
      description: '1',
      src: 'assets/images/backyard-patio/20200803_133722.jpg',
    },
    {
      description: '1',
      src: 'assets/images/backyard-patio/20200803_142142.jpg',
    },
    {
      description: '1',
      src: 'assets/images/backyard-patio/20200803_195323.jpg',
    },
    {
      description: '1',
      src: 'assets/images/backyard-patio/20200804_214359.jpg',
    },
    {
      description: '1',
      src: 'assets/images/backyard-patio/20200804_214805.jpg',
    },
    {
      description: '1',
      src: 'assets/images/backyard-patio/20200805_201423.jpg',
    },
  ];
  public magnifiedImage;
}
