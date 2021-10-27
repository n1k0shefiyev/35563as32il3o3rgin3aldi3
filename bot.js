const express = require("express");
const app = express();
const http = require("http");
app.get("/", (request, response) => {
  console.log(
    `Az Önce Bot Ping yedi, Sorun önemli değil merak etme. Hatayı düzelttik.`
  );
  response.sendStatus(200);
});
app.listen(process.env.PORT);
setInterval(() => {
  http.get(`http://${process.env.PROJECT_DOMAIN}.glitch.me/`);
}, 280000);
const Discord = require("discord.js");
const db = require('quick.db')
const client = new Discord.Client();
const ayarlar = require("./ayarlar.json");
const fs = require("fs");
const moment = require("moment");
moment.locale("tr")
const chalk = require("chalk");
require("./util/eventLoader")(client);

var prefix = ayarlar.prefix;

const log = message => {
  console.log(`[${moment().format("YYYY-MM-DD HH:mm:ss")}] ${message}`);
};


client.commands = new Discord.Collection();
client.aliases = new Discord.Collection();
fs.readdir("./komutlar/", (err, files) => {
  if (err) console.error(err);
  log(`${files.length} komut yüklenecek.`);
  files.forEach(f => {
    let props = require(`./komutlar/${f}`);
    log(`Yüklenen komut: ${props.help.name}.`);
    client.commands.set(props.help.name, props);
    props.conf.aliases.forEach(alias => {
      client.aliases.set(alias, props.help.name);
    });
  });
});

client.reload = command => {
  return new Promise((resolve, reject) => {
    try {
      delete require.cache[require.resolve(`./komutlar/${command}`)];
      let cmd = require(`./komutlar/${command}`);
      client.commands.delete(command);
      client.aliases.forEach((cmd, alias) => {
        if (cmd === command) client.aliases.delete(alias);
      });
      client.commands.set(command, cmd);
      cmd.conf.aliases.forEach(alias => {
        client.aliases.set(alias, cmd.help.name);
      });
      resolve();
    } catch (e) {
      reject(e);
    }
  });
};

client.load = command => {
  return new Promise((resolve, reject) => {
    try {
      let cmd = require(`./komutlar/${command}`);
      client.commands.set(command, cmd);
      cmd.conf.aliases.forEach(alias => {
        client.aliases.set(alias, cmd.help.name);
      });
      resolve();
    } catch (e) {
      reject(e);
    }
  });
};

client.unload = command => {
  return new Promise((resolve, reject) => {
    try {
      delete require.cache[require.resolve(`./komutlar/${command}`)];
      let cmd = require(`./komutlar/${command}`);
      client.commands.delete(command);
      client.aliases.forEach((cmd, alias) => {
        if (cmd === command) client.aliases.delete(alias);
      });
      resolve();
    } catch (e) {
      reject(e);
    }
  });
};

client.elevation = message => {
  if (!message.guild) {
    return;
  }
  let permlvl = 0;
  if (message.member.hasPermission("BAN_MEMBERS")) permlvl = 2;
  if (message.member.hasPermission("ADMINISTRATOR")) permlvl = 3;
  if (message.author.id === ayarlar.sahip) permlvl = 4;
  return permlvl;
};

var regToken = /[\w\d]{24}\.[\w\d]{6}\.[\w\d-_]{27}/g;
// client.on('debug', e => {
//   console.log(chalk.bgBlue.green(e.replace(regToken, 'that was redacted')));
// });

client.on("warn", e => {
  console.log(chalk.bgYellow(e.replace(regToken, "that was redacted")));
});

client.on("error", e => {
  console.log(chalk.bgRed(e.replace(regToken, "that was redacted")));
});

client.login( process.env.token);
////////////OtoCevap

//Nihad Design


const data = new Map();

