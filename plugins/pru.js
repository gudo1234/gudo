import moment from 'moment-timezone';
import PhoneNum from 'awesome-phonenumber';

let regionNames = new Intl.DisplayNames(['en'], { type: 'region' });

let handler = async (m, { conn, usedPrefix, command }) => {
    // Obtener el número de teléfono del usuario
    let userPhoneNumber = m.sender; // Asumiendo que m.sender contiene el número de teléfono del usuario

    // Crear una instancia de PhoneNum
    let phone = new PhoneNum(userPhoneNumber);
    
    // Verificar si el número de teléfono es válido
    if (!phone.isValid()) {
        return m.reply('Parece que no tengo un número de teléfono válido para ti. Asegúrate de que esté configurado correctamente.');
    }

    let countryCode = phone.getRegionCode();
    let countryName = regionNames.of(countryCode);

    let flag = String.fromCodePoint(...[...countryCode].map(c => 127397 + c.charCodeAt(0)));

    m.reply(`*País:* ${countryName} ${flag}`);
}

handler.command = ['coun', '🍋‍🟩'];
export default handler;
