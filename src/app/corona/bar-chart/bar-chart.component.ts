import {
    Component,
    ElementRef,
    Input,
} from '@angular/core';
import { CoronaDataExtractor } from '../models/corona-data-extractor.model';
import * as d3 from 'd3';
import ResizeSensor from 'css-element-queries/src/ResizeSensor';

@Component({
  selector: 'dwu-bar-chart',
  templateUrl: './bar-chart.component.html',
  styleUrls: ['./bar-chart.component.scss'],
})
export class BarChartComponent {

    @Input() coronaData: any;
    @Input() keys: string[];
    @Input() colorsByKey: Record<string, string>;
    @Input() disabledKeys: Set<string> = new Set();

    public sensor;
    public coronaExtractor = new CoronaDataExtractor();
    public margins = {
        top: 50,
        right: 20,
        bottom: 20,
        left: 45,
    };

    public svg;
    public rootG;
    public yAxis;
    public xAxis;

    constructor(public hostEl: ElementRef) {}

    public ngOnChanges(changes) {
        if (changes.coronaData && changes.coronaData.firstChange && this.coronaData) {
            this.initializeSvg();
        }
        if (changes.coronaData || changes.disabledKeys) {
            if (this.coronaData) {
                this.render();
            }
        }
    }

    public ngAfterViewInit() {
        this.sensor = new ResizeSensor(this.hostEl.nativeElement, () => {
            this.render();
        });
    }

    public ngOnDestroy() {
        this.sensor.detach()
    }

    public initializeSvg() {
        this.svg = d3.select(this.hostEl.nativeElement).append('svg');
        this.rootG = this.svg.append('g');
        this.yAxis = this.rootG.append('g')
            .attr('class', 'y axis');

        this.xAxis = this.rootG.append('g')
            .attr('class', 'x axis');

    }