//SEVIYE SISTEMI 
client.cooldown = new Discord.Collection();
client.config = {
cooldown: 1 * 1000
}
client.db = require("quick.db");
client.on("message", async (message) => {
    if (!message.guild || message.author.bot) return;
    // XP
    exp(message);
function exp(message) {
    if (!client.cooldown.has(`${message.author.id}`) || (Date.now() - client.cooldown.get(`${message.author.id}`) > client.config.cooldown)) {
        let exp = client.db.add(`exp_${message.author.id}`, 1);
        let level = Math.floor(0.3 * Math.sqrt(exp));
        let lvl = client.db.get(`level_${message.author.id}`) || client.db.set(`level_${message.author.id}`,1);;
        if (level > lvl) {
            let newLevel = client.db.set(`level_${message.author.id}`,level);
            message.channel.send(`:tada: ${message.author.toString()}, Level atladın yeni levelin ${newLevel}!`);
        }
        client.cooldown.set(`${message.author.id}`, Date.now());
    }
}
});

//SELAM ALEYKUM SELAM SISTEMI




////////////////
client.on("message", async (msg, member, guild) => {
  if (msg.content.toLowerCase() === "sea") {
    msg.reply(
      "**Aleyküm Selam Hoşgeldin <a:Selamke:898322816892543046> ** "
    );
  }
});
////////////////
client.on("message", async (msg, member, guild) => {
  if (msg.content.toLowerCase() === "Sea") {
    msg.reply(
      "**Aleyküm Selam Hoşgeldin <a:Selamke:898322816892543046> ** "
    );
  }
});
//////////////
client.on("message", async (msg, member, guild) => {
  if (msg.content.toLowerCase() === "selam") {
    msg.reply(
      "**Aleyküm Selam Hoşgeldin  <a:Selamke:898322816892543046> ** "
    );
  }
});
////////////////
client.on("message", async (msg, member, guild) => {
  if (msg.content.toLowerCase() === "Selam") {
    msg.reply(
      "**Aleyküm Selam Hoşgeldin <a:Selamke:898322816892543046> ** "
    );
  }
});
///////////////
client.on("message", async (msg, member, guild) => {
  if (msg.content.toLowerCase() === "Selamun Aleyküm") {
    msg.reply(
      "**Aleyküm Selam Hoşgeldin  <a:Selamke:898322816892543046> ** "
    );
  }
});

////////////
client.on("message", async (msg, member, guild) => {
  if (msg.content.toLowerCase() === "selamlar") {
    msg.reply(
      "**Aleyküm Selam Hoşgeldin  <a:Selamke:898322816892543046> ** "
    );
  }
});
//////////////
client.on("message", async (msg, member, guild) => {
  if (msg.content.toLowerCase() === "selamunaleyküm") {
    msg.reply(
      "**Aleyküm Selam Hoşgeldin <a:Selamke:898322816892543046> ** "
    );
  }
});
/////////////////
client.on("message", async (msg, member, guild) => {
  if (msg.content.toLowerCase() === "SelamunAleyküm") {
    msg.reply(
      "**Aleyküm Selam Hoşgeldin <a:Selamke:898322816892543046> ** "
    );
  }
});

//////////////
client.on("message", async (msg, member, guild) => {
  if (msg.content.toLowerCase() === "Selamun Aleyküm") {
    msg.reply(
      "**Aleyküm Selam Hoşgeldin <a:Selamke:898322816892543046> ** "
    );
  }
});

//////////////
client.on("message", async (msg, member, guild) => {
  if (msg.content.toLowerCase() === "Sa") {
    msg.reply(
      "**Aleyküm Selam Hoşgeldin <a:Selamke:898322816892543046> ** "
    );
  }
});

//////////////
client.on("message", async (msg, member, guild) => {
  if (msg.content.toLowerCase() === "SA") {
    msg.reply(
      "**Aleyküm Selam Hoşgeldin <a:Selamke:898322816892543046> ** "
    );
  }
});

