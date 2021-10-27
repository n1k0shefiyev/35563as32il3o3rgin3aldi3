const discord = require('discord.js');
exports.run = async(client, message, args) => {
    const embed = new discord.MessageEmbed()
    .setTitle('Şahan Bot Yardım menüsü')
    .addField('.afk', 'Afk Oldugunu Belirt', true)
    .addField('.avatar', 'Avatarina Bak', true)
    .addField('.ban-say', 'Banli Uye Sayisi', true)
    .addField('.başvur', 'Yetkili Başvuru', true)
    .addField('.bilgi', 'Uye Hakkinda Bilgi Verir', true)
    .addField('.günlükburçyorumu', 'Günlük Burç Yorumu', true)
    .addField('.radyo', 'Radyo', true)
    .addField('.rolbilgi', 'Rol Hakkinda Bilgi Verir', true)
    .addField('.seviye', 'Seviyene Bakabilirsin', true)
    .addField('.yz', 'Yaz Kazan Oyunu Ilk Yazan Kazanir', true)
message.channel.send(embed)
};
exports.conf = {
enabled: true,
guildOnly: false,
permLevel: 0,
aliases: ['help']



};
exports.help = {
name: "yardım"
};
