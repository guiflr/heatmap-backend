import { createCanvas, loadImage } from 'canvas'

import { createCircleOverImage } from './create-circle-over-image'
import { extractData } from './extract-data'
import { HeatMap } from '../types'

export async function generateHeatmap (imagePath: string, data: any) {
  const image = await loadImage(imagePath)
  const canvas = createCanvas(image.width, image.height)
  const ctx = canvas.getContext('2d')

  ctx.drawImage(image, 0, 0, image.width, image.height)
  const heatmapData: HeatMap[] = extractData(data.hits)
  createCircleOverImage(heatmapData, ctx)

  return canvas
}
