const { prepareWAMessageMedia, generateWAMessageFromContent } = require("baileys");
const { randomBytes } = require("crypto");

const { imageMessage } = await prepareWAMessageMedia({
    image: { url: "https://i.pinimg.com/736x/1c/b9/dc/1cb9dce731c1544b0bd018b02567fd1f.jpg" }
}, { upload: sock.waUploadToServer });

const sections = [
    {
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

const message = generateWAMessageFromContent(m.cht, messageContent, { userJid: sock.user.id });
await sock.relayMessage(m.cht, message.message, { messageId: message.key.id });
