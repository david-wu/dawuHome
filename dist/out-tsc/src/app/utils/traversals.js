import { __read, __spread } from "tslib";
export function breadthFirstBy(rootNode, getChildren, iteratee) {
    var queue = [rootNode];
    while (queue.length) {
        var currentNode = queue.shift();
        iteratee(currentNode);
        var children = getChildren(currentNode);
        queue.push.apply(queue, __spread(children));
    }
}
export function reverseBreadthFirstBy(rootNode, getChildren, iteratee) {
    var stack = [];
    breadthFirstBy(rootNode, getChildren, function (node) {
        stack.push(node);
    });
    for (var i = stack.length - 1; i >= 0; i--) {
        iteratee(stack[i]);
    }
}
//# sourceMappingURL=traversals.js.map