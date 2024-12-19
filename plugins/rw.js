import util from 'util'
import path from 'path'
import fetch from 'node-fetch'
let handler = async (m, { conn, usedPrefix, command, text }) => {
let res = await fetch('https://api.waifu.pics/sfw/waifu')
let name = await conn.getName(m.sender)
if (!res.ok) throw await res.text()
let json = await res.json()
if (!json.url) throw `xd`
//conn.sendButton(m.chat, `🥺`, wm, json.url, [['siguiente', `/${command}`]], m)
await conn.sendFile(m.chat, json.url, 'error.jpg', `*Nombre:* Desconocido\n*Precio:* Gratis\n*Reclamado por:* ${name}`, null, null, rcanal);
}
handler.help = ['waifu']
handler.tags = ['anime']
handler.command = /^(waifu|rw)$/i
handler.group = true;
export default handler
function pickRandom(list) {
return list[Math.floor(Math.random() * list.length)]}
