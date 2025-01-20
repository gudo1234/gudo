import axios from "axios"

let handler = async (m, { conn, text, usedPrefix, command, args }) => {
if (!args[0]) return m.reply("Ingresa el enlace del vídeo de YouTube")
let name = await conn.getName(m.sender)
await m.react('⌛')
    
if (command == 'pla') { // yta audio
    try {
await
    await conn.sendMessage(m.chat, { audio: { url: `https://api.dorratz.com/v2/yt-mp3?url=${text}` }, mimetype: 'audio/mpeg'}, { quoted: m });
}catch(e) {
        await m.react('❌')
        m.reply(`Error, ${e}`)
        return console.log(e)
    }}

if (command == 'pla2') { // mp4 video
    try {
await
    await conn.sendMessage(m.chat, { video: { url: `https://api.dorratz.com/ytdl/yt-mp4?url=${text}` }, caption: `${name}` }, { quoted: m });
}catch(e) {
        await m.react('❌')
        m.reply(`Error, ${e}`)
        return console.log(e)
    }}

if (command == 'pla3') { // ytadoc audio
    try {
await
    await conn.sendMessage(m.chat, { document: { url: `https://api.dorratz.com/ytdl/yt-mp4?url=${text}` }, mimetype: 'audio/mpeg',fileName: `audio.mp3`,caption: `${name}` }, { quoted: m });
}catch(e) {
        await m.react('❌')
        m.reply(`Error, ${e}`)
        return console.log(e)
    }}

if (command == 'pla4') { // mp4doc video
    try {
await
    await conn.sendMessage(m.chat, { document: { url: `https://api.dorratz.com/ytdl/yt-mp4?url=${text}` }, mimetype: 'video/mp4',fileName: `video.mp4`,caption: `${name}` }, { quoted: m });
}catch(e) {
        await m.react('❌')
        m.reply(`Error, ${e}`)
        return console.log(e)
    }}
}

handler.command = ['pla', 'pla2', 'pla3', 'pla4'];
export default handler;
