const handler = async (m, {conn}) => {
  await conn.fetchBlocklist().then(async (data) => {
    let txt = `🚩 *Lista de bloqueados*\n_Un total de:_ ${data.length}\n🧧 *Razón:* _Por escribir en privado_\n┌─⊷\n`;
    for (const i of data) {
      txt += `▢ @${i.split('@')[0]}\n`;
    }
    txt += '└───────────';
    return conn.reply(m.chat, txt, m, {mentions: await conn.parseMention(txt)});
  }).catch((err) => {
    console.log(err);
    throw 'No hay números bloqueados';
  });
};
handler.help = ['blocklist'];
handler.tags = ['main'];
handler.command = ['blocklist', 'listblock','bloqueados'];
handler.rowner = false;
export default handler;
