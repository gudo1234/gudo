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
  /*await conn.sendMessage(m.chat, {
      image: { url: videoInfo.thumbnail },
      caption: body,
      footer: wm,
      buttons: [
        {
          buttonId: `.ytmp3 ${videoInfo.url}`,
          buttonText: {
            displayText: 'Audio',
          },
        },
        {
          buttonId: `.ytmp4 ${videoInfo.url}`,
          buttonText: {
            displayText: 'Video',
          },
        },
      ],
      viewOnce: true,
      headerType: 4,
    }, { quoted: m });*/
    conn.sendMessage(m.chat, {
 image: { url: videoInfo.thumbnail },
 caption: doby,
footer: 'Seleccione el Documento en Clip download',
 contextInfo: {
mentionedJid: [m.sender],
forwardingScore: 999,
isForwarded: true,
externalAdReply: {
  showAdAttribution: true, 
  title: `Descargas📀Play`,
  body: "like your pussycat",
  thumbnailUrl: img.getRandom(),
  thumbnail: img.getRandom(),
  sourceUrl: canal,
  mediaType: 1,
  renderLargerThumbnail: false
}}, 
  buttons: [
  {
 buttonId: `.ytmp3 ${videoInfo.url}`,
 buttonText: {
displayText: 'Audio'
 },
 type: 1,
  },
  {
 buttonId: `.ytmp4 ${videoInfo.url}`,
 buttonText: {
displayText: 'Video'
 },
 type: 1,
  },
  {
 type: 4,
 nativeFlowInfo: {
name: 'single_select',
paramsJson: JSON.stringify({
  title: 'Clip Download',
  sections: [
 {
title: `Descarga ${m.pushNsme}`,
highlight_label: '',
rows: [
  {
 header: '',
 title: 'Doc Audio',
 description: ``, 
 id: '.s',
  },
  {
 header: '',
 title: 'Doc Video',
 description: ``, 
 id: '.s',
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
    m.react('🕒');
    
    } else if (command === 'yta' || command === 'ytmp3') {
    m.react('🕒')
      const response = await fetch(`https://api.alyachan.dev/api/yta?url=${videoInfo.url}&apikey=Gata-Dios`)
      const json = await response.json()
      await conn.sendMessage(m.chat, { audio: { url: json.data.url }, mimetype: 'audio/mpeg', fileName: json.data.filename }, { quoted: m })
    m.react('✅')
    } else if (command === 'ytv' || command === 'ytmp4') {
    m.react('🕒')
    const response = await fetch(`https://api.alyachan.dev/api/ytv?url=${videoInfo.url}&apikey=Gata-Dios`)
    const json = await response.json()
    await conn.sendMessage(m.chat, { video: { url: json.data.url }, mimetype: 'video/mp4', fileName: json.data.filename }, { quoted: m })
    m.react('✅')
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
