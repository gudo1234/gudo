let handler = async (m, { conn, args, usedPrefix, command }) => {
let img = await (await fetch(`https://qu.ax/casQP.jpg`)).buffer()
conn.reply(m.chat, 'Hola', m, {
contextInfo: { externalAdReply :{ mediaUrl: null, mediaType: 1, showAdAttribution: true,
title: wm,
body: 'test',
previewType: 0, thumbnail: img,
sourceUrl: canal }}});
}

handler.command = /^(ve)$/i;
export default handler
