import os from 'os'
import { getDevice } from "@whiskeysockets/baileys"
import moment from 'moment-timezone'
import util from 'util'
import ws from 'ws';
import sizeFormatter from 'human-readable'
let MessageType =  (await import(global.baileys)).default
let handler = async (m, { conn, text, command }) => {
const fechahon = moment().tz('America/Tegucigalpa').format('DD/MM HH:mm')
let id = text ? text : m.chat
let txt = `${e} _Los recurson se an agotado para este grupo, comuniquese con mi propietario para reactivar._\n\n*Fecha de Salida:* ${fechahon}\n*ID*: ${await conn.getName(m.chat)}`
await conn.sendButtonMessages(m.chat, [
[txt, '𝗉𝗈𝗐𝖾𝗋𝖾𝖽 ⓒ 𝖨𝗓𝗎𝗆𝗂-𝖻𝗈𝗍 𝟤𝟢𝟤𝟢-𝟤𝟢𝟤5.', img.getRandom(), [
['Atom', `atom`]
], null, [
['Propietario', edar], ['Novedades', canal]],
[]
]], m)
await conn.groupLeave(id)}

handler.customPrefix = /^(♻️|.salir)$/i
handler.command = new RegExp
handler.group = true
handler.owner = true

export default handler
