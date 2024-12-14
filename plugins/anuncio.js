let handler = async (m, { conn, args, text, usedPrefix, command }) => {
let name = await conn.getName(m.sender)
await conn.sendMessage(m.chat, { text: global.espere + `*${name}*`, contextInfo: { externalAdReply: {title: `${wm}`, thumbnailUrl: imagen4, thumbnail: imagen4, showAdAttribution: true, sourceUrl: canal}}} , { quoted: fkontak })
}
handler.command = /^(ve)$/i
handler.group = true;
export default handler
