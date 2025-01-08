import moment from 'moment-timezone';
import PhoneNum from 'awesome-phonenumber';

let regionNames = new Intl.DisplayNames(['en'], { type: 'region' });

let handler = async (m, { conn, usedPrefix, command }) => {
    // Obtener el número de teléfono del sender
    let phoneNumber = m.sender; // Aquí asumimos que el sender tiene el formato adecuado

    if (!phoneNumber) {
        return m.reply('No se pudo detectar el número de teléfono del usuario. Asegúrate de que tu número esté configurado correctamente.');
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
