import { igdl } from 'ruhend-scraper';

const handler = async (m, { text, conn, args, usedPrefix, command }) => {
  if (!args[0]) {
    return conn.reply(m.chat, 'Ingresa Un Link De Facebook', m, rcanal);
  }

  let res;
  try {
    res = await igdl(args[0]);
  } catch (error) {
    return conn.reply(m.chat, 'Error al obtener datos. Verifica que el enlace sea el correcto\n\n*Comando opcional:* .fb2', m, rcanal);
  }

  let result = res.data;
  if (!result || result.length === 0) {
    return conn.reply(m.chat, 'No se encontraron resultados. prueba con .fb2', m);
  }

  let data;
  try {
    data = result.find(i => i.resolution === "720p (HD)") || result.find(i => i.resolution === "480p (SD)");
  } catch (error) {
    return conn.reply(m.chat, 'Error al procesar los datos. Pueba con .fb2', m, rcanal);
  }

  if (!data) {
    return conn.reply(m.chat, 'No se encontró una resolución adecuada. Prueba con .fb2', m, rcanal);
  }

  let video = data.url;
  try {
let name = await conn.getName(m.sender)
await conn.sendMessage(m.chat, { text: global.espere + `*${name}*`, contextInfo: { externalAdReply: {title: `${wm}`, body: `${await conn.getName(m.chat)}`, humbnailUrl: imagen4, thumbnail: imagen4, showAdAttribution: true, sourceUrl: canal}}} , { quoted: fkontak })
    await conn.sendMessage(m.chat, { video: { url: video }, caption: null, fileName: 'fb.mp4', mimetype: 'video/mp4' }, { quoted: m });
  } catch (error) {
    return conn.reply(m.chat, 'Error al enviar el video.', m, rcanal);
  }
};

handler.command = ['fb', 'facebook', 'facebok']
handler.group = true;

export default handler;