export function getDateFromStr(dateStr) {
    return new Date(dateStr);
}
export function getDateFromLeadingYearStr(dateStr) {
    var splitDateStr = dateStr.split('-').map(Number);
    return new Date(splitDateStr[0], splitDateStr[1] - 1, splitDateStr[2]);
}
//# sourceMappingURL=date-time.js.map