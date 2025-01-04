import { prepareWAMessageMedia, generateWAMessageFromContent } from '@whiskeysockets/baileys';
import { randomBytes } from 'crypto';

const handler = async (m, { conn, args, usedPrefix, command }) => {
    let txt = 'hola bb, k mas pues';
    await m.react('📡');
//https://qu.ax/WUMoy.jpg
//let img = await (await fetch(`https://qu.ax/KCesv.mp4`)).buffer()
    const { imageMessage } = await prepareWAMessageMedia({
        image: { url: 'https://qu.ax/WUMoy.jpg' }, mentions: [m.sender], quoted: m
    }, { upload: conn.waUploadToServer });

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
        body: { text: txt },
        footer: { text: 'Seleccione en ver lista' },
        header: {
            title: wm,
            subtitle: 'Subtítulo de la Imagen',
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

    await conn.relayMessage(m.chat, { viewOnceMessage: { message } }, {});
};

handler.command = ['o'];
export default handler;
