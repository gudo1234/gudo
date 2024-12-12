import { toPTT } from '../lib/converter.js'

var handler = async (m, { conn, usedPrefix, command }) => {

let q = m.quoted ? m.quoted : m
let mime = (m.quoted ? m.quoted : m.msg).mimetype || ''
if (!/video|audio/.test(mime)) throw `🧧 Responda a un video o audio para convertirlo en nota de voz`
let name = await conn.getName(m.sender)
conn.sendMessage(m.chat, { text: `Espere un momento ${name}`, contextInfo: {
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
      thumbnailUrl: imagen4,
thumbnail: imagen4,
      sourceUrl: 'https://www.atom.bio/edar_',
      //mediaType: 1,
      //renderLargerThumbnail: true
    }
  }},{quoted: fkontak})
await m.react('🕓')
let media = await q.download?.()
if (!media && !/video/.test(mime)) throw ''
if (!media && !/audio/.test(mime)) throw '🧧 Ocurrió un error vielve s intetarlo'
let audio = await toPTT(media, 'mp4')
if (!audio.data && !/audio/.test(mime)) throw '🧧 Ocurrió un error vielve a intentarlo'
if (!audio.data && !/video/.test(mime)) throw '🧧 ocurrió un error vielve a intentarlo'
conn.sendFile(m.chat, audio.data, 'error.mp3', '', m, true, { mimetype: 'audio/mp4' })
await m.react('✅')
    
}
handler.help = ['tovn']
handler.tags = ['transformador']
handler.command = /^to(vn|(ptt)?)$/i
handler.group = true;

export default handler