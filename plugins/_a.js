/*import { generateWAMessageFromContent } from '@whatsapp/web.js'; // Asegúrate de que la ruta sea correcta

// Definir la función sendEvent*/
const sendEvent = {
  async value(jid, name = "", description = "", startTime = "0253392451200", isCancelled = false) {
    const msGen = generateWAMessageFromContent(jid, {
      messageContextInfo: { messageSecret: "4UQNshbodX19t5x8XFwRWHAcHjVUiIh4cofQTwwZAZ8=" },
      eventMessage: {
        isCanceled: isCancelled,
        name: name,
        description: description,
        location: { degreesLatitude: 0, degreesLongitude: 0, name: 'random' }, // Agregando ubicación
        startTime: startTime
      },
    }, { userJid: conn.user.id });

    await conn.relayMessage(jid, msGen.message, { messageId: msGen.key.id });
    return msGen; // Devolviendo el mensaje generado
  }
};

// Definir el handler
let handler = async (m, { conn, args, usedPrefix, command }) => {
  // Llamar a la función sendEvent
  await conn.sendEvent.value(m.chat, 'test', 'test2', "99999999999999999999999999999999999999999999", true);
}

// Definir las propiedades del handler
handler.command = ['a']; // Comando para activar el handler
export default handler; // Exportar el handler
