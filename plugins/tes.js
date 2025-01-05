let handler = async (m, { conn, text, usedPrefix, command }) => {
if (command == 'tes')
if (!text) return conn.reply(m.chat, `Texto faltante para el owner`, m, null, )
let teks = `🗿 *Hola creador* ⭐El Numero Wa.me/${m.sender.split`@`[0]} Quiere de tus servicios`
conn.reply('50488723207@s.whatsapp.net', m.quoted ? teks + m.quoted.text : teks, null, { contextInfo: { mentionedJid: [m.sender] }})
  conn.reply(m.chat, `Por favor espere, nuestro siguiente asesor disponible le atenderá en breve`, m)

if (command == 'tes2')
conn.reply(m.chat, `https://chat.whatsapp.com/J0LI68TsIghF3ldmsTgDWO`, m)

if (command == 'tes3')
conn.reply(m.chat, `tes3`, m)
}

handler.command = ['tes', 'tes2', 'tes3']
export default handler
