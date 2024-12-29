import axios from 'axios';
import yts from 'yt-search'


let handler = async (m, { command, args, text, usedPrefix}) => {
    if (!args[0]) return m.reply("Ingresa el enlace del vídeo de YouTube")
    try { 
        await m.react('🕒')
        let enlace=`${args[0]}`
        const regexEnlaceYoutube = /^(https?:\/\/)?(www\.)?(m\.)?(youtube\.com|youtu\.be)\/(watch\?v=)?([a-zA-Z0-9_-]{11})$/;
        if(regexEnlaceYoutube.test(enlace))
        {
          const {data}= await axios.get(`https://deliriussapi-oficial.vercel.app/download/ytmp3?url=${enlace}`);
          const yt=data.data.download.url
          await conn.sendFile(m.chat,yt,'yt.mp4', wm, m, null)
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

handler.command = ['ytmp3doc', 'mp3doc', 'ytadoc']
handler.group = true;
export default handler
