let userMessageCount = {}

export async function before(m, { conn, args, usedPrefix, command }) {
    //if (m.fromMe) return
    //if (m.isBaileys && m.fromMe) return !0

    // Verificamos si el mensaje es de un grupo o privado
    if (!m.message) return !0
    if (!userMessageCount[m.sender]) userMessageCount[m.sender] = 0

    // Incrementamos el contador de mensajes
    userMessageCount[m.sender] += 1

    // Si el usuario ha enviado 5 mensajes, respondemos
    if (userMessageCount[m.sender] % 10 === 0) {
        conn.reply(m.chat, `xd`, null)
    }
}
