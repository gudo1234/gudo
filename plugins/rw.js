import util from 'util'
import path from 'path'
import fetch from 'node-fetch'
let handler = async (m, { conn, groupMetadata, usedPrefix, command, text }) => {
let res = await fetch('https://api.waifu.pics/sfw/waifu')
let user = a => '@' + a.split('@')[0]
let ps = groupMetadata.participants.map(v => v.id)
if (!res.ok) throw await res.text()
let json = await res.json()
let a = ps.getRandom()
let k = Math.floor(Math.random() * 70);
if (!json.url) throw `xd`
let txt = `*Nombre:* Desconocido\n*Precio:* Gratis\n*Reclamado por:* ${user(a)}`
//conn.sendFile(m.chat, json.url, 'error.jpg', `*Nombre:* Desconocido\n*Precio:* Gratis\n*Reclamado por:* ${user(a)}`, m, {contextInfo: { externalAdReply :{ mediaUrl: null, mediaType: 1, description: null, title: wm, body: 'waifu', previewType: 0, thumbnail: imagen4, sourceUrl: canal}}})
//conn.sendButton(m.chat, `🥺`, wm, json.url, [['siguiente', `/${command}`]], m)

conn.sendMessage(m.chat, json.url, { text: txt, contextInfo: {
    mentionedJid: [m.sender],
    groupMentions: [],
    isForwarded: true,
    forwardedNewsletterMessageInfo: {
      newsletterJid: '120363285614743024@newsletter',
      newsletterName: `꙳🧧𓆩ίʑ᭘ɱί-ⲃⲟτ𓆪🧧꙳`,
      serverMessageId: 0
    },
    businessMessageForwardInfo: { businessOwnerJid: '50492280729@s.whatsapp.net' },
    forwardingScore: 9999,
    externalAdReply: {
      title: `${await conn.getName(m.chat)}`,
      body: '©️ Powered By 𓆩᮫࣭݊͜?☃️࣭݊ျ֘▹ⲉ꯭𝖽α꯭૨‹࣭݊⸸࣭݊͜𓆪',
      thumbnailUrl: json.url,
thumbnail: json.url,
      sourceUrl: 'https://www.atom.bio/edar_',
      mediaType: 1,
      renderLargerThumbnail: true
    }
  }},{quoted: m})
}
handler.help = ['waifu']
handler.tags = ['anime']
handler.command = /^(waifu|rw)$/i
handler.group = true;
export default handler
function pickRandom(list) {
return list[Math.floor(Math.random() * list.length)]}
