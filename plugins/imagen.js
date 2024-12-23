import {googleImage} from '@bochilteam/scraper';
const handler = async (m, {conn, text, usedPrefix, command}) => {
if (!text) throw `🧧 *Ejemplo:* ${usedPrefix + command} Ghostemane`;
let name = await conn.getName(m.sender)
await conn.sendMessage(m.chat, { text: global.espere + `*${name}*`, contextInfo: { externalAdReply: {title: `${wm}`, body: `${await conn.getName(m.chat)}`, thumbnailUrl: imagen4, thumbnail: imagen4, showAdAttribution: true, sourceUrl: canal}}} , { quoted: fkontak })
const res = await googleImage(text);
const image = await res.getRandom();
const link = image;
const messages = [['Imagen 1', wm, await res.getRandom(),
[[]], [[]], [[]], [[]]], ['Imagen 2', wm, await res.getRandom(), [[]], [[]], [[]], [[]]], ['Imagen 3', wm, await res.getRandom(), [[]], [[]], [[]], [[]]], ['Imagen 4', wm, await res.getRandom(), [[]], [[]], [[]], [[]]]]
await conn.sendCarousel(m.chat, `🚩 Resultado de ${text}`, '🔎 Imagen - Descargas', null, messages, m);
};
handler.help = ['imagen <query>'];
handler.tags = ['buscador', 'tools', 'descargas'];
handler.command = ['image','imagen'];
handler.group = true;
export default handler;
