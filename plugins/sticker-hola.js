import { sticker } from '../lib/sticker.js'

let handler = async (m, { conn, text, usedPrefix, command }) => {
let stiker = await sticker(null, global.API(`${pickRandom(stikerxd)}`), global.packname, global.author)
    if (stiker) return conn.sendFile(m.chat, stiker, 'sticker.webp', '', m)
throw stiker.toString()
    
}

handler.customPrefix = /^(ola|hola|holaa|hol|olaa|holaaa|hola soy nuevo|ola soy nuevo)$/i
handler.command = new RegExp
export default handler

function pickRandom(list) {
  return list[Math.floor(list.length * Math.random())]
}
let stikerxd = [
'https://i.ibb.co/VgnWwYq/file.jpg',
'https://i.ibb.co/P4ggzTZ/file.jpg',
'https://i.ibb.co/k6rJLr4/file.jpg',
'https://i.ibb.co/VqdCMBL/file.jpg'
]
