import fetch from 'node-fetch'

let handler  = async (m, { conn, usedPrefix, command, participants, groupMetadata }) => {

let img = await (await fetch(`https://qu.ax/casQP.jpg`)).buffer()
const more = String.fromCharCode(8206)
const readMore = more.repeat(4001)
let texto = `🧀zo`
let name = await conn.getName(m.sender)
conn.sendMessage(m.chat, { text: texto, contextInfo: {
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
      title: `🤨😈🥵`,
      body: name,
      thumbnailUrl: img,
thumbnail: img,
      sourceUrl: 'https://www.atom.bio/edar_',
      //mediaType: 1,
      //renderLargerThumbnail: true
    }
  }},{quoted: m})
}
handler.customPrefix = /^(Que|que|qe|ke|Qe|k|Ke|Kee|Quee)$/i
handler.command = new RegExp
export default handler