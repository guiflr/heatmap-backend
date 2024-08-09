import path from 'path'
import 'dotenv/config'
import fs from 'fs'

const DOWNLOAD_DIR = process.env.DOWNLOAD_DIR as string

export function createFilePath(hashName: string) {
  const uploadDir = path.join(__dirname, '..', '..', DOWNLOAD_DIR)
  if (!fs.existsSync(uploadDir)) {
    fs.mkdirSync(uploadDir)
  }

  const outputPath = path.join(uploadDir, `${hashName}.png`)
  return outputPath
}
