import moment from 'moment-timezone'

let userMessageCount = {}

export async function before(m, { conn, args, usedPrefix, command }) {
    if (m.fromMe) return
    if (m.isBaileys && m.fromMe) return !0

    // Verificamos si el mensaje es de un grupo o privado
    if (!m.message) return !0
    if (!userMessageCount[m.sender]) userMessageCount[m.sender] = 0

    // Incrementamos el contador de mensajes
    userMessageCount[m.sender] += 1

    // Si el usuario ha enviado 5 mensajes, respondemos
    if (userMessageCount[m.sender] % 5 === 0) {
        let user = global.db.data.users[m.sender]
        if (new Date() - user.pc < 21600000) return // 6 horas
        conn.reply(m.chat, `texto enviado`, null)
        user.pc = new Date * 1
    }
}
