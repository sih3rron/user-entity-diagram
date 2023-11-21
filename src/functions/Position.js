export function xAxis(i, items) {
    const gap = 100;
    if (i <= items / 2) return i * gap;
    if (i > items / 2) return (i * gap) - (items / 2 * gap);
}

export function yAxis(i, items) {
    if (i >= items / 2) return 150;
    return 0;
}

//Tier 3
// x -706 : y -1314
// x -550 : y -1314
// 156

//Tier 2
// x 51 : y -3178

//Tier 2
// x -515 : y -3962