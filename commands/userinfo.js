const discord = require("discord.js");
const lang = require("../lang.json");

module.exports.run = async (bot, message, args) => {
    var userinfo = message.author;
    if(args[0]) userinfo = message.guild.member(message.mentions.users.first() || message.guild.members.get(args[0]));


    var userIcon = userinfo.displayAvatarURL();
        var botIcon = bot.user.displayAvatarURL();
        var serverEmbed = new discord.MessageEmbed()
            .setTitle("User info")
            .setColor("#0b84b8")
            .setThumbnail(userIcon)
            .addFields(
                {name: "Discord gebruikers naam: ", value: userinfo.username},
                {name: "Jij bent gejoined op: ", value: userinfo.joinedAt},
                {name: "Discord gejoined op: ", value: userinfo.createdAt}
            )
            .setFooter("Chourgie® ", botIcon)
            .setTimestamp();
    

        return message.channel.send(serverEmbed);
}

module.exports.help = {
    name: 'userinfo',
    desc: "Geeft userinfo.",
    cat: "Algemeen"
}