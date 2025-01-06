let handler = async (m, { conn, text, usedPrefix, command }) => {
  
if (command == 'play')
if (!text) return conn.reply(m.chat, `*Ejemplo:* ${usedPrefix + command} https://youtu.be/yURRmWtbTbo?si=y-ZKAGxrvNGhB5Qe`,  m);
const res = await fetch(`https://api.zenkey.my.id/api/download/ytmp3?apikey=zenkey&url=text`)
let { result } = await res.json()
await conn.sendMessage(m.chat, { audio: { url: await result.download.url }, mimetype: 'audio/mpeg' }, { quoted: m })
m.react('🕒')
}

handler.command = ['ytmp3']
//handler.group = true
export default handler
