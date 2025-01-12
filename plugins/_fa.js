import fetch from 'node-fetch'

let handler = async (m, { conn, command, text, usedPrefix }) => {
    if (!text) return conn.reply(m.chat, `❀ Ingresa un link de Youtube`, m);

    const videoUrl = text; // Aquí tomamos el link de YouTube que el usuario ingresa
    const apiUrl = `https://api.dorratz.com/ytdl/yt-mp4?url=${encodeURIComponent(videoUrl)}`;

    try {
        const response = await fetch(apiUrl);
        const data = await response.json();

        if (data.success) {
            // Aquí puedes enviar el link de descarga al usuario
            conn.reply(m.chat, `🎉 Aquí está tu video: ${data.url}`, m);
        } else {
            conn.reply(m.chat, `❌ No se pudo descargar el video. Intenta con otro enlace.`, m);
        }
    } catch (error) {
        conn.reply(m.chat, `⚠️ Ocurrió un error al intentar descargar el video: ${error.message}`, m);
    }
}

handler.command = ['pla']
export default handler
