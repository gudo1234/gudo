/*import axios from 'axios'
import fetch from 'node-fetch'
import { youtubedl, youtubedlv2 } from '@bochilteam/scraper'
import search from 'yt-search'

async function spotifyxv(query) {
  let token = await tokens();
  let response = await axios({
    method: 'get',
    url: 'https://api.spotify.com/v1/search?q=' + encodeURIComponent(query) + '&type=track',
    headers: {
      Authorization: 'Bearer ' + token,
    },
  })
  const tracks = response.data.tracks.items
  const results = tracks.map((track) => ({
    name: track.name,
    artista: track.artists.map((artist) => artist.name),
    album: track.album.name,
    duracion: timestamp(track.duration_ms),
    url: track.external_urls.spotify,
    imagen: track.album.images.length ? track.album.images[0].url : '',
  }))
  return results
}

async function tokens() {
  const response = await axios({
    method: 'post',
    url: 'https://accounts.spotify.com/api/token',
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded',
      Authorization: 'Basic ' + Buffer.from('acc6302297e040aeb6e4ac1fbdfd62c3:0e8439a1280a43aba9a5bc0a16f3f009').toString('base64'),
    },
    data: 'grant_type=client_credentials',
  })
  return response.data.access_token
}

function timestamp(time) {
  const minutes = Math.floor(time / 60000);
  const seconds = Math.floor((time % 60000) / 1000);
  return minutes + ':' + (seconds < 10 ? '0' : '') + seconds;
}

async function getBuffer(url, options) {
  try {
    options = options || {};
    const res = await axios({
      method: 'get',
      url,
      headers: {
        DNT: 1,
        'Upgrade-Insecure-Request': 1,
      },
      ...options,
      responseType: 'arraybuffer',
    });
    return res.data;
  } catch (err) {
    return err;
  }
}

async function getTinyURL(text) {
try {
    let response = await axios.get(`https://tinyurl.com/api-create.php?url=${text}`);
    return response.data;
  } catch (error) {
    return text;
  }
}

let handler = async (m, { conn, text, usedPrefix, command }) => {
if (!text) throw `*Uso Correcto*\n\nEjemplo:\n${usedPrefix + command} save yours tear`
try {
await m.react('⬆️')
let songInfo = await spotifyxv(text)
if (!songInfo.length) throw `*No se encontró una canción.*`
let res = songInfo[0]
let fileSizeInMB = (await getBuffer(res.url)).length / (1024 * 1024)
let shortURL = await getTinyURL(res.url)
let name = await conn.getName(m.sender)
await conn.sendMessage(m.chat, { text: global.espere + `*${name}*`, contextInfo: { externalAdReply: {title: `${wm}`, body: `${await conn.getName(m.chat)}`, humbnailUrl: imagen4, thumbnail: imagen4, showAdAttribution: true, sourceUrl: canal}}} , { quoted: fkontak })
let info = `\t\t\tli.*📀SPOTịFY📀*.il\n\t\t\t*Nombre:* ${res.name}\n\t\t\t*Artista:* ${res.artista.join(', ')}\n\t\t\t*Album:* ${res.album}\n\t\t\t*Duracion:* ${res.duracion}\n\t\t\t*Enlace:* ${shortURL}`
let resImg = await fetch(res.imagen)
let thumbb = await resImg.buffer()
let { videos } = await search(res.name)
let q = '128kbps'
let v = videos[0].url
let yt = await youtubedl(v).catch(async (_) => await youtubedlv2(v))
let dl_url = await yt.audio[q].download()
let ttl = await yt.title
let size = await yt.audio[q].fileSizeH
conn.sendMessage(m.chat, { audio: { url: dl_url }, fileName: `${ttl}.mp3`, mimetype: 'audio/mpeg' }, { quoted: m })
let img = await getBuffer(res.imagen)
await conn.sendMessage(m.chat, { text: info, contextInfo: { mentionedJid: [m.sender], forwardingScore: 90, externalAdReply: { title: '꙳🧧𓆩ίʑ᭘ɱί-ⲃⲟτ𓆪🧧꙳', body: 'spotify', thumbnail: img, thumbnailUrl: img, sourceUrl: 'Loadding...', mediaType: 1 }}}, { quoted: m })
await m.react('⬇️')  
} catch (error) {
}}
handler.command = ['spotify', 'music']
handler.group = true;
export default handler*/
/* 

[ Canal Principal ] :
https://whatsapp.com/channel/0029VaeQcFXEFeXtNMHk0D0n

[ Canal Rikka Takanashi Bot ] :
https://whatsapp.com/channel/0029VaksDf4I1rcsIO6Rip2X

[ Canal StarlightsTeam] :
https://whatsapp.com/channel/0029VaBfsIwGk1FyaqFcK91S

[ HasumiBot FreeCodes ] :
https://whatsapp.com/channel/0029Vanjyqb2f3ERifCpGT0W
*/

// *[ ❀ PLAY 2 (video) ]*
import fetch from 'node-fetch'
import yts from 'yt-search'

let handler = async (m, { conn, text, args }) => {
if (!text) {
return m.reply("❀ ingresa un texto de lo que quieres buscar")
}
    
let ytres = await search(args.join(" "))
let txt = `- *Título* : ${ytres[0].title}
- *Duración* : ${ytres[0].timestamp}
- *Publicado* : ${ytres[0].ago}
- *Canal* : ${ytres[0].author.name || 'Desconocido'}
- *Url* : ${'https://youtu.be/' + ytres[0].videoId}`
await conn.sendFile(m.chat, ytres[0].image, 'thumbnail.jpg', txt, m)
    
try {
let api = await fetch(`https://api.giftedtech.my.id/api/download/dlmp4?apikey=gifted&url=${ytres[0].url}`)
let json = await api.json()
let { quality, title, download_url } = json.result
await conn.sendMessage(m.chat, { video: { url: download_url }, caption: `${title}`, mimetype: 'video/mp4', fileName: `${title}` + `.mp4`}, {quoted: m })
} catch (error) {
console.error(error)
}}

handler.command = /^(plau)$/i

export default handler

async function search(query, options = {}) {
  let search = await yts.search({ query, hl: "es", gl: "ES", ...options })
  return search.videos
}
