import { igdl } from "ruhend-scraper"

let handler = async (m, { args, conn }) => { 
if (!args[0]) {
return conn.reply(m.chat, '⌨︎ *Ingresa un link de Instagram*', m, rcanal)}
try {
await m.react('🕒')
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
      
let res = await igdl(args[0])
let data = res.data       
for (let media of data) {
await new Promise(resolve => setTimeout(resolve, 2000))
    m.react('✅')
await conn.sendFile(m.chat, media.url, 'instagram.mp4', '*✔️🍟Downloader instagram.*')
}} catch {
await m.react('✖️')
conn.reply(m.chat, '⚠︎ Ocurrió un error.', m)}}

handler.command = ['instagram', 'ig']
handler.tags = ['descargas']
handler.help = ['instagram', 'ig']
handler.group = true;
handler.register = false

export default handler