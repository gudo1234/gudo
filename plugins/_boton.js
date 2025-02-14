let handler = async (m, { conn, args, usedPrefix, command }) => {

conn.sendMessage(m.chat, {
 image: img.getRandom(),
 caption: `${e} que pasa hermosa`,
footer: wm,
 contextInfo: {
mentionedJid: [m.sender],
forwardingScore: 999,
isForwarded: true,
externalAdReply: {
  showAdAttribution: true, 
  title: `Holaa`,
  body: "like your pussycat",
  thumbnailUrl: 'https://cdn.arifzyn.site/f/sy6tjbzk.jpg',
  sourceUrl: canal,
  mediaType: 1,
  renderLargerThumbnail: false
}}, 
  buttons: [
  {
 buttonId: '.ping',
 buttonText: {
displayText: 'ping'
 },
 type: 1,
  },
  {
 buttonId: '.owner',
 buttonText: {
displayText: 'owner'
 },
 type: 1,
  },
  {
 type: 4,
 nativeFlowInfo: {
name: 'single_select',
paramsJson: JSON.stringify({
  title: 'Dont click',
  sections: [
 {
title: 'my focking bicht',
highlight_label: '',
rows: [
  {
 header: '⌬ Message',
 title: 'menu',
 description: `i like pussydog`, 
 id: '.menu',
  },
  {
 header: '⌬ Message',
 title: 'check ping',
 description: `i like pussycat`, 
 id: '.ping',
  },
],
 },
  ],
}),
 },
  },
  ],
  headerType: 1,
  viewOnce: true
})

}
handler.command = ['boton']
handler.group = true
export default handler
