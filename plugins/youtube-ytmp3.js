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
    
try {
let api = await fetch(`https://api.giftedtech.my.id/api/download/dlmp3?apikey=gifted&url=${text}`)
let json = await api.json()
let { quality, title, download_url } = json.result
let name = await conn.getName(m.sender)
await conn.sendMessage(m.chat, { text: global.espere + `*${name}*`, contextInfo: { externalAdReply: {title: `${wm}`, body: `${await conn.getName(m.chat)}`, thumbnailUrl: imagen4, thumbnail: imagen4, showAdAttribution: true, sourceUrl: canal}}} , { quoted: fkontak })
await conn.sendMessage(m.chat, { audio: { url: download_url }, fileName: `${title}.mp3`, mimetype: 'audio/mp4' }, { quoted: m })
} catch (error) {
console.error(error)
}}

HS.command = ['ytmp3'];
//HS.group = true;

export default HS
