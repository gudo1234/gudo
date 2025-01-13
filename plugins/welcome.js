/*import { WAMessageStubType } from '@whiskeysockets/baileys';
import { sticker } from '../lib/sticker.js'
import fetch from 'node-fetch';
export async function before(m, { conn, participants, groupMetadata }) {

let fkontak = { "key": { "participants":"0@s.whatsapp.net", "remoteJid": "status@broadcast", "fromMe": false, "id": "Halo" }, "message": { "contactMessage": { "vcard": `BEGIN:VCARD\nVERSION:3.0\nN:Sy;Bot;;;\nFN:y\nitem1.TEL;waid=${m.sender.split('@')[0]}:${m.sender.split('@')[0]}\nitem1.X-ABLabel:Ponsel\nEND:VCARD` }}, "participant": "0@s.whatsapp.net" }
  if (!m.messageStubType || !m.isGroup) return true;
let pp = await conn.profilePictureUrl(m.messageStubParameters[0], 'image').catch(_ => 'https://qu.ax/casQP.jpg')
  let im = await (await fetch(`${pp}`)).buffer()
  let vn2 = './media/adios.mp3';

  let chat = global.db.data.chats[m.chat];
  const user = `@${m.sender.split`@`[0]}`;
  let text = `🚩 *Adios* +${m.messageStubParameters[0].split`@`[0]}`
  const getMentionedJid = () => {
    return m.messageStubParameters.map(param => `${param}@s.whatsapp.net`);
  };
  let who = m.messageStubParameters[0] + '@s.whatsapp.net';
  let userName = user ? user.name : await conn.getName(who);
  let or = ['stiker', 'audio', 'boton'];
  let media = or[Math.floor(Math.random() * 3)]
  let stiker = await sticker(imagen7, false, global.packname, global.author)
  if (chat.welcome && (m.messageStubType === 28 || m.messageStubType === 32)) {
if (media === 'stiker')
this.sendFile(m.chat, stiker, 'sticker.webp', '',null, true, { contextInfo: { 'forwardingScore': 200, 'isForwarded': false, externalAdReply:{ showAdAttribution: false, title: `👋🏻ADIOS +${m.messageStubParameters[0].split`@`[0]}`, body: 'Esperemos que no vuelva -_-', mediaType: 2, sourceUrl: 'https://whatsapp.com/channel/0029VaXHNMZL7UVTeseuqw3H', thumbnail: im}}}, { quoted: null })

if (media === 'audio')
this.sendMessage(m.chat, { audio: { url: vn2 }, 
    contextInfo: { forwardedNewsletterMessageInfo: { 
    newsletterJid: id_canal, 
    serverMessageId: '', 
    newsletterName: wm }, forwardingScore: 9999999, isForwarded: true, mentionedJid: getMentionedJid(), "externalAdReply": { 
    "title": `👋🏻 ADIOS +${m.messageStubParameters[0].split`@`[0]}`, 
    "body": 'Esperemos que no vuelva -_-', 
    "previewType": "PHOTO", 
    "thumbnailUrl": null,
    "thumbnail": im, 
    "sourceUrl": 'https://www.atom.bio/edar_', 
    "showAdAttribution": true}}, 
     seconds: '4556', ptt: true, mimetype: 'audio/mpeg', fileName: `error.mp3` }, { quoted: fkontak, ephemeralExpiration: 24*60*100, disappearingMessagesInChat: 24*60*100})

if (media === 'boton')
conn.sendMessage(m.chat, {
    image: im,
    caption: text,
    footer: 'Esperemos que no vuelva -_-',
    buttons: [
      {
        buttonId: ".trizte",
        buttonText: {
          displayText: "Adios 😔",
        },
        type: 1,
      },
      {
        buttonId: ".consejo",
        buttonText: {
          displayText: "Dime algo",
        },
        type: 1,
      },
    ],
    viewOnce: true,
    headerType: 4,
    mentions: [m.sender],
  }, { quoted: fkontak});
  }
      }*/

import { WAMessageStubType } from '@whiskeysockets/baileys';
import fetch from 'node-fetch';
import { createCanvas, loadImage } from 'canvas';

export async function before(m, { conn, participants, groupMetadata }) {
    if (!m.messageStubType || !m.isGroup) return true;

    let pp = await conn.profilePictureUrl(m.messageStubParameters[0], 'image').catch(_ => 'https://qu.ax/casQP.jpg');
    let im = await (await fetch(`${pp}`)).buffer();
    
    let chat = global.db.data.chats[m.chat];
    const getMentionedJid = () => {
        return m.messageStubParameters.map(param => `${param}@s.whatsapp.net`);
    };
    
    let who = m.messageStubParameters[0] + '@s.whatsapp.net';
    let user = global.db.data.users[who];
    let userName = user ? user.name : await conn.getName(who);
    
    if (chat.welcome && (m.messageStubType === 28 || m.messageStubType === 32)) {
        // Crear el canvas
        const canvas = createCanvas(800, 400);
        const ctx = canvas.getContext('2d');

        // Cargar la imagen del perfil
        const profileImage = await loadImage(im);
        ctx.drawImage(profileImage, 50, 50, 100, 100); // Dibujar la imagen del perfil

        // Añadir texto
        ctx.font = '30px Arial';
        ctx.fillStyle = 'black';
        ctx.fillText(`Adiós, ${userName}!`, 200, 100);
        ctx.fillText(`Grupo: ${groupMetadata.subject}`, 200, 150);

        // Convertir a JPG y enviar
        const buffer = canvas.toBuffer('image/jpeg');
        await conn.sendFile(m.chat, buffer, 'despedida.jpg', '', m);
    }
}
