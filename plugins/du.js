import fetch from 'node-fetch';
import yts from 'yt-search';
import ytdl from 'ytdl-core';
import axios from 'axios';
import {youtubedl, youtubedlv2} from '@bochilteam/scraper';
let handler = async (m, { conn, command, text, usedPrefix }) => {
	
  if (!text) throw `Ejemplo ${usedPrefix + command} diles`
	let res = await yts(text)
	let vid = res.videos[0]
	if (!vid) throw `La solicitud no fue encontrada`
	let { title, description, thumbnail, videoId, timestamp, views, ago, url } = vid
	
	m.react('✔️') 
  let play = `*Titulo:*
${vid.title}
*Subido:* ${vid.ago}
*Duración:* ${vid.timestamp}
*Vistas:* ${vid.views.toLocaleString()}`
 await conn.sendButton(m.chat, play, 'Seleccione el formato✔️', thumbnail, [
    ['Audio', `${usedPrefix}yta ${url}`],
    ['video', `${usedPrefix}ytv ${url}`],
    ['Doc.MP3', `${usedPrefix}ytadoc ${url}`],
    ['Doc.MP4', `${usedPrefix}ytdoc ${url}`]
  ], null, [['Canal', `${canal}`]], m)
}
handler.help = ['play']
handler.tags = ['dl']
handler.command = ['du']
handler.disabled = false

export default handler
