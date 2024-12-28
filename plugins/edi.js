let handler = async (m, { conn, args, usedPrefix, command }) => {
let txt = `test`
conn.sendMessage(m.chat, { text: txt, caption: "1234", jpegThumbnail: imagen3, footer: wm, buttons: [
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
}, { quoted: m})
}
handler.command = ['edi']
export default handler
