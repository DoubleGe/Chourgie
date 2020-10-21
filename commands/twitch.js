const discord = require("discord.js");
const lang = require("../lang.json");

module.exports.run = async (bot, message, args) => {

    if (message.guild.id != "442743221827797012") return message.reply("Sorry, dit command is op deze server disabled.") 
    if (!message.member.hasPermission("MANAGE_MESSAGES")) return message.reply(lang.NO_PERMISSION);

    if(![args[0]]) return message.channel.send("Geef een URL mee") 

    var liveUser = message.author.username;
    if(args[1]) liveUser = args[1];

    bot.user.setPresence({
        status: 'online',
        activity: {
            name: `${liveUser} streamt!`,
            type: 'STREAMING',
            url: `${args[0]}`
        }
    })

}

module.exports.help = {
    name: 'twitch',
    desc: "Maakt de bot status naar de stream.",
    cat: "Algemeen"
}