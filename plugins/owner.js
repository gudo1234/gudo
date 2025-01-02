function handler(m) {
conn.sendMessage(m.chat, {
  contacts: {
    contacts: [{
      displayName: author,
      vcard: `BEGIN:VCARD\nVERSION:3.0\nN:`${author}`;;;\nFN:`${author}`\nORG:`${wm}`\nTITLE: Developer\nTEL;type=CELL;type=VOICE;waid=50492280729:+50492280729\nTEL;type=WORK;type=VOICE:+50492280729\nEMAIL:izumilitee@gmail.com\nADR;type=WORK:;;🔮;;;;\nURL:https://www.atom.bio/edar_\nNOTE:xd\nBDAY:2003-10-04\nPHOTO;VALUE=URI:https://i.ibb.co/FD39Vd4/file.jpg\nEND:VCARD`
    }]
  },
 contextInfo: {
"externalAdReply": {
"renderLargerThumbnail": true,
"mediaType": 1,
"title": 'No molestar, xD -_-',
"body": wm,
"thumbnail": imagen4,
sourceUrl: canal
}
}
}, {
  quoted: m
});
}

handler.help = ['owner']
handler.tags = ['main']
handler.customPrefix = /^(Edar|edar|@50492280729|.owner|owner|.dueño|dueño|.creador|creador)$/i
handler.command = new RegExp 

export default handler
