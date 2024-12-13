let handler = async (m, { conn, args, usedPrefix, command }) => {
conn.reply(m.chat, 'Hola', m, {
contextInfo: { externalAdReply :{ mediaUrl: null, mediaType: 1, showAdAttribution: true,
title: wm,
body: 'test',
previewType: 0, thumbnail: imagen4,
sourceUrl: canal }}});
}

handler.command = /^(ve)$/i;
export default handler
