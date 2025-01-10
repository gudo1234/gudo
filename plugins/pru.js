let userMessageCount = {}
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
    if (!userMessageCount[m.chat]) userMessageCount[m.chat] = { count: 0, currentFlag: null };

    userMessageCount[m.chat].count += 1;

    if (userMessageCount[m.chat].count % 10 === 0) {
        // Elegir una bandera aleatoria
        const randomFlag = flags[Math.floor(Math.random() * flags.length)];
        userMessageCount[m.chat].currentFlag = randomFlag.name; // Guardar el país actual
        userMessageCount[m.chat].currentFlag2 = randomFlag.emoji;
let txt = `🎉 ¿A qué país pertenece esta bandera? ${userMessageCount[m.chat].currentFlag2}.`
        await conn.sendFile(m.chat, randomFlag.image, "Thumbnail.jpg", txt, null);
    }

    // Detectar la respuesta del usuario
// Suponiendo que tienes un objeto para guardar las respuestas anteriores
const answeredQuestions = {};

if (m.quoted) {
    const quotedMessageId = m.quoted.id; // ID del mensaje citado
    const quotedMessageText = m.quoted.text; // Texto del mensaje citado

    // Verificamos si la pregunta ya ha sido respondida
    if (answeredQuestions[quotedMessageId]) {
        await conn.reply(m.chat, `Esta pregunta ya ha sido respondida anteriormente. La respuesta fue: ${answeredQuestions[quotedMessageId]}`, m);
    } else if (m.text.toLowerCase() === userMessageCount[m.chat].currentFlag.toLowerCase()) {
        // Guardamos la respuesta en el registro
        answeredQuestions[quotedMessageId] = m.text; // Guardamos la respuesta
        await conn.reply(m.chat, `¡Correcto, ${m.pushName}! 🎉 La bandera es de ${userMessageCount[m.chat].currentFlag}.`, m);
    } else {
        m.react('✖️');
        await conn.reply(m.chat, `¡Respuesta Incorrecta!\n> vuelve a intentar`, m);
    }
}
}
