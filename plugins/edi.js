let handler = async (m, { conn, args, usedPrefix, command }) => {
let txt = `test`
conn.sendMessage(m.chat, {
           image: {
               url: "https://files.catbox.moe/beawnt.jpg"
           },
           caption: 'holaa',
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
         mentions: [m.sender], }, 
        { quoted: m});
       })
}
handler.command = ['edi']
export default handler
