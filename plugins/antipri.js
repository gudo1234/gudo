export async function before(m, { isAdmin, isBotAdmin, isOwner }) {
    if (m.fromMe) return
    if (m.isBaileys && m.fromMe)
        return !0
    if (m.isGroup)
       return !1
    if (!m.message)
       return !0
    if (m.text.includes('.serbot') || m.text.includes('.serbot --code') || m.text.includes('.bots') || m.text.includes('.deletesesion') || m.text.includes('.serbot code'))
       return !0
    let chat = global.db.data.chats[m.chat]
    let bot = global.db.data.settings[this.user.jid] || {}
    
    if (bot.antiPrivate && !isOwner) {
let vn = './media/ocupado.mp3'
let txt = `,    /)🎩/)
    (｡•ㅅ•｡)𖹭︩︪𝚆꯭᪶۫۫͝𝙴꯭᪶͡𝙻᪶۫۫͝𝙲꯭᪶֟፟፝͡𝙾᪶۫۫͝𝙼꯭᪶͡𝙴᪶𖹭︩︪*
    ╭∪─∪─────────❤︎₊᪲
Hola *@${m.sender.split`@`[0]}*\n\n🚩 *No está permitido usar el bot en chat privado.*\n\n> 🌟Si está interesado en mis servicios contacte a mi desarrollador, o puedes seguir el canal para mantenerte informado de las actualizaciones.`
    this.sendButtonMessages(m.chat, [
[txt, '𝗉𝗈𝗐𝖾𝗋𝖾𝖽 ⓒ 𝖨𝗓𝗎𝗆𝗂-𝖻𝗈𝗍 𝟤𝟢𝟤𝟢-𝟤𝟢𝟤𝟦.', imagen4, [

], null, [
['Desarrollador', edar], ['Seguir', canal]
],
[]
]], m)
await this.sendFile(m.chat, vn, 'error.mp3', null,null, true, { type: 'audioMessage', ptt: true })   
        //await m.reply(`Estimado *@${m.sender.split`@`[0]}*, es un gusto saludarle  nos complace ofrecerle targeta de tiburon exclusiva para gta5 pc`, false, { mentions: [m.sender] })
//await m.reply(`Para obtener información detallada o para discutir sus necesidades específicas, no dude en contactarnos.\nwa.me/50247180167`, false, { mentions: [m.sender] })

       await this.updateBlockStatus(m.chat, 'block')
    }
    return !1
}
