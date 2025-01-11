let handler = async (m, { conn, text, args, participants, usedPrefix, command }) => {	
    let a = []
    let b = text.split('|')

    if (!b[0]) return conn.reply(m.chat, `🚩 *Crea una encuesta.*\n*ejemplo:* ${usedPrefix + command} Motivo de Encuesta|texto1|texto2|texto3....`, m) 
    if (!b[1]) return conn.reply(m.chat, `🚩 _Use de la siguiente forma utilizando_ *" | "* \n*Ejemplo:* ${usedPrefix + command} Motivo de Encuesta|texto1|texto2|texto3....`, m)
    if (b.length > 14) return conn.reply(m.chat, `🚩 Lo máximo que debes poner es un total de *13* opciones.`, m)

    for (let c = 1; c < b.length; c++) { a.push([b[c]]) }
    let texto = `📊 *Encuesta creada por:* ${conn.getName(m.sender)}\n*${text.split('|')[0]}*`

let users = participants.map(u => u.id).filter(v => v !== conn.user.jid)
return conn.sendPoll(m.chat, texto, a, { mentions: users });
}
handler.command = ['poll', 'encuesta', 'crearencuesta', 'startpoll', 'encuestas', 'polls'] 
export default handler
