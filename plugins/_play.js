import fetch from 'node-fetch'
import yts from 'yt-search'

let handler = async (m, { conn, text, args }) => {
if (!text)  return conn.reply(m.chat, `${e} Ingresa el nombre de lo que quieres buscar`, m)


try {
let res = await search(args.join(" "))

let apiAud = await fetch(`https://api.agungny.my.id/api/youtube-audio?url=${'https://youtu.be/' + res[0].videoId}`)
let dataAud = await apiAud.json()
let apiVid = await fetch(`https://api.agungny.my.id/api/youtube-video?url=${'https://youtu.be/' + res[0].videoId}`)
let dataVid = await apiVid.json()
m.react('🕒')
let txt = `*_YOUTUBE 📀 PLAY_*
_____________
*Titulo:* ${res[0].title}
*Duracion:* ${res[0].timestamp}
*Visitas:* ${res[0].views}
*Subido:* ${res[0].ago}
_____________
> Responde a este mensaje con el número asignado a cada formato:

1 : Audio
2 : Video
3 : Doc audio
4 : Doc video`

let SM = await conn.sendFile(m.chat, res[0].thumbnail, 'HasumiBotFreeCodes.jpg', txt, m, null, rcanal)
conn.ev.on("messages.upsert", async (upsertedMessage) => {
let RM = upsertedMessage.messages[0];
if (!RM.message) return

const UR = RM.message.conversation || RM.message.extendedTextMessage?.text
let UC = RM.key.remoteJid

if (RM.message.extendedTextMessage?.contextInfo?.stanzaId === SM.key.id) {
if (UR === '1' || UR === 'Audio') {
  m.react('🕒')
  await conn.sendMessage(UC, { audio: { url: dataAud.result.downloadUrl }, mimetype: "audio/mpeg", caption: null }, { quoted: RM })
} else if (UR === '2' || UR === 'Video') {
  await conn.sendMessage(m.chat, { video: { url: dataVid.result.downloadUrl }, caption: ``, mimetype: 'video/mp4', fileName: `${res[0].title}` + `.mp4`}, {quoted: m })
} else if (UR === '3' || UR === 'Doc audio') {
  await conn.sendMessage(m.chat, { document: { url: dataAud.result.downloadUrl }, fileName: `${res[0].title}`, mimetype: "audio/mpeg" }, { quoted: m });
} else if (UR === '4' || UR === 'Doc video') {
  await conn.sendMessage(m.chat, { document: { url: dataVid.result.downloadUrl }, fileName: `${res[0].title}`, mimetype: 'video/mp4', }, { quoted: m });
} else {
  await conn.sendMessage(UC, { text: "Opcion invalida, responde con 1 *(audio)* o 2 *(video)*." }, { quoted: RM })
}}})

} catch (error) {
console.error(error)
}}

handler.command = ['play', 'play2']
handler.group = true;

export default handler

async function search(query, options = {}) {
  let search = await yts.search({ query, hl: "es", gl: "ES", ...options })
  return search.videos
}
