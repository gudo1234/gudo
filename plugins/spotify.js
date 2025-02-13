/*import axios from 'axios';
import fetch from 'node-fetch';

let handler = async (m, { conn, text, usedPrefix, command }) => {

    if (!text) return conn.reply(m.chat, `${e} Por favor proporciona el nombre de una canción o artista.`, m);

    try {
        let songInfo = await spotifyxv(text);
        if (!songInfo.length) throw `${e} No se encontró la canción.`;
        let song = songInfo[0];
        const res = await fetch(`https://apis-starlights-team.koyeb.app/starlight/spotifydl?url=${song.url}`);
        const data = await res.json();
        if (!data || !data.music) throw "✧ No se pudo obtener el enlace de descarga.";

        const info = `❀ *Descargando »* ${data.title}\n\n> ✧ *Artista »* ${data.artist}\n> ✰ *Álbum »* ${song.album}\n> ⚡︎ *Duración »* ${song.duracion}\n> ✿ *Enlace »* ${data.spotify}\n\n${dev}`;

        await conn.sendMessage(m.chat, { text: info, contextInfo: { forwardingScore: 9999999, isForwarded: true, 
        externalAdReply: {
            showAdAttribution: true,
            containsAutoReply: true,
            renderLargerThumbnail: true,
            title: 'Spotify Music',
            body: wm,
            mediaType: 1,
            thumbnailUrl: data.thumbnail,
            mediaUrl: data.music,
            sourceUrl: data.music
        }}}, { quoted: m });

        await conn.sendMessage(m.chat, { audio: { url: data.music }, fileName: `${data.title}.mp3`, mimetype: 'audio/mpeg' }, { quoted: m });

    } catch (e1) {
        m.reply(`${e} *Error:* ${e1.message || e1}`);
    }
};

handler.command = ['spotify', 'music'];
handler.group = true
export default handler;

async function spotifyxv(query) {
    let token = await tokens();
    let response = await axios({
        method: 'get',
        url: 'https://api.spotify.com/v1/search?q=' + encodeURIComponent(query) + '&type=track',
        headers: {
            Authorization: 'Bearer ' + token,
        },
    });
    const tracks = response.data.tracks.items;
    const results = tracks.map((track) => ({
        name: track.name,
        artista: track.artists.map((artist) => artist.name),
        album: track.album.name,
        duracion: timestamp(track.duration_ms),
        url: track.external_urls.spotify,
        imagen: track.album.images.length ? track.album.images[0].url : '',
    }));
    return results;
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
    });
    return response.data.access_token;
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
}*/

import pkg from 'sanzy-spotifydl'
let { downloadTrack, downloadAlbum, search } = pkg
import fetch from 'node-fetch'
import pkg2 from 'fluid-spotify.js'
let { Spotify } = pkg2

let handler = async (m, { conn, text }) => {
 if (!text) return conn.reply(m.chat,`${e} Ingresa el enlace de algún Track, PlayList o Álbum de Spotify.`, m) 
 let isSpotifyUrl = text.match(/^(https:\/\/open\.spotify\.com\/(album|track|playlist)\/[a-zA-Z0-9]+)/i);
 if (!isSpotifyUrl && !text) return conn.reply(m.chat, `${e} Ingresa el enlace de algún Track, Playlist o Álbum de Spotify.`, m)
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
await conn.sendFile(m.chat, img, 'thumbnail.jpg', txt, m)
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
await conn.sendFile(m.chat, img, 'thumbnail.jpg', txt, m)
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
await conn.sendFile(m.chat, img, 'thumbnail.jpg', txt, m)
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
await conn.sendFile(m.chat, img, 'thumbnail.jpg', txt, m)
await conn.sendFile(m.chat, dlspoty, searchTrack.title + '.mp3', null, m, false, { mimetype: 'audio/mpeg', asDocument: user.useDocument })
await m.react('✅')
}  
} catch {
await m.react('✖️')
}}

handler.command = ['spotify', 'music', 'músic']
export default handler
