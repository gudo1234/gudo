let handler = async (m, { conn, args, usedPrefix, command }) => {
let vn = './media/prueba4.mp3'
let txt =`¡Hola ${m.pushName}!\n\n\`🫧Izumi es un bot, desarrollado para WhatsApp. Tiene muchos comandos con diferentes funciones, como la descarga de videos, audios, fotos, generador de sticker y mucho mas, contiene búsquedas con chatGPT y diversos juegos.\`

${e} _Te ofrecemos un bot de calidad para cubrir tus necesidades en un grupo._

> 🙌🏻Para adquirir el servicio o para más información visite nuestro centro de atención en:
👉🏻 https://www.atom.bio/edar_
wa.me/50492280729\n\n𝗉𝗈𝗐𝖾𝗋𝖾𝖽 ⓒ 𝖨𝗓𝗎𝗆𝗂-𝖻𝗈𝗍 𝟤𝟢𝟤𝟢-𝟤𝟢𝟤5.`.trim()
await m.react('🧑🏻‍💻')
conn.sendMessage(m.chat, { video: { url: 'https://telegra.ph/file/a808ef0a53bf35252a1c2.mp4' }, gifPlayback: true, caption: txt.trim(), mentions: [m.sender] }, { quoted: fkontak })
await conn.sendFile(m.chat, vn, 'error.mp3', null, null, true, { type: 'audioMessage', ptt: true })
}

handler.command = ['contratar', 'precios']
export default handler
