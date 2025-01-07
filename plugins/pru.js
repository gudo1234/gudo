import moment from 'moment-timezone';
import PhoneNum from 'awesome-phonenumber';

let handler = async (m, { conn, usedPrefix, command }) => {
  // Suponiendo que el número de teléfono viene en el mensaje
  let phoneNumber = m.sender; // Esto es solo un ejemplo, deberías obtener el número de manera adecuada

  // Crear una instancia de PhoneNum
  let phone = PhoneNum(phoneNumber);

  // Obtener el país a partir del número de teléfono
  let country = phone.getRegionCode(); // Obtiene el código de región
  let countryName = phone.getCountry(); // Obtiene el nombre del país

  conn.reply(m.chat, `*País:* ${countryName} (${country})`, m);
}

handler.command = ['🍋‍🟩'];
export default handler;