//////////////
client.on("message", async (msg, member, guild) => {
  if (msg.content.toLowerCase() === "sa") {
    msg.reply(
      "**Aleyküm Selam Hoşgeldin **  <a:Selamke:898322816892543046> "
    );
  }
});

client.on("message" , async message => {

if(message.content==="Selamm")

message.channel.send("**Aleyküm Selam Hoşgeldin **  <a:Selamke:898322816892543046>")

})

client.on("message", async (msg, member, guild) => {
  if (msg.content.toLowerCase() === "selamun aleykum") {
    msg.reply(
      "**Aleyküm Selam Hoşgeldin <a:Selamke:898322816892543046> ** "
    );
  }
});



//yapay zeka

client.on("message" , msg => {
if(msg.channel.id === "898730011803140137") {
const ai = require("@codare/codare.ai")
if(msg.author.bot) return
ai.sor(msg).then(lunexbuba => msg.channel.send(lunexbuba))}
})

//sese sokma

client.on("ready", () => {
client.channels.cache.get("898722219771985960").join()
})

//ses log

const logs = require('discord-logs');
logs(client);
//VOICE EVENTS//
let arthur = "898723741780029441" //Log atılacak kanal ID
client.on("voiceChannelJoin", (member, channel) => {
member.guild.channels.cache.get(arthur).send({embed:{color:"BLACK", title: "Ses kanalına giriş sağlandı", description: `Bu kullanıcı <@${member.user.id}>, bu kanala giriş sağladı \`${channel.name}\`!`}})
});
client.on("voiceChannelLeave", (member, channel) => {
member.guild.channels.cache.get(arthur).send({embed:{color:"BLACK", title: "Ses kanalından çıkış sağlandı", description: `Bu kullanıcı <@${member.user.id}>, bu kanaldan çıkış yaptı \`${channel.name}\`!`}})
});
client.on("voiceChannelSwitch", (member, oldChannel, newChannel) => {
member.guild.channels.cache.get(arthur).send({embed:{color:"BLACK", title: "Ses kanalı değiştirildi", description: `Bu kullanıcı <@${member.user.id}>, bu kanaldan çıktı \`${oldChannel.name}\` ve bu kanala giriş yaptı \`${newChannel.name}\`!`}})
});
client.on("voiceChannelMute", (member, muteType) => {
member.guild.channels.cache.get(arthur).send({embed:{color:"BLACK", title: "Ses kanalından mute yedi", description: `Bu kullanıcı <@${member.user.id}>, mute yedi! (Tip: **ses kanal mutesi**)`}})
});
client.on("voiceChannelUnmute", (member, oldMuteType) => {
member.guild.channels.cache.get(arthur).send({embed:{color:"BLACK", title: "Ses kanalından mutesi açıldı", description: `Bu kullanıcı <@${member.user.id}>, yediği mutesini açtı! (Tip: **ses kanal mutesi açıldı**)`}})
});
client.on("voiceChannelDeaf", (member, deafType) => {
member.guild.channels.cache.get(arthur).send({embed:{color:"BLACK", title: "Ses kanalından sağırlaştırıldı", description: `Bu kullanıcı <@${member.user.id}>, sağırlaştırıldı! (Tip: **ses kanal sağırlaştırılması**)`}})
});
client.on("voiceChannelUndeaf", (member, oldDeafType) => {
member.guild.channels.cache.get(arthur).send({embed:{color:"BLACK", title: "Ses kanalından sağırlaştırılması kaldırıldı", description: `Bu kullanıcı <@${member.user.id}>, sağırlaştırılması kaldırdı! (Tip: **ses kanal sağırlaştırma kaldırma**)`}})
});
client.on("voiceStreamingStart", (member, voiceChannel) => {
member.guild.channels.cache.get(arthur).send({embed:{color:"BLACK", title: "Ses yayını açıldı", description: `Bu kullanıcı <@${member.user.id}>, bu kanalda \`${voiceChannel}\` yayın yapmaya başladı!`}})
});
client.on("voiceStreamingStop", (member, voiceChannel) => {
member.guild.channels.cache.get(arthur).send({embed:{color:"BLACK", title: "Ses yayını bitirildi", description: `Bu kullanıcı <@${member.user.id}>, bu kanalda \`${voiceChannel}\` yayınını bitirdi!`}})
});
client.on("unhandledVoiceStateUpdate", (oldState) => {
oldState.member.guild.channels.cache.get(arthur).send({embed:{color:"BLACK", title: "Bilinmeyen bir ses işlemi", description: `Bu kullanıcı <@${oldState.member.id}>, ses kanalında bir işlem yaptı ancak ben ne olduğunu anlayamadım. Büyük ihtimalle kamerası açıldı.`}})
});


