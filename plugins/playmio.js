import { youtubedl, youtubedlv2 } from '@bochilteam/scraper'
import fetch from 'node-fetch'
import yts from 'yt-search'
import ytdl from 'ytdl-core'
import axios from 'axios'
const LimitAud = 725 * 1024 * 1024; //700MB
const LimitVid = 425 * 1024 * 1024; //425MB
const handler = async (m, {conn, command, args, text, usedPrefix}) => {

if (command == 'play' || command == 'mp3') {
if (!text) return conn.reply(m.chat, `🧧 Ejemplo, ${usedPrefix + command} diles`, m); 
await m.react('🔵');
const yt_play = await search(args.join(' '));
const ytplay2 = await yts(text);
let name = await conn.getName(m.sender)
conn.sendMessage(m.chat, { text: `Espere un momento ${name}`, contextInfo: {
    mentionedJid: [m.sender],
    groupMentions: [],
    isForwarded: true,
    forwardedNewsletterMessageInfo: {
      newsletterJid: '120363285614743024@newsletter',
      newsletterName: `꙳🧧𓆩ίʑ᭘ɱί-ⲃⲟτ𓆪🧧꙳`,
      serverMessageId: 0
    },
    businessMessageForwardInfo: { businessOwnerJid: '50492280729@s.whatsapp.net' },
    forwardingScore: 9999,
    externalAdReply: {
      title: `${await conn.getName(m.chat)}`,
      body: '©️ Powered By 𓆩᮫࣭݊͜?☃️࣭݊ျ֘▹ⲉ꯭𝖽α꯭૨‹࣭݊⸸࣭݊͜𓆪',
      thumbnailUrl: imagen4,
thumbnail: imagen4,
      sourceUrl: 'https://www.atom.bio/edar_',
      //mediaType: 1,
      //renderLargerThumbnail: true
    }
  }},{quoted: fkontak})
const texto1 = `\`🦖Título:\`
° ${yt_play[0].title}
\`📆Publicado\` 
° ${yt_play[0].ago}
\`🕑Duración\`
° ${secondString(yt_play[0].duration.seconds)}

> _Descargado el audio 🔊, aguarde un momento...._`.trim();

await conn.sendFile(m.chat, yt_play[0].thumbnail, 'error.jpg', texto1, m, null, rcanal);
try {
await m.react('🕒');
const apiUrl = `https://deliriussapi-oficial.vercel.app/download/ytmp4?url=${encodeURIComponent(yt_play[0].url)}`;
const apiResponse = await fetch(apiUrl);
const delius = await apiResponse.json();
if (!delius.status) {
return m.react('🕒')}
const downloadUrl = delius.data.download.url;
await conn.sendMessage(m.chat, { audio: { url: downloadUrl }, mimetype: 'audio/mpeg' }, { quoted: m });
await m.react('🕒');
} catch (e1) {
try { 
await m.react('🕒');
let q = '128kbps'
const yt = await youtubedl(yt_play[0].url).catch(async _ => await youtubedlv2(yt_play[0].url))
const dl_url = await yt.audio[q].download()
const ttl = await yt.title
const size = await yt.audio[q].fileSizeH
await conn.sendFile(m.chat, dl_url, ttl + '.mp3', null, m, false, { mimetype: 'audio/mp4' })
await m.react('🕒');
} catch (e2) {
try {  
await m.react('🕒'); 
const downloadUrl = await fetch9Convert(yt_play[0].url); 
await conn.sendFile(m.chat, downloadUrl, 'audio.mp3', null, m, false, { mimetype: 'audio/mp4' })
await m.react('🕒');
} catch (e3) {
try {
await m.react('🕒');
const downloadUrl = await fetchY2mate(yt_play[0].url);
await conn.sendFile(m.chat, downloadUrl, 'audio.mp3', null, m, false, { mimetype: 'audio/mp4' })
await m.react('🕒');
} catch (e4) {
try {
await m.react('🕒');
const res = await fetch(`https://api.zenkey.my.id/api/download/ytmp3?apikey=zenkey&url=${yt_play[0].url}`)
const audioData = await res.json()
if (audioData.status && audioData.result?.downloadUrl) {
await conn.sendMessage(m.chat, { audio: { url: audioData.result.downloadUrl }, mimetype: 'audio/mpeg' }, { quoted: m });
await m.react('🕒');
}} catch (e5) {
try {
await m.react('🕒');
let d2 = await fetch(`https://exonity.tech/api/ytdlp2-faster?apikey=adminsepuh&url=${yt_play[0].url}`);
let dp = await d2.json();
const audiop = await getBuffer(dp.result.media.mp3);
const fileSize = await getFileSize(dp.result.media.mp3);
await conn.sendMessage(m.chat, { audio: { url: audiop }, mimetype: 'audio/mpeg' }, { quoted: m });
await m.react('🔵');
if (fileSize > LimitAud) return await conn.sendMessage(m.chat, { document: { url: audiop }, mimetype: 'audio.mp3', fileName: `${yt_play[0].title}.mp3` }, { quoted: m });
await m.react('🕒');
} catch (e) {    
await m.react('🕒');
console.log(e);
}}}}}}}

if (command == 'play2' || command == 'mp4') {
if (!text) return conn.reply(m.chat, `🧧${usedPrefix + command} diles`, m);
await m.react('🔵');

const yt_play = await search(args.join(' '));
const ytplay2 = await yts(text);
let name = await conn.getName(m.sender)
conn.sendMessage(m.chat, { text: `Espere un momento ${name}`, contextInfo: {
    mentionedJid: [m.sender],
    groupMentions: [],
    isForwarded: true,
    forwardedNewsletterMessageInfo: {
      newsletterJid: '120363285614743024@newsletter',
      newsletterName: `꙳🧧𓆩ίʑ᭘ɱί-ⲃⲟτ𓆪🧧꙳`,
      serverMessageId: 0
    },
    businessMessageForwardInfo: { businessOwnerJid: '50492280729@s.whatsapp.net' },
    forwardingScore: 9999,
    externalAdReply: {
      title: `${await conn.getName(m.chat)}`,
      body: '©️ Powered By 𓆩᮫࣭݊͜?☃️࣭݊ျ֘▹ⲉ꯭𝖽α꯭૨‹࣭݊⸸࣭݊͜𓆪',
      thumbnailUrl: imagen4,
thumbnail: imagen4,
      sourceUrl: 'https://www.atom.bio/edar_',
      //mediaType: 1,
      //renderLargerThumbnail: true
    }
  }},{quoted: fkontak})
const texto1 = `\`🦖Título:\`
° ${yt_play[0].title}
\`📆Publicado\` 
° ${yt_play[0].ago}
\`🕑Duración\`
° ${secondString(yt_play[0].duration.seconds)}

> _Descargado su video 📽, aguarde un momento...._`.trim();

await conn.sendFile(m.chat, yt_play[0].thumbnail, 'error.jpg', texto1, m, null, rcanal);
try {
await m.react('🕒');
const apiUrl = `https://deliriussapi-oficial.vercel.app/download/ytmp4?url=${encodeURIComponent(yt_play[0].url)}`;
const apiResponse = await fetch(apiUrl);
const delius = await apiResponse.json();
if (!delius.status) return m.react('🕒');
const downloadUrl = delius.data.download.url;
const fileSize = await getFileSize(downloadUrl);
if (fileSize > LimitVid) {
await conn.sendMessage(m.chat, { document: { url: downloadUrl }, fileName: `${yt_play[0].title}.mp4`, caption: `${wm}` }, { quoted: m });
await m.react('🕒');
} else {
await conn.sendMessage(m.chat, { video: { url: downloadUrl }, fileName: `${yt_play[0].title}.mp4`, caption: `${wm}`, thumbnail: yt_play[0].thumbnail, mimetype: 'video/mp4' }, { quoted: m });
await m.react('🕒');
}} catch (e1) {
try {  
await m.react('🕒');  
let qu = args[1] || '360'
let q = qu + 'p'
const yt = await youtubedl(yt_play[0].url).catch(async _ => await youtubedlv2(yt_play[0].url))
const dl_url = await yt.video[q].download()
const ttl = await yt.title
const size = await yt.video[q].fileSizeH
await await conn.sendMessage(m.chat, { video: { url: dl_url }, fileName: `${ttl}.mp4`, mimetype: 'video/mp4', caption: `${wm}`, thumbnail: await fetch(yt.thumbnail) }, { quoted: m })
await m.react('🕒');
} catch (e2) {
try {    
await m.react('🕒');
const downloadUrl = await fetch9Convert(yt_play[0].url); 
await conn.sendMessage(m.chat, { video: { url: downloadUrl }, fileName: `${yt_play[0].title}.mp4`, caption: `${wm}`, thumbnail: yt_play[0].thumbnail, mimetype: 'video/mp4' }, { quoted: m });
await m.react('🕒');
} catch (e3) {
try {
await m.react('🕒');
const downloadUrl = await fetchY2mate(yt_play[0].url);
await conn.sendMessage(m.chat, { video: { url: downloadUrl }, fileName: `${yt_play[0].title}.mp4`, caption: `${wm}`, thumbnail: yt_play[0].thumbnail, mimetype: 'video/mp4' }, { quoted: m });
await m.react('🕒');
} catch (e4) {
try {
await m.react('✖️');
const videoInfo = await fetchInvidious(yt_play[0].url)
const downloadUrl = videoInfo.videoFormats.find(format => format.mimeType === "audio/mp4").url;
await conn.sendMessage(m.chat, { video: { url: downloadUrl }, fileName: `${yt_play[0].title}.mp4`, caption: `${wm}`, thumbnail: yt_play[0].thumbnail, mimetype: 'video/mp4' }, { quoted: m });
await m.react('🕒');
} catch (e5) {
try {
await m.react('🕒');
let searchh = await yts(yt_play[0].url)
let __res = searchh.all.map(v => v).filter(v => v.type == "video")
let infoo = await ytdl.getInfo('https://youtu.be/' + __res[0].videoId)
let ress = await ytdl.chooseFormat(infoo.formats, { filter: 'audioonly' })
conn.sendMessage(m.chat, { video: { url: downloadUrl }, fileName: `${yt_play[0].title}.mp4`, caption: `${wm}`, thumbnail: yt_play[0].thumbnail, mimetype: 'video/mp4' }, { quoted: m });
await m.react('🕒');
} catch (e6) {
try {
await m.react('🕒');
let d2 = await fetch(`https://exonity.tech/api/ytdlp2-faster?apikey=adminsepuh&url=${yt_play[0].url}`);
let dp = await d2.json();
const audiop = await getBuffer(dp.result.media.mp4);
const fileSize = await getFileSize(dp.result.media.mp4);
if (fileSize > LimitVid) {
await conn.sendMessage(m.chat, { document: { url: audiop }, fileName: `${yt_play[0].title}.mp4`, caption: `${wm}` }, { quoted: m });
await m.react('🕒');
} else {
await conn.sendMessage(m.chat, { video: { url: audiop }, fileName: `${yt_play[0].title}.mp4`, caption: `${wm}`, thumbnail: yt_play[0].thumbnail, mimetype: 'video/mp4' }, { quoted: m });
await m.react('🕒');
}} catch (e) {    
await m.react('🕒');
console.log(e);
}}}}}}}}

if (command == 'play3' || command == 'playdoc') {
if (!text) return conn.reply(m.chat, `🧧${usedPrefix + command} diles`, m);
await m.react('🕒');
const yt_play = await search(args.join(' '));
const ytplay2 = await yts(text);
let name = await conn.getName(m.sender)
conn.sendMessage(m.chat, { text: `Espere un momento ${name}`, contextInfo: {
    mentionedJid: [m.sender],
    groupMentions: [],
    isForwarded: true,
    forwardedNewsletterMessageInfo: {
      newsletterJid: '120363285614743024@newsletter',
      newsletterName: `꙳🧧𓆩ίʑ᭘ɱί-ⲃⲟτ𓆪🧧꙳`,
      serverMessageId: 0
    },
    businessMessageForwardInfo: { businessOwnerJid: '50492280729@s.whatsapp.net' },
    forwardingScore: 9999,
    externalAdReply: {
      title: `${await conn.getName(m.chat)}`,
      body: '©️ Powered By 𓆩᮫࣭݊͜?☃️࣭݊ျ֘▹ⲉ꯭𝖽α꯭૨‹࣭݊⸸࣭݊͜𓆪',
      thumbnailUrl: imagen4,
thumbnail: imagen4,
      sourceUrl: 'https://www.atom.bio/edar_',
      //mediaType: 1,
      //renderLargerThumbnail: true
    }
  }},{quoted: fkontak})
const texto1 = `\`🦖Título:\`
° ${yt_play[0].title}
\`📆Publicado\` 
° ${yt_play[0].ago}
\`🕑Duración\`
° ${secondString(yt_play[0].duration.seconds)}

> _Descargado el audio 🔊 en documento, aguarde un momento por favor...._`.trim();

await conn.sendFile(m.chat, yt_play[0].thumbnail, 'error.jpg', texto1, m, null, rcanal);
try {
await m.react('🔵');
const apiUrl = `https://deliriussapi-oficial.vercel.app/download/ytmp4?url=${encodeURIComponent(yt_play[0].url)}`;
const apiResponse = await fetch(apiUrl);
const delius = await apiResponse.json();
if (!delius.status) {
return m.react('🕒')}
const downloadUrl = delius.data.download.url;
await conn.sendMessage(m.chat, { document: { url: downloadUrl }, mimetype: 'audio/mpeg', fileName: `${yt_play[0].title}.mp3` }, { quoted: m });
await m.react('🕒');
} catch (e1) {
try {    
await m.react('🕒');
let q = '128kbps'
const yt = await youtubedl(yt_play[0].url).catch(async _ => await youtubedlv2(yt_play[0].url))
const dl_url = await yt.audio[q].download()
const ttl = await yt.title
const size = await yt.audio[q].fileSizeH
await conn.sendMessage(m.chat, { document: { url: dl_url }, mimetype: 'audio/mpeg', fileName: `${ttl}.mp3` }, { quoted: m });
await m.react('🔵');
} catch (e2) {
try { 
await m.react('🕒');  
const downloadUrl = await fetch9Convert(yt_play[0].url); 
await conn.sendMessage(m.chat, { document: { url: downloadUrl }, mimetype: 'audio/mpeg', fileName: `${yt_play[0].title}.mp3` }, { quoted: m });
await m.react('🕒');
} catch (e3) {
try {
await m.react('🕒');
const downloadUrl = await fetchY2mate(yt_play[0].url);
await conn.sendMessage(m.chat, { document: { url: downloadUrl }, mimetype: 'audio/mpeg', fileName: `${yt_play[0].title}.mp3` }, { quoted: m });
await m.react('🕒');
} catch (e4) {
try {
await m.react('🕒');
const res = await fetch(`https://api.zenkey.my.id/api/download/ytmp3?apikey=zenkey&url=${yt_play[0].url}`)
const audioData = await res.json()
if (audioData.status && audioData.result?.downloadUrl) {
await conn.sendMessage(m.chat, { document: { url: audioData.result.downloadUrl }, mimetype: 'audio/mpeg', fileName: `${yt_play[0].title}.mp3` }, { quoted: m });
await m.react('🕒');
}} catch (e5) {
try {
await m.react('🕒');
let d2 = await fetch(`https://exonity.tech/api/ytdlp2-faster?apikey=adminsepuh&url=${yt_play[0].url}`);
let dp = await d2.json();
const audiop = await getBuffer(dp.result.media.mp3);
const fileSize = await getFileSize(dp.result.media.mp3);
await conn.sendMessage(m.chat, { document: { url: audioData.result.downloadUrl }, mimetype: 'audio/mpeg', fileName: `${yt_play[0].title}.mp3` }, { quoted: m });
await m.react('🕒');
} catch (e) {    
await m.react('🕒');
console.log(e);
}}}}}}}

if (command == 'play4' || command == 'playdoc2') {
if (!text) return conn.reply(m.chat, `🧧${usedPrefix + command} diles`, m);
await m.react('🕒');
const yt_play = await search(args.join(' '));
const ytplay2 = await yts(text);
let name = await conn.getName(m.sender)
conn.sendMessage(m.chat, { text: `Espere un momento ${name}`, contextInfo: {
    mentionedJid: [m.sender],
    groupMentions: [],
    isForwarded: true,
    forwardedNewsletterMessageInfo: {
      newsletterJid: '120363285614743024@newsletter',
      newsletterName: `꙳🧧𓆩ίʑ᭘ɱί-ⲃⲟτ𓆪🧧꙳`,
      serverMessageId: 0
    },
    businessMessageForwardInfo: { businessOwnerJid: '50492280729@s.whatsapp.net' },
    forwardingScore: 9999,
    externalAdReply: {
      title: `${await conn.getName(m.chat)}`,
      body: '©️ Powered By 𓆩᮫࣭݊͜?☃️࣭݊ျ֘▹ⲉ꯭𝖽α꯭૨‹࣭݊⸸࣭݊͜𓆪',
      thumbnailUrl: imagen4,
thumbnail: imagen4,
      sourceUrl: 'https://www.atom.bio/edar_',
      //mediaType: 1,
      //renderLargerThumbnail: true
    }
  }},{quoted: fkontak})
const texto1 = `\`🦖Título:\`
° ${yt_play[0].title}
\`📆Publicado\` 
° ${yt_play[0].ago}
\`🕑Duración\`
° ${secondString(yt_play[0].duration.seconds)}

> _Descargado su video en documento, aguarde un momento por favor...._`.trim();

await conn.sendFile(m.chat, yt_play[0].thumbnail, 'error.jpg', texto1, m, null, rcanal);
try {
await m.react('🕒');
const apiUrl = `https://deliriussapi-oficial.vercel.app/download/ytmp4?url=${encodeURIComponent(yt_play[0].url)}`;
const apiResponse = await fetch(apiUrl);
const delius = await apiResponse.json();
if (!delius.status) return m.react('🕒');
const downloadUrl = delius.data.download.url;
//const fileSize = await getFileSize(downloadUrl);
await conn.sendMessage(m.chat, { document: { url: downloadUrl }, fileName: `${yt_play[0].title}.mp4`, caption: `${wm}`, thumbnail: yt_play[0].thumbnail, mimetype: 'video/mp4' }, { quoted: m })    
await m.react('🕒');
} catch (e1) {
try {
await m.react('🕒');
let d2 = await fetch(`https://exonity.tech/api/ytdlp2-faster?apikey=adminsepuh&url=${yt_play[0].url}`);
let dp = await d2.json();
const audiop = await getBuffer(dp.result.media.mp4);
await conn.sendMessage(m.chat, { document: { url: audiop }, fileName: `${yt_play[0].title}.mp4`, caption: null, thumbnail: yt_play[0].thumbnail, mimetype: 'video/mp4' }, { quoted: m })    
await m.react('🕒'); 
} catch (e2) {    
await m.react('🕒');
console.log(e2);
}}}

}
handler.help = ['play', 'play2', 'play3', 'play4', 'playdoc'];
handler.tags = ['descargas'];
handler.command = ['play', 'play2', 'play3', 'play4', 'mp3', 'mp4', 'playdoc', 'playdoc2']
handler.group = true;
export default handler;

