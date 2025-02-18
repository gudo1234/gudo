import yts from 'yt-search'

var handler = async (m, { text, conn, args, command, usedPrefix }) => {

if (!text) return conn.reply(m.chat, `${e} *Escriba el título de algún vídeo de Youtube*\n\nEjemplo, ${usedPrefix + command} Ai Yaemori`, m, rcanal, )
conn.sendMessage(m.chat, { text: global.espere + `*${m.pushName}*`, contextInfo: { externalAdReply: {title: `${wm}`, body: `${await conn.getName(m.chat)}`, thumbnailUrl: img.getRandom(), thumbnail: img.getRandom(), showAdAttribution: true, sourceUrl: canal}}} , { quoted: fkontak })
let results = await yts(text)
let tes = results.all
let teks = results.all.map(v => {
switch (v.type) {
case 'video': return `🍟 *Título:* 
» ${v.title}

🔗 *Enlace:* 
» ${v.url}

🕝 *Duración:*
» ${v.timestamp}

🚩 *Subido:* 
» ${v.ago}

👀 *Vistas:* 
» ${v.views}`}}).filter(v => v).join('\n_______________________\n')

conn.sendFile(m.chat, tes[0].thumbnail, 'yts.jpeg', teks, m, null, rcanal)

}
handler.help = ['ytsearch']
handler.tags = ['buscador']
handler.command = ['playlist', 'ytbuscar', 'yts', 'ytsearch']
handler.group = true;

export default handler
