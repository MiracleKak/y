import fetch from 'node-fetch'
import fs from 'fs'
let handler = async (m, { conn, args, command }) => {
  const ultah = new Date('Februari 2 2023 00:0:01')
    const sekarat = new Date().getTime() 
    const Kurang = ultah - sekarat
    const ohari = Math.floor( Kurang / (1000 * 60 * 60 * 24));
    const ojam = Math.floor( Kurang % (1000 * 60 * 60 * 24) / (1000 * 60 * 60))
    const onet = Math.floor( Kurang % (1000 * 60 * 60) / (1000 * 60))
    const detek = Math.floor( Kurang % (1000 * 60) / 1000)
let totalf = Object.values(global.plugins).filter(
    (v) => v.help && v.tags
  ).length;
 await conn.sendButton(m.chat, `*Hai Ngab*
Kenalin saya Mixyla Bot Saya akan membantu Anda kapan pun & Dimana pun, Saya asisten bot WhatsApp yang di buat oleh Miracle
\n`,wm + '\n\n' + botdate, thumbdoc, [['Aʟʟ Mᴇɴᴜ','.? all'],['Lɪsᴛ Mᴇɴᴜ','.siuuu']], m, {
contextInfo: { externalAdReply :{
                        mediaUrl: 'https://telegra.ph/file/0be0e281c9592ef167076.jpg',
                        mediaType: 2,
                        description: 'anu',
                        title: `Miracle🎧 : ${ohari} Hari ${ojam} Jam ${onet} Menit ${detek} Detik`,
                        body: `Join Grup`,          previewType: 0,
                        thumbnail: await (await fetch(`https://telegra.ph/file/0be0e281c9592ef167076.jpg`)).buffer(),
                        sourceUrl: 'https://chat.whatsapp.com/EJ0c8rr1jrJK7BvxNOZFs2'
                      }}
})
}


handler.help = ['menu']
handler.tags = ['group']
handler.command = /^(menu|help|co)$/i
handler.register = false

export default handler
