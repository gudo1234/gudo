/*⚠ PROHIBIDO EDITAR ⚠ -- ⚠ PROHIBIDO EDITAR ⚠ -- ⚠ PROHIBIDO EDITAR ⚠
El codigo de este archivo fue realizado por:
- ReyEndymion >> https://github.com/ReyEndymion
*/

import { readdirSync, statSync, unlinkSync, existsSync, readFileSync, watch, rmSync, promises as fs} from "fs"
import path, { join } from 'path'

let handler  = async (m, { conn, usedPrefix, command}, args) => {
let parentw = conn
let who = m.mentionedJid && m.mentionedJid[0] ? m.mentionedJid[0] : m.fromMe ? conn.user.jid : m.sender
let uniqid = `${who.split`@`[0]}`
let userS = `${conn.getName(who)}`
    
if (global.conn.user.jid !== conn.user.jid) {
return conn.sendMessage(m.chat, {text: `*⚠️ USE ESTE COMANDO AL BOT PRINCIPAL*\n\nwa.me/${global.conn.user.jid.split`@`[0]}&text=${usedPrefix + command}`}, { quoted: m }) 
} else {
try {
await fs.rmdir("./jadibts/" + uniqid, { recursive: true, force: true })
await conn.sendMessage(m.chat, { text: `Se borró la sesion` }, { quoted: m })
await conn.sendMessage(m.chat, { text : `*⚠️ HA CERRADO SESIÓN Y BORRADO TODO RASTRO*` } , { quoted: m })
} catch(err) {
if (err.code === 'ENOENT' && err.path === `./jadibts/${uniqid}`) {
await conn.sendMessage(m.chat, { text: "Usted no es Sub Bot" }, { quoted: m })
} else {
console.error(userS + ' ' + `HA CERRADO SESIÓN COMO SUB BOT`, err)
}}}}
handler.command = ['eliminarsesion', 'borrarsesion', 'cerrarsesion', 'deletesesion']
handler.fail = null

export default handler
  
