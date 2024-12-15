let { downloadContentFromMessage } = (await import('@whiskeysockets/baileys'));

let handler = async (m, { conn }) => {
if (!m.quoted) return conn.reply(m.chat, `🚩 Responde a una imagen ViewOnce.`, m)
if (m.quoted.mtype !== 'viewOnceMessageV2') return conn.reply(m.chat, `🧧 Responde a una imagen ViewOnce.`, m)
let msg = m.quoted.message
let type = Object.keys(msg)[0]
let media = await downloadContentFromMessage(msg[type], type == 'imageMessage' ? 'image' : 'video')
let buffer = Buffer.from([])
for await (const chunk of media) {
buffer = Buffer.concat([buffer, chunk])
}
if (/video/.test(type)) {
return conn.sendFile(m.chat, buffer, 'media.mp4', msg[type].caption || '', m, null, rcanal)
} else if (/image/.test(type)) {
return conn.sendFile(m.chat, buffer, 'media.jpg', msg[type].caption || '', m, null, rcanal)
}}
handler.command = ['readviewonce', 'read', 'ver', 'readvo','ewonce','rvo']
handler.group = true;

export default handler