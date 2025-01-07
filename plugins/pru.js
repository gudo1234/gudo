import moment from 'moment-timezone';
import PhoneNum from 'awesome-phonenumber';

let regionNames = new Intl.DisplayNames(['en'], { type: 'region' });

let handler = async (m, { conn, usedPrefix, command }) => {
    // Asegúrate de obtener el código de región correctamente
    let phoneNumber = new PhoneNum(m.sender); // Suponiendo que m.sender es el número de teléfono
    let countryCode = phoneNumber.getRegionCode(); // Obtiene el código de región
    let country = regionNames.of(countryCode); // Obtiene el nombre del país
    m.reply(`*País:* ${country.toUpperCase()}`);
}

handler.command = ['🍋‍🟩'];
export default handler;
