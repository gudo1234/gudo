let userMessageCount = {}

export async function before(m, { conn, args, usedPrefix, command }) {
    
    // Verificamos si el mensaje es de un grupo o privado
    if (!m.message) return !0
    if (!userMessageCount[m.sender]) userMessageCount[m.sender] = 0

    userMessageCount[m.sender] += 1 //contador de mensajes

    if (userMessageCount[m.sender] % 10 === 0) { //aqui se controla cada cuántos mensajes
        conn.reply(m.chat, `${taguser}`, null)
    }
}
