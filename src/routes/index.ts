import { Router } from 'express'
import multer from 'multer'
import path from 'path'
import 'dotenv/config'
import fs from 'fs'

import { UploadController } from '../controllers/upload'

const routes = Router()
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    const path = `${process.env.UPLOAD_DIR}/`

    fs.mkdirSync(path, { recursive: true })
    cb(null, path)
  },
  filename: (req, file, cb) => {
    cb(null, Date.now() + path.extname(file.originalname))
  }
})
const upload = multer({ storage })

routes.post(
  '/upload',
  upload.fields([{ name: 'image' }, { name: 'data' }]),
  UploadController.upload
)

export { routes }
