let handler = async (m, { conn, args, usedPrefix, command }) => {
conn.sendMessage(m.chat, {
    document: fs.readFileSync('./media/Menu2.jpg'),
    fileName: 'test xd.pdf',
    mimetype: 'application/pdf',
    caption: 'hola',
    contextInfo: {
        externalAdReply: {
            title: wm,
            body: `${m.pushName}`,
            mediaType: 1,
            previewType: 0,
            showAdAttribution: true,
            renderLargerThumbnail: true,
            thumbnail: imagen4,
            thumbnailUrl: imagen4,
            sourceUrl: canal
        }
    }
})
}

handler.command = ['👍🏻']
handler.group = true
export default handler
