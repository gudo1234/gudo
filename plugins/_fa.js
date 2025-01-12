import fetch from 'node-fetch';

let handler = async (m, { conn, command, text, usedPrefix }) => {
    if (!text) return conn.reply(m.chat, `❀ Ingresa un link de youtube`, m);

    try {
        let api = await fetch(`https://api.dorratz.com/ytdl/yt-mp4?url=${text}`);
        let json = await api.json();

        // Verificamos si se obtuvo el video correctamente
        if (json.url) {
            await conn.sendMessage(m.chat, {
                video: { url: json.url },
                fileName: `${json.title}.mp4`,
                mimetype: 'video/mp4',
                caption: `*Título:* ${json.title}`,
                thumbnail: { url: json.thumbnail }
            }, { quoted: m });
        } else {
            conn.reply(m.chat, '❌ No se pudo obtener el video. Verifica el enlace.', m);
        }
    } catch (error) {
        console.error(error);
        conn.reply(m.chat, '❌ Ocurrió un error al intentar descargar el video.', m);
    }
};

handler.command = ['pla'];
export default handler;
