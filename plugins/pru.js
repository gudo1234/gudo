let userMessageCount = {}
let flags = [
  {
    "name": "Afghanistan",
    "code": "AF",
    "emoji": "🇦🇫",
    "image": "https://qu.ax/hCNpT.jpg",
    "dialCodes": [
      "+93"
    ],
    "slug": "afghanistan"
  },
  {
    "name": "Albania",
    "code": "AL",
    "emoji": "🇦🇱",
    "image": "https://qu.ax/LZNgz.jpg",
    "dialCodes": [
      "+355"
    ],
    "slug": "albania"
  }
];

export async function before(m, { conn, args, usedPrefix, command }) {
    if (!m.message) return !0;
    if (!userMessageCount[m.sender]) userMessageCount[m.sender] = { count: 0, currentFlag: null };

    userMessageCount[m.sender].count += 1;

    if (userMessageCount[m.sender].count % 10 === 0) {
        // Elegir una bandera aleatoria
        const randomFlag = flags[Math.floor(Math.random() * flags.length)];
        userMessageCount[m.sender].currentFlag = randomFlag.name; // Guardar el país actual
        userMessageCount[m.sender].currentFlag2 = randomFlag.emoji;
        await conn.sendFile(m.chat, randomFlag.image, "Thumbnail.jpg", `🌎 ¿A qué país pertenece esta bandera? ${userMessageCount[m.sender].currentFlag2}.`, null);
    }

    // Detectar la respuesta del usuario
    if (m.text.toLowerCase() === userMessageCount[m.sender].currentFlag.toLowerCase()) {
        await conn.reply(m.chat, `¡Correcto, ${m.pushName}! 🎉 La bandera es de ${userMessageCount[m.sender].currentFlag}.`, m);
        userMessageCount[m.sender].currentFlag = null; // Resetear el país actual
    }
}
