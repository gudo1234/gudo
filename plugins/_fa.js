import axios from "axios"

let handler = async (m, { conn, text, usedPrefix, command, args }) => {
if (!args[0]) return m.reply("Ingresa el enlace del vídeo de YouTube")


    try { 
        await m.react('⌛')
    await conn.sendMessage(m.chat, { video: { url: `https://api.dorratz.com/ytdl/yt-mp4?url=${text}` }, caption: name }, { quoted: m });
}catch(e) {
        await m.react('❌')
        return console.log(e)
    }
}

handler.command = ['pla'];
export default handler;
