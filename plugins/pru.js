import similarity from 'similarity';

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
    if (!m.message) return true; // Cambié !0 a true
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
    const id = m.chat;
    if (!m.quoted || !m.quoted.fromMe || !m.quoted.isBaileys || !/^ⷮ/i.test(m.quoted.text)) return true; // Cambié !0 a true
    this.tekateki = this.tekateki ? this.tekateki : {};
    if (!(id in this.tekateki)) return m.reply('Esa pregunta ya ha terminado!');
    if (m.quoted.id == this.tekateki[id][0].id) {
        const json = JSON.parse(JSON.stringify(this.tekateki[id][1]));
        if (m.text.toLowerCase() == json.response.toLowerCase().trim()) {
            global.db.data.users[m.sender].exp += this.tekateki[id][2];
            m.reply(`*Respuesta correcta!* ${m.pushName} 🎉`); // Cambié puchName a pushName
            clearTimeout(this.tekateki[id][3]);
            delete this.tekateki[id];
        } else if (similarity(m.text.toLowerCase(), json.response.toLowerCase().trim()) >= threshold) {
            m.reply(`Casi lo logras!`);
        } else {
            m.reply('Respuesta incorrecta!');
        }
    }
}
