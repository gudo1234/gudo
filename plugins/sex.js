import fetch from 'node-fetch'
let cooldowns = {}
let handler = async (m, { conn, args, usedPrefix, command }) => {
if (!global.db.data.chats[m.chat].modohorny) return conn.reply(m.chat, `${e} El grupo no admite contenido *Nsfw.*\n\n> Para activarlo un *Administrador* debe usar el comando *.on modohorny*`, m, rcanal)
    
if (cooldowns[m.sender] && Date.now() - cooldowns[m.sender] < 5 * 1000) {
let tiempoRestante = segundosAHMS(Math.ceil((cooldowns[m.sender] + 5 * 1000 - Date.now()) / 1000))
m.reply(`${e} Espera *⏱ ${tiempoRestante}* para volver a usar este comando.`)
return
}
  
let res = await fetch(`https://fantox-apis.vercel.app/sex`)
await m.react('🕓')
try {
if (!res.ok) throw await res.text()
let json = await res.json()
if (!json.url) throw m.react('✖️')
await conn.sendFile(m.chat, json.url, 'thumbnail.jpg', `*» Resultado* : ${command}`, m, null, rcanal)
await m.react('✅')
cooldowns[m.sender] = Date.now()
} catch {
await m.react('✖️')
}}
handler.help = ['sex']
handler.command = ['hentai']
handler.group = true 


export default handler

function pickRandom(list) {
  return list[Math.floor(list.length * Math.random())]
}

function segundosAHMS(segundos) {
  let segundosRestantes = segundos % 60
  return `${segundosRestantes} segundos`
}