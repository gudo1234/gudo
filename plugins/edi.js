let handler = async (m, { conn, args, usedPrefix, command }) => {
let txt = `test`
conn.sendMessage(m.chat,  {image: {url: imagen4}}, { text: txt, caption: "1234", footer: wm, buttons: [
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
  Thumbnail: imagen4,
}, { quoted: m})
}
handler.command = ['edi']
export default handler
