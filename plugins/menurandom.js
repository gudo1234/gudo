let handler = async (m, { conn, usedPrefix, command }) => {
let txt = `•🍹 \`RANDOM\`
╭───╯
☯️]▸${usedPrefix}rw
☯️]▸${usedPrefix}loli
☯️]▸${usedPrefix}waifu
☯️]▸${usedPrefix}neko
☯️]▸${usedPrefix}neko2
☯️]▸${usedPrefix}rem
☯️]▸${usedPrefix}akira
☯️]▸${usedPrefix}akiyama
☯️]▸${usedPrefix}anna
☯️]▸${usedPrefix}asuna
☯️]▸${usedPrefix}ayuzawa
☯️]▸${usedPrefix}boruto
☯️]▸${usedPrefix}chiho
☯️]▸${usedPrefix}chitoge
☯️]▸${usedPrefix}deidara
☯️]▸${usedPrefix}erza
☯️]▸${usedPrefix}elaina
☯️]▸${usedPrefix}eba
☯️]▸${usedPrefix}emilia
☯️]▸${usedPrefix}hestia
☯️]▸${usedPrefix}hinata
☯️]▸${usedPrefix}inori
☯️]▸${usedPrefix}isuzu
☯️]▸${usedPrefix}itachi
☯️]▸${usedPrefix}itori
☯️]▸${usedPrefix}kaga
☯️]▸${usedPrefix}kagura
☯️]▸${usedPrefix}kaori
☯️]▸${usedPrefix}keneki
☯️]▸${usedPrefix}kotori
☯️]▸${usedPrefix}kurumi
☯️]▸${usedPrefix}madara
☯️]▸${usedPrefix}mikasa
☯️]▸${usedPrefix}miku
☯️]▸${usedPrefix}minato
☯️]▸${usedPrefix}naruto
☯️]▸${usedPrefix}nezuko
☯️]▸${usedPrefix}sagiri
☯️]▸${usedPrefix}sasuke
☯️]▸${usedPrefix}sakura
╰───╮╭───╯

𝗉𝗈𝗐𝖾𝗋𝖾𝖽 ⓒ 𝖨𝗓𝗎𝗆𝗂-𝖻𝗈𝗍 𝟤𝟢𝟤𝟢-𝟤𝟢𝟤5`
m.react('🧃')
conn.sendMessage(m.chat, { text: txt, contextInfo: { externalAdReply: {title: `${await conn.getName(m.chat)}`, body: wm, thumbnailUrl: imagen4, thumbnail: imagen4, showAdAttribution: true, sourceUrl: canal}}} , { quoted: m})
}
handler.command = ['menurandom', 'menu3']
handler.group = true
export default handler
  
