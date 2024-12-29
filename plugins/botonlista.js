let handler = async (m, { conn, args, usedPrefix, command }) => {
import { getDevice } from '@whiskeysockets/baileys'
const sections = [
    {image: {url: "https://files.catbox.moe/yupd7z.jpg",
        title: "Tags Relacionados",
        rows: [
            {
                title: 'Example',
                highlight_label: "test",
                description: "Example description",
                id: "example_id",
            },
        ],
    },
 },
];
 
const messageContent = {
    interactiveMessage: {
        body: { text: 'Aquí tienes la imagen:' },
        footer: { text: 'Selecciona una opción:' },
        header: {
            title: 'Título de Ejemplo',
            subtitle: 'Subtítulo de Ejemplo',
            hasMediaAttachment: true,
            documentMessage: {
                ...imageMessage,
                pageCount: 1,
                fileLength: 99999999999,
                fileName: 'example_file',
                jpegThumbnail: imageMessage.jpegThumbnail
            },
        },
        nativeFlowMessage: {
            buttons: [
                {
                    name: "single_select",
                    buttonParamsJson: JSON.stringify({
                        title: "Selecciona una opción",
                        sections: sections,
                    }),
                }
            ],
            messageParamsJson: "{}",
            messageVersion: 1
        }
    },
    messageContextInfo: {
        messageSecret: randomBytes(32)
    }
};

const message = generateWAMessageFromContent(m.chat, messageContent, { userJid: conn.user.id });
await conn.relayMessage(m.chat, message.message, { messageId: message.key.id });
}
handler.command = ['o']
export default handler
