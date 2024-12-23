let handler = async (m, { conn, usedPrefix, text }) => {
if (!text) throw `🌱 Ingresa el texto que se enviará junto a los botones.`
let vn = './media/ocupado'
conn.sendButtonMessages('120363285614743024@newsletter', [
[`🚩 ${text}`, '𝗉𝗈𝗐𝖾𝗋𝖾𝖽 ⓒ 𝖨𝗓𝗎𝗆𝗂-𝖻𝗈𝗍 𝟤𝟢𝟤𝟢-𝟤𝟢𝟤𝟦.', 'https://qu.ax/QVbYR.jpg' , [
], null, [
['Desarrollador', edar], ['Unirme al grupo', 'https://tinyurl.com/yc2fdh5d']
],
[]
]], null)
conn.sendFile('120363285614743024@newsletter', vn, 'error.mp3', null, null, true, { type: 'audioMessage', ptt: true })
}
handler.command = ['best']
export default handler
