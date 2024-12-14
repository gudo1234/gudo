import fs from 'fs';
import path from 'path';
import uploadImage from '../lib/uploadImage.js'
import { sticker } from '../lib/sticker.js';

let handler = async (m, { conn, usedPrefix }) => {
    let who;
    if (m.isGroup) who = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : false;
    else who = m.chat;
    if (!who) return conn.reply(m.chat, '🧧 Menciona al usuario con *@user*', m, rcanal);

    let user = global.db.data.users[who];
    let name = conn.getName(who);
    let name2 = conn.getName(m.sender);
    await m.react('❤');
    let str = `${name2} mató🔫 a ${name}`.trim();
    if (m.isGroup){
    
    // Directorio que contiene las imágenes
    let pp = 'https://telegra.ph/file/522a73331ae152621c923.mp4' 
   let pp2 = 'https://telegra.ph/file/148e7e7dfc714ed0bfcb0.mp4' 
   let pp3 = 'https://telegra.ph/file/7266c8807b8b5f4f8fcb8.mp4' 
   let pp4 = 'https://telegra.ph/file/d062792b53662e872581d.mp4' 
   let pp5 = 'https://telegra.ph/file/bb106621351108cf38dc0.mp4'
    
    const videos = [pp, pp2, pp3, pp4, pp5];
    const video = videos[Math.floor(Math.random() * videos.length)];
    conn.sendMessage(m.chat, { video: { url: video }, gifPlayback: true, caption:str, mentions: [m.sender] },{ quoted: null })
    };
   
  // await m.react('🔥');
}

handler.help = ['violar @tag'];
handler.tags = ['fun'];
handler.command = ['matar', 'kill'];
handler.register = false;
handler.group = true;

export default handler;