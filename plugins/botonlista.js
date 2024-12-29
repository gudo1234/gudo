import { getDevice } from '@whiskeysockets/baileys'
const handler = async (m, {conn, args, usedPrefix, command}) => {
let txt = `no se que poner`
await m.react('📡')
const buttonParamsJson = JSON.stringify({
image: {url: "https://files.catbox.moe/yupd7z.jpg"},
title: "VER LISTA",
description: "xd",
sections: [
{ title: "Información", highlight_label: "Popular",
rows: [
{ header: "", title: "refran", description: "", id: usedPrefix + "refran" },
{ header: "", title: "chiste", description: "", id: usedPrefix + "chiste" },
{ header: "", title: "oracion", description: "", id: usedPrefix + "oracion" }
]},
{ title: "edar.vangh.org", highlight_label: "Popular",
rows: [
{ header: "", title: "donar", description: "", id: usedPrefix + "donar" },
{ header: "", title: "run", description: "", id: usedPrefix + "run" },
{ header: "", title: "consejo", description: "", id: usedPrefix + "consejo" },
{ header: "", title: "bot", description: "", id: usedPrefix + "bot hola" }
]},
{ title: "Menu completo", highlight_label: "Popular",
rows: [
{ header: "", title: "menu", description: "", id: usedPrefix + "menu" }
]}
]})
const interactiveMessage = {
body: { text: txt },
footer: { text: wm + ` \nSeleccione en ver lista` },
header: { title: `xd`, subtitle: "test4", hasMediaAttachment: false },
nativeFlowMessage: { buttons: [{ 
name: "single_select",
buttonParamsJson
}]
}}
const message = { messageContextInfo: { deviceListMetadata: {}, deviceListMetadataVersion: 2 }, interactiveMessage }
await conn.relayMessage(m.chat, { viewOnceMessage: { message } }, {})

await conn.sendButtonMessages(m.chat, [
[txt, nn, imagen4, [
['video', `.s`], ['Doc.mp3', `.s`], ['Doc.mp4', `.s`]
], null, [
['Ver Canal', canal]
],
[["Ver Lista", buttonParamsJson]]
]], m)
}

handler.command = ['o']
export default handler;
