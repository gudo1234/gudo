let handler = async (m, { conn, text, args, participants, usedPrefix, command }) => {

let mentions = participants.map(u => u.id).filter(v => v !== conn.user.jid)
    const poll = {
        name: 'xd',
        selectableCount: 1,
        values: [],
        mentions: mentions, 
        remoteJid: m.chat
    }
let txt = `🤨`
conn.sendMessage(m.chat, { txt, mentions: users } )

}
handler.command = ['no'] 
export default handler
