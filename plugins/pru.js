let userMessageCount = {}
let flags = [
    { img: 'https://upload.wikimedia.org/wikipedia/commons/1/1a/Flag_of_Argentina.svg', country: 'Argentina' },
    { img: 'https://upload.wikimedia.org/wikipedia/en/0/05/Flag_of_Brazil.svg', country: 'Brasil' },
    { img: 'https://upload.wikimedia.org/wikipedia/commons/7/78/Flag_of_Chile.svg', country: 'Chile' },
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

        await conn.sendFile(m.chat, randomFlag.img, "Thumbnail.jpg", `¿A qué país pertenece esta bandera?`, null, null, rcanal);
    }

    // Detectar la respuesta del usuario
    if (m.text.toLowerCase() === userMessageCount[m.sender].currentFlag.toLowerCase()) {
        await conn.reply(m.chat, `¡Correcto, ${m.pushName}! 🎉 La bandera es de ${userMessageCount[m.sender].currentFlag}.`, m);
        userMessageCount[m.sender].currentFlag = null; // Resetear el país actual
    }
}
