import crypto from 'crypto'

export function getImageHashName (imageContent: Buffer, dataContent: string) {
  const hash = crypto
    .createHash('sha256')
    .update(imageContent)
    .update(dataContent)
    .digest('hex')

  return hash
}
