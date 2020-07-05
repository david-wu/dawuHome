import { __read } from "tslib";
import * as d3 from 'd3';
import ResizeSensor from 'css-element-queries/src/ResizeSensor';
import { filter, last } from 'lodash';
var BaseChartComponent = /** @class */ (function () {
    // public clipPathRectAxis;
    function BaseChartComponent(hostEl, ngZone) {
        this.hostEl = hostEl;
        this.ngZone = ngZone;
        this.margins = {
            top: 15,
            right: 30,
            bottom: 20,
            left: 55,
        };
    }
    BaseChartComponent.prototype.ngAfterViewInit = function () {
        var _this = this;
        this.sensor = new ResizeSensor(this.hostEl.nativeElement, function () {
            _this.render();
        });
    };
    BaseChartComponent.prototype.ngOnDestroy = function () {
        this.sensor.detach();
    };
    BaseChartComponent.prototype.initializeSvg = function () {
        var _this = this;
        this.ngZone.runOutsideAngular(function () {
            _this.svg = d3.select(_this.hostEl.nativeElement).append('svg')
                .on('mousemove', function () { return _this.onMouseMove(); })
                .on('touchstart', function () { return _this.touchmove(); })
                .on('touchmove', function () { return _this.touchmove(); });
        });
        this.svg
            .on('mouseenter', function () { return _this._onMouseEnter(); })
            .on('mouseleave', function () { return _this._onMouseLeave(); });
        this.rootG = this.svg.append('g');
        this.yAxisG = this.rootG.append('g')
            .attr('class', 'y axis');
        this.xAxisG = this.rootG.append('g')
            .attr('class', 'x axis')
            .attr('clip-path', 'url(#clip)');
        this.seriesG = this.rootG.append('g')
            .attr('clip-path', 'url(#clip)');
        this.indicatorsG = this.rootG.append('g');
        // this.applyZoom(this.svg);
        var defs = this.svg.append('defs');
        this.clipPathRect = defs.append('clipPath')
            .attr('id', 'clip')
            .append('rect')
            .attr('x', 0)
            .attr('y', 0);
        // this.clipPathRectAxis = defs.append('clipPath')
        //     .attr('id', 'clipAxis')
        //     .append('rect')
        //     .attr('x', 0)
        //     .attr('y', 0);
    };
    BaseChartComponent.prototype.touchmove = function () {
        // prevents following mouse event
        d3.event.stopPropagation();
        var touch = d3.touches(this.svg.node());
        var _a = __read(touch[0], 2), x = _a[0], y = _a[1];
        this.onXYHover(x, y);
    };
    BaseChartComponent.prototype._onMouseEnter = function () {
        this.mouseIn = true;
        this.onMouseEnter();
    };
    BaseChartComponent.prototype._onMouseLeave = function () {
        this.mouseIn = false;
        this.onMouseLeave();
    };
    BaseChartComponent.prototype.onMouseEnter = function () {
    };
    BaseChartComponent.prototype.onMouseLeave = function () {
    };
    BaseChartComponent.prototype.onMouseMove = function () {
        var _a = __read(d3.mouse(this.svg.node()), 2), x = _a[0], y = _a[1];
        this.onXYHover(x, y);
    };
    BaseChartComponent.prototype.onXYHover = function (x, y) {
    };
    BaseChartComponent.prototype.renderFor = function (width, height) {
        throw ('must implement renderFor');
    };
    BaseChartComponent.prototype.getChartDim = function () {
        var elDim = this.getElDim();
        return {
            width: elDim.width - this.margins.left - this.margins.right,
            height: elDim.height - this.margins.top - this.margins.bottom,
        };
    };
    BaseChartComponent.prototype.render = function () {
        var _a = this.getChartDim(), width = _a.width, height = _a.height;
        this.svg
            .attr('width', width + this.margins.left + this.margins.right)
            .attr('height', height + this.margins.top + this.margins.bottom);
        this.rootG
            .attr('transform', 'translate(' + this.margins.left + ',' + this.margins.top + ')');
        this.clipPathRect
            .attr('width', width)
            .attr('height', height + this.margins.top);
        this.renderFor(width, height);
    };
    BaseChartComponent.prototype.getLinearYAxis = function (yScale, width, formatter) {
        var baseAxis = d3.axisLeft()
            .scale(yScale)
            .ticks(6)
            .tickSize(-width, 0, 0);
        if (formatter) {
            return baseAxis.tickFormat(formatter);
        }
        else {
            return baseAxis.tickFormat(function (d) { return d.toLocaleString(); });
        }
    };
    BaseChartComponent.prototype.applyYAxis = function (yAxisG, yAxis) {
        return yAxisG.call(yAxis)
            .call(function (g) { return g.select('.domain')
            .remove(); })
            .call(function (g) { return g.selectAll('.tick:not(:first-of-type) line')
            .attr('stroke-opacity', 0.5)
            .attr('stroke-dasharray', '2,2'); });
    };
    BaseChartComponent.prototype.getXAxisTicks = function (xScale, width, numberOfXDataPoints, allXValues) {
        var filteredXDomainValues = this.getFilteredTickValues(allXValues, width, numberOfXDataPoints);
        return d3.axisBottom()
            .scale(xScale)
            .tickSizeOuter(0)
            .tickValues(filteredXDomainValues)
            .tickFormat(d3.timeFormat('%-m/%e'));
    };
    BaseChartComponent.prototype.getXBandAxis = function (xScale, width, numberOfXDataPoints) {
        var ticks = xScale.domain();
        var filteredXDomainValues = this.getFilteredTickValues(ticks, width, numberOfXDataPoints);
        return d3.axisBottom()
            .scale(xScale)
            .tickSizeOuter(0)
            .tickValues(filteredXDomainValues)
            .tickFormat(d3.timeFormat('%-m/%-d'));
    };
    BaseChartComponent.prototype.applyXAxis = function (xAxisG, xAxis, height) {
        return xAxisG
            .attr('transform', 'translate(0,' + height + ')')
            .call(xAxis);
    };
    BaseChartComponent.prototype.getFilteredTickValues = function (ticks, width, numberOfXDataPoints) {
        var xDomainInterval = this.getXDomainInterval(width, numberOfXDataPoints);
        var remainder = numberOfXDataPoints % xDomainInterval;
        return ticks.filter(function (d, i) {
            // (i + 1 - remainder) makes sure the most recent datapoint's tick is always visible
            return !((i + 1 - remainder) % xDomainInterval);
        });
    };
    BaseChartComponent.prototype.getXDomainInterval = function (width, numberOfXDataPoints) {
        var maxXpoints = this.getMaxXPoints(width);
        var xPoints = numberOfXDataPoints;
        var interval = 1;
        while (xPoints > maxXpoints) {
            interval++;
            xPoints = numberOfXDataPoints / interval;
        }
        return interval;
    };
    BaseChartComponent.prototype.getMaxXPoints = function (width) {
        return Math.floor(width / 30);
    };
    BaseChartComponent.prototype.getElDim = function () {
        return {
            width: this.hostEl.nativeElement.clientWidth,
            height: this.hostEl.nativeElement.clientHeight,
        };
    };
    BaseChartComponent.prototype.renderIndicators = function (indicators, tableData, maxY, barStepWidth) {
        var _this = this;
        if (barStepWidth === void 0) { barStepWidth = 0; }
        var cleanIndicatorData = filter(indicators, function (indicatorInfo) {
            return (indicatorInfo.value >= tableData[0].timestamp)
                && (indicatorInfo.value <= last(tableData).timestamp);
        });
        var indicatorLines = this.indicatorsG.selectAll('line.indicators')
            .data(cleanIndicatorData);
        indicatorLines.enter()
            .append('line')
            .attr('class', 'indicators')
            .style('stroke-opacity', '1')
            .style('stroke-width', '2')
            .style('stroke-dasharray', '2 3')
            .style('stroke-opacity', '0.8')
            .merge(indicatorLines)
            .style('stroke', function (d) { return d.color || '#292E12'; })
            .attr('x1', function (d) { return (_this.xScale(d.value) || 0) + (barStepWidth / 2); })
            .attr('x2', function (d) { return (_this.xScale(d.value) || 0) + (barStepWidth / 2); })
            .attr('y1', this.yScale(maxY))
            .attr('y2', this.yScale(0) + 3);
        indicatorLines.exit().remove();
        var indicatorText = this.indicatorsG.selectAll('text.indicators')
            .data(cleanIndicatorData);
        indicatorText.enter()
            .append('text')
            .attr('class', 'indicators')
            .attr('font-size', '12')
            .style('opacity', '0.8')
            .merge(indicatorText)
            .attr('text-anchor', 'middle')
            .text(function (d) { return d.label || ''; })
            .style('fill', function (d) { return d.color || '#292E12'; })
            .attr('x', function (d) { return (_this.xScale(d.value) || 0) + (barStepWidth / 2); })
            .attr('y', this.yScale(maxY) - 3);
        indicatorText.exit().remove();
    };
    BaseChartComponent.prototype.onZoom = function (event, width, height) {
    };
    BaseChartComponent.prototype.applyZoom = function (root, width, height) {
        var _this = this;
        if (!width || !height) {
            var chartDim = this.getChartDim();
            width = chartDim.width;
            height = chartDim.height;
        }
        var extent = [
            [0, 0],
            [width, height],
        ];
        root.call(d3.zoom()
            .scaleExtent([1, 8])
            .translateExtent(extent)
            .extent(extent)
            .on('zoom', function () { return _this.onZoom(d3.event, width, height); }));
    };
    return BaseChartComponent;
}());
export { BaseChartComponent };
//# sourceMappingURL=base-chart.component.js.map