import moment from 'moment-timezone';
import PhoneNum from 'awesome-phonenumber';

// Mapa simple de códigos de región a nombres de países
const regionMap = {
    'US': 'ESTADOS UNIDOS',
    'MX': 'MÉXICO',
    'ES': 'ESPAÑA',
    'HN': 'HONDURAS',
    // Agrega más códigos y nombres según sea necesario
};

let handler = async (m, { conn, usedPrefix, command }) => {
    // Asegúrate de obtener el código de región correctamente
    let phoneNumber = new PhoneNum(m.sender); // Suponiendo que m.sender es el número de teléfono
    let countryCode = phoneNumber.getRegionCode(); // Obtiene el código de región
    let country = regionMap[countryCode] || 'DESCONOCIDO'; // Obtiene el nombre del país o 'DESCONOCIDO' si no está en el mapa
    m.reply(`*País:* ${country}`);
}

handler.command = ['🍋‍🟩'];
export default handler;
