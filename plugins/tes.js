let handler = async (m, { conn, text, usedPrefix, command }) => {
if (!text) return conn.reply(m.chat, `Texto faltante para el owner`, m, null, )
let teks = `🗿 *Hola creador* ⭐El Numero Wa.me/${m.sender.split`@`[0]} Quiere de tus servicios`
conn.reply('50492280729@s.whatsapp.net', m.quoted ? teks + m.quoted.text : teks, null, { contextInfo: { mentionedJid: [m.sender] }})
conn.reply(m.chat, `⚖️ _Por favor espere, nuestro siguiente asesor disponible le atenderá en breve..._\n\nSerá Atendido por @${global.prems} *🖐🏻Solo para asuntos importantes, no molestar.*`, m)
}

handler.command = ['tes']
export default handler
