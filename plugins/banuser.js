let handler = async (m, { conn, text}) => {
if (!text) throw '_Ingresa el @tag de algún usuario._'
let who
if (m.isGroup) who = m.mentionedJid[0]
else who = m.chat
if (!who) throw '_Ingresa el @tag de algún usuario._'
let users = global.db.data.users
users[who].banned = true
conn.reply(m.chat, `${e} _El usuario @${who.split('@')[0]}, fue baneado con éxito._`, m)
}
handler.help = ['banuser']
handler.tags = ['owner']
handler.command = ['banuser']
handler.rowner = true
export default handler