const Discord = require('discord.js');
const client = new Discord.Client();

client.on('ready', () => {
    console.log('I am ready!');
});

client.on('message', message => {
    if (message.content === 'can u give me ur blessing?') {
    	message.reply('ＢＬＥＳＳＩＮＧ〜');
  	}
    if (message.content === 'ai-chan') {
    	message.reply('mm?');
  	}
    if (message.content === 'Ai-chan') {
        message.reply('Nandeshou?');
    }
    if (message.content === 'fuck u ai-chan') {
        message.reply('fuck u too, kanchou~');
    }
});

// THIS  MUST  BE  THIS  WAY
client.login(process.env.BOT_TOKEN);
