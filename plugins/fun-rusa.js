import fs from 'fs';
import path from 'path';

let handler = async (m, { conn, usedPrefix }) => {
    let who;
    if (m.isGroup) who = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : false;
    else who = m.chat;
    if (!who) throw 'Etiqueta o menciona a alguien';

    let user = global.db.data.users[who];
    let name = conn.getName(who);
    let name2 = conn.getName(m.sender);
   // m.react('⏳');
    await conn.sendMessage(m.chat, { react: { text: '🔥', key: m.key } })
    let str = `${name2} le está haciendo una rusa a ${name}`.trim();
    if (m.isGroup){
    
    let pp = 'https://telegra.ph/file/e4412c087db1b1a7a4022.mp4' 
    let pp2 = 'https://telegra.ph/file/7e6bd15e33a1d77d6fb15.mp4'
    let pp3 = 'https://telegra.ph/file/de3cbbb4611242eb0648c.mp4' 
    let pp4 = 'https://telegra.ph/file/4ca2676e76364d6861852.mp4' 
    let pp5 = 'https://telegra.ph/file/1099709e53a16a8a791fd.mp4' 
    let pp6 = 'https://telegra.ph/file/3baffe20cdfbb03d31e45.mp4' 
    let pp7 = 'https://telegra.ph/file/7cc41bab371611124693e.mp4' 
    let pp8 = 'https://telegra.ph/file/adaefc5b25537d948b959.mp4' 
    const videos = [pp, pp2, pp3, pp4, pp5, pp6, pp7, pp8];
    const video = videos[Math.floor(Math.random() * videos.length)];
    conn.sendMessage(m.chat, { video: { url: video }, gifPlayback: true, caption:str, mentions: [m.sender] },{ quoted: null })
    };

}

handler.help = ['rusa @tag'];
handler.tags = ['fun'];
handler.command = /^(boobjob|rusa)$/i;
handler.group = true;

export default handler;