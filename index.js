const express = require('express');
const mineflayer = require('mineflayer');
const app = express();

app.get('/', (req, res) => res.send('Bot Sistemi Aktif!'));
app.listen(3000, '0.0.0.0');

function createBot() {
    const bot = mineflayer.createBot({
        host: 'trmanj.aternos.me',
        port: 59562, // << BURAYI KONTROL ET! Değişmiş olabilir.
        username: 'Mirac_Olumsuz',
        version: false,
        auth: 'offline',
        checkTimeoutInterval: 30000
    });

    bot.on('spawn', () => {
        console.log('✅ ZAFER! Mirac_Olumsuz oyuna sızdı!');
    });

    bot.on('error', (err) => {
        console.log('❌ Bağlantı Hatası: ' + err.message);
    });

    bot.on('end', () => {
        console.log('⚠️ Bağlantı koptu, 10sn sonra diriliyorum...');
        setTimeout(createBot, 10000);
    });
}

createBot();
