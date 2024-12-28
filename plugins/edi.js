let handler = async (m, { conn, args, usedPrefix, command }) => {
//const {imageMessage} = await prepareWAMessageMedia({ image: { url: "https://i.pinimg.com/736x/1c/b9/dc/1cb9dce731c1544b0bd018b02567fd1f.jpg" }}, { upload: conn.waUploadToServer})
  let txt = `test`
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
  imageMessage: imagen4
}, { quoted: m})
}
handler.command = ['edi']
export default handler
