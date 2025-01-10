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
if (m.text.toLowerCase() === userMessageCount[m.chat].currentFlag.toLowerCase() && m.quoted) {
    await conn.reply(m.chat, `¡Correcto, ${m.pushName}! 🎉 La bandera es de ${userMessageCount[m.chat].currentFlag}.`, m);
} else if (m.quoted) {
    m.react('✖️');
    await conn.reply(m.chat, `¡Respuesta Incorrecta!\n> vuelve a intentar`, m);
}
}
