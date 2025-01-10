import moment from 'moment-timezone';
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
// Inicializamos el tiempo de respuesta

// En el bloque de código donde se verifica la respuesta
if (new Date() - user.pc < 3 * 60 * 1000) { // 3 minutos en milisegundos
    if (m.text.toLowerCase() === userMessageCount[m.chat].currentFlag.toLowerCase() && m.quoted) {
        await conn.reply(m.chat, `¡Correcto, ${m.pushName}! 🎉 La bandera es de ${userMessageCount[m.chat].currentFlag}.`, m);
    } else if (m.quoted) {
        m.react('✖️');
        await conn.reply(m.chat, `¡Respuesta Incorrecta!\n> vuelve a intentar`, m);
    }
} else if (m.quoted) {
  m.react('🐢');
    await conn.reply(m.chat, `¡Tiempo agotado! ⏳ No puedes responder más.`, m);
user.pc = new Date() * 1;
}
}
