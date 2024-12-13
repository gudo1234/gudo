let handler = async (m, { conn, args, usedPrefix, command }) => {
let img = await (await fetch(`https://qu.ax/casQP.jpg`)).buffer()
conn.sendMessage(m.chat, 'Hola', m, {
contextInfo: { externalAdReply :{ mediaUrl: null, mediaType: 1, showAdAttribution: true,
title: wm,
body: author,
previewType: 0, thumbnail: img,
sourceUrl: social }}});
}

handler.command = /^(ve)$/i;
export default handler
