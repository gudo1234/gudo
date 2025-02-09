import { WAMessageStubType } from '@whiskeysockets/baileys';
import fetch from 'node-fetch';
let handler = async (m, { conn, args, usedPrefix, command}) => {

let name = await conn.getName(m.sender)
let vn = './media/prueba.mp3'
let vn2 = './media/prueba2.mp3'
await conn.sendFile(m.chat, [vn, vn2].getRandom(), 'error.mp3', null, m, true, { type: 'audioMessage', ptt: true })

}
handler.customPrefix = /😭|😢|😔|😞|☹️|😰|😕|😪|😥|🙁|🤧|😭|😢|😔|😞|☹️|😰|😕|😪|😥|🙁|🥺|🥹|/
handler.command = new RegExp
export default handler
