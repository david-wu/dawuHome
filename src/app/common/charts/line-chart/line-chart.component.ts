import {
    Component,
    ElementRef,
    EventEmitter,
    Input,
    NgZone,
    Output,
    TemplateRef,
    ViewChild,
} from '@angular/core';
import { isUndefined, first, filter, last } from 'lodash';
import * as d3 from 'd3';

import { BaseChartComponent } from '../base-chart/base-chart.component';
import { TooltipService } from '@common/tooltip/tooltip.service';

@Component({
  selector: 'dwu-line-chart',
  templateUrl: './line-chart.component.html',
  styleUrls: ['./line-chart.component.scss'],
  providers: [TooltipService],
})
export class LineChartComponent extends BaseChartComponent {

    @Input() tableData: any;
    @Input() keys: string[];
    @Input() colorsByKey: Record<string, string>;
    @Input() disabledKeys: Set<string> = new Set();
    @Input() hoverIndex: number;
    @Input() yAxisFormatter: any;
    @Output() hoverIndexChange: EventEmitter<number> = new EventEmitter<number>();
    @Input() indicators: any[];

    @Input() tooltipTemplate: TemplateRef<any>;


    public filteredKeys;
    public hoverLine;
    public bubblesG;
    public maxY;

    // some extra margin on the chart itself
    public chartMargin = 10;

    constructor(
        public hostEl: ElementRef,
        public zone: NgZone,
        public tts: TooltipService,
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
        if (changes.indicators) {
            this.renderIndicators(this.indicators, this.tableData, this.maxY);
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
        this.hoverLine = this.rootG.append('line')
            .attr('class', 'hover-line')
            .style('stroke', '#8A9A5B')
            .style('stroke-opacity', '0.8')
            .style('stroke-width', '3')
            .style('shape-rendering', 'crispEdges');
        this.bubblesG = this.rootG.append('g');
    }

    public onXYHover(x: number, y: number) {
        const numberOfXDataPoints = this.tableData && this.tableData.length;
        if (!numberOfXDataPoints) {
            return;
        }
        const xDomain = this.xScale.domain();
        const range = this.xScale.range();
        const width = this.xScale(xDomain[1]) - this.xScale(xDomain[0]);
        const startingPx = this.xScale(this.tableData[0].timestamp);
        const distanceBetweenPoints = width / (numberOfXDataPoints - 1)
        const xOnChart =  x - this.margins.left - this.chartMargin;
        const valueOnChart = this.xScale.invert(xOnChart);
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
            if (isUndefined(tableColumnData[key])) {
                return;
            }
            return {
                value: tableColumnData[key],
                key: key,
            };
        }).filter(Boolean);

        this.bubblesG.attr('transform', `translate(${this.xScale(hoverLineTimestamp)},0)`);
        const bubbles = this.bubblesG.selectAll('circle.bubble')
            .data(tableColumnValues);
        bubbles.enter()
            .append('circle')
            .attr('r', 3)
            .attr('cx', 0)
            .attr('class', 'bubble')
            .style('fill', 'white')
            .attr('stroke-width', '1px')
            .merge(bubbles)
            .attr('stroke', (d) => this.colorsByKey[d.key])
            .attr('cy', (d) => this.yScale(d.value))
        bubbles.exit().remove();

        this.hoverLine
            .attr('x1', this.xScale(hoverLineTimestamp) || 0)
            .attr('x2', this.xScale(hoverLineTimestamp) || 0)
            .attr('y1', this.yScale(this.maxY || 1) - 3)
            .attr('y2', this.yScale(0) + 3)

      if (this.mouseIn) {
        this.tts.renderTooltip(this.hoverLine.node(), this.tooltipTemplate, true);
      }

    }

    public onMouseEnter() {
      this.tts.renderTooltip(this.hoverLine.node(), this.tooltipTemplate, true);
    }

    public onMouseLeave() {
      this.tts.renderTooltip(this.hoverLine.node(), undefined);
    }

    public onZoom(event, width, height) {
        const nextRange = [this.chartMargin, width - this.chartMargin]
            .map(d => d3.event.transform.applyX(d));

        this.xScale.range(nextRange);

        const numberOfXDataPoints = this.tableData.length ? this.tableData.length : 0;
        const allXValues = this.tableData.length ? this.tableData.map((d) => d.timestamp) : [];
        const xAxis = super.getXAxisTicks(this.xScale, width, numberOfXDataPoints, allXValues)
        super.applyXAxis(this.xAxisG, xAxis, height);

        const pathLineDrawer = d3.line()
            .x((d) => this.xScale(d.x))
            .y((d) => this.yScale(d.y));

        this.seriesG.selectAll('path.series')
            .attr('d', pathLineDrawer);

        this.positionHoverLine();
    }

    public renderFor(width: number, height: number) {
        this.filteredKeys = this.keys.filter((key: string) => {
            return !(this.disabledKeys && this.disabledKeys.has(key));
        });
        const reversedKeys = [...this.filteredKeys].reverse();
        const dataset = reversedKeys.map((key: string) => {
            const series = this.tableData.map((columnData: any) => {
                const cellData = columnData[key];
                return !isUndefined(cellData) && {
                    key: key,
                    y: cellData,
                    x: columnData.timestamp,
                    data: columnData,
                };
            }).filter(Boolean);
            series.key = key;
            return series;
        });

        const domain = this.tableData.length ? [first(this.tableData).timestamp, last(this.tableData).timestamp] : [];

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

        const numberOfXDataPoints = this.tableData.length || 0;
        const allXValues = this.tableData.length ? this.tableData.map((d) => d.timestamp) : [];
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
            .style('stroke-width', '2px')
            .merge(paths)
            .attr('class', (d) => `series ${d.key}`)
            .attr('d', pathLineDrawer)
            .style('stroke', (d) => this.colorsByKey[d.key]);
        paths.exit().remove();

        this.positionHoverLine();
        this.renderIndicators(this.indicators, this.tableData, this.maxY);
    }

}
