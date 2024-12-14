import os from 'os'
import { getDevice } from "@whiskeysockets/baileys"
import moment from 'moment-timezone'
import util from 'util'
import ws from 'ws';
import sizeFormatter from 'human-readable'
let MessageType =  (await import(global.baileys)).default
let handler = async (m, { conn, text, command }) => {
//let img = await (await fetch(`https://i.ibb.co/mGm8Vbz/file.png`)).buffer()
//let img = imagen4
const fechahon = moment().tz('America/Tegucigalpa').format('DD/MM HH:mm')
let id = text ? text : m.chat
let txt = `\`↖AVISO↗\`\nLos recurson se an agotado para este grupo, comuniquese con mi propietario para reactivar.\n\n*Fecha de Salida:* ${fechahon}\n*ID-CHAT*: ${await conn.getName(m.chat)}`
//let pp = 'https://telegra.ph/file/5ab1ca8bf65c1ddb36c20.mp4'
//await conn.sendMessage(m.chat, { video: { url: pp }, gifPlayback: true, caption: '*Adios a todos, el Bot se despide! (≧ω≦)ゞ*', mentions: [m.sender] }, { quoted: estilo })
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
      mediaType: 1,
      renderLargerThumbnail: true
    }
  }},{quoted: m})
await conn.groupLeave(id)}
//await conn.groupLeave(id)}
handler.help = ['salir']
handler.tags = ['owner']
handler.customPrefix = /^(♻️|.salir)$/i
handler.command = new RegExp
//handler.command = /^(salir|out|leavegc|leave|salirdelgrupo)$/i

handler.group = true
handler.rowner = true

export default handler