const discord = require("discord.js");
const lang = require("../lang.json");

module.exports.run = async (bot, message, args) => {

    const categoryID = "728344160628899871";
    var botIcon = bot.user.displayAvatarURL();

    //if(!message.member.hasPermission("MANNAGE_MESSAGES")) return message.reply(lang.NO_PERMISSION);
    var catID;
    var guild = message.guild;
    if(guild.channels.cache.find(cat => cat.name.toLowerCase() === "tickets")) catID = guild.channels.cache.find(cat => cat.name.toLowerCase() === "tickets").id;
    else catID = categoryID;

    if(message.channel.parentID == catID){
        message.channel.delete();
    } else{
        message.channel.send("Dit command kan je alleen gebruiken in een geopende ticket.");
    }

    //---> Naar Log kanaal
}

module.exports.help = {
    name: 'close',
    desc: "Sluit een ticket.",
    cat: "Algemeen"
}