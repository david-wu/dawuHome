import {
    Component,
    ElementRef,
    EventEmitter,
    Input,
    Output,
} from '@angular/core';
import * as d3 from 'd3';
import ResizeSensor from 'css-element-queries/src/ResizeSensor';

@Component({
  selector: 'dwu-base-chart',
  templateUrl: './base-chart.component.html',
  styleUrls: ['./base-chart.component.scss'],
})
export class BaseChartComponent {

    public sensor;
    public margins = {
        top: 5,
        right: 20,
        bottom: 20,
        left: 55,
    };

    public svg;
    public rootG;
    public seriesG;
    public xScale;
    public yScale
    public xAxisG;
    public yAxisG;

    constructor(public hostEl: ElementRef) {}

    public ngAfterViewInit() {
        this.sensor = new ResizeSensor(this.hostEl.nativeElement, () => {
            this.render();
        });
    }

    public ngOnDestroy() {
        this.sensor.detach()
    }

    public initializeSvg() {
        this.svg = d3.select(this.hostEl.nativeElement).append('svg')
            .on('mousemove', () => this.onMouseMove())
            .on('touchstart', () => this.touchmove())
            .on('touchmove', () => this.touchmove());

        this.rootG = this.svg.append('g');
        this.yAxisG = this.rootG.append('g')
            .attr('class', 'y axis');
        this.xAxisG = this.rootG.append('g')
            .attr('class', 'x axis');
        this.seriesG = this.rootG.append('g');
    }

    public touchmove() {
        // prevents following mouse event
        d3.event.preventDefault();
        d3.event.stopPropagation();
        const touch = d3.touches(this.svg.node());
        const [x, y] = touch[0];
        this.onXYHover(x, y);
    }

    public onMouseMove() {
        const [x, y] = d3.mouse(this.svg.node());
        this.onXYHover(x, y);
    }

    public onXYHover(x: number, y: number) {
    }

    public renderFor(width, height) {
        throw('must implement renderFor');
    }

    public render() {
        const elDim = this.getElDim();

        const width = elDim.width - this.margins.left - this.margins.right;
        const height = elDim.height - this.margins.top - this.margins.bottom;

        this.svg
            .attr('width', width + this.margins.left + this.margins.right)
            .attr('height', height + this.margins.top + this.margins.bottom)

        this.rootG
            .attr('transform', 'translate(' + this.margins.left + ',' + this.margins.top + ')');

        this.renderFor(width, height);
    }

    public getLinearYAxis(yScale, width) {
        return d3.axisLeft()
          .scale(yScale)
          .ticks(6)
          .tickSize(-width, 0, 0)
          .tickFormat((d: number) => d.toLocaleString());
    }

    public applyYAxis(yAxisG, yAxis) {
        return yAxisG.call(yAxis)
            .call(g => g.select('.domain')
                .remove())
            .call(g => g.selectAll('.tick:not(:first-of-type) line')
            .attr('stroke-opacity', 0.5)
            .attr('stroke-dasharray', '2,2'));
    }

    public getXAxis(xScale, width, numberOfXDataPoints) {
        const filteredXDomainValues = this.getFilteredXDomainValues(xScale, width, numberOfXDataPoints);
        return d3.axisBottom()
          .scale(xScale)
          .tickValues(filteredXDomainValues)
          .tickSizeOuter(0)
          .tickFormat(d3.timeFormat('%x'));
    }

    public applyXAxis(xAxisG, xAxis, height) {
        return xAxisG
            .attr('transform', 'translate(0,' + height + ')')
            .call(xAxis);
    }

    public getFilteredXDomainValues(xScale, width, numberOfXDataPoints) {
        const xDomainInterval = this.getXDomainInterval(width, numberOfXDataPoints);
        const remainder = numberOfXDataPoints % xDomainInterval;
        return xScale.domain().filter((d, i)=> {
            // (i + 1 - remainder) makes sure the most recent datapoint's tick is always visible
            return !((i + 1 - remainder) % xDomainInterval);
        });
    }

    public getXDomainInterval(width: number, numberOfXDataPoints: number) {
        const maxXpoints = Math.floor(width / 60);
        let xPoints = numberOfXDataPoints;
        let interval = 1;
        while(xPoints > maxXpoints) {
            interval++;
            xPoints = numberOfXDataPoints / interval;
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
