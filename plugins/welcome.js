import { WAMessageStubType } from '@whiskeysockets/baileys';
import { sticker } from '../lib/sticker.js'
import fetch from 'node-fetch';
export async function before(m, { conn, participants, groupMetadata }) {

let fkontak = { "key": { "participants":"0@s.whatsapp.net", "remoteJid": "status@broadcast", "fromMe": false, "id": "Halo" }, "message": { "contactMessage": { "vcard": `BEGIN:VCARD\nVERSION:3.0\nN:Sy;Bot;;;\nFN:y\nitem1.TEL;waid=${m.sender.split('@')[0]}:${m.sender.split('@')[0]}\nitem1.X-ABLabel:Ponsel\nEND:VCARD` }}, "participant": "0@s.whatsapp.net" }
  if (!m.messageStubType || !m.isGroup) return true;
let pp = await conn.profilePictureUrl(m.messageStubParameters[0], 'image').catch(_ => 'https://qu.ax/casQP.jpg')
  let im = await (await fetch(`${pp}`)).buffer()
  let vn = './media/a.mp3' //welcome bendicion
let vn2 = './media/bien.mp3' //welcome entrada épica
  let vn3 = './media/adios.mp3'; //y se marchó
  let vn4 = './media/prueba3.mp3'; //welcome calamar

  let chat = global.db.data.chats[m.chat];
  const user = `@${m.sender.split`@`[0]}`;
  const getMentionedJid = () => {
    return m.messageStubParameters.map(param => `${param}@s.whatsapp.net`);
  };
  let who = m.messageStubParameters[0] + '@s.whatsapp.net';
  let userName = user ? user.name : await conn.getName(who);
  let or = ['stiker', 'audio', 'boton', 'texto'];
  let media = or[Math.floor(Math.random() * 4)]
  let stiker = await sticker(imagen7, false, global.packname, global.author)
  let b = `🖐🏻 _Adios_ *@${m.messageStubParameters[0].split`@`[0]}*`
// Welcome 
if (chat.welcome && m.messageStubType == 27) {
  let wel = `°   /)🎩/)
    (｡•ㅅ•｡)𖹭︩︪𝚆꯭᪶۫۫͝𝙴꯭᪶͡𝙻᪶۫۫͝𝙲꯭᪶֟፟፝͡𝙾᪶۫۫͝𝙼꯭᪶͡𝙴᪶𖹭︩︪*
    ╭∪─∪─────────❤︎₊᪲
¡Hola!🍷 *@${m.messageStubParameters[0].split`@`[0]}* buenos días/tardes/noches.\n🎉¡Bienvenido a *${groupMetadata.subject}*!\n\n> 🐢Disfruta del grupo, diviértete, no olvides en leer las reglas...
    ╰────────────❤︎₊᪲`
  this.sendMessage(m.chat, { 
        text: wel, 
        contextInfo: {
            mentionedJid: [m.messageStubParameters[0]], // Asegúrate de incluir al nuevo usuario aquí
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
                title: `🍒ᴡᴇʟᴄᴏᴍᴇ🍒`,
                body: 'Izumi te da la bienvenida',
                thumbnailUrl: im,
                thumbnail: im,
                sourceUrl: 'https://www.atom.bio/edar_'
            }
        }
    }, { quoted: fkontak });
}

// bye 
  if (chat.welcome && (m.messageStubType === 28 || m.messageStubType === 32)) {

if (media === 'stiker') {
    this.sendFile(m.chat, stiker, 'sticker.webp', '', null, true, {
        contextInfo: {
            'forwardingScore': 200,
            'isForwarded': false,
            externalAdReply: {
                showAdAttribution: false,
                title: `👋🏻ADIOS +${m.messageStubParameters[0].split`@`[0]}`,
                body: 'Esperemos que no vuelva -_-',
                mediaType: 2,
                sourceUrl: 'https://whatsapp.com/channel/0029VaXHNMZL7UVTeseuqw3H',
                thumbnail: im
            }
        }
    }, { quoted: null }).then(async (message) => {
        const emojis = ['🙂‍↔️', '🫱🏻', '🫲🏻', '🛫'];
        for (let i = 0; i < emojis.length; i++) {
            setTimeout(async () => {
                await message.react(emojis[i]);
            }, i * 2000);
        }
    });
}

if (media === 'audio')
this.sendMessage(m.chat, { audio: { url: vn3 }, 
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
     seconds: '4556', ptt: true, mimetype: 'audio/mpeg', fileName: `error.mp3` }, { quoted: fkontak, ephemeralExpiration: 24*60*100, disappearingMessagesInChat: 24*60*100}).then(async (message) => {
        const emojis = ['🙂‍↔️', '🫱🏻', '🫲🏻', '🛫'];
        for (let i = 0; i < emojis.length; i++) {
            setTimeout(async () => {
                await message.react(emojis[i]);
            }, i * 2000);
        }
    });

if (media === 'boton')
conn.sendMessage(m.chat, {
    image: im,
    caption: b,
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
    mentions: [m.messageStubParameters[0]],
    groupMentions: [],
  }, { quoted: fkontak}).then(async (message) => {
        const emojis = ['🙂‍↔️', '🫱🏻', '🫲🏻', '🛫', ''];
        for (let i = 0; i < emojis.length; i++) {
            setTimeout(async () => {
                await message.react(emojis[i]);
            }, i * 2000);
        }
    });

if (media === 'texto')
  this.sendMessage(m.chat, { 
        text: b, 
        contextInfo: {
            mentionedJid: [m.messageStubParameters[0]], // Asegúrate de incluir al nuevo usuario aquí
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
                title: `🍒ᴡᴇʟᴄᴏᴍᴇ🍒`,
                body: 'Izumi te da la bienvenida',
                thumbnailUrl: im,
                thumbnail: im,
                sourceUrl: 'https://www.atom.bio/edar_'
            }
        }
    }, { quoted: fkontak }).then(async (message) => {
        const emojis = ['🙂‍↔️', '🫱🏻', '🫲🏻', '🛫'];
        for (let i = 0; i < emojis.length; i++) {
            setTimeout(async () => {
                await message.react(emojis[i]);
            }, i * 2000);
        }
    });
  // arriba
  }
      }
