import moment from 'moment-timezone';

let messageCount = 0;

let handler = async (m, { conn, usedPrefix, command }) => {
    messageCount++;

    if (messageCount >= 5) {
        messageCount = 0;

        m.reply('xd');
    }
}

export default handler;
