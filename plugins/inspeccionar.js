let handler = async (m, { conn, args, text, usedPrefix, command }) => {
    if (!text) throw `${e} *Proporcione un link de un canal de WhatsApp junto al comando*`;

    const regex = /https:\/\/chat\.whatsapp\.com\/([A-Za-z0-9]+)/;
    const match = text.match(regex);

    if (match && match[1]) {
        const id = match[1] + '@newsletter';
        m.reply(`${e} *ID: ${id}*`);
    } else {
        throw `${e} *El enlace proporcionado no es válido*`;
    }
}

handler.command = ['id', 'inspeccionar'];
handler.group = true;
export default handler;
