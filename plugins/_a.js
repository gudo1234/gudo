import { getDevice } from '@whiskeysockets/baileys'
import fs from 'fs'
import moment from 'moment-timezone'

let handler = async (m, { conn, text, usedPrefix, command }) => {
    const lugarFecha = moment().tz('America/Lima')
    const formatoFecha = {
        weekdays: ['Domingo', 'Lunes', 'Martes', 'Miércoles', 'Jueves', 'Viernes', 'Sábado'],
        months: ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio', 'Agosto', 'Septiembre', 'Octubre', 'Noviembre', 'Diciembre']
    }
    lugarFecha.locale('es', formatoFecha)
    const hoy = lugarFecha.date()
    const mesActual = lugarFecha.month()
    const anioActual = lugarFecha.year()
    const diasEnElMes = lugarFecha.daysInMonth()

    const buttonRows = [];

    // Agregamos el botón de la fecha actual
    buttonRows.push({
        header: "",
        title: `Hoy: ${hoy} de ${lugarFecha.format('MMMM [del] YYYY')}`,
        description: "",
        id: `.tes7 ${hoy}`
    });

    // Agregamos los siguientes días del mes actual
    for (let i = hoy + 1; i <= diasEnElMes; i++) {
        buttonRows.push({
            header: "",
            title: `${i} de ${lugarFecha.format('MMMM [del] YYYY')}`,
            description: "",
            id: `.tes7 ${i}`
        });
    }

    // Si el mes se está acabando, mostramos los días del siguiente mes
    if (hoy >= diasEnElMes) {
        const siguienteMes = lugarFecha.add(1, 'months');
        const diasSiguienteMes = siguienteMes.daysInMonth();
        for (let i = 1; i <= diasSiguienteMes; i++) {
            buttonRows.push({
                header: "",
                title: `${i} de ${siguienteMes.format('MMMM [del] YYYY')}`,
                description: "",
                id: `.tes7 ${i}`
            });
        }
    }

    const buttonParamsJson = JSON.stringify({
        title: 'OPCIONES',
        description: "Seleccione una opción",
        sections: [
            { title: `Fecha actual: ${lugarFecha.format('DD [de] MMMM [del] YYYY')}`, rows: buttonRows }
        ]
    });

    const interactiveMessage = {
        body: { text: '🔆 *¡Seleccione un dia del mes actual para su visita!*' },
        footer: { text: 'Asegúrese de poner un dia equivalente a la fecha actual en: *OPCIONES*' },
        header: { hasMediaAttachment: false },
        nativeFlowMessage: { buttons: [{ 
            name: "single_select",
            buttonParamsJson
        }] }
    };

    const message = { messageContextInfo: { deviceListMetadata: {}, deviceListMetadataVersion: 2 }, interactiveMessage };
    await conn.relayMessage(m.chat, { viewOnceMessage: { message } }, {});
}

handler.command = ['y']
export default handler
