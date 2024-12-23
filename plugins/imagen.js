import { googleImage } from '@bochilteam/scraper'
let handler = async (m, { conn, text, usedPrefix, command }) => {
let user = global.db.data.users[m.sender]
if (!text) throw `𝗘𝗷𝗲𝗺𝗽𝗹𝗼: ${usedPrefix + command} carros`
if (m.text.includes('gore') || m.text.includes('cp')|| m.text.includes('mamadas')|| m.text.includes('porno')|| m.text.includes('Gore')|| m.text.includes('rule')|| m.text.includes('CP') || m.text.includes('pene')|| m.text.includes('verga') || m.text.includes('Rule34') || m.text.includes('xxx')) return m.reply('> Se bloqueó la búsqueda por el lenguaje inapropiado.').then(_ => m.react('✖️'))
await m.react('🕒')
const res = await googleImage(text)
let image = res.getRandom()
let link = image
await delay(1000)
await m.react('✅')
//let name = await conn.getName(m.sender)
//await conn.sendMessage(m.chat, { text: global.espere + `*${name}*`, contextInfo: { externalAdReply: {title: `${wm}`, body: `${await conn.getName(m.chat)}`, humbnailUrl: imagen4, thumbnail: imagen4, showAdAttribution: true, sourceUrl: canal}}} , { quoted: fkontak })
conn.sendFile(m.chat, link, 'error.jpg', `${text}`, m, null, rcanal)}
catch (error) {
    console.error(error);
    throw `error`;}
handler.help = ['gimage <query>', 'imagen <query>']
handler.tags = ['internet', 'tools']
handler.command = ['imagen', 'image']
handler.group = true;
export default handler
const delay = time => new Promise(res => setTimeout(res, time))
