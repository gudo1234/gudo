import fetch from 'node-fetch'

let handler  = async (m, { conn, usedPrefix, command, participants, groupMetadata }) => {

let img = await (await fetch(`https://qu.ax/casQP.jpg`)).buffer()
const more = String.fromCharCode(8206)
const readMore = more.repeat(4001)
let name = await conn.getName(m.sender)
await conn.sendMessage(m.chat, { text: `zo🧀`, contextInfo: { externalAdReply: {title: `${wm}`, body: `${await conn.getName(m.chat)}`, thumbnailUrl: img, thumbnail: img, showAdAttribution: true, sourceUrl: canal}}} , { quoted: m })
}
handler.customPrefix = /^(Que|que|qe|ke|Qe|k|Ke|Kee|Quee)$/i
handler.command = new RegExp
export default handler
