module.exports = {
    name: 'help',
    aliases: ['help', 'cmd', 'command', 'commands', 'cmdlist', 'commandlist'],
    category: 'utility',
    description: 'Return This Command',
    code: `
$title[**My Bot Command!**]
$color[BLUE]
$description[Command:]
$addField[HELP;\`Return This Command\`;yes]
$addField[PING;\`Return Bot Ping\`;yes]
$addField[SERVERINFO;\`Return Server Information\`;yes]
$addField[SUGGEST;\`Didn't have enough fun? Suggest what does you like!\`;yes]
$addField[REPORT;\`Someone break the rules? Don't mini-mod it. Report it to us\`;yes]
$footer[My Bot Commands!]
$addTimestamp

`
}

//SIMPLE HELP COMMAND