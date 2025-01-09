let userMessageCount = {}
let flags = require('./flags.json'); // Asegúrate de que este archivo contenga las banderas y sus datos

export async function before(m, { conn, args, usedPrefix, command }) {
    if (!m.message) return !0;

    if (!userMessageCount[m.sender]) userMessageCount[m.sender] = { count: 0, answered: false, country: '' };

    userMessageCount[m.sender].count += 1;

    // Enviar una bandera cada 3 mensajes
    if (userMessageCount[m.sender].count % 3 === 0 && !userMessageCount[m.sender].answered) {
        // Elegir una bandera aleatoria
        let randomIndex = Math.floor(Math.random() * flags.length);
        let selectedFlag = flags[randomIndex];
        let imgBuffer = Buffer.from(selectedFlag.hex_image, 'hex'); // Convertir de hexadecimal a buffer
        userMessageCount[m.sender].country = selectedFlag.country; // Guardar el país correcto
        userMessageCount[m.sender].answered = false; // Restablecer a no respondido

        await conn.sendFile(m.chat, imgBuffer, "Thumbnail.jpg", `🕒 ¿De qué país es esta bandera?`, null);
    }
}

// Función para manejar las respuestas del usuario
export async function onMessage(m, { conn }) {
    let user = userMessageCount[m.sender];

    if (!user || user.answered) return; // Si no hay un juego activo o ya respondió, no hacer nada

    // Verificar si la respuesta es correcta
    if (m.text.toLowerCase() === user.country.toLowerCase()) {
        await m.reply(`🎉 ¡Correcto! La bandera es de ${user.country}.`);
        user.answered = true; // Marcar como respondido
    } else {
        await m.reply(`❌ Incorrecto. Intenta de nuevo.`);
    }
}
