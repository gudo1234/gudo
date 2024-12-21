import os from 'os'
import { getDevice } from "@whiskeysockets/baileys"
import moment from 'moment-timezone'
import util from 'util'
import ws from 'ws';
import sizeFormatter from 'human-readable'
let MessageType =  (await import(global.baileys)).default

import fs from 'fs'
import { performance } from 'perf_hooks'
let handler = async (m, { conn, usedPrefix }) => {
let _uptime = process.uptime() * 1000
let uptime = clockString(_uptime) 
let totalreg = Object.keys(global.db.data.users).length
const chats = Object.entries(conn.chats).filter(([id, data]) => id && data.isChats)
const groupsIn = chats.filter(([id]) => id.endsWith('@g.us'))
const groups = chats.filter(([id]) => id.endsWith('@g.us'))
const used = process.memoryUsage()
const cpus = os.cpus().map(cpu => {
    cpu.total = Object.keys(cpu.times).reduce((last, type) => last + cpu.times[type], 0)
    return cpu
  })
const cpu = cpus.reduce((last, cpu, _, { length }) => {
    last.total += cpu.total
    last.speed += cpu.speed / length
    last.times.user += cpu.times.user
    last.times.nice += cpu.times.nice
    last.times.sys += cpu.times.sys
    last.times.idle += cpu.times.idle
    last.times.irq += cpu.times.irq
    return last
  }, {
    speed: 0,
    total: 0,
    times: {
      user: 0,
      nice: 0,
      sys: 0,
      idle: 0,
      irq: 0
    }
  })
const { restrict } = global.db.data.settings[conn.user.jid] || {}
const { autoread } = global.opts
//let img = await (await fetch(`https://i.ibb.co/mGm8Vbz/file.png`)).buffer()
let img = await (await fetch(`https://i.ibb.co/W3hmLwX/file.jpg`)).buffer()
//let img = imagen1
//let grupos = [nna, nn, nnn, nnntt]
//let gata = [img5, img6, img7, img8, img9]
//let enlace = { contextInfo: { externalAdReply: {title: wm + ' ', body: 'support group' , sourceUrl: accountsgb, thumbnail: await(await fetch(gataMenu)).buffer() }}}
//let enlace2 = { contextInfo: { externalAdReply: { showAdAttribution: true, mediaUrl: yt, mediaType: 'VIDEO', description: '', title: wm, body: md, thumbnailUrl: await(await fetch(gataMenu)).buffer(), sourceUrl: accountsgb }}}
//let dos = [enlace, enlace2]
let taguser = '@' + m.sender.split("@s.whatsapp.net")[0]
let old = performance.now()
  
  let neww = performance.now()
  //let totaljadibot = [...new Set([...global.conns.filter((conn) => conn.user && conn.ws.socket && conn.ws.socket.readyState !== ws.CLOSED).map((conn) => conn)])]
  let speed = neww - old
const fechahon = moment().tz('America/Tegucigalpa').format('DD/MM HH:mm')
//const nb = await fetch(`https://deliriusapi-official.vercel.app/tools/country?text=${m.sender}`);
//const res = await nb.json();
//let timestamp = speed();
        // let latensi = speed() - timestamp;
        // exec(`neofetch --stdout`, (error, stdout, stderr) => {
let src = `
↖︎︿︿︿︿︿︿︿︿︿↗︎
⏤› 〉 *🍒ɪᴢᴜᴍɪ-ʙᴏᴛ🍒*
> *ᴄʀᴇᴀᴅᴏʀ:* ${author}
↙︎︿︿︿︿︿︿︿︿︿↘︎

*•       ⬪࣪ꥈ𑁍⃪࣭۪ٜ݊݊݊݊݊໑ٜ࣪⚘۪۬▭̷໋̟  ۫    ۪  ⬧  ۪    ۫  ▭̷໋̟۪۬⚘ٜ࣪໑⃪࣭۪ٜ݊݊݊݊𑁍ꥈ࣪⬪*
•🪪 \`ᴄᴇɴᴛʀᴏ ᴅᴇ ᴀᴛᴇɴᴄɪᴏɴ\`
https://www.atom.bio/edar_
•👤 \`ɪɴғᴏ-ʙᴏᴛ\`
╭───╯
☯️]▸ *ᴄʜᴀᴛs ᴘɪʀᴠᴀᴅᴏs:* ${chats.length - groups.length}
☯️]▸ *ɢʀᴜᴘᴏs:* ${groups.length}
☯️]▸ *ᴀᴄᴛɪᴠᴏ ʜᴀᴄᴇ:* ${uptime}
☯️]▸ *ᴠᴇʟᴏᴄɪᴅᴀᴅd:* ${speed}
☯️]▸ *ғᴇᴄʜᴀ/ʜᴏʀᴀ:* ${fechahon}
☯️]▸ *ᴜʙɪᴄᴀᴄɪᴏɴ:* Honduras (🇭🇳)
╰───╮╭───╯`
await m.react('📡')
await conn.sendMessage(m.chat, { text: src,contextInfo: {
    mentionedJid: [m.sender],
    groupMentions: [],
    isForwarded: true,
    forwardedNewsletterMessageInfo: {
      newsletterJid: '120363285614743024@newsletter',
      newsletterName: `꙳🧧𓆩ίʑ᭘ɱί-ⲃⲟτ𓆪🧧꙳`,
      serverMessageId: 0
    },
    businessMessageForwardInfo: { businessOwnerJid: '50492280729@s.whatsapp.net' },
    forwardingScore: 9999,
    externalAdReply: {
      title: 'INFO-BOT',
      body: '©️ Powered By 𓆩᮫࣭݊͜🍁࣭݊ျ֘▹ⲉ꯭𝖽α꯭૨‹࣭݊⸸࣭݊͜𓆪',
      thumbnailUrl: imagen4,
      thumbnail: imagen4,
      sourceUrl: 'https://www.atom.bio/edar_',
      mediaType: 1,
      renderLargerThumbnail: true
    }
  }},{quoted: m})
/*await conn.sendButtonMessages(m.chat, [
[info, '𝗉𝗈𝗐𝖾𝗋𝖾𝖽 ⓒ 𝖨𝗓𝗎𝗆𝗂-𝖻𝗈𝗍 𝟤𝟢𝟤𝟢-𝟤𝟢𝟤𝟦.', img || logo, [
['Creador', usedPrefix + `edar`]
], null, [
['Donar', edar]
],
[]
]], m)*/
}
handler.help = ['infobot']
handler.tags = ['info', 'tools']
handler.command = /^(info|infobot)$/i
export default handler

function clockString(ms) {
let h = Math.floor(ms / 3600000)
let m = Math.floor(ms / 60000) % 60
let s = Math.floor(ms / 1000) % 60
console.log({ms,h,m,s})
return [h, m, s].map(v => v.toString().padStart(2, 0) ).join(':')}
