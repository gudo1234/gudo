import speed from 'performance-now'
import { spawn, exec, execSync } from 'child_process'

let handler = async (m, { conn, args, usedPrefix, command }) => {
    await m.react('⚡')
         let timestamp = speed();
         let latensi = speed() - timestamp;
         exec(`neofetch --stdout`, (error, stdout, stderr) => {
          let child = stdout.toString("utf-8");
          let ssd = child.replace(/Memory:/, "Ram:");
m.reply(`[  ${latensi.toFixed(4)}  ], ms...`);
            });
}
handler.command = ['run', 'ping', 'speed', 'speedtest', 'velocidad']

export default handler
