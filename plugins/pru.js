let userMessageCount = {};
let currentFlag = null; // Variable para almacenar la bandera actual
let guessedFlags = {}; // Almacenar las banderas adivinadas

// Cargar el archivo country.json
const fs = require('fs');
const path = require('path');

const countries = JSON.parse(fs.readFileSync(path.join(__dirname, 'src', 'country.json')));

export async function before(m, { conn, args, usedPrefix, command }) {
    if (!m.message) return !0;
    if (!userMessageCount[m.sender]) userMessageCount[m.sender] = { count: 0, currentFlag: null };

    userMessageCount[m.sender].count += 1;

    // Cada 10 mensajes, se pregunta por una bandera
    if (userMessageCount[m.sender].count % 10 === 0) {
        // Seleccionar una bandera aleatoria que no haya sido adivinada
        const availableCountries = countries.filter(country => !guessedFlags[country.code]);
        if (availableCountries.length === 0) {
            await conn.reply(m.chat, '¡Ya has adivinado todas las banderas! 🎉', m);
            return;
        }

        currentFlag = availableCountries[Math.floor(Math.random() * availableCountries.length)];
        userMessageCount[m.sender].currentFlag = currentFlag.code;

        // Enviar la imagen de la bandera
        await conn.sendFile(m.chat, currentFlag.image, 'flag.png', `🌎 ¿A qué país pertenece esta bandera? ${currentFlag.emoji}`, m);
    }

    // Detectar la respuesta del usuario
    if (userMessageCount[m.sender].currentFlag) {
        if (m.text.toLowerCase() === currentFlag.name.toLowerCase()) {
            await conn.reply(m.chat, `¡Correcto, ${m.pushName}! 🎉 La bandera es de ${currentFlag.name}.`, m);
            guessedFlags[currentFlag.code] = true; // Marcar la bandera como adivinada
            userMessageCount[m.sender].currentFlag = null; // Resetear el país actual
        } else {
            await conn.reply(m.chat, `Incorrecto, ${m.pushName}. Intenta de nuevo.`, m);
        }
    }
}
