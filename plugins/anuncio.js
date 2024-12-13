let handler = async (m, { conn, args, usedPrefix, command }) => {
conn.reply(m.chat, 'Hola', m, {
let img = await (await fetch(`https://qu.ax/casQP.jpg`)).buffer()
contextInfo: { externalAdReply :{ mediaUrl: null, mediaType: 1, showAdAttribution: true,
title: wm,
body: 'test',
previewType: 0, thumbnail: img,
sourceUrl: canal }}});
}

handler.command = /^(ve)$/i;
export default handler
