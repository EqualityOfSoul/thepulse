const YoutubeDL = require('youtube-dl');
const Request = require('request');
exports.commands = [
	"play",
	"skip",
	"queue",
	"dequeue",
	"pause",
	"resume",
	"volume"
]

let options = true;
	let PREFIX = (options && options.prefix) || 'x!';
	let GLOBAL_QUEUE = (options && options.global) || false;
	let MAX_QUEUE_SIZE = (options && options.maxQueueSize) || 150;
	// Create an object of queues.
	let queues = {};

	function getQueue(server) {
		// Check if global queues are enabled.
		if (GLOBAL_QUEUE) server = '_'; // Change to global queue.

		// Return the queue.
		if (!queues[server]) queues[server] = [];
		return queues[server];
	}


exports.play = {
	usage: "[Поисковый запрос или ссылка на видео]",
	description: "Проигрывает звук в голосовом чате",
	process :function(client, msg, suffix, isEdit){
		if(isEdit) return;
		var arr = msg.guild.channels.filter((v)=>v.type == "voice").filter((v)=>v.members.has(msg.author.id));
		// Make sure the user is in a voice channel.
		if (arr.length == 0) return msg.channel.sendMessage( wrap('Вы должны находиться в голосовом чате чтобы включить музыку'));

		// Make sure the suffix exists.
		if (!suffix) return msg.channel.sendMessage( wrap('Введите название или ссылку на видео'));

		// Get the queue.
		const queue = getQueue(msg.guild.id);

		// Check if the queue has reached its maximum size.
		if (queue.length >= MAX_QUEUE_SIZE) {
			return msg.channel.sendMessage( wrap('Слишком много запросов!'));
		}

		// Get the video information.
		msg.channel.sendMessage( wrap('Поиск...')).then(response => {
			// If the suffix doesn't start with 'http', assume it's a search.
			if (!suffix.toLowerCase().startsWith('http')) {
				suffix = 'gvsearch1:' + suffix;
			}
			
			// Get the video info from youtube-dl.
			YoutubeDL.getInfo(suffix, ['-q', '--no-warnings', '--force-ipv4'], (err, info) => {
				// Verify the info.
				if (err || info.format_id === undefined || info.format_id.startsWith('0')) {
					console.error(err);
					return response.edit( wrap('Произошла ошибка!'));
				}

				// Queue the video.
				response.edit( wrap('В очередь добавлено: ' + info.title)).then((resp) => {
					queue.push(info);
					console.error(info);
					// Play if only one element in the queue.
					if (queue.length === 1) {
						executeQueue(client, msg, queue);
						resp.delete(1000);
					}
				}).catch(() => {});
			});
		}).catch(() => {});
	}
}


exports.skip = {
	description: "Пропустить песню",
	process:function(client, msg, suffix) {
		const voiceConnection = client.voiceConnections.get(msg.guild.id);
		if (voiceConnection === null) return msg.channel.sendMessage( wrap('Музыка сейчас не играет.'));

		const queue = getQueue(msg.guild.id);

		let toSkip = 1; 
		if (!isNaN(suffix) && parseInt(suffix) > 0) {
			toSkip = parseInt(suffix);
		}
		toSkip = Math.min(toSkip, queue.length);

		queue.splice(0, toSkip - 1);

		if (voiceConnection.player.dispatcher) voiceConnection.player.dispatcher.resume();
		if(queue.length>2){
			voiceConnection.player.dispatcher.end();
			msg.channel.sendMessage( wrap('Пропущена песня'));
		}
		else{
			msg.channel.sendMessage( wrap('Послюднюю песню не могу пропустить, решение данной проблемы в процессе поиска...'));
		}
		
	}
}

exports.queue = {
	description: "Выводит список песен",
	process: function(client, msg, suffix) {
		const queue = getQueue(msg.guild.id);

		const text = queue.map((video, index) => (
			(index + 1) + ': ' + video.title
		)).join('\n');

		let queueStatus = 'Остановлен';
		const voiceConnection = client.voiceConnections.get(msg.guild.id);
		if (voiceConnection !== null && voiceConnection != undefined) {
			queueStatus = voiceConnection.paused ? 'Остановлен' : 'Играет';
		}

		msg.channel.sendMessage( wrap('Список песен (' + queueStatus + '):\n' + text));
	}
}


