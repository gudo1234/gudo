import moment from 'moment-timezone';
import PhoneNum from 'awesome-phonenumber';

// Mapa simple de códigos de región a nombres de países y sus banderas
const regionMap = {
    'US': '🇺🇸 ESTADOS UNIDOS',
    'MX': '🇲🇽 MÉXICO',
    'ES': '🇪🇸 ESPAÑA',
    'HN': '🇭🇳 HONDURAS', // Agregado Honduras
    'AR': '🇦🇷 ARGENTINA',
    'BR': '🇧🇷 BRASIL',
    'CO': '🇨🇴 COLOMBIA',
    'CL': '🇨🇱 CHILE',
    'PE': '🇵🇪 PERÚ',
    'VE': '🇻🇪 VENEZUELA',
    'FR': '🇫🇷 FRANCIA',
    'DE': '🇩🇪 ALEMANIA',
    'IT': '🇮🇹 ITALIA',
    'GB': '🇬🇧 REINO UNIDO',
    'JP': '🇯🇵 JAPÓN',
    'CN': '🇨🇳 CHINA',
    'IN': '🇮🇳 INDIA',
    'RU': '🇷🇺 RUSIA',
    'AU': '🇦🇺 AUSTRALIA',
    'ZA': '🇿🇦 SUDÁFRICA',
    'KR': '🇰🇷 COREA DEL SUR',
    'NG': '🇳🇬 NÍGERIA',
    // Agrega más códigos y nombres según sea necesario
};

let handler = async (m, { conn, usedPrefix, command }) => {
    let phoneNumber = new PhoneNum(m.sender); // Suponiendo que m.sender es el número de teléfono
    let countryCode = phoneNumber.getRegionCode(); // Obtiene el código de región
    console.log(`Código de región obtenido: ${countryCode}`); // Para depuración
    console.log(`Número de teléfono: ${m.sender}`); // Para verificar el número de teléfono

    let country = regionMap[countryCode] || 'DESCONOCIDO'; // Obtiene el nombre del país o 'DESCONOCIDO' si no está en el mapa
    m.reply(`*País:* ${country}`);
}

handler.command = ['coun'];
export default handler;
