import { Canvas } from 'canvas'

export function createCanvaImage (canvas: Canvas, fileStream: any) {
  return new Promise((resolve, reject) => {
    const stream = canvas.createPNGStream()
    stream.pipe(fileStream)

    stream.on('error', error => {
      reject(error)
    })

    stream.on('end', () => {      
      resolve(true)
    })
  })
}
