import { search, download } from 'aptoide-scraper'

var handler = async (m, {conn, usedPrefix, command, text}) => {
if (!text) return conn.reply(m.chat, '💥 *Ingrese el nombre de la apk para descargarlo.*', m, rcanal)
try {
await m.react('🕒')
let name = await conn.getName(m.sender)
await conn.sendMessage(m.chat, { text: global.espere + `*${name}*`, contextInfo: { externalAdReply: {title: `${wm}`, body: `${await conn.getName(m.chat)}`, humbnailUrl: imagen4, thumbnail: imagen4, showAdAttribution: true, sourceUrl: canal}}} , { quoted: fkontak })
let searchA = await search(text)
let data5 = await download(searchA[0].id)
let txt = `*乂  APTOIDE - DESCARGAS* 乂\n\n`
txt += `💥 *Nombre* : ${data5.name}\n`
txt += `🗃 *Package* : ${data5.package}\n`
txt += `🪴 *Update* : ${data5.lastup}\n`
txt += `⚖ *Peso* :  ${data5.size}`
await conn.sendFile(m.chat, data5.icon, 'thumbnail.jpg', txt, m, null, rcanal)
await m.react('✔️')  
if (data5.size.includes('GB') || data5.size.replace(' MB', '') > 999) {
return await conn.reply(m.chat, '🛑 *El archivo es demaciado pesado*', m, rcanal )}
await conn.sendMessage(m.chat, {document: {url: data5.dllink}, mimetype: 'application/vnd.android.package-archive', fileName: data5.name + '.apk', caption: null}, {quoted: m})
} catch {
return conn.reply(m.chat, '✖️ *Ocurrió un fallo*', m, rcanal )}}

handler.tags = ['descargas']
handler.help = ['apkmod']
handler.command = ['apk', 'modapk', 'aptoide']
handler.group = true;

export default handler