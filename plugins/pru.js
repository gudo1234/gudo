import fs from 'fs';
import fetch from 'node-fetch';
import countryData from './src/country.json';

let userMessageCount = {};

export async function before(m, { conn, args, usedPrefix, command }) {
    if (!m.message) return !0;
    if (!userMessageCount[m.sender]) userMessageCount[m.sender] = 0;

    userMessageCount[m.sender] += 1;

    if (userMessageCount[m.sender] % 10 === 0) {
        // Seleccionar un país aleatorio
        const randomCountry = countryData[Math.floor(Math.random() * countryData.length)];
        const imgBuffer = await fetch(randomCountry.image).then(res => res.buffer());

        // Enviar la imagen de la bandera
        await conn.sendFile(m.chat, imgBuffer, "Thumbnail.jpg", `¿De qué país es esta bandera? ${randomCountry.emoji}\n\nTienes 60 segundos para responder`, null);

        // Esperar la respuesta del usuario
        const filter = response => response.body.toLowerCase() === randomCountry.name.toLowerCase();
        const collector = conn.createMessageCollector(m.chat, filter, { time: 60000 }); // 15 segundos para responder

        collector.on('collect', async (msg) => {
            await m.reply(`¡Correcto, ${msg.sender}! La bandera es de ${randomCountry.name}! 🎉`);
            collector.stop(); // Detener el collector
        });

        collector.on('end', async collected => {
            if (collected.size === 0) {
                await m.reply(`Tiempo agotado. La respuesta era ${randomCountry.name}. 😢`);
            }
        });
    }
}
