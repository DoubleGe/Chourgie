const discord = require("discord.js");
const lang = require("../lang.json");
const talkedRecently = new Set();

module.exports.run = async (bot, message, args) => {
    if (talkedRecently.has(message.author.id)) {
        message.channel.send(`Pfff.. :dash: Je bent veelste snel wacht **30 seconden**. ${message.author}`);
} else {
   message.channel.send(":ping_pong: Pong: " + (message.createdTimestamp - Date.now()) + "ms")
   talkedRecently.add(message.author.id);
   setTimeout(() => {
     // Removes the user from the set after a minute
     talkedRecently.delete(message.author.id);
   }, 30000);
}
}

module.exports.help = {
    name: 'ping',
    desc: "Ping de bot.",
    cat: "Overig"
}