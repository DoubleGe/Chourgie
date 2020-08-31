const discord = require("discord.js");
const lang = require("../lang.json");

module.exports.run = async (bot, message, args) => {

    if (message.guild.id != "619115676006875158" && message.guild.id != "442743221827797012") return message.reply("Sorry, dit command is op deze server disabled.")


    if (!message.member.hasPermission("MANAGE_MESSAGES")) return message.reply("You don't have permission for this.");
    
   if (!args[0]) return message.reply("Gebruik ;hw **[Datum] [Vak] [Huiswerk]**.");

   var tijdHw = args[0];

   if (!args[1]) return message.reply("Voeg een vak toe.");

   var vakHw = args[1].toLowerCase();

   var hwerk = args.join(" ").slice(13);

   if (vakHw == "rek" || vakHw == "Rek") {
       var les = "Hyltsje Altenburg - Rekenen"
   } else if (vakHw == "ned") {
       var les = "Therèse van der Leeden - Nederlands"
   } else if (vakHw == "eng") {
       var les = "Yelena de Wit - Engels" //Yelena de Wit
   } else if (vakHw == "pro") {
       var les = "Rubin de Bruin - Programmeren"
   } else if (vakHw == "slb") {
       var les = "René Balkenende - SLB"
   } else if (vakHw == "rap") {
       var les = "Joram Wolters & Frank van Vught - Rapid"
   } else if (vakHw == "bur") {
        var les = "Dick Wories - Burgerschap"
   } else if (vakHw == "gad") {
        var les = "Joram Wolters - GameDesign"
   } else if (vakHw == "gap") {
       var les = "Frank van Vught - GamePlay"
   } else if (vakHw == "pro") {
       var les = "Project"
   } else {
       return message.reply("Ik ken deze les niet \n**Lessen:** rek, ned, eng, pro, slb, rap, bur, gad, gap & pro")
   }

    var hwEmbed = new discord.MessageEmbed()
        .setDescription("HuisWerk")
        .setColor("#08bf54")
        .addField("Toegevoegd door:", message.author)
        .addField("Datum:", tijdHw)
        .addField("Vak:", les)
        .addField("Huiswerk:", hwerk)
        .setTimestamp();

        var huiswerkChannel = message.guild.channels.find(`name`, "huiswerk");
        if (!huiswerkChannel) return message.guild.send("Can't find the channel.");
    
        huiswerkChannel.send(hwEmbed);

}

module.exports.help = {
    name: 'hw',
    desc: "Huiswerk Command.",
    cat: "School"
}