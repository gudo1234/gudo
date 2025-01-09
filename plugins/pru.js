import fs from 'fs';
import path from 'path';

let userAttempts = {};
let guessedFlags = new Set();
const countries = JSON.parse(fs.readFileSync(path.join(__dirname, 'src', 'country.json'), 'utf-8'));

export async function before(m, { conn, args, usedPrefix, command }) {
    if (!m.message) return !0;

    // Seleccionar una bandera aleatoria que no haya sido adivinada
    let availableCountries = countries.filter(country => !guessedFlags.has(country.code));
    if (availableCountries.length === 0) {
        return conn.sendMessage(m.chat, '¡Ya has adivinado todas las banderas!', m);
    }

    let randomCountry = availableCountries[Math.floor(Math.random() * availableCountries.length)];
    
    // Enviar la bandera
    await conn.sendFile(m.chat, randomCountry.image, 'flag.png', `¿A qué país pertenece esta bandera? ${randomCountry.emoji}`, m);

    // Inicializar el conteo de intentos del usuario
    if (!userAttempts[m.sender]) userAttempts[m.sender] = { count: 0, correct: false };

    // Esperar respuesta del usuario
    conn.on('chat-update', async (chatUpdate) => {
        if (!chatUpdate.messages) return;
        const message = chatUpdate.messages.all()[0];

        if (message.key.fromMe || !message.message) return;

        // Comprobar respuesta
        if (!userAttempts[m.sender].correct) {
            userAttempts[m.sender].count++;

            if (message.message.conversation.toLowerCase() === randomCountry.name.toLowerCase()) {
                userAttempts[m.sender].correct = true;
                guessedFlags.add(randomCountry.code);
                await conn.sendMessage(m.chat, `¡Correcto! 🎉 La bandera es de ${randomCountry.name}.`, m);
            } else {
                await conn.sendMessage(m.chat, `Incorrecto. 😢 Intenta de nuevo.`, m);
            }
        } else {
            await conn.sendMessage(m.chat, `Ya has adivinado esta bandera. ¡Sigue intentando!`, m);
        }
    });
}
