let userMessageCount = {}
let flags = [
    { img: 'https://cdn.jsdelivr.net/gh/lipis/flag-icons@7.2.3/flags/4x3/af.svg', country: 'Afghanistan' },
    { img: 'https://cdn.jsdelivr.net/gh/lipis/flag-icons@7.2.3/flags/4x3/al.svg', country: 'Albania' },
    { img: 'https://cdn.jsdelivr.net/gh/lipis/flag-icons@7.2.3/flags/4x3/ad.svg', country: 'Andorra' },
    // Agrega más banderas aquí
];

export async function before(m, { conn, args, usedPrefix, command }) {
    if (!m.message) return !0;
    if (!userMessageCount[m.sender]) userMessageCount[m.sender] = { count: 0, currentFlag: null };

    userMessageCount[m.sender].count += 1;

    if (userMessageCount[m.sender].count % 10 === 0) {
        // Elegir una bandera aleatoria
        const randomFlag = flags[Math.floor(Math.random() * flags.length)];
        userMessageCount[m.sender].currentFlag = randomFlag.country; // Guardar el país actual

        await conn.sendFile(m.chat, randomFlag.img, "Thumbnail.jpg", `¿A qué país pertenece esta bandera?`, null);
    }

    // Detectar la respuesta del usuario
    if (m.text.toLowerCase() === userMessageCount[m.sender].currentFlag.toLowerCase()) {
        await conn.reply(m.chat, `¡Correcto, ${m.pushName}! 🎉 La bandera es de ${userMessageCount[m.sender].currentFlag}.`, m);
        userMessageCount[m.sender].currentFlag = null; // Resetear el país actual
    } else if (userMessageCount[m.sender].currentFlag) {
        //await conn.reply(m.chat, `¡Casi, ${m.pushName}! 😅 Intenta de nuevo, la bandera es de ${userMessageCount[m.sender].currentFlag}.`, m);
        //await conn.reply(m.chat, `¡Vamos, tú puedes! 💪 ¿Qué país crees que es?`, m);
    }
}
