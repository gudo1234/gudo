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
let pp = await conn.profilePictureUrl(m.messageStubParameters[0], 'image').catch(_ => 'https://qu.ax/casQP.jpg')
  let im = await (await fetch(`${pp}`)).buffer()
let delirius = await axios.get(`https://delirius-apiofc.vercel.app/tools/country?text=${PhoneNumber('+' + m.sender.replace('@s.whatsapp.net', '')).getNumber('international')}`)
  let paisdata = delirius.data.result
  let mundo = paisdata ? `${paisdata.name} ${paisdata.emoji}` : 'Desconocido'
/*let api = await axios.get(`https://api.dorratz.com/v2/pais/${PhoneNumber('+' + m.sender.replace('@s.whatsapp.net', '')).getNumber('international')}`)
  m.reply(api.bandera)*/
m.react('🚦')
let or = ['evento', 'anuncio', 'boton', 'botons', 'bot'];
  let media = or[Math.floor(Math.random() * 5)]
let tx = `${e} _вιєиνєиι∂σ α ℓσѕ ¢σмαи∂σѕ *${m.pushName}*_\n╭──┄┄─◌──┄┄ 🍋‍🟩 ̥˚◌\n*🥀Buenos días🌅tardes🌇noches🌆*\n╰── ── •◌• ── ─ 🔖‧₊˚`
let txt = `🕹️ *Prefijo* (#.!/)
•🪪 INFO-USUARIO.li
╭───╯
*🚩]▸Nombre:* ${m.pushName}
🌎 *Pais:* ${mundo}
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
•🤖JADIBOT.li
╭───╯
☯️]▸ serbot --code
☯️]▸ deletesesion
☯️]▸ bots
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
☯️]▸ promote
☯️]▸ demote
☯️]▸ addcmd
☯️]▸ delcmd
☯️]▸ encuesta
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
☯️]▸ memes`
if (media === 'evento')
conn.sendEvent(m.chat, `${rpt}`, `${txt}`, "99999999999999999999999999999999999999999999", true)

if (media === 'anuncio')
conn.sendMessage(m.chat, { text: `${tx}\n\n${txt}`, contextInfo: { externalAdReply: {title: `${wm}`, body: `${await conn.getName(m.chat)}`, thumbnailUrl: imagen4, thumbnail: imagen4, showAdAttribution: true, sourceUrl: canal, mediaType: 1, renderLargerThumbnail: true}}} , { quoted: m })

if (media === 'boton')
conn.sendMessage(m.chat, {
    image: img.getRandom(),
    caption: `${tx}\n\n${canal}\n\n${txt}`,
    footer: '𝗉𝗈𝗐𝖾𝗋𝖾𝖽 ⓒ 𝖨𝗓𝗎𝗆𝗂-𝖻𝗈𝗍 𝟤𝟢𝟤𝟢-𝟤𝟢𝟤5.',
    buttons: [
      {
        buttonId: ".owner",
        buttonText: {
          displayText: "🚩ᴏᴡɴᴇʀ",
        },
        type: 1,
      },
      {
        buttonId: ".trizte",
        buttonText: {
          displayText: "🎉ᴛᴇsᴛ",
        },
        type: 1,
      },
    ],
    viewOnce: true,
    headerType: 4,
    mentions: [m.sender],
  }, { quoted: fkontak});

if (media === 'botons')
conn.sendButtonMessages(m.chat, [
[`${tx}\n\n${txt}`, '𝗉𝗈𝗐𝖾𝗋𝖾𝖽 ⓒ 𝖨𝗓𝗎𝗆𝗂-𝖻𝗈𝗍 𝟤𝟢𝟤𝟢-𝟤𝟢𝟤5.', 'https://qu.ax/KCesv.mp4', [
[`${e}ᴀᴛᴏᴍ`, `.grupos`]
], null, [
['🌐ᴄᴀɴᴀʟ', canal]],
[]
]], fkontak)

if (media === 'bot')
conn.sendMessage(m.chat, {
 image: img.getRandom(),
 caption: `${tx}\n\n${txt}`,
footer: '𝗉𝗈𝗐𝖾𝗋𝖾𝖽 ⓒ 𝖨𝗓𝗎𝗆𝗂-𝖻𝗈𝗍 𝟤𝟢𝟤𝟢-𝟤𝟢𝟤5.',
 contextInfo: {
mentionedJid: [m.sender],
forwardingScore: 999,
isForwarded: true,
externalAdReply: {
  showAdAttribution: true, 
  title: wm,
  body: `${await conn.getName(m.chat)}`,
  thumbnailUrl: im,
  thumbnail: im,
  sourceUrl: canal,
  mediaType: 1,
  renderLargerThumbnail: false
}}, 
  buttons: [
  {
 buttonId: '.owner',
 buttonText: {
displayText: `${e} ᴏᴡɴᴇʀ`
 },
 type: 1,
  },
  {
 buttonId: '.trizte',
 buttonText: {
displayText: '🎉ᴛᴇsᴛ'
 },
 type: 1,
  },
  {
 type: 4,
 nativeFlowInfo: {
name: 'single_select',
paramsJson: JSON.stringify({
  title: 'Dont click',
  sections: [
 {
title: `${e} Librería random`,
highlight_label: '',
rows: [
  {
 header: '',
 title: '🥵 Menu Nsfw',
 description: ``, 
 id: '.menunsfw',
  },
  {
 header: '',
 title: 'Ping⚡',
 description: ``, 
 id: '.ping',
  },
  {
 header: '',
 title: '🖼️ Menu Random',
 description: ``, 
 id: '.menurandom',
  },
],
 },
  ],
}),
 },
  },
  ],
  headerType: 1,
  viewOnce: true
})

}

handler.command = ['menu', 'menú', 'memu', 'memú', 'help', 'comandos', 'ayuda', 'commands', 'commandos']
//handler.group = true;
export default handler
