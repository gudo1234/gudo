let handler = async (m, { conn, usedPrefix, command }) => {
if (command == 'tes2')
conn.reply(m.chat, `${e} *Grupo Oficial:*\nhttps://chat.whatsapp.com/KlFxtwHtqIWIWOTjnjqnu3\n\n> 👍🏻Asegurese de leer las reglas para evitar expulsiones`, m)

if (command == 'tes3')
conn.reply(m.chat, `> 🤖 _Ademas te ofrecemos funciones necesarias para tus grupos, por ejemplo el antilink, antiarabe y bienvenida automática y muchos más, todo lo puedes encontrar en el .menu._`, m)

if (command == 'tes5')
conn.reply(m.chat, `¡Estamos aquí para ayudarte! 👋 Si tienes alguna pregunta o necesitas ayuda, selecciona una opción del menú anterior.`, m)
}

handler.command = ['tes2', 'tes3', 'tes5']
export default handler
