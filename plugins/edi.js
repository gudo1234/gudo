let handler = async (m, { conn, args, usedPrefix, command }) => {
let txt = `Miguel se la come?`
conn.sendMessage(m.chat, { text: txt, caption: "1234", footer: wm, buttons: [
  {
    buttonId: "si", 
    buttonText: { 
      displayText: '.gay' 
    }
  }, {
    buttonId: "yes", 
    buttonText: {
      displayText: ".gay"
    }
  }
],
  viewOnce: true,
  headerType: 1,
}, { quoted: m })
}
handler.command = ['edi']
export default handler
