import util from 'util'
import path from 'path'
import fetch from 'node-fetch'
let handler = async (m, { conn, groupMetadata, usedPrefix, command }) => {
let res = await fetch('https://api.waifu.pics/sfw/waifu')
let user = a => '@' + a.split('@')[0]
let ps = groupMetadata.participants.map(v => v.id)
if (!res.ok) throw await res.text()
let json = await res.json()
let a = ps.getRandom()
let k = Math.floor(Math.random() * 70);
if (!json.url) throw `xd`
conn.sendFile(m.chat, json.url, 'error.jpg', `*Nombre:* Desconocido\n*Precio:* Gratis\n*Reclamado por:* ${user(a)}`, m, {contextInfo: { externalAdReply :{ mediaUrl: null, mediaType: 1, description: null, title: wm, body: 'waifu', previewType: 0, thumbnail: imagen4, sourceUrl: canal}}})
//conn.sendButton(m.chat, `🥺`, wm, json.url, [['siguiente', `/${command}`]], m)
}
handler.help = ['waifu']
handler.tags = ['anime']
handler.command = /^(waifu|rw)$/i
handler.group = true;
export default handler
function pickRandom(list) {
return list[Math.floor(Math.random() * list.length)]}
