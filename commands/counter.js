const discord = require("discord.js");
const lang = require("../lang.json");

var counter = 0;
module.exports.run = async (bot, message, args) => {

    if(message.author.id == "357558051538206725") return message.channel.send("Nee... Ik ga voor jou niet tellen.");
    counter++;
    return message.channel.send(`Ik heb tot: **${counter}** geteld sinds mijn laatste restart!`);

}

module.exports.help = {
    name: 'count',
    desc: "Ik tel.",
    cat: "Overig"
}