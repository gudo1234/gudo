import { prepareWAMessageMedia, generateWAMessageFromContent } from '@whiskeysockets/baileys';
import { randomBytes } from 'crypto';

import moment from 'moment-timezone'
export async function before(m, { conn, args, usedPrefix, command }) {
if (m.fromMe) return
if (m.isBaileys && m.fromMe)
        return !0
    if (m.isGroup)
       return !1
    if (!m.message)
       return !0
let user = global.db.data.users[m.sender]
if (new Date() - user.pc < 90000) return
const { imageMessage } = await prepareWAMessageMedia({
        image: { url: 'https://qu.ax/GylpM.jpg' }
    }, { upload: conn.waUploadToServer});
    const sections = [
        {
            title: "Información",
            highlight_label: "Catálogos disponibles",
            rows: [
                { header: "", title: "🛰️⌑꯭𝙫𝙚𝙧 𝙥𝙧𝙤𝙙𝙪𝙘𝙩𝙤⌑꯭🛰️", description: "", id: `precio` }
            ]
        },
        {
            title: "Servicio",
            highlight_label: "Rockstar",
            rows: [
                { header: "", title: "𝙝𝙖𝙗𝙡𝙖𝙧 𝙘𝙤𝙣 𝙪𝙣 𝙖𝙨𝙚𝙨𝙤𝙧🙋🏻‍♂", description: "", id: `.tes hola` }
            ]
        },
        {
            title: "🌐Convivir",
            highlight_label: "Unete a nuestra comunidad",
            rows: [
                { header: "", title: "𝙂𝙧𝙪𝙥𝙤", description: "", id: `.tes2`}
            ]
        }
    ];

    const buttonParamsJson = JSON.stringify({
        title: "OPCIONES",
        description: "Seleccione una opción",
        sections: sections
    });

    const interactiveMessage = {
        body: { text: 'Le compartimos nuestro menú' },
        footer: { text: 'Seleccione opción requerida para ser atendido:' },
        header: {
            hasMediaAttachment: true,
            imageMessage: imageMessage
        },
        nativeFlowMessage: {
            buttons: [{
                name: "single_select",
                buttonParamsJson: buttonParamsJson
            }]
        }
    };

    const message = {
        messageContextInfo: {
            deviceListMetadata: {},
            deviceListMetadataVersion: 2
        },
        interactiveMessage: interactiveMessage
    };
await m.reply(`¡Hola! *${taguser}* ¡🎮✨ Rockstar Game's te trae la oportunidad que estabas esperando! En Los Santos y el condado de Blaine, el dinero manda y tú puedes ser el rey de la ciudad. ¿Cansado de tener problemas monetarios? ¡No te preocupes más! Con nuestros packs de dinero para Grand Theft Auto Online, podrás resolver todos tus inconvenientes y conseguir todo lo que deseas.\n\nImagina tener el auto de tus sueños, las propiedades más lujosas y la mejor ropa de la ciudad. Todo esto es posible con un simple clic. ¡No dejes pasar esta oportunidad y conviértete en el magnate que siempre soñaste ser! 💰🚗✨ ¡Haz que tu aventura en Los Santos sea épica y llena de emoción! ¡Compra ahora y comienza a disfrutar de la vida que mereces! 🌟💸`)
    await conn.relayMessage(m.chat, { viewOnceMessage: { message} }, {});
user.pc = new Date * 1
}
