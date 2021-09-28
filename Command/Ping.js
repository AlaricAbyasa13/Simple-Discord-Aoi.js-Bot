module.exports = ({
  name: 'ping',
  aliases: ['ping', 'oing'],
  category: 'utility',
  description: 'Return bot current ping', 
  code: `
  $color[BLUE]
  $author[Ping Pong!;$authorAvatar;$authorAvatar]
$description[**Ping**:
\`$pingms\`]
$footer[Requested by $userTag]
$addReactions[✅] $djsEval[// :v]
`
});

//SIMPLE PING COMMAND