import { 
  getOriginalUrl,
  search,
  downloads,
  downloads2,
  downloadAlbum,
  downloadAlbum2,
  downloadTrack,
  downloadTrack2
} from "@nechlophomeriaa/spotifydl"

let handler = async (m, { conn,text, args, usedPrefix, command }) => {
    if (!text) throw `${e} Ingresa una busqueda de ${command}`
            let downTrack = await downloadTrack2(`${text}`)
            let caption2=`★━━━━━━━━━━━━━━━━━━━━★
        🎶 𝐒𝐩𝐨𝐭𝐢𝐟𝐲 𝐓𝐫𝐚𝐜𝐤 𝐃𝐨𝐰𝐥𝐨𝐚𝐝𝐞𝐫 🎶\n
        𝘼𝙧𝙩𝙞𝙨𝙩𝙖:${downTrack.artists}\n
        𝐓í𝐭𝐮𝐥𝐨:${downTrack.title}\n
        𝐃𝐮𝐫𝐚𝐜𝐢ó𝐧:${downTrack.duration}\n
★━━━━━━━━━━━━━━━━━━━━★`
            await conn.sendMessage(m.chat, {image: {url: downTrack.imageUrl}, caption: `${caption2}`}, {quoted: m});
            //await conn.sendMessage(m.chat, {audio: downTrack.audioBuffer, fileName: `${downTrack.title}.mp3`, mimetype: 'audio/mpeg'}, {quoted: m});
            conn.sendMessage(m.chat, { audio: { url: downTrack.audioBuffer }, fileName: `${downTrack.title}.mp3`, mimetype: 'audio/mpeg' }, { quoted: m })
  //break;

           // m.reply("No soportado")      
    }

handler.command = ['spotify', 'spotifypro', 'spotifydl']
export default handler
