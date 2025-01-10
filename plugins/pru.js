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
        userMessageCount[m.chat].currentFlag2 = randomFlag.emoji;

        let txt = `💣 ¿A qué país pertenece esta bandera? ${userMessageCount[m.chat].currentFlag2}\n_✍🏻Responde a este mensaje con la respuesta correcta_\n> 🕒Tiempo: 3 minutos en responder.`;
        userMessageCount[m.chat].questionMessage = await conn.sendFile(m.chat, randomFlag.image, "Thumbnail.jpg", txt, null);
        userMessageCount[m.chat].timestamp = Date.now(); // Guardar el tiempo de la pregunta
    }

    // Detectar la respuesta del usuario
    const timeElapsed = Date.now() - userMessageCount[m.chat].timestamp;

    //if (timeElapsed > 180000) { // 180000 ms = 3 minutos
  if (timeElapsed > 60000) { // 1.5 minutos
        if (m.quoted) {
            await conn.reply(m.chat, `⏰ Se acabó el tiempo para responder a la pregunta:\n> ¡Intenta más tarde!`, m);
        }
        return; // No hacer nada más si el tiempo se ha agotado
    }

    if (m.text.toLowerCase() === userMessageCount[m.chat].currentFlag.toLowerCase() && m.quoted) {
        await conn.reply(m.chat, `¡Correcto, ${m.pushName}! 🎉 La bandera es de ${userMessageCount[m.chat].currentFlag}.`, m);
        userMessageCount[m.chat].currentFlag = null; // Reiniciar la bandera actual
        userMessageCount[m.chat].questionMessage = null; // Reiniciar el mensaje de la pregunta
        userMessageCount[m.chat].timestamp = null; // Reiniciar la marca de tiempo
    } else if (m.quoted) {
        m.react('✖️');
        await conn.reply(m.chat, `¡Respuesta Incorrecta!\n> vuelve a intentar 🕒`, m);
    }
}
