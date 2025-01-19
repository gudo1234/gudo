import fetch from 'node-fetch';
import axios from 'axios';

const handler = async (m, {text, usedPrefix, command, conn}) => {
 try {
  if (!text) throw `${e} Ejemplo ${usedPrefix}cuevana Nemo`;
  let aaaa;
  let img;
    aaaa = await searchC(text);
    const randomIndex = Math.floor(Math.random() * aaaa.length);
    try {
        img = 'https://wwv.cuevana8.com' + aaaa[randomIndex].image;
    } catch {
        img = 'https://www.poresto.net/u/fotografias/m/2023/7/5/f1280x720-305066_436741_5050.png';
    }    
  if (aaaa == '') throw `🛒`;                                        /* https://wwv.cuevana8.com */
  const res = await aaaa.map((v) => `*Título:* ${v.title}\n*Link:* ${v.link}`).join`\n\n─────────────────\n\n`;
  const ads = `✅ https://block-this.com/block-this-latest.apk\n\n≣≣≣≣≣≣≣≣≣≣≣≣≣≣≣≣≣≣≣≣≣≣≣≣≣≣\n\n`;
let name = await conn.getName(m.sender)
await conn.sendMessage(m.chat, { text: global.espere + `*${name}*`, contextInfo: { externalAdReply: {title: `${wm}`, body: `${await conn.getName(m.chat)}`, humbnailUrl: imagen4, thumbnail: imagen4, showAdAttribution: true, sourceUrl: canal}}} , { quoted: fkontak })
  conn.sendMessage(m.chat, {image: {url: img}, caption: ads + res}, {quoted: m});
 } catch {
   return conn.sendMessage(m.chat, {text: '*[❗] Error, no se obtuvieron resultados.'}, {quoted: m});   
 }    
};   
handler.command = ['cuevana', 'pelisplus'];
handler.group = true;
export default handler;

async function searchC(query) {
  const response = await axios.get(`https://wwv.cuevana8.com/search?q=${query}`);
  const $ = cheerio.load(response.data);
  const resultSearch = [];
  $('.MovieList .TPostMv').each((_, e) => {
    const element = $(e);
    const title = element.find('.TPostMv .Title').first().text();  
    const link = element.find('a').attr('href');
    const image = element.find('img').attr('src');
    resultSearch.push({ title, link, image });
  });
  return resultSearch;
}