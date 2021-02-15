const discord = require("discord.js");
const lang = require("../lang.json");

module.exports.run = async (bot, message, args) => {

    var userIcon = message.member.displayAvatarURL();
        var botIcon = bot.user.displayAvatarURL();
        var serverEmbed = new discord.MessageEmbed()
            .setTitle("User info")
            .setColor("#0b84b8")
            .setThumbnail(userIcon)
            .addFields(
                {name: "Discord gebruikers naam: ", vallue: message.username},
                {name: "Jij bent gejoined op: ", value: message.member.joinedAt},
                {name: "Discord gejoined op: ", value: message.member.createdTimestamp}
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