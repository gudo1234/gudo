import fetch from 'node-fetch';
const handler = async (m, {conn, text, usedPrefix, command}) => {
  if (!text) throw `${e} Ingrese una peticion para realizar la búsqueda en github..`;
  const res = await fetch(global.API('https://api.github.com', '/search/repositories', {
    q: text,
  }));
  const json = await res.json();
  if (res.status !== 200) throw json;
  //const imagen = await conn.getFile(json.items[0].owner.avatar_url).data
  const str = json.items.map((repo, index) => {
  return `
*${1 + index}. ${repo.full_name}${repo.fork ? ' (fork)' : ''}*
 
[𝗨𝗥𝗟]: ${repo.html_url}.

[𝗖𝗿𝗲𝗮𝗱𝗼]: ${formatDate(repo.created_at)}.

[𝗔𝗰𝘁𝘂𝗮𝗹𝗶𝘇𝗮𝗰𝗶𝗼𝗻]: ${formatDate(repo.updated_at)}.

[𝗧𝗼𝘁𝗮𝗹 𝗰𝗹𝗼𝗻𝗲]: $ git clone ${repo.clone_url}.

[𝗧𝗼𝘁𝗮𝗹 𝘃𝗶𝘀𝘁𝗮𝘀]: ${repo.watchers}. [𝗙𝗼𝗿𝗸𝘀: ${repo.forks}. [𝗘𝘀𝘁𝗿𝗲𝗹𝗹𝗮𝘀]: ${repo.stargazers_count}.  `.trim()}).join('\n\n◦◦◦◦◦◦◦◦◦◦◦◦◦◦◦◦◦◦◦◦◦◦◦◦◦◦◦◦◦◦◦\n\n');
conn.sendMessage(m.chat, { text: global.espere + `*${m.pushName}*`, contextInfo: { externalAdReply: {title: `${wm}`, body: `${await conn.getName(m.chat)}`, thumbnailUrl: img.getRandom(), thumbnail: img.getRandom(), showAdAttribution: true, sourceUrl: canal}}} , { quoted: fkontak })
  conn.sendMessage(m.chat, {text: str.trim()}, {quoted: m})
};
handler.help = ['githubs'];
handler.tags = ['buscadores'];
handler.command = ['ghs', 'githubs', 'githubs', 'githubsearch', 'gits', 'gitsearch']
handler.group = true;
export default handler;

function formatDate(n, locale = 'es') {
  const d = new Date(n);
  return d.toLocaleDateString(locale, {weekday: 'long', day: 'numeric', month: 'long', year: 'numeric', hour: 'numeric', minute: 'numeric', second: 'numeric'});
}