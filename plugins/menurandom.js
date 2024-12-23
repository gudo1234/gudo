import fetch from 'node-fetch';
import { getDevice } from "@whiskeysockets/baileys"
const handler = async (m, {conn, usedPrefix, usedPrefix: _p, __dirname, text, isPrems}) => {
  if (usedPrefix == 'a' || usedPrefix == 'A') return;
const nkdt = new Date();
const nktm = nkdt.getHours();

let rpt = "¡Recuerda descansar bien esta noche! Un buen sueño rejuvenece mente y cuerpo. ¡Hasta mañana! 🌙😴"
      if (nktm >= 3) rpt = "Para las altas horas de la madruga recomiendo escuchar el tema .play snowfall"
      if (nktm > 6) rpt = "☀️¡Buenos días!🌻"
      if (nktm >= 11) rpt = "🌇¡Buenas tardes!🍁"
      if (nktm >= 18) rpt = "🌠Que tengas una noche llena de paz y tranquilidad...🌙"
  try {
    const pp = imagen4;
    // let vn = './media/menu.mp3'
    let img = await (await fetch(`https://i.postimg.cc/Bbtkg1pC/IMG-20240629-WA0071.jpg`)).buffer()  
  // const img = './Menu2.jpg';
    const d = new Date(new Date + 3600000);
    const locale = 'es-ES';
    const week = d.toLocaleDateString(locale, {weekday: 'long'});
    const date = d.toLocaleDateString(locale, {day: '2-digit', month: '2-digit', year: 'numeric'});
    const _uptime = process.uptime() * 1000;
    const uptime = clockString(_uptime);
    const user = global.db.data.users[m.sender];
    const {money, joincount} = global.db.data.users[m.sender];
    const {exp, limit, level, role} = global.db.data.users[m.sender];
    const rtotalreg = Object.values(global.db.data.users).filter((user) => user.registered == true).length;
    const rtotal = Object.entries(global.db.data.users).length || '0'
    const more = String.fromCharCode(8206);
    const readMore = more.repeat(850);
    const taguser = '@' + m.sender.split('@s.whatsapp.net')[0];
    const doc = ['pdf', 'zip', 'vnd.openxmlformats-officedocument.presentationml.presentation', 'vnd.openxmlformats-officedocument.spreadsheetml.sheet', 'vnd.openxmlformats-officedocument.wordprocessingml.document'];
    const document = doc[Math.floor(Math.random() * doc.length)];
    //const nb = await fetch(`https://delirius-api-oficial.vercel.app/api/country?text=${m.sender}`);
//const res = await nb.json();
    const str = `
 •🍹 \`RANDOM\`
╭───╯
☯️]▸${usedPrefix}rw
☯️]▸${usedPrefix}loli
☯️]▸${usedPrefix}waifu
☯️]▸${usedPrefix}neko
☯️]▸${usedPrefix}neko2
☯️]▸${usedPrefix}rem
☯️]▸${usedPrefix}akira
☯️]▸${usedPrefix}akiyama
☯️]▸${usedPrefix}anna
☯️]▸${usedPrefix}asuna
☯️]▸${usedPrefix}ayuzawa
☯️]▸${usedPrefix}boruto
☯️]▸${usedPrefix}chiho
☯️]▸${usedPrefix}chitoge
☯️]▸${usedPrefix}deidara
☯️]▸${usedPrefix}erza
☯️]▸${usedPrefix}elaina
☯️]▸${usedPrefix}eba
☯️]▸${usedPrefix}emilia
☯️]▸${usedPrefix}hestia
☯️]▸${usedPrefix}hinata
☯️]▸${usedPrefix}inori
☯️]▸${usedPrefix}isuzu
☯️]▸${usedPrefix}itachi
☯️]▸${usedPrefix}itori
☯️]▸${usedPrefix}kaga
☯️]▸${usedPrefix}kagura
☯️]▸${usedPrefix}kaori
☯️]▸${usedPrefix}keneki
☯️]▸${usedPrefix}kotori
☯️]▸${usedPrefix}kurumi
☯️]▸${usedPrefix}madara
☯️]▸${usedPrefix}mikasa
☯️]▸${usedPrefix}miku
☯️]▸${usedPrefix}minato
☯️]▸${usedPrefix}naruto
☯️]▸${usedPrefix}nezuko
☯️]▸${usedPrefix}sagiri
☯️]▸${usedPrefix}sasuke
☯️]▸${usedPrefix}sakura
╰───╮╭───╯

𝗉𝗈𝗐𝖾𝗋𝖾𝖽 ⓒ 𝖨𝗓𝗎𝗆𝗂-𝖻𝗈𝗍 𝟤𝟢𝟤𝟢-𝟤𝟢𝟤𝟦.`.trim();

const fkontak2 = {'key': {'participants': '0@s.whatsapp.net', 'remoteJid': 'status@broadcast', 'fromMe': false, 'id': 'Halo'}, 'message': {'contactMessage': {'vcard': `BEGIN:VCARD\nVERSION:3.0\nN:Sy;Bot;;;\nFN:y\nitem1.TEL;waid=${m.sender.split('@')[0]}:${m.sender.split('@')[0]}\nitem1.X-ABLabel:Ponsel\nEND:VCARD`}}, 'participant': '0@s.whatsapp.net'};
      
await m.react('🍹')
conn.sendMessage(m.chat, { text: str,contextInfo: {
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
      title: '꙳🧧𓆩ίʑ᭘ɱί-ⲃⲟτ𓆪🧧꙳',
      body: '©️ Powered By 🌴]▸ⲉ𝖽αⲅ⁩◂[🇭🇳',
      thumbnailUrl: img,
      thumbnail: img,
      sourceUrl: 'https://www.atom.bio/edar_',
      //mediaType: 1
      //renderLargerThumbnail: true
    }
  }},{quoted: m})
/*    if (m.isGroup) {
      // await conn.sendFile(m.chat, vn, 'menu.mp3', null, m, true, { type: 'audioMessage', ptt: true})
      const fkontak2 = {'key': {'participants': '0@s.whatsapp.net', 'remoteJid': 'status@broadcast', 'fromMe': false, 'id': 'Halo'}, 'message': {'contactMessage': {'vcard': `BEGIN:VCARD\nVERSION:3.0\nN:Sy;Bot;;;\nFN:y\nitem1.TEL;waid=${m.sender.split('@')[0]}:${m.sender.split('@')[0]}\nitem1.X-ABLabel:Ponsel\nEND:VCARD`}}, 'participant': '0@s.whatsapp.net'};
      conn.sendMessage(m.chat, {image: pp, caption: str.trim(), mentions: [...str.matchAll(/@([0-9]{5,16}|0)/g)].map((v) => v[1] + '@s.whatsapp.net')}, {quoted: m});
    } else {
      // await conn.sendFile(m.chat, vn, 'menu.mp3', null, m, true, { type: 'audioMessage', ptt: true})
      const fkontak2 = {'key': {'participants': '0@s.whatsapp.net', 'remoteJid': 'status@broadcast', 'fromMe': false, 'id': 'Halo'}, 'message': {'contactMessage': {'vcard': `BEGIN:VCARD\nVERSION:3.0\nN:Sy;Bot;;;\nFN:y\nitem1.TEL;waid=${m.sender.split('@')[0]}:${m.sender.split('@')[0]}\nitem1.X-ABLabel:Ponsel\nEND:VCARD`}}, 'participant': '0@s.whatsapp.net'};
      conn.sendMessage(m.chat, {image: pp, caption: str.trim(), mentions: [...str.matchAll(/@([0-9]{5,16}|0)/g)].map((v) => v[1] + '@s.whatsapp.net')}, {quoted: fkontak2});
    }*/
  } catch {
    conn.reply(m.chat, '*[ ℹ️ ] Este menu tiene un error interno, por lo cual no fue posible enviarlo.*', m);
  }
}
handler.command = ['menurandom']
handler.group = true;
export default handler;
function clockString(ms) {
  const h = isNaN(ms) ? '--' : Math.floor(ms / 3600000);
  const m = isNaN(ms) ? '--' : Math.floor(ms / 60000) % 60;
  const s = isNaN(ms) ? '--' : Math.floor(ms / 1000) % 60;
  return [h, m, s].map((v) => v.toString().padStart(2, 0)).join(':');
}