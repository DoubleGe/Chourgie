const discord = require("discord.js");
const lang = require("../lang.json");

module.exports.run = async (bot, message, args) => {

    var bericht = args.join(' ');
    if(!bericht) return message.channel.send("Gebruik ;bug [bug].");

    var channel = bot.channels.get('641634149001592843'); //Bug channel
    channel.send("**Bug:**\n" + bericht + "\nReported door:" + message.author.tag);
}

module.exports.help = {
    name: 'bug',
    desc: "Report een bug.",
    cat: "Algemeen"
}