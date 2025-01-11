let handler = async (m, { conn, text, args, participants, usedPrefix, command }) => {

const mentionedJid = groupMetadata.participants.map(v => v.id);

        await conn.sendMessage(m.chat, {
            image: { url: imagen4 },
            caption: '🤨',
            //gifPlayback: true,
            mentions: mentionedJid,
            remoteJid: m.chat
        }, { quoted: m });
    }

}
handler.command = ['no'] 
export default handler
