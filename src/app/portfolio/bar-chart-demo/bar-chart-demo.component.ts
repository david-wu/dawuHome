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
import ResizeSensor from 'css-element-queries/src/ResizeSensor';

@Component({
  selector: 'dwu-bar-chart-demo',
  templateUrl: './bar-chart-demo.component.html',
  styleUrls: ['./bar-chart-demo.component.scss'],
})
export class BarChartDemoComponent {
  public demoData;
  public demoKeys = [
    'dogs',
  ];

  constructor() {
    this.demoData = this.generateDemoData();
  }

  public generateDemoData() {
    const now = Date.now();
    const demoData = [];
    const period = 1000 * 60 * 60 * 24;
    for (let i = 0; i < 20; i++) {
      demoData.push({
        timestamp: now - (i * period),
        dogs: Math.floor(Math.random() * 10) + 3,
      });
    }
    return demoData;
  }
}
