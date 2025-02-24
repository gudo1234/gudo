import fetch from 'node-fetch'

let HS = async (m, { conn, text }) => {
  if (!text) return conn.reply(m.chat, `❀ Ingresa un link de YouTube`, m)

  let isUrl = isYouTubeUrl(text)
  if (!isUrl) return conn.reply(m.chat, "❀ Ingresa una URL válida de YouTube.", m)

  try {
    let api = await (await fetch(`https://api.lyrax.net/api/dl/ytdl?url=${text}&apikey=0a2cc90e`)).json()
    let { file_url, title } = api.data
    let { type, size, duration } = api.data.info
//Para audio 
if (command === 'play' || command === 'yta' || command === 'ytmp3') {
await conn.sendMessage(m.chat, { audio: { url: file_url }, mimetype: 'audio/mpeg', fileName: json.data.filename }, { quoted: m })};
m.react('✅')
  
//Para video
if (command === 'play2' || command === 'ytv' || command === 'ytmp4' || command === 'playvid') {
    await conn.sendMessage(m.chat, {
      video: { url: file_url },
      fileName: `${title}.mp4`,
      mimetype: 'video/mp4',
      caption: `🌿 Titulo: ${title}\n🌲 Duración: ${duration}\n🌴 Peso: ${size}\n🌾 Tipo: ${type}`
    }, { quoted: m })}
    m.react('✅')

//Para DocVideo
if (command === 'play4' || command === 'ytvdoc' || command === 'ytmp4doc') {
await conn.sendMessage(m.chat, { document: { url: file_url }, mimetype: 'video/mp4' ,fileName: `${title}`,caption: `${m.pushName}` }, { quoted: m })};
    m.react('✅')

//Para DocAudio
if (command === 'play3' || command === 'ytadoc' || command === 'ytmp3doc') {
await conn.sendMessage(m.chat, { document: { url: file_url }, mimetype: 'audio/mpeg',fileName: `${title}`,caption: `${m.pushName}` }, { quoted: m })};
    m.react('✅')
} catch (error) {
    console.error(error)
    conn.reply(m.chat, "❀ Hubo un error al obtener el DocAudio, intenta nuevamente.", m)
  }
}}

HS.command = ['play', 'yta', 'ytmp3', 'play2', 'playvid', 'ytv', 'ytmp4', 'play4', 'ytvdoc', 'ytmp4doc', 'play3', 'ytadoc', 'ytmp3doc']
export default HS

function isYouTubeUrl(text) {
  const youtubeRegex = /^(https?:\/\/)?(www\.)?(youtube\.com\/\S+|youtu\.be\/\S+)/
  return youtubeRegex.test(text)
}
