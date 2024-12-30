const handler = async (m, { conn }) => {
  const taguser = '@' + m.sender.split('@')[0]; // Obtiene el usuario etiquetado
  let txt = `puta`
  conn.sendMessage(m.chat, { text: txt, contextInfo: { externalAdReply: {title: `${wm}`, body: `${await conn.getName(m.chat)}`, thumbnailUrl: imagen4, thumbnail: imagen4, showAdAttribution: true, sourceUrl: canal}},
    //caption: `Hola bebe xD`, // Mención visible del usuario
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
  }, { quoted: fkontak});
};

handler.command = ['edi']

export default handler;
