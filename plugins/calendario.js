import moment from 'moment-timezone';

let handler = async (m, { conn }) => {
    const now = moment().tz('America/Mexico_City');
    const year = now.year();
    const month = now.month() + 1; // +1 porque los meses son del 0 al 11
    const day = now.date();
    const hour = now.format('hh:mm A'); // Cambiado a formato 12 horas

    let txt = `Calendario - ${month}/${year}\n\n`;
    txt += 'Dom Lun Mar Mié Jue Vie Sáb\n';

    const firstDay = moment(`${year}-${month}-01`).day();
    const daysInMonth = now.daysInMonth();

    for (let i = 0; i < firstDay; i++) {
        txt += '    ';
    }

    for (let i = 1; i <= daysInMonth; i++) {
        if (i === day) {
            txt += `[${i.toString().padStart(2, ' ')}]`; // Marcar el día actual
        } else {
            txt += ` ${i.toString().padStart(2, ' ')}`;
        }

        if ((firstDay + i) % 7 === 0) {
            txt += '\n';
        }
    }

    txt += `\nHora actual: ${hour}`;

    let img = await (await fetch(`https://qu.ax/eGZFc.jpg`)).buffer();
    await conn.sendFile(m.chat, img, "Thumbnail.jpg", txt, null, null, rcanal);
}

handler.command = ['calendario'];
handler.group = true;
export default handler;
