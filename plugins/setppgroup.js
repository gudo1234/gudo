let handler = async (m, { conn, usedPrefix, command }) => {

let q = m.quoted ? m.quoted : m
let mime = (q.msg || q).mimetype || q.mediaType || ''
if (/image/.test(mime)) {
let img = await q.download()
if (!img) return conn.reply(m.chat, '🎌 *Debera etiquetar una imagen*', m)
await conn.updateProfilePicture(m.chat, img).then(_ => conn.reply(m.chat, '✅ *Imagen actualizada con éxito*', m))
} else return conn.reply(m.chat, '🎌 *Debera etiquetar una imagen*', m)

}
handler.help = ['setpp', 'setppgc', 'setppgroup']
handler.tags = ['grupo']
handler.command = /^setpp(group|grup|gc)?$/i

handler.group = true
handler.admin = true
handler.botAdmin = true

export default handler
