function handler(m) {
    const emojis = ['🍎', '🍒', '🍉', '🍊', '🍋', '🍏', '🍌', '🍍', '🍓', '🍇', '🍈', '🍒', '🍑', '🥭', '🍐', '🥥', '🍋‍🟩', '🌚'];
    for (let i = 0; i < emojis.length; i++) {
        setTimeout(async () => {
            await m.react(emojis[i]);
        }, i * 1000);
    }
    conn.sendMessage(m.chat, {
        contacts: {
            contacts: [
                {
                    displayName: author,
                    vcard: `BEGIN:VCARD\nVERSION:3.0\nN:Edar;;;\nFN:ᯓ᮫݃͜ᮨ🍁ܾ݉ᢥ౽꯭ⲉυ꯭᥉′🦦ꪃꒉܻᵃₚͬ៰⍳\nORG:Izumi-Bot Owner\nTITLE: Developer\nTEL;type=CELL;type=VOICE;waid=50492280729:+504 9228 0727\nTEL;type=WORK;type=VOICE:+504 9228 0729\nEMAIL: izumilitee@gmail.com\nADR;type=WORK:;;Por el dia no hago nada y por la tarde descanso;;;;\nURL:https://www.atom.bio/edar_\nNOTE:xd.\nBDAY:2025-12-31\nPHOTO;VALUE=URI:https://mystickermania.com/cdn/stickers/cute/mochi-peach-cat-bread-512x512.png\nEND:VCARD`
                },
                {
                    displayName: "Contacto Extra",
                    vcard: `BEGIN:VCARD\nVERSION:3.0\nN:Extra;;;\nFN:Contacto Extra\nORG:Izumi-Bot\nTITLE: Amigo\nTEL;type=CELL;type=VOICE;waid=50488723207:+504 8872 3207\nEMAIL: contactoextra@gmail.com\nADR;type=WORK:;;Siempre disponible;;;;\nNOTE:¡Hola! Soy un contacto extra.\nEND:VCARD`
                }
            ]
        },
        contextInfo: {
            "externalAdReply": {
                "renderLargerThumbnail": true,
                "mediaType": 1,
                "title": 'No molestar, xD -_-',
                "body": wm,
                "thumbnail": imagen4,
                sourceUrl: canal
            }
        }
    }, {
        quoted: m
    });
}
handler.customPrefix = /^(leo)$/i
handler.command = new RegExp 

export default handler
