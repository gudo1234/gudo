import { igdl } from 'ruhend-scraper';

const handler = async (m, { text, conn, args, usedPrefix, command }) => {
  if (!args[0]) {
    return conn.reply(m.chat, '${e} Ingresa Un Link De Facebook', m, rcanal);
  }

  let res;
  try {
    res = await igdl(args[0]);
  } catch (error) {
    return conn.reply(m.chat, '${e} Error al obtener datos. Verifica que el enlace sea el correcto.', m, rcanal);
  }

  let result = res.data;
  if (!result || result.length === 0) {
    return conn.reply(m.chat, `${e} No se encontraron resultados.`, m);
  }

  let data;
  try {
    data = result.find(i => i.resolution === "720p (HD)") || result.find(i => i.resolution === "480p (SD)");
  } catch (error) {
    return conn.reply(m.chat, `${e} Error al procesar los datos.`, m);
  }

  if (!data) {
    conn.sendButton(m.chat, `${e} Ocurrió un error temporal, toque el botón reintentar...`, wm, null, [['Reintentar', `.fb2 ${text}`]], null, null, m)
    //return conn.reply(m.chat, `${e} No se encontró una resolución adecuada.`, m);
  }

  let video = data.url;
  try {
conn.sendMessage(m.chat, { text: global.espere + `*${m.pushName}*`, contextInfo: { externalAdReply: {title: `${wm}`, body: `${await conn.getName(m.chat)}`, thumbnailUrl: img.getRandom(), thumbnail: img.getRandom(), showAdAttribution: true, sourceUrl: canal}}} , { quoted: fkontak })
    await conn.sendMessage(m.chat, { video: { url: video }, caption: null, fileName: 'fb.mp4', mimetype: 'video/mp4' }, { quoted: m });
  } catch (error) {
conn.sendButton(m.chat, `${e} Ocurrió un error temporal, toque el botón reintentar...`, wm, null, [['Reintentar', `.fb2 ${text}`]], null, null, m)
    //return conn.reply(m.chat, `${e} Error al enviar el video.`, m);
  }
};

handler.command = ['fb', 'facebook', 'facebok']
handler.group = true;

export default handler;
