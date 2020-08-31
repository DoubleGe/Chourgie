const discord = require("discord.js");
const lang = require("../lang.json");
const fs = require("fs");
const warns = JSON.parse(fs.readFileSync("./warns.json", "utf8"));

module.exports.run = async (bot, message, args) => {

    //;warn {Speler} [reden]

        if (!message.member.hasPermission("KICK_MEMBERS")) return message.reply(lang.NO_PERMISSION);

        if (!message.guild.me.hasPermission("BAN_MEMBERS")) return message.reply(lang.BOT_NO_PERMISSION);
    
        if (!args[0]) return message.reply(lang.KICKBAN_NO_PLAYER);
    
        if (!args[1]) return message.reply(`Geef een reden mee.`);
    
        var warnUser = message.guild.member(message.mentions.users.first() || message.guild.members.get(args[0]));
    
        var reason = args.slice(1).join(" ");
    
        if (!warnUser) return message.reply(`Gebruiker ${warnUser} niet gevonden`);

        if(warnUser.hasPermission("MANAGE_MESSAGES")) return message.reply("Sorry, je kan deze gebruiker niet een waarschuwing geven.");

        if(!warns[warnUser.id]) warns[warnUser.id] = {
            warns: 0
        };

        warns[warnUser.id].warns++;

        fs.writeFile("./warnings.json", JSON.stringify(warns), (err) =>{
            if(err) console.log(err);
        });

        var embed = new discord.MessageEmbed()
        .setColor("#ff0000")
        .setThumbnail(warnUser.displayAvatarURL)
        .setDescription(`**Gewaarschuwd:** ${warnUser} (${warnUser.id})
            **Gewaarschuwd door:** ${message.author}
            **Reden:** ${reason}`)
        .addField("Aantal waarschuwnigen", warns[warnUser.id].warns)
        .setFooter("Chourgie®", bot.user.displayAvatarURL())
        .setTimestamp();

        var channel = message.member.guild.channels.chache.get("482898148465836054");

        if(!channel) return;

        channel.setColor(embed);

        if(warns[warnUser.id].warns == 2){

            var warnembed = new discord.MessageEmbed()
        .setColor("#ff0000")
        .setDescription("PAS OP\nJe als je nog 1 waarschuwing krijgt krijg je een ban!")
        .setFooter("Chourgie®", bot.user.displayAvatarURL())
        .setTimestamp();

            message.channel.send(warnUser, warnembed)

        } else if (warns[warnUser.is].warns == 3){

            message.guild.member(warnUser).ban("Je hebt 3 waarschuwingen gekregen.");
            message.channel.send(`${warnUser} is verbannen van de server vanwege teveeel warns.`)

        }

}

module.exports.help = {
    name: 'warn',
    desc: "Waarschuw een gebruiker.",
    cat: "Admin"
}