import fetch from 'node-fetch'
import { FormData, Blob } from 'formdata-node'
import { fileTypeFromBuffer } from 'file-type'

export default async (buffer) => {
const { ext, mime } = await fileTypeFromBuffer(buffer)
const form = new FormData()
const blob = new Blob([buffer.toArrayBuffer()], { type: mime })
form.append('files[]', blob, 'tmp.' + ext)
const res = await fetch('https://qu.ax/upload.php', { method: 'POST', body: form })
const result = await res.json()
if (result && result.success) {
return result.files[0].url
} else {
throw new Error('Failed to upload the file to qu.ax')
}}
