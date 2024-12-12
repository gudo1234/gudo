let WAMessageStubType = (await import(global.baileys)).default
import { readdirSync, unlinkSync, existsSync, promises as fs, rmSync } from 'fs';
import path from 'path';
export async function before(m, { conn, participants}) {
if (!m.messageStubType || !m.isGroup) return
let usuario = `@${m.sender.split`@`[0]}`
let fkontak = { "key": { "participants":"0@s.whatsapp.net", "remoteJid": "status@broadcast", "fromMe": false, "id": "Halo" }, "message": { "contactMessage": { "vcard": `BEGIN:VCARD\nVERSION:3.0\nN:Sy;Bot;;;\nFN:y\nitem1.TEL;waid=${m.sender.split('@')[0]}:${m.sender.split('@')[0]}\nitem1.X-ABLabel:Ponsel\nEND:VCARD` }}, "participant": "0@s.whatsapp.net" }
let chat = global.db.data.chats[m.chat]
let users = participants.map(u => conn.decodeJid(u.id))
const groupAdmins = participants.filter(p => p.admin)
const listAdmin = groupAdmins.map((v, i) => `*» ${i + 1}. @${v.id.split('@')[0]}*`).join('\n')
/*if (chat.detect && m.messageStubType == 2) {
const chatId = m.isGroup ? m.chat : m.sender;
const uniqid = chatId.split('@')[0];
const sessionPath = './BotSession/';
const files = await fs.readdir(sessionPath);
let filesDeleted = 0;
for (const file of files) {
if (file.includes(uniqid)) {
await fs.unlink(path.join(sessionPath, file));
filesDeleted++;
console.log(`⚠️ Eliminacion session (PreKey) que provocan el undefined el chat`)}}*/
if (chat.detect && m.messageStubType == 21) {
await this.sendMessage(m.chat, { text: `\`${usuario} has cambiado el nombre del grupo a *${m.messageStubParameters[0]}*\``, mentions: [m.sender], mentions: [...groupAdmins.map(v => v.id)] }, { quoted: fkontak, ephemeralExpiration: 24*60*100, disappearingMessagesInChat: 24*60*100}) 
} else if (chat.detect && m.messageStubType == 22) {
await this.sendMessage(m.chat, { text: `\`${usuario} has cambiado la foto de perfil del grupo\``, mentions: [m.sender] }, { quoted: fkontak, ephemeralExpiration: 24*60*100, disappearingMessagesInChat: 24*60*100}) 
} else if (chat.detect && m.messageStubType == 24) {
await this.sendMessage(m.chat, { text: `\`${usuario} nueva descripción del grupo es ${m.messageStubParameters[0]}\``, mentions: [m.sender] }, { quoted: fkontak, ephemeralExpiration: 24*60*100, disappearingMessagesInChat: 24*60*100})
} else if (chat.detect && m.messageStubType == 25) {
await this.sendMessage(m.chat, { text: `\`Ahora *${m.messageStubParameters[0] == 'on' ? 'Solo admins' : 'todos'}* puede editar la información del grupo\``, mentions: [m.sender] }, { quoted: fkontak, ephemeralExpiration: 24*60*100, disappearingMessagesInChat: 24*60*100})
} else if (chat.detect && m.messageStubType == 26) {
await this.sendMessage(m.chat, { text: `\`El grupo ${m.messageStubParameters[0] == 'on' ? 'está cerrado🔒' : 'está abierto🔓'} ${m.messageStubParameters[0] == 'on' ? 'solo los administradores pueden escribir' : 'ya pueden escribir todos'} en este grupo\``, mentions: [m.sender] }, { quoted: fkontak, ephemeralExpiration: 24*60*100, disappearingMessagesInChat: 24*60*100})
} else if (chat.detect && m.messageStubType == 29) {
await this.sendMessage(m.chat, { text: `\t\t\t\t\t🚩 _A͜͡L͜͡E͜͡R͜͡T͜͡A͜͡_\n@${m.messageStubParameters[0].split`@`[0]} ᴀʜᴏʀᴀ ᴇs ᴀᴅᴍɪɴ, ᴀᴄᴄɪᴏɴ ʀᴇᴀʟɪᴢᴀᴅᴀ ᴘᴏʀ: ${usuario}\n\n> ɴᴏᴛɪғʏ ᴘᴀʀᴀ ᴀᴅᴍɪɴs...`, mentions: [m.sender, m.messageStubParameters[0], ...groupAdmins.map(v => v.id)] }, { quoted: fkontak, ephemeralExpiration: 24*60*100, disappearingMessagesInChat: 24*60*100})
} else if (chat.detect && m.messageStubType == 30) {
await this.sendMessage(m.chat, { text: `@${m.messageStubParameters[0].split`@`[0]} ᴅᴇᴊᴀ ᴅᴇ sᴇʀ ᴀᴅᴍɪɴ, ᴀᴄᴄɪᴏɴ ʀᴇᴀʟɪᴢᴀᴅᴀ ᴘᴏʀ: ${usuario}\n> ɴᴏᴛɪғʏ ᴘᴀʀᴀ ᴀᴅᴍɪɴs`, mentions: [m.sender, m.messageStubParameters[0], ...groupAdmins.map(v => v.id)] }, { quoted: fkontak, ephemeralExpiration: 24*60*100, disappearingMessagesInChat: 24*60*100})
} else if (chat.detect && m.messageStubType == 72) {
await this.sendMessage(m.chat, { text: `\`${usuario} cambió la duración de mensajes temporales a *@${m.messageStubParameters[0]}*\``, mentions: [m.sender] }, { quoted: fkontak, ephemeralExpiration: 24*60*100, disappearingMessagesInChat: 24*60*100})
} else if (chat.detect && m.messageStubType == 123) {
await this.sendMessage(m.chat, { text: `\`${usuario} desactivó la duración de los mensajes temporales.\``, mentions: [m.sender] }, { quoted: fkontak, ephemeralExpiration: 24*60*100, disappearingMessagesInChat: 24*60*100})
} else {
console.log({messageStubType: m.messageStubType,
messageStubParameters: m.messageStubParameters,
type: WAMessageStubType[m.messageStubType], 
})}}