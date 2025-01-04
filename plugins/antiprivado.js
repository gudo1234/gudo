/*export async function before(m, { isAdmin, isBotAdmin, isOwner }) {
    if (m.fromMe) return
    if (m.isBaileys && m.fromMe)
        return !0
    if (m.isGroup)
       return !1
    if (!m.message)
       //return !0
    //if (m.text.includes('PIEDRA') || m.text.includes('PAPEL') || m.text.includes('TIJERA'))
       return !0
    let chat = global.db.data.chats[m.chat]
    let bot = global.db.data.settings[this.user.jid] || {}
    
    if (bot.antiPrivate && !isOwner) {
let vn = './media/ocupado.mp3'
let img = await (await fetch(`https://qu.ax/casQP.jpg`)).buffer()
const more = String.fromCharCode(8206)
const readMore = more.repeat(4001)
let name = await conn.getName(m.sender)
let str = `,    /)🎩/)
    (｡•ㅅ•｡)𖹭︩︪𝚆꯭᪶۫۫͝𝙴꯭᪶͡𝙻᪶۫۫͝𝙲꯭᪶֟፟፝͡𝙾᪶۫۫͝𝙼꯭᪶͡𝙴᪶𖹭︩︪*
    ╭∪─∪─────────❤︎₊᪲
Hola *${name}*\n\nNo está permitido usar el bot en chat privado.\n\n🚩Si está interesado en mis servicios contacte a mi desarrollador.\n wa.me/50492280729.\n\n> Puedes seguir el canal para mantenerte informado de las actualizaciones.
    ╰────────────❤︎₊᪲`.trim()
await this.sendFile(m.chat, img, "Thumbnail.jpg", str.trim(), null, null, rcanal)
 await this.sendFile(m.chat, vn, 'error.mp3', null,null, true, { type: 'audioMessage', ptt: true })
await this.updateBlockStatus(m.chat, 'block')
    }
    return !1
}*/
