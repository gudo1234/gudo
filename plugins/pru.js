import moment from 'moment-timezone';
import PhoneNum from 'awesome-phonenumber';

let regionNames = new Intl.DisplayNames(['en'], { type: 'region' });

let handler = async (m, { conn, usedPrefix, command }) => {
    // Obtener la dirección IP del usuario
    const ip = m.sender.split('@')[0]; // Simulación, en un entorno real necesitarías obtener la IP de otra manera
    const response = await fetch(`https://ipapi.co/${ip}/json/`);
    const data = await response.json();

    // Obtener el país y la bandera
    let country = data.country_name; // Nombre del país
    let countryCode = data.country; // Código del país (ISO)
    let flag = `🇦🇷`; // Aquí puedes usar un mapa de códigos para banderas, por ahora solo un ejemplo

    if (countryCode) {
        flag = String.fromCodePoint(...[...countryCode].map(c => 0x1F1E6 + c.charCodeAt(0) - 65));
    }

    m.reply(`*País:* ${country} ${flag}`);
};

handler.command = ['coun', '🍋‍🟩'];
export default handler;
