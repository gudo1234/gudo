let handler = async (m, { conn, args, usedPrefix, command }) => {
let txt = `test`
m.reply({
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
          },{
             buttonId: ".gay",
               buttonText: {
                   displayText: "yesi"
              }
          }],
          viewOnce: true,
          headerType: 6,
       })
}
handler.command = ['edi']
export default handler
