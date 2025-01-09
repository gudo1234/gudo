let userMessageCount = {}
let flags = require('./flags.json');
let currentFlag = null; // Para almacenar la bandera actual
let correctAnswers = {}; // Para almacenar respuestas correctas

export async function before(m, { conn, args, usedPrefix, command }) {

    // Función para obtener una bandera aleatoria
    function getRandomFlag() {
        const flagKeys = Object.keys(flags);
        const randomIndex = Math.floor(Math.random() * flagKeys.length);
        return flagKeys[randomIndex];
    }

    // Si no hay mensaje, retorna
    if (!m.message) return !0;

    // Inicializa el contador de mensajes del usuario
    if (!userMessageCount[m.sender]) userMessageCount[m.sender] = 0;

    userMessageCount[m.sender] += 1;

    // Envía una bandera cada 10 mensajes
    if (userMessageCount[m.sender] % 3 === 0) {
        currentFlag = getRandomFlag(); // Obtiene una bandera aleatoria
        const buffer = flags[currentFlag]; // Obtiene la imagen de la bandera
        await conn.sendFile(m.chat, buffer, "Thumbnail.jpg", `🕒 ¿De qué país es esta bandera?`, null);
        correctAnswers[m.sender] = currentFlag; // Guarda la respuesta correcta para el usuario
    }

    // Verifica la respuesta del usuario
    if (args.length > 0) {
        const userAnswer = args.join(' ').toLowerCase(); // Respuesta del usuario
        const correctAnswer = correctAnswers[m.sender]; // Respuesta correcta

        if (userAnswer === flags[correctAnswer].name.toLowerCase()) {
            await conn.reply(m.chat, `🎉 ¡Correcto, ${m.sender}! Es la bandera de ${flags[correctAnswer].name}.`, m);
            delete correctAnswers[m.sender]; // Elimina la respuesta correcta almacenada
        } else if (correctAnswers[m.sender]) {
            await conn.reply(m.chat, `❌ Incorrecto, ${m.sender}. Intenta de nuevo!`, m);
        }
    }
}
