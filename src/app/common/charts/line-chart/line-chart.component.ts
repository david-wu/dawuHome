import {
    Component,
    ElementRef,
    EventEmitter,
    Input,
    NgZone,
    Output,
} from '@angular/core';
import { first, last } from 'lodash';
import * as d3 from 'd3';

import { BaseChartComponent } from '../base-chart/base-chart.component';

@Component({
  selector: 'dwu-line-chart',
  templateUrl: './line-chart.component.html',
  styleUrls: ['./line-chart.component.scss'],
})
export class LineChartComponent extends BaseChartComponent {

    @Input() tableData: any;
    @Input() keys: string[];
    @Input() colorsByKey: Record<string, string>;
    @Input() disabledKeys: Set<string> = new Set();
    @Input() hoverIndex: number;
    @Input() yAxisFormatter: any;
    @Output() hoverIndexChange: EventEmitter<number> = new EventEmitter<number>();

    public filteredKeys;
    public hoverLine;
    public bubblesG;
    public maxY;

    // some extra margin on the chart itself
    public chartMargin = 10;

    constructor(
        public hostEl: ElementRef,
        public zone: NgZone,
    ) {
        super(hostEl, zone);
    }

    public ngOnChanges(changes) {
        if (changes.tableData && changes.tableData.firstChange && this.tableData) {
            this.initializeSvg();
        }
        if (changes.tableData || changes.disabledKeys) {
            if (this.tableData) {
                this.render();
            }
        }
        if(changes.hoverIndex) {
            this.positionHoverLine();
        }
    }

    public ngAfterViewInit() {
        super.ngAfterViewInit();
    }

    public ngOnDestroy() {
        super.ngOnDestroy();
    }

    public initializeSvg() {
        super.initializeSvg();
        this.bubblesG = this.rootG.append('g');
        this.hoverLine = this.rootG.append('line')
            .attr('class', 'hover-line')
            .style('stroke', '#8A9A5B')
            .style('stroke-opacity', '0.8')
            .style('stroke-width', '3');

    }

    public onXYHover(x: number, y: number) {
        const numberOfXDataPoints = this.tableData && this.tableData.length;
        if (!numberOfXDataPoints) {
            return;
        }
        const xDomain = this.xScale.domain();
        const width = this.xScale(xDomain[1]) - this.xScale(xDomain[0]);
        const distanceBetweenPoints = width / (numberOfXDataPoints - 1)
        const xOnChart = x - this.margins.left - this.chartMargin;
        const rawIndex = Math.max(Math.round(xOnChart / distanceBetweenPoints), 0) || 0;
        const hoverIndex = Math.min(Math.max(rawIndex, 0), numberOfXDataPoints - 1);
        if (hoverIndex !== this.hoverIndex) {
            this.ngZone.run(() => {
                this.hoverIndex = hoverIndex;
                this.hoverIndexChange.emit(hoverIndex);
            });
        }
    }

    public positionHoverLine() {
        if (!this.tableData || !this.tableData.length) {
            return;
        }
        const tableColumnData = this.tableData[this.hoverIndex];
        const hoverLineTimestamp = tableColumnData.timestamp;
        const tableColumnValues = this.filteredKeys.map((key: string) => {
            return {
                value: tableColumnData[key],
                key: key,
            };
        });

        this.bubblesG.attr('transform', `translate(${this.xScale(hoverLineTimestamp)},0)`);
        const bubbles = this.bubblesG.selectAll('circle.bubble')
            .data(tableColumnValues);
        bubbles.enter()
            .append('circle')
            .attr('r', 4)
            .attr('cx', 0)
            .attr('class', 'bubble')
            .style('fill', 'white')
            .attr('stroke-width', '2px')
            .merge(bubbles)
            .attr('stroke', (d) => this.colorsByKey[d.key])
            .attr('cy', (d) => this.yScale(d.value))
        bubbles.exit().remove();

        this.hoverLine
            .attr('x1', this.xScale(hoverLineTimestamp) || 0)
            .attr('x2', this.xScale(hoverLineTimestamp) || 0)
            .attr('y1', this.yScale(this.maxY) - 3)
            .attr('y2', this.yScale(0) + 3)
    }

    public renderFor(width: number, height: number) {

        this.filteredKeys = this.keys.filter((key: string) => {
            return !(this.disabledKeys && this.disabledKeys.has(key));
        });
        const reversedKeys = this.filteredKeys.reverse();
        const dataset = reversedKeys.map((key: string) => {
            const series = this.tableData.map((columnData: any) => {
                const cellData = columnData[key];
                return {
                    key: key,
                    y: cellData,
                    x: columnData.timestamp,
                    data: columnData,
                };
            });
            series.key = key;
            return series;
        });

        const allXValues = dataset.length ? dataset[0].map((d) => d.data.timestamp) : [];
        const domain = dataset.length ? [first(dataset[0]).x, last(dataset[0]).x] : [];

        this.xScale = d3.scaleTime()
          .domain(domain)
          .range([this.chartMargin, width - this.chartMargin]);

        this.maxY = dataset.reduce((currentMax: number, series: any[]) => {
            const seriesMax = series.reduce((currentSeriesMax: number, cell: any) => {
                return Math.max(currentSeriesMax, cell.y);
            }, 0);
            return Math.max(currentMax, seriesMax)
        }, 0);

        this.yScale = d3.scaleLinear()
          .domain([0, this.maxY || 1])
          .range([height, 0]);

        const numberOfXDataPoints = dataset.length ? dataset[0].length : 0;
        const xAxis = super.getXAxisTicks(this.xScale, width, numberOfXDataPoints, allXValues)
        super.applyXAxis(this.xAxisG, xAxis, height);
        const yAxis = super.getLinearYAxis(this.yScale, width, this.yAxisFormatter);
        super.applyYAxis(this.yAxisG, yAxis);

        const pathLineDrawer = d3.line()
            .x((d) => this.xScale(d.x))
            .y((d) => this.yScale(d.y));

        // Create groups for each series, rects for each segment
        const paths = this.seriesG.selectAll('path.series')
          .data(dataset);
        paths.enter()
            .append('path')
            .style('fill', 'none')
            .merge(paths)
            .attr('class', (d) => `series ${d.key}`)
            .attr('d', pathLineDrawer)
            .style('stroke-width', '2px')
            .style('stroke', (d) => this.colorsByKey[d.key]);
        paths.exit().remove();

        this.positionHoverLine();
    }

}
