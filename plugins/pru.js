let messageCount = {};

let handler = async (m, { conn, usedPrefix, command }) => {
    // Incrementar el contador de mensajes del usuario
    if (!messageCount[m.sender]) {
        messageCount[m.sender] = 0;
    }
    messageCount[m.sender]++;

    // Verificar si el usuario ha enviado 3 mensajes
    if (messageCount[m.sender] % 3 === 0) {
        m.reply(`¡Has enviado ${messageCount[m.sender]} mensajes! Aquí tienes un mensaje especial.`);
    }
}

// Resetea el contador cada cierto tiempo (opcional)
setInterval(() => {
    messageCount = {};
}, 3600000); // Resetea cada hora

module.exports = handler;
//export default handler;
