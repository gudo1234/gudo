import moment from 'moment-timezone';
import PhoneNum from 'awesome-phonenumber';

let regionNames = new Intl.DisplayNames(['en'], { type: 'region' });

let handler = async (m, { conn, usedPrefix, command }) => {
    // Suponiendo que el número de teléfono se pasa como argumento
    let phoneNumber = m.text.split(' ')[1]; // Ejemplo: !coun +1234567890
    if (!phoneNumber) {
        return m.reply('Por favor, proporciona un número de teléfono. Ejemplo: !coun +1234567890');
    }

    // Crear una instancia de PhoneNum
    let phone = new PhoneNum(phoneNumber);
    
    // Obtener el país
    let countryCode = phone.getRegionCode();
    let countryName = regionNames.of(countryCode);
    
    // Obtener la bandera del país
    let flag = String.fromCodePoint(...[...countryCode].map(c => 127397 + c.charCodeAt(0)));

    // Responder con el nombre del país y la bandera
    m.reply(`*País:* ${countryName} ${flag}`);
}

handler.command = ['co'];
export default handler;
