//READ THIS!

//THIS REPL IS CREATED BY <@828434675378159647> WITH AOI.JS BUT YOU CAN EDIT, MODIFY OR FORK THIS REPL!

//NEED HELP? JOIN OUR DISCORD SERVER HERE -> https://discord.com/invite/qMRrrKAdNS

//CREATE NEW APPLICATION IN DISCORD DEVELOPER PORTAL THEN MAKE A NEW BOT COPY THE TOKEN, MAKE A TOKEN ENVIRONMENT VARIABLE IN SECRET ENVIRONMENT VARTIABLE AND NAME IT "TOKEN" AFTER THAT PUT YOUR BOT TOKEN IN SECRET ENVIRONMENT VARIABLE VALUE THEN CLICK "Add New Secret" BUTTON IN SECRET ENVIRONMENT VARIABLE.

//GO TO COMMAND FOLDER FOR OTHER COMMAND, YOU CAN EDIT, MODIFY OR CREATE OTHER COMMAND TOO!

//BOT PREFIX IS "!" BUT YOU CAN CHANGE WHATEVER YOU WANT
const apply = require('aoi.js');
require('dotenv/config');
const bot = new apply.Bot({
	token: process.env.TOKEN,
	prefix: ['!', '! ', '<@$clientID>', '<@$clientID> ', '<@!$clientID>', '<@!$clientID> ']
});

bot.onMessage();
bot.loadCommands('./commands/');
bot.readyCommand({
        code: `
$log[Activating Bot $userTag]
`})

//Bot Status
bot.status({
  text: "My Database",
  type: "WATCHING",
  status: "online",
  time: 12
})

//Reboot Command
bot.command({
	name: 'reboot',
  aliases: 'reload',
	code: `
$updateCommands
$onlyIf[$checkContains[$authorID;640020336309436417;706717165583204474;$botOwnerID]==true;Only the bot owner can use this command!]
`
})

//Eval Command (This Is Important Command For Bot Developer)
bot.command({
	name: 'eval',
	aliases: 'ev',
	code: `
$eval[$message]
$onlyIf[$checkContains[$authorID;706717165583204474;640020336309436417;$botOwnerID]==true;Only the bot owner can use this command!]
`
})

//This Make Your Bot Uptime But Not 100% Uptime, Use UptimeRobot.com For 24/7 Uptime
const express = require('express');
const app = express();

app.use(express.static('public'));

app.get('/', (request, response) => {
	response.sendFile(__dirname + '/index.html');
});
//...
//...
const listener = app.listen(process.env.PORT, () => {
	console.log('Listening on Port: ' + '[' + listener.address().port + ']');
});

const data = require('./variables.js')
bot.variables(data)
