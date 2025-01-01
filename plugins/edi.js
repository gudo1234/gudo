const handler = async (m, { conn }) => {
  let txt = `puta`
  conn.sendMessage(m.chat, {
    image: imagen4,
    caption: txt,
    footer: wm,
    buttons: [
      {
        buttonId: ".gay",
        buttonText: {
          displayText: "Yes",
        },
        type: 1,
      },
      {
        buttonId: ".gay",
        buttonText: {
          displayText: "yes",
        },
        type: 1,
      },
    ],
    viewOnce: true,
    headerType: 4,
    mentions: [m.sender], // Mención funcional
  }}}, { quoted: fkontak});
};

handler.command = ['edi']

export default handler;
