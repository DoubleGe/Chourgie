const discord = require("discord.js");
const lang = require("../lang.json");

module.exports.run = async (bot, message, args) => {

    if(!args[0]) return message.channel.send("Geef een tekst mee.")
    var text = args.join(' ');
    if(message.author.id == "310793229656260609") return message.channel.send(":confounded: Oeps... Er ging iets mis. Probeer het later nog eens.");
    //text = args[0];
    returns = [
        "Yes",
        "No",
        "Ik weet het niet zeker.",
        "Vraag het later nog een keer.",
        "Zeer waarschijnlijk",
        "Mijn antwoord is nee.",
        "Reactie is wazig, probeer opnieuw.",
        "Vooruitzicht is niet zo goed.",
        "Zeer twijfelachtig.",
        "Volgens mij wel.",
        "Goed vooruitzicht.",
        "Beter je nu niet te zeggen",
        "Het is beslist zo",
        "Ok Boomer",
        "Niet nu te voorspellen"
    ];

    var random = Math.round(Math.random() * 14);
    var reaction = returns[random]

    return message.channel.send(`**${text}?**\n:8ball:${reaction}`);


}

module.exports.help = {
    name: '8ball',
    desc: "8ball.",
    cat: "Overig"
}