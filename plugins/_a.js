let handler = async (m, { conn, args, usedPrefix, command }) => {
  await conn.sendEvent(m.chat, 'test', 'test2', "99999999999999999999999999999999999999999999", { quoted: m}, true);
}
handler.command = ['a'];
export default handler;
