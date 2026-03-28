const mineflayer = require('mineflayer');
const http = require('http');

// Render'ı uyanık tutan sunucu
http.createServer((req, res) => {
    res.write('Mirac Sistemi Aktif!');
    res.end();
}).listen(3000);

function createBot(botName, interval) {
    const bot = mineflayer.createBot({
        host: 'Trmanj.aternos.me',
        port: 59562, // ATERNOS'TAN KONTROL ET, DEĞİŞTİYSE DÜZELT!
        username: Mirac_Olumsuz,
        version: false // ViaBackwards için otomatik sürüm
    });

    bot.on('spawn', () => {
        console.log(`>> [GİRDİ] ${botName} şu an pistonun üstünde zıplıyor!`);
    });

    bot.on('end', () => {
        console.log(`!! [KOPMA] ${botName} düştü, 5 saniye içinde geri fırlıyor...`);
        setTimeout(() => createBot(botName, interval), 5000);
    });

    bot.on('error', (err) => {
        console.log(`>> [HATA] ${botName}: ${err.message}`);
    });

    // Planlı Tazeleme (17 ve 31 saat)
    setInterval(() => {
        console.log(`>> [TAZELEME] ${botName} için tazelenme vakti...`);
        if (bot && bot.quit) bot.quit();
    }, interval);
}

// BOT 1: Mirac_Bot (17 Saat)
createBot('Mirac_Bot', 61200000);

// BOT 2: Mirac_Olumsuz (31 Saat)
setTimeout(() => {
    createBot('Mirac_Olumsuz', 111600000);
}, 30000); // 30 saniye sonra ikinci bot girer
