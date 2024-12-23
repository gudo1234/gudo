//import { areJidsSameUser } from '@adiwajshing/baileys'
let areJidsSameUser =  (await import(global.baileys)).default
let handler = async (m, { conn, text, participants, args, command }) => {
let member = participants.map(u => u.id)
if(!text) {
var sum = member.length
} else {
var sum = text} 
var total = 0
var sider = []
for(let i = 0; i < sum; i++) {
let users = m.isGroup ? participants.find(u => u.id == member[i]) : {}
if((typeof global.db.data.users[member[i]] == 'undefined' || global.db.data.users[member[i]].chat == 0) && !users.isAdmin && !users.isSuperAdmin) { 
if (typeof global.db.data.users[member[i]] !== 'undefined'){
if(global.db.data.users[member[i]].whitelist == false){
total++
sider.push(member[i])}
}else {
total++
sider.push(member[i])}}}
const delay = time => new Promise(res=>setTimeout(res,time));
switch (command) {
case "fantasmas": 
if(total == 0) return conn.reply(m.chat, `Este grupo es activo, no tiene fantasmas`, m,rcanal) 
m.reply(`Revición de inactivos ${await conn.getName(m.chat)}\n*Miembros del grupo* ${sum}\n\n*[👻Lista de fantasmas👻]*\n${sider.map(v => '  👉🏻 @' + v.replace(/@.+/, '')).join('\n')}\n\n*Nota: esto puede ser no ℅100 acertado el bot inicia el conteo de mensajes apartir de que se activó en este número*`, null, { mentions: sider }) 
  break   
case "kickfantasmas":  
if(total == 0) return conn.reply(m.chat, `Este grupo es activo, no tiene fantasmas`, m,rcanal) 
await m.reply(`Eliminación de inactivos\n\nGrupo: ${await conn.getName(m.chat)}\nParticipante: ${sum}\n\n[👻Fantasmas eliminando👻]\n${sider.map(v => '@' + v.replace(/@.+/, '')).join('\n')}\n\n*El bot elimina la lista mencionada cada 10 segundos*`, null, { mentions: sider }) 
await delay(1 * 10000)
let chat = global.db.data.chats[m.chat]
chat.welcome = false
try{
       
let users = m.mentionedJid.filter(u => !areJidsSameUser(u, conn.user.id))
let kickedGhost = sider.map(v => v.id).filter(v => v !== conn.user.jid)
for (let user of users)
if (user.endsWith('@s.whatsapp.net') && !(participants.find(v => areJidsSameUser(v.id, user)) || { admin: true }).admin)
{
let res = await conn.groupParticipantsUpdate(m.chat, [user], 'remove')
kickedGhost.concat(res)
await delay(1 * 10000)
}} finally{
chat.welcome = true
}
break            
}}
handler.command = ['fantasmas']
handler.group = handler.botAdmin = handler.admin = true
handler.fail = null
export default handler
const delay = (ms) => new Promise((resolve) => setTimeout(resolve, ms))

//desarrollado por https://github.com/ReyEndymion
//participa en desactivacion de despedida https://github.com/BrunoSobrino/


