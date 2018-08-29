const Discord = require("discord.js");
const music = require('discord.js-music-v11');
const music2 = require('discord.js-music-hiico');
const mysql = require("mysql");
const arraySort = require('array-sort');
const table = require('table');
const request = require("request");
const { Canvas } = require('canvas-constructor');
const { inspect } = require("util");
const config = require('./config.json');
const vm = require("vm");
const fs = require("fs");
const mment = require("moment");
const hastebin = require('hastebin-gen');
const jimp = require("jimp");
const sm = require('string-similarity');
const translate = require('google-translate-api');
const canvas = require('canvas');
const opus = require('node-opus');
const weather = require("weather-js");
const numcap = require('numcap');
const os = require('os');
const codeContext =  {};
const urban = require('relevant-urban');
const cheerio = require('cheerio');
const snekfetch = require('snekfetch');
const querystring = require('querystring');
const QRCode = require('qrcode');
const client = new Discord.Client();
const prefix = "<@441667160025333762>";
const creators = ['361951318929309707'];
const emojis = {
	nya:'435849475865575424',
	google:'466553119745114122'
};
var finder = new numcap();
let money = 0; 
let token = "=(";
let actFUN = 0;  // actFUN = actFUN + 1;actALL = actALL +1;
let actMOD = 0;  // actMOD = actMOD + 1;actALL = actALL +1;
let actRCT = 0;  // actRCT = actRCT + 1;actALL = actALL +1;
let actNSFW = 0; // actNSFW = actNSFW + 1;actALL = actALL +1;
let actOWN = 0; //  actOWN = actOWN + 1;actALL = actALL +1;
let actIMG = 0; //  actIMG = actIMG + 1;actALL = actALL +1;
let actALL = 0; //  actALL = actALL +1;actALL = actALL +1;
let gameCount = 0;
const talkedRecently = new Set();
const bl = new Set();
const tet = new Set();
let serversPlay = {}
vm.createContext(codeContext);
//массив цветов
const colors = ['ff2828','ff3d28','ff4b28','ff5a28','ff6828','ff7628','ff8c28','ffa128','ffac28','ffb728','ffc228','ffd028','ffd728','ffe228','fff028','fffb28','edff28','deff28','d0ff28','c2ff28','b3ff28','9aff28','8cff28','7dff28','6fff28','5aff28','3dff28','28ff2b','28ff41','28ff56','28ff6c','28ff81','28ff93','28ffa9','28ffba','28ffc9','28ffde','28fff4','28ffff','28f0ff','28deff','28deff','28d3ff','28c5ff','28baff','28b0ff','28a5ff','289eff','2893ff','2885ff','2876ff','2864ff','2856ff','284bff','2841ff','2836ff','2828ff','3228ff','4428ff','5328ff','6828ff','7628ff','7e28ff','8828ff','9328ff','a128ff','b028ff','be28ff','c928ff','d328ff','db28ff','e528ff','f028ff','ff28ff','ff28f7','ff28e5','ff28de','ff28d0','ff28c9','ff28ba','ff28b3','ff28a5','ff289a','ff288c','ff2881','ff287a','ff2873','ff2868','ff2861','ff2856','ff284f','ff2848','ff2844','ff282b'];

var rate = 48000;
var encoder = new opus.OpusEncoder( rate );
 
// Encode and decode.
var frame_size = rate/100;

const db = require('quick.db');
//DATABASE CONNECT
const con = mysql.createConnection({
  host: process.env.HOST,
  user: process.env.USER,
  password:  process.env.PASS,
  database:  process.env.DATABASE
});
con.connect(err => {
	if(err) throw err;
  console.log("connected")
})
//пособие о том, как плодить шарды
/*const Sharder = require('eris-sharder').Master;
const sharder = new Sharder(process.env.BOT_TOKEN, "/src/main.js", {
  stats: true,
  debug: true,
  clusters: 2,
  shards: 3,
  name: 'XeVAL',
  guildsPerShard: "50"
})
sharder.on("stats", stats => {
  console.log(stats);
});*/
music(client, {
	prefix: 'x!',     
	global: false,     
	maxQueueSize: 10,  
	clearInvoker: false,
anyoneCanSkip: false
//channel: 'music'   
});
const dbl = require("dblposter");
const DBLPoster = new dbl(process.env.BOT_KEY, client);
DBLPoster.bind();
client.on('ready', () => {
    //Отпраляет сообщение в логи что бот запущен (+ количество серверов).

        console.log(`Успешный старт.`)
	console.log("----------Количество---------- ")
	console.log(`${client.guilds.size} серверов `)
	console.log(`${client.channels.size} каналов`)
	console.log(`${client.users.size} юзеров    `)
	console.log("----------Данные-------------- ")
	console.log(`Лог сервер: 449284842534993931 (XEVAL LOGS)`)
	console.log(`Овнер: 361951318929309707 (X-49#8847)`)
	console.log(`Сайт: https://xeval.ga`)
	console.log("----------Логин---------- ")
	console.log(`Успешный логин.`)
	console.log(`Залогинился в ${client.user.username}`)
	console.log(`ID: ${client.user.id}`)
	console.log("------------------------------")
    //Ставит боту статус.
    client.user.setActivity(`x!help • ${client.guilds.size} servers`)
    //Функция необходимая для запуска радуги.
    servers.forEach(function (item1, number1) {
    if (!client.guilds.get(item1[0]) || !client.guilds.get(item1[0]).roles.get(item1[1]) || !client.guilds.get(item1[0]).roles.get(item1[1]).editable) servers.splice(number1, 1);
    });
    color();
});
client.on("guildMemberAdd", member => {
	con.query(`SELECT * FROM autorole WHERE guild = '${member.guild.id}'`, (err, rows) => {
		if(!rows[0] || rows[0].guild != member.guild.id) return;
		member.addRole(rows[0].role)
	});
});
client.on("guildMemberAdd", member => {
	con.query(`SELECT * FROM welcome WHERE guild = '${member.guild.id}'`, (err, rows) => {
		if(!rows[0] || rows[0].guild != member.guild.id) return;
		let text = rows[0].message;
		text = text.replaceAll("%member.username%", member.user.username)
		text = text.replaceAll("%member.tag%", member.user.tag)
		text = text.replaceAll("%member.id%", member.user.id)
		text = text.replaceAll("%member.avatar%", member.user.avatarURL)
		text = text.replaceAll("%guild.name%", member.guild.name)
		text = text.replaceAll("%guild.id%", member.guild)
		text = text.replaceAll("%guild.members%", member.guild.memberCount)
		text = text.replaceAll("%guild.icon%", member.guild.iconURL)
		let channe = client.channels.get(rows[0].channel);
		const embed = new Discord.RichEmbed()
		.setTitle(rows[0].title)
		.setDescription(text)
		.setColor(rows[0].color);
			channe.send(embed).catch(err => channe.send("Похоже вы не доконца настроили welcome, доступные пути: `color, message, title`"));
});
});
/*client.on("guildMemberAdd", member => {
	
		if(member.guild.id === '264445053596991498') return;
	if(!member.guild.systemChannel) return;
	let q = member.user.tag;
        let r = member.guild.name;
        let img = member.user.displayAvatarURL;
        jimp.read(img).then(function(image) {
          jimp.read("https://i.imgur.com/8YEW9b1.png").then(function(image2) {
            jimp.loadFont(jimp.FONT_SANS_32_WHITE).then(function(font) {
              jimp.loadFont(jimp.FONT_SANS_16_WHITE).then(function(font2) {
                image2.print(font, 9, 150, q);
                image2.print(font2, 151, 111, `to ${r}`);
		image2.print(font2, 151, 131, `You are ${member.guild.memberCount}th member!`);
                image.resize(128, 128);
                image2.composite(image, 2, 2);
                image2.getBuffer(jimp.MIME_PNG, (error, buffer) => {
                	member.guild.systemChannel.send({files: [{ name: 'welcome.png', attachment: buffer }] });
                });
              });
            });
          });
        });
	
})*/

function generateXp() {
  let max = 30;
  let min = 5;
  return Math.floor(Math.random() * (max - min + 1)) + min;
}
client.on('message', async message => {
    con.query(`SELECT * FROM xp WHERE id = '${message.author.id}'`, (err, rows) => {
	    if(err) throw err;
  let sql;
  if (!rows[0]) {
    sql = `INSERT INTO xp (id, xp, lvl) VALUES ('${message.author.id}', ${generateXp()}, '1')`;
  } else {
    let xp = rows[0].xp;
	  let lvl = rows[0].lvl;
	  if(xp >= 5 * (lvl ^ 2) + 50 * lvl + 100) {
		  sql = `UPDATE xp SET lvl = lvl+1 WHERE id = '${message.author.id}'`;
		  return;
	  }
    sql = `UPDATE xp SET xp = ${xp + generateXp()} WHERE id = '${message.author.id}'`;
  }
  con.query(sql);
});
})
client.on("guildMemberRemove", member => {
	if(member.guild.id === '264445053596991498') return;
	if(!member.guild.systemChannel) return;
	let q = member.user.tag;
        let r = member.guild.name;
        let img = member.user.displayAvatarURL;
        jimp.read(img).then(function(image) {
          jimp.read("https://i.imgur.com/whcWgdX.png").then(function(image2) {
            jimp.loadFont(jimp.FONT_SANS_32_WHITE).then(function(font) {
              jimp.loadFont(jimp.FONT_SANS_16_WHITE).then(function(font2) {
                image2.print(font, 9, 150, q);
                image2.print(font2, 161, 111, `${r}`);
                image.resize(128, 128);
                image2.composite(image, 2, 2);
                image2.getBuffer(jimp.MIME_PNG, (error, buffer) => {
                	member.guild.systemChannel.send({files: [{ name: 'goodbye.png', attachment: buffer }] });
                });
              });
            });
          });
        });
})
const servers = config.servers;

