let handler = async (m, { conn, args, usedPrefix, command }) => {
let txt = `> alba regalame el code 🗿🗿🗿`
conn.sendMessage(m.chat, { text: txt, Thumbnail: imagen4, caption: "1234", footer: wm, buttons: [
  {
    buttonId: ".gay", 
    buttonText: { 
      displayText: 'yes' 
    }
  }, {
    buttonId: ".gay", 
    buttonText: {
      displayText: "sii"
    }
  }
],
  viewOnce: true,
  headerType: 1,
}, { quoted: fkontak})
}
handler.command = ['edi']
export default handler
