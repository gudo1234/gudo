let handler = async (m) => {
    const emojis = ['🍎', '🍒', '🍉', '🍊', '🍋', '🍏', '🍌', '🍍', '🍓', '🍇', '🍈', '🍒', '🍑', '🥭', '🍐', '🥥'];
    for (let i = 0; i < emojis.length; i++) {
        setTimeout(async () => {
            await m.react(emojis[i]);
        }, i * 1000);
    }
}

handler.customPrefix = ['🤨'];
handler.command = new RegExp;
export default handler;
