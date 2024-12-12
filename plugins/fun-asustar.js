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
    await conn.sendMessage(m.chat, { react: { text: '😶', key: m.key } })
    let str = `${name2} asutó a ${name}`.trim();
    if (m.isGroup){

let pp = 'https://telegra.ph/file/9c1e963fa4d8269fb17a7.mp4' 
    let pp2 = 'https://telegra.ph/file/0c802b4fa616aaf1da229.mp4'
    let pp3 = 'https://telegra.ph/file/d0b166d9a363765e51657.mp4'
    let pp4 = 'https://telegra.ph/file/eae6dd9d45e45fe3a95ab.mp4'
let pp5 = 'https://telegra.ph/file/1785e535a4463c2a337c5.mp4' 
    let pp6 = 'https://telegra.ph/file/9774e1d74c3abf083ae01.mp4' 
    let pp7 = 'https://telegra.ph/file/c1673b418bc61db1e51a0.mp4' 
    let pp8 = 'https://telegra.ph/file/dcde646a58d8e9bf44867.mp4'
    const videos = [pp, pp2, pp3, pp4, pp5, pp6, pp7, pp8];
    const video = videos[Math.floor(Math.random() * videos.length)];
    conn.sendMessage(m.chat, { video: { url: video }, gifPlayback: true, caption:str, mentions: [m.sender] },{ quoted: null })
    };
   
  //  m.react('🔥');
}

handler.help = ['agarrar @tag'];
handler.tags = ['fun'];
handler.command = ['asustar'];
handler.group = true;

export default handler;