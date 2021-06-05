const discord = require("discord.js");
const lang = require("../lang.json");

module.exports.run = async (bot, message, args) => {

    if (message.guild.id != "442743221827797012") return message.reply("Sorry, dit command is op deze server disabled.") 
    if (!message.member.hasPermission("MANAGE_MESSAGES")) return message.reply(lang.NO_PERMISSION);

    if(![args[0]]) return message.channel.send("Geef een text mee") 
    var text = args.join(" ");

    bot.user.setActivity(`${text}.`, { type: "PLAYING" });
}

module.exports.help = {
    name: 'status',
    desc: "Status van de Bot.",
    cat: "Hide"
}