import fetch from 'node-fetch';

const handler = async (m, {conn, text, usedPrefix, command}) => {
    if (!text) throw `*🧧 ingrese una petición para generar una imagen con dalle...*`;
    m.react('🕒')
    let name = await conn.getName(m.sender)
await conn.sendMessage(m.chat, { text: global.espere + `*${name}*`, contextInfo: { externalAdReply: {title: `${wm}`, body: `${await conn.getName(m.chat)}`, thumbnailUrl: imagen4, thumbnail: imagen4, showAdAttribution: true, sourceUrl: canal}}} , { quoted: fkontak })
    
    try {
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
