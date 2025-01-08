import PhoneNum from 'libphonenumber-js';

let regionNames = new Intl.DisplayNames(['es'], { type: 'region' });

let handler = async (m, { conn, usedPrefix, command }) => {
    // Aquí obtendremos el número de teléfono del usuario
    const phoneNumber = m.sender; // Suponiendo que m.sender contiene el número de teléfono
    const parsedNumber = PhoneNum.parsePhoneNumber(phoneNumber);
    
    if (parsedNumber) {
        const countryCode = parsedNumber.country;
        const countryName = regionNames.of(countryCode);
        const flagEmoji = String.fromCodePoint(...[...countryCode].map(char => 127397 + char.charCodeAt(0)));

        m.reply(`*País:* ${countryName} ${flagEmoji}`);
    } else {
        m.reply('*País:* No se pudo determinar el país.');
    }
}

handler.command = ['coun', '🍋‍🟩'];
export default handler;
