/*import yts from 'yt-search';

const handler = async (m, { conn, text, usedPrefix, command }) => {
  if (!text) throw `${e} Ingrese una petición para realizar una descarga en Youtube.`;

  const isVideo = /vid|2|mp4|v$/.test(command);
  const search = await yts(text);

  if (!search.all || search.all.length === 0) {
    throw "No se encontraron resultados para tu búsqueda.";
  }

  const videoInfo = search.all[0];
  const body = `*Titulo:* ${videoInfo.title}
*Canal:* ${videoInfo.author.name || 'Desconocido'}
*Vistas:* ${videoInfo.views}
*Duración:* ${videoInfo.timestamp}
*Publicado:* ${videoInfo.ago}
*Link:* ${videoInfo.url}`;

    if (command === 'play' || command === 'play2' || command === 'playvid') {
    conn.sendMessage(m.chat, {
 image: { url: videoInfo.thumbnail },
 caption: body,
footer: 'Seleccione el Documento en Clip download',
 contextInfo: {
mentionedJid: [m.sender],
forwardingScore: 999,
isForwarded: true,
externalAdReply: {
  showAdAttribution: true, 
  title: `Descargas📀Play`,
  body: wm,
  thumbnailUrl: img.getRandom(),
  thumbnail: img.getRandom(),
  sourceUrl: canal,
  mediaType: 1,
  renderLargerThumbnail: false
}}, 
  buttons: [
  {
 buttonId: `.ytmp3 ${videoInfo.url}`,
 buttonText: {
displayText: 'Audio'
 },
 type: 1,
  },
  {
 buttonId: `.ytmp4 ${videoInfo.url}`,
 buttonText: {
displayText: 'Video'
 },
 type: 1,
  },
  {
 type: 4,
 nativeFlowInfo: {
name: 'single_select',
paramsJson: JSON.stringify({
  title: 'Clip Download',
  sections: [
 {
title: `Descarga ${m.pushName}`,
highlight_label: '',
rows: [
  {
 header: '',
 title: 'Doc Audio',
 description: ``, 
 id: `.play3 ${videoInfo.url}`,
  },
  {
 header: '',
 title: 'Doc Video',
 description: ``, 
 id: `.play4 ${videoInfo.url}`,
  },
],
 },
  ],
}),
 },
  },
  ],
  headerType: 1,
  viewOnce: true
})
    m.react('🕒');
    
    } else if (command === 'yta' || command === 'ytmp3') {
    m.react('🕒')
      const response = await fetch(`https://api.alyachan.dev/api/yta?url=${videoInfo.url}&apikey=Gata-Dios`)
      const json = await response.json()
      await conn.sendMessage(m.chat, { audio: { url: json.data.url }, mimetype: 'audio/mpeg', fileName: json.data.filename }, { quoted: m })
    m.react('✅')
    
 } else if (command === 'ytadoc' || command === 'ytmp3doc' || command === 'play3') {
    m.react('🕒')
      const response = await fetch(`https://api.alyachan.dev/api/yta?url=${videoInfo.url}&apikey=Gata-Dios`)
      const json = await response.json()
      await conn.sendMessage(m.chat, { document: { url: json.data.url }, mimetype: 'audio/mpeg',fileName: `${videoInfo.title}`,caption: `${m.pushName}` }, { quoted: m });
    m.react('✅')
    
    } else if (command === 'ytv' || command === 'ytmp4') {
    m.react('🕒')
    const response = await fetch(`https://api.alyachan.dev/api/ytv?url=${videoInfo.url}&apikey=Gata-Dios`)
    const json = await response.json()
    await conn.sendMessage(m.chat, { video: { url: json.data.url }, mimetype: 'video/mp4', fileName: json.data.filename }, { quoted: m })
    m.react('✅')
    
    } else if (command === 'ytvdoc' || command === 'ytmp4doc' || command === 'play4') {
    m.react('🕒')
    const response = await fetch(`https://api.alyachan.dev/api/ytv?url=${videoInfo.url}&apikey=Gata-Dios`)
    const json = await response.json()
    await conn.sendMessage(m.chat, { document: { url: json.data.url }, mimetype: 'video/mp4' ,fileName: `${videoInfo.title}`,caption: `${m.pushName}` }, { quoted: m });
    m.react('✅')
    } else {
      throw "Comando no reconocido.";
    }
};

handler.command = ['play', 'playvid', 'ytv', 'ytmp4', 'yta', 'ytadoc', 'play2', 'ytmp3', 'ytmp3doc', 'play3', 'ytvdoc', 'ytmp4doc', 'play4'];
handler.group = true;

export default handler;

const getVideoId = (url) => {
  const regex = /(?:v=|\/)([0-9A-Za-z_-]{11}).*/
 /* const match = url.match(regex);
  if (match) {
    return match[1];
  }
  throw new Error("Invalid YouTube URL");
};*/

import axios from 'axios'

let HS = async (m, { conn, text }) => {
if (!text) return conn.reply(m.chat, `❀ Ingresa un link de YouTube`, m)
  
try {
let api = await axios.get(`https://mahiru-shiina.vercel.app/download/ytmp3?url=${text}`)
let json = api.data

let { title, description, uploaded, duration, views, type, url, thumbnail, author, download } = json.data
let { name, url: authorUrl } = author


let HS = `- *Titulo:* ${title}
- *Autor:* ${name} - ${authorUrl}
- *Descripción:* ${description}
- *Subido:* ${uploaded}
- *Duración:* ${duration}
- *Vistas:* ${views}`

await conn.sendMessage(m.chat, { image: { url: thumbnail }, caption: HS }, { quoted: m })
await conn.sendMessage(m.chat, { audio: { url: download }, mimetype: 'audio/mpeg' }, { quoted: m })

//Para audio 
if (command === 'play' || command === 'yta' || command === 'ytmp3') {
await conn.sendMessage(m.chat, { audio: { url: download }, mimetype: 'audio/mpeg' }, { quoted: m })}
m.react('✅')
  
//Para video
if (command === 'play2' || command === 'ytv' || command === 'ytmp4' || command === 'playvid') {
    await conn.sendMessage(m.chat, {
      video: { url: download },
      fileName: `${title}.mp4`,
      mimetype: 'video/mp4',
      caption: `${title}`
    }, { quoted: m })}
    m.react('✅')

//Para DocVideo
if (command === 'play4' || command === 'ytvdoc' || command === 'ytmp4doc') {
await conn.sendMessage(m.chat, { document: { url: download }, mimetype: 'video/mp4' ,fileName: `${title}`,caption: `${m.pushName}` }, { quoted: m })};
    m.react('✅')

//Para DocAudio
if (command === 'play3' || command === 'ytadoc' || command === 'ytmp3doc') {
await conn.sendMessage(m.chat, { document: { url: download }, mimetype: 'audio/mpeg',fileName: `${title}`,caption: `${m.pushName}` }, { quoted: m })};
    m.react('✅')
    
} catch (error) {
console.error(error)
m.reply(`Error`)
}}

HS.command = ['play', 'yta', 'ytmp3', 'play2', 'playvid', 'ytv', 'ytmp4', 'play4', 'ytvdoc', 'ytmp4doc', 'play3', 'ytadoc', 'ytmp3doc']
export default HS
