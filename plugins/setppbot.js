let handler = async (m, { conn, args, usedPrefix, command }) => {
  
                if (!m.isGroup) return
                if (!isAdmins) return reply(mess.admin)
                if (!isBotAdmins) return
                if (!quoted) return
                if (!/image/.test(mime)) return reply(`Send/Reply Image Caption Caption ${usedPrefix + command}`)
                if (/webp/.test(mime)) return reply(`Send/Reply Image With Caption ${usedPrefix + command}`)
                var medis = await conn.downloadAndSaveMediaMessage(quoted, 'ppbot.jpeg')
                var {
                        img
                    } = await generateProfilePicture(medis)
                    await conn.query({
                        tag: 'iq',
                        attrs: {
			    target: m.chat,
                            to: S_WHATSAPP_NET,
                            type: 'set',
                            xmlns: 'w:profile:picture'
                        },
                        content: [{
                            tag: 'picture',
                            attrs: {
                                type: 'image'
                            },
                            content: img
                        }]
                    })
                    fs.unlinkSync(medis)
                    m.reply(`listo`)
	    
                break
}

handler.command = ['setppbot']
export default handler
