import yts from 'yt-search';

const handler = async (m, { conn, text, usedPrefix, command }) => {
  if (!text) throw `${e} Por favor ingresa la música que deseás descargar.`;

  const isVideo = /vid|2|mp4|v$/.test(command);
  const search = await yts(text);

  if (!search.all || search.all.length === 0) {
    throw "No se encontraron resultados para tu búsqueda.";
  }

  const videoInfo = search.all[0];
  const body = `*Titulo:* ${videoInfo.title}
*Canal:* ${videoInfo.author.name || 'Desconocido'}
*Vistas:* ${videoInfo.views}
*Duración:* ${videoInfo.timestamp}
*Publicado:* ${videoInfo.ago}
*Link:* ${videoInfo.url}`;

    if (command === 'play' || command === 'play2' || command === 'playvid') {
  await conn.sendMessage(m.chat, {
      image: { url: videoInfo.thumbnail },
      caption: body,
      footer: dev,
      buttons: [
        {
          buttonId: `.ytmp3 ${videoInfo.url}`,
          buttonText: {
            displayText: 'ᯓᡣ𐭩 ᥲᥙძі᥆',
          },
        },
        {
          buttonId: `.ytmp4 ${videoInfo.url}`,
          buttonText: {
            displayText: 'ᯓᡣ𐭩 ᥎іძᥱ᥆',
          },
        },
      ],
      viewOnce: true,
      headerType: 4,
    }, { quoted: fkontak });
    m.react('🕒');
    
    } else if (command === 'yta' || command === 'ytmp3') {
    m.react(rwait)
      //let audio = await (await fetch(`https://dark-core-api.vercel.app/api/download/ytmp3?url=${videoInfo.url}&type=audio`)).buffer()
      //conn.sendFile(m.chat, audio, videoInfo.title, '', m, null, { mimetype: "audio/mpeg", asDocument: false })
      const response = await fetch(`https://api.alyachan.dev/api/yta?url=${videoInfo.url}&apikey=Gata-Dios`)
      const json = await response.json()
      await conn.sendMessage(m.chat, { audio: { url: json.data.url }, mimetype: 'audio/mpeg', fileName: json.data.filename }, { quoted: m })
    m.react(done)
    } else if (command === 'ytv' || command === 'ytmp4') {
    m.react(rwait)
      //let video = await (await fetch(`https://api.botcahx.eu.org/api/download/get-YoutubeResult?url=${videoInfo.url}&type=video&xky=sxadCfpz`)).buffer()
    const response = await fetch(`https://api.alyachan.dev/api/ytv?url=${videoInfo.url}&apikey=Gata-Dios`)
    const json = await response.json()
    await conn.sendMessage(m.chat, { video: { url: json.data.url }, mimetype: 'video/mp4', fileName: json.data.filename }, { quoted: m })
    m.react(done)
    } else {
      throw "Comando no reconocido.";
    }
};

handler.command = ['play', 'playvid', 'ytv', 'ytmp4', 'yta', 'play2', 'ytmp3'];
handler.group = true;

export default handler;

const getVideoId = (url) => {
  const regex = /(?:v=|\/)([0-9A-Za-z_-]{11}).*/;
  const match = url.match(regex);
  if (match) {
    return match[1];
  }
  throw new Error("Invalid YouTube URL");
};
