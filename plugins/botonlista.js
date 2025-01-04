import moment from 'moment-timezone'
export async function before(m) {
if (m.chat.endsWith('broadcast') || m.fromMe || m.isGroup) return
let user = global.db.data.users[m.sender]
if (new Date() - user.pc < 86400000) return
//await m.reply(`¡Hola! ${taguser} Bienvenido a nuestro servicio de WhatsApp de Skynet, donde la electricidad cobra vida y te traemos todo lo que necesitas saber sobre el mundo eléctrico. Desde tips para ahorrar energía hasta soluciones para esos problemas eléctricos que te vuelven loco. ¡Estamos aquí para iluminar tus dudas! ⚡🔌 ¿En qué puedo ayudarte hoy?`)
await m.reply('putoo')
user.pc = new Date * 3
}
