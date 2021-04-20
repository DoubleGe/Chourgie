const discord = require("discord.js");

module.exports.run = async (bot, message, args) => {

    var idee = args.join(' ');
    if(!idee) return message.channel.send("Gebruik ;idee [Idee].");

    var ideeEmbed = new discord.MessageEmbed()
    .setTitle("Nieuw Idee")
    .setColor("#17b07f")
    .addField("Idee", idee)
    .addField("Bedacht door:", message.author);

    var ideeChannel = message.member.guild.channels.cache.find(channels => channels.name === "ideeën");
    if(!ideeChannel) ideeChannel = message.member.guild.channels.cache.find(channels => channels.name === "ideas");
    if(!ideeChannel) return message.channel.send("Maak een kanaal aan met de naam ideeën");

    ideeChannel.send(ideeEmbed).then(embedMessage => {
        embedMessage.react('👍');
        embedMessage.react('👎');
        embedMessage.react('🤷');
    });

}

module.exports.help = {
    name: 'idee',
    desc: "Bedenk een idee voor de server.",
    cat: "Overig"
}