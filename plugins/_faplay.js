import axios from "axios"

let handler = async (m, { conn, text, usedPrefix, command, args }) => {
if (!args[0]) return m.reply("Ingresa el enlace del vídeo de YouTube")
let name = await conn.getName(m.sender)
await m.react('⌛')
conn.sendMessage(m.chat, { text: global.espere + `*${m.pushName}*`, contextInfo: { externalAdReply: {title: `${wm}`, body: `${await conn.getName(m.chat)}`, thumbnailUrl: img.getRandom(), thumbnail: img.getRandom(), showAdAttribution: true, sourceUrl: canal}}} , { quoted: fkontak })
if (command == 'ytmp3') { // yta audio
    try {
await
    await conn.sendMessage(m.chat, { audio: { url: `https://api.dorratz.com/v2/yt-mp3?url=${text}` }, mimetype: 'audio/mpeg'}, { quoted: m });
}catch(e) {
        await m.react('❌')
        m.reply(`Error, ${e}`)
        return console.log(e)
    }}

if (command == 'ytmp4') { // mp4 video
    try {
await
    await conn.sendMessage(m.chat, { video: { url: `https://api.dorratz.com/v2/yt-mp3?url=${text}` }, caption: `${name}` }, { quoted: m });
}catch(e) {
        await m.react('❌')
        m.reply(`Error, ${e}`)
        return console.log(e)
    }}

if (command == 'ytmp3doc') { // ytadoc audio
    try {
await
    await conn.sendMessage(m.chat, { document: { url: `https://api.dorratz.com/v2/yt-mp3?url=${text}` }, mimetype: 'audio/mpeg',fileName: `audio.mp3`,caption: `${name}` }, { quoted: m });
}catch(e) {
        await m.react('❌')
        m.reply(`Error, ${e}`)
        return console.log(e)
    }}

if (command == 'ytmp4doc') { // mp4doc video
    try {
await
    await conn.sendMessage(m.chat, { document: { url: `https://api.dorratz.com/v2/yt-mp3?url=${text}` }, mimetype: 'video/mp4',fileName: `video.mp4`,caption: `${name}` }, { quoted: m });
}catch(e) {
        await m.react('❌')
        m.reply(`Error, ${e}`)
        return console.log(e)
    }}
}

handler.command = ['ytmp3', 'ytmp4', 'ytmp3doc', 'ytmp4doc'];
export default handler;
