const mineflayer = require('mineflayer');

function createBot() {
    const bot = mineflayer.createBot({
        host: 'Trmanj.aternos.me',
        port: 59562,
        username: 'Mirac_Olumsuz',
        version: '1.20.1' // Sunucu sürümün 1.20.1 değilse burayı güncelle!
    });

    bot.on('spawn', () => {
        console.log('>> Mirac_Olumsuz sunucuya sızdı! İkinci nöbetçi aktif.');
    });

    // --- KRİTİK: DÜŞERSE 5 SANİYEDE GERİ DÖN ---
    bot.on('end', () => {
        console.log('!! Mirac_Olumsuz koptu, 5 saniye içinde geri fırlıyor...');
        setTimeout(createBot, 5000); 
    });

    bot.on('error', (err) => {
        console.log('>> Mirac_Olumsuz Hatası: ' + err.message);
        setTimeout(createBot, 10000); // Hata durumunda 10 saniye bekle
    });

    // --- PLANLI TAZELEME: 31 SAATTE BİR ---
    setInterval(() => {
        console.log('>> 31 saat doldu, Mirac_Olumsuz tazelenmek için çıkış yapıyor...');
        bot.quit();
    }, 111600000); // 31 Saat = 111.600.000 ms
}

// Botu başlat
createBot();

// Render'ı uyanık tutan sunucu (Bunun portunu 3001 yapabilirsin çakışmasın diye)
const http = require('http');
http.createServer((req, res) => {
    res.write('Mirac_Olumsuz 7/24 Aktif!');
    res.end();
}).listen(3001); 
