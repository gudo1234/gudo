import fetch from 'node-fetch'
let handler = async (m, { conn, usedPrefix, command }) => {
let res = await fetch('https://api.waifu.pics/sfw/waifu')
if (!res.ok) throw await res.text()
let json = await res.json()
if (!json.url) throw `${lenguajeGB['smsAvisoFG']()}`
conn.sendFile(m.chat, json.url, 'error.jpg', `*Nombre:* Desconocido\n*Precio:* Gratis\n*Reclamado por:* tí`, m, {contextInfo: { externalAdReply :{ mediaUrl: null, mediaType: 1, description: null, title: ag, body: 'waifu', previewType: 0, thumbnail: imagen4, sourceUrl: [md, yt, tiktok].getRandom()}}})
//conn.sendButton(m.chat, `🥺`, wm, json.url, [['siguiente', `/${command}`]], m)
}
handler.help = ['waifu']
handler.tags = ['anime']
handler.command = /^(waifu|rw)$/i
handler.group = true;
export default handler