export function calculateCentroid(xMin: number, yMin: number, xMax: number, yMax: number): [number, number] {
    return [(xMin + xMax) / 2, (yMin + yMax) / 2];
};