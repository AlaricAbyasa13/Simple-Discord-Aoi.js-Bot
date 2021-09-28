module.exports = ({
        name: 'report',
        aliases: ['report', 'rep'],
        category: 'Moderation',
        description: 'Report bug to us',
        code: `
            $channelSendMessage[YOUR CHANNEL ID;$get[msg]
$let[msg;{color:BLUE}{description:$get[desc]}{author:Reported by $userTag:$authorAvatar}{title:New Report!}{reactions:✅,❌};no]
$let[desc;$message]
$onlyIf[$message!=;{color:RED}{description:Please write anything to report}]
`
})

//SIMPLE REPORT BUG COMMAND, NOTE: CHANGE THE CHANNEL ID IN $channelSendMessage TO YOUR BOT REPORT CHANNEL!