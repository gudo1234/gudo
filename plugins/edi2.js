let handler = async (m, { conn, args, usedPrefix, command }) => {
conn.sendButtonMessage {
  buttons: [
    Button { buttonId: 'Nothing 1', buttonText: [ButtonText], type: 1 },
    Button { buttonId: 'Nothing 2', buttonText: [ButtonText], type: 1 },
    Button {
      buttonId: 'quick_reply',
      buttonText: [ButtonText],
      type: 2
    },
    Button { buttonId: 'cta_url', buttonText: [ButtonText], type: 2 }
  ],
  contentText: 'Hi @⁨~ㅤ⁩ Hehe ヾ(๑╹ᴗ╹)ﾉ”',
  footerText: 'ʟɪɢʜᴛᴡᴇɪɢʜᴛ ᴡᴀʙᴏᴛ ᴍᴀᴅᴇ ʙʏ ᴛʏʟᴀʀᴢ ©',
  headerType: 4,
  type: 'buttonsMessage',
  msg: null,
  id: 'NJX-1C7D5D22F12D',
  from: '120363267424451517@g.us',
  fromMe: false,
  isBot: false,
  sender: '50233301838@s.whatsapp.net',
  key: {
    remoteJid: '120363267424451517@g.us',
    fromMe: false,
    id: 'NJX-1C7D5D22F12D'
  },
  fakeObj: WebMessageInfo {
    messageStubParameters: [],
    labels: [],
    userReceipt: [],
    reactions: [],
    pollUpdates: [],
    eventResponses: [],
    key: MessageKey {
      remoteJid: '120363267424451517@g.us',
      fromMe: false,
      id: 'NJX-1C7D5D22F12D'
    },
    message: Message { buttonsMessage: [Circular *1] },
    participant: '50233301838@s.whatsapp.net'
  },
  obj: '-',
  mtype: 'buttonsMessage',
  delete: [Function (anonymous)],
  download: [Function (anonymous)],
  body: 'Hi @⁨~ㅤ⁩ Hehe ヾ(๑╹ᴗ╹)ﾉ”',
  info: [AsyncFunction (anonymous)]
}
}

handler.command = ['edi2']
export default handler
