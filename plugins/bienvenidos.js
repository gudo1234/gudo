import fs from 'fs';
import path from 'path';


let handler = async (m, { conn }) => {

    let fakegif = {
        key: { 
            participant: `0@s.whatsapp.net`,
            ...(m.chat ? { remoteJid: m.chat } : {}) 
        },
        message: {
            videoMessage: { 
                title: 'Megumin', 
                h: `Hmm`,
                seconds: '99999', 
                gifPlayback: true, 
                caption: `${await conn.getName(m.chat)}`, 
                jpegThumbnail: imagen4
            }
        }
    };

    let groupMetadata = await conn.groupMetadata(m.chat);
    let str = `${e} _Hola, sean bienvenidos Todos_\n\n${groupMetadata.desc?.toString() || 'desconocido'}
`.trim();

    if (m.isGroup) {
        let pp = 'https://telegra.ph/file/8e1d9045ef0b141e2b489.mp4';
        const videos = [pp];
        const video = videos[Math.floor(Math.random() * videos.length)];

        const mentionedJid = groupMetadata.participants.map(v => v.id);

        await conn.sendMessage(m.chat, {
            video: { url: video },
            caption: str,
            gifPlayback: true,
            mentions: mentionedJid
        }, { quoted: fakegif });
    }
};

handler.help = ['bienvenidos'];
handler.group = true;
handler.admin = false;
handler.tags = ['bienvenidos'];
handler.command = ['bienvenidos','nuevos','welcome'];

export default handler;