async function search(query, options = {}) {
const search = await yts.search({query, hl: 'es', gl: 'ES', ...options});
return search.videos;
}

function MilesNumber(number) {
const exp = /(\d)(?=(\d{3})+(?!\d))/g;
const rep = '$1.';
const arr = number.toString().split('.');
arr[0] = arr[0].replace(exp, rep);
return arr[1] ? arr.join('.') : arr[0];
}

function secondString(seconds) {
seconds = Number(seconds);
const d = Math.floor(seconds / (3600 * 24));
const h = Math.floor((seconds % (3600 * 24)) / 3600);
const m = Math.floor((seconds % 3600) / 60);
const s = Math.floor(seconds % 60);
const dDisplay = d > 0 ? d + (d == 1 ? ' día, ' : ' días, ') : '';
const hDisplay = h > 0 ? h + (h == 1 ? ' hora, ' : ' horas, ') : '';
const mDisplay = m > 0 ? m + (m == 1 ? ' minuto, ' : ' minutos, ') : '';
const sDisplay = s > 0 ? s + (s == 1 ? ' segundo' : ' segundos') : '';
return dDisplay + hDisplay + mDisplay + sDisplay;
  }

const getBuffer = async (url) => {
  try {
    const response = await fetch(url);
    const buffer = await response.arrayBuffer();
    return Buffer.from(buffer);
  } catch (error) {
    console.error("Error al obtener el buffer", error);
    throw new Error("Error al obtener el buffer");
  }
}

