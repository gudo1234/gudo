let handler = async (m, { conn, args, usedPrefix, command }) => {
let txt = `puta`
conn.sendMessage(m.chat, {
    image: imagen4,
    caption: wm,
    footer: 'Esperemos que no vuelva -_-',
    buttons: [
      {
        buttonId: ".trizte",
        buttonText: {
          displayText: "Adios 😔",
        },
        type: 1,
      },
      {
        buttonId: ".consejo",
        buttonText: {
          displayText: "Dime algo",
        },
        type: 1,
      },
    ],
    viewOnce: true,
    headerType: 4,
    mentions: [m.sender],
  }, { quoted: fkontak});
}
handler.command = ['edi']
export default handler
