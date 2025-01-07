import moment from 'moment-timezone';
import PhoneNum from 'awesome-phonenumber';

let regionNames = new Intl.DisplayNames(['en'], { type: 'region' });

let handler = async (m, { conn, usedPrefix, command }) => {
  const format = new Intl.NumberFormat('en-EN'); // Puedes usar el locale que prefieras

  // Obtener el código de región internacional
  let locale = format.resolvedOptions().locale; // Obtiene el locale completo
  let regionCode = locale.includes('-') ? locale.split('-')[1] : locale; // Maneja el caso sin guion

  // Obtener el nombre del país
  let country = regionNames.of(regionCode);
  conn.reply(m.chat, `*País:* ${country}`, m);
}

handler.command = ['🍋‍🟩'];
export default handler;
