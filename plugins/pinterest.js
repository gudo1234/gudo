import Starlights from '@StarlightsTeam/Scraper';

let handler = async (m, { conn, args, usedPrefix, command }) => {
if (!args[0]) return conn.reply(m.chat,`🚩 Ingrese un enlace de Pinterest\n\nEjemplo:\n> *${usedPrefix + command}* https://ar.pinterest.com/pin/588142032613788991/`, m);

await m.react('🕓');
let name = await conn.getName(m.sender)
await conn.sendMessage(m.chat, { text: global.espere + `*${name}*`, contextInfo: { externalAdReply: {title: `${wm}`, body: `${await conn.getName(m.chat)}`, thumbnailUrl: imagen4, thumbnail: imagen4, showAdAttribution: true, sourceUrl: canal}}} , { quoted: fkontak })
try {
let { dl_url, quality, size, duration, url } = await Starlights.pinterestdl(args[0]);

let txt = '`乂  P I N T E R E S T  -  D L`\n\n'
txt += `  ✩   *Calidad* : ${quality}\n`;
txt += `  ✩   *Tamaño* : ${size}\n`;
txt += `  ✩   *Duracion* : ${duration}\n`;
txt += `  ✩   *Url* : ${url}\n\n`
txt += `> *${wm}*`


await conn.sendMessage(m.chat, { video: { url: dl_url }, caption: txt, mimetype: 'video/mp4', fileName:  `pinterest.mp4`}, {quoted: m })
await m.react('✅');
} catch {
await m.react('✖️');
}
};

handler.command = ['pinterestdl', 'pindl', 'pinterest', 'pin'];
handler.group = true;
export default handler;
