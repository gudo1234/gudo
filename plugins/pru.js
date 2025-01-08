let messageCount = 0;

let handler = async (m, { conn, usedPrefix, command }) => {
    messageCount++;

    // Aquí puedes ajustar el límite según lo que desees
    const limit = 3;

    if (messageCount >= limit) {
        messageCount = 0; // Reiniciar el contador

        await m.reply('xd js'); // Asegúrate de usar await si m.reply es una función asincrónica
    }
}

export default handler;
