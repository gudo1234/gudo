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
  if (!userMessageCount[m.sender]) userMessageCount[m.sender] = { count: 0, currentFlag: null };

  userMessageCount[m.sender].count += 1;

  if (userMessageCount[m.sender].count % 10 === 0) {
    // Elegir una bandera aleatoria
    const randomFlag = flags[Math.floor(Math.random() * flags.length)];
    userMessageCount[m.sender].currentFlag = randomFlag.name; // Guardar el país actual
    userMessageCount[m.sender].currentFlag2 = randomFlag.emoji;

    // Asegúrate de que el enlace sea válido
    const imageUrl = randomFlag.image;
    
    // Enviar la imagen de la bandera
    await conn.sendFile(m.chat, imageUrl, "Thumbnail.jpg", `¿A qué país pertenece esta bandera? ${userMessageCount[m.sender].currentFlag2}.`, m, null, rcanal);
  }
}
