const { Client } = require('youtubei');
const { ytmp3 } = require("@hiudyy/ytdl");
const yt = new Client();

const handler = async (m, {conn, command, args, text, usedPrefix}) => {

//if (!text) return conn.reply(m.chat, `*Ejemplo:* ${usedPrefix + command} diles`,  m);

    try {
      if (args.length < 1) {
        return await conn.sendMessage(m.chat, { text: "🚩 Please provide a query." }, { quoted: m });
      }
      m.react('🕒')
      /*conn.sendMessage(m.chat, {
        react: {
          text: '⏱️',
          key: m.key,
        }*/,
      });
      const search = await yt.search(query, { type: "video" });
      if (!search || !search.items || search.items.length === 0) {
        await conn.sendMessage(m.chat, { text: "No results found for your query." }, { quoted: m });
        return;
      }
      
      const result = search.items[0];
      const videoUrl = `https://www.youtube.com/watch?v=${result.id}`;
      const str = `✧➢ Title: ${result.title}\n✧➢ Date: ${result.uploadDate}\n✧➢ Description: ${result.description}\n✧➢ URL: ${videoUrl}\n✧➢ para video use:\n.ytmp4 ${videoUrl}`;
      const audiodl = await ytmp3(videoUrl);
      
      await conn.sendMessage(m.chat, { image: { url: result.thumbnails[0].url }, caption: str }, { quoted: m });
      conn.sendMessage(m.chat, { audio: audiodl, mimetype: "audio/mpeg", caption: `Here is your audio: ${result.title}` }, { quoted: m });
      
      //global.db.save('user', global.user);
    } catch (error) {
      console.error("Error during YouTube search:", error);
      await conn.sendMessage(m.chat, { text: "An error occurred while processing your request." }, { quoted: m });
    }
  };
  
 handler.command = ['play']
export default handler;
