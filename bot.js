const Discord = require('discord.js');
const client = new Discord.Client();

client.on('ready', () => {
    console.log('I am ready!');
});

client.on('message', message => {
    if (message.content === 'ping') {
    	message.reply('pong');
  	}
});

// THIS  MUST  BE  THIS  WAY
client.login(process.env.MzgzNjIzNzk0Nzc2MDgwMzg1.DQqUvw.r6n1Yq7QjUM8AfHojrxplmJ4Wy0);
