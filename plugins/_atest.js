import {googleImage} from '@bochilteam/scraper';
const handler = async (m, {conn, args, usedPrefix, command}) => {

let contact = 'https://wa.me/50492280729?text='
const messages = [
[`hola`, 
'', imagen,
[],
[],
[[], ['🌎Canal', `${canal}`], ['🌱Intagram', `${ig}`]],
[]
], [ 
`hola2`, 
'', imagen2,
[],
[],
[[], ['🗿Owner', `${contact}Hola`], ['👥Atom', `${nn}`]],
[]
], [ 
`hola3`, 
'', imagen3,
[],
[],
[[], ['🤝Donar', `${edar}`], ['🔆Socializar', `${social}`]],
[]
]]

conn.sendCarousel(m.chat, null, null, null, messages)
}

handler.command = ['test']
export default handler
