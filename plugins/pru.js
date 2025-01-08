/*import PhoneNumber from 'awesome-phonenumber'
import fetch from 'node-fetch'

var handler = async (m, { conn, participants, groupMetadata }) => {

let user = db.data.users[m.sender]
let who = m.mentionedJid && m.mentionedJid[0] ? m.mentionedJid[0] : m.fromMe ? conn.user.jid : m.sender
let pp = await conn.profilePictureUrl(who, 'image').catch(_ => './src/avatar_contact.png')
//if (!m.messageStubType || !m.isGroup) return true;
//let pp = await conn.profilePictureUrl(who, 'image').catch(_ => 'https://qu.ax/casQP.jpg')
  //let im = await (await fetch(`${pp}`)).buffer()
let { premium, level, diamond, exp, lastclaim, registered, regTime, age } = global.db.data.users[m.sender]
let username = conn.getName(who)
let name = conn.getName(who)
let fkon = { key: { fromMe: false, participant: `${m.sender.split`@`[0]}@s.whatsapp.net`, ...(m.chat ? { remoteJid: '16504228206@s.whatsapp.net' } : {}) }, message: { contactMessage: { displayName: `${name}`, vcard: `BEGIN:VCARD\nVERSION:3.0\nN:;a,;;;\nFN:${name}\nitem1.TEL;waid=${m.sender.split('@')[0]}:${m.sender.split('@')[0]}\nitem1.X-ABLabel:Ponsel\nEND:VCARD`}}}

let str = `*Nombre:* ${username} 
*Tag:* @${who.replace(/@.+/, '')}
*Numero:* ${PhoneNumber('+' + who.replace('@s.whatsapp.net', '')).getNumber('international')}
*Link:* https://wa.me/${who.split`@`[0]}
*Country:* Honduras 🇭🇳`.trim()

conn.sendFile(m.chat, pp, 'perfil.jpg', str, fkon, false, { mentions: [who] })

}
handler.command = ['coun', '🍋‍🟩']
handler.group = true
export default handler

const more = String.fromCharCode(8206)
const readMore = more.repeat(4001)

function clockString(ms) {
let d = isNaN(ms) ? '--' : Math.floor(ms / 86400000)
let h = isNaN(ms) ? '--' : Math.floor(ms / 3600000) % 24
let m = isNaN(ms) ? '--' : Math.floor(ms / 60000) % 60
let s = isNaN(ms) ? '--' : Math.floor(ms / 1000) % 60
return [d, ' *Dias ☀️*\n ', h, ' *Horas 🕐*\n ', m, ' *Minutos ⏰*\n ', s, ' *Segundos ⏱️* '].map(v => v.toString().padStart(2, 0)).join('')*/
                                                                                                                                                                                                                                                                                                                                   }
