import fetch from "node-fetch";
import yts from "yt-search";

let handler = async (m, { conn, command, text, args, usedPrefix}) => {

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
let HS = `_*⚡YouTube-Play⚡*_\n\n*Titulo:* ${title}
*Duración:* ${timestamp}
*Vistas*: ${vistas}
*Uploaded:* ${ago}
*Url:* ${url}

${e} *Espere un momento...*`
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


let api = await fetch(`https://api.vreden.web.id/api/ytplaymp3?query=${url}`);
let json = await api.json()
let { download } = json.result

if (command == 'play') {
try {
await conn.sendMessage(m.chat, { audio: { url: download.url }, caption: ``, mimetype: "audio/mpeg", }, { quoted: m })
} catch (error) {
m.reply(`${error}`)
console.error(error)    
}}

if (command == 'play3') {
try {
await conn.sendMessage(m.chat, { document: { url: download.url }, mimetype: 'audio/mpeg',fileName: `${title}.mp3`, caption: `${m.pushName}` }, { quoted: m });
} catch (error) {
m.reply(`${error}`)
console.error(error)    
}}

if (command == 'play2') {
let ytres = await search(args.join(" "));
  if (ytres.length === 0) {
    return m.reply("xx");
  }

  let txt = `_*⚡YouTube-Play⚡*_\n\n*Título:* ${ytres[0].title}
*Duración:* ${ytres[0].timestamp}
*Publicado:* ${ytres[0].ago}
*Canal:* ${ytres[0].author.name || 'Desconocido'}
*Url:* https://youtu.be/${ytres[0].videoId}

${e} *Espere un momento...*`;

  await conn.sendFile(m.chat, ytres[0].image, 'thumbnail.jpg', txt, m);

  try {
    let apiResponse = await fetch(`https://api.vreden.web.id/api/ytplaymp4?query=${ytres[0].url}&apikey=0a2cc90e`);
    let json = await apiResponse.json();

    if (json.result && json.result.download && json.result.download.url) {
      let { title, url: mp4 } = json.result.download;

      await conn.sendMessage(m.chat, { video: { url: mp4 }, caption: `${m.pushName}`, mimetype: 'video/mp4', fileName: `${title}.mp4` }, { quoted: m });

      await conn.sendMessage(m.chat, { react: { text: '✅', key: m.key } });
    } else {
      throw new Error('La API no devolvió los datos esperados.');
    }
  } catch (error) {
    console.error(error);
    m.reply(`${error}`);
  }}

if (command == 'play4') {
try {
await conn.sendMessage(m.chat, { document: { url: download.url }, mimetype: 'video/mp4',fileName: `${title}`,caption: `${m.pushName}` }, { quoted: m });
} catch (error) {
m.reply(`${error}`)
console.error(error)    
}}

}
handler.command = ['play', 'play3', 'play2', 'play4']
export default handler;

async function search(query, options = {}) {
  let searchResults = await yts.search({ query, hl: "es", gl: "ES", ...options });
  return searchResults.videos;
}
