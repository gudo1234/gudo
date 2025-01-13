let handler = async (m) => {
    const emojis = ['✅', '😩', '😁', '😆', '😍', '😂', '🪀'];

    for (let i = 0; i < emojis.length; i++) {
        // Usamos setTimeout para esperar un segundo antes de reaccionar
        setTimeout(async () => {
            await m.react(emojis[i]);
        }, i * 1000); // Multiplicamos el índice por 1000 para el tiempo en milisegundos
    }
}

handler.customPrefix = ['🤨'];
handler.command = new RegExp;
export default handler;
