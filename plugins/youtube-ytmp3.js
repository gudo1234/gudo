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

// *[ ❀ YTMP3V2 ]*
import fetch from 'node-fetch'

let HS = async (m, { conn, text, usedPrefix, command }) => {
if (!text) {
return conn.reply(m.chat, `❀Ingresa el link de youtube `, m)
}
let name = await conn.getName(m.sender)
await conn.sendMessage(m.chat, { text: global.espere + `*${name}*`, contextInfo: { externalAdReply: {title: `${wm}`, body: `${await conn.getName(m.chat)}`, thumbnailUrl: imagen4, thumbnail: imagen4, showAdAttribution: true, sourceUrl: canal}}} , { quoted: m})
try {
let calidad = '128' // Calidades disponibles : 32, 64, 128, 192, 320
let api = await fetch(`https://api.giftedtech.my.id/api/download/dlmp3q?apikey=gifted&quality=${calidad}&url=${text}`)
let json = await api.json()
let { quality, title, download_url, thumbnail } = json.result


await conn.sendMessage(m.chat, { audio: { url: download_url }, caption: null, mimetype: "audio/mpeg" }, { quoted: m })
} catch (error) {
console.error(error)
m.reply(`error temporal, prueba con ${usedPrefix + command}2`)
}}

HS.command = ['ytmp3', 'mp3', 'yta']

export default HS
