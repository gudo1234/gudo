let handler = async (m, { conn, usedPrefix, command }) => {
    let q = m.quoted ? m.quoted : m;
    let mime = (q.msg || q).mimetype || q.mediaType || '';
    
    if (/image/.test(mime)) {
        try {
            // Usar el método de descarga directo
            let img = await conn.downloadMediaMessage(q);
            if (!img) throw `🚩 *Responda a una imagen*`;
            await conn.updateProfilePicture(m.chat, img);
            m.reply(`🍋‍🟩 _*Foto de perfil del grupo actualizada*_`);
            m.react('✅');
        } catch (error) {
            throw `🚩 *Error al actualizar la foto de perfil: ${error.message}*`;
        }
    } else {
        throw `🚩 *Responda a una imagen*`;
    }
}

handler.command = ['setppgc', 'setppgroup', 'icongc'];
handler.group = true;
handler.admin = true;
handler.botAdmin = true;

export default handler;
