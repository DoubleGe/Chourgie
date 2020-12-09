const discord = require("discord.js");
const lang = require("../lang.json");

module.exports.run = async (bot, message, args) => {
    var guild = await message.guild;
    var membercount
    
   if(!args[0]) return message.channel.send("Geef een rol id mee.");
   try {guild.roles.cache.get(args[0])}
   catch { message.channel.send("Oeps. Er ging iets fout"); return;}
   membercount = guild.roles.cache.get(args[0]);
   message.channel.send(`De Rol heeft ${membercount} members`);
}

module.exports.help = {
    name: 'rolecount',
    desc: "Ik zeg Hallo tegen jou.",
    cat: "Algemeen"
}