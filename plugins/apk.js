import {search, download} from 'aptoide-scraper';
const handler = async (m, {conn, usedPrefix: prefix, command, text}) => {
 if (!text) throw `Este comando es solo para descargar aplicaciones gratuitas y de pago. Escribe de esta manera, por ejemplo: \n*.apk facebook lite*`;
  try {    
    const searchA = await search(text);
    const data5 = await download(searchA[0].id);
    let response = `📲 Descargar aplicaciones 📲\n\n📌 *Nombre de la aplicación:* ${data5.name}\n📦 *Paquete:* ${data5.package}\n🕒 *Número de actualización:* ${data5.lastup}\n📥 *Tamaño de la aplicación:* ${data5.size}\n\n¿Por qué no sigues al dueño del bot, querido? 😄 amin le gusta que usen sus bots, así que síguelo en sus redes/ninstagram.com/amin1_tech1igsh=YzljYTk1ODg3Zg==‎‏`
    await conn.sendMessage(m.chat, {image: {url: data5.icon}, caption: response}, {quoted: m});
 if (data5.size.includes('GB') || data5.size.replace(' MB', '') > 999) {
      return await conn.sendMessage(m.chat, {text: '*[ 😁 ]El archivo es demasiado grande, por lo que no se enviará.'}, {quoted: m});
    }
    await conn.sendMessage(m.chat, {document: {url: data5.dllink}, mimetype: 'application/vnd.android.package-archive', fileName: data5.name + '.apk', caption: null}, {quoted: m});
  } catch {
    throw `${e} *Error, no se encontraron resultados para tu búsqueda.*`;
  }    
};
handler.command = ["apk","aplicación"] 

export default handler;
