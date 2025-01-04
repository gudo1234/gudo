import { prepareWAMessageMedia, generateWAMessageFromContent } from '@whiskeysockets/baileys';
import { randomBytes } from 'crypto';

import moment from 'moment-timezone'
export async function before(m, { conn, args, usedPrefix, command }) => {
if (m.chat.endsWith('broadcast') || m.fromMe || m.isGroup) return
let user = global.db.data.users[m.sender]
if (new Date() - user.pc < 500) return
await m.reply(`¡Hola! ${taguser} Bienvenido a nuestro servicio de WhatsApp de Skynet, donde la electricidad cobra vida y te traemos todo lo que necesitas saber sobre el mundo eléctrico. Desde tips para ahorrar energía hasta soluciones para esos problemas eléctricos que te vuelven loco. ¡Estamos aquí para iluminar tus dudas! ⚡🔌 ¿En qué puedo ayudarte hoy?`)

const { imageMessage } = await prepareWAMessageMedia({
        image: { url: 'https://qu.ax/WUMoy.jpg' }
    }, { upload: conn.waUploadToServer});
    const sections = [
        {
            title: "Información",
            highlight_label: "Popular",
            rows: [
                { header: "", title: "Refrán", description: "", id: usedPrefix + "refran" },
                { header: "", title: "Chiste", description: "", id: usedPrefix + "chiste" },
                { header: "", title: "Oración", description: "", id: usedPrefix + "oracion" }
            ]
        },
        {
            title: "edar.vangh.org",
            highlight_label: "Popular",
            rows: [
                { header: "", title: "Donar", description: "", id: usedPrefix + "donar" },
                { header: "", title: "Run", description: "", id: usedPrefix + "run" },
                { header: "", title: "Consejo", description: "", id: usedPrefix + "consejo" },
                { header: "", title: "Bot", description: "", id: usedPrefix + "bot hola" }
            ]
        },
        {
            title: "Menú completo",
            highlight_label: "Popular",
            rows: [
                { header: "", title: "Menú", description: "", id: usedPrefix + "menu" }
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
    await conn.relayMessage(m.chat, { viewOnceMessage: { message} }, {});

user.pc = new Date * 1
}
