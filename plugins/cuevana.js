import fetch from 'node-fetch';
import axios from 'axios';

const handler = async (m, {text, usedPrefix, command, conn}) => {
 try {
  if (!text) throw `Ejemplo ${usedPrefix}cuevana Nemo`;
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
conn.sendMessage(m.chat, { text: `Espere un momento ${name}`, contextInfo: {
    mentionedJid: [m.sender],
    groupMentions: [],
    isForwarded: true,
    forwardedNewsletterMessageInfo: {
      newsletterJid: '120363285614743024@newsletter',
      newsletterName: `꙳🧧𓆩ίʑ᭘ɱί-ⲃⲟτ𓆪🧧꙳`,
      serverMessageId: 0
    },
    businessMessageForwardInfo: { businessOwnerJid: '50492280729@s.whatsapp.net' },
    forwardingScore: 9999,
    externalAdReply: {
      title: `${await conn.getName(m.chat)}`,
      body: '©️ Powered By 𓆩᮫࣭݊͜?☃️࣭݊ျ֘▹ⲉ꯭𝖽α꯭૨‹࣭݊⸸࣭݊͜𓆪',
      thumbnailUrl: imagen4,
thumbnail: imagen4,
      sourceUrl: 'https://www.atom.bio/edar_',
      //mediaType: 1,
      //renderLargerThumbnail: true
    }
  }},{quoted: fkontak})
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