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
//if (m.chat.endsWith('broadcast') || m.isGroup) return
let user = global.db.data.users[m.sender]
if (new Date() - user.pc < 180000) return
//await m.reply(`¡Holaa ${taguser} Bienvenido a nuestro servicio de WhatsApp de Skynet, donde la electricidad cobra vida y te traemos todo lo que necesitas saber sobre el mundo eléctrico. Desde tips para ahorrar energía hasta soluciones para esos problemas eléctricos que te vuelven loco. ¡Estamos aquí para iluminar tus dudas! ⚡🔌 ¿En qué puedo ayudarte hoy?`)

const { imageMessage } = await prepareWAMessageMedia({
        image: { url: 'https://qu.ax/WUMoy.jpg' }
    }, { upload: conn.waUploadToServer});
    const sections = [
        {
            title: "Información",
            highlight_label: "Popular",
            rows: [
                { header: "", title: "Refrán", description: "", id: `.refran` },
                { header: "", title: "Chiste", description: "", id: `.chiste` },
                { header: "", title: "Oración", description: "", id: `.oracion` }
            ]
        },
        {
            title: "edar.vangh.org",
            highlight_label: "Popular",
            rows: [
                { header: "", title: "Donar", description: "", id: `.donar` },
                { header: "", title: "Run", description: "", id: `.ping` },
                { header: "", title: "Consejo", description: "", id: `.consejo` },
                { header: "", title: "Bot", description: "", id: `.bot hola` }
            ]
        },
        {
            title: "Menú completo",
            highlight_label: "Popular",
            rows: [
                { header: "", title: "Menús", description: "", id: `.menu`},
                { header: "", title: "owner", description: "", id: `.dueño`}
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
            //title: '',
             //subtitle: 'Subtítulo de la Imagen',
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
await m.reply(`¡Hola! *${taguser}* 🎮✨ Aquí Rockstar Game, listo para ayudarte a disfrutar de la experiencia de Los Santos. Pero recuerda, el dinero no lo es todo, ¡la diversión y la aventura son lo que realmente cuenta en este mundo! Si tienes alguna pregunta o necesitas algún consejo sobre GTA Online, ¡aquí estoy! 😎💰`)
    await conn.relayMessage(m.chat, { viewOnceMessage: { message} }, {});
user.pc = new Date * 1
}
/*import moment from 'moment-timezone'
  
export async function before(m) {

if (m.chat.endsWith('broadcast') || m.fromMe || m.isGroup) return
  
let user = global.db.data.users[m.sender]

if (new Date() - user.pc < 180000) return
await m.reply('tezto aquí')

user.pc = new Date * 1
}*/
