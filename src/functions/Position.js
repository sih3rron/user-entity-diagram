export function xAxis(i, items) {
    const gap = 400;
    if (i <= items / 2) return i * gap;
    if (i > items / 2) return (i * gap) - (items / 2 * gap);
}

export function yAxis(i, items) {
    if (i >= items / 2) return 600;
    return 0;
}