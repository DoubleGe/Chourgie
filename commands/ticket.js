const discord = require("discord.js");
const lang = require("../lang.json");

module.exports.run = async (bot, message, args) => {

    const categoryID = "728344160628899871";
    var catID;
    var botIcon = bot.user.displayAvatarURL();

    var userName = message.author.username;
    var userDiscriminator = message.author.discriminator;

    var ticketExist = false;
    message.guild.channels.cache.forEach(channel => {
        
        if(channel.name == userName.toLowerCase() + "-" + userDiscriminator){
            ticketExist = true;
            message.reply("Je hebt al een ticket open staan.");
            return;
        }

    });

    if(ticketExist) return;

    var guild = message.guild;
    if(guild.channels.cache.find(cat => cat.name.toLowerCase() === "tickets")) catID = guild.channels.cache.find(cat => cat.name.toLowerCase() === "tickets").id;
    else catID = categoryID;

    if(args[0]){
        var text = args.join(" ").slice(7);

        var embed = new discord.MessageEmbed()
        .setTitle("Ticket Created")
        .setDescription(text)
        .setFooter("Chourgie® ", botIcon)
        .setTimestamp();
    } else{
        var embed = new discord.MessageEmbed()
        .setTitle("Ticket Created")
        .setFooter("Chourgie® ", botIcon)
        .setTimestamp();
    }
    message.channel.send(embed);
    
    message.guild.channels.create(userName.toLowerCase() + "-" + userDiscriminator, {type: 'text'}).then(
        (createdChannel) => {
            createdChannel.setParent(catID).then(
                (setParent) => {
                    setParent.updateOverwrite(message.guild.roles.cache.find(x => x.name === '@everyone'),{
                        SEND_MESSAGES: false,
                        VIEW_CHANNEL: false
                    });
                    setParent.updateOverwrite(message.author.id,{
                        CREATE_INSTANT_INVITE: false,
                        READ_MESSAGES: true,
                        SEND_MESSAGES: true,
                        ATTACH_FILES: true,
                        CONNECT: true,
                        ADD_REACTIONS: true,
                        VIEW_CHANNEL: true,
                        READ_MESSAGES_HISTORY: true
                    });
                    if(message.guild.roles.cache.find(x => x.name.toLowerCase() === 'survival support')) setParent.updateOverwrite(message.guild.roles.cache.find(x => x.name.toLowerCase() === 'survival support'),{
                        CREATE_INSTANT_INVITE: false,
                        READ_MESSAGES: true,
                        SEND_MESSAGES: true,
                        ATTACH_FILES: true,
                        CONNECT: true,
                        ADD_REACTIONS: true,
                        VIEW_CHANNEL: true,
                        READ_MESSAGES_HISTORY: true
                    });

                    var ticketTopic;
                    if(args[0]) ticketTopic = args[0];
                    else ticketTopic = "geen onderwerp opgegeven.";
                    var embedParent = new discord.MessageEmbed()
                    .setTitle(`Hallo ${message.author.username}`)
                    .setDescription("Onderwerp: " + ticketTopic)
                    .setFooter("Chourgie® ", botIcon)
                    .setTimestamp();

                    setParent.send(embedParent);
                }
            ).catch(err =>{
                message.channel.send("Er ging iets fout. " + err);
            });
        }
    ).catch(err =>{
        message.channel.send("Er ging iets fout.");
    });
}

module.exports.help = {
    name: 'ticket',
    desc: "Tickets maken",
    cat: "Algemeen"
}