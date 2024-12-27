import { getDevice } from "@whiskeysockets/baileys"
import PhoneNumber from 'awesome-phonenumber'
let handler = async (m, { conn, args, usedPrefix, command }) => {

const nkdt = new Date();
const nktm = nkdt.getHours();
let rpt = "🌠¡Recuerda descansar bien esta noche!🌙😴\n\nToque aquí💥"
      if (nktm >= 3) rpt = "🙃¡Buenas madrugadas!\n\nToque aquí💥"
      if (nktm > 6) rpt = "☀️¡Buenos días!🌻\n\nToque aquí💥"
      if (nktm >= 11) rpt = "🌇¡Buenas tardes!🍁\n\nToque aquí💥"
      if (nktm >= 18) rpt = "🌠¡Buenas noches!🌙\n\nToque aquí💥"
let name = await conn.getName(m.sender)
m.react('🍉')
let pp = await conn.profilePictureUrl(m.sender, 'image').catch(_ => './src/avatar_contact.png')
let delirius = await axios.get(`https://deliriussapi-oficial.vercel.app/tools/country?text=${PhoneNumber('+' + m.sender.replace('@s.whatsapp.net', '')).getNumber('international')}`)
  let paisdata = delirius.data.result
  let mundo = paisdata ? `${paisdata.name} ${paisdata.emoji}` : 'Desconocido'
m.react('📘')
conn.sendEvent(m.chat, `${rpt}`,`*🧧Prefijo* (${usedPrefix})
•🪪 INFO-USUARIO.li
╭───╯
*🚩]▸Nombre:* ${name}
*🌎]▸Pais:* ${mundo}
(${getDevice(m.key.id)})
*🗓]▸Fecha:* ${moment.tz('America/Bogota').format('DD/MM/YY')}
╰───╮╭───╯
•🛒 OWNER-CREADOR.li
╭───╯
☯️]▸ reglas
☯️]▸ true/false
☯️]▸ owner
☯️]▸ fetch
☯️]▸ grupos
☯️]▸ info
☯️]▸ contratar
☯️]▸ reporte
☯️]▸ ping
╰───╮╭───╯
•🧧 DESCARGAS.li
╭───╯
☯️]▸ tiktokvid txt
☯️]▸ spotify
☯️]▸ spotifydl
☯️]▸ audio
☯️]▸ video
☯️]▸ play
☯️]▸ play2
☯️]▸ play3
☯️]▸ play4
☯️]▸ apk
☯️]▸ facebook
☯️]▸ instagram
☯️]▸ tiktok
☯️]▸ tiktokimg
☯️]▸ twitter
☯️]▸ gitclone
☯️]▸ imagen
☯️]▸ mediafire
☯️]▸ ytmp4doc
☯️]▸ ytmp3doc
☯️]▸ ytmp4
☯️]▸ ytmp3
☯️]▸ xvideosdl
☯️]▸ xnxxdl
☯️]▸ applemusic
☯️]▸ pinterest
╰───╮╭───╯
•🔎 BÚSQUEDAS.li
╭───╯
☯️]▸ google txt
☯️]▸ dalle
☯️]▸ ia
☯️]▸ gemini
☯️]▸ style
☯️]▸ horóscopo
☯️]▸ bot
☯️]▸ ytsearch
☯️]▸ tiktoksearch2
☯️]▸ perfil
☯️]▸ spotifysearch
☯️]▸ cuevana
☯️]▸ xnxxsearch
☯️]▸ githubsearch
╰───╮╭───╯
•⚙️ HERRAMIENTAS.li
╭───╯
☯️]▸ toptt
☯️]▸ tovid
☯️]▸ tomp3
☯️]▸ toimg
☯️]▸ ver
☯️]▸ sticker
☯️]▸ hd
☯️]▸ ssweb
☯️]▸ qc
☯️]▸ tts
☯️]▸ wm
☯️]▸ take
☯️]▸ emojimix 😍+🥰
☯️]▸ vcard #
☯️]▸ tweet
☯️]▸ whamusic
☯️]▸ ttp
☯️]▸ par
╰───╮╭───╯
•🚦 GRUPO.li
╭───╯
☯️]▸ admins
☯️]▸ infogrupo
☯️]▸ kick
☯️]▸ todos
☯️]▸ hidetag
☯️]▸ tag
☯️]▸ link
☯️]▸ setppgroup
☯️]▸ fantasmas
☯️]▸ grupo abrir/cerar
☯️]▸ on/off
☯️]▸ on antilink
☯️]▸ off autosticker
☯️]▸ on antidelete
☯️]▸ off welcome
☯️]▸ on antifake
☯️]▸ off modohorny
☯️]▸ setwelcome
☯️]▸ promote
☯️]▸ demote
☯️]▸ addcmd
☯️]▸ delcmd
╰───╮╭───╯
•📘 OTROS-MENUS.li
╭───╯
☯️]▸ menunsfw
☯️]▸ menurandom
╰───╮╭───╯
•🕹 JUEGOS-USERS.li
╭───╯
☯️]▸ follar
☯️]▸ besar
☯️]▸ kill
☯️]▸ sad
☯️]▸ pout
☯️]▸ reirse
☯️]▸ abrazar
☯️]▸ sonrojar
☯️]▸ 69
☯️]▸ cum
☯️]▸ sexo
☯️]▸ rusa
☯️]▸ asustar
☯️]▸ timido
☯️]▸ bofetada
☯️]▸ dormir
☯️]▸ lesbiana
☯️]▸ acariciar
☯️]▸ lamer
☯️]▸ nalguear
☯️]▸ chupartetas
☯️]▸ formarpareja
☯️]▸ blowjob
☯️]▸ gay
☯️]▸ top
☯️]▸ love
☯️]▸ piropo
☯️]▸ refran
☯️]▸ chiste
☯️]▸ oracion
☯️]▸ consejo
☯️]▸ memes`, "99999999999999999999999999999999999999999999", true)
}

handler.command = ['menu', 'menú', 'memu', 'memú', 'help', 'comandos', 'ayuda', 'commands', 'commandos']
handler.group = true;
export default handler
