import axios from 'axios';
import yts from 'yt-search'


let handler = async (m, { command, args, text, usedPrefix}) => {
    if (!args[0]) return m.reply("Ingresa el enlace del vídeo de YouTube")
    try {
let name = await conn.getName(m.sender)
await conn.sendMessage(m.chat, { text: global.espere + `*${name}*`, contextInfo: { externalAdReply: {title: `${wm}`, body: `${await conn.getName(m.chat)}`, thumbnailUrl: imagen4, thumbnail: imagen4, showAdAttribution: true, sourceUrl: canal}}} , { quoted: fkontak })
        await m.react('🕒')
        let enlace=`${args[0]}`
        const regexEnlaceYoutube = /^(https?:\/\/)?(www\.)?(m\.)?(youtube\.com|youtu\.be)\/(watch\?v=)?([a-zA-Z0-9_-]{11})$/;
        if(regexEnlaceYoutube.test(enlace))
        {
          const {data}= await axios.get(`https://deliriussapi-oficial.vercel.app/download/ytmp4?url=${enlace}`);
          const yt=data.data.download.url
          //await conn.sendFile(m.chat,yt,'yt.mp4', wm, m, null)
        await conn.sendMessage(m.chat, {document: {url:yt}, caption: wm, mimetype: 'video/mp4', fileName: `${yt_play[0].title}.mp4`}, {quoted: m})
        await m.react('✅');  
        }
        else m.reply("Ingresa el enlace del vídeo de YouTube")
    }
    catch(e) {
        await m.react('❌')
        m.reply(`error`)
        return console.log(e)
    }
    return 1
}

handler.command = ['ytmp4doc', 'ytvdoc']
handler.group = true;
export default handler