exports.dequeue = {
	description: "Убиарет песню из списка по номеру.",
	process: function(client, msg, suffix) {
		const usageString = 'Использовать команду так: !dequeue <номер>. Используйте список песен чтобы выбрать интересующую вас.';
		
		const queue = getQueue(msg.guild.id);

		if (!suffix)
			return msg.channel.sendMessage( wrap('Нужно ввести номер песни.  ' + usageString));

		var split = suffix.split(/(\s+)/);

		if (split.length > 1)
			return msg.channel.sendMessage( wrap('Нужно ввести только номер песни.  ' + usageString));
		
		var index = parseInt(split[0]);
		var songRemoved = ''; 
		if (!isNaN(index)) {
			index = index - 1;
			
			if (index >= 0 && index < queue.length) {
				songRemoved = queue[index].title;
				
				if (index == 0) {
					const voiceConnection = client.voiceConnections.get(msg.guild.id);
					if (voiceConnection.player.dispatcher) 
						voiceConnection.player.dispatcher.resume();
					voiceConnection.player.dispatcher.end();
				} else {
					queue.splice(index, 1);
				}				
			} else {
				return msg.channel.sendMessage( wrap('Проверьте, правильно лы вы выбрали номер песни.  ' + usageString));
			}
		} else {
			return msg.channel.sendMessage( wrap('Проверьте, правильно лы вы написали номер песни.  ' + usageString));
		}
		
		msg.channel.sendMessage( wrap('Убрана песня \'' + songRemoved + '\' из очереди.'));
	}
}


exports.pause = {
	description: "Остановить проигрывание",
	process: function(client, msg, suffix) {
		const voiceConnection = client.voiceConnections.get(msg.guild.id);
		if (voiceConnection == null) return msg.channel.sendMessage( wrap('Список проигрывания пуст.'));

		msg.channel.sendMessage( wrap('Пауза'));
		if (voiceConnection.player.dispatcher) voiceConnection.player.dispatcher.pause();
	}
}


exports.resume = {
	description: "Продолжить проигрывание",
	process: function(client, msg, suffix) {
		const voiceConnection = client.voiceConnections.get(msg.guild.id);
		if (voiceConnection == null) return msg.channel.sendMessage( wrap('Список проигрывания пуст.'));

		msg.channel.sendMessage( wrap('Проигрывается.'));
		if (voiceConnection.player.dispatcher) voiceConnection.player.dispatcher.resume();
	}
}

exports.volume = {
	usage: "[volume|volume%|volume dB]",
	description: "Устанавливает громкость музыки в численном значении, в процентах, в децибелах",
	process: function(client, msg, suffix) {
		const voiceConnection = client.voiceConnections.get(msg.guild.id);
		if (voiceConnection == null) return msg.channel.sendMessage( wrap('Список проигрывания пуст.'));
		if (voiceConnection.player.dispatcher) {
			if(suffix == ""){
				var displayVolume = Math.pow(voiceConnection.player.dispatcher.volume,0.6020600085251697) * 100.0;
				msg.channel.sendMessage(wrap("volume: " + displayVolume + "%"));
			} else {
				if(suffix.toLowerCase().indexOf("db") == -1){
					if(suffix.indexOf("%") == -1){
						if(suffix > 1) suffix /= 100.0;
						voiceConnection.player.dispatcher.setVolumeLogarithmic(suffix);
					} else {
						var num = suffix.split("%")[0];
						voiceConnection.player.dispatcher.setVolumeLogarithmic(num/100.0);
					}
				} else {
					var value = suffix.toLowerCase().split("db")[0];
					voiceConnection.player.dispatcher.setVolumeDecibels(value);
				}
			}
		}
	}
}


function executeQueue(client, msg, queue) {
		if (queue.length === 0) {
			msg.channel.sendMessage( wrap('Список проигрывания пуст, покидаю чат...'));

			const voiceConnection = client.voiceConnections.get(msg.guild.id);
			if (voiceConnection != null) {
				voiceConnection.player.dispatcher.end();
				voiceConnection.channel.leave();
				return;
			}
		}

		new Promise((resolve, reject) => {
			const voiceConnection = client.voiceConnections.get(msg.guild.id);
			if (voiceConnection == null) {
				var voiceChannel = getAuthorVoiceChannel(msg);
				if (voiceChannel != null) {
					voiceChannel.join().then(connection => {
						resolve(connection);
					}).catch(console.error);
				} else {
					// Otherwise, clear the queue and do nothing.
					queue.splice(0, queue.length);
					reject();
				}
			} else {
				resolve(voiceConnection);
			}
		}).then(connection => {
			const video = queue[0];

			msg.channel.sendMessage( wrap('Сейчас играет: ' + video.title)).then((cur) => {
				const dispatcher = connection.playStream(Request(video.url));
				//dispatcher.then(intent => {
					dispatcher.on('debug',(i)=>console.log("debug: " + i));
					dispatcher.on('error', (err) => {
						msg.channel.sendMessage("fail: " + err);
						queue.shift();
						executeQueue(client, msg, queue);
					});

					dispatcher.on('end', () => {
						setTimeout(() => {
							queue.shift();

							executeQueue(client, msg, queue);
						}, 1000);
					});
				//}).catch((ex) => {msg.channel.sendMessage("playStream fail: " + ex)});//*/
			}).catch(console.error);
		}).catch(console.error);
	}

function getAuthorVoiceChannel(msg) {
	var voiceChannelArray = msg.guild.channels.filter((v)=>v.type == "voice").filter((v)=>v.members.has(msg.author.id)).array();
	if(voiceChannelArray.length == 0) return null;
	else return voiceChannelArray[0];
}

function wrap(text) {
	return '```\n' + text.replace(/`/g, '`' + String.fromCharCode(8203)) + '\n```';
}
