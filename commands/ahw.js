const discord = require("discord.js");
const ms = require("ms");
const fs = require("fs");

//;hw [tijd] [vak] [reden]
module.exports.run = async (bot, message, args) => {

    //Server lock
    if (message.guild.id != "442743221827797012") return message.reply("Sorry, dit command is op deze server disabled.")

    //Check (Perm)
    if (!message.member.hasPermission("MANAGE_MESSAGES")) return message.reply("You don't have permission for this.");
    
   if (!args[0]) return message.reply("Gebruik ;hw **[Datum] [Vak] [Huiswerk]**.");

   var tijdHw = args[0];

   if (!args[1]) return message.reply("Voeg een vak toe.");

   var vakHw = args[1];

   var hwerk = args.join(" ").slice(13);

   if (vakHw == "rek" || vakHw == "Rek") {
       var les = "Hyltsje Altenburg - Rekenen"
   } else if (vakHw == "ned") {
       var les = "TLE - Nederlands"
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
       var les = "Frank van Vught - GameDesign"
   } else if (vakHw == "car") {
       var les = "Perry Spee, Cynthia Spier, Joran Wolters & Rubin de Bruin - CardGame"
   } else {
       return message.reply("Ik ken deze les niet \n**Lessen:** rek, ned, eng, pro, slb, rap, bur, gad, gap & car")
   }

        var huiswerkChannel = message.guild.channels.find(`name`, "huiswerk");
        if (!huiswerkChannel) return message.guild.send("Kan het kanaal niet vinden");
    
        message.channel.send("Bèta Huiswerk Toegevoegd.")
        // fs.writeFile("./huiswerk.json", JSON.stringify(les), (hwerk), (tijdHw) => {
        //     if (err) console.log(err)
        // });
        var hwList = Array[40]; 
        huiswerkChannel.send("```Bèta Huiswerk | Datum: " + tijdHw + "   | Vak: " +  les + "   | Huiswerk: " + hwerk + "```");

}

module.exports.help = {
    name: 'ahw',
    desc: "Alpha Huiswerk.",
    cat: "Hide"
}