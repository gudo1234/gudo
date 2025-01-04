import { prepareWAMessageMedia, generateWAMessageFromContent } from '@whiskeysockets/baileys';
import { randomBytes } from 'crypto';

const handler = async (m, { conn, args, usedPrefix, command }) => {
    let name = await conn.getName(m.sender)
    let txt = `¡Hola *${name}* Bienvenido a nuestro servicio de WhatsApp de Celasa ⚡ de todo en electricidad ⚡!`;
    const { imageMessage } = await prepareWAMessageMedia({
        image: { url: 'https://qu.ax/WUMoy.jpg' }
    }, { upload: conn.waUploadToServer});
conn.reply(m.chat, `${txt}`, null)
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
        title: "VER LISTA",
        description: "Seleccione una opción",
        sections: sections
    });

    const interactiveMessage = {
        body: { text: 'Seleccione opción requerida para ser atendido:' },
        //footer: { text: 'Seleccione opción requerida para ser atendido:' },
        header: {
            title: wm,
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

};

handler.command = ['o'];
export default handler;
