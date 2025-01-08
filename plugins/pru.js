import moment from 'moment-timezone';
import PhoneNum from 'awesome-phonenumber';

let regionNames = new Intl.DisplayNames(['en'], { type: 'region' });

let handler = async (m, { conn, usedPrefix, command }) => {
    // Verificar si hay un mensaje citado
    let quotedMessage = m.quoted ? m.quoted : m;
    let phoneNumber = quotedMessage.text; // Obtener el texto del mensaje citado

    if (!phoneNumber) {
        return m.reply('Por favor, cita un mensaje que contenga un número de teléfono. Ejemplo: !coun +1234567890');
    }

    let phone = new PhoneNum(phoneNumber);
    
    // Verificar si el número de teléfono es válido
    if (!phone.isValid()) {
        return m.reply('El número de teléfono proporcionado no es válido. Asegúrate de incluir el código de país.');
    }

    let countryCode = phone.getRegionCode();
    let countryName = regionNames.of(countryCode);

    let flag = String.fromCodePoint(...[...countryCode].map(c => 127397 + c.charCodeAt(0)));

    m.reply(`*País:* ${countryName} ${flag}`);
}

handler.command = ['coun', '🍋‍🟩'];
export default handler;
