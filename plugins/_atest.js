import {googleImage} from '@bochilteam/scraper';
const handler = async (m, {conn, args, usedPrefix, command}) => {

let contact = 'https://wa.me/50492280729?text='
const messages = [
`hola`, 
'', 'https://qu.ax/MjTwX.jpg',
[],
[],
[[], ['🌎Canal', `${canal}`], ['🌱Intagram', `${ig}`]],
[]
], [ 
`hola2`, 
'', 'https://qu.ax/EioUB.jpg',
[],
[],
[[], ['🗿Owner', `${contacto}Hola`], ['👥Atom', `${nn}`]],
[]
], [ 
`hola3`, 
'', 'https://qu.ax/huPVz.jpg',
[],
[],
[[], ['🤝Donar', `${edar}`], ['🔆Socializar', `${social}`]],
[]
]]
conn.sendCarousel(m.chat, null, null, null, messages)
}

handler.command = ['test']
export default handler
