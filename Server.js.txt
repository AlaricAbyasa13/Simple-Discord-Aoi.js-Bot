module.exports = {
    name: 'serverinfo',
    aliases: ['serverinfo', 'server-info'],
    category: 'utility',
    description: 'Return Server Information',
    code: `
$author[$serverName;$serverIcon;$serverIcon]
$color[BLUE]
$description[
\`Server Info!\`
]

$addField[All Members;Total: \`$membersCount\`
Bot: \`$botCount\`
People: \`$replaceText[$sub[$membersCount;$botCount];-;]\`;no]

$addField[Roles;\`$roleCount Roles\`;no]

$addField[Server Owner;\`$userTag[$ownerID]\`;no]

$footer[Server Info!]
`
}

//SIMPLE SERVER INFO COMMAND