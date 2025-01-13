let handler = async (m) => {
    const emojis = ['🙂', '🤨', '😁', '😆', '😍', '😂', '🪀'];
    
    for (let emoji of emojis) {
        await m.react(emoji);
    }
}

handler.customPrefix = ['🤨'];
handler.command = new RegExp;
export default handler;
