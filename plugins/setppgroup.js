let handler = async (m, { conn, usedPrefix, command }) => {
let q = m.quoted ? m.quoted : m
let mime = (q.msg || q).mimetype || q.mediaType || ''
if (/image/.test(mime)) {
let img = await q.download()
if (!img) throw `🚩 *Responda a una imagen*`
await conn.updateProfilePicture(m.chat, img).then(_ => m.reply(`🍋‍🟩 _*Foto de perfil del grupo actualizada_`))
m.react('✅')
} else throw `🚩 *Responda a una imagen*`}
handler.command = ['setppgc', 'setppgroup', 'icongc']
handler.group = true
handler.admin = true
handler.botAdmin = true
export default handler
