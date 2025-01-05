let handler = async (m, { conn, usedPrefix, command }) => {
if (command == 'tes2')
conn.reply(m.chat, `https://chat.whatsapp.com/J0LI68TsIghF3ldmsTgDWO`, m)

if (command == 'tes3')
conn.reply(m.chat, `tes3`, m)
}

handler.command = ['tes2', 'tes3']
export default handler
