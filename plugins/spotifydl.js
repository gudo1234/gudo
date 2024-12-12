import pkg from 'sanzy-spotifydl'; 
const { downloadTrack, downloadAlbum, search } = pkg; 
import fetch from 'node-fetch';
import pkg2 from 'fluid-spotify.js';
const { Spotify } = pkg2;

const handler = async (m, { conn, text }) => {
  const datas = global
  const idioma = datas.db.data.users[m.sender].language
  //const _translate = JSON.parse(fs.readFileSync(`./language/${idioma}.json`))
  //const tradutor = _translate.plugins.descargas_spotifypro

 if (!text) throw `\`🧧 Ingrese un texto, url de spotify o album...\``; 
 const isSpotifyUrl = text.match(/^(https:\/\/open\.spotify\.com\/(album|track|playlist)\/[a-zA-Z0-9]+)/i);
 if (!isSpotifyUrl && !text) throw `xd`;
  try {
     if (isSpotifyUrl) {
      if (isSpotifyUrl[2] === 'album') {
        const album = await downloadAlbum(isSpotifyUrl[0]);
        const img = await (await fetch(`${album.metadata.cover}`)).buffer()  
        let spotifyi = `\`💽DOWNLOADER SPOTIFYDL\`\n\n`
          spotifyi += `*ALBUM:* ${album.metadata.title}\n`
          spotifyi += `*Artista:* ${album.metadata.artists}\n`
          spotifyi += `*Publicado:* ${album.metadata.releaseDate}\n`   
          spotifyi += `*Tracks totales:* ${album.trackList.length}\n\n`   
          spotifyi += `> Los audios se están enviando, espere un momemto.`
          await m.react('✅')
        await conn.sendMessage(m.chat, {text: spotifyi.trim(), contextInfo: {forwardingScore: 9999999, isForwarded: true, "externalAdReply": {"showAdAttribution": true, "containsAutoReply": true, "renderLargerThumbnail": true, "title": global.titulowm2, "containsAutoReply": true, "mediaType": 1, "thumbnail": img, "thumbnailUrl": img, "mediaUrl": isSpotifyUrl[0], "sourceUrl": isSpotifyUrl[0]}}}, {quoted: m});
        for (let i = 0; i < album.trackList.length; i++) {
            await conn.sendMessage(m.chat, {audio: album.trackList[i].audioBuffer, fileName: `${album.trackList[i].metadata.name}.mp3`, mimetype: 'audio/mpeg'}, {quoted: m});
}
          
      } else if (isSpotifyUrl[2] === 'track') {
        const track = await downloadTrack(isSpotifyUrl[0]);
        const dlspoty = track.audioBuffer;
        const img = await (await fetch(`${track.imageUrl}`)).buffer()  
        let spotifyi = `\`💽DOWNLOADER SPOTIFYDL\`\n\n`
          spotifyi += `*Titulo:* ${track.title}\n`
          spotifyi += `*Artista:* ${track.artists}\n`
          spotifyi += `*Duración:* ${track.duration}\n`
          spotifyi += `*Album:* ${track.album.name}\n`                 
          spotifyi += `*Publicado:* ${track.album.releasedDate}\n\n`   
          spotifyi += `> El audio se está enviando espere un momento.`
          await m.react('✅')
        await conn.sendMessage(m.chat, {text: spotifyi.trim(), contextInfo: {forwardingScore: 9999999, isForwarded: true, "externalAdReply": {"showAdAttribution": true, "containsAutoReply": true, "renderLargerThumbnail": true, "title": global.titulowm2, "containsAutoReply": true, "mediaType": 1, "thumbnail": img, "thumbnailUrl": img, "mediaUrl": track.url, "sourceUrl": track.url}}}, {quoted: m});
        await conn.sendMessage(m.chat, {audio: dlspoty, fileName: `${track.title}.mp3`, mimetype: 'audio/mpeg'}, {quoted: m});
          
      } else if (isSpotifyUrl[2] === 'playlist') {
          const infos = new Spotify({
              clientID: "7fb26a02133d463da465671222b9f19b",
              clientSecret: "d4e6f8668f414bb6a668cc5c94079ca1",
          });      
          const playlistId = isSpotifyUrl[0].split('/').pop();
          const playlistInfoByID = await infos.getPlaylist(playlistId);
          const tracks = playlistInfoByID.tracks.items;
          const img = await (await fetch(`${playlistInfoByID.images[0].url}`)).buffer()  
        let spotifyi = `\`💽DOWNLOADER SPOTIFYDL\`\n\n`
          spotifyi += `*Nombre:* ${playlistInfoByID.name}\n`
          spotifyi += `*Tracks totales:* ${tracks.length}\n\n`
          spotifyi += `> Enviando.`
          await m.react('✅')
        await conn.sendMessage(m.chat, {text: spotifyi.trim(), contextInfo: {forwardingScore: 9999999, isForwarded: true, "externalAdReply": {"showAdAttribution": true, "containsAutoReply": true, "renderLargerThumbnail": true, "title": global.titulowm2, "containsAutoReply": true, "mediaType": 1, "thumbnail": img, "thumbnailUrl": img, "mediaUrl": playlistInfoByID.external_urls.spotify, "sourceUrl": playlistInfoByID.external_urls.spotify}}}, {quoted: m});
          let target = m.chat;
          if (m.isGroup && tracks.length > 20) {
              target = m.sender;
          }
for (let i = 0; i < tracks.length; i++) {
    const track = await downloadTrack(tracks[i].track.external_urls.spotify);
    await conn.sendMessage(target, { audio: track.audioBuffer, fileName: `${tracks[i].track.name}.mp3`, mimetype: 'audio/mpeg' }, { quoted: m });
    }
}
     } else {
        const searchTrack = await downloadTrack(text);
        const dlspoty = searchTrack.audioBuffer;
        const img = await (await fetch(`${searchTrack.imageUrl}`)).buffer()  
        let spotifyi = `\`💽DOWNLOADER SPOTIFYDL\`\n\n`
          spotifyi += `*Titulo:* ${searchTrack.title}\n`
          spotifyi += `*Artista:* ${searchTrack.artists}\n`
          spotifyi += `*Duración:* ${searchTrack.duration}\n`
          spotifyi += `*Album:* ${searchTrack.album.name}\n`                 
          spotifyi += `*Publicado:* ${searchTrack.album.releasedDate}\n\n`   
          spotifyi += `> El audio se está enviando, espere un momento.`
 await m.react('✅')
        await conn.sendMessage(m.chat, {text: spotifyi.trim(), contextInfo: {forwardingScore: 9999999, isForwarded: true, "externalAdReply": {"showAdAttribution": true, "containsAutoReply": true, "renderLargerThumbnail": true, "title": global.titulowm2, "containsAutoReply": true, "mediaType": 1, "thumbnail": img, "thumbnailUrl": img, "mediaUrl": searchTrack.url, "sourceUrl": searchTrack.url}}}, {quoted: m});
        await conn.sendMessage(m.chat, {audio: dlspoty, fileName: `${searchTrack.title}.mp3`, mimetype: 'audio/mpeg'}, {quoted: m});
}  
  } catch (error) {
    console.error(error);
    throw error;
  }
};
handler.command = /^(spotifydl|spotifypro|spotifidl)$/i;
handler.group = true;
export default handler;
