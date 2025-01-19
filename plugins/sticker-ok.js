import { sticker } from '../lib/sticker.js'

let handler = async (m, { conn, text, usedPrefix, command }) => {

let stiker = await sticker(null, global.API(`${pickRandom(stikerxd)}`), global.packname, global.author)
    if (stiker) return conn.sendFile(m.chat, stiker, 'sticker.webp', '', m)
    throw stiker.toString()
    
}

handler.customPrefix = /^(ok|okey|oki|okei)$/i
handler.command = new RegExp
export default handler

function pickRandom(list) {
  return list[Math.floor(list.length * Math.random())]
}
let stikerxd = [
'https://i.ibb.co/KDFrVLm/file.jpg',
'https://i.ibb.co/GxLxfBy/file.jpg',
'https://i.ibb.co/CwXdmXj/file.jpg'
]
