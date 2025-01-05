let handler = async (m, { conn, usedPrefix, command }) => {
if (command == 'tes2')
conn.reply(m.chat, `🚩 *Grupo Oficial de ${wm}*\nhttps://chat.whatsapp.com/KlFxtwHtqIWIWOTjnjqnu3\n\n> 👍🏻Asegurese de leer las reglas para evitar expulsiones`, m)

if (command == 'tes3')
conn.reply(m.chat, `> 🤖 _Ademas te ofrecemos funciones necesarias para tus grupos, por ejemplo el antilink, antiarabe y bienvenida automática y muchos más, todo lo puedes encontrar en el .menu._`, m)

if (command == 'tes4')
conn.reply(m.chat, `Nuestro horario de atención es:

⚡ Lunes a Viernes 
*7:30 am a 8:00 pm*

⚡ Sábados
*7:30 am a 1:00 pm*`, m)
conn.sendMessage(m.chat, {
    image: imagen4,
    caption: '¿Hay algo más en que podamos ayudarle?',
    footer: 'Seleccione opción:',
    buttons: [
      {
        buttonId: ".tes5",
        buttonText: {
          displayText: "Si",
        },
        type: 1,
      },
      {
        buttonId: "ok",
        buttonText: {
          displayText: "No",
        },
        type: 1,
      },
    ],
    viewOnce: true,
    headerType: 4,
    mentions: [m.sender],
  }, { quoted: fkontak});
    
if (command == 'tes5')
conn.reply(m.chat, `¡Estamos aquí para ayudarte! 👋 Si tienes alguna pregunta o necesitas ayuda, selecciona una opción del menú.`, m)
}

handler.command = ['tes2', 'tes3', 'tes4', 'tes5']
export default handler
