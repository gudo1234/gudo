import fs from 'fs';
import path from 'path';
import uploadImage from '../lib/uploadImage.js'
import { sticker } from '../lib/sticker.js';

let handler = async (m, { conn, usedPrefix }) => {
if (!global.db.data.chats[m.chat].modohorny) return conn.reply(m.chat, `🧧 El grupo no admite contenido *Nsfw.*\n\n> Para activarlo un *Administrador* debe usar el comando *.on modohorny*`, m, rcanal)
    let who;
    if (m.isGroup) who = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : false;
    else who = m.chat;
    if (!who) return conn.reply(m.chat, '🧧 Menciona al usuario con *@user*', m, rcanal);

    let user = global.db.data.users[who];
    let name = conn.getName(who);
    let name2 = conn.getName(m.sender);
    await m.react('❤');
    let str = `${name2} Se la metió💦 a ${name}`.trim();
    if (m.isGroup){
    
    // Directorio que contiene las imágenes
    let pp = 'https://telegra.ph/file/4852d9394ac5df461a883.mp4'
    let pp2 = 'https://telegra.ph/file/de3fb677e347071fd6626.mp4'
    let pp3 = 'https://telegra.ph/file/14dbc1e8a76df031829c1.mp4'
    let pp4 = 'https://telegra.ph/file/51ce93141cc5a864d225b.mp4'
    let pp5 = 'https://telegra.ph/file/9b9c67612de1126fc646a.mp4'
    let pp6 = 'https://c.top4top.io/m_2692wknma0.mp4'
    let pp7 = 'https://a.top4top.io/m_2692j233n0.mp4'
    let pp8 = 'https://e.top4top.io/m_2692d45n70.mp4'
    let pp9 = 'https://qu.ax/Zjunr.mp4'
    let pp10 = 'https://qu.ax/flcoX.mp4'
    let pp11 = 'https://qu.ax/GbwyW.mp4'
    let pp12 = 'https://qu.ax/McJzw.mp4'
    let pp13 = 'https://qu.ax/ehwLj.mp4'
    let pp14 = 'https://qu.ax/TkqPC.mp4'
    let pp15 = 'https://qu.ax/DpMje.mp4'
    
    const videos = [pp, pp2, pp3, pp4, pp5, pp6 ,pp7, pp8, pp9, pp10, pp11, pp12, pp13, pp14, pp15];
    const video = videos[Math.floor(Math.random() * videos.length)];
    conn.sendMessage(m.chat, { video: { url: video }, gifPlayback: true, caption:str, mentions: [m.sender] },{ quoted: null })
    };
   
  // await m.react('🔥');
}

handler.help = ['violar @tag'];
handler.tags = ['fun'];
handler.command = ['follar', 'violar', 'fuck'];
handler.register = false;
handler.group = true;

export default handler;