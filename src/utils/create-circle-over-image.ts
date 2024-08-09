import { CanvasRenderingContext2D } from "canvas"
import { HeatMap } from "../types"

export function createCircleOverImage (
    heatmapData: HeatMap[],
    ctx: CanvasRenderingContext2D
  ) {
    const radius = 20
    const startCircleAngle = 0
    const endCircleAngle = Math.PI * 2
    heatmapData.forEach(({ x, y }) => {
      ctx.beginPath()
      ctx.arc(x, y, radius, startCircleAngle, endCircleAngle)
      ctx.fillStyle = 'rgba(255, 0, 0, 0.5)'
      ctx.fill()
    })
  }
  