const discord = require("discord.js");
const lang = require("../lang.json");

module.exports.run = async (bot, message, args) => {
    var guild = await message.guild;
    
   if(!args[0]) return message.channel.send("Geef een rol id mee.");
   try {guild.roles.cache.get(args[0])}
   catch { message.channel.send("Oeps. Er ging iets fout"); return;}
   message.channel.send(`De Rol heeft ${guild.roles.cache.get(args[0]).members.size} members`)

}

module.exports.help = {
    name: 'rolecount',
    desc: "Ik zeg Hallo tegen jou.",
    cat: "Algemeen"
}