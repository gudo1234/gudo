let handler = async (m, { conn, usedPrefix, command }) => {
conn.sendMessage(m.chat, {
    image: {url: 'https://qu.ax/MePZP.jpg'},
    caption: 'Nuestro horario de atención es:

⚡ Lunes a Viernes 
*7:30 am a 8:00 pm*

⚡ Sábados
*7:30 am a 1:00 pm*',
    footer: '🤗 ¿Hay algo más en que podamos ayudarle?',
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
}

handler.command = ['tes4']
export default handler
