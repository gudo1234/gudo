import fetch from 'node-fetch'

let handler  = async (m, { conn, usedPrefix, command }) => {
//let img = await (await fetch(`https://i.ibb.co/XLKJ1pr/file.jpg`)).buffer()
let img = imagen1
const more = String.fromCharCode(8206)
const readMore = more.repeat(4001)
let txt = `> 🧧 Visita nuestro centro de atención en: https://atom.bio/edar_`
await conn.sendFile(m.chat, img, "Thumbnail.jpg", txt, m, null, rcanal)
}
handler.help = ['grupos']
handler.tags = ['main']
handler.command = /^(grupos)$/i
export default handler