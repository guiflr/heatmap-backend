import fs from 'fs'
import path from 'path'
import { getImageHashName } from '../utils/image-hash-name'
import { createFilePath } from '../utils/create-file-path'
import { generateHeatmap } from '../utils/generate-heatmap'
import { onCreateFileStream } from '../utils/on-create-file-stream'
import { createCanvaImage } from '../utils/create-canva-image'

export class UploadService {
  async execute (
    imageFile: Express.Multer.File,
    dataFile: Express.Multer.File
  ): Promise<string> {
    const dataContent = fs.readFileSync(dataFile.path, 'utf-8')
    const imageContent = fs.readFileSync(imageFile.path)
    const imageHashName = getImageHashName(imageContent, dataContent)
    const outputPath = createFilePath(imageHashName)

    if (fs.existsSync(outputPath)) {
      return outputPath
    }

    const data = JSON.parse(dataContent)
    const imagePath = path.resolve(imageFile.path)

    const heatmap = await generateHeatmap(imagePath, data)

    const sourceCanvaImage = await onCreateFileStream(outputPath)
    await createCanvaImage(heatmap, sourceCanvaImage)

    return outputPath
  }
}
