const mineflayer = require('mineflayer');
const http = require('http');

// Render'ı uyanık tutan sunucu
http.createServer((req, res) => {
    res.write('Botlar Aktif!');
    res.end();
}).listen(3000);

function createBot(name, interval) {
    const bot = mineflayer.createBot({
        host: 'Trmanj.aternos.me',
        port: 59562, // BURAYI ATERNOS'TAKİ GÜNCEL PORTLA KONTROL ET!
        username: Mirac_Olumsuz,
        version: false // ViaBackwards için en iyisi bu, sürümü otomatik seçer
    });

    bot.on('spawn', () => {
        console.log(`>> [BAŞARILI] ${name} içeri girdi ve pistonu buldu!`);
    });

    bot.on('end', () => {
        console.log(`!! [KOPMA] ${name} düştü, 5 saniye sonra dönüyor...`);
        setTimeout(() => createBot(name, interval), 5000);
    });

    bot.on('error', (err) => {
        console.log(`>> [HATA] ${name}: ${err.message}`);
    });

    // Planlı Tazeleme (Senin istediğin 17 ve 31 saat)
    setInterval(() => {
        console.log(`>> [TAZELEME] ${name} çık-gir yapıyor...`);
        bot.quit();
    }, interval);
}

// Botları Başlat
createBot('Mirac_Bot', 61200000); // 17 Saat
setTimeout(() => {
    createBot('Mirac_Olumsuz', 111600000); // 31 Saat
}, 30000); // Arada 30 sn olsun
