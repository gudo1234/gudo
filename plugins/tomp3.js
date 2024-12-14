import { toAudio } from '../lib/converter.js'

let handler = async (m, { conn, usedPrefix, command }) => {
let q = m.quoted ? m.quoted : m
let mime = (m.quoted ? m.quoted : m.msg).mimetype || ''
if (!/video|audio/.test(mime)) return conn.reply(m.chat, `🧧 Responde al *Video* o *Nota de Voz* que desea convertir a mp3.`, m, rcanal)
let name = await conn.getName(m.sender)
await conn.sendMessage(m.chat, { text: global.espere + `*${name}*`, contextInfo: { externalAdReply: {title: `${wm}`, body: `${await conn.getName(m.chat)}`, humbnailUrl: imagen4, thumbnail: imagen4, showAdAttribution: true, sourceUrl: canal}}} , { quoted: fkontak })
await m.react('🕓')
try {
let media = await q.download?.()
if (!media) return await m.react('✖️')
let audio = await toAudio(media, 'mp4')
if (!audio.data) return await m.react('✖️')
await conn.sendFile(m.chat, audio.data, 'audio.mp3', '', m, null, { mimetype: 'audio/mp4' })
await m.react('✅')
} catch {
await m.react('✖️')
}}
handler.help = ['tomp3']
handler.tags = ['tools']
handler.command = ['tomp3', 'toaudio', 'mp3'] 
handler.group = true;

export default handler