import { spawn } from 'child_process'
let handler = async (m, { conn, isROwner, text }) => {
if (!process.send) throw 'Dont: node main.js\nDo: node index.js'
if (conn.user.jid == conn.user.jid) {
async function loading() {
var hawemod = ["🕢", "🕒", "🕦", "🕞", "🕕" ]
let { key } = await conn.sendMessage(m.chat, {text: `*Reiniciando...*`}, {quoted: m})
for (let i = 0; i < hawemod.length; i++) {
await new Promise(resolve => setTimeout(resolve, 1000)); 
await conn.sendMessage(m.chat, {text: hawemod[i], edit: key}, {quoted: m})}
await conn.sendMessage(m.chat, {text: `\`Se reinicio correctamente...\``, edit: key}, {quoted: m});         
process.send('reset')
}
loading()     
} else throw 'eh'
}
handler.help = ['restart']
handler.tags = ['owner']
handler.command = ['restart','reiniciar'] 
handler.rowner = true
export default handler
const delay = (ms) => new Promise((resolve) => setTimeout(resolve, ms))




  