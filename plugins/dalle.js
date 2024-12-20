import fetch from 'node-fetch';

const handler = async (m, {conn, text, usedPrefix, command}) => {
    if (!text) throw `*🧧 ingrese una petición para generar una imagen con dalle...*`;
    m.react('🕒')
    await conn.sendMessage(m.chat, {text: '*🧧 Espere un momento...*'}, {quoted: m});
    
    try {
      // api venom xov ❤️
        const response = await fetch(`https://eliasar-yt-api.vercel.app/api/ai/text2img?prompt=${encodeURIComponent(text)}`);
        if (!response.ok) throw new Error('Network response was not ok');
        
        const buffer = await response.buffer();
        m.react('☑️')
        await conn.sendMessage(m.chat, {image: buffer}, {quoted: m});
    } catch {
        throw `Error...`;
    }
}

handler.command = ['dall-e', 'dalle', 'ia2', 'cimg', 'openai3', 'a-img', 'aimg', 'imagine'];
handler.group = true;
export default handler;
