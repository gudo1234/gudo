import fetch from 'node-fetch'
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
let = imagen4
  if (!m.message) return !0;
    if (!userMessageCount[m.sender]) userMessageCount[m.sender] = { count: 0, currentFlag: null };

    userMessageCount[m.sender].count += 1;

    if (userMessageCount[m.sender].count % 10 === 0) {
        // Elegir una bandera aleatoria
        const randomFlag = flags[Math.floor(Math.random() * flags.length)];
        userMessageCount[m.sender].currentFlag = randomFlag.name; // Guardar el país actual
        userMessageCount[m.sender].currentFlag2 = randomFlag.emoji;
        await conn.sendFile(m.chat, img, "Thumbnail.jpg", `🌎 ¿A qué país pertenece esta bandera? ${userMessageCount[m.sender].currentFlag2}.`, null);
    }

    // Detectar la respuesta del usuario
    if (m.text.toLowerCase() === userMessageCount[m.sender].currentFlag.toLowerCase()) {
        await conn.reply(m.chat, `¡Correcto, ${m.pushName}! 🎉 La bandera es de ${userMessageCount[m.sender].currentFlag}.`, m);
        userMessageCount[m.sender].currentFlag = null; // Resetear el país actual
    }
}
