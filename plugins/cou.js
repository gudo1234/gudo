let handler = async (m, { conn, text, core, participants, usedPrefix, command }) => {
      try {
        await m.react('🕐')
        if (!core.text) {
          return conn.reply(m.chat, `🤨 *Ejemplo:* titulo|opcion 1|opcion 2`, m);
        }
        let [name, ...value] = core.text.split`|`
            value = (value).join`|`,
            u = value.split`|`
        if (!value) {
          return conn.reply(m.chat, `Debe agregar más opciones, por *ejemplo:* ${usedPrefix + command} ¿Soy un buen bot?|sí|no|quizás`, m);
        }
        if (u.length < 2) {
          return conn.reply(m.chat, `No puede crear una encuesta con menos de 2 opciones, intente hacerlo nuevamente con una mayor cantidad de opciones disponibles.`, m);
        }
        if (!m.isOwner) {
          if (u.length > 5) {
            return conn.reply(m.chat, `El número máximo de opciones para agregar a una encuesta es 5.`, m);
          }
        }
        if (functions.hasDuplicates(u)) {
          return conm.reply(m.chat, `Parece que algunas opciones están duplicadas.`, m);
        } // aquí 
/*let a = []
//let b = text.split('|')

if (!b[0]) return conn.reply(m.chat, `🚩 *Crea una encuesta.*\n*ejemplo:* ${usedPrefix + command} Motivo de Encuesta|texto1|texto2|texto3....`, m) 
if (!b[1]) return conn.reply(m.chat, `🚩 _Use de la siguiente forma utilizando_ *" | "* \n*Ejemplo:* ${usedPrefix + command} Motivo de Encuesta|texto1|texto2|texto3....`, m)
if (b[13]) return conn.reply(m.chat, `🚩 Lo máximo que debes poner es un total de *13* opciones.`, m)*/
        const poll = {
          name: [name],
          selectableCount: 1,
          values: u,
          mentions: m.participants,
          remoteJid: m.chat
        }  
        return await conn.sendMessage(m.chat, { poll })
      } catch (error) {
          m.reply(`${error}`)
            console.error("Error al eliminar el mensaje:", error);
        }
  }

handler.command = ['no'] 
export default handler
