import { sticker } from '../lib/sticker.js'

let handler = async (m, { conn, text, usedPrefix, command }) => {
let pp = await conn.profilePictureUrl(m.messageStubParameters[0], 'image').catch(_ => 'https://qu.ax/casQP.jpg')
  let im = await (await fetch(`${pp}`)).buffer()
let stiker = await sticker(null, global.API(`${pickRandom(stikerxd)}`), global.packname, global.author)
    if (stiker) return conn.sendFile(m.chat, stiker, 'sticker.webp', '', m, true, { contextInfo: { 'forwardingScore': 200, 'isForwarded': false, externalAdReply:{ showAdAttribution: false, title: `Holaaa`, body: '🌊', mediaType: 2, sourceUrl: canal, thumbnail: img}}}, { quoted: m })
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
'https://i.ibb.co/P4ggzTZ/file.jpg'
]
