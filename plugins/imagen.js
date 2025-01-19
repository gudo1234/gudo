import {googleImage} from '@bochilteam/scraper';
const handler = async (m, {conn, text, usedPrefix, command}) => {
if (!text) throw `🧧 *Ejemplo:* ${usedPrefix + command} Ghostemane`;
conn.sendMessage(m.chat, { text: global.espere + `*${m.pushName}*`, contextInfo: { externalAdReply: {title: `${wm}`, body: `${await conn.getName(m.chat)}`, thumbnailUrl: img.getRandom(), thumbnail: img.getRandom(), showAdAttribution: true, sourceUrl: canal}}} , { quoted: fkontak })
const res = await googleImage(text);
const image = await res.getRandom();
const link = image;
const messages = [['Imagen 1', wm, await res.getRandom(),
[[]], [[]], [[]], [[]]], ['Imagen 2', wm, await res.getRandom(), [[]], [[]], [[]], [[]]], ['Imagen 3', wm, await res.getRandom(), [[]], [[]], [[]], [[]]], ['Imagen 4', wm, await res.getRandom(), [[]], [[]], [[]], [[]]]]
await conn.sendCarousel(m.chat, `${e} Resultado de ${text}`, '🔎 Imagen - Descargas', null, messages, m);
};
handler.help = ['imagen <query>'];
handler.tags = ['buscador', 'tools', 'descargas'];
handler.command = ['image','imagen'];
handler.group = true;
export default handler;
