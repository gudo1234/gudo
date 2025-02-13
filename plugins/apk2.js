let handler = async (m, { conn, args, usedPrefix, command, isOwner }) => {

    if (!args[0]) throw `${e} Ingresa el nombre de la aplicación que quieres descargar. *Ejemplo:*\n${usedPrefix + command} Clash Royale`;

    let res = await fetch(`https://api.dorratz.com/v2/apk-dl?text=${args[0]}`);
    let result = await res.json();
    let { name, size, lastUpdate, icon } = result;
    let URL = result.dllink;
    let packe = result.package;

    let texto = `*_APK DOWNLOAD.V2_*
   *Nombre* : ⇢ ${name} 📛
   *Tamaño* : ⇢ ${size} ⚖️
   *Package* : ⇢ ${packe} 📦
   *Actualizado* : ⇢ ${lastUpdate} 🗓️
    
Su aplicación se enviará en un momento...`;

    await conn.sendFile(m.chat, icon, name + '.jpg', texto, m);

    await conn.sendMessage(m.chat, { 
        document: { url: URL }, 
        mimetype: 'application/vnd.android.package-archive', 
        fileName: name + '.apk', 
        caption: '' 
    }, { quoted: m });
}

handler.command = ['apk2', 'apkdl2', 'modapk2'];
export default handler;
