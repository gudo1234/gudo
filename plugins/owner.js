function handler(m) {
  const data = global.owner.filter(([id, isCreator]) => id && isCreator)
  this.sendContact(m.chat, data.map(([id, name]) => [id, name]), null, fkontak)

}

handler.help = ['owner']
handler.tags = ['main']
handler.customPrefix = /^(Edar|edar|@50492280729|.owner|owner|.dueño|dueño|.creador|creador)$/i
handler.command = new RegExp 

export default handler
