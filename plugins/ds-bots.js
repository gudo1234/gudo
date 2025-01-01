import ws from 'ws';
import { readdirSync, unlinkSync, existsSync, promises as fs, rmSync } from 'fs'
import path from 'path'
const users = [...new Set([...global.conns.filter((conn) => conn.user && conn.ws.socket && conn.ws.socket.readyState !== ws.CLOSED).map((conn) => conn)])];
var handler = async (m, { conn, usedPrefix }) => {
const message = users.map((v, index) => `(${index + 1})\nwa.me/${v.user.jid.replace(/[^0-9]/g, '')}?text=${usedPrefix}code\n*Nombre:* *${v.user.name || '-'}*\n*Uptime:* ${ v.uptime ? convertirMsADiasHorasMinutosSegundos(Date.now() - v.uptime) : "Desconocido"}`).join('\n_______________________\n');

if (global.conn.user.jid !== conn.user.jid) {}
let sessionPath = `./jadibts/${v.user.jid.replace(/[^0-9]/g, '')}/`
try {
if (!existsSync(sessionPath)) {}
let files = await fs.readdir(sessionPath)
let filesDeleted = 0
for (const file of files) {
if (file !== 'creds.json') {
await fs.unlink(path.join(sessionPath, file))
filesDeleted++;
}
}
if (filesDeleted === 0) {
} else {}
} catch (err) {}
}
handler.help = ['dsowner']
handler.tags = ['own']
handler.customPrefix = /dsowner|🎉/
handler.command = new RegExp

export default handler
