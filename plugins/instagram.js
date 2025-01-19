import { igdl } from "ruhend-scraper"

let handler = async (m, { args, conn }) => { 
if (!args[0]) {
return conn.reply(m.chat, `${e} *Ingresa un link de Instagram*`, m)}
try {
await m.react('🕒')
let name = await conn.getName(m.sender)
await conn.sendMessage(m.chat, { text: global.espere + `*${name}*`, contextInfo: { externalAdReply: {title: `${wm}`, body: `${await conn.getName(m.chat)}`, humbnailUrl: imagen4, thumbnail: imagen4, showAdAttribution: true, sourceUrl: canal}}} , { quoted: fkontak })
      
let res = await igdl(args[0])
let data = res.data       
for (let media of data) {
await new Promise(resolve => setTimeout(resolve, 2000))
    m.react('✅')
await conn.sendFile(m.chat, media.url, 'instagram.mp4', '*✔️🍟Downloader instagram.*',m)
}} catch {
await m.react('✖️')
conn.reply(m.chat, '⚠︎ Ocurrió un error.', m)}}

handler.command = ['instagram', 'ig']
handler.tags = ['descargas']
handler.help = ['instagram', 'ig']
handler.group = true;
handler.register = false

export default handler
