import { extractDeepstream } from './extract-deepstream'

export function extractData (data: any) {
  if (data && data.hits) {
    const heatmapData = data.hits.map((hit: any) => {
      if (hit.fields && hit.fields['deepstream-msg']) {
        return extractDeepstream(hit.fields['deepstream-msg'])
      }
    })

    const flattedHeatmap = heatmapData.flat()
    return flattedHeatmap
  }

  return []
}
