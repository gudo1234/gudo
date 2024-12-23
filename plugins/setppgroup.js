let handler = async (m, { conn, usedPrefix, command }) => {
let q = m.quoted ? m.quoted : m
let mime = (q.msg || q).mimetype || q.mediaType || ''
if (/image/.test(mime)) {
let img = await q.download()
if (!img) throw `𝙍𝙀𝙎𝙋𝙊𝙉𝘿𝙀 𝘼 𝙐𝙉𝘼 𝙄𝙈𝘼𝙂𝙀𝙉`
await conn.updateProfilePicture(m.chat, img).then(_ => m.reply(`𝙎𝙀 𝘾𝘼𝙈𝘽𝙄𝙊 𝙇𝘼 𝙁𝙊𝙏𝙊 𝘿𝙀𝙇 𝙂𝙍𝙐𝙋𝙊 𝘾𝙊𝙉 𝙀́𝙓𝙄𝙏𝙊`))
} else throw `𝙍𝙀𝙎𝙋𝙊𝙉𝘿𝙀 𝘼 𝙐𝙉𝘼 𝙄𝙈𝘼𝙂𝙀𝙉`}
handler.command = ['setppgroup', 'icongc']
handler.group = true
handler.admin = true
handler.botAdmin = true
export default handler
