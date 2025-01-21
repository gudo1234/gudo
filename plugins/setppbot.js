import jimp from "jimp";
import { S_WHATSAPP_NET } from '@whiskeysockets/baileys';

let handler = async (m, { conn, usedPrefix, command, args, isOwner, isAdmin, isROwner }) => {
  try {
    let groupId = m.chat;
    let quotedMsg = m.quoted ? m.quoted : m;
    if (!m.quoted) return m.reply('Responde a una Imagen');

    let media = await quotedMsg.download();
    
    async function processImage(media) {
      const image = await jimp.read(media);
      const resizedImage = image.getWidth() > image.getHeight() ? image.resize(720, jimp.AUTO) : image.resize(jimp.AUTO, 720);
      return {
        img: await resizedImage.getBufferAsync(jimp.MIME_JPEG),
      };
    }

    var { img: processedImage } = await processImage(media);
    
    await conn.query({
      tag: 'iq',
      attrs: {
        to: S_WHATSAPP_NET,
        type: 'set',
        xmlns: 'w:profile:picture',
      },
      content: [
        {
          tag: 'picture',
          attrs: { type: 'image' },
          content: processedImage,
        },
      ],
    });

    m.reply('¡Icono actualizado exitosamente! 🎉');
  } catch (error) {
    console.error(error); // Para depuración
    return m.react('❌');
  }
};

handler.command = ['setppbot', 'icon'];
handler.owner = true;

export default handler;
