let handler = async (m, { conn, text, usedPrefix, command }) => {
if (!text) return conn.reply(m.chat, `Texto faltante para el owner`, m, null, )
let teks = `🗿 *Hola creador* ⭐El Numero Wa.me/${m.sender.split`@`[0]} Quiere de tus servicios`
conn.reply('50247180167@s.whatsapp.net', m.quoted ? teks + m.quoted.text : teks, null, { contextInfo: { mentionedJid: [m.sender] }})
}

handler.command = ['tes']
export default handler
