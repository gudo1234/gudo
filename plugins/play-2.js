import yts from 'youtube-yts';
import fetch from 'node-fetch';
import fs from 'fs';

const handler = async (msg, { args }) => {
    if (!args.length) return msg.reply('✳️ Proporciona un término de búsqueda.');

    const query = args.join(' ');
    try {
        const search = await yts(query);
        const vid = search.videos[0];
        if (!vid) return msg.reply('❌ No se encontraron resultados.');

        const api = `https://axeel.my.id/api/download/video?url=${vid.url}`;
        const res = await fetch(api);
        if (!res.ok) throw new Error('Error en la API.');
        const data = await res.json();
        const { downloads } = data;

        if (!downloads || !downloads.url) return msg.reply('❌ No se pudo obtener el enlace de descarga.');

        const info = `╭━〔 🎥 *INFORMACIÓN DEL VIDEO* 〕━⬣
┃ *Título:* ${vid.title}
┃ *Autor:* ${vid.author.name}
┃ *Duración:* ${vid.timestamp}
┃ *Vistas:* ${vid.views.toLocaleString()}
┃ *Link:* ${vid.url}
╰━━━━━⬣`;

        await msg.reply({ content: info });

        const vidRes = await fetch(downloads.url);
        if (!vidRes.ok) throw new Error('❌ Error al descargar el video.');
        const path = `./temp/${vid.videoId}.mp4`;
        const stream = fs.createWriteStream(path);
        await new Promise((r, e) => {
            vidRes.body.pipe(stream);
            vidRes.body.on('error', e);
            stream.on('finish', r);
        });

        await msg.reply({ content: `🎥 *Aquí tienes tu video: ${vid.title}*`, files: [path] });
        fs.unlinkSync(path);
    } catch (e) {
        console.error(e);
        msg.reply('❌ Error al procesar tu solicitud. Intenta nuevamente.');
    }
};

handler.command = ['play.2']
handler.group = true

export default handler;
