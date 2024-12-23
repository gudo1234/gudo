const handler = async (m, {conn, participants, usedPrefix, command}) => {
  const kicktext = `> •Ejemplo: ${usedPrefix + command} @${global.prems}`;
  if (!m.mentionedJid[0] && !m.quoted) return m.reply(kicktext, m.chat, {mentions: conn.parseMention(kicktext)});
  if (m.mentionedJid.includes(conn.user.jid)) return;
  const user = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted.sender;
  const owr = m.chat.split`-`[0];
  await conn.groupParticipantsUpdate(m.chat, [user], 'remove');
};
handler.command = ['ban', 'kick', 'echar', 'hechar', 'b', 'bam']
handler.admin = true;
handler.group = true;
handler.botAdmin = true;
export default handler;