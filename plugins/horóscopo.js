/* Codigo Realizado por BrunoSobrino 
https://github.com/BrunoSobrino */
import axios from 'axios';
import cheerio from 'cheerio';

const handler = async (m, { conn, args, usedPrefix, command }) => {
    const signo = args[0] ? args[0].toLowerCase() : null;
    const response = await scrapeHoroscopes(signo);

    if (response.success) {
        if (response.data) {
            conn.sendMessage(m.chat, { image: { url: response.data.imgUrl }, caption: response.data.prediction }, { quoted: m });
        } else {
            conn.sendMessage(m.chat, {text: `*[❗] No se encontro informacion sobre el signo ${signo}, ingresa un signo valido para obtener la información*`}, { quoted: m });
        }
    } else {
        const signos = Object.keys(response.data).join(', ');
        conn.sendMessage(m.chat, {text: `*[❗] Ingresa el signo que quieras obtener la información*\n\n—◉ Los signos disponibles son: ${signos}`}, { quoted: m });
    }
};

handler.command = ['horoscopo', 'horóscopo']
handler.group = true;
export default handler;

/* Funcion Realizada por BrunoSobrino 
https://github.com/BrunoSobrino */
async function scrapeHoroscopes(signo) {
    try {
        const url = 'https://horoscopo.abc.es/signos-zodiaco/horoscopo-hoy.html';
        const response = await axios.get(url);
        const $ = cheerio.load(response.data);
        const horoscopes = {};
        const promises = $('.horoscopo-daily li').map(async (index, element) => {
            const sign = $(element).find('.subtitle').text();
            const signUrl = 'https://horoscopo.abc.es' + $(element).find('.subtitle').parent().attr('href');
            const signResponse = await axios.get(signUrl);
            const sign$ = cheerio.load(signResponse.data);
            const prediction = sign$('div.inside > p').eq(2).text().trim();
            const imgUrl = $(element).find('img').attr('src');
            horoscopes[sign.toLowerCase()] = {
                prediction,
                imgUrl
            }}).get();
        await Promise.all(promises);
        if (signo) {
            return {
                success: true,
                data: horoscopes[signo.toLowerCase()]
            }} else {
            return {
                success: false,
                data: horoscopes
            }}} catch (error) {
        return {
            success: false,
            data: {}
        };
    }
}