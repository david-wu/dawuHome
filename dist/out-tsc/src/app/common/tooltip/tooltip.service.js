import { __decorate, __read } from "tslib";
import { Injectable, } from '@angular/core';
import { map, some, } from 'lodash';
import { combineLatest, BehaviorSubject, } from 'rxjs';
import { TooltipViewComponent } from '@common/tooltip/tooltip-view.component';
var TooltipService = /** @class */ (function () {
    function TooltipService(componentFactoryResolver, appRef, injector) {
        var _this = this;
        this.componentFactoryResolver = componentFactoryResolver;
        this.appRef = appRef;
        this.injector = injector;
        this.rootElement = document && document.body;
        this.hoverEl$ = new BehaviorSubject(undefined);
        this.templatesByEl$ = new BehaviorSubject(new Map());
        this.arrowSize = 10;
        this.approxTooltipWidth = 250;
        this.approxTooltipHeight = 125;
        this.tooltipViewRef = this.appendComponentToDocBody(TooltipViewComponent);
        this.tooltipView = this.tooltipViewRef.instance;
        combineLatest(this.hoverEl$, this.templatesByEl$)
            .subscribe(function (_a) {
            var _b = __read(_a, 2), hoverEl = _b[0], templatesByEl = _b[1];
            var template = templatesByEl.get(hoverEl);
            _this.renderTooltip(hoverEl, template);
        });
    }
    TooltipService.prototype.renderTooltip = function (hoverEl, template, horizontalOnly) {
        if (horizontalOnly === void 0) { horizontalOnly = false; }
        var hoverComponent = this.tooltipView;
        if (!hoverEl) {
            this.tooltipView.template = undefined;
            return;
        }
        var boundingRect = hoverEl.getBoundingClientRect();
        var viewPortDim = this.getDocumentViewportDim();
        var protrudingBy = this.getProtrudingBy(boundingRect, viewPortDim);
        var tooltipDirection = this.getTooltipDirection(protrudingBy, horizontalOnly);
        var tooltipPositions = this.getTooltipPositions(boundingRect, tooltipDirection);
        this.tooltipView.template = template;
        this.tooltipView.top = tooltipPositions.top;
        this.tooltipView.left = tooltipPositions.left;
        this.tooltipView.transform = tooltipPositions.transform;
    };
    TooltipService.prototype.getDocumentViewportDim = function () {
        return {
            width: Math.max(document.documentElement.clientWidth || 0, window.innerWidth || 0),
            height: Math.max(document.documentElement.clientHeight || 0, window.innerHeight || 0),
        };
    };
    TooltipService.prototype.getProtrudingBy = function (boundingRect, viewPortDim) {
        return {
            BOTTOM: this.approxTooltipHeight - boundingRect.top,
            LEFT: boundingRect.left + boundingRect.width + this.approxTooltipWidth - viewPortDim.width,
            TOP: boundingRect.top + boundingRect.height + this.approxTooltipHeight - viewPortDim.height,
            RIGHT: this.approxTooltipWidth - boundingRect.left,
        };
        return [
            this.approxTooltipHeight - boundingRect.top,
            boundingRect.left + boundingRect.width + this.approxTooltipWidth - viewPortDim.width,
            boundingRect.top + boundingRect.height + this.approxTooltipHeight - viewPortDim.height,
            this.approxTooltipWidth - boundingRect.left,
        ];
    };
    TooltipService.prototype.getTooltipDirection = function (protrudingBy, horizontalOnly) {
        var protrudingList = map(protrudingBy, function (value, key) { return [key, value]; });
        if (!some(protrudingList, function (_a) {
            var _b = __read(_a, 2), direction = _b[0], protrudingBy = _b[1];
            return protrudingBy > 0;
        })) {
            return horizontalOnly ? 'LEFT' : 'TOP';
        }
        if (horizontalOnly) {
            protrudingList = protrudingList.filter(function (d) {
                return (d[0] === 'RIGHT') || (d[0] === 'LEFT');
            });
        }
        protrudingList.sort(function (a, b) { return b[1] - a[1]; });
        return protrudingList[0][0];
    };
    TooltipService.prototype.getTooltipPositions = function (boundingRect, direction) {
        if (direction === 'TOP') {
            return {
                top: boundingRect.top - this.arrowSize + "px",
                left: boundingRect.left + (boundingRect.width / 2) + "px",
                transform: "translate(-50%, -100%)",
            };
        }
        if (direction === 'LEFT') {
            return {
                top: boundingRect.top + (boundingRect.height / 2) + "px",
                left: boundingRect.left - this.arrowSize + "px",
                transform: "translate(-100%, -50%)",
            };
        }
        if (direction === 'RIGHT') {
            return {
                top: boundingRect.top + (boundingRect.height / 2) + "px",
                left: boundingRect.left + boundingRect.width + this.arrowSize + "px",
                transform: "translate(0, -50%)",
            };
        }
        if (direction === 'BOTTOM') {
            return {
                top: boundingRect.top + boundingRect.height + this.arrowSize + "px",
                left: boundingRect.left + (boundingRect.width / 2) + "px",
                transform: "translate(-50%, 0)",
            };
        }
    };
    TooltipService.prototype.registerTooltip = function (tooltipEl, tooltipTemplate) {
        var _this = this;
        var nextTemplatesByEl = new Map(this.templatesByEl$.value);
        nextTemplatesByEl.set(tooltipEl, tooltipTemplate);
        this.templatesByEl$.next(nextTemplatesByEl);
        var enterHandler = function () {
            _this.hoverEl$.next(tooltipEl);
        };
        var leaveHandler = function () {
            _this.hoverEl$.next(undefined);
        };
        tooltipEl.addEventListener('mouseenter', enterHandler);
        tooltipEl.addEventListener('focus', enterHandler);
        tooltipEl.addEventListener('mouseleave', leaveHandler);
        tooltipEl.addEventListener('blur', leaveHandler);
    };
    TooltipService.prototype.appendComponentToDocBody = function (component) {
        var componentRef = this.componentFactoryResolver
            .resolveComponentFactory(component)
            .create(this.injector);
        // Attach component to appRef for change detection
        this.appRef.attachView(componentRef.hostView);
        var domElem = componentRef.hostView.rootNodes[0];
        document.body.appendChild(domElem);
        return componentRef;
    };
    TooltipService.prototype.ngOnDestroy = function () {
        this.appRef.detachView(this.tooltipViewRef.hostView);
        this.tooltipViewRef.destroy();
    };
    TooltipService = __decorate([
        Injectable()
    ], TooltipService);
    return TooltipService;
}());
export { TooltipService };
//# sourceMappingURL=tooltip.service.js.map