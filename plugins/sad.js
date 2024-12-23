import { WAMessageStubType } from '@whiskeysockets/baileys';
import fetch from 'node-fetch';
let handler = async (m, { conn, args, usedPrefix, command}) => {

let name = await conn.getName(m.sender)
let vn = './media/prueba.mp3'
let pp = await (await fetch(`https://qu.ax/tKDez.jpg`)).buffer()
let pp2 = await (await fetch(`https://qu.ax/sUTYn.jpg`)).buffer()
let pp3 = await (await fetch(`https://qu.ax/FuyLG.jpg`)).buffer()
let pp4 = await (await fetch(`https://qu.ax/ofHUZ.jpg`)).buffer()
let pp5 = await (await fetch(`https://qu.ax/clDrb.jpg`)).buffer()
let pp6 = await (await fetch(`https://qu.ax/HgxgB.jpg`)).buffer()
let pp7 = await (await fetch(`https://qu.ax/ysxlZ.jpg`)).buffer()
let pp8 = await (await fetch(`https://qu.ax/cbeWi.jpg`)).buffer()
conn.sendMessage(m.chat, { audio: { url: vn }, 
    contextInfo: { forwardedNewsletterMessageInfo: { 
    newsletterJid: id_canal, 
    serverMessageId: '', 
    newsletterName: wm }, forwardingScore: 9999999, isForwarded: true, mentionedJid: [], "externalAdReply": { 
    "title": `💔Tu Eres Un Juguete😔`, 
    "body": `${name}!`, 
    "previewType": "PHOTO", 
    "thumbnailUrl": null,
    "thumbnail": [pp, pp2, pp3, pp4, pp5, pp6, pp7, pp8].getRandom(),
    "sourceUrl": 'https://www.atom.bio/edar_', 
    "showAdAttribution": true}}, 
     seconds: '4556', ptt: true, mimetype: 'audio/mpeg', fileName: `error.mp3` }, { quoted: m, ephemeralExpiration: 24*60*100, disappearingMessagesInChat: 24*60*100})
}

handler.customPrefix = /😭|😢|😔|😞|☹️|😰|😕|😪|😥|🙁|🤧|😭|😢|😔|😞|☹️|😰|😕|😪|😥|🙁|🥺|🥹|/
handler.command = new RegExp
export default handler