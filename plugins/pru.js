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
    
    // Inicializamos el contador de mensajes si no existe
    if (!userMessageCount[m.sender]) userMessageCount[m.sender] = { count: 0, currentFlag: null };
    
    userMessageCount[m.sender].count += 1;
    
    // Cada 10 mensajes, se envía una pregunta sobre la bandera
    if (userMessageCount[m.sender].count % 10 === 0) {
        const randomFlag = flags[Math.floor(Math.random() * flags.length)];
        userMessageCount[m.sender].currentFlag = randomFlag.name;
        userMessageCount[m.sender].currentFlag2 = randomFlag.emoji;

        let txt = `🖐️ ¿A qué país pertenece esta bandera? ${userMessageCount[m.sender].currentFlag2}.`;
        await conn.sendFile(m.chat, randomFlag.image, "Thumbnail.jpg", txt, null);   
    }
    
    // Comprobamos si la respuesta es correcta solo si hay una pregunta activa
    if (userMessageCount[m.sender].currentFlag && m.text.toLowerCase() === userMessageCount[m.sender].currentFlag.toLowerCase()) {
        await conn.reply(m.chat, `¡Correcto, ${m.pushName}! 🎉 La bandera es de ${userMessageCount[m.sender].currentFlag}.`, m);
        userMessageCount[m.sender].currentFlag = null; // Reiniciamos la bandera actual
    }
}