function wrap(text) {
	return '```\n' + text.replace(/`/g, '`' + String.fromCharCode(8203)) + '\n```';
}
function nosym(text) {
	return text.replace(/`/g, ' ' + String.fromCharCode(8203));
}
async function color () {
    await servers.forEach(async function (item1, number1) {
        if (client.guilds.get(item1[0]) && client.guilds.get(item1[0]).roles.get(item1[1]).editable)
        await colors.forEach(async function (item, number) {
            //Ищет заданую гильдию после заданую роль, в заданой скорости вращает цвета по кругу.
            await setTimeout(async function () {client.guilds.get(item1[0]).roles.get(item1[1]).setColor(item).catch(console.error);if(number === colors.length-1 && number1 === servers.length-1) setTimeout(function () {color().catch(console.error)}, 500)}, number*500);
        });
    });
}
client.on('message', async (message) => {
	if (message.channel.type === 'dm') {
        if ([`${client.user.id}`].includes(message.author.id)) return;
        client.channels.get('449845125816909834').send('Сообщение от '+message.author.username+' | ' +message.author.id+': ```'+message.content.replace(/`/g, "`" + String.fromCharCode(8203))+'```')
		return;
    }
});
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
function generateXp() {
	let max = 30;
	let min = 5;
	return Math.floor(Math.random() * (max - min + 1)) + min;
}

client.on('message', async (message) => {
	const prefix2 = "<@441667160025333762>";

//При заданом сообщение выполняет действие.
	
    if (message.content.startsWith("бот пиши")) {
        //Отвечает за то чтобы бот начал писать в вызваном чате.
        message.channel.startTyping();
    }
    //tyt

	if (message.content.startsWith(".t") && message.author.id === '361951318929309707') {
		message.delete()
	}
if(message.author.bot) return;
	if (message.content.startsWith(">t") && message.author.id === '361951318929309707') {
		message.delete()
	}
	if (message.content.startsWith("x!")) {
		console.log(`[${message.author.username} | ${message.author.id} | ${message.guild.name}] ${message.content}`)
	}
	if (message.content.startsWith("x@")) {
		console.log(`[${message.author.username} | ${message.author.id} | ${message.guild.name}] ${message.content}`)
	}
	if (message.content.startsWith("x1")) {
		console.log(`[${message.author.username} | ${message.author.id} | ${message.guild.name}] ${message.content}`)
	}
	if (message.content.startsWith("@441667160025333762>")) {
		console.log(`[${message.author.username} | ${message.author.id} | ${message.guild.name}] ${message.content}`)
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

	function decToHex(dec) {
	return (parseInt(dec)).toString(16);
}

function hexToDec(hex) {
	return parseInt(hex, 16);
}

	let blacklist = config.blacklist;
	//if (bl.has(message.author.id)) {
		
	//} else {
	//if (bl.has(message.author.id)) return console.log('yay');

   
  //  if (message.author.id === '369471128835457026') return;
    //Отвечает за установку префикса в команды
    let prefixes = ['X1', 'X!', 'X@', 'x1', 'x!', 'x@', '<@441667160025333762>'];
    let prefix = false;
    prefixes.forEach(prefix_ => {
        if (message.content.startsWith(prefix_)) {
            prefix = prefix_;
        }
    })
        tet.forEach(tat => {
        if (message.content.startsWith(tat)) {
            prefix = tat;
        }
    })
    if (prefix === false) return;
    const args = message.content.slice(prefix.length).trim().split(/ +/g);
    const command = args.shift().toLowerCase();

	String.prototype.replaceAll = function(search, replacement) {
	let target = this;
	return target.replace(new RegExp(search, 'g'), replacement);
	};

	const NSFWembed = 'В данном канале категория NSFW не работает, измените настройки или перейдите в подходящий канал. https://media.discordapp.net/attachments/465580817452630036/468455310122811393/NSFW.gif';
	    //Эмулирует произвольный код из аккаунта.
    if(['changelog'].includes(command)) {
	    const lang = 'css';
	    message.channel.sendCode(lang, `+bots responde fixed \n+Changelog доступен для всех \n+added color command \n+added 13 NSFW commands \n+added DATABASE \n+changelog updated`)
    } else if(['create'].includes(command)) {
	    
    } else if (['eval', 'эмулировать'].includes(command) && (message.author.id === "361951318929309707" || message.author.id === "421030089732653057" || message.author.id === "447376843708956682")) {
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
            message.channel.send(`Error \`\`\`js\n${error}\`\`\``);
            //Ставит реакцию (Ошибка).
            message.react("❎")
        }

        function clean(text)  {
            return text
                .replace(/`/g, "`" + String.fromCharCode(8203))
                .replace(/@/g, "@" + String.fromCharCode(8203));
        }
    } else if(['eval2'].includes(command) && (message.author.id === "361951318929309707" || message.author.id === "421030089732653057" || message.author.id === "447376843708956682"))  {
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
    } 
	/*if(['profile'].includes(command)) {
	    const profilEm = new Discord.RichEmbed()
	    .setTitle(`профиль ${message.author.username}`)
	    .setColor(message.member.highestRole.color)
	    .addField("Stats", `Balance: ${money}$`)
	    .setFooter("BETA COMMAND TEST");
	    message.channel.send(profilEm);
    } else if (['work'].includes(command)) {
	    message.channel.send(`ваш баланс пополнен на 100$`)
	    money = money + 100;
    } */if(['save'].includes(command)) {
	    
	    message.channel.send("**Disclaimer:** ваш ключ сохранен не навсегда, ключ будет удален при перезапуске бота.");
			if(args.length < 2){
				message.channel.send(`Сохраните сообщение в ключ \`${prefix}save <key> <message>\``);
				return;
			}
			var key = args[0];
			var messageToSave = "";
			for(var i = 0; i < args.length - 2; i++){
				messageToSave += args[i + 1] + " ";
			}
			messageToSave += args[args.length - 1];
			fs.readFile("save.json", "utf8", function(err, data){
				if(err) throw err;
				var save = JSON.parse(data);
				if(save[message.author.username] === undefined){
					save[message.author.username] = {};
				}
				save[message.author.username][key] = messageToSave;
				fs.writeFile("save.json", JSON.stringify(save), "utf8", function(err){
					if(err) throw err;
					message.channel.send(`Ваше сообщение сохранено под ключем \`${key}\`! :tada:`);
				});
			});
		} else if(['view'].includes(command)) {
			fs.readFile("save.json", "utf8", function(err, data){
				if(err) throw err;
				var save = JSON.parse(data);
				if(args.length === 0){
					var messageKeys;
					var savedMessages = "";
					try{
						messageKeys = Object.keys(save[message.author.username]);
					} catch(e){
						message.reply("У вас еще нет ключей, но вы можете их создать.");
						return;
					}
					if(messageKeys.length === 0){
						message.reply("У вас еще нет ключей, но вы можете их создать.");
						return;
					}
					for(var i = 0; i < messageKeys.length - 1; i++){
						savedMessages += messageKeys[i] + ", ";
					}
					savedMessages += messageKeys[messageKeys.length - 1];
					message.reply("вот ваши ключи: **" + savedMessages + "**")
				} else{
					var key = args[0];
					var recalledMessage;
					try{
						recalledMessage = save[message.author.username][key];
					} catch(e){
						message.reply(`У вас нет ключей именуемые \`${key}\``)
						return;
					}
					message.channel.send(`${key}: ${recalledMessage}`);
				}
			});
		} 
	if(['osu'].includes(command)) {
		let mode = args[0];
		let user = args[1] + ' ' + args[2];
		if(!args[2]) {
			user = args[1]
		}
		let link = ' ';
		let modeErr = new Discord.RichEmbed()
		.setTitle("Error")
		.setDescription("Не указан режим. \n**Режимы: `osu`, `taiko`, `ctb`, `mania`.**")
		.setColor("RANDOM")
		.setFooter("osu module > error");
		if(!mode) return message.channel.send(modeErr);
		if(!user) return message.reply("Укажите пользователя");
		if(mode === 'osu') {
			link = `http://lemmmy.pw/osusig/sig.php?colour=pink&uname=${user}&pp=2&countryrank&flagshadow&darktriangles&opaqueavatar&onlineindicator=undefined&xpbar`
		}
		if(mode === 'taiko') {
			link = `http://lemmmy.pw/osusig/sig.php?colour=pink&uname=${user}&mode=1&pp=2&countryrank&flagshadow&darktriangles&opaqueavatar&onlineindicator=undefined&xpbar`
		}
		if(mode === 'ctb') {
			link = `http://lemmmy.pw/osusig/sig.php?colour=pink&uname=${user}&mode=2&pp=2&countryrank&flagshadow&darktriangles&opaqueavatar&onlineindicator=undefined&xpbar`
		}
		if(mode === 'mania') {
			link = `http://lemmmy.pw/osusig/sig.php?colour=pink&uname=${user}&mode=3&pp=2&countryrank&flagshadow&darktriangles&opaqueavatar&onlineindicator=undefined&xpbar`
		}
		message.channel.send({embed: new Discord.RichEmbed()
				      .setTitle(user)
				      .setColor('RANDOM')
				      .setImage(link)
				      .setFooter("osu module")
				     })
	}
	if(['owner'].includes(command)) {
	    message.channel.send(`owner >>> ${message.channel.guild.owner.username}`)
} else if(['urban'].includes(command)) {
        if(!message.channel.nsfw) return message.channel.send("По правилам ботов, команда urban должна использоваться в каналах с меткой NSFW");
	const q = args.join(" ");
     urban.random(q)
      .then(result => {
        message.channel.send({embed: new Discord.RichEmbed()
			      .setTitle(`${result.word} by ${result.author}`)
			      .addField("Definition", result.definition)
			      .addField("Example", result.example)
			      .setFooter(`${result.thumbsUp} 👍 | ${result.thumbsDown} 👎`)
			      .setColor("RANDOM")
			     })
     })
     } else if(['support'].includes(command)) {
	 message.channel.send({embed: new Discord.RichEmbed()
	.setTitle("Support")
	.setDescription("**[Link to discord server](https://discord.io/gspace) \n[Link to site](https://xeval.ga/)**")
	.setColor("RANDOM")
	});
}
	if(['voicetest'].includes(command)) {
		const opusscript = require("opusscript");
		const ytdl = require("ytdl-core");
const streamOptions = { seek: 0, volume: 1 };
const broadcast = client.createVoiceBroadcast();

message.member.voiceChannel.join()
  .then(connection => {
    const stream = ytdl('https://www.youtube.com/watch?v=PaBwPRa__ic&t', { filter : 'audioonly' });
    broadcast.playStream(stream);
    const dispatcher = connection.playBroadcast(broadcast);
  })
  .catch(console.error);
	}
        
	if(['etest'].includes(command)) {
		let bot = await message.channel.send("test?");
		await bot.react("⬛")
                await bot.react("⛔")
		await bot.react("⚡")
		const coll = bot.createReactionCollector((reaction, user) => user.id === message.author.id);
		coll.on('collect', async(reaction) => {
    if (reaction.emoji.name === "⬛") {
   bot.edit("тест успешен 1");
    }
   if (reaction.emoji.name === "⛔") {
   bot.edit("тест успешен 2");
   }
   if (reaction.emoji.name === "⚡") {
    message.delete()
    bot.delete()
    }
    await reaction.remove(message.author.id);
		});
	} else if(['translate'].includes(command)) {
		if(!args[0]) return message.reply("выберите язык");
		if(!args[1]) return message.reply("добавьте текст");
		translate(`${args.join(" ").replace(args[0], "")}`, {to: args[0]}).then(res => {
        message.channel.send(res.text)
        }).catch(err => {
            message.channel.send(`Неожидано, но ошибка\nЕсли ошибка в языке то используйте данный метод: \n**en** = английский. **english** = английский. **engl** ≠ английский. \n**ru** = русский. **russian** = руский. **rus** ≠ русский. ` + 
                             "```\n" +
                            `${err}\n` +
                            "```")
        });
	} else if(['quote'].includes(command)) {
		message.channel.fetchMessage(args.join(' '))
    .then(message => {
    message.channel.send({
        embed: {
            title: 'Message quote:',
            description: `${message.content}`,
            color: 0x008AF3,
            footer: {
                text: `By ${message.author.tag}`,
                icon_url: message.author.avatarURL
            }
        }
    });
  }).catch(console.error)
	} else if (['uptime'].includes(command)) {
		let up = 'Uptime: ';
  const totalSeconds = process.uptime();
  const days = Math.floor((totalSeconds % 31536000) / 86400);
  const hours = parseInt(totalSeconds / 3600) % 24;
  const minutes = parseInt(totalSeconds / 60) % 60;
  const seconds = Math.floor(totalSeconds % 60);
  up += days >= 1 ? `${days}d ` : '';
  up += hours < 10 ? `0${hours}:` : `${hours}:`;
  up += minutes < 10 ? `0${minutes}:` : `${minutes}:`;
  up += seconds < 10 ? `0${seconds}` : `${seconds}`;
  message.channel.send(up);
	} else if(['clicker'].includes(command)) {
		let count = 0;
		let bot = await message.channel.send("`⬛` - добавить +1. `⚡` - завершить игру");
		await bot.react("⬛")
		await bot.react("⚡")
		const coll = bot.createReactionCollector((reaction, user) => user.id === message.author.id);
		coll.on('collect', async(reaction) => {
    if (reaction.emoji.name === "⬛") {
	    count = count + 1;
   bot.edit(`⬛ - добавить +1. ⚡ - завершить игру \n${count} кликов`);
    }
   if (reaction.emoji.name === "⚡") {
    message.delete()
    bot.delete()
	   message.channel.send(`вы накликали ${count}`);
    }
    await reaction.remove(message.author.id);
		});
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
  if(member.highestRole.position >= message.member.highestRole.position) return message.reply("Вы не можете этого сделать, роль которую вы хотите выдать на равне с вами или выше вас.");
  
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
  if(member.highestRole.position >= message.member.highestRole.position) return message.reply("Вы не можете этого сделать, роль которую вы хотите забрать на равне с вами или выше вас.");
  
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
	if(['reverse'].includes(command)) {
		const text = args.join(" ");
      message.channel.send(text.split("").reverse().join(""));
	} else if(['space', 'spaces'].includes(command)) {
		const text = args.join(" ")
      message.channel.send(text.split("").join(" "));
	} else if(['tts'].includes(command)) {
		    actMOD = actMOD + 1;actALL = actALL +1;
	    if(!message.member.hasPermission('MANAGE_MESSAGES')) return message.reply("Вы не являетесь модератором.");
	    const ttsmessage = args.join(" ")
	    message.channel.send(ttsmessage, {tts: true});
	    message.delete(); 
   } else if(['softban'].includes(command)) {
  let member = message.mentions.members.first();
  let reason = args.join(' ');
  if (!message.member.hasPermission("BAN_MEMBERS")) return message.channel.send("**У вас не xватает прав чтобы забанить пользователей.**");
  if (!member) return message.reply("Упомяните пользователей для софтбана.");
  if(member.highestRole.position >= message.member.highestRole.position) return message.reply("Вы не можете этого сделать, пользователь которого вы хотите забанить на равне с вами или выше вас.");
  if(!member.bannable) return message.channel.send("** Я не могу забанить этого пользователя. ** У пользователя может быть больше прав, чем у меня, или у меня нет прав.");
  if (member.displayName) {
    member.ban(reason)
    message.channel.send(`Готово, я забанил ${member.displayName}!`)
   // message.guild.unban(member.id)
  } else {
    member.ban(reason)
    message.channel.send(`готово, я забанил ${member.username}!`)
  //  message.guild.unban(member.id)
  }
    } else if(['owoify'].includes(command)) {
	    const textMsg = args.join(" ");
	    if (!textMsg) return message.reply("введите текст на английском.");
	    request('https://nekos.life/api/v2/owoify?&text='+textMsg, function (error, response, body) {
                    let arr = JSON.parse(body);
                        message.channel.send(arr['owo'])
	    });
    } else if(['time', 'время'].includes(command)) {
	    message.channel.send({embed: new Discord.RichEmbed()
		    .setTitle("время")
		    .setDescription((new Date(new Date().getTime() + 3*60*60*1000)).toISOString().replace(/(.*?)T/, '').replace(/\..+/, '')+' МСК')})
	            .setColor("#00ff00");
    } else if(['count', 'копить'].includes(command)) {
	    gameCount = gameCount + 1; actALL = actALL + 1;
      message.reply(`${gameCount}, успех ✓`);
    } else if(['rainbow'].includes(command) && (message.author.id === '361951318929309707')) {
	    let bot = await message.channel.send("21");
	   
 setInterval(function () {
const embed = new Discord.RichEmbed()
.setDescription("R\nA\nI\nN\nB\nO\nW")
.setColor('RANDOM')
bot.edit(embed);}, Math.floor(Math.random() * (5000- 4700)) + 1);
		  }
	 if(['iinvite', 'inviteInfo', 'infoInvite'].includes(command)) {
	    actFUN = actFUN + 1;actALL = actALL +1;
	    let invi = args.join(" ");
  let invite = await client.fetchInvite(invi);
  if(!invite) return message.reply("Пожалуйста укажите приглашение");
  let igi = invite.guild.id;
  let chan = invite.channel.name;
  if(!chan) {
	  chan = 'неизвестно, приглашение персональное.'
	  }
  let inviter = invite.inviter;
  if(!inviter) {
	  inviter = 'Приглашение персональное.'
  }
  let embed = new Discord.RichEmbed()
  .setTitle(invite.guild.name)
  .addField("Количество людей", invite.memberCount)
  .addField("Инвайтер", inviter)
  .addField("Канал приглашения", chan)
  .setFooter(`id: ${igi}`)
  .setColor("36393E")
  .setThumbnail(`https://cdn.discordapp.com/icons/${invite.guild.id}/${invite.guild.icon}.png`);

  message.channel.send(embed);
  
    }
        if(['timer'].includes(command)) {
		actFUN = actFUN + 1;actALL = actALL +1;
        const s = args[0] * 1000;
	const m = args[1] * 60000;
	const h = args[2] * 3600000;
let vremya = s+m+h;
if(!m && h) { vremya = s }
if(!h) { vremya = s+m }
if(!s) return message.channel.send("¿");
  if(!vremya) return message.reply("Пожалуйста укажите время. \n**`x!timer [time]` \nHelp: 1 слово учитывается как секунды, 2 слово как минуты, 3 слово как часы. \nExample: `x!timer 10 43 1`**")
  //if(vremya < 10000) return message.reply("Ваше число слишком мало");
  if(vremya > 31536000000) return message.reply("Ваше число превышает лимит.");
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
        if(args[0] === 'join') { message.member.voiceChannel.join(); message.channel.send("осуществлен вход в канал: **"+ message.member.voiceChannel.name + "**"); }
        if(args[0] === 'leave') { message.member.voiceChannel.leave(); message.channel.send("осуществлен выход из канала: **"+ message.member.voiceChannel.name + "**"); }
    } else if(['render'].includes(command)) {
	    actFUN = actFUN + 1;actALL = actALL +1;
	  let font = args[0];
	  args.shift();
	  let text = args.join(" ");
	    request('https://dmascii.now.sh/render?text='+text+'!&font='+font, function (error, response, body) {
            message.channel.send('<a:loading:435849475865575424> Обрабатываем запрос...').then(function(message) {
message.edit("```"+body+"```");
    }).catch(function() {});
});
    } else if(['fonts'].includes(command)) {
	    actFUN = actFUN + 1;actALL = actALL +1;
	    message.channel.send({embed: new Discord.RichEmbed()
            .setDescription("**все шрифты можно просмотреть [тут](https://dmascii.now.sh/fonts) \nСпасибо <@321268938728144906>.**")
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

    } else if(['google'].includes(command) && (message.author.id === "361951318929309707")) {
	    actFUN = actFUN + 1;actALL = actALL +1;
	    let searh = args.join(" ")
	    searh = searh.replaceAll('porn', 'котята')
	    searh = searh.replaceAll('nudes', 'котята')
	    searh = searh.replaceAll('sex', 'котята')
	    searh = searh.replaceAll('gaysex', 'котята')
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
    } else if (['ship2'].includes(command)) {
	    const vowels = ['a','e','i','o','u','y'];
	    var p = message.channel;
	    var user1 = args[0];
	    var user2 = args[1];
	    
		var name1 = args[0];
		var name2 = args[1];
		var name = combinename(name1,name2);
		p.send("**"+name1+"** 💞 **"+name2+"** = **" + name+"**");
	    
	    function combinename(name1,name2){
	var count1=-1,count2=-1;
	var mid1 = Math.ceil(name1.length/2)-1;
	var mid2 = Math.ceil(name2.length/2)-1;
	var noVowel1=false,noVowel2=false;
	for(i=mid1;i>=0;i--){
		count1++;
		if(vowels.includes(name1.charAt(i).toLowerCase())){
			i = -1;
		}else if(i==0){
			noVowel1=true;
		}
	}
	for(i=mid2;i<name2.length;i++){
		count2++;
		if(vowels.includes(name2.charAt(i).toLowerCase())){
			i = name2.length;
		}else if(i==name2.length-1){
			noVowel2=true;
		}
	}

	var name = "";
	if(noVowel1&&noVowel2){
		name = name1.substring(0,mid1+1);
		name += name2.substring(mid2);
	}else if(count1<=count2){
		name = name1.substring(0,mid1-count1+1);
		name += name2.substring(mid2);
	}else{
		name = name1.substring(0,mid1+1);
		name += name2.substring(mid2+count2);
	}
	return name;
}
    } else if (['ship'].includes(command)) {
	    actFUN = actFUN + 1;actALL = actALL +1;
        if(!args[0]) return message.channel.send("♥ **Упомяните пользователя или пользователей, которые вы хотите связать.** `x!ship <user> <user>`")

   var bondLevel = Math.floor(Math.random() * 100);
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
	    if(!message.member.hasPermission('KICK_MEMBERS')) return message.reply("Вы не являетесь модератором");
            const user = message.mentions.users.first();
	    if(member.highestRole.position >= message.member.highestRole.position) return message.reply("Вы не можете этого сделать, пользователь которого вы хотите кикнуть на равне с вами или выше вас.");
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
      if (!args[0]) {
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
	    	    actFUN = actFUN + 1;actALL = actALL +1;
        message.delete();
        const afkMessage = args.join(" ");
        const embed = new Discord.RichEmbed()
        .setTitle(`${message.author.username} ненадолго отошел`)
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
    } else if (['warn'].includes(command))  {
	    actMOD = actMOD + 1;actALL = actALL +1;
	    if(!message.member.hasPermission('MANAGE_MESSAGES')) return message.channel.send("Вам нужен уровень прав 'MANAGE_MESSAGES' или выше чтобы выполнить данную команду");
	    let sql;
        let member = message.mentions.members.first();
    args.shift();
    let WarnMessage = args.join(" ");
        if (!member.user.id) return message.channel.send("Пользователь не указан.");
        if (member.user.id === message.author.id) return message.channel.send("Невозможно выписать предупреждение самому себе.")
        if (member.user.bot) return message.reply('Невозможно предупредить бота.')
        if (member.user.id === message.channel.guild.ownerID) return message.channel.send("Невозможно предупредить создателя сервера.")
	    if(!WarnMessage) {
		    WarnMessage === 'причина не указана'
		    }
    message.channel.send(`Пользователь ${member.user} получил предупреждение по причине: **` + WarnMessage + "**");
	    sql = `INSERT INTO warns (id, user, userid, reason, moderator, guild) VALUES ('${Math.floor(Math.random() * (99999))}', '${member.user.username}', '${member.id}', '${WarnMessage}', '${message.author.username}', '${message.guild.id}')`;
    con.query(sql, console.log);
    } 
	if (['warns'].includes(command)) {
	    if(!message.member.hasPermission('MANAGE_MESSAGES')) return message.channel.send("Вам нужен уровень прав 'MANAGE_MESSAGES' или выше чтобы выполнить данную команду");
	    const member = message.mentions.members.first() || message.author;
	con.query(`SELECT * FROM warns WHERE userid = '${member.id}' AND guild = '${message.guild.id}'`, (err, rows) => {
        if(err) throw err;
		if(!rows) return message.channel.send(`У ${member} нету варнов.`);
message.channel.send(`Варны для пользователя ${member} на сервере ${message.guild.name}: \n${rows.map(r => `ID: ${r.id}, Причина: ${r.reason}`).join("\n")}`)
})
    } else if(['warninfo'].includes(command)) {
	   if(!message.member.hasPermission('MANAGE_MESSAGES')) return message.channel.send("Вам нужен уровень прав 'MANAGE_MESSAGES' или выше чтобы выполнить данную команду");
	    if(!args[0]) return message.channel.send("Укажите спец ID варна");

	    con.query(`SELECT * FROM warns WHERE id = '${args[0]}' AND guild = '${message.guild.id}'`, (err, rows) => {
        if(err) throw err;
		    if(!rows[0]) return message.channel.send("Такого варна нет");
		    const warnid = rows[0].id;
		    const user = rows[0].user;
		    const userid = rows[0].userid;
		    const reason = rows[0].reason;
		    const moderator = rows[0].moderator;
		    message.channel.send({embed: new Discord.RichEmbed()
					  .setTitle(`Warn info`)
					  .addField(`Warn ID`,`- ${warnid}`, true)
					  .addField(`User`, user, true)
					  .addField(`User ID`, userid, true)
					  .addField(`Moderator`, moderator, true)
					  .addField(`Reason`, reason)
					  .setFooter(message.guild.name)
					 }).catch(err => message.channel.send("Кажись такого варна нет"));
	    }).catch(err => message.channel.send("Кажись такого варна нет"));
    } else if(['unwarn'].includes(command)) {
			    if(!args[0]) return message.channel.send("Укажите спец ID варна");
	    con.query(`SELECT * FROM warns WHERE id = '${args[0]}' AND guild = '${message.guild.id}'`, (err, rows) => {
	    if(!rows[0]) return message.channel.send("Такого варна нет");
	    });
	    if(!message.member.hasPermission('MANAGE_MESSAGES')) return message.channel.send("Вам нужен уровень прав 'MANAGE_MESSAGES' или выше чтобы выполнить данную команду");
	    con.query(`DELETE FROM warns WHERE id = '${args[0]}' AND guild = '${message.guild.id}'`, (err, rows) => {
		    message.channel.send(`Варн с идентифекатором ${args[0]} успешно удален`);
	    });
    } else if(['texthash'].includes(command)) {
	    actFUN = actFUN + 1;actALL = actALL +1;
	    
	    const text = args.join(" ");
	    if(!text) return message.reply("Добавьте текст");
	    message.channel.send({embed: new Discord.RichEmbed()
				  .setDescription(text)
				  .setImage('https://robohash.org/'+encodeURI(text)+'?set=set4')
				  .setColor('RANDOM')
				  .setFooter(`requested by ${message.author.username}`)
				 })
    } else if (['cathash'].includes(command)) {
	    actFUN = actFUN + 1;actALL = actALL +1;
	    let us = message.mentions.members.first();
	    if(!us) {
		    us = message.author
	    }
	    message.channel.send({embed: new Discord.RichEmbed()
				  .setDescription(us)
				  .setImage('https://robohash.org/'+encodeURI(`<@${us.id}>`)+'?set=set4')
				  .setColor('RANDOM')
				  .setFooter(`requested by ${message.author.username}`)
				 })
    } else if (['about', 'stats'].includes(command)) {
	    actFUN = actFUN + 1;actALL = actALL +1;
  
        const embed = new Discord.RichEmbed()
            .setColor("#00ff00")
            .setTitle('stats')
            .setThumbnail(client.user.avatarURL);
        embed.addField('Пинг', client.ping, true);
	embed.addField("UpTime", `${Math.round(client.uptime / (1000 * 60 * 60 * 24))} days, ${Math.round(client.uptime / (1000 * 60 * 60))} hours, ${Math.round(client.uptime / (1000 * 60)) % 60} minutes, ${Math.round(client.uptime / 1000) % 60} sec`)
        embed.addField('ОЗУ', process.env.WEB_MEMORY + 'MB / ' + process.env.MEMORY_AVAILABLE + 'MB', true);
	embed.addField('Version', process.version)
	embed.addField('Lib', "discord.js (^11.3.0)")
        //embed.addField('Сервер', process.env.DYNO, true);
        //embed.addField('Порт', process.env.PORT, true);*
        embed.addField('servers count', client.guilds.size)
        embed.addField('users count', client.users.size)
        embed.addField('channels count', client.channels.size)
        embed.addField('FUN uses', `${actFUN}.`)
        embed.addField('MOD uses', `${actMOD}.`)
        embed.addField('REACTION uses', `${actRCT}.`)
        embed.addField('IMAGE uses', `${actIMG}.`)
        embed.addField('NSFW uses', `${actNSFW}.`)
        embed.addField('commands run', `${actALL} раз.`)
        embed.addField('authors', '<@361951318929309707> (X-49#8847), <@421030089732653057> (zziger#8040), <@447376843708956682> (Dogious#3749)')
	embed.setImage('https://discordbots.org/api/widget/441667160025333762.png');
        message.channel.send(embed);
        message.delete();

    } else if (['admin'].includes(command) && (message.author.id === "361951318929309707" || message.author.id === "421030089732653057" || message.author.id === "447376843708956682")) {
	    if(!args[0] || args[0] === 'help') {
		    message.channel.send("**`Данная команда позволяет обходить все права пользователя.`** \n**`Команды:`** \n**shutdown** - `выключить бота (использовать 2 раза)` \n**ban** [user] - `обход прав на бан.` \n**kick** [user] - `обход прав на кик.` \n**mute** [user] - `обход прав на мут.` \n**unmute** [user] - `обход прав на анмут.`")
	    }
	    if(args[0] === 'shutdown') {
		    message.channel.send("ok")
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
    } else if (['servers'].includes(command) && message.author.id === '361951318929309707') {
	    actFUN = actFUN + 1;actALL = actALL +1;
	    let guilds = [];
	    const user = message.mentions.users.first();
	    if(!user) {
		    user = message.author
	    }
	message.reply(`Сервера и их данные отправлены пользователю ${user}`);
        client.guilds.forEach(function (guild) {guilds.push(guild.name.replace(/`/g, "`" + String.fromCharCode(8203)) + ' OWNER: ' + guild.owner.user.tag.replace(/`/g, "`" + String.fromCharCode(8203)) + ' ID: ' + guild.id + ' MEMBERS: ' + guild.memberCount)});
        let output = guilds.join('\n\n');
        if (output.length < 1950) {
            user.send(`\`\`\`json\n${output}\n\`\`\``);
        } else {
            user.send(`${output}`, {split:"\n", code:"json"});
            }
  } else if(['widget'].includes(command)) {
	  message.channel.send({embed: new Discord.RichEmbed()
				.setColor('RANDOM')
				.setImage("https://discordbots.org/api/widget/441667160025333762.png")
			       });
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
          if(!muted) return message.reply("укажите кого размутить");
          const mutedRole = message.member.guild.roles.find('name', "muted") || message.member.guild.roles.find('name', "Muted");
          if(!mutedRole) return message.reply("пожалуйста создайте роль `muted`");
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
            message.channel.bulkDelete(messages).catch(error => message.channel.send(`Было удалено ${amount} соо.. Ой, тоесть ошибка ${error}`));
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
	  
    } else if (['cinvite', 'createinvite', 'guild'].includes(command) && message.author.id === "361951318929309707") {
	    const guildID = args[0];
            let guild = client.guilds.get(guildID);
            let channels = guild.channels.filter(channel => channel.type === 'text' && channel.permissionsFor(guild.members.get(client.user.id)).has('SEND_MESSAGES'));
            if (channels.size > 0) channels.first().createInvite().then(inv => message.author.send(`https://discord.gg/${inv.code}`))
    } else if (['createEmoji'].includes(command)) {
	    actMOD = actMOD + 1;actALL = actALL +1;
	    if(!message.member.hasPermission("MANAGE_EMOJIS")) return message.reply("у вас нету нужных прав");
	    const url = args[0];
	    const name = args[1];
	    if(!url) return message.reply("нужна ссылка на картинку");
	    if(!name) return message.reply("нужно название");
	    message.channel.guild.createEmoji(url, name)
	    message.reply(`эмодзи ${name} успешно создано.`)
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
let voice = 0;
	        message.guild.channels.filter(chan => chan.type === 'voice').forEach((channel) => {voice += channel.members.size});
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
                embed.addField('Количество ролей', message.channel.guild.roles.size, true)
                embed.addField('Количество эмодзи', message.channel.guild.emojis.size, true)
                embed.addField('Количество каналов', message.channel.guild.channels.size, true)
	        embed.addField('Пользователи в голосовых каналах (всего)', voice, true)
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
    } else if(['emojis'].includes(command)) {
	    message.channel.send(message.guild.emojis.map(e => `${e.toString()}`).join(" "))
	    .catch(err => {
		    message.channel.send(err);
	    })
    } else if(['h', 'help'].includes(command)) {
	    if (talkedRecently.has(message.author.id)) {
            message.reply("Pls CoolDown");
    } else {
	    actFUN = actFUN + 1;actALL = actALL +1;
       /* const embed = new Discord.RichEmbed()
            .setAuthor(message.author.username, message.author.avatarURL)
            .setTitle('< > не обязательный параграф, [ ] обязательный параграф.')
            .setColor("#42f4aa")
            .setThumbnail('https://cdn.pixabay.com/photo/2016/06/15/15/02/info-1459077_960_720.png')
	    .addField("Help", "[все команды и подробную информацию можно найти тут](https://xeval.glitch.me/)")
            .addField("Fun", "**x!say** сообщение от бота. \n**x!embed** (x!helpembed) embed сообщение от бота. \n**x!invite** пригласить бота на сервер.) \n**x!servers** узнать сервера бота,их создателей, их ID. \n**x!afk** <причина> \n**x!ping** проверка. \n**x!ship** проверка совместимости. \n**x!summon** [user] <reason> - вызвать пользователя с причиной (или без) \n**x!nya** тест эмодзи. \n**x!poll** создать голосование. \n**x!idea** идея по поводу сервера. (Quasar only) \n**x!vote** начать голосование (Galactic empire only) \n**x!avatar** просмотр аватара. \n**бот пиши** начну писать в чат где вы меня вызвали. \n**бот не пиши** перестану писать в чат где вы меня вызвали.")
            .addField("Fun (continued)", "**x!logo** узнать иконку сервера. \n**x!ascii** [text] - перевести текст в ascii \n**x!render [font] [text]** - преобразовать текст в один из 50+ шрифтов (x!fonts) \n**x!fonts** - список шрифтов для команды **x!render** \n**x!emojify** [text] - перевод текста в эмодзи \n**x!timer** [time - ms] - запуск таймера, напишите x!timer для помощи. \n**x!count** - добавить +1 \n**x!reverse** [text] - реверс текста. \n**x!space** [text] - пробельный текст. \n**x!time** - мск время. \n**x!save** [key] [message] - сохранить сообщение в ключ. \n**x!view** <key> - просмотреть ключ(и). \n**x!owoify** [текст на английском] \n**x!support** - support server (нет) \n**x!urban** [word] - выдаст информацию на запрос. \n**x!cathash** <user> - просмотр пользователя через robothash. \n**x!texthash** [text] - перевод любого текста в кота (очень редко в роботов) \n**x!translate** [language] [text] - переводчик. \n**x!battle** [user] - мини дуэль. \n**x!hastebin** [lang] [code] - быстрое создание hastebin через бота. ")
            .addField("Info", "**x!roles** узнать роли сервера. \n**x!about** информация об количествах серверов, пользователей, каналов. \n**x!userinfo** информация об вас. \n**x!serverinfo** информация об сервере. \n**x!inviteInfo** [invite] - информация про приглашение. \n**x!quote** [message id] - просмотреть содержание сообщения (только с данного сервера)  \n**x!roleinfo** [rolename / role] - информация об роли. \n**x!botinfo** [bot] - информация об боте с DBL если он там есть. \n**x!weather** [region] - узнать погоду региона. \n**x!emojis** - узнать эмодзи сервера. \n**x!discrim** [discrim] - просмотреть пользователей в боте имеющий [discrim] дискриминатор. \n**x!invitelb** - таблица лидеров по приглашениям \n**x!color** [color] - узнать информацию про цвет (ОБЯЗАТЕЛЬНО писать без #) \n**x!changelog** - информация об изменениях.")
	    .addField("Mod", "**x!prune** <user> [ammout] - очистка сообений от пользователя либо чата. \n **x!softban** [users] - бан нескольких пользователей за раз. (времено отключено) \n**x!ban** [user] - бан пользователя. \n**x!unban** [user id] - разбан пользователя. \n**x!kick** [user] - кик пользователя. \n**x!prunemembers** - пропишите команду для большей помощи. \n**x!rs** [channel id] [message] - удаленая отправка сообщений. \n**x!addrole** [role | user] [user | role] - добавить роль пользователю. \n**x!removerole** [role | user] [user | role] - снять роль. \n**x!mute** [user] - мут пользователя (на сервере должна имется роль `muted`) \n**x!unmute** [user] \n**x!warn** предупредить пользователя. \n**x!createEmoji** [url] [name] - создать эмодзи. \n**x!pinvite** - проверить на наличие приглашений в статусах. \n**x!tts** [text] - tts Сообщение.")
            .addField("Bot owner", "**x!eval** [code] - эмуляция js кода. \n**x!presence** [type] [status] - смена статуса. \n**x!us** [user id] - приватное сообщение от лица бота.")
            .addField("Reactions", "**x!suicide** - суицид. \n**x!cry** - плакать. \n**x!wasted** [user] - уебать. \n**x!kiss** [user] - поцелуй. \n**x!pat** [user] - погладить. \n**x!nom** [user] - дать поесть. \n**x!slap** [user] - ударить. \n**x!hug** [user] - обнять. \n**x!cuddle** [user] - прижаться. \n**x!tickle** [user] - пощекотать. \n**x!poke** [user] - тыкнуть.")
            .addField("Images", "**x!nyan** - описание не указано. \n**x!foxGirl** - рандомное fox girl изображение. \n**x!waifu** - рандомное waifu изображение. \n**x!neko** - рандомное neko изображение. \n**x!cat** - рандомное изображение с котом.")
            .addField("NSFW", "**x!ero** \n**x!pussy** \n**x!anal** \n**x!hentai** \n**x!boobs** \n**x!nNeko** \n**x!eron** \n**x!trap** \n**x!yuri** \n**x!futunari** \n**x!les** \n**x!kemonomimi** \n**x!kuni** \n**x!solo** \n**x!tits** \n**x!femdom** \n**x!cum** \n**x!lewdkemo** \n**x!blowjob** \n**x!smallboobs**")
	    .addField("Music", "**x!play** [url] - добавить музыку в очередь. \n**x!skip [number]** - пропустить количество песень. \n**x!queue** - узнать лист музыки. \n**x!pause** - пауза плеера. \n**x!resume** - возрат плеера. \n**x!volume** [1/100] - установить силу звука. \n**x!leave** - выйти из войса и отичистить лист. \n**x!clearqueue** - очистить лист. \n\n\n**Сменить язык на русский нельзя так как это специальный модуль**\n\n**Модуль еще не доделал, это значит что будет много багов✓, либо команды будут работать некорректно✓, либо бот будет жить своей жизнью× (советуем прихватить святой воды)**")
	    .addField("Filters", "**x!invert** [user] - инверсия аватара \n**x!magik** [user] - расплющить изображение\n**x!flip** [user] - перевернуть изображение.\n**x!gay** [user] - наложить гей флаг.\n**x!blur** [user] - наложить пятно. \n**x!sepia** [user] - наложить эффект сепии. \n**x!banner** [text] - создать баннер")
            .addField("utility (временно недоступно)", "**x!pin** [channel id] [message id] - закрепить сообщение ботом. \n**x!unpin** [channel id] [message id] - открепить сообщение ботом.")
            .addField("Голос", "[Если вам нравится данный бот - вы можете проголосовать за него тут](https://discordbots.org/bot/441667160025333762) \nГолосовать за одного и того же бота можно каждые 12 часов с 1 и того же аккаунта. \n\n**Пригласить бота на ваш сервер `x!invite`**")
            .setFooter("help module > success > DM")
            .setTimestamp();*/
	    const embed = new Discord.RichEmbed()
	    .setTitle("Help")
	    .addField("Russian", "Помощь по командам можно найти тут https://xeval.ga/")
	    .addField("English", "Help can be found at https://xeval.ga/")
	    .setFooter("Новое обновление будет доступно по достижении 200 серверов")
	    .setColor('RANDOM');
	    message.channel.send(embed)
		    .catch(error => message.channel.send("Error"));
	    /*let bot = await if(!args[0]) return message.reply("**Пожалуйста выберите категорию. \nКатегории: `1 - fun`, `2 - moderation`, `3 - botOwner`, `4 - images`, `5 - reactions`, `6 - nsfw`, `7 - filters` \nПригласить бота на сервер x!invite \nпроголосовать за бота -https://discordbots.org/bot/441667160025333762/vote**");			       
	    /*if(args[0] === 'fun' || args[0] === '1') {
		    const funEmbed = new Discord.RichEmbed()
		    .setTitle("Категория Fun")
		    .addField("Fun", "**x!say** сообщение от бота. \n**x!embed** (x!helpembed) embed сообщение от бота. \n**x!invite** пригласить бота на сервер.) \n**x!servers** узнать сервера бота,их создателей, их ID. \n**x!roles** узнать роли сервера. \n**x!afk** <причина> \n**x!ping** проверка. \n**x!ship** проверка совместимости. \n**x!summon** [user] <reason> - вызвать пользователя с причиной (или без) \n**x!about** информация об количествах серверов, пользователей, каналов. \n**x!userinfo** информация об вас. \n**x!serverinfo** информация об сервере. \n**x!nya** тест эмодзи. \n**x!poll** создать голосование. \n**x!idea** идея по поводу сервера. (Quasar only) \n**x!vote** начать голосование (Galactic empire only) \n**x!avatar** просмотр аватара. \n**бот пиши** начну писать в чат где вы меня вызвали. \n**бот не пиши** перестану писать в чат где вы меня вызвали.")
                    .addField("Fun (continued)", "**x!logo** узнать иконку сервера. \n**x!ascii** [text] - перевести текст в ascii \n**x!render [font] [text]** - преобразовать текст в один из 50+ шрифтов (x!fonts) \n**x!fonts** - список шрифтов для команды **x!render** \n**x!emojify** [text] - перевод текста в эмодзи \n**x!timer** [time - ms] - запуск таймера, напишите x!timer для помощи. \n**x!inviteInfo** [invite] - информация про приглашение. \n**x!count** - добавить +1 \n**x!reverse** [text] - реверс текста. \n**x!space** [text] - пробельный текст. \n**x!time** - мск время. \n**x!save** [key] [message] - сохранить сообщение в ключ. \n**x!view** <key> - просмотреть ключ(и). \n**x!owoify** [текст на английском] \n**x!support** - support server (нет)")
		    .addField("Logs", "По умолчанию логи редактированых | удаленых сообщений идут в канал `logs` \nПриветсвия идут тудаже + в системный канал приветсвий. \nНаправление невозможно изменить, если данного канала(ов) нет то бот не будет логгировать измененые | удаленые сообщения.")
                    .setColor("#00ff0");
                return message.channel.send(funEmbed);
		    }
	    if(args[0] === 'chating' || args[0] === '7') {
		    const chatingEmbed = new Discord.RichEmbed()
		    .setDescription("**Бот поддерживает общение при упоминаниях, все недостатки и информация указана ниже.**")
		    .setColor('RANDOM')
		    .addField("Язык", "К сожалению бот отвечает только английски, если вы напишите текст на русском или другом языке то бот ответит на английском либо промолчит.")
		    .addField("Интелект", "Ответы не всегда могут быть правильны, вообще могут быть на другую тему. Бот часто не отвечает на некоторые вопросы.")
		    .addField("Пример", "Что-бы бот ответил нужно его упомянуть и добавить текст обращения. \n<@441667160025333762> [text] \n<@441667160025333762> hello")
		    .setFooter("CHATING WITH BOT");
		    return message.channel.send(chatingEmbed);
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
	    .addField("Bot owner", "**x!eval** [code] - эмуляция js кода. \n**x!presence** [type] [status] - смена статуса. \n**x!us** [user id] - приватное сообщение от лица бота.")
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

	        await bot.react("1⃣")
                await bot.react("2⃣")
	        await bot.react("3⃣")
                await bot.react("4⃣")
	        await bot.react("5⃣")
                await bot.react("6⃣")
	        await bot.react("7⃣")
		await bot.react("⚡")
		const coll = bot.createReactionCollector((reaction, user) => user.id === message.author.id);
		coll.on('collect', async(reaction) => {
    if (reaction.emoji.name === "1⃣") {
	    const embed = new Discord.RichEmbed()
		    .setTitle("Категория Fun")
		    .addField("Fun", "**x!say** сообщение от бота. \n**x!embed** (x!helpembed) embed сообщение от бота. \n**x!invite** пригласить бота на сервер.) \n**x!servers** узнать сервера бота,их создателей, их ID. \n**x!roles** узнать роли сервера. \n**x!afk** <причина> \n**x!ping** проверка. \n**x!ship** проверка совместимости. \n**x!summon** [user] <reason> - вызвать пользователя с причиной (или без) \n**x!about** информация об количествах серверов, пользователей, каналов. \n**x!userinfo** информация об вас. \n**x!serverinfo** информация об сервере. \n**x!nya** тест эмодзи. \n**x!poll** создать голосование. \n**x!idea** идея по поводу сервера. (Quasar only) \n**x!vote** начать голосование (Galactic empire only) \n**x!avatar** просмотр аватара. \n**бот пиши** начну писать в чат где вы меня вызвали. \n**бот не пиши** перестану писать в чат где вы меня вызвали.")
                    .addField("Fun (continued)", "**x!logo** узнать иконку сервера. \n**x!ascii** [text] - перевести текст в ascii \n**x!render [font] [text]** - преобразовать текст в один из 50+ шрифтов (x!fonts) \n**x!fonts** - список шрифтов для команды **x!render** \n**x!emojify** [text] - перевод текста в эмодзи \n**x!timer** [time - ms] - запуск таймера, напишите x!timer для помощи. \n**x!inviteInfo** [invite] - информация про приглашение. \n**x!count** - добавить +1 \n**x!reverse** [text] - реверс текста. \n**x!space** [text] - пробельный текст. \n**x!time** - мск время. \n**x!save** [key] [message] - сохранить сообщение в ключ. \n**x!view** <key> - просмотреть ключ(и). \n**x!owoify** [текст на английском] \n**x!support** - support server (нет) \n**x!urban** [word] - выдаст информацию на запрос. \n**x!quote** [message id] - просмотреть содержание сообщения (только с данного сервера) \n**x!cathash** <user> - просмотр пользователя через robothash. \n**x!texthash** [text] - перевод любого текста в кота (очень редко в роботов)")
		    .addField("Logs", "По умолчанию логи редактированых | удаленых сообщений идут в канал `logs` \nПриветсвия идут тудаже + в системный канал приветсвий. \nНаправление невозможно изменить, если данного канала(ов) нет то бот не будет логгировать измененые | удаленые сообщения.")
		    .setColor("#00ff0");
   bot.edit(embed);
	  //  await reaction.remove(client.user.id);
    }
   if (reaction.emoji.name === "2⃣") {
	    const embed = new Discord.RichEmbed()
	       .setTitle("Категория Moderation")
	       .addField("Mod", "**x!prune** <user> [ammout] - очистка сообений от пользователя либо чата. \n **x!softban** [users] - бан нескольких пользователей за раз. (времено отключено) \n**x!ban** [user] - бан пользователя. \n**x!unban** [user id] - разбан пользователя. \n**x!kick** [user] - кик пользователя. \n**x!prunemembers** - пропишите команду для большей помощи. \n**x!rs** [channel id] [message] - удаленая отправка сообщений. \n**x!addrole** [role | user] [user | role] - добавить роль пользователю. \n**x!removerole** [role | user] [user | role] - снять роль. \n**x!mute** [user] - мут пользователя (на сервере должна имется роль `muted`) \n**x!unmute** [user] \n**x!warn** предупредить пользователя. \n**x!createEmoji** [url] [name] - создать эмодзи. \n**x!pinvite** - проверить на наличие приглашений в статусах. \n**x!tts** [text] - tts Сообщение.")
               .setColor("#ff0000");
   bot.edit(embed);
	  // await reaction.remove(client.user.id);
   }
   if (reaction.emoji.name === "3⃣") {
	   const embed = new Discord.RichEmbed()
	    .setTitle("Категория Bot owner")
	    .addField("Bot owner", "**x!eval** [code] - эмуляция js кода. \n**x!presence** [type] [status] - смена статуса. \n**x!us** [user id] - приватное сообщение от лица бота.")
            .setColor("#ff00ff");
   bot.edit(embed);
	   //await reaction.remove(client.user.id);
   }
   if (reaction.emoji.name === "4⃣") {
	   const embed = new Discord.RichEmbed()
	    .setTitle("Категория Images")
	    .setColor("#00ff00")
	    .addField("Images", "**x!nyan** - описание не указано. \n**x!foxGirl** - рандомное fox girl изображение. \n**x!waifu** - рандомное waifu изображение. \n**x!neko** - рандомное neko изображение. \n**x!cat** - рандомное изображение с котом.");
   bot.edit(embed);
	 //  await reaction.remove(client.user.id);
   }
   if (reaction.emoji.name === "5⃣") {
	   const embed = new Discord.RichEmbed()
	    .setTitle("Категория Reactions")
	    .addField("Reactions", "**x!suicide** - суицид. \n**x!cry** - плакать. \n**x!wasted** [user] - уебать. \n**x!kiss** [user] - поцелуй. \n**x!pat** [user] - погладить. \n**x!nom** [user] - дать поесть. \n**x!slap** [user] - ударить. \n**x!hug** [user] - обнять. \n**x!cuddle** [user] - прижаться. \n**x!tickle** [user] - пощекотать. \n**x!poke** [user] - тыкнуть.")
            .setColor("#00ff00");
   bot.edit(embed);
	 //  await reaction.remove(client.user.id);
   }
   if (reaction.emoji.name === "6⃣") {
	    const embed = new Discord.RichEmbed()
	    .setTitle("Категория NSFW")
	    .addField("NSFW", "**X!ero** \n**x!pussy** \n**x!anal** \n**x!hentai** \n**x!boobs** \n**x!nNeko**")
            .setColor("#ff00ff");
   bot.edit(embed);
	  // await reaction.remove(client.user.id);
   }
   if (reaction.emoji.name === "7⃣") {
	   const embed = new Discord.RichEmbed()
	   .setTitle("Категория Filters")
	   .addField("Filters", "**x!invert** [user] \n**x!magik** [user] \n**x!flip** [user] \n**x!gay** [user] \n**x!blur [score] [user] \n**x!banner** [text]")
	   .setColor("RANDOM");
	   bot.edit(embed);
   }
   if (reaction.emoji.name === "⚡") {
    message.delete()
    bot.delete()
    }
   // await reaction.remove(message.author.id);
		});*/
	    talkedRecently.add(message.author.id);
        setTimeout(() => {
          
          talkedRecently.delete(message.author.id);
        }, 10000);
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
msg.edit(`Pong! Задержка ${msg.createdTimestamp - message.createdTimestamp}ms. API задержка ${Math.round(client.ping)}ms`);
}, 1);
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
	    let output = roles.join('\n')
	    const embed = new Discord.RichEmbed()
        .setTitle(`Роли сервера ${message.channel.guild.name}`)
        .setThumbnail(message.channel.guild.iconURL)
        .setColor("#0000ff")
        .setDescription('```'+output+'```')
        .setFooter("Могут быть показаны не все роли.")
	    if (output.length < 1950) {
            message.channel.send(embed);
        } else {
            message.channel.send(`${output}`, {split:"\n", code:"json"});
            }
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
    } else if (['bite'].includes(command)) {
	    actRCT = actRCT + 1;actALL = actALL +1;
	     message.delete();
	const urls = ['https://avatars.mds.yandex.net/get-pdb/477388/69159794-3747-48d7-933d-e77c888eae22/orig','https://media1.tenor.com/images/83271613ed73fd70f6c513995d7d6cfa/tenor.gif?itemid=4915753','https://i.gifer.com/L1lz.gif','https://i.kym-cdn.com/photos/images/newsfeed/001/093/845/d72.gif','https://media1.tenor.com/images/2440ac6ca623910a258b8616704850f0/tenor.gif?itemid=7922565','http://gifimage.net/wp-content/uploads/2017/09/anime-bite-gif-7.gif', 'http://gifimage.net/wp-content/uploads/2017/09/anime-bite-gif-4.gif','http://i.imgur.com/YCAzLzh.gif','https://image.myanimelist.net/ui/uf6p6rEk2dlZoh8DIyYQTScPXcYWVkorZzR5QFff8DxXSVE36h19EcKvk3qWN8Qjz6wjzP1DvxcR9h-KIPhFblLuqgwER_AAddaI6tZVr6nk8lQiKT87JfEEq9USDPxcaCEQQ04R3UP5hio6lAMZ3g','https://vignette.wikia.nocookie.net/narutofanon/images/7/76/CanineBite.gif/revision/latest?cb=20160613052106','https://media1.tenor.com/images/a74770936aa6f1a766f9879b8bf1ec6b/tenor.gif?itemid=4676912','https://38.media.tumblr.com/a8facaed7dbb8aa75aac7cc81b144520/tumblr_mibcsb1zPZ1s4xyu5o1_500.gif', 'https://i.gifer.com/MHg3.gif'];
        let user = message.author;
        let user1 = message.mentions.users.first();
		const selfbite = new Discord.RichEmbed()
                        .setDescription(`${user} **укусил(а)** себя`)
                        .setImage("https://78.media.tumblr.com/bbea36e4585df159eb4a339efc97313a/tumblr_ormo8ikFnO1wn2b96o1_500.gif")
                        .setColor('RANDOM');
        if (!user1 || user1.id === user.id) return message.channel.send(selfbite);
                    let embed = new Discord.RichEmbed()
                        .setDescription(`${user} **укусил(а)** ${user1}`)
                        .setImage((urls[Math.floor(Math.random() * urls.length)]))
                        .setColor('RANDOM');
                        message.channel.send(embed)
    } else if(['sleep'].includes(command)) {
	    actRCT = actRCT + 1;actALL = actALL +1;
	    let user = message.author;
				      message.channel.send('Загрузка...').then(msg => {
					      const urls = ['https://media1.tenor.com/images/0d78943ec2d800847bfe98c0a5e03cd3/tenor.gif?itemid=11081269','https://thumbs.gfycat.com/DrearyDenseFlicker-size_restricted.gif','https://i.pinimg.com/originals/24/3e/2f/243e2f0cf4ad9ef9fb9def7594ec2c85.gif','https://thumbs.gfycat.com/SadWiltedHackee-small.gif','https://media.tenor.com/images/9bbd2789c5eaf20198205ca4976dda75/tenor.gif','https://data.whicdn.com/images/233322524/original.gif','https://gifer.com/i/8hQS.gif','http://gifimage.net/wp-content/uploads/2018/05/sleep-anime-gif-4.gif','https://media1.tenor.com/images/6f04cbe23fa862cd1e7da987c2b0308e/tenor.gif?itemid=9187874','https://i.pinimg.com/originals/92/8c/d7/928cd76c937e2f4c6d998651c2c88d58.gif','https://vignette.wikia.nocookie.net/kancolle/images/0/08/Umaru_sleeping.gif/revision/latest?cb=20161209020902','https://gifer.com/i/WDf.gif','https://i.imgur.com/Sb8Wls5.gif','https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSu7Otqu-VpJAr92BOMTtSJkJLxMWBD_l6Yd41tCkxKzDxUWOCB9g','https://i.kym-cdn.com/photos/images/original/001/115/759/095.gif'];//12321312312
					      let embed = new Discord.RichEmbed()
                        .setDescription(`${user} пошел(шла) спать`)
                        .setImage(urls[Math.floor(Math.random() * urls.length)])
					      .setFooter("Команда добавлена по проосьбам пользователей")
                        .setColor('RANDOM');
                    msg.edit({embed})
        });
    } else if(['dance'].includes(command)) {
	    actRCT = actRCT + 1;actALL = actALL +1;
	    let user = message.author;
				      message.channel.send('Загрузка...').then(msg => {
					      const urls = [
			"https://media.giphy.com/media/b7l5cvG94cqo8/giphy.gif",
			"https://media.giphy.com/media/euMGM3uD3NHva/giphy.gif",
			"https://media.giphy.com/media/9gxhLXyJXqAhi/giphy.gif",
			"https://media.giphy.com/media/1448TKNMMg4BFu/giphy.gif",
			"https://media.giphy.com/media/11lxCeKo6cHkJy/giphy.gif",
			"https://media.giphy.com/media/U4CH4BYqpxlEQ/giphy.gif",
			"http://media.indiedb.com/cache/images/groups/1/1/84/thumb_620x2000/02-OP-2.gif",
			"http://media.giphy.com/media/EAOTD2L0qyvhm/giphy.gif",
			"http://media.giphy.com/media/938JXzfcl714I/giphy.gif",
			"https://media.giphy.com/media/TF1Az4ZjffK80/giphy.gif",
			"https://media.giphy.com/media/roym7Gv1DVK0/giphy.gif",
			"http://3.bp.blogspot.com/-VfIDEBGn9Gw/TaBUrYAWUZI/AAAAAAAAAmM/awcUvfHyPUE/s1600/Hayate_no_Gotoku_-_Caramelldansen.gif",
			"https://img.buzzfeed.com/buzzfeed-static/static/2014-01/enhanced/webdr06/29/10/anigif_enhanced-31738-1391010205-4.gif",
			"https://pa1.narvii.com/6115/a1ed9d29332a87ff81c373106db45d61df7fbbf6_hq.gif",
			"http://i0.kym-cdn.com/photos/images/newsfeed/001/153/506/bcd.gif",
			"https://img.gifmagazine.net/gifmagazine/images/677019/original.gif",
			"https://media1.tenor.com/images/b3ee0c82bf87b4cfce2067ebfa658828/tenor.gif"
		];
		     let embed = new Discord.RichEmbed()
                        .setDescription(`${user} начал(а) танцевать`)
                        .setImage(urls[Math.floor(Math.random() * urls.length)])
		     .setFooter("Команда добавлена по проосьбам пользователей")
                        .setColor('RANDOM');
                    msg.edit({embed})
        });
    } else if (['cookie'].includes(command)) {
	    actRCT = actRCT + 1;actALL = actALL +1;
	    let user = message.author;
        let user1 = message.mentions.users.first();
        message.channel.send('Загрузка...').then(msg => {
            const urls = [
"http://36.media.tumblr.com/7bd24d753128822e0652319b385f68ed/tumblr_notv05MRNm1s9pgrdo1_1280.jpg",
"https://thumbs.gfycat.com/GoodPlasticEyelashpitviper-max-1mb.gif",
"https://media.giphy.com/media/SKiPNljqH8Ub6/giphy.gif",
"https://media.giphy.com/media/O8XZwrrU4NQC4/giphy-facebook_s.jpg",
"https://www.1999.co.jp/itbig35/10358248.jpg",
"https://honeysanime.com/wp-content/uploads/2015/09/sailor-moon-usagi-cookie--560x377.png",
"http://4.bp.blogspot.com/-fkkpC6FFETQ/T8S0ro_WHeI/AAAAAAAAA8E/q95UOz7jDQg/s1600/anime+cookiess_15.jpg",
"http://i.imgur.com/u4HdC.jpg",
"http://dessertrecipescorner.com/wp-content/uploads/2017/01/crunchy-and-adorable-checkerboar.jpg",
"https://blog.manga.tv/wp-content/uploads/2013/02/Cookie-Totoro-cookies-mon-voisin-my-neighbour-ghibli-miyazaki-anime-online-streaming-manga-tv-legal-gratuit-8.jpg",
"https://data.whicdn.com/images/72988865/large.png",
"https://data.whicdn.com/images/276671856/original.gif",
"http://favim.com/media/uploads/images/orig/140321/anime-food-Favim.com-1522596.gif",
"https://i.pinimg.com/originals/c5/d0/ab/c5d0ab213a38c377d1139ee57fa62e32.jpg",
"http://farm3.staticflickr.com/2894/9330100800_8535169e0f_b.jpg",
"http://i.imgur.com/E1AWI.jpg",
"https://itadakimasuanime.files.wordpress.com/2013/03/checkerboard-cookies-saint-seiya.jpg"
];
		const selfcookie = new Discord.RichEmbed()
.setDescription(`${user} сьел печенье`)
.setImage(urls[Math.floor(Math.random() * urls.length)])
		.setFooter("Команда добавлена по проосьбам пользователей")
.setColor('RANDOM');
		if(!user1) return message.channel.send(selfcookie);
let embed = new Discord.RichEmbed()
.setDescription(`${user} Дал(а) печение ${user1}`)
.setImage(urls[Math.floor(Math.random() * urls.length)])
.setColor('RANDOM');
msg.edit({embed})
});
    } else if(['lick'].includes(command)) {
	    actRCT = actRCT + 1;actALL = actALL +1;
	    let user = message.author;
    let user1 = message.mentions.users.first();
	    if(!user1) return message.channel.send("вы хотите полизать воздух?");
    message.channel.send('Загрузка...').then(msg => {
        const urls = [
"https://gifer.com/i/72M.gif",
"https://media.giphy.com/media/ky2p36qednUu4/giphy.gif",
"https://i.kym-cdn.com/photos/images/original/001/084/805/287.gif",
"https://uploads.disquscdn.com/images/03f4bb0f623dc57b57ed251a0be34a36eda64367c6a2d59e88e0ac9211c2a910.gif",
"https://vignette.wikia.nocookie.net/the-kennel/images/9/9a/Ichigo_Mickey_lick.gif/revision/latest?cb=20141202220346",
"http://images.pandaapp.com/android/2011/06/20/Kanamemo-7-1-licking.gif",
"https://orig00.deviantart.net/20c8/f/2013/215/8/d/lick_2_by_anime_wolfz-d6gi186.gif",
"https://i.kym-cdn.com/photos/images/original/001/230/497/04d.gif",
"http://mrwgifs.com/wp-content/uploads/2013/04/Snuggling-Cuddling-Anime-Girls-Gif-.gif",
"https://img1.ak.crunchyroll.com/i/spire1/92b3653029e9196cfbedfd6a5ff3dc881488421004_full.gif",
"https://vignette.wikia.nocookie.net/the-kennel/images/7/7a/Tsundere_Lick_Gif.gif/revision/latest?cb=20130828004256",
"https://vignette.wikia.nocookie.net/the-kennel/images/7/79/Haruka_dog_lick.gif/revision/latest?cb=20170206183035",
"https://media.giphy.com/media/12MEJ2ArZc23cY/source.gif",
"http://gifimage.net/wp-content/uploads/2017/09/anime-lick-gif-12.gif",
"https://media1.tenor.com/images/783188d1592d16bcc83f52639fad8fcb/tenor.gif?itemid=10816601",
"https://33.media.tumblr.com/0fc51db3ee68263bfac91dcfa9c3ebb6/tumblr_nwsmfzIbio1sfyp69o1_500.gif",
"https://media1.tenor.com/images/0ce34500facf2ada86307bb740a03dfd/tenor.gif?itemid=5567738"
];
let embed = new Discord.RichEmbed()
.setDescription(`${user} Лизнул(а) ${user1}`)
.setImage(urls[Math.floor(Math.random() * urls.length)])
.setColor('RANDOM');
msg.edit({embed})
});
    } else if(['hi'].includes(command)) {
	    actRCT = actRCT + 1;actALL = actALL +1;//меня заставили!!
	     let user = message.author;//меня заставили!!
    let user1 = message.mentions.users.first();//меня заставили!!
    message.channel.send('Загрузка...').then(msg => {//меня заставили!!
        const urls = [//меня заставили!!
"https://orig00.deviantart.net/8d1d/f/2010/319/4/b/hi_____animated_by_0febris0-d2wu3lv.gif",//1//меня заставили!!
"https://steamusercontent-a.akamaihd.net/ugc/1617175662597177927/732757601CDBF2E52C41EF3349035A337BB119D7/",//2//меня заставили!!
"https://image.noelshack.com/fichiers/2018/17/3/1524685070-df0a9rx.gif",//3//меня заставили!!
"https://thumbs.gfycat.com/HatefulBlindFunnelweaverspider-size_restricted.gif",//4//меня заставили!!
"https://thumbs.gfycat.com/AdorableFormalAngwantibo-size_restricted.gif",//5//меня заставили!!
"https://pa1.narvii.com/6505/ad5549ff5f252cd35e393f88c55d474ab83fd46d_hq.gif",//6//меня заставили!!
"http://gifimage.net/wp-content/uploads/2017/10/hi-anime-gif-9.gif",//7//меня заставили!!
"https://kingmarsblog.files.wordpress.com/2016/08/c5612569563abae86b811071616e4c07f5b3aa18_hq.gif?w=882",//8//меня заставили!!
"https://media.tenor.com/images/b96f06f81933f49b6d24577017eb4edd/tenor.gif",//9//меня заставили!!
"https://media.giphy.com/media/yyVph7ANKftIs/giphy.gif",//10//меня заставили!!
"https://media1.tenor.com/images/c2e21a9d8e17c1d335166dbcbe0bd1bf/tenor.gif?itemid=5459102",//11//меня заставили!!
"http://gifimage.net/wp-content/uploads/2017/10/hi-anime-gif-11.gif",//12//меня заставили!!
"https://data.whicdn.com/images/233897767/original.gif",//13//меня заставили!!
"http://i.imgbox.com/AYqk4UJk.gif",//14//меня заставили!!
"https://cdn105.picsart.com/203730462001202.gif?r1024x1024",//15//меня заставили!!
"https://thumbs.gfycat.com/HauntingNeighboringBarracuda-max-1mb.gif",//16//меня заставили!!
"http://pa1.narvii.com/5935/a557baffc06658c5b3c2932eb0bc496cb112d04c_00.gif"//17//меня заставили!!
];//меня заставили!!
let embed = new Discord.RichEmbed()//меня заставили!!
      .setDescription(`${user} Приветствует всех!`)//меня заставили!!
      .setImage(urls[Math.floor(Math.random() * urls.length)])//меня заставили!!
	.setFooter("Команда добавлена по проосьбам пользователей")
      .setColor('RANDOM');//меня заставили!!
  msg.edit({embed})//меня заставили!!
});//меня заставили!!
    } else if(['coffee'].includes(command)) {
	    actRCT = actRCT + 1;actALL = actALL +1;
	     let user = message.author;
    message.channel.send('Загрузка...').then(msg => {
        const urls = [
"https://media1.tenor.com/images/41ca1498e20e7983bfb5be3a3c12d588/tenor.gif?itemid=10003402",//1
"https://media1.tenor.com/images/878b7d53a6b04bf09a222e9175a06b72/tenor.gif?itemid=10003333",//2
"https://i.pinimg.com/originals/90/0d/40/900d4092592c8c76514825702e0b1871.gif",//3
"https://i.gifer.com/ITNl.gif",//4
"https://media1.tenor.com/images/e38a9e8fe558bf48893f4c0069aa2b44/tenor.gif?itemid=5554691",//5
"https://gifer.com/i/CIaV.gif",//6
"http://37.media.tumblr.com/7b0291d11e0d7cd705d46a361606bd89/tumblr_n8vbqjY3sg1r11qslo2_500.gif",//7
"https://media.giphy.com/media/SCCjSLGQKfu6I/giphy.gif",//8
"https://gifer.com/i/DWbF.gif",//9
"https://data.whicdn.com/images/219385340/original.gif",//10
"https://i.pinimg.com/originals/b4/84/5c/b4845c9057251890188a121bdc9fa7f5.gif",//11
"https://i.imgur.com/Vg8BJBb.gif",//12
"https://rinscribble.files.wordpress.com/2016/09/tumblr_mlig9kpqkk1s55xs5o1_500.gif",//13
"https://cdn157.picsart.com/219546902011202.gif?r1024x1024",//14
"https://gifer.com/i/w3f.gif",//15
"https://data.whicdn.com/images/298743211/original.gif",//16
"https://media.giphy.com/media/OGzFu4KQuZ2/giphy.gif"//17
];
let embed = new Discord.RichEmbed()
      .setDescription(`${user} Выпил(а) кофе`)
      .setImage(urls[Math.floor(Math.random() * urls.length)])
      .setColor('RANDOM');
  msg.edit({embed})
});
    } else if(['happy'].includes(command)) {
	    actRCT = actRCT + 1;actALL = actALL +1;
	    let user = message.author;
    message.channel.send('Загрузка...').then(msg => {
        const urls = [
			"https://media1.tenor.com/images/bd5e4f3a51515ed0ed3e41378f71d503/tenor.gif",
			"https://media1.tenor.com/images/0ffa8ec3da79658d13d3531ab94381a0/tenor.gif",
			"https://pa1.narvii.com/5672/8f859353df86ac2a58698006f435e1d7aba1f63e_hq.gif",
			"http://i.giphy.com/4xYhMRFqGjoFG.gif",
		"https://media.giphy.com/media/3Cm8cxtSHqu6Q/giphy.gif",
		"https://media1.tenor.com/images/0f9847a5f258da9a3bdccc3860f91eb5/tenor.gif?itemid=9188246",
		"https://media.tenor.com/images/559aa39a13635744c3c3ecd32b2aeb60/tenor.gif",
		"https://i.kym-cdn.com/photos/images/original/001/103/137/7d4.gif",
		"https://media1.tenor.com/images/29dc5102d126b8dc3970f71c0a1e99d5/tenor.gif?itemid=5959844",
		"https://thumbs.gfycat.com/BrilliantScaryAmethystsunbird-size_restricted.gif",
		"https://i.imgur.com/he3uUsy.gif",
		"https://media0.giphy.com/media/dwe0zLhdweo8/200.gif",
		"https://data.whicdn.com/images/174338423/original.gif",
		"https://i.pinimg.com/originals/14/7b/ba/147bba012d5781ead622f9c2a4a02be2.gif",
		"https://media.tenor.com/images/d93523c4db7e20254c4dcd512029d51e/tenor.gif",
		"https://data.whicdn.com/images/174338297/original.gif",
		"https://media1.tenor.com/images/7706dded712d1e0f6ddb38d0f6352c95/tenor.gif?itemid=6014343",
		"https://cdn72.picsart.com/186168594000202.gif?r1024x1024",
		"https://gifer.com/i/FPU2.gif",
		"https://media.giphy.com/media/lDYHk3Okrag7K/giphy.gif",
		"https://gifer.com/i/Vzg7.gif",
		"https://media1.tenor.com/images/4e0a400d7621b5452854bcae00d9a98e/tenor.gif?itemid=5723668",
		"https://i.pinimg.com/originals/31/c6/70/31c670df6249a955fecc9aea0814422b.gif",
		"https://gifer.com/i/3TMr.gif",
		"http://gifimage.net/wp-content/uploads/2017/07/anime-happy-gif-16.gif",
		"https://gifer.com/i/VEGI.gif",
		"https://pa1.narvii.com/6476/e7a05d97f12160e195e28faadff82becf28c54d7_hq.gif",
		"https://gif-free.com/uploads/posts/2017-05/1493788658_happy-anime-hearts.gif",
		"https://i.pinimg.com/originals/ff/41/c6/ff41c68ec0fdd1a48ce29c2a2846f5dd.gif",
		"http://gifimage.net/wp-content/uploads/2017/06/happy-anime-gif-15.gif"
		];
let embed = new Discord.RichEmbed()
      .setDescription(`${user} радуется`)
      .setImage(urls[Math.floor(Math.random() * urls.length)])
      .setColor('RANDOM');
  msg.edit({embed})
});
    } else if(['yawn'].includes(command)) {
	    actRCT = actRCT + 1;actALL = actALL +1;
	    let user = message.author;
    message.channel.send('Загрузка...').then(msg => {
        const urls = [
			"https://lh3.googleusercontent.com/-Tghzzm_moYI/Vpv9Tim48-I/AAAAAAAEHcg/IB_oaMQRHJc/w506-h284/luckyyy%2Bop.gif",
			"https://orig00.deviantart.net/9f06/f/2016/125/e/f/k_on__ritsu_is_bored___gif_animation_by_kyoflameashhylden-da1e0f9.gif",
			"https://media.giphy.com/media/Bw4ECQSe8tkT6/giphy.gif",
			"https://media.giphy.com/media/ib908PKTsuJXi/giphy.gif",
			"https://nekketsunikki.files.wordpress.com/2013/09/prad3-25-wakana-yawning-gif.gif",
			"https://78.media.tumblr.com/d01b8fbef3330601513a0f0eacc83276/tumblr_nymaloSqjh1tydz8to1_500.gif",
			"http://1.bp.blogspot.com/-c7IYwWX2qX0/T2EHko0u50I/AAAAAAAABEM/mO5m86a7B2g/s1600/tumblr_ln2k4nc5VS1qejrr2o1_500_large.gif",
			"http://pa1.narvii.com/5778/1c2cb88920e9ab85168b936d74e81679fd7a2e38_hq.gif",
			"https://media.giphy.com/media/iQHDtnUZ7gxI4/giphy.gif",
			"https://i.giphy.com/media/kgqNxRFENcp0I/giphy.gif",
		"https://media.giphy.com/media/Byzxt2ompZJyE/giphy.gif",
		"https://media1.tenor.com/images/9cef52ce27ab97e0fa9cfac1cdc1007f/tenor.gif?itemid=9525859",
		"https://gifer.com/i/2UvD.gif",
		"https://thumbs.gfycat.com/DentalEnragedHookersealion-size_restricted.gif",
		"https://gifer.com/i/2m6l.gif",
		"https://media.giphy.com/media/TwcK5edEfpNQY/giphy.gif",
		"https://thumbs.gfycat.com/AdorableValuableBronco-size_restricted.gif",
		"https://gifer.com/i/1UaJ.gif",
		"https://media1.tenor.com/images/6b1d8cf7b9880bcfea290eea918b16fc/tenor.gif?itemid=5948549",
		"https://data.whicdn.com/images/22623277/original.gif",
		"http://25.media.tumblr.com/tumblr_lsh29uKhB81qkki6ro1_500.gif",
		"https://i.pinimg.com/originals/7b/c7/6d/7bc76db75a2fe267ad1038bec492be59.gif",
		"https://uploads.disquscdn.com/images/b78ebc75fbbea0323eccc3b51d07737688acd9ed5e3768b0ff96779eedec1019.gif",
		"https://thumbs.gfycat.com/ImprobableSoggyAruanas-size_restricted.gif",
		"https://media.tenor.com/images/4e3475b2f27c4870500389b038ad780b/tenor.gif",
		"https://i.gifer.com/2dc7.gif"
		]
let embed = new Discord.RichEmbed()
      .setDescription(`${user} зевает`)
      .setImage(urls[Math.floor(Math.random() * urls.length)])
      .setColor('RANDOM');
  msg.edit({embed})
});
    } else if(['shy'].includes(command)) {
	    actRCT = actRCT + 1;actALL = actALL +1;
	    let user = message.author;
    message.channel.send('Загрузка...').then(msg => {
        const urls = [
			"https://media.giphy.com/media/1gbQIeNzZxcSk/giphy.gif",
			"https://media.giphy.com/media/BkqSYWqv8Zfva/giphy.gif",
			"https://media.giphy.com/media/12DrHDhr5dTjgs/giphy.gif",
			"https://media.giphy.com/media/eNVI4Ue1MpjWg/giphy.gif",
			"https://vignette.wikia.nocookie.net/degrassi/images/d/d7/Tsugumi_precious.gif",
			"https://thumbs.gfycat.com/AfraidMistyGreatwhiteshark-max-1mb.gif",
			"https://media.giphy.com/media/dkvGrfQ6ryIAU/giphy.gif",
			"http://i.imgur.com/fxZdy3h.gif",
			"https://media1.tenor.com/images/c271e69eaeaab17fb096ccb3c7fedb6d/tenor.gif",
			"https://media.giphy.com/media/NPcbTHBxD7dAY/source.gif",
			"https://media.giphy.com/media/tQWT183CTqHYI/source.gif",
		"https://media1.tenor.com/images/71de7826ad02a908a1c3e572f50e6901/tenor.gif?itemid=5755233",
		"https://media3.giphy.com/media/6CBGoJnEBbEWs/giphy.gif",
		"https://media2.giphy.com/media/UrPxdGW62TDtS/giphy.gif",
		"https://media1.tenor.com/images/9d417ab4391009a5999d5ffe3d2444f1/tenor.gif?itemid=9194392",
		"https://data.whicdn.com/images/272630927/original.gif",
		"https://media2.giphy.com/media/fARFPMuspJRx6/200.gif",
		"http://gifimage.net/wp-content/uploads/2017/08/shy-anime-gif-12.gif",
		"https://gifer.com/i/9O2r.gif",
		"https://media1.tenor.com/images/d5acfb3df99f08e1d0c9df2d95bad99e/tenor.gif?itemid=6015968",
		"https://i.pinimg.com/originals/f0/ef/6f/f0ef6feafada1ee18e2ad46a2563ab75.gif",
		"https://78.media.tumblr.com/d2a8d6ba156c11aa2b5ee9a65b2e9176/tumblr_owepwelyXg1vviqkjo1_500.gif",
		"http://gifimage.net/wp-content/uploads/2017/08/shy-anime-gif-3.gif",
		"https://i.gifer.com/8VKY.gif",
		"https://cdn51.picsart.com/170690980000202.gif?r1024x1024"
		]
let embed = new Discord.RichEmbed()
      .setDescription(`${user} смущается`)
      .setImage(urls[Math.floor(Math.random() * urls.length)])
      .setColor('RANDOM');
  msg.edit({embed})
});
    } else if(['shock'].includes(command)) {
	    actRCT = actRCT + 1;actALL = actALL +1;
	    let user = message.author;
    message.channel.send('Загрузка...').then(msg => {
        const urls = [
			"https://i.giphy.com/media/atyNuQv4pUOxG/giphy.gif",
			"https://78.media.tumblr.com/6ab3f8e5cb874ab702815cd9514cdd79/tumblr_n92pljJGak1s5mgubo1_500.gif",
			"https://erisischanadventure.files.wordpress.com/2015/05/shocked.gif",
		"https://media.giphy.com/media/3ohjV3eA4uG9r0hv0I/giphy.gif",
		"https://gifer.com/i/8gh.gif",
		"https://media1.tenor.com/images/d91ea878a27bd20d5482bbf45bbdea3f/tenor.gif?itemid=546669",
		"https://media1.tenor.com/images/d91ea878a27bd20d5482bbf45bbdea3f/tenor.gif?itemid=5466695",
		"https://media.giphy.com/media/1FpxFCobvJra/giphy.gif",
		"https://i.pinimg.com/originals/4b/44/1e/4b441e12fe0bc2af2763a43a261adf73.gif",
		"http://gifimage.net/wp-content/uploads/2017/09/anime-shock-gif-10.gif",
		"https://78.media.tumblr.com/fa98cd4b05512232fbb13083d5522ce1/tumblr_op6m23wz9B1vviqkjo1_500.gif",
		"http://gifimage.net/wp-content/uploads/2017/09/anime-shock-gif-1.gif",
		"https://media1.tenor.com/images/31eb560d6398ba696405d6719cb4e582/tenor.gif?itemid=7922528",
		"https://i.kym-cdn.com/photos/images/newsfeed/001/250/784/d46.gif",
		"https://media.giphy.com/media/pkIuMNLQZcO4g/giphy.gif"
		]
let embed = new Discord.RichEmbed()
      .setDescription(`${user} в шоке`)
      .setImage(urls[Math.floor(Math.random() * urls.length)])
      .setColor('RANDOM');
  msg.edit({embed})
});
    } else if(['ignore'].includes(command)) {
	    actRCT = actRCT + 1;actALL = actALL +1;
	    let user = message.author;
    let user1 = message.mentions.users.first();
	    if(!user1) return message.channel.send("вы хотите игнорировать воздух?");
    message.channel.send('Загрузка...').then(msg => {
	    const urls = [
			"https://media1.tenor.com/images/112c2abcf585b37e6c6950ebc3ab4168/tenor.gif",
			"https://media.giphy.com/media/rFvtiIevmj0zu/giphy.gif",
			"http://i0.kym-cdn.com/photos/images/original/000/906/455/51f.gif",
			"https://78.media.tumblr.com/eb90caf5fe561e609dd5a9040e34186f/tumblr_nq2cvgKtjZ1un9vr1o2_500.gif",
			"https://i.imgur.com/dtHhUx3.gif",
		    "https://data.whicdn.com/images/227934384/original.gif",
		    "https://media1.tenor.com/images/96c460d18d3f7fc9bad84a87cfef6512/tenor.gif?itemid=8033041",
		    "http://media.giphy.com/media/11bY8RQnSLHwc0/giphy.gif",
		    "https://em.wattpad.com/9dac4f1619ba670b8e758a788733234ec4c4b203/68747470733a2f2f73332e616d617a6f6e6177732e636f6d2f776174747061642d6d656469612d736572766963652f53746f7279496d6167652f68325f6d595933445057616330673d3d2d3336322e313461633733646530666532623736393434373538383333343932352e676966?s=fit&w=720&h=720",
		    "http://24.media.tumblr.com/ff8c7f318c39daa3d4f169ba216a4c41/tumblr_mtabimunhJ1sg0ygjo1_500.gif"
		]
	    let embed = new Discord.RichEmbed()
.setDescription(`${user} ингнорирует ${user1}`)
.setImage(urls[Math.floor(Math.random() * urls.length)])
.setColor('RANDOM');
msg.edit({embed})
});
    } else if (['afraid'].includes(command)) {
	    actRCT = actRCT + 1;actALL = actALL +1;
	    let user = message.author;
    let user1 = message.mentions.users.first();
	    if(!user1) return message.channel.send("вы боитесь воздуха?");
    message.channel.send('Загрузка...').then(msg => {
	    const urls = [
			"https://media.giphy.com/media/hhX3ARsqy9bYQ/giphy.gif",
			"https://media.giphy.com/media/1ZXfnXk2F7Zio/giphy.gif",
			"https://i.pinimg.com/originals/90/6d/61/906d61263992beb3000e6beab2d860aa.gif",
			"https://78.media.tumblr.com/a1ec7a76d2c55d0e9ba5bcf14004bab0/tumblr_n4gagcXigK1tyunbro1_500.gif",
			"https://i.giphy.com/media/UCdYMxha6iemA/giphy.gif",
			"https://pa1.narvii.com/6329/21cf4fb4b212bfbe3ebe8fbebc59f49eabdd09f6_hq.gif",
			"https://media.giphy.com/media/OGC76skhmPixi/giphy.gif"
		];
		let embed = new Discord.RichEmbed()
.setDescription(`${user} боится ${user1}`)
.setImage(urls[Math.floor(Math.random() * urls.length)])
.setColor('RANDOM');
msg.edit({embed})
});
    } else if(['kill'].includes(command)) {
	    actRCT = actRCT + 1;actALL = actALL +1;
	    let user = message.author;
    let user1 = message.mentions.users.first();
	    if(!user1) return message.channel.send("вы хотите убить воздух?");
    message.channel.send('Загрузка...').then(msg => {
       const urls = ['http://img1.reactor.cc/pics/comment/Anime-Blood-%D0%A1-blood%2B-Blood-The-last-breed-of-alayers-355465.gif%27,%27http://s3.favim.com/orig/141005/anime-another-blood-dead-Favim.com-2127373.gif%27,%27http://s3.favim.com/orig/141005/anime-another-blood-dead-Favim.com-2127373.gif%27,%27https://giffiles.alphacoders.com/183/183939.gif', 'http://img1.joyreactor.cc/pics/post/Anime-Yuno-Gasai-Mirai-Nikki-anime-gif-1323261.gif%27,%27https://pa1.narvii.com/5606/a375335053d9e6985a54d718a093453a2ebfdbb8_hq.gif', 'https://www.picgifs.com/gifs/anime/code-geass/code-geass-RkLjAS.gif', 'http://img0.reactor.cc/pics/comment/Anime-anime-gif-%D0%9D%D1%8F%D1%88%D0%B8-%D0%BA%D1%83%D1%88%D0%B0%D1%8E%D1%82-%D0%BC%D0%BD%D0%BE%D0%B3%D0%BE-%D0%B3%D0%B8%D1%84%D0%BE%D0%BA-1637636.gif%27,%27http://img0.reactor.cc/pics/comment/Anime-anime-gif-%D0%9D%D1%8F%D1%88%D0%B8-%D0%BA%D1%83%D1%88%D0%B0%D1%8E%D1%82-%D0%BC%D0%BD%D0%BE%D0%B3%D0%BE-%D0%B3%D0%B8%D1%84%D0%BE%D0%BA-1637636.gif', 'http://os1.i.ua/3/1/7173115_e5195812.gif', 'http://os1.i.ua/3/1/7173115_e5195812.gif', 'https://i.gifer.com/Tsa.gif', 'https://i.gifer.com/Tsa.gif', 'http://slinky.me/uploads/pic/8/tumblr_na9w7k01b11rec90to1_500.gif', 'http://i87.beon.ru/37/88/1608837/29/125556029/tumblr_n23dohd9Hg1rydwbvo1_500.gif', 'http://gifimage.net/wp-content/uploads/2017/09/anime-knife-gif-13.gif%27,%27https://humoraf.ru/wp-content/uploads/2017/07/anime-gifs-22.gif%27,%27https://giffiles.alphacoders.com/238/23830.gif%27,%27https://technikitty.files.wordpress.com/2014/07/tumblr_meipfbccei1qm9z16o1_500.gif', 'https://technikitty.files.wordpress.com/2014/07/tumblr_meipfbccei1qm9z16o1_500.gif', 'http://gifimage.net/wp-content/uploads/2017/11/gif-anime-gore-11.gif', 'http://img1.joyreactor.cc/pics/comment/%D0%BF%D0%BE%D0%B7%D0%BD%D0%B0%D0%B2%D0%B0%D1%82%D0%B5%D0%BB%D1%8C%D0%BD%D0%BE-%D1%85%D0%BE%D0%BB%D0%BE%D0%B4%D0%BD%D0%BE%D0%B5-%D0%BE%D1%80%D1%83%D0%B6%D0%B8%D0%B5-%D0%BE%D1%80%D1%83%D0%B6%D0%B8%D0%B5-1466093.gif'];
let embed = new Discord.RichEmbed()
.setDescription(`${user} убил(а) ${user1}`)
.setImage(urls[Math.floor(Math.random() * urls.length)])
.setColor('RANDOM');
msg.edit({embed})
});
    } else if(['squeeze'].includes(command)) {
	    actRCT = actRCT + 1;actALL = actALL +1;
	    let user = message.author;
    let user1 = message.mentions.users.first();
	    if(!user1) return message.channel.send("user?");
    message.channel.send('Загрузка...').then(msg => {
	    const urls = [
			"https://78.media.tumblr.com/b5c723d99ab6a885364a83cb988b41d1/tumblr_nezyz8dkr81tkv03zo1_500.gif",
			"https://media1.tenor.com/images/1dfbcdcc996ee2832cbe743330702fa7/tenor.gif",
			"https://media.giphy.com/media/ruYMwmyOtpIxa/giphy.gif",
			"https://media.giphy.com/media/e01lZEJ6WZjiw/giphy.gif",
			"https://media.giphy.com/media/guSbERilLjuQU/giphy.gif",
		    "https://media1.tenor.com/images/0258c0d29159494fd63eea0e001eda39/tenor.gif?itemid=4874936",
		    "https://media1.tenor.com/images/f119b672272ccc86674ada0fba51840c/tenor.gif?itemid=5102180",
		    "https://media.giphy.com/media/l3V0F9XqbzayW8Xcc/giphy.gif",
		    "http://33.media.tumblr.com/b5c723d99ab6a885364a83cb988b41d1/tumblr_nezyz8dkr81tkv03zo1_500.gif",
		    "https://i.kym-cdn.com/photos/images/newsfeed/001/081/819/b24.gif"
		]
let embed = new Discord.RichEmbed()
.setDescription(`${user} тянет за щеки ${user1}`)
.setImage(urls[Math.floor(Math.random() * urls.length)])
.setColor('RANDOM');
msg.edit({embed})
});
    } else if(['smug'].includes(command)) {
	    actRCT = actRCT + 1;actALL = actALL +1;
	    let user = message.author;
    let user1 = message.mentions.users.first();
	    if(!user1) return message.channel.send("user?");
    message.channel.send('Загрузка...').then(msg => {
	    const urls = [
			"https://i.pinimg.com/originals/9a/3b/f4/9a3bf4ed68ed536542d047f221fea6f0.gif",
			"https://i.warosu.org/data/g/img/0594/88/1489973466923.gif",
		    "https://i.kym-cdn.com/photos/images/original/001/087/562/93c.gif",
		    "https://media.tenor.com/images/1aa283e921c52a595903fa9661ea9a66/tenor.gif",
		    "https://thumbs.gfycat.com/DescriptiveSmartKitty-max-1mb.gif",
		    "https://i.kym-cdn.com/photos/images/newsfeed/001/161/167/eda.gif",
		    "https://media1.tenor.com/images/d9b3127da3f9419cbb28f9f7c00860d8/tenor.gif?itemid=9588226",
		    "https://i.pinimg.com/originals/c0/7c/28/c07c28b2f57bc12ec07d947c8877bfe7.gif",
		    "https://i.kym-cdn.com/photos/images/newsfeed/001/223/569/12b.gif",
		    "https://i.gifer.com/CCOj.gif",
		    "https://media.tenor.com/images/a2741132a4f7ddf637513737364d87d9/tenor.gif",
		    "https://thumbs.gfycat.com/TalkativePortlyEel-size_restricted.gif",
		    "https://i.kym-cdn.com/photos/images/original/000/930/862/f1a.gif",
		    "https://i.pinimg.com/originals/ec/1f/0c/ec1f0c5a719be61c7fa8005a52ff021a.gif",
		    "https://78.media.tumblr.com/924d5e0c521d63bc28b6cf5c31937494/tumblr_nu6xskk0Wc1reorefo1_500.gif",
		    "http://gifimage.net/wp-content/uploads/2017/09/anime-smug-gif-11.gif",
		    "https://vignette.wikia.nocookie.net/vsbattles/images/e/e8/Smug_tokyo_ravens.gif/revision/latest?cb=20170525052602",
		    "https://i.kym-cdn.com/photos/images/newsfeed/001/098/012/fac.gif",
		    "http://gifimage.net/wp-content/uploads/2017/08/smug-anime-gif-18.gif"
		    
		];
let embed = new Discord.RichEmbed()
.setDescription(`${user} надмеивается над ${user1}`)
.setImage(urls[Math.floor(Math.random() * urls.length)])
.setColor('RANDOM');
msg.edit({embed})
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
                        .setColor('RANDOM')
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
                        .setColor('RANDOM')
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
                        .setColor('RANDOM')
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
                        .setColor('RANDOM')
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
                        .setColor('RANDOM')
		        .setFooter("powered by nekos.life")
                    msg.edit(`${user1}`, {embed});
                } catch (e) {console.log(e)}
            });
        });
    } else if(['ero'].includes(command)) {
	    actNSFW = actNSFW + 1;actALL = actALL +1;
	    if (!message.channel.nsfw) return message.reply(NSFWembed);
        message.channel.send('Загрузка...').then(msg => {
            request('https://nekos.life/api/v2/img/ero', function (error, response, body) {
                try {
                    let arr = JSON.parse(body);
                    let embed = new Discord.RichEmbed()
                        .setImage(arr['url'])
                        .setColor('RANDOM')
		        .setFooter("powered by nekos.life");
                    msg.edit({embed});
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
                        .setImage(arr['url'])
                        .setColor('RANDOM')
		        .setFooter("powered by nekos.life");
                    msg.edit({embed});
                } catch (e) {console.log(e)}
            });
        });
    } else if (['foxGirl', 'foxgirl'].includes(command)) {
	     actIMG = actIMG + 1;actALL = actALL +1;
        message.channel.send('Загрузка...').then(msg => {
            request('https://nekos.life/api/v2/img/fox_girl', function (error, response, body) {
                try {
                    let arr = JSON.parse(body);
                    let embed = new Discord.RichEmbed()
                        .setImage(arr['url'])
                        .setColor('RANDOM')
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
                        .setImage(arr['url'])
                        .setColor('RANDOM')
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
                        .setColor('RANDOM')
		        .setFooter("powered by nekos.life");
                    msg.edit(`${user1}`, {embed});
                } catch (e) {console.log(e)}
            });
        });
    } else if(['suicide', 'суицид', 'уебаться'].includes(command)) {
	    actRCT = actRCT + 1;actALL = actALL +1;
	    message.channel.send('Загрузка...').then(msg => {
         const urls = ['https://lh3.googleusercontent.com/-buUYgrq_wKc/VRO0gc7EHqI/AAAAAAAAAG0/7Ntm-6fFkk4/w500-h288/naomi%2Bsuicide%2Bgif.gif', 'https://uploads.disquscdn.com/images/2dbbc921cb13de3198a3b6ae0099e725bfb0c80129d70bacf47819fb765deef1.gif', 'http://37.media.tumblr.com/tumblr_m7ram5jIAA1qzbqw1o1_250.gif', 'https://i.pinimg.com/originals/79/2f/37/792f37131d123c568e7114b7b829e572.gif', 'http://thisisinfamous.com/wp-content/uploads/2014/12/tumblr_ngjphxwU011t3zq0no1_400.gif', 'httpsimage.net/wp-content/uploads/2017/07/anime-suicide-gif-15.gif', 'https://data.whicdn.com/images/290510883/original.gif', 'https://media.giphy.com/media/WsWJZcJoxmLUk/giphy.gif', 'https://media1.tenor.com/images/a5db1c26b710b8b834d8265bf97a6c79/tenor.gif?itemid=5091706', 'http://38.media.tumblr.com/c75ba943c38bad612d9e722ee3142bb3/tumblr_n418yewq601tubxydo1_500.gif', 'http://66.media.tumblr.com/e2ab4fd11151e5e8acc627254bb7594d/tumblr_mo1ef0QwUS1s0pcfao1_500.gif', 'https://i.gifer.com/3ZvS.gif', 'http://gifimage.net/wp-content/uploads/2017/07/anime-suicide-gif-8.gif', 'https://i.pinimg.com/originals/a5/f1/96/a5f196464ed42f493b95a600099e83b9.gif', 'https://cdn60.picsart.com/182542841000202.gif?r1024x1024', 'https://zippy.gfycat.com/EquatorialGleefulArabianhorse.gif', 'http://data.whicdn.com/images/107593752/large.gif', 'https://i.gifer.com/Rk5D.gif', 'https://pa1.narvii.com/6535/3eb238ede3ccbc364d487c60f9d8b9c9fcb4f515_hq.gif', 'http://gifimage.net/wp-content/uploads/2017/07/anime-suicide-gif-2.gif'];
                    let embed = new Discord.RichEmbed()
                        .setDescription(`${message.author.username} совершил(а) суицид..`)
                        .setImage(urls[Math.floor(Math.random() * urls.length)])
                        .setColor('RANDOM');
                    msg.edit({embed});
        });
    } else if(['cry', 'плакать'].includes(command)) {
	    actRCT = actRCT + 1;actALL = actALL +1;
	    message.channel.send('Загрузка...').then(msg => {
        const urls = ['https://media1.tenor.com/images/6d55ad934bb27473d3df8211bb8831bf/tenor.gif?itemid=9975194', 'https://media2.giphy.com/media/ROF8OQvDmxytW/giphy.gif', 'http://gifimage.net/wp-content/uploads/2017/07/anime-cry-gif-28.gif', 'http://gifimage.net/wp-content/uploads/2017/10/cry-anime-gif-9.gif', 'http://i0.kym-cdn.com/photos/images/original/000/980/628/a33.gif', 'http://gifimage.net/wp-content/uploads/2017/07/anime-cry-gif-24.gif', 'https://i.gifer.com/Drie.gif', 'https://media.giphy.com/media/3o6ZtqXXIROMIDjrSE/source.gif', 'http://37.media.tumblr.com/bf5836922dc31ccabb555c7a0db00e10/tumblr_n7fmo4Y8V31sppmhjo1_500.gif', 'https://i.pinimg.com/originals/08/43/e8/0843e8663770d63ce16c3828f9a57ccf.gif', 'https://i.gifer.com/Yf7N.gif', 'https://thumbs.gfycat.com/GoodnaturedRemarkableFurseal-size_restricted.gif'];
                    let embed = new Discord.RichEmbed()
                        .setDescription(`${message.author.username} заплакал(а)`)
                        .setImage(urls[Math.floor(Math.random() * urls.length)])
                        .setColor('RANDOM');
                    msg.edit({embed});
        });
    } else if(['smoke'].includes(command)) {
	    actRCT = actRCT + 1;actALL = actALL +1;
	     message.channel.send('Загрузка...').then(msg => {
		     const urls = ['https://thumbs.gfycat.com/SphericalDependentHalibut-small.gif', 'https://78.media.tumblr.com/7746fca41c6782df47d7cd6925adba6f/tumblr_orcpabAWTV1sqhf08o1_500.gif', 'http://animeonline.su/uploads/posts/2015-06/1435137244_end.gif', 'https://media.giphy.com/media/hnRXZQiHWTtTO/giphy.gif', 'https://media.giphy.com/media/1k6S4iyfFyTRK/giphy.gif' ,'https://i.pinimg.com/originals/10/4b/9e/104b9ea0f2dea93d9374b092b82e1256.gif', 'https://s3-eu-west-1.amazonaws.com/files.surfory.com/uploads/2015/2/14/54dd05a41f395d0b468b465a/54df5bf31f395daa438b4c8e.gif', 'http://s8.favim.com/orig/150926/anime-guy-black-and-white-gif-smoking-Favim.com-3361618.gif', 'http://img0.safereactor.cc/pics/post/anime-gif-Anime-Subete-ga-F-ni-Naru-The-Perfect-Insider-2638766.gif', 'http://s017.radikal.ru/i424/1111/2b/ecae2f095abb.gif', 'https://78.media.tumblr.com/5bec6027d1c27194e6d3d5863c739d5f/tumblr_ozmfkvy8Pc1urnatuo1_500.gif', 'https://78.media.tumblr.com/6ac2528e3cde0894adb41fbc4e56def0/tumblr_owayv78WNu1vbfbhho1_500.gif'];
		     let embed = new Discord.RichEmbed()
                        .setDescription(`${message.author.username} выкурил(а) сигарету.`)
                        .setImage(urls[Math.floor(Math.random() * urls.length)])
                        .setColor('RANDOM');
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
                        .setColor('RANDOM');
                    msg.edit(`${user1}`, {embed});
        });
    } else if(['8ball'].includes(command)) {
	    if(!args[0]) return message.channel.send("Мне нечем ответить на молчание");
	    const answers = ['Без сомннения!', 'Да, конечно', 'Да', 'может быть', 'возможно', 'Абсолютно нет!', 'конечно нет', 'не уверен', 'сомневаюсь']; 
			    message.reply(answers[Math.floor(Math.random() * answers.length)])
    } else if(['cat'].includes(command)) {
        actIMG = actIMG + 1;actALL = actALL +1;
        message.channel.send('Загрузка...').then(msg => {
            request('https://nekos.life/api/v2/img/meow', function (error, response, body) {
                try {
                    let arr = JSON.parse(body);
                    let embed = new Discord.RichEmbed()
                        .setImage(arr['url'])
                        .setColor('RANDOM')
		        .setFooter("powered by nekos.life");
		
                    msg.edit({embed});
                } catch (e) {console.log(e)}
            });
        });
    } else if(['anal'].includes(command)) {
	    actNSFW = actNSFW + 1;actALL = actALL +1;
        if (!message.channel.nsfw) return message.reply(NSFWembed);
        message.channel.send('Загрузка...').then(msg => {
            request('https://nekos.life/api/v2/img/anal', function (error, response, body) {
                try {
                    let arr = JSON.parse(body);
                    let embed = new Discord.RichEmbed()
                        .setImage(arr['url'])
                        .setColor('RANDOM')
                        .setFooter(`requested by ${message.author.username} | powered by nekos.life`);
                    msg.edit({embed});
                } catch (e) {console.log(e)}
            });
        });
    } else if(['hentai'].includes(command)) {
	    actNSFW = actNSFW + 1;actALL = actALL +1;
        if (!message.channel.nsfw) return message.reply(NSFWembed);
        message.channel.send('Загрузка...').then(msg => {
            request('https://nekos.life/api/v2/img/hentai', function (error, response, body) {
                try {
                    let arr = JSON.parse(body);
                    let embed = new Discord.RichEmbed()
                        .setImage(arr['url'])
                        .setColor('RANDOM')
                        .setFooter(`requested by ${message.author.username} | powered by nekos.life`);
                    msg.edit({embed});
                } catch (e) {console.log(e)}
            });
        });
    } else if(['yuri'].includes(command)) {
	    actNSFW = actNSFW + 1;actALL = actALL +1;
        if (!message.channel.nsfw) return message.reply(NSFWembed);
        message.channel.send('Загрузка...').then(msg => {
            request('https://nekos.life/api/v2/img/yuri', function (error, response, body) {
                try {
                    let arr = JSON.parse(body);
                    let embed = new Discord.RichEmbed()
                        .setImage(arr['url'])
                        .setColor('RANDOM')
                        .setFooter(`requested by ${message.author.username} | powered by nekos.life`);
                    msg.edit({embed});
                } catch (e) {console.log(e)}
            });
        });
    } else if(['trap'].includes(command)) {
	    actNSFW = actNSFW + 1;actALL = actALL +1;
        if (!message.channel.nsfw) return message.reply(NSFWembed);
        message.channel.send('Загрузка...').then(msg => {
            request('https://nekos.life/api/v2/img/trap', function (error, response, body) {
                try {
                    let arr = JSON.parse(body);
                    let embed = new Discord.RichEmbed()
                        .setImage(arr['url'])
                        .setColor('RANDOM')
                        .setFooter(`requested by ${message.author.username} | powered by nekos.life`);
                    msg.edit({embed});
                } catch (e) {console.log(e)}
            });
        });
    } else if(['kuni'].includes(command)) {
	    actNSFW = actNSFW + 1;actALL = actALL +1;
        if (!message.channel.nsfw) return message.reply(NSFWembed);
        message.channel.send('Загрузка...').then(msg => {
            request('https://nekos.life/api/v2/img/kuni', function (error, response, body) {
                try {
                    let arr = JSON.parse(body);
                    let embed = new Discord.RichEmbed()
                        .setImage(arr['url'])
                        .setColor('RANDOM')
                        .setFooter(`requested by ${message.author.username} | powered by nekos.life`);
                    msg.edit({embed});
                } catch (e) {console.log(e)}
            });
        });
    } else if(['solo'].includes(command)) {
	    actNSFW = actNSFW + 1;actALL = actALL +1;
        if (!message.channel.nsfw) return message.reply(NSFWembed);
        message.channel.send('Загрузка...').then(msg => {
            request('https://nekos.life/api/v2/img/solo', function (error, response, body) {
                try {
                    let arr = JSON.parse(body);
                    let embed = new Discord.RichEmbed()
                        .setImage(arr['url'])
                        .setColor('RANDOM')
                        .setFooter(`requested by ${message.author.username} | powered by nekos.life`);
                    msg.edit({embed});
                } catch (e) {console.log(e)}
            });
        });
    } else if(['tits'].includes(command)) {
	    actNSFW = actNSFW + 1;actALL = actALL +1;
        if (!message.channel.nsfw) return message.reply(NSFWembed);
        message.channel.send('Загрузка...').then(msg => {
            request('https://nekos.life/api/v2/img/tits', function (error, response, body) {
                try {
                    let arr = JSON.parse(body);
                    let embed = new Discord.RichEmbed()
                        .setImage(arr['url'])
                        .setColor('RANDOM')
                        .setFooter(`requested by ${message.author.username} | powered by nekos.life`);
                    msg.edit({embed});
                } catch (e) {console.log(e)}
            });
        });
    } else if(['futanari', 'унеехуй'].includes(command)) {
	    actNSFW = actNSFW + 1;actALL = actALL +1;
        if (!message.channel.nsfw) return message.reply(NSFWembed);
        message.channel.send('Загрузка...').then(msg => {
            request('https://nekos.life/api/v2/img/futanari', function (error, response, body) {
                try {
                    let arr = JSON.parse(body);
                    let embed = new Discord.RichEmbed()
                        .setImage(arr['url'])
                        .setColor('RANDOM')
                        .setFooter(`requested by ${message.author.username} | powered by nekos.life`);
                    msg.edit({embed});
                } catch (e) {console.log(e)}
            });
        });
    } else if(['femdom'].includes(command)) {
	    actNSFW = actNSFW + 1;actALL = actALL +1;
        if (!message.channel.nsfw) return message.reply(NSFWembed);
        message.channel.send('Загрузка...').then(msg => {
            request('https://nekos.life/api/v2/img/femdom', function (error, response, body) {
                try {
                    let arr = JSON.parse(body);
                    let embed = new Discord.RichEmbed()
                        .setImage(arr['url'])
                        .setColor('RANDOM')
                        .setFooter(`requested by ${message.author.username} | powered by nekos.life`);
                    msg.edit({embed});
                } catch (e) {console.log(e)}
            });
        });
    } else if(['eron'].includes(command)) {
	    actNSFW = actNSFW + 1;actALL = actALL +1;
        if (!message.channel.nsfw) return message.reply(NSFWembed);
        message.channel.send('Загрузка...').then(msg => {
            request('https://nekos.life/api/v2/img/eron', function (error, response, body) {
                try {
                    let arr = JSON.parse(body);
                    let embed = new Discord.RichEmbed()
                        .setImage(arr['url'])
                        .setColor('RANDOM')
                        .setFooter(`requested by ${message.author.username} | powered by nekos.life`);
                    msg.edit({embed});
                } catch (e) {console.log(e)}
            });
        });
    } else if(['lewdkemo'].includes(command)) {
	    actNSFW = actNSFW + 1;actALL = actALL +1;
        if (!message.channel.nsfw) return message.reply(NSFWembed);
        message.channel.send('Загрузка...').then(msg => {
            request('https://nekos.life/api/v2/img/lewdkemo', function (error, response, body) {
                try {
                    let arr = JSON.parse(body);
                    let embed = new Discord.RichEmbed()
                        .setImage(arr['url'])
                        .setColor('RANDOM')
                        .setFooter(`requested by ${message.author.username} | powered by nekos.life`);
                    msg.edit({embed});
                } catch (e) {console.log(e)}
            });
        });
    } else if(['eroyuri'].includes(command)) {
	    actNSFW = actNSFW + 1;actALL = actALL +1;
        if (!message.channel.nsfw) return message.reply(NSFWembed);
        message.channel.send('Загрузка...').then(msg => {
            request('https://nekos.life/api/v2/img/eroyuri', function (error, response, body) {
                try {
                    let arr = JSON.parse(body);
                    let embed = new Discord.RichEmbed()
                        .setImage(arr['url'])
                        .setColor('RANDOM')
                        .setFooter(`requested by ${message.author.username} | powered by nekos.life`);
                    msg.edit({embed});
                } catch (e) {console.log(e)}
            });
        });
    } else if(['blowjob'].includes(command)) {
	    actNSFW = actNSFW + 1;actALL = actALL +1;
        if (!message.channel.nsfw) return message.reply(NSFWembed);
        message.channel.send('Загрузка...').then(msg => {
            request('https://nekos.life/api/v2/img/blowjob', function (error, response, body) {
                try {
                    let arr = JSON.parse(body);
                    let embed = new Discord.RichEmbed()
                        .setImage(arr['url'])
                        .setColor('RANDOM')
                        .setFooter(`requested by ${message.author.username} | powered by nekos.life`);
                    msg.edit({embed});
                } catch (e) {console.log(e)}
            });
        });
    } else if(['cum'].includes(command)) {
	    actNSFW = actNSFW + 1;actALL = actALL +1;
        if (!message.channel.nsfw) return message.reply(NSFWembed);
        message.channel.send('Загрузка...').then(msg => {
            request('https://nekos.life/api/v2/img/cum', function (error, response, body) {
                try {
                    let arr = JSON.parse(body);
                    let embed = new Discord.RichEmbed()
                        .setImage(arr['url'])
                        .setColor('RANDOM')
                        .setFooter(`requested by ${message.author.username} | powered by nekos.life`);
                    msg.edit({embed});
                } catch (e) {console.log(e)}
            });
        });
    } else if(['kemonomimi'].includes(command)) {
	    actNSFW = actNSFW + 1;actALL = actALL +1;
        if (!message.channel.nsfw) return message.reply(NSFWembed);
        message.channel.send('Загрузка...').then(msg => {
            request('https://nekos.life/api/v2/img/kemonomimi', function (error, response, body) {
                try {
                    let arr = JSON.parse(body);
                    let embed = new Discord.RichEmbed()
                        .setImage(arr['url'])
                        .setColor('RANDOM')
                        .setFooter(`requested by ${message.author.username} | powered by nekos.life`);
                    msg.edit({embed});
                } catch (e) {console.log(e)}
            });
        });
    } else if(['les'].includes(command)) {
	    actNSFW = actNSFW + 1;actALL = actALL +1;
        if (!message.channel.nsfw) return message.reply(NSFWembed);
        message.channel.send('Загрузка...').then(msg => {
            request('https://nekos.life/api/v2/img/les', function (error, response, body) {
                try {
                    let arr = JSON.parse(body);
                    let embed = new Discord.RichEmbed()
                        .setImage(arr['url'])
                        .setColor('RANDOM')
                        .setFooter(`requested by ${message.author.username} | powered by nekos.life`);
                    msg.edit({embed});
                } catch (e) {console.log(e)}
            });
        });
    } else if(['boobs'].includes(command)) {
	    actNSFW = actNSFW + 1;actALL = actALL +1;
        if (!message.channel.nsfw) return message.reply(NSFWembed);
        message.channel.send('Загрузка...').then(msg => {
            request('https://nekos.life/api/v2/img/boobs', function (error, response, body) {
                try {
                    let arr = JSON.parse(body);
                    let embed = new Discord.RichEmbed()
                        .setImage(arr['url'])
                        .setColor('RANDOM')
                        .setFooter(`requested by ${message.author.username} | powered by nekos.life`);
                    msg.edit({embed});
                } catch (e) {console.log(e)}
            });
        });
    } else if(['pussy'].includes(command)) {
	    actNSFW = actNSFW + 1;actALL = actALL +1;
        if (!message.channel.nsfw) return message.reply(NSFWembed);
        message.channel.send('Загрузка...').then(msg => {
            request('https://nekos.life/api/v2/img/pussy', function (error, response, body) {
                try {
                    let arr = JSON.parse(body);
                    let embed = new Discord.RichEmbed()
                        .setImage(arr['url'])
                        .setColor('RANDOM')
                        .setFooter(`requested by ${message.author.username} | powered by nekos.life`);
                    msg.edit({embed});
                } catch (e) {console.log(e)}
            });
        });
    } else if(['nneko', 'nNeko'].includes(command)) {
	    actNSFW = actNSFW + 1;actALL = actALL +1;
	    if (!message.channel.nsfw) return message.reply(NSFWembed);
        message.channel.send('Загрузка...').then(msg => {
            request('https://nekos.life/api/v2/img/nsfw_neko_gif', function (error, response, body) {
                try {
                    let arr = JSON.parse(body);
                    let embed = new Discord.RichEmbed()
                        .setImage(arr['url'])
                        .setColor('RANDOM')
                        .setFooter(`requested by ${message.author.username} | powered by nekos.life`);
                    msg.edit({embed});
                } catch (e) {console.log(e)}
            });
        });
    } else if(['smallboobs', 'smailboobs', 'цп'].includes(command)) {
	    actNSFW = actNSFW + 1;actALL = actALL +1;
        if (!message.channel.nsfw) return message.reply(NSFWembed);
        message.channel.send('Загрузка...').then(msg => {
            request('https://nekos.life/api/v2/img/smallboobs', function (error, response, body) {
                try {
                    let arr = JSON.parse(body);
                    let embed = new Discord.RichEmbed()
                        .setImage(arr['url'])
                        .setColor('RANDOM')
                        .setFooter(`requested by ${message.author.username} | powered by nekos.life`);
                    msg.edit({embed});
                } catch (e) {console.log(e)}
            });
        });
    } if(['invert', 'inverse'].includes(command)) {
	    actFUN = actFUN + 1; actALL = actALL + 1;
	    message.channel.startTyping()
	    let img = message.mentions.users.first() || args.join(" ");
	    if(!img) return message.reply("Упомяните нужного пользователя или добавьте ссылку");
jimp.read(img.avatarURL).then(function(image){
image.invert()
image.getBuffer(jimp.AUTO, (err, buffer) => {
	message.channel.stopTyping()
message.channel.sendFile(buffer, 'name.jpg');
})
});
message.channel.stopTyping()
	} else if(['magik', 'магия'].includes(command)) {

		actFUN = actFUN + 1; actALL = actALL + 1;
		message.channel.startTyping()
		let img = message.mentions.users.first() || args.join(" ");
		if(!img) return message.reply("Упомяните нужного пользователя или добавьте ссылку");
        jimp.read(`https://discord.services/api/magik?url=${img.avatarURL}`).then(function(image) {
        image.getBuffer(jimp.MIME_PNG, (error, buffer) => {
		message.channel.stopTyping()
          message.channel.send({files: [{ name: 'magik.png', attachment: buffer }] });
        });
      });
message.channel.stopTyping()
	} else if(['flip', 'флип'].includes(command)) {

		actFUN = actFUN + 1; actALL = actALL + 1;
		message.channel.startTyping()
	    let img = message.mentions.users.first() || args.join(" ");
	    if(!img) return message.reply("Упомяните нужного пользователя или добавьте ссылку");
      jimp.read(img.avatarURL).then(function(image) {
        image.flip(true, false);
        image.getBuffer(jimp.MIME_PNG, (error, buffer) => {
		message.channel.stopTyping()
          message.channel.send({files: [{ name: 'flip.png', attachment: buffer }] });
        });
      });
message.channel.stopTyping()
    } else if(['gay', 'гей'].includes(command)) {

	    actFUN = actFUN + 1; actALL = actALL + 1;
	    message.channel.startTyping()
	    let img = message.mentions.users.first() || args.join(" ");
	    if(!img) return message.reply("Упомяните нужного пользователя или добавьте ссылку");
      jimp.read(img.avatarURL).then(function(image) {
        jimp.read("https://cdn.glitch.com/8c009d94-1f7e-464c-82c2-bccaf15cb6cd%2Fgay.png").then(function(image2) {
          image.resize(768, 768);
          image2.fade(0.6);
          image.composite(image2, 0, 0);
          image.getBuffer(jimp.MIME_PNG, (error, buffer) => {
		  message.channel.stopTyping()
            message.channel.send({files: [{ name: 'gay.png', attachment: buffer }] });
          });
        });
      });
message.channel.stopTyping()
    } else if(['blur', 'пятно'].includes(command)) {

	    actFUN = actFUN + 1; actALL = actALL + 1;
	    message.channel.startTyping()
	    let img = message.mentions.users.first() || args.join(" ");
	    if(!img) return message.reply("Упомяните нужного пользователя или добавьте ссылку");
	    jimp.read(img.avatarURL).then(function(image) {
        image.blur(7);
        image.getBuffer(jimp.MIME_PNG, (error, buffer) => {
          message.channel.send({files: [{ name: 'blur.png', attachment: buffer }] });
        });
      });
	    message.channel.stopTyping()
    } else if(['banner'].includes(command)) {
	    
	    actFUN = actFUN + 1; actALL = actALL + 1;
	    const text = args.join(" ");
	    if(!text) return message.channel.send("text pls?");
	    const embed = new Discord.RichEmbed()
	    .setColor("RANDOM")
	    .setImage(`https://dummyimage.com/2000x500/33363c/ffffff&text=${encodeURIComponent(text)}`);
	    message.channel.send(embed)

    } else if(['sepia'].includes(command)) {
	     actFUN = actFUN + 1; actALL = actALL + 1;
	    message.channel.startTyping()
	    let img = message.mentions.users.first() || args.join(" ");
	    if(!img) return message.reply("Упомяните нужного пользователя или добавьте ссылку");
	    jimp.read(img.avatarURL).then(function(image) {
        image.sepia();
        image.getBuffer(jimp.MIME_PNG, (error, buffer) => {
          message.channel.send({files: [{ name: 'sepia.png', attachment: buffer }] });
        });
      });
	    message.channel.stopTyping()
    } else if (['roleinfo'].includes(command)) {
	    const moment = require("moment");
	    actFUN = actFUN + 1; actALL = actALL + 1;
	    let role = message.mentions.roles.first() || message.guild.roles.find('name', args.join(" "));
	    if(!role) return message.reply("упомяните роль или введите точное название роли.");

	 /*   let perms = {
			ADMINISTRATOR: 'Administrator',
			VIEW_AUDIT_LOG: 'View Audit Log',
			MANAGE_GUILD: 'Manage Server',
			MANAGE_ROLES: 'Manage Roles',
			MANAGE_CHANNELS: 'Manage Channels',
			KICK_MEMBERS: 'Kick Members',
			BAN_MEMBERS: 'Ban Members',
			CREATE_INSTANT_INVITE: 'Create Instant Invite',
			CHANGE_NICKNAME: 'Change Nickname',
			MANAGE_NICKNAMES: 'Manage Nicknames',
			MANAGE_EMOJIS: 'Manage Emojis',
			MANAGE_WEBHOOKS: 'Manage Webhooks',
			VIEW_CHANNEL: 'Read Text Channels and See Voice Channels',
			SEND_MESSAGES: 'Send Messages',
			SEND_TTS_MESSAGES: 'Send TTS Messages',
			MANAGE_MESSAGES: 'Manage Messages',
			EMBED_LINKS: 'Embed Links',
			ATTACH_FILES: 'Attach Files',
			READ_MESSAGE_HISTORY: 'Read Message History',
			MENTION_EVERYONE: 'Mention Everyone',
			USE_EXTERNAL_EMOJIS: 'Use External Emojis',
			ADD_REACTIONS: 'Add Reactions',
			CONNECT: 'Connect',
			SPEAK: 'Speak',
			MUTE_MEMBERS: 'Mute Members',
			DEAFEN_MEMBERS: 'Deafen Members',
			MOVE_MEMBERS: 'Move Members',
			USE_VAD: 'Use Voice Activity'
		};*/
	  let members = 0,
        normalMembers = 0,
        botMembers    = 0;
    role.members.forEach(g=>{
      members += 1
      if (g.user.bot) {
        botMembers += 1
      } else {
        normalMembers += 1
      }
    });
	   // const allPermissions = Object.entries(role.permissions.serialize()).filter(allowed => allowed[1]).map(([perm]) => this.perms[perm]).join(' ');
		const roleInfo = new Discord.RichEmbed()
			.setColor(role.hexColor || '#FFF')
			.addField('Название', role.name, true)
			.addField('ID', role.id, true)
			.addField('Цвет', role.hexColor || 'нету', true)
			.addField('Дата создания', moment(role.createdAt).format('MMMM Do YYYY'), true)
			.addField('Выделяется?', role.hoist ? 'да' : 'нет', true)
			.addField('Упоминаемая?', role.mentionable ? 'да' : 'нет', true)
			.addField('Носители', `${members} (${normalMembers} юзеров | ${botMembers} ботов)`, true);
			//.addField('Права', allPermissions);
		 message.channel.send(roleInfo);
    } else if(['invitelb'].includes(command)) {
	    actFUN = actFUN + 1; actALL = actALL + 1;
	    if(message.channel.type === 'dm') return message.channel.send("Работает только на серверах.");
	    let invites = await message.guild.fetchInvites().catch(error => { 
        return message.channel.send('Кажись у меня нет прав на просмотр инвайтов.');
    }) 

    invites = invites.array();

    arraySort(invites, 'uses', { reverse: true });
    let possibleInvites = [['User', 'Uses']];
    invites.forEach(function(invite) {
        possibleInvites.push([invite.inviter.username, invite.uses]);
    })
	    message.channel.send(` \`\`\`${table.table(possibleInvites)}\`\`\` `).catch(error => { 
		    return message.reply(`Однако ошибка: ${error}`)
	    })
    } else if(['battle', 'duel'].includes(command)) {
	    actFUN = actFUN + 1; actALL = actALL + 1;
	    let battler = message.mentions.users.first();
        if (!battler) return message.reply('Укажите противника');
        let b1health = Math.floor((Math.random() * 100));
        let b2health = Math.floor((Math.random() * 100));
        if (b1health > b2health) {
            let winner = message.author.username;
            const emb = new Discord.RichEmbed()
                .setAuthor(`Battle Arena`)
                .setThumbnail('https://cdn1.iconfinder.com/data/icons/unigrid-military/61/002_military_defense_defend_swords_shield-512.png')
                .addField('__юзер__', `${message.author.username}`, true)
                .addField('__оппонент__', `${battler.username}`, true)
                .addField("__здоровье юзера__", `${b1health}HP`, true)
                .addField("__здоровье оппонента__", `${b2health}HP`, true)
                .setFooter(`${winner} win🏆`)
                .setColor("#ffd954");
            message.channel.send({embed:emb});
        }

        if (b2health > b1health) {
            let winner = battler.username;
            const embed = new Discord.RichEmbed()
                .setAuthor(`Battle Arena`)
                .setThumbnail('https://cdn1.iconfinder.com/data/icons/unigrid-military/61/002_military_defense_defend_swords_shield-512.png')
                .addField('__юзер__', `${message.author.username}`, true)
                .addField('__оппонент__', `${battler.username}`, true)
                .addField("__здоровье юзера__", `${b1health}HP`, true)
                .addField("__здоровье оппонента__", `${b2health}HP`, true)
                .setFooter(`${winner} win🏆`)
	    .setColor("#ffd954");
            message.channel.send({embed:embed});
        }

        if (b2health === b1health) {
            let winner = 'draw'
            const embed = new Discord.RichEmbed()
                .setAuthor(`Battle Arena`)
                .setThumbnail('https://cdn1.iconfinder.com/data/icons/unigrid-military/61/002_military_defense_defend_swords_shield-512.png')
                .addField('__юзер__', `${message.author.username}`, true)
                .addField('__оппонент__', `${battler.username}`, true)
                .addField("__здоровье юзера__", `${b1health}HP`, true)
                .addField("__здоровье оппонента__", `${b2health}HP`, true)
                .setFooter(`Ничья...`)
                .setColor("#ffd954");
            message.channel.send({embed:embed});
        }
    } else if(['botinfo'].includes(command)) {
	    
	    actFUN = actFUN + 1; actALL = actALL + 1;
	    let bot = message.mentions.users.first();
	    let botid = bot.id;
	    if(!bot) return message.channel.send("Укажите бота");
	    if(!bot.bot) return message.channel.send("А это точно бот?");
	    request('https://discordbots.org/api/bots/' + botid, (e, r, b)=> {
						let contenu = JSON.parse(b)
					if(contenu.error === "Not found")  {
					const embed = new Discord.RichEmbed()
						embed.setDescription("**Error**\nУказан неправельный бот, либо данного бота нет в DBL.org, упомяните нужного вам бота.")
						embed.setColor("#ffd954")
						message.channel.send({embed});
					} else {
                                                const embed = new Discord.RichEmbed()
						embed.setAuthor(contenu.username, "https://cdn.discordapp.com/avatars/"+botid+"/"+contenu.avatar+".png")
						embed.setThumbnail("https://cdn.discordapp.com/avatars/"+botid+"/"+contenu.avatar+".png")
						embed.setColor("#ffd954")
						embed.setTimestamp()
						embed.addField(contenu.username, contenu.shortdesc, true)
						embed.addField("Проверенный? <:dblCertified:392249976639455232>", contenu.certifiedBot === true ? "Да <:tickYes:315009125694177281>" : "Нет <:tickNo:315009174163685377>", true)
						embed.addField("Количество серверов", contenu.server_count != 0 ? contenu.server_count : "Не опубликовано", true)
                                                embed.addField("Shards count", contenu.shard_count != 0 ? contenu.shard_count: "Нету, либо не опубликовано", true)
						embed.addField("Библиотека", contenu.lib, true)
						embed.addField("Дата добавления", contenu.date, true)
						embed.addField("Префикс", contenu.prefix, true)
						embed.addField("Upvotes", contenu.points, true)
						embed.addField("Создатель(ли)", "<@"+contenu.owners.join(">, <@")+">", true)
						embed.addField("тег(и)", contenu.tags.length != 0 ? contenu.tags.join(", ") : "Тегов нет", true)
						embed.addField("Ссылки", "[Invite](" + contenu.invite + "), [DBL.org](https://discordbots.org/bot/" + botid + " ), [Github](" + contenu.github + "), [Website](" + contenu.website + "), [Support Server](https://discordapp.com/invite/" + contenu.support + ")", true)
message.channel.send({embed});
						
    }
  })
    } else if(['weather', 'погода'].includes(command)) {
	    actFUN = actFUN + 1; actALL = actALL + 1;
	     weather.find({search: args.join(" "), degreeType: 'C'}, function(err, result) {
        if (err) message.channel.send(err);
    if (result.length === 0) {
        message.channel.send("**Пожалуйста укажите корректную локацию.**")
        return;
    }
    var current = result[0].current;
    var location = result[0].location;
    const embed = new Discord.RichEmbed()
        .setDescription(`**${current.skytext}**`)
        .setAuthor(`Weather for ${current.observationpoint}`)
        .setThumbnail(current.imageUrl)
        .setColor("RANDOM")
        .addField('Временая зона',`UTC${location.timezone}`, true)
        .addField('Тип',`°${location.degreetype}`, true) //°Celsius
        .addField('Температура',`${current.temperature} °C`, true)
        .addField('Средняя температура', `${current.feelslike} °C`, true)
        .addField('Ветер',current.winddisplay, true)
        .addField('Влажность', `${current.humidity}%`, true)
        .setFooter(`Requested by ${message.author.username}`);
        message.channel.send({embed: embed});
        });
    } else if(['discrim'].includes(command)) {
	    actFUN = actFUN + 1; actALL = actALL + 1;
	    const embed = new Discord.RichEmbed()
        .setColor("#0xffffff")
    if (isNaN(args[0]) || args[0] > 9999 || args[0] < 1) {
        embed.setFooter('Введите корректный дискриминатор');
        return message.channel.send(embed)
	    .catch(error => {
		message.channel.send(`Error: ${error}`)
	})
    }
   let resp = '';
   client.users.map(function(user) {
       if (user.discriminator == args[0]) return resp += `${user.tag}\n`;
       else return;
   })
    embed.setTitle(`Discrim: ${args[0]}`)
        .setDescription(resp);
    message.channel.send(embed)
    } else if(['QR', 'QRcode'].includes(command)) {
		const text = args.join(" ");
		QRCode.toString(text, function (err, string) {
			console.log(string)
                       message.channel.send(wrap(string))
                               .catch(err => message.channel.send(err))
		})
	} else if(['hastebin'].includes(command)) {
	    actFUN = actFUN + 1; actALL = actALL + 1;
	    let language = args[0];
	    if(!language) return message.reply("Укажите язык, например js, py, ruby");
	    args.shift();
	    let bin = args.join(" ");
	    if(!bin) return message.reply("Добавьте текст / код");
	    hastebin(language, bin).then(link => {
		    message.reply(`Готово, вот ваша ссылка: ${link}`)
	    }).catch(err => {
		    message.reply(`Error: ${err}`)
	    })
	   
    } else if (['test'].includes(command) && message.author.id === '361951318929309707') {
	    if(args[0] === "welcome") {
		    let member = message.mentions.users.first();
	    let q = member.tag;
        let r = message.guild.name;
        let img = member.displayAvatarURL;
        jimp.read(img).then(function(image) {
          jimp.read("https://i.imgur.com/8YEW9b1.png").then(function(image2) {
            jimp.loadFont(jimp.FONT_SANS_32_WHITE).then(function(font) {
              jimp.loadFont(jimp.FONT_SANS_16_WHITE).then(function(font2) {
                image2.print(font, 9, 150, q);
                image2.print(font2, 151, 111, `to ${r}`)
		image2.print(font2, 151, 131, `You are ${message.guild.memberCount}th member!`);
                image.resize(128, 128);
                image2.composite(image, 2, 2);
                image2.getBuffer(jimp.MIME_PNG, (error, buffer) => {
                	message.channel.send({files: [{ name: 'welcome.png', attachment: buffer }] });
                });
              });
            });
          });
        });
	    }
	    if(args[0] === "goodbye") {
		    let member = message.mentions.users.first();
	let q = member.tag;
        let r = message.guild.name;
        let img = member.displayAvatarURL;
        jimp.read(img).then(function(image) {
          jimp.read("https://i.imgur.com/whcWgdX.png").then(function(image2) {
            jimp.loadFont(jimp.FONT_SANS_32_WHITE).then(function(font) {
              jimp.loadFont(jimp.FONT_SANS_16_WHITE).then(function(font2) {
                image2.print(font, 9, 150, q);
                image2.print(font2, 161, 111, `from ${r}`);
                image.resize(128, 128);
                image2.composite(image, 2, 2);
                image2.getBuffer(jimp.MIME_PNG, (error, buffer) => {
                	message.channel.send({files: [{ name: 'goodbye.png', attachment: buffer }] });
                });
              });
            });
          });
        });
	    }
    } else if(['blacklist'].includes(command) && message.author.id ==='361951318929309707') {
		const ppll = message.mentions.users.first();
	    const ppl = ppll.id;
		if(args[0] === 'add') {
			bl.add(ppl)
			message.channel.send(`<@${ppl}> был добавлен в черный список до конца сесии.`)
		}
		if(args[0] === 'remove') {
			bl.delete(ppl)
			message.channel.send(`<@${ppl}> был убран из черного списка данной сесии.`)
		}
	} else if(['color'].includes(command)) {
		let color = args[0];
		
			request('http://www.thecolorapi.com/id?hex='+color, (err, resp, data) => {try {
				let xml = JSON.parse(data);
if (isNaN(hexToDec(xml.hex.clean))) 
				return message.channel.send(`немогу конвертировать \`${color}\` в цвет`);

			const colorEmbed = new Discord.RichEmbed()
				.setThumbnail(`https://dummyimage.com/500x500/${xml.hex.clean}/000000.png&text=${xml.name.value}`)
				.setColor(hexToDec(xml.hex.clean))
				.addField('HEX', xml.hex.clean, true)
				.addField('DEC', hexToDec(xml.hex.clean), true)
				.addField('CMYK', xml.cmyk.value, true)
				.addField('RGB', xml.rgb.value, true)
			        .addField('HSL', xml.hsl.value, true);
			if (xml.name.exact_match_name) colorEmbed.setTitle(`${xml.name.value}`);
			if (xml.name.value !== '' && !xml.name.exact_match_name)
				colorEmbed.setFooter(`Ближающие имя цвета: ${xml.name.value} (${xml.name.closest_named_hex})`, `https://dummyimage.com/500x500/${xml.name.closest_named_hex.slice(1)}/${xml.name.closest_named_hex.slice(1)}.png`);

			return message.channel.send(colorEmbed);
		} catch (err) {
			return message.channel.send(`${err}`);
		}
												   })
	} if (['adderole'].includes(command)) {
	if(!message.member.hasPermission("MANAGE_EMOJIS")) return message.channel.send("у вас нету нужных прав");
	let role = args[1];
	let emoji = args[0];
	if(!role) return message.channel.send('Укажите роль');
	if (!emoji) return message.channel.send('Введите id или название эмодзи');
	const RestrictedEmoji = message.guild.emojis.find('name', emoji) || message.guild.emojis.get(emoji);
    RestrictedEmoji.addRestrictedRole(message.guild.roles.get(role))
		.catch(e => message.channel.send("указывать id роли нужно в первую очередь"));
		message.channel.send("Успех!")
	} else if (['removeerole'].includes(command)) {
	if(!message.member.hasPermission("MANAGE_EMOJIS")) return message.channel.send("у вас нету нужных прав");
	let role = args[1];
	let emoji = args[0];
	if(!role) return message.channel.send('Укажите роль');
	if (!emoji) return message.channel.send('Введите id или название эмодзи');
	const RestrictedEmoji = message.guild.emojis.find('name', emoji) || message.guild.emojis.get(emoji);
    RestrictedEmoji.removeRestrictedRole(message.guild.roles.get(role))
	    .catch(e => message.channel.send("укажите данные наооборот"));
	message.channel.send("Успех!")
} else if (['hypetar'].includes(command)) {
	actFUN = actFUN + 1; actALL = actALL + 1;
	message.channel.startTyping()
	let hype;
	if(args[1] === "rainbow") {
	hype = "https://cdn.discordapp.com/attachments/481773525426765824/483227662341373952/Trinity.png"
	}
	if(args[1] === "balance") {
		hype = "https://images-ext-2.discordapp.net/external/ivOQ0sZnXorKlDTjqeQ9tihXRg88lhvhHBeWsDQ0fwY/https/pbs.twimg.com/media/DlJYn2YWwAIaPp3.png"
	}
	if(args[1] === "bravery") {
		hype = "https://images-ext-1.discordapp.net/external/Y2Z9pMQqlj6QA8tNImMjkHeqaDHqcax9Qu-icX48JAI/https/pbs.twimg.com/media/DlJYn2hX4AUuKrX.png"
	}
	if(args[1] === "brilliance") {
		hype = "https://images-ext-2.discordapp.net/external/mwLmPj01iXCH_5UYTSGsEO-gYmSYuCuxDYQBYQYwAHY/https/pbs.twimg.com/media/DlJYn24W0AAqQn6.png"
	}
	////
	if(args[1] === "balance" && args[2] === "2") {
		hype = "https://media.discordapp.net/attachments/472655542079455233/482093347817783298/balancedpacman.png"
	}
	if(args[1] === "bravery" && args[2] === "1") {
		hype = "https://media.discordapp.net/attachments/472655542079455233/482093346093924362/Bravery_v2.png"
	}
	if(args[1] === "brilliance" && args[2] === "3") {
		hype = "https://media.discordapp.net/attachments/472655542079455233/482093348644192277/Image-1.png"
	}
	/////////
	if(args[1] === "balance" && args[2] === "1") {
		hype = "https://media.discordapp.net/attachments/472655542079455233/482093411759947778/test.png"
	}
	if(args[1] === "brilliance" && args[2] === "2") {
		hype = "https://media.discordapp.net/attachments/472655542079455233/482093393594286102/profile-1.png"
	}
	if(args[1] === "brilliance" && args[2] === "1") {
		hype = "https://media.discordapp.net/attachments/472655542079455233/482093345385218058/1111.png"
	}
        let img = message.mentions.users.first();
	if(!img) return message.channel.send("укажите пользователя, пример: x!hypetar Unk#7585 bravery, x!hypetar Unk#7585 brilliance 1");
      jimp.read(img.avatarURL).then(function(image) {
        jimp.read(hype).then(function(image2) {
          image.resize(768, 768);
          image2.resize(768, 768);
          image.composite(image2, 0, 0);
          image.getBuffer(jimp.MIME_PNG, (error, buffer) => {
          message.channel.stopTyping()
            message.channel.send({files: [{ name: 'hypetar.png', attachment: buffer }] });
          });
        });
      });
message.channel.stopTyping()
} else if(['welcome'].includes(command)) {
	if (!message.author.id === "361951318929309707" || !message.member.hasPermission("ADMINISTRATOR") || !message.member.hasPermission("MANAGE_SERVER")) return message.channel.send("Доступ отклонен, недостаточно прав для настройки приветсвий");
	if(args[0] ==='channel') {
		args.shift();
		let c = args[0];
		if(!c) return message.channel.send("Укажите канал");
		let ch = message.guild.channels.get(c);
		con.query(`SELECT * FROM welcome WHERE guild = '${message.guild.id}'`, (err, rows) => {
			if(!rows[0]) {
				message.channel.send("для того чтоб настроить welcome нужно его создать, напишите x!welcome create");
			}
			if(err) throw err;
			con.query(`UPDATE welcome SET channel = "${ch.id}" WHERE guild = '${message.guild.id}'`);
			message.channel.send(`канал ${ch} был установлен для приветсвий`);
		});
	}
	if(args[0] ==='message') {
		args.shift();
		let text = args.join(" ");
		if(!text) return message.channel.send("Укажите текст");
		con.query(`SELECT * FROM welcome WHERE guild = '${message.guild.id}'`, (err, rows) => {
			if(!rows[0]) {
				message.channel.send("для того чтоб настроить welcome нужно его создать, напишите x!welcome create");
			}
			if(err) throw err;
			con.query(`UPDATE welcome SET message = "${text}" WHERE guild = '${message.guild.id}'`)
			message.channel.send("Запомнил! Для проверки пропишите `x!welcome test`");
		});
	}
	if(args[0] ==='title') {
		args.shift();
		let text = args.join(" ");
		if(!text) return message.channel.send("Укажите текст");
		con.query(`SELECT * FROM welcome WHERE guild = '${message.guild.id}'`, (err, rows) => {
			if(!rows[0]) {
				message.channel.send("для того чтоб настроить welcome нужно его создать, напишите x!welcome create");
			}
			if(err) throw err;
			con.query(`UPDATE welcome SET title = "${text}" WHERE guild = '${message.guild.id}'`)
			message.channel.send("Запомнил! Для проверки пропишите `x!welcome test`");
		});
	}
	if(args[0] ==='color') {
		args.shift();
		let text = args.join(" ");
		if(!text) return message.channel.send("Укажите цвет");
		con.query(`SELECT * FROM welcome WHERE guild = '${message.guild.id}'`, (err, rows) => {
			if(err) throw err;
			if(!rows[0]) {
				message.channel.send("для того чтоб настроить welcome нужно его создать, напишите x!welcome create");
			}
			con.query(`UPDATE welcome SET color = "${text}" WHERE guild = '${message.guild.id}'`)
			message.channel.send("Запомнил! Для проверки пропишите `x!welcome test`");
		});
	}
	if(args[0] ==='create') {
		con.query(`SELECT * FROM welcome WHERE guild = '${message.guild.id}'`, (err, rows) => {
			if(rows) return message.channel.send("Кажись у вас уже есть приветсвие");

		con.query(`INSERT INTO welcome (guild, channel, message, title, color) VALUES ('${message.guild.id}', '${message.channel.id}', 'Текст приветсвия не настроен, пожалуйста найстройте title, color, message', 'Welcome title!', '00ff00')`)
			message.channel.send("Создано! Теперь настройте welcome `x!welcome argument` \nАргументы: title, message, color, channel");
		})
	}
	if(args[0] ==='test') {
		let member = message.author;
		con.query(`SELECT * FROM welcome WHERE guild = '${message.guild.id}'`, (err, rows) => {
		if(!rows) return message.channel.send("для того чтоб настроить welcome нужно его создать, напишите x!welcome create");
		let text = rows[0].message;
		text = text.replaceAll("%member.username%", member.username)
		text = text.replaceAll("%member.tag%", member.tag)
		text = text.replaceAll("%member.id%", member.id)
		text = text.replaceAll("%member.avatar%", member.avatarURL)
		text = text.replaceAll("%guild.name%", message.guild.name)
		text = text.replaceAll("%guild.id%", message.guild.id)
		text = text.replaceAll("%guild.members%", message.guild.memberCount)
		text = text.replaceAll("%guild.icon%", message.guild.iconURL)
		let channe = client.channels.get(rows[0].channel);
		const embed = new Discord.RichEmbed()
		.setTitle(rows[0].title)
		.setDescription(text)
		.setColor(rows[0].color);
			channe.send(embed).catch(err => message.channel.send("Похоже вы не доконца настроили welcome, доступные пути: `color, message, title`"));
});
	}
} else if (['autorole'].includes(command)) {
		if (!message.author.id === "361951318929309707" || !message.member.hasPermission("ADMINISTRATOR") || !message.member.hasPermission("MANAGE_SERVER")) return message.channel.send("Доступ отклонен, недостаточно прав для настройки автороли");
	if(args[0] === 'set') {
		let rol = message.mentions.roles.first();
		if(!rol) return message.channel.send("Укажите роль");
	con.query(`SELECT * FROM autorole WHERE guild = '${message.guild.id}'`, (err, rows) => {
		if(rows) return message.channel.send("У вас уже назначена авто роль, используйте команду `x!autorole reset` для сброса роли.");
	});
		con.query(`INSERT INTO autorole (guild, role) VALUES ('${message.guild.id}', '${rol.id}'`, (err, rows) => {
			message.channel.send("Запомнил!");
		});
	}
	if(args[0] === 'reset') {
		con.query(`SELECT * FROM autorole WHERE guild = '${message.guild.id}'`, (err, rows) => {
		if(!rows) return message.channel.send("У вас нету авто роли.");
	});
		con.query(`DELETE FROM autorole WHERE guild = '${message.guild.id}'`, (err, rows) => {
			message.channel.send('Готово!');
		});
	}
}
});
client.login(process.env.BOT_TOKEN).catch(console.error);
process.env.BOT_TOKEN = 'NO';
process.env.OWN_TOKEN = 'NO';
process.env.PASS = 'NO';
