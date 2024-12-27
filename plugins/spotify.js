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
import pkg from 'sanzy-spotifydl'
let { downloadTrack, downloadAlbum, search } = pkg
import fetch from 'node-fetch'
import pkg2 from 'fluid-spotify.js'
let { Spotify } = pkg2

let handler = async (m, { conn, text }) => {
 if (!text) return conn.reply(m.chat,`🚩 Ingresa el enlace de algún Track, PlayList o Álbum de Spotify.`, m) 
 let isSpotifyUrl = text.match(/^(https:\/\/open\.spotify\.com\/(album|track|playlist)\/[a-zA-Z0-9]+)/i);
 if (!isSpotifyUrl && !text) return conn.reply(m.chat, `🚩 Ingresa el enlace de algún Track, Playlist o Álbum de Spotify.`, m)
let user = global.db.data.users[m.sender]
await m.react('🕓')
try {
if (isSpotifyUrl) {
if (isSpotifyUrl[2] === 'album') {
let album = await downloadAlbum(isSpotifyUrl[0])
let img = await (await fetch(`${album.metadata.cover}`)).buffer()
let txt = `*乂  S P O T I F Y  -  D O W N L O A D*\n\n`
    txt += `	✩  *Album* : ${album.metadata.title}\n`
    txt += `	✩   *Artista* :${album.metadata.artists}\n`
    txt += `	✩   *Publicado* : ${album.metadata.releaseDate}\n`   
    txt += `	✩   *Tracks totales* : ${album.trackList.length}\n\n`   
    txt += `*- ↻ Los audios se estan enviando espera un momento, soy lenta. . .*`
await conn.sendFile(m.chat, img, 'thumbnail.jpg', txt, m, null, rcanal)
for (let i = 0; i < album.trackList.length; i++) {
await conn.sendFile(m.chat, album.trackList[i].audioBuffer, album.trackList[i].metadata.name + '.mp3', null, m, false, { mimetype: 'audio/mpeg', asDocument: user.useDocument })
await m.react('✅')
}
} else if (isSpotifyUrl[2] === 'track') {
let track = await downloadTrack(isSpotifyUrl[0])
let dlspoty = track.audioBuffer
let img = await (await fetch(`${track.imageUrl}`)).buffer()
let txt = `*乂  S P O T I F Y  -  D O W N L O A D*\n\n`
    txt += `	✩   *Título* : ${track.title}\n`
    txt += `	✩   *Artista* : ${track.artists}\n`
    txt += `	✩   *Duración* : ${track.duration}\n`
    txt += `	✩   *Album* : ${track.album.name}\n`                 
    txt += `	✩   *Publicado* : ${track.album.releasedDate}\n\n`   
    txt += `*- ↻ El audio se esta enviando espera un momento, soy lenta. . .*`
await conn.sendFile(m.chat, img, 'thumbnail.jpg', txt, m, null, rcanal)
await conn.sendFile(m.chat, dlspoty, track.title + '.mp3', null, m, false, { mimetype: 'audio/mpeg', asDocument: user.useDocument })
await m.react('✅')
} else if (isSpotifyUrl[2] === 'playlist') {
let infos = new Spotify({
clientID: "7fb26a02133d463da465671222b9f19b",
clientSecret: "d4e6f8668f414bb6a668cc5c94079ca1",
})
let playlistId = isSpotifyUrl[0].split('/').pop()
let playlistInfoByID = await infos.getPlaylist(playlistId)
let tracks = playlistInfoByID.tracks.items
let img = await (await fetch(`${playlistInfoByID.images[0].url}`)).buffer()
let txt = `*乂  S P O T I F Y  -  D O W N L O A D*\n\n`
    txt += `	✩   *Playlist* : ${playlistInfoByID.name}\n`
    txt += `	✩   *Tracks totales* : ${tracks.length}\n\n`
    txt += `*- ↻ Los audios se estan enviando espera un momento, soy lenta. . .*`
await conn.sendFile(m.chat, img, 'thumbnail.jpg', txt, m, null, rcanal)
let target = m.chat
if (m.isGroup && tracks.length > 20) {
target = m.sender;
}
for (let i = 0; i < tracks.length; i++) {
let track = await downloadTrack(tracks[i].track.external_urls.spotify)
await conn.sendFile(m.chat, track.audioBuffer, tracks[i].track.name + '.mp3', null, m, false, { mimetype: 'audio/mpeg', asDocument: user.useDocument })
await m.react('✅')
}}
} else {
let searchTrack = await downloadTrack(text)
let dlspoty = searchTrack.audioBuffer
let img = await (await fetch(`${searchTrack.imageUrl}`)).buffer()
let txt = `*乂  S P O T I F Y  -  D O W N L O A D*\n\n`
    txt += `	✩   *Título* : ${searchTrack.title}\n`
    txt += `	✩   *Artista* : ${searchTrack.artists}\n`
    txt += `	✩   *Duración* : ${searchTrack.duration}\n`
    txt += `	✩   *Album* : ${searchTrack.album.name}\n`                 
    txt += `	✩   *Publicado* : ${searchTrack.album.releasedDate}\n\n`   
    txt += `*- ↻ El audio se esta enviando espera un momento, soy lenta. . .*`
await conn.sendFile(m.chat, img, 'thumbnail.jpg', txt, m, null, rcanal)
await conn.sendFile(m.chat, dlspoty, searchTrack.title + '.mp3', null, m, false, { mimetype: 'audio/mpeg', asDocument: user.useDocument })
await m.react('✅')
}  
} catch {
await m.react('✖️')
}}
handler.tags = ['downloader']
handler.help = ['spotify']
handler.command = ['spotify']
export default handler
