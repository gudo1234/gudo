import moment from 'moment-timezone';
import PhoneNum from 'awesome-phonenumber';

let regionNames = new Intl.DisplayNames(['en'], { type: 'region' });

let handler = async (m, { conn, usedPrefix, command }) => {
    // Obtener el número de teléfono del mensaje
    let phoneNumber = m.text; // Obtener el texto del mensaje directamente

    let phone = new PhoneNum(phoneNumber);
    
    // Verificar si el número de teléfono es válido
    if (!phone.isValid()) {
        m.reply('El número de teléfono proporcionado no es válido. Asegúrate de incluir el código de país.');
        return; // Salimos de la función si no es válido
    }

    let countryCode = phone.getRegionCode();
    let countryName = regionNames.of(countryCode);

    let flag = String.fromCodePoint(...[...countryCode].map(c => 127397 + c.charCodeAt(0)));

    m.reply(`*País:* ${countryName} ${flag}`);
}

handler.command = ['coun', '🍋‍🟩'];
export default handler;
