/*import { prepareWAMessageMedia, generateWAMessageFromContent, getDevice } from '@whiskeysockets/baileys'
import yts from 'yt-search';
import fs from 'fs';

const handler = async (m, { conn, text, usedPrefix: prefijo }) => {
    const datas = global;
    const device = await getDevice(m.key.id);
    
  if (!text) throw `${e} *Ejemplo:* .play diles`;
    
  if (device !== 'desktop' || device !== 'web') {      
    
  const results = await yts(text);
  const videos = results.videos.slice(0, 1);
  const randomIndex = Math.floor(Math.random() * videos.length);
  const randomVideo = videos[randomIndex];

  var messa = await prepareWAMessageMedia({ image: {url: randomVideo.thumbnail}}, { upload: conn.waUploadToServer })
  const interactiveMessage = {
    body: { text: `🚩 *Título:* ${randomVideo.title}\n👤 *Autor:* ${randomVideo.author.name}\n👁️ *Vistas:* ${randomVideo.views}\n🔗 *Url:* ${randomVideo.url}\n🕒 *Duración:* ${randomVideo.timestamp}\n\n> 🚦Seleccione el formato en Descargas...`.trim() },
    footer: { text: `https://www.atom.bio/edar_`.trim() },  
      header: {
          title: `⭐YOUTUBE PLAY⭐`,
          hasMediaAttachment: true,
          imageMessage: messa.imageMessage,
      },
    nativeFlowMessage: {
      buttons: [
        {
          name: 'single_select',
          buttonParamsJson: JSON.stringify({
            title: 'Descargas',
            sections: videos.map((video) => ({
              title: video.title,
              rows: [
                {
                  header: '',
                  title: 'Descargar',
                  description: '🎶Audio',
                  id: `.pla ${video.url}`
                },
                {
                  header: '',
                  title: 'Descargar',
                  description: '🎥Video',
                  id: `.pla2 ${video.url}`
                },
                {
                  header: '',
                  title: 'Descargar',
                  description: '📀doc.mp3',
                  id: `.pla3 ${video.url}`
                },
                {
                  header: '',
                  title: 'Descargar',
                  description: '📥doc.mp4',
                  id: `.pla4 ${video.url}`
                }
              ]
            }))
          })
        }
      ],
      messageParamsJson: ''
    }
  };        
            
        let msg = generateWAMessageFromContent(m.chat, {
            viewOnceMessage: {
                message: {
                    interactiveMessage,
                },
            },
        }, { userJid: conn.user.jid, quoted: m })
        await m.react('🔎')
      conn.relayMessage(m.chat, msg.message, { messageId: msg.key.id});

  } else {
  const results = await yts(text);
  const tes = results.all;
  const teks = results.all.map((v) => {
    switch (v.type) {
      case 'video': return `
° *_${v.title}_*
↳ 🫐 *_Url_* ${v.url}
↳ 🕒 *_Fecha_* ${v.timestamp}
↳ 📥 *_fecha_* ${v.ago}
↳ 👁 *_Vista_* ${v.views}`;
    }
  }).filter((v) => v).join('\n\n◦◦◦◦◦◦◦◦◦◦◦◦◦◦◦◦◦◦◦◦◦◦◦◦◦◦◦◦◦◦\n\n');
  conn.sendFile(m.chat, tes[0].thumbnail, 'error.jpg', teks.trim(), m);      
  }    
};
handler.help = ['ytsearch <texto>'];
handler.tags = ['search'];
handler.command = ['play']
handler.group = true;
export default handler;*/
