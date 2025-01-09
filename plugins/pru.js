let userMessageCount = {};
let flags = require('./flags.json');

export async function before(m, { conn, args, usedPrefix, command }) {
    if (!m.message) return !0;
    if (!userMessageCount[m.sender]) userMessageCount[m.sender] = 0;

    userMessageCount[m.sender] += 1;

    if (userMessageCount[m.sender] % 10 === 0) {
        let randomFlag = flags[Math.floor(Math.random() * flags.length)];
        let hexImage = randomFlag.hex_image;
        let country = randomFlag.country;
        let buffer = Buffer.from(hexImage, 'hex');

        await conn.sendFile(m.chat, buffer, "Thumbnail.jpg", `🕒 ¿De qué país es esta bandera?`, null);

        conn.once('message', async (response) => { // Cambié a 'once' para evitar múltiples escuchas
            if (response.body.toLowerCase() === country.toLowerCase()) {
            await conn.reply(m.chat, `¡Correcto, ${m.pushName}! 🎉 Es ${country}.`, m);
            } else {
            await conn.reply(m.chat, `¡incorrect, ${m.pushName}! intenta de nuevo`, m);
            }
        });
    }
}
