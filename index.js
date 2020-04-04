const Discord = require('discord.js');
const bot = new Discord.Client();

const token = "Njk1OTE2MjQzODE5MTY3NzQ0.XohIhw.tJ0DNGpkMGtzetXhsIPIoR3iCLo";

const command_prefix = '.';

bot.on('ready', () => {
    console.log('This bot is online!');
});

bot.on('message', (msg) =>{
    let args = msg.content.substring(command_prefix.length).split(' ');
    switch(args[0]){
        case 'play':
            let rest = args.slice(1, args.length);
            msg.reply('Playing: ' + rest.join(' '));
            break;
        case 'pause':
            let response = (args.length == 1 ? 'Pausing' : 'Invalid Parameters for Pause Command');
            msg.reply(response);
            break;
    }
});

bot.login(token);