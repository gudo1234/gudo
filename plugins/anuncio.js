let handler = async (m, { conn, args, text, usedPrefix, command }) => {
await conn.sendMessage(m.chat, { text: taguser, contextInfo: { externalAdReply: {title: '꙳🧧𓆩ίʑ᭘ɱί-ⲃⲟτ𓆪🧧꙳', thumbnailUrl: imagen4, thumbnail: imagen4, showAdAttribution: true, sourceUrl: canal}}} , { quoted: m })
}
handler.command = /^(ve)$/i
handler.group = true;
export default handler
