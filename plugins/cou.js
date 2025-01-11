let handler = async (m, { conn, text, args, participants, usedPrefix, command }) => {

let mentions = participants.map(u => u.id).filter(v => v !== conn.user.jid)
    const poll = {
        name: 'xd',
        selectableCount: 1,
        values: [],
        mentions: mentions, 
        remoteJid: m.chat
    }
await conn.reply(m.chat, `${poll}`, m)

}
handler.command = ['no'] 
export default handler
