export function scrollIntoView(parentEl, targetEl) {
    var parentRect = parentEl.getBoundingClientRect();
    var targetRect = targetEl.getBoundingClientRect();
    var relativeRect = {
        top: targetRect.top - parentRect.top,
        left: targetRect.left - parentRect.left,
    };
    // no need to scroll if the entire target is already visible
    var isTargetInView = (relativeRect.top >= 0) && ((parentRect.bottom - targetRect.bottom) >= 0);
    if (isTargetInView) {
        return;
    }
    var targetMidpoint = relativeRect.top + (0.5 * targetRect.height);
    var isTargetCloserToTop = targetMidpoint < (0.5 * parentRect.height);
    var stickyFactor = isTargetCloserToTop ? 0 : (targetRect.height - parentRect.height);
    var targetY = parentEl.scrollTop + relativeRect.top + stickyFactor;
    parentEl.scroll(parentEl.scrollLeft, targetY);
}
//# sourceMappingURL=scroll-into-view.js.map