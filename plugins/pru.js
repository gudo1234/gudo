import fs from 'fs';

// Cargar el archivo country.json
const countries = JSON.parse(fs.readFileSync('./src/country.json', 'utf-8'));
let userMessageCount = {};
let guessedCountries = {};

export async function before(m, { conn }) {
    if (!m.message) return !0;

    // Inicializar el contador de mensajes del usuario si no existe
    if (!userMessageCount[m.sender]) userMessageCount[m.sender] = 0;

    userMessageCount[m.sender] += 1;

    // Enviar una bandera cada 10 mensajes
    if (userMessageCount[m.sender] % 10 === 0) {
        // Seleccionar un país aleatorio
        const randomCountry = countries[Math.floor(Math.random() * countries.length)];
        
        // Guardar el país en un objeto para verificar respuestas
        guessedCountries[m.sender] = randomCountry.name;

        // Enviar la bandera asegurando que el archivo se envíe en formato correcto
        await conn.sendFile(m.chat, randomCountry.image, "Thumbnail.jpg", `¿A qué país pertenece esta bandera? ${randomCountry.emoji}`, null, {
            mimetype: 'image/jpeg' // Aseguramos que el tipo MIME sea correcto
        });
    }
}

// Función para manejar las respuestas
export async function onMessage(m, { conn }) {
    const userAnswer = m.text.trim();
    const correctAnswer = guessedCountries[m.sender];

    if (correctAnswer) {
        // Comparar la respuesta del usuario con la respuesta correcta
        if (userAnswer.toLowerCase() === correctAnswer.toLowerCase()) {
            await conn.reply(m.chat, `¡Correcto! 🎉 La bandera es de ${correctAnswer}.`, m);
            // Limpiar la respuesta adivinada
            delete guessedCountries[m.sender];
        } else {
            await conn.reply(m.chat, `Incorrecto. 😢 La respuesta correcta era ${correctAnswer}.`, m);
        }
    }
}
