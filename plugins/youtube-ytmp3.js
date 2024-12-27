/* 

[ Canal Principal ] :
https://whatsapp.com/channel/0029VaeQcFXEFeXtNMHk0D0n

[ Canal Rikka Takanashi Bot ] :
https://whatsapp.com/channel/0029VaksDf4I1rcsIO6Rip2X

[ Canal StarlightsTeam] :
https://whatsapp.com/channel/0029VaBfsIwGk1FyaqFcK91S

[ HasumiBot FreeCodes ] :
https://whatsapp.com/channel/0029Vanjyqb2f3ERifCpGT0W
*/

// *[ ❀ YTMP3 ]*
import fetch from 'node-fetch'

let HS = async (m, { conn, text }) => {
if (!text) {
return m.reply("🧧 *Ingresa un link de youtube*")
}
let ytres = await search(args.join(" "))
let txt = `- *Título* : ${ytres[0].title}
- *Duración* : ${ytres[0].timestamp}
- *Publicado* : ${ytres[0].ago}
- *Canal* : ${ytres[0].author.name || 'Desconocido'}
- *Url* : ${'https://youtu.be/' + ytres[0].videoId}`
await conn.sendFile(m.chat, ytres[0].image, 'thumbnail.jpg', txt, m, null, rcanal)
try {
let api = await fetch(`https://api.giftedtech.my.id/api/download/dlmp3?apikey=gifted&url=${text}`)
let json = await api.json()
let { quality, title, download_url } = json.result

await conn.sendMessage(m.chat, { audio: { url: download_url }, fileName: `${title}.mp3`, mimetype: 'audio/mp4' }, { quoted: m })
} catch (error) {
console.error(error)
}}

handler.command = ['ytmp3']

export default HS
