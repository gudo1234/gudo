let handler = async (m, { conn, args, usedPrefix, command }) => {
let txt = `Miguel se la come?`
conn.sendMessage(m.chat, { text: txt, caption: "1234", footer: wm, buttons: [
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
}, { quoted: m })
}
handler.command = ['edi']
export default handler
