import moment from 'moment-timezone';

let regionNames = new Intl.DisplayNames(['es'], { type: 'region' }); // Cambié 'en' a 'es' para español

let handler = async (m, { conn, usedPrefix, command }) => {
  const format = new Intl.NumberFormat('es-ES'); // Cambié a 'es-ES' para español

  // Obtener el código de región internacional
  let locale = format.resolvedOptions().locale; // Obtiene el locale completo
  let regionCode = locale.includes('-') ? locale.split('-')[1] : locale; // Maneja el caso sin guion

  // Obtener el nombre del país
  let country = regionNames.of(regionCode);
  
  // Obtener el emoji de la bandera
  let flagEmoji = String.fromCodePoint(...[...regionCode].map(c => 127397 + c.charCodeAt(0)));

  // Responder con el país detectado y su emoji de bandera
  conn.reply(m.chat, `*País:* ${country} ${flagEmoji}`, m);
}

handler.command = ['🍋‍🟩'];
export default handler;
