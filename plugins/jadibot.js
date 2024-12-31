/*⚠ PROHIBIDO EDITAR ⚠

El código de este archivo está totalmente hecho por:
- Aiden_NotLogic >> https://github.com/ferhacks

El código de este archivo fue parchado por:
- ReyEndymion >> https://github.com/ReyEndymion
- BrunoSobrino >> https://github.com/BrunoSobrino

Contenido adaptado por:
- GataNina-Li >> https://github.com/GataNina-Li
- elrebelde21 >> https://github.com/elrebelde21
*/

const {
  DisconnectReason,
  useMultiFileAuthState,
  MessageRetryMap,
  fetchLatestBaileysVersion,
  makeCacheableSignalKeyStore,
  jidNormalizedUser
} = await import('@whiskeysockets/baileys');
import QRCode from 'qrcode';
import fs from 'fs';
import pino from 'pino';
import 'ws';
const {
  child,
  spawn,
  exec
} = await import("child_process");
import { makeWASocket } from '../lib/simple.js';
import store from '../lib/store.js';
import NodeCache from 'node-cache';

if (!(global.conns instanceof Array)) {
  global.conns = [];
}
if (!(global.dataconst instanceof Array)) {
  global.dataconst = [];
}

let handler = async (message, { conn, args, usedPrefix, command, isOwner, text }) => {
  const messageBuffer = Buffer.from("CkphZGlib3QsIEhlY2hvIHBvciBAQWlkZW5fTm90TG9naWM", "base64");

  async function connect() {
    let jid = message.mentionedJid && message.mentionedJid[0] ? message.mentionedJid[0] : message.fromMe ? conn.user.jid : message.sender;
    let userId = '' + jid.split`@`[0];
    let hasCode = args[0] && args[0].includes("--code") ? true : !!(args[1] && args[1].includes('--code'));
    
    if (hasCode) {
      args[0] = args[0].replace('--code', '').trim();
      if (args[1]) {
        args[1] = args[1].replace("--code", '').trim();
      }
      if (args[0] == '') {
        args[0] = undefined;
      }
    }
    
    if (!fs.existsSync("./jadibts/" + userId)) {
      fs.mkdirSync('./jadibts/' + userId, {
        'recursive': true
      });
    }
    
    if (args[0]) {
      fs.writeFileSync("./jadibts/" + userId + '/creds.json', JSON.stringify(JSON.parse(Buffer.from(args[0], "base64").toString("utf-8")), null, "\t"));
    }
    
    if (fs.existsSync('./jadibts/' + userId + "/creds.json")) {
      let creds = JSON.parse(fs.readFileSync("./jadibts/" + userId + "/creds.json"));
      if (creds) {
        if (creds.registered = false) {
          fs.unlinkSync("./jadibts/" + userId + "/creds.json");
        }
      }
    }
    
    const { state, saveState, saveCreds } = await useMultiFileAuthState("./jadibts/" + userId);
    const cache = new NodeCache();
    const { version } = await fetchLatestBaileysVersion();
    
    const options = {
      'printQRInTerminal': false,
      'auth': {
        'creds': state.creds,
        'keys': makeCacheableSignalKeyStore(state.keys, pino({
          'level': "silent"
        }))
      },
      'logger': pino({
        'level': "silent"
      }),
      'browser': hasCode ? ["Ubuntu", "Chrome", "20.0.04"] : ["Sub-bot", "Safari", '2.0.0'],
      'markOnlineOnConnect': true,
      'generateHighQualityLinkPreview': true,
      'getMessage': async id => {
        let jid = jidNormalizedUser(id.remoteJid);
        let message = await store.loadMessage(jid, id.id);
        return message?.["message"] || '';
      },
      'msgRetryCounterCache': cache,
      'version': version
    };
    
    let socket = makeWASocket(options);
    socket.isInit = false;
    socket.uptime = Date.now();
    let shouldReload = true;

    async function onConnectionUpdate(update) {
      const { connection, lastDisconnect, isNewLogin, qr } = update;
      
      if (isNewLogin) {
        socket.isInit = false;
      }
      
      if (qr && !hasCode) {
        conn.sendMessage(message.chat, {
          'image': await QRCode.toBuffer(qr, {
            'scale': 8
          }),
          'caption': "\`S E R B O T  -  S U B B O T`\n\n*Escanea este QR para ser en un Sub Bot*\n> Pasos para escanear\n*1* : Haga click en los 3 puntos\n*2* : Toque dispositivos vinculados\n*3* : Escanea este QR\n\n*Nota:* Este código QR expira en 30 segundos."
        }, {
          'quoted': message
        });
      }
      
      if (qr && hasCode) {
        let phone = message.sender.split`@`[0];
        if (phone.startsWith('52')) {
          phone = "521" + phone.slice(2);
        }
        let pairingCode = await socket.requestPairingCode(phone);
        conn.sendMessage(message.chat, {
          'text': "\`S E R B O T  -  S U B B O T\`\n\n> Usa este Código para convertirte en un Sub Bot\n*1* : Haga click en los 3 puntos\n*2* : Toque dispositivos vinculados\n*3* : Selecciona *Vincular con el número de teléfono*\n*4* : Escriba el Codigo\n\n*Nota:* Este Código es temporal"
        }, {
          'quoted': message
        });
        await delay(5000);
        conn.sendMessage(message.chat, {
          'text': pairingCode
        }, {
          'quoted': message
        });
      }
      
      const statusCode = lastDisconnect?.["error"]?.["output"]?.["statusCode"] || lastDisconnect?.['error']?.['output']?.["payload"]?.["statusCode"];
      
      if (connection === "close") {
        if (socket.user && dataconst[socket.user.id.split('@')] == 3) {
          return conn.sendMessage(message.chat, {
            'text': "*⚠️ Se ha alcanzado el límite de reconexiones, por favor intente más tarde.*"
          }, {
            'quoted': message
          });
        }
        
        if (statusCode == 405 || statusCode == 404) {
          fs.unlinkSync("./jadibts/" + userId + "/creds.json");
          return connect();
        }
        
        if (statusCode === DisconnectReason.badSession) {
          conn.sendMessage(message.chat, {
            'text': "*⚠️ La sesión actual es inválida, Tendrás que iniciar sesión de nuevo."
          }, {
            'quoted': message
          });
          fs.rmdirSync('./jadibts/' + userId, {
            'recursive': true
          });
        } else if (statusCode === DisconnectReason.connectionClosed) {
          if (socket.fstop) {
            return conn.sendMessage(message.chat, {
              'text': "*⚠️ El bot se ha apagado correctamente!!*"
            }, {
              'quoted': message
            });
          }
          if (!socket.fstop) {
            conn.sendMessage(message.chat, {
              'text': "*⚠️ La conexión se cerró, se intentará reconectar automáticamente...*\n" + dataconst[socket.user.id.split('@')] + '/3'
            }, {
              'quoted': message
            });
          }
          if (!socket.fstop) {
            await reload(true).catch(console.error);
          }
        } else if (statusCode === DisconnectReason.connectionLost) {
          conn.sendMessage(message.chat, {
            'text': "*⚠️ La conexión se perdió, se intentará reconectar automáticamente...*\n" + dataconst[socket.user.id.split('@')] + '/3'
          }, {
            'quoted': message
          });
          await reload(true).catch(console.error);
        } else if (statusCode === DisconnectReason.connectionReplaced) {
          conn.sendMessage(message.chat, {
            'text': "*⚠️ La conexión se reemplazó, Su conexión se cerró*\n\n*Para volver a conectarte usa:*\n" + usedPrefix + command
          }, {
            'quoted': message
          });
        } else if (statusCode === DisconnectReason.loggedOut) {
          conn.sendMessage(message.chat, {
            'text': "*⚠️ Conexión perdida.. envíe el mensaje que se envió al número donde escaneó el código qr*"
          }, {
            'quoted': message
          });
          return fs.rmdirSync("./jadibts/" + userId, {
            'recursive': true
          });
        } else if (statusCode === DisconnectReason.restartRequired) {
          await reload(true).catch(console.error);
        } else if (statusCode === DisconnectReason.timedOut) {
          conn.sendMessage(message.chat, {
            'text': "*⚠️La conexión se agotó, se intentará reconectar automáticamente...*\n" + dataconst[socket.user.id.split('@')] + '/3'
          }, {
            'quoted': message
          });
          await reload(true).catch(console.error);
        } else {
          conn.sendMessage(message.chat, {
            'text': "⚠️ Razón de desconexión desconocida. " + (statusCode || '') + ": " + (connection || '') + " Por favor reporte al desarrollador."
          }, {
            'quoted': message
          });
        }
        
        let index = global.conns.indexOf(socket);
        if (index < 0) {
          return console.log("no se encontró");
        }
        delete global.conns[index];
        global.conns.splice(index, 1);
      }
      
      if (global.db.data == null) {
        loadDatabase();
      }
      
      if (connection == "open") {
        socket.isInit = true;
        global.conns.push(socket);
        await conn.sendMessage(message.chat, {
          'text': args[0] ? "✅Conectado exitosamente con WhatsApp*" : "*Conectado exitosamente con WhatsApp ✅*\n\n*Nota:* Esto es temporal Si el Bot principal se reinicia o se desactiva, todos los sub bots también lo harán\n\nPuede iniciar sesión sin el código qr con el siguiente mensaje, envíalo cuando no funcione el bot...."
        }, {
          'quoted': message
        });
        if (connection === "open") {
          dataconst[socket.user.id.split('@')] = 1;
          conn.sendMessage(message.chat, {
            'text': "*Ya estás conectado, Por favor espere se está cargado los mensajes....*\n\n* OPCIONES DISPONIBLES:*\n*#stop _(Detener la función Sub Bot)_*\n* #eliminarsesion _(Borrar todo rastro de Sub Bot)_*\n* #serbot _(Obtener nuevo código QR para ser Sub Bot)_*"
          }, {
            'quoted': message
          });
          return console.log(await reload(false).catch(console.error));
        }
        await sleep(5000);
        if (!args[0]) {
          conn.sendMessage(message.chat, {
            'text': usedPrefix + command + " " + Buffer.from(fs.readFileSync("./jadibts/" + userId + "/creds.json"), 'utf-8').toString('base64')
          }, {
            'quoted': message
          });
        }
      }
    }

    setInterval(async () => {
      if (!socket.user) {
        try {
          socket.ws.close();
        } catch {}
        socket.ev.removeAllListeners();
        let index = global.conns.indexOf(socket);
        if (index < 0) {
          return;
        }
        delete global.conns[index];
        global.conns.splice(index, 1);
      }
    }, 60000);

    let handler = global.handler;
    let reload = async function (reloadSocket) {
      try {
        const module = await import('../handler.js?update=' + Date.now()).catch(console.error);
        if (Object.keys(module || {}).length) {
          handler = module;
        }
      } catch (error) {
        console.error(error);
      }
      if (reloadSocket) {
        try {
          socket.ws.close();
        } catch {}
        socket.ev.removeAllListeners();
        socket = makeWASocket(options);
        shouldReload = true;
      }
      if (socket.user && socket.user.id && !dataconst[socket.user.id.split('@')]) {
        dataconst[socket.user.id.split('@')] = 0;
      }
      if (socket.user && socket.user.id && dataconst[socket.user.id.split('@')] && reloadSocket) {
        dataconst[socket.user.id.split('@')]++;
      }
      if (!shouldReload) {
        socket.ev.off("messages.upsert", socket.handler);
        socket.ev.off("group-participants.update", socket.participantsUpdate);
        socket.ev.off("groups.update", socket.groupsUpdate);
        socket.ev.off('message.delete', socket.onDelete);
        socket.ev.off("call", socket.onCall);
        socket.ev.off('connection.update', socket.connectionUpdate);
        socket.ev.off("creds.update", socket.credsUpdate);
      }
      socket.handler = handler.handler.bind(socket);
      socket.participantsUpdate = handler.participantsUpdate.bind(socket);
      socket.groupsUpdate = handler.groupsUpdate.bind(socket);
      socket.onDelete = handler.deleteUpdate.bind(socket);
      socket.onCall = handler.callUpdate.bind(socket);
      socket.connectionUpdate = onConnectionUpdate.bind(socket);
      socket.credsUpdate = saveCreds.bind(socket, true);
      socket.ev.on("messages.upsert", socket.handler);
      socket.ev.on("group-participants.update", socket.participantsUpdate);
      socket.ev.on("groups.update", socket.groupsUpdate);
      socket.ev.on("message.delete", socket.onDelete);
      socket.ev.on("call", socket.onCall);
      socket.ev.on('connection.update', socket.connectionUpdate);
      socket.ev.on("creds.update", socket.credsUpdate);
      socket.subreloadHandler = reload;
      shouldReload = false;
      return true;
    };
    reload(false);
  }
  connect();
};

handler.help = ["jadibot", "serbot", "jadibot --code", "code"];
handler.tags = ["jadibot"];
handler.command = ['jadibot', 'serbot', 'getcode', 'rentbot', 'serbot --code']
handler.register = false;
handler.owner = true;
handler.group = false;
export default handler;

const delay = ms => new Promise(resolve => setTimeout(resolve, ms));

function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
      }
