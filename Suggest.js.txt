module.exports = {
    name: 'suggest',
    aliases: ['suggest', 'addsuggestion'],
    category: 'Moderation',
    description: 'Didnt have enough fun? Suggest what does you like!',
    code: `
    $channelSendMessage[YOUR CHANNEL ID;$get[msg]
$let[msg;{color:BLUE}{description:$get[desc]}{author:Suggested by $userTag:$authorAvatar}{title:New Suggestion!}{reactions:✅,❌};no]
$let[desc;$message]
$onlyIf[$message!=;{color:RED}{description:Please write anything to suggest}]
`
}

//SIMPLE SUGGEST COMMAND, NOTE: CHANGE THE CHANNEL ID IN $channelSendMessage TO YOUR BOT SUGGEST CHANNEL!