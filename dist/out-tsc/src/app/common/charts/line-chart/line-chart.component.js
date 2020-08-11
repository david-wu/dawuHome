import { __decorate, __extends, __read, __spread } from "tslib";
import { Component, EventEmitter, Input, Output, } from '@angular/core';
import { isUndefined, first, last } from 'lodash';
import * as d3 from 'd3';
import { BaseChartComponent } from '../base-chart/base-chart.component';
import { TooltipService } from '@common/tooltip/tooltip.service';
var LineChartComponent = /** @class */ (function (_super) {
    __extends(LineChartComponent, _super);
    function LineChartComponent(hostEl, zone, tts) {
        var _this = _super.call(this, hostEl, zone) || this;
        _this.hostEl = hostEl;
        _this.zone = zone;
        _this.tts = tts;
        _this.disabledKeys = new Set();
        _this.hoverIndexChange = new EventEmitter();
        _this.hoverSeriesChange = new EventEmitter();
        // some extra margin on the chart itself
        _this.chartMargin = 10;
        return _this;
    }
    LineChartComponent.prototype.ngOnChanges = function (changes) {
        if (changes.tableData && changes.tableData.firstChange && this.tableData) {
            this.initializeSvg();
        }
        if (changes.tableData || changes.disabledKeys) {
            if (this.tableData) {
                this.render();
            }
        }
        if (changes.hoverIndex) {
            this.positionHoverLine();
        }
        if (changes.hoverSeries) {
            this.renderHoverEffect();
        }
        if (changes.indicators) {
            this.renderIndicators(this.indicators, this.tableData, this.maxY);
        }
    };
    LineChartComponent.prototype.ngAfterViewInit = function () {
        _super.prototype.ngAfterViewInit.call(this);
    };
    LineChartComponent.prototype.ngOnDestroy = function () {
        _super.prototype.ngOnDestroy.call(this);
    };
    LineChartComponent.prototype.initializeSvg = function () {
        _super.prototype.initializeSvg.call(this);
        this.hoverLine = this.rootG.append('line')
            .attr('class', 'hover-line')
            .style('stroke', '#8A9A5B')
            .style('stroke-opacity', '0.8')
            .style('stroke-width', '1')
            .style('shape-rendering', 'crispEdges');
        this.bubblesG = this.rootG.append('g');
    };
    LineChartComponent.prototype.onXYHover = function (x, y) {
        var _this = this;
        var numberOfXDataPoints = this.tableData && this.tableData.length;
        if (!numberOfXDataPoints) {
            return;
        }
        var xDomain = this.xScale.domain();
        // const range = this.xScale.range();
        var width = this.xScale(xDomain[1]) - this.xScale(xDomain[0]);
        var startingPx = this.xScale(this.tableData[0].timestamp);
        var distanceBetweenPoints = width / (numberOfXDataPoints - 1);
        var xOnChart = x - this.margins.left - this.chartMargin;
        var valueOnChart = this.xScale.invert(xOnChart);
        var rawIndex = Math.max(Math.round(xOnChart / distanceBetweenPoints), 0) || 0;
        var hoverIndex = Math.min(Math.max(rawIndex, 0), numberOfXDataPoints - 1);
        var hoverSeries = this.findClosestSeries(hoverIndex, y);
        if (hoverIndex !== this.hoverIndex) {
            this.ngZone.run(function () {
                _this.hoverIndex = hoverIndex;
                _this.hoverIndexChange.emit(hoverIndex);
            });
        }
        if (hoverSeries !== this.hoverSeries) {
            this.ngZone.run(function () {
                _this.hoverSeries = hoverSeries;
                _this.hoverSeriesChange.emit(hoverSeries);
            });
        }
    };
    LineChartComponent.prototype.findClosestSeries = function (hoverIndex, y) {
        var _this = this;
        y = y - this.margins.top;
        var yDomain = this.yScale.domain();
        if (y > this.yScale(yDomain[0])) {
            return;
        }
        var hoverSeries = '';
        var dataPoint = this.tableData[hoverIndex];
        var keyVals = this.keys.map(function (key) {
            return {
                key: key,
                yVal: _this.yScale(dataPoint[key]),
            };
        });
        keyVals.sort(function (a, b) { return a.yVal - b.yVal; });
        var distanceFrom = Math.abs(y - keyVals[0].yVal);
        var closestSeries = keyVals[0];
        for (var i = 1; i < keyVals.length; i++) {
            var nextDistanceFrom = Math.abs(y - keyVals[i].yVal);
            if (nextDistanceFrom < distanceFrom) {
                closestSeries = keyVals[i];
                distanceFrom = nextDistanceFrom;
            }
        }
        // if mouse isn't close enough to a series
        if (distanceFrom > 12) {
            return;
        }
        return closestSeries.key;
    };
    LineChartComponent.prototype.positionHoverLine = function () {
        var _this = this;
        if (!this.tableData || !this.tableData.length) {
            return;
        }
        var tableColumnData = this.tableData[this.hoverIndex];
        var hoverLineTimestamp = tableColumnData.timestamp;
        var tableColumnValues = this.filteredKeys.map(function (key) {
            if (isUndefined(tableColumnData[key])) {
                return;
            }
            return {
                value: tableColumnData[key],
                key: key,
            };
        }).filter(Boolean);
        this.bubblesG.attr('transform', "translate(" + this.xScale(hoverLineTimestamp) + ",0)");
        var bubbles = this.bubblesG.selectAll('circle.bubble')
            .data(tableColumnValues);
        bubbles.enter()
            .append('circle')
            .attr('r', 3)
            .attr('cx', 0)
            .attr('class', 'bubble')
            .style('fill', 'white')
            .attr('stroke-width', '1px')
            .merge(bubbles)
            .attr('stroke', function (d) { return _this.colorsByKey[d.key]; })
            .attr('cy', function (d) { return _this.yScale(d.value); });
        bubbles.exit().remove();
        this.hoverLine
            .attr('x1', this.xScale(hoverLineTimestamp) || 0)
            .attr('x2', this.xScale(hoverLineTimestamp) || 0)
            .attr('y1', this.yScale(this.maxY || 1) - 3)
            .attr('y2', this.yScale(0) + 3);
        if (this.mouseIn) {
            this.tts.renderTooltip(this.hoverLine.node(), this.tooltipTemplate, true);
        }
    };
    LineChartComponent.prototype.onMouseEnter = function () {
        this.tts.renderTooltip(this.hoverLine.node(), this.tooltipTemplate, true);
    };
    LineChartComponent.prototype.onMouseLeave = function () {
        this.tts.renderTooltip(this.hoverLine.node(), undefined);
    };
    LineChartComponent.prototype.onZoom = function (event, width, height) {
        var _this = this;
        var nextRange = [this.chartMargin, width - this.chartMargin]
            .map(function (d) { return d3.event.transform.applyX(d); });
        this.xScale.range(nextRange);
        var numberOfXDataPoints = this.tableData.length ? this.tableData.length : 0;
        var allXValues = this.tableData.length ? this.tableData.map(function (d) { return d.timestamp; }) : [];
        var xAxis = _super.prototype.getXAxisTicks.call(this, this.xScale, width, numberOfXDataPoints, allXValues);
        _super.prototype.applyXAxis.call(this, this.xAxisG, xAxis, height);
        var pathLineDrawer = d3.line()
            .x(function (d) { return _this.xScale(d.x); })
            .y(function (d) { return _this.yScale(d.y); });
        this.seriesG.selectAll('path.series')
            .attr('d', pathLineDrawer);
        this.positionHoverLine();
    };
    LineChartComponent.prototype.renderFor = function (width, height) {
        var _this = this;
        this.filteredKeys = this.keys.filter(function (key) {
            return !(_this.disabledKeys && _this.disabledKeys.has(key));
        });
        var reversedKeys = __spread(this.filteredKeys).reverse();
        var dataset = reversedKeys.map(function (key) {
            var series = _this.tableData.map(function (columnData) {
                var cellData = columnData[key];
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
        var domain = this.tableData.length ? [first(this.tableData).timestamp, last(this.tableData).timestamp] : [];
        this.xScale = d3.scaleTime()
            .domain(domain)
            .range([this.chartMargin, width - this.chartMargin]);
        this.maxY = dataset.reduce(function (currentMax, series) {
            var seriesMax = series.reduce(function (currentSeriesMax, cell) {
                return Math.max(currentSeriesMax, cell.y);
            }, 0);
            return Math.max(currentMax, seriesMax);
        }, 0);
        this.yScale = d3.scaleLinear()
            .domain([0, this.maxY || 1])
            .range([height, 0]);
        var numberOfXDataPoints = this.tableData.length || 0;
        var allXValues = this.tableData.length ? this.tableData.map(function (d) { return d.timestamp; }) : [];
        var xAxis = _super.prototype.getXAxisTicks.call(this, this.xScale, width, numberOfXDataPoints, allXValues);
        _super.prototype.applyXAxis.call(this, this.xAxisG, xAxis, height);
        var yAxis = _super.prototype.getLinearYAxis.call(this, this.yScale, width, this.yAxisFormatter);
        _super.prototype.applyYAxis.call(this, this.yAxisG, yAxis);
        var pathLineDrawer = d3.line()
            .x(function (d) { return _this.xScale(d.x); })
            .y(function (d) { return _this.yScale(d.y); });
        // Create groups for each series, rects for each segment
        var paths = this.seriesG.selectAll('path.series')
            .data(dataset);
        paths.enter()
            .append('path')
            .style('fill', 'none')
            .style('stroke-width', '2px')
            .merge(paths)
            .attr('class', function (d) { return "series " + d.key; })
            .attr('d', pathLineDrawer)
            .style('stroke', function (d) { return _this.colorsByKey[d.key]; })
            .style('stroke-opacity', function (d) {
            if (_this.hoverSeries && (_this.hoverSeries !== d.key)) {
                return 0.25;
            }
            else {
                return 1;
            }
        });
        paths.exit().remove();
        this.positionHoverLine();
        this.renderIndicators(this.indicators, this.tableData, this.maxY);
    };
    LineChartComponent.prototype.renderHoverEffect = function () {
        var _this = this;
        this.seriesG.selectAll('path.series')
            .style('stroke-opacity', function (d) {
            if (_this.hoverSeries && (_this.hoverSeries !== d.key)) {
                return 0.25;
            }
            else {
                return 1;
            }
        });
    };
    __decorate([
        Input()
    ], LineChartComponent.prototype, "tableData", void 0);
    __decorate([
        Input()
    ], LineChartComponent.prototype, "keys", void 0);
    __decorate([
        Input()
    ], LineChartComponent.prototype, "colorsByKey", void 0);
    __decorate([
        Input()
    ], LineChartComponent.prototype, "disabledKeys", void 0);
    __decorate([
        Input()
    ], LineChartComponent.prototype, "hoverIndex", void 0);
    __decorate([
        Output()
    ], LineChartComponent.prototype, "hoverIndexChange", void 0);
    __decorate([
        Input()
    ], LineChartComponent.prototype, "hoverSeries", void 0);
    __decorate([
        Output()
    ], LineChartComponent.prototype, "hoverSeriesChange", void 0);
    __decorate([
        Input()
    ], LineChartComponent.prototype, "yAxisFormatter", void 0);
    __decorate([
        Input()
    ], LineChartComponent.prototype, "indicators", void 0);
    __decorate([
        Input()
    ], LineChartComponent.prototype, "tooltipTemplate", void 0);
    LineChartComponent = __decorate([
        Component({
            selector: 'dwu-line-chart',
            templateUrl: './line-chart.component.html',
            styleUrls: ['./line-chart.component.scss'],
            providers: [TooltipService],
        })
    ], LineChartComponent);
    return LineChartComponent;
}(BaseChartComponent));
export { LineChartComponent };
//# sourceMappingURL=line-chart.component.js.map