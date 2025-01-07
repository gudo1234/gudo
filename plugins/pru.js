import moment from 'moment-timezone'
import PhoneNum from 'awesome-phonenumber'

let handler = async (m, { conn, usedPrefix, command }) => {

const format = new Intl.NumberFormat('en'); // Puedes usar el locale que prefieras
const regionNames = new Intl.DisplayNames(['en'], { type: 'region' });

// Obtener el código de región internacional
let regionCode = format.resolvedOptions().locale.split('-')[1]; // Esto es solo un ejemplo

// Obtener el nombre del país
let country = regionNames.of(regionCode);
  conn.reply(m.chat, `*Pais:* ${country}\nxd ${regionCode}`, m)
}

handler.command = ['play']
handler.group = true
export default handler
