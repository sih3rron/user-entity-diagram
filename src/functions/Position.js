export function xAxis(i) {
    if (i <= numberOfCards / 2) return i * 400;
    if (i > numberOfCards / 2) return (i * 400) - (numberOfCards / 2 * 400);
}

export function yAxis(i) {
    if (i > numberOfCards / 2) return 600;
    return 0;
}