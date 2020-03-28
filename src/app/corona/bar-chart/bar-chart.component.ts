import {
    Component,
    ElementRef,
    Input,
} from '@angular/core';
import { CoronaDataExtractor } from '../models/corona-data-extractor.model';
import * as d3 from 'd3';

@Component({
  selector: 'dwu-bar-chart',
  templateUrl: './bar-chart.component.html',
  styleUrls: ['./bar-chart.component.scss'],
})
export class BarChartComponent {

    @Input() coronaData: any;

    public coronaExtractor = new CoronaDataExtractor();
    public margins = {
        top: 50,
        right: 160,
        bottom: 35,
        left: 30,
    };

    constructor(public hostEl: ElementRef) {}

    public ngOnChanges(changes) {
        if (changes.coronaData && this.coronaData) {
            this.render();
        }
    }

    public updateSvg() {

    }

    public render() {
        const width = 960 - this.margins.left - this.margins.right;
        const height = 500 - this.margins.top - this.margins.bottom;

        const stack = d3.stack().keys([
            'deaths',
            'recovered',
            'active',
            'new',
        ]);
        const dataset = stack(this.coronaData);

        var x = d3.scaleBand()
          .domain(dataset[0].map((d) => d.data.timestamp))
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

          const colorsByKey = {
              deaths: '2B1919',
              recovered: '34A2AA',
              active: 'AD3E3E',
              new: 'ED9797',
          }


        // Define and draw axes
        var yAxis = d3.axisLeft()
          .scale(y)
          // .orient('left')
          .ticks(6)
          .tickSize(-width, 0, 0)
          .tickFormat((d) => d);


        const filteredXDomainValues = x.domain().filter((d, i)=> {
            const maxXpoints = 10;
            const xValues = dataset[0].length;
            let xPoints = xValues;
            let interval = 1;
            while(xPoints > maxXpoints) {
                interval++;
                xPoints = xValues / interval;
            }
            return !(i % interval);
        });
        var xAxis = d3.axisBottom()
          .scale(x)
          .tickValues(filteredXDomainValues)
          .tickSizeOuter(0)
          .tickFormat(d3.timeFormat('%b-%e-%Y'));

        const svg = d3.select(this.hostEl.nativeElement)
          .append('svg')
          .attr('width', width + this.margins.left + this.margins.right)
          .attr('height', height + this.margins.top + this.margins.bottom)
          .append('g')
          .attr('transform', 'translate(' + this.margins.left + ',' + this.margins.top + ')');

        svg.append('g')
          .attr('class', 'y axis')
          .call(yAxis)
          // remove left vertical line
          .call(g => g.select(".domain")
            .remove())
          .call(g => g.selectAll(".tick:not(:first-of-type) line")
            .attr("stroke-opacity", 0.5)
            .attr("stroke-dasharray", "2,2"));

        svg.append('g')
          .attr('class', 'x axis')
          .attr('transform', 'translate(0,' + height + ')')
          .call(xAxis);


        // Create groups for each series, rects for each segment
        var groups = svg.selectAll('g.series')
          .data(dataset)
          .enter().append('g')
          .attr('class', (d) => `series ${d.key}`)
          // .attr('class', 'series')
          .style('fill', (d) => colorsByKey[d.key]);

        const rect = groups.selectAll('rect')
          .data((d) => {
              d.forEach((points: any) => {
                  points.seriesKey = d.key;
              });
              return d;
          })
          .enter()
          .append('rect')
          .attr('x', (d) => x(d.data.timestamp))
          .attr('y', (d) => y(d[1]))
          .attr('height', (d) => y(d[0]) - y(d[1]))
          .attr('width', x.bandwidth())
          .on('mouseover', function() { tooltip.style('display', null); })
          .on('mouseout', function() { tooltip.style('display', 'none'); })
          .on('mousemove', function(d) {
            const xPosition = d3.mouse(this)[0] - (120 / 2);
            const yPosition = d3.mouse(this)[1] - (48 + 20);
            tooltip.attr('transform', `translate(${xPosition},${yPosition})`);
            tooltip.select('text.value-text').text(`${d.seriesKey}: ${d.data[d.seriesKey]}`);
            tooltip.select('text.time-text').text(`${d3.timeFormat('%b-%e-%Y')(d.data.timestamp)}`);
          });


        // Draw legend
        const reversedDataSet = dataset.slice().reverse();
        const legend = svg.selectAll('.legend')
          .data(reversedDataSet)
          .enter().append('g')
          .attr('class', 'legend')
          .attr('transform', function(d, i) { return 'translate(30,' + i * 19 + ')'; });

        legend.append('rect')
          .attr('x', width - 18)
          .attr('width', 18)
          .attr('height', 18)
          .style('fill', (d) => colorsByKey[d.key]);

        legend.append('text')
          .attr('x', width + 5)
          .attr('y', 9)
          .attr('dy', '.35em')
          .style('text-anchor', 'start')
          .text((d) => d.key);


        // Prep the tooltip bits, initial display is hidden
        var tooltip = svg.append('g')
          .attr('class', 'tooltip')
          .style('display', 'none');

        tooltip.append('rect')
          .attr('width', 120)
          .attr('height', 48)
          .attr('rx', 5)
          .attr('fill', '#DDD9CF')
          .style('opacity', 0.8);

        tooltip.append('text')
          .attr('class', 'time-text')
          .attr('x', 120/2)
          .attr('dy', '1.2rem')
          .style('text-anchor', 'middle')
          // .style('pointer-events', 'none')
          .attr('font-size', '12px')
          .attr('font-weight', 'bold');

        tooltip.append('text')
          .attr('class', 'value-text')
          .attr('x', 120/2)
          .attr('dy', '2.4rem')
          .style('text-anchor', 'middle')
          // .style('pointer-events', 'none')
          .attr('font-size', '12px')
    }
}