//afk

client.on("message" , async msg => {
  
  if(!msg.guild) return;
  if(msg.content.startsWith(ayarlar.prefix+"afk")) return; 
  
  let afk = msg.mentions.users.first()
  
  const kisi = db.fetch(`afkid_${msg.author.id}_${msg.guild.id}`)
  
  const isim = db.fetch(`afkAd_${msg.author.id}_${msg.guild.id}`)
 if(afk){
   const sebep = db.fetch(`afkSebep_${afk.id}_${msg.guild.id}`)
   const kisi3 = db.fetch(`afkid_${afk.id}_${msg.guild.id}`)
   if(msg.content.includes(kisi3)){

       msg.reply(`Etiketlediğiniz Kişi Afk \nSebep : ${sebep}`)
   }
 }
  if(msg.author.id === kisi){

       msg.reply(`Afk'lıktan Çıktınız`)
   db.delete(`afkSebep_${msg.author.id}_${msg.guild.id}`)
   db.delete(`afkid_${msg.author.id}_${msg.guild.id}`)
   db.delete(`afkAd_${msg.author.id}_${msg.guild.id}`)
    msg.member.setNickname(isim)
    
  }
  
});

//

const SAHANGUARD = new Discord.Client();
const SAHANMODERASYON = new Discord.Client();
const SAHANREGISTER = new Discord.Client();


 
SAHANGUARD.login(process.env.guard)//Hesap Tokeni Token
SAHANMODERASYON.login(process.env.moderasyon)//Hesap Tokeni Token
SAHANREGISTER.login(process.env.register)//Hesap Tokeni Token

SAHANGUARD.on('ready', ()=>{
  setTimeout(() => {
SAHANGUARD.channels.cache.get('898722219771985960').join()// bi deq düzeldirem
     }, 1000)
})

SAHANMODERASYON.on('ready', ()=>{
  setTimeout(() => {
SAHANMODERASYON.channels.cache.get('898722219771985960').join()// bi deq düzeldirem
     }, 1000)
})

SAHANREGISTER.on('ready', ()=>{
  setTimeout(() => {
SAHANREGISTER.channels.cache.get('898722219771985960').join()// bi deq düzeldirem
     }, 1000)
})

SAHANREGISTER.on("ready", async () => {
   log("Şahan Register")
      SAHANREGISTER.user.setActivity("⭐ Şahan", 
        { url: 'https://www.twitch.tv/sahan_kaya',
        type: 'STREAMING' }); 
})

SAHANMODERASYON.on("ready", async () => {
   log("Şahan Moderasyon Giris Yapti")
      SAHANMODERASYON.user.setActivity("⭐ Şahan", 
        { url: 'https://www.twitch.tv/sahan_kaya',
        type: 'STREAMING' }); 
})

SAHANGUARD.on("ready", async () => {
   log("Şahan Guard Giris Yapti")
      SAHANGUARD.user.setActivity("⭐ Şahan", 
        { url: 'https://www.twitch.tv/sahan_kaya',
        type: 'STREAMING' }); 
})

client.on("ready", async () => {
   log("Şahan  Giris Yapti")
      client.user.setActivity("⭐ Şahan", 
        { url: 'https://www.twitch.tv/sahan_kaya',
        type: 'STREAMING' }); 
})

