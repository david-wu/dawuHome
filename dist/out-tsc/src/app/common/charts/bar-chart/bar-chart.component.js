import { __decorate, __extends, __read, __spread } from "tslib";
import { Component, EventEmitter, Input, Output, } from '@angular/core';
import * as d3 from 'd3';
import { BaseChartComponent } from '../base-chart/base-chart.component';
import { TooltipService } from '@common/tooltip/tooltip.service';
var BarChartComponent = /** @class */ (function (_super) {
    __extends(BarChartComponent, _super);
    function BarChartComponent(hostEl, zone, tts) {
        var _this = _super.call(this, hostEl, zone) || this;
        _this.hostEl = hostEl;
        _this.zone = zone;
        _this.tts = tts;
        _this.colorsByKey = {};
        _this.colorScheme = [
            '#ED9797',
            '#AD3E3E',
            '#34A2AA',
            '#2B1919',
            '#65635F',
        ];
        _this.disabledKeys = new Set();
        _this.hoverIndexChange = new EventEmitter();
        _this.barPadding = 0.05;
        // some extra margin on the chart itself
        _this.chartMargin = 8;
        return _this;
    }
    BarChartComponent.prototype.ngOnChanges = function (changes) {
        if (changes.tableData && changes.tableData.firstChange && this.tableData) {
            this.initializeSvg();
        }
        if (changes.tableData || changes.disabledKeys) {
            if (this.tableData) {
                this.render();
            }
        }
        if (changes.hoverIndex) {
            this.positionHoverBox();
        }
        if (changes.indicators) {
            this.renderIndicators(this.indicators, this.tableData, this.maxY, this.xScale.step());
        }
    };
    BarChartComponent.prototype.ngAfterViewInit = function () {
        _super.prototype.ngAfterViewInit.call(this);
    };
    BarChartComponent.prototype.ngOnDestroy = function () {
        _super.prototype.ngOnDestroy.call(this);
    };
    BarChartComponent.prototype.initializeSvg = function () {
        _super.prototype.initializeSvg.call(this);
        this.hoverBox = this.rootG.append('rect')
            .attr('class', 'hover-box')
            .style('fill', '#8A9A5B')
            .style('fill-opacity', '0.25')
            .style('stroke', '#8A9A5B')
            .style('stroke-opacity', '1')
            .style('stroke-width', '1')
            .attr('clip-path', 'url(#clip)');
    };
    BarChartComponent.prototype.onXYHover = function (x, y) {
        var _this = this;
        var numberOfXDataPoints = this.tableData && this.tableData.length;
        if (!numberOfXDataPoints) {
            return;
        }
        var distanceBetweenBars = this.xScale.step();
        var paddingWidth = this.barPadding * distanceBetweenBars;
        var startingPx = this.xScale(this.tableData[0].timestamp);
        var xOnChart = x - this.margins.left - startingPx - (paddingWidth / 2);
        var rawIndex = Math.floor(xOnChart / distanceBetweenBars);
        var hoverIndex = Math.min(Math.max(rawIndex, 0), numberOfXDataPoints - 1);
        if (hoverIndex !== this.hoverIndex) {
            this.ngZone.run(function () {
                _this.hoverIndex = hoverIndex;
                _this.hoverIndexChange.emit(hoverIndex);
            });
        }
    };
    BarChartComponent.prototype.positionHoverBox = function () {
        var hoverBoxTimestamp = this.tableData[this.hoverIndex || 0].timestamp;
        this.hoverBox
            .attr('x', this.xScale(hoverBoxTimestamp))
            .attr('y', this.yScale(this.maxY))
            .attr('width', this.xScale.bandwidth)
            .attr('height', this.yScale(0) - this.yScale(this.maxY));
        if (this.mouseIn) {
            this.tts.renderTooltip(this.hoverBox.node(), this.tooltipTemplate, true);
        }
    };
    BarChartComponent.prototype.onMouseEnter = function () {
        this.tts.renderTooltip(this.hoverBox.node(), this.tooltipTemplate, true);
    };
    BarChartComponent.prototype.onMouseLeave = function () {
        this.tts.renderTooltip(this.hoverBox.node(), undefined);
    };
    BarChartComponent.prototype.onZoom = function (event, width, height) {
        var _this = this;
        var nextRange = [this.chartMargin, width - this.chartMargin]
            .map(function (d) { return d3.event.transform.applyX(d); });
        this.xScale.range(nextRange);
        var numberOfXDataPoints = this.tableData.length ? this.tableData.length : 0;
        var xAxis = _super.prototype.getXBandAxis.call(this, this.xScale, width, numberOfXDataPoints);
        _super.prototype.applyXAxis.call(this, this.xAxisG, xAxis, height);
        this.seriesG.selectAll('g.series').selectAll('rect')
            .attr('x', function (d) { return _this.xScale(d.data.timestamp); })
            .attr('width', this.xScale.bandwidth());
        this.positionHoverBox();
    };
    BarChartComponent.prototype.renderFor = function (width, height) {
        var _this = this;
        var filteredKeys = this.keys.filter(function (key) {
            return !(_this.disabledKeys && _this.disabledKeys.has(key));
        });
        var reversedKeys = filteredKeys.reverse();
        var stack = d3.stack().keys(reversedKeys);
        var dataset = stack(this.tableData);
        var domain = dataset.length ? dataset[0].map(function (d) { return d.data.timestamp; }) : [];
        this.xScale = d3.scaleBand()
            .domain(domain)
            .range([this.chartMargin, width - this.chartMargin])
            .paddingOuter(0)
            .paddingInner(this.barPadding);
        this.maxY = dataset.reduce(function (currentMax, series) {
            var seriesMax = series.reduce(function (currentSeriesMax, stack) {
                return Math.max.apply(Math, __spread([currentSeriesMax], stack));
            }, 0);
            return Math.max(currentMax, seriesMax);
        }, 0);
        this.yScale = d3.scaleLinear()
            .domain([0, this.maxY])
            .range([height, 0]);
        var numberOfXDataPoints = this.tableData.length ? this.tableData.length : 0;
        var xAxis = _super.prototype.getXBandAxis.call(this, this.xScale, width, numberOfXDataPoints);
        _super.prototype.applyXAxis.call(this, this.xAxisG, xAxis, height);
        var yAxis = _super.prototype.getLinearYAxis.call(this, this.yScale, width, this.yAxisFormatter);
        _super.prototype.applyYAxis.call(this, this.yAxisG, yAxis);
        // Create groups for each series, rects for each segment
        var groups = this.seriesG.selectAll('g.series')
            .data(dataset);
        groups.enter()
            .append('g')
            .attr('class', function (d) { return "series " + d.key; })
            .merge(groups)
            .style('fill', function (d, i) { return _this.colorsByKey[d.key] || _this.colorScheme[i]; });
        groups.exit().remove();
        // reusing "groups" selection doesn't work, not sure why
        // explicitly selectAll again before rebinding works
        var rects = this.seriesG.selectAll('g.series').selectAll('rect')
            .data(function (series) {
            series.forEach(function (points) {
                points.seriesKey = series.key;
            });
            return series;
        });
        rects.enter()
            .append('rect')
            .merge(rects)
            .attr('x', function (d) { return _this.xScale(d.data.timestamp); })
            .attr('y', function (d) { return _this.yScale(d[1]); })
            .attr('height', function (d) { return _this.yScale(d[0]) - _this.yScale(d[1]); })
            .attr('width', this.xScale.bandwidth());
        rects.exit().remove();
        this.positionHoverBox();
        this.renderIndicators(this.indicators, this.tableData, this.maxY, this.xScale.step());
    };
    __decorate([
        Input()
    ], BarChartComponent.prototype, "tableData", void 0);
    __decorate([
        Input()
    ], BarChartComponent.prototype, "keys", void 0);
    __decorate([
        Input()
    ], BarChartComponent.prototype, "colorsByKey", void 0);
    __decorate([
        Input()
    ], BarChartComponent.prototype, "colorScheme", void 0);
    __decorate([
        Input()
    ], BarChartComponent.prototype, "disabledKeys", void 0);
    __decorate([
        Input()
    ], BarChartComponent.prototype, "hoverIndex", void 0);
    __decorate([
        Input()
    ], BarChartComponent.prototype, "yAxisFormatter", void 0);
    __decorate([
        Output()
    ], BarChartComponent.prototype, "hoverIndexChange", void 0);
    __decorate([
        Input()
    ], BarChartComponent.prototype, "indicators", void 0);
    __decorate([
        Input()
    ], BarChartComponent.prototype, "tooltipTemplate", void 0);
    BarChartComponent = __decorate([
        Component({
            selector: 'dwu-bar-chart',
            templateUrl: './bar-chart.component.html',
            styleUrls: ['./bar-chart.component.scss'],
            providers: [TooltipService],
        })
    ], BarChartComponent);
    return BarChartComponent;
}(BaseChartComponent));
export { BarChartComponent };
//# sourceMappingURL=bar-chart.component.js.map