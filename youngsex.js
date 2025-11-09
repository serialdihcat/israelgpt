const { Client, GatewayIntentBits } =
require('discord.js');
require('dotenv').config();

const client = new Client({
    intents: [
        GatewayIntentBits.Guilds,
        GatewayIntentBits.GuildMessages,
        GatewayIntentBits.MessageContent]
});

const PREFIX = '!';
const PASSWORD = 'goyimdestroyer333';
const ANSWER = 'people who we wont allow in our holy land';
const CODEWORD = 'oy vey';

client.once('ready', () => {
    console.log(`israelgpt activated as ${client.user.tag}`);
});

client.on('messageCreate', async message => {

    if (message.author.bot) return;

    if (message.content.toLowerCase() === 'diddyblud') {
        message.reply('blud :skull:');
    }

    if (message.content.toLowerCase() === `${PREFIX}nuke`) {

        const channel = message.channel;
        channel.send("Password:");

        const filter = m => m.author.id === message.author.id;

        try {
            const collectedPassword = await channel.awaitMessages({ filter, max: 1, time: 60000, errors: ['time'] });
            const passwordInput = collectPassword.first();

            if (passwordInput) {
                 try { await passwordInput.delete(); } catch (e) { console.error("couldnt delete the password :(", e); }
            }

            if (passwordInput.content.toLowerCase() !== PASSWORD) {
                 return channel.send("Access denied.");
            }

            channel.send("Welcome, IDF General.");

        } catch (error) {
            return channel.send("Access denied.");
        }

        channel.send("Secondary authentication needed: What does goyim mean?");

        try {
            const collectedAnswer = await channel.awaitMessages({ filter, max: 1, time: 60000, errors: ['time'] });
            const answerInput = collectedAnswer.first();

            if (answerInput.content.toLowerCase() !== ANSWER) {
                 return channel.send("Incorrect.");
            }

            channel.send("Correct. Commencing operation Jane Remover...");
            channel.send("Arming nuclear sites...");
            channel.send("Setting Palestinian hospitals as targets...");
            channel.send("Nukes ready.");

        } catch (error) {
            return channel.send("Timed out.");
        }

        channel.send("Send codeword for final confirmation.");

        try {
            const collectedCodeword = await channel.awaitMessages({ filter, max: 1, time: 60000, errors: ['time'] });
            const codewordInput = collectedCodeword.first();

            if (codewordInput) {
                try { await codewordInput.delete(); } catch (e) { console.error("couldnt delete codeword :(", e); }
            }

            if (codewordInput.content.toLowercase() !== CODEWORD) {
                return channel.send("Wrong codeword. Cancelling operation....");
            }

            channel.send("Nuclear warheads have been launched.");

            setTimeout(() => {
                channel.send("Hospitals destroyed. Glory to the IDF.");
            }, 5000);

        } catch (error) {
            return channel.send("Timed out. Missiles dumped on Iran.");
        }
    }
});

client.login(process.env.DISCORD_TOKEN);
