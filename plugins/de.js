let handler = async (m, { conn, args, usedPrefix, command }) => {

const { default: makeWASocket, generateWAMessageFromContent, 
prepareWAMessageMedia, useMultiFileAuthState, Browsers, DisconnectReason, makeInMemoryStore, makeCacheableSignalKeyStore, fetchLatestWaWebVersion, proto, PHONENUMBER_MCC, getAggregateVotesInPollMessage, fetchLatestBaileysVersion, jidDecode, downloadContentFromMessage } = require('@whiskeysockets/baileys');

function sendList (jid, title, footer, btn, options = {}) {
        let msg = generateWAMessageFromContent(jid, {
            viewOnceMessage: {
                message: {
                    "messageContextInfo": {
                        "deviceListMetadata": {},
                        "deviceListMetadataVersion": 2
                    },
                    interactiveMessage: proto.Message.InteractiveMessage.create({
                        ...options,
                        body: proto.Message.InteractiveMessage.Body.create({ text: title }),
                        footer: proto.Message.InteractiveMessage.Footer.create({ text: footer || "Powered By Adrian" }),
                        nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({
                            buttons: [
                                {
                                    "name": "single_select",
                                    "buttonParamsJson": JSON.stringify(btn)
                                },
                            ]
                        })
                    })
                }
            }
        }, {})
        conn.relayMessage(msg.key.remoteJid, msg.message, {
            messageId: msg.key.id
        })
    }
await sendList(m.chat, wm, 'hola', { 
  "title": "Selecciona", 
  "sections": [{ 
    "title": "# Select One of the Menus Below", 
    "highlight_label": `Powered By ${wm}`, 
    "rows": [
      { "header": "Ver producto", "title": "Productos disponibles", "id": ".productos" }, 
      { "header": "Asesor", "title": "Contacto de un asesor para obtener más información", "id": ".s" }
    ]
  }]
});
}

handler.command = ['de']
export default handler
