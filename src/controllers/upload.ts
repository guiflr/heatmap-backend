import { Request, Response } from 'express'

import { UploadService } from '../services/upload'

export class UploadController {
  static async upload(req: Request, res: Response) {
    const files = req.files as { [fieldname: string]: Express.Multer.File[] }
    const imageFile = files['image']?.[0]
    const dataFile = files['data']?.[0]
    if (!imageFile || !dataFile) {
      return res
        .status(400)
        .json({ error: 'Image and data files are required.' })
    }

    try {
      const uploadService = new UploadService()
      const downloadPath = await uploadService.execute(imageFile, dataFile)
      return res.download(downloadPath)
    } catch (error) {
      console.error('Error processing files:', error)
      res.status(500).json({ error: 'Error processing files' })
    }
  }
}