    public render() {
        const elDim = this.getElDim();

        const width = elDim.width - this.margins.left - this.margins.right;
        const height = elDim.height - this.margins.top - this.margins.bottom;

        const filteredKeys = this.keys.filter((key: string) => {
            return !(this.disabledKeys && this.disabledKeys.has(key));
        });
        const reversedKeys = filteredKeys.reverse();
        const stack = d3.stack().keys(reversedKeys);
        const dataset = stack(this.coronaData);

        const domain = dataset.length ? dataset[0].map((d) => d.data.timestamp) : [];
        var x = d3.scaleBand()
          .domain(domain)
          .range([10, width-10])
          .padding(0.05);

        const maxY = dataset.reduce((currentMax: number, series: number[][]) => {
            const seriesMax = series.reduce((currentSeriesMax: number, stack: number[]) => {
                return Math.max(currentSeriesMax, ...stack);
            }, 0);
            return Math.max(currentMax, seriesMax)
        }, 0);

        var y = d3.scaleLinear()
          .domain([0, maxY])
          .range([height, 0]);

        // Define and draw axes
        var yAxis = d3.axisLeft()
          .scale(y)
          // .orient('left')
          .ticks(6)
          .tickSize(-width, 0, 0)
          .tickFormat((d) => d);

        const numberOfXDataPoints = dataset.length ? dataset[0].length : 0;
        const xDomainInterval = this.getXDomainInterval(width, numberOfXDataPoints);
        const remainder = numberOfXDataPoints % xDomainInterval;
        const filteredXDomainValues = x.domain().filter((d, i)=> {
            // (i + 1 - remainder) makes sure the most recent datapoint's tick is always visible
            return !((i + 1 - remainder) % xDomainInterval);
        });
        var xAxis = d3.axisBottom()
          .scale(x)
          .tickValues(filteredXDomainValues)
          .tickSizeOuter(0)
          .tickFormat(d3.timeFormat('%x'));

        this.svg
            .attr('width', width + this.margins.left + this.margins.right)
            .attr('height', height + this.margins.top + this.margins.bottom)

        this.rootG
            .attr('transform', 'translate(' + this.margins.left + ',' + this.margins.top + ')');

        this.yAxis
            .call(yAxis)
            .call(g => g.select(".domain")
                .remove())
            .call(g => g.selectAll(".tick:not(:first-of-type) line")
            .attr("stroke-opacity", 0.5)
            .attr("stroke-dasharray", "2,2"));

        this.xAxis
            .attr('transform', 'translate(0,' + height + ')')
            .call(xAxis);

        // Create groups for each series, rects for each segment
        const groups = this.rootG.selectAll('g.series')
          .data(dataset);
        groups.enter()
            .append('g')
            .attr('class', (d) => `series ${d.key}`)
            .merge(groups)
            .style('fill', (d) => this.colorsByKey[d.key]);
        groups.exit().remove();

        // reusing "groups" selection doesn't work, not sure why
        // explicitly selectAll again before rebinding works
        const rects = this.rootG.selectAll('g.series').selectAll('rect')
            .data((series) => {
                series.forEach((points: any) => {
                    points.seriesKey = series.key;
                });
                return series;
            });
        rects.enter()
            .append('rect')
            .merge(rects)
            .attr('x', (d) => x(d.data.timestamp))
            .attr('y', (d) => y(d[1]))
            .attr('height', (d) => y(d[0]) - y(d[1]))
            .attr('width', x.bandwidth())
            .on('mouseover', () => tooltip.style('display', null))
            .on('mouseout', () => tooltip.style('display', 'none'))
            .on('mousemove', function(d) {
                const xPosition = d3.mouse(this)[0] - (120 / 2);
                const yPosition = d3.mouse(this)[1] - (48 + 20);
                tooltip.attr('transform', `translate(${xPosition},${yPosition})`);
                tooltip.select('text.value-text').text(`${d.seriesKey}: ${d.data[d.seriesKey]}`);
                tooltip.select('text.time-text').text(`${d3.timeFormat('%b-%e-%Y')(d.data.timestamp)}`);
            });
        rects.exit().remove()

        // const legendData = dataset.slice().reverse().map((d) => ({ key: d.key }));
        // const legend = this.rootG.selectAll('g.legend')
        //     .data(legendData);
        // legend.enter()
        //     .append('g')
        //     .attr('class', 'legend')
        //     .merge(legend)
        //     .attr('transform', (d, i) => {
        //         const x = (i * 100);
        //         const y = height + 20;
        //         return `translate(${x},${y})`;
        //     })
        // legend.exit().remove();

        // const legendRects = legend.selectAll('rect')
        //     .data((d) => [d]);
        // legendRects.enter()
        //     .append('rect')
        //     .merge(legendRects)
        //     .attr('x', 0)
        //     .attr('width', 18)
        //     .attr('height', 18)
        //     .style('fill', (d) => this.colorsByKey[d.key]);
        // legendRects.exit().remove();

        // const legendText = legend.selectAll('text')
        //     .data((d) => [d]);
        // legendText.enter()
        //     .append('text')
        //     .merge(legendText)
        //     .attr('x', 18 + 5)
        //     .attr('y', 9)
        //     .attr('dy', '.35em')
        //     .style('text-anchor', 'start')
        //     .text((d) => d.key);
        // legendText.exit().remove();

        const tooltip = this.rootG.selectAll('g.tooltip')
            .data([{}]);
        const tooltipContainer = tooltip.enter()
            .append('g')
            .attr('class', 'tooltip')
            .style('display', 'none')
            // do not .merge() because we only want to append on new element
        tooltipContainer.append('rect')
            .attr('width', 120)
            .attr('height', 48)
            .attr('rx', 5)
            .attr('fill', '#DDD9CF')
            .style('opacity', 0.8)
        tooltipContainer.append('text')
          .attr('class', 'time-text')
          .attr('x', 120/2)
          .attr('dy', '1.2rem')
          .style('text-anchor', 'middle')
          .attr('font-size', '12px')
          .attr('font-weight', 'bold')
        tooltipContainer.append('text')
          .attr('class', 'value-text')
          .attr('x', 120/2)
          .attr('dy', '2.4rem')
          .style('text-anchor', 'middle')
          .attr('font-size', '12px')
        tooltip.exit().remove();
    }

    public getXDomainInterval(width: number, xDataPoints: number) {
        const maxXpoints = Math.floor(width / 60);
        let xPoints = xDataPoints;
        let interval = 1;
        while(xPoints > maxXpoints) {
            interval++;
            xPoints = xDataPoints / interval;
        }
        return interval;
    }

    public getElDim() {
        return {
            width: this.hostEl.nativeElement.clientWidth,
            height: this.hostEl.nativeElement.clientHeight,
        }
    }

}