async function getFileSize(url) {
    try {
        const response = await fetch(url, { method: 'HEAD' });
        const contentLength = response.headers.get('content-length');
        return contentLength ? parseInt(contentLength, 10) : 0;
    } catch (error) {
        console.error("Error al obtener el tamaño del archivo", error);
        return 0;
    }
}

async function fetchY2mate(url) {
  const baseUrl = 'https://www.y2mate.com/mates/en60';
  const videoInfo = await fetch(`${baseUrl}/analyze/ajax`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
    body: new URLSearchParams({ url, q_auto: 0 })
  }).then(res => res.json());

  const id = videoInfo.result.id;
  const downloadInfo = await fetch(`${baseUrl}/convert`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
    body: new URLSearchParams({ type: 'youtube', _id: id, v_id: url, token: '', ftype: 'mp4', fquality: '360p' })
  }).then(res => res.json());

  return downloadInfo.result.url;
}

async function fetchInvidious(url) {
  const apiUrl = `https://invidious.io/api/v1/get_video_info`;

const response = await fetch(`${apiUrl}?url=${encodeURIComponent(url)}`);
const data = await response.json();

if (data && data.video) {
const videoInfo = data.video;
return videoInfo; 
} else {
throw new Error("No se pudo obtener información del video desde Invidious");
  }
}

async function fetch9Convert(url) {
const apiUrl = `https://9convert.com/en429/api`;
const response = await fetch(`${apiUrl}?url=${encodeURIComponent(url)}`);
const data = await response.json();

if (data.status === 'ok') {
    return data.result.mp3;
  } else {
    throw new Error("No se pudo obtener la descarga desde 9Convert");
  }
}
