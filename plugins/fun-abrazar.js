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
    let str = `${name2} le da un abrazo a ${name}`.trim();
    if (m.isGroup){

let pp = "https://telegra.ph/file/4d80ab3a945a8446f0b15.mp4"
let pp2 = "https://telegra.ph/file/ef3a13555dfa425fcf8fd.mp4"
let pp3 = "https://telegra.ph/file/582e5049e4070dd99a995.mp4"
let pp4 = "https://telegra.ph/file/ab57cf916c5169f63faee.mp4"
let pp5 = "https://telegra.ph/file/fce96960010f6d7fc1670.mp4"
let pp6 = "https://telegra.ph/file/33332f613e1ed024be870.mp4" 
let pp7 = 'https://telegra.ph/file/bb106621351108cf38dc0.mp4'
    const videos = [pp, pp2, pp3, pp4, pp5, pp6, pp7];
    const video = videos[Math.floor(Math.random() * videos.length)];
    conn.sendMessage(m.chat, { video: { url: video }, gifPlayback: true, caption:str, mentions: [m.sender] },{ quoted: null })
    };
   
  //  m.react('🔥');
}

handler.help = ['agarrar @tag'];
handler.tags = ['fun'];
handler.command = ['abrazar','abrazo','abraso','abrazar'];
handler.group = true;

export default handler;