let handler = async (m, { conn, args, usedPrefix, command }) => {

  conn.sendButton(m.chat, ' 💀' +'bug', `test`, null, [['run', `run`], ['run', `run`], ['run', `run`], ['run', `run`], ['run', `run`], ['run', `run`]], null, null, null)
}

handler.customPrefix = /^(test)$/i
handler.command = new RegExp
export default handler