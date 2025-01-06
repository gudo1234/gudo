let handler = async (m, { conn, text, args }) => {
if (!text) {
return m.reply("🧧 *ingresa un texto de lo que quieres buscar*")
}
    
let ytres = await search(args.join(" "))
let txt = `*Título* : ${ytres[0].title}
*Duración* : ${ytres[0].timestap}
*Publicado* : ${ytres[0].ago}
*Canal* : ${ytres[0].author.name || 'Desconocido'}
*Url* : ${'https://youtu.be/' + ytres[0].videoId}`
await m.react('🕒')
await conn.sendFile(m.chat, ytres[0].image, 'thumbnail.jpg', txt, m, null, rcanal)
    
try {
let api = await fetch(`https://api.zenkey.my.id/api/download/ytmp3?apikey=zenkey&url=${ytres[0].url}`)
let json = await api.json()
let { quality, title, download_url } = json.result
await conn.sendMessage(m.chat, { audio: { url: download_url }, fileName: `${title}.mp3`, mimetype: 'audio/mp4' }, { quoted: m })
} catch (error) {
console.error(error)
}}

handler.command = ['yta2'];
//handler.group = true;

export default handler

async function search(query, options = {}) {
//let search = await yts.search({ query, hl: "es", gl: "ES", ...options })
  return search.videos
}
