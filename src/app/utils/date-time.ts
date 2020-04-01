
export function getDateFromStr(dateStr: string) {
    const splitDateStr = dateStr.split('-').map(Number);
    return new Date(
        splitDateStr[0],
        splitDateStr[1] - 1,
        splitDateStr[2],
    );
}
