let handler = async (m, { conn, args, usedPrefix, command }) => {

let vn = './media/prueba.mp3'
let vn2 = './media/prueba2.mp3'
conn.sendFile(m.chat, [vn, vn2].getRandom(), 'a.mp3', null, m, true, { 
type: 'audioMessage', 
ptt: true 
})
}

handler.command = ['trizte']
export default handler
