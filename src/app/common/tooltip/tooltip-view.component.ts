import {
  Component,
  ElementRef,
  EventEmitter,
  Input,
  Output,
  HostBinding,
  SimpleChanges,
  TemplateRef,
  ViewChildren,
  ViewChild,
  QueryList,
} from '@angular/core';
import { Subscription } from 'rxjs';
import { take } from 'rxjs/operators';
import { CdkVirtualScrollViewport } from '@angular/cdk/scrolling';
import ResizeSensor from 'css-element-queries/src/ResizeSensor';

@Component({
  selector: 'dwu-tooltip-view',
  templateUrl: './tooltip-view.component.html',
  styleUrls: ['./tooltip-view.component.scss'],
})
export class TooltipViewComponent {

  public template: TemplateRef<any>;
  // public top: number;
  // public left: number;
  @HostBinding('style.top') top = '0';
  @HostBinding('style.left') left = '0';
  public transform: string;

  constructor(public hostEl: ElementRef) {}

}
