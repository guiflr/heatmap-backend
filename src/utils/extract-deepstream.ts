import { calculateCentroid } from "./calculate-centroid"

export function extractDeepstream (deepstream: any) {
  return deepstream.map((msg: string) => {
    const [_, xMin, yMin, xMax, yMax] = msg.split('|')

    const [x, y] = calculateCentroid(
      parseFloat(xMin),
      parseFloat(yMin),
      parseFloat(xMax),
      parseFloat(yMax)
    )
    return { x, y, value: 5 }
  })
}
