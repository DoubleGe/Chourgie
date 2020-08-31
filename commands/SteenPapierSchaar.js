const discord = require("discord.js");
const botConfig = require("../botconfig.json");
const lang = require("../lang.json");

module.exports.run = async (bot, message, args) => {

    // ;sps steen/papier/schaar

    if(!args[0]) return message.reply(`Gebruik ${botConfig.prefix}sps [steen/papier/schaar].`);
    var options = ["steen", "papier", "schaar"];

    var result = options[Math.floor(Math.random()* options.length)];

    if(args[0].toUpperCase() == "STEEN"){
        if(result == "steen") {
            return message.channel.send(`Ik heb ${result} :moyai:, Gelijk spel.`);
        } else if (result == "papier"){
            return message.channel.send(`Ik heb ${result} :notepad_spiral:, Ik heb gewonnen.`);
        } else if (result == "schaar"){
            return message.channel.send(`Ik heb ${result} :scissors:, Ik heb verloren.`);
        }
    } else if(args[0].toUpperCase() == "PAPIER"){
        if(result == "steen") {
            return message.channel.send(`Ik heb ${result} :moyai:, Ik heb verloren.`);
        } else if (result == "papier"){
            return message.channel.send(`Ik heb ${result} :notepad_spiral:, Gelijk spel.`);
        } else if (result == "schaar"){
            return message.channel.send(`Ik heb ${result} :scissors:, Ik heb gewonnen.`);
        }
    } else if(args[0].toUpperCase() == "SCHAAR"){
        if(result == "steen") {
            return message.channel.send(`Ik heb ${result} :moyai:, Ik heb gewonnen.`);
        } else if (result == "papier"){
            return message.channel.send(`Ik heb ${result} :notepad_spiral:, Ik heb verloren.`);
        } else if (result == "schaar"){
            return message.channel.send(`Ik heb ${result} :scissors:, Gelijk spel.`);
        }
    }

}

module.exports.help = {
    name: 'sps',
    desc: "Speel steen papier schaar tegen mij.",
    cat: "Overig"
}