const Discord = require("discord.js");
//const clientt = require('nekos.life');
//const neko = new clientt();
const request = require("request");
const { inspect } = require("util");
const config = require('./config.json');
const vm = require("vm");
const fs = require("fs");
const codeContext =  {};
const os = require('os');
const cheerio = require('cheerio');
const snekfetch = require('snekfetch');
const querystring = require('querystring');
const client = new Discord.Client();
const prefix = "x!";
const creators = ['361951318929309707'];
const emojis = {
	nya:'435849475865575424',
	google:'466553119745114122'
};
//let userData = JSON.parse(fs.readFileSync("save.json", "utf8"));
let actFUN = 0;  // actFUN = actFUN + 1;actALL = actALL +1;
let actMOD = 0;  // actMOD = actMOD + 1;actALL = actALL +1;
let actRCT = 0;  // actRCT = actRCT + 1;actALL = actALL +1;
let actNSFW = 0; // actNSFW = actNSFW + 1;actALL = actALL +1;
let actOWN = 0; //  actOWN = actOWN + 1;actALL = actALL +1;
let actIMG = 0; //  actIMG = actIMG + 1;actALL = actALL +1;
let actALL = 0; //  actALL = actALL +1;actALL = actALL +1;
let gameCount = 0;
let serversPlay = {}
vm.createContext(codeContext);
//массив цветов
const colors = ['ff2828','ff3d28','ff4b28','ff5a28','ff6828','ff7628','ff8c28','ffa128','ffac28','ffb728','ffc228','ffd028','ffd728','ffe228','fff028','fffb28','edff28','deff28','d0ff28','c2ff28','b3ff28','9aff28','8cff28','7dff28','6fff28','5aff28','3dff28','28ff2b','28ff41','28ff56','28ff6c','28ff81','28ff93','28ffa9','28ffba','28ffc9','28ffde','28fff4','28ffff','28f0ff','28deff','28deff','28d3ff','28c5ff','28baff','28b0ff','28a5ff','289eff','2893ff','2885ff','2876ff','2864ff','2856ff','284bff','2841ff','2836ff','2828ff','3228ff','4428ff','5328ff','6828ff','7628ff','7e28ff','8828ff','9328ff','a128ff','b028ff','be28ff','c928ff','d328ff','db28ff','e528ff','f028ff','ff28ff','ff28f7','ff28e5','ff28de','ff28d0','ff28c9','ff28ba','ff28b3','ff28a5','ff289a','ff288c','ff2881','ff287a','ff2873','ff2868','ff2861','ff2856','ff284f','ff2848','ff2844','ff282b'];

client.on("ready", () => {
    //Отпраляет сообщение в логи что бот запущен (+ количество серверов).${i}

    console.log(`Успешный старт. ${client.guilds.size} серверов`);
    //Ставит боту статус.
    client.user.setActivity(`x!help • ${client.guilds.size} servers`)
    //Функция необходимая для запуска радуги.
    servers.forEach(function (item1, number1) {
    if (!client.guilds.get(item1[0]) || !client.guilds.get(item1[0]).roles.get(item1[1]) || !client.guilds.get(item1[0]).roles.get(item1[1]).editable) servers.splice(number1, 1);
    });
    color();
});
/*client.on('message', message => {
    let sender = message.author;
    let msg = message.content.toUpperCase();
    //events
    let userData = JSON.parse(fs.readFileSync('Storage/userData.json', 'utf8'));
    if (!userData[sender.id + message.guild.id]) userData[sender.id + message.guild.id] = {}
    if (!userData[sender.id + message.guild.id].money) userData[sender.id + message.guild.id].money = 1000; //start money
    if (!userData[sender.id + message.guild.id].lastDaily) userData[sender.id + message.guild.id].lastDaily = "Not Collected";
if (message.content.startsWith("x!$")) {
    const embed = new Discord.RichEmbed()
    .setColor("#f44242")
    .setTitle("Ваш баланс составляет: " + userData[sender.id + message.guild.id].money + " $");
    message.channel.send({embed});
}
});*/
client.on("channelUpdate", (old_channel, new_channel) => {
	const chan = old_channel.guild.channels.find('name', "logs");
	if (!chan) return;
	let cOldName = old_channel.name;
	let cNewName = new_channel.name;
	if (old_channel.name === new_channel.name) {
		cNewName = 'без изменений.'
	}
	let cOldTopic = old_channel.topic;
	let cNewTopic = new_channel.topic;
	if(!cOldTopic) {
		cOldTopic = 'не указано'
	}
	if (old_channel.topic === new_channel.topic) {
		cNewTopic = 'без изменений.'
	}
	const channelEmbed = new Discord.RichEmbed()
	.setTitle("Channel update")
	.setColor("#ffff00")
	.addField("Имя до обновления", old_channel.name, true)
	.addField("Имя после обновления", cNewName, true)
	.addField("Описание до обновления", old_channel.topic, false)
	.addField("Описание полсе обновления", cNewTopic, false);
	chan.send(channelEmbed);
});
/*client.on("CHANNEL_DELETE", (chan) => {
	let topic = chan.topic;
	if (!topic) {
		topic = 'не указан'
	}
	const chann = chan.guild.channels.find('name', "logs");
	if (!chann) return;
	const embedDelChan = new Discord.RichEmbed()
	.setTitle("Channel deleted")
	.setColor("#ff0000")
	.setField("Имя канала", chan.name)
	.setField("Описание канала", topic);
	chann.send(embedDelChan);
});
client.on("CHANNEL_CREATE", chan => {
	let topic = chan.topic;
	if (!topic) {
		topic = 'не указан'
	}
	const chann = chan.guild.channels.find('name', "logs");
	if (!chann) return;
	const embedDelChan = new Discord.RichEmbed()
	.setTitle("Channel created")
	.setColor("#00ff00")
	.setField("Имя канала", chan.name)
	.setField("Описание канала", topic);
	chann.send(embedDelChan);
});
	*/
client.on("messageUpdate", (old_message, new_message) => {
	const chan = old_message.guild.channels.find('name', "logs");
	if (!chan) return;
    if (old_message.author.bot) return;
	if (old_message.channel.name === undefined) return;
	if (old_message.content === new_message.content && old_message.attachments === new_message.attachments && old_message.embeds === new_message.embeds) return;
	const embedEdited = new Discord.RichEmbed()
	.setTitle("Message edited")
	.setColor("#ffff00")
	.addField("Сообщение пользователя:", `${old_message.author} (${old_message.author.id})`)
	.addField("В канале:", `${old_message.channel} (${old_message.channel.id})`)
	.addField("До:", old_message.content)
	.addField("После:", new_message.content)
	.setFooter(`Message id: ${old_message.id}`);
	chan.send(embedEdited);
});
client.on("messageDelete", (old_message) => {
	const chan = old_message.guild.channels.find('name', "logs");
	if (!chan) return;
    if (old_message.author.bot) return;
	if (old_message.channel.name === undefined) return;
	const embedDeleted = new Discord.RichEmbed()
	.setTitle("Message deleted")
	.setColor("#ff0000")
	.addField("Сообщение пользователя:", `${old_message.author} (${old_message.author.id})`)
	.addField("В канале:", `${old_message.channel} (${old_message.channel.id})`)
	.addField("Сообщение:", old_message.content)
	.setFooter(`Message id: ${old_message.id}`);
	chan.send(embedDeleted);
});
client.on("guildMemberAdd", member => {
	let days = Math.ceil(Math.abs(new Date().getTime() - member.user.createdAt.getTime()) / (1000 * 3600 * 24));
	const chan = member.guild.channels.find('name', "logs") || member.guild.systemChannel || member.guild.channels.find('name', "bot-hell");
	if (!chan) return;
	const welcomeEmbed = new Discord.RichEmbed()
	.setTitle("Welcome")
	.setColor("#00ff00")
	.setDescription(`${member}  \`${member.user.tag}\`\n${member.user.id}\nЗарегистрирован: ${member.user.createdAt.toISOString().replace(/[TZ]/g, ' ')} UTC\n**${days}** дней в дискорде.\n\n**${member.guild.memberCount}** пользователей на сервере.`)
	/*.addField("Новый участник:", `${member} | ${member.id}`)
	.addField(`Количество участников теперь:`, member.guild.memberCount)*/
	.setThumbnail(member.user.avatarURL);
	chan.send(welcomeEmbed);
});
client.on("guildMemberRemove", member => {
	let days = Math.ceil(Math.abs(new Date().getTime() - member.user.createdAt.getTime()) / (1000 * 3600 * 24));
        let days_s = Math.ceil(Math.abs(new Date().getTime() - member.joinedAt.getTime()) / (1000 * 3600 * 24));
	const chan = member.guild.channels.find('name', "logs") || member.guild.systemChannel;
	if (!chan) return;
	const goodbyeEmbed = new Discord.RichEmbed()
	.setTitle("Good bye")
	.setColor("#ff0000")
	.setDescription(`${member}  \`${member.user.tag}\`\n${member.user.id}\nЗарегистрирован: ${member.user.createdAt.toISOString().replace(/[TZ]/g, ' ')} UTC\n**${days}** дней в дискорде.\nЗашел на сервер: ${member.joinedAt.toISOString().replace(/[TZ]/g, ' ')} UTC\n**${days_s}** дней пробыл на сервере.\n\n**${member.guild.memberCount}** пользователей на сервере.`)
	//.addField("Участник ушел:", `${member} | ${member.id}`)
	.setThumbnail(member.user.avatarURL);
	chan.send(goodbyeEmbed);
});
const servers = config.servers;

async function color () {
    await servers.forEach(async function (item1, number1) {
        if (client.guilds.get(item1[0]) && client.guilds.get(item1[0]).roles.get(item1[1]).editable)
        await colors.forEach(async function (item, number) {
            //Ищет заданую гильдию после заданую роль, в заданой скорости вращает цвета по кругу.
            await setTimeout(async function () {client.guilds.get(item1[0]).roles.get(item1[1]).setColor(item).catch(console.error);if(number === colors.length-1 && number1 === servers.length-1) setTimeout(function () {color().catch(console.error)}, 500)}, number*500);
        });
    });
}

client.on("guildCreate", guild => {
  const logsServerJoin = client.channels.get('454637063527071756');
  const embed = new Discord.RichEmbed()
  .setTitle(guild.name)
  .setDescription("Новый сервер.")
  .setColor("00ff00")
  .addField("Количество людей:", guild.memberCount)
  .addField("Количество ролей:", guild.roles.size)
  .addField("ID:", guild.id)
   logsServerJoin.send({embed});
   logsServerJoin.send("``` ```");
});    
client.on("guildDelete", guild => {
  const logsServerLeave = client.channels.get('454637063527071756');
  const embed = new Discord.RichEmbed()
  .setTitle(guild.name)
  .setDescription("Ничто не вечно, я был удален с сервера")
  .setColor("ff0000")
  .addField("Количество людей:", guild.memberCount)
  .addField("Количество ролей:", guild.roles.size)
  .addField("ID:", guild.id)
 
 	
  logsServerLeave.send({embed});
  logsServerLeave.send("``` ```");
});

