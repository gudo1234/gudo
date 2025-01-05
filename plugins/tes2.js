let handler = async (m, { conn, usedPrefix, command }) => {
if (command == 'tes2')
conn.reply(m.chat, `🚩 *Grupo Oficial de ${wm}*\nhttps://chat.whatsapp.com/KlFxtwHtqIWIWOTjnjqnu3\n\n> 👍🏻Asegurese de leer las reglas para evitar expulsiones`, m)

if (command == 'tes3')
conn.reply(m.chat, `tes3`, m)
}

handler.command = ['tes2', 'tes3']
export default handler
