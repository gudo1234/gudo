let toM = a => '@' + a.split('@')[0]
function handler(m, { groupMetadata }) {
let ps = groupMetadata.participants.map(v => v.id)
let a = ps.getRandom()
let b
do b = ps.getRandom()
while (b === a)
m.reply(`*${toM(a)}, deberías de casarte 💍 con ${toM(b)}, hecen una buena pareja 💓*`, null, {
mentions: [a, b]
})}
handler.help = ['formarpareja']
handler.tags = ['fun']
handler.command = ['formarpareja','formarparejas']
handler.group = true
export default handler
