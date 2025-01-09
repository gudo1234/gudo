let userMessageCount = {};
let flags = require('./flags.json'); // Asegúrate de que el archivo flags.json esté en el mismo directorio

export async function before(m, { conn, args, usedPrefix, command }) {
    if (!m.message) return !0;
    if (!userMessageCount[m.sender]) userMessageCount[m.sender] = 0;

    userMessageCount[m.sender] += 1;

    if (userMessageCount[m.sender] % 10 === 0) {
        // Elegir una bandera aleatoria del archivo flags.json
        let randomFlag = flags[Math.floor(Math.random() * flags.length)];
        let img = randomFlag.hex_image; // Asegúrate de que tu objeto tenga una propiedad 'image' con la URL de la imagen
        let country = randomFlag.country; // Asegúrate de que tu objeto tenga una propiedad 'country' con el nombre del país

        await conn.sendFile(m.chat, img, "Thumbnail.jpg", `¿De qué país es esta bandera?`, null);

        // Esperar la respuesta del usuario
        conn.on('message', async (response) => {
            if (response.body.toLowerCase() === country.toLowerCase()) {
                await conn.sendMessage(m.chat, `¡Correcto, ${m.sender.split('@')[0]}! 🎉 Es ${country}.`, null);
                // Puedes agregar más lógica aquí si quieres
            } else {
                await conn.sendMessage(m.chat, `Incorrecto, ${m.sender.split('@')[0]}! 😢 Intenta de nuevo.`, m);
            }
        });
    }
}
