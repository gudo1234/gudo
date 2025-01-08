import PhoneNum from 'libphonenumber-js';

let regionNames = new Intl.DisplayNames(['es'], { type: 'region' });

let handler = async (m, { conn, usedPrefix, command }) => {
    // Aquí asumimos que el número de teléfono se pasa como un argumento del comando
    const phoneNumber = m.quoted[0]; // Suponiendo que el primer argumento es el número de teléfono

    if (!phoneNumber) {
        return m.reply('*Por favor, proporciona un número de teléfono.*');
    }

    try {
        const parsedNumber = PhoneNum.parsePhoneNumber(phoneNumber);
        
        if (parsedNumber) {
            const countryCode = parsedNumber.country;
            const countryName = regionNames.of(countryCode);
            const flagEmoji = String.fromCodePoint(...[...countryCode].map(char => 127397 + char.charCodeAt(0)));

            m.reply(`*País:* ${countryName} ${flagEmoji}`);
        } else {
            m.reply('*País:* No se pudo determinar el país.');
        }
    } catch (error) {
        m.reply('*Error:* El número de teléfono no es válido.');
    }
}

handler.command = ['coun', '🍋‍🟩'];
export default handler;
