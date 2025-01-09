let userMessageCount = {};
let flags = require('./flags.json');
let currentFlag = {}; // Para almacenar la bandera actual y su respuesta

export async function before(m, { conn, args }) {
    if (!m.message) return true; // Cambié !0 a true para mayor claridad
    if (!userMessageCount[m.sender]) userMessageCount[m.sender] = { count: 0, answered: false };

    userMessageCount[m.sender].count += 1;

    // Enviar una pregunta cada 3 mensajes
    if (userMessageCount[m.sender].count % 3 === 0 && !userMessageCount[m.sender].answered) {
        // Selecciona una bandera aleatoria
        let flagKeys = Object.keys(flags);
        let randomKey = flagKeys[Math.floor(Math.random() * flagKeys.length)];
        currentFlag = flags[randomKey]; // La bandera actual
        let buffer = Buffer.from(currentFlag.hex_image, 'hex'); // Convertir de hexadecimal a buffer

        await conn.sendFile(m.chat, buffer, "Thumbnail.jpg", `🕒 ¿De qué país es esta bandera?`, null);
        userMessageCount[m.sender].answered = true; // Marcar como respondido
    }

    // Verificar respuestas
    if (userMessageCount[m.sender].answered) {
        let answer = args.join(" ").toLowerCase();
        if (answer === currentFlag.country.toLowerCase()) {
            await conn.sendMessage(m.chat, `🎉 ¡Correcto! La bandera es de ${currentFlag.country}!`, null);
            userMessageCount[m.sender].answered = false; // Reiniciar la pregunta
        } else if (answer && answer !== currentFlag.country.toLowerCase()) { // Simplificado la condición
            await conn.sendMessage(m.chat, `❌ Incorrecto. Intenta de nuevo!`, null);
        }
    }
}
