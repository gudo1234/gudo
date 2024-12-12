let handler = async (m, { conn, args, usedPrefix, command }) => {
let vn = './media/ocupado.mp3'
let name = await conn.getName(m.sender)
let fkontak = { "key": { "participants":"0@s.whatsapp.net", "remoteJid": "status@broadcast", "fromMe": false, "id": "Halo" }, "message": { "contactMessage": { "vcard": `BEGIN:VCARD\nVERSION:3.0\nN:Sy;Bot;;;\nFN:y\nitem1.TEL;waid=${m.sender.split('@')[0]}:${m.sender.split('@')[0]}\nitem1.X-ABLabel:Ponsel\nEND:VCARD` }}, "participant": "0@s.whatsapp.net" }
let txt =`¡Hola ${name}!\n\n\`🫧Izumi es un bot, desarrollado para WhatsApp. Tiene muchos comandos con diferentes funciones, como la descarga de videos, audios, fotos, generador de sticker y mucho mas, contiene búsquedas con chatGPT y diversos juegos.\`

_🧧Te ofrecemos un bot de calidad para cubrir tus necesidades en un grupo._

> 🙌🏻Para adquirir el servicio o para más información visite nuestro centro de atención en:
👉🏻 https://www.atom.bio/edar_
wa.me/50492280729\n\n𝗉𝗈𝗐𝖾𝗋𝖾𝖽 ⓒ 𝖨𝗓𝗎𝗆𝗂-𝖻𝗈𝗍 𝟤𝟢𝟤𝟢-𝟤𝟢𝟤𝟦.`.trim()
await m.react('🧑🏻‍💻')
conn.sendMessage(m.chat, { video: { url: 'https://telegra.ph/file/a808ef0a53bf35252a1c2.mp4' }, gifPlayback: true, caption: txt.trim(), mentions: [m.sender] }, { quoted: fkontak })
await conn.sendFile(m.chat, vn, 'error.mp3', null, null, true, { type: 'audioMessage', ptt: true })
}

handler.command = /^(contratar|precios)$/i;
export default handler