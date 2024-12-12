import { sticker } from '../lib/sticker.js'

let handler = async (m, { conn, text, usedPrefix, command }) => {

let stiker = await sticker(null, global.API(`${pickRandom(stikerxd)}`), global.packname, global.author)
    if (stiker) return conn.sendFile(m.chat, stiker, 'sticker.webp', '', m)
    throw stiker.toString()
    
}

handler.customPrefix = /^(xd|xdd|xddd|Xd|XD|xD|xdxd|Xdxdxd|xdxdxdxd|:v|)$/i
handler.command = new RegExp
export default handler

function pickRandom(list) {
  return list[Math.floor(list.length * Math.random())]
}
let stikerxd = [
'https://telegra.ph/file/e8be85aeb9a625f533a4a.png',

'https://telegra.ph/file/913f5861cefbdde379921.jpg',

'https://i.ibb.co/SK4Zqkt/file.webp',

'https://telegra.ph/file/6b7b0dbf022ee46a44887.jpg'

]
