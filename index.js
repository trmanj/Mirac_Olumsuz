const mineflayer = require('mineflayer');
const bot = mineflayer.createBot({
    host: 'ADRESIN.aternos.me', // Kendi IP'ni yaz!
    username: 'Mirac_Olumsuz',
    version: "1.20.1"
});

bot.on('spawn', () => {
    console.log("✅ Mirac_Olumsuz vagonuna kuruldu!");
    setInterval(() => {
        bot.look(Math.random() * 6.28, (Math.random() - 0.5) * 3.14);
    }, 25000); // Bu da 25 saniyede bir baksın, senkron bozulmasın
});

bot.on('end', () => setTimeout(() => process.exit(), 5000));
