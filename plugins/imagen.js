import { googleImage } from '@bochilteam/scraper'
let handler = async (m, { conn, text, usedPrefix, command }) => {
let user = global.db.data.users[m.sender]
if (!text) throw `𝗘𝗷𝗲𝗺𝗽𝗹𝗼: ${usedPrefix + command} carros`
if (m.text.includes('gore') || m.text.includes('cp')|| m.text.includes('mamadas')|| m.text.includes('porno')|| m.text.includes('Gore')|| m.text.includes('rule')|| m.text.includes('CP') || m.text.includes('pene')|| m.text.includes('verga') || m.text.includes('Rule34') || m.text.includes('xxx')) return m.reply('> Se bloqueó la búsqueda por el lenguaje inapropiado.').then(_ => m.react('✖️'))
await m.react('🕒')
const res = await googleImage(text)
let image = res.getRandom()
let link = image
await delay(1000)
await m.react('✅')
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
conn.sendFile(m.chat, link, 'error.jpg', `${text}`, m, null, rcanal)}
catch (error) {
    console.error(error);
    throw `error`;}
handler.help = ['gimage <query>', 'imagen <query>']
handler.tags = ['internet', 'tools']
handler.command = /^(imagen)$/i
handler.group = true;
export default handler
const delay = time => new Promise(res => setTimeout(res, time))