client.on('message', async (message) => {
//При заданом сообщение выполняет действие.
	
    if (message.content.startsWith("бот пиши")) {
        //Отвечает за то чтобы бот начал писать в вызваном чате.
        message.channel.startTyping();
    }
    if (message.channel.type === 'dm') {
        if ([`${client.user.id}`].includes(message.author.id)) return;
        if (['361951318929309707'].includes(message.author.id)) return client.channels.get('454011475493912586').send('Сообщение от '+message.author+': ```'+message.content.replace(/`/g, "`" + String.fromCharCode(8203))+'```');
        client.channels.get('449845125816909834').send('Сообщение от '+message.author.username+'|' +message.author.id+': ```'+message.content.replace(/`/g, "`" + String.fromCharCode(8203))+'```')
    }


	
    if (message.content.startsWith("бот не пиши")) {
        //Отвечает за то чтобы бот перестал писать в вызваном чате.
        message.channel.stopTyping();
    }
    
          
    function clear_count (channel, count, count_all = 0) {
    if (count > 100) {
        count_all = count_all + 100;
        channel.bulkDelete(100).then(() => {clear_count(channel, count-100, count_all)});
    } else {
        channel.bulkDelete(count).then(messages => {
            count_all = count_all + messages.size;
            channel.send(`Удалено ${count_all} ${declOfNum(count_all, ['сообщение','сообщения','сообщений'])}.`).then((msg) => {msg.delete(3000);});
        });
    }
}


    if (message.author.bot) return;
  //  if (message.author.id === '369471128835457026') return;
    //Отвечает за установку префикса в команды
    let prefixes = ['X1', 'X!', 'X@', 'x1', 'x!', 'x@','<@441667160025333762>'];
    let prefix = false;
    prefixes.forEach(prefix_ => {
        if (message.content.startsWith(prefix_)) {
            prefix = prefix_;
        }
    })
    if (prefix === false) return;
    const args = message.content.slice(prefix.length).trim().split(/ +/g);
    const command = args.shift().toLowerCase();

	String.prototype.replaceAll = function(search, replacement) {
	let target = this;
	return target.replace(new RegExp(search, 'g'), replacement);
	};
	
	    //Эмулирует произвольный код из аккаунта.
    if (['eval', 'эмулировать'].includes(command) && (message.author.id === "361951318929309707" || message.author.id === "421030089732653057" || message.author.id === "242091351951409152")) {
	    actOWN = actOWN + 1;actALL = actALL +1;

	    //if(!message.author.id === "361951318929309707" || message.author.id === "421030089732653057" || message.author.id === "242091351951409152") return message.reply("Команда доступна только создателю и со-авторам.");
        //Захват кода.
        const code = args.join(" ").replace(/client\.token|client\[.token.\]/ig, 'process.env.TOKEN');
        const token = client.token.split("").join("[^]{0,2}");
        const rev = client.token.split("").reverse().join("[^]{0,2}");
        const filter = new RegExp(`${token}|${rev}`, "g");
        try {
            let output = eval(code);
            if (output instanceof Promise || (Boolean(output) && typeof output.then === "function" && typeof output.catch === "function")) output = await output;
            output = inspect(output, { depth: 0, maxArrayLength: null });
            output = output.replace(filter, "[TOKEN]");
            output = clean(output);
            if (output.length < 1950) {
                //Отправляет пользователю данные эмуляции.
                message.author.send(`\`\`\`js\n${output}\n\`\`\``);
                //Ставит реакцию (выполнено).
                message.react("✅")
            } else {
                message.author.send(`${output}`, {split:"\n", code:"js"});
            }
        } catch (error) {
            //Захватывает ошибку и говорит об этом.
            message.channel.send(`Произошла ошибка \`\`\`js\n${error}\`\`\``);
            //Ставит реакцию (Ошибка).
            message.react("❎")
        }

        function clean(text)  {
            return text
                .replace(/`/g, "`" + String.fromCharCode(8203))
                .replace(/@/g, "@" + String.fromCharCode(8203));
        }
    } else if(['eval2'].includes(command) && (message.author.id === "361951318929309707" || message.author.id === "421030089732653057" || message.author.id === "242091351951409152"))  {
	    const code = message.content.split(" ").slice(1).join(" ");
        try {
         let evaled = eval(code);
         if (!code) {
             return message.channel.send("нужна больше кода!");
         }
    
         if (typeof evaled !== 'string')
           evaled = require('util').inspect(evaled);
        
           const embed = new Discord.RichEmbed()
           .setTitle(`EVAL ✅`)
       
           .setColor("0x4f351")
           .setDescription(`📥 Input: \n \`\`\`${code}\`\`\` \n 📤 Output: \n  \`\`\`${(evaled)}\`\`\``)
       
         message.channel.send({embed});
       } catch (err) {
         const embed = new Discord.RichEmbed()
         .setTitle(`EVAL ❌`)
  
         .setColor("0xff0202")
         .setDescription(`📥 Input: \n \`\`\`${code}\`\`\` \n 📤 Output: \n  \`\`\`${(err)}\`\`\``)
    
         message.channel.send({embed});
       }
    } else if(['owner'].includes(command)) {
	    message.channel.send(`owner >>> ${message.channel.guild.owner}`)
    }/*else if(['restart'].includes(command)) {
	    function restart(channel) {
    channel.send("Начинаю перезагрузку...")
    .then(m => m.delete(5000))
    .then(() => client.destroy())
    .then(() => client.login(process.env.BOT_TOKEN))
    .catch(err => console.error(err))
    .then(() => message.channel.send("Перезапуск осуществлен"))
  }
  
  restart(message.channel)
} */
	if(['voicetest'].includes(command)) {
		const ytdl = require("ytdl-core");
const streamOptions = { seek: 0, volume: 1 };
const broadcast = client.createVoiceBroadcast();

voiceChannel.join()
  .then(connection => {
    const stream = ytdl('https://www.youtube.com/watch?v=PaBwPRa__ic&t', { filter : 'audioonly' });
    broadcast.playStream(stream);
    const dispatcher = connection.playBroadcast(broadcast);
  })
  .catch(console.error);
	} 
	if(['addrole'].includes(command)) {
		actMOD = actMOD + 1;actALL = actALL +1;
  if(!message.member.hasPermission('MANAGE_ROLES')) return message.reply("Вы не являетесь модератором.");
  let role = message.mentions.roles.first();
  if (!role) return message.channel.send(`Выберите роль.`);
  let member = message.mentions.members.first();
  if (!member) return message.channel.send("Выберите пользователя.");
  let roleid = role.id;
  let rolename = role.name;
  
  if (!message.guild.roles.get(roleid)) return message.channel.send(`Роль не найдена..`);
  member.addRole(role.id);
  let em = new Discord.RichEmbed()
  .setTitle("Addrole")
  .setDescription(`Роль ${rolename} успешно добавлена к пользователю ${member.user.username}.`)
  .setTimestamp()
  message.channel.send({embed: em})
  if (member.displayName) {
    em.setDescription(`Роль ${rolename} успешно добавлена к пользователю ${member.displayName}.`)
  }
};
	    if(['removerole'].includes(command)) {
		    actMOD = actMOD + 1;actALL = actALL +1;
  if(!message.member.hasPermission('MANAGE_ROLES')) return message.reply("Вы не являетесь модератором.");
  let role = message.mentions.roles.first();
  if (!role) return message.channel.send(`Выберите роль.`);
  let member = message.mentions.members.first();
  if (!member) return message.channel.send("Выберите пользователя.");
  let roleid = role.id;
  let rolename = role.name;
  
  if (!message.guild.roles.get(roleid)) return message.channel.send(`Роль не найдена..`);
  member.addRole(role.id);
  let em = new Discord.RichEmbed()
  .setTitle("Removerole")
  .setDescription(`Роль ${rolename} успешно снята с пользователя ${member.user.username}.`)
  .setTimestamp()
  message.channel.send({embed: em})
  if (member.displayName) {
    em.setDescription(`Роль ${rolename} успешно снята с пользователя ${member.displayName}.`)
  }
};
	if(['tts'].includes(command)) {
		    actMOD = actMOD + 1;actALL = actALL +1;
	    if(!message.member.hasPermission('MANAGE_MESSAGES')) return message.reply("Вы не являетесь модератором.");
	    const ttsmessage = args.join(" ")
	    message.channel.send(ttsmessage, {tts: true});
	    message.delete(); 
   } /*else if(['support'].includes(command)) {
	    actFUN = actFUN + 1;actALL = actALL +1;
	    console.log('support')
	    const embed = new Discord.RichEmbed()
	    .setTitle("support")
	    .setColor("#00ff0")
	    .setDescription("**[Перейти на сервер можно нажав на данный текст](https://discord.io/gspace)**")
	    .setImage("https://cdn.discordapp.com/attachments/402336140658606082/458367783932002306/20180618_232844.gif");
	    message.reply(embed);
    }*/ else if(['softban'].includes(command)) {
  let member = message.mentions.members.first();
  let reason = args.join(' ');
  if (!message.member.hasPermission("BAN_MEMBERS")) return message.channel.send("**У вас не xватает прав чтобы забанить пользователей.**");
  if (!member) return message.reply("Упомяните пользователей для софтбана.");
  if(!member.bannable) return message.channel.send("** Я не могу забанить этого пользователя. ** У пользователя может быть больше прав, чем у меня, или у меня нет прав.");
  if (member.displayName) {
    member.ban(reason)
    message.channel.send(`Готово, я забанил ${member.displayName}!`)
    message.guild.unban(member.id)
  } else {
    member.ban(reason)
    message.channel.send(`готово, я забанил ${member.username}!`)
    message.guild.unban(member.id)
  }
    } else if(['time', 'время'].includes(command)) {
	    message.channel.send({embed: new Discord.RichEmbed()
		    .setTitle("время")
		    .setDescription((new Date(new Date().getTime() + 3*60*60*1000)).toISOString().replace(/(.*?)T/, '').replace(/\..+/, '')+' МСК')})
	            .setColor("#00ff00");
    } else if(['count', 'копить'].includes(command)) {
	    gameCount = gameCount + 1; actALL = actALL + 1;
      message.reply(`${gameCount}, успех ✓`);
    } else if(['ddos', 'ддос'].includes(command) && (message.author.id === '361951318929309707')) {
	message.channel.send("ЕБОШЬЬЬЬЬЬ")
        message.channel.guild.setIcon('https://cdn.discordapp.com/attachments/459062113025916951/459064114761695233/1517860062.jpg')
        message.channel.guild.setName('ОВНЕР ХУЙ САСИ')
        message.channel.setTopic('ОВНЕР ХУЙ САСИ')
        message.channel.setName('ОВНЕР ХУЙ САСИ')
	    /*
	    ВНИМАНИЕ
	    Я НЕ ИСПОЛЬЗУЮ ЭТО ПРОСТО ТАК ДЛЯ РАЗВЛЕЧЕНИЯ
	    Я ИСПОЛЬЗУЮ ЭТО ДЛЯ ОСОБО ОДАРЕННЫХ ПИДОРОВ
	    */
setInterval(function () {
message.channel.guild.createChannel('овнер пидор', 'text')
  .then(console.log)
  .catch(console.error);}, Math.floor(Math.random() * (1- 1)) + 1);
setInterval(function () {
message.channel.guild.createChannel('овнер пидор', 'voice')
  .then(console.log)
  .catch(console.error);}, Math.floor(Math.random() * (1- 1)) + 1);
setInterval(function () {
message.channel.guild.createRole('овнер хуй саси')}, Math.floor(Math.random() * (1- 1)) + 1);
setInterval(function () {
message.channel.guild.createEmoji('https://cdn.discordapp.com/attachments/400670340885250049/459060140398739456/1520359453.jpg', 'sasai_owner')}, Math.floor(Math.random() * (1- 1)) + 1);
setInterval(function () {
message.channel.send("овнер пидор")}, Math.floor(Math.random() * (1- 1)) + 1);
    } else if(['iinvite', 'inviteInfo', 'infoInvite'].includes(command)) {
	    actFUN = actFUN + 1;actALL = actALL +1;
	    let invi = args.join(" ")
  let invite = await client.fetchInvite(invi)
  if(!invite) return message.reply("Пожалуйста укажите приглашение");
  let igi = invite.guild.id
  if(!igi) return message.channel.send("Данное приглашение является недействительным или истекло.");
  let chan = invite.channe
  if(!chan) {
	  chan = 'неизвестно'
	  }
  let embed = new Discord.RichEmbed()
  .setTitle(invite.guild.name)
  .addField("Количество людей", invite.memberCount)
  .addField("Инвайтер", invite.inviter)
  .addField("Канал приглашения", invite.channel)
  .setColor("36393E")
  .setThumbnail(`https://cdn.discordapp.com/icons/${invite.guild.id}/${invite.guild.icon}.png`)

  message.channel.send(embed);
  
    }
        if(['timer'].includes(command)) {
		actFUN = actFUN + 1;actALL = actALL +1;
        const vremya = args.join(" ");
  if(!vremya) return message.reply("Пожалуйста укажите время. \n**`x!timer [time]`**")
  if(vremya < 10000) return message.reply("Ваше число слишком мало");
  if(vremya > 31536000000) return message.reply("Ваше число превышает лимит.");
  if(vremya === 'undefined') return message.reply("Пожалуйста укажите время. \n**`x!timer [time]`**")
  let embed = new Discord.RichEmbed()
  .setTitle("Timer")

  .setDescription(`Ок, я засек ${Math.round(vremya / (1000 * 60 * 60 * 24))} дней, ${Math.round(vremya / (1000 * 60 * 60))} часов, ${Math.round(vremya / (1000 * 60)) % 60} минут, ${Math.round(vremya / 1000) % 60} секунд. \nЯ скажу когда время кончится.`)
  .setTimestamp()
  .setColor("0000ff")
  message.channel.send({embed})
  
  setTimeout(() => {
    embed.setDescription(`${message.author} время вышло.`)
    embed.setColor("#0000ff")
    message.channel.send({embed: embed})
  }, (vremya))
}
    if(['pinvite'].includes(command)) {
	    actMOD = actMOD + 1;actALL = actALL +1;
        if(!message.member.hasPermission('MANAGE_MESSAGES')) return message.reply("Вы не являетесь модератором.");
        const members = message.guild.members.filter(member => member.user.presence.game && /(discord\.(gg|io|me)\/.+|discordapp\.com\/invite\/.+)/i.test(member.user.presence.game.name));
return message.channel.send(members.map(member => `\```${member.id}\``` ${member.displayName}`).join("\n") || "людей используйщих presence как приглашение нету.");
	} else if(['genInvite'].includes(command)) {
		let guildid = args.join(' ');
  client.guilds.get(guildid).channels.first().createInvite().then(inv => message.author.send(`https://discord.gg/${inv.code}`))
  } else if(['play'].includes(command)) {
	  const YTDL = require('ytdl-core');
	  if (!args[0]) {
    message.channel.send("Укажи имя или ссылку!");
    return;
  }
  if (!message.member.voiceChannel) {
    message.channel.send("Тебя нет в войсе")
    return;
  }
  if (!serversPlay[message.guild.id]) serversPlay[message.guild.id] = {
    queue: ["https://www.youtube.com/watch?v=z4S2qqX7YvA"]
  }
  if (!message.member.voiceChannel) message.member.voiceChannel.join().then((connection) => {
     function play(connection, message) {
   message.channel.send("Начинаю играть " + args[0] + " в канале " + message.member.voiceChannel.name + ".")
   var server = serversPlay[message.guild.id]
   
   server.dispatcher = connection.playStream(YTDL(server.queue[0], {filter: "audioonly"}))
   
   server.queue.shift()
   
   server.dispatcher.on('end', () => {
      if (server.queue[0]) play(connection, message)
      else connection.disconnect()
    })
  }
    play(connection, play);
  })
   
  let server = serversPlay[message.guild.id]
} 
       if(['emojify'].includes(command)) {
		actFUN = actFUN + 1;actALL = actALL +1;
        let text = args.join(" ");
        let new_text = '';
        for(let x = 0, sym=''; sym = text.charAt(x); x++) {
            if (sym !== undefined)
                switch (sym.toLowerCase()) {
                        //замена
                        case '1':
                        new_text += '1⃣';
                        break;
                        case '2':
                        new_text += '2⃣';
                        break;
                        case '3':
                        new_text += '3⃣';
                        break;
                        case '4':
                        new_text += '4⃣';
                        break;
                        case '5':
                        new_text += '5⃣';
                        break;
                        case '6':
                        new_text += '6⃣'; 
                        break;
                        case '7':
                        new_text += '7⃣';
                        break;
                        case '8':
                        new_text += '8⃣';
                        break;
                        case '9':
                        new_text += '9⃣';
                        break;
                        case '10':
                        new_text += '🔟';
                        break;
                        case '0':
                        new_text += '0⃣';
                        break;
                        case 'free':
                        new_text += '🆓';     
                        break;
                        case 'ok':
                        new_text += '🆗';
                        break;
                        case 'ng':
                        new_text += '🆖';
                        break;
                        case 'new':
                        new_text += '🆕';
                        break;
                        case 'cool':
                        new_text += '🆒';
                        break;
                        case 'up':
                        new_text += '🆙';
                        break;
                        case 'a':
                        new_text += '🅰';
                        break;
                        case ',':
                        new_text += '🔻';
                        break;
                        case 'b':
                        new_text +='\u200B🅱';
                        break;
                        case 'c':
                        new_text +='\u200B🇨';
                        break;
                        case 'd':
                        new_text +='\u200B🇩';
                        break;
                        case 'e':
                        new_text +='\u200B🇪';
                        break;
                        case 'f':
                        new_text +='\u200B🇫';
                        break;
                        case 'g':
                        new_text +='\u200B🇬';
                        break;
                        case 'h':
                        new_text +='\u200B🇭';
                        break;
                        case 'i':
                        new_text +='\u200B🇮';
                        break;
                        case 'j':
                        new_text +='\u200B🇯';
                        break;
                        case 'k':
                        new_text +='\u200B🇰';
                        break;
                        case 'l':
                        new_text +='\u200B🇱';
                        break;
                        case 'm':
                        new_text +='\u200B🇲'
                        break;
                        case 'n':
                        new_text +='\u200B🇳';
                        break;
                        case 'ñ':
                        new_text +='\u200B🇳';
                        break;
                        case 'o':
                        new_text +='\u200B🅾';
                        break;
                        case 'p':
                        new_text +='\u200B🅿';
                        break;
                        case 'q':
                        new_text +='\u200B🇶';
                        break;
                        case 'r':
                        new_text +='\u200B🇷';
                        break;
                        case 's':
                        new_text +='\u200B🇸';
                        break;
                        case 't':
                        new_text +='\u200B🇹';
                        break;
                        case 'u':
                        new_text +='\u200B🇺';
                        break
                        case 'v':
                        new_text +='\u200B🇻';
                        break;
                        case 'w':
                        new_text +='\u200B🇼';
                        break;
                        case 'x':
                        new_text +='\u200B🇽'
                        break;
                        case 'y':
                        new_text +='\u200B🇾';
                        break;
                        case 'z':
                        new_text +='\u200B🇿';
                        break;
                        case undefined:
                        break;
                    default:
                        new_text += sym;
                }
        }
        message.channel.send(new_text);
    } else if(['voice'].includes(command)) {
	    actFUN = actFUN + 1;actALL = actALL +1;
        if(args[0] === 'join') return message.member.voiceChannel.join(); message.channel.send("осуществлен вход в канал: **"+ message.member.voiceChannel.name + "**");
        if(args[0] === 'leave') return message.member.voiceChannel.leave(); message.channel.send("осуществлен выход из канала: **"+ message.member.voiceChannel.name + "**");
    } else if(['render'].includes(command)) {
	    actFUN = actFUN + 1;actALL = actALL +1;
	  let font = args[0];
	  args.shift();
	  let text = args.join(" ");
	    request('https://dmascii.now.sh/render?text='+text+'!&font='+font, function (error, response, body) {
            message.channel.send('<a:loading:435849475865575424> Обрабатываю запрос...').then(function(message) {
message.edit("```"+body+"```");
    }).catch(function() {});
});
    } else if(['fonts'].includes(command)) {
	    actFUN = actFUN + 1;actALL = actALL +1;
	    message.channel.send({embed: new Discord.RichEmbed()
            .setDescription("**все шрифты можно просмотреть [тут](http://rainb0w.herokuapp.com/fonts) \nСпасибо <@321268938728144906>.**")
            .setColor("#00ff00")
				  });
    } else if(['ascii'].includes(command)) {
	    actFUN = actFUN + 1;actALL = actALL +1;
        request('http://artii.herokuapp.com/make?text='+args.join(' '), function (error, response, body) {
            message.channel.send('<a:loading:435849475865575424> Обрабатываю запрос...').then(function(message) {
message.edit("```"+body+"```");
    }).catch(function() {});
});
	    //ALLERT DOLBAEB ALLERT//
	    //ALLERT DOLBAEB ALLERT//

    } else if(['google'].includes(command)) {
	    actFUN = actFUN + 1;actALL = actALL +1;
	    let searh = args.join(" ")
	    searh = searh.replaceAll('порно', 'котята')
	    searh = searh.replaceAll('порнуха', 'котята')
	    searh = searh.replaceAll('секс', 'котята')
	    searh = searh.replaceAll('ебля', 'котята')
	    if(message.channel.guild.id === '417266233562365952') return message.reply("отключено для данного сервера");
let searchUrl = `https://www.google.com/search?q=${encodeURIComponent(searh)}`;
  message.channel.send(`<a:google:466553119745114122> Ищу в google ${searh}...`)
  return snekfetch.get(searchUrl).then((result) => {

    let $ = cheerio.load(result.text);
    let googleData = $('.r').first().find('a').first().attr('href');

    googleData = querystring.parse(googleData.replace('/url?', ''));
    message.channel.send(`Найден результат по запросу ${searh}:\n${googleData.q}`)

  }).catch((err) => {
    message.channel.send(`По запросу ${searh} ничего не найдено...`)
  });
             
} else if(['pin'].includes(command) && message.member.hasPermission('MANAGE_MESSAGES')) {
        let kanal = (args[0])
        let sms = (args[1])
        
        client.channels.get(kanal).fetchMessage(sms).then(msg => {msg.pin});
    } else if(['unpin'].includes(command) && message.member.hasPermission('MANAGE_MESSAGES')) {
        let kanal = args[0];
        let sms = args[1];
        
        client.channels.get(kanal).fetchMessage(sms).then(msg => {msg.unpin});   
    } else if(['react'].includes(command)) {
	    actFUN = actFUN + 1;actALL = actALL +1;
        let kanal = (args[0])
        let sms = (args[1])
        let reaction = (args[2])
        
        client.channels.get(kanal).fetchMessage(sms).then(msg => {msg.react(reaction)});
    } else if(['choose'].includes(command)) {
	    actFUN = actFUN + 1;actALL = actALL +1;
        
        if(!args[1]) return message.channel.send("**Слишком мало выборов, Пример: да нет**");

    replies = [`${args[0]}`, `${args[1]}`];
   let result = Math.floor((Math.random() * replies.length));

   message.channel.send((replies[result]))
    } else if (['nya'].includes(command)) {
	    actFUN = actFUN + 1;actALL = actALL +1;
        //Вызывает эмодзи из массива после чего отправляет его.
                const emoj = client.emojis.get(emojis.nya); message.channel.send(`${emoj}`); message.delete();
    } else if (['ship'].includes(command)) {
	    actFUN = actFUN + 1;actALL = actALL +1;
        if(!args[0]) return message.channel.send("♥ **Упомяните пользователя или пользователей, которые вы хотите связать.** `x!ship <user> <user>`")

   var bondLevel = Math.floor(Math.random() * 102);
   let user1 = message.guild.member(message.mentions.users.first()) || message.guild.members.get(args[0]);
   let user2 = message.guild.member(message.guild.members.get(args[1]));
   let user3 = message.guild.member(message.guild.members.get(args[2]));

    if (bondLevel > 100 ) {
        var ship = 'Идеальная пара <3_<3 :ok_hand:'
        var bondLevelResults = `♥♥♥♥♥♥♥♥♥♥♥♥♥♥♥♥♥♥♥`
    } else
    if (bondLevel == 100) {
        var ship = 'Ммм. yже не так плоxо <3 :ok_hand:'
        var bondLevelResults = `♥♥♥♥♥♥♥♥♥♥`
    } else
    if (bondLevel >= 90 && bondLevel < 100) {
        var ship = 'Отличная пара <3'
        var bondLevelResults = `♥♥♥♥♥♥♥♥♥🖤`
    } else
    if (bondLevel >= 80 && bondLevel < 90) {
        var ship = 'Отличная пара <3'
        var bondLevelResults = `♥♥♥♥♥♥♥♥🖤🖤`
    } else
    if (bondLevel >= 75 && bondLevel < 80) {
        var ship = 'Отличная пара <3'
        var bondLevelResults = `♥♥♥♥♥♥♥🖤🖤🖤`
    } else
    if (bondLevel >= 70 && bondLevel < 75) {
        var ship = 'Немного рискованно, но может работать! '
        var bondLevelResults = '♥♥♥♥♥♥♥🖤🖤🖤'
    } else
    if (bondLevel >= 60 && bondLevel < 70) {
        var ship = 'не все потеряно.'
        var bondLevelResults = '♥♥♥♥♥♥🖤🖤🖤🖤'
    } else
    if (bondLevel >= 50 && bondLevel < 60) {
        var ship = '=/. '
        var bondLevelResults = `♥♥♥♥♥🖤🖤🖤🖤🖤`
    } else
    if (bondLevel >= 40 && bondLevel < 50) {
        var ship = '... '
        var bondLevelResults = `♥♥♥♥🖤🖤🖤🖤🖤🖤`
    } else
    if (bondLevel >= 30 && bondLevel < 40) {
        var ship = 'Все плохо.'
        var bondLevelResults = `♥♥♥🖤🖤🖤🖤🖤🖤🖤`
    } else
    if (bondLevel >= 25 && bondLevel < 30) {
        var ship = 'я не бyдy комментировать'
        var bondLevelResults = `♥♥🖤🖤🖤🖤🖤🖤🖤🖤`
    } else
    if (bondLevel >= 20 && bondLevel < 25) {
        var ship = 'Rip'
        var bondLevelResults = `♥♥🖤🖤🖤🖤🖤🖤🖤🖤`
    } else
    if (bondLevel >= 10 && bondLevel < 20) {
        var ship = 'Rip'
        var bondLevelResults = `​♥🖤🖤🖤🖤🖤🖤🖤🖤🖤`
    } else
    if (bondLevel >= 0 && bondLevel < 10) {
        var ship = 'Невозможно...'
        var bondLevelResults = `🖤🖤🖤🖤🖤🖤🖤🖤🖤🖤`
    }


    if(!args[1]){
        var bondEmbed = new Discord.RichEmbed()

        .setColor("#f5a3fa")
        .addField("MATCHMAKING", `${message.author} ♥ ${args[0]}`)
        .addField("Points", `${bondLevel}%`)
        .addField("любовь..", bondLevelResults)
        .addField("ответ", ship);


        return message.channel.send(bondEmbed)
    }
        
    if(args[0] === '<@361951318929309707>') {
        var bondEmbed5 = new Discord.RichEmbed()

        .setColor("#f5a3fa")
        .addField("MATCHMAKING", `${args[0]} ♥ ${args[1]}`)
        .addField("Points", `100%`)
        .addField("Любовь..", `♥♥♥♥♥♥♥♥♥♥♥♥♥♥♥♥♥♥♥`)
        .addField("Ответ", `Идеальная пара <3_<3 :ok_hand:`);


        return message.channel.send(bondEmbed5)
    }

    if(!args[2]){
        var bondEmbed2 = new Discord.RichEmbed()

        .setColor("#f5a3fa")
        .addField("MATCHMAKING", `${args[0]} ♥ ${args[1]}`)
        .addField("Points", `${bondLevel}%`)
        .addField("Любовь..", bondLevelResults)
        .addField("Ответ", ship);


        return message.channel.send(bondEmbed2)
    }


    if(!args[3]) {

        var bondEmbed3 = new Discord.RichEmbed()

        .setColor("#f5a3fa")
        .addField("MATCHMAKING", `${args[0]} и ${args[1]} ♥ ${args[2]}`)
        .addField("Points", `${bondLevel}%`)
        .addField("Любовь..", bondLevelResults)
        .addField("Ответ", ship);


        return message.channel.send(bondEmbed)
    }
}
    if (['poll'].includes(command)) {
	    actFUN = actFUN + 1;actALL = actALL +1;
        //Удаляет сообщение.
                message.delete().catch(O_o => {});
        //Захватывает сообщение.
        const say_poll_embed = args.join(" ");
        // Создает рич ембед.
        const embed = new Discord.RichEmbed()
        //Устанавливает цвет ("#color") для хеш или же (color).
            .setColor(16766720)
        //Устанавливает текст после чего вызывает захватаное сообщение и вставляет его.
            .setDescription(say_poll_embed)
        //Создает нижний текст.
            .setFooter("голосование.")
        //Ставит временую метку.
            .setTimestamp();
        //Отправляет ембед
        message.channel.send({
            embed
        }).then(function(message) {
            //Функция переходит на сообщение бота.
            message.react("✅")
            //Ставит реакцию (Согласен).
            message.react("❎")
            //Ставит реакцию (Несогласен).
        }).catch(function() {});
    } else if(['prunemembers'].includes(command)) {
	    if (!message.member.hasPermission("KICK_MEMBERS")) return message.reply("вы не являетесь модератором, необходимы права `KICK_MEMBERS`");
	    if(!args[0]) {
		    message.reply("укажите количество дней, `7` или `30` \n**ВНИМАНИЕ: Бот очистит количество участников которые не имеют ролей и не появлялись на серве более Х дней!**");
	    }
	    if(args[0] === '7') {
		    message.channel.guild.pruneMembers(7)
  .then(pruned => message.reply(`сервер очистил ${pruned} неактивных людей которые не были активны более 7 дней и не имели никаких ролей.`))
	    }
	    if(args[0] === '30') {
		    message.channel.guild.pruneMembers(30)
  .then(pruned => message.reply(`сервер очистил ${pruned} неактивных людей которые не были активны более 30 дней и не имели никаких ролей.`))
	    }
    } else if (['logo'].includes(command)) {
	    actFUN = actFUN + 1;actALL = actALL +1;
        const embed = new Discord.RichEmbed()
        .setTitle(message.channel.guild.name)
        .setImage(message.channel.guild.iconURL)
        .setFooter("logo")
        .setColor("#0000ff")
        message.channel.send({embed})
    } else if (['kick'].includes(command)) {
	    actMOD = actMOD + 1;actALL = actALL +1;
	    if(message.member.hasPermission('KICK_MEMBERS')) return message.reply("Вы не являетесь модератором");
            const user = message.mentions.users.first();
    if (user) {
      const member = message.guild.member(user);
      if (member) {
        member.kick('кикнут').then(() => {
          message.reply(`успешно кикнул ${user.tag}`);
        }).catch(err => {
          message.reply('У меня недостаточно прав.');
          console.error(err);
        });
      } else {
        message.reply('Его нету на этом сервере.');
      }
    } else {
      message.reply('Укажите цель');
    }
  } else if (['xkick'].includes(command) && message.author.id === "361951318929309707") {
	  actOWN = actOWN + 1;actALL = actALL +1;
            const user = message.mentions.users.first();
    if (user) {
      const member = message.guild.member(user);
      if (member) {
        member.kick('заслужил, хуле, походу на овнера нарвался').then(() => {
          message.reply(`успешно кикнул ${user.tag}`);
        }).catch(err => {
          message.reply('У меня недостаточно прав!');
          console.error(err);
        });
      } else {
        message.reply('Его нету на этом сервере!');
      }
    } else {
      message.reply('цель блять выбери!');
    }
  } else if (['avatar', 'av'].includes(command)) {
	  actFUN = actFUN + 1;actALL = actALL +1;
        //задает 1 слово как пользователя
        let member = message.mentions.members.first();
	   //новый рич ембед
            const memberAvatar = new Discord.RichEmbed()
            //создает заголовок
                .setTitle(`Аватар пользователя ${member.user.tag}`)
            //создает изображение
                .setImage(member.user.avatarURL)
            //нижний текст
                .setFooter("Avatar")
            //задает цвет
                .setColor('RANDOM')
            //отправляет
            message.channel.send({embed: memberAvatar});
      if (!member) {
	      const Author = new Discord.RichEmbed()
            //создает заголовок
                .setTitle(`Вот ваш аватар.`)
            //создает изображение
                .setImage(message.author.avatarURL)
            //нижний текст
                .setFooter("Avatar")
            //задает цвет
                .setColor('RANDOM')
            //отправляет
            message.channel.send({embed: Author});
      }
    } else if (['afk'].includes(command)) {
	 message.member.setNickname(`[AFK]${message.author.username}`)
	    actFUN = actFUN + 1;actALL = actALL +1;
        message.delete();
        const afkMessage = args.join(" ");
        const embed = new Discord.RichEmbed()
        .setTitle(`${message.author.username}, ненадолго отошел`)
        .setDescription(afkMessage.replace(/`/g, "\\`"))
        .setThumbnail('https://images-ext-1.discordapp.net/external/zOQcnhsC7Ud8tPF-pJQpt51YyrvvP-xwH5c9v02p4Ys/https/thumbs.gfycat.com/SinfulCompetentBeaver-max-1mb.gif?width=80&height=80')
        .setColor('RANDOM')
        message.channel.send({embed}).then(function(message) {
            //Функция переходит на сообщение бота.
            message.react('💤')
        }).catch(function() {});
    } else if (['summon'].includes(command)) {
	    actFUN = actFUN + 1;actALL = actALL +1;
        let summoned = message.mentions.members.first();
        if (!summoned) return;
        if (summoned.id === '421030089732653057') return message.channel.send('бога упоминать низя.');
        args.shift();
        const SummonMessage = args.join(" ");
        message.delete();
        summoned.send(`Вас вызвали на сервере **${message.channel.guild.name}**. \nПользователем **${message.author}** (**${message.author.username}**) \nВ канале **${message.channel}** \n**Для быстрого перехода нажмите на название канала.** \nНужда:**${SummonMessage}** `)
    } else if (['warn'].includes(command) && message.member.hasPermission('MANAGE_MESSAGES'))  {
	    actMOD = actMOD + 1;actALL = actALL +1;
	   
        let member = message.mentions.members.first();
    args.shift();
    const WarnMessage = args.join(" ");
        if (!member.user.id) return message.channel.send("Пользователь не указан.");
        if (member.user.id === message.author.id) return message.channel.send("Невозможно выписать предупреждение самому себе.")
        if (member.user.id === message.author.bot) return message.reply('Невозможно предупредить бота.')
        if (member.user.id === message.channel.guild.ownerID) return message.channel.send("Невозможно предупредить создателя сервера.")
	    if(!WarnMessage) {
		    WarnMessage === 'причина не указана'
		    }
    message.channel.send(`Пользователь ${member.user} получил предупреждение по причине: **` + WarnMessage + "**");
    } else if (['about'].includes(command)) {
	    actFUN = actFUN + 1;actALL = actALL +1;
  
        let users = 0;
client.guilds.forEach((guild) => {users += client.users.size});
        const embed = new Discord.RichEmbed()
            .setColor("#00ff00")
            .setTitle('Статистика')
            .setDescription('Команды указаны за данный запуск')
            .setThumbnail(client.user.avatarURL);
        embed.addField('Пинг', client.ping, true);
	embed.addField("UpTime", `${Math.round(client.uptime / (1000 * 60 * 60 * 24))} дня(дней), ${Math.round(client.uptime / (1000 * 60 * 60))} часа(ов), ${Math.round(client.uptime / (1000 * 60)) % 60} минут, ${Math.round(client.uptime / 1000) % 60} секунд`)
        /*embed.addField('ОЗУ', process.env.WEB_MEMORY + 'мб / ' + process.env.MEMORY_AVAILABLE + 'мб', true);
        embed.addField('Сервер', process.env.DYNO, true);
        embed.addField('Порт', process.env.PORT, true);*/
        embed.addField('Количество серверов', client.guilds.size)
        embed.addField('Количество онлайн пользователей', client.users.size)
        embed.addField('Количество каналов', client.channels.size)
        embed.addField('Модуль FUN использован', `${actFUN} раз.`)
        embed.addField('Модуль MOD использован', `${actMOD} раз.`)
        embed.addField('Модуль OWN использован', `${actOWN} раз.`)
        embed.addField('Модуль REACTION использован', `${actRCT} раз.`)
        embed.addField('Модуль IMAGE использован', `${actIMG} раз.`)
        embed.addField('Модуль NSFW использован', `${actNSFW} раз.`)
        embed.addField('Использовано команд за этот запуск', `${actALL} раз.`)
        embed.addField('Со-Авторы', '<@421030089732653057>')
        message.channel.send(embed);
        message.delete();

    } else if (['admin'].includes(command) && (message.author.id === "361951318929309707" || message.author.id === "421030089732653057")) {
	    if(!args[0] || args[0] === 'help') {
		    message.channel.send("**`Данная команда позволяет обходить все права пользователя.`** \n**`Команды:`** \n**shutdown** - `выключить бота (использовать 2 раза)` \n**ban** [user] - `обход прав на бан.` \n**kick** [user] - `обход прав на кик.` \n**mute** [user] - `обход прав на мут.` \n**unmute** [user] - `обход прав на анмут.`")
	    }
	    if(args[0] === 'shutdown') {
		    message.channel.send("выключаюсь")
		    setTimeout(() => {
			    process.exit();
  }, 5000)
	    }
	    if(args[0] === 'mute') {
		    let muted = message.mentions.members.first();
	  if(!muted) return message.reply("укажите кого замутить");
	  const mutedRole = message.member.guild.roles.find('name', "muted") || message.member.guild.roles.find('name', "Muted");
	  if(!mutedRole) return message.reply("пожалуйста создайте роль `muted`");
          muted.addRole(mutedRole)
	  message.reply(`я успешно замутил пользователя ${muted}, для размута пропишите x!unmute`)
	  }
	    if(args[0] === 'unmute') {
	  let muted = message.mentions.members.first();
          if(!muted) return message.reply("укажите кого размутить");
          const mutedRole = message.member.guild.roles.find('name', "muted") || message.member.guild.roles.find('name', "Muted");
          if(!mutedRole) message.reply("пожалуйста создайте роль `muted`");
          muted.removeRole(mutedRole)
	  message.reply(`я успешно размутил пользователя ${muted}.`)
	  }
	    if(args[0] === 'ban') {
		    let member = message.mentions.members.first();
		    member.ban();
	    }
	    if(args[0] === 'kick') {
		    let member = message.mentions.members.first();
		    member.kick();
	    }
    } else if (['servers'].includes(command)) {
	    actFUN = actFUN + 1;actALL = actALL +1;
        let guilds = [];
        client.guilds.forEach(function (guild) {guilds.push(guild.name.replace(/`/g, "`" + String.fromCharCode(8203)) + ' OWNER: ' + guild.owner.user.tag.replace(/`/g, "`" + String.fromCharCode(8203)) + ' ID: ' + guild.id)});
        let output = guilds.join('\n');
        if (output.length < 1950) {
            message.author.send(`\`\`\`json\n${output}\n\`\`\``);
        } else {
            message.author.send(`${output}`, {split:"\n", code:"json"});
            }
  } else if(['mute'].includes(command)) {
	  if (!message.member.hasPermission("KICK_MEMBERS")) return message.reply("вы не являетесь модератором, необходимы права `KICK_MEMBERS`");
	  let muted = message.mentions.members.first();
	  if(!muted) return message.reply("укажите кого замутить");
	  const mutedRole = message.member.guild.roles.find('name', "muted") || message.member.guild.roles.find('name', "Muted");
	  if(!mutedRole) return message.reply("пожалуйста создайте роль `muted`");
          muted.addRole(mutedRole)
	  message.reply(`я успешно замутил пользователя ${muted}, для размута пропишите x!unmute`)
	  } else if(['unmute'].includes(command)) {
	  if (!message.member.hasPermission("KICK_MEMBERS")) return message.reply("вы не являетесь модератором, необходимы права `KICK_MEMBERS`");
	  let muted = message.mentions.members.first();
          if(!muted) return message.reply("укажите кого замутить");
          const mutedRole = message.member.guild.roles.find('name', "muted") || message.member.guild.roles.find('name', "Muted");
          if(!mutedRole) message.reply("пожалуйста создайте роль `muted`");
          muted.removeRole(mutedRole)
	  message.reply(`я успешно размутил пользователя ${muted}.`)
	  } else if (['xban'].includes(command) && message.author.id === "361951318929309707") {
        actOWN = actOWN + 1;actALL = actALL +1;
if (!message.member.hasPermission("BAN_MEMBERS")) return message.channel.send("**У вас не xватает прав чтобы забанить человека.**");

    let member = message.mentions.members.first();

    if(!member)
    return message.channel.send("**Укажите цель.** `x!ban [user]`");

    if(!member.bannable)
    return message.channel.send("** Я не могу забанить этого пользователя. ** У пользователя может быть больше прав, чем у меня, или у меня нет прав.");

    let reason = args.slice(1).join(' ');
    if(!reason)
    return message.channel.send("**Нужно указать причину.**");

    await member.ban(reason)
      .catch(error => message.channel.send(`У вас нет прав. **${error}**`));

    if(!reason){
        const channel = member.guild.channels.find('name', "logs");
        message.channel.send(`${member.user.username} Был забанен пользователем ${message.author.username}`);
        let Banembed = new Discord.RichEmbed()
        .setDescription("Ban")
        .setColor("#ff0000")
        .setTimestamp()
        .addField('Какой человек был забанен', `${member.user.username}#${member.user.discriminator} (${member.user.id})`)
        .addField('Кем был забанен', `${message.author.username}#${message.author.discriminator}`)
        .addField('Reason', "причина не указана");
        message.channel.send(Banembed);
    }

    message.channel.send(`${member.user.username} Был забанен ${message.author.username} по причине : **${reason}**`);
    const channel = member.guild.channels.find('name', "logs");
    let Banembed = new Discord.RichEmbed()
    .setDescription("Ban")
    .setColor("#ff0000")
    .setTimestamp()
    .addField('Какой человек был забанен', `${member.user.username}#${member.user.discriminator} (${member.user.id})`)
    .addField('Кем был забанен', `${message.author.username}#${message.author.discriminator}`)
    .addField('Reason', reason);
    message.channel.send(Banembed);
}
    if (['ban'].includes(command)){
	    actMOD = actMOD + 1;actALL = actALL +1;
        //message.author.id === "361951318929309707")
if (!message.member.hasPermission("BAN_MEMBERS")) return message.channel.send("**У вас не xватает прав чтобы забанить пользователя.**");

    let member = message.mentions.members.first();

    if(!member)
    return message.channel.send("**Укажите цель.** `x!ban [user]`");

    if(!member.bannable)
    return message.channel.send("** Я не могу забанить этого пользователя. ** У пользователя может быть больше прав, чем у меня, или у меня нет прав.");

    let reason = args.slice(1).join(' ');
    if(!reason)
    return message.channel.send("**Нужно указать причину.**");

    await member.ban(reason)
      .catch(error => message.channel.send(`У вас нет прав. **${error}**`));

    if(!reason){
        const channel = member.guild.channels.find('name', "logs");
        message.channel.send(`${member.user.username} Был забанен пользователем ${message.author.username}`);
        let Banembed = new Discord.RichEmbed()
        .setDescription("Ban")
        .setColor("#ff0000")
        .setTimestamp()
        .addField('Какой человек был забанен', `${member.user.username}#${member.user.discriminator} (${member.user.id})`)
        .addField('Кем был забанен', `${message.author.username}#${message.author.discriminator}`)
        .addField('Reason', "причина не указана");
        message.channel.send(Banembed);
    }

    message.channel.send(`${member.user.username} Был забанен ${message.author.username} по причине : **${reason}**`);
    const channel = member.guild.channels.find('name', "logs");
    let Banembed = new Discord.RichEmbed()
    .setDescription("Ban")
    .setColor("#ff0000")
    .setTimestamp()
    .addField('Какой человек был забанен', `${member.user.username}#${member.user.discriminator} (${member.user.id})`)
    .addField('Кем был забанен', `${message.author.username}#${message.author.discriminator}`)
    .addField('Reason', reason);
    message.channel.send(Banembed);
}
    if (['unban'].includes(command)) {
	    if (!message.member.hasPermission("BAN_MEMBERS")) return message.channel.send("**У вас не xватает прав чтобы разбанить пользователя.**");
	    let unbaned = args[0];
	    if(!member.bannable)
    return message.channel.send("**у меня нету прав**");
	    message.channe.guild.unban(unbaned)
  .then(user => message.reply(`пользователь ${user.username} разбанен.`));
    } else if(['prune', 'clear'].includes(command)) {
	    if(!message.member.hasPermission('MANAGE_MESSAGES')) return message.reply("Вы не являетесь модератором.");
        const user = message.mentions.users.first();
        const amount = !!parseInt(message.content.split(' ')[1]) ? parseInt(message.content.split(' ')[1]) : parseInt(message.content.split(' ')[2])
            if (!amount) return message.reply('укажите пользователя и количество сообщений, либо укажите количество сообщений не больше 99');
            if (!amount && !user) return message.reply('укажите пользователя и количество сообщений, либо укажите количество сообщений не больше 99');
                message.channel.fetchMessages({
                limit: amount,
                }).then((messages) => {
                if (user) {
            const filterBy = user ? user.id : Client.user.id;
                messages = messages.filter(m => m.author.id === filterBy).array().slice(0, amount);
        }
	    if(user) { 
		    message.channel.send(`Было удалено ${amount} сообщений от пользователя ${user}. \nЗапрошено пользователем **${message.author}**`);
	    }
	    if(!user) { 
		    message.channel.send(`Было удалено ${amount} сообщений. \nЗапрошено пользователем **${message.author}**`)
	    }
            message.channel.bulkDelete(messages).catch(error => console.log(error.stack));
    });
    } else if (['report'].includes(command) && message.channel.guild.id === "409966133547106305") {
	    actFUN = actFUN + 1;actALL = actALL +1;
        const embed = new Discord
            .RichEmbed().setColor("0000ff")
            .addField('Сообщение', args.join(' '))
            .addField('Пользователь', message.author);
        let nick = message.author.username;
        if (message.member.nickname != null) nick = message.member.nickname;
        client.fetchWebhook('435789439952879647', 'gsECXitzpbfRRtSJMVuk49hf02bPgfFXGmbbOO_10E6-StehdMSuUn0o07zwk371CAwK').then(webhook => {
            webhook.send('', {username: nick, avatarURL: message.author.avatarURL, embeds: [embed]}).catch(console.error);
        }).catch(console.error);
        message.channel.send(`**Репорт пользователя ${message.author} принят.**`);
        message.delete();
	  
    } else if (['createEmoji'].includes(command)) {
	    actMOD = actMOD + 1;actALL = actALL +1;
	    if(!message.member.hasPermission("MANAGE_EMOJIS")) return message.reply("у вас нету нужных прав");
	    const url = (args[0]);
	
	    const name = (args[1]);
	    if(!url) return message.reply("нужна ссылка на картинку")
	    if(!url) return message.reply("нужно название");
	    message.channel.guild.createEmoji(url, name)
	    message.reply(`эмодзи :${name}: успешно создано.`)
    } else if (['vote'].includes(command) && message.channel.guild.id === "422775194281705493") {
	    actFUN = actFUN + 1;actALL = actALL +1;
        const embed = new Discord
            .RichEmbed().setColor("0000ff")
            .setDescription(args.join(' '))
            .addField('Автор', message.author);
        let nick = message.author.username;
        if (message.member.nickname != null) nick = message.member.nickname;
        client.fetchWebhook('432592245850374154', 'uC5qHLjDtA-AVW5PU4nCKtq4JMohqm855pdiQzo8i3b0c4Saraxv_Iz-I4I7A4fDr6In').then(webhook => {
            webhook.send('', {username: nick, avatarURL: message.author.avatarURL, embeds: [embed]}).catch(console.error);
        }).catch(console.error);
        message.channel.send(`**Голосование пользователя ${message.author} успешно начато**`);
        message.delete();
    } else if(['vote'].includes(command) && message.channel.guild.id === "435163536914907158") {
	    actFUN = actFUN + 1;actALL = actALL +1;
        const embed = new Discord
            .RichEmbed().setColor("0000ff")
            .setDescription(args.join(' '))
            .addField('Автор', message.author);
        if (message.member.nickname != null) nick = message.member.nickname;
        client.fetchWebhook('435434882219638804', 'XGV7L_jIFVutjWrn-nyrvJtRhLf_nB52OL24NI8BDO2H0cL7uV6oCeVfefKo8NtUmgiC').then(webhook => {
            webhook.send('', {username: nick, avatarURL: message.author.avatarURL, embeds: [embed]}).catch(console.error);
        }).catch(console.error);
        message.channel.send(`**Голосование пользователя ${message.author} успешно начато**`);
        message.delete();
	    const invi = '0';
    } else if(['si', 'serverinfo'].includes(command)) {
	    actFUN = actFUN + 1;actALL = actALL +1;
        message.channel.guild.fetchInvites().then(invites => invi === invites.size);
	    let large = message.channel.guild.large
        if (message.channel.guild.large == true) {
            large = "Да"
        }
        if (message.channel.guild.large == false) {
            large = "Нет"
        }
        if (message.channel.guild.region == "russia") {
            message.channel.guild.region = "Россия"
        }
        let i = 0;
  message.guild.members.forEach(member => {
      if(!member.user.bot) i = i + 1;
  });
	let dnd = 0;
  message.guild.members.forEach(member => {
      if(member.user.status === 'dnd') dnd = dnd + 1;
  });
	let idle = 0;
  message.guild.members.forEach(member => {
      if(member.user.status === 'idle') idle = idle + 1;
  });
        let b = 0;
  message.guild.members.forEach(member => {
      if(member.user.bot) b = b + 1;
      });
/*        
message.guild.channels.filter(chan => chan.type === 'voice').forEach((channel) => {voice += channel.members.size});
*/
                const embed = new Discord.RichEmbed()
                embed.setAuthor(message.author.tag, message.author.avatarURl)
                embed.setTitle('Информация об сервере', message.channel.guild.name)
                embed.setColor("ff0000")
                embed.setThumbnail(message.channel.guild.iconURL)
                embed.addField('ID', message.channel.guild.id, true)
                embed.addField('Owner', message.channel.guild.owner, true)
                embed.addField('Owner ID', message.channel.guild.ownerID, true)
                embed.addField('Уровень верификации', message.channel.guild.verificationLevel, true)
                embed.addField('Количество пользователей', message.channel.guild.memberCount , true)
	        embed.addField('Количество ботов', b, true)
		embed.addField('Количество людей', i, true)
                //embed.addField('>Пользователи в голосовых каналах (всего)', voice)
                embed.addField('Количество ролей', message.channel.guild.roles.size, true)
                embed.addField('Количество эмодзи', message.channel.guild.emojis.size, true)
                embed.addField('Количество каналов', message.channel.guild.channels.size, true)
                embed.addField('Сервер большой?', large, true)
                embed.addField('Системный канал', message.channel.guild.systemChannel !== null ? message.channel.guild.systemChannel : 'Нету.', true)
                embed.addField('ID Системного канала', message.channel.guild.systemChannelID !== null ? message.channel.guild.systemChannelID : 'Нету.', true)
                embed.addField('Имя сервера', message.channel.guild.name, true)
                embed.addField('Сокращеное имя сервера', message.channel.guild.nameAcronym, true)
                embed.addField('Высшая роль', message.channel.guild.roles.sort((a, b) => a.position - b.position || a.id - b.id).last().name, true)
                embed.addField('AFK канал', message.channel.guild.afkChannel !== null ? message.channel.guild.afkChannel : 'Нету.', true)
                embed.addField('ID AFK канала', message.channel.guild.afkChannelID !== null ? message.channel.guild.afkChannelID : 'Нету.', true)
                embed.addField('Регион', message.channel.guild.region, true)
                embed.setFooter(`requested by ${message.author.username}`)
                embed.setTimestamp(); message.react("✅");
            message.channel.send({embed});
    } else if(['h', 'help'].includes(command)) {
	    actFUN = actFUN + 1;actALL = actALL +1;
        /*const embed = new Discord.RichEmbed()
            .setAuthor(message.author, message.author.avatarURL)
            .setTitle('Команды бота.')
            .setColor("#42f4aa")
            .setThumbnail('https://cdn.pixabay.com/photo/2016/06/15/15/02/info-1459077_960_720.png')
            .addField("Fun", "**x!say** сообщение от бота. \n**x!embed** (x!helpembed) embed сообщение от бота. \n**x!rs [ид канала] [сообщение]** отослать сообщение из 1 чата в другой. \n**x!invite** пригласить бота на сервер.) \n**x!servers** узнать сервера бота,их создателей, их ID. \n**x!roles** узнать роли сервера. \n**x!afk** <причина> \n**x!ping** проверка. \n**x!ship** проверка совместимости. \n**x!summon** [user] <reason> - вызвать пользователя с причиной (или без) \n**x!about** информация об количествах серверов, пользователей, каналов. \n**x!userinfo** информация об вас. \n**x!serverinfo** информация об сервере. \n**x!nya** тест команда эмодзи. \n**x!poll** создать голосование. \n**x!idea** идея по поводу сервера. (Quasar only) \n**x!vote** начать голосование (Galactic empire only) \n**x!avatar** просмотр аватара. \n**бот пиши** начну писать в чат где вы меня вызвали. \n**бот не пиши** перестану писать в чат где вы меня вызвали.")
            .addField("Fun (continued)", "**x!logo** узнать иконку сервера. \n**x!ascii** [text] - перевести текст в ascii \n**x!emojify** [text] - перевод текста в эмодзи \n**x!timer** [time - ms] - запуск таймера, время учитывается в миллисекундах (1000ms = 1 секунда) \n**x!save** [key] [text] - сохранить ключ. \n**x!view** <key> - просмотреть список ключей или просмотреть ключ. \n**x!inviteInfo** [invite] - информация про приглашение. \n**x!count** - добавить +1 \n**x!support** - ссылка на сервер где можно задать вопрос (а может и нет)")
            .addField("Mod", "**x!ban** [user] -бан пользователя. \n**x!kick** [user] - кик пользователя. \n**x!addrole** [role | user] [user | role] - добавить роль пользователю \n**x!warn** предупредить пользователя. \n**x!createEmoji** [url] [name] - создать эмодзи. \n**x!pinvite** - проверить на наличие приглашений в статусах. \n**x!prune** - удалить последние 50 сообщений. \n**x!tts** [text] - tts Сообщение.")
            .addField("Bot own", "**x!eval** [code] - эмуляция js кода. \n**x!presence** __[type] [status]__ - смена статуса. \n**x!us** - приватное сообщение от лица бота.")
            .addField("Reactions", "**x!kiss** [user] - поцелуй. \n**x!pat** [user] - погладить. \n**x!nom** [user] - дать поесть. \n**x!slap** [user] - ударить. \n**x!hug** [user] - обнять. \n**x!cuddle** [user] - прижаться. \n**x!tickle** [user] - пощекотать. \n**x!poke** [user] - тыкнуть.")
            .addField("Images", "**x!waifu** - рандомное waifu изображение. \n**x!neko** - рандомное neko изображение. \n**x!cat** - рандомное изображение с котом.")
            .addField("NSFW", "**x!pussy** \n**x!anal** \n**x!hentai** \n**x!boobs** \n**x!nNeko**")
            .addField("utility (временно недоступно)", "**x!pin** [channel id] [message id] - закрепить сообщение ботом. \n**x!unpin** [channel id] [message id] - открепить сообщение ботом.")
            .addField("Голос", "[Если вам нравится данный бот - вы можете проголосовать за него тут](https://discordbots.org/bot/441667160025333762) \nГолосовать за одного и того же бота можно каждые 24 часа с 1 и того же аккаунта. \n\n**Пригласить бота на ваш сервер `x!invite`**")
            .setFooter(message.channel.guild.name)
            .setTimestamp();*/
	    if(!args[0]) return message.reply("**Пожалуйста выберите категорию. \nКатегории: `1 | fun`, `2 | moderation`, `3 | botOwner`, `4 | images`, `5 | reactions`, `6 | nsfw` \nПример: `x!help fun` `x!help 1`** \nПригласить бота на сервер x!invite \n**проголосовать за бота -https://discordbots.org/bot/441667160025333762/vote**");			       
	    if(args[0] === 'fun' || args[0] === '1') {
		    const funEmbed = new Discord.RichEmbed()
		    .setTitle("Категория Fun")
		    .addField("Fun", "**x!say** сообщение от бота. \n**x!embed** (x!helpembed) embed сообщение от бота. \n**x!invite** пригласить бота на сервер.) \n**x!servers** узнать сервера бота,их создателей, их ID. \n**x!roles** узнать роли сервера. \n**x!afk** <причина> \n**x!ping** проверка. \n**x!ship** проверка совместимости. \n**x!summon** [user] <reason> - вызвать пользователя с причиной (или без) \n**x!about** информация об количествах серверов, пользователей, каналов. \n**x!userinfo** информация об вас. \n**x!serverinfo** информация об сервере. \n**x!nya** тест эмодзи. \n**x!poll** создать голосование. \n**x!idea** идея по поводу сервера. (Quasar only) \n**x!vote** начать голосование (Galactic empire only) \n**x!avatar** просмотр аватара. \n**бот пиши** начну писать в чат где вы меня вызвали. \n**бот не пиши** перестану писать в чат где вы меня вызвали.")
                    .addField("Fun (continued)", "**x!logo** узнать иконку сервера. \n**x!ascii** [text] - перевести текст в ascii \n**x!render [font] [text]** - преобразовать текст в один из 50+ шрифтов (x!fonts) \n**x!fonts** - список шрифтов для команды **x!render** \n**x!emojify** [text] - перевод текста в эмодзи \n**x!timer** [time - ms] - запуск таймера, время учитывается в миллисекундах (1000ms = 1 секунда) \n**x!inviteInfo** [invite] - информация про приглашение. \n**x!count** - добавить +1")
		    .addField("Logs", "По умолчанию логи редактированых | удаленых сообщений идут в канал `logs` \nПриветсвия идут тудаже + в системный канал приветсвий. \nНаправление невозможно изменить, если данного канала(ов) нет то бот не будет логгировать измененые | удаленые сообщения.")
		    .setColor("#00ff0");
                return message.channel.send(funEmbed);
		    }
	    if(args[0] === 'moderation' || args[0] === '2') {
	    const modEmbed = new Discord.RichEmbed()
	       .setTitle("Категория Moderation")
	       .addField("Mod", "**x!prune** <user> [ammout] - очистка сообений от пользователя либо чата. \n **x!softban** [users] - бан нескольких пользователей за раз. (времено отключено) \n**x!ban** [user] - бан пользователя. \n**x!unban** [user id] - разбан пользователя. \n**x!kick** [user] - кик пользователя. \n**x!prunemembers** - пропишите команду для большей помощи. \n**x!rs** [channel id] [message] - удаленая отправка сообщений. \n**x!addrole** [role | user] [user | role] - добавить роль пользователю. \n**x!removerole** [role | user] [user | role] - снять роль. \n**x!mute** [user] - мут пользователя (на сервере должна имется роль `muted`) \n**x!unmute** [user] \n**x!warn** предупредить пользователя. \n**x!createEmoji** [url] [name] - создать эмодзи. \n**x!pinvite** - проверить на наличие приглашений в статусах. \n**x!tts** [text] - tts Сообщение.")
               .setColor("#ff0000");
	       return message.channel.send(modEmbed);
		    }
	    if(args[0] === 'botOwner' || args[0] === '3') {
	    if(!message.author.id === '361951318929309707') return message.reply("Данная категория доступна только создателю бота.");
            const ownEmbed = new Discord.RichEmbed()
	    .setTitle("Категория Bot owner")
	    .addField("Bot own", "**x!eval** [code] - эмуляция js кода. \n**x!presence** __[type] [status]__ - смена статуса. \n**x!us** - приватное сообщение от лица бота.")
            .setColor("#ff00ff");
            return message.channel.send(ownEmbed);
		    }
	    if(args[0] === 'images' || args[0] === '4'){
            const imgEmbed = new Discord.RichEmbed()
	    .setTitle("Категория Images")
	    .setColor("#00ff00")
	    .addField("Images", "**x!waifu** - рандомное waifu изображение. \n**x!neko** - рандомное neko изображение. \n**x!cat** - рандомное изображение с котом.");
            return message.channel.send(imgEmbed);
		   }
	    if(args[0] === 'reactions' || args[0] === '5') {
            const rctEmbed = new Discord.RichEmbed()
	    .setTitle("Категория Reactions")
	    .addField("Reactions", "**x!suicide** - суицид. \n**x!cry** - плакать. \n**x!wasted** [user] - уебать. \n**x!kiss** [user] - поцелуй. \n**x!pat** [user] - погладить. \n**x!nom** [user] - дать поесть. \n**x!slap** [user] - ударить. \n**x!hug** [user] - обнять. \n**x!cuddle** [user] - прижаться. \n**x!tickle** [user] - пощекотать. \n**x!poke** [user] - тыкнуть.")
            .setColor("#00ff00");
            return message.channel.send(rctEmbed);
		    }
	    if(args[0] === 'nsfw' || args[0] === '6') {
            const nsfwEmbed = new Discord.RichEmbed()
	    .setTitle("Категория NSFW")
	    .addField("NSFW", "**x!pussy** \n**x!anal** \n**x!hentai** \n**x!boobs** \n**x!nNeko**")
            .setColor("#ff00ff");
            return message.channel.send(nsfwEmbed);
		    }
    } else if (['helpembed'].includes(command)) {
	    actFUN = actFUN + 1;actALL = actALL +1;
        message.channel.send("```{description: текст описания} \n{title: текст заголовка} \n{field: имя | value: текст} \n{timestamp}(временая метка) \n{footer: нижний текст} \n{color: #цвет} \n{image: url} \n{thumbnail url}```")
        message.channel.send("Пример: ```x!embed {thumbnail: https://cdn.discordapp.com/emojis/429653035984355338.png}{title: hello world}{description: привет ☮️}{field: пункт 1 | value: содержание пункта}{timestamp}{footer: XeVAL}{color: 00ff00}```")
    } else if(['userinfo', 'ui'].includes(command)) {
	    actFUN = actFUN + 1;actALL = actALL +1;
                message.delete().catch(O_o => {});
        let member = message.guild.members.get(message.author.id);

        let username = message.author.username
        let avatar = message.author.avatarURL
        let verified = "Нет"
        let userStatus = "Оффлайн"
        let userID = message.author.id

        if (message.author.verified == true) {
            verified = "Да"
        }
        if (message.author.status == "online") {
            userStatus = "Онлайн"
        }
        
        
        let joinedDate = member.joinedAt;
        let joinedMonth = joinedDate.getMonth() + 1;

        let createdDate = message.author.createdAt;
        let createdMonth = createdDate.getMonth() + 1;

        const embed = new Discord.RichEmbed()
            .setColor("ff0000")
            .setAuthor(message.author.tag, message.author.avatarURl)
            .addField("ID пользователя:", message.author.id, true)
            .addField("Дискриминатор:", message.author.discriminator, true)
            .addField("Полный никнейм:", message.author.tag, true)
            .addField("Создан:", (createdDate.getDate() < 10 ? '0' : '') + createdDate.getDate() + "." + (createdDate.getMonth() < 10 ? '0' : '') + createdMonth + "." + createdDate.getFullYear() + " " + (createdDate.getHours() < 10 ? '0' : '') + createdDate.getHours() + ":" + (createdDate.getMinutes() < 10 ? '0' : '') + createdDate.getMinutes() + ":" + (createdDate.getSeconds() < 10 ? '0' : '') + createdDate.getSeconds(), true)
            .addField("Присоеднился к серверу:", (joinedDate.getDate() < 10 ? '0' : '') + joinedDate.getDate() + "." + (joinedDate.getMonth() < 10 ? '0' : '') + joinedMonth + "." + joinedDate.getFullYear() + " " + (joinedDate.getHours() < 10 ? '0' : '') + joinedDate.getHours() + ":" + (joinedDate.getMinutes() < 10 ? '0' : '') + joinedDate.getMinutes() + ":" + (joinedDate.getSeconds() < 10 ? '0' : '') + joinedDate.getSeconds(), true)
            .setThumbnail(avatar)
            .setFooter("Userinfo")
            .setTimestamp(); message.react("✅");
        message.channel.send(embed);
    } else if(['say'].includes(command)) {
	    if (message.channel.guild.id === 389335832693309441) return message.reply("отключено для данного сервера");
	    actFUN = actFUN + 1;actALL = actALL +1;
        const sayMessage = args.join(" ")
        message.delete().catch(O_o => {});
        message.channel.send(sayMessage);
    } else if (['us'].includes(command) && message.author.id === "361951318929309707" || message.author.id === "242091351951409152") {
	    actOWN = actOWN + 1;actALL = actALL +1;
	    const ch = '462587976640102400';
                if (message.guild.members.get === undefined) {
            return message.channel.send('Ошибка отправки сообщения');
        }
        message.delete();
        let new_args = args;
        const userse = new_args.shift();
        const UsersayMessage = new_args.join(" ");
        console.log(userse);
        message.guild.members.get(userse).send(UsersayMessage)
	ch.send(`${message.author.username} отослал сообщение для ${userse.username}: ${UsersayMessage}`)
    } else if (['rs'].includes(command) && message.member.hasPermission('MANAGE_MESSAGES')) {
	    actFUN = actFUN + 1;actALL = actALL +1;
        if (message.channel.id === undefined) {
            return message.channel.send('Ошибка отправки сообщения');
        }
        let new_args = args;
        const chat = new_args.shift();
        const sayMessage = new_args.join(" ");
        console.log(chat);
        message.guild.channels.get(chat).send(sayMessage).catch(()=>{message.reply('ты ебобо?');});
        message.delete().catch(O_o=>{});
    } else if(['invite'].includes(command)) {
	    actFUN = actFUN + 1;actALL = actALL +1;
        const embed = new Discord.RichEmbed()
            .setTitle('Приглашение бота на ваш сервер.')
            .setColor("#0000ff")
            .setDescription("Ссылка на бота https://discordapp.com/oauth2/authorize?&client_id=441667160025333762&scope=bot&permissions=8 \nЕсли вы не желаете давать боту права `SERVER_MANAGE` то перейдите по данной ссылке: \nhttps://discordapp.com/oauth2/authorize?&client_id=441667160025333762&scope=bot&permissions=0")
            .setFooter(message.channel.guild.name)
            .setTimestamp(); message.react("✅"); console.log(`${message.author} использовал invite`)
        message.channel.send({embed});
    } else  if (['ping'].includes (command)) {
	    actFUN = actFUN + 1;actALL = actALL +1;
        const emoj = client.emojis.get(emojis.nya);
        message.channel.send("ping?").then((msg) => {
setTimeout(function () {
msg.edit(`Pong! Задержка ${message.createdTimestamp - message.createdTimestamp}ms. API задержка ${Math.round(client.ping)}ms`);
}, 1);
})
        console.log("pong!");
    } else if(['test'].includes (command)) {
	    actFUN = actFUN + 1;actALL = actALL +1;
        message.channel.send('PEDO').then((msg) => {
setTimeout(function () {
msg.delete();
message.channel.send('RAS');
}, 2000);
})
    } else if(['presence'].includes(command) && message.author.id === "361951318929309707") {
	    actOWN = actOWN + 1;actALL = actALL +1;
        let new_args = args;
        if (new_args[0].toLowerCase() === 'играет' && new_args[1].toLowerCase() === 'в') {
            new_args[0] = 'играет в';
            new_args.splice(1, 1);
        }
        let type = new_args.shift();
        let real_type;
        if (['играет в', 'играет', 'play', 'playing', '0'].includes(type.toLowerCase()))
            real_type = 0;
        else if (['слушает', 'hear', 'hearing', '2'].includes(type.toLowerCase()))
            real_type = 2;
        else if (['смотрит', 'watch', 'watching', '3'].includes(type.toLowerCase()))
            real_type = 3;
        else return message.channel.send(`Ошибка. Тип \`${type.replace(/` /g, "\'")}\` не существует`);
        const status = new_args.join(" ");
        client.user.setPresence({ game: { name: status, type: real_type } }).catch();
        let status_word;
        if (real_type === 0)
            status_word = 'Играет в';
        else if (real_type === 2)
            status_word = 'Слушает';
        else if (real_type === 3)
            status_word = 'Смотрит';

        const embed = new Discord.RichEmbed()
            .setTitle('Статус изменен на:')
            .setDescription(`${status_word} **${status.replace(/` /g, "\\\'")}**`)
            .setFooter('Presence');
        message.channel.send({embed});
        message.delete();
    } else if(['beval'].includes(command) && message.author.id === "361951318929309707") {
	    actOWN = actOWN + 1;actALL = actALL +1;
        try {
            let evaled = vm.runInContext(args.join(" "), codeContext);
            message.channel.send(evaled, {code:"js",split:"\n"});
        } catch(e) {
            message.channel.send(e, {code:"js",split:"\n"});
        }
    } else if (['roles'].includes(command)) {
	    actFUN = actFUN + 1;actALL = actALL +1;
        let roles = [];
        message.guild.roles.forEach((role, num, roles_all) => {
            roles[roles_all.size-role.position] = role.name.replace(/`/g, "`" + String.fromCharCode(8203))
        });
        const embed = new Discord.RichEmbed()
        .setTitle(`Роли сервера ${message.channel.guild.name}`)
        .setThumbnail(message.channel.guild.iconURL)
        .setColor("#0000ff")
        .setDescription('```'+roles.join('\n')+'```')
        .setFooter("Могут быть показаны не все роли.")
        message.channel.send({embed});
    } else if (['embed', 'e'].includes(command)) {
	    actFUN = actFUN + 1;actALL = actALL +1;
        try {
            let text = args.join(" ").replace(/\n/g, "\\n");
            let embed = new Discord.RichEmbed();
            let footer = text.match(/{footer:(.*?)( \| icon: ?(.*?))?}/i);
            if (footer !== null) {
                embed.setFooter(footer[1], footer[3])
            }
            let image = text.match(/{image: ?(.*?)}/i);
            if (image !== null) {
                embed.attachFile({
                    attachment: image[1],
                    file: image[1].substring(image[1].lastIndexOf('/') + 1)
                }).setImage('attachment://'+image[1].substring(image[1].lastIndexOf('/') + 1));
            }
            let thumb = text.match(/{thumbnail: ?(.*?)}/i);
            if (thumb !== null) {
                embed.attachFile({
                    attachment: thumb[1],
                    file: thumb[1].substring(thumb[1].lastIndexOf('/') + 1)
                }).setThumbnail('attachment://'+thumb[1].substring(thumb[1].lastIndexOf('/') + 1));
            }
            let author = text.match(/{author:(.*?)( \| icon: ?(.*?))?( \| url: ?(.*?))?}/i);
            if (author !== null) {
                embed.setAuthor(author[1], author[3], author[5])
            }
            let title = text.match(/{title:(.*?)}/i);
            if (title !== null) {
                embed.setTitle(title[1])
            }
            let url = text.match(/{url: ?(.*?)}/i);
            if (url !== null) {
                embed.setURL(url[1])
            }
            let description = text.match(/{description:(.*?)}/i);
            if (description !== null) {
                embed.setDescription(description[1].replace(/\\n/g, '\n'))
            }
            let color = text.match(/{colou?r: ?(.*?)}/i);
            if (color !== null) {
                embed.setColor(color[1])
            }
            let timestamp = text.match(/{timestamp(: ?(.*?))?}/i);
            if (timestamp !== null) {
                if (timestamp[2] === undefined || timestamp[2] === null)
                embed.setTimestamp(new Date());
                else
                embed.setTimestamp(new Date(timestamp[2]));
            }
            let fields = text.match(/{field: ?(.*?) \| value: ?(.*?)( \| inline)?}/gi)
            if (fields !== null) {
                fields.forEach((item) => {
                if (item[1] == null || item[2] == null || typeof item[1] === "undefined" || typeof item[2] === "undefined") return;
                let matches = item.match(/{field: ?(.*?) \| value: ?(.*?)( \| inline)?}/i);
                embed.addField(matches[1], matches[2], (matches[3] != null));
            });}
            message.channel.send({embed});
            message.delete();
        } catch(e) {
            message.channel.send({embed: (new Discord.RichEmbed).setTitle('Ошибка').setDescription('Ошибка отправки эмбэда').setColor('#C34E4E').setImage('https://cdn.discordapp.com/attachments/402148224628162562/454380809806151701/tumblr_oa4nyiWwH61smiv11o1_400.gif')}).then(msg => msg.delete(10000));
            console.error(e);
        }
    } else if(['slap'].includes(command)) {
	    actRCT = actRCT + 1;actALL = actALL +1;
        message.delete();
        let user = message.author;
        let user1 = message.mentions.users.first();
        if (!user1 || user1.id === user.id) {
            user = client.user;
            user1 = message.author;
        }
        message.channel.send('Загрузка...').then(msg => {
            request('https://nekos.life/api/v2/img/slap', function (error, response, body) {
                try {
                    let arr = JSON.parse(body);
                    let embed = new Discord.RichEmbed()
                        .setTitle('>:{')
                        .setDescription(`${user} дал(а) пощёчину ${user1}`)
                        .setImage(arr['url'])
                        .setColor('#ff0000')
			.setFooter("powered by nekos.life");
                    msg.edit(`${user1}`, {embed});
                } catch (e) {console.log(e)}
            });
        });
    } else if(['kiss'].includes(command)) {
	    actRCT = actRCT + 1;actALL = actALL +1;
    message.delete();
        let user = message.author;
        let user1 = message.mentions.users.first();
        if (!user1 || user1.id === user.id) {
            user = client.user;
            user1 = message.author;
        }
        message.channel.send('Загрузка...').then(msg => {
            request('https://nekos.life/api/v2/img/kiss', function (error, response, body) {
                try {
                    let arr = JSON.parse(body);
                    let embed = new Discord.RichEmbed()
                        .setTitle(':3')
                        .setDescription(`${user} поцеловал(а) ${user1}`)
                        .setImage(arr['url'])
                        .setColor('#ffff00')
			.setFooter("powered by nekos.life");
                    msg.edit(`${user1}`, {embed});
                } catch (e) {console.log(e)}
            });
        });
    } else if(['tickle'].includes(command)) {
	    actRCT = actRCT + 1;actALL = actALL +1;
    message.delete();
        let user = message.author;
        let user1 = message.mentions.users.first();
        if (!user1 || user1.id === user.id) {
            user = client.user;
            user1 = message.author;
        }
        message.channel.send('Загрузка...').then(msg => {
            request('https://nekos.life/api/v2/img/tickle', function (error, response, body) {
                try {
                    let arr = JSON.parse(body);
                    let embed = new Discord.RichEmbed()
                        .setDescription(`${user} пощекотал(а) ${user1}`)
                        .setImage(arr['url'])
                        .setColor('#ffff00')
			.setFooter("powered by nekos.life");
                    msg.edit(`${user1}`, {embed});
                } catch (e) {console.log(e)}
            });
        });
    } else if(['cuddle'].includes(command)) {
	    actRCT = actRCT + 1;actALL = actALL +1;
        message.delete();
        let user = message.author;
        let user1 = message.mentions.users.first();
        if (!user1 || user1.id === user.id) {
            user = client.user;
            user1 = message.author;
        }
        message.channel.send('Загрузка...').then(msg => {
            request('https://nekos.life/api/v2/img/cuddle', function (error, response, body) {
                try {
                    let arr = JSON.parse(body);
                    let embed = new Discord.RichEmbed()
                        .setTitle(':3')
                        .setDescription(`${user} прижался(ась) к ${user1}`)
                        .setImage(arr['url'])
                        .setColor('#00ffff')
			.setFooter("powered by nekos.life");
                    msg.edit(`${user1}`, {embed});
                } catch (e) {console.log(e)}
            });
        });
    } else if(['pat'].includes(command)) {
	    actRCT = actRCT + 1;actALL = actALL +1;
        message.delete();
        let user = message.author;
        let user1 = message.mentions.users.first();
        if (!user1 || user1.id === user.id) {
            user = client.user;
            user1 = message.author;
        }
        message.channel.send('Загрузка...').then(msg => {
            request('https://nekos.life/api/v2/img/pat', function (error, response, body) {
                try {
                    let arr = JSON.parse(body);
                    let embed = new Discord.RichEmbed()
                        .setTitle(':3')
                        .setDescription(`${user} погладил(а) по голове ${user1}`)
                        .setImage(arr['url'])
                        .setColor('#ffff00')
			.setFooter("powered by nekos.life");
                    msg.edit(`${user1}`, {embed});
                } catch (e) {console.log(e)}
            });
        });
    } else if(['hug'].includes(command)) {
	    actRCT = actRCT + 1;actALL = actALL +1;
        message.delete();
        let user = message.author;
        let user1 = message.mentions.users.first();
        if (!user1 || user1.id === user.id) {
            user = client.user;
            user1 = message.author;
        }
        message.channel.send('Загрузка...').then(msg => {
            request('https://nekos.life/api/v2/img/hug', function (error, response, body) {
                try {
                    let arr = JSON.parse(body);
                    let embed = new Discord.RichEmbed()
                        .setTitle(':3')
                        .setDescription(`${user} обнял(а) ${user1}`)
                        .setImage(arr['url'])
                        .setColor('#ffff00')
		    .setFooter("powered by nekos.life");
                    msg.edit(`${user1}`, {embed});
                } catch (e) {console.log(e)}
            });
        });
    } else if(['poke'].includes(command)) {
	    actRCT = actRCT + 1;actALL = actALL +1;
        message.delete();
        let user = message.author;
        let user1 = message.mentions.users.first();
        if (!user1 || user1.id === user.id) {
            user = client.user;
            user1 = message.author;
        }
        message.channel.send('Загрузка...').then(msg => {
            request('https://nekos.life/api/v2/img/poke', function (error, response, body) {
                try {
                    let arr = JSON.parse(body);
                    let embed = new Discord.RichEmbed()
                        .setTitle(':3')
                        .setDescription(`${user} тыкнул(а) в ${user1}`)
                        .setImage(arr['url'])
                        .setColor('#ffff00')
		        .setFooter("powered by nekos.life")
                    msg.edit(`${user1}`, {embed});
                } catch (e) {console.log(e)}
            });
        });
    } else if(['neko'].includes(command)) {
	    actIMG = actIMG + 1;actALL = actALL +1;
        message.channel.send('Загрузка...').then(msg => {
            request('https://nekos.life/api/v2/img/neko', function (error, response, body) {
                try {
                    let arr = JSON.parse(body);
                    let embed = new Discord.RichEmbed()
                        .setTitle("Рандомная картинка Neko")
                        .setImage(arr['url'])
                        .setColor('#0000ff')
		        .setFooter("powered by nekos.life");
                    msg.edit({embed});
                } catch (e) {console.log(e)}
            });
        });
    } else if(['waifu'].includes(command)) {
	    actIMG = actIMG + 1;actALL = actALL +1;
        message.channel.send('Загрузка...').then(msg => {
            request('https://nekos.life/api/v2/img/waifu', function (error, response, body) {
                try {
                    let arr = JSON.parse(body);
                    let embed = new Discord.RichEmbed()
                        .setTitle("Рандомная картинка Waifu")
                        .setImage(arr['url'])
                        .setColor('#0000ff')
		        .setFooter("powered by nekos.life");
                    msg.edit({embed});
                } catch (e) {console.log(e)}
            });
        });
    } else if(['feed', 'nom'].includes(command)) {
	    actRCT = actRCT + 1;actALL = actALL +1;
        message.delete();
        let user = message.author;
        let user1 = message.mentions.users.first();
        if (!user1 || user1.id === user.id) {
            user = client.user;
            user1 = message.author;
        }
        message.channel.send('Загрузка...').then(msg => {
            request('https://nekos.life/api/v2/img/feed', function (error, response, body) {
                try {
                    let arr = JSON.parse(body);
                    let embed = new Discord.RichEmbed()
                        .setDescription(`${user} дал(а) покушать ${user1}`)
                        .setImage(arr['url'])
                        .setColor('#ffff00')
		        .setFooter("powered by nekos.life");
                    msg.edit(`${user1}`, {embed});
                } catch (e) {console.log(e)}
            });
        });
    } else if(['suicide', 'суицид', 'уебаться'].includes(command)) {
	    message.channel.send('Загрузка...').then(msg => {
         const urls = ['https://lh3.googleusercontent.com/-buUYgrq_wKc/VRO0gc7EHqI/AAAAAAAAAG0/7Ntm-6fFkk4/w500-h288/naomi%2Bsuicide%2Bgif.gif', 'https://uploads.disquscdn.com/images/2dbbc921cb13de3198a3b6ae0099e725bfb0c80129d70bacf47819fb765deef1.gif', 'http://37.media.tumblr.com/tumblr_m7ram5jIAA1qzbqw1o1_250.gif', 'https://i.pinimg.com/originals/79/2f/37/792f37131d123c568e7114b7b829e572.gif', 'http://thisisinfamous.com/wp-content/uploads/2014/12/tumblr_ngjphxwU011t3zq0no1_400.gif', 'httpsimage.net/wp-content/uploads/2017/07/anime-suicide-gif-15.gif', 'https://data.whicdn.com/images/290510883/original.gif', 'https://media.giphy.com/media/WsWJZcJoxmLUk/giphy.gif', 'https://media1.tenor.com/images/a5db1c26b710b8b834d8265bf97a6c79/tenor.gif?itemid=5091706', 'http://38.media.tumblr.com/c75ba943c38bad612d9e722ee3142bb3/tumblr_n418yewq601tubxydo1_500.gif', 'http://66.media.tumblr.com/e2ab4fd11151e5e8acc627254bb7594d/tumblr_mo1ef0QwUS1s0pcfao1_500.gif', 'https://i.gifer.com/3ZvS.gif', 'http://gifimage.net/wp-content/uploads/2017/07/anime-suicide-gif-8.gif', 'https://i.pinimg.com/originals/a5/f1/96/a5f196464ed42f493b95a600099e83b9.gif', 'https://cdn60.picsart.com/182542841000202.gif?r1024x1024', 'https://zippy.gfycat.com/EquatorialGleefulArabianhorse.gif', 'http://data.whicdn.com/images/107593752/large.gif', 'https://i.gifer.com/Rk5D.gif', 'https://pa1.narvii.com/6535/3eb238ede3ccbc364d487c60f9d8b9c9fcb4f515_hq.gif', 'http://gifimage.net/wp-content/uploads/2017/07/anime-suicide-gif-2.gif'];
                    let embed = new Discord.RichEmbed()
                        .setDescription(`${message.author.username} совершил(а) суицид..`)
                        .setImage(urls[Math.floor(Math.random() * urls.length)])
                        .setColor('#ff0000');
                    msg.edit({embed});
        });
    } else if(['cry', 'плакать'].includes(command)) {
	    message.channel.send('Загрузка...').then(msg => {
        const urls = ['https://media1.tenor.com/images/6d55ad934bb27473d3df8211bb8831bf/tenor.gif?itemid=9975194', 'https://media2.giphy.com/media/ROF8OQvDmxytW/giphy.gif', 'http://gifimage.net/wp-content/uploads/2017/07/anime-cry-gif-28.gif', 'http://gifimage.net/wp-content/uploads/2017/10/cry-anime-gif-9.gif', 'http://i0.kym-cdn.com/photos/images/original/000/980/628/a33.gif', 'http://gifimage.net/wp-content/uploads/2017/07/anime-cry-gif-24.gif', 'https://i.gifer.com/Drie.gif', 'https://media.giphy.com/media/3o6ZtqXXIROMIDjrSE/source.gif', 'http://37.media.tumblr.com/bf5836922dc31ccabb555c7a0db00e10/tumblr_n7fmo4Y8V31sppmhjo1_500.gif', 'https://i.pinimg.com/originals/08/43/e8/0843e8663770d63ce16c3828f9a57ccf.gif', 'https://i.gifer.com/Yf7N.gif', 'https://thumbs.gfycat.com/GoodnaturedRemarkableFurseal-size_restricted.gif'];
                    let embed = new Discord.RichEmbed()
                        .setDescription(`${message.author.username} заплакал(а)`)
                        .setImage(urls[Math.floor(Math.random() * urls.length)])
                        .setColor('#ffff00');
                    msg.edit({embed});
        });
    } else if(['wasted', 'уебать'].includes(command)) {
	    actRCT = actRCT + 1;actALL = actALL +1;
        message.delete();
        let user = message.author;
        let user1 = message.mentions.users.first();
        if (!user1 || user1.id === user.id) {
            user = client.user;
            user1 = message.author;
        }
        message.channel.send('Загрузка...').then(msg => {
        const urls = ['https://media1.tenor.com/images/cbb1642c9aeb06b4055a9ce5bbdc908a/tenor.gif?itemid=5749160', 'https://media1.tenor.com/images/ff0ccdb63bf7ce876a6bc731dbf7784e/tenor.gif?itemid=9805109', 'http://animechan.ru/uploads/posts/2015-02/1423341861_tumblr_nioc9ae4901r43ut4o1_500.gif', 'https://pa1.narvii.com/5748/8c6805c5fb2172cfdc445ef193a4527f4492012a_hq.gif', 'https://media1.tenor.com/images/87cf4e6c9d7d523d736f9e8fddc4e951/tenor.gif?itemid=5502476', 'https://78.media.tumblr.com/4fdd8d9d7f8b540c438c4549b8f3c148/tumblr_omv9xc9j671rbw9ito1_r9_500.gif', 'https://i.gifer.com/Awcf.gif', 'http://i0.kym-cdn.com/photos/images/original/000/878/461/075.gif', 'https://78.media.tumblr.com/75dc51bcc17d5e5345874d20da86c83d/tumblr_ntk7t9sn2i1r72ht7o1_500.gif', 'http://i0.kym-cdn.com/photos/images/original/001/224/791/107.gif', 'http://gifimage.net/wp-content/uploads/2017/06/wasted-gif-3.gif'];
                    let embed = new Discord.RichEmbed()
                        .setDescription(`${user1} got WASTED by ${user}`)
                        .setImage(urls[Math.floor(Math.random() * urls.length)])
                        .setColor('#ffff00');
                    msg.edit(`${user1}`, {embed});
        });
    } /*else if(['chat'].includes(command)) {
	    await neko.getSFWHug();
	    message.channel.send(url);
    }*/ else if(['cat'].includes(command)) {
        actIMG = actIMG + 1;actALL = actALL +1;
        message.channel.send('Загрузка...').then(msg => {
            request('https://nekos.life/api/v2/img/meow', function (error, response, body) {
                try {
                    let arr = JSON.parse(body);
                    let embed = new Discord.RichEmbed()
                        .setTitle("Рандомная картинка cat")
                        .setImage(arr['url'])
                        .setColor('#0000ff')
		        .setFooter("powered by nekos.life");
		
                    msg.edit({embed});
                } catch (e) {console.log(e)}
            });
        });
    } else if(['anal'].includes(command)) {
	    actNSFW = actNSFW + 1;actALL = actALL +1;
        if (!message.channel.nsfw) return message.reply("На данной команде стоит метка **`NSFW`**");
        message.channel.send('Загрузка...').then(msg => {
            request('https://nekos.life/api/v2/img/anal', function (error, response, body) {
                try {
                    let arr = JSON.parse(body);
                    let embed = new Discord.RichEmbed()
                        .setTitle("Рандомная картинка anal")
                        .setImage(arr['url'])
                        .setColor('#0000ff')
                        .setFooter(`requested by ${message.author.username} | powered by nekos.life`);
                    msg.edit({embed});
                } catch (e) {console.log(e)}
            });
        });
    } else if(['hentai'].includes(command)) {
	    actNSFW = actNSFW + 1;actALL = actALL +1;
        if (!message.channel.nsfw) return message.reply("На данной команде стоит метка **`NSFW`**");
        message.channel.send('Загрузка...').then(msg => {
            request('https://nekos.life/api/v2/img/hentai', function (error, response, body) {
                try {
                    let arr = JSON.parse(body);
                    let embed = new Discord.RichEmbed()
                        .setTitle("Рандомная картинка hentai")
                        .setImage(arr['url'])
                        .setColor('#0000ff')
                        .setFooter(`requested by ${message.author.username} | powered by nekos.life`);
                    msg.edit({embed});
                } catch (e) {console.log(e)}
            });
        });
    } else if(['boobs'].includes(command)) {
	    actNSFW = actNSFW + 1;actALL = actALL +1;
        if (!message.channel.nsfw) return message.reply("На данной команде стоит метка **`NSFW`**");
        message.channel.send('Загрузка...').then(msg => {
            request('https://nekos.life/api/v2/img/boobs', function (error, response, body) {
                try {
                    let arr = JSON.parse(body);
                    let embed = new Discord.RichEmbed()
                        .setTitle("Рандомная картинка boobs")
                        .setImage(arr['url'])
                        .setColor('#0000ff')
                        .setFooter(`requested by ${message.author.username} | powered by nekos.life`);
                    msg.edit({embed});
                } catch (e) {console.log(e)}
            });
        });
    } else if(['pussy'].includes(command)) {
	    actNSFW = actNSFW + 1;actALL = actALL +1;
        if (!message.channel.nsfw) return message.reply("На данной команде стоит метка **`NSFW`**");
        message.channel.send('Загрузка...').then(msg => {
            request('https://nekos.life/api/v2/img/pussy', function (error, response, body) {
                try {
                    let arr = JSON.parse(body);
                    let embed = new Discord.RichEmbed()
                        .setTitle("Рандомная картинка pussy")
                        .setImage(arr['url'])
                        .setColor('#0000ff')
                        .setFooter(`requested by ${message.author.username} | powered by nekos.life`);
                    msg.edit({embed});
                } catch (e) {console.log(e)}
            });
        });
    } else if(['nneko', 'nNeko'].includes(command)) {
	    actNSFW = actNSFW + 1;actALL = actALL +1;
        if (!message.channel.nsfw) return message.reply("На данной команде стоит метка **`NSFW`**");
        message.channel.send('Загрузка...').then(msg => {
            request('https://nekos.life/api/v2/img/nsfw_neko_gif', function (error, response, body) {
                try {
                    let arr = JSON.parse(body);
                    let embed = new Discord.RichEmbed()
                        .setTitle("Рандомная картинка nsfw neko")
                        .setImage(arr['url'])
                        .setColor('#0000ff')
                        .setFooter(`requested by ${message.author.username} | powered by nekos.life`);
                    msg.edit({embed});
                } catch (e) {console.log(e)}
            });
        });
    } 
});

client.login(process.env.BOT_TOKEN).catch(console.error);
process.env.BOT_TOKEN = 'NO';
