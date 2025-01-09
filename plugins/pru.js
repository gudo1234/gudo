let userMessageCount = {};
let flags = require('./flags.json');
let currentCountry = {}; // Para almacenar el país actual

export async function before(m, { conn, args, usedPrefix, command }) {
    if (!m.message) return !0;
    if (!userMessageCount[m.sender]) userMessageCount[m.sender] = 0;

    userMessageCount[m.sender] += 1;

    // Cada 10 mensajes, se envía una bandera
    if (userMessageCount[m.sender] % 3 === 0) {
        let randomFlag = flags[Math.floor(Math.random() * flags.length)];
        let hexImage = randomFlag.hex_image;
        currentCountry[m.sender] = randomFlag.country; // Guarda el país actual
        let buffer = Buffer.from(hexImage, 'hex');

        await conn.sendFile(m.chat, buffer, "Thumbnail.jpg", `🕒 ¿De qué país es esta bandera?`, null);
    }
}

// Función para manejar la respuesta del usuario
export async function onMessage(m, { conn }) {
    if (currentCountry[m.sender] && m.text.toLowerCase() === currentCountry[m.sender].toLowerCase()) {
        await conn.reply(m.chat, `✅ ¡Correcto! La bandera pertenece a ${currentCountry[m.sender]}!`, m);
        delete currentCountry[m.sender]; // Elimina el país actual después de adivinar
    } else if (currentCountry[m.sender]) {
        await conn.reply(m.chat, `❌ Incorrecto. Intenta de nuevo!`, m);
    }
}
