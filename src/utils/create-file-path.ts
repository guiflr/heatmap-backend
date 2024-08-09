import path from 'path'
import fs from 'fs'

export function createFilePath (hashName: string) {
  const uploadDir = path.join(__dirname, '..', '..', 'downloads')
  if (!fs.existsSync(uploadDir)) {
    fs.mkdirSync(uploadDir)
  }

  const outputPath = path.join(uploadDir, `${hashName}.png`)
  return outputPath
}
