let handler = async (m, { conn, args, usedPrefix, command }) => {
let txt = `test`
conn.sendMessage(m.chat, {
           image: {
               url: "https://files.catbox.moe/yupd7z.jpg"
           },
           caption: 'hola',
           mentions: [m.sender],
           footer: wm,
           buttons: [{
             buttonId: ".gay",
               buttonText: {
                   displayText: "yes"
              }
          },{
             buttonId: ".gay",
               buttonText: {
                   displayText: "si"
              }
          }],
          viewOnce: true,
          headerType: 6,
       })
}
handler.command = ['edi']
export default handler
