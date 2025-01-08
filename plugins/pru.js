import moment from 'moment-timezone';
import PhoneNum from 'awesome-phonenumber';

let regionNames = new Intl.DisplayNames(['en'], { type: 'region' });

let handler = async (m, { conn, usedPrefix, command }) => {
    let phoneNumber = m.text.split(' ')[1];

    if (!phoneNumber) {
        return m.reply('Por favor, proporciona un número de teléfono. Ejemplo: !coun +1234567890');
    }

    let phone = new PhoneNum(phoneNumber);
    
    let countryCode = phone.getRegionCode();
    let countryName = regionNames.of(countryCode);

    let flag = String.fromCodePoint(...[...countryCode].map(c => 127397 + c.charCodeAt(0)));

    m.reply(`*País:* ${countryName} ${flag}`);
}

handler.command = ['coun'];
export default handler;
