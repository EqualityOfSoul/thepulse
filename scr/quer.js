const Discord = require("discord.js");
const client = new Discord.Client();
client.on('ready', () => {
  console.log('quer module is ready!')
  client.user.setActivity('The main module is disabled');
});
client.login(process.env.BOT_TOKEN)
