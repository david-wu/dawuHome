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
  selector: 'dwu-line-chart-demo',
  templateUrl: './line-chart-demo.component.html',
  styleUrls: ['./line-chart-demo.component.scss'],
})
export class LineChartDemoComponent {
  public demoData;
  public demoKeys = [
    'dogs',
    'cats',
  ];
  public hoverIndex: number;
  public lineChartHtml: string = lineChartHtml;
  public lineChartJs: string = '';

  constructor() {
    this.generateDemoData();
  }

  public generateDemoData() {
    const now = Date.now();
    this.demoData = [];
    const period = 1000 * 60 * 60 * 24;
    for (let i = 0; i < 7; i++) {
      this.demoData.push({
        timestamp: now - (i * period),
        dogs: Math.floor(Math.random() * 10) + 10,
        cats: Math.floor(Math.random() * 10) + 20,
      });
    }
    this.generateSnippets();
  }

  public generateSnippets() {
    this.lineChartJs =`this.demoKeys = ${JSON.stringify(this.demoKeys, null, 2)};\nthis.demoData = ${JSON.stringify(this.demoData, null, 2)};`;
  }
}

const lineChartHtml =
`<dwu-line-chart
  [tableData]="demoData"
  [keys]="demoKeys"
  [hoverIndex]="hoverIndex"
  (hoverIndexChange)="hoverIndex = $event"
></dwu-line-chart>`;

