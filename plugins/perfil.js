import moment from 'moment-timezone'
import PhoneNum from 'awesome-phonenumber'

let regionNames = new Intl.DisplayNames(['en'], { type: 'region' })

// Función para obtener la bandera del país
const getFlagEmoji = (countryCode) => {
    return String.fromCodePoint(...[...countryCode.toUpperCase()].map(c => 0x1F1E6 + c.charCodeAt(0) - 65));
}

let handler = async (m, { conn, text, usedPrefix, command: cmd }) => {
    let fkontak = { "key": { "participants":"0@s.whatsapp.net", "remoteJid": "status@broadcast", "fromMe": false, "id": "Halo" }, "message": { "contactMessage": { "vcard": `BEGIN:VCARD\nVERSION:3.0\nN:Sy;Bot;;;\nFN:y\nitem1.TEL;waid=${m.sender.split('@')[0]}:${m.sender.split('@')[0]}\nitem1.X-ABLabel:Ponsel\nEND:VCARD` }}, "participant": "0@s.whatsapp.net" }
    let num = m.quoted?.sender || m.mentionedJid?.[0] || text
    if (!num) throw `${e} *Ejemplo*: ${usedPrefix + cmd} @${prems}`
    num = num.replace(/\D/g, '') + '@s.whatsapp.net'
    if (!(await conn.onWhatsApp(num))[0]?.exists) throw 'Este usuario no existe, asegurese de escribir bien el numero.'
    let img = await conn.profilePictureUrl(num, 'image').catch(_ => './src/avatar_contact.png')
    let bio = await conn.fetchStatus(num).catch(_ => { })
    let name = await conn.getName(num)
    let business = await conn.getBusinessProfile(num)
    let format = PhoneNum(`+${num.split('@')[0]}`)
    let countryCode = format.getRegionCode('international');
    let country = regionNames.of(countryCode);
    let flagEmoji = getFlagEmoji(countryCode); // Obtener la bandera

    let wea = `\`🪀WhatsApp Stalking🪀\`\n\n*Pais :* ${country.toUpperCase()} ${flagEmoji}\n*Nombre :* ${name ? name : '-'}\n*Formato:* ${format.getNumber('international')}\n*Url:* wa.me/${num.split('@')[0]}\n*Tag :* @${num.split('@')[0]}\n*Bio :* ${bio?.status || '-'}\n*Bio Uptade:* ${bio?.setAt ? moment(bio.setAt.toDateString()).locale('id').format('LL') : '-'}\n\n${business ? `*Business Info 🫐*\n*BusinessId:* ${business.wid}\n*Website:* ${business.website ? business.website : '-'}\n*Email:* ${business.email ? business.email : '-'}\n*Categoria:* ${business.category}\n*Direccion:* ${business.address ? business.address : '-'}\n\*Zona Horaria:* ${business.business_hours.timezone ? business.business_hours.timezone : '-'}\n*Descripcion*: ${business.description ? business.description : '-'}` : '\`Cuenta De WhatsApp\`'}`
    
    img ? await conn.sendMessage(m.chat, { image: { url: img }, caption: wea, mentions: [num] }, { quoted: m }) : m.reply(wea)
}

handler.command = ['perfil', 'wastalk']
handler.group = true;

export default handler
