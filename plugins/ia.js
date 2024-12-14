import axios from 'axios'
import fetch from 'node-fetch'

let handler = async (m, { conn, usedPrefix, command, text }) => {
const isQuotedImage = m.quoted && (m.quoted.msg || m.quoted).mimetype && (m.quoted.msg || m.quoted).mimetype.startsWith('image/')
const username = `${conn.getName(m.sender)}`
const basePrompt = `Tu nombre es ꙳🧧𓆩ίʑ᭘ɱί-ⲃⲟτ𓆪🧧 y parece haber sido creado por 𓆩᮫࣭݊͜🍁࣭݊ျ֘▹ⲉ꯭𝖽α꯭૨‹࣭݊⸸࣭݊͜𓆪. Tú usas el idioma Español. Llamarás a las personas por su nombre ${username}, eres la 77.ª directora de la funeraria el caminó, te gusta hacer bromas a la gente y odias estar sentada sin hacer nada. Lo más importante es que debes ser amigable con la persona con la que estás hablando. ${username}`
if (isQuotedImage) {
const q = m.quoted
const img = await q.download?.()
if (!img) {
console.error('🔥Error: No image buffer available')
return conn.reply(m.chat, '❤️‍🔥 Error: No se pudo descargar la imagen.', m, fake)}
const content = '¿Qué se observa en la imagen?'
try {
const imageAnalysis = await fetchImageBuffer(content, img)
const query = '❤️‍🔥Descríbeme la imagen y detalla por qué actúan así. También dime quién eres'
const prompt = `${basePrompt}. La imagen que se analiza es: ${imageAnalysis.result}`
const description = await luminsesi(query, username, prompt)
await conn.reply(m.chat, description, m, fake)
} catch (error) {
console.error('🔥 Error al analizar la imagen:', error)
await conn.reply(m.chat, '🦋 Error al analizar la imagen.', m, fake)}
} else {
if (!text) { return conn.reply(m.chat, `*🚩Ejemplo:* ${usedPrefix + command} que es un bot`, m, rcanal)}
await m.react('💬')
try {
const query = text
const prompt = `${basePrompt}. Responde lo siguiente: ${query}`
const response = await luminsesi(query, username, prompt)

await conn.reply(m.chat, response, m, fake)
} catch (error) {
console.error('Error al obtener la respuesta:', error)
await conn.reply(m.chat, 'Error: intenta más tarde.', m, fake)}}}

handler.help = ['chatgpt <texto>', 'ia <texto>']
handler.tags = ['ai']
handler.group = true;
handler.register = false

// handler.estrellas = 1
handler.command = ['ia', 'chatgpt', 'izumi']

export default handler

// Función para enviar una imagen y obtener el análisis
async function fetchImageBuffer(content, imageBuffer) {
try {
const response = await axios.post('https://Luminai.my.id', {
content: content,
imageBuffer: imageBuffer 
}, {
headers: {
'Content-Type': 'application/json' 
}})
return response.data
} catch (error) {
console.error('Error:', error)
throw error }}
// Función para interactuar con la IA usando prompts
async function luminsesi(q, username, logic) {
try {

const response = await axios.post("https://Luminai.my.id", {
content: q,
user: username,
prompt: logic,
webSearchMode: false
})
return response.data.result
} catch (error) {
console.error('🚩 Error al obtener:', error)
throw error }}
