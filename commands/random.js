const discord = require("discord.js");
const lang = require("../lang.json");

module.exports.run = async (bot, message, args) => {

    var quotes = [
        "https://cdn.discordapp.com/attachments/624502879285411851/666268186349666314/YEET.PNG",
        "https://cdn.discordapp.com/attachments/624502879285411851/666268180934557732/Chourgie_Harry_Potter.jpg",
        "**Ho Ho Ho** Santa Chourgie. \nhttps://cdn.discordapp.com/attachments/624502879285411851/666268184760025128/ChourgieChristmas.jpg",
        "https://cdn.discordapp.com/attachments/624502879285411851/666268182025338890/Chourgie_Zonnenbril.jpg",
        "Wanneer je een foto wou, maar je een tekst kreeg...",
        "**Doggo: ** https://cdn.discordapp.com/attachments/619134747465089024/666273025569587210/Puppy-aanschaffen-header-800x600.png",
        "Wie is dat? Hij is onherkenbaar...\nhttps://cdn.discordapp.com/attachments/633001822147182602/666312236821643294/Chourgie_Anno.png",
        "https://cdn.discordapp.com/attachments/653962780524675086/666313073224712203/eypri6rv2xp31.png",
        "https://cdn.discordapp.com/attachments/653962780524675086/666315191574724639/PhotoShop_Battle_Weet_nummer_niet_meer_-_Wesley_de_Graaf.png"
    ];
    var random = Math.round(Math.random() * 9);
    var quotesFinal = quotes[random]
    message.channel.send(quotesFinal);
}

module.exports.help = {
    name: 'random',
    desc: "Random.",
    cat: "Algemeen"
}