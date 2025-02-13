import Starlights from '@StarlightsTeam/Scraper'

let handler = async (m, { conn, args, usedPrefix, command }) => {
if (!args || !args[0]) return conn.reply(m.chat, `${e} Ingresa el enlace del vídeo de Facebook junto al comando`, m, rcanal)
await m.react('🕓')
try {
let { dl_url } = await Starlights.fbdl(args[0])
await conn.sendFile(m.chat, dl_url, 'fbdl.mp4', null, m, null, rcanal)
await m.react('✅')
} catch {
await m.react('✖️')
}}

handler.command = ['facebook2', 'fb2', 'facebookdl2', 'fbdl2']
handler.group = true;
export default handler
