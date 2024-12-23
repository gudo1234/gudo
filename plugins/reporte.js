var handler = async (m, { conn, text, usedPrefix, command }) => {

if (!text) return conn.reply(m.chat, `🧧*Escriba su reporte*\n\nEjemplo, !${command} el comando !infobot no funciona`, m, null, )
if (text.length < 10) return conn.reply(m.chat, `🚩 *Mínimo 10 caracteres para hacer el reporte*`, m, null, )
if (text.length > 1000) return conn.reply(m.chat, `🚩 *Máximo 1000 caracteres para hacer el reporte.*`, m, null, )

let teks = `⚠️ *Reporte* ⚠️\n\n⬡ *Numero*\nWa.me/${m.sender.split`@`[0]}\n\n⬡ *Mensaje*\n${text}`
conn.reply('50492280729@s.whatsapp.net', m.quoted ? teks + m.quoted.text : teks, null, { contextInfo: { mentionedJid: [m.sender] }})

conn.reply(m.chat, `🚩 *El reporte se envió a mi creador, tendrá una respuesta más tarde*`, m, null, )

}
handler.help = ['reporte', 'request']
handler.tags = ['bot']
handler.command = ['report', 'request', 'reporte', 'bugs', 'bug', 'report-owner', 'reportes', 'reportar']

handler.register = false

export default handler