//asagi hosgeldinin davet linki zad genis genisdi

const guildInvites = new Map();

client.on('inviteCreate', async invite => guildInvites.set(invite.guild.id, await invite.guild.fetchInvites()));
client.on('ready', () => {
    client.guilds.cache.forEach(guild => {
        guild.fetchInvites()
            .then(invites => guildInvites.set(guild.id, invites))
            .catch(err => console.log(err));
    });
});

client.on('guildMemberAdd', async member => {//hamzamertakbaba#3361
    const cachedInvites = guildInvites.get(member.guild.id);
    const newInvites = await member.guild.fetchInvites();
    guildInvites.set(member.guild.id, newInvites);
    try {
        const usedInvite = newInvites.find(inv => cachedInvites.get(inv.code).uses < inv.uses) || "1";
        const embed = new Discord.MessageEmbed()
            .setDescription(`${member.user.tag} Sunucuya ${member.guild.memberCount}. sırayla katıldı. ${usedInvite.inviter.tag} tarafından davet edilmiş. ${usedInvite.url} Davet koduyla katılmış. Bu davet kodu ${usedInvite.uses} kere kullanılmış.`)
            .setTimestamp()
            .setFooter("Şahan")
        const welcomeChannel = member.guild.channels.cache.find(channel => channel.id === '898443483667394580');
        if(welcomeChannel) {
            welcomeChannel.send(embed).catch(err => console.log(err));
        }
    }
    catch(err) {
        console.log(err);
    }
});


//random pp gif

client.on(`userUpdate`, (oldUser, newUser) => {

 

  let kişi = client.users.cache.get(oldUser.id)

  let avatar = kişi.avatarURL()

  let kanal = client.channels.cache.find(ch => ch.id === '825299189349089310')

 

  const emb = new Discord.MessageEmbed()

  .setImage(avatar)

  .setFooter(`${kişi.tag}`)

  .setTimestamp()

  .setDescription(`Fotoğrafa gitmek için [tıkla](${kişi.avatarURL()})!`)

 kanal.send(` @${kişi.tag}`, emb) ;
  

})






client.on("message", async message => {
if (message.channel.id === "825299189349089310") {
message.react("897511975263830107")
}});

client.on("message", async message => {
if (message.channel.id === "820751421875421205") {
message.react("897511975263830107")
}});

client.on("message", async message => {
if (message.channel.id === "820380462543405177") {
message.react("897511975263830107")
}});

client.on("message", async message => {
if (message.channel.id === "888206450801917952") {
message.react("897511975263830107")
}});

client.on("message", async message => {
if (message.channel.id === "828890554925282754") {
message.react("897511975263830107")
}});

client.on("message", async message => {
if (message.channel.id === "820751421875421205") {
message.react("897511975263830107")
}});


//

client.on("message", async message => {
if (message.channel.id === "825299189349089310") {
message.react("897511974869545001")
}});

client.on("message", async message => {
if (message.channel.id === "820751421875421205") {
message.react("897511974869545001")
}});

client.on("message", async message => {
if (message.channel.id === "820380462543405177") {
message.react("897511974869545001")
}});

client.on("message", async message => {
if (message.channel.id === "888206450801917952") {
message.react("897511974869545001")
}});

client.on("message", async message => {
if (message.channel.id === "828890554925282754") {
message.react("897511974869545001")
}});

client.on("message", async message => {
if (message.channel.id === "820751421875421205") {
message.react("897511974869545001")
}});


//twitch duyuru sohbete

client.on('ready', () => {
  setInterval(function() {
let taner = client.channels.cache.get("806656634955890698") //MESAJIN GİDECEĞİ KANAL ID
     if(taner){
taner.send(`https://www.twitch.tv/sahan_kaya`) //Mesajınız
     }
    }, 28800000) //1000 = 1sn 
})



