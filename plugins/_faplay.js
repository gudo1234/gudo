import axios from "axios"

let handler = async (m, { conn, text, usedPrefix, command, args }) => {
if (!args[0]) return m.reply(`${e} *Ingresa el enlace del vídeo de YouTube*`)
let name = await conn.getName(m.sender)
await m.react('⌛')
conn.sendMessage(m.chat, { text: global.espere + `*${m.pushName}*`, contextInfo: { externalAdReply: {title: `${wm}`, body: `${await conn.getName(m.chat)}`, thumbnailUrl: img.getRandom(), thumbnail: img.getRandom(), showAdAttribution: true, sourceUrl: canal}}} , { quoted: fkontak })
if (command == 'pla' || command == 'yta') { // yta audio
    try {
    await conn.sendMessage(m.chat, { audio: { url: `https://api.agungny.my.id/api/youtube-audio?url=${text}` }, mimetype: 'audio/mpeg'}, { quoted: m });
}catch(e) {
        await m.react('❌')
        m.reply(`Error, ${e}`)
        return console.log(e)
    }}

if (command == 'pla2' || command == 'x') { // mp4 video
    try {
    await conn.sendMessage(m.chat, { video: { url: `https://api.agungny.my.id/api/youtube-audio?url=${'https://youtu.be/' + res[0].videoId}` }, caption: `${name}` }, { quoted: m });
}catch(e) {
        await m.react('❌')
        m.reply(`Error, ${e}`)
        return console.log(e)
    }}

if (command == 'pla3' || command == 'x') { // ytadoc audio
    try {
    await conn.sendMessage(m.chat, { document: { url: `https://api.dorratz.com/v2/yt-mp3?url=${text}` }, mimetype: 'audio/mpeg',fileName: `audio.mp3`,caption: `${name}` }, { quoted: m });
}catch(e) {
        await m.react('❌')
        m.reply(`Error, ${e}`)
        return console.log(e)
    }}

if (command == 'pla4' || command == 'x') { // mp4doc video
    try {
    await conn.sendMessage(m.chat, { document: { url: `https://api.dorratz.com/v2/yt-mp3?url=${text}` }, mimetype: 'video/mp4',fileName: `video.mp4`,caption: `${name}` }, { quoted: m });
}catch(e) {
        await m.react('❌')
        m.reply(`Error, ${e}`)
        return console.log(e)
    }}
}

handler.command = ['pla', 'pla2', 'pla3', 'pla4'];
export default handler;
