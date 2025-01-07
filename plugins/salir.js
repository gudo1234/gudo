import os from 'os'
import { getDevice } from "@whiskeysockets/baileys"
import moment from 'moment-timezone'
import util from 'util'
import ws from 'ws';
import sizeFormatter from 'human-readable'
let MessageType =  (await import(global.baileys)).default
let handler = async (m, { conn, text, command }) => {
//let img = await (await fetch(`https://i.ibb.co/mGm8Vbz/file.png`)).buffer()
let img = imagen1
const fechahon = moment().tz('America/Tegucigalpa').format('DD/MM HH:mm')
let id = text ? text : m.chat
let txt = `\`↖AVISO↗\`\nLos recurson se an agotado para este grupo, comuniquese con mi propietario para reactivar.\n\n*Fecha de Salida:* ${fechahon}\n*ID*: ${await conn.getName(m.chat)}`
//let pp = 'https://telegra.ph/file/5ab1ca8bf65c1ddb36c20.mp4'
//await conn.sendMessage(m.chat, { video: { url: pp }, gifPlayback: true, caption: '*Adios a todos, el Bot se despide! (≧ω≦)ゞ*', mentions: [m.sender] }, { quoted: estilo })
await conn.sendButtonMessages(m.chat, [
[txt, '𝗉𝗈𝗐𝖾𝗋𝖾𝖽 ⓒ 𝖨𝗓𝗎𝗆𝗂-𝖻𝗈𝗍 𝟤𝟢𝟤𝟢-𝟤𝟢𝟤5.', imagen4|| logo, [
['Atom', `atom`]
], null, [
['Propietario', edar], ['Novedades', canal]],
[]
]], m)
await conn.groupLeave(id)}
//await conn.groupLeave(id)}
handler.help = ['salir']
handler.tags = ['owner']
handler.customPrefix = /^(♻️|.salir)$/i
handler.command = new RegExp
//handler.command = ['salirout', 'leavegc', 'leave', 'salirdelgrupo']

handler.group = true
handler.rowner = true

export default handler
