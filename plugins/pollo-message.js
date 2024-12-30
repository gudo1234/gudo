let handler = async (m, { conn, args, usedPrefix, command }) => {
if (!text) throw `🚩 *Ejemplo:* ${usedPrefix + command} titulo|opcion 1|opcion 2\n\n¿Soy un buen bot?|sí|no|quizás*`
      try {
        await m.react('🕐')
        }
        let [name, ...value] = core.text.split`|`
            value = (value).join`|`,
            u = value.split`|`
        if (!value) {
          return m.reply(m.chat, `*Debe agregar más opciones, por ejemplo: ${usedPrefix + command} ¿Soy un buen bot?|sí|no|quizás*`, m);
        }
        if (u.length < 2) {
          return m.reply(m.chat, `*No puede crear una encuesta con menos de 2 opciones, intente hacerlo nuevamente con una mayor cantidad de opciones disponibles.*`, m);
        }
        if (!m.isOwner) {
          if (u.length > 5) {
            return m.reply(m.chat, `*El número máximo de opciones para agregar a una encuesta es 5.*`, m);
          }
        }
        if (functions.hasDuplicates(u)) {
          return m.reply(m.chat, `🚩 Parece que algunas opciones están duplicadas.:\n\nIntenta hacerlo con diferentes opciones.\n\nEjemplo: *${usedPrefix + command} titulo|opcion 1|opcion 2*`, m);
        }
        /*const poll = {
          name: [name],
          selectableCount: 1,
          values: u,
          mentions: m.participants,
          remoteJid: m.chat
        }*/
  try  {
        return await conn.sendMessage(m.chat, { name })
      } catch (e) {
        m.reply(`error`)
      },
}
    handler.command = ['poll']
export default handler
