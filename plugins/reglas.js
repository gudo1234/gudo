import { getDevice } from "@whiskeysockets/baileys"
import PhoneNumber from 'awesome-phonenumber'
let handler = async (m, { conn, args, usedPrefix, command }) => {

let name = await conn.getName(m.sender)
m.react('🍉')
let img = await (await fetch(`https://qu.ax/rZcLY.jpg`)).buffer()
let str = `_Hola *${name}* ¿Cómo estás?_\n\n\`⚖️TÉRMINOS Y CONDICIONES DEL SERVICIO\`\n> 🚩 IZUMU-BOT, NI EL DESARROLLADOR NO SE HACE RESPONSABLE DEL USO, NÚMERO, PRIVACIDAD Y CONTENIDO MANDADO, O USADO O GESTIONADO POR USTEDES O EL BOT (usarlo bajo tu responsabilidad)\n.*[🗓]Fecha:* _${moment.tz('America/Bogota').format('DD/MM/YY')}_`
conn.sendMessage(m.chat, { text: str, contextInfo: {
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
      thumbnailUrl: img,
thumbnail: img,
      sourceUrl: 'https://www.atom.bio/edar_',
      mediaType: 1,
      renderLargerThumbnail: true
    }
  }},{quoted: m})
    }
handler.command = /^(reglas|términos|condiciones)$/i;
export default handler