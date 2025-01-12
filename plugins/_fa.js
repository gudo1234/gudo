import fetch from 'node-fetch'

let handler = async (m, { conn, command, text, usedPrefix }) => {
    if (!text) return conn.reply(m.chat, `❀ Ingresa un link de youtube`, m)

    try {
        let apiResponse = await fetch(`https://api.dorratz.com/ytdl/yt-mp4?url=${text}`)
        let apiData = await apiResponse.json()

        // Asegúrate de que la respuesta tenga los datos necesarios
        if (apiData && apiData.url) {
            let dl_url = apiData.url; // URL del video
            let ttl = apiData.title; // Título del video
            let size = apiData.size; // Tamaño del video (si está disponible)
            let yt = apiData.thumbnail; // Miniatura del video (si está disponible)

            await conn.sendMessage(m.chat, {
                video: { url: dl_url },
                fileName: `${ttl}.mp4`,
                mimetype: 'video/mp4',
                caption: `*Título*: ${ttl}\n*Peso:* ${size}`,
                thumbnail: await fetch(yt)
            }, { quoted: m })
        } else {
            conn.reply(m.chat, `❌ No se pudo obtener el video.`, m)
        }
    } catch (error) {
        console.error(error)
        conn.reply(m.chat, `❌ Ocurrió un error: ${error.message}`, m)
    }
}

handler.command = ['pla']
export default handler
