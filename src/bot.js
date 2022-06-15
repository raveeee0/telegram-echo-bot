const { Telegraf } = require('telegraf')    // Import telegraf object
require('dotenv').config(); // Configuration control


const bot = new Telegraf(process.env.BOT_TOKEN);    // Create a bot instance


//Handler for start command
bot.start((ctx) => {
    ctx.reply("Welcome to the reply bot! Type in anything, i will echo it.");
});

//Handler for help command
bot.help((ctx) => {
    ctx.reply("You can have information calling the /start command");
});


//Handler for document sent event
bot.on('document', (ctx) => ctx.reply("I cannot work with docs!"));


//Handler for message sent event - echo functionality
bot.on('message', (ctx) => {
    ctx.reply(ctx.chat.username + ': ' + ctx.message.text);
})


process.once('SIGINT', () => bot.stop('SIGINT'));
process.once('SIGTERM', () => bot.stop('SIGTERM'));

bot.launch();