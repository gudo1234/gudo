import { WAMessageStubType } from '@whiskeysockets/baileys'
import fetch from 'node-fetch'

export async function before(m, { conn, participants, groupMetadata }) {
  if (!m.messageStubType || !m.isGroup) return true

  let who = m.messageStubParameters[0]
  let taguser = `@${who.split('@')[0]}`
  let chat = global.db.data.chats[m.chat]
  let defaultImage = img.getRandom();

  if (chat.welcome) {
    let img;
    try {
      let pp = await conn.profilePictureUrl(who, 'image');
      img = await (await fetch(pp)).buffer();
    } catch {
      img = await (await fetch(defaultImage)).buffer();
    }
 
  let vn = './media/a.mp3'; //welcome bendicion
let vn2 = './media/bien.mp3'; //welcome entrada épica
  let vn3 = './media/adios.mp3'; //bye y se marchó
  let vn4 = './media/prueba3.mp3'; //welcome calamar
  let vn5 = './media/prueba4.mp3'; //welcome mortals
  
  let or = ['stiker', 'audio', 'boton', 'texto', 'gifPlayback'];
  let media = or[Math.floor(Math.random() * 5)]
  let stiker = await sticker(imagen7, false, global.packname, global.author) //despedida
  let stiker2 = await sticker(imagen8, false, global.packname, global.author) //welcome
  let a = `🎉 _Welcome_ *@${m.messageStubParameters[0].split`@`[0]}*`
  let b = `🐢 _Adios_ *@${m.messageStubParameters[0].split`@`[0]}*`

// Welcome 
if (m.messageStubType === WAMessageStubType.GROUP_PARTICIPANT_ADD) {
if (media === 'stiker') {
    this.sendFile(m.chat, stiker2, 'sticker.webp', '', null, true, {
        contextInfo: {
            'mentionedJid': [who],
            'forwardingScore': 200,
            'isForwarded': false,
            externalAdReply: {
                showAdAttribution: false,
                title: `💫 WELCOME +${m.messageStubParameters[0].split`@`[0]}`,
                body: 'Izumi te da la bienvenida',
                mediaType: 2,
                sourceUrl: 'https://whatsapp.com/channel/0029VaXHNMZL7UVTeseuqw3H',
                thumbnail: img
            }
        }
    }, { quoted: null }).then(async (message) => {
        const emojis = ['🙂‍↔️', '🫱🏻', '🫲🏻', '🔥'];
        for (let i = 0; i < emojis.length; i++) {
            setTimeout(async () => {
                await message.react(emojis[i]);
            }, i * 2000);
        }
    });
}

if (media === 'audio') {
this.sendMessage(m.chat, { audio: { url: [vn, vn2, vn4, vn5].getRandom() }, 
    contextInfo: { forwardedNewsletterMessageInfo: { 
    newsletterJid: id_canal, 
    serverMessageId: '', 
    newsletterName: wm }, forwardingScore: 9999999, isForwarded: true, mentionedJid: [who], "externalAdReply": { 
    "title": `❤️WELCOME +${m.messageStubParameters[0].split`@`[0]}`, 
    "body": 'Izumi te da la bienvenida', 
    "previewType": "PHOTO", 
    "thumbnailUrl": null,
    "thumbnail": img, 
    "sourceUrl": 'https://www.atom.bio/edar_', 
    "showAdAttribution": true}}, 
     seconds: '4556', ptt: true, mimetype: 'audio/mpeg', fileName: `error.mp3` }, { quoted: fkontak, ephemeralExpiration: 24*60*100, disappearingMessagesInChat: 24*60*100}).then(async (message) => {
        const emojis = ['🙂‍↔️', '🫱🏻', '🫲🏻', '✨'];
        for (let i = 0; i < emojis.length; i++) {
            setTimeout(async () => {
                await message.react(emojis[i]);
            }, i * 2000);
        }
    })};

if (media === 'boton') {
let a = `${e} _*¡Hola!*_ +${m.messageStubParameters[0].split`@`[0]} Bienvenido🎉`;
  conn.sendMessage(m.chat, {
    image: img,
    caption: a,
    footer: 'Izumi te da la bienvenida',
    buttons: [
      {
        buttonId: "Hola",
        buttonText: {
          displayText: "Hola",
        },
        type: 1,
      },
      {
        buttonId: "Xd",
        buttonText: {
          displayText: "xD'",
        },
        type: 1,
      },
    ],
    viewOnce: true,
    headerType: 4,
    mentions:[who],
  }, { quoted: fkontak }).then(async (message) => {
        const emojis = ['🎉', '🫱🏻', '🫲🏻', '💚', ''];
        for (let i = 0; i < emojis.length; i++) {
            setTimeout(async () => {
                await message.react(emojis[i]);
            }, i * 2000);
        }
    })};

if (media === 'texto') {
  let wel = `°   /)🎩/)
    (｡•ㅅ•｡)𖹭︩︪𝚆꯭᪶۫۫͝𝙴꯭᪶͡𝙻᪶۫۫͝𝙲꯭᪶֟፟፝͡𝙾᪶۫۫͝𝙼꯭᪶͡𝙴᪶𖹭︩︪*
    ╭∪─∪─────────❤︎₊᪲
¡Hola!🍷 *@${m.messageStubParameters[0].split`@`[0]}* buenos días/tardes/noches.\n🎉¡Bienvenido a *${groupMetadata.subject}*!\n\n> 🐢Disfruta del grupo, diviértete, no olvides en leer las reglas...
    ╰────────────❤︎₊᪲`
  this.sendMessage(m.chat, {
        text: wel, 
        contextInfo: {
            mentionedJid: [who],
            groupMentions: [],
            isForwarded: true,
            forwardedNewsletterMessageInfo: {
                newsletterJid: '120363285614743024@newsletter',
                newsletterName: wm,
                serverMessageId: 0
            },
            businessMessageForwardInfo: { businessOwnerJid: '50492280729@s.whatsapp.net' },
            forwardingScore: 9999,
            externalAdReply: {
                title: `🍒ᴡᴇʟᴄᴏᴍᴇ🍒`,
                body: 'Izumi te da la bienvenida',
                thumbnailUrl: img,
                thumbnail: img,
                sourceUrl: 'https://www.atom.bio/edar_'
            }
        }
    }, { quoted: fkontak }).then(async (message) => {
        const emojis = ['🎉', '🫱🏻', '🫲🏻', '💯'];
        for (let i = 0; i < emojis.length; i++) {
            setTimeout(async () => {
                await message.react(emojis[i]);
            }, i * 2000);
        }
    })};

if (media === 'gifPlayback') {
await conn.sendMessage(m.chat, {
    video: { url: 'https://qu.ax/TXRoC.mp4' },
    gifPlayback: true,
    caption: a,
    contextInfo: {
        mentionedJid: [who],
        groupMentions: [],
        isForwarded: true,
        forwardedNewsletterMessageInfo: {
            newsletterJid: '120363285614743024@newsletter',
            newsletterName: wm,
            serverMessageId: 0
        },
        businessMessageForwardInfo: { businessOwnerJid: '50492280729@s.whatsapp.net' },
        forwardingScore: 9999,
        externalAdReply: {
            title: 'Izumi te da la bienvenida',
            body: `${await conn.getName(m.chat)}`,
            sourceUrl: 'https://www.atom.bio/edar_',
            thumbnail: img
        }
    }
}, { quoted: fkontak }).then(async (message) => {
        const emojis = ['🎉', '🫱🏻', '🫲🏻', '💯'];
        for (let i = 0; i < emojis.length; i++) {
            setTimeout(async () => {
                await message.react(emojis[i]);
            }, i * 2000);
        }
    })};
}

// bye 
  if (m.messageStubType === WAMessageStubType.GROUP_PARTICIPANT_REMOVE || m.messageStubType === WAMessageStubType.GROUP_PARTICIPANT_LEAVE) {
if (media === 'stiker') {
    this.sendFile(m.chat, stiker, 'sticker.webp', '', null, true, {
        contextInfo: {
            'mentionedJid': [who],
            'forwardingScore': 200,
            'isForwarded': false,
            externalAdReply: {
                showAdAttribution: false,
                title: `👋🏻ADIOS +${m.messageStubParameters[0].split`@`[0]}`,
                body: 'Esperemos que no vuelva -_-',
                mediaType: 2,
                sourceUrl: 'https://whatsapp.com/channel/0029VaXHNMZL7UVTeseuqw3H',
                thumbnail: img
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

if (media === 'audio') {
this.sendMessage(m.chat, { audio: { url: vn3 }, 
    contextInfo: { forwardedNewsletterMessageInfo: { 
    newsletterJid: id_canal, 
    serverMessageId: '', 
    newsletterName: wm }, forwardingScore: 9999999, isForwarded: true, mentionedJid: [who], "externalAdReply": { 
    "title": `👋🏻 ADIOS +${m.messageStubParameters[0].split`@`[0]}`, 
    "body": 'Esperemos que no vuelva -_-', 
    "previewType": "PHOTO", 
    "thumbnailUrl": null,
    "thumbnail": img, 
    "sourceUrl": 'https://www.atom.bio/edar_', 
    "showAdAttribution": true}}, 
     seconds: '4556', ptt: true, mimetype: 'audio/mpeg', fileName: `error.mp3` }, { quoted: fkontak, ephemeralExpiration: 24*60*100, disappearingMessagesInChat: 24*60*100}).then(async (message) => {
        const emojis = ['🙂‍↔️', '🫱🏻', '🫲🏻', '🛥️'];
        for (let i = 0; i < emojis.length; i++) {
            setTimeout(async () => {
                await message.react(emojis[i]);
            }, i * 2000);
        }
    })};

if (media === 'boton') {
conn.sendMessage(m.chat, {
    image: img,
    caption: `🖐🏻 _*Adios*_ +${m.messageStubParameters[0].split`@`[0]}`,
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
    mentions: [who],
  }, { quoted: fkontak}).then(async (message) => {
        const emojis = ['🙂‍↔️', '🫱🏻', '🫲🏻', '🛫', ''];
        for (let i = 0; i < emojis.length; i++) {
            setTimeout(async () => {
                await message.react(emojis[i]);
            }, i * 2000);
        }
    })};

if (media === 'texto') {
  this.sendMessage(m.chat, { 
        text: b, 
        contextInfo: {
            mentionedJid: [who],
            groupMentions: [],
            isForwarded: true,
            forwardedNewsletterMessageInfo: {
                newsletterJid: '120363285614743024@newsletter',
                newsletterName: wm,
                serverMessageId: 0
            },
            businessMessageForwardInfo: { businessOwnerJid: '50492280729@s.whatsapp.net' },
            forwardingScore: 9999,
            externalAdReply: {
                title: `${await conn.getName(m.chat)}`,
                body: 'Esperemos que no vuelva -_-',
                thumbnailUrl: img,
                thumbnail: img,
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
    })};

if (media === 'gifPlayback') {
await conn.sendMessage(m.chat, {
    video: { url: 'https://qu.ax/xOtQJ.mp4' },
    gifPlayback: true,
    caption: b,
    contextInfo: {
        mentionedJid: [who],
        groupMentions: [],
        isForwarded: true,
        forwardedNewsletterMessageInfo: {
            newsletterJid: '120363285614743024@newsletter',
            newsletterName: wm,
            serverMessageId: 0
        },
        businessMessageForwardInfo: { businessOwnerJid: '50492280729@s.whatsapp.net' },
        forwardingScore: 9999,
        externalAdReply: {
            title: 'Esperemos que no vuelva -_-',
            body: `${await conn.getName(m.chat)}`,
            sourceUrl: 'https://www.atom.bio/edar_',
            thumbnail: img
        }
    }
}, { quoted: fkontak }).then(async (message) => {
        const emojis = ['🎉', '🫱🏻', '🫲🏻', '💯'];
        for (let i = 0; i < emojis.length; i++) {
            setTimeout(async () => {
                await message.react(emojis[i]);
            }, i * 2000);
        }
    })};
  }
}
