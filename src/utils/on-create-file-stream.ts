import { Response } from 'express'
import fs from 'fs'

export function onCreateFileStream (outputPath: string) {
  return new Promise((resolve, reject) => {
    const out = fs.createWriteStream(outputPath)

    out.on('ready', () => {      
      resolve(out)
    })

    out.on('error', err => {
      reject(err)
    })
  })
}
