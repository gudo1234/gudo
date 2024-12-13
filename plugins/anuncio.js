let handler = async (m, { conn, args, usedPrefix, command }) => {
conn.sendMessage(m.chat, { text: 'holaa', 
contextInfo:{
forwardingScore: 9999999,
isForwarded: true, 
mentionedJid:[],
"externalAdReply": {
"showAdAttribution": true,
"renderLargerThumbnail": true,
"thumbnail": imagen4, 
"title": 'qur',
"containsAutoReply": true,
"mediaType": 1, 
sourceUrl: [md, nna, yt, nnn, nn, tiktok].getRandom()}}}, { quoted: m})
}

handler.command = /^(ve)$/i;
export default handler
