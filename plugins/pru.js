import similarity from 'similarity';

let userMessageCount = {};
let flags = [
  {
    "name": "Afghanistan",
    "code": "AF",
    "emoji": "🇦🇫",
    "image": "https://cdn.jsdelivr.net/gh/lipis/flag-icons@7.2.3/flags/4x3/af.svg",
    "dialCodes": [" +93"],
    "slug": "afghanistan"
  },
  {
    "name": "Albania",
    "code": "AL",
    "emoji": "🇦🇱",
    "image": "https://cdn.jsdelivr.net/gh/lipis/flag-icons@7.2.3/flags/4x3/al.svg",
    "dialCodes": [" +355"],
    "slug": "albania"
  }
];

const threshold = 0.72;

let handler = m => m;

handler.before = async function (m) {
  if (!m.message) return true;

  // Inicializamos el contador de mensajes si no existe
  if (!userMessageCount[m.sender]) userMessageCount[m.sender] = { count: 0, currentFlag: null };

  userMessageCount[m.sender].count += 1;

  // Cada 10 mensajes, se envía una pregunta sobre la bandera
  if (userMessageCount[m.sender].count % 10 === 0) {
    // Escoger una bandera aleatoriamente
    const randomFlag = flags[Math.floor(Math.random() * flags.length)];
    userMessageCount[m.sender].currentFlag = randomFlag;

    //-----------[adivina la bandera]-------
    const txt = `🌎 ¿A qué país pertenece esta bandera? ${randomFlag.emoji}`;
    await conn.sendFile(m.chat, randomFlag.image, "Thumbnail.jpg", txt, null);

    this.tekateki = this.tekateki ? this.tekateki : {};
    const id = m.chat;

    if (!(id in this.tekateki)) {
      this.tekateki[id] = [m, randomFlag]; // Guardamos el mensaje y la bandera
      setTimeout(() => delete this.tekateki[id], 30000); // Eliminar después de 30 segundos si no hay respuesta
    }
  }

  // Verificar respuesta
  if (this.tekateki && m.quoted && m.quoted.id == this.tekateki[m.chat][0].id) {
    const json = this.tekateki[m.chat][1];
    if (m.text.toLowerCase() == json.name.toLowerCase().trim()) {
      global.db.data.users[m.sender].exp += 10; // Suponiendo que se le da 10 de experiencia
      m.reply(`¡Respuesta correcta! 🎉 la respuesta es ${json.name}.`);
      delete this.tekateki[m.chat]; // Eliminar la pregunta
    } else if (similarity(m.text.toLowerCase(), json.name.toLowerCase().trim()) >= threshold) {
      m.reply(`Casi lo logras!`);
    } else {
      m.reply('Respuesta incorrecta!');
    }
  }
};
