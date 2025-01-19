import fetch from "node-fetch";
import yts from "yt-search";

let handler = async (m, { conn, command, text, usedPrefix}) => {

if (!text) {
return m.reply(`${e} *Ejemplo:* ${usedPrefix + command} diles`)
}

let ytres = await yts(text)
let video = ytres.videos[0]
  
if (!video) {
return m.reply("x")
}

let { title, thumbnail, timestamp, views, ago, url } = video

let vistas = parseInt(views).toLocaleString("es-ES") + " vistas"
m.react('🕒')

if (command == 'play') {
let HS = `_*⚡YouTube-Play⚡*_\n\n*Duración:* ${timestamp}
*Vistas*: ${vistas}
*Uploaded:* ${ago}
*Url:* ${url}

${e} Espere un momento (Audio)...`
let thumb = (await conn.getFile(thumbnail))?.data;

let JT = {
contextInfo: {
externalAdReply: {
title: title, body: "",
mediaType: 1, previewType: 0,
mediaUrl: url, sourceUrl: url,
thumbnail: thumb, renderLargerThumbnail: true,
}}}

await conn.reply(m.chat, HS, m, JT)

try {
let api = await fetch(`https://api.vreden.web.id/api/ytplaymp3?query=${url}`);
let json = await api.json()
let { download } = json.result

await conn.sendMessage(m.chat, { audio: { url: download.url }, caption: ``, mimetype: "audio/mpeg", }, { quoted: m })
} catch (error) {
console.error(error)    
}}

if (command == 'play3') {
let HS = `_*⚡YouTube-Play⚡*_\n\n*Duración:* ${timestamp}
*Vistas*: ${vistas}
*Uploaded:* ${ago}
*Url:* ${url}

${e} Espere un momento (audioDoc)...`
let thumb = (await conn.getFile(thumbnail))?.data;

let JT = {
contextInfo: {
externalAdReply: {
title: title, body: "",
mediaType: 1, previewType: 0,
mediaUrl: url, sourceUrl: url,
thumbnail: thumb, renderLargerThumbnail: true,
}}}

await conn.reply(m.chat, HS, m, JT)

try {
let api = await fetch(`https://api.vreden.web.id/api/ytplaymp3?query=${url}`);
let json = await api.json()
let { download } = json.result

await conn.sendMessage(m.chat, { document: { url: download.url }, mimetype: 'audio/mpeg',fileName: `audio.mp3`, caption: `${m.pushName}` }, { quoted: m });

} catch (error) {
console.error(error)    
}}

}
handler.command = ['play', 'play3']

export default handler
