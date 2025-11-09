const { Client, GatewayIntentBits } =
require('discord.js');
require('dotenv').config();

const client = new Client({
    intents: [
        GatewayIntentBits.Guilds,
        GatewayIntentBits.GuildMessages,
        GatewayIntentBits.MessageContent]
});

client.once('ready', () => {
    console.log(`israelgpt activated as ${client.user.tag}`);
});

client.on('messageCreate', message => {

    if (message.author.bot) return;

    if (message.content.toLowerCase() === 'diddyblud') {
        message.reply('blud :skull:');
    }
});

client.login(process.env.DISCORD_TOKEN);
