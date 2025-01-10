import moment from 'moment-timezone';
let userMessageCount = {};
let flags = [
  {
    "name": "Afghanistan",
    "code": "AF",
    "emoji": "🇦🇫",
    "image": "https://cdn.jsdelivr.net/gh/lipis/flag-icons@7.2.3/flags/4x3/af.svg",
    "dialCodes": [
      "+93"
    ],
    "slug": "afghanistan"
  },
  {
    "name": "Albania",
    "code": "AL",
    "emoji": "🇦🇱",
    "image": "https://cdn.jsdelivr.net/gh/lipis/flag-icons@7.2.3/flags/4x3/al.svg",
    "dialCodes": [
      "+355"
    ],
    "slug": "albania"
  }
];

export async function before(m, { conn, args, usedPrefix, command }) {
    if (!m.message) return !0;
    if (!userMessageCount[m.chat]) userMessageCount[m.chat] = { count: 0, currentFlag: null, questionMessage: null, timestamp: null };

    userMessageCount[m.chat].count += 1;

    if (userMessageCount[m.chat].count % 10 === 0) {
        // Elegir una bandera aleatoria
        const randomFlag = flags[Math.floor(Math.random() * flags.length)];
        userMessageCount[m.chat].currentFlag = randomFlag.name; // Guardar el país actual
        userMessageCount[m.chat].currentFlag2 = randomFlag.emoji; // para emoji
        userMessageCount[m.chat].currentFlag3 = randomFlag.dialCodes || "DESCONOCIDO"; // para dialCodes, mostrando "DESCONOCIDO" si no hay
      
        let txt = `💣 *¿A qué país pertenece la bandera que se muestra? ${userMessageCount[m.chat].currentFlag2}*\n_🤖 Por favor, responda a este mensaje con la respuesta correcta en un plazo de *3 minutos*._`;
        userMessageCount[m.chat].questionMessage = await conn.sendFile(m.chat, randomFlag.image, "Thumbnail.jpg", txt, null, null, rcanal);
        userMessageCount[m.chat].timestamp = Date.now(); // Guardar el tiempo de la pregunta
    }

    // Detectar la respuesta del usuario
    const timeElapsed = Date.now() - userMessageCount[m.chat].timestamp;

    if (timeElapsed > 180000) { // 180000 ms = 3 minutos
        if (m.quoted && m.quoted.id === userMessageCount[m.chat].questionMessage.id) {
            await conn.reply(m.chat, `⏰ *Se acabó el tiempo para responder a la pregunta.*`, m);
        }
        return; // No hacer nada más si el tiempo se ha agotado
    }

    if (m.quoted && m.quoted.id === userMessageCount[m.chat].questionMessage.id && m.text.toLowerCase() === userMessageCount[m.chat].currentFlag.toLowerCase()) {
        m.react('🎉');
        await conn.reply(m.chat, `*¡Correcto, ${m.pushName}!* 🎉 La bandera es de *${userMessageCount[m.chat].currentFlag}* y su código es: *${userMessageCount[m.chat].currentFlag3}*.`, m);
        
        // Eliminar la pregunta para todos
        try {
            await conn.deleteMessage(m.chat, { id: userMessageCount[m.chat].questionMessage.id, remoteJid: m.chat, fromMe: true });
        } catch (error) {
          m.reply(`${error}`)
            console.error("Error al eliminar el mensaje:", error);
        }
        
        userMessageCount[m.chat].currentFlag = null; // Reiniciar la bandera actual
        userMessageCount[m.chat].questionMessage = null; // Reiniciar el mensaje de la pregunta
        userMessageCount[m.chat].timestamp = null; // Reiniciar la marca de tiempo
    } else if (m.quoted && m.quoted.id === userMessageCount[m.chat].questionMessage.id) {
        m.react('✖️');
        await conn.reply(m.chat, `¡Respuesta Incorrecta!\n> vuelve a intentar`, m);
    }
